import type { CountryGuide } from "../types";

export const scotland: CountryGuide = {
  slug: "scotland",
  country: "Scotland",
  flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  continent: "Europe",
  capital: "Edinburgh",
  currency: "GBP",
  language: "English / Scots / Gaelic",
  timezone: "GMT / BST (UTC±0/+1)",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2400,
  seoTitle: "Working in Scotland: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Scotland or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Same UK visa rules — apply UK-wide guidance",
    "Edinburgh: culture and festivals",
    "Glasgow: friendly, affordable vs London",
    "Highlands and islands for weekend escapes",
    "Strong universities and gaming sector",
  ],
  visaOptions: [
    {
      name: "Skilled Worker visa (UK-wide)",
      duration: "Sponsored role",
      cost: "£700+ + IHS",
      requirements: "Scottish employer must hold UK sponsor licence",
    },
    {
      name: "Youth Mobility Scheme",
      duration: "2 years",
      cost: "Fees",
      requirements: "Eligible nationalities under quota",
    },
  ],
  cities: [
    {
      name: "Edinburgh",
      vibe: "Castle, Arthur's Seat, August festivals",
      avgRent: "$1,300–$2,200/month",
      coworkingSpaces: "CodeBase, Spaces, Regus",
    },
    {
      name: "Glasgow",
      vibe: "Art, music, west coast grit",
      avgRent: "$900–$1,600/month",
      coworkingSpaces: "Roost, Clockwise, Tontine",
    },
    {
      name: "Aberdeen",
      vibe: "Energy sector, granite city",
      avgRent: "$800–$1,400/month",
      coworkingSpaces: "ONE Codebase",
    },
  ],
  costBreakdown: {
    rent: "$800–$2,200/month",
    food: "$350–$550/month",
    transport: "$70–$100/month (regional passes)",
    coworking: "$180–$350/month",
  },
  taxInfo:
    "Scottish income tax bands differ from rest of UK — check Revenue Scotland vs HMRC for your situation.",
  communityTips:
    "Join hillwalking clubs, try ceilidh dancing, explore Isle of Skye in shoulder season.",
  bestFor: ["Nature & islands", "Culture festivals", "Gaming & tech", "UK without London prices"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Scotland uses the same UK immigration system as England, Wales, and Northern Ireland—there is no separate Scottish work visa. Your Scottish employer must hold a UK sponsor licence and issue a Certificate of Sponsorship for Skilled Worker routes, or you must qualify for another UK route (Global Talent, family, etc.).

EU citizens after Brexit need visas like other non-UK nationals unless covered by EU Settlement Scheme pre-existing rights.

After arrival, register with a GP through NHS Scotland, obtain National Insurance number, and open bank account—Edinburgh and Glasgow competitive rental markets need early search.

Youth Mobility Scheme offers working holiday style stays for eligible nationalities—quota applies.

Indefinite leave to remain is UK-wide—Scottish residence counts the same—track absences.

Remote work for non-UK employers while staying long-term still requires immigration permission—do not overstay visitor rules.

Scottish government sets income tax bands above the UK personal allowance—budget higher marginal rates than England for middle earners.
`.trim(),

  bankingTips: `
Same UK banking system—Monzo, Starling, traditional banks—proof of Scottish address for mortgage later.

Council tax bands vary—factor in.

Wise for FX—declare if UK resident.

Oil and gas salaries Aberdeen cyclical—watch market.

Housing purchase Land Register Scotland—solicitor process differs slightly from England.
`.trim(),

  healthcareInfo: `
NHS Scotland free at point of use—register GP—prescriptions free unlike England for most.

Emergency: 999. Rural response times longer—Highlands plan accordingly.

Mental health—outdoor culture helps—still professional support if needed.

Midges summer west coast—nets and repellent.

Whisky not healthcare—but moderation matters.
`.trim(),

  culturalTips: `
Scots identity proud—avoid lazy Braveheart clichés. Weather unpredictable—layers always.

Independence politics divides families—listen carefully in pubs.

Ceilidh dancing—say yes once. Haggis worth trying—modern vegetarian versions exist.

Edinburgh Festival August—book housing early. Glasgow humour darkest—enjoy.

Tipping 10–12% if great service.

"Glasgow smile" myth—city is friendly—standard urban awareness.
`.trim(),

  realMonthlyCost: `
Example month Glasgow (West End / Southside):

Rent (one-bed): $1,150
Council tax + utilities: $220
Transport (subway + bus): $85
Groceries: $360
Eating out / pubs: $260
Coworking: $220
Phone + software: $48
Highlands weekend amortised: $100
Miscellaneous: $110

Indicative total: about $2,553.

Edinburgh +15–25% rent in August; Aberdeen energy cycles affect rents.
`.trim(),

  expatCommunities: [
    "Internations Edinburgh & Glasgow",
    "American Scottish Foundation",
    "r/Scotland",
    "Meetup Scotland — hiking & tech",
    "CodeBase Edinburgh",
    "Glasgow Tech Meetup",
    "Scottish American Society",
    "Isle of Skye photographers",
  ],

  prosAndCons: {
    pros: [
      "Stunning landscapes and islands",
      "Edinburgh culture capital",
      "Glasgow affordability vs London",
      "Strong universities and gaming",
      "NHS Scotland prescriptions policy",
      "Same UK visa as rest of country",
      "Friendly community reputation",
      "Whisky and food renaissance",
      "Outdoor access from cities",
      "Distinct identity within UK",
    ],
    cons: [
      "Higher Scottish income tax bands mid earners",
      "Weather grey and windy",
      "Midges west coast summer",
      "London flight connections via hub",
      "Oil dependency Aberdeen",
      "August Edinburgh housing squeeze",
      "Independence debate fatigue for some",
      "Rural broadband variable",
      "Seasonal tourism employment only in places",
      "Short winter days north",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Edinburgh",
      neighbourhood: "Stockbridge",
      description: "Village feel, Sunday market—$1,400–$2,200.",
    },
    {
      city: "Glasgow",
      neighbourhood: "West End",
      description: "University, cafes—$950–$1,600.",
    },
    {
      city: "Aberdeen",
      neighbourhood: "Rosemount",
      description: "Granite terraces—$800–$1,400.",
    },
  ],

  faqs: [
    {
      question: "Do I need a Scottish visa?",
      answer:
        "No—UK visas apply nationwide—your sponsor can be based in Scotland.",
    },
    {
      question: "Edinburgh vs Glasgow?",
      answer:
        "Edinburgh prettier pricier; Glasgow cheaper warmer socially—both strong tech.",
    },
    {
      question: "Scottish tax vs England?",
      answer:
        "Extra bands above UK allowance—use HMRC/Revenue Scotland calculators.",
    },
    {
      question: "NHS different?",
      answer:
        "NHS Scotland administers care—broadly similar—prescriptions often free.",
    },
    {
      question: "Highlands driving?",
      answer:
        "Single track roads—passing places—sheep hazards—take time.",
    },
    {
      question: "Best time to visit Highlands?",
      answer:
        "May–September for milder weather—midges peak July–August—trade-offs.",
    },
  ],

  updated: "April 2026",
  wordCount: 1920,
};
