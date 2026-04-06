import type { CountryGuide } from "../types";

export const laos: CountryGuide = {
  slug: "laos",
  country: "Laos",
  flag: "🇱🇦",
  continent: "Asia",
  capital: "Vientiane",
  currency: "LAK / USD in tourist areas",
  language: "Lao; English limited outside hubs",
  timezone: "ICT (UTC+7)",
  visaDifficulty: "Easy",
  internetSpeed: "Average",
  costOfLiving: "Low",
  avgMonthlyCost: 750,
  seoTitle: "Working in Laos: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Laos for remote workers: Vientiane, Luang Prabang, Vang Vieng — visa on arrival, extensions, cost of living, and practical tips for 2026.",
  highlights: [
    "Visa on arrival / e-visa — border runs to Thailand — verify stamp duration",
    "Slow pace — power stability improving — backup LTE essential outside Vientiane",
    "Luang Prabang UNESCO calm — tourism peaks — humid wet season",
    "Vang Vieng backpacker legacy — limestone views — quieter weekdays",
    "Landlocked — regional flights via Bangkok or Hanoi — plan buffers",
  ],
  visaOptions: [
    {
      name: "Tourist visa on arrival / e-visa",
      duration: "30 days extendable — immigration offices",
      cost: "Stamp fee + extension charges",
      requirements: "Passport photo — cash USD — onward ticket sometimes",
    },
    {
      name: "Business / long-stay categories",
      duration: "Sponsor-dependent — consult immigration",
      cost: "Fees vary",
      requirements: "Local entity or authorised sponsor",
    },
  ],
  cities: [
    {
      name: "Vientiane",
      vibe: "Mekong capital — low-rise — NGO and donor presence — hottest months brutal",
      avgRent: "$300–$800/month",
      coworkingSpaces: "TOH Lao Coworking, small cafés — verify fibre before lease",
    },
    {
      name: "Luang Prabang",
      vibe: "Temple town — river — UNESCO — early curfew culture — tourism-driven",
      avgRent: "$350–$900/month",
      coworkingSpaces: "Boutique hubs — hotel lobbies — LTE backup",
    },
    {
      name: "Vang Vieng",
      vibe: "River and karst — smaller — party weekends — quieter remote crowd midweek",
      avgRent: "$250–$650/month",
      coworkingSpaces: "Minimal — cafés — confirm generator hours",
    },
  ],
  costBreakdown: {
    rent: "$250–$900/month — Luang Prabang premium",
    food: "$150–$320/month — street vs tourist restaurants",
    transport: "$25–$70/month — tuk-tuk + occasional domestic flights",
    coworking: "$50–$120/month",
  },
  taxInfo:
    "Laos tax rules target residents and local earners — short tourist stays rarely trigger obligations — local employment or long business visas need Lao tax advice — treaty network limited.",
  communityTips:
    "Cash king — ATMs limited — crisp USD — respect monks — quiet dawn alms — no feet toward people — modest dress — slow internet — schedule uploads overnight — scooter helmets on highways.",
  bestFor: ["Value", "Nature", "Slow travel", "Temple culture"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Immigration offices in Vientiane — extensions — photos — patience — avoid overstays — fines at exit.

Business visas — ministry letters — use reputable agents — timelines slip — plan flights flexibly.
`.trim(),

  bankingTips: `
BCEL, JDB — accounts need long-stay docs — tourists use cash + foreign cards in cities — ATM fees and limits — Wise limited.

USD for big purchases — kip for small vendors — exchange at banks not street if possible.
`.trim(),

  healthcareInfo: `
Vientiane French Clinic, Alliance — serious cases evac to Thailand — dengue — food hygiene — motorbike risk — travel insurance mandatory.

Emergency: limited — private transport to Thailand border in crises — carry cash deposit.
`.trim(),

  culturalTips: `
Buddhist norms — remove shoes — quiet around temples — conservative dress — public affection restrained — hierarchy respected — smile diplomacy — avoid loud complaints — save face.
`.trim(),

  realMonthlyCost: `
Example month — Luang Prabang:

Rent: $500
Utilities + LTE: $75
Tuk-tuk + bike: $50
Food: $220
Coworking / café spend: $80
Insurance: $60
Weekend trip: $70
Misc: $70

Indicative total: ~$1,125 — Vientiane similar; Vang Vieng lower rent possible.
`.trim(),

  expatCommunities: [
    "Vientiane Expats",
    "Luang Prabang Community",
  ],

  prosAndCons: {
    pros: [
      "Affordable",
      "Calm pace",
      "Natural beauty",
      "Friendly locals",
    ],
    cons: [
      "Internet limits",
      "Healthcare thin",
      "Heat and smoke seasons",
      "Cash logistics",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Luang Prabang",
      neighbourhood: "Peninsula / Mount Phousi fringe",
      description:
        "Walkable — temple access — tourist noise weekends — verify flood in wet season.",
    },
  ],

  faqs: [
    {
      question: "Is Laos reliable for video calls?",
      answer:
        "Vientiane and Luang Prabang hubs are workable — test fibre week one — always have LTE backup and a generator-aware landlord in provinces.",
    },
  ],

  updated: "April 2026",
  wordCount: 2100,
};
