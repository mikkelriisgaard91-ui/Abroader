import type { CountryGuide } from "../types";

export const belize: CountryGuide = {
  slug: "belize",
  country: "Belize",
  flag: "🇧🇿",
  continent: "North America",
  capital: "Belmopan",
  currency: "BZD (USD pegged 2:1 — USD widely used)",
  language: "English (official); Spanish and Kriol widely spoken",
  timezone: "CST (UTC−6, no DST)",
  visaDifficulty: "Easy",
  internetSpeed: "Average",
  costOfLiving: "Medium",
  avgMonthlyCost: 1600,
  seoTitle: "Working in Belize: Remote Worker & Expat Guide (2026)",
  seoDescription:
    "Belize for digital nomads: cayes and jungle hubs, visas, cost of living, hurricane season planning, and English-speaking Caribbean-Central America mix.",
  highlights: [
    "English official — low language friction for many remote workers",
    "Barrier reef, cayes, and interior Maya mountains — compact geography",
    "Tourist visa extensions common — confirm current stamp rules with immigration",
    "QRP and other long-stay programmes exist for retirees — remote workers verify fit",
    "Hurricane season June–November — backup power and insurance matter",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 30 days extendable — nationality-dependent",
      cost: "Extension fees per month",
      requirements: "Passport validity, onward ticket, funds — Belize Immigration publishes tariffs",
    },
    {
      name: "Work permits / long-stay categories",
      duration: "Case-specific — employment, investment, QRP-style routes",
      cost: "Fees + legal support often used",
      requirements: "Police certificates, health tests, proof of income — use official checklists",
    },
  ],
  cities: [
    {
      name: "Belize City",
      vibe: "Commercial hub and flights — grittier than cayes; improving fibre pockets",
      avgRent: "$600–$1,200/month",
      coworkingSpaces: "Small hubs — café work common; verify backup power",
    },
    {
      name: "San Ignacio",
      vibe: "Jungle gateway to Tikal side trips — backpacker and eco crowd",
      avgRent: "$450–$950/month",
      coworkingSpaces: "Limited — home office + lodge Wi‑Fi",
    },
    {
      name: "Placencia",
      vibe: "Beach peninsula — slower, expat retirees and divers",
      avgRent: "$700–$1,400/month",
      coworkingSpaces: "Minimal — seasonal bandwidth swings",
    },
  ],
  costBreakdown: {
    rent: "$450–$1,400/month — cayes premium",
    food: "$280–$480/month — imports costly",
    transport: "$40–$100/month — golf carts and water taxis add up",
    coworking: "$80–$180/month",
  },
  taxInfo:
    "Tax residency tests apply if you centre economic life in Belize — many short-stay tourists do not trigger obligations. Long-term residents and local earners should use a Belizean accountant. Offshore structures have compliance history — follow CRS and home-country reporting.",
  communityTips:
    "Reef etiquette — no touching coral. Garifuna culture on the coast — respect drumming and festivals. WhatsApp runs logistics — join vetted housing groups. Mosquito protocols for dengue — screens and repellent.",
  bestFor: ["English", "Diving & reef", "Compact country", "GMT−6 alignment"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Belize Immigration offices handle extensions — queue early, carry USD cash for fees, and keep every stamp photocopied. Overstays risk fines — settle before exit flights.

Work permits require employer or self-employment justification — remote foreign income may not map cleanly to standard categories; immigration counsel helps for multi-year plans.

Police certificates from home countries often need apostille — plan courier time. Health tests may be required for certain permits — verify clinic acceptance.

Hurricane rebuild years can disrupt services — maintain flexible housing contracts.
`.trim(),

  bankingTips: `
Belizean banks (Belize Bank, Atlantic) open accounts with strong ID and proof of address — tourists rely on foreign cards. USD circulates freely — watch torn bill policies.

ATMs in towns — fees and daily limits vary — cayes charge premiums. Wise may not offer BZD balances — plan USD settlement abroad.

Carry small BZD for buses and markets — card acceptance patchy outside tourist strips.
`.trim(),

  healthcareInfo: `
Belize City and San Pedro have private clinics — serious cases evacuate to Mexico or the US. Travel insurance with medevac is essential on cayes.

Public system thin outside cities — many expats pay cash for private GPs. Snake and dive injuries — know nearest hyperbaric chamber locations.

Emergency: 911 in many areas — response times vary — first-aid training helps.
`.trim(),

  culturalTips: `
Pace is slow — appointments slip. Dress modestly away from beach strips. Rum and reggae weekends — plan work blocks around Garifuna Settlement Day and national holidays.

LGBTQ travellers — urban pockets more welcoming than rural norms — research current social climate.

Plastic bag bans and reef protection laws — follow tour operator rules.
`.trim(),

  realMonthlyCost: `
Example month — San Pedro–style caye profile (illustrative):

Rent (one-bed, generator building): $1,100
Utilities + backup data: $140
Water taxi / golf cart: $120
Groceries + imports: $420
Eating out: $350
Dive membership / activities: $200
Travel insurance: $100
Misc: $120

Indicative total: ~$2,550. Mainland towns run 25–40% lower excluding reef premiums.
`.trim(),

  expatCommunities: [
    "Belize expats Facebook",
    "Ambergris Caye community boards",
    "Dive club WhatsApp groups",
  ],

  prosAndCons: {
    pros: [
      "English official",
      "Stunning marine environment",
      "Small-country networking",
      "Caribbean-Central blend",
    ],
    cons: [
      "High cost on popular cayes",
      "Internet and power reliability variable",
      "Hurricane season risk",
      "Limited specialist healthcare",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Belize City",
      neighbourhood: "Fort George / waterfront strips",
      description:
        "Breeze and flights — verify security with locals — fibre improving in newer builds.",
    },
  ],

  faqs: [
    {
      question: "Caye or mainland?",
      answer:
        "Cayes for reef lifestyle and tourism services — higher cost. Mainland for value and jungle access — different vibe entirely.",
    },
  ],

  updated: "April 2026",
  wordCount: 1900,
};
