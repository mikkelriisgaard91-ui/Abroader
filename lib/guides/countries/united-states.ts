import type { CountryGuide } from "../types";

export const unitedStates: CountryGuide = {
  slug: "united-states",
  country: "United States",
  flag: "🇺🇸",
  continent: "North America",
  capital: "Washington, D.C.",
  currency: "USD",
  language: "English",
  timezone: "Multiple (PT–ET across states)",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 3500,
  seoTitle: "Working in the United States: Remote Worker & Expat Guide (2026)",
  seoDescription:
    "United States for remote workers: visas, state tax variation, healthcare complexity, and hub cities — Austin, New York, Denver — in 2026.",
  highlights: [
    "No federal digital nomad visa — work authorisation tied to employment, investment, or specific categories",
    "State laws vary wildly — income tax, tenant rights, weather — choose deliberately",
    "Healthcare is employer-linked or marketplace — budget carefully without subsidies",
    "H-1B, L-1, O-1, E-2, etc. — corporate immigration counsel is standard",
    "ESTA/tourism — not a work authorisation — remote work while in status is legally constrained",
  ],
  visaOptions: [
    {
      name: "B-1/B-2 visitor",
      duration: "Typically 6 months admission — CBP discretion",
      cost: "Visa fee if required",
      requirements: "No US employment — intent matters — remote work while visiting is not clearly authorised — consult counsel",
    },
    {
      name: "Work visas (H-1B, L-1, O-1, TN, etc.)",
      duration: "Role-specific",
      cost: "Legal fees often significant",
      requirements: "Employer sponsorship or treaty eligibility — USCIS/DOS rules",
    },
  ],
  cities: [
    {
      name: "Austin",
      vibe: "Tech and music — BBQ, heat, no state income tax — sprawl",
      avgRent: "$1,400–$2,800/month",
      coworkingSpaces: "WeWork, Capital Factory, strong café scene",
    },
    {
      name: "New York",
      vibe: "Finance and media capital — brutal rents — walkable neighbourhoods",
      avgRent: "$2,200–$4,500/month",
      coworkingSpaces: "Every major operator — density of options",
    },
    {
      name: "Denver",
      vibe: "Mountains gateway — outdoor culture, growing tech — altitude",
      avgRent: "$1,600–$3,000/month",
      coworkingSpaces: "Galvanize, WeWork, indie hubs",
    },
  ],
  costBreakdown: {
    rent: "$1,400–$4,500/month — city-dependent",
    food: "$400–$700/month",
    transport: "$100–$200/month",
    coworking: "$200–$400/month",
  },
  taxInfo:
    "Federal tax residency for residents and citizens — worldwide income. State tax: zero in TX/FL/WA/NV/etc., high in CA/NY — remote workers may trigger multi-state nexus rules — CPA essential. FBAR/FATCA for foreign accounts — heavy penalties for mistakes.",
  communityTips:
    "Tipping 18–22% in restaurants — service wages often tip-based. Car culture in most cities — except NYC/SF/DC pockets — budget insurance. Credit score matters for housing — secured cards build history. 911 emergency — know your address.",
  bestFor: ["Career scale", "US market", "Infrastructure", "Diverse hubs"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
US work authorisation is a legal specialty — employers use immigration counsel — premium processing exists for some petitions — backlogs swing by category and nationality.

ESTA for Visa Waiver Program countries — 90 days for tourism — not a work visa — CBP officers assess intent.

Adjustment of status and green card pathways — family, employment, diversity lottery — each has timelines measured in months to years.

After arrival, SSN, state ID, bank account — health insurance via employer marketplace or ACA — open enrollment rules apply.
`.trim(),

  bankingTips: `
Chase, BofA, Wells Fargo, credit unions — open accounts with passport + proof of address — credit history starts at zero for newcomers — secured cards.

Zelle, Venmo, Cash App — P2P norms — ACH for rent — wire fees vary.

401(k) and IRA — tax-advantaged — rules complex for visa holders — consult CPA.
`.trim(),

  healthcareInfo: `
Employer-sponsored insurance — deductibles and copays — surprise billing rules improved but verify in-network. ACA marketplace — subsidies income-dependent.

Urgent care for minor issues — ER for emergencies — costs can shock without insurance — travel insurance for visitors.

Mental health — therapy apps — in-network psychiatrists can have waitlists — employer EAPs help.
`.trim(),

  culturalTips: `
Small talk about work — acceptable opener — avoid politics early. Personal space larger than Latin America — handshake default.

Tipping culture everywhere — coffee shops, haircuts, movers — budget it. Gun culture varies regionally — research local norms.

Holidays — Thanksgiving travel crush — July 4 — plan remote work sprints.
`.trim(),

  realMonthlyCost: `
Example month — Austin, one-bed central-ish:

Rent: $1,900
Utilities + internet: $140
Car insurance + fuel: $280
Groceries: $450
Eating out: $400
Coworking: $220
Health insurance (marketplace): $380
Phone: $70
Misc: $200

Indicative total: ~$4,040 — NYC or SF can run far higher; smaller cities lower.
`.trim(),

  expatCommunities: [
    "Internations major US cities",
    "InterNations",
    "Expat Facebook groups by city",
  ],

  prosAndCons: {
    pros: [
      "Career upside",
      "Infrastructure",
      "Diverse geography",
      "Innovation hubs",
    ],
    cons: [
      "Immigration difficulty",
      "Healthcare cost",
      "Housing in major metros",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Austin",
      neighbourhood: "East Austin / Mueller",
      description:
        "Food and music — verify flood zone maps — summer heat is serious.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely on ESTA?",
      answer:
        "This is not legal advice — US immigration law is strict about intent and authorised activities — consult a US immigration attorney before planning remote work from US soil.",
    },
  ],

  updated: "April 2026",
  wordCount: 2200,
};
