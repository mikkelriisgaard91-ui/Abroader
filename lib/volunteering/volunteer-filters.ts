import type { FeaturedJobDto } from "@/lib/remote-jobs/teamtailor-featured";
import { LOCATION_KEYWORDS, type LocationRegionFilter } from "@/lib/remote-jobs/job-filters";

export type VolunteerKindFilter =
  | "all"
  | "conservation"
  | "community"
  | "education"
  | "healthcare"
  | "animal"
  | "youth"
  | "other";

const KIND_KEYWORDS: Record<Exclude<VolunteerKindFilter, "all" | "other">, string[]> = {
  conservation: [
    "conservation",
    "wildlife",
    "marine",
    "forest",
    "reforestation",
    "climate",
    "environment",
    "ecology",
    "nature reserve",
    "national park",
  ],
  community: [
    "community",
    "social",
    "empowerment",
    "outreach",
    "local development",
    "rural development",
  ],
  education: ["teach", "school", "education", "tutor", "literacy", "classroom", "english teaching", "esl"],
  healthcare: ["health", "medical", "clinic", "nurse", "hospital", "care", "mental health"],
  animal: ["animal", "shelter", "rescue", "veterinary", "dog", "cat", "sanctuary"],
  youth: ["youth", "children", "kids", "camp", "orphan", "young people"],
};

const SPECIFIC_KINDS = Object.keys(KIND_KEYWORDS) as Exclude<VolunteerKindFilter, "all" | "other">[];

function volunteerSearchText(job: FeaturedJobDto): string {
  return `${job.title} ${job.employmentTypeLabel}`.toLowerCase();
}

function matchesVolunteerKindKeyword(
  job: FeaturedJobDto,
  kind: Exclude<VolunteerKindFilter, "all" | "other">
): boolean {
  const text = volunteerSearchText(job);
  return KIND_KEYWORDS[kind].some((kw) => text.includes(kw));
}

/** Whether a listing matches the selected kind of volunteering (keyword match on title + role type). */
export function featuredJobMatchesVolunteerKind(job: FeaturedJobDto, kind: VolunteerKindFilter): boolean {
  if (kind === "all") return true;
  if (kind === "other") {
    return !SPECIFIC_KINDS.some((k) => matchesVolunteerKindKeyword(job, k));
  }
  return matchesVolunteerKindKeyword(job, kind);
}

function featuredLocationText(job: FeaturedJobDto): string {
  return job.locationLabel.toLowerCase();
}

function isWorldwideFeaturedLocation(job: FeaturedJobDto): boolean {
  const loc = featuredLocationText(job);
  return (
    /\b(remote|worldwide|global|anywhere|international)\b/.test(loc) ||
    loc.includes("world wide") ||
    loc === "remote"
  );
}

/**
 * Region filter on Teamtailor `locationLabel` (same keyword buckets as remote job browse).
 */
export function featuredJobMatchesLocationRegion(job: FeaturedJobDto, region: LocationRegionFilter): boolean {
  if (region === "all") return true;
  const loc = featuredLocationText(job);
  if (region === "worldwide") return isWorldwideFeaturedLocation(job);
  if (isWorldwideFeaturedLocation(job)) return false;
  const keywords = LOCATION_KEYWORDS[region];
  return keywords.some((kw) => loc.includes(kw.trim()));
}
