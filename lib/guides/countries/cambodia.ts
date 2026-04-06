import type { CountryGuide } from "../types";

export const cambodia: CountryGuide = {
  slug: "cambodia",
  country: "Cambodia",
  flag: "🇰🇭",
  continent: "Asia",
  capital: "Phnom Penh",
  currency: "KHR / USD (widely used)",
  language: "Khmer; English in tourist and business pockets",
  timezone: "ICT (UTC+7)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 900,
  seoTitle: "Working in Cambodia: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Cambodia for remote workers: Phnom Penh, Siem Reap, Kampot — e-visas, extensions, cost of living, banking, and practical tips for 2026.",
  highlights: [
    "E-visa and visa-on-arrival — extension cycles at immigration — verify latest fees",
    "USD pricing common — riel for small change — cash-heavy outside Phnom Penh",
    "Angkor hub Siem Reap — seasonal tourism — fibre improving",
    "Kampot river quiet — smaller nomad crowd — power cuts possible",
    "Respect for monarchy and Buddhism — modest dress at temples",
  ],
  visaOptions: [
    {
      name: "Tourist e-visa / visa on arrival",
      duration: "30 days extendable — immigration offices",
      cost: "Government fee + extension stamps",
      requirements: "Passport photo — onward ticket sometimes — no local employment on tourist class",
    },
    {
      name: "EB (business) extensions",
      duration: "Multi-month with sponsor — agent-assisted common",
      cost: "Visa + agent fees",
      requirements: "Sponsor letters — verify authorised agents",
    },
  ],
  cities: [
    {
      name: "Phnom Penh",
      vibe: "Capital — riverside — startup pockets — traffic and heat",
      avgRent: "$350–$900/month",
      coworkingSpaces: "Emerging Hub, Raintree, café fibre in BKK1",
    },
    {
      name: "Siem Reap",
      vibe: "Temple town — tourism cycles — growing cafés — humid",
      avgRent: "$300–$800/month",
      coworkingSpaces: "AngkorHUB, 1961 Coworking, Old Market cafés",
    },
    {
      name: "Kampot",
      vibe: "River and pepper country — slower — expat long-stayers",
      avgRent: "$250–$650/month",
      coworkingSpaces: "Small hubs — verify backup power — LTE fallback",
    },
  ],
  costBreakdown: {
    rent: "$250–$900/month — PP vs provinces",
    food: "$180–$350/month — local vs imports",
    transport: "$30–$80/month — Grab + tuk-tuk",
    coworking: "$60–$140/month",
  },
  taxInfo:
    "Cambodian tax residency rules apply to long-term residents and local earners — short tourist stays rarely trigger filing — employment or local invoicing needs a Khmer accountant — treaty positions vary.",
  communityTips:
    "US dollars crisp — torn notes rejected — small riel for change. Scooter helmets — bag snatching in cities — night safety awareness. Khmer basics help prices. Wet season flooding — plan logistics.",
  bestFor: ["Value", "Community", "Temples", "Slow travel"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Immigration e-visa portal — print arrival forms — extensions at Phnom Penh / Siem Reap offices — photos and copies — queue mornings — agents optional — overstays fined heavily.

Work permits for local employment — NGO and school sectors have specific rules — remote-only foreign employers rarely sponsor.
`.trim(),

  bankingTips: `
ABA, Acleda — accounts need long-stay documentation — tourists use cash USD + foreign cards — ATM fees and limits — Wise acceptance spotty.

Wing / TrueMoney agents — cash-out culture — carry small USD stacks safely.
`.trim(),

  healthcareInfo: `
Royal Phnom Penh Hospital, Siem Reap Royal — travel insurance with evacuation — dengue — rabies risk — motorbike trauma — helmet use.

Serious cases evac to Bangkok or Singapore — verify policy network.
`.trim(),

  culturalTips: `
Temple etiquette — shoulders/knees covered — quiet around monks — remove shoes — head sacred — feet away from people — smile defuses tension — avoid loud conflict — save face culture.
`.trim(),

  realMonthlyCost: `
Example month — Siem Reap:

Rent: $450
Utilities + fibre: $70
Grab + scooter: $60
Food + cafés: $240
Coworking: $90
Insurance: $65
Angkor pass amortised: $40
Misc: $80

Indicative total: ~$1,095 — Phnom Penh central +15–25%.
`.trim(),

  expatCommunities: [
    "Phnom Penh Expats Facebook",
    "Siem Reap Digital Nomads",
    "Kampot Noticeboard",
  ],

  prosAndCons: {
    pros: [
      "Low cost of living",
      "Friendly culture",
      "USD convenience",
      "Regional travel",
    ],
    cons: [
      "Infrastructure gaps",
      "Heat and flooding",
      "Healthcare limits",
      "Cash dependence",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Phnom Penh",
      neighbourhood: "BKK1 / Tonlé Bassac",
      description:
        "Expat density — cafés — higher rent — check generator backup in older buildings.",
    },
    {
      city: "Siem Reap",
      neighbourhood: "Wat Bo / Old Market fringe",
      description:
        "Walkable — fibre map — quieter than Pub Street core — verify flood drainage.",
    },
  ],

  faqs: [
    {
      question: "Phnom Penh or Siem Reap for remote work?",
      answer:
        "Phnom Penh for scale and flights — Siem Reap for lifestyle and temples — both workable — choose heat tolerance and pace.",
    },
  ],

  updated: "April 2026",
  wordCount: 2200,
};
