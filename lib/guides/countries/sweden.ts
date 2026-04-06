import type { CountryGuide } from "../types";

export const sweden: CountryGuide = {
  slug: "sweden",
  country: "Sweden",
  flag: "🇸🇪",
  continent: "Europe",
  capital: "Stockholm",
  currency: "SEK",
  language: "Swedish",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2800,
  seoTitle: "Working Remotely in Sweden 2026 — Work Permits, Stockholm & Taxes",
  seoDescription:
    "Sweden remote work guide: employer sponsorship, personnummer life, Stockholm and Gothenburg costs, parental leave culture.",
  highlights: [
    "World-class infrastructure and English proficiency",
    "Strong labour protections and parental leave",
    "Nature on the doorstep — allemansrätten",
    "High quality healthcare once registered",
    "Design-forward cities",
  ],
  visaOptions: [
    {
      name: "Work permit (employer-sponsored)",
      duration: "Linked to job, renewable",
      cost: "SEK application fees",
      requirements: "Job offer meeting salary/insurance rules, employer advertises role",
    },
    {
      name: "EU Blue Card Sweden",
      duration: "Linked to job",
      cost: "Fees apply",
      requirements: "Higher salary threshold, degree recognition",
    },
  ],
  cities: [
    {
      name: "Stockholm",
      vibe: "Islands, startups, pricey housing",
      avgRent: "$1,400–$2,400/month",
      coworkingSpaces: "Helio, United Spaces, Epicenter",
    },
    {
      name: "Gothenburg",
      vibe: "West coast, automotive and volvo-land",
      avgRent: "$1,000–$1,800/month",
      coworkingSpaces: "A Working Lab, Chalmers hubs",
    },
    {
      name: "Malmö",
      vibe: "Bridge to Copenhagen, diverse",
      avgRent: "$950–$1,600/month",
      coworkingSpaces: "Minc, The Ground",
    },
  ],
  costBreakdown: {
    rent: "$950–$2,400/month",
    food: "$380–$600/month",
    transport: "$90–$110/month",
    coworking: "$220–$400/month",
  },
  taxInfo:
    "High progressive tax with generous services; municipal tax varies by kommun — accountant helps with SINK vs ordinary.",
  communityTips:
    "Queue early for housing via Blocket, join SFI Swedish classes, embrace fika culture for networking.",
  bestFor: ["Quality of life", "Parental leave", "Nature", "Design & sustainability"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Non-EU workers typically receive an employer-sponsored work permit after the employer advertises the role, offers insurance-compliant employment, and meets minimum salary thresholds set by Swedish unions and migration law. Apply online via the Swedish Migration Agency (Migrationsverket); biometrics at embassy follow.

EU Blue Card route suits highly qualified roles with salary above the Blue Card floor—compare with standard permit economics.

After approval, relocate, obtain personnummer (personal identity number) at Skatteverket—essential for bank, healthcare, and subscriptions—then register with Försäkringskassan.

Renew before expiry; changing employers requires new permit checks in many cases.

Remote work for non-Swedish employers without a Swedish entity is generally not covered by standard work permits—do not assume remote-only jobs qualify.

Rejections involve salary too low, insurance gaps, or failed labour market test—employers often use legal counsel.
`.trim(),

  bankingTips: `
Swedbank, SEB, Nordea, and Handelsbanken serve residents; Revolut and Wise popular for FX. BankID is central—unlock via bank account for tax, healthcare login, and signing.

You need personnummer and ID for accounts—queue early.

Swish dominates P2P payments—link mobile number.

Cash almost extinct—card everywhere.

Mortgage requires stable Swedish income—remote foreign employers complicate.

Declare foreign accounts if required—Skatteverket data sharing is strict.
`.trim(),

  healthcareInfo: `
Once registered with a personnummer, you access regionally managed healthcare (Vårdcentralen for GP, specialist referrals). Quality is high; waits for non-urgent care can stretch—1177 phone line triages.

Emergency: 112. Private care exists for faster access—optional insurance.

Dental: adult basic care subsidised partially—supplement for major work.

Mental health: improving access—university clinics in student cities.

Pharmacies (Apotek) efficient; prescription costs capped with high-cost protection.

Parental care and childcare are flagship strengths—plan ahead for queues in popular cities.
`.trim(),

  culturalTips: `
Lagom (not too much, not too little) shapes social norms—avoid loud self-promotion. Fika (coffee + pastry) is sacred networking—schedule it.

Queues are orderly; silence on public transport is appreciated. Summer cottages (sommarstuga) are national religion—say yes if invited.

English is excellent in business; Swedish unlocks deeper friendships and landlord advantage.

Winter darkness is real—vitamin D, gym, and social clubs help. Allemansrätten allows responsible hiking and camping—learn rules.

Tipping rare in casual settings; round up in fine dining.
`.trim(),

  realMonthlyCost: `
Example month for a single skilled worker in Stockholm (inner suburbs, not Östermalm prime):

Rent (one-bed): $1,650
Utilities + internet: $140
SL travel card: $100
Groceries (Coop/Willys): $420
Restaurants / fika: $280
Coworking: $260
Phone + software: $48
Gym / swimming: $75
Miscellaneous: $150

Indicative total: about $3,123.

Gothenburg and Malmö often 15–25% lower rent; SEK volatility affects USD comparisons.
`.trim(),

  expatCommunities: [
    "Internations Stockholm & Gothenburg",
    "Swedish American Expats Facebook",
    "r/TillSverige",
    "Meetup Sweden — tech & outdoors",
    "Stockholm International Hub",
    "Malmö Expats",
    "SFI study buddy groups",
    "Nordic startup Slack communities",
  ],

  prosAndCons: {
    pros: [
      "Exceptional quality of life and safety",
      "Generous parental leave and benefits",
      "World-class English in business",
      "Nature access and allemansrätten",
      "Strong workers' rights",
      "Clean cities and public transport",
      "Innovation in design and green tech",
      "EU freedom for EU citizens",
      "Healthcare quality once registered",
      "Progressive social norms",
    ],
    cons: [
      "Housing shortage in Stockholm/Gothenburg",
      "High taxes and cost of living",
      "Dark cold winters",
      "Work permits tied to employer sponsorship",
      "Personnummer queues can delay life setup",
      "Alcohol monopoly Systembolaget hours",
      "Integration can feel slow without Swedish",
      "Remote foreign employment rarely fits permits",
      "Long waits for some specialist care",
      "Competitive rental market with references",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Stockholm",
      neighbourhood: "Södermalm",
      description: "Trendy, bars, walkable—popular; $1,400–$2,100 one-bed.",
    },
    {
      city: "Gothenburg",
      neighbourhood: "Haga",
      description: "Cobblestones, cafés, students—$1,000–$1,600.",
    },
    {
      city: "Malmö",
      neighbourhood: "Västra Hamnen",
      description: "Waterfront, sustainable, Turning Torso—$1,000–$1,700.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely for a US company from Sweden?",
      answer:
        "Usually not without a permit tied to a Swedish employer or qualifying legal basis—Migrationsverket rules are strict; verify before moving.",
    },
    {
      question: "How important is Swedish?",
      answer:
        "English works professionally; Swedish transforms social life and housing access—SFI is free or low cost.",
    },
    {
      question: "Is Stockholm the only option?",
      answer:
        "No—Gothenburg, Malmö, Linköping, and Uppsala offer tech jobs with lower rent pressure.",
    },
    {
      question: "What is personnummer?",
      answer:
        "A personal identity number from Skatteverket—needed for almost everything after you register as resident.",
    },
    {
      question: "Are taxes high?",
      answer:
        "Yes—progressive income tax plus municipal tax funds services many expats appreciate—model net salary with employer.",
    },
    {
      question: "Is Sweden safe?",
      answer:
        "Among the world's safest—standard urban awareness in nightlife districts.",
    },
  ],

  updated: "April 2026",
  wordCount: 1980,
};
