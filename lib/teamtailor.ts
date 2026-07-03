/**
 * Teamtailor API — Recruiter Job Feed
 *
 * Lists published jobs where the recruiter is the assigned user on the job.
 * Teamtailor stores that on the job's `user` relationship — not hiring-team
 * memberships, which may include many recruiters across the company.
 *
 *   GET /v1/jobs?filter[status]=published&include=locations,role,department,user
 *   → keep rows where job.relationships.user.id === recruiterId
 *
 * Authorization header:
 *   Authorization: Token token=YOUR_API_KEY
 *   X-Api-Version: 20161108
 *
 * Env vars:
 *   TEAMTAILOR_API_KEY — API token from Teamtailor → Settings → Integrations → API
 */

const API_VERSION = "20161108";
const API_BASE = "https://api.teamtailor.com/v1";

/** How long SSR / cached fetches reuse Teamtailor data before refetching. */
export const TEAMTAILOR_REVALIDATE_SECONDS = Number(
  process.env.TEAMTAILOR_REVALIDATE_SECONDS ?? 60
);

type FetchCacheOptions = { cache: "no-store" } | { next: { revalidate: number } };

export type WorkMode = "remote" | "onsite" | "hybrid";

export type TeamtailorJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  workMode: WorkMode;
  description: string;
  applyUrl: string;
  tags: string[];
  category: string;
};

type JsonApiResource = {
  id: string;
  type: string;
  links?: Record<string, string>;
  attributes?: Record<string, unknown>;
  relationships?: Record<
    string,
    { data?: { type: string; id: string } | { type: string; id: string }[] | null }
  >;
};

type JsonApiList = {
  data?: JsonApiResource[];
  included?: JsonApiResource[];
  links?: { next?: string | null };
};

export type TeamtailorJobsResult =
  | { ok: true; jobs: TeamtailorJob[] }
  | { ok: false; error: string };

function envString(key: string): string | undefined {
  const value = process.env[key];
  return typeof value === "string" && value.trim() !== "" ? value.trim() : undefined;
}

function authHeaders(token: string): HeadersInit {
  return {
    Authorization: `Token token=${token}`,
    "X-Api-Version": API_VERSION,
  };
}

function includedMap(included: JsonApiResource[] = []): Map<string, JsonApiResource> {
  const map = new Map<string, JsonApiResource>();
  for (const item of included) {
    map.set(`${item.type}:${item.id}`, item);
  }
  return map;
}

function isPublishedJob(item: JsonApiResource): boolean {
  const attrs = item.attributes ?? {};
  return (
    attrs["human-status"] === "published" &&
    attrs.status === "open" &&
    attrs.internal !== true
  );
}

function hasAssignedAnyRecruiter(item: JsonApiResource, recruiterIds: Set<string>): boolean {
  const recruiterRef = item.relationships?.user?.data;
  if (!recruiterRef || Array.isArray(recruiterRef)) return false;
  return recruiterRef.type === "users" && recruiterIds.has(recruiterRef.id);
}

function formatWorkMode(item: JsonApiResource): WorkMode {
  const remote = String(item.attributes?.["remote-status"] ?? "");
  if (remote === "fully") return "remote";
  if (remote === "hybrid") return "hybrid";
  return "onsite";
}

function resolveRelated(
  item: JsonApiResource,
  relation: string,
  map: Map<string, JsonApiResource>
): JsonApiResource | undefined {
  const rel = item.relationships?.[relation]?.data;
  if (!rel || Array.isArray(rel)) return undefined;
  return map.get(`${rel.type}:${rel.id}`);
}

function formatLocation(item: JsonApiResource, map: Map<string, JsonApiResource>): string {
  const locationsRel = item.relationships?.locations?.data;
  const locationIds = Array.isArray(locationsRel) ? locationsRel : [];

  for (const locRef of locationIds) {
    const loc = map.get(`${locRef.type}:${locRef.id}`);
    const attrs = loc?.attributes;
    if (!attrs) continue;

    const city = String(attrs.city ?? "").trim();
    const country = String(attrs.country ?? attrs.name ?? "").trim();
    if (city && country && city !== country) return `${city}, ${country}`;
    if (city) return city;
    if (country) return country;
  }

  const remote = String(item.attributes?.["remote-status"] ?? "");
  if (remote === "fully") return "Remote";
  if (remote === "hybrid") return "Hybrid";
  return "International";
}

function formatEmploymentType(item: JsonApiResource): string {
  const remote = String(item.attributes?.["remote-status"] ?? "");
  if (remote === "fully") return "Remote";
  if (remote === "hybrid") return "Hybrid";
  return "Full-time";
}

