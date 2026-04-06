import type { CountryGuide } from "../types";

export const antiguaAndBarbuda: CountryGuide = {
  slug: "antigua-and-barbuda",
  country: "Antigua and Barbuda",
  flag: "🇦🇬",
  continent: "Caribbean",
  capital: "St. John's",
  currency: "XCD (USD widely accepted)",
  language: "English",
  timezone: "AST (UTC−4)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 2200,
  seoTitle: "Working in Antigua and Barbuda: Remote Worker Guide (2026)",
  seoDescription:
    "Antigua and Barbuda for digital nomads: English Harbour, sailing culture, visas, hurricane season, and cost of living in the Eastern Caribbean.",
  highlights: [
    "English-speaking — yachting and regatta culture",
    "365 beaches tagline — compact island for exploring",
    "Tourism and offshore services economy — seasonal crowds",
    "Hurricane season June–November — insurance and backup power",
    "Digital nomad visa announced historically — verify current immigration rules",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 30–90 days — nationality-dependent",
      cost: "Low",
      requirements: "Passport, onward ticket sometimes — verify with embassy",
    },
    {
      name: "Long-stay / work categories",
      duration: "Case-specific — employment or investment",
      cost: "Fees + legal support",
      requirements: "Official immigration lists — police certificates as required",
    },
  ],
  cities: [
    {
      name: "St. John's",
      vibe: "Capital and cruise port — shopping, services, local markets",
      avgRent: "$900–$1,800/month",
      coworkingSpaces: "Limited — café work — verify fibre",
    },
    {
      name: "English Harbour",
      vibe: "Yachting epicentre — Nelson's Dockyard, regatta weeks, expat sailing crowd",
      avgRent: "$1,000–$2,200/month",
      coworkingSpaces: "Minimal — marina Wi‑Fi",
    },
    {
      name: "Jolly Harbour",
      vibe: "Gated marina community — quieter residential feel",
      avgRent: "$1,100–$2,000/month",
      coworkingSpaces: "Home office default",
    },
  ],
  costBreakdown: {
    rent: "$900–$2,200/month",
    food: "$350–$550/month — imports costly",
    transport: "$50–$120/month — rental car common",
    coworking: "$100–$220/month",
  },
  taxInfo:
    "Tax residency rules apply if you become ordinarily resident — many short-stay tourists do not trigger obligations. Offshore sector has compliance history — use licensed professionals for structuring.",
  communityTips:
    "Sailing credentials open social life — respect regatta noise calendars. Carnival and August Monday — book housing early. Mosquito protocols — dengue awareness.",
  bestFor: ["Sailing", "English", "Beach lifestyle", "Eastern Caribbean hops"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration extensions at Antigua offices — queue early, carry passport copies. Overstays risk fines — settle before departure.

Work permits require employer sponsorship — remote foreign income may not map to standard categories — counsel helps for long stays.

Hurricane preparedness — shutters, insurance, document scans in cloud.
`.trim(),

  bankingTips: `
Local banks serve residents — tourists use foreign cards — USD/XCD. ATMs in St. John's — fees vary — carry small XCD for vendors.

Offshore banking history — compliance tightened — use regulated institutions only.
`.trim(),

  healthcareInfo: `
MSJMC and private clinics in St. John's — serious cases may medevac to Miami. Travel insurance with evacuation essential.

Dengue — repellent. Sun exposure serious — hydrate. Emergency: 911 or 999 — verify locally.
`.trim(),

  culturalTips: `
Friendly but small-island pace — gossip travels fast — discretion matters. Dress modestly away from beach strips. Cricket passion — join conversations respectfully.
`.trim(),

  realMonthlyCost: `
Example month — English Harbour–adjacent, modest yacht-adjacent lifestyle:

Rent: $1,400
Utilities + backup internet: $180
Car rental share: $200
Groceries + imports: $480
Eating out: $350
Marina / club fees buffer: $150
Insurance: $120
Misc: $120

Indicative total: ~$3,000 — swings with season and housing tier.
`.trim(),

  expatCommunities: ["Antigua expat Facebook", "Sailing WhatsApp groups"],

  prosAndCons: {
    pros: ["English", "Sailing scene", "Beaches", "Regional flight links"],
    cons: ["Hurricane risk", "High import prices", "Small market services"],
  },

  bestNeighbourhoods: [
    {
      city: "English Harbour",
      neighbourhood: "Dockyard area",
      description: "Yacht services — noisy during regattas — premium rents.",
    },
  ],

  faqs: [
    {
      question: "Antigua vs Barbuda?",
      answer:
        "Most services on Antigua — Barbuda quieter, smaller — logistics differ after storm rebuild years — research current ferry and services.",
    },
  ],

  updated: "April 2026",
  wordCount: 1600,
};
