import type { CountryGuide } from "../types";

export const bosnia: CountryGuide = {
  slug: "bosnia",
  country: "Bosnia and Herzegovina",
  flag: "🇧🇦",
  continent: "Europe",
  capital: "Sarajevo",
  currency: "BAM",
  language: "Bosnian / Croatian / Serbian",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 850,
  seoTitle: "Working in Bosnia and Herzegovina: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Bosnia and Herzegovina or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Dramatic mountains and affordable living",
    "Sarajevo's east-meets-west history",
    "Growing freelance IT community",
    "Complex entity structure — research carefully",
    "Coffee culture rivals Vienna",
  ],
  visaOptions: [
    {
      name: "Temporary residence (employment)",
      duration: "1 year renewable",
      cost: "BAM fees",
      requirements: "Local employer sponsorship",
    },
    {
      name: "Company formation",
      duration: "Ongoing",
      cost: "Legal fees",
      requirements: "LLC path with accountant for stays",
    },
  ],
  cities: [
    {
      name: "Sarajevo",
      vibe: "Valley city, Ottoman core",
      avgRent: "$400–$750/month",
      coworkingSpaces: "Networks Hub, Spark.ba",
    },
    {
      name: "Mostar",
      vibe: "Bridge iconic, tourist flow",
      avgRent: "$350–$650/month",
      coworkingSpaces: "Cafés",
    },
    {
      name: "Banja Luka",
      vibe: "Republika Srpska hub",
      avgRent: "$320–$600/month",
      coworkingSpaces: "Limited",
    },
  ],
  costBreakdown: {
    rent: "$320–$750/month",
    food: "$200–$340/month",
    transport: "$25–$40/month",
    coworking: "$60–$140/month",
  },
  taxInfo:
    "Entity-dependent taxation across Federation vs RS — mandatory local accountant for compliance.",
  communityTips:
    "Respect war memorial sensitivities, ski Jahorina in winter, learn basic local phrases.",
  bestFor: ["Budget", "Mountains", "History depth", "Quiet seasons"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Bosnia and Herzegovina has two entities (Federation BiH and Republika Srpska) with different administrative rules—visa and temporary residence applications depend on where you will live and work. Employment sponsorship from a local company is the clearest path; company formation with capital and reporting obligations is common among freelancers.

EU citizens may stay visa-free short periods—longer stays require residence permits per entity rules—verify with embassies.

After entry, register residence, obtain tax ID, open bank account—lawyer coordination recommended.

Remote foreign employment without local structure is legally grey—do not assume tourist stays allow work.

Border police may ask for accommodation proof—carry documents.

Complex politics—avoid hot takes until trust established.
`.trim(),

  bankingTips: `
UniCredit, Raiffeisen, Sparkasse variants—BAM pegged to EUR.

Cash common; cards growing in cities.

Wise for receiving EUR—declare if establishing tax presence.

Entity banking rules differ—Sarajevo vs Banja Luka paperwork.

Property purchases—title disputes legacy—lawyer essential.
`.trim(),

  healthcareInfo: `
Mixed public system—quality variable; private clinics Sarajevo for speed.

Emergency: 124. Mountain injuries—rescue not always fast—insurance with evacuation smart.

War legacy—mental health awareness in population—respect.

Air quality winter valleys—inversion.

Coffee strong—hydrate.
`.trim(),

  culturalTips: `
Three constituent peoples—religious diversity—dress modestly at sacred sites.

Čejf (enjoyment of slow coffee) is philosophy. Burek for breakfast debates—meat vs cheese eternal.

Learn hello/thanks in local language variant.

Winter skiing affordable—Jahorina gear rental.

Tipping 10% if happy; service sometimes included.

Landmine risk rural—stick marked trails if hiking remote areas—check maps.
`.trim(),

  realMonthlyCost: `
Example month Sarajevo (Centar / Marijin Dvor):

Rent (one-bed): $480
Utilities + internet: $90
Transport: $35
Groceries: $210
Eating out: $160
Coworking / café work: $75
Health private visits: $40
Phone + software: $28
Ski weekend amortised: $60
Miscellaneous: $70

Indicative total: about $1,248.

Mostar summer tourist rents spike.
`.trim(),

  expatCommunities: [
    "Sarajevo Expats Facebook",
    "r/bih",
    "Meetup Sarajevo",
    "Digital nomads Balkans",
    "Mostar travellers",
    "Jahorina ski groups",
    "Banja Luka internationals",
    "Remote worker BiH Telegram",
  ],

  prosAndCons: {
    pros: [
      "Extremely affordable vs western Europe",
      "Stunning mountains and rivers",
      "Rich history and coffee culture",
      "Growing remote freelancer scene",
      "Warm hospitality when trust built",
      "Proximity Croatia coast weekends",
      "Winter sports cheap",
      "Authentic food",
      "Compact cities—short commutes",
      "English improving among youth",
    ],
    cons: [
      "Complex political entities—admin confusing",
      "Not EU—travel/visa rules differ",
      "Infrastructure uneven",
      "Economic development uneven",
      "War legacy sensitivities—navigate respectfully",
      "Some rural landmine risk—research trails",
      "Air pollution winter cities",
      "Banking and paperwork slow",
      "English limited outside Sarajevo",
      "Brain drain youth",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Sarajevo",
      neighbourhood: "Baščaršija area",
      description: "Historic, tourists, lively—$400–$700.",
    },
    {
      city: "Mostar",
      neighbourhood: "Old Town adjacent",
      description: "Views, summer crowds—$350–$650.",
    },
    {
      city: "Banja Luka",
      neighbourhood: "Centar",
      description: "RS administration, calmer—$320–$600.",
    },
  ],

  faqs: [
    {
      question: "Is Bosnia safe?",
      answer:
        "Generally yes for visitors—standard precautions; research entity travel advisories from your government.",
    },
    {
      question: "Currency?",
      answer:
        "Convertible mark (BAM) pegged to euro—euros often accepted in tourist spots—carry marks for local shops.",
    },
    {
      question: "Can I use Schengen visa only?",
      answer:
        "BiH is not Schengen—entry rules depend on nationality—check before travel.",
    },
    {
      question: "Which city for nomads?",
      answer:
        "Sarajevo for community; Mostar for beauty; Banja Luka for quieter RS life.",
    },
    {
      question: "Internet reliable?",
      answer:
        "Good in cities for remote work—test backup for mountain trips.",
    },
    {
      question: "Sensitive topics?",
      answer:
        "War history, ethnicity, and politics—listen more than debate early.",
    },
  ],

  updated: "April 2026",
  wordCount: 1680,
};
