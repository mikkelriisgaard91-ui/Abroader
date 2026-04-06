import type { CountryGuide } from "../types";

export const romania: CountryGuide = {
  slug: "romania",
  country: "Romania",
  flag: "🇷🇴",
  continent: "Europe",
  capital: "Bucharest",
  currency: "RON",
  language: "Romanian",
  timezone: "EET (UTC+2)",
  visaDifficulty: "Easy",
  internetSpeed: "Excellent",
  costOfLiving: "Low",
  avgMonthlyCost: 1000,
  seoTitle: "Working Remotely in Romania 2026 — Digital Nomad Visa & Bucharest",
  seoDescription:
    "Romania for remote workers: digital nomad visa, Bucharest and Cluj costs, mountains, taxes and tips.",
  highlights: [
    "Digital nomad visa for qualifying applicants",
    "Among Europe's fastest internet",
    "Low cost of living in major cities",
    "Carpathian mountains and Black Sea trips",
    "Strong IT talent pool",
  ],
  visaOptions: [
    {
      name: "Digital Nomad Visa",
      duration: "1 year",
      cost: "€120+",
      requirements: "Remote income threshold, tax compliance abroad, insurance",
    },
    {
      name: "Standard residence permits",
      duration: "Varies",
      cost: "RON fees + legal",
      requirements: "Employment, study, family — standard EU national visa process",
    },
  ],
  cities: [
    {
      name: "Bucharest",
      vibe: "Wide boulevards, buzzing nightlife",
      avgRent: "$550–$1,000/month",
      coworkingSpaces: "Impact Hub, TechHub, Mindspace",
    },
    {
      name: "Cluj-Napoca",
      vibe: "Transylvanian tech hub",
      avgRent: "$450–$850/month",
      coworkingSpaces: "Cluj Cowork, Spike Hub",
    },
    {
      name: "Brașov",
      vibe: "Mountain gateway, tourism",
      avgRent: "$400–$750/month",
      coworkingSpaces: "Local cowork",
    },
  ],
  costBreakdown: {
    rent: "$400–$1,000/month",
    food: "$200–$350/month",
    transport: "$20–$30/month",
    coworking: "$80–$180/month",
  },
  taxInfo:
    "Micro-company and other regimes exist; digital nomad visa tax treatment should be confirmed with a Romanian accountant before moving.",
  communityTips:
    "Facebook expat groups, mountain hikes in Brașov, learn Romanian for long-term rentals.",
  bestFor: ["Ultra-fast internet", "Budget", "Nature access", "EU remote base"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Romania's digital nomad visa targets third-country nationals who work remotely using IT for companies outside Romania, meet minimum income thresholds (verify current EUR/RON amounts with Romanian consulates), hold insurance, and prove accommodation. Apply with employment contracts, bank statements, criminal record, and tax compliance documentation from home country.

EU citizens use free movement—register after three months if staying.

After entry, obtain CNP personal number, register address, open bank account—queues at immigration offices vary.

Standard employment routes use work permits and long-stay visas—IT sector sponsors common.

Renew digital nomad status per published rules—law has evolved; lawyer recommended.

Schengen accession timeline debated—verify border rules for your nationality before assuming EU-wide travel from Romania alone.

Bear country in Carpathians—hiking prep matters.
`.trim(),

  bankingTips: `
BCR, BRD, ING Romania, Revolut—RON accounts essential. Card contactless universal.

Wise for USD/EUR—declare if tax resident.

Cash in villages; cities card-first.

Landlords prefer local transfers—fees low.

Micro-company (SRL) popular for contractors—accountant mandatory.
`.trim(),

  healthcareInfo: `
Public CNAS after employment—quality variable; private chains (Regina Maria, MedLife) for English speed.

Emergency: 112. Private hospitals in Bucharest and Cluj.

Dental: affordable vs Western Europe.

Air pollution winter Bucharest—monitor AQI.

Black Sea summer—healthcare same as cities.
`.trim(),

  culturalTips: `
Romanian Latin roots—language surprises Romance speakers. Hospitality generous—expect food.

Dracula tourism everywhere—locals eye-roll politely. Learn basic Romanian—English tech-strong.

Mămăligă and sarmale—try home-cooked if invited.

Tipping 10% restaurants; taxis round up.

Politics sensitive—listen respectfully. Orthodox Easter huge—travel plan around it.
`.trim(),

  realMonthlyCost: `
Example month in Cluj (single, Zorilor / Mănăștur):

Rent (one-bed): $520
Utilities + fibre: $95
Transport: $22
Groceries: $210
Eating out: $160
Coworking: $95
Private health / co-pays: $45
Phone + software: $30
Weekend Brașov trip amortised: $70
Miscellaneous: $75

Indicative total: about $1,322.

Bucharest +15–25% rent; Brașov tourist summer premiums.
`.trim(),

  expatCommunities: [
    "Internations Bucharest & Cluj",
    "Romania Expats Facebook",
    "r/Romania",
    "Meetup Romania — tech & hiking",
    "Cluj IT cluster events",
    "Digital nomads Transylvania",
    "Bucharest Tech Week",
    "Carpathian hiking clubs",
  ],

  prosAndCons: {
    pros: [
      "World-class fibre speeds in cities",
      "Very low cost vs western EU",
      "Digital nomad visa pathway",
      "EU member—travel improving",
      "Strong IT talent and outsourcing",
      "Mountains, castles, Black Sea",
      "Vibrant Bucharest nightlife",
      "Cluj quality of life",
      "Friendly hospitality",
      "Growing startup scene",
    ],
    cons: [
      "Bureaucracy and corruption perception",
      "Romanian essential long-term",
      "Winter air quality cities",
      "Schengen not automatic for all travel contexts—verify",
      "Driving chaotic—defensive style",
      "Some rural poverty contrasts",
      "Healthcare queues public system",
      "Earthquake awareness Bucharest",
      "Stray dogs pockets—care jogging",
      "Political discourse heated—stay neutral",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Bucharest",
      neighbourhood: "Dorobanți",
      description: "Upscale, embassies, green—$650–$1,000.",
    },
    {
      city: "Cluj-Napoca",
      neighbourhood: "Centru",
      description: "Walkable, students, nightlife—$450–$850.",
    },
    {
      city: "Brașov",
      neighbourhood: "Schei",
      description: "Historic, mountain views—$400–$750.",
    },
  ],

  faqs: [
    {
      question: "Is Romania in Schengen?",
      answer:
        "As of 2026 verify current status—EU membership exists; Schengen entry dates have been subject to political decisions—check official EU sources before travel planning.",
    },
    {
      question: "Bucharest or Cluj?",
      answer:
        "Bucharest for scale and flights; Cluj for tech community and calmer pace.",
    },
    {
      question: "Is it safe?",
      answer:
        "Generally yes in cities—pickpockets and traffic bigger risks than violent crime—standard awareness.",
    },
    {
      question: "Tax on nomad visa?",
      answer:
        "Depends on treaty and days—confirm with Romanian accountant before assuming exemption.",
    },
    {
      question: "English?",
      answer:
        "Strong in IT; weak in public administration—learn Romanian for life admin.",
    },
    {
      question: "Dracula tours worth it?",
      answer:
        "Bran Castle is crowded—Transylvania has deeper hikes and villages if you rent a car.",
    },
  ],

  updated: "April 2026",
  wordCount: 1780,
};
