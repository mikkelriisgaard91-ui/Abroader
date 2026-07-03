/**
 * Teamtailor API — Recruiter Job Feed
 *
 * Lists published jobs where the recruiter is the assigned user on the job.
 * A shared cached index is built once per revalidate window so each recruiter
 * page filters in-memory instead of re-paginating the full catalog.
 */

import { cache } from "react";
import { unstable_cache } from "next/cache";

const API_VERSION = "20161108";
const API_BASE = "https://api.teamtailor.com/v1";

/** How long SSR / cached fetches reuse Teamtailor data before refetching. */
export const TEAMTAILOR_REVALIDATE_SECONDS = Number(
  process.env.TEAMTAILOR_REVALIDATE_SECONDS ?? 60
);

export const MAX_TEAMTAILOR_PAGES = Number(process.env.MAX_TEAMTAILOR_PAGES ?? 10);

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

type JobIndex = Record<string, TeamtailorJob[]>;

type JobIndexResult =
  | { ok: true; index: JobIndex }
  | { ok: false; error: string; index: JobIndex };

function envString(key: string): string | undefined {
  const value = process.env[key];
  return typeof value === "string" && value.trim() !== "" ? value.trim() : undefined;
}

function getApiToken(): string | undefined {
  return (
    envString("TEAMTAILOR_API_KEY") ??
    envString("TEAMTAILOR_API_TOKEN") ??
    envString("Teamtailor_API")
  );
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

function assignedRecruiterId(item: JsonApiResource): string | null {
  const recruiterRef = item.relationships?.user?.data;
  if (!recruiterRef || Array.isArray(recruiterRef)) return null;
  return recruiterRef.type === "users" ? recruiterRef.id : null;
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
  let pageCount = 0;

  while (nextUrl && pageCount < MAX_TEAMTAILOR_PAGES) {
    pageCount += 1;

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

function sortJobsByTitle(jobs: TeamtailorJob[]): TeamtailorJob[] {
  return jobs.sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: "base" }));
}

function addJobToIndex(index: JobIndex, recruiterId: string, job: TeamtailorJob) {
  if (!index[recruiterId]) {
    index[recruiterId] = [];
  }
  index[recruiterId].push(job);
}

async function buildJobIndexFromApi(
  token: string,
  cacheOptions: FetchCacheOptions
): Promise<JobIndex> {
  const index: JobIndex = {};
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
      if (!isPublishedJob(item)) continue;

      const recruiterId = assignedRecruiterId(item);
      if (!recruiterId) continue;

      const mapped = mapJob(item, included);
      if (!mapped.applyUrl || seen.has(mapped.id)) continue;

      seen.add(mapped.id);
      addJobToIndex(index, recruiterId, mapped);
    }
  }

  for (const recruiterId of Object.keys(index)) {
    index[recruiterId] = sortJobsByTitle(index[recruiterId]);
  }

  return index;
}

async function loadJobIndex(options?: { fresh?: boolean }): Promise<JobIndexResult> {
  const token = getApiToken();
  if (!token) {
    return { ok: false, error: "TEAMTAILOR_API_KEY not set", index: {} };
  }

  const cacheOptions: FetchCacheOptions = options?.fresh
    ? { cache: "no-store" }
    : { next: { revalidate: TEAMTAILOR_REVALIDATE_SECONDS } };

  try {
    const index = await buildJobIndexFromApi(token, cacheOptions);
    return { ok: true, index };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Teamtailor fetch failed";
    return { ok: false, error: message, index: {} };
  }
}

const getCachedJobIndex = unstable_cache(
  async (): Promise<JobIndexResult> => loadJobIndex(),
  ["teamtailor-published-job-index"],
  { revalidate: TEAMTAILOR_REVALIDATE_SECONDS }
);

/** Shared job index — one paginated fetch per revalidate window. */
export const getPublishedJobIndex = cache(
  async (options?: { fresh?: boolean }): Promise<JobIndexResult> => {
    if (options?.fresh) {
      return loadJobIndex({ fresh: true });
    }
    return getCachedJobIndex();
  }
);

function jobsForRecruiter(index: JobIndex, recruiterId: string): TeamtailorJob[] {
  return index[recruiterId] ?? [];
}

function allJobsFromIndex(index: JobIndex, recruiterIds: Set<string>): TeamtailorJob[] {
  const jobs: TeamtailorJob[] = [];
  const seen = new Set<string>();

  for (const recruiterId of recruiterIds) {
    for (const job of jobsForRecruiter(index, recruiterId)) {
      if (seen.has(job.id)) continue;
      seen.add(job.id);
      jobs.push(job);
    }
  }

  return sortJobsByTitle(jobs);
}

/** Returns published jobs where the user is the job's assigned recruiter. */
export async function fetchJobsForRecruiter(
  recruiterId: string,
  options?: { fresh?: boolean }
): Promise<TeamtailorJobsResult> {
  const result = await getPublishedJobIndex(options);
  if (!result.ok) {
    return { ok: false, error: result.error };
  }
  return { ok: true, jobs: jobsForRecruiter(result.index, recruiterId) };
}

