import type { FeaturedJobDto } from "@/lib/remote-jobs/teamtailor-featured";

/**
 * Curated volunteer placements shown alongside Teamtailor. Replace `applyUrl` when you have a direct application link.
 */
export type StaticVolunteerListing = {
  id: string;
  title: string;
  badgeLabel: string;
  locationLabel: string;
  description: string;
  included: string[];
  priceLine: string;
  applyUrl: string;
  pictureUrl: string;
  /** When set, the catalogue links to this programme page for full details. */
  landingPath?: string;
};

/** Amanda Bonny — zebras (local copy under public/; Unsplash License). */
const BROOK_HILLS_HERO = "/volunteering/brook-hills/hero-zebras.jpg";

export const STATIC_VOLUNTEER_LISTINGS: StaticVolunteerListing[] = [
  {
    id: "brook-hills-ethiopia",
    title: "Make a difference in Ethiopia with Brook Hills",
    badgeLabel: "2 weeks minimum",
    locationLabel: "Ethiopia",
    description:
      "Join us in creating lasting change through education, healthcare, and local community development programs.",
    included: [
      "Meals and accommodation",
      "Airport transfers",
      "Personal guidance and support from a mentor",
      "Assistance with flights and travel insurance",
    ],
    priceLine: "Weekly price per person: 2,500 DKK",
    applyUrl: "https://abroader-1746694588.teamtailor.com/jobs/7441089-speak-with-a-recruiter-about-your-next-job-abroad",
    pictureUrl: BROOK_HILLS_HERO,
    landingPath: "/volunteering/brook-hills-ethiopia",
  },
];

/** Text used only for region / volunteer-type filters (keywords from title, description, and perks). */
export function staticListingToFilterProbe(listing: StaticVolunteerListing): FeaturedJobDto {
  const blob = [
    listing.title,
    listing.description,
    listing.badgeLabel,
    listing.locationLabel,
    ...listing.included,
    listing.priceLine,
  ].join(" ");
  return {
    id: listing.id,
    title: blob,
    locationLabel: listing.locationLabel,
    employmentTypeLabel: listing.badgeLabel,
    applyUrl: listing.applyUrl,
    pictureUrl: listing.pictureUrl,
  };
}
