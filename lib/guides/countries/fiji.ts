import type { CountryGuide } from "../types";

export const fiji: CountryGuide = {
  slug: "fiji",
  country: "Fiji",
  flag: "🇫🇯",
  continent: "Oceania",
  capital: "Suva",
  currency: "FJD",
  language: "English / iTaukei / Fiji Hindi",
  timezone: "FJT (UTC+12)",
  visaDifficulty: "Medium",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1400,
  seoTitle: "Working in Fiji: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Fiji or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Tourism, logistics, and regional HQ roles in Suva and Nadi",
    "Island lifestyle with strong English in business",
    "Growing interest from remote workers (check visa rules)",
    "Pacific hub with flights to Australia and NZ",
    "Warm culture—community and church central",
  ],
  visaOptions: [
    {
      name: "Work permit (employer-sponsored)",
      duration: "1–3 years typical",
      cost: "FJD fees + medical",
      requirements: "Local employer sponsorship, police clearance, health checks",
    },
    {
      name: "Residence permits (investor / retired categories)",
      duration: "Varies",
      cost: "Case-based",
      requirements: "Investment thresholds or proof of funds—verify with Immigration Fiji",
    },
    {
      name: "Visitor visa / permit extensions",
      duration: "Short stay",
      cost: "Fees",
      requirements: "No work without authorisation—remote work grey area; confirm legally",
    },
  ],
  cities: [
    {
      name: "Suva",
      vibe: "Capital, government, universities, rainy",
      avgRent: "$600–$1,200/month",
      coworkingSpaces: "Limited—hotels, Tappoo City cafes",
    },
    {
      name: "Nadi / Denarau",
      vibe: "Tourism, resorts, airport",
      avgRent: "$700–$1,500/month",
      coworkingSpaces: "Resort business centres",
    },
    {
      name: "Lautoka",
      vibe: "Sugar port, industrial",
      avgRent: "$450–$900/month",
      coworkingSpaces: "Informal cafés",
    },
  ],
  costBreakdown: {
    rent: "$500–$1,400/month",
    food: "$250–$450/month",
    transport: "$80–$180/month",
    coworking: "$100–$250/month",
  },
  taxInfo:
    "Employed income taxed PAYE; residency rules determine scope—use a local accountant for cross-border remote arrangements.",
  communityTips:
    "Village etiquette matters—dress modestly away from resorts; sevusevu (kava) ceremonies common for introductions.",
  bestFor: ["Island life", "Tourism careers", "Regional expats"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Work permits require a sponsoring employer registered in Fiji. Medical examinations and police certificates are standard. Processing times fluctuate—follow up with Immigration Department.

Investor categories need business plans and capital proof—lawyers in Suva specialise.

Do not assume tourist status allows remote work—get written clarity on permissible activities.

Renewals need continued employment and clean compliance—keep passport validity long.
`.trim(),

  bankingTips: `
ANZ, BSP, Bred Bank, and HFC Bank operate widely. Opening as a resident requires work permit and proof of address.

Cash still used outside tourist strips; cards in Nadi/Suva.

International transfers can be slow—plan payroll timing.

USD and AUD sometimes referenced for tourism pricing—watch FX spreads.
`.trim(),

  healthcareInfo: `
Public hospitals in Suva and Lautoka; quality varies—serious cases may medevac to Australia or NZ.

Private providers in Suva for expats—insurance essential.

Dengue and typhoid risks—mosquito protection; clean water in cities generally OK.

Emergency: 911 or local hospital numbers—confirm on arrival.
`.trim(),

  culturalTips: `
Smile and soft tone—direct confrontation rare. Sunday quiet—church attendance strong.

Modest dress in towns; swimwear only at designated beaches.

Kava sessions long—pace yourself; accept bowls respectfully.

Cyclone season November–April—have emergency kit and insurance.
`.trim(),

  realMonthlyCost: `
Example month in Suva (single, mid-range):

Rent (two-bed apartment): $950 FJD equiv
Utilities: $90
Transport (bus + taxi): $120
Groceries: $320
Eating out: $200
Phone + data: $45
Insurance: $80
Weekend island trip: $180

Indicative total: about $1,985 — resort areas much higher.
`.trim(),

  expatCommunities: [
    "Fiji Expats Facebook",
    "Regional development networks Suva",
    "Rotary and chamber of commerce",
    "Dive and sailing clubs",
  ],

  prosAndCons: {
    pros: [
      "Friendly culture",
      "English widely used professionally",
      "Natural beauty and diving",
      "Lower cost than Australia for local goods",
      "Regional travel hub",
    ],
    cons: [
      "Limited high-salary roles outside tourism/NGOs",
      "Infrastructure and healthcare gaps vs OECD",
      "Cyclone risk",
      "Import costs for electronics",
      "Internet reliability variable outside towns",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Suva",
      neighbourhood: "Domain / Tamavua",
      description: "Elevated, cooler, expat families—check flooding history.",
    },
    {
      city: "Nadi",
      neighbourhood: "Martintar",
      description: "Services near airport—noisy flight path.",
    },
  ],

  faqs: [
    {
      question: "Can I freelance remotely on a tourist visa?",
      answer:
        "Generally no—working without a permit risks fines and deportation; secure proper advice before earning income in or from Fiji.",
    },
  ],

  updated: "April 2026",
  wordCount: 1420,
};
