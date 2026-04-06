import type { HeroBenefitIconKey } from "./hero-benefit-icons";

/** Teamtailor — speak with a recruiter / applications. */
export const RECRUITER_CONTACT_URL =
  "https://abroader-1746694588.teamtailor.com/jobs/7441089-speak-with-a-recruiter-about-your-next-job-abroad";

export const HERO_QUICK_BENEFITS: { iconKey: HeroBenefitIconKey; label: string }[] = [
  { iconKey: "globe", label: "International Environments" },
  { iconKey: "graduationCap", label: "No Experience Required" },
  { iconKey: "package", label: "Relocation Packages" },
  { iconKey: "zap", label: "Fast Hiring Process" },
];

export const PROCESS_STEPS: { step: number; title: string; body: string }[] = [
  {
    step: 1,
    title: "Apply in 2 minutes",
    body: "Quick forms, no hassle. We just need the basics to get started.",
  },
  {
    step: 2,
    title: "Talk to a recruiter",
    body: "A friendly chat about your goals and our open positions.",
  },
  {
    step: 3,
    title: "Start your job abroad",
    body: "Relocation support kicks in, and your new life begins.",
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
    id: "s1",
    quote: "Moving to Lisbon was the best decision of my life. Abroader handled everything!",
    name: "Maja S.",
    locationCaps: "LISBON, PORTUGAL",
    initial: "MS",
  },
  {
    id: "s2",
    quote: "The recruiting process was so fast. I was in Barcelona within 3 weeks of applying.",
    name: "Lukas H.",
    locationCaps: "BARCELONA, SPAIN",
    initial: "LH",
  },
  {
    id: "s3",
    quote: "Living by the sea in Greece while working a professional job is a dream come true.",
    name: "Anna K.",
    locationCaps: "ATHENS, GREECE",
    initial: "AK",
  },
  {
    id: "s4",
    quote: "Great relocation package and supportive team. Highly recommend Abroader!",
    name: "Marco V.",
    locationCaps: "ST. JULIAN'S, MALTA",
    initial: "MV",
  },
  {
    id: "s5",
    quote:
      "I wanted to use my Danish abroad—Abroader matched me with a team in Sofia where Nordic languages are valued every day.",
    name: "Freja N.",
    locationCaps: "SOFIA, BULGARIA",
    initial: "FN",
  },
  {
    id: "s6",
    quote: "From first call to signed contract in English, German, and a bit of local phrase-learning—smooth and honest.",
    name: "Timo W.",
    locationCaps: "MUNICH, GERMANY",
    initial: "TW",
  },
  {
    id: "s7",
    quote: "Multilingual customer support in Malta ticked every box: sun, sea, and colleagues from all over Europe.",
    name: "Chiara B.",
    locationCaps: "SLIEMA, MALTA",
    initial: "CB",
  },
  {
    id: "s8",
    quote: "Costa del Sol was a leap—I got interview prep in my language and help with the first month’s rent.",
    name: "Isabel R.",
    locationCaps: "MÁLAGA, SPAIN",
    initial: "IR",
  },
  {
    id: "s9",
    quote: "They didn’t just send job links; my recruiter understood visa basics and what “fluent” really meant for the role.",
    name: "Henrik O.",
    locationCaps: "OSLO, NORWAY",
    initial: "HO",
  },
  {
    id: "s10",
    quote: "French and English on the job in Dublin—Abroader introduced employers who actually needed both, not generic English-only roles.",
    name: "Camille D.",
    locationCaps: "DUBLIN, IRELAND",
    initial: "CD",
  },
  {
    id: "s11",
    quote: "Stockholm felt huge until Abroader walked me through housing and my first Swedish workplace introductions.",
    name: "Elin V.",
    locationCaps: "STOCKHOLM, SWEDEN",
    initial: "EV",
  },
  {
    id: "s12",
    quote: "Helsinki in winter is easier when your employer and Abroader both answer questions in plain English and Finnish.",
    name: "Joonas L.",
    locationCaps: "HELSINKI, FINLAND",
    initial: "JL",
  },
  {
    id: "s13",
    quote: "Italian plus English in Amsterdam: the role fit my languages, not the other way around.",
    name: "Giulia F.",
    locationCaps: "AMSTERDAM, NETHERLANDS",
    initial: "GF",
  },
  {
    id: "s14",
    quote: "Seasonal work in Switzerland with clear contracts and relocation tips—I’d never have navigated it alone.",
    name: "Lea K.",
    locationCaps: "ZERMATT, SWITZERLAND",
    initial: "LK",
  },
  {
    id: "s15",
    quote: "Polish, English, and a little German on the floor in Wrocław—finally a job where my mix was an asset.",
    name: "Marta Z.",
    locationCaps: "WROCŁAW, POLAND",
    initial: "MZ",
  },
  {
    id: "s16",
    quote: "Copenhagen employers care about work-life balance; Abroader made sure my profile matched that culture.",
    name: "Søren P.",
    locationCaps: "COPENHAGEN, DENMARK",
    initial: "SP",
  },
  {
    id: "s17",
    quote: "Remote for a Nordic team but I still needed help with my first lease in Valencia—Abroader followed through.",
    name: "Nora E.",
    locationCaps: "VALENCIA, SPAIN",
    initial: "NE",
  },
  {
    id: "s18",
    quote: "Portuguese and Spanish support roles in Porto: I use both daily. The onboarding checklist alone saved me weeks.",
    name: "Ricardo T.",
    locationCaps: "PORTO, PORTUGAL",
    initial: "RT",
  },
];
