import type { CountryGuide } from "../types";

export const elSalvador: CountryGuide = {
  slug: "el-salvador",
  country: "El Salvador",
  flag: "🇸🇻",
  continent: "North America",
  capital: "San Salvador",
  currency: "USD (dollarised)",
  language: "Spanish",
  timezone: "CST (UTC−6)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1200,
  seoTitle: "Working in El Salvador: Remote Worker & Expat Guide (2026)",
  seoDescription:
    "El Salvador for digital nomads: San Salvador, surf coast, Bitcoin context, safety planning, and cost of living in 2026.",
  highlights: [
    "USD official — no currency conversion for Americans",
    "Bitcoin legal tender alongside USD — practical adoption varies by merchant",
    "Pacific surf towns — El Tunco, El Zonte nomad buzz",
    "Compact country — volcano hikes and coffee country weekends",
    "Research current safety guidance — neighbourhoods vary sharply",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 90 days — extensions per immigration rules",
      cost: "Low",
      requirements: "Passport validity — onward ticket sometimes",
    },
    {
      name: "Residence / investment categories",
      duration: "Case-specific — verify with immigration counsel",
      cost: "Fees + documentation",
      requirements: "Income proof, investment, or sponsorship — official lists",
    },
  ],
  cities: [
    {
      name: "San Salvador",
      vibe: "Business hub — Santa Elena / Escalón pockets; traffic intense",
      avgRent: "$500–$1,200/month",
      coworkingSpaces: "Impact Hub, Regus-class offices, café work",
    },
    {
      name: "Santa Ana",
      vibe: "Second city — volcano views, cooler edge, slower pace",
      avgRent: "$400–$900/month",
      coworkingSpaces: "Limited — home office first",
    },
    {
      name: "Suchitoto",
      vibe: "Colonial weekend town — smaller expat footprint",
      avgRent: "$350–$800/month",
      coworkingSpaces: "Minimal — test bandwidth before long stays",
    },
  ],
  costBreakdown: {
    rent: "$350–$1,200/month",
    food: "$200–$380/month",
    transport: "$30–$80/month",
    coworking: "$70–$160/month",
  },
  taxInfo:
    "Tax residency rules apply if you become resident — remote structures need a Salvadoran accountant. Bitcoin tax treatment has been debated globally — do not rely on social media summaries — get local professional advice.",
  communityTips:
    "Pupusa culture — respect local vendors. Security: vary routines, use trusted drivers at night, ask residents which zones suit your profile. Spanish unlocks housing and pricing.",
  bestFor: ["USD economy", "Surf", "Value", "Compact travel"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration offices handle extensions — carry passport copies everywhere. Overstays risk fines — settle before exit.

Residence categories require apostilled documents and translations — processing times vary — legal support common for investors.

Road travel: police checkpoints — keep rental docs. Earthquake country — know building exits.

Medical evacuation insurance — private hospitals in capital; public system under strain.
`.trim(),

  bankingTips: `
Major banks serve residents — Chivo wallet historically promoted — usage varies — carry cards and cash. ATMs in cities — fees and limits vary.

USD notes circulate — small bills for buses. Inform banks before travel — fraud blocks happen.

Wise may not offer local receiving — plan offshore settlement.
`.trim(),

  healthcareInfo: `
Private hospitals in San Salvador — pay or insure. Travel insurance with evacuation for surf injuries — reef cuts common.

Dengue — repellent. Tap water — filter in doubt outside hotels.

Emergency: 911 — response varies — private ambulance services exist in capital.
`.trim(),

  culturalTips: `
Warm greetings — family-first culture. Politics sensitive — listen first. Sunday church bells — plan around holidays.

Dress business-casual in offices — heat dictates fabrics. Tip small in pupuserías if service excellent.
`.trim(),

  realMonthlyCost: `
Example month — capital, mid-range:

Rent: $750
Utilities + fibre: $75
Transport (Uber + bus): $90
Groceries: $240
Eating out: $180
Coworking: $100
Spanish tutor: $80
Insurance: $70
Misc: $90

Indicative total: ~$1,675. Surf towns add rent in peak season.
`.trim(),

  expatCommunities: [
    "El Salvador expat Facebook",
    "Surf town WhatsApp groups",
  ],

  prosAndCons: {
    pros: [
      "USD economy",
      "Affordable",
      "Surf and volcanoes",
      "Direct US flights",
    ],
    cons: [
      "Safety requires local knowledge",
      "Infrastructure uneven outside capital",
      "Heat in lowlands",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "San Salvador",
      neighbourhood: "Escalón / Santa Elena",
      description:
        "Upscale pockets — gated communities common — verify security protocols.",
    },
  ],

  faqs: [
    {
      question: "Do I need Portuguese?",
      answer:
        "No — Spanish. English limited outside tourist services.",
    },
  ],

  updated: "April 2026",
  wordCount: 1850,
};
