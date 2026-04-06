import type { CountryGuide } from "../types";

export const uk: CountryGuide = {
  slug: "uk",
  country: "United Kingdom",
  flag: "🇬🇧",
  continent: "Europe",
  capital: "London",
  currency: "GBP",
  language: "English",
  timezone: "GMT / BST (UTC±0/+1)",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "Very High",
  avgMonthlyCost: 3200,
  seoTitle: "Working in the UK: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in the UK or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Global finance and tech hub in London",
    "Skilled Worker visa for sponsored roles",
    "Strong legal system and creative industries",
    "No longer EU — plan immigration carefully",
    "Diverse cities across England, Wales, NI",
  ],
  visaOptions: [
    {
      name: "Skilled Worker visa",
      duration: "Up to 5 years",
      cost: "£700+ + IHS",
      requirements: "Licensed sponsor, job at skill/salary level",
    },
    {
      name: "Global Talent visa",
      duration: "Up to 5 years",
      cost: "£600+",
      requirements: "Endorsement in academia, arts, or digital tech",
    },
  ],
  cities: [
    {
      name: "London",
      vibe: "Global city, expensive housing",
      avgRent: "$1,800–$3,200/month",
      coworkingSpaces: "WeWork, Huckletree, Fora",
    },
    {
      name: "Manchester",
      vibe: "Northern powerhouse, football culture",
      avgRent: "$1,000–$1,800/month",
      coworkingSpaces: "Use.Space, Colony",
    },
    {
      name: "Bristol",
      vibe: "Southwest creative tech",
      avgRent: "$1,100–$1,900/month",
      coworkingSpaces: "Engine Shed, Runway East",
    },
  ],
  costBreakdown: {
    rent: "$1,000–$3,200/month",
    food: "$400–$650/month",
    transport: "$180–$220/month (Travelcard zones 1–2)",
    coworking: "$250–$480/month",
  },
  taxInfo:
    "Residence and domicile rules affect worldwide taxation; IR35 for contractors — UK accountant essential.",
  communityTips:
    "Rightmove/Zoopla alerts, join local tech Slack, explore national parks by train.",
  bestFor: ["English careers", "Creative industries", "Finance", "Global networking"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Post-Brexit, EU citizens no longer enjoy free movement—most workers need a visa sponsored by a licensed UK employer (Skilled Worker), qualify for Global Talent after endorsement, or fit another route (Scale-up, Health and Care, family, etc.).

Skilled Worker requires a Certificate of Sponsorship, job at RQF skill level, and minimum salary thresholds that vary by occupation—check the Home Office occupation coding.

Apply online, pay Immigration Health Surcharge (IHS) for NHS access, submit biometrics, and await decision—priority services exist for a fee.

After approval, collect BRP, start NI contributions, open bank account—proof of address loops challenge newcomers—employer letters help.

Indefinite leave to remain (ILR) possible after qualifying residence—plan absences carefully.

Visitor visas do not permit work—remote work while on tourism is legally risky; get proper advice.

Scottish income tax differs—see Scotland guide if relocating north.
`.trim(),

  bankingTips: `
Barclays, HSBC UK, Monzo, Starling—proof of address required—online banks easier for some newcomers.

BACS/Faster Payments instant; cheques rare.

Wise for receiving USD/EUR—UK tax residency still applies to worldwide income if domiciled rules met.

Credit history builds slowly—register electoral roll when eligible.

Buy-to-let and SDLT rules complex—adviser for property.
`.trim(),

  healthcareInfo: `
NHS funded by taxation via NI + IHS for migrants—register GP after address—waits for non-urgent care can be long.

Private insurance optional for speed—Bupa, Vitality.

Emergency: 999. A&E triage serious conditions.

Dental NHS limited—private common.

Mental health NHS improving—therapy waits long in many areas—employer EAPs help.
`.trim(),

  culturalTips: `
Queueing is sacred—no pushing. Sorry is punctuation—British understatement.

Pub rounds culture—don't skip your round. Weather small talk mandatory.

Class and accent sensitivity exists—avoid lazy stereotypes.

Tipping 10–12% restaurants if service not included; pubs tip staff sometimes.

Regional identity strong—England/Scotland/Wales/NI differ—respect local pride.
`.trim(),

  realMonthlyCost: `
Example month London (zones 2–3, flat share or modest one-bed):

Rent: $2,100
Council tax + utilities: $280
Travelcard zones 1–2: $200
Groceries: $420
Eating out: $320
Coworking: $320
Phone + software: $55
Gym / culture: $120
Miscellaneous: $180

Indicative total: about $3,995.

Manchester/Bristol often 35–50% lower rent than London zones 1–2.
`.trim(),

  expatCommunities: [
    "Internations London & Manchester",
    "American expats UK Facebook",
    "r/AskUK",
    "Meetup UK — tech & finance",
    "London Tech Advocates",
    "Yorkshire expats",
    "Bristol creatives",
    "UK visa forums (verify legally)",
  ],

  prosAndCons: {
    pros: [
      "World-class finance and creative industries",
      "English-speaking global hub",
      "NHS once registered",
      "Strong rule of law",
      "Diverse cities and culture",
      "Global Talent pathway for leaders",
      "Rail network for weekend travel",
      "Universities and research excellence",
      "Time zone bridges US and Asia",
      "Career ceiling high in London",
    ],
    cons: [
      "Very high living costs especially London",
      "Post-Brexit immigration friction",
      "IHS surcharge adds up for families",
      "Weather grey and wet",
      "Housing market competitive",
      "IR35 complexity for contractors",
      "Tax domicile rules complex for HNWIs",
      "NHS waits for elective care",
      "Train fares expensive walk-up",
      "Visa sponsorship ties to employer",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "London",
      neighbourhood: "Shoreditch",
      description: "Tech, nightlife, pricey—$2,000–$3,200 flat share to one-bed.",
    },
    {
      city: "Manchester",
      neighbourhood: "Northern Quarter",
      description: "Creative, bars—$1,000–$1,700.",
    },
    {
      city: "Bristol",
      neighbourhood: "Clifton",
      description: "Leafy, families—$1,200–$1,900.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely on a visitor visa?",
      answer:
        "Generally no—visitor rules prohibit work; remote work for overseas employer remains legally grey—seek immigration solicitor advice.",
    },
    {
      question: "Is NHS free?",
      answer:
        "Funded via taxes and IHS for visa holders—most services free at point of use; dental and prescriptions often charged.",
    },
    {
      question: "London vs regional cities?",
      answer:
        "London for maximum career density; Manchester, Leeds, Bristol, Edinburgh for quality of life vs cost trade-offs.",
    },
    {
      question: "Global Talent visa difficulty?",
      answer:
        "High bar—requires endorsement from approved bodies—prepare portfolio evidence.",
    },
    {
      question: "EU citizen 2026?",
      answer:
        "No free movement—settled status for pre-2021 arrivals; others need visas like other non-UK nationals.",
    },
    {
      question: "Tax residency?",
      answer:
        "Statutory residence test determines UK tax—worldwide income if UK resident—use accountant.",
    },
  ],

  updated: "April 2026",
  wordCount: 2100,
};
