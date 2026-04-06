import type { CountryGuide } from "../types";

export const hungary: CountryGuide = {
  slug: "hungary",
  country: "Hungary",
  flag: "🇭🇺",
  continent: "Europe",
  capital: "Budapest",
  currency: "HUF",
  language: "Hungarian",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Low",
  avgMonthlyCost: 1150,
  seoTitle: "Working Remotely in Hungary 2026 — White Card & Budapest",
  seoDescription:
    "Hungary remote work: White Card digital nomad visa, Budapest costs, baths, taxes and coworking.",
  highlights: [
    "White Card for non-EU remote workers",
    "Budapest: spas, ruin bars, Danube lifestyle",
    "Strong internet and affordable living",
    "Central Europe weekend trips",
    "Growing startup events",
  ],
  visaOptions: [
    {
      name: "White Card (Hungary digital nomad)",
      duration: "1 year renewable",
      cost: "€110+",
      requirements: "Remote income for non-Hungarian employer, accommodation, insurance",
    },
    {
      name: "Guest investor / other national visas",
      duration: "Varies",
      cost: "Case-dependent",
      requirements: "Consult Hungarian immigration for investment or family routes",
    },
  ],
  cities: [
    {
      name: "Budapest",
      vibe: "Two sides of the river, grand architecture",
      avgRent: "$650–$1,200/month",
      coworkingSpaces: "Kaptar, Loffice, Impact Hub",
    },
    {
      name: "Debrecen",
      vibe: "Eastern hub, quieter",
      avgRent: "$400–$700/month",
      coworkingSpaces: "Local offices",
    },
    {
      name: "Szeged",
      vibe: "University town, sunny south",
      avgRent: "$380–$650/month",
      coworkingSpaces: "Smaller hubs",
    },
  ],
  costBreakdown: {
    rent: "$400–$1,200/month",
    food: "$220–$380/month",
    transport: "$25–$35/month (BKK pass)",
    coworking: "$90–$190/month",
  },
  taxInfo:
    "Tax residency triggers worldwide reporting; KATA small-business regime has changed — verify current rules with a Hungarian adviser.",
  communityTips:
    "Meetup Budapest, thermal bath coworking afternoons, learn basics of Hungarian for landlords.",
  bestFor: ["Value", "Nightlife & culture", "Fast internet", "River city living"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Hungary's White Card (Fehér kártya) allows third-country nationals working remotely for non-Hungarian employers to reside for up to two years in aggregate under current rules—confirm income thresholds, insurance, and accommodation with the National Directorate-General for Aliens Policing (NDGAP) and consulates.

Apply with remote employment contracts, bank statements, criminal record, address proof, and comprehensive health insurance.

EU citizens register under free movement after three months if conditions met.

After entry, obtain address card, tax number, and tap into TA social security if employed locally—remote workers should clarify tax residency with adviser before assuming exemption.

Employee routes for local Hungarian companies follow separate work permit flows.

Renewals require continued compliance—political and regulatory changes happen—verify with lawyer annually.

Schengen travel with valid residence—carry documents.
`.trim(),

  bankingTips: `
OTP Bank, K&H, Raiffeisen, and Revolut Hungary operate widely. HUF accounts essential for local bills—FX volatility significant.

Wise for receiving EUR/USD—declare if resident.

Cash still in markets; cards in Budapest.

Landlords may want cash or deposit quirks—use contracts and witnesses.

KATA and self-employment rules changed—accountant mandatory for small business.
`.trim(),

  healthcareInfo: `
TA-funded care for employees once registered—quality mixed; private care (FirstMed, Róbert Károly) for English speed.

Emergency: 112. Thermal baths not medical—hydrate.

Dental: affordable for private work vs US.

Pharmacies helpful—bring EU prescriptions.

Air quality winter—central heating districts vary.
`.trim(),

  culturalTips: `
Thermal baths are social—learn pool etiquette. Ruin bars are loud magic—Pest side nightlife legendary.

Hungarian is unique—learn köszönöm (thanks) and basic phrases; English works in services.

Politics sensitive—listen respectfully. Food hearty—try goulash beyond tourist traps.

Tipping 10–12% when service not included—check bill.

Danube divides Buda hills from Pest flat—choose commute wisely.
`.trim(),

  realMonthlyCost: `
Example month in Budapest (District 7 / 8, non-luxury):

Rent (one-bed): $750
Utilities + internet: $115
BKK pass: $28
Groceries: $230
Eating out / ruin bars: $200
Coworking: $100
Health insurance / private visits: $55
Phone + software: $35
Baths + leisure: $80
Miscellaneous: $90

Indicative total: about $1,683.

Debrecen and Szeged cut 30–50% rent; HUF/USD swings.
`.trim(),

  expatCommunities: [
    "Internations Budapest",
    "Budapest expats Facebook",
    "r/hungary",
    "Meetup Budapest — language & tech",
    "WeAreBudapest",
    "Digital Nomads Hungary",
    "Hungarian visa forums (verify legally)",
    "Wine region Etyek day trips",
  ],

  prosAndCons: {
    pros: [
      "White Card remote pathway",
      "Very affordable vs western EU",
      "Beautiful architecture and baths",
      "Fast internet",
      "Central Europe travel hub",
      "Growing startup scene",
      "Strong wine and food culture",
      "Thermal lifestyle unique",
      "English improving in Budapest",
      "Danube lifestyle",
    ],
    cons: [
      "Hungarian language barrier",
      "Regulatory changes—verify tax yearly",
      "Political climate debated internationally",
      "Forint volatility",
      "Some bureaucracy slow",
      "Air quality winter",
      "Rental scams—verify owners",
      "Public sector low English",
      "Brain drain debates—context matters",
      "Tourist crowds in District V",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Budapest",
      neighbourhood: "District 7 (Erzsébetváros)",
      description: "Ruin bars, youthful, noisy—$650–$1,100.",
    },
    {
      city: "Budapest",
      neighbourhood: "District 11 (Újbuda)",
      description: "Family, green, Gellért area—$700–$1,200.",
    },
    {
      city: "Debrecen",
      neighbourhood: "City centre",
      description: "Calm, affordable—$400–$700.",
    },
  ],

  faqs: [
    {
      question: "Is the White Card a tax exemption?",
      answer:
        "Not automatically—tax residency rules are separate; consult a Hungarian tax adviser before assuming non-residency.",
    },
    {
      question: "Buda or Pest?",
      answer:
        "Buda quieter hills; Pest flat nightlife—choose by commute and noise tolerance.",
    },
    {
      question: "Is Hungary in the euro?",
      answer:
        "No—forint—watch exchange rates for rent in HUF vs EUR listings.",
    },
    {
      question: "Safety?",
      answer:
        "Generally yes—standard nightlife precautions; avoid scams on party strip.",
    },
    {
      question: "Can I work for Hungarian clients on White Card?",
      answer:
        "Typically no—scheme targets foreign remote employers—verify with lawyer.",
    },
    {
      question: "EU membership?",
      answer:
        "Yes—Schengen—valid permits allow travel per rules.",
    },
  ],

  updated: "April 2026",
  wordCount: 1860,
};
