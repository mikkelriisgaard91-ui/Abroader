import type { CountryGuide } from "../types";

export const poland: CountryGuide = {
  slug: "poland",
  country: "Poland",
  flag: "🇵🇱",
  continent: "Europe",
  capital: "Warsaw",
  currency: "PLN",
  language: "Polish",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Low",
  avgMonthlyCost: 1200,
  seoTitle: "Working Remotely in Poland 2026 — Kraków, Warsaw & Cost of Living",
  seoDescription:
    "Poland remote work guide: visa types, Kraków and Warsaw rents, fast internet, taxes and expat tips.",
  highlights: [
    "Very strong fibre and mobile speeds in cities",
    "Affordable cost base vs western EU",
    "Major IT outsourcing and product hubs",
    "Rich history and weekend city breaks",
    "Growing English in tech circles",
  ],
  visaOptions: [
    {
      name: "Type D national visa + temporary residence",
      duration: "Up to 3 years",
      cost: "PLN ~400+",
      requirements: "Work contract, business, study, or family — varies",
    },
    {
      name: "EU Blue Card Poland",
      duration: "Linked to job",
      cost: "State fees + legal",
      requirements: "Salary threshold, recognised education",
    },
  ],
  cities: [
    {
      name: "Warsaw",
      vibe: "Business capital, reconstructed old town",
      avgRent: "$800–$1,400/month",
      coworkingSpaces: "HubHub, Business Link, WeWork",
    },
    {
      name: "Kraków",
      vibe: "Historic core, student energy",
      avgRent: "$600–$1,100/month",
      coworkingSpaces: "Office&Cowork, HubHub",
    },
    {
      name: "Wrocław",
      vibe: "Islands, bridges, shared services hubs",
      avgRent: "$550–$1,000/month",
      coworkingSpaces: "City Office, Regus",
    },
  ],
  costBreakdown: {
    rent: "$550–$1,400/month",
    food: "$220–$380/month",
    transport: "$25–$35/month",
    coworking: "$90–$200/month",
  },
  taxInfo:
    "Polish tax scale and lump-sum options for small businesses; ZUS social contributions matter — hire an accountant.",
  communityTips:
    "Expat groups in each city, ski trips to Zakopane, learn Polish for long-term ease.",
  bestFor: ["Budget-friendly EU", "Fast internet", "Tech talent pool", "Weekend travel"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Non-EU nationals typically obtain a Type D national visa for work, business, study, or family reunification, then apply for temporary residence (karta pobytu) at provincial offices—queues can be long in Warsaw and Kraków. EU Blue Card stream suits highly qualified employment with salary floors and recognised degrees.

Employers obtain work permits where needed before your visa—shared service centres often sponsor.

EU citizens register stays over three months under EU law—PESEL number unlocks life.

After arrival, register address, obtain NIP tax number if working, join NFZ public health or private insurance bridge.

Renew residence cards before expiry—start 3–4 months early.

Remote-only foreign employment without Polish entity is complex—do not assume tourist stays allow work.

Document everything in Polish or sworn translations—Urząd officials appreciate order.
`.trim(),

  bankingTips: `
PKO BP, mBank, ING Poland, Millennium, and Santander compete. Multi-currency accounts available—you need PESEL and address for full service.

BLIK mobile payments dominate—set up early.

PLN volatility—Wise for USD/EUR clients.

Cash still in smaller shops; cards universal in cities.

Mortgage possible with stable Polish employment—remote foreign income harder to prove.

Cryptotax rules evolving—declare trading.
`.trim(),

  healthcareInfo: `
NFZ public system after employment registration—quality variable; private care in cities for speed (Lux Med, Medicover).

Emergency: 112 or hospital SOR. GP referrals for specialists—English better in private.

Dental: affordable vs US—private for speed.

Pharmacies everywhere—some drugs OTC cheaper than western EU.

Air pollution winter in south—asthma sufferers monitor AQI.
`.trim(),

  culturalTips: `
Polish hospitality is generous—bring small gifts, remove shoes indoors when expected. Catholic holidays shape calendars—respect Easter/Christmas travel crunch.

Direct communication—small talk less than UK. Queue culture strict for trams.

Learn Polish—English rising in tech but urząd and older landlords need Polish or translator.

Vodka and pierogi stereotypes partly true—explore regional cuisine (Żurek, bigos).

Tipping 10% in restaurants; round taxis.

Weekend trips: Gdańsk coast, Zakopane mountains, Wrocław dwarfs hunt.
`.trim(),

  realMonthlyCost: `
Example month in Kraków (single, Kazimierz / Podgórze):

Rent (one-bed): $750
Utilities + internet: $110
Transport monthly: $28
Groceries: $240
Eating out: $180
Coworking: $110
Private health / NFZ top-up: $45
Phone + software: $35
Entertainment: $75
Miscellaneous: $85

Indicative total: about $1,718.

Warsaw adds 20–40% on rent; Wrocław mid. PLN/USD rate affects USD feel.
`.trim(),

  expatCommunities: [
    "Internations Warsaw & Kraków",
    "Kraków Expats Facebook",
    "Warsaw Expats",
    "r/poland",
    "Meetup Poland — tech & hiking",
    "Open Kraków startup community",
    "Foreigners in Poland forum",
    "Nomad List Poland threads",
  ],

  prosAndCons: {
    pros: [
      "Very affordable vs western EU",
      "World-class internet speeds",
      "Large English-speaking tech workforce",
      "Rich history and travel options",
      "Growing startup ecosystem",
      "EU member—Schengen travel",
      "Vibrant city life in Kraków/Wrocław",
      "Good private healthcare prices",
      "Strong food scene revival",
      "Weekend budget flights from major airports",
    ],
    cons: [
      "Polish language hard",
      "Bureaucracy queues for residence cards",
      "Winter air quality issues in south",
      "Political climate debated—stay respectful",
      "Some rural areas conservative",
      "Rental market competitive—scams exist",
      "ZUS contributions heavy for self-employed",
      "Weather grey November–March",
      "Ukraine border region sensitivities—stay informed",
      "Public sector English limited",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Warsaw",
      neighbourhood: "Śródmieście",
      description: "Central, business, pricey—$900–$1,500 one-bed.",
    },
    {
      city: "Kraków",
      neighbourhood: "Kazimierz",
      description: "Jewish quarter, nightlife, tourists—$650–$1,100.",
    },
    {
      city: "Wrocław",
      neighbourhood: "Krzyki",
      description: "Residential, calmer, families—$550–$950.",
    },
  ],

  faqs: [
    {
      question: "Is Poland safe?",
      answer:
        "Generally yes in major cities—standard urban precautions; research neighbourhoods like anywhere.",
    },
    {
      question: "Can I use euros?",
      answer:
        "Złoty is legal tender—euros rarely accepted except tourist spots—use PLN.",
    },
    {
      question: "EU Blue Card vs standard work permit?",
      answer:
        "Blue Card suits degree holders meeting salary thresholds—faster mobility in EU after—verify with employer.",
    },
    {
      question: "How is English?",
      answer:
        "Strong under 40 in cities, especially tech—weak in bureaucracy—bring translator or Polish friend.",
    },
    {
      question: "Tax residency?",
      answer:
        "183+ days usually triggers—worldwide income reporting—accountant essential for freelancers.",
    },
    {
      question: "Best city for nomads?",
      answer:
        "Kraków and Wrocław balance cost and life quality; Warsaw for corporate careers.",
    },
  ],

  updated: "April 2026",
  wordCount: 1920,
};
