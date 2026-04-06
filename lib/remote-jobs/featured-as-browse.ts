import type { BrowseJobDto } from "@/lib/remote-jobs/browse-data";
import { jobIdForBrowseEntry } from "@/lib/remote-jobs/browse-job-id";
import type { FeaturedJobDto } from "@/lib/remote-jobs/teamtailor-featured";

const TEAMTAILOR_SOURCE = "Teamtailor";

function locationRestrictionsFromLabel(locationLabel: string): string[] {
  const s = locationLabel.trim();
  if (!s) return [];
  const parts = s
    .split(/[·,]/)
    .map((x) => x.trim())
    .filter(Boolean);
  return parts.length ? parts : [s];
}

/** Maps Teamtailor featured rows into the same shape as aggregated browse jobs (stable id via jobIdForBrowseEntry). */
export function featuredJobToBrowseDto(job: FeaturedJobDto): BrowseJobDto {
  const applicationLink = job.applyUrl.trim();
  return {
    id: jobIdForBrowseEntry(TEAMTAILOR_SOURCE, applicationLink),
    title: job.title,
    companyName: "Abroader",
    employmentType: job.employmentTypeLabel,
    locationRestrictions: locationRestrictionsFromLabel(job.locationLabel),
    applicationLink,
    source: TEAMTAILOR_SOURCE,
  };
}

/** Prefer browse entries when the same application URL appears on a board and Teamtailor. */
export function mergeBrowseAndFeaturedTeamtailor(
  browseJobs: BrowseJobDto[],
  featuredJobs: FeaturedJobDto[]
): BrowseJobDto[] {
  const mapped = featuredJobs.map(featuredJobToBrowseDto);
  const seen = new Set<string>();
  const out: BrowseJobDto[] = [];
  for (const j of browseJobs) {
    const key = j.applicationLink.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(j);
  }
  for (const j of mapped) {
    const key = j.applicationLink.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(j);
  }
  return out;
}

/** Teamtailor rows first, then board listings; dedupe by application URL (Teamtailor wins on overlap). */
export function mergeTeamtailorFirstThenBrowse(
  featuredJobs: FeaturedJobDto[],
  browseJobs: BrowseJobDto[]
): BrowseJobDto[] {
  const mapped = featuredJobs.map(featuredJobToBrowseDto);
  const seen = new Set<string>();
  const out: BrowseJobDto[] = [];
  for (const j of mapped) {
    const key = j.applicationLink.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(j);
  }
  for (const j of browseJobs) {
    const key = j.applicationLink.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(j);
  }
  return out;
}
