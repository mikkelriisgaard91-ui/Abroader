import type { CountryGuide } from "../types";

export const greece: CountryGuide = {
  slug: "greece",
  country: "Greece",
  flag: "🇬🇷",
  continent: "Europe",
  capital: "Athens",
  currency: "EUR",
  language: "Greek",
  timezone: "EET (UTC+2)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1500,
  seoTitle: "Working in Greece: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Greece or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Digital Nomad Visa with income threshold",
    "Island lifestyle options off-season",
    "Lower cost vs many western EU capitals",
    "EU Schengen access when holding valid permits",
    "Mediterranean climate and hospitality",
  ],
  visaOptions: [
    {
      name: "Digital Nomad Visa",
      duration: "1 year, extendable",
      cost: "~€75+",
      requirements: "Remote work for non-Greek employers, minimum monthly income, insurance",
    },
    {
      name: "Type D national visa (other purposes)",
      duration: "Varies",
      cost: "€75+",
      requirements: "Depends on pathway — study, family, investment, etc.",
    },
  ],
  cities: [
    {
      name: "Athens",
      vibe: "Startup growth, ancient grit, best infrastructure for remote work",
      avgRent: "$700–$1,300/month",
      coworkingSpaces: "Stone Soup, The Cube, Spaces",
    },
    {
      name: "Thessaloniki",
      vibe: "Youthful, cheaper than Athens, strong food scene",
      avgRent: "$550–$1,000/month",
      coworkingSpaces: "Tribes, local hubs",
    },
    {
      name: "Heraklion (Crete)",
      vibe: "Island logistics, winter quiet, summer tourism surge",
      avgRent: "$600–$1,000/month",
      coworkingSpaces: "Local cowork spots, cafés",
    },
  ],
  costBreakdown: {
    rent: "$550–$1,400/month",
    food: "$280–$450/month",
    transport: "$35–$60/month",
    coworking: "$100–$220/month",
  },
  taxInfo:
    "Greece introduced incentives for digital migrants including potential income tax discounts for qualifying stays—rules depend on duration, registration, and income source. Tax residency triggers at 183+ days generally—consult a Greek accountant before assuming the discount applies to your structure.",
  communityTips:
    "Athens Digital Nomad Facebook groups, island hopping shoulder seasons (May/June, September), learn Greek alphabet basics for signage.",
  bestFor: ["Island life", "Mediterranean climate", "EU travel", "Lower burn rate"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Greece markets one of Europe's most approachable Digital Nomad visas for non-EU remote workers who can document stable foreign income and comprehensive insurance. The programme pairs with tax incentives aimed at attracting long-stayers who spend money locally while working for employers abroad.

Eligibility basics

You typically need proof of remote employment or freelance contracts with clients outside Greece, monthly income above the published threshold (often cited around €3,500 gross depending on dependants—confirm with the Greek consulate), valid passport, criminal background checks where required, accommodation evidence, and health insurance covering Greece.

Document preparation

Compile apostilled or legalised documents as your consulate demands—employment letters on letterhead, recent payslips, bank statements, tax residency declarations if relevant, and translated leases. Freelancers should show recurring invoices, not one-off projects.

Where to apply

Submit at the Greek consulate covering your place of residence. Some applicants already in Greece explore conversions—rules fluctuate; lawyers help.

Processing

Timelines vary from a few weeks to a couple of months depending on backlog. Fees are modest relative to other EU states.

After entry

Register locally, obtain AFM tax number, open bank account (can be bureaucratic—patience and Greek phone number help), and choose public or private healthcare pathways.

Renewal

Demonstrate continued foreign income, tax filings if applicable, and insurance. Keep clean financial records—Greek authorities appreciate transparency after past crises.

Rejections

Insufficient income proof, insurance gaps, or ambiguous remote work setups trigger refusals—clarify employer location and currency trails.
`.trim(),

  bankingTips: `
Major Greek banks—National Bank, Eurobank, Alpha, Piraeus—open accounts for residents with passport, AFM, proof of address, and sometimes reference letters. Online onboarding is improving but expect branch visits. Wise and Revolut ease receiving foreign currency; many nomads transfer to local accounts for rent.

Cards work widely in Athens; islands still prefer cash in tiny tavernas—carry euros. Capital controls memories linger—large transfers may face questions, so document sources.

ATM fees: use bank ATMs, avoid standalone tourist traps on islands charging premium spreads.

Tax reporting for foreign accounts interacts with annual declarations—ask an accountant if you hold large balances abroad.

Mobile banking apps are solid—2FA SMS requires local SIM; Cosmote, Vodafone, Wind compete.
`.trim(),

  healthcareInfo: `
Greece mixes public ESY coverage with private hospitals in Athens and Thessaloniki. Digital nomad visa holders typically carry private insurance meeting minimum inpatient/outpatient standards—verify wording matches embassy PDFs.

Private providers like Interamerican, Eurolife, and Groupama offer English sales; premiums vary €40–€120 monthly depending on age.

Public ESY care is good in cities; islands may medevac serious cases to Athens. Pharmacies are knowledgeable—many drugs available without US-style friction.

Emergency dial 166 (EKAB) or 112. Tourist season strains island clinics—purchase insurance with evacuation if you live cliffside remote.

Mental health resources grow in Athens—English therapists exist but book ahead.

EU citizens use EHIC for temporary stays; long-term residents transition to local systems.
`.trim(),

  culturalTips: `
Greek time bends—appointments may slip slightly, but government offices demand punctuality when your ticket number flashes. Relationship-building over coffee unlocks landlords and accountants.

English proficiency rises among younger Athenians; islands and villages reward Greek phrases—kalimera goes far. Work culture in multinationals resembles western Europe; family tavernas still dominate social life—expect loud tables, shared plates, and late nights.

Bureaucracy loves stamps—scan everything, carry passport copies, smile through repeats. Strikes happen—monitor ferry news if island hopping.

Heatwaves demand siesta logic even if not formal—schedule deep work mornings, beach afternoons.

Regional pride is intense—Crete is not Athens; listen more than you preach. Noise and motorbikes are part of city symphony—noise-cancelling headphones for home offices facing streets.

Tipping 5–10% in restaurants is appreciated; round taxi fares.

Remote workers thrive when they join hiking clubs, sailing weekends, and olive harvest volunteering—integration beats beach laptop clichés.
`.trim(),

  realMonthlyCost: `
Example month for a single remote worker in Athens (Koukaki / Petralona style):

Rent (one-bed furnished): $900
Utilities + fibre: $140
Transport (metro monthly + occasional taxi): $45
Groceries + laiki market produce: $290
Eating out three times weekly: $220
Coworking: $130
Health insurance: $55
Weekend island ferry occasionally amortised: $80
Entertainment / gym: $70
Miscellaneous: $110

Indicative total: about $2,040.

Santorini or Mykonis summer short lets can double housing; Crete off-season bargains appear October–April. Thessaloniki shaves 15–20% vs central Athens for rent.
`.trim(),

  expatCommunities: [
    "Athens Digital Nomads Facebook",
    "Greece Digital Nomads Network",
    "Expats in Greece Facebook",
    "r/greece travel + expat threads",
    "Meetup Athens tech & language exchanges",
    "Remote Greece Slack communities",
    "Island-specific WhatsApp groups (ask locally)",
    "InterNations Athens chapter",
  ],

  prosAndCons: {
    pros: [
      "Digital Nomad Visa relatively affordable",
      "Potential multi-year tax incentive for qualifying incomes",
      "Mediterranean lifestyle and food culture",
      "Lower baseline costs than Paris or Amsterdam",
      "Island weekend options unmatched in Europe",
      "Growing startup meetups in Athens",
      "Mild winters vs northern Europe",
      "EU travel from mainland ports and airports",
      "Warm hospitality philoxenia culture",
      "History and nature everywhere",
    ],
    cons: [
      "Bureaucracy heavy—AFM, banks, utilities slow",
      "Greek language barrier outside Athens",
      "Island internet can be flaky in storms",
      "Summer overtourism on iconic islands",
      "Earthquake awareness—choose buildings wisely",
      "Some public sector digitisation still catching up",
      "Athens air quality varies—check wildfire smoke summers",
      "Slower pace can frustrate Type-A planners",
      "Rental market informal—inspect contracts",
      "Heating oil costs in older flats winter",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Athens",
      neighbourhood: "Koukaki",
      description:
        "Under the Acropolis, café density, tourist bustle but charming side streets—nomad favourite. One-beds €700–€1,100.",
    },
    {
      city: "Athens",
      neighbourhood: "Monastiraki",
      description:
        "Central, metro hubs, flea market energy—noisy but vibrant; choose upper floors for quiet. Rents €750–€1,200.",
    },
    {
      city: "Athens",
      neighbourhood: "Exarcheia",
      description:
        "Alternative, political street art, cheaper rents, edgy vibe—verify building access and night noise. Rents €600–€950.",
    },
  ],

  faqs: [
    {
      question: "Is Greece's digital nomad tax discount automatic?",
      answer:
        "No—you must meet registration, timing, and income conditions outlined in Greek law; some benefits apply for seven years at half rate in certain cases. Professional advice is mandatory—rules evolve with budget laws.",
    },
    {
      question: "Athens vs Crete vs Santorini for remote work?",
      answer:
        "Athens offers best fibre, coworking, flights, and healthcare. Crete balances lifestyle and infrastructure. Santorini is stunning but seasonal, pricey, and crowded—short visits beat year-round unless you thrive isolation.",
    },
    {
      question: "How fast is internet?",
      answer:
        "Athens fibre often 100–300 Mbps; islands vary—test Airbnbs with Speedtest before long leases. Coworking backups save deadline days.",
    },
    {
      question: "Do I need a car?",
      answer:
        "Not in Athens—metro + tram cover core. Islands may need scooter or car for exploration; mainland road trips reward drivers.",
    },
    {
      question: "Is Greece safe?",
      answer:
        "Generally yes—standard urban awareness in Athens pickpocket zones (metro, Monastiraki). Earthquake preparedness matters—know exits.",
    },
    {
      question: "Can I Schengen travel on the visa?",
      answer:
        "Valid Greek residence permits typically allow Schengen travel within permitted durations—carry documents; rules follow EU law.",
    },
  ],

  updated: "April 2026",
  wordCount: 2590,
};
