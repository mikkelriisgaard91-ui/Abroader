import type { CountryGuide } from "../types";

export const cyprus: CountryGuide = {
  slug: "cyprus",
  country: "Cyprus",
  flag: "🇨🇾",
  continent: "Europe",
  capital: "Nicosia",
  currency: "EUR",
  language: "Greek / Turkish / English",
  timezone: "EET (UTC+2)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1550,
  seoTitle: "Working in Cyprus: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Cyprus or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Digital Nomad Visa with income threshold",
    "Non-dom tax regime interest for HNWIs — seek advice",
    "English widely used in business",
    "Warm climate and beaches",
    "Growing fintech and forex presence",
  ],
  visaOptions: [
    {
      name: "Digital Nomad Visa",
      duration: "1 year, extendable to 2",
      cost: "€70+",
      requirements: "Remote work, minimum income, health insurance",
    },
    {
      name: "Pink slip (temporary residence)",
      duration: "1 year renewable",
      cost: "Fees",
      requirements: "Proof of means without local employment",
    },
  ],
  cities: [
    {
      name: "Limassol",
      vibe: "Coastal business, expat heavy",
      avgRent: "$1,000–$1,800/month",
      coworkingSpaces: "Hub Design Platform, Regus",
    },
    {
      name: "Nicosia",
      vibe: "Divided capital, inland heat",
      avgRent: "$700–$1,300/month",
      coworkingSpaces: "Hub Nicosia",
    },
    {
      name: "Paphos",
      vibe: "Retirees, slower west coast",
      avgRent: "$650–$1,100/month",
      coworkingSpaces: "Local hubs",
    },
  ],
  costBreakdown: {
    rent: "$650–$1,800/month",
    food: "$280–$480/month",
    transport: "$40–$70/month (car common)",
    coworking: "$120–$260/month",
  },
  taxInfo:
    "Tax residency at 183 days; special non-dom rules — Cyprus adviser essential before structuring.",
  communityTips:
    "Explore both sides of the island respectfully, hiking in Troodos, beach coworking in shoulder season.",
  bestFor: ["Warm winters", "English business", "Island life", "Tax planning (advised)"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Cyprus's Digital Nomad Visa targets third-country nationals working remotely for employers outside Cyprus with minimum monthly income (verify current threshold with Civil Registry and Migration Department), health insurance, clean criminal record, and accommodation proof. Apply at Cyprus embassy or authorised representative; EU citizens use registration routes instead.

Pink Slip (temporary residence) suits those with sufficient passive means without working in Cyprus—do not confuse with remote employment eligibility.

After approval, register for yellow slip / residence permit extensions as required, obtain tax number, open bank account—Limassol queues can be long in peak season.

Renew by showing continued income, tax compliance, and insurance. Rejections involve income documentation, insurance gaps, or remote-work ambiguity—lawyers familiar with Migration Department formatting help.

Political context: respect sensitivities around the Green Line—travel rules and documentation differ; never treat lightly.

Always confirm latest income thresholds and tax interaction with a Cyprus adviser—rules evolve with EU pressure.
`.trim(),

  bankingTips: `
Bank of Cyprus, Hellenic Bank, AstroBank, and EU branches operate locally. You need passport, proof of address, residence permit, and source-of-funds for compliance—expect questions if forex/crypto heavy.

Euro accounts; SEPA transfers. Wise for receiving USD/GBP—declare if tax resident.

Cash still used in villages; cards in Limassol business district.

Property purchases popular—legal fees and title deed delays common—use reputable lawyers.

ATMs widespread; avoid DCC prompts in tourist zones.
`.trim(),

  healthcareInfo: `
GESY (General Healthcare System) provides affordable care once registered and contributing—employees via payroll; self-employed pay contributions.

Private insurance may be required for visa entry before GESY activation—budget €40–€100/month.

Emergency: 112 or hospital A&E. Private hospitals in Nicosia and Limassol for speed.

Pharmacies widely available; heatstroke and sunburn common—skin protection essential.

Troodos air cleaner than coast haze some summer days—asthma sufferers note.

Dental and optical—check GESY coverage vs private.
`.trim(),

  culturalTips: `
Greek Cypriot hospitality is warm—coffee and meze build trust. English dominates business in Limassol fintech; learn basic Greek for villages.

Summer heat is serious—schedule outdoor activity mornings. Driving is left; mountain roads winding.

Respect the division—do not treat the conflict as tourist banter with strangers. Both communities have trauma—listen.

Tipping 10% in restaurants if happy; beach clubs add service.

Networking is expat-heavy in Limassol—join sailing, hiking Troodos, and wine routes for balance beyond finance chat.
`.trim(),

  realMonthlyCost: `
Example month for a single remote worker in Limassol (non-luxury):

Rent (one-bed): $1,150
Utilities + AC: $160
Car rental / fuel (often needed): $280
Groceries: $300
Eating out: $240
Coworking: $140
Health (GESY + top-up): $70
Phone + software: $42
Beach club / leisure: $90
Miscellaneous: $100

Indicative total: about $2,572.

Paphos and Nicosia often lower rent; avoid underestimating car/AC costs in summer.
`.trim(),

  expatCommunities: [
    "Internations Cyprus",
    "Limassol Expats Facebook",
    "Cyprus Digital Nomads",
    "r/cyprus",
    "Meetup Cyprus — hiking & wine",
    "Paphos expat coffee mornings",
    "Nicosia international community",
    "Fintech Limassol networking",
  ],

  prosAndCons: {
    pros: [
      "Mediterranean climate and beach lifestyle",
      "English widely used in business",
      "Digital nomad visa pathway",
      "Lower cost than many EU capitals",
      "Growing tech and fintech cluster in Limassol",
      "EU member—Schengen travel with valid permits",
      "Attractive tax planning for qualifying cases (advised)",
      "Outdoor lifestyle year-round",
      "Flight connections to EU hubs",
      "Expat community established",
    ],
    cons: [
      "Political division sensitivities",
      "Summer heat and reliance on AC",
      "Car often necessary outside core areas",
      "Construction boom noise in Limassol",
      "Tax rules under EU scrutiny—get advice",
      "Limited public transport vs cities",
      "Some rural internet variable",
      "Humidity coastal",
      "Title deed delays if buying property",
      "Island small—social circle can feel repetitive",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Limassol",
      neighbourhood: "Mouttagiaka",
      description: "Sea-adjacent, expat families, quieter than centre—$1,100–$1,700.",
    },
    {
      city: "Nicosia",
      neighbourhood: "Strovolos",
      description: "Suburban, schools, practical—$750–$1,200.",
    },
    {
      city: "Paphos",
      neighbourhood: "Kato Paphos",
      description: "Harbour tourism, retirees mix—$700–$1,100.",
    },
  ],

  faqs: [
    {
      question: "Is Cyprus in the Schengen Zone?",
      answer:
        "Cyprus is an EU member; Schengen accession has been under negotiation—verify current border rules for your nationality before travel planning.",
    },
    {
      question: "Can I pay low tax as a nomad?",
      answer:
        "Some incentives existed for qualifying individuals—rules are complex and under reform pressure—mandatory professional advice.",
    },
    {
      question: "Limassol or Nicosia?",
      answer:
        "Limassol for sea and fintech; Nicosia for lower coast of living and capital services—both workable remotely.",
    },
    {
      question: "Is Cyprus safe?",
      answer:
        "Generally yes—standard precautions; driving standards vary—watch mountain roads.",
    },
    {
      question: "Do I need Greek?",
      answer:
        "English suffices in business hubs; Greek helps locally and culturally.",
    },
    {
      question: "Can I visit the north?",
      answer:
        "Crossings exist with rules—carry documents, understand limitations—respect local regulations.",
    },
  ],

  updated: "April 2026",
  wordCount: 1900,
};
