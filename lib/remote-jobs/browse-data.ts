import { unstable_cache } from "next/cache";
import { cache } from "react";
import { htmlToPlainText } from "@/lib/html-to-plain";
import { jobIdForBrowseEntry } from "@/lib/remote-jobs/browse-job-id";
import { jobMatchesRole, type RoleFilter } from "@/lib/remote-jobs/job-filters";
import { fetchTeamtailorFeaturedJobs } from "@/lib/remote-jobs/teamtailor-featured";

/**
 * Aggregates remote listings from Himalayas, Remotive, Remote OK, and Jobicy.
 * Shared by `/api/remote-jobs/browse` and the job detail page.
 */

/** Himalayas browse API: max 20 per request; paginate with offset. */
const HIMALAYAS_PAGE_SIZE = 20;
/** Cap Himalayas rows per aggregate fetch (rate limits + latency). */
const HIMALAYAS_MAX_JOBS = 120;
const HIMALAYAS_MAX_PAGES = 8;
/** Throttle between pages to avoid 429s; keep as low as practical for TTFB. */
const HIMALAYAS_PAGE_DELAY_MS = 65;

/** Jobicy API caps `count` at 100 per request. */
const JOBICY_COUNT = 70;

/** Target listings after dedupe + role mix (large list without oversized payloads). */
const TARGET_BROWSE_JOBS = 220;

/** Safety caps so a single source cannot dominate memory/response size. */
const REMOTIVE_MAX_JOBS = 4000;
const REMOTE_OK_MAX_JOBS = 800;

/** Browse payload: seniority matching uses at most 800 chars of description. */
const BROWSE_DESCRIPTION_MAX_CHARS = 800;

/** Public boards sometimes throttle anonymous requests; identify the app on outbound fetches. */
const BROWSE_OUTBOUND_HEADERS: HeadersInit = {
  Accept: "application/json",
  "User-Agent": "Abroader/1.0 (+https://abroader.com)",
};

export type BrowseBoardSource = "Himalayas" | "Remotive" | "Remote OK" | "Jobicy";

async function guardBoardLoad(
  fn: () => Promise<Sortable[]>
): Promise<{ sortables: Sortable[]; error?: string }> {
  try {
    const sortables = await fn();
    return { sortables };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { sortables: [], error: msg };
  }
}

export type BrowseJobDto = {
  /** Stable id from source + application link (for detail URLs). */
  id: string;
  title: string;
  companyName: string;
  employmentType: string;
  locationRestrictions: string[];
  applicationLink: string;
  salary?: string;
  source: string;
  /** Plain text from provider HTML/markdown (optional). */
  descriptionPlain?: string;
  /** Publication time (ms) from the job board when available; omit or 0 if unknown. */
  postedAtMs?: number;
};

type Sortable = { job: BrowseJobDto; sortKey: number };

/**
 * First matching role wins for round-robin buckets — order places specific roles before broad
 * keywords (e.g. `data` before `finance-ops` so "Data Analyst" maps to data).
 */
const PRIMARY_ROLE_BUCKET_ORDER: Exclude<RoleFilter, "all">[] = [
  "engineering",
  "data",
  "product-strategy",
  "design",
  "marketing",
  "sales",
  "customer-success",
  "content",
  "hr",
  "legal",
  "healthcare",
  "finance-ops",
];

function minimalJobForRoleProbe(title: string): BrowseJobDto {
  return {
    id: "_",
    title,
    companyName: "",
    employmentType: "Full-time",
    locationRestrictions: [],
    applicationLink: "https://example.invalid/",
    source: "Himalayas",
  };
}

function inferPrimaryBrowseRole(title: string): Exclude<RoleFilter, "all"> | "other" {
  const minimal = minimalJobForRoleProbe(title);
  for (const role of PRIMARY_ROLE_BUCKET_ORDER) {
    if (jobMatchesRole(minimal, role)) return role;
  }
  return "other";
}

export { jobIdForBrowseEntry };

function optionalPlainFromHtml(value: unknown): string | undefined {
  if (typeof value !== "string" || !value.trim()) return undefined;
  const t = htmlToPlainText(value);
  return t || undefined;
}

