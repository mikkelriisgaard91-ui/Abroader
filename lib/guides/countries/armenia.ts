import type { CountryGuide } from "../types";

export const armenia: CountryGuide = {
  slug: "armenia",
  country: "Armenia",
  flag: "🇦🇲",
  continent: "Europe & Asia",
  capital: "Yerevan",
  currency: "AMD",
  language: "Armenian",
  timezone: "AMT (UTC+4)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 900,
  seoTitle: "Working in Armenia: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Armenia or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Long visa-free stays (180+ days) for many countries",
    "Growing tech product scene post-relocation wave",
    "Mount Ararat views and ancient monasteries",
    "Affordable dining and wine",
    "Diaspora-friendly English in tech",
  ],
  visaOptions: [
    {
      name: "Residence permit (work / business)",
      duration: "1 year renewable",
      cost: "AMD fees",
      requirements: "Employment contract or LLC registration",
    },
    {
      name: "Visa-free entry extension strategies",
      duration: "Passport-dependent",
      cost: "Border runs may be needed",
      requirements: "Check OVIR rules — policies change",
    },
  ],
  cities: [
    {
      name: "Yerevan",
      vibe: "Pink tufa, café terraces, opera square",
      avgRent: "$450–$850/month",
      coworkingSpaces: "Impact Hub, Hero House, Krisp",
    },
    {
      name: "Gyumri",
      vibe: "Second city, slower, creative",
      avgRent: "$300–$550/month",
      coworkingSpaces: "COAF SMART",
    },
    {
      name: "Dilijan",
      vibe: "Forest town, TUMO edge",
      avgRent: "$350–$600/month",
      coworkingSpaces: "Nature cafés",
    },
  ],
  costBreakdown: {
    rent: "$300–$850/month",
    food: "$200–$360/month",
    transport: "$15–$30/month (Yandex)",
    coworking: "$70–$150/month",
  },
  taxInfo:
    "Micro-enterprise schemes exist; remote foreign-sourced income treatment needs Armenian tax advice.",
  communityTips:
    "Learn Armenian alphabet slowly, explore Lake Sevan weekends, follow border situation with neighbours.",
  bestFor: ["Budget", "Tech community", "Mountain monasteries", "Diaspora ties"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Many passport holders can stay visa-free for extended periods—verify current OVIR (Migration Service) rules; long-stay may require temporary residence permits for employment, business, or study.

Register LLC with local accountant for invoicing—micro-enterprise schemes exist with turnover limits.

After entry, obtain social security number, bank account—Ameriabank, ACBA English desks.

Border situation with Azerbaijan sensitive—do not treat lightly—follow official travel advisories for border regions.

Diaspora return wave post-2020 shaped tech scene—networks strong.

Residence card renewal—track deadlines—border crossings for visa resets legally risky if abused.

EU relations evolving—visa liberalisation dialogue—monitor announcements.
`.trim(),

  bankingTips: `
Ameriabank, ACBA, Ineco—AMD accounts.

Cash common; cards growing in Yerevan.

Wise limited—wire transfers—declared.

Remittance economy—Ruble exposure historically—diversify.

Real estate—titles—lawyer essential.
`.trim(),

  healthcareInfo: `
Public underfunded—private clinics Yerevan for expats—affordable vs US.

Emergency: 103. Mountain roads—seatbelts.

Sevan altitude—sunburn fast.

Dolma heavy diet—balance greens.

Mental health—post-conflict awareness—support services growing.
`.trim(),

  culturalTips: `
Armenian language unique branch—learn shnorhakalutyun (thank you). Coffee fortune reading social.

Chess national sport—respect. Cognac brandy pride—try responsibly.

Genocide history sacred—listen carefully in museums.

Tipping 10% upscale; casual cafes round up.

Diaspora ties—Los Angeles jokes welcome—family connections everywhere.
`.trim(),

  realMonthlyCost: `
Example month Yerevan (Kentron / Arabkir):

Rent (one-bed): $520
Utilities + internet: $70
Yandex + marshrutka: $22
Groceries: $210
Restaurants: $180
Coworking: $80
Health / insurance: $40
Phone + software: $25
Sevan day trip: $40
Miscellaneous: $55

Indicative total: about $1,242.

Gyumri -25% rent; Dilijan nature premium.
`.trim(),

  expatCommunities: [
    "Repats Armenia Facebook",
    "r/armenia",
    "Meetup Yerevan — tech & wine",
    "Hero House community",
    "Krisp audio expats",
    "Dilijan slow living",
    "Sevan swimmers",
    "Armenian tech Twitter",
  ],

  prosAndCons: {
    pros: [
      "Very affordable vs EU",
      "Strong tech and startup growth",
      "Diaspora English in tech",
      "Long visa-free for many",
      "Ancient culture and monasteries",
      "Wine and cognac heritage",
      "Lake Sevan escape",
      "Hero House accelerator hub",
      "Mountain hiking",
      "Warm family-oriented culture",
    ],
    cons: [
      "Border region security tensions",
      "Economic dependence on remittances",
      "Public healthcare weak",
      "Armenian language hard",
      "Air pollution Yerevan winter",
      "Some infrastructure gaps",
      "Brain drain youth",
      "Earthquake risk",
      "Landlocked—flight connections via hubs",
      "Political neighbourhood complexity",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Yerevan",
      neighbourhood: "Kentron",
      description: "Centre, opera, cafes—$500–$850.",
    },
    {
      city: "Yerevan",
      neighbourhood: "Arabkir",
      description: "Residential, families—$450–$750.",
    },
    {
      city: "Gyumri",
      neighbourhood: "Centre",
      description: "Creative rebuild—$300–$550.",
    },
  ],

  faqs: [
    {
      question: "Is Armenia safe?",
      answer:
        "Yerevan generally yes—avoid border conflict zones per government advisories.",
    },
    {
      question: "Visa run to Georgia?",
      answer:
        "Policies change—abuse may lead to denial—use proper residence permits for long stays.",
    },
    {
      question: "Ararat visible?",
      answer:
        "Often from Yerevan—peak now mainly Turkey side—symbolic for Armenians.",
    },
    {
      question: "Tax for remote USD?",
      answer:
        "Depends on residency and structure—consult Armenian tax adviser.",
    },
    {
      question: "Best time to visit?",
      answer:
        "Spring and autumn mild—winters cold—summers hot dry.",
    },
    {
      question: "EU membership?",
      answer:
        "Partnership—not EU—visa rules national—monitor future agreements.",
    },
  ],

  updated: "April 2026",
  wordCount: 1620,
};
