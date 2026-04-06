import type { CountryGuide } from "../types";

export const czechia: CountryGuide = {
  slug: "czechia",
  country: "Czechia",
  flag: "🇨🇿",
  continent: "Europe",
  capital: "Prague",
  currency: "CZK",
  language: "Czech",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 1400,
  seoTitle: "Working in the Czech Republic: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in the Czech Republic or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Digital nomad visa for qualifying remote workers",
    "Prague: affordable vs western Europe with strong tech talent",
    "Excellent beer culture and central Europe travel",
    "Fast internet in cities",
    "Growing English in services",
  ],
  visaOptions: [
    {
      name: "Digital Nomad Visa (long-term)",
      duration: "1 year",
      cost: "CZK 2,500+",
      requirements: "Income threshold, accommodation, clean record — confirm with MOI",
    },
    {
      name: "Employee card (local job)",
      duration: "Linked to employer",
      cost: "CZK 2,500+",
      requirements: "Labour office approval, contract",
    },
  ],
  cities: [
    {
      name: "Prague",
      vibe: "Castle views, tourist core, strong dev community",
      avgRent: "$900–$1,600/month",
      coworkingSpaces: "Locus, Impact Hub, WeWork",
    },
    {
      name: "Brno",
      vibe: "Student city, startups, cheaper",
      avgRent: "$600–$1,000/month",
      coworkingSpaces: "Coffice, Impact Hub",
    },
    {
      name: "České Budějovice",
      vibe: "Smaller, relaxed south Bohemia",
      avgRent: "$500–$800/month",
      coworkingSpaces: "Local hubs",
    },
  ],
  costBreakdown: {
    rent: "$500–$1,600/month",
    food: "$250–$420/month",
    transport: "$25–$35/month (PID pass)",
    coworking: "$100–$220/month",
  },
  taxInfo:
    "Tax residency if you stay 183+ days; flat tax options exist for certain small entrepreneurs — speak to a Czech tax adviser.",
  communityTips:
    "Meetup Prague Tech, expat Facebook groups, learn Czech for rental listings.",
  bestFor: ["Central Europe base", "Nightlife & culture", "Value for money", "Remote tech"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Czechia introduced a long-stay visa for remote workers meeting minimum income, accommodation, health insurance, and criminal record requirements. Apply at Czech embassies with employment contracts or client proof from outside Czechia, bank statements, lease, and insurance—confirm current CZK income floors with the Ministry of Interior.

Employee cards suit those hired locally—employer obtains labour office consent first.

EU citizens register after three months if staying—simple path.

After entry, register foreign police where required, obtain rodne cislo–style tax ID through Finanční správa, trade licence (živnost) if self-employed.

Renew digital nomad pathway per published rules—may require exit/re-entry depending on year.

Rejections: insufficient income, vague remote proof, or insurance gaps—use Czech immigration lawyer for first filing.

Schengen travel with valid permits—carry documents at borders.
`.trim(),

  bankingTips: `
Česká spořitelna, ČSOB, Moneta, and Air Bank compete. You need passport, proof of address, and residence permit—some banks English-friendly (Air Bank).

CZK not euro—Wise helps FX. Revolut widely used by expats.

Cash still used in smaller pubs; cards dominant in Prague.

Landlords often want Czech account for rent—open early.

Trade licence holders: separate business account simplifies VAT reporting if applicable.
`.trim(),

  healthcareInfo: `
Public insurance (VZP or employer-chosen funds) covers employees once registered—quality good in Prague and Brno.

Emergency: 155 medical, 112 general. Private clinics (Canadian Medical) for English speed.

Dental: mix public and private—budget for major work.

Prescriptions from EU doctors often accepted—bring documentation.

Beer is cheap; healthcare still serious—don't skip insurance compliance.
`.trim(),

  culturalTips: `
Czech humour is dry and self-deprecating—embrace it. Beer is culture—learn to clink and say "Na zdraví".

Queue politely; public transport quiet. Prague centre touristy—locals live in districts 6–10.

Learn Czech for landlords and úřad visits—English works in tech bubbles only.

Weekend trips: Český Krumlov, Karlovy Vary, Dresden. Christmas markets are national sport.

Tipping 10% in restaurants if happy; round up in pubs.
`.trim(),

  realMonthlyCost: `
Example month in Prague (single, Vinohrady / Žižkov style):

Rent (one-bed): $1,050
Utilities + internet: $120
PID transit pass: $30
Groceries: $280
Restaurants / beer outings: $220
Coworking: $140
Health insurance / co-pays: $60
Phone + software: $38
Entertainment: $90
Miscellaneous: $95

Indicative total: about $2,123.

Brno often 25–35% lower rent; CZK/USD moves totals.
`.trim(),

  expatCommunities: [
    "Internations Prague & Brno",
    "Expats.cz forums",
    "r/czech",
    "Meetup Prague — tech & startups",
    "Prague Digital Nomads",
    "Brno Expat Centre",
    "Foreigners.cz job board community",
    "Czechitas tech education network",
  ],

  prosAndCons: {
    pros: [
      "Strong value vs western EU capitals",
      "Digital nomad visa pathway",
      "Excellent internet and dev community",
      "Central location for weekend travel",
      "Beer culture and architecture",
      "Growing English in Prague services",
      "Schengen base",
      "Relatively safe cities",
      "Rich culture and music scene",
      "Startup events and Game Developers Session Brno",
    ],
    cons: [
      "Czech language barrier outside Prague",
      "Bureaucracy and document obsession",
      "Tourist crowds in Prague centre",
      "Air quality winter inversions",
      "Rental scams—verify landlords",
      "Public sector low English",
      "Currency not euro—FX exposure",
      "Housing competition in Prague",
      "Some xenophobia pockets—rare but real",
      "Seasonal overtourism",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Prague",
      neighbourhood: "Vinohrady",
      description: "Leafy, expat-friendly, good transit—$950–$1,500 one-bed.",
    },
    {
      city: "Prague",
      neighbourhood: "Karlín",
      description: "Tech, restaurants, flood history resolved—$1,000–$1,700.",
    },
    {
      city: "Brno",
      neighbourhood: "Střed",
      description: "Centre, students, affordable—$600–$1,000.",
    },
  ],

  faqs: [
    {
      question: "Is Czechia cheap?",
      answer:
        "Versus London or Paris, yes for rent and dining—salaries also lower if working locally.",
    },
    {
      question: "Do I need Czech?",
      answer:
        "For daily life and úřad, yes eventually—English common in tech and central Prague services.",
    },
    {
      question: "Euro incoming?",
      answer:
        "Not adopted—use CZK accounts for local life; Wise converts cleanly.",
    },
    {
      question: "Is Prague safe?",
      answer:
        "Generally yes—pickpockets in tourist zones and trams—standard awareness.",
    },
    {
      question: "Can I work for a foreign company?",
      answer:
        "Digital nomad visa targets remote foreign employers—verify income rules; local employment needs employee card.",
    },
    {
      question: "How is winter?",
      answer:
        "Cold, grey—pack layers; Christmas markets compensate.",
    },
  ],

  updated: "April 2026",
  wordCount: 1880,
};
