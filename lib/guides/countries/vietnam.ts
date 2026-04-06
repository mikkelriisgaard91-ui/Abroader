import type { CountryGuide } from "../types";

export const vietnam: CountryGuide = {
  slug: "vietnam",
  country: "Vietnam",
  flag: "🇻🇳",
  continent: "Asia",
  capital: "Hanoi",
  currency: "VND",
  language: "Vietnamese; English growing in cities",
  timezone: "ICT (UTC+7)",
  visaDifficulty: "Medium",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1050,
  seoTitle: "Working in Vietnam: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Vietnam for remote workers: Ho Chi Minh City, Hanoi, Da Nang — e-visas, extensions, cost of living, banking friction, and healthcare for 2026.",
  highlights: [
    "E-visa and visa extension cycles — immigration police checks — rules evolve — official portals only",
    "HCMC District 1–3 vs Thao Dien expat bubbles — motorbike culture — heat",
    "Hanoi Old Quarter energy — winters cooler — air quality winter",
    "Da Nang beach city — typhoon season — growing nomad scene",
    "Cash society — QR growing — gold shop FX legacy — Wise cards sometimes declined",
  ],
  visaOptions: [
    {
      name: "E-visa (tourism)",
      duration: "Often 30–90 days single entry — verify nationality list",
      cost: "Government e-visa fee",
      requirements: "Passport scan — entry/exit dates — follow stated ports",
    },
    {
      name: "Visa extensions / visa runs",
      duration: "Agency-assisted extensions — policy cycles — border runs costly",
      cost: "Extension stamps + agent fees",
      requirements: "Sponsor letters in some cases — hotel registration",
    },
    {
      name: "Work permits (local entity)",
      duration: "Tied to employer — TRC residence card",
      cost: "Employer-sponsored",
      requirements: "Labour contract — health checks — police registration",
    },
  ],
  cities: [
    {
      name: "Ho Chi Minh City",
      vibe: "Motorbike flow — District 1 skyline — Thao Dien families — startup scene",
      avgRent: "$400–$1,200/month",
      coworkingSpaces: "The Hive, CirCO, Dreamplex, café fibre in D1",
    },
    {
      name: "Hanoi",
      vibe: "Lake walks — Old Quarter — government pace — winters misty",
      avgRent: "$350–$1,000/month",
      coworkingSpaces: "Toong, UP, Tay Ho hubs",
    },
    {
      name: "Da Nang",
      vibe: "Beach — Marble Mountains — smaller — typhoon windows",
      avgRent: "$350–$900/month",
      coworkingSpaces: "Enouvo, beachside cafés — verify backup power",
    },
  ],
  costBreakdown: {
    rent: "$350–$1,100/month — HCMC premium",
    food: "$180–$380/month — street vs imports",
    transport: "$30–$80/month — Grab Bike + occasional taxi",
    coworking: "$70–$160/month",
  },
  taxInfo:
    "Vietnamese tax residency tests combine days and economic ties — remote workers on short tourist stays rarely register — if you obtain TRC via employment, worldwide income rules may apply — consult a Vietnamese CPA — treaty relief varies.",
  communityTips:
    "Grab maps accurate — Google Maps good — Zalo ubiquitous — learn numbers for addresses — cash for small vendors — negotiate taxis with app only — helmet law — police fines — VPN for some services — check ToS.",
  bestFor: ["Value", "Food", "Energy", "Regional travel"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Immigration Department — extensions — copies — photos — sponsor hotels — overstays heavily fined — blacklist risk — pay before airport exit.

E-visa — print multiple copies — entry date discipline — wrong port can cause denial — follow stamped duration.

Work permit — health check — police clearance — labour contract notarisation — allow weeks.
`.trim(),

  bankingTips: `
Vietcombank, Techcombank — accounts need TRC and proof — tourists rely on cash + foreign cards — ATM limits high — fees per withdrawal — batch withdrawals.

MoMo, ZaloPay — local ID — Wise card acceptance spotty — carry cash backup — notify bank to avoid blocks.

USD bring — jeweller legacy FX — rates negotiable — count notes.
`.trim(),

  healthcareInfo: `
FV Hospital HCMC — Vinmec chain — insurance with evacuation — motorbike trauma — dengue — air quality Hanoi winter — masks.

Pharmacies abundant — verify brand authenticity — travel diarrhoea — bottled water discipline.

Emergency: 115 — private ambulance if insured — international clinics faster English.
`.trim(),

  culturalTips: `
Shoes off homes — chopstick etiquette — avoid pointing feet — elder respect — Tet holiday closures — plan cash — quiet public voice — dress modest temples — negotiate smiles — patience in queues.
`.trim(),

  realMonthlyCost: `
Example month — Da Nang, two-bed local tower:

Rent: $500
Utilities + fibre: $85
Grab + scooter rental: $90
Food + markets: $260
Coworking: $100
Insurance: $65
Weekend Hoi An: $80
Misc: $90

Indicative total: ~$1,270 — HCMC Thao Dien +25–40% rent.
`.trim(),

  expatCommunities: [
    "Ho Chi Minh City Expats",
    "Hanoi Massive",
    "Da Nang Hoi An Digital Nomads",
  ],

  prosAndCons: {
    pros: [
      "Low cost of living",
      "Food and energy",
      "Coast and mountain trips",
      "Growing fibre",
    ],
    cons: [
      "Visa friction",
      "Traffic and noise",
      "Air quality pockets",
      "Banking for non-residents",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Ho Chi Minh City",
      neighbourhood: "Thao Dien (District 2)",
      description:
        "Schools — villas — expat retail — flooding pockets — bridge traffic — fibre building checks.",
    },
    {
      city: "Da Nang",
      neighbourhood: "My An / An Thuong",
      description:
        "Beach access — café strip — typhoon shutters — generator questions for work calls.",
    },
  ],

  faqs: [
    {
      question: "HCMC or Hanoi?",
      answer:
        "HCMC for warmth and business pace — Hanoi for culture and seasons — both have nomad scenes — choose climate and air tolerance.",
    },
    {
      question: "Can I rely on Wise?",
      answer:
        "Carry VND cash — card acceptance improving — test your card week one — local account only with TRC — plan payroll accordingly.",
    },
  ],

  updated: "April 2026",
  wordCount: 2350,
};
