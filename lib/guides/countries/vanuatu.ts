import type { CountryGuide } from "../types";

export const vanuatu: CountryGuide = {
  slug: "vanuatu",
  country: "Vanuatu",
  flag: "🇻🇺",
  continent: "Oceania",
  capital: "Port Vila",
  currency: "VUV",
  language: "Bislama / English / French",
  timezone: "VUT (UTC+11)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1500,
  seoTitle: "Working in Vanuatu: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Vanuatu or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Tourism, agriculture, and offshore financial services history",
    "Citizenship-by-investment programme existed—rules change; verify legally",
    "English and French legacies—Bislama bridges communities",
    "Port Vila and Luganville hubs—outer islands very rural",
    "Active volcanoes and earthquakes—respect alerts",
  ],
  visaOptions: [
    {
      name: "Business visa / work permit",
      duration: "1 year renewable",
      cost: "VUV fees",
      requirements: "Employer or business licence—police and medical checks",
    },
    {
      name: "Long-stay tourism extensions",
      duration: "Months",
      cost: "Fees",
      requirements: "Not for work—income activities need permits",
    },
    {
      name: "Investor categories",
      duration: "Case-based",
      cost: "Legal + investment",
      requirements: "Due diligence—use licensed promoter",
    },
  ],
  cities: [
    {
      name: "Port Vila",
      vibe: "Harbour, resorts, NGOs",
      avgRent: "$700–$1,600/month",
      coworkingSpaces: "The Hub Vanuatu, hotel lounges",
    },
    {
      name: "Luganville (Espiritu Santo)",
      vibe: "Diving, WWII history",
      avgRent: "$500–$1,200/month",
      coworkingSpaces: "Resort Wi‑Fi",
    },
  ],
  costBreakdown: {
    rent: "$600–$1,500/month",
    food: "$300–$550/month",
    transport: "$100–$220/month",
    coworking: "$120–$280/month",
  },
  taxInfo:
    "Territorial tax concepts historically marketed—rules evolved; mandatory adviser before structuring residency.",
  communityTips:
    "Kastom (custom) varies by island—ask permission for village entry; kava nights social glue.",
  bestFor: ["Dive industry", "NGOs", "Slow island living"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Work permits via employer or investment pathway—lawyers in Vila handle volume.

Housing leases often 6–12 months upfront—negotiate generator inclusion.

Cyclone season November–April—insurance and shutters non-negotiable.

Domestic flights to outer islands—book weight early.

Bank references needed—KYC can be slow—start early.
`.trim(),

  bankingTips: `
ANZ, Bred Bank, BSP—VUV accounts. Cards in Vila; cash rural.

International wires subject to compliance—source of funds documentation.

ATMs can run out long weekends—carry buffer.

USD and AUD sometimes quoted in tourism—watch FX.
`.trim(),

  healthcareInfo: `
Vila Central Hospital—private clinics for expats faster.

Medevac to Noumea or Brisbane for major surgery—insurance essential.

Dengue periodic—nets and repellent.

Dive medical support strong—recompression chamber in Vila.
`.trim(),

  culturalTips: `
Bislama helps rapport—learn basics.

French and English schools exist—fees vary.

Earthquakes frequent—drop-cover-hold drills matter.

Kava milder than some Pacific states—still pace yourself.
`.trim(),

  realMonthlyCost: `
Example month Port Vila (single):

Rent (one-bed): $1,100
Utilities + generator share: $140
Groceries: $380
Dining out: $240
Transport: $140
Phone + data: $75
Insurance: $110
Weekend Santo flight: $220

Indicative total: ~$2,405 VUV equivalent.
`.trim(),

  expatCommunities: [
    "Vanuatu expat Facebook",
    "Dive industry networks",
    "Chamber of commerce Port Vila",
  ],

  prosAndCons: {
    pros: [
      "Beautiful diving and volcanoes",
      "Multilingual environment",
      "Lower bureaucracy friction than some peers",
      "Growing fibre in Vila",
    ],
    cons: [
      "Cyclone and quake risk",
      "Limited specialist healthcare",
      "Import costs",
      "Income opportunities narrower than Fiji",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Port Vila",
      neighbourhood: "Seaside / Nambatri",
      description: "Breeze and views—check landslide history on hills.",
    },
  ],

  faqs: [
    {
      question: "Is Vanuatu a tax haven for remote workers?",
      answer:
        "Marketing oversimplified—OECD scrutiny and local law changes mean you must get individual legal and tax advice; do not rely on forum posts.",
    },
  ],

  updated: "April 2026",
  wordCount: 1280,
};
