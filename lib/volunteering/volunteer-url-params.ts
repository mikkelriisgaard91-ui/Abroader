import type { LocationRegionFilter } from "@/lib/remote-jobs/job-filters";
import type { VolunteerKindFilter } from "@/lib/volunteering/volunteer-filters";

const LOCATION_VALUES: LocationRegionFilter[] = [
  "all",
  "worldwide",
  "americas",
  "europe",
  "asia-pacific",
  "africa",
  "middle-east",
];

const KIND_VALUES: VolunteerKindFilter[] = [
  "all",
  "conservation",
  "community",
  "education",
  "healthcare",
  "animal",
  "youth",
  "other",
];

export function parseVolunteerLocationParam(raw: string | undefined): LocationRegionFilter {
  const v = (raw ?? "all").trim().toLowerCase();
  return LOCATION_VALUES.includes(v as LocationRegionFilter) ? (v as LocationRegionFilter) : "all";
}

export function parseVolunteerKindParam(raw: string | undefined): VolunteerKindFilter {
  const v = (raw ?? "all").trim().toLowerCase();
  return KIND_VALUES.includes(v as VolunteerKindFilter) ? (v as VolunteerKindFilter) : "all";
}
