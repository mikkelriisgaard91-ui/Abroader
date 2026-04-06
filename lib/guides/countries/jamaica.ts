import type { CountryGuide } from "../types";

export const jamaica: CountryGuide = {
  slug: "jamaica",
  country: "Jamaica",
  flag: "🇯🇲",
  continent: "Caribbean",
  capital: "Kingston",
  currency: "JMD (USD in tourism)",
  language: "English; Jamaican Patois widely spoken",
  timezone: "EST (UTC−5)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1200,
  seoTitle: "Working in Jamaica: Remote Worker Guide (2026)",
  seoDescription:
    "Jamaica for digital nomads: Kingston, Montego Bay, Negril, music culture, cost of living, and neighbourhood safety planning.",
  highlights: [
    "Global music culture — reggae, dancehall — respect as living heritage",
    "Tourism economy — north coast resorts vs Kingston business differ sharply",
    "English official — Patois in daily life — learn basic phrases",
    "Hurricane season — north coast exposure — insurance",
    "Fibre in urban pockets — test before rural promises",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 90 days — extensions per immigration",
      cost: "Low",
      requirements: "Onward ticket sometimes — funds",
    },
    {
      name: "Work permits",
      duration: "Employer-sponsored — entertainment industry common",
      cost: "Fees",
      requirements: "Local labour market tests — not casual for remote foreign employers",
    },
  ],
  cities: [
    {
      name: "Kingston",
      vibe: "Business and culture — New Kingston, hills — security neighbourhood-specific",
      avgRent: "$500–$1,400/month",
      coworkingSpaces: "Spaces, café scene — fibre improving",
    },
    {
      name: "Montego Bay",
      vibe: "Resort coast — airport hub — tourist services",
      avgRent: "$600–$1,600/month",
      coworkingSpaces: "Hotel hubs — test speeds",
    },
    {
      name: "Negril",
      vibe: "Cliff and beach — sunset culture — slower",
      avgRent: "$550–$1,400/month",
      coworkingSpaces: "Café Wi‑Fi — backup LTE",
    },
  ],
  costBreakdown: {
    rent: "$500–$1,600/month",
    food: "$220–$420/month",
    transport: "$40–$120/month",
    coworking: "$80–$200/month",
  },
  taxInfo:
    "Tax residency applies if you become resident — remote workers on short stays rarely trigger — long-term bases need Jamaican CPA.",
  communityTips:
    "Security: gated communities common — ask locals — vary routines — avoid flashing valuables. Road traffic — left-hand driving — potholes. Jerk culture — enjoy roadside food — hygiene judgement.",
  bestFor: ["Music", "English + Patois", "Beaches", "US flights"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration extensions — Kingston offices — overstays risk fines — pay before exit.

Earthquake awareness — know exits — building codes vary.

Medical insurance — private hospitals in Kingston — resort clinics for basics.
`.trim(),

  bankingTips: `
NCB, Scotiabank Jamaica — residents — tourists use cards in tourist zones — JMD for local markets.

ATMs — fees — use daylight — bank lobbies when possible.
`.trim(),

  healthcareInfo: `
University Hospital of the West Indies — private providers — pay or insure — dengue — Zika history — pregnancy planning.

Emergency: 110 — verify — ambulance quality varies — private transport in Kingston when possible.
`.trim(),

  culturalTips: `
Respect Rastafari culture — ask before photos at ceremonies. Crime reporting — avoid sensationalism — listen to Jamaican perspectives on safety. Patois endearment — effort matters.
`.trim(),

  realMonthlyCost: `
Example month — Kingston New Kingston profile:

Rent: $900
Utilities + fibre: $95
Transport + driver occasional: $150
Groceries: $280
Eating out: $240
Coworking: $110
Insurance: $85
Misc: $120

Indicative total: ~$1,980 — Montego Bay resort-adjacent can run higher.
`.trim(),

  expatCommunities: ["Jamaica expat Facebook", "Kingston tech meetups"],

  prosAndCons: {
    pros: ["Culture", "Beaches", "Music", "Direct US flights"],
    cons: ["Safety homework", "Traffic", "Infrastructure uneven"],
  },

  bestNeighbourhoods: [
    {
      city: "Kingston",
      neighbourhood: "New Kingston",
      description: "Business hotels — restaurants — verify building security — night driving judgement.",
    },
  ],

  faqs: [
    {
      question: "Kingston or coast?",
      answer:
        "Kingston for services and culture — coast for resort comfort — different security profiles — research neighbourhoods.",
    },
  ],

  updated: "April 2026",
  wordCount: 1750,
};
