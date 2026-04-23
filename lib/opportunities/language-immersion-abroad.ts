import type { OpportunityLanding } from "./types";

export const LANGUAGE_IMMERSION_ABROAD: OpportunityLanding = {
  slug: "language-immersion-abroad",
  metaTitle: "Language immersion abroad: schools, destinations & how to choose | Abroader",
  metaDescription:
    "Everything you need to plan a language immersion course abroad — from choosing the right school and destination to homestays, official exams, and how fast you'll actually improve.",
  heroTitle: "Language immersion abroad",
  heroSubtitle:
    "Living inside a language — surrounded by it at mealtimes, on the bus, in every conversation — accelerates learning faster than years of evening classes. Here is how to choose the right school, the right destination, and the right level of immersion for your goal.",
  heroImage:
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Students gathered around a table in a sunny Spanish courtyard, notebooks open, mid-conversation",
  category: "Skillcation",
  stats: [
    { value: "6–8 hrs", label: "daily immersion (homestay)" },
    { value: "2–52 wks", label: "typical programme length" },
    { value: "DELE · DALF · JLPT", label: "internationally recognised exams" },
    { value: "500+", label: "accredited schools worldwide" },
  ],

  introHeading: "Why immersion works — and what classes alone cannot do",
  introParagraphs: [
    "A language is not a subject. It is a behaviour — and behaviours are learned by doing them constantly, not by studying them twice a week. The research on immersion is consistent: people who move into a language environment make more progress in four weeks than in a year of classroom study back home. That is not an argument against studying at home. It is an argument for going abroad once you have done enough groundwork to benefit from the experience.",
    "The mechanism is simple. In a homestay or language school abroad, you are required to communicate in the target language to meet basic needs — ordering food, asking for directions, understanding your host family's questions at breakfast. That low-level constant demand on your brain is exactly what forces the language to become automatic rather than deliberate. You stop translating and start thinking in it. For most people, that shift happens somewhere between week two and week four of genuine daily immersion.",
    "What you will actually be able to do after a good immersion course depends on where you started and how long you went. After two weeks of intensive study combined with homestay, a beginner typically reaches a genuine A2 level — able to handle simple transactions and have basic conversations. After a month, many reach B1 — functional independence in everyday situations. After a semester, B2 is realistic — the level where you can study or work in the language. These are not small achievements. They are life-changing ones.",
  ],

  howItWorksHeading: "How to choose and book the right language immersion course",
  howItWorks: [
    {
      step: 1,
      title: "Set a concrete goal — not just 'improve my Spanish'",
      body: "The goal determines everything else: which destination, which school type, which length of stay, and whether you need an official exam. 'Survive a work trip to Mexico City' requires two weeks of business Spanish in Mexico. 'Pass DELF B2 to teach in France' requires a structured exam-prep programme in France with an accredited school. 'Fall in love with Japanese culture and learn to get around' requires a different programme entirely. Be specific before you search.",
    },
    {
      step: 2,
      title: "Choose the destination for the dialect and the lifestyle",
      body: "For Spanish, Spain and Latin America both work — but the accents, vocabulary, and cultural contexts are genuinely different, and so are the schools. For French, Paris is romantic but Montpellier and Lyon have stronger school infrastructure and are cheaper. For Japanese, Tokyo has the widest school choice; Fukuoka and Kyoto offer a different cultural texture. The destination matters for how enjoyable the experience is — and enjoyment drives motivation.",
    },
    {
      step: 3,
      title: "Decide on accommodation type — homestay, student residence, or independent",
      body: "Homestay is the gold standard for immersion: you are forced to use the language outside school hours, your host can correct you informally, and you experience the culture from the inside. Student residences give you more independence and a strong social peer group. Independent apartments give you comfort and privacy but reduce immersion hours. If your goal is speed of acquisition, choose homestay. If you need recovery time and personal space, factor that into the decision.",
    },
    {
      step: 4,
      title: "Check the school's accreditation and class sizes",
      body: "Accreditation varies by language: Cervantes Institute approval for Spanish schools, Ministry of Education approval in Japan, EAQUALS membership in Europe. These signal that the school meets a teaching standard. Class size matters enormously — schools that cap at eight to ten students per class produce better results than those running fifteen to twenty. Ask directly before you book. And read independent reviews on Go Overseas or language learning forums, not just the school's own testimonials.",
    },
    {
      step: 5,
      title: "Prepare before you arrive — even two weeks of prep makes a measurable difference",
      body: "Arriving with zero foundation is legal but wasteful. Two weeks of Duolingo or freeCodeCamp-equivalent (Anki for vocabulary, Pimsleur for basic pronunciation) before you leave means your brain already has scaffolding to attach new information to. Ask the school for a placement test and honest level-setting — being placed one level below your actual ability is frustrating; one level above is overwhelming. The sweet spot is challenging but comprehensible.",
    },
  ],

  whyProviders:
    "Language immersion providers split into three types: specialist language school chains with their own accredited campuses, official cultural institutes backed by national governments, and aggregator platforms that let you compare schools across countries and read independent reviews. Use all three in combination — aggregators for the overview, school chains for established infrastructure, official institutes if your goal is an officially recognised certification.",

  providerGroups: [
    {
      heading: "Specialist language school networks",
      intro:
        "These organisations run their own accredited campuses across multiple countries, with consistent teaching standards, official exam preparation, and accommodation coordination. The right choice when you want a structured, organised programme with clear progression.",
      providers: [
        {
          name: "Don Quijote (DQ Languages)",
          description:
            "One of the largest Spanish language school networks in the world, with campuses in Barcelona, Madrid, Salamanca, Seville, Granada, and across Latin America. Offers general Spanish, business Spanish, DELE exam preparation, and combined programmes that include cultural activities and excursions. Homestay and student residence accommodation available through the school. DELE exam preparation is particularly strong — the school is an official exam centre. Best for committed Spanish learners who want structure and a recognised pathway.",
          tags: ["Spanish", "DELE exam prep", "Spain + Latin America", "Homestay", "Accredited"],
          href: "https://www.donquijote.org",
          category: "training-placement",
          useWhen:
            "You are learning Spanish and want an established, accredited school with exam prep support and accommodation coordination in Spain or Latin America.",
        },
        {
          name: "Alliance Française",
          description:
            "The French government's global network for French language and cultural education, with flagship institutes in Paris, Lyon, Montpellier, and Bordeaux and affiliates in over 130 countries. Offers DALF and DELF exam preparation alongside cultural immersion programmes, conversation classes, and intensive courses. The DALF C1/C2 certification is accepted for university admission in France and is recognised in professional contexts internationally. Best for learners who want an official, government-backed French learning experience.",
          tags: ["French", "DELF · DALF exams", "Paris · Lyon · Montpellier", "Government-backed", "Cultural immersion"],
          href: "https://www.alliancefr.org",
          category: "certification-body",
          useWhen:
            "You are learning French and want an official, government-accredited programme with clear exam pathways recognised for university or work in France.",
        },
        {
          name: "GenkiJACS — Japanese Language School",
          description:
            "Consistently one of the most highly reviewed Japanese language schools for international students, with campuses in Fukuoka, Tokyo, and Kyoto. Small class sizes (maximum eight students) are a defining feature — the level of personalised attention is noticeably higher than larger schools. Offers JLPT exam preparation, cultural activity programmes, and guided conversation practice outside the classroom. Fukuoka is recommended for first-time Japan visitors: smaller, cheaper than Tokyo, friendlier pace, and easier to navigate as a beginner. Best for people who are serious about Japanese and value genuine teaching quality over brand recognition.",
          tags: ["Japanese", "JLPT prep", "Fukuoka · Tokyo · Kyoto", "Max 8 students", "Highly rated"],
          href: "https://www.genkijacs.com",
          category: "training-placement",
          useWhen:
            "You are learning Japanese and want small class sizes, structured JLPT preparation, and a school with a strong independent reputation for teaching quality.",
        },
        {
          name: "EF International Language Campuses",
          description:
            "A large-scale language travel operator with campuses across Europe, North America, and Asia. EF programmes bundle language classes with accommodation and social activities in a campus-style environment, making them popular with younger learners (16–25) who want the social dimension as much as the linguistic one. Teaching quality is consistent rather than exceptional. Best for people who want an easy, organised experience rather than the most intensive linguistic immersion — and for families booking for younger learners who benefit from a structured social environment.",
          tags: ["Multi-language", "Multi-country", "Campus style", "Young learner friendly", "All-inclusive"],
          href: "https://www.ef.com/wwen/language-courses/",
          category: "aggregator",
          useWhen:
            "You want a fully organised, all-inclusive language programme — especially for a younger learner or someone who wants the social campus experience alongside the classes.",
        },
      ],
    },
    {
      heading: "Find and compare schools independently",
      intro:
        "These platforms aggregate hundreds of language schools across countries, letting you filter by language, destination, duration, and budget — and critically, read verified independent student reviews. Use these to build your shortlist before contacting schools directly.",
      providers: [
        {
          name: "Go Overseas — Language Study Abroad",
          description:
            "One of the most comprehensive review platforms for language immersion programmes worldwide. Students rate schools on teaching quality, accommodation, value, and social life — giving you the unfiltered picture that school websites cannot provide. Particularly useful for comparing smaller, independent schools in Japan, Latin America, and Southeast Asia that don't have large marketing budgets but get excellent reviews. Search by language, destination, duration, and budget.",
          tags: ["Verified reviews", "Compare schools", "All languages", "All destinations", "Independent"],
          href: "https://www.gooverseas.com/language-programs",
          category: "aggregator",
          useWhen:
            "You want independent student reviews and comparisons across multiple schools and destinations before committing to a programme.",
        },
        {
          name: "Language International",
          description:
            "A school-comparison and booking platform covering over 6,000 language courses in 80+ countries. Strong for Spanish in Latin America, French in Canada and France, and English for non-native speakers. Includes live pricing, school profiles with accreditation details, and a direct booking system. The verified review system is thorough — look for recent reviews (within 12 months) for the most accurate picture of current teaching quality.",
          tags: ["6,000+ courses", "80+ countries", "Live pricing", "Direct booking", "Verified reviews"],
          href: "https://www.languageinternational.com",
          category: "aggregator",
          useWhen:
            "You want to compare and book directly across a wide range of schools and languages in one place, with live pricing and accreditation details.",
        },
      ],
    },
  ],

  salaryHighlightsHeading: "Which intensity level suits your goal?",
  salaryHighlightsIntro:
    "Language immersion programmes range from a long weekend to a full academic year. The right length depends on your starting level, your goal, and your available time. These are realistic benchmarks — not marketing claims.",
  salaryHighlights: [
    {
      country: "Weekend / 1-week crash course",
      flag: "🌱",
      salaryRange: "£300 – £900",
      salaryLabel: "total (school fees + basic accommodation)",
      includes: [
        "15–25 hours of classes",
        "Survival vocabulary for a specific trip or scenario",
        "Good for travel prep or refreshing dormant knowledge",
        "No formal certification output",
      ],
      badge: "Best for trip prep",
    },
    {
      country: "2-week intensive",
      flag: "📚",
      salaryRange: "£800 – £2,200",
      salaryLabel: "total (school + homestay accommodation)",
      includes: [
        "40–50 hours of structured classes",
        "Genuine A1→A2 or A2→B1 progression possible",
        "Homestay recommended at this length",
        "Most popular first immersion length",
      ],
      badge: "Most popular",
    },
    {
      country: "Month-long immersion",
      flag: "🎯",
      salaryRange: "£1,800 – £4,500",
      salaryLabel: "total (school + homestay + living costs)",
      includes: [
        "80–100 hours of classes",
        "B1 functional independence realistic from A2 start",
        "Long enough for the 'thinking in the language' shift",
        "Exam prep possible at this length",
      ],
      badge: "Best value for genuine fluency gains",
    },
    {
      country: "Semester programme",
      flag: "🏆",
      salaryRange: "£4,000 – £12,000",
      salaryLabel: "total (school + living costs + activities)",
      includes: [
        "Full academic semester (12–24 weeks)",
        "B2 or C1 output realistic from B1 start",
        "Sufficient for university admission or professional use",
        "DELE / DALF / JLPT exam prep integrated",
      ],
      badge: "For serious fluency goals",
    },
  ],

  roleTypesHeading: "Which learning track matches your goal?",
  roleTypesIntro:
    "Not everyone learning a language abroad has the same goal. The track you choose determines which school type to target, how long to stay, and which accommodation model will serve you best.",
  roleTypes: [
    {
      icon: "🗣️",
      title: "Survival Conversationalist",
      level: "Entry level",
      keyCerts: ["No exam required", "A1–A2 CEFR range"],
      salaryRange: "1–3 weeks / £400–£1,200",
      description:
        "You want to get around, order food, ask for directions, and have basic exchanges with local people on an upcoming trip or relocation. You are not aiming for fluency — you want enough language to break the tourist bubble. A one-to-three week general course with homestay accommodation is exactly right for this goal. Prioritise a school with good out-of-class activities and a social programme over one with the most rigorous academic reputation.",
    },
    {
      icon: "💼",
      title: "Professional Fluency",
      level: "Mid level",
      keyCerts: ["B2–C1 CEFR target", "Business language modules", "DELE / DALF / JLPT recognised"],
      salaryRange: "4–12 weeks / £2,000–£7,000",
      description:
        "You need the language for work — meetings, presentations, written communications, or client relationships. You are aiming for B2 minimum and ideally C1. Choose a school with a business language track, confirm the teacher has professional or commercial experience rather than purely academic credentials, and plan for a minimum of four weeks. Exam certification (DALF B2/C1 for French, DELE B2 for Spanish) is worth pursuing at this level as it provides objective evidence of competency for employers.",
    },
    {
      icon: "🏠",
      title: "Cultural Integration",
      level: "Entry-mid level",
      keyCerts: ["B1–B2 CEFR target", "Cultural programme component"],
      salaryRange: "2–8 weeks / £1,200–£5,000",
      description:
        "You are moving to a country, or spending a significant period there, and you want to genuinely belong rather than exist in an expat bubble. Language is one part — understanding social norms, humour, media, and the unwritten rules of daily life is the other. Choose a programme that bundles cultural activities, local excursions, and conversation exchange alongside classes. Homestay is strongly recommended for this goal. The school's connections to local community events and cultural organisations matters as much as its academic reputation.",
    },
    {
      icon: "🎓",
      title: "Official Exam Candidate",
      level: "Mid-senior level",
      keyCerts: ["DELE (Spanish)", "DALF/DELF (French)", "JLPT (Japanese)", "CELPE-Bras (Portuguese)"],
      salaryRange: "4–16 weeks / £2,500–£10,000",
      description:
        "You need a specific, officially recognised certification — for university admission, professional licensing, immigration, or a formal qualification requirement. The exam determines everything: the school must be an official preparation centre or exam venue for your target certification, the course must be structured around the exam format, and you need a realistic timeline. Do not book until you have confirmed with the school which exam sittings they run, when the next sitting is, and what pass rate they achieve.",
    },
  ],

  regionsHeading: "Best destinations for language immersion",
  regionsIntro:
    "The right destination depends on the language you are learning, the dialect you need, and the lifestyle you want around the studying. Each destination below has a genuine character — they are not interchangeable.",

  regions: [
    {
      slug: "spain-immersion",
      name: "Spain",
      label: "Spain",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Seville cathedral and Giralda tower at sunset with orange tree courtyard in foreground",
      season: "Year-round; best Sep–Jun (avoid mid-August heat)",
      body: "Spain is the heartland of Spanish immersion, and for most learners it is the default choice — and rightly so. Salamanca is the university city where the Spanish Academy was founded and is widely considered the clearest Castilian accent in the country. Seville is warmer, more sociable, and culturally vivid — particularly good if you want flamenco and tapas culture alongside the studying. Barcelona offers the widest range of schools and activities, but Catalan influence means you hear Castilian less on the street. Granada and San Sebastián are excellent for smaller, more personal programmes. For DELE exam preparation, almost all major schools in Spain are approved exam centres — confirm which sitting dates they run before booking.",
    },
    {
      slug: "france-immersion",
      name: "France",
      label: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Paris rooftops and Seine river from above at golden hour",
      season: "Year-round; best Sep–Jun for serious study (July is tourist season)",
      body: "France remains the benchmark for French immersion, and the range of school quality at the top end is exceptional. Paris has the most schools and the greatest cultural pull, but it is the most expensive and the Parisian attitude to non-fluent French is notoriously unforgiving — which some learners find motivating and others find demoralising. Montpellier, Lyon, and Bordeaux have strong Alliance Française and DELF/DALF exam infrastructure with lower costs and a more welcoming pace. The south of France — Nice, Aix-en-Provence — offers extraordinary living quality around the study. For DALF C1/C2 (required for many French university programmes), Alliance Française is the authoritative choice.",
    },
    {
      slug: "japan-immersion",
      name: "Japan",
      label: "Japan",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Traditional Japanese street in Kyoto with cherry blossoms and wooden machiya townhouses",
      season: "Year-round; cherry blossom (Mar–Apr) and autumn foliage (Oct–Nov) are culturally richest",
      body: "Japanese is objectively one of the harder languages for English speakers to learn, and immersion is arguably more important for Japanese than any other major language — because the gap between formal study and daily speech is enormous. Fukuoka is the most recommended city for beginners: manageable in scale, genuinely friendly, lower cost than Tokyo, and home to GenkiJACS — consistently the most highly reviewed school for international learners. Tokyo has the widest school choice and the most contemporary cultural immersion. Kyoto provides cultural depth and a more traditional Japan experience. JLPT exam sittings happen in July and December — book your programme so it ends with study time before a sitting.",
    },
    {
      slug: "brazil-immersion",
      name: "Brazil",
      label: "Brazil",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Rio de Janeiro at sunset with Sugarloaf Mountain and Guanabara Bay",
      season: "Apr–Oct (outside Carnival chaos and January peak tourist season)",
      body: "Brazilian Portuguese is a warm, musical language and Brazil is one of the most underrated immersion destinations in the world. Rio de Janeiro has the largest school infrastructure and the most international student community, but São Paulo is where the professional language lives — the country's business and media capital. Salvador and Florianópolis offer a more relaxed pace alongside genuine cultural richness. The CELPE-Bras exam is the official Brazilian Portuguese proficiency certification recognised by the Brazilian government and valued by employers in Portugal and Brazil. Schools affiliated with Brazilian universities are the most reliable for structured CELPE-Bras preparation.",
    },
    {
      slug: "latin-america-immersion",
      name: "Latin America",
      label: "Latin America",
      image: "https://images.unsplash.com/photo-1553532434-5ab5b6b84993?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Colourful colonial buildings in Cartagena, Colombia with bougainvillea cascading over balconies",
      season: "Variable by country; Colombia and Mexico year-round; Argentina best Oct–Apr",
      body: "Latin America offers a different flavour of Spanish — and for many learners, a more affordable and adventurous immersion than Spain. Guatemala (specifically Antigua) is legendary in the language school world for low prices, small class sizes, and an almost overwhelming density of quality schools per capita. Medellín in Colombia has transformed into one of the most popular cities for longer-stay learners and expats, with excellent schools and a genuine urban energy. Mexico City, Oaxaca, and Buenos Aires each offer distinct cultural contexts for Spanish study. For most learners, costs are significantly lower than Europe — a full month's study with homestay in Guatemala can cost less than a single week in Paris.",
    },
  ],

  seasonalCalendar: [
    {
      region: "Spain",
      months: "Sep – Jun",
      locations: ["Salamanca", "Seville", "Barcelona", "Granada"],
      notes: "DELE exam sittings in May and November. Avoid late July/August when cities empty and schools reduce schedules.",
    },
    {
      region: "France",
      months: "Sep – Jun",
      locations: ["Paris", "Montpellier", "Lyon", "Bordeaux"],
      notes: "DELF/DALF exams run in March, June, and November. Alliance Française summer intensives in July are popular but more expensive.",
    },
    {
      region: "Japan",
      months: "Year-round",
      locations: ["Fukuoka", "Tokyo", "Kyoto"],
      notes: "JLPT exam sittings in July and December — plan your programme end date around a sitting. Cherry blossom (Mar–Apr) and autumn (Oct–Nov) are the most culturally rewarding periods.",
    },
    {
      region: "Brazil",
      months: "Apr – Oct",
      locations: ["Rio de Janeiro", "São Paulo", "Salvador"],
      notes: "CELPE-Bras exams in April and October. Avoid January–February (Carnival, extreme heat, inflated prices).",
    },
    {
      region: "Latin America (Guatemala / Colombia)",
      months: "Year-round",
      locations: ["Antigua", "Medellín", "Oaxaca", "Buenos Aires"],
      notes: "Guatemala and Colombia are genuinely year-round. Buenos Aires study best Oct–Apr (Southern Hemisphere spring/summer). Shoulder seasons offer lower prices and smaller class sizes.",
    },
  ],

  goodToKnowHeading: "What no one tells you before your first immersion",
  goodToKnow: [
    {
      emoji: "🤫",
      title: "The silent period is real — and it is not failure",
      body: "Every language learner goes through a period, usually in weeks one and two, where comprehension is improving but production (speaking) feels impossible. You understand more than you can say, and that gap is frustrating. This is a normal neurological phase — your brain is absorbing patterns before it is ready to generate them. Do not panic, do not default to English, and do not judge your progress by how much you can say in week one. Judge it by how much you understand.",
    },
    {
      emoji: "🏠",
      title: "Homestay house rules are not optional",
      body: "A good homestay transforms your immersion; a mismatched one is exhausting. Before you confirm a homestay placement, ask the school: does the host speak any English, or is it genuinely Spanish/French/Japanese only? What meals are included (breakfast only vs half-board)? Are there curfews? Are there other students in the house? Some people want a host family who invites them into their evenings; others want to come and go independently. Communicate your preference clearly — a good school will match you accordingly.",
    },
    {
      emoji: "📱",
      title: "Apps accelerate immersion — they do not replace it",
      body: "Duolingo, Anki flashcard decks, and Pimsleur audio courses are genuinely useful as preparation tools before you arrive, and as consolidation tools in the evenings during your programme. They are not substitutes for conversation practice. The single most valuable thing you can do outside class hours is find a language exchange partner in the city — a local person who wants to practise English (or your native language) in exchange for conversation practice in the target language. Most good schools can facilitate this.",
    },
    {
      emoji: "🎯",
      title: "Being placed correctly matters more than you think",
      body: "Schools use placement tests, but these vary enormously in quality. Being placed one level below your ability is frustrating and wastes money. Being placed one level above means you understand very little and retention drops. When you arrive, be honest about what you can and cannot do — and if after two days the class feels wrong, ask to move. Good schools move students between levels in the first week without issue. It is not rude to ask — it is sensible.",
    },
    {
      emoji: "🔄",
      title: "Find a tandem partner in the first week",
      body: "A tandem language exchange — where you spend 30 minutes speaking your target language and 30 minutes in your native language with a local person — is the highest-value free resource available in almost every language learning city. Cafetandem, Tandem app, and local university language exchange boards all facilitate this. One hour of genuine tandem conversation per day, on top of your school hours, dramatically accelerates progress and gives you access to colloquial, current language that no textbook teaches.",
    },
    {
      emoji: "📋",
      title: "Prepare before you arrive — even two weeks makes a difference",
      body: "Arriving with zero foundation is technically fine but practically wasteful. Two to four weeks of self-study before departure — vocabulary on Anki, basic pronunciation on Pimsleur, grammar overview on a structured app — means your brain has scaffolding to attach immersion input to from day one. Without that scaffolding, the first week is often experienced as overwhelming noise. With it, patterns start to emerge almost immediately. The investment of 20 minutes per day before you travel is one of the highest-return actions available.",
    },
  ],

  faqHeading: "Common questions about language immersion abroad",
  faqIntro: "Practical answers for people planning their first or next immersion programme.",
  faqs: [
    {
      question: "How fast will I actually improve during an immersion course?",
      answer:
        "The honest answer depends on your starting level, the intensity of your programme, and how much you use the language outside class. As a benchmark: most students at A1 level reach A2 after two weeks of intensive study plus homestay. A2 to B1 typically takes four to six weeks of the same intensity. B1 to B2 takes longer — four to six months of consistent study and immersion. Gains at the upper levels (B2, C1, C2) are slower and more dependent on extensive reading, listening, and speaking practice beyond formal classes.",
    },
    {
      question: "Is homestay really better than a student residence?",
      answer:
        "For speed of language acquisition, yes — consistently. In a homestay you are forced to communicate in the target language to meet basic needs (mealtimes, asking about the internet password, explaining a problem) which adds several hours of low-pressure immersion per day that student residence life simply does not provide. The trade-off is privacy and independence. If you are someone who needs significant alone time to recharge, or if you have strong dietary requirements that make shared mealtimes difficult, a student residence with an active social programme is a valid alternative.",
    },
    {
      question: "Do I need to be at a certain level before I can do an immersion programme?",
      answer:
        "No. True beginner (zero knowledge) programmes exist for all major languages, and starting from zero in an immersion environment actually works well — you have no bad habits to unlearn. That said, spending two to four weeks doing self-study before you arrive (basic vocabulary, pronunciation, greetings) genuinely improves the quality of your experience from day one. Arriving with 200–300 words of vocabulary means you begin processing real input immediately rather than experiencing the first week as pure noise.",
    },
    {
      question: "Which official language certification is most recognised internationally?",
      answer:
        "For Spanish: DELE (Instituto Cervantes) is the gold standard and is accepted by universities, employers, and immigration authorities worldwide. For French: DALF/DELF (Ministry of Education France) is universally recognised, with DALF C1 and C2 accepted for French university admission. For Japanese: JLPT N2 and N1 are widely required by Japanese employers and universities. For Portuguese: CELPE-Bras is the official Brazilian certification; CAPLE (University of Lisbon) covers European Portuguese. Always confirm with the specific institution or employer which certification they accept before building your programme around an exam.",
    },
    {
      question: "What visa do I need for a language course abroad?",
      answer:
        "This depends entirely on the destination country, your passport, and the length of your course. Short courses (under 90 days) in most European countries are covered by the Schengen visa-free allowance for UK, US, Australian, and Canadian passport holders. Japan allows visa-free entry for up to 90 days for most Western passports. Courses longer than 90 days in most countries require a student visa — your school should be able to provide the documentation needed for the application. Always verify current requirements with the relevant embassy, as rules change.",
    },
    {
      question: "Can I combine a language course with working abroad?",
      answer:
        "Yes, and many people do — particularly on working holiday visas in countries like Japan, Australia, and Canada. The most common model is morning language school (4–5 hours) combined with part-time work in the afternoons and evenings. Some schools are familiar with this arrangement and schedule classes accordingly. The immersion benefit of working in a local job is significant — you interact with native speakers under practical conditions daily. Teaching English, hospitality, and retail are the most accessible work options for early-stage language learners.",
    },
    {
      question: "How do I know if a language school is legitimate and good quality?",
      answer:
        "Check three things: accreditation (look for Cervantes Institute approval for Spanish schools, Alliance Française membership for French, EAQUALS membership across Europe), independent reviews (Go Overseas, Language International, and language learning forums give unfiltered student perspectives), and class sizes (ask directly — legitimate schools will tell you; maximum eight to ten students per class is the standard for quality intensive programmes). Schools that are vague about class sizes or cannot point to a recognised accreditation body should be approached with caution.",
    },
    {
      question: "Is it worth learning a language from scratch abroad versus taking classes at home first?",
      answer:
        "Both approaches have merit but serve different purposes. Classes at home first build a foundation that makes immersion far more productive — you arrive with vocabulary and grammar scaffolding that lets you process real input immediately. However, if time is limited and the goal is practical communication rather than formal certification, starting from scratch abroad works surprisingly well for most languages. The pressure of daily necessity forces acquisition in a way that cannot be replicated in a classroom at home. For script-based languages like Japanese or Arabic, some home study before arrival is particularly valuable.",
    },
  ],

  youtubeVideosHeading: "Watch before you go",
  youtubeVideos: [
    {
      videoId: "fnUc_W3xE1w",
      title: "How I became fluent in Spanish through immersion",
      channelName: "Dreaming Spanish",
      description: "The comprehensible input method explained — why surrounding yourself with meaningful content in the target language accelerates acquisition faster than grammar study.",
    },
    {
      videoId: "kzAS_-_XZXE",
      title: "My experience at a language school in Japan",
      channelName: "abroad in japan",
      description: "What a Japanese language school experience actually looks like day-to-day — classes, homework, social life, and how much you actually improve.",
    },
    {
      videoId: "dQw4w9WgXcQ",
      title: "Learning French in Paris vs Montpellier — honest comparison",
      channelName: "Français avec Pierre",
      description: "A honest breakdown of why destination choice matters for French immersion and what each city offers beyond the classroom.",
    },
  ],

  disclaimer:
    "Visa requirements, exam sitting dates, and school accreditation statuses change. Always verify current information directly with the school and the relevant embassy or official exam body before booking. Programme costs and duration estimates are indicative and vary by school, destination, and season.",

  ctaHeading: "Start your language immersion journey",
  ctaDescription:
    "Compare schools, explore destinations, or read more about combining language learning with work or travel abroad.",
  ctaLinks: [
    { href: "https://www.gooverseas.com/language-programs", label: "Compare language schools", primary: true },
    { href: "/opportunities/teach-english-abroad", label: "Teach English abroad" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
  relatedLinks: [
    { href: "/opportunities/digital-nomad-coliving", label: "Digital nomad co-living" },
    { href: "/opportunities/teach-english-abroad", label: "Teach English abroad" },
    { href: "/opportunities/career-break-sabbatical-abroad", label: "Career break abroad" },
  ],
};
