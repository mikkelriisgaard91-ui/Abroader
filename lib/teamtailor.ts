const API_VERSION = "20161108";

/** EU (default). US West accounts: set `TEAMTAILOR_API_BASE=https://api.na.teamtailor.com/v1` in env. */
function apiBase(): string {
  const raw = process.env.TEAMTAILOR_API_BASE?.trim();
  if (raw) {
    return raw.replace(/\/$/, "");
  }
  return "https://api.teamtailor.com/v1";
}

export type TeamtailorRemoteStatus = "fully" | "hybrid" | "temporary" | "none";

export type TeamtailorJob = {
  id: string;
  title: string;
  pitch: string | null;
  jobUrl: string;
  applyUrl: string;
  remoteStatus: TeamtailorRemoteStatus;
  pictureUrl: string | null;
};

type JsonApiJob = {
  id: string;
  type: string;
  links?: Record<string, string>;
  attributes?: {
    title?: string;
    pitch?: string | null;
    "remote-status"?: string;
    picture?: { standard?: string; thumb?: string } | null;
  };
};

type JsonApiList = {
  data?: JsonApiJob[];
  links?: { next?: string | null };
};

function parseRemoteStatus(value: string | undefined): TeamtailorRemoteStatus {
  switch (value) {
    case "fully":
    case "hybrid":
    case "temporary":
    case "none":
      return value;
    default:
      return "none";
  }
}

function mapJob(item: JsonApiJob): TeamtailorJob {
  const links = item.links ?? {};
  const attr = item.attributes ?? {};
  const rs = parseRemoteStatus(attr["remote-status"]);
  const picture = attr.picture;
  return {
    id: String(item.id),
    title: attr.title ?? "Untitled role",
    pitch: attr.pitch ?? null,
    jobUrl: links["careersite-job-url"] ?? "",
    applyUrl: links["careersite-job-apply-url"] ?? "",
    remoteStatus: rs,
    pictureUrl: picture?.standard ?? picture?.thumb ?? null,
  };
}

function authHeaders(token: string): HeadersInit {
  return {
    Authorization: `Token token=${token}`,
    "X-Api-Version": API_VERSION,
  };
}

async function fetchRemoteJobsForStatus(
  token: string,
  remoteStatus: TeamtailorRemoteStatus
): Promise<TeamtailorJob[]> {
  const jobs: TeamtailorJob[] = [];
  const params = new URLSearchParams();
  params.set("filter[status]", "published");
  params.set("filter[remote-status]", remoteStatus);
  params.set("page[size]", "30");
  params.set("page[number]", "1");

  let url: string | null = `${apiBase()}/jobs?${params.toString()}`;

  while (url) {
    const res = await fetch(url, {
      headers: authHeaders(token),
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Teamtailor API error ${res.status}`);
    }
    const json = (await res.json()) as JsonApiList;
    for (const item of json.data ?? []) {
      if (item.type === "jobs") {
        jobs.push(mapJob(item));
      }
    }
    const next = json.links?.next;
    url = typeof next === "string" && next.length > 0 ? next : null;
  }

  return jobs;
}

export function remoteStatusLabel(status: TeamtailorRemoteStatus): string {
  switch (status) {
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

export type RemoteJobsResult =
  | { ok: true; jobs: TeamtailorJob[] }
  | { ok: false; error: string };

/**
 * Loads published jobs where Teamtailor remote status is **fully remote** only (no hybrid or temporary).
 */
export async function fetchAllRemoteJobs(): Promise<RemoteJobsResult> {
  const token = process.env.TEAMTAILOR_API_TOKEN;
  if (!token?.trim()) {
    return { ok: false, error: "TEAMTAILOR_API_TOKEN is not configured." };
  }

  try {
    const batch = await fetchRemoteJobsForStatus(token, "fully");

    const jobs = batch.sort((a, b) =>
      a.title.localeCompare(b.title, "en", { sensitivity: "base" })
    );

    return { ok: true, jobs };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return { ok: false, error: message };
  }
}
