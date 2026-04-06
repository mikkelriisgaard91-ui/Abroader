import type { CountryGuide } from "../types";

export const grenada: CountryGuide = {
  slug: "grenada",
  country: "Grenada",
  flag: "🇬🇩",
  continent: "Caribbean",
  capital: "St. George's",
  currency: "XCD (USD widely accepted)",
  language: "English",
  timezone: "AST (UTC−4)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 2000,
  seoTitle: "Working in Grenada: Remote Worker Guide (2026)",
  seoDescription:
    "Grenada (Spice Isle) for remote workers: St. George's, Grand Anse, medical school expat scene, nutmeg, and Eastern Caribbean life.",
  highlights: [
    "St. George's harbour — one of the prettiest capitals in the region",
    "Medical university brings rotating expat energy — housing competition in term seasons",
    "Spice plantations — hiking — waterfalls",
    "Hurricane season — insurance and building standards matter",
    "Smaller island — limited services vs Barbados — community tight",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 90 days — extensions per immigration",
      cost: "Low",
      requirements: "Onward ticket sometimes",
    },
    {
      name: "Work / residence",
      duration: "Case-specific — employment or investment",
      cost: "Fees + legal support",
      requirements: "Official immigration categories",
    },
  ],
  cities: [
    {
      name: "St. George's",
      vibe: "Hillside harbour — forts, markets, cruise days busy",
      avgRent: "$800–$1,800/month",
      coworkingSpaces: "Limited — café work — fibre in newer builds",
    },
    {
      name: "Grand Anse",
      vibe: "Beach strip — hotels and long-stay apartments",
      avgRent: "$1,000–$2,200/month",
      coworkingSpaces: "Hotel business centres",
      imageUrl: "/images/guide-cities/grenada/st-george-s.jpg",
    },
    {
      name: "Carriacou",
      vibe: "Sister isle — quieter — boat logistics",
      avgRent: "$600–$1,300/month",
      coworkingSpaces: "Minimal",
    },
  ],
  costBreakdown: {
    rent: "$600–$2,200/month",
    food: "$300–$500/month",
    transport: "$50–$120/month",
    coworking: "$90–$200/month",
  },
  taxInfo:
    "Tax residency rules apply if you become resident — offshore sector history — use licensed advisors — CRS applies to banks.",
  communityTips:
    "Spice Mas carnival — book early. Yachting scene — respect marina rules. Medical students — respect campus housing pressure on local rents.",
  bestFor: ["Nature", "English", "Yachting", "Regional hops"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration extensions — St. George's — carry copies — overstays risk fines.

Ferry to Carriacou — schedule around weather — seasickness real.
`.trim(),

  bankingTips: `
ECCB-region banks — cards in St. George's — cash on Carriacou — small XCD bills.

ATMs — fees — plan weekend cash — some islands run short on holidays.
`.trim(),

  healthcareInfo: `
General Hospital and private clinics — pay or insure — serious cases may evacuate — insurance essential.

Dengue — repellent. Dehydration — heat and humidity.

Emergency: 473-440-3535 — verify — 911 rollout — check current local numbers.
`.trim(),

  culturalTips: `
Friendly but small-island pace — gossip travels — discretion. Respect for elders — Sunday quieter. Nutmeg on everything — enjoy local cuisine.
`.trim(),

  realMonthlyCost: `
Example month — Grand Anse long-stay:

Rent: $1,100
Utilities + fibre: $130
Transport: $90
Groceries: $340
Eating out: $280
Coworking: $120
Insurance: $100
Misc: $100

Indicative total: ~$2,260 — medical term season can spike rents.
`.trim(),

  expatCommunities: ["Grenada expat Facebook", "Sailing WhatsApp"],

  prosAndCons: {
    pros: ["Beauty", "English", "Community", "Spice culture"],
    cons: ["Medical student rent pressure", "Hurricane risk", "Island limits"],
  },

  bestNeighbourhoods: [
    {
      city: "Grand Anse",
      neighbourhood: "Lance aux Epines",
      description: "Upscale residential — embassies — quieter nights — premium rents.",
    },
  ],

  faqs: [
    {
      question: "Main island or Carriacou?",
      answer:
        "Main island for services — Carriacou for quiet — ferry schedule is your lifestyle clock.",
    },
  ],

  updated: "April 2026",
  wordCount: 1550,
};
