import type { CountryGuide } from "../types";

export const bulgaria: CountryGuide = {
  slug: "bulgaria",
  country: "Bulgaria",
  flag: "🇧🇬",
  continent: "Europe",
  capital: "Sofia",
  currency: "BGN",
  language: "Bulgarian",
  timezone: "EET (UTC+2)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Low",
  avgMonthlyCost: 950,
  seoTitle: "Working in Bulgaria: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Bulgaria or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Low personal and corporate tax rates vs much of EU",
    "Fast internet in Sofia and major cities",
    "EU member with affordable living",
    "Ski in Bansko, summer at Varna",
    "Growing coworking culture",
  ],
  visaOptions: [
    {
      name: "Type D visa + residence permit",
      duration: "Typically 1 year renewable",
      cost: "BGN fees + legal",
      requirements: "Employment, freelancing via local entity, or other qualifying grounds",
    },
    {
      name: "EU citizens — free movement",
      duration: "N/A",
      cost: "Registration only",
      requirements: "EU passport holders follow simplified registration",
    },
  ],
  cities: [
    {
      name: "Sofia",
      vibe: "Mount Vitosha backdrop, growing tech",
      avgRent: "$500–$900/month",
      coworkingSpaces: "Puzl, Betahaus, Campus X",
    },
    {
      name: "Plovdiv",
      vibe: "Culture capital, relaxed pace",
      avgRent: "$400–$700/month",
      coworkingSpaces: "Biz Labs, cat-and-mouse",
    },
    {
      name: "Varna",
      vibe: "Black Sea summer hub",
      avgRent: "$400–$750/month",
      coworkingSpaces: "Regus, local hubs",
    },
  ],
  costBreakdown: {
    rent: "$400–$900/month",
    food: "$200–$340/month",
    transport: "$20–$30/month",
    coworking: "$70–$160/month",
  },
  taxInfo:
    "Bulgaria offers a 10% flat personal income tax for tax residents; social contributions apply — plan with a local accountant.",
  communityTips:
    "Bansko Nomad Fest crowd, Sofia tech meetups, Cyrillic literacy helps with signs.",
  bestFor: ["Low tax", "Budget", "Mountains & sea", "EU travel"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Non-EU nationals typically secure a long-stay Type D visa for employment, self-employment via Bulgarian company, study, or family reunification, then apply for residence cards at migration offices—Sofia queues can be long.

EU citizens register under free movement after three months—LKC card processes vary.

Remote workers often incorporate OOD/EOOD or use employment with Bulgarian IT employers—pure foreign remote work may need tailored legal structure to comply.

After entry, obtain unified civil number (EGN equivalent via procedures), health insurance registration, bank account.

Schengen partial membership context evolving—verify travel rights for your passport in 2026.

Bansko nomad scene seasonal—winter ski, summer quieter.

Tax residency 183+ days triggers 10% PIT—plan with accountant if splitting years.
`.trim(),

  bankingTips: `
DSK, UniCredit Bulbank, Fibank—BGN pegged to EUR (fixed rate).

Contactless cards; cash in markets.

Wise for FX—declare if resident.

Cryptocurrency community active—tax reporting required.

Property purchase common in Bansko—lawyer essential for title checks.
`.trim(),

  healthcareInfo: `
NHIF public after contributions—quality mixed; private hospitals (Tokuda, Acibadem) in Sofia.

Emergency: 112. Air ambulances mountains.

Dental: medical tourism prices.

Black Sea jellyfish summers—watch flags.

Rose valley allergies June—plan meds.
`.trim(),

  culturalTips: `
Bulgarian nods mean no and head-shake can mean yes—confusing—ask twice.

Yogurt and rose oil national pride—try banitsa breakfast.

Orthodox holidays shape life—learn calendar.

Shake hands firm; hospitality heavy—pace eating.

Tipping 10% if not included.

Sofia gritty charm—avoid comparing negatively to Paris in first conversation.
`.trim(),

  realMonthlyCost: `
Example month in Sofia (Lozenets / Studentski):

Rent (one-bed): $620
Utilities + internet: $105
Metro + transport: $25
Groceries: $230
Eating out: $170
Coworking: $95
Health insurance / private: $50
Phone + software: $32
Vitosha hiking / leisure: $70
Miscellaneous: $80

Indicative total: about $1,477.

Plovdiv -15% rent; Varna summer +tourist pricing.
`.trim(),

  expatCommunities: [
    "Internations Sofia",
    "Bansko Nomad Fest community",
    "Sofia Digital Nomads",
    "r/bulgaria",
    "Meetup Bulgaria — skiing & sea",
    "Plovdiv Creative District",
    "Varna expats summer",
    "Bulgarian tech Discord servers",
  ],

  prosAndCons: {
    pros: [
      "10% flat income tax for residents",
      "Very affordable living",
      "Fast internet",
      "EU membership benefits",
      "Ski and sea within hours",
      "Growing tech and outsourcing",
      "Bansko nomad ecosystem",
      "Rose Festival Kazanlak unique",
      "Yoghurt diet win",
      "Weekend Greece/Turkey drives possible",
    ],
    cons: [
      "Cyrillic signs steep learning curve",
      "Bureaucracy slow",
      "Air quality winter Sofia",
      "Traffic and driving culture",
      "Schengen travel rules—verify updates",
      "Some corruption perception—use reputable lawyers",
      "Brain drain debates",
      "Summer coast crowds",
      "English weaker outside cities",
      "Earthquake risk occasional",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Sofia",
      neighbourhood: "Lozenets",
      description: "Green, embassies, calm—$550–$900.",
    },
    {
      city: "Plovdiv",
      neighbourhood: "Kapana",
      description: "Creative quarter, bars—$400–$700.",
    },
    {
      city: "Varna",
      neighbourhood: "Centre",
      description: "Sea proximity, summer premiums—$450–$800.",
    },
  ],

  faqs: [
    {
      question: "Is Bulgaria cheap?",
      answer:
        "Yes for rent and food vs western EU—salaries lower if working locally.",
    },
    {
      question: "Euro adoption?",
      answer:
        "BGN pegged; euro entry targeted—watch official ECB/BNB timelines.",
    },
    {
      question: "Safety?",
      answer:
        "Generally yes—Sofia centre nightlife standard precautions.",
    },
    {
      question: "Best nomad spot?",
      answer:
        "Bansko for ski + community; Sofia for jobs; Varna for sea summer.",
    },
    {
      question: "Tax residency?",
      answer:
        "183+ days usually—10% flat attractive—professional advice before structuring.",
    },
    {
      question: "Cyrillic required?",
      answer:
        "Helps daily life—Google Translate camera mode lifesaver.",
    },
  ],

  updated: "April 2026",
  wordCount: 1760,
};
