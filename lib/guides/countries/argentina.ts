import type { CountryGuide } from "../types";

export const argentina: CountryGuide = {
  slug: "argentina",
  country: "Argentina",
  flag: "🇦🇷",
  continent: "South America",
  capital: "Buenos Aires",
  currency: "ARS (USD widely used for large rents & savings)",
  language: "Spanish",
  timezone: "ART (UTC−3)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1400,
  seoTitle: "Working in Argentina: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Visas, blue dollar context, cost of living, best cities for remote workers, and practical tips for living and working in Argentina.",
  highlights: [
    "90-day visa-free entry for many passports; extensions and residencia possible",
    "Buenos Aires: huge nomad scene, cafes, tango, European-style neighbourhoods",
    "Regional price variation — Patagonia and wine country vs capital",
    "Strong café culture and late social hours; coworking and after-work meetups",
    "Time zone friendly for US East Coast collaboration",
  ],
  visaOptions: [
    {
      name: "Tourist visa / visa-free entry",
      duration: "Typically 90 days; renewals/extensions vary — confirm with migraciones",
      cost: "Often free for visa-free nationalities; reciprocity fee where applicable",
      requirements:
        "Valid passport, onward ticket sometimes requested, proof of funds — policies change; check your consulate and DNM.",
    },
    {
      name: "Residencia temporaria / rentista / other tracks",
      duration: "1–3 years renewable depending on category",
      cost: "Fees + legal and translation costs if using a gestor",
      requirements:
        "Income proof, criminal background, health coverage — exact lists depend on visa type; use official DNM sources or qualified immigration counsel.",
    },
  ],
  cities: [
    {
      name: "Buenos Aires",
      vibe: "Paris of the South energy — neighbourhoods from Palermo to San Telmo, huge remote-work scene",
      avgRent: "$500–$1,200/month (USD-equivalent, neighbourhood dependent)",
      coworkingSpaces: "WeWork, Manawa, La Maquinita, plenty of café offices",
    },
    {
      name: "Córdoba",
      vibe: "University city, hills nearby, slower and cheaper than BA — good for Spanish immersion",
      avgRent: "$350–$800/month",
      coworkingSpaces: "Area T, Huerta, local hubs in Nueva Córdoba",
    },
    {
      name: "Mendoza",
      vibe: "Wine country, Andean backdrop — smaller nomad circle, outdoor lifestyle",
      avgRent: "$400–$900/month",
      coworkingSpaces: "Cowork Mendoza, Godoy Cruz area spaces",
    },
  ],
  costBreakdown: {
    rent: "$400–$1,200/month depending on city and USD vs peso settlement",
    food: "$200–$400/month groceries; eating out very affordable in pesos",
    transport: "$20–$40/month (SUBE in BA); taxis/Bolt for late nights",
    coworking: "$80–$200/month",
  },
  taxInfo:
    "Tax residency generally ties to centre of vital interests and time in country — rules are nuanced. Many short-stay nomads do not trigger AFIP obligations; longer stays, local employment, or property may. The informal 'blue' vs official exchange rate affects how you budget and invoice — speak with a cross-border accountant before optimising.",
  communityTips:
    "Buenos Aires Digital Nomads, expat Facebook groups, milongas and language exchanges, football culture (plan around match days). Learn vos conjugations — porteño Spanish is distinct.",
  bestFor: ["US time zone", "Culture & food", "Spanish learning", "Value in pesos"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Argentina's Dirección Nacional de Migraciones (DNM) publishes requirements for temporary residence categories that can suit remote earners, investors, or those with local ties. Tourist entry for eligible nationalities is often visa-free for 90 days; prórroga (extension) rules and fees should be verified on the official site — they change.

If you pursue residencia temporaria, you typically compile apostilled criminal records, birth/marriage certificates, proof of income or investment, health insurance, and pay migratory fees. Many applicants use a certified gestor or lawyer because paperwork and appointments vary by office.

Processing times swing with backlogs; plan months, not weeks. Keep passport validity well beyond your intended stay. Overstaying without regularising status creates fines and exit issues — avoid informal advice from chat groups; confirm with DNM.

After approval, obtain DNI, register address, and align with AFIP if you become tax-resident. Banking often requires residency documentation; until then many nomads use foreign cards and withdraw pesos at ATMs (compare fees).
`.trim(),

  bankingTips: `
Major banks include Banco Galicia, BBVA, Santander Río, and Macro — cuenta en pesos and sometimes USD-linked products for residents. Opening without DNI is difficult; Mercado Pago and similar wallets are ubiquitous for day-to-day peso life.

Foreign Visa/Mastercard cards work in cities; carry backup — some small merchants are cash-only. Western Union and cuevas (informal FX) historically offered better rates than official for USD cash; regulations shift — use legal channels when possible and understand reporting rules.

Wise and other fintechs may not give you a local ARS account; plan settlement in USD/EUR abroad and transfer strategically. Watch card foreign-transaction fees. For rent, landlords often quote USD monthly but collect in pesos at an agreed rate — get receipts.

Inflation is structural — keep emergency reserves in stable currency, avoid long peso hoarding, and revisit budgets monthly.
`.trim(),

  healthcareInfo: `
Public system (OS + hospitals) exists; quality varies by province. Many expats use private prepaga plans (Swiss Medical, OSDE, Galeno tiers) for faster access — premiums depend on age and zone.

Buenos Aires has strong private hospitals (Hospital Alemán, Italiano, CEMIC). Dental and elective care are popular with medical tourists — verify credentials.

Emergency: 107 (medical) in BA; 911 in many areas. Pharmacies are helpful for minor issues; prescriptions rules differ from the US/EU — ask a local GP.

Yellow fever certificate if travelling to northern border regions; routine vaccines up to date. Altitude not an issue in BA; Mendoza is moderate.
`.trim(),

  culturalTips: `
Dinner runs late — 9pm is normal; clubs peak after 1am. Personal space is closer than Northern Europe; greetings are one cheek kiss in social settings (context-dependent).

Politics and economy are sensitive — listen more than you lecture. Football is religion; Superclásico tickets need planning. Tipping ~10% in restaurants if service was good.

Housing: older buildings may lack central heating — ask about winter drafts. Noise: balconies and street life are loud; earplugs help in centro.

Learn basic lunfardo only for fun — clarity beats slang in contracts. Queuing at migraciones requires patience and full document folders — celebrate small bureaucratic wins with mate.
`.trim(),

  realMonthlyCost: `
Example month for one remote worker in Buenos Aires (Palermo-ish, using USD card + peso spending):

Rent (room in shared vs one-bed varies): $700
Utilities + fibre: $60
Transport (SUBE + occasional taxi): $35
Groceries: $250
Eating out / social: $200
Coworking: $120
Gym: $45
Insurance / prepaga: $90
Software + VPN: $50
Misc: $120

Indicative total: ~$1,570 — swings heavily with rent tier and whether you settle rent in USD. Interior cities can run 25–35% lower excluding Patagonia peak season.
`.trim(),

  expatCommunities: [
    "Buenos Aires Digital Nomads & Expats (Facebook)",
    "Reddit r/Argentina and city subs",
    "Internations Buenos Aires",
    "Language exchanges — Meetup & Couchsurfing events",
    "Coworking community events at La Maquinita / Manawa",
  ],

  prosAndCons: {
    pros: [
      "Rich culture — food, wine, literature, music",
      "Affordable lifestyle when earning in hard currency",
      "Strong remote-work infrastructure in BA",
      "Friendly, social culture",
      "Diverse geography — mountains, wine, Patagonia trips",
      "No harsh jet lag vs US East",
    ],
    cons: [
      "Economic volatility and inflation — budget in USD mentally",
      "Bureaucracy for long-term residency",
      "Noise and pace in central BA",
      "Summer heat in BA without universal AC",
      "Some neighbourhoods need safety awareness at night",
      "Banking friction until documented",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Buenos Aires",
      neighbourhood: "Palermo Soho / Hollywood",
      description:
        "Green, cafes, nightlife — popular with nomads; verify apartment security and elevator condition. One-bed rents span wide USD-equivalent bands.",
    },
    {
      city: "Buenos Aires",
      neighbourhood: "Recoleta",
      description:
        "Formal, classic architecture, museums — quieter evenings, higher prices, family-friendly feel.",
    },
    {
      city: "Córdoba",
      neighbourhood: "Nueva Córdoba",
      description:
        "Walkable, student energy, bars — good base before exploring Sierras; check wifi in older buildings.",
    },
  ],

  faqs: [
    {
      question: "What is the 'blue dollar' and should I care?",
      answer:
        "Argentina has had parallel exchange rates — official, MEP, blue, etc. How you change money affects purchasing power. Rules and spreads evolve; use reputable channels and professional advice — carrying large cash has risks.",
    },
    {
      question: "Is Buenos Aires safe?",
      answer:
        "Like any large city — use common sense, avoid flashing phones on buses, pick neighbourhoods wisely, take official remises at night. Petty theft happens; violent crime is lower than many regional peers but not zero.",
    },
    {
      question: "Can I work remotely on a tourist stay?",
      answer:
        "Immigration law distinguishes local work from remote foreign income — interpretation varies. Long-stay nomads often regularise residence. This is not legal advice; consult an Argentine immigration lawyer for your situation.",
    },
    {
      question: "How is internet?",
      answer:
        "Fibre is common in BA and major cities — 50–300 Mbps typical packages. Have a 4G backup; power cuts are occasional in summer peaks.",
    },
  ],

  updated: "April 2026",
  wordCount: 2400,
};
