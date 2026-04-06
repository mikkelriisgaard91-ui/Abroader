import type { CountryGuide } from "../types";

export const panama: CountryGuide = {
  slug: "panama",
  country: "Panama",
  flag: "🇵🇦",
  continent: "North America",
  capital: "Panama City",
  currency: "PAB (pegged 1:1 with USD — USD widely used)",
  language: "Spanish",
  timezone: "EST (UTC−5)",
  visaDifficulty: "Easy",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 2000,
  seoTitle: "Working in Panama: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Panama for remote workers: Panama City skyline, Boquete highlands, Bocas del Toro islands, Friendly Nations visa, and cost of living in 2026.",
  highlights: [
    "Friendly Nations visa historically popular — rules tightened — verify current immigration categories",
    "Panama City — skyscrapers, canal, regional hub",
    "Boquete — expat retiree and coffee country cool climate",
    "Bocas del Toro — Caribbean islands — slower infrastructure",
    "USD economy — no currency conversion for Americans",
  ],
  visaOptions: [
    {
      name: "Friendly Nations / professional categories",
      duration: "Multi-year residence pathways — legal counsel essential",
      cost: "Fees + company formation sometimes",
      requirements:
        "Economic ties, employment, or investment — immigration lawyer almost standard",
    },
    {
      name: "Tourist stay",
      duration: "Often 180 days for many passports — officer discretion",
      cost: "Low",
      requirements: "Onward ticket sometimes — no local work",
    },
  ],
  cities: [
    {
      name: "Panama City",
      vibe: "Dubai-meets-mangroves — Punta Pacífica, Casco Viejo, traffic",
      avgRent: "$900–$2,200/month",
      coworkingSpaces: "Spaces, Regus, strong café culture",
    },
    {
      name: "Boquete",
      vibe: "Highland coffee town — expat retirees, hiking, birding",
      avgRent: "$600–$1,400/month",
      coworkingSpaces: "Small hubs — home office common",
    },
    {
      name: "Bocas del Toro",
      vibe: "Island Caribbean — humid, boat logistics, backpacker energy",
      avgRent: "$550–$1,400/month",
      coworkingSpaces: "Beach cafés — power and fibre vary",
    },
  ],
  costBreakdown: {
    rent: "$550–$2,200/month",
    food: "$300–$450/month",
    transport: "$40–$120/month",
    coworking: "$120–$280/month",
  },
  taxInfo:
    "Territorial tax system historically applies — only Panama-sourced income taxed for residents in many cases — but definitions and CRS reporting evolve — consult a Panama tax specialist before structuring life around assumptions. US persons still face IRS rules.",
  communityTips:
    "Casco vs high-rises — lifestyle trade-offs. Carnaval — book early. Canal zone history — respect local narratives. Spanish accelerates landlord deals — English works in corporate services.",
  bestFor: ["USD economy", "Aviation hub", "Highlands", "Regional business"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration (migración) processes residence permits — lawyers common — document bundles include FBI checks, marriage certificates, health certs — apostille and Spanish translation.

Overstays risk fines — pay before airport exit. Driving — licence conversion rules — traffic in Panama City intense — metro helps in corridor.

Medical evacuation insurance — private hospitals in capital strong — islands limited.

Rainy season flooding — check elevation before renting.
`.trim(),

  bankingTips: `
Multibank, BAC, etc. — residents with ID — tourists use foreign cards. ATMs in cities — fees vary — carry small bills for diablos rojos buses.

Yappy and bank apps — growing — KYC with cédula. Offshore history — compliance tightened — use regulated channels.

Wise may not offer PAB balances — USD settlement straightforward.
`.trim(),

  healthcareInfo: `
Punta Pacífica Hospital, Pacifica Salud — private — pay or insure. Public system exists — queues.

Dengue in tropical zones — screens. Altitude in Boquete — mild. Emergency: 911 in many areas — private ambulance apps in capital.

Dental tourism — research clinics.
`.trim(),

  culturalTips: `
Panameño identity — music and dance pride — join festivals respectfully. Heat and humidity — AC in rentals — verify electricity bills.

Casco tourism — pickpocket awareness — vary routines. Tip ~10% in restaurants if not included.
`.trim(),

  realMonthlyCost: `
Example month — Panama City, El Cangrejo-ish:

Rent: $1,100
Utilities + fibre: $110
Metro + Uber: $140
Groceries: $320
Eating out: $350
Coworking: $180
Gym: $70
Health plan: $110
Misc: $120

Indicative total: ~$2,500. Boquete can drop rent 20–30% with fewer services.
`.trim(),

  expatCommunities: [
    "Panama expat Facebook",
    "Internations Panama City",
  ],

  prosAndCons: {
    pros: [
      "USD economy",
      "Regional flights",
      "Modern capital",
      "Territorial tax discussion (verify)",
    ],
    cons: [
      "Humidity in capital",
      "Immigration complexity",
      "Island infrastructure limits",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Panama City",
      neighbourhood: "El Cangrejo",
      description:
        "Walkable, dining — popular with expats — verify building water tanks.",
    },
  ],

  faqs: [
    {
      question: "City or highlands?",
      answer:
        "City for services and flights — Boquete for climate and quiet — Bocas for island life with trade-offs.",
    },
  ],

  updated: "April 2026",
  wordCount: 2100,
};