function titleCaseEmployment(raw: string): string {
  const s = raw.trim();
  if (!s) return "Remote";
  return s
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function remoteOkEmploymentType(tags: unknown): string {
  if (!Array.isArray(tags)) return "Full-time";
  const t = tags.map((x) => String(x).toLowerCase());
  if (t.some((x) => x.includes("freelance") || x.includes("contract"))) return "Contract";
  if (t.some((x) => x.includes("part-time") || x.includes("part time"))) return "Part-time";
  if (t.some((x) => x.includes("intern"))) return "Internship";
  if (t.some((x) => x.includes("volunteer"))) return "Volunteer";
  if (t.some((x) => x.includes("full-time") || x.includes("full time"))) return "Full-time";
  return "Full-time";
}

function parseTimeMs(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value < 1e12 ? value * 1000 : value;
  }
  if (typeof value === "string") {
    const ms = Date.parse(value);
    if (!Number.isNaN(ms)) return ms;
  }
  return 0;
}

function jobicySalary(j: Record<string, unknown>): string | undefined {
  const min = j.salaryMin;
  const max = j.salaryMax;
  const cur = typeof j.salaryCurrency === "string" ? j.salaryCurrency : "USD";
  const period =
    j.salaryPeriod === "yearly"
      ? "/yr"
      : typeof j.salaryPeriod === "string"
        ? `/${j.salaryPeriod}`
        : "";
  if (typeof min === "number" && typeof max === "number" && min > 0 && max > 0) {
    return `${cur} ${min.toLocaleString("en-US")}–${max.toLocaleString("en-US")}${period}`;
  }
  if (typeof min === "number" && min > 0) return `${cur} ${min.toLocaleString("en-US")}+${period}`;
  if (typeof max === "number" && max > 0) return `${cur} up to ${max.toLocaleString("en-US")}${period}`;
  return undefined;
}

