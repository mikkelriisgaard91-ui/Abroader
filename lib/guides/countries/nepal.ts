import type { CountryGuide } from "../types";

export const nepal: CountryGuide = {
  slug: "nepal",
  country: "Nepal",
  flag: "🇳🇵",
  continent: "Asia",
  capital: "Kathmandu",
  currency: "NPR",
  language: "Nepali; English in tourism and NGOs",
  timezone: "NPT (UTC+5:45)",
  visaDifficulty: "Easy",
  internetSpeed: "Average",
  costOfLiving: "Low",
  avgMonthlyCost: 700,
  seoTitle: "Working in Nepal: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Nepal for remote workers: Kathmandu, Pokhara, Bhaktapur — visas on arrival, trekking logistics, cost of living, and practical tips for 2026.",
  highlights: [
    "Visa on arrival for many nationalities — extend at immigration — fees in USD",
    "Kathmandu Valley pollution winter — masks — earthquake preparedness",
    "Pokhara lakeside calm — fibre improving — monsoon landslide risk on roads",
    "Bhaktapur heritage — quieter nights — narrow lanes — power dips",
    "Altitude — acclimatise before treks — insurance with helicopter evac",
  ],
  visaOptions: [
    {
      name: "Tourist visa on arrival / extension",
      duration: "15–90 days depending on stamp — extend in Kathmandu",
      cost: "USD fees at airport or border",
      requirements: "Passport photos — onward ticket sometimes — register trekking permits via agencies",
    },
    {
      name: "Business / work permits",
      duration: "Sponsor-dependent — DOFE / labour routes",
      cost: "Processing fees",
      requirements: "Nepali entity — documentation",
    },
  ],
  cities: [
    {
      name: "Kathmandu",
      vibe: "Valley sprawl — Thamel tourism — traffic — NGO density",
      avgRent: "$250–$750/month",
      coworkingSpaces: "WorkAround, Kaffeine, Jhamsikhel cafés",
    },
    {
      name: "Pokhara",
      vibe: "Lake Fewa — paragliding — quieter than KTM — monsoon humidity",
      avgRent: "$220–$650/month",
      coworkingSpaces: "The Lakeside hubs — hotel fibre — LTE backup",
    },
    {
      name: "Bhaktapur",
      vibe: "Brick lanes — heritage fees — slower — day-trip to KTM",
      avgRent: "$200–$550/month",
      coworkingSpaces: "Minimal — cafés — commute to Patan/KTM for hubs",
    },
  ],
  costBreakdown: {
    rent: "$200–$750/month — Lakeside premium Pokhara",
    food: "$150–$300/month — dal bhat vs imports",
    transport: "$25–$70/month — taxis + domestic flights",
    coworking: "$50–$120/month",
  },
  taxInfo:
    "Nepali tax rules apply to residents and local earners — short tourist stays rarely trigger — consultancy invoicing locally needs a Nepali CA — treaty positions limited.",
  communityTips:
    "Cash NPR — ATM limits — power cuts — inverter or generator questions — filter water — dengue lower valleys — trekking TIMS/permits — respect Hindu/Buddhist sites — avoid public criticism of politics — WhatsApp housing scams — view in person.",
  bestFor: ["Value", "Trekking", "Community", "Mountains"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Tribhuvan Airport visa on arrival — USD cash — photos — queue patience — extensions at Kalikasthan immigration — trekking permits via registered agencies — TIMS cards — do not trek without insurance.

Earthquake kit — water — torch — know hospital routes.
`.trim(),

  bankingTips: `
Nabil, Standard Chartered — accounts need long-stay — tourists use cash + foreign cards in cities — ATM fees — Wise limited.

Remittance via formal channels — hawala informal — avoid unlicensed FX.
`.trim(),

  healthcareInfo: `
CIWEC, Norvic — travel insurance with evac — altitude sickness — food hygiene — rabies — motorbike trauma.

Serious cases evac to Delhi or Bangkok — verify policy altitude limits for trekking.
`.trim(),

  culturalTips: `
Right hand — remove shoes temples — walk clockwise stupas — modest dress — ask before photos — caste sensitivity — head sacred — feet away from people — Namaste greeting — avoid leather in some temples — patience with load shedding.
`.trim(),

  realMonthlyCost: `
Example month — Pokhara Lakeside:

Rent: $400
Utilities + LTE: $65
Scooter + taxi: $55
Food: $220
Coworking: $70
Insurance + trekking permit amortised: $90
Misc: $70

Indicative total: ~$970 — Kathmandu Thamel similar rent bands; Bhaktapur lower.
`.trim(),

  expatCommunities: [
    "Kathmandu Expats",
    "Pokhara Digital Nomads",
  ],

  prosAndCons: {
    pros: [
      "Affordable",
      "Mountain access",
      "English in tourism",
      "Warm hospitality",
    ],
    cons: [
      "Pollution KTM valley",
      "Power instability",
      "Road safety",
      "Healthcare limits",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Kathmandu",
      neighbourhood: "Patan / Jhamsikhel",
      description:
        "Cafés — expat families — quieter than Thamel — check water tank delivery.",
    },
  ],

  faqs: [
    {
      question: "Kathmandu or Pokhara for remote work?",
      answer:
        "Kathmandu for flights and services — Pokhara for pace and views — test internet both — Pokhara monsoon landslides affect road travel.",
    },
  ],

  updated: "April 2026",
  wordCount: 2150,
};
