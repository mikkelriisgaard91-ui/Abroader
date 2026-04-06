import type { CountryGuide } from "../types";

export const haiti: CountryGuide = {
  slug: "haiti",
  country: "Haiti",
  flag: "🇭🇹",
  continent: "Caribbean",
  capital: "Port-au-Prince",
  currency: "HTG (USD context in formal economy)",
  language: "Haitian Creole; French in official contexts",
  timezone: "EST (UTC−5)",
  visaDifficulty: "Medium",
  internetSpeed: "Poor",
  costOfLiving: "Low",
  avgMonthlyCost: 800,
  seoTitle: "Working in Haiti: Remote Worker Context Guide (2026)",
  seoDescription:
    "Context for Haiti: security, infrastructure, NGO presence, and why most remote workers only visit short-term with organisations and full risk planning.",
  highlights: [
    "Complex security environment — kidnapping, protests, roadblocks — consult current travel advisories",
    "Infrastructure fragile — power, water, internet — backup plans essential",
    "Rich culture — art, music, history — resilience and dignity",
    "French/Creole bilingual official framing — Creole dominates daily life",
    "Not a default nomad destination — NGO, development, and diaspora ties most common",
  ],
  visaOptions: [
    {
      name: "Tourist / business visa",
      duration: "Varies — check Haitian embassy",
      cost: "Fees vary",
      requirements: "Itinerary — sponsor letters sometimes",
    },
    {
      name: "Residence / work",
      duration: "Case-specific — rare for casual nomads",
      cost: "Legal fees",
      requirements: "Employer or organisation sponsorship",
    },
  ],
  cities: [
    {
      name: "Port-au-Prince",
      vibe: "Capital — congestion, hills, NGO economy — security paramount",
      avgRent: "$300–$900/month",
      coworkingSpaces: "Rare — secured compounds",
    },
    {
      name: "Cap-Haïtien",
      vibe: "North — historic citadel access — different security profile than PAP",
      avgRent: "$250–$700/month",
      coworkingSpaces: "Minimal",
    },
    {
      name: "Jacmel",
      vibe: "South coast arts — carnival masks — tourism micro",
      avgRent: "$200–$600/month",
      coworkingSpaces: "Rare",
    },
  ],
  costBreakdown: {
    rent: "$200–$900/month",
    food: "$150–$320/month",
    transport: "$40–$120/month — private drivers often",
    coworking: "$40–$90/month",
  },
  taxInfo:
    "Tax residency rarely relevant for short NGO or visitor stays — long-term structures require local counsel familiar with instability.",
  communityTips:
    "Listen to Haitian colleagues — avoid poverty tourism framing. Security protocols — compound curfews — vary by organisation. Cash logistics — banking constraints — plan with trusted locals.",
  bestFor: ["NGO / mission roles", "Diaspora ties", "Specialist projects"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Coordinate with sponsoring organisation — visa and security briefings — do not improvise travel without local network.

Medical evacuation insurance — essential — trauma care limited.

Cholera and other health risks — follow WHO and embassy advisories — vaccinations current.
`.trim(),

  bankingTips: `
Cash economy — card acceptance limited — informal FX — use official channels when possible — US persons face extra compliance.

Wire transfers slow — plan buffers — notify home bank.
`.trim(),

  healthcareInfo: `
MSPP facilities — limited — private clinics for those who can pay — medevac for serious cases — insurance mandatory.

Emergency: 116 — verify — response constrained — private transport networks.

Mental health support thin — organisational EAPs critical for long-term staff.
`.trim(),

  culturalTips: `
Dignity and respect — avoid sensational photography. Vodou is sacred — not a costume theme. Haitian Creole learning signals respect — even basic phrases help.
`.trim(),

  realMonthlyCost: `
Highly variable — NGO packages often include housing and security — do not use generic nomad budgets — treat as organisation-dependent.
`.trim(),

  expatCommunities: ["NGO coordination forums — not casual social boards"],

  prosAndCons: {
    pros: ["Culture", "Community resilience", "Strategic location in region"],
    cons: ["Security", "Infrastructure", "Not remote-work optimised"],
  },

  bestNeighbourhoods: [
    {
      city: "Port-au-Prince",
      neighbourhood: "Pétion-Ville (secured compounds)",
      description: "Hills — some expat housing — security drivers non-negotiable — verify current advisories.",
    },
  ],

  faqs: [
    {
      question: "Is Haiti safe for nomads?",
      answer:
        "Most governments advise against non-essential travel — if you have a mission-critical reason, follow institutional security — not casual tourism.",
    },
  ],

  updated: "April 2026",
  wordCount: 1600,
};
