import type { CountryGuide } from "../types";

export const estonia: CountryGuide = {
  slug: "estonia",
  country: "Estonia",
  flag: "🇪🇪",
  continent: "Europe",
  capital: "Tallinn",
  currency: "EUR",
  language: "Estonian",
  timezone: "EET (UTC+2)",
  visaDifficulty: "Easy",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 1800,
  seoTitle: "Working in Estonia: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Estonia or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Digital Nomad Visa for location-independent workers",
    "e-Residency for online EU company — not a personal immigration visa",
    "Digital-first government services",
    "Tallinn's medieval old town + strong fibre",
    "Startup and crypto-friendly reputation (regulations apply)",
  ],
  visaOptions: [
    {
      name: "Digital Nomad Visa",
      duration: "1 year",
      cost: "~€100+",
      requirements: "Income threshold with remote work, background checks",
    },
    {
      name: "e-Residency",
      duration: "Card renewal cycle",
      cost: "~€100–€120",
      requirements: "Online business access — not permission to live in Estonia",
    },
  ],
  cities: [
    {
      name: "Tallinn",
      vibe: "Compact, Nordic, old town charm",
      avgRent: "$800–$1,400/month",
      coworkingSpaces: "Lift99, Spring Hub, Technopolis",
    },
    {
      name: "Tartu",
      vibe: "University town, quieter",
      avgRent: "$500–$850/month",
      coworkingSpaces: "Spark Hub",
    },
    {
      name: "Pärnu",
      vibe: "Summer resort, slower",
      avgRent: "$450–$800/month",
      coworkingSpaces: "Seasonal spaces",
    },
  ],
  costBreakdown: {
    rent: "$500–$1,400/month",
    food: "$300–$480/month",
    transport: "$25–$40/month",
    coworking: "$120–$260/month",
  },
  taxInfo:
    "Physical presence drives personal tax residency; e-Residency company taxation is separate — professional advice essential.",
  communityTips:
    "Garage48 hackathons, sauna networking, winter darkness — bring vitamin D routines.",
  bestFor: ["Digital government", "Startups", "Nordic lifestyle", "Small-country speed"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Estonia's Digital Nomad Visa allows remote workers for foreign employers or clients to reside up to one year if they meet minimum monthly income (confirm current threshold with Estonian Police and Border Guard Board), pass background checks, and show health insurance.

Critical distinction: e-Residency is a digital identity for managing an Estonian company online—it does not grant the right to live in Estonia. Many founders confuse the two—do not skip the actual residence permit if you plan to live locally.

Apply at Estonian embassies with remote contracts, bank statements, and business activity proof.

After arrival, register residence, obtain ID card, use digital services for everything—Mobile-ID is life.

EU citizens use free movement—register after three months.

Renewal or switching to employment or startup routes possible—consult lawyer.

Tax residency: typically 183+ days or centre of vital interests—e-Residency OÜ alone does not exempt personal tax if you live in Estonia.
`.trim(),

  bankingTips: `
Swedbank, SEB, LHV, Wise—SEPA euro. e-Residents often bank with LHV or fintech stacks.

ID card chip unlocks services—set up early.

Cash rare; instant payments common.

Corporate OÜ + dividend vs salary—accountant essential.

Russia border context—compliance strict for some industries.
`.trim(),

  healthcareInfo: `
EHIF public insurance after employment or qualifying residence—quality good; English in Tallinn private.

Emergency: 112. Digital prescriptions normal.

Mental health winter—light therapy culture.

Sauna weekly—social and health.

Dental: mix public/private—budget extras.
`.trim(),

  culturalTips: `
Estonians seem reserved—silence comfortable. Summer jaanipäev bonfires—say yes.

Direct English in startups; Estonian for long-term integration.

Old Town touristy—live in Kalamaja for local vibe.

Russia legacy sensitive—listen respectfully.

Tipping 10% if great service; not mandatory.

Nature is bogs and forests—mosquito season real.
`.trim(),

  realMonthlyCost: `
Example month Tallinn (Kalamaja / Pelgulinn):

Rent (one-bed): $950
Utilities + internet: $120
Transport (Helsinki ferry occasional amortised): $90
Groceries: $320
Eating out: $240
Coworking: $150
Health insurance / co-pays: $60
Phone + software: $40
Sauna / culture: $70
Miscellaneous: $95

Indicative total: about $2,235.

Tartu -25% rent; Pärnu summer premiums.
`.trim(),

  expatCommunities: [
    "Internations Tallinn",
    "e-Residency Slack",
    "r/Eesti",
    "Meetup Estonia — startups & sauna",
    "Garage48 alumni",
    "Lift99 community",
    "Tartu university internationals",
    "Helsinki day-trip commuters",
  ],

  prosAndCons: {
    pros: [
      "Digital nomad visa + e-Residency ecosystem",
      "Best-in-class digital government",
      "Strong startup and fintech scene",
      "EU Schengen member",
      "English in tech sector",
      "Fast internet",
      "Compact—short commutes",
      "Nordic quality of life",
      "Beautiful nature when you leave city",
      "Helsinki ferry proximity",
    ],
    cons: [
      "e-Residency misunderstood—no automatic living rights",
      "Winter dark and cold",
      "Estonian language hard",
      "Small market—limited local jobs",
      "Rent rising Tallinn",
      "Russia border security context",
      "Social life reserved until trust built",
      "Tax complexity for OÜ owners living in Estonia",
      "Tourist crowding Old Town summer",
      "Some services only Estonian online",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Tallinn",
      neighbourhood: "Kalamaja",
      description: "Wooden houses, Telliskivi creative—$850–$1,400.",
    },
    {
      city: "Tallinn",
      neighbourhood: "Kesklinn",
      description: "Central business—$900–$1,500.",
    },
    {
      city: "Tartu",
      neighbourhood: "Centre",
      description: "University life—$500–$850.",
    },
  ],

  faqs: [
    {
      question: "Does e-Residency let me live in Estonia?",
      answer:
        "No—it is for digital business operations. You still need a visa or residence permit if you are not an EU citizen planning to stay.",
    },
    {
      question: "Tallinn vs Helsinki?",
      answer:
        "Tallinn cheaper and smaller; Helsinki ferry 2h—many split time.",
    },
    {
      question: "Tax if I run an OÜ but live elsewhere?",
      answer:
        "Corporate tax vs personal tax rules differ—consult cross-border accountant.",
    },
    {
      question: "Is English enough?",
      answer:
        "In tech yes; for life admin Estonian helps long term.",
    },
    {
      question: "Startup scene?",
      answer:
        "Strong per capita—Lift99 and accelerators active.",
    },
    {
      question: "Russia proximity concerns?",
      answer:
        "Stay informed via official government advisories; cyber awareness high nationally.",
    },
  ],

  updated: "April 2026",
  wordCount: 1780,
};