/** Returns all published jobs assigned to any configured Abroader recruiter. */
export async function fetchAllJobs(options?: { fresh?: boolean }): Promise<TeamtailorJobsResult> {
  const { recruiterList } = await import("@/config/recruiters");
  const recruiterIds = new Set(recruiterList.map((r) => r.teamtailorUserId));
  const result = await getPublishedJobIndex(options);
  if (!result.ok) {
    return { ok: false, error: result.error };
  }
  return { ok: true, jobs: allJobsFromIndex(result.index, recruiterIds) };
}

export type TeamtailorUserProfile = {
  id: string;
  name: string;
  firstName: string;
  title: string;
  email: string;
  photoUrl: string;
  linkedIn: string;
  whatsappUrl: string;
  descriptionHtml: string;
};

function parseTeamtailorUser(resource: JsonApiResource): TeamtailorUserProfile {
  const attrs = resource.attributes ?? {};
  const name = String(attrs.name ?? "").trim();
  const phone = String(attrs.phone ?? "").trim();
  const picture = attrs.picture as { standard?: string } | undefined;

  return {
    id: resource.id,
    name,
    firstName: name.split(/\s+/)[0] || name,
    title: String(attrs.title ?? "").trim(),
    email: String(attrs.email ?? "").trim(),
    photoUrl: String(picture?.standard ?? "").trim(),
    linkedIn: String(attrs["linkedin-profile"] ?? "").trim(),
    whatsappUrl: phone ? `https://wa.me/${phone.replace(/\D/g, "")}` : "",
    descriptionHtml: String(attrs.description ?? "").trim(),
  };
}

async function fetchTeamtailorUserResource(
  userId: string,
  token: string,
  cacheOptions: FetchCacheOptions
): Promise<JsonApiResource | null> {
  const direct = await fetch(`${API_BASE}/users/${userId}`, {
    headers: authHeaders(token),
    ...cacheOptions,
  });

  if (direct.ok) {
    const json = (await direct.json()) as { data?: JsonApiResource };
    if (json.data?.type === "users") return json.data;
  }

  return findTeamtailorUserInPublishedJobs(token, cacheOptions, (user) => user.id === userId);
}

async function findTeamtailorUserInPublishedJobs(
  token: string,
  cacheOptions: FetchCacheOptions,
  match: (user: JsonApiResource) => boolean
): Promise<JsonApiResource | null> {
  let nextUrl: string | null =
    `${API_BASE}/jobs?filter[status]=published&include=user&page[size]=30`;
  let pageCount = 0;

  while (nextUrl && pageCount < MAX_TEAMTAILOR_PAGES) {
    pageCount += 1;
    const res = await fetch(nextUrl, { headers: authHeaders(token), ...cacheOptions });
    if (!res.ok) break;

    const json = (await res.json()) as JsonApiList;
    const found = (json.included ?? []).find((u) => u.type === "users" && match(u));
    if (found) return found;

    nextUrl = json.links?.next ?? null;
  }

  return null;
}

async function resolveTeamtailorUserId(
  userId: string,
  email: string | undefined,
  token: string,
  cacheOptions: FetchCacheOptions
): Promise<string> {
  if (userId) return userId;
  if (!email) return "";

  const normalizedEmail = email.trim().toLowerCase();
  const user = await findTeamtailorUserInPublishedJobs(
    token,
    cacheOptions,
    (resource) => String(resource.attributes?.email ?? "").trim().toLowerCase() === normalizedEmail
  );

  return user?.id ?? "";
}

async function loadTeamtailorUser(
  userId: string,
  email?: string
): Promise<TeamtailorUserProfile | null> {
  const token = getApiToken();
  if (!token) return null;

  const cacheOptions: FetchCacheOptions = {
    next: { revalidate: TEAMTAILOR_REVALIDATE_SECONDS },
  };

  try {
    const resolvedId = await resolveTeamtailorUserId(userId, email, token, cacheOptions);
    if (!resolvedId) return null;

    const resource = await fetchTeamtailorUserResource(resolvedId, token, cacheOptions);
    return resource ? parseTeamtailorUser(resource) : null;
  } catch {
    return null;
  }
}

const getCachedTeamtailorUser = unstable_cache(
  async (userId: string, email: string): Promise<TeamtailorUserProfile | null> =>
    loadTeamtailorUser(userId, email || undefined),
  ["teamtailor-user-profile"],
  { revalidate: TEAMTAILOR_REVALIDATE_SECONDS }
);

/** Teamtailor user profile — falls back to job includes when direct user fetch is blocked. */
export const fetchTeamtailorUser = cache(
  async (userId: string, email?: string): Promise<TeamtailorUserProfile | null> => {
    if (!userId && !email) return null;
    return getCachedTeamtailorUser(userId, email ?? "");
  }
);
