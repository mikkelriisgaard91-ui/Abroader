import type { CountryGuide } from "../types";

export const guyana: CountryGuide = {
  slug: "guyana",
  country: "Guyana",
  flag: "🇬🇾",
  continent: "South America",
  capital: "Georgetown",
  currency: "GYD (USD often accepted in tourism)",
  language: "English (official); Guyanese Creole widely spoken",
  timezone: "GYT (UTC−4)",
  visaDifficulty: "Easy",
  internetSpeed: "Average",
  costOfLiving: "Low",
  avgMonthlyCost: 950,
  seoTitle: "Working in Guyana: Remote Worker & Expat Guide (2026)",
  seoDescription:
    "Guyana for remote workers: Georgetown, cost of living, visas, Caribbean English context, and practical tips before you base on the northern coast.",
  highlights: [
    "English-speaking — only South American nation with English as official language",
    "Coastal strip + vast interior — rainforest, Kaieteur Falls, eco-tourism potential",
    "Visa-free or on-arrival options for many nationalities — confirm duration with immigration",
    "Oil-and-gas economy has raised costs in pockets — still moderate vs global cities",
    "Small expat community — relationships matter; slower pace than global hubs",
  ],
  visaOptions: [
    {
      name: "Tourist / visitor entry",
      duration: "Varies by nationality — often 30–90 days; extensions via immigration",
      cost: "Low fees where applicable",
      requirements: "Valid passport, onward ticket sometimes, proof of funds — check Guyanese embassy for your passport",
    },
    {
      name: "Work permits / residence",
      duration: "Tied to employer sponsorship or investment — case-specific",
      cost: "Fees + legal processing",
      requirements:
        "Employer letters, police clearance, medicals — Ministry of Home Affairs publishes requirements; use official channels",
    },
  ],
  cities: [
    {
      name: "Georgetown",
      vibe: "Colonial grid, Stabroek Market bustle, Atlantic sea wall — main services and flights",
      avgRent: "$400–$900/month",
      coworkingSpaces: "Regus-style offices, café work — smaller dedicated hubs",
    },
    {
      name: "Linden",
      vibe: "Mining town upriver — quieter, lower rents, limited nightlife",
      avgRent: "$250–$550/month",
      coworkingSpaces: "Minimal — home office + mobile data",
    },
    {
      name: "New Amsterdam",
      vibe: "Berbice River area — regional hub, slower pace than Georgetown",
      avgRent: "$280–$600/month",
      coworkingSpaces: "Rare — verify fibre before committing long-term",
    },
  ],
  costBreakdown: {
    rent: "$280–$900/month — Georgetown prime vs interior",
    food: "$200–$380/month — imported goods carry premiums",
    transport: "$30–$70/month — minibuses + taxis; interior travel costly",
    coworking: "$60–$140/month where available",
  },
  taxInfo:
    "Tax residency rules apply if you become ordinarily resident — oil-sector expats often on structured packages. Remote workers on short stays rarely trigger obligations; long-term bases need a local accountant. Guyana uses a territorial-ish framework in parts of law — professional advice essential before invoicing locally.",
  communityTips:
    "Cricket and rum culture; CARICOM ties; small-town networking beats cold outreach. Interior trips need reputable operators — roads and weather dictate pace. Learn Creole phrases — rapport opens doors.",
  bestFor: ["English language", "Nature & interior trips", "Quiet baseline", "Regional Caribbean links"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Guyana's immigration services process extensions and permits — start at the official window with passport, photos, and supporting letters. Overstays risk fines — regularise before exit.

Work permits for local employment require employer sponsorship and police certificates from countries of residence — apostille/legalisation may be needed. Remote work for foreign entities is a niche area — confirm whether your stay category allows it; legal counsel helps for multi-year plans.

Health checks and police certificates should be recent — bring certified copies. Processing times are not Silicon Valley fast — plan buffer weeks.

Interior travel may require permits in sensitive zones — coordinate with tour operators and respect indigenous community protocols.
`.trim(),

  bankingTips: `
Major banks include Republic Bank (Guyana), GBTI, and Demerara Bank — accounts typically need work permit or substantial documentation. Tourist banking is card-based — Visa/Mastercard in Georgetown; carry cash for markets.

US dollars circulate alongside GYD — clarify exchange rate at point of sale. Mobile money penetration is growing — ask which apps locals trust week-to-week.

ATM reliability varies — keep backup cash for weekends. Inform your home bank before travel — Guyana can trigger fraud blocks.

Wire transfers for rent may go through correspondent banks — confirm IBAN/SWIFT details carefully.
`.trim(),

  healthcareInfo: `
Georgetown has private facilities (Woodlands, St. Joseph's Mercy) — quality improves yearly but complex cases may medevac to Miami or Trinidad. Travel insurance with evacuation cover is prudent.

Public system exists — waits can be long; expats often blend private GP + insurance.

Dengue and malaria risk in hinterland — prophylaxis and repellent per travel clinic. Yellow fever certificate may be requested depending on itinerary.

Emergency services are limited outside the capital — plan accordingly for jungle trips. Mental health resources are thin — telehealth abroad may supplement.
`.trim(),

  culturalTips: `
Guyana is culturally diverse — Indo-Guyanese, Afro-Guyanese, Indigenous nations, and smaller communities. Avoid careless stereotypes; listen first.

Hospitality is genuine — reciprocate invitations. Dress modestly in government buildings; beachwear stays at the coast.

Road safety: driving is on the left — UK legacy. Night travel on rural roads is risky — plan daylight moves.

Carnival and Mashramani are big — housing books early. Respect Amerindian village rules when visiting — ask permission for photos.
`.trim(),

  realMonthlyCost: `
Example month — Georgetown, modest expat style:

Rent (two-bed apartment, decent area): $650
Utilities + fibre: $95
Transport (taxi share + minibus): $80
Groceries (mix local + imports): $320
Eating out: $180
Mobile + backup data: $45
Travel insurance: $85
Weekend coast / interior trip savings: $120
Misc: $90

Indicative total: ~$1,665. Interior towns drop sharply on rent but add generator fuel and logistics costs.
`.trim(),

  expatCommunities: [
    "Georgetown expat Facebook groups",
    "Oil & gas professional networks (sector-dependent)",
    "Rotary / Lions clubs in capital",
    "Regional Caribbean diaspora events",
  ],

  prosAndCons: {
    pros: [
      "English official — lower friction for many nomads",
      "Underrated nature and biodiversity",
      "Friendly interpersonal culture",
      "Affordable outside oil-boom pockets",
      "CARICOM membership — regional mobility context",
    ],
    cons: [
      "Smaller nomad infrastructure than regional peers",
      "Internet outside Georgetown can be patchy",
      "Imported goods expensive",
      "Crime requires neighbourhood awareness in parts of Georgetown",
      "Limited direct long-haul flights vs mega-hubs",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Georgetown",
      neighbourhood: "Bel Air / Prashad Nagar",
      description:
        "Leafier, embassies nearby — higher rents; verify gated compound options and backup power.",
    },
    {
      city: "Georgetown",
      neighbourhood: "Main Street / Ocean view strips",
      description:
        "Sea breeze, evening walks on the wall — noise from events; check flood history during heavy rains.",
    },
  ],

  faqs: [
    {
      question: "Is Guyana in the Caribbean or South America?",
      answer:
        "Geographically South America; culturally it participates in CARICOM and often groups with the Caribbean — you'll hear both framings.",
    },
    {
      question: "How is internet for video calls?",
      answer:
        "Georgetown fibre is workable for many remote jobs — test speeds before signing leases; always budget mobile backup.",
    },
    {
      question: "Safety in Georgetown?",
      answer:
        "Like many cities — vary routes, avoid flashing valuables, use trusted taxis at night, and ask locally which blocks to avoid after dark.",
    },
  ],

  updated: "April 2026",
  wordCount: 2100,
};
