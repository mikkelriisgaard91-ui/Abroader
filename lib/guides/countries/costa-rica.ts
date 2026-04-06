import type { CountryGuide } from "../types";

export const costaRica: CountryGuide = {
  slug: "costa-rica",
  country: "Costa Rica",
  flag: "🇨🇷",
  continent: "North America",
  capital: "San José",
  currency: "CRC (USD common in tourism)",
  language: "Spanish",
  timezone: "CST (UTC−6)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1800,
  seoTitle: "Working in Costa Rica: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Costa Rica for remote workers: San José, beach towns, digital nomad visa, pura vida culture, and cost of living in 2026.",
  highlights: [
    "Digital nomad visa (estancia) — confirm income thresholds with DGME",
    "No army — stability narrative; eco-tourism backbone",
    "Pacific and Caribbean coasts — microclimates",
    "Pura vida pace — slower bureaucracy, warmer social life",
    "Rainy season greens the country — plan fibre and backup power",
  ],
  visaOptions: [
    {
      name: "Digital nomad / remote worker (estancia)",
      duration: "Up to 1 year renewable — policy details on DGME",
      cost: "Fees + insurance",
      requirements:
        "Remote income minimums, insurance, clean record — official PDFs only",
    },
    {
      name: "Tourist visa / visa waiver",
      duration: "Often 90 days — extensions possible",
      cost: "Low",
      requirements: "Passport, onward ticket sometimes",
    },
  ],
  cities: [
    {
      name: "San José",
      vibe: "Escazú, Rohrmoser expat pockets — services, flights, altitude mild",
      avgRent: "$800–$1,800/month",
      coworkingSpaces: "Gracias, cowork chains, café bandwidth",
    },
    {
      name: "Tamarindo",
      vibe: "Pacific surf town — touristy, social, seasonal crowds",
      avgRent: "$900–$2,000/month",
      coworkingSpaces: "Selina, beach cafés — test speeds",
    },
    {
      name: "Puerto Viejo",
      vibe: "Caribbean coast — Afro-Caribbean culture, reggae vibe, humid",
      avgRent: "$600–$1,400/month",
      coworkingSpaces: "Limited — home office + lodge Wi‑Fi",
    },
  ],
  costBreakdown: {
    rent: "$600–$2,000/month",
    food: "$300–$450/month",
    transport: "$40–$120/month",
    coworking: "$100–$220/month",
  },
  taxInfo:
    "Tax residency triggers if you become resident — remote workers on temporary visas should clarify obligations with a Costa Rican CPA. Territorial tax system historically attracts discussion — rules evolve — professional advice only.",
  communityTips:
    "Sloths are national mascots — respect wildlife corridors. Spanish unlocks landlord deals. WhatsApp for everything. Sunday family days — supermarkets may close early.",
  bestFor: ["Nature", "Surf", "Nomad community", "US time zones"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
DGME digital nomad applications require apostilled background checks, income proof, insurance meeting minimums, and fee payment — rejections often trace to incomplete insurance wording.

Tourist extensions via border runs or immigration appointments — policies tighten periodically — follow official channels.

After approval, obtain DIMEX where applicable — register for CAJA if you become resident under categories that require it — not all nomads do.

Earthquake and volcanic risk — download alert apps. Driving requires patience — roads and signage vary.
`.trim(),

  bankingTips: `
BAC, BCR, Scotiabank CR open accounts with DIMEX — tourists use foreign cards + Wise. Colones for local markets — USD for tourist services.

ATMs dispense colones and sometimes USD — fees vary. Mobile wallets growing — ask locals for the current favourite app.

Carry colones for highway tolls — some lanes are cash-only.
`.trim(),

  healthcareInfo: `
Private hospitals in San José (CIMA, Clínica Bíblica) are strong — insurance or cash. CAJA public system for residents — queues exist.

Dengue in wet season — mosquito control at home. Tap water generally safe in cities — verify in rural areas.

Emergency: 911 — ambulance quality varies by zone — private transport sometimes faster in cities.
`.trim(),

  culturalTips: `
Indirect communication — avoid harsh confrontations. Tipping ~10% if not included in restaurants.

Pura vida is not just a slogan — patience is practical. LGBTQ+ rights advanced regionally — rural norms vary.

Noise: bars near beach towns — scout night noise before leases.
`.trim(),

  realMonthlyCost: `
Example month — Central Valley commuter:

Rent: $1,100
Utilities + fibre: $95
Transport + car share: $150
Groceries: $320
Eating out: $280
Coworking: $140
Spanish lessons: $100
Private health: $90
Weekend beach trip: $180
Misc: $100

Indicative total: ~$2,555. Tamarindo can add 20–40% in peak season.
`.trim(),

  expatCommunities: [
    "Costa Rica Facebook expat groups",
    "Digital nomad WhatsApp circles",
    "Surf meetups",
  ],

  prosAndCons: {
    pros: [
      "Stable democracy",
      "Nature",
      "Nomad visa option",
      "Friendly culture",
    ],
    cons: [
      "Rainy season logistics",
      "Car import costs if you ship",
      "Bureaucracy for long stays",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "San José",
      neighbourhood: "Escazú",
      description:
        "Upscale, malls, expat services — premium rents — good for families.",
    },
  ],

  faqs: [
    {
      question: "Beach or valley?",
      answer:
        "Valley for services and climate; beaches for lifestyle — humidity and infrastructure trade-offs.",
    },
  ],

  updated: "April 2026",
  wordCount: 2000,
};