function formatCategory(item: JsonApiResource, map: Map<string, JsonApiResource>): string {
  const role = resolveRelated(item, "role", map);
  const department = resolveRelated(item, "department", map);
  const roleName = String(role?.attributes?.name ?? "").trim();
  const deptName = String(department?.attributes?.name ?? "").trim();
  return roleName || deptName || "Opportunities";
}

function mapJob(item: JsonApiResource, map: Map<string, JsonApiResource>): TeamtailorJob {
  const links = item.links ?? {};
  const attrs = item.attributes ?? {};
  const tags = Array.isArray(attrs.tags)
    ? attrs.tags.map((tag) => String(tag)).filter(Boolean)
    : [];

  return {
    id: String(item.id),
    title: String(attrs.title ?? "Untitled"),
    company: "Abroader",
    location: formatLocation(item, map),
    employmentType: formatEmploymentType(item),
    workMode: formatWorkMode(item),
    description: String(attrs.pitch ?? "").trim() || "Open opportunity — apply for details.",
    applyUrl: links["careersite-job-url"] ?? links["careersite-job-apply-url"] ?? "",
    tags,
    category: formatCategory(item, map),
  };
}

async function fetchPaginated(
  url: string,
  token: string,
  cacheOptions: FetchCacheOptions = { next: { revalidate: TEAMTAILOR_REVALIDATE_SECONDS } }
): Promise<JsonApiList[]> {
  const pages: JsonApiList[] = [];
  let nextUrl: string | null = url;

  while (nextUrl) {
    const res = await fetch(nextUrl, {
      headers: authHeaders(token),
      ...cacheOptions,
    });

    if (!res.ok) {
      throw new Error(`Teamtailor API ${res.status}`);
    }

    const json = (await res.json()) as JsonApiList;
    pages.push(json);
    nextUrl = json.links?.next ?? null;
  }

  return pages;
}

async function fetchJobsForRecruiterIds(
  recruiterIds: Set<string>,
  token: string,
  cacheOptions?: FetchCacheOptions
): Promise<TeamtailorJob[]> {
  const jobs: TeamtailorJob[] = [];
  const seen = new Set<string>();
  const params = new URLSearchParams({
    "filter[status]": "published",
    include: "locations,role,department,user",
    "page[size]": "30",
    "page[number]": "1",
  });

  const pages = await fetchPaginated(`${API_BASE}/jobs?${params.toString()}`, token, cacheOptions);

  for (const page of pages) {
    const included = includedMap(page.included ?? []);
    for (const item of page.data ?? []) {
      if (item.type !== "jobs") continue;
      if (!hasAssignedAnyRecruiter(item, recruiterIds)) continue;
      if (!isPublishedJob(item)) continue;

      const mapped = mapJob(item, included);
      if (!mapped.applyUrl || seen.has(mapped.id)) continue;

      seen.add(mapped.id);
      jobs.push(mapped);
    }
  }

  return jobs;
}

function sortJobsByTitle(jobs: TeamtailorJob[]): TeamtailorJob[] {
  return jobs.sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: "base" }));
}

async function fetchTeamtailorJobs(
  options: { fresh?: boolean },
  getJobs: (token: string, cacheOptions: FetchCacheOptions) => Promise<TeamtailorJob[]>
): Promise<TeamtailorJobsResult> {
  const token = envString("TEAMTAILOR_API_KEY");
  if (!token) {
    return { ok: false, error: "TEAMTAILOR_API_KEY not set" };
  }

  const cacheOptions: FetchCacheOptions = options?.fresh
    ? { cache: "no-store" }
    : { next: { revalidate: TEAMTAILOR_REVALIDATE_SECONDS } };

  try {
    const jobs = sortJobsByTitle(await getJobs(token, cacheOptions));
    return { ok: true, jobs };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Teamtailor fetch failed";
    return { ok: false, error: message };
  }
}

/** Returns published jobs where the user is the job's assigned recruiter. */
export async function fetchJobsForRecruiter(
  recruiterId: string,
  options?: { fresh?: boolean }
): Promise<TeamtailorJobsResult> {
  const recruiterIds = new Set([recruiterId]);
  return fetchTeamtailorJobs(options ?? {}, (token, cacheOptions) =>
    fetchJobsForRecruiterIds(recruiterIds, token, cacheOptions)
  );
}

/** Returns all published jobs assigned to any configured Abroader recruiter. */
export async function fetchAllJobs(options?: { fresh?: boolean }): Promise<TeamtailorJobsResult> {
  const { recruiterList } = await import("@/config/recruiters");
  const recruiterIds = new Set(recruiterList.map((r) => r.teamtailorUserId));
  return fetchTeamtailorJobs(options ?? {}, (token, cacheOptions) =>
    fetchJobsForRecruiterIds(recruiterIds, token, cacheOptions)
  );
}
