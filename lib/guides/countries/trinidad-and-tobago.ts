import type { CountryGuide } from "../types";

export const trinidadAndTobago: CountryGuide = {
  slug: "trinidad-and-tobago",
  country: "Trinidad and Tobago",
  flag: "🇹🇹",
  continent: "Caribbean",
  capital: "Port of Spain",
  currency: "TTD (USD context in energy sector)",
  language: "English",
  timezone: "AST (UTC−4)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1800,
  seoTitle: "Working in Trinidad and Tobago: Remote Worker Guide (2026)",
  seoDescription:
    "T&T for remote workers: Port of Spain, Trinidad carnival, Tobago beaches, energy sector, and safety planning.",
  highlights: [
    "Energy sector economy — business and expat pockets different from smaller islands",
    "Carnival — world-class — housing books months ahead",
    "Tobago — quieter — beaches — inter-island flights",
    "Crime in parts of Trinidad — neighbourhood research essential — Tobago calmer but not crime-free",
    "Diverse culture — food, music, calypso — liming culture",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 90 days — extensions",
      cost: "Low",
      requirements: "Onward ticket sometimes",
    },
    {
      name: "Work permits",
      duration: "Employer-sponsored — energy sector common",
      cost: "Fees",
      requirements: "Local labour market tests — not casual for remote-only foreign employers",
    },
  ],
  cities: [
    {
      name: "Port of Spain",
      vibe: "Business capital — traffic, hills — Queen's Park Savannah",
      avgRent: "$700–$1,800/month",
      coworkingSpaces: "Regus-style, café scene — fibre in business zones",
    },
    {
      name: "San Fernando",
      vibe: "South Trinidad — industrial — different energy than POS",
      avgRent: "$500–$1,200/month",
      coworkingSpaces: "Limited",
    },
    {
      name: "Scarborough",
      vibe: "Tobago capital — slower — beaches",
      avgRent: "$600–$1,400/month",
      coworkingSpaces: "Limited — resort Wi‑Fi",
    },
  ],
  costBreakdown: {
    rent: "$500–$1,800/month",
    food: "$280–$480/month",
    transport: "$50–$140/month",
    coworking: "$90–$200/month",
  },
  taxInfo:
    "Tax residency applies if you become resident — energy sector packages have specific structures — consult T&T CPA.",
  communityTips:
    "Carnival — costume logistics — join bands respectfully. Doubles and roti — food culture — enjoy local spots. Driving — left-hand — traffic peaks — plan meetings.",
  bestFor: ["Carnival", "Food", "Energy sector", "Tobago weekends"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration extensions — POS — overstays risk fines — pay before exit.

Inter-island flights — Caribbean Airlines — weather delays — book flex.

Earthquake awareness — know exits — building codes vary.
`.trim(),

  bankingTips: `
Republic Bank, Scotia T&T — residents — cards in malls — TTD for local markets — USD for some services.

ATMs — fees — night safety — use bank lobbies daytime.
`.trim(),

  healthcareInfo: `
Port of Spain hospitals — private Westshore — pay or insure — dengue — Zika history — pregnancy planning.

Emergency: 811 — verify — private ambulance options exist.

Tobago — medical evacuation to Trinidad for serious cases — insurance.
`.trim(),

  culturalTips: `
Religious diversity — respect holidays. Liming is social glue — don't rush rapport. Crime reporting — avoid sensationalism — listen to locals.
`.trim(),

  realMonthlyCost: `
Example month — West Trinidad suburb profile:

Rent: $1,000
Utilities + fibre: $110
Transport: $120
Groceries: $360
Eating out: $300
Coworking: $140
Insurance: $90
Misc: $120

Indicative total: ~$2,240 — Tobago can differ — Carnival month spikes prices.
`.trim(),

  expatCommunities: ["T&T expat Facebook", "Energy sector networks"],

  prosAndCons: {
    pros: ["Culture", "Food", "Carnival", "Tobago escape"],
    cons: ["Crime in Trinidad hotspots", "Traffic", "Weather delays"],
  },

  bestNeighbourhoods: [
    {
      city: "Port of Spain",
      neighbourhood: "Westmoorings / Goodwood Park",
      description: "Gated residential — expat families — verify security protocols — premium rents.",
    },
  ],

  faqs: [
    {
      question: "Trinidad or Tobago?",
      answer:
        "Trinidad for business and services — Tobago for beach quiet — inter-island flight is your lifestyle link.",
    },
  ],

  updated: "April 2026",
  wordCount: 1700,
};
