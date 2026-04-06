import type { CountryGuide } from "../types";

export const dominicanRepublic: CountryGuide = {
  slug: "dominican-republic",
  country: "Dominican Republic",
  flag: "🇩🇴",
  continent: "Caribbean",
  capital: "Santo Domingo",
  currency: "DOP (USD in tourism)",
  language: "Spanish",
  timezone: "AST (UTC−4)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1300,
  seoTitle: "Working in the Dominican Republic: Remote Worker Guide (2026)",
  seoDescription:
    "Dominican Republic for digital nomads: Santo Domingo, Punta Cana, Puerto Plata, residency options, cost of living, and safety planning.",
  highlights: [
    "Large Caribbean country — beaches, mountains, city life",
    "Popular with North American tourists — Spanish essential outside resorts",
    "Residency pathways for investors and retirees — verify current income thresholds",
    "Hurricane season — north coast and east differ in exposure",
    "Fibre expanding in cities — test before signing long leases",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 30 days extendable — verify stamp",
      cost: "Low",
      requirements: "Tourist card on arrival for some nationalities",
    },
    {
      name: "Residencia temporal / inversionista",
      duration: "Renewable — categories on DGME site",
      cost: "Fees + translations",
      requirements: "Income or investment proof — health insurance — background checks",
    },
  ],
  cities: [
    {
      name: "Santo Domingo",
      vibe: "Colonial Zona + modern Piantini — business hub — traffic and heat",
      avgRent: "$500–$1,400/month",
      coworkingSpaces: "Coworking chains, café bandwidth",
    },
    {
      name: "Punta Cana",
      vibe: "Resort coast — tourist services — less authentic but comfortable",
      avgRent: "$600–$1,600/month",
      coworkingSpaces: "Hotel business centres — fibre variable",
    },
    {
      name: "Puerto Plata",
      vibe: "North coast — cable car, amber — expat pockets",
      avgRent: "$450–$1,200/month",
      coworkingSpaces: "Limited — home office",
    },
  ],
  costBreakdown: {
    rent: "$450–$1,600/month",
    food: "$220–$400/month",
    transport: "$40–$100/month",
    coworking: "$80–$180/month",
  },
  taxInfo:
    "Tax residency applies if you become resident — territorial elements historically discussed — rules evolve — Dominican CPA essential before structuring long stays.",
  communityTips:
    "Bachata and merengue — join social dancing carefully. Traffic and motoconchos — helmet culture — negotiate fares first. Beach safety — flag systems — respect currents.",
  bestFor: ["Value", "Beaches", "Spanish immersion", "US flights"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
DGME digital systems expand — residency appointments — apostilled FBI checks common for US citizens — translations.

Overstay fines — pay at airport — avoid informal fixers.

Driving — IDP sometimes — traffic laws enforced unevenly — dashcam culture growing.
`.trim(),

  bankingTips: `
Banco Popular, BHD, etc. — residents — tourists use cards — DOP for local markets — USD for tourist services.

ATMs — fees — use bank lobbies in cities — avoid night withdrawals in isolated ATMs.
`.trim(),

  healthcareInfo: `
Private hospitals in Santo Domingo — pay or insure — resort clinics for minor issues.

Dengue — dengue vaccine conversation with doctor — Zika history — pregnancy planning.

Emergency: 911 — verify — ambulance quality varies — private transport in cities.
`.trim(),

  culturalTips: `
Family-first — respect elders. Loud music norms — neighbours — scout noise before leases. Baseball unites — join conversations casually.
`.trim(),

  realMonthlyCost: `
Example month — Santo Domingo, Piantini-ish:

Rent: $850
Utilities + fibre: $85
Transport (Uber + metro): $90
Groceries: $260
Eating out: $220
Coworking: $110
Spanish classes: $80
Insurance: $75
Misc: $120

Indicative total: ~$1,890. Punta Cana adds resort premiums.
`.trim(),

  expatCommunities: ["DR expat Facebook", "Santo Domingo meetups"],

  prosAndCons: {
    pros: ["Affordable", "Beaches", "Direct flights", "Diverse geography"],
    cons: ["Traffic", "Heat", "Safety varies by neighbourhood"],
  },

  bestNeighbourhoods: [
    {
      city: "Santo Domingo",
      neighbourhood: "Piantini / Naco",
      description: "Business district — newer towers — verify generator backup.",
    },
  ],

  faqs: [
    {
      question: "Punta Cana or capital?",
      answer:
        "Resort comfort vs services and culture — Spanish matters more in Santo Domingo daily life.",
    },
  ],

  updated: "April 2026",
  wordCount: 1850,
};