function withId(job: Omit<BrowseJobDto, "id">): BrowseJobDto {
  return {
    ...job,
    id: jobIdForBrowseEntry(job.source, job.applicationLink),
  };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function dedupeApplicationLinkKey(applicationLink: string): string {
  const raw = applicationLink.trim();
  try {
    const u = new URL(raw);
    return `${u.hostname.replace(/^www\./, "")}${u.pathname}`.toLowerCase();
  } catch {
    return raw.toLowerCase();
  }
}

function truncateDescriptionForBrowse(plain: string | undefined): string | undefined {
  if (!plain) return undefined;
  if (plain.length <= BROWSE_DESCRIPTION_MAX_CHARS) return plain;
  return `${plain.slice(0, BROWSE_DESCRIPTION_MAX_CHARS).trimEnd()}…`;
}

function himalayasRecordToSortable(o: Record<string, unknown>): Sortable | null {
  const title = typeof o.title === "string" ? o.title : "";
  const applicationLink = typeof o.applicationLink === "string" ? o.applicationLink : "";
  if (!title || !applicationLink) return null;
  const companyName = typeof o.companyName === "string" ? o.companyName : "";
  const employmentType =
    typeof o.employmentType === "string" && o.employmentType.trim()
      ? o.employmentType
      : "Full-time";
  const locationRestrictions = Array.isArray(o.locationRestrictions)
    ? o.locationRestrictions.filter((x): x is string => typeof x === "string")
    : [];
  let salary: string | undefined;
  const minS = o.minSalary;
  const maxS = o.maxSalary;
  if (typeof minS === "number" || typeof maxS === "number") {
    const parts: string[] = [];
    if (typeof minS === "number") parts.push(String(minS));
    if (typeof maxS === "number") parts.push(String(maxS));
    if (parts.length) salary = parts.join("–");
  }
  const descHtml =
    typeof o.description === "string" && o.description.trim()
      ? o.description
      : typeof o.excerpt === "string"
        ? o.excerpt
        : "";
  const descriptionPlain = optionalPlainFromHtml(descHtml);
  return {
    sortKey: parseTimeMs(o.pubDate),
    job: withId({
      title,
      companyName,
      employmentType,
      locationRestrictions,
      applicationLink,
      salary,
      source: "Himalayas",
      descriptionPlain,
    }),
  };
}

async function loadHimalayas(): Promise<Sortable[]> {
  const out: Sortable[] = [];
  let offset = 0;
  let pages = 0;

  while (out.length < HIMALAYAS_MAX_JOBS && pages < HIMALAYAS_MAX_PAGES) {
    const url = `https://himalayas.app/jobs/api?limit=${HIMALAYAS_PAGE_SIZE}&offset=${offset}`;
    let res: Response | null = null;
    for (let attempt = 0; attempt < 5; attempt++) {
      res = await fetch(url, {
        cache: "no-store",
        headers: BROWSE_OUTBOUND_HEADERS,
      });
      if (res.status === 429) {
        await delay(400 * (attempt + 1));
        continue;
      }
      break;
    }
    if (!res || !res.ok) break;

    const json: unknown = await res.json();
    const jobs =
      json && typeof json === "object" && "jobs" in json ? (json as { jobs: unknown }).jobs : null;
    if (!Array.isArray(jobs) || jobs.length === 0) break;

    for (const j of jobs) {
      if (!j || typeof j !== "object") continue;
      const s = himalayasRecordToSortable(j as Record<string, unknown>);
      if (s) out.push(s);
    }

    if (jobs.length < HIMALAYAS_PAGE_SIZE) break;
    offset += HIMALAYAS_PAGE_SIZE;
    pages += 1;
    await delay(HIMALAYAS_PAGE_DELAY_MS);
  }

  return out;
}

/**
 * Paginates Himalayas until the browse id is found (or pages exhausted). Avoids loading the full
 * Himalayas crawl when the listing is on an early page.
 */
async function findHimalayasJobByBrowseId(targetId: string): Promise<BrowseJobDto | undefined> {
  let offset = 0;
  let pages = 0;

  while (pages < HIMALAYAS_MAX_PAGES) {
    const url = `https://himalayas.app/jobs/api?limit=${HIMALAYAS_PAGE_SIZE}&offset=${offset}`;
    let res: Response | null = null;
    for (let attempt = 0; attempt < 5; attempt++) {
      res = await fetch(url, {
        cache: "no-store",
        headers: BROWSE_OUTBOUND_HEADERS,
      });
      if (res.status === 429) {
        await delay(400 * (attempt + 1));
        continue;
      }
      break;
    }
    if (!res || !res.ok) break;

    const json: unknown = await res.json();
    const jobs =
      json && typeof json === "object" && "jobs" in json ? (json as { jobs: unknown }).jobs : null;
    if (!Array.isArray(jobs) || jobs.length === 0) break;

    for (const j of jobs) {
      if (!j || typeof j !== "object") continue;
      const s = himalayasRecordToSortable(j as Record<string, unknown>);
      if (s && s.job.id === targetId) return s.job;
    }

    if (jobs.length < HIMALAYAS_PAGE_SIZE) break;
    offset += HIMALAYAS_PAGE_SIZE;
    pages += 1;
    await delay(HIMALAYAS_PAGE_DELAY_MS);
  }

  return undefined;
}

async function loadRemotive(): Promise<Sortable[]> {
  const res = await fetch("https://remotive.com/api/remote-jobs", {
    cache: "no-store",
    headers: BROWSE_OUTBOUND_HEADERS,
  });
  if (!res.ok) return [];
  const json: unknown = await res.json();
  const jobs =
    json && typeof json === "object" && "jobs" in json ? (json as { jobs: unknown[] }).jobs : null;
  if (!Array.isArray(jobs)) return [];
  const out: Sortable[] = [];
  let n = 0;
  for (const j of jobs) {
    if (n >= REMOTIVE_MAX_JOBS) break;
    if (!j || typeof j !== "object") continue;
    const o = j as Record<string, unknown>;
    const title = typeof o.title === "string" ? o.title : "";
    const url = typeof o.url === "string" ? o.url : "";
    if (!title || !url) continue;
    const companyName = typeof o.company_name === "string" ? o.company_name : "";
    const jobType = typeof o.job_type === "string" ? o.job_type : "";
    const employmentType = titleCaseEmployment(jobType.replace(/_/g, " "));
    const locRaw = typeof o.candidate_required_location === "string" ? o.candidate_required_location : "";
    const locationRestrictions = locRaw
      .split(/[,;]/)
      .map((s) => s.trim())
      .filter(Boolean);
    const salary = typeof o.salary === "string" && o.salary.trim() ? o.salary.trim() : undefined;
    const descriptionPlain = optionalPlainFromHtml(o.description);
    out.push({
      sortKey: parseTimeMs(o.publication_date),
      job: withId({
        title,
        companyName,
        employmentType,
        locationRestrictions,
        applicationLink: url,
        salary,
        source: "Remotive",
        descriptionPlain,
      }),
    });
    n += 1;
  }
  return out;
}

async function loadRemoteOk(): Promise<Sortable[]> {
  const res = await fetch("https://remoteok.com/api", {
    cache: "no-store",
    headers: BROWSE_OUTBOUND_HEADERS,
  });
  if (!res.ok) return [];
  const json: unknown = await res.json();
  if (!Array.isArray(json)) return [];
  const out: Sortable[] = [];
  let n = 0;
  for (const j of json) {
    if (n >= REMOTE_OK_MAX_JOBS) break;
    if (!j || typeof j !== "object") continue;
    const o = j as Record<string, unknown>;
    if (!("position" in o) || typeof o.position !== "string") continue;
    const applyUrl =
      typeof o.apply_url === "string"
        ? o.apply_url
        : typeof o.url === "string"
          ? o.url
          : "";
    if (!applyUrl) continue;
    const title = o.position;
    const companyName = typeof o.company === "string" ? o.company : "";
    const employmentType = remoteOkEmploymentType(o.tags);
    const loc = typeof o.location === "string" ? o.location.trim() : "";
    const locationRestrictions = loc ? [loc] : [];
    let salary: string | undefined;
    const smin = o.salary_min;
    const smax = o.salary_max;
    if (typeof smin === "number" && typeof smax === "number" && smin > 0 && smax > 0) {
      salary = `$${smin.toLocaleString("en-US")}–$${smax.toLocaleString("en-US")}`;
    }
    const descriptionPlain = optionalPlainFromHtml(o.description);
    out.push({
      sortKey: parseTimeMs(o.date),
      job: withId({
        title,
        companyName,
        employmentType,
        locationRestrictions,
        applicationLink: applyUrl,
        salary,
        source: "Remote OK",
        descriptionPlain,
      }),
    });
    n += 1;
  }
  return out;
}

async function loadJobicy(): Promise<Sortable[]> {
  const res = await fetch(`https://jobicy.com/api/v2/remote-jobs?count=${JOBICY_COUNT}`, {
    cache: "no-store",
    headers: BROWSE_OUTBOUND_HEADERS,
  });
  if (!res.ok) return [];
  const json: unknown = await res.json();
  const jobs =
    json && typeof json === "object" && "jobs" in json ? (json as { jobs: unknown[] }).jobs : null;
  if (!Array.isArray(jobs)) return [];
  const out: Sortable[] = [];
  for (const j of jobs) {
    if (!j || typeof j !== "object") continue;
    const o = j as Record<string, unknown>;
    const title = typeof o.jobTitle === "string" ? o.jobTitle : "";
    const url = typeof o.url === "string" ? o.url : "";
    if (!title || !url) continue;
    const companyName = typeof o.companyName === "string" ? o.companyName : "";
    let employmentType = "Full-time";
    if (Array.isArray(o.jobType) && o.jobType.length > 0) {
      const first = o.jobType.find((x) => typeof x === "string");
      if (typeof first === "string") employmentType = first;
    }
    const geo = typeof o.jobGeo === "string" ? o.jobGeo.trim() : "";
    const locationRestrictions = geo ? [geo] : [];
    const salary = jobicySalary(o);
    const descHtml =
      typeof o.jobDescription === "string" && o.jobDescription.trim()
        ? o.jobDescription
        : typeof o.jobExcerpt === "string"
          ? o.jobExcerpt
          : "";
    const descriptionPlain = optionalPlainFromHtml(descHtml);
    out.push({
      sortKey: parseTimeMs(o.pubDate),
      job: withId({
        title,
        companyName,
        employmentType,
        locationRestrictions,
        applicationLink: url,
        salary,
        source: "Jobicy",
        descriptionPlain,
      }),
    });
  }
  return out;
}

export type BrowseJobsResult = {
  jobs: BrowseJobDto[];
  error: string | null;
  /** Populated when at least one public board threw or failed; useful in development. */
  sourceErrors?: Partial<Record<BrowseBoardSource, string>>;
};

/** Labels returned on each job — use as `?source=` on detail URLs for a faster lookup. */
export type BrowseSourceId = "Himalayas" | "Remotive" | "Remote OK" | "Jobicy" | "Teamtailor";

type SourceLoaderKey = Exclude<BrowseSourceId, "Himalayas">;

async function loadTeamtailorAsSortables(): Promise<Sortable[]> {
  const tt = await fetchTeamtailorFeaturedJobs({ englishOnly: true, pageSize: 30 });
  const { featuredJobToBrowseDto } = await import("@/lib/remote-jobs/featured-as-browse");
  if (!tt.ok) return [];
  return tt.jobs.map((j) => ({ sortKey: 0, job: featuredJobToBrowseDto(j) }));
}

const SOURCE_LOADERS: Record<SourceLoaderKey, () => Promise<Sortable[]>> = {
  Remotive: loadRemotive,
  "Remote OK": loadRemoteOk,
  Jobicy: loadJobicy,
  Teamtailor: loadTeamtailorAsSortables,
};

function isSourceLoaderKey(s: string): s is SourceLoaderKey {
  return Object.prototype.hasOwnProperty.call(SOURCE_LOADERS, s);
}

function dedupeSortables(sortables: Sortable[]): Sortable[] {
  const byKey = new Map<string, Sortable>();
  for (const s of sortables) {
    const key = dedupeApplicationLinkKey(s.job.applicationLink);
    const prev = byKey.get(key);
    if (!prev || s.sortKey > prev.sortKey) {
      byKey.set(key, s);
    }
  }
  return Array.from(byKey.values()).sort((a, b) => b.sortKey - a.sortKey);
}

function roundRobinByPrimaryRole(sortables: Sortable[], target: number): Sortable[] {
  type Bucket = Exclude<RoleFilter, "all"> | "other";
  const order: Bucket[] = [...PRIMARY_ROLE_BUCKET_ORDER, "other"];
  const buckets = new Map<Bucket, Sortable[]>();
  for (const k of order) {
    buckets.set(k, []);
  }

  for (const s of sortables) {
    const r = inferPrimaryBrowseRole(s.job.title);
    const b: Bucket = r === "other" ? "other" : r;
    buckets.get(b)!.push(s);
  }
  for (const arr of buckets.values()) {
    arr.sort((a, b) => b.sortKey - a.sortKey);
  }

  const result: Sortable[] = [];
  let round = 0;
  for (;;) {
    let addedThisRound = false;
    for (const k of order) {
      const arr = buckets.get(k)!;
      if (arr.length > round) {
        result.push(arr[round]!);
        addedThisRound = true;
        if (result.length >= target) {
          return result;
        }
      }
    }
    if (!addedThisRound) break;
    round += 1;
  }

  const used = new Set(result.map((s) => s.job.id));
  const rest = sortables
    .filter((s) => !used.has(s.job.id))
    .sort((a, b) => b.sortKey - a.sortKey);
  for (const s of rest) {
    if (result.length >= target) break;
    result.push(s);
  }
  return result;
}

function sortablesToBrowseDtos(sortables: Sortable[]): BrowseJobDto[] {
  return sortables.map((x) => ({
    ...x.job,
    postedAtMs: x.sortKey > 0 ? x.sortKey : undefined,
    descriptionPlain: truncateDescriptionForBrowse(x.job.descriptionPlain),
  }));
}

function collectSourceErrors(
  entries: [BrowseBoardSource, { sortables: Sortable[]; error?: string }][]
): Partial<Record<BrowseBoardSource, string>> | undefined {
  const out: Partial<Record<BrowseBoardSource, string>> = {};
  for (const [name, { error }] of entries) {
    if (error) out[name] = error;
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

async function fetchBrowseJobsUncached(): Promise<BrowseJobsResult> {
  const [h, r, ro, jc] = await Promise.all([
    guardBoardLoad(loadHimalayas),
    guardBoardLoad(loadRemotive),
    guardBoardLoad(loadRemoteOk),
    guardBoardLoad(loadJobicy),
  ]);

  const sourceErrors = collectSourceErrors([
    ["Himalayas", h],
    ["Remotive", r],
    ["Remote OK", ro],
    ["Jobicy", jc],
  ]);

  const combined = [...h.sortables, ...r.sortables, ...ro.sortables, ...jc.sortables];
  combined.sort((a, b) => b.sortKey - a.sortKey);

  const deduped = dedupeSortables(combined);
  const mixed = roundRobinByPrimaryRole(deduped, TARGET_BROWSE_JOBS);
  let jobs = sortablesToBrowseDtos(mixed);

  if (jobs.length === 0) {
    const tt = await guardBoardLoad(loadTeamtailorAsSortables);
    if (tt.sortables.length > 0) {
      const ttDeduped = dedupeSortables(tt.sortables);
      const ttMixed = roundRobinByPrimaryRole(ttDeduped, TARGET_BROWSE_JOBS);
      jobs = sortablesToBrowseDtos(ttMixed);
      return { jobs, error: null, sourceErrors };
    }
    return {
      jobs: [],
      error: "Could not load listings from any source right now.",
      sourceErrors,
    };
  }

  return { jobs, error: null, sourceErrors };
}

const getBrowseJobsCached = unstable_cache(fetchBrowseJobsUncached, ["remote-jobs-browse-v5"], {
  revalidate: 180,
});

/**
 * Aggregated listings (cached ~3 min when non-empty) for the browse API and job-detail fallback.
 * Empty aggregates are not served from cache alone: a follow-up uncached fetch avoids pinning
 * a transient “all sources failed” result for the full revalidate window.
 */
export async function getBrowseJobs(): Promise<BrowseJobsResult> {
  const cached = await getBrowseJobsCached();
  if (cached.jobs.length > 0) {
    return cached;
  }
  return fetchBrowseJobsUncached();
}

export function findBrowseJobById(jobs: BrowseJobDto[], id: string): BrowseJobDto | undefined {
  return jobs.find((j) => j.id === id);
}

/**
 * Resolves one job by id. When `sourceHint` matches the board label, only that source is queried
 * (Himalayas paginates until found; Teamtailor uses one Partner API call). Falls back to the cached
 * full aggregate if needed.
 * Wrapped in React `cache` so metadata + page in one request share one lookup.
 */
async function getBrowseJobByIdImpl(
  id: string,
  sourceHint?: string | null
): Promise<BrowseJobDto | null> {
  const hint = sourceHint?.trim();
  if (hint === "Himalayas") {
    const fromHimalayas = await findHimalayasJobByBrowseId(id);
    if (fromHimalayas) return fromHimalayas;
  } else if (hint && isSourceLoaderKey(hint)) {
    const sortables = await SOURCE_LOADERS[hint]();
    const jobs = sortables.map((x) => x.job);
    const found = findBrowseJobById(jobs, id);
    if (found) return found;
  }
  const { jobs } = await getBrowseJobs();
  const fromBrowse = findBrowseJobById(jobs, id);
  if (fromBrowse) return fromBrowse;

  const { featuredJobToBrowseDto } = await import("@/lib/remote-jobs/featured-as-browse");
  const tt = await fetchTeamtailorFeaturedJobs({ englishOnly: true, pageSize: 30 });
  const mapped = tt.jobs.map(featuredJobToBrowseDto);
  return findBrowseJobById(mapped, id) ?? null;
}

export const getBrowseJobById = cache(getBrowseJobByIdImpl);
