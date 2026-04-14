import { consultationNavVerticals } from "@/lib/consultation-nav";
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
};

export type NavLinkItem = {
  kind: "link";
  href: string;
  label: string;
};

export type NavMainItem = NavGroupItem | NavLinkItem;

export const navMainItems: readonly NavMainItem[] = [
  {
    kind: "group",
    id: "work",
    label: "Find work",
    hubHref: "/work",
    childHrefs: ["/remote-jobs", "/language-jobs", "/hospitality", "/work-for-accommodation"],
  },
  { kind: "link", href: "/volunteering", label: "Volunteering" },
  {
    kind: "group",
    id: "remote-living",
    label: "Remote Living",
    hubHref: "/remote-living",
    childHrefs: [
      "/co-living",
      remoteLivingCategoryHref("vanlife"),
      remoteLivingCategoryHref("eco-sustainable"),
      remoteLivingCategoryHref("learning-based"),
    ],
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
  },
  {
    kind: "group",
    id: "inspiration",
    label: "Inspiration",
    childHrefs: ["/guides"],
  },
  {
    kind: "group",
    id: "book-consultation",
    label: "Book a consultation",
    childHrefs: ["/career-support", "/travel"],
  },
  { kind: "link", href: "/about-us", label: "About us" },
] as const;

function verticalForHref(href: string): Vertical {
  const v = verticals.find((x) => x.href === href);
  if (!v) throw new Error(`nav-structure: missing vertical for ${href}`);
  return v;
}

export function groupChildren(group: NavGroupItem): Vertical[] {
  if (group.id === "retreats") {
    return [...retreatCategoryNavVerticals];
  }
  if (group.id === "remote-living") {
    return [...remoteLivingNavVerticals];
  }
  if (group.id === "book-consultation") {
    return [...consultationNavVerticals];
  }
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
