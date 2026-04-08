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
  { kind: "link", href: "/co-living", label: "Co-living" },
  { kind: "link", href: "/retreats", label: "Retreats" },
  {
    kind: "group",
    id: "inspiration",
    label: "Inspiration",
    childHrefs: ["/guides"],
  },
  { kind: "link", href: "/about-us", label: "About us" },
] as const;

function verticalForHref(href: string): Vertical {
  const v = verticals.find((x) => x.href === href);
  if (!v) throw new Error(`nav-structure: missing vertical for ${href}`);
  return v;
}

export function groupChildren(group: NavGroupItem): Vertical[] {
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
