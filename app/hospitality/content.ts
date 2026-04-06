import type { HeroBenefitIconKey } from "../language-jobs/hero-benefit-icons";

export { RECRUITER_CONTACT_URL } from "../language-jobs/content";

export const HERO_QUICK_BENEFITS: { iconKey: HeroBenefitIconKey; label: string }[] = [
  { iconKey: "globe", label: "Resorts & Destinations" },
  { iconKey: "package", label: "Housing & Perks" },
  { iconKey: "zap", label: "Peak Season Hiring" },
  { iconKey: "graduationCap", label: "Training On the Job" },
];

export const PROCESS_STEPS: { step: number; title: string; body: string }[] = [
  {
    step: 1,
    title: "Browse seasonal roles",
    body: "Pick a role that matches your dates and destination — summer, winter, or year-round peaks.",
  },
  {
    step: 2,
    title: "Talk to a recruiter",
    body: "We align on contracts, start dates, and what to expect on arrival.",
  },
  {
    step: 3,
    title: "Start your season",
    body: "Pack your bags, hit your team briefing, and settle into life on location.",
  },
];

export type ScrollTestimonial = {
  id: string;
  quote: string;
  name: string;
  locationCaps: string;
  initial: string;
};

export const SUCCESS_STORIES_SCROLL: ScrollTestimonial[] = [
  {
    id: "h1",
    quote:
      "Winter season as a waiter in a Zermatt hotel—breakfast rushes, après-ski crowds, and the mountains out the window. Exhausting and I’d do it again.",
    name: "Luca B.",
    locationCaps: "VALAIS, SWITZERLAND",
    initial: "LB",
  },
  {
    id: "h2",
    quote:
      "Summer on the terrace in Tyrol: I ran tables from lunch through sunset. Long shifts, great tips, and the whole valley feels like your break room.",
    name: "Hannah K.",
    locationCaps: "TYROL, AUSTRIA",
    initial: "HK",
  },
  {
    id: "h3",
    quote:
      "I’m a chef—ski season meant a packed pass and a brigade that moved like clockwork. High covers every night but the contract and housing were clear from day one.",
    name: "Marco V.",
    locationCaps: "DOLOMITES, ITALY",
    initial: "MV",
  },
  {
    id: "h4",
    quote:
      "Kitchen porter and prep in a Chamonix lodge for winter. Early starts, prep lists a mile long, and a team that had each other’s backs when service peaked.",
    name: "Amélie D.",
    locationCaps: "CHAMONIX, FRANCE",
    initial: "AD",
  },
  {
    id: "h5",
    quote:
      "Back for a second summer—line cook in Salzburg region. Seasonal work let me stack savings between hiking seasons without guessing my rent.",
    name: "Tom W.",
    locationCaps: "SALZBURG, AUSTRIA",
    initial: "TW",
  },
];
