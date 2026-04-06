import type { CountryGuide } from "../types";

export const newZealand: CountryGuide = {
  slug: "new-zealand",
  country: "New Zealand",
  flag: "🇳🇿",
  continent: "Oceania",
  capital: "Wellington",
  currency: "NZD",
  language: "English / Māori",
  timezone: "NZST (UTC+12) / +13 DST",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2800,
  seoTitle: "Working in New Zealand: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in New Zealand or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Accredited Employer Work Visa and Skilled Migrant pathways",
    "Auckland tech hub; Wellington government and film",
    "Work-life balance and outdoor lifestyle world-famous",
    "English-speaking, transparent bureaucracy",
    "Pacific gateway with strong Māori cultural presence",
  ],
  visaOptions: [
    {
      name: "Accredited Employer Work Visa (AEWV)",
      duration: "Up to 5 years (role-dependent)",
      cost: "NZD 750+",
      requirements: "Job offer from accredited employer, skills match, health checks",
    },
    {
      name: "Skilled Migrant Category (resident)",
      duration: "Permanent",
      cost: "NZD 4,000+",
      requirements: "Points system; skilled employment in NZ often required",
    },
    {
      name: "Working Holiday Scheme",
      duration: "12 months",
      cost: "NZD 455+",
      requirements: "Age caps by nationality, funds, onward travel",
    },
  ],
  cities: [
    {
      name: "Auckland",
      vibe: "Largest city, harbour, diverse, rainy",
      avgRent: "$1,800–$3,000/month",
      coworkingSpaces: "GridAKL, Generator, BizDojo",
    },
    {
      name: "Wellington",
      vibe: "Windy, compact, creative and public sector",
      avgRent: "$1,500–$2,600/month",
      coworkingSpaces: "Creative HQ, The Settlement",
    },
    {
      name: "Christchurch",
      vibe: "South Island rebuild, outdoors access",
      avgRent: "$1,200–$2,000/month",
      coworkingSpaces: "Greenhouse, Ministry of Awesome",
    },
  ],
  costBreakdown: {
    rent: "$1,400–$2,800/month",
    food: "$400–$650/month",
    transport: "$120–$200/month",
    coworking: "$250–$450/month",
  },
  taxInfo:
    "IRD tax rates progressive; resident tax on worldwide income after 183+ days typically—confirm with accountant. GST 15%.",
  communityTips:
    "Meetup and sports clubs integrate newcomers; respect Māori protocols in workplace welcomes.",
  bestFor: ["Nature access", "Safety", "English", "Film and tech"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Employer-led visas require a genuine role with an Immigration NZ–accredited employer. Job checks and labour market tests may apply depending on role and pay band.

Skilled Migrant Category uses a points-based Expression of Interest—selection draws vary with policy settings.

Partners and dependents need aligned visas—schooling requires planning for Auckland pressure on schools.

After arrival, IRD number, bank account, and driver licence conversion are priorities—book tests early in smaller centres.

Quarantine and biosecurity rules for goods are strict—declare outdoor equipment carefully.
`.trim(),

  bankingTips: `
ANZ, ASB, BNZ, Westpac, and Kiwibank dominate. Proof of address from tenancy agreement helps onboarding.

Wise popular for foreign currency; pay runs weekly or fortnightly common.

Credit history limited—secured products first year.

Housing market competitive—have references and deposit ready.
`.trim(),

  healthcareInfo: `
Public health via district health boards—ACC covers accidents regardless of fault (unique).

Temporary migrants need appropriate insurance until eligible for public funding—check visa conditions.

Emergency: 111. GP enrolment recommended—wait lists in Auckland.

Dental mostly private—budget insurance.
`.trim(),

  culturalTips: `
Informal dress in many offices; flat hierarchy common. Māori language resurgence—learn basic greetings.

Rugby unites; hiking and water sports dominate weekends.

Earthquake preparedness real in Wellington and Christchurch—know your building plan.

Tipping not customary; service charges rare.
`.trim(),

  realMonthlyCost: `
Example month single renter in Auckland central-ish:

Rent (one-bed): $2,400 NZD
Utilities: $160
Transport (AT HOP + ferries): $180
Groceries: $520
Dining out: $320
Coworking: $380
Phone: $70
Insurance: $95
Leisure: $200

Indicative total: about $4,325 NZD — Wellington ~10–15% lower rent in some suburbs.
`.trim(),

  expatCommunities: [
    "New Zealand Expats Facebook",
    "InterNations Auckland",
    "r/newzealand",
    "Techweek NZ events",
    "Trail running and tramping clubs",
  ],

  prosAndCons: {
    pros: [
      "Stunning nature within hours",
      "Safe cities relative to global peers",
      "Clear immigration website",
      "Growing tech and creative sectors",
      "Work culture emphasises balance",
    ],
    cons: [
      "Housing affordability and rent stress in Auckland",
      "Distance from major global markets",
      "Weather variability",
      "Limited consumer choice vs larger economies",
      "Income tax and cost of living vs Australia in some roles",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Auckland",
      neighbourhood: "Ponsonby / Grey Lynn",
      description: "Cafes, heritage villas—premium.",
    },
    {
      city: "Wellington",
      neighbourhood: "Te Aro",
      description: "CBD-adjacent apartments—windy but central.",
    },
    {
      city: "Christchurch",
      neighbourhood: "Central City",
      description: "Rebuilt core—cycle-friendly.",
    },
  ],

  faqs: [
    {
      question: "Is NZ cheaper than Australia?",
      answer:
        "Depends on city and salary—NZ salaries often lower than Sydney/Melbourne for comparable roles; housing pain similar in Auckland.",
    },
    {
      question: "Can I buy a home as a non-resident?",
      answer:
        "Overseas investment rules tightened—often need residency; check OIA rules before assuming.",
    },
  ],

  updated: "April 2026",
  wordCount: 1680,
};
