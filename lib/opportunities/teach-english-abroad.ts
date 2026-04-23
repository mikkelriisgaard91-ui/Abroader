import type { OpportunityLanding } from "./types";

export const TEACH_ENGLISH_ABROAD: OpportunityLanding = {
  slug: "teach-english-abroad",
  metaTitle: "Teach English abroad: TEFL jobs, salaries & where to start | Abroader",
  metaDescription:
    "Compare TEFL certifications, government programmes, and job boards for teaching English abroad. Salary data for South Korea, Japan, Vietnam, Spain and Thailand in one place.",
  heroTitle: "Teach English abroad",
  heroSubtitle:
    "One of the most proven ways to live and work internationally — competitive salaries, structured programmes, and demand that spans every continent. Here is how to navigate the path from certification to first contract.",
  heroImage:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Bright classroom with students and a teacher at a whiteboard",
  category: "Work Abroad",
  stats: [
    { value: "8", label: "providers compared" },
    { value: "5", label: "key destinations" },
    { value: "TEFL / CELTA", label: "most recognised certs" },
    { value: "1-year", label: "standard contracts" },
  ],

  introHeading: "Why teaching English abroad is still one of the strongest routes overseas",
  introParagraphs: [
    "Teaching English as a foreign language remains one of the most reliable and well-paid ways to live abroad — not because it is glamorous, but because the fundamentals are solid: genuine demand from governments and private schools, structured hiring processes, and in several markets, packages that include free housing, return flights, and health insurance on top of a monthly salary. South Korea and Japan in particular offer conditions that are competitive with entry-level graduate jobs in Western countries.",
    "The TEFL market has matured significantly. A decade ago, many schools would hire anyone with a passport and a pulse. Today, most reputable employers — and all government programmes — require at minimum a 120-hour TEFL certificate and, for Asia and the Middle East, a bachelor's degree in any subject. The good news is that neither barrier is particularly high, and the infrastructure for getting certified and placed has never been better.",
    "This page maps the landscape: which certifications open the most doors, which destinations pay the most and include the most, how government programmes differ from private school routes, and which job boards are worth your time. The goal is to give you enough to make a real decision — country, route, and timeline — rather than sending you into an overwhelming search.",
  ],

  howItWorks: [
    {
      step: 1,
      title: "Get your TEFL certification",
      body: "A minimum 120-hour TEFL certificate is required by most Asian employers and all government programmes. CELTA (Cambridge) is the gold standard for Europe and premium international schools, but costs more and is more intensive. For first-time teachers targeting Asia, an ITA or TEFL Academy Level 3 or 5 course is the pragmatic route.",
    },
    {
      step: 2,
      title: "Check country-specific eligibility rules",
      body: "South Korea (EPIK) and Japan (JET) require a bachelor's degree in any subject and a clean background check. Spain is more flexible — a degree is helpful but not always mandatory. Vietnam and Thailand have fewer formal barriers. Know your country's requirements before you choose your certification provider.",
    },
    {
      step: 3,
      title: "Choose your route: government programme or private school",
      body: "Government programmes (EPIK in Korea, JET in Japan) offer higher security, civil-servant-level employment conditions, and strong support networks — but have fixed annual intake windows and a more competitive application process. Private schools and language centres hire year-round, often faster, with more flexibility on location and start date.",
    },
    {
      step: 4,
      title: "Apply: timing is everything",
      body: "Government programmes recruit once or twice per year with fixed deadlines (EPIK: Feb and Aug intakes; JET: applications open Oct for a Jul start). Private school roles are year-round. Specialist job boards like TEFL.com update daily — set up alerts for your target country and check regularly.",
    },
    {
      step: 5,
      title: "Understand your full package before signing",
      body: "Headline salary is only part of the picture. Free housing, return flights, severance pay (common in South Korea), health insurance, and pension contributions can add thousands to your effective annual compensation. Compare full packages across offers, not just monthly take-home pay.",
    },
  ],

  whyProviders:
    "The providers on this page do fundamentally different things: some certify you, some place you directly into a job, some run the government programme that employs you, and some are job boards where you find your own role. Most teachers use two or three in combination — a cert provider first, then a job board or direct programme application. We have grouped them by function so you can see clearly which one you need at each stage of the process.",

  providerGroups: [
    {
      heading: "Get certified — TEFL qualification providers",
      intro:
        "Your certification is the first gate. Most serious employers require at minimum a 120-hour accredited TEFL or TESOL certificate; premium international schools and European roles may require a Level 5 diploma or a CELTA. The providers below are among the most respected and widely recognised.",
      providers: [
        {
          name: "International TEFL Academy (ITA)",
          description:
            "One of the most recognised TEFL providers globally, with 50,000+ alumni placed in over 80 countries. ITA courses are accredited and include guaranteed job placement assistance across Thailand, South Korea, Vietnam, Japan, Cambodia, and Costa Rica. The lifetime job search support — access to advisors beyond your initial placement — is a genuine differentiator if you plan to teach long-term.",
          tags: [
            "Accredited",
            "Guaranteed placement support",
            "80+ countries",
            "50,000+ alumni",
            "Lifetime guidance",
          ],
          href: "https://www.internationalteflacademy.com",
          category: "training-placement",
          useWhen:
            "You want an accredited certification combined with active job placement support, especially for Asia-Pacific destinations.",
        },
        {
          name: "The TEFL Academy",
          description:
            "The world's first dual US and UK government-recognised TEFL provider, and winner of the Go Overseas Top TEFL Award for seven consecutive years. Offers Level 3 and Level 5 diplomas, with a live jobs board built into the graduate platform. Strong for candidates targeting Europe and those who want government recognition on their CV.",
          tags: [
            "Dual US & UK government recognised",
            "Level 3 & Level 5",
            "Live jobs board",
            "Go Overseas award",
          ],
          href: "https://www.theteflacademy.com",
          category: "certification-body",
          useWhen:
            "You want the most formally recognised TEFL credential, or are targeting European roles where government recognition on the certificate carries weight.",
        },
        {
          name: "Teach Away",
          description:
            "TEFL certification developed in partnership with OISE, University of Toronto — giving it a credible academic anchor. Teach Away also runs a well-curated job board focused on reputable international school placements rather than the full range of language centres. Particularly strong for North American applicants and anyone targeting curriculum-based international school positions.",
          tags: [
            "University of Toronto backed",
            "International schools focus",
            "Job board included",
            "Strong for North Americans",
          ],
          href: "https://www.teachaway.com",
          category: "training-placement",
          useWhen:
            "You are a North American applicant or specifically targeting international school placements rather than language centres.",
        },
        {
          name: "TEFL Iberia (Spain)",
          description:
            "A Barcelona-based TEFL school offering a 160-hour in-person certification with guaranteed job placement across Spain. One of the most respected in-person programmes in Europe, with a track record of placing teachers directly into Spanish schools and language academies. The in-person format is genuinely superior for building actual teaching confidence before your first class.",
          tags: [
            "Spain specialist",
            "160-hour in-person",
            "Job guarantee",
            "Barcelona",
          ],
          href: "https://tefl-iberia.com",
          category: "training-placement",
          useWhen:
            "Spain is your specific target destination and you want an in-person certification with a job guarantee built in.",
        },
      ],
    },
    {
      heading: "Apply to a government programme",
      intro:
        "Government teaching programmes are a fundamentally different category. You are not going through an agency — you are applying directly to a national government scheme, which means employment conditions, legal protections, and support infrastructure that private school roles rarely match. The trade-off is fixed intake dates and a more involved application process.",
      providers: [
        {
          name: "EPIK — English Programme in Korea",
          description:
            "South Korea's government-run teaching scheme places native English speakers in public schools nationwide. It is consistently rated one of the best-paid and best-supported TEFL routes in the world: salary of $1,600–$2,200 per month, free furnished apartment, return flights, health insurance, and a severance bonus equivalent to one month's pay at the end of your contract. Requirements: bachelor's degree in any field, clean criminal record, and a TEFL certificate (some exemptions apply for native speakers with an education degree). Two annual intakes: February and August.",
          tags: [
            "South Korea",
            "Government programme",
            "Free housing",
            "Return flights included",
            "Health insurance",
            "Severance pay",
            "Feb & Aug intakes",
          ],
          href: "https://www.epik.go.kr",
          category: "government-programme",
          useWhen:
            "South Korea is your top choice and you want the security of a government employer, free housing, and a comprehensive benefits package.",
        },
      ],
    },
    {
      heading: "Find open positions — job boards and directories",
      intro:
        "Once you are certified, these platforms are where roles live. TEFL.com is the broadest daily-updated board; Go Overseas is better for researching and comparing programmes before you decide where to apply.",
      providers: [
        {
          name: "TEFL.com",
          description:
            "The world's largest dedicated TEFL job board, with hundreds of roles across Asia, Europe, and the Middle East updated daily. Free to browse and search without an account. The sheer volume is its main strength — it captures the full market including roles that never appear on agency sites. Set up email alerts for your target country and check weekly.",
          tags: [
            "Largest TEFL job board",
            "Updated daily",
            "Free to browse",
            "Asia · Europe · Middle East",
          ],
          href: "https://www.tefl.com",
          category: "job-board",
          useWhen:
            "You are certified and ready to search for open roles — you want maximum market coverage in your target region.",
        },
        {
          name: "Go Overseas — Teach Abroad",
          description:
            "A comprehensive directory of vetted TEFL and teaching programmes with over 46,000 verified reviews from real participants. More useful for research than active job hunting — excellent for comparing salary ranges, programme quality, and country conditions side by side before you commit to a destination.",
          tags: [
            "46,000+ verified reviews",
            "Programme comparison",
            "Salary research",
            "Global",
          ],
          href: "https://www.gooverseas.com/teach-abroad",
          category: "job-board",
          useWhen:
            "You are still deciding between destinations or programmes and want real participant reviews to inform your choice.",
        },
      ],
    },
    {
      heading: "Browse on Abroader",
      intro:
        "Abroader's language jobs board aggregates TEFL and bilingual teaching roles filtered by region, school type, and language. A useful supplement to specialist boards, particularly for roles at the intersection of language teaching and other skills.",
      providers: [
        {
          name: "Abroader — Language Jobs",
          description:
            "Browse TEFL and language teaching roles listed on Abroader, filtered by region, language, and school type. Covers a range from conversation tutoring to full TEFL placements. Good as a secondary browse alongside TEFL.com, and the best place to find roles in regions or school types underrepresented on specialist boards.",
          tags: ["Abroader listed", "Language jobs", "Live roles", "Multiple regions"],
          href: "/language-jobs",
          category: "aggregator",
          useWhen:
            "You want to browse TEFL and language roles in one place alongside other international job types, or find roles outside the mainstream Asia-heavy boards.",
        },
      ],
    },
  ],

  salaryHighlights: [
    {
      country: "South Korea",
      flag: "🇰🇷",
      salaryRange: "$1,600–$2,200",
      salaryLabel: "per month",
      includes: ["Free furnished housing", "Return flights", "Health insurance", "Severance pay"],
      badge: "Best overall package",
    },
    {
      country: "Japan (JET)",
      flag: "🇯🇵",
      salaryRange: "$2,200–$3,800",
      salaryLabel: "per month",
      includes: ["Housing subsidy", "Health insurance", "Strong support network"],
      badge: "Highest headline salary",
    },
    {
      country: "Vietnam",
      flag: "🇻🇳",
      salaryRange: "$1,500–$2,500",
      salaryLabel: "per month",
      includes: ["Housing allowance common", "Low cost of living", "Year-round hiring"],
    },
    {
      country: "Spain",
      flag: "🇪🇸",
      salaryRange: "€1,000–€1,400",
      salaryLabel: "per month",
      includes: ["EU base", "Rich social life", "Lifestyle quality"],
      badge: "Best lifestyle",
    },
    {
      country: "Thailand",
      flag: "🇹🇭",
      salaryRange: "$1,200–$2,000",
      salaryLabel: "per month",
      includes: ["Low cost of living", "Year-round warmth", "Easy entry point"],
      badge: "Easiest entry",
    },
  ],

  regionsHeading: "Where to teach English abroad",
  regionsIntro:
    "Each destination has a different hiring structure, salary level, cultural experience, and set of eligibility requirements. Here is an honest overview of the five strongest markets.",

  regions: [
    {
      slug: "south-korea",
      name: "South Korea",
      label: "South Korea",
      image:
        "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Seoul city skyline at dusk with illuminated tower",
      season: "Annual intake: Feb & Aug",
      body: "South Korea is the most popular destination for first-time TEFL teachers from English-speaking countries, and for good reason: the EPIK government programme offers free housing, return flights, health insurance, and a severance bonus on top of a solid monthly salary. The public school system is organised and supportive; you will typically have a Korean co-teacher in the classroom. Outside EPIK, private language academies (hagwons) hire year-round at similar or higher salaries, though working conditions and management quality vary significantly — research specific schools carefully before accepting a hagwon offer. Seoul, Busan, and the countryside each offer a very different quality of life.",
      relatedHref: "/guides",
      relatedLabel: "Read the country guides",
    },
    {
      slug: "japan",
      name: "Japan",
      label: "Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Tokyo street at night with lanterns and neon signs",
      season: "Annual intake: Jul (JET programme)",
    body:
        "Japan offers the highest headline salaries in the government programme category through JET (Japan Exchange and Teaching Programme), which places participants in public schools across the country including rural placements that offer an unusually deep cultural immersion. JET requires a bachelor's degree and is competitive — around 3,500–4,000 positions are filled annually from a large applicant pool. Applications open in October for a July start. Outside JET, companies like Interac and AEON recruit year-round for assistant language teacher roles at slightly lower salary points but with less competition. The cost of living in Japan is higher than Korea or Southeast Asia, but the cultural and professional experience is often described as transformative.",
    },
    {
      slug: "vietnam",
      name: "Vietnam",
      label: "Vietnam",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Hoi An ancient town at night with lanterns over the river",
      season: "Year-round hiring",
      body: "Vietnam is one of the fastest-growing TEFL markets globally, driven by a large, motivated student population and a rapidly expanding network of private English centres. Ho Chi Minh City and Hanoi are the largest markets with the most openings; Da Nang has a growing scene with a noticeably better quality of life. Entry barriers are lower than Korea or Japan — a degree is not always required at smaller centres — making Vietnam a practical first posting for teachers who are building their CV. Salaries are solid and the cost of living is low enough that saving a meaningful amount each month is realistic. Housing allowances are common in job packages.",
      relatedHref: "/language-jobs",
      relatedLabel: "Browse language jobs",
    },
    {
      slug: "spain",
      name: "Spain",
      label: "Spain",
      image:
        "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Colourful Barcelona street with balconies and warm light",
      season: "Starts: Sep · occasional mid-year",
      body: "Spain is the main European destination for English teachers, driven by sustained demand from businesses, private language academies, and a government language assistant programme (the Auxiliares de Conversación scheme). Salaries are lower than Asia in absolute terms, but Spain's appeal is the quality of life: excellent food, climate, social culture, and relative ease of travel across Europe. EU citizens have the simplest path; non-EU nationals need to research visa options carefully. Many teachers in Spain fund their lifestyle through a combination of part-time academy work and private tutoring, which together can cover a comfortable living. TEFL Iberia's in-person Barcelona course is specifically designed for the Spanish market with job placement included.",
    },
    {
      slug: "thailand",
      name: "Thailand",
      label: "Thailand",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Thai temple at sunrise surrounded by tropical greenery",
      season: "Year-round with peaks in May & Oct",
      body: "Thailand has been an entry point for TEFL teachers for decades — the combination of low cost of living, warm climate, and relatively accessible hiring makes it one of the easiest places to get your first classroom experience. Bangkok, Chiang Mai, and coastal areas all have schools recruiting. Salaries are lower than Korea or Japan, and housing is typically not included in the package (you arrange your own accommodation from your salary, which is manageable given local costs). Thai work permit and visa requirements for teachers have become more consistently enforced in recent years — confirm your employer is going through proper channels before you sign. The experience is rich even at the entry level.",
    },
  ],

  faqHeading: "Common questions about teaching English abroad",
  faqIntro:
    "Straight answers to the questions that come up most often when people are researching this path.",
  faqs: [
    {
      question: "Do I need a degree to teach English abroad?",
      answer:
        "It depends entirely on the destination. South Korea (EPIK), Japan (JET), and most Middle Eastern countries require a bachelor's degree in any subject. Vietnam, Thailand, and Spain are more flexible — some employers will hire without a degree, particularly at smaller language centres. If you do not hold a degree, Vietnam or Thailand are the most realistic first postings; if you have one, you have access to the full market.",
    },
    {
      question: "What is the difference between TEFL and CELTA?",
      answer:
        "TEFL (Teaching English as a Foreign Language) is a broad category of qualification, ranging from basic 40-hour online courses to accredited 120-hour or Level 5 diplomas. CELTA (Certificate in English Language Teaching to Adults) is a specific qualification from Cambridge Assessment English, widely regarded as the gold standard — particularly for premium international schools and universities. CELTA is more intensive, more expensive, and requires in-person training. For most first postings in Asia, a well-regarded 120-hour TEFL from ITA or The TEFL Academy is sufficient. If you are targeting high-end international schools or Europe, CELTA or a Level 5 TEFL diploma is worth the investment.",
    },
    {
      question: "Can non-native English speakers teach English abroad?",
      answer:
        "Yes, though the market is more restricted. Many government programmes (EPIK, JET) require applicants to hold a passport from a list of native English-speaking countries (UK, USA, Canada, Australia, New Zealand, Ireland, South Africa). Private schools and international schools are increasingly open to highly proficient non-native speakers, particularly those with a teaching degree or advanced CELTA. Europe is generally the most accessible region for non-native speakers.",
    },
    {
      question: "Which destination pays the most?",
      answer:
        "Japan's JET programme offers the highest headline monthly salary ($2,200–$3,800), though cost of living in Japan is higher than Korea or Southeast Asia. South Korea offers the best overall package when total compensation is factored in: salary plus free housing, return flights, health insurance, and a severance bonus make it the highest net earner for most people. Vietnam and Thailand pay less in absolute terms but cost of living is low enough that savings rates can be comparable.",
    },
    {
      question: "How long are teaching contracts abroad?",
      answer:
        "Most positions are one-year contracts, renewable. Government programmes (EPIK, JET) offer one year with the option to renew for up to several additional years depending on performance and availability. Private school contracts vary — some are 10–12 months, others are rolling. Summer-only or semester contracts exist at international schools and summer camps but are less common for standard TEFL roles.",
    },
    {
      question: "Does Abroader employ English teachers directly?",
      answer:
        "No. Abroader is a discovery and comparison platform. We curate certification providers, government programmes, job boards, and placement agencies so you can find the right route for your situation. All applications, enrolments, and contracts go through the individual providers listed on this page.",
    },
  ],

  disclaimer:
    "Salary figures are editorial estimates based on publicly available programme data and should be used for comparison purposes only — actual pay depends on qualifications, experience, school type, and location within a country. Visa and work permit requirements change frequently; always verify current rules with the relevant embassy or official programme before signing a contract.",
};
