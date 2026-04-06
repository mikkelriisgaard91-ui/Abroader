import type { CountryGuide } from "../types";

export const chile: CountryGuide = {
  slug: "chile",
  country: "Chile",
  flag: "🇨🇱",
  continent: "South America",
  capital: "Santiago",
  currency: "CLP (USD common for large contracts)",
  language: "Spanish",
  timezone: "Chile (UTC−3 summer / −4 winter in continental Chile)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 1500,
  seoTitle: "Working in Chile: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Chile for remote workers: visas, Santiago vs regions, cost of living, taxes, and practical tips from Valparaíso to Patagonia gateways.",
  highlights: [
    "Stable institutions by regional standards — straightforward banking once documented",
    "Santiago: Andean backdrop, strong fibre, regional HQ city",
    "Valparaíso: colourful hills, port culture, universities — cooler ocean air",
    "Puerto Varas / Lake District — outdoor gateway, smaller scene",
    "Temperate climate in central valley; south is wetter; north is desert dry",
  ],
  visaOptions: [
    {
      name: "Permiso de Permanencia Transitoria (tourist)",
      duration: "Often 90 days; extensions subject to rules — verify for your nationality",
      cost: "Reciprocity fee history for some countries — check current SERMIG / consulate",
      requirements: "Passport, onward ticket, accommodation proof sometimes",
    },
    {
      name: "Visa subject to rentista / work / investment categories",
      duration: "1+ years depending on category",
      cost: "Fees + certified translations",
      requirements:
        "Income proof, investment, or employer sponsorship — Servicio Nacional de Migraciones publishes lists; lawyer often used",
    },
  ],
  cities: [
    {
      name: "Santiago",
      vibe: "Business capital — Providencia, Las Condes, Ñuñoa nomad pockets; smog in winter",
      avgRent: "$600–$1,500/month",
      coworkingSpaces: "WeWork, Co-work Latam, plenty of café bandwidth",
    },
    {
      name: "Valparaíso",
      vibe: "Steep cerros, street art, students — edgier than Viña del Mar next door",
      avgRent: "$450–$1,000/month",
      coworkingSpaces: "Recharge, Puerto Creativo — verify current listings",
    },
    {
      name: "Puerto Varas",
      vibe: "Lakes, Osorno volcano views — smaller, nature-first, rainy winters",
      avgRent: "$500–$1,100/month",
      coworkingSpaces: "Limited — home office + café culture",
    },
  ],
  costBreakdown: {
    rent: "$450–$1,500/month — Santiago core higher",
    food: "$250–$420/month — wine excellent value",
    transport: "$40–$70/month (Bip! card)",
    coworking: "$100–$220/month",
  },
  taxInfo:
    "Chile taxes residents on worldwide income once domiciled or staying beyond thresholds — definitions are legal, not intuitive. Remote workers invoicing foreign clients may still analyse PE risk and treaty positions. RUT (tax ID) ties to banking — coordinate with a Chilean tax advisor before long stays overlapping calendar years.",
  communityTips:
    "Spanish with Chilean modisms (cachai, weon used carefully) — listen before mimicking. Wine country weekends, skiing from Santiago, Atacama trips. Earthquakes are routine — learn protocol, secure shelves.",
  bestFor: ["Stability", "Nature access", "Wine & outdoors", "Pacific time alignment"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Chile's Servicio Nacional de Migraciones (Migraciones) moved many procedures online — create a profile, upload PDFs, and track cases. Tourist entry stamps vary; overstays carry fines — pay before airport exit.

Residence categories include rentista (passive income), work contract, investment, and family reunification — each demands a specific paper trail: apostilled FBI/police checks, civil docs, medical certs where listed.

Rentista applicants must show recurring foreign income translated and sometimes bank-certified — minimums change — verify peso equivalent on official tables.

After approval, obtain carnet, register RUT with SII if tax obligations apply, and open bank accounts with cédula. Private health insurance (ISAPRE) or public FONASA choice follows — decide with a broker.

Processing times fluctuate — months are normal post-pandemic backlogs. Keep digital copies of every stamped PDF.
`.trim(),

  bankingTips: `
Major banks: Banco de Chile, Santander, BCI, Scotiabank Chile. Fintechs like Tenpo and MACH power instant transfers. You'll need RUT + address for most products.

Cards are tap-friendly in cities. Cash still matters in ferías (markets). FX spreads at airports are poor — use regulated casas or bank wires.

US persons: FATCA reporting — Chilean banks ask extra questions. Wise may not offer CLP balance; plan USD/EUR offshore settlement.

Earthquake or protest days can jam ATMs — keep small cash buffer at home (securely).
`.trim(),

  healthcareInfo: `
Mixed public-private system — many expats use ISAPRE plans for faster specialist access; FONASA is the public option — lower cost, longer waits.

Santiago has Clinica Alemana, UC Christus — high standards. Wait times for mental health can be long — private route faster.

Air quality in Santiago winter (May–Aug) aggravates asthma — monitor AQI. Sun is strong year-round — SPF habit.

Emergency: 131 (SAMU) in many regions — confirm local numbers. Travel insurance for Torres del Paine treks — evac costs mount fast.
`.trim(),

  culturalTips: `
Tea time (once) is social glue — sweet cakes and conversation. Personal space smaller than US; greetings one kiss among friends.

Class awareness is real — avoid performative wealth in public transit. Politics polarised — tread lightly until trust exists.

Tipping ~10% sit-down restaurants if not included. Uber works in major cities; taxis meter — confirm route apps.

Recycling culture growing but inconsistent — carry tote bags. Water is safe in Santiago; carry filter bottles in rural south if unsure.
`.trim(),

  realMonthlyCost: `
Example month — Santiago, Providencia-ish:

Rent one-bed: $950
Utilities + fibre: $85
Transport (Metro + occasional Uber): $90
Groceries: $300
Eating out: $280
Coworking: $140
Gym: $55
ISAPRE-style plan: $120
Weekend trip savings: $150
Misc: $100

Indicative total: ~$2,270. Valparaíso can reduce rent 10–20% with trade-offs in commute noise; Puerto Varas lower dining variety, higher heating in winter.
`.trim(),

  expatCommunities: [
    "Internations Santiago",
    "Reddit r/chile",
    "Meetup tech & hiking groups",
    "Wine tasting clubs — Maipo / Colchagua day trips",
    "Volcano hiking WhatsApp circles (Puerto Varas)",
  ],

  prosAndCons: {
    pros: [
      "Regional stability and infrastructure",
      "Strong internet and coworking in capital",
      "Outdoor lifestyle — ski, surf, hike within hours",
      "Wine and produce quality",
      "Clear seasons — no tropical diseases in central Chile",
    ],
    cons: [
      "Santiago winter air quality",
      "Higher cost than Peru/Bolivia",
      "Complex migration paperwork",
      "Earthquake anxiety for newcomers",
      "Spanish dialect learning curve",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Santiago",
      neighbourhood: "Providencia",
      description:
        "Green, Metro-linked, dining — popular with expats; verify earthquake retrofit on older buildings.",
    },
    {
      city: "Santiago",
      neighbourhood: "Ñuñoa",
      description:
        "More residential, younger vibe — good value vs Las Condes; check Metro line proximity.",
    },
    {
      city: "Valparaíso",
      neighbourhood: "Cerro Alegre",
      description:
        "Tourist-friendly, views — stairs daily; tourists in summer — secure Wi-Fi before signing lease.",
    },
  ],

  faqs: [
    {
      question: "Is Chile expensive?",
      answer:
        "Compared to neighbours like Peru — yes for rent and dining in Santiago. Compared to Western Europe capitals — often still cheaper. Budget depends on peso exchange and neighbourhood.",
    },
    {
      question: "Can I use USD?",
      answer:
        "Contracts sometimes reference USD, but day-to-day is CLP. Exchange at banks or regulated desks — avoid street traders.",
    },
    {
      question: "Digital nomad specific visa?",
      answer:
        "Chile has explored startup and talent policies historically — verify whether a dedicated remote-worker visa exists on Migraciones site; many use rentista or standard temporary residence if eligible.",
    },
  ],

  updated: "April 2026",
  wordCount: 2350,
};
