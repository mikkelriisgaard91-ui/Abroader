import type { CountryGuide } from "../types";

export const mongolia: CountryGuide = {
  slug: "mongolia",
  country: "Mongolia",
  flag: "🇲🇳",
  continent: "Asia",
  capital: "Ulaanbaatar",
  currency: "MNT",
  language: "Mongolian; Russian and English pockets in UB",
  timezone: "ULAT (UTC+8)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 950,
  seoTitle: "Working in Mongolia: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Mongolia for remote workers: Ulaanbaatar, Erdenet, Darkhan — visas, winter extremes, cost of living, and practical tips for 2026.",
  highlights: [
    "E-visa and visa-free windows for some nationalities — verify immigration portal",
    "Ulaanbaatar winter air quality — coal heating — HEPA and masks essential",
    "Steppe summers — short construction season — nomadic culture tourism",
    "Fibre in capital — provinces LTE — power stability OK in UB",
    "Cash society — card acceptance growing — tugrög for small purchases",
  ],
  visaOptions: [
    {
      name: "Tourist e-visa / visa-free entry",
      duration: "30–90 days depending on nationality",
      cost: "E-visa fee",
      requirements: "Passport validity — onward ticket — register stays if required",
    },
    {
      name: "Business / work permits",
      duration: "Employer-sponsored",
      cost: "Processing fees",
      requirements: "Mongolian entity — labour ministry",
    },
  ],
  cities: [
    {
      name: "Ulaanbaatar",
      vibe: "Capital — ger districts — traffic — growing cafés — coldest capital winters",
      avgRent: "$400–$1,000/month",
      coworkingSpaces: "Impact Hub, Regus, UB Tower cafés",
    },
    {
      name: "Erdenet",
      vibe: "Mining city — smaller expat footprint — colder than UB",
      avgRent: "$280–$650/month",
      coworkingSpaces: "Limited — cafés — LTE primary",
    },
    {
      name: "Darkhan",
      vibe: "Northern industrial hub — quieter — day trips to Amarbayasgalant",
      avgRent: "$250–$600/month",
      coworkingSpaces: "Minimal — verify fibre before lease",
    },
  ],
  costBreakdown: {
    rent: "$250–$1,000/month — UB vs secondary cities",
    food: "$200–$400/month — meat-heavy — imports pricey",
    transport: "$30–$70/month — bus + taxi",
    coworking: "$70–$150/month",
  },
  taxInfo:
    "Mongolian tax residency applies to long-term residents and local earners — short tourist stays rarely trigger — employment needs local payroll advice — treaty network limited.",
  communityTips:
    "Layer clothing — winter -30°C possible — spring dust storms — summer ger festivals — cash for taxi — learn Cyrillic basics for signs — respect elders — horses on steppe roads — plan VPN for redundancy.",
  bestFor: ["Adventure", "Value", "Space", "Culture"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Immigration e-visa — print approval — border crossing discipline — registration rules — extensions at immigration office.

Work permits — employer files — health checks — allow processing time before starting work.
`.trim(),

  bankingTips: `
Khan Bank, TDB — accounts need residence — tourists use cash MNT + foreign cards in UB hotels — ATM limits — Wise limited.

USD sometimes accepted in tourism — exchange at banks — carry small bills.
`.trim(),

  healthcareInfo: `
Intermed, SOS Medica — international clinics — insurance with evacuation — respiratory care winter — trauma in winter ice — travel insurance for steppe trips.

Emergency: 103 — language barrier — private ambulance if insured.
`.trim(),

  culturalTips: `
Ger etiquette — clockwise entry — accept tea — do not touch hats — horses sacred — photography ask permission — vodka toasts — respect nomadic hospitality — avoid loud criticism in groups.
`.trim(),

  realMonthlyCost: `
Example month — Ulaanbaatar, Sukhbaatar district:

Rent: $550
Utilities + heating: $140
Transport: $50
Food: $320
Coworking: $100
Insurance: $80
Winter gear amortised: $60
Misc: $90

Indicative total: ~$1,390 — secondary cities −25–35%.
`.trim(),

  expatCommunities: [
    "UB Expats Facebook",
    "Mongolia Digital Nomads",
  ],

  prosAndCons: {
    pros: [
      "Unique landscape",
      "Affordable outside UB",
      "Community warmth",
      "Low population density",
    ],
    cons: [
      "Harsh winters",
      "Air quality UB winter",
      "Healthcare thin",
      "Remote provinces logistics",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Ulaanbaatar",
      neighbourhood: "Sukhbaatar / Zaisan",
      description:
        "International schools — cafés — better air on hills — higher rent — heating bills.",
    },
  ],

  faqs: [
    {
      question: "Is winter remote work viable?",
      answer:
        "Yes — heat well, filter air, backup power — schedule client calls around stable power — test internet redundancy before committing long winter.",
    },
  ],

  updated: "April 2026",
  wordCount: 2100,
};
