import type { CountryGuide } from "../types";

export const serbia: CountryGuide = {
  slug: "serbia",
  country: "Serbia",
  flag: "🇷🇸",
  continent: "Europe",
  capital: "Belgrade",
  currency: "RSD",
  language: "Serbian",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Easy",
  internetSpeed: "Excellent",
  costOfLiving: "Low",
  avgMonthlyCost: 900,
  seoTitle: "Working in Serbia: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Serbia or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Digital Nomad Visa (temporary residence for remote work)",
    "Belgrade nightlife and café culture",
    "Very affordable European base",
    "Fast fibre in cities",
    "Growing tech outsourcing scene",
  ],
  visaOptions: [
    {
      name: "Digital Nomad Visa",
      duration: "1 year renewable",
      cost: "€200+",
      requirements: "Proof of remote income, address, health insurance",
    },
    {
      name: "Company incorporation route",
      duration: "Ongoing",
      cost: "Legal + accounting",
      requirements: "DOO company for local invoicing — hire Serbian accountant",
    },
  ],
  cities: [
    {
      name: "Belgrade",
      vibe: "Fortress, rivers, nonstop energy",
      avgRent: "$500–$900/month",
      coworkingSpaces: "Impact Hub, Smart Office, Nova Iskra",
    },
    {
      name: "Novi Sad",
      vibe: "EXIT festival, Petrovaradin, calmer",
      avgRent: "$400–$750/month",
      coworkingSpaces: "Startit Center, Science Park",
    },
    {
      name: "Niš",
      vibe: "Southern hub, cheaper",
      avgRent: "$350–$600/month",
      coworkingSpaces: "Local hubs",
    },
  ],
  costBreakdown: {
    rent: "$350–$900/month",
    food: "$200–$350/month",
    transport: "$25–$35/month",
    coworking: "$70–$150/month",
  },
  taxInfo:
    "Serbian tax residency rules depend on stay; freelancers use lump-sum or standard regimes — local accountant required.",
  communityTips:
    "Learn Cyrillic/Latin both used, explore EXIT festival, Kosovo travel requires sensitivity and planning.",
  bestFor: ["Budget", "Nightlife", "Fast internet", "Founder runway"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Serbia's digital nomad visa grants temporary residence to remote workers meeting income thresholds, holding comprehensive insurance, and leasing accommodation—confirm current RSD/EUR amounts and document lists with the Ministry of Foreign Affairs and police administration.

Apply at Serbian embassies with remote contracts, bank statements, criminal background checks, and health insurance.

DOO (limited company) incorporation remains a common path for freelancers invoicing clients—accountant handles monthly filings.

After approval, register address, obtain tax ID, and consider lump-sum (paušal) taxation if eligible—rules change; professional advice mandatory.

EU candidacy process may update visa rules—monitor announcements.

Travel to Kosovo involves separate border procedures—research sensitively; do not treat politics casually in conversation.
`.trim(),

  bankingTips: `
Banca Intesa, AIK, Raiffeisen, Eurobank—RSD accounts; cards widespread.

Wise for FX—declare if resident.

Cash still common; inflation awareness—watch RSD stability.

Crypto trading active—tax obligations apply.

Landlords often cash—get receipts when possible.
`.trim(),

  healthcareInfo: `
RFZO public after contributions—quality variable; private clinics Belgrade for speed.

Emergency: 194 ambulance. Private hospitals (Medigroup) English-friendly.

Dental: affordable.

Air quality winter Belgrade—sensitive groups note.

EXIT festival—ear protection and hydration.
`.trim(),

  culturalTips: `
Kafana culture—coffee for hours. Nightlife legendary—pace yourself.

Serbian directness—friendship deep once earned. Learn Cyrillic optional—Latin also official.

Avoid Kosovo debate unless invited. Sports tribal—Red Star vs Partizan.

Tipping 10% restaurants; round taxis.

Slava family saint days—if invited, go.
`.trim(),

  realMonthlyCost: `
Example month Belgrade (Vračar / Dorćol):

Rent (one-bed): $580
Utilities + internet: $100
Transport + taxi mix: $45
Groceries: $220
Eating out / nightlife: $240
Coworking: $85
Health / insurance: $50
Phone + software: $30
Culture / clubs: $90
Miscellaneous: $75

Indicative total: about $1,515.

Novi Sad -15% rent; Niš even lower.
`.trim(),

  expatCommunities: [
    "Belgrade Foreigners Facebook",
    "r/serbia",
    "Meetup Belgrade — tech & music",
    "EXIT festival community",
    "Novi Sad digital nomads",
    "Startit Serbia network",
    "Remote Serbia Slack",
    "Danube kayaking groups",
  ],

  prosAndCons: {
    pros: [
      "Digital nomad visa pathway",
      "Very low cost vs EU averages",
      "Excellent internet",
      "World-class nightlife and culture",
      "Friendly hospitality",
      "Growing IT outsourcing",
      "DOO + lump-sum tax options (verify)",
      "Central Balkan travel hub",
      "Food scene underrated",
      "River and fortress lifestyle",
    ],
    cons: [
      "Non-EU—Schengen travel separate visas",
      "Political complexity in region—sensitivity required",
      "Bureaucracy and occasional corruption risk—use lawyers",
      "Air quality winter",
      "Currency volatility awareness",
      "English weaker outside Belgrade",
      "Noise in city centre nightlife zones",
      "Infrastructure uneven outside capitals",
      "Some buildings earthquake-prone—check age",
      "Kosovo travel logistics complex",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Belgrade",
      neighbourhood: "Vračar",
      description: "Church of Saint Sava, cafés—$500–$850.",
    },
    {
      city: "Belgrade",
      neighbourhood: "Dorćol",
      description: "Bohemian, bars, cobblestones—$550–$900.",
    },
    {
      city: "Novi Sad",
      neighbourhood: "Centar",
      description: "EXIT proximity, Danube—$400–$750.",
    },
  ],

  faqs: [
    {
      question: "Is Serbia in the EU?",
      answer:
        "No—candidate status—visa rules differ from EU members; verify Schengen visa needs for travel.",
    },
    {
      question: "Belgrade vs Novi Sad?",
      answer:
        "Belgrade for energy; Novi Sad for calmer pace and EXIT—both affordable.",
    },
    {
      question: "Tax for digital nomads?",
      answer:
        "Depends on residency days and structure—lump-sum vs standard—accountant essential.",
    },
    {
      question: "Safety?",
      answer:
        "Generally yes—nightlife districts need standard awareness.",
    },
    {
      question: "Can I visit Kosovo?",
      answer:
        "Yes with planning—entry/exit stamps can be sensitive—research current guidance.",
    },
    {
      question: "Best time to visit?",
      answer:
        "Spring and early autumn for weather; July for EXIT if you tolerate heat and crowds.",
    },
  ],

  updated: "April 2026",
  wordCount: 1720,
};
