import type { CountryGuide } from "../types";

export const taiwan: CountryGuide = {
  slug: "taiwan",
  country: "Taiwan",
  flag: "🇹🇼",
  continent: "Asia",
  capital: "Taipei",
  currency: "TWD",
  language: "Mandarin (Traditional); English in tech circles",
  timezone: "CST (UTC+8)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 1600,
  seoTitle: "Working in Taiwan: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Taiwan for remote workers: Taipei, Kaohsiung, Taichung — Gold Card, cost of living, healthcare, transport, and practical tips for 2026.",
  highlights: [
    "Employment Gold Card for talent — verify occupation lists and salary thresholds",
    "World-class fibre — café density — night markets — scooters ubiquitous",
    "Earthquakes — building codes improved — know evacuation stairs",
    "Humid subtropical climate — typhoons — umbrella year-round",
    "Convenient regional hops — Japan, Korea, Southeast Asia",
  ],
  visaOptions: [
    {
      name: "Visa-exempt / visitor visa",
      duration: "Varies by nationality — often 90 days — extend in policy windows",
      cost: "Free or visa fee",
      requirements: "Onward ticket — no local employment without work rights",
    },
    {
      name: "Employment Gold Card",
      duration: "1–3 years renewable — open work permission",
      cost: "Application fee + documents",
      requirements: "Skills in MOEA list or salary thresholds — background checks",
    },
    {
      name: "Employer-sponsored work permits",
      duration: "Role-specific — ARC pathway",
      cost: "Employer fees",
      requirements: "Local entity sponsorship — qualifications recognised",
    },
  ],
  cities: [
    {
      name: "Taipei",
      vibe: "Basement-level MRT — Daan / Xinyi nomad pockets — night markets — hills nearby",
      avgRent: "$600–$1,500/month",
      coworkingSpaces: "CLBC, The Hive, FutureWard, 24h study cafés",
    },
    {
      name: "Kaohsiung",
      vibe: "Harbour city — warmer — lower rent — growing startup scene",
      avgRent: "$400–$1,000/month",
      coworkingSpaces: "KOspace, Kaohsiung Software Park hubs",
    },
    {
      name: "Taichung",
      vibe: "Central Taiwan — milder than south — art and cafés — motorway links",
      avgRent: "$400–$1,000/month",
      coworkingSpaces: "Coworking in Xitun / 7th Redevelopment Zone",
    },
  ],
  costBreakdown: {
    rent: "$400–$1,500/month — Taipei premium",
    food: "$250–$450/month — night markets vs imports",
    transport: "$40–$80/month — EasyCard + YouBike",
    coworking: "$90–$180/month",
  },
  taxInfo:
    "Taiwan tax residency generally ties to 183+ days in a tax year — worldwide income reporting for residents — Gold Card holders should model arrival year and overseas-sourced income with a local CPA — treaty relief depends on home country.",
  communityTips:
    "EasyCard for everything — YouBike needs local phone registration — garbage music trucks — sorting rules — LINE dominates — learn zhuyin or pinyin for addresses. Scooter licence if riding — fines real.",
  bestFor: ["Internet", "Food", "Safety", "Healthcare value"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
National Immigration Agency portal — Gold Card application online — document notarisation varies — police certificate timelines — plan 8–12 weeks.

ARC after approval — household registration for some benefits — NHI enrolment after waiting period — bank account with ARC + local address — some banks stricter.

Earthquake kit — water — torch — stair shoes — know shelter floors.
`.trim(),

  bankingTips: `
CTBC, First Bank, Cathay — bilingual branches in Taipei — multi-currency accounts for residents.

Wise inbound/outbound — local rent often needs domestic transfer — post office ATMs reliable.

Cash still common at markets — QR wallets growing — PX Pay, LINE Pay, JKOPay.
`.trim(),

  healthcareInfo: `
National Health Insurance after qualifying wait — low copays — hospitals efficient — dental affordable — mental health access improving — English in major hospitals.

Air quality — winter — check AQI — masks. Heat — summer — hydration — dengue in south — screens at night.
`.trim(),

  culturalTips: `
Queue culture — escalator stand right — MRT no food — quiet carriages — give seats to priority — temple etiquette — incense awareness.

Business cards — two hands — modest dress in government settings — political topics — keep conversations practical and respectful in mixed company.
`.trim(),

  realMonthlyCost: `
Example month — Taipei, studio Daan edge:

Rent: $950
Utilities + fibre: $120
EasyCard + YouBike: $60
Groceries + night markets: $320
Coworking: $140
NHI + supplemental: $90
Weekend hikes / trains: $150
Misc: $100

Indicative total: ~$1,930 — Kaohsiung / Taichung often 15–25% lower on rent.
`.trim(),

  expatCommunities: [
    "Taiwan Gold Card Community",
    "Taipei Digital Nomads Meetup",
    "Taichung Expats Facebook",
  ],

  prosAndCons: {
    pros: [
      "Fibre and convenience",
      "Food and safety",
      "Healthcare affordability",
      "Mountain and coast access",
    ],
    cons: [
      "Humidity and typhoons",
      "Earthquake awareness",
      "Housing deposits",
      "Scooter learning curve",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Taipei",
      neighbourhood: "Daan / Gongguan",
      description:
        "Universities — cafés — green belts — verify building age for quakes — mould in ground floors — dehumidify.",
    },
    {
      city: "Kaohsiung",
      neighbourhood: "Yancheng / Asia New Bay Area",
      description:
        "Waterfront — arts — newer towers — check flood history in low zones.",
    },
  ],

  faqs: [
    {
      question: "Gold Card vs tourist base?",
      answer:
        "Gold Card unlocks work flexibility and longer planning — tourists face exit runs — model tax and insurance before committing years.",
    },
    {
      question: "Do I need Mandarin?",
      answer:
        "Daily life easier with conversational Mandarin — English works in Taipei tech circles — learn characters for addresses and contracts.",
    },
  ],

  updated: "April 2026",
  wordCount: 2350,
};
