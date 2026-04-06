import type { CountryGuide } from "../types";

export const ireland: CountryGuide = {
  slug: "ireland",
  country: "Ireland",
  flag: "🇮🇪",
  continent: "Europe",
  capital: "Dublin",
  currency: "EUR",
  language: "English / Irish",
  timezone: "GMT / IST (UTC±0/+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2700,
  seoTitle: "Working Remotely in Ireland 2026 — Critical Skills & Dublin Costs",
  seoDescription:
    "Ireland remote work: critical skills employment permit context, Dublin and Cork rents, tax and EU gateway benefits.",
  highlights: [
    "English-speaking EU hub for US HQs",
    "Strong tech and pharma clusters",
    "Critical Skills route for shortage roles",
    "Coastal cliffs and weekend road trips",
    "Friendly pub culture networking",
  ],
  visaOptions: [
    {
      name: "Critical Skills Employment Permit",
      duration: "2 years then renewal",
      cost: "€1,000+",
      requirements: "Job on critical list, salary floors",
    },
    {
      name: "Stamp 1G / graduate routes",
      duration: "Varies",
      cost: "Registration fees",
      requirements: "Irish education or specific schemes",
    },
  ],
  cities: [
    {
      name: "Dublin",
      vibe: "EU HQs, housing crunch",
      avgRent: "$1,600–$2,800/month",
      coworkingSpaces: "Dogpatch Labs, WeWork, Iconic",
    },
    {
      name: "Cork",
      vibe: "Rebel county, pharma",
      avgRent: "$1,200–$2,000/month",
      coworkingSpaces: "Republic of Work, NRG",
    },
    {
      name: "Galway",
      vibe: "Arts, Atlantic coast",
      avgRent: "$1,100–$1,900/month",
      coworkingSpaces: "PorterShed",
    },
  ],
  costBreakdown: {
    rent: "$1,100–$2,800/month",
    food: "$380–$600/month",
    transport: "$140–$160/month (Dublin Bus/Luas)",
    coworking: "$220–$400/month",
  },
  taxInfo:
    "PAYE system with USC and PRSI; rent credit schemes evolve — Revenue.ie + accountant for cross-border cases.",
  communityTips:
    "Housing groups on Daft.ie alerts, GAA matches for local immersion, explore Wild Atlantic Way weekends.",
  bestFor: ["English EU base", "Tech HQs", "Coastal drives", "Pub culture"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Non-EEA nationals usually need an employer-sponsored employment permit before travelling to work—Critical Skills Employment Permit targets roles on the ineligible occupations list inverse (i.e. eligible skilled roles) with salary floors; General Employment Permit covers other cases with labour market needs tests.

After permit approval, apply for entry visa if required for your nationality, travel, register with immigration (GNIB/IRP) for residence permission, and obtain PPS number for tax/social.

Stamp 1G suits graduate and post-study work paths—different rules.

Remote work for a non-Irish employer without Irish entity is generally not covered by standard employment permits—you must have a qualifying Irish employer or legal pathway.

Renew IRP before expiry; keep employer details updated. Rejections involve salary floors, occupation not eligible, or employer not trading—use Immigration Service Provider checklists.

EU/EEA citizens need only register after arrival under free movement rules.
`.trim(),

  bankingTips: `
AIB, Bank of Ireland, Ulster Bank, and Revolut Ireland operate widely. Opening accounts needs PPS, proof of address (utility bill or bank letter), and ID—new arrivals sometimes struggle without proof-of-address loops—ask employer for letter.

SEPA EUR dominates; contactless everywhere. Wise for USD/GBP clients—declare to Revenue if tax resident.

Cash rare in cities; ATMs fee-free within network.

Mortgage approval requires stable Irish employment history—remote foreign pay slips harder.

US FATCA reporting applies—choose banks familiar with US citizens if relevant.
`.trim(),

  healthcareInfo: `
Public healthcare via HSE—GP visits often €50–€60 without medical card; hospital care via referrals. Many workers use private insurance (VHI, Laya, Irish Life) for faster access—employer schemes common.

Emergency: 112 or 999. A&E busy—consider minor injury clinics.

Pharmacy schemes (DRP) reduce drug costs for long-term meds.

Mental health waiting lists exist—private therapy common in cities.

Dental mostly private—budget extras.

Prescription drugs cheaper than US—bring EU prescriptions when possible.
`.trim(),

  culturalTips: `
Irish conversation starts with weather—lean in. Pub culture is networking—buy rounds carefully. Craic matters—humour defuses conflict.

Work culture mixes American openness with European labour rights—meetings start friendly but HR processes formal.

Housing crisis is emotional—be respectful renting. Landlords may ask references from Irish contacts—prepare employer letters.

Rain is constant—embrace layers and weekend trips to Wicklow, Clare, Donegal. GAA sport is tribal—pick a county lightly.

Tipping 10–15% in restaurants if great service; rounds at bars build trust.
`.trim(),

  realMonthlyCost: `
Example month for a single tech worker in Dublin (shared or small one-bed outside prime):

Rent (one-bed / decent room): $1,950
Utilities + broadband: $140
Leap card / transport: $150
Groceries: $420
Pub / dining out: $280
Coworking: $240
Health insurance (private): $110
Phone + software: $48
Gym: $65
Miscellaneous: $150

Indicative total: about $3,553.

Cork and Galway often 20–35% lower rent; car adds insurance and parking costs in Dublin.
`.trim(),

  expatCommunities: [
    "Internations Dublin & Cork",
    "Irish Americans Facebook",
    "Dublin Digital Nomads Meetup",
    "r/Ireland (read rules)",
    "Meetup Ireland — tech & outdoors",
    "Galway Expats",
    "Cork International Community",
    "TechIreland events",
  ],

  prosAndCons: {
    pros: [
      "English-speaking EU member—ideal for US HQs",
      "Strong tech, pharma, and finance clusters",
      "Young educated workforce",
      "Wild Atlantic Way and nature access",
      "Friendly culture and pub networking",
      "Critical Skills path for shortage roles",
      "Flight hub to US and EU",
      "Growing startup scene",
      "Common law and business familiarity for Anglo firms",
      "EU passport pathway after long legal residence (subject to rules)",
    ],
    cons: [
      "Dublin rent crisis and competition",
      "Weather grey and wet",
      "Healthcare queues without private insurance",
      "Transport congestion in Dublin",
      "Non-EEA permits tied to Irish employers",
      "High cost of living vs income tax take-home",
      "Rural broadband variable",
      "Car insurance expensive",
      "Housing scams—never wire blindly",
      "Limited summer heat",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Dublin",
      neighbourhood: "Rathmines / Ranelagh",
      description: "Village feel, food scene, Luas—popular; $1,700–$2,600 one-bed.",
    },
    {
      city: "Dublin",
      neighbourhood: "Docklands",
      description: "Tech HQs, modern, windy—$1,800–$2,800.",
    },
    {
      city: "Cork",
      neighbourhood: "Victorian Quarter",
      description: "Arts, cafes, walkable—$1,200–$1,900.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely for a US company from Ireland?",
      answer:
        "You still need immigration permission matching your stay—typically employment with an Irish entity or a valid independent route. Tourist visas do not allow work.",
    },
    {
      question: "Is Dublin the only option for tech?",
      answer:
        "No—Cork, Galway, and Limerick host multinationals with somewhat lower rents but smaller markets.",
    },
    {
      question: "How do taxes work?",
      answer:
        "PAYE with USC and PRSI—use Revenue.ie myAccount; rent credits and credits change with budgets—verify annually.",
    },
    {
      question: "Is healthcare free?",
      answer:
        "Public system exists but GP fees and waits apply—many buy private insurance for speed.",
    },
    {
      question: "How to find housing?",
      answer:
        "Daft.ie alerts, Facebook groups, employer relocation help—act fast, bring references, avoid scams.",
    },
    {
      question: "Driving licence?",
      answer:
        "Many countries swap within deadline—check NDLS rules; drive on left.",
    },
  ],

  updated: "April 2026",
  wordCount: 2040,
};
