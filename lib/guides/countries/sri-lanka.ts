import type { CountryGuide } from "../types";

export const sriLanka: CountryGuide = {
  slug: "sri-lanka",
  country: "Sri Lanka",
  flag: "🇱🇰",
  continent: "Asia",
  capital: "Sri Jayawardenepura Kotte (administrative); Colombo (commercial)",
  currency: "LKR",
  language: "Sinhala, Tamil; English in business and tourism",
  timezone: "IST (UTC+5:30)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 800,
  seoTitle: "Working in Sri Lanka: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Sri Lanka for remote workers: Colombo, Kandy, Weligama — ETA, cost of living, power stability, and practical tips for 2026.",
  highlights: [
    "ETA online — visa extensions — verify immigration circulars",
    "Economic volatility — import prices — currency watch — cash buffers",
    "Colombo traffic — southern coast surf towns — fibre improving",
    "Kandy hills — cooler — monsoon patterns",
    "Respectful dress — religious sites — post-conflict sensitivity in discourse",
  ],
  visaOptions: [
    {
      name: "Tourist ETA / visa",
      duration: "30–180 days depending on nationality — extensions possible",
      cost: "ETA fee",
      requirements: "Return ticket — accommodation — follow entry port rules",
    },
    {
      name: "Business / long-stay categories",
      duration: "Sponsor-dependent — consult immigration",
      cost: "Fees vary",
      requirements: "Local entity or invitation letters",
    },
  ],
  cities: [
    {
      name: "Colombo",
      vibe: "Commercial capital — coastal — traffic — cafés in Cinnamon Gardens",
      avgRent: "$350–$950/month",
      coworkingSpaces: "Hive Colombo, coworking.lk, hotel business centres",
    },
    {
      name: "Kandy",
      vibe: "Hill country — Temple of the Tooth — cooler — rain",
      avgRent: "$280–$750/month",
      coworkingSpaces: "Small hubs — verify fibre — LTE backup",
    },
    {
      name: "Weligama",
      vibe: "Surf bay — nomad beach — seasonal — quieter monsoon",
      avgRent: "$300–$850/month",
      coworkingSpaces: "Beach cafés — confirm generator — co-living pockets",
    },
  ],
  costBreakdown: {
    rent: "$280–$950/month — south coast seasonality",
    food: "$180–$380/month — rice and curry vs imports",
    transport: "$40–$100/month — tuk-tuk + trains",
    coworking: "$60–$140/month",
  },
  taxInfo:
    "Sri Lankan tax residency for long-term residents — local earners — short tourist stays rarely trigger — employment needs local payroll advice — verify rules with a chartered accountant.",
  communityTips:
    "Power cuts — schedule backup — surge protectors — cash LKR — card acceptance returning uneven — WhatsApp tuk prices — train booking — leopards in parks — dengue — respect wildlife — full-moon Poya dry days — alcohol rules vary.",
  bestFor: ["Value", "Surf", "Tea country", "Beaches"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
ETA portal — print — immigration extensions — photos — avoid overstays — fines at exit.

Business visas — BOI routes for investors — consult licensed agents — documentation heavy.
`.trim(),

  bankingTips: `
Commercial Bank, HNB — accounts need residency proof — tourists use cash LKR + foreign cards — ATM limits — Wise limited.

Mobile money growing — carry small notes — exchange at banks — USD cash buffer for emergencies.
`.trim(),

  healthcareInfo: `
Asiri, Nawaloka — insurance with evacuation — dengue — road trauma — dental affordable — mental health access improving.

Emergency: 1990 Suwa Seriya — private ambulance in cities — public hospitals crowded.
`.trim(),

  culturalTips: `
Right hand — modest temples — cover shoulders — remove shoes — Buddha tattoos — photography rules — full silence on Poya in some areas — cricket passion — avoid sensitive political debates in public — hospitality generous — accept tea politely.
`.trim(),

  realMonthlyCost: `
Example month — Weligama:

Rent: $420
Utilities + LTE: $75
Tuk + scooter: $70
Food: $260
Coworking: $85
Insurance: $65
Surf / weekend: $100
Misc: $80

Indicative total: ~$1,155 — Colombo premium +20–35%.
`.trim(),

  expatCommunities: [
    "Colombo Expats",
    "South Sri Lanka Nomads",
  ],

  prosAndCons: {
    pros: [
      "Affordable lifestyle",
      "Nature and coast",
      "English pockets",
      "Warm culture",
    ],
    cons: [
      "Infrastructure stress",
      "Power stability",
      "Economic volatility",
      "Traffic Colombo",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Colombo",
      neighbourhood: "Cinnamon Gardens / Colpetty",
      description:
        "Green — cafés — embassies — higher rent — flooding pockets in monsoon.",
    },
  ],

  faqs: [
    {
      question: "Colombo or south coast for remote work?",
      answer:
        "Colombo for fibre and services — south coast for surf lifestyle — test power backup before signing long leases.",
    },
  ],

  updated: "April 2026",
  wordCount: 2200,
};
