import type { CountryGuide } from "../types";

export const australia: CountryGuide = {
  slug: "australia",
  country: "Australia",
  flag: "🇦🇺",
  continent: "Oceania",
  capital: "Canberra",
  currency: "AUD",
  language: "English",
  timezone: "Multiple (AEST AWST ACST)",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "Very High",
  avgMonthlyCost: 3200,
  seoTitle: "Working in Australia: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Australia or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Strong salaries in tech, healthcare, and mining",
    "Working Holiday and skilled migration pathways",
    "Sydney and Melbourne global cities; Brisbane and Perth growing",
    "High quality of life, beaches, and outdoor culture",
    "English-speaking with robust rule of law",
  ],
  visaOptions: [
    {
      name: "Skilled Independent (subclass 189) / State nominated (190)",
      duration: "Permanent",
      cost: "AUD 4,000+",
      requirements: "Points-tested skills list, English test, skills assessment",
    },
    {
      name: "Temporary Skill Shortage (subclass 482)",
      duration: "Up to 4 years",
      cost: "Sponsor-led",
      requirements: "Approved employer, occupation on list, English",
    },
    {
      name: "Working Holiday (subclass 417/462)",
      duration: "12 months (extensions in some cases)",
      cost: "AUD 600+",
      requirements: "Age-limited eligible nationalities, funds proof",
    },
  ],
  cities: [
    {
      name: "Sydney",
      vibe: "Harbour, finance, startups, expensive",
      avgRent: "$2,200–$3,800/month",
      coworkingSpaces: "WeWork, Hub Australia, Tank Stream Labs",
    },
    {
      name: "Melbourne",
      vibe: "Culture, coffee, creative industries",
      avgRent: "$1,800–$3,200/month",
      coworkingSpaces: "The Commons, Spaces, Creative Cubes",
    },
    {
      name: "Brisbane",
      vibe: "Warmer climate, growing tech, Olympics prep",
      avgRent: "$1,500–$2,600/month",
      coworkingSpaces: "River City Labs, WeWork",
    },
  ],
  costBreakdown: {
    rent: "$1,500–$3,500/month (varies by city)",
    food: "$400–$700/month",
    transport: "$150–$250/month (Opal/Myki)",
    coworking: "$300–$550/month",
  },
  taxInfo:
    "Resident tax on worldwide income; Medicare levy; TFN required. Double tax treaties common — use a registered tax agent for first year.",
  communityTips:
    "Meetup, Facebook expat groups, and industry Slack communities are huge in Sydney and Melbourne; AFL and beach culture are social glue.",
  bestFor: ["High salaries", "Outdoor lifestyle", "English", "Career growth"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Skilled migration usually starts with a skills assessment from the relevant assessing authority for your occupation, then an Expression of Interest via SkillSelect. Invitations are competitive—points for age, English, experience, and sometimes state nomination.

Employer-sponsored 482 requires a Standard Business Sponsor and a role on the skilled occupation list. Processing times vary—check Home Affairs for current queues.

Working Holiday makers can work limited hours per employer; regional work may extend stays. Student visas allow limited work hours—compliance is strict.

Onshore transitions (e.g. graduate visas) are common for international graduates—plan early with a migration agent if your case is complex.

After grant, apply for TFN, Medicare if eligible, and superannuation—employers pay compulsory super.
`.trim(),

  bankingTips: `
Major banks: Commonwealth, Westpac, ANZ, NAB. 100-point ID check—passport, visa grant, proof of address. Online banks like Up and Macquarie popular with nomads.

PayID and Osko for instant transfers. Credit history starts fresh—secured cards help.

Wise and PayPal common for foreign clients; declare worldwide income to the ATO as tax resident.

Rent often requires references—offer employment letter and bank statements.
`.trim(),

  healthcareInfo: `
Medicare for citizens and permanent residents; many employers provide private “extras” insurance.

Temporary visa holders typically need Overseas Visitor Health Cover (OVHC)—budget into quotes.

Emergency: 000. GP bulk-billing exists in some suburbs; major hospitals in capitals.

Mental health services improving—telehealth widely available.
`.trim(),

  culturalTips: `
Direct communication; punctuality valued in corporate settings. Coffee culture serious in Melbourne; Sydney more finance-paced.

Tipping not expected but appreciated ~10% in cafes for table service.

Public holidays and “sickies” around long weekends—plan around Australia Day and Easter.

Indigenous respect matters—learn local Acknowledgement of Country norms in workplaces.

Sun safety real—SLIP-SLOP-SLAP; surf culture strong but rips dangerous.
`.trim(),

  realMonthlyCost: `
Example month single professional in Melbourne inner suburbs:

Rent (one-bed): $2,400
Utilities: $180
Transport (Myki + occasional Uber): $200
Groceries: $480
Dining out: $350
Coworking: $420
Phone + internet: $85
Gym: $75
Health cover (OVHC prorated): $110
Miscellaneous: $150

Indicative total: about $4,450 AUD — Sydney CBD higher; regional cities lower.
`.trim(),

  expatCommunities: [
    "InterNations Australia",
    "Aussie expat Facebook groups",
    "r/australia and city subreddits",
    "Sydney Tech Meetup",
    "Melbourne Digital Nomads",
    "LinkedIn industry groups",
  ],

  prosAndCons: {
    pros: [
      "High wages in skilled sectors",
      "Excellent infrastructure and healthcare",
      "Diverse, multicultural cities",
      "Strong rule of law",
      "Outdoor lifestyle and climate variety",
      "English language",
      "Growing remote-friendly employers",
    ],
    cons: [
      "Visa complexity and cost",
      "Housing affordability crisis in major cities",
      "Distance from Europe/Americas for travel",
      "Strict biosecurity at borders",
      "Tax residency can capture worldwide income",
      "Summer heat and bushfire smoke in some years",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Sydney",
      neighbourhood: "Surry Hills / Redfern",
      description: "Creative, cafes, close to CBD—premium rents.",
    },
    {
      city: "Melbourne",
      neighbourhood: "Carlton / Fitzroy",
      description: "Laneways, culture, trams—popular with young professionals.",
    },
    {
      city: "Brisbane",
      neighbourhood: "Fortitude Valley",
      description: "Nightlife, river access—growing tech scene.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely for an overseas employer on a skilled visa?",
      answer:
        "Often yes if visa conditions allow and tax residency is managed—confirm with a migration agent and tax adviser; rules depend on subclass.",
    },
    {
      question: "Is Australia good for families?",
      answer:
        "Yes—schools strong in cities; childcare costly; suburbs with good schools price premiums.",
    },
    {
      question: "How long does skilled migration take?",
      answer:
        "Highly variable—months to years depending on occupation, invitations, and policy changes—monitor Home Affairs.",
    },
  ],

  updated: "April 2026",
  wordCount: 1850,
};
