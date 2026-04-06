import type { CountryGuide } from "../types";

export const cuba: CountryGuide = {
  slug: "cuba",
  country: "Cuba",
  flag: "🇨🇺",
  continent: "Caribbean",
  capital: "Havana",
  currency: "CUP / MLC cards (USD/EUR cash context — verify legal use)",
  language: "Spanish",
  timezone: "CST (UTC−5)",
  visaDifficulty: "Medium",
  internetSpeed: "Poor",
  costOfLiving: "Low",
  avgMonthlyCost: 900,
  seoTitle: "Working in Cuba: Remote Worker Context Guide (2026)",
  seoDescription:
    "Practical context for Cuba: Havana, connectivity limits, dual currency history, and why most remote workers only visit short-term with full legal clarity.",
  highlights: [
    "Limited public internet — hotspots and hotel Wi‑Fi — mobile data improving unevenly",
    "Dual economy context — cash and cards — rules change — verify before travel",
    "UNESCO Havana — music, classic cars, architecture — tourism-focused infrastructure",
    "US sanctions heavily affect banking — cards often fail — research your nationality's rules",
    "Not a default nomad hub — short cultural trips more common than long remote bases",
  ],
  visaOptions: [
    {
      name: "Tourist card / visa",
      duration: "Varies by nationality — often 30 days extendable",
      cost: "Airline or consulate fees",
      requirements: "Health insurance sometimes mandatory — onward ticket",
    },
    {
      name: "Other categories",
      duration: "Business, family, journalism — highly regulated",
      cost: "Case-specific",
      requirements: "Official channels only — avoid informal arrangements",
    },
  ],
  cities: [
    {
      name: "Havana",
      vibe: "Habana Vieja to Vedado — decayed grandeur, music everywhere — tourist economy",
      avgRent: "$400–$1,000/month (informal market — verify legality)",
      coworkingSpaces: "Rare — hotel lobbies — test speeds carefully",
    },
    {
      name: "Varadero",
      vibe: "Resort strip — beaches — not a serious remote-work base",
      avgRent: "$500–$1,200/month",
      coworkingSpaces: "Hotel business centres",
    },
    {
      name: "Santiago de Cuba",
      vibe: "Eastern city — Afro-Cuban culture — hotter, different rhythm than Havana",
      avgRent: "$300–$800/month",
      coworkingSpaces: "Minimal",
    },
  ],
  costBreakdown: {
    rent: "$300–$1,200/month — informal vs formal varies",
    food: "$150–$350/month — paladares vs state outlets",
    transport: "$20–$60/month — taxis and máquinas",
    coworking: "$40–$100/month",
  },
  taxInfo:
    "Cuban tax system applies to residents and certain activities — foreign remote workers rarely have clear pathways — assume professional advice is mandatory for anything beyond tourism.",
  communityTips:
    "Cash logistics dominate conversations — listen to locals' current reality, not 2015 blog posts. Music and dance — respect artists — tip for photos when asked. Internet — download offline maps — VPN legality unclear — research.",
  bestFor: ["Culture trips", "Spanish", "Music & history", "Short stays"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Obtain tourist cards through airlines or consulates — verify insurance requirements — US travellers have specific rules — use official OFAC guidance if US person.

Extensions at immigration — queues — carry copies — overstays risk fines.

Do not assume you can work locally or remotely without authorisation — penalties are serious.
`.trim(),

  bankingTips: `
Foreign cards often decline — carry multiple payment strategies — cash EUR/USD as backup per legal limits — never rely on one card.

Inform banks — Cuba triggers fraud blocks — ATM availability limited.
`.trim(),

  healthcareInfo: `
Tourist clinics in hotels — serious cases may require evacuation — insurance essential.

Dengue — repellent. Heat — hydration. Water — bottled for visitors often.

Emergency services — resource-constrained — private transport to hospitals in Havana when possible.
`.trim(),

  culturalTips: `
Politics is sensitive — listen respectfully. Queuing culture — patience. Shared taxis — negotiate before entering. Dress modestly in churches and government buildings.
`.trim(),

  realMonthlyCost: `
Illustrative only — highly variable — short tourist month vs informal long stay differ radically — treat numbers as scenario sketches, not promises.

Indicative tourist-heavy month in Havana guesthouse + cafés: $1,200–$2,000+ depending on FX and access.
`.trim(),

  expatCommunities: ["Small diplomatic / NGO circles — verify credentials"],

  prosAndCons: {
    pros: ["Culture", "Music", "Architecture", "Value for visitors"],
    cons: ["Internet", "Banking friction", "Not remote-work optimised", "Complex regulations"],
  },

  bestNeighbourhoods: [
    {
      city: "Havana",
      neighbourhood: "Vedado",
      description: "Grid streets — more residential than Old Havana noise — verify building safety.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely from Cuba?",
      answer:
        "Connectivity and legal context make long-term remote work uncommon — research current sanctions, visa category, and speak to qualified counsel before planning.",
    },
  ],

  updated: "April 2026",
  wordCount: 1800,
};
