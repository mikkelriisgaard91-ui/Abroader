import type { Vertical } from "@/lib/verticals";

export const REMOTE_LIVING_CATEGORY_SLUGS = [
  "vanlife",
  "eco-sustainable",
  "learning-based",
] as const;

export type RemoteLivingCategorySlug = (typeof REMOTE_LIVING_CATEGORY_SLUGS)[number];

export function isRemoteLivingCategorySlug(s: string): s is RemoteLivingCategorySlug {
  return (REMOTE_LIVING_CATEGORY_SLUGS as readonly string[]).includes(s);
}

export function remoteLivingCategoryHref(slug: RemoteLivingCategorySlug): string {
  return `/remote-living/${slug}`;
}

const BASE_ACCENT = "#246374";
const BASE_LIGHT = "#e8f4f7";

export type RemoteLivingLandingCopy = {
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  whatItIs: string;
  whatsIncluded: string[];
  whoItsFor: string[];
};

const LANDING_COPY: Record<RemoteLivingCategorySlug, RemoteLivingLandingCopy> = {
  vanlife: {
    heroTitle: "Vanlife & mobile living abroad",
    heroSubtitle:
      "Flexible living on the road — campervans, road trips, and nomad routes with room to work remotely between destinations.",
    metaTitle: "Vanlife & mobile living abroad | Abroader",
    metaDescription:
      "Explore vanlife and mobile living for remote workers: rentals, guided routes, convoys, and ways to stay productive while you travel.",
    heroImage:
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt: "Camper van parked in a scenic outdoor setting",
    whatItIs:
      "Vanlife and mobile living is about choosing movement without giving up your income stream. You trade a fixed address for routes, campsites, and communities that understand life on wheels — with space to work, rest, and explore.",
    whatsIncluded: [
      "Campervan and RV rentals suited to longer stays",
      "Road-trip itineraries and nomad-friendly routes",
      "Community convoys and meetups along the way",
      "Tips for connectivity, power, and work setups on the move",
    ],
    whoItsFor: [
      "Remote workers who want freedom between bases",
      "People testing long-term travel before settling abroad",
      "Creators and founders who work from the road",
    ],
  },
  "eco-sustainable": {
    heroTitle: "Eco & sustainable living",
    heroSubtitle:
      "Live closer to nature without giving up income — ecovillages, farm exchange, off-grid basics, and remote work in nature.",
    metaTitle: "Eco & sustainable living — nature, income, real paths | Abroader",
    metaDescription:
      "Explore eco living: ecovillages, WWOOF and Workaway, off-grid systems, and remote jobs in nature. Practical resources, platforms, and an honest look at trade-offs.",
    heroImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt: "Green hills and farmland under soft daylight",
    whatItIs:
      "Eco and sustainable living puts the environment and intentional design first. These stays often combine shared resources, local food, and lighter footprints with the practical needs of remote work.",
    whatsIncluded: [
      "Eco-villages and regenerative projects open to guests",
      "Farm stays and nature-integrated housing",
      "Off-grid and low-impact setups with connectivity options",
      "Communities focused on wellbeing and shared values",
    ],
    whoItsFor: [
      "Remote workers seeking purpose-led environments",
      "People who want nature close to their daily rhythm",
      "Anyone aligning travel with sustainability values",
    ],
  },
  "learning-based": {
    heroTitle: "Learning Living",
    heroSubtitle:
      "Travel, learn, and build digital skills anywhere — bootcamps, online courses, nomad programs, and paths to location freedom.",
    metaTitle: "Learning Living — travel, learn & build digital skills abroad | Abroader",
    metaDescription:
      "Combine travel with learning: online platforms, bootcamps, Remote Year–style programs, and skills that pay. Start your Learning Living journey.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=85",
    heroImageAlt: "People collaborating at a table with laptops",
    whatItIs:
      "Learning Living is education plus lifestyle: learn by doing, learn while traveling, and build skills employers want — from tech and AI to marketing and remote work systems.",
    whatsIncluded: [
      "Online learning (Coursera, Udemy, Skillshare, LinkedIn Learning)",
      "Intensive bootcamps (e.g. Le Wagon, General Assembly, Ironhack)",
      "Learn-while-abroad communities (Remote Year, WiFi Tribe, Outsite)",
      "Hands-on exchange options (Workaway, WWOOF) alongside digital skills",
    ],
    whoItsFor: [
      "People who want skills and freedom — not just a traditional job path",
      "Career switchers and beginners ready to start before they feel 100% ready",
      "Anyone combining travel with serious skill-building and remote income",
    ],
  },
};

export function getRemoteLivingLandingCopy(slug: RemoteLivingCategorySlug): RemoteLivingLandingCopy {
  return LANDING_COPY[slug];
}

/** Hub page: community hub + three category landings (Community links to existing /co-living). */
export const REMOTE_LIVING_HUB_CARDS: {
  title: string;
  description: string;
  href: string;
  emoji: string;
}[] = [
  {
    title: "Community Co-Living",
    description:
      "Living spaces built around strong communities — shared housing, events, networking, and coworking for entrepreneurs, creatives, and remote workers.",
    href: "/co-living",
    emoji: "🏘️",
  },
  {
    title: "Vanlife / Mobile Living",
    description:
      "Travel while you work — campervans, road trips, nomad routes, rentals, guided routes, or community convoys.",
    href: remoteLivingCategoryHref("vanlife"),
    emoji: "🚐",
  },
  {
    title: "Eco & Sustainable Living",
    description:
      "Nature-first stays: eco-villages, farms, off-grid setups, and mindful environments with purpose.",
    href: remoteLivingCategoryHref("eco-sustainable"),
    emoji: "🌿",
  },
  {
    title: "Learning Living",
    description:
      "Travel while you level up — online courses, bootcamps, nomad programs, and skills that unlock remote work and freedom.",
    href: remoteLivingCategoryHref("learning-based"),
    emoji: "📚",
  },
];

/** Nav + footer: all Remote Living destinations (order matches plan). */
export const remoteLivingNavVerticals: Vertical[] = [
  {
    title: "Community Co-Living",
    description:
      "Shared housing, events, networking, and coworking with like-minded remote workers and creatives.",
    href: "/co-living",
    accent: BASE_ACCENT,
    light: BASE_LIGHT,
    emoji: "🏘️",
  },
  {
    title: "Vanlife / Mobile Living",
    description: "Campervans, road trips, and nomad routes — flexible living while you work remotely.",
    href: remoteLivingCategoryHref("vanlife"),
    accent: BASE_ACCENT,
    light: BASE_LIGHT,
    emoji: "🚐",
  },
  {
    title: "Eco & Sustainable Living",
    description: "Eco-villages, farms, off-grid setups, and mindful bases aligned with nature and purpose.",
    href: remoteLivingCategoryHref("eco-sustainable"),
    accent: BASE_ACCENT,
    light: BASE_LIGHT,
    emoji: "🌿",
  },
  {
    title: "Learning Living",
    description:
      "Build digital and remote-work skills while traveling — bootcamps, cohort programs, and learn-from-anywhere paths.",
    href: remoteLivingCategoryHref("learning-based"),
    accent: BASE_ACCENT,
    light: BASE_LIGHT,
    emoji: "📚",
  },
];
