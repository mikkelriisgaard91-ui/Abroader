import type { CountryGuide } from "../types";

export const canada: CountryGuide = {
  slug: "canada",
  country: "Canada",
  flag: "🇨🇦",
  continent: "North America",
  capital: "Ottawa",
  currency: "CAD",
  language: "English; French in Québec and parts of New Brunswick",
  timezone: "Multiple (PT–AST across provinces)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2800,
  seoTitle: "Working in Canada: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Canada for remote workers: Toronto, Vancouver, Montréal, work permits, provincial health care, taxes, and quality-of-life context in 2026.",
  highlights: [
    "Strong infrastructure — fibre, healthcare, and rule of law",
    "Express Entry and work-permit pathways for skilled roles — not a casual tourist-to-work switch",
    "Digital nomad pilots have appeared in some provinces — verify current municipal programmes",
    "Bilingual edge in Québec — French fluency opens Montréal/Québec City ecosystems",
    "Cold winters — housing and transport choices reflect climate",
  ],
  visaOptions: [
    {
      name: "eTA / visitor visa",
      duration: "Typically 6 months default — border officer discretion",
      cost: "eTA low fee; visa fees vary",
      requirements: "No Canadian work without authorisation — remote work from abroad is a legal grey area if you centre life in Canada",
    },
    {
      name: "Work permits (LMIA-exempt, IEC, etc.)",
      duration: "Employer-specific or open permits depending on stream",
      cost: "Processing fees + biometrics",
      requirements: "Job offer, employer compliance, or IEC pool luck — IRCC website is authoritative",
    },
  ],
  cities: [
    {
      name: "Toronto",
      vibe: "Financial and tech hub — diverse neighbourhoods, cold winters, hot summers",
      avgRent: "$1,800–$3,200/month",
      coworkingSpaces: "WeWork, Spaces, hundreds of indie hubs",
    },
    {
      name: "Vancouver",
      vibe: "Pacific rain + mountains — outdoor lifestyle, high housing costs",
      avgRent: "$2,000–$3,500/month",
      coworkingSpaces: "WeWork, The Network Hub, strong café scene",
    },
    {
      name: "Montréal",
      vibe: "European feel in North America — festivals, lower rent than Toronto/Vancouver",
      avgRent: "$1,200–$2,200/month",
      coworkingSpaces: "Notman House, Regus, French-English bilingual meetups",
    },
  ],
  costBreakdown: {
    rent: "$1,200–$3,500/month — major cities",
    food: "$400–$700/month",
    transport: "$100–$170/month (Metro + occasional ride-hail)",
    coworking: "$150–$350/month",
  },
  taxInfo:
    "Canadian tax residency generally arises on residential ties and 183+ days — worldwide income reporting for residents. Provincial tax varies — Québec has unique rules. Non-residents remote-working for foreign employers need a careful analysis — CRA guidance evolves — accountant essential before you assume treaty benefits.",
  communityTips:
    "Meetup.com tech events, MEC outdoor culture, hockey small talk opens doors. Learn winter layering — -20°C commutes are real. Tipping ~15–20% in restaurants. Provincial health cards require residency periods — private insurance bridges gaps.",
  bestFor: ["Stability", "Healthcare", "Nature", "Tech & finance careers"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
IRCC online portals handle work permits and study permits — biometrics appointments, police certificates, and medical exams add calendar time. Express Entry draws for PR are points-based — language tests (IELTS/TEF) matter.

Employer-specific work permits require LMIA unless exempt — tech employers often use Global Talent Stream routes when eligible.

After landing, obtain SIN, provincial health card (waiting periods apply), and bank account. Driver licence exchange rules vary by province and origin country.

Rejections often trace to incomplete job letters, vague duties, or missing travel history — be meticulous.
`.trim(),

  bankingTips: `
Big Five banks (RBC, TD, Scotiabank, BMO, CIBC) plus neobanks — open accounts with passport, study/work permit, and proof of address. Credit history starts fresh — secured cards build scores.

Interac e-Transfer dominates P2P payments. US cards work — DCC at terminals — decline and choose CAD.

Wise offers multi-currency balances — useful for USD/EUR clients. Cross-border tax reporting for US persons — FATCA compliance at banks.
`.trim(),

  healthcareInfo: `
Provincial health insurance (OHIP, MSP, RAMQ) covers medically necessary care once eligible — wait periods for newcomers. Private insurance fills gaps until then.

Major cities have teaching hospitals — Toronto SickKids, Vancouver VGH. Mental health access improving — waitlists for therapy persist — employer EAP plans help.

Telehealth (Maple, TELUS Health) supplements — not a substitute for emergencies — dial 911.
`.trim(),

  culturalTips: `
Punctuality valued in business — small talk about weather is universal. Indigenous reconciliation is a national conversation — listen and learn.

Québec language politics — French first in many services — effort matters. Hockey rivalries run deep — humour carefully.

Housing: bidding wars cooled in some markets — still research neighbourhood crime maps — not just aesthetics.
`.trim(),

  realMonthlyCost: `
Example month — Toronto, one-bed downtown-ish:

Rent: $2,400
Utilities + internet: $140
Transport (TTC + occasional Uber): $180
Groceries: $520
Eating out: $450
Coworking: $220
Gym: $70
Tenant insurance: $35
Phone: $65
Misc: $200

Indicative total: ~$4,280. Montréal often 20–30% lower; Vancouver housing can push higher.
`.trim(),

  expatCommunities: [
    "Internations Toronto / Vancouver",
    "Newcomers Slack groups by city",
    "TechTO, VanTech events",
  ],

  prosAndCons: {
    pros: [
      "High quality of life",
      "Healthcare access once resident",
      "Diverse cities",
      "Nature — Rockies, coasts, lakes",
    ],
    cons: [
      "Housing costs in major metros",
      "Cold winters",
      "Immigration complexity",
      "Tax burden at higher incomes",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Toronto",
      neighbourhood: "Leslieville / Riverside",
      description:
        "Transit-linked, family-friendly — still research condo fees and flood plains near the river.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely on a visitor visa?",
      answer:
        "Immigration law distinguishes local labour market entry from incidental remote work — long stays centred in Canada while working remotely raise legal questions — get professional advice before planning.",
    },
  ],

  updated: "April 2026",
  wordCount: 2400,
};
