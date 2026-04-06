/** Fetches published fully-remote jobs from Teamtailor Partner API (shared by /api/remote-jobs/featured and job detail sidebar). */

import { unstable_cache } from "next/cache";
import { cache } from "react";

import {
  LANGUAGE_JOB_DEPARTMENT_NAMES,
  LANGUAGE_JOB_TAB_ORDER,
  type LanguageJobTabId,
} from "@/lib/remote-jobs/language-job-tabs";

export const FEATURED_TEAMTAILOR_API_VERSION = "20210218";

function envString(key: string): string | undefined {
  const v = process.env[key];
  return typeof v === "string" && v.trim() !== "" ? v.trim() : undefined;
}

function teamtailorApiToken(): string | undefined {
  return envString(["TEAMTAILOR", "API", "TOKEN"].join("_"));
}

function apiBase(): string {
  const raw = envString(["TEAMTAILOR", "API", "BASE"].join("_"));
  if (raw) return raw.replace(/\/$/, "");
  return "https://api.teamtailor.com/v1";
}

export type FeaturedJobDto = {
  id: string;
  title: string;
  locationLabel: string;
  employmentTypeLabel: string;
  applyUrl: string;
  /** Cover image from Teamtailor `attributes.picture` (standard or thumb). */
  pictureUrl: string | null;
};

/** Teamtailor featured row plus `browseId` for internal job URLs (see `/api/remote-jobs/featured`). */
export type FeaturedJobWithBrowseId = FeaturedJobDto & { browseId: string };

type JsonApiResource = {
  id: string;
  type: string;
  attributes?: Record<string, unknown>;
  links?: Record<string, string>;
  relationships?: {
    locations?: { data?: Array<{ id: string; type: string }> };
  };
};

type JsonApiDoc = {
  data?: JsonApiResource[];
  included?: JsonApiResource[];
  links?: { next?: string | null };
};

