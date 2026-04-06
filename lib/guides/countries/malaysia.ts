import type { CountryGuide } from "../types";

export const malaysia: CountryGuide = {
  slug: "malaysia",
  country: "Malaysia",
  flag: "🇲🇾",
  continent: "Asia",
  capital: "Kuala Lumpur",
  currency: "MYR",
  language: "Malay (official); English widely used in business",
  timezone: "MYT (UTC+8)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1400,
  seoTitle: "Working in Malaysia: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Malaysia for remote workers: Kuala Lumpur, Penang, Johor Bahru — MM2H, DE Rantau, tax, healthcare, and living costs for 2026.",
  highlights: [
    "DE Rantau digital nomad pass — verify current income thresholds and duration",
    "MM2H programme updates — property and deposit rules shift — official portal only",
    "English-friendly business environment — strong food culture",
    "KL metro improving — traffic still heavy — Grab reliable",
    "Penang island humidity — UNESCO core — slower than KL",
  ],
  visaOptions: [
    {
      name: "Tourist visa / visa-free entry",
      duration: "Varies by nationality — often 30–90 days",
      cost: "Free or visa fee",
      requirements: "Onward ticket — no local employment on tourist pass",
    },
    {
      name: "DE Rantau (Digital Nomad)",
      duration: "Up to 12 months renewable — policy-dependent",
      cost: "Processing fee",
      requirements: "Remote income proof, insurance — employer outside Malaysia",
    },
    {
      name: "Employment Pass (local employer)",
      duration: "1–2 years renewable",
      cost: "Employer-sponsored",
      requirements: "Job offer from Malaysian entity — EP categories",
    },
  ],
  cities: [
    {
      name: "Kuala Lumpur",
      vibe: "Skyline city — malls — startup scene — humid year-round",
      avgRent: "$500–$1,400/month",
      coworkingSpaces: "Common Ground, WORQ, WeWork, Bangsar cafés",
    },
    {
      name: "Penang",
      vibe: "Heritage George Town — food capital — island pace — digital nomad pockets",
      avgRent: "$400–$1,000/month",
      coworkingSpaces: "CAT Penang, Settlements, beachside cafés",
    },
    {
      name: "Johor Bahru",
      vibe: "Singapore commute belt — lower rent — customs queues — family suburbs",
      avgRent: "$350–$900/month",
      coworkingSpaces: "City hubs near CIQ — verify fibre before lease",
    },
  ],
  costBreakdown: {
    rent: "$350–$1,400/month — KLCC premium vs JB value",
    food: "$200–$450/month — hawker vs imports",
    transport: "$40–$100/month — Grab + occasional tolls",
    coworking: "$80–$180/month",
  },
  taxInfo:
    "Malaysia taxes residents on worldwide income with territorial elements for certain classes — days-based residency tests — remote workers on short passes rarely trigger full residency — long-stay passes need a local tax advisor — SST on digital services — treaty positions vary.",
  communityTips:
    "Ramadan hours — respect fasting colleagues — Friday prayers traffic. Hawker hygiene — busy stalls — ice from filtered sources. Scooter optional — heat and rain — covered parking matters. WhatsApp housing — verify landlord title.",
  bestFor: ["Value", "Food", "English ease", "Regional hub"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Immigration Department (JIM) publishes pass categories — DE Rantau requires documented remote employer, minimum income, and insurance — apply through official e-portal or licensed agents — rejections happen — backup plans essential.

MM2H: verify latest financial and property requirements — state variations — use licensed MM2H consultants — avoid forum shortcuts.

Employment Pass: employer files — quota and salary bands — turnaround times vary — do not work before approval.
`.trim(),

  bankingTips: `
Maybank, CIMB, Public Bank — multi-currency accounts for residents — tourists use Wise + foreign cards — ATM fees vary.

DuitNow QR everywhere — link e-wallet after local SIM. Credit cards for petrol discounts — watch foreign transaction fees.
`.trim(),

  healthcareInfo: `
Private hospitals in KL (Pantai, Gleneagles) — insurance essential — dengue in wet season — air quality haze episodes — N95 stock.

Penang medical tourism — dental competitive — verify insurance network.

Emergency: 999 — private ambulance add-ons in apps.
`.trim(),

  culturalTips: `
Right hand for giving — modest dress in government buildings — remove shoes in homes — diverse religions — sensitivity around sensitive topics — keep discussions pragmatic.

Queue culture improving — still pushy in some markets — patience. Tipping not expected — service charge in restaurants — rounding cash appreciated by drivers.
`.trim(),

  realMonthlyCost: `
Example month — KL, mid-range condo:

Rent: $900
Utilities + fibre: $110
Grab + parking: $120
Groceries + hawker: $350
Coworking: $130
Insurance: $70
Weekend travel: $150
Misc: $100

Indicative total: ~$1,930 — Penang or JB often 15–25% lower rent.
`.trim(),

  expatCommunities: [
    "KL Expats Facebook",
    "Penang Digital Nomads",
    "Johor Singapore cross-border groups",
  ],

  prosAndCons: {
    pros: [
      "Affordable vs Singapore",
      "English in cities",
      "Food diversity",
      "Air connectivity",
    ],
    cons: [
      "Heat and haze",
      "Traffic in KL",
      "Visa rule changes",
      "Alcohol pricing in some states",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Kuala Lumpur",
      neighbourhood: "Bangsar / Mont Kiara",
      description:
        "Expat amenities — schools — malls — higher rent — check flood-prone pockets in monsoon.",
    },
    {
      city: "Penang",
      neighbourhood: "Gurney / Tanjung Tokong",
      description:
        "Sea breeze — newer condos — traffic to core — fibre map check.",
    },
  ],

  faqs: [
    {
      question: "KL or Penang for remote work?",
      answer:
        "KL for scale, flights, and nightlife — Penang for slower pace and food — both have fibre — choose climate tolerance and budget.",
    },
    {
      question: "Can I live in JB and work in Singapore?",
      answer:
        "Many commute — immigration queues — EP holders in Singapore have specific rules — cross-border tax and CPF implications — professional advice required.",
    },
  ],

  updated: "April 2026",
  wordCount: 2350,
};
