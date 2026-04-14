import type { Vertical } from "@/lib/verticals";

const ACCENT = "#246374";
const LIGHT = "#e8f4f7";

/** Nav, footer, and homepage “expert help” section: verticals under Book a consultation. */
export const consultationNavVerticals: Vertical[] = [
  {
    title: "Career support",
    description:
      "One-to-one job search, CV, and interview guidance — direct help from the Abroader team when you are moving or applying abroad.",
    href: "/career-support",
    accent: ACCENT,
    light: LIGHT,
    emoji: "💼",
  },
  {
    title: "Travel planning",
    description:
      "Shape your route, budget, flights, and stays with our team — practical planning for weekends away or longer trips.",
    href: "/travel",
    accent: ACCENT,
    light: LIGHT,
    emoji: "🧭",
  },
];
