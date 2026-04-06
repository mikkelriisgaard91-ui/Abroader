import type { CountryGuide } from "../types";

export const iceland: CountryGuide = {
  slug: "iceland",
  country: "Iceland",
  flag: "🇮🇸",
  continent: "Europe",
  capital: "Reykjavík",
  currency: "ISK",
  language: "Icelandic",
  timezone: "GMT (UTC+0)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Very High",
  avgMonthlyCost: 2900,
  seoTitle: "Working Remotely in Iceland 2026 — Digital Nomad Visa & Reykjavík",
  seoDescription:
    "Iceland remote work: long-term remote work visa, volcanic landscapes, Reykjavík costs and tax notes.",
  highlights: [
    "Digital Nomad / long-term remote work visa for qualifying earners",
    "Otherworldly nature between work blocks",
    "Small, tight-knit expat community",
    "Excellent connectivity for an island nation",
    "English widely spoken",
  ],
  visaOptions: [
    {
      name: "Digital Nomad / Remote Work Long-term Visa",
      duration: "Up to 180 days per visa issuance window",
      cost: "ISK application fee",
      requirements: "High monthly income threshold, not tax resident intent — read Directorate rules",
    },
    {
      name: "Work permit via employer",
      duration: "Job-linked",
      cost: "Fees",
      requirements: "Icelandic employer sponsorship",
    },
  ],
  cities: [
    {
      name: "Reykjavík",
      vibe: "Colourful houses, small capital feel",
      avgRent: "$1,400–$2,200/month",
      coworkingSpaces: "Reykjavík Coworking, Hús at Hlemmur",
    },
    {
      name: "Akureyri",
      vibe: "Northern capital, quieter",
      avgRent: "$1,000–$1,600/month",
      coworkingSpaces: "Limited — cafés",
    },
    {
      name: "Keflavík area",
      vibe: "Airport proximity, less scenic",
      avgRent: "$1,100–$1,700/month",
      coworkingSpaces: "Hotel business centres",
    },
  ],
  costBreakdown: {
    rent: "$1,000–$2,200/month",
    food: "$450–$700/month",
    transport: "$80–$120/month (car often needed)",
    coworking: "$200–$380/month",
  },
  taxInfo:
    "Tax residency triggers after 183 days; special rules for short stays — consult Icelandic tax authority guidance.",
  communityTips:
    "Swimming pool social life, join rescue team volunteering, book northern trips in shoulder season.",
  bestFor: ["Nature extremes", "Small communities", "Photography", "Adventure"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Iceland's long-term visa for remote workers (sometimes called digital nomad visa in media) is limited in duration and intent—you must demonstrate high monthly income from foreign employers, hold health insurance, and not intend to establish tax residency during the stay as per Directorate of Immigration rules. Read the latest circulars—this is not a permanent residence route.

Standard work permits require Icelandic employers to prove labour market needs and sponsor you—tourism, tech, and energy sectors hire internationally.

EEA citizens can move under EU/EEA rules with registration.

After arrival, obtain kennitala (national ID), register address, and join local swimming pool culture—seriously.

Renewals depend on permit type; remote visa may require exit and reapplication per rules.

Volcanic eruptions and weather disrupt travel—monitor SafeTravel.is.

Tax residency after 183 days triggers worldwide reporting—structure remote work carefully with a skatturinn adviser.
`.trim(),

  bankingTips: `
Landsbankinn, Arion Banki, and Íslandsbanki serve residents. Kennitala is essential for everything.

ISK is volatile—budget FX. Cards universal; cash rare.

Wise for receiving foreign income—declare if becoming tax resident.

Housing deposits and rent are high—liquidity matters.

Car loans expensive—insurance mandatory for wind sand damage in some areas.

Banking hours shorter than mainland US—use apps.
`.trim(),

  healthcareInfo: `
Public healthcare funded by taxes once registered—quality good; Reykjavík waits for non-urgent care.

Emergency: 112. Search and rescue world-class—don't hike unprepared.

Dental: private costly—budget extras.

Mental health: small country—English therapists limited outside capital.

Swimming pools are social and health hubs—hot pots etiquette: shower thoroughly before entry.

Pharmacies in larger towns; remote areas stock limited—plan prescriptions.
`.trim(),

  culturalTips: `
Small population—everyone connects. Gossip travels—be kind. Swimming pools are where deals happen—learn local pool rules.

Weather changes hourly—layer always. Midnight sun summer; dark winter—plan accordingly.

English near universal; Icelandic appreciated for respect.

Tipping not common—service included. Alcohol expensive—plan Systembolaget-style Vínbúðin trips.

Nature is dangerous—respect waves, glaciers, and wind. Elves optional belief—don't mock local folklore lightly.
`.trim(),

  realMonthlyCost: `
Example month in Reykjavík (single):

Rent (one-bed): $1,650
Utilities + internet: $155
Car rental share / bus: $200
Groceries (Bonus/Kronan): $520
Eating out: $340
Coworking: $220
Pool + gym: $90
Phone + software: $50
Travel / tours amortised: $150
Miscellaneous: $120

Indicative total: about $3,495.

Akureyri lower rent but fewer flights; ISK/USD swings totals.
`.trim(),

  expatCommunities: [
    "Internations Reykjavík",
    "Iceland Expats Facebook",
    "r/Iceland",
    "Meetup Iceland — hiking & photography",
    "Reykjavík International Film Festival crowd",
    "Search and rescue volunteer groups",
    "Startup Reykjavík events",
    "Northern lights tour groups",
  ],

  prosAndCons: {
    pros: [
      "Stunning unique landscapes",
      "Small safe community",
      "English widely spoken",
      "Strong gender equality culture",
      "Clean air and geothermal energy",
      "Outdoor adventure unparalleled",
      "Growing tech and creative scene",
      "Remote worker visa option for qualifying stays",
      "Direct flights to US and EU hubs",
      "Tight expat networks",
    ],
    cons: [
      "Very high cost of living",
      "Weather volatile and dark winters",
      "Housing shortage in Reykjavík",
      "Remote visa limited—not permanent path",
      "Small dating pool",
      "Limited retail variety",
      "Car often needed outside capital",
      "Tax complexity if becoming resident",
      "Volcanic ash and storms disrupt travel",
      "Isolation from continental Europe",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Reykjavík",
      neighbourhood: "Vesturbær",
      description: "Family, quiet, near sea—$1,400–$2,000.",
    },
    {
      city: "Reykjavík",
      neighbourhood: "Miðborg",
      description: "Central, walkable, nightlife noise—$1,500–$2,200.",
    },
    {
      city: "Akureyri",
      neighbourhood: "Downtown",
      description: "Compact, northern lights—$1,000–$1,600.",
    },
  ],

  faqs: [
    {
      question: "Can I stay permanently on the remote visa?",
      answer:
        "No—it's a time-limited pathway with specific intent rules; long-term requires other permits or citizenship path.",
    },
    {
      question: "Is Iceland in the EU?",
      answer:
        "No—EEA member, Schengen participant—check rules for your nationality.",
    },
    {
      question: "Do I need a car?",
      answer:
        "In Reykjavík often no; exploring Ring Road yes—rent in shoulder season for better prices.",
    },
    {
      question: "How expensive is food?",
      answer:
        "Very—import reliance; cook at home and shop discount chains.",
    },
    {
      question: "Is Iceland safe?",
      answer:
        "Yes for crime—nature is the main risk; check weather and SafeTravel.is.",
    },
    {
      question: "Can I see northern lights?",
      answer:
        "Yes winter outside Reykjavík light pollution—no guarantees; cloud dependent.",
    },
  ],

  updated: "April 2026",
  wordCount: 1880,
};
