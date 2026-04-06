import type { CountryGuide } from "../types";

export const germany: CountryGuide = {
  slug: "germany",
  country: "Germany",
  flag: "🇩🇪",
  continent: "Europe",
  capital: "Berlin",
  currency: "EUR",
  language: "German",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 2200,
  seoTitle: "Working Remotely in Germany 2026 — Freelance Visa, Cities & Taxes",
  seoDescription:
    "Guide to remote work in Germany: freelance visa, Blue Card context, Berlin and Munich costs, healthcare and tax basics.",
  highlights: [
    "Strong fibre and mobile data in cities",
    "Freelance (§21) and employment routes well documented",
    "Excellent healthcare system",
    "Central EU travel hub",
    "Coworking and meetups in every major city",
  ],
  visaOptions: [
    {
      name: "Freelance / Self-employment residence (§21 AufenthG)",
      duration: "Typically 1–3 years renewable",
      cost: "€100+ application fees",
      requirements: "Client letters, finances, insurance, local address — varies by Ausländerbehörde",
    },
    {
      name: "EU Blue Card (employed)",
      duration: "Linked to employment contract",
      cost: "€100+",
      requirements: "Recognised degree, salary threshold, approved job",
    },
    {
      name: "Opportunity Card (Chancenkarte)",
      duration: "Job-seeker / points-based entry",
      cost: "Fees per embassy tariff",
      requirements: "Qualifications, language, funds—check current points table",
    },
  ],
  cities: [
    {
      name: "Berlin",
      vibe: "Creative, still cheaper than Munich, 24h culture, huge English-speaking scene",
      avgRent: "$1,000–$1,800/month",
      coworkingSpaces: "Factory, Ahoy, St. Oberholz",
    },
    {
      name: "Munich",
      vibe: "Corporate HQ, Alps weekends, highest rents in Germany",
      avgRent: "$1,400–$2,400/month",
      coworkingSpaces: "Werk1, Design Offices, Mindspace",
    },
    {
      name: "Hamburg",
      vibe: "Harbour city, media, maritime startups, rainy but green",
      avgRent: "$1,000–$1,700/month",
      coworkingSpaces: "Mindspace, WeWork, super7000",
    },
  ],
  costBreakdown: {
    rent: "$900–$2,200/month (Berlin/Munich differ sharply)",
    food: "$320–$520/month",
    transport: "$40–$90/month (BahnCard / local tickets)",
    coworking: "$180–$350/month",
  },
  taxInfo:
    "Income tax is progressive; solidarity surcharge dynamics have shifted; church tax applies if registered with certain denominations. Freelancers prepay quarterly with ELSTER—hire a Steuerberater early. CHANCEN card holders must transition to work permits once employed.",
  communityTips:
    "Meetup.de, English-language comedy open mics in Berlin, Munich's Isar swimmers in summer, and weekly coworking days at Factory Berlin or Hamburg Mindspace.",
  bestFor: ["Infrastructure", "Career depth", "Central Europe travel", "Healthcare quality"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Germany offers several routes for remote-minded professionals, but none is a generic “digital nomad visa” with a single brand name. The Freiberufler / freelance residence permit under §21 AufenthG is the classic path for self-employed designers, developers, consultants, and journalists who can prove economic interest and local demand. Employed remote workers may use the EU Blue Card if salary and degree recognition align, or standard employment residence tied to a German contract.

Freelance visa (Freiberufler) in practice

You typically schedule an Ausländerbehörde appointment in your city after securing an address registration (Anmeldung). Bring a portfolio, two or more client letters of intent, revenue forecasts, CV, proof of relevant qualifications, health insurance valid for German residence, rental contract, bank statements, and biometrics fee. Berlin, Hamburg, and Munich interpret “freiberuflich” narrowly—some activities fall into Gewerbe (trade) instead and require a Gewerbeschein from the Ordnungsamt.

Opportunity Card (Chancenkarte)

Launched to attract skilled job seekers, the points-based Chancenkarte lets eligible candidates enter for limited job search. It is not a remote-work permit by itself—you must convert to employment or freelance status before informal work continues long term. Language points, qualifications, and prior Germany ties matter; check the latest BMI guidance.

Blue Card context

If you hold a recognised university degree and a German employment contract above the statutory salary threshold, the Blue Card offers a fast track to permanent residence. Purely remote foreign employers complicate the standard model—legal advice is essential.

Processing and fees

Expect €100+ for residence title issuance, plus notarised translations. Processing times swing from weeks to months depending on the Behörde backlog—Berlin remains notorious.

Renewal

Demonstrate ongoing income, tax compliance, and pension/health contributions as applicable. Switching from freelance to employment (or vice versa) triggers a permit amendment.

Common pitfalls

Arriving on a tourist visa and working before approval, mixing Gewerbe and freiberuflich categories, or presenting vague client letters. Insurance must be statutory-compatible—travel insurance rarely suffices for the residence permit.
`.trim(),

  bankingTips: `
Germany still loves bank transfers (Überweisung) and cash in bakeries—get a Girokonto early. Sparkasse, Deutsche Bank, Commerzbank, ING, DKB, and N26 compete for residents; online banks speed onboarding but may require video ID. Non-EU newcomers often need Anmeldung, passport, visa, and sometimes a salary slip—students and freelancers face extra scrutiny.

Wise and Revolut remain excellent for receiving foreign currency and converting to euros, but SCHUFA-relevant activities (Schufa credit score) usually flow through German accounts for apartment applications. Expect landlords to ask for three payslips and a Schufa record.

ATM fees: use your bank's partner networks; avoid Euronet ATMs with poor FX spreads. Girocard vs credit card acceptance differs—carry a debit Mastercard/Visa for supermarkets.

Tax: freelance bank accounts should separate business and personal flows to simplify Umsatzsteuer reporting. Interest income is taxable; crypto reporting tightened under EU rules—track everything.

SEPA instant payments arrive in seconds—use them for rent to prove punctuality to landlords who prize punctuality as much as the workplace does.
`.trim(),

  healthcareInfo: `
Germany combines statutory health insurance (GKV) with private options (PKV). Employees under certain salary thresholds must generally join GKV; freelancers can choose PKV if health-checked or opt into GKV via the Künstlersozialkasse or voluntary member routes—this is nuanced; use a broker.

GKV providers (TK, AOK, Barmer) charge roughly 14–15% of income with employer halves for employees; freelancers pay both halves subject to caps. Coverage includes children at no extra cost in many cases. Dental basics are covered; high-end orthodontics may not be.

Care quality is excellent; major cities have English-speaking GPs, but specialists may queue months for non-urgent issues. Emergency: dial 112 or visit ER; bring insurance card.

Telemedicine expanded post-pandemic—many insurers offer app-based prescriptions. Mental health therapy requires navigating Therapieplatz scarcity—start searching early if you anticipate need.

Switching from travel insurance to compliant cover before Anmeldung is critical—Ausländerbehörde staff compare policy PDFs line by line.
`.trim(),

  culturalTips: `
German work culture prizes punctuality, structure, and direct feedback—"this needs improvement" is informational, not personal. Meetings start on time; small talk is shorter than in southern Europe. Remote workers should still respect calendar precision—join calls with working links two minutes early.

Hierarchy exists in corporates but flatter in startups—use Sie until invited to du. Written follow-ups matter; WhatsApp is informal, email is official.

Winter darkness and grey skies challenge newcomers in Berlin and Hamburg—schedule daylight walks, gym sessions, and weekend trips to Baltic beaches or Alps. Christmas markets redeem December.

Recycling rules (Pfand bottles, paper separation) are serious neighbourly business—learn the Hausordnung. Sunday quiet laws mean no loud DIY—plan groceries Saturday night.

English proficiency is high in tech hubs, yet landlords, Behörde letters, and handymen may speak only German. B1 German unlocks life quality dramatically.

Social life clusters around Vereine (clubs), bouldering gyms, lake beaches in summer, and spontaneous Spätis in Berlin—say yes to park barbecues with caution on open-flame rules.
`.trim(),

  realMonthlyCost: `
Example month for a freelance remote worker in Berlin (Prenzlauer Berg–style flat share avoided—solo one-bed):

Rent (cold 45m², altbau): $1,350
Utilities + internet (warm extras vary): $220
Public transport BVG AB monthly: $68
Health insurance (freelance GKV ballpark): $780
Groceries (Rewe, Lidl, weekly market): $340
Eating out / bars twice weekly: $220
Coworking membership: $190
Liability insurance (Haftpflicht, strongly recommended): $6
Software, phone, streaming: $60
Miscellaneous (clothing, travel weekend): $180

Indicative total: about $3,414—note health insurance dominates; employees pay differently.

Munich adds roughly 30–40% on rent for comparable flats; Hamburg sits between Berlin and Munich. East German cities like Leipzig remain bargains but with smaller English-speaking job networks.
`.trim(),

  expatCommunities: [
    "Internations Berlin & Munich",
    "Berlin Tech Slack / Discord clusters",
    "Toytown Germany forums",
    "English-language stand-up and storytelling nights",
    "Munich International School parent networks (for families)",
    "Hamburg Expats Facebook",
    "r/germany and city subreddits",
    "Women Who Code Berlin",
  ],

  prosAndCons: {
    pros: [
      "World-class infrastructure and public transport",
      "Freelance visa pathway for genuine independents",
      "High English penetration in tech cities",
      "Central location for EU weekend travel",
      "Strong rule-of-law and healthcare",
      "Employer salaries competitive vs much of EU",
      "Diverse coworking and meetup scenes",
      "Opportunity Card adds entry flexibility for job seekers",
      "Childcare subsidies in many Länder",
      "Environmental consciousness and cycling investment",
    ],
    cons: [
      "Cold, dark winters in the north",
      "Bureaucracy-heavy residence permits",
      "Apartment hunt in Munich/Frankfurt is brutal",
      "German language needed for daily admin",
      "High total tax + social contributions",
      "Freelancer health insurance costs can shock newcomers",
      "Banking sceptical of non-EU without SCHUFA",
      "Sunday trading restrictions",
      "Some Ausländerbehörde offices overwhelmed",
      "GEZ broadcasting fee applies to households",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Berlin",
      neighbourhood: "Prenzlauer Berg",
      description:
        "Family-friendly, café dense, calmer than Neukölln parties—popular with expat parents. Rents mid-high; expect €1,200–€1,800 for decent one-beds.",
    },
    {
      city: "Berlin",
      neighbourhood: "Kreuzberg",
      description:
        "Grungy-creative, international food, late nights by Görlitzer Park. Noise and Airbnb friction exist—rents wide, often €900–€1,500.",
    },
    {
      city: "Munich",
      neighbourhood: "Schwabing",
      description:
        "Leafy, university energy, English-friendly services, close to English Garden. Premium rents—€1,500–€2,200 for one-bed.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely on a tourist visa?",
      answer:
        "No—working remotely while on Schengen tourism violates visa conditions. Secure an appropriate residence title (freelance, employment, or Chancenkarte pathway) before establishing Germany as your work base.",
    },
    {
      question: "What is the Chancenkarte?",
      answer:
        "A points-based card allowing qualified job seekers to enter Germany for limited search periods. It is not a self-employed remote work permit—you must meet conversion criteria once inside.",
    },
    {
      question: "Berlin vs Munich for remote workers?",
      answer:
        "Berlin offers lower rent (relatively), nightlife, and English-speaking density. Munich offers higher salaries, proximity to Alps, but punishing housing costs and more conservative pace.",
    },
    {
      question: "Do freelancers pay VAT (Umsatzsteuer)?",
      answer:
        "If you exceed small business thresholds or opt into VAT charging, yes—ELSTER filings become quarterly. A Steuerberater helps you navigate Kleinunternehmer rules.",
    },
    {
      question: "Is German healthcare good?",
      answer:
        "Yes—outcomes rank among the world's best. The complexity is insurance class choice for freelancers and wait times for specialists—plan ahead.",
    },
    {
      question: "How important is German really?",
      answer:
        "In Berlin/Hamburg tech scenes you can survive English-only initially, but Behörde, banking, and housing push you toward B1 quickly—invest in classes early.",
    },
  ],

  updated: "April 2026",
  wordCount: 2720,
};
