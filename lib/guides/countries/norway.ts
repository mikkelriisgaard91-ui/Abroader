import type { CountryGuide } from "../types";

export const norway: CountryGuide = {
  slug: "norway",
  country: "Norway",
  flag: "🇳🇴",
  continent: "Europe",
  capital: "Oslo",
  currency: "NOK",
  language: "Norwegian",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "Very High",
  avgMonthlyCost: 3200,
  seoTitle: "Working in Norway: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Norway or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Exceptional nature and work-life balance",
    "High salaries offset high prices",
    "Strong English in professional life",
    "Oil fund-backed infrastructure",
    "Northern lights and fjords",
  ],
  visaOptions: [
    {
      name: "Skilled worker residence",
      duration: "Linked to job",
      cost: "NOK fees",
      requirements: "Job offer, qualifications, pay above thresholds",
    },
    {
      name: "Study permit",
      duration: "Program length",
      cost: "Fees",
      requirements: "Admission letter, funds proof",
    },
  ],
  cities: [
    {
      name: "Oslo",
      vibe: "Compact capital, fjord access",
      avgRent: "$1,400–$2,400/month",
      coworkingSpaces: "Mesh, Spaces, WeWork",
    },
    {
      name: "Bergen",
      vibe: "Rainy, scenic, seafood",
      avgRent: "$1,200–$2,000/month",
      coworkingSpaces: "Bergen Workation hubs",
    },
    {
      name: "Trondheim",
      vibe: "Student tech, central Norway",
      avgRent: "$1,000–$1,700/month",
      coworkingSpaces: "Work-Work",
    },
  ],
  costBreakdown: {
    rent: "$1,000–$2,400/month",
    food: "$450–$700/month",
    transport: "$80–$100/month",
    coworking: "$250–$450/month",
  },
  taxInfo:
    "High tax but wealth tax rules evolving; report worldwide assets carefully — Norwegian accountant essential.",
  communityTips:
    "Join hiking clubs for networking, learn Bokmål basics, use Finn.no for housing.",
  bestFor: ["Nature", "Safety", "High income", "Outdoor sports"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Non-EU/EEA nationals typically need a full-time job offer from a Norwegian employer that meets salary minimums and qualifications for a skilled worker residence permit (UDI). Employers document the role; you apply online, submit passport, education proofs, and housing plan, then attend biometrics.

EU/EEA citizens register under free movement after three months if working—simpler path.

Study permits require admission and proof of funds—part-time work hours capped.

After entry, obtain national ID number (fødselsnummer / D-number sequence), bank account (often requires ID + employer letter), and register with GP (fastlege).

Renew permits with continued employment; switching jobs may need new assessment if role changes.

Remote work for foreign employers without Norwegian payroll is not generally authorised by standard skilled worker permits—verify with UDI.

Wealth tax and worldwide asset reporting apply to tax residents—consult a Norwegian accountant before becoming resident.
`.trim(),

  bankingTips: `
DNB, Nordea, SpareBank 1, and digital banks serve residents. BankID and BankAxept enable mobile payments—essential for Vipps P2P.

You need national ID number and address for accounts—employer letters help.

NOK is not EUR—budget FX volatility. Wise for receiving foreign currency—declare to tax authority if resident.

Cash rare; cards universal. Credit card culture less revolving than US.

Mortgage requires stable Norwegian income—documentation heavy.

Strict AML—source large transfers carefully.
`.trim(),

  healthcareInfo: `
Public healthcare (via fastlege GP system) is funded through membership in Norwegian National Insurance—once employed and registered, access is comprehensive.

Emergency: 113 medical, 112 fire/police. Private hospitals exist for elective speed—optional insurance.

Dental: costly for adults—consider supplemental insurance.

Mental health: improving access—private psychologists faster.

Pharmacies (apotek) efficient; prescription costs moderated.

Outdoor injuries common—know mountain safety; rescue insurance for backcountry.
`.trim(),

  culturalTips: `
Jantelaw (modesty) discourages boasting—let achievements speak quietly. Nature is sacred—weekend cabins (hytte) bind families.

Friday taco (tacofredag) is national tradition. Alcohol expensive—plan Vinmonopolet trips (state monopoly).

English excellent in oil and tech; Norwegian builds trust in smaller towns.

Weather varies—Bergen rain gear mandatory. Skiing culture deep—try cross-country before downhill snobbery.

Tipping 10–15% in restaurants if exceptional; service often included.
`.trim(),

  realMonthlyCost: `
Example month in Oslo (single, modest):

Rent (one-bed): $1,750
Utilities + internet: $150
Ruter monthly transport: $90
Groceries (Rema/Kiwi): $480
Eating out: $320
Coworking: $280
Gym + outdoor gear amortised: $120
Phone + software: $50
Miscellaneous: $160

Indicative total: about $3,400.

Bergen and Trondheim often lower rent; NOK/USD rate swings totals.
`.trim(),

  expatCommunities: [
    "Internations Oslo & Bergen",
    "Americans in Norway Facebook",
    "r/Norway",
    "Meetup Norway — hiking & tech",
    "Oslo International Hub",
    "Trondheim expats",
    "Oil & gas industry networks Stavanger",
    "Ski and trekking clubs DNT",
  ],

  prosAndCons: {
    pros: [
      "Spectacular nature and outdoor culture",
      "High salaries in tech and energy",
      "Excellent English professionally",
      "Strong safety and rule of law",
      "Generous parental leave and benefits",
      "Oil wealth infrastructure",
      "Northern lights and fjords",
      "Work-life respect",
      "Clean air and water",
      "Progressive society",
    ],
    cons: [
      "Very high cost of living",
      "Weather and darkness in winter north",
      "Housing competition in Oslo",
      "Wealth tax for residents with global assets",
      "Permits tied to Norwegian employers",
      "Alcohol pricing and monopoly",
      "Integration can feel reserved",
      "Remote foreign jobs rarely qualify",
      "Rain in Bergen relentless",
      "Limited late-night retail culture",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Oslo",
      neighbourhood: "Grünerløkka",
      description: "Hip, cafés, young—$1,400–$2,200 one-bed.",
    },
    {
      city: "Bergen",
      neighbourhood: "Sandviken",
      description: "Hills, views, quieter—$1,200–$1,900.",
    },
    {
      city: "Trondheim",
      neighbourhood: "Solsem",
      description: "Student-adjacent, fjord—$1,000–$1,600.",
    },
  ],

  faqs: [
    {
      question: "Can I move to Norway without a job?",
      answer:
        "Generally not for non-EEA—skilled worker permits require employer sponsorship. EEA citizens can seek work but must support themselves.",
    },
    {
      question: "Is Norwegian required?",
      answer:
        "Not for many jobs, but language helps socially and for some trades—free courses exist in municipalities.",
    },
    {
      question: "How expensive is food?",
      answer:
        "Very—salaries reflect this; budget grocery shopping and limit dining out.",
    },
    {
      question: "What about wealth tax?",
      answer:
        "Residents may owe wealth tax on global net wealth above thresholds—rules change; accountant essential.",
    },
    {
      question: "Driving in winter?",
      answer:
        "Studded tyres common; learn winter driving or use excellent public transport in Oslo.",
    },
    {
      question: "EU citizenship helps?",
      answer:
        "Yes—free movement simplifies registration versus third-country work permits.",
    },
  ],

  updated: "April 2026",
  wordCount: 2000,
};
