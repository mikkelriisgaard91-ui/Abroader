import type { MetadataRoute } from "next";
import { allGuides } from "@/lib/guides";
import { OPPORTUNITY_SLUGS } from "@/lib/opportunities";
import { getAllColivingSlugs } from "@/app/co-living/content";
import { RETREAT_CATEGORY_SLUGS } from "@/lib/retreats/category-landing";
import { getAllRetreatListingIds } from "@/lib/retreats/listing-helpers";

const BASE = "https://www.abroader.io";

function url(path: string): string {
  return `${BASE}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ─── Static pages ────────────────────────────────────────────────────────────

  const staticPages: MetadataRoute.Sitemap = [
    // Core
    { url: url("/"),                         priority: 1.0, changeFrequency: "weekly"  },
    { url: url("/work"),                     priority: 0.9, changeFrequency: "weekly"  },

    // Work Abroad
    { url: url("/remote-jobs"),              priority: 0.9, changeFrequency: "daily"   },
    { url: url("/language-jobs"),            priority: 0.9, changeFrequency: "daily"   },
    { url: url("/hospitality"),              priority: 0.8, changeFrequency: "weekly"  },
    { url: url("/work-for-accommodation"),   priority: 0.7, changeFrequency: "weekly"  },
    { url: url("/volunteering"),             priority: 0.8, changeFrequency: "weekly"  },
    { url: url("/volunteering/brook-hills-ethiopia"), priority: 0.5, changeFrequency: "monthly" },

    // Living Abroad
    { url: url("/remote-living"),            priority: 0.8, changeFrequency: "weekly"  },
    { url: url("/remote-living/vanlife"),    priority: 0.7, changeFrequency: "weekly"  },
    { url: url("/remote-living/eco-sustainable"), priority: 0.7, changeFrequency: "weekly" },
    { url: url("/remote-living/learning-based"),  priority: 0.7, changeFrequency: "weekly" },
    { url: url("/co-living"),               priority: 0.8, changeFrequency: "weekly"  },

    // Retreats
    { url: url("/retreats"),                priority: 0.8, changeFrequency: "weekly"  },

    // Discover
    { url: url("/guides"),                  priority: 0.8, changeFrequency: "weekly"  },
    { url: url("/opportunities"),           priority: 0.8, changeFrequency: "weekly"  },

    // Get Help
    { url: url("/career-support"),          priority: 0.6, changeFrequency: "monthly" },
    { url: url("/travel"),                  priority: 0.6, changeFrequency: "monthly" },

    // Company
    { url: url("/about-us"),                priority: 0.4, changeFrequency: "monthly" },
  ];

  // ─── Dynamic: Country guides ─────────────────────────────────────────────────

  const guidePages: MetadataRoute.Sitemap = allGuides.map((guide) => ({
    url: url(`/guides/${guide.slug}`),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // ─── Dynamic: Opportunities ───────────────────────────────────────────────────

  const opportunityPages: MetadataRoute.Sitemap = OPPORTUNITY_SLUGS.map((slug) => ({
    url: url(`/opportunities/${slug}`),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // ─── Dynamic: Co-living spaces ────────────────────────────────────────────────

  const colivingPages: MetadataRoute.Sitemap = getAllColivingSlugs().map((slug) => ({
    url: url(`/co-living/${slug}`),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  // ─── Dynamic: Retreat categories ─────────────────────────────────────────────

  const retreatPages: MetadataRoute.Sitemap = RETREAT_CATEGORY_SLUGS.map((category) => ({
    url: url(`/retreats/${category}`),
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  const retreatListingPages: MetadataRoute.Sitemap = getAllRetreatListingIds().map((id) => ({
    url: url(`/retreats/listing/${id}`),
    priority: 0.65,
    changeFrequency: "weekly" as const,
  }));

  return [
    ...staticPages,
    ...guidePages,
    ...opportunityPages,
    ...colivingPages,
    ...retreatPages,
    ...retreatListingPages,
  ];
}
