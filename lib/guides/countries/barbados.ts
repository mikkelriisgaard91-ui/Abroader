import type { CountryGuide } from "../types";

export const barbados: CountryGuide = {
  slug: "barbados",
  country: "Barbados",
  flag: "🇧🇧",
  continent: "Caribbean",
  capital: "Bridgetown",
  currency: "BBD (USD often accepted 1:2)",
  language: "English",
  timezone: "AST (UTC−4)",
  visaDifficulty: "Easy",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 2400,
  seoTitle: "Working in Barbados: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Barbados for remote workers: Welcome Stamp history, Bridgetown, west coast living, fibre internet, and Caribbean stability context.",
  highlights: [
    "Welcome Stamp put Barbados on the nomad map — verify successor programmes and fees",
    "Strong fibre infrastructure — regional tech hub aspirations",
    "English-speaking — cricket, rum, calypso culture",
    "East vs west coast — surf vs calm — housing prices diverge",
    "Outside main hurricane belt — but still plan insurance",
  ],
  visaOptions: [
    {
      name: "Welcome Stamp (digital nomad programme)",
      duration: "12-month style programmes — check immigration site for current branding",
      cost: "Application fees + income thresholds",
      requirements: "Remote income proof, insurance — official checklist",
    },
    {
      name: "Tourist entry",
      duration: "Often 28 days extendable — verify stamp",
      cost: "Low",
      requirements: "Onward ticket sometimes",
    },
  ],
  cities: [
    {
      name: "Bridgetown",
      vibe: "UNESCO historic core — business, port, traffic peaks",
      avgRent: "$900–$1,900/month",
      coworkingSpaces: "Ten Habitat, Regus, café scene",
    },
    {
      name: "Holetown",
      vibe: "West coast — upscale dining, golf, expat residential",
      avgRent: "$1,200–$2,800/month",
      coworkingSpaces: "Hotel business centres — fibre strong",
    },
    {
      name: "Oistins",
      vibe: "South coast fish fry culture — more local pricing than west",
      avgRent: "$800–$1,600/month",
      coworkingSpaces: "Café work — test evening noise near fish fry",
    },
  ],
  costBreakdown: {
    rent: "$800–$2,800/month",
    food: "$350–$550/month",
    transport: "$60–$150/month — ZR vans + ride-hail",
    coworking: "$120–$260/month",
  },
  taxInfo:
    "Tax treatment depends on residency status and programme rules — do not assume zero tax globally — coordinate Bajan advisor with home-country obligations. CRS reporting applies to financial institutions.",
  communityTips:
    "Crop Over — book housing early. Friday fish fry etiquette — queues are social. Driving on the left — UK legacy. Respect local dialect — Bajan identity is pride.",
  bestFor: ["Fibre", "English", "Stability", "Direct UK/US flights"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration website publishes remote-worker programme updates — download PDFs fresh — rules and fees change.

Extensions for tourist stays — queues — arrive with exact change and copies.

After approval, open local bank with permitted documentation — utilities for address proof.
`.trim(),

  bankingTips: `
CIBC FirstCaribbean, Republic Bank, etc. — residents — tourists use cards — BBD/USD dual pricing — clarify before paying.

ATMs in Bridgetown — fees vary — carry small BBD for vans.
`.trim(),

  healthcareInfo: `
Queen Elizabeth Hospital and private Sandy Crest — pay or insure — diabetes and hypertension prevalent — travel insurance for visitors.

Dengue — repellent. Sun — serious — SPF habit.

Emergency: 211 — verify — private ambulance options exist.
`.trim(),

  culturalTips: `
Church and family central — Sunday quieter. Dress code in some establishments — smart casual default. Cricket conversations — respectful banter.
`.trim(),

  realMonthlyCost: `
Example month — south coast apartment:

Rent: $1,350
Utilities + fibre: $140
Transport: $100
Groceries: $380
Eating out: $320
Coworking: $160
Insurance: $95
Misc: $120

Indicative total: ~$2,665 — west coast premium higher.
`.trim(),

  expatCommunities: ["Barbados expat Facebook", "Welcome Stamp alumni groups"],

  prosAndCons: {
    pros: ["Internet quality", "English", "Safety vs regional peers", "Culture"],
    cons: ["Costs vs Central America", "Traffic peaks", "Import prices"],
  },

  bestNeighbourhoods: [
    {
      city: "Holetown",
      neighbourhood: "Sandy Lane adjacency",
      description: "Premium — golf and beach clubs — verify HOA-style fees.",
    },
  ],

  faqs: [
    {
      question: "East or west coast?",
      answer:
        "West calmer for swimming — east surf — rent and vibe differ — visit both before leases.",
    },
  ],

  updated: "April 2026",
  wordCount: 1750,
};
