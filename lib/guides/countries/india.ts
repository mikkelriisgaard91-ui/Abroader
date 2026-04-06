import type { CountryGuide } from "../types";

export const india: CountryGuide = {
  slug: "india",
  country: "India",
  flag: "🇮🇳",
  continent: "Asia",
  capital: "New Delhi",
  currency: "INR",
  language: "Hindi, English (associate official); 20+ scheduled languages",
  timezone: "IST (UTC+5:30)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 850,
  seoTitle: "Working in India: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "India for remote workers: Bengaluru, Mumbai, Goa — e-visas, GST context, cost of living, and practical tips for 2026.",
  highlights: [
    "E-visa and visa categories — OCI pathways for eligible diaspora — verify portal",
    "UPI payments revolution — local SIM + bank unlocks daily life",
    "Bengaluru tech density — traffic — monsoon flooding pockets",
    "Mumbai finance sprawl — local trains — humidity",
    "Goa coastal nomad pockets — seasonality — power and fibre vary by village",
  ],
  visaOptions: [
    {
      name: "Tourist e-visa",
      duration: "30–180 days depending on nationality — multi-entry rules vary",
      cost: "Government e-visa fee",
      requirements: "Passport scan — itinerary — no local employment on tourist visa",
    },
    {
      name: "Employment / business visas",
      duration: "Sponsor-specific — FRRO registration",
      cost: "Consulate fees",
      requirements: "Indian entity or invitation — police reporting",
    },
  ],
  cities: [
    {
      name: "Bengaluru",
      vibe: "India's tech capital — Koramangala / Indiranagar cafés — traffic epic",
      avgRent: "$350–$1,100/month",
      coworkingSpaces: "WeWork, 91springboard, BHIVE, café bandwidth",
    },
    {
      name: "Mumbai",
      vibe: "Finance and film — coastal humidity — local trains — Bandra expat life",
      avgRent: "$400–$1,400/month",
      coworkingSpaces: "WeWork, Awfis, BKC hubs",
    },
    {
      name: "Goa",
      vibe: "Beach towns — seasonal crowds — quieter monsoon — village fibre patchy",
      avgRent: "$300–$900/month",
      coworkingSpaces: "NomadGao, Clay, beach cafés — LTE backup",
    },
  ],
  costBreakdown: {
    rent: "$300–$1,300/month — Mumbai premium vs Goa village",
    food: "$150–$350/month — thali vs imports",
    transport: "$40–$100/month — Uber / Ola + rickshaws",
    coworking: "$70–$160/month",
  },
  taxInfo:
    "Indian tax residency arises on physical presence and economic ties — remote workers on short tourist stays rarely trigger — employment or long OCI stays need a chartered accountant — GST and invoicing rules if you sell to Indian customers — treaty relief varies.",
  communityTips:
    "Aadhaar not always for foreigners — PAN for some financial rails — carry cash backup — negotiate auto fares — filter water — monsoon hygiene — WhatsApp runs housing — Diwali noise — plan client calls around festivals.",
  bestFor: ["Value", "Tech community", "Food", "Diversity"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Indian e-visa portal — accurate photo specs — entry port discipline — FRRO registration if converting categories — overstays penalised.

OCI card — eligibility by ancestry — long-stay convenience — processing times vary — VFS queues in some jurisdictions.
`.trim(),

  bankingTips: `
NRE/NRO accounts for NRIs — residents use local savings — UPI requires local number and bank — tourists use foreign cards in cities — ATM limits.

Wise inbound — rent sometimes needs local transfer — carry two-factor backup for bank apps.
`.trim(),

  healthcareInfo: `
Apollo, Fortis, Manipal chains — insurance with cashless — dengue — food hygiene — air quality north India winter — masks.

Emergency: 112 integrated in many states — private ambulance apps in metros.
`.trim(),

  culturalTips: `
Right hand for eating — modest dress in temples — remove shoes — head wobble context — hierarchy in offices — avoid left-hand giving — regional languages differ sharply — patience with chaos — queue culture emerging unevenly.
`.trim(),

  realMonthlyCost: `
Example month — Bengaluru, Koramangala 2BHK share:

Rent: $550
Utilities + fibre: $80
Uber + metro: $90
Food + Swiggy: $280
Coworking: $110
Insurance: $60
Domestic flight weekend: $100
Misc: $90

Indicative total: ~$1,360 — Mumbai Bandra or Goa peak +25–40%.
`.trim(),

  expatCommunities: [
    "Bengaluru Expats",
    "Mumbai Expats Facebook",
    "Goa Digital Nomads",
  ],

  prosAndCons: {
    pros: [
      "Affordable lifestyle",
      "English in business",
      "Tech and startup scene",
      "Domestic travel network",
    ],
    cons: [
      "Traffic and noise",
      "Air quality pockets",
      "Bureaucracy",
      "Infrastructure unevenness",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Bengaluru",
      neighbourhood: "Indiranagar / Koramangala",
      description:
        "Cafés — fibre — expat amenities — water tanker schedules — verify STP smell in monsoon.",
    },
    {
      city: "Goa",
      neighbourhood: "Assagao / Siolim",
      description:
        "Quieter than Baga — verify monsoon mould — generator for work calls.",
    },
  ],

  faqs: [
    {
      question: "Bengaluru or Goa for nomads?",
      answer:
        "Bengaluru for fibre and meetups — Goa for beach pace — Goa infrastructure is patchier — test latency week one.",
    },
  ],

  updated: "April 2026",
  wordCount: 2350,
};
