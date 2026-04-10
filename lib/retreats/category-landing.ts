import { RETREAT_CATEGORY_LABELS, type RetreatCategory } from "@/lib/retreats/catalog";
import type { Vertical } from "@/lib/verticals";

export const RETREAT_CATEGORY_SLUGS = ["surf", "yoga", "martial-arts", "motorcycle-trips"] as const;

export type RetreatCategorySlug = (typeof RETREAT_CATEGORY_SLUGS)[number];

export function isRetreatCategorySlug(s: string): s is RetreatCategorySlug {
  return (RETREAT_CATEGORY_SLUGS as readonly string[]).includes(s);
}

export function retreatCategoryHref(category: RetreatCategory): string {
  return `/retreats/${category}`;
}

const BASE_RETREAT_ACCENT = "#7ec8d4";
const BASE_RETREAT_LIGHT = "#f0fafc";

export type CategoryLandingCopy = {
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
};

const LANDING_COPY: Record<RetreatCategory, CategoryLandingCopy> = {
  surf: {
    heroTitle: "Surf retreats & surf camps abroad",
    heroSubtitle:
      "Wave-focused stays from Morocco to Portugal — coaching, gear, and small groups so you can progress without the guesswork.",
    metaTitle: "Surf retreats & surf camps | Abroader",
    metaDescription:
      "Browse surf retreats and surf camps worldwide. Filter by region and budget; compare structured stays with clear inclusions.",
    heroImage: "/retreats/hero-all-retreats.jpg",
    heroImageAlt: "Turquoise ocean and sandy shoreline from above",
  },
  yoga: {
    heroTitle: "Yoga retreats abroad",
    heroSubtitle:
      "Dedicated yoga weeks in inspiring places — from coastal shalas to mountain quiet — with time to breathe and reset.",
    metaTitle: "Yoga retreats abroad | Abroader",
    metaDescription:
      "Find yoga retreats worldwide. Compare listings by region and price; structured programs with clear inclusions.",
    heroImage: "/retreats/hero-all-retreats.jpg",
    heroImageAlt: "Calm coastal light over water and horizon",
  },
  "martial-arts": {
    heroTitle: "Martial arts retreats abroad",
    heroSubtitle:
      "Train in a new setting — immersive weeks with instruction, community, and room to focus on your practice.",
    metaTitle: "Martial arts retreats abroad | Abroader",
    metaDescription:
      "Discover martial arts retreats in hand-picked destinations. Filter by region and budget on Abroader.",
    heroImage: "/retreats/hero-all-retreats.jpg",
    heroImageAlt: "Open landscape with soft morning light",
  },
  "motorcycle-trips": {
    heroTitle: "Motorcycle tours & riding trips abroad",
    heroSubtitle:
      "Guided motorcycle adventures and touring stays — new roads, new landscapes, and itineraries built for riders.",
    metaTitle: "Motorcycle tours abroad | Abroader",
    metaDescription:
      "Browse motorcycle tour retreats and riding trips. Compare regions, dates, and price ranges in one place.",
    heroImage: "/retreats/hero-all-retreats.jpg",
    heroImageAlt: "Winding road through hills under open sky",
  },
};

export function getCategoryLandingCopy(category: RetreatCategory): CategoryLandingCopy {
  return LANDING_COPY[category];
}

/** Nav + footer: synthetic verticals for the Retreats dropdown (not shown on the homepage grid). */
export const retreatCategoryNavVerticals: Vertical[] = RETREAT_CATEGORY_SLUGS.map((slug) => {
  const label = RETREAT_CATEGORY_LABELS[slug];
  const short =
    slug === "surf"
      ? "Surf camps and wave-focused retreats — coaching, gear, and ocean time."
      : slug === "yoga"
        ? "Dedicated yoga weeks and retreat-style stays in inspiring locations."
        : slug === "martial-arts"
          ? "Immersive training weeks with instruction and community abroad."
          : "Guided motorcycle tours and rider-focused trips on unforgettable roads.";

  return {
    title: label,
    description: short,
    href: retreatCategoryHref(slug),
    accent: BASE_RETREAT_ACCENT,
    light: BASE_RETREAT_LIGHT,
    emoji: "🌿",
  } satisfies Vertical;
});
