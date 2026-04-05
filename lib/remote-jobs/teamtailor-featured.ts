/** Fetches published fully-remote jobs from Teamtailor Partner API (shared by /api/remote-jobs/featured and job detail sidebar). */

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
 */
export async function fetchTeamtailorFeaturedJobs(
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
