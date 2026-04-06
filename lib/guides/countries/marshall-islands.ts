import type { CountryGuide } from "../types";

export const marshallIslands: CountryGuide = {
  slug: "marshall-islands",
  country: "Marshall Islands",
  flag: "🇲🇭",
  continent: "Oceania",
  capital: "Majuro",
  currency: "USD",
  language: "Marshallese / English",
  timezone: "MHT (UTC+12)",
  visaDifficulty: "Medium",
  internetSpeed: "Average",
  costOfLiving: "Medium",
  avgMonthlyCost: 1600,
  seoTitle: "Working in the Marshall Islands: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in the Marshall Islands or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "USD economy—compact atoll administration in Majuro",
    "Fisheries, shipping registry, and US Compact-related roles",
    "English widely used in government and business",
    "Kwajalein Atoll hosts US Army Garrison—separate logistics ecosystem",
    "Tropical island living with limited retail depth",
  ],
  visaOptions: [
    {
      name: "Business / employment authorisation",
      duration: "Tied to employer",
      cost: "USD fees",
      requirements: "Employer petition to Chief Secretary / labour office—varies by sector",
    },
    {
      name: "Long-term investor categories",
      duration: "Case-based",
      cost: "Legal fees",
      requirements: "Business licence and capital—lawyer advised",
    },
  ],
  cities: [
    {
      name: "Majuro",
      vibe: "Narrow atoll strip, government, banks",
      avgRent: "$800–$1,800/month",
      coworkingSpaces: "Hotel business centres",
    },
    {
      name: "Ebeye (Kwajalein)",
      vibe: "Dense population near US base—access controlled",
      avgRent: "Employer housing typical",
      coworkingSpaces: "N/A",
    },
  ],
  costBreakdown: {
    rent: "$700–$1,600/month",
    food: "$350–$600/month",
    transport: "$100–$200/month",
    coworking: "Minimal",
  },
  taxInfo:
    "Payroll tax and social contributions apply in many formal jobs; US persons may have reporting complexity—use a tax adviser familiar with Compact countries.",
  communityTips:
    "Basket weaving and navigation culture strong—respect land tenure (customary) even on narrow strips.",
  bestFor: ["Government contractors", "Maritime sector", "Pacific development"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Foreign employment typically requires employer clearance before travel. Roles on Kwajalein often involve US federal contractors—separate onboarding and security rules.

Arrive with medical clearance; limited specialty care locally—evacuation insurance standard.

Work permits renewed with employment—do not overstay.

Shipping delays affect parts and groceries—flexibility required.
`.trim(),

  bankingTips: `
Bank of Guam, Bank of Marshall Islands—USD accounts. KYC strict—bring employment letters.

Cash common; cards in Majuro hotels.

Wire fees high—batch transfers.
`.trim(),

  healthcareInfo: `
Majuro hospital for basics; serious cases medevac to Hawaii or Guam.

Dengue risk—mosquito control.

Limited dental—plan check-ups abroad.

Emergency: 911 where available—confirm locally.
`.trim(),

  culturalTips: `
Conservative dress; church central Sunday quiet.

Nuclear legacy awareness—sensitive topic; follow local guidance on affected atolls.

Heat and salt corrosion—electronics degrade faster.

Water security variable—conserve usage.
`.trim(),

  realMonthlyCost: `
Example month Majuro (single, unsubsidised):

Rent (one-bed): $1,200
Utilities: $200
Groceries (import-heavy): $480
Dining out: $220
Fuel / taxi: $160
Phone + LTE: $90
Insurance: $140
Recreation: $100

Indicative total: ~$2,610 USD.
`.trim(),

  expatCommunities: [
    "Small expat Majuro circles",
    "Kwajalein contractor communities (restricted)",
  ],

  prosAndCons: {
    pros: [
      "USD pricing clarity",
      "Tight community",
      "Maritime and governance niche careers",
      "English in workplaces",
    ],
    cons: [
      "Isolation and limited shopping",
      "Healthcare constraints",
      "Climate vulnerability",
      "Narrow labour market outside specific sectors",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Majuro",
      neighbourhood: "Delap–Uliga–Djarrit corridor",
      description: "Main services along the road—check storm surge history.",
    },
  ],

  faqs: [
    {
      question: "Can tourists work remotely?",
      answer:
        "Do not assume legality—get explicit work authorisation; enforcement can disrupt stays.",
    },
  ],

  updated: "April 2026",
  wordCount: 1240,
};
