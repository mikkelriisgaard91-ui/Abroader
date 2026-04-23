import { remoteLivingCategoryHref, remoteLivingNavVerticals } from "@/lib/remote-living/category-landing";
import { retreatCategoryHref, retreatCategoryNavVerticals } from "@/lib/retreats/category-landing";
import { verticals } from "@/lib/verticals";
import type { Vertical } from "@/lib/verticals";

export function isPathActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export type NavGroupItem = {
  kind: "group";
  id: string;
  label: string;
  /** Hub landing page (e.g. /work); optional for groups without a hub */
  hubHref?: string;
  childHrefs: readonly string[];
  /** Accent colour for the dropdown panel tint */
  panelAccent?: string;
};

export type NavLinkItem = {
  kind: "link";
  href: string;
  label: string;
};

export type NavMainItem = NavGroupItem | NavLinkItem;

const discoverNavVerticals: Vertical[] = [
  {
    title: "Country Guides",
    description:
      "Visas, cost of living, and best cities for remote workers across Europe and Oceania — in-depth guides for your next base.",
    href: "/guides",
    accent: "#fcba36",
    light: "#fff8ec",
    emoji: "🗺️",
  },
  {
    title: "Opportunities",
    description: "Handpicked roles, programmes, and experiences curated by the Abroader team.",
    href: "/opportunities",
    accent: "#246374",
    light: "#e8f4f7",
    emoji: "✨",
  },
];

export const navMainItems: readonly NavMainItem[] = [
  {
    kind: "group",
    id: "work",
    label: "Work Abroad",
    hubHref: "/work",
    childHrefs: ["/remote-jobs", "/language-jobs", "/hospitality", "/work-for-accommodation", "/volunteering"],
    panelAccent: "#246374",
  },
  {
    kind: "group",
    id: "remote-living",
    label: "Living Abroad",
    hubHref: "/remote-living",
    childHrefs: [
      "/co-living",
      remoteLivingCategoryHref("vanlife"),
      remoteLivingCategoryHref("eco-sustainable"),
      remoteLivingCategoryHref("learning-based"),
    ],
    panelAccent: "#2d6a4f",
  },
  {
    kind: "group",
    id: "retreats",
    label: "Retreats",
    hubHref: "/retreats",
    childHrefs: [
      retreatCategoryHref("surf"),
      retreatCategoryHref("yoga"),
      retreatCategoryHref("martial-arts"),
      retreatCategoryHref("motorcycle-trips"),
    ],
    panelAccent: "#8b4513",
  },
  {
    kind: "group",
    id: "discover",
    label: "Discover",
    childHrefs: ["/guides", "/opportunities"],
    panelAccent: "#1a4a7a",
  },
] as const;

function verticalForHref(href: string): Vertical {
  const v = verticals.find((x) => x.href === href);
  if (!v) throw new Error(`nav-structure: missing vertical for ${href}`);
  return v;
}

export function groupChildren(group: NavGroupItem): Vertical[] {
  if (group.id === "retreats") return [...retreatCategoryNavVerticals];
  if (group.id === "remote-living") return [...remoteLivingNavVerticals];
  if (group.id === "discover") return discoverNavVerticals;
  return group.childHrefs.map(verticalForHref);
}

export function isGroupActive(pathname: string, group: NavGroupItem): boolean {
  if (group.hubHref && isPathActive(pathname, group.hubHref)) return true;
  return group.childHrefs.some((h) => isPathActive(pathname, h));
}

export function isLinkItemActive(pathname: string, item: NavLinkItem): boolean {
  return isPathActive(pathname, item.href);
}

export function getFindWorkGroup(): NavGroupItem {
  const g = navMainItems.find((i): i is NavGroupItem => i.kind === "group" && i.id === "work");
  if (!g) throw new Error("nav-structure: Find work group missing");
  return g;
}
