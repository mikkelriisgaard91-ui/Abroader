import type { CountryGuide } from "../types";

export const turkey: CountryGuide = {
  slug: "turkey",
  country: "Turkey",
  flag: "🇹🇷",
  continent: "Europe & Asia",
  capital: "Ankara",
  currency: "TRY",
  language: "Turkish",
  timezone: "TRT (UTC+3)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1200,
  seoTitle: "Working Remotely in Turkey 2026 — Istanbul & Coastal Cities",
  seoDescription:
    "Turkey remote work: residence permits, Istanbul and Antalya costs, inflation context, taxes and community.",
  highlights: [
    "Istanbul bridges Europe and Asia",
    "Tourism residence and property-linked options common",
    "Mediterranean and Aegean coast lifestyle",
    "Strong café coworking culture",
    "Verify currency inflation when budgeting in TRY",
  ],
  visaOptions: [
    {
      name: "Short-term tourist visa / e-Visa",
      duration: "Varies by nationality",
      cost: "$35–$60",
      requirements: "Many nationalities — remote work grey zone; seek residence permit for long stays",
    },
    {
      name: "Residence permit (property / financial)",
      duration: "1–2 years renewable",
      cost: "TRY fees + insurance",
      requirements: "Property purchase thresholds or proof of income — check Gümrük latest",
    },
  ],
  cities: [
    {
      name: "Istanbul",
      vibe: "Continental megacity, ferries, history",
      avgRent: "$600–$1,400/month",
      coworkingSpaces: "Kolektif House, Workinton, Impact Hub",
    },
    {
      name: "Antalya",
      vibe: "Coast, expat retirees, tourism",
      avgRent: "$500–$1,000/month",
      coworkingSpaces: "Local hubs",
    },
    {
      name: "İzmir",
      vibe: "Aegean relaxed, liberal streak",
      avgRent: "$450–$900/month",
      coworkingSpaces: "Ege University area startups",
    },
  ],
  costBreakdown: {
    rent: "$450–$1,400/month",
    food: "$220–$400/month",
    transport: "$25–$45/month (Istanbulkart)",
    coworking: "$80–$200/month",
  },
  taxInfo:
    "Tax residency if you stay 183+ days; inflation accounting complexity — Turkish accountant mandatory.",
  communityTips:
    "Learn Turkish for bureaucracy, explore Cappadocia weekends, respect local dress norms in conservative areas.",
  bestFor: ["City buzz", "Coast life", "History", "Value vs western EU"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Long-stay residence permits typically require proof of income, health insurance, address registration, and biometric appointments—property purchase routes have minimum thresholds that change with currency policy; verify with a Turkish immigration lawyer and the Directorate General of Migration Management.

EU citizens are not visa-free for work—third-country rules apply unless bilateral treaties say otherwise.

e-Visa tourism does not authorise employment—remote work while on tourist status is legally ambiguous; obtain ikamet (residence permit) for long stays.

After approval, obtain foreign ID number, bank account, and tax office registration if triggering liability.

Renewals require showing continued compliance—rules tightened periodically.

Earthquake zones—check building safety reports for coastal and major cities.

Political context fluid—follow travel advisories from your government.
`.trim(),

  bankingTips: `
İş Bankası, Garanti BBVA, Denizbank—TRY accounts essential.

Inflation high—salary in USD/EUR helps if employer allows; declare lira conversions.

Wise limited—Revolut varies—cash still king some markets.

Gold culturally trusted—understand FX protection mindset.

Cryptocurrency interest—regulatory environment evolving.
`.trim(),

  healthcareInfo: `
SGK public after employment—private hospitals Istanbul for English.

Emergency: 112. Medical tourism strong—dental and hair transplants famous.

Earthquake trauma—mental health support growing.

Heat summer—hydrate. Air quality Istanbul—sometimes poor.

Tap water avoid in older buildings—bottled common.
`.trim(),

  culturalTips: `
Hospitality extreme—tea offered always—accept or decline politely. Shoes off homes.

Ramadan respect—eating in public varies by region. Call to prayer five times—embrace rhythm.

Learn Turkish—English younger urbanites ok.

Bosphorus ferries soul of Istanbul—commute with view.

Tipping 10% upscale restaurants; modest cafes round up.

Kurdish southeast travel—check advisories.
`.trim(),

  realMonthlyCost: `
Example month Istanbul (Kadıköy / Beşiktaş moderate):

Rent (one-bed): $850
Utilities + internet: $95
Istanbulkart + ferry: $40
Groceries: $240
Eating out: $200
Coworking: $120
Private health / insurance: $60
Phone + software: $30
Weekend Princes' Islands: $55
Miscellaneous: $85

Indicative total: about $1,775.

Antalya coast similar; TRY/USD volatility changes USD feel monthly.
`.trim(),

  expatCommunities: [
    "Internations Istanbul",
    "Istanbul Foreigners Facebook",
    "r/Turkey",
    "Meetup Turkey — startups & sailing",
    "Antalya expats",
    "İzmir digital nomads",
    "Kolektif House community",
    "Cappadocia balloon photographers",
  ],

  prosAndCons: {
    pros: [
      "Istanbul world-class city at medium cost (TRY)",
      "Coast and history unmatched",
      "Strong medical tourism value",
      "Growing tech and startup scene",
      "Food and hospitality culture",
      "Residence permit paths for buyers/income",
      "Ferry and tram lifestyle",
      "Weekend thermal and Cappadocia",
      "English in business zones growing",
      "Warm climate coasts",
    ],
    cons: [
      "Inflation volatility—budget in TRY reality",
      "Political sensitivities—avoid careless debates",
      "Earthquake risk—building standards vary",
      "Traffic Istanbul intense",
      "Visa rule changes possible",
      "Some internet censorship—VPN awareness",
      "Language barrier bureaucracy",
      "Summer heat humid coast",
      "Currency conversion stress",
      "Conservative norms regions—research dress",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Istanbul",
      neighbourhood: "Kadıköy",
      description: "Asian side, food, young—$650–$1,200.",
    },
    {
      city: "Istanbul",
      neighbourhood: "Cihangir",
      description: "Expat dense, hills—$700–$1,400.",
    },
    {
      city: "Antalya",
      neighbourhood: "Konyaaltı",
      description: "Beach, families—$500–$1,000.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely on a tourist visa?",
      answer:
        "Legally unclear—long-term remote workers should obtain a residence permit aligned with their situation—consult a Turkish lawyer.",
    },
    {
      question: "Is Turkey cheap?",
      answer:
        "In lira terms locals feel inflation—in hard currency USD sometimes yes for rent—verify live listings.",
    },
    {
      question: "Europe or Asia Istanbul?",
      answer:
        "Both—commute choice—Asian side often cheaper rent—European side historic jobs.",
    },
    {
      question: "Safety for visitors?",
      answer:
        "Generally yes in tourist zones—follow government travel advisories—avoid border regions advised against.",
    },
    {
      question: "EU membership?",
      answer:
        "Candidate status long—visa rules are national not EU—plan accordingly.",
    },
    {
      question: "Best coast?",
      answer:
        "Aegean İzmir calmer; Antalya Mediterranean resort; Bodrum premium—preferences vary.",
    },
  ],

  updated: "April 2026",
  wordCount: 1840,
};