function pickString(obj: Record<string, unknown> | undefined, keys: string[]): string | undefined {
  if (!obj) return undefined;
  for (const k of keys) {
    const v = obj[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return undefined;
}

function locationNameFromAttributes(attr: Record<string, unknown>): string | undefined {
  return pickString(attr, ["name", "city", "address", "title"]);
}

function remoteStatusLabel(value: string | undefined): string {
  switch (value) {
    case "fully":
      return "Fully remote";
    case "hybrid":
      return "Hybrid";
    case "temporary":
      return "Temporarily remote";
    default:
      return "On-site";
  }
}

function pictureUrlFromAttributes(attr: Record<string, unknown>): string | null {
  const picture = attr.picture;
  if (!picture || typeof picture !== "object" || picture === null || Array.isArray(picture)) {
    return null;
  }
  const p = picture as Record<string, unknown>;
  const standard = p.standard;
  const thumb = p.thumb;
  if (typeof standard === "string" && standard.trim()) return standard.trim();
  if (typeof thumb === "string" && thumb.trim()) return thumb.trim();
  return null;
}

function buildLocationMap(included: JsonApiResource[] | undefined): Map<string, string> {
  const map = new Map<string, string>();
  for (const item of included ?? []) {
    if (item.type !== "locations") continue;
    const attr = item.attributes ?? {};
    const name = locationNameFromAttributes(attr);
    if (name) map.set(item.id, name);
  }
  return map;
}

/**
 * Teamtailor job `language-code` (or legacy keys). English-only = careersite "English" posting.
 * If the API omits language, treat as eligible so older data still surfaces.
 */
export function isEnglishTeamtailorJob(attr: Record<string, unknown>): boolean {
  const raw = attr["language-code"] ?? attr["language_code"] ?? attr["language"];
  if (raw === undefined || raw === null) return true;
  if (typeof raw !== "string") return true;
  const code = raw.trim().toLowerCase();
  if (!code) return true;
  return code === "en" || code.startsWith("en-");
}

function mapFeaturedJob(item: JsonApiResource, locationById: Map<string, string>): FeaturedJobDto | null {
  if (item.type !== "jobs") return null;
  const links = item.links ?? {};
  const attr = item.attributes ?? {};
  const title = pickString(attr, ["title"]) ?? "Untitled role";
  const applyUrl = links["careersite-job-apply-url"] ?? links["careersite-job-url"] ?? "";
  if (!applyUrl) return null;

  const rs = typeof attr["remote-status"] === "string" ? attr["remote-status"] : undefined;
  const employmentTypeLabel =
    pickString(attr, ["employment-type", "employment-type-name", "employment-type-label"]) ??
    remoteStatusLabel(rs);

  let locationLabel = pickString(attr, ["location-name", "city", "address"]);
  const locRefs = item.relationships?.locations?.data;
  if (!locationLabel && locRefs?.length) {
    const names = locRefs
      .map((ref) => locationById.get(ref.id))
      .filter((s): s is string => Boolean(s));
    if (names.length) locationLabel = names.join(", ");
  }
  if (!locationLabel) {
    locationLabel = rs === "fully" || rs === "temporary" ? "Remote" : "See listing";
  }

  return {
    id: String(item.id),
    title,
    locationLabel,
    employmentTypeLabel,
    applyUrl,
    pictureUrl: pictureUrlFromAttributes(attr),
  };
}

export type FetchTeamtailorFeaturedOptions = {
  /** Keep only jobs whose Teamtailor language is English (careersite language). */
  englishOnly?: boolean;
  /** Page size for the Teamtailor request (larger helps when englishOnly filters many out). */
  pageSize?: number;
};

export type TeamtailorFeaturedResult =
  | { ok: true; jobs: FeaturedJobDto[]; error: null }
  | { ok: false; jobs: FeaturedJobDto[]; error: string };

/**
 * Loads published fully-remote jobs from Teamtailor. Used by the featured API route and the job detail sidebar.
 * The common `{ englishOnly: true, pageSize: 30 }` path is cached across requests to speed job pages and APIs.
 */
async function fetchTeamtailorFeaturedJobsUncached(
  options: FetchTeamtailorFeaturedOptions = {}
): Promise<TeamtailorFeaturedResult> {
  const { englishOnly = false, pageSize = 9 } = options;
  const token = teamtailorApiToken();
  if (!token) {
    return {
      ok: false,
      error: "TEAMTAILOR_API_TOKEN is not configured.",
      jobs: [],
    };
  }

  const params = new URLSearchParams();
  params.set("filter[status]", "published");
  params.set("filter[remote-status]", "fully");
  params.set("page[size]", String(Math.min(30, Math.max(1, pageSize))));
  params.set("page[number]", "1");
  params.set("include", "locations");

  let url = `${apiBase()}/jobs?${params.toString()}`;

  const headers: HeadersInit = {
    Authorization: `Token token=${token}`,
    "X-Api-Version": FEATURED_TEAMTAILOR_API_VERSION,
  };

  try {
    let res = await fetch(url, { headers, cache: "no-store" });

    if (!res.ok && res.status === 400) {
      const fallbackParams = new URLSearchParams();
      fallbackParams.set("filter[status]", "published");
      fallbackParams.set("filter[remote-status]", "fully");
      fallbackParams.set("page[size]", String(Math.min(30, Math.max(1, pageSize))));
      fallbackParams.set("page[number]", "1");
      url = `${apiBase()}/jobs?${fallbackParams.toString()}`;
      res = await fetch(url, { headers, cache: "no-store" });
    }

    if (!res.ok) {
      const text = await res.text();
      return {
        ok: false,
        error: `Teamtailor API error ${res.status}: ${text.slice(0, 200)}`,
        jobs: [],
      };
    }

    const json = (await res.json()) as JsonApiDoc;
    const locationById = buildLocationMap(json.included);
    const jobs: FeaturedJobDto[] = [];

    for (const item of json.data ?? []) {
      if (item.type !== "jobs") continue;
      const attr = item.attributes ?? {};
      if (englishOnly && !isEnglishTeamtailorJob(attr)) continue;
      const mapped = mapFeaturedJob(item, locationById);
      if (mapped) jobs.push(mapped);
    }

    return { ok: true, jobs, error: null };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return { ok: false, error: message, jobs: [] };
  }
}

const teamtailorFeaturedEnglish30CrossRequest = unstable_cache(
  () => fetchTeamtailorFeaturedJobsUncached({ englishOnly: true, pageSize: 30 }),
  ["teamtailor-featured-en-30-v1"],
  { revalidate: 120 }
);

/** Same-request dedupe when job resolution + sidebar both need the English page-30 payload. */
const teamtailorFeaturedEnglish30 = cache(teamtailorFeaturedEnglish30CrossRequest);

export async function fetchTeamtailorFeaturedJobs(
  options: FetchTeamtailorFeaturedOptions = {}
): Promise<TeamtailorFeaturedResult> {
  const englishOnly = options.englishOnly ?? false;
  const pageSize = options.pageSize ?? 9;
  if (englishOnly && pageSize === 30) {
    return teamtailorFeaturedEnglish30();
  }
  return fetchTeamtailorFeaturedJobsUncached(options);
}

/**
 * Paginate GET /departments into a name→id map, then resolve aliases in list order
 * (first listed alias wins — keeps "German Speaking Jobs" ahead of broader names like "German Jobs").
 */
async function findDepartmentIdByNames(names: readonly string[]): Promise<string | null> {
  const token = teamtailorApiToken();
  if (!token) return null;

  const aliases = names.map((n) => n.trim().toLowerCase()).filter((n) => n.length > 0);
  if (aliases.length === 0) return null;

  const headers: HeadersInit = {
    Authorization: `Token token=${token}`,
    "X-Api-Version": FEATURED_TEAMTAILOR_API_VERSION,
  };

  const nameToId = new Map<string, string>();
  let url: string | null = `${apiBase()}/departments?page[size]=30&page[number]=1`;
  let pages = 0;
  const maxPages = 80;

  while (url && pages < maxPages) {
    pages += 1;
    const res = await fetch(url, { headers, cache: "no-store" });
    if (!res.ok) return null;
    const json = (await res.json()) as JsonApiDoc;
    for (const item of json.data ?? []) {
      if (item.type !== "departments") continue;
      const attr = item.attributes ?? {};
      const deptName = typeof attr.name === "string" ? attr.name.trim().toLowerCase() : "";
      if (deptName && !nameToId.has(deptName)) nameToId.set(deptName, String(item.id));
    }
    const next = json.links?.next;
    url = typeof next === "string" && next.length > 0 ? next : null;
  }

  for (const alias of aliases) {
    const id = nameToId.get(alias);
    if (id) return id;
  }

  return null;
}

/**
 * All published jobs for a Teamtailor department (any remote status). Paginates until exhausted.
 */
export async function fetchPublishedJobsForDepartment(departmentId: string): Promise<TeamtailorFeaturedResult> {
  const token = teamtailorApiToken();
  if (!token) {
    return {
      ok: false,
      error: "TEAMTAILOR_API_TOKEN is not configured.",
      jobs: [],
    };
  }

  const headers: HeadersInit = {
    Authorization: `Token token=${token}`,
    "X-Api-Version": FEATURED_TEAMTAILOR_API_VERSION,
  };

  const params = new URLSearchParams();
  params.set("filter[status]", "published");
  params.set("filter[department]", departmentId);
  params.set("page[size]", "30");
  params.set("page[number]", "1");
  params.set("include", "locations");

  let url: string | null = `${apiBase()}/jobs?${params.toString()}`;
  const jobs: FeaturedJobDto[] = [];
  let pages = 0;
  const maxPages = 200;

  try {
    while (url && pages < maxPages) {
      pages += 1;
      const res = await fetch(url, { headers, cache: "no-store" });
      if (!res.ok) {
        const text = await res.text();
        return {
          ok: false,
          error: `Teamtailor API error ${res.status}: ${text.slice(0, 200)}`,
          jobs: [],
        };
      }

      const json = (await res.json()) as JsonApiDoc;
      const locationById = buildLocationMap(json.included);
      for (const item of json.data ?? []) {
        const mapped = mapFeaturedJob(item, locationById);
        if (mapped) jobs.push(mapped);
      }

      const next = json.links?.next;
      url = typeof next === "string" && next.length > 0 ? next : null;
    }

    return { ok: true, jobs, error: null };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return { ok: false, error: message, jobs: [] };
  }
}

export type { LanguageJobTabId } from "@/lib/remote-jobs/language-job-tabs";
export {
  LANGUAGE_JOB_DEPARTMENT_NAMES,
  LANGUAGE_JOB_TAB_LABELS,
  LANGUAGE_JOB_TAB_ORDER,
} from "@/lib/remote-jobs/language-job-tabs";

const DEPARTMENT_ID_ENV_BY_TAB: Record<LanguageJobTabId, string> = {
  danish: "TEAMTAILOR_DANISH_DEPARTMENT_ID",
  swedish: "TEAMTAILOR_SWEDISH_DEPARTMENT_ID",
  norwegian: "TEAMTAILOR_NORWEGIAN_DEPARTMENT_ID",
  german: "TEAMTAILOR_GERMAN_DEPARTMENT_ID",
  dutch: "TEAMTAILOR_DUTCH_DEPARTMENT_ID",
  finnish: "TEAMTAILOR_FINNISH_DEPARTMENT_ID",
  english: "TEAMTAILOR_ENGLISH_DEPARTMENT_ID",
  french: "TEAMTAILOR_FRENCH_DEPARTMENT_ID",
  spanish: "TEAMTAILOR_SPANISH_DEPARTMENT_ID",
};

function departmentIdOverrideForTab(tab: LanguageJobTabId): string | undefined {
  return envString(DEPARTMENT_ID_ENV_BY_TAB[tab]);
}

async function fetchPublishedJobsForDepartmentTab(tab: LanguageJobTabId): Promise<TeamtailorFeaturedResult> {
  const names = LANGUAGE_JOB_DEPARTMENT_NAMES[tab];
  const override = departmentIdOverrideForTab(tab);
  const token = teamtailorApiToken();
  if (!token) {
    return { ok: false, error: "TEAMTAILOR_API_TOKEN is not configured.", jobs: [] };
  }

  const departmentId = override ?? (await findDepartmentIdByNames(names));
  if (!departmentId) {
    const tried = names.join(", ");
    return {
      ok: false,
      error: `No department matched (${tried}). Set ${DEPARTMENT_ID_ENV_BY_TAB[tab]} to the Teamtailor department id, or add the exact department name to LANGUAGE_JOB_DEPARTMENT_NAMES in language-job-tabs.ts.`,
      jobs: [],
    };
  }

  return fetchPublishedJobsForDepartment(departmentId);
}

async function fetchAllLanguageDepartmentJobsUncached(): Promise<Record<LanguageJobTabId, TeamtailorFeaturedResult>> {
  const token = teamtailorApiToken();
  if (!token) {
    const empty: TeamtailorFeaturedResult = {
      ok: false,
      error: "TEAMTAILOR_API_TOKEN is not configured.",
      jobs: [],
    };
    return Object.fromEntries(LANGUAGE_JOB_TAB_ORDER.map((id) => [id, empty])) as Record<
      LanguageJobTabId,
      TeamtailorFeaturedResult
    >;
  }

  const pairs = await Promise.all(
    LANGUAGE_JOB_TAB_ORDER.map(async (tab) => {
      const result = await fetchPublishedJobsForDepartmentTab(tab);
      return [tab, result] as const;
    })
  );

  return Object.fromEntries(pairs) as Record<LanguageJobTabId, TeamtailorFeaturedResult>;
}

const allLanguageDepartmentJobsCrossRequest = unstable_cache(
  () => fetchAllLanguageDepartmentJobsUncached(),
  ["teamtailor-all-language-dept-jobs-v2"],
  { revalidate: 180 }
);

/** All language-department job lists in one round-trip (cached ~3 min). */
export async function fetchAllLanguageDepartmentJobs(): Promise<Record<LanguageJobTabId, TeamtailorFeaturedResult>> {
  return allLanguageDepartmentJobsCrossRequest();
}

/** @deprecated Prefer fetchAllLanguageDepartmentJobs — kept for any import sites. */
export async function fetchDanishSpeakingDepartmentJobs(): Promise<TeamtailorFeaturedResult> {
  const all = await fetchAllLanguageDepartmentJobs();
  return all.danish;
}
