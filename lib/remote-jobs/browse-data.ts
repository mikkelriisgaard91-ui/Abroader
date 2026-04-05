import { createHash } from "crypto";
import { unstable_cache } from "next/cache";
import { cache } from "react";

/**
 * Aggregates remote listings from Himalayas, Remotive, Remote OK, and Jobicy.
 * Shared by `/api/remote-jobs/browse` and the job detail page.
 */

/** Max listings per board (merged then sorted). Jobicy caps `count` at 100. */
const PER_SOURCE = 150;
const JOBICY_COUNT = Math.min(PER_SOURCE, 100);

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
};

type Sortable = { job: BrowseJobDto; sortKey: number };

export function jobIdForBrowseEntry(source: string, applicationLink: string): string {
  return createHash("sha256").update(`${source}\0${applicationLink}`).digest("hex").slice(0, 20);
}

function htmlToPlainText(html: string): string {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  // Headings: isolate as their own lines (subhead detection in JobDescription).
  s = s.replace(/<h[1-6][^>]*>/gi, "\n\n");
  s = s.replace(/<\/h[1-6]>/gi, "\n\n");

  // List items: prefix so downstream treats each row as a bullet.
  s = s.replace(/<li[^>]*>/gi, "\n- ");
  s = s.replace(/<\/li>/gi, "\n");

  // Paragraphs and block breaks.
  s = s.replace(/<\/p>/gi, "\n\n");
  s = s.replace(/<p[^>]*>/gi, "\n");
  s = s.replace(/<\/(div|section|article|blockquote)>/gi, "\n\n");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<\/tr>/gi, "\n");

  s = s.replace(/<[^>]+>/g, "");

  s = s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .trim();

  if (s.length > 60_000) return `${s.slice(0, 60_000)}…`;
  return s;
}

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

async function loadHimalayas(): Promise<Sortable[]> {
  const res = await fetch(`https://himalayas.app/jobs/api?limit=${PER_SOURCE}`, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return [];
  const json: unknown = await res.json();
  const jobs = json && typeof json === "object" && "jobs" in json ? (json as { jobs: unknown }).jobs : null;
  if (!Array.isArray(jobs)) return [];
  const out: Sortable[] = [];
  for (const j of jobs) {
    if (!j || typeof j !== "object") continue;
    const o = j as Record<string, unknown>;
    const title = typeof o.title === "string" ? o.title : "";
    const applicationLink = typeof o.applicationLink === "string" ? o.applicationLink : "";
    if (!title || !applicationLink) continue;
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
    out.push({
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
    });
  }
  return out;
}

async function loadRemotive(): Promise<Sortable[]> {
  const res = await fetch("https://remotive.com/api/remote-jobs", {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return [];
  const json: unknown = await res.json();
  const jobs =
    json && typeof json === "object" && "jobs" in json ? (json as { jobs: unknown[] }).jobs : null;
  if (!Array.isArray(jobs)) return [];
  const out: Sortable[] = [];
  let n = 0;
  for (const j of jobs) {
    if (n >= PER_SOURCE) break;
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
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return [];
  const json: unknown = await res.json();
  if (!Array.isArray(json)) return [];
  const out: Sortable[] = [];
  let n = 0;
  for (const j of json) {
    if (n >= PER_SOURCE) break;
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
    headers: { Accept: "application/json" },
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
};

/** Labels returned on each job — use as `?source=` on detail URLs for a faster lookup. */
export type BrowseSourceId = "Himalayas" | "Remotive" | "Remote OK" | "Jobicy";

const SOURCE_LOADERS: Record<BrowseSourceId, () => Promise<Sortable[]>> = {
  Himalayas: loadHimalayas,
  Remotive: loadRemotive,
  "Remote OK": loadRemoteOk,
  Jobicy: loadJobicy,
};

function isBrowseSourceId(s: string): s is BrowseSourceId {
  return Object.prototype.hasOwnProperty.call(SOURCE_LOADERS, s);
}

async function fetchBrowseJobsUncached(): Promise<BrowseJobsResult> {
  const [h, r, ro, jc] = await Promise.all([loadHimalayas(), loadRemotive(), loadRemoteOk(), loadJobicy()]);

  const combined = [...h, ...r, ...ro, ...jc];
  combined.sort((a, b) => b.sortKey - a.sortKey);

  const jobs: BrowseJobDto[] = combined.map((x) => x.job);

  if (jobs.length === 0) {
    return {
      jobs: [],
      error: "Could not load listings from any source right now.",
    };
  }

  return { jobs, error: null };
}

const getBrowseJobsCached = unstable_cache(fetchBrowseJobsUncached, ["remote-jobs-browse-v1"], {
  revalidate: 180,
});

/**
 * Aggregated listings (cached ~3 min) for the browse API and job-detail fallback.
 */
export async function getBrowseJobs(): Promise<BrowseJobsResult> {
  return getBrowseJobsCached();
}

export function findBrowseJobById(jobs: BrowseJobDto[], id: string): BrowseJobDto | undefined {
  return jobs.find((j) => j.id === id);
}

/**
 * Resolves one job by id. When `sourceHint` matches the board label, only that API is fetched
 * (much faster than loading all four). Falls back to the cached full list if needed.
 * Wrapped in React `cache` so metadata + page in one request share one lookup.
 */
async function getBrowseJobByIdImpl(
  id: string,
  sourceHint?: string | null
): Promise<BrowseJobDto | null> {
  const hint = sourceHint?.trim();
  if (hint && isBrowseSourceId(hint)) {
    const sortables = await SOURCE_LOADERS[hint]();
    const jobs = sortables.map((x) => x.job);
    const found = findBrowseJobById(jobs, id);
    if (found) return found;
  }
  const { jobs } = await getBrowseJobs();
  return findBrowseJobById(jobs, id) ?? null;
}

export const getBrowseJobById = cache(getBrowseJobByIdImpl);
