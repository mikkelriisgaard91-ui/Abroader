import type { OpportunityLanding } from "./types";

export const COOKING_SCHOOL_ABROAD: OpportunityLanding = {
  slug: "cooking-school-abroad",
  metaTitle: "Cooking school abroad: culinary courses, destinations & how to choose | Abroader",
  metaDescription:
    "Plan a culinary skillcation abroad — from half-day market classes in Chiang Mai to week-long schools in Tuscany and professional diplomas in Paris. Everything you need to choose the right course and come home a better cook.",
  heroTitle: "Cooking school abroad",
  heroSubtitle:
    "Learning to cook Thai in the country where Thai food was invented, or Italian from a nonna in her farmhouse kitchen, is not just a cooking class. It is a way into a culture that no museum can provide. Here is how to find the right course, for the right goal, at every level.",
  heroImage:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Hands rolling fresh pasta dough on a flour-dusted wooden board in a rustic Italian kitchen",
  category: "Skillcation",
  stats: [
    { value: "Half-day – 3 months", label: "programme range" },
    { value: "3–12", label: "typical class size" },
    { value: "Sep – Oct", label: "harvest season (Italy/France)" },
    { value: "Le Cordon Bleu", label: "world's most recognised culinary diploma" },
  ],

  introHeading: "What a cooking course abroad actually gives you",
  introParagraphs: [
    "You can watch cooking tutorials on YouTube indefinitely and improve marginally. Or you can spend a week in a kitchen in Florence, working with ingredients sourced that morning from the market down the road, with a teacher who has been cooking that region's food their entire life. The gap between those two experiences is not about technique — it is about context, memory, and motivation. Food learned in its place of origin sticks in a way that replicated at home simply does not.",
    "The question that matters most when choosing a cooking course abroad is: what do you actually want to be able to cook when you get home? A half-day class in a Bangkok cooking school will teach you three or four dishes to a level where you can reproduce them confidently. A week-long culinary school in Lyon will give you a set of French techniques — sauce-making, butchery, pastry — that unlock hundreds of other dishes. A Le Cordon Bleu diploma takes months and produces a professional credential. These are fundamentally different experiences with different outcomes, and confusing them leads to disappointment.",
    "The best culinary skilcations combine a market visit in the morning — where you see ingredients in their raw, seasonal form and learn to shop like a local — with hands-on cooking in the afternoon and eating what you made in the evening. That full cycle, from selection to preparation to the table, is what you cannot get from a class at home. It is also, almost without exception, the format described by alumni as the most memorable experience they have ever had on a trip.",
  ],

  howItWorksHeading: "How to choose and book the right cooking course abroad",
  howItWorks: [
    {
      step: 1,
      title: "Decide what you want to cook after you get home",
      body: "This sounds obvious but most people skip it. If you love Thai food and want to cook it weekly, a week in Chiang Mai makes sense. If you have always wanted to make proper fresh pasta and understand Italian cuisine deeply, Tuscany or Bologna is the obvious choice. If you want formal culinary technique — the kind that transfers across cuisines — a structured school in France, Japan, or a serious cooking academy is what you need. The cuisine drives the destination, not the other way around.",
    },
    {
      step: 2,
      title: "Understand the difference between a class and a school",
      body: "A cooking class is typically a half-day or full-day experience — you learn three to six dishes, it is informal and social, and it is designed for travellers rather than serious learners. A cooking school involves multiple days of structured progression, often with professional kitchen facilities and a teacher who is a trained chef. Both are valid — but they produce very different outcomes. If you want skills that transfer beyond the dishes taught, you need a school rather than a class.",
    },
    {
      step: 3,
      title: "Check what happens after the cooking — do you eat it?",
      body: "The best courses end with eating together what you have made. This is not just pleasant — it is educationally important. Tasting your own food in the context of a shared meal is how you calibrate seasoning, texture, and balance. Courses that produce food for display (some professional schools) or send you home with takeaway containers miss this. When reviewing programmes, confirm explicitly that the format includes eating together at a table.",
    },
    {
      step: 4,
      title: "Ask about teacher credentials — not just reviews",
      body: "In food tourism, the 'teacher' is sometimes a local entrepreneur running a pleasant experience rather than a trained cook. This is fine for a holiday class but not if your goal is to significantly improve your cooking. Ask: where did the teacher train? How long have they been cooking professionally? Do they speak your language well enough to explain technique, not just demonstrate it? Reviews alone do not reveal this — a teacher with a wonderful personality and mediocre technique will get excellent reviews from travellers.",
    },
    {
      step: 5,
      title: "Think about seasonal timing — for ingredients, not just weather",
      body: "The best culinary experiences are seasonal. Tuscany in September during the grape harvest. Périgord in November for fresh truffles. Japan in spring for sakura wagashi (cherry blossom confectionery). Thailand in April for mango and sticky rice season. Choosing your timing around what is in season in your chosen destination means you are cooking with the ingredients at their absolute peak — which is a fundamentally different experience from cooking with imported, out-of-season produce.",
    },
  ],

  whyProviders:
    "Culinary course providers range from individual artisan schools to global academy chains and aggregator booking platforms. No single provider covers every cuisine and destination. The right approach is to use aggregator platforms (Cookly, BookRetreats) to identify what exists, then contact schools directly to confirm curriculum, class sizes, teacher credentials, and what exactly the day looks like.",

  providerGroups: [
    {
      heading: "Established culinary schools — professional to enthusiast",
      intro:
        "These schools offer structured culinary education with trained chef-instructors, professional facilities, and in some cases internationally recognised diplomas. The right choice when you want serious progression and transferable technique.",
      providers: [
        {
          name: "Le Cordon Bleu",
          description:
            "The most globally recognised culinary school brand, with flagship campuses in Paris, London, Tokyo, Madrid, and Ottawa. Le Cordon Bleu's Grand Diplôme (combining Cuisine and Pâtisserie) is the gold standard professional culinary qualification — accepted as a credential by restaurant groups, hospitality companies, and food media worldwide. Beyond the diploma, they also run shorter intensive workshops (Classic Cycle: 3–6 months) and one-day and two-day themed courses for enthusiasts. The Paris campus remains the benchmark, but Tokyo and Madrid offer the same curriculum in culturally distinct contexts. Best for people with professional ambitions or who want the most credentialled culinary education available.",
          tags: ["Professional diploma", "Paris · Tokyo · Madrid", "Grand Diplôme", "Enthusiast workshops", "Global recognition"],
          href: "https://www.cordonbleu.edu",
          category: "training-placement",
          useWhen:
            "You want a professionally recognised culinary credential, or a structured intensive programme with a brand name that translates to professional credibility.",
        },
        {
          name: "Chiang Mai Thai Cookery School",
          description:
            "One of the longest-running and most respected Thai cooking schools for international students, founded by Sompon Nabnian — one of Thailand's foremost culinary educators. Programmes include market visits at Warorot market, hands-on class cooking sessions covering regional Northern Thai dishes alongside classic central Thai cuisine, and the option for multi-day courses that build genuine technique rather than a handful of tourist-friendly dishes. Small class sizes and genuine pedagogical depth set this apart from the dozens of lower-quality tourist cooking classes in Chiang Mai. Best for people who want to return home genuinely able to cook Thai food, not just recreate three specific dishes.",
          tags: ["Thai cuisine", "Chiang Mai", "Market tours", "Multi-day programmes", "Chef-instructor"],
          href: "https://www.thaicookeryschool.com",
          category: "training-placement",
          useWhen:
            "You are in Thailand and want a structured, serious Thai cooking education rather than a tourist-oriented cooking experience.",
        },
        {
          name: "Tuscany Now & More — Cooking Holidays",
          description:
            "Villa-based cooking weeks in Tuscany that combine morning market visits, afternoon hands-on cooking with professional chefs, and evening meals at the table with the group and wine from local producers. Programmes run from weekend breaks to full week formats. The countryside settings — farmhouses in the Chianti hills, estates near Montepulciano — add a dimension that urban cooking schools cannot provide: you are cooking with vegetables picked from the garden that morning and olive oil pressed in the estate's mill. Particularly strong for pasta, bread, and Tuscan meat traditions. Best for people who want an experiential, immersive Italian cooking experience rather than a classroom format.",
          tags: ["Tuscany", "Villa-based", "Farm to table", "Market visits", "Italian cuisine"],
          href: "https://www.tuscany-cooking-class.com",
          category: "direct-employer",
          useWhen:
            "You want an immersive Italian cooking experience in a beautiful Tuscan setting, combining local ingredients, farm-to-table philosophy, and genuine chef instruction.",
        },
      ],
    },
    {
      heading: "Find and compare courses worldwide",
      intro:
        "These platforms aggregate cooking classes and culinary programmes across hundreds of cities and dozens of cuisines, with independent reviews and direct booking. Use them to build your shortlist and compare options before contacting schools directly for longer programmes.",
      providers: [
        {
          name: "Cookly",
          description:
            "The largest dedicated marketplace for cooking classes worldwide, with over 500 partner schools and classes in destinations including Chiang Mai, Florence, Barcelona, Tokyo, Ho Chi Minh City, and Marrakesh. Filter by cuisine, duration (half-day through multi-week), group size, and dietary requirements. The review system is verified — you can read what participants specifically learned, how knowledgeable the instructor was, and whether the course translated back to home cooking. Particularly useful for shorter courses and single-day market + cooking combinations in Asia and Southern Europe.",
          tags: ["500+ cities", "All cuisines", "Half-day to multi-week", "Verified reviews", "Direct booking"],
          href: "https://www.cookly.me",
          category: "aggregator",
          useWhen:
            "You want to compare and book cooking classes across multiple destinations and cuisines, with independent reviews to guide your choice.",
        },
        {
          name: "BookRetreats — Culinary Retreats",
          description:
            "Retreats platform that includes a culinary section covering multi-day cooking retreat programmes across Europe, Asia, and the Americas. Stronger than Cookly for longer (3–14 day) residential culinary retreats, particularly in Italy, France, Spain, and Bali. Search filters include dietary requirements (vegan, gluten-free), group size, and whether accommodation is included. Reviews are detailed and often include information about pace, group dynamics, and what participants actually cooked.",
          tags: ["Multi-day retreats", "Residential options", "Europe · Asia · Americas", "Dietary filters", "Detailed reviews"],
          href: "https://bookretreats.com/s/other-retreats/cooking-retreats",
          category: "aggregator",
          useWhen:
            "You want a multi-day residential culinary retreat — a programme where cooking, accommodation, and meals are all part of the same experience.",
        },
      ],
    },
  ],

  salaryHighlightsHeading: "Which course format suits your goal?",
  salaryHighlightsIntro:
    "Culinary courses abroad range from a tourist-friendly morning activity to a professional credential. The right format depends entirely on what you want to cook when you get home.",
  salaryHighlights: [
    {
      country: "Half-day market + cooking class",
      flag: "🌿",
      salaryRange: "£40 – £120",
      salaryLabel: "per person (including ingredients and the meal)",
      includes: [
        "3–5 dishes learned",
        "Market visit to source ingredients",
        "Recipe cards to take home",
        "Best for travel enrichment — not skill building",
      ],
      badge: "Most popular for travellers",
    },
    {
      country: "Weekend culinary retreat (2–3 days)",
      flag: "👨‍🍳",
      salaryRange: "£280 – £800",
      salaryLabel: "per person (accommodation and meals often included)",
      includes: [
        "8–15 dishes or techniques across 2–3 days",
        "More repetition = better retention",
        "Wine or regional pairing typically included",
        "Good first step for serious enthusiasts",
      ],
      badge: "Best for enthusiasts",
    },
    {
      country: "Week-long culinary school",
      flag: "🍳",
      salaryRange: "£900 – £3,500",
      salaryLabel: "per person (school fees; accommodation varies)",
      includes: [
        "Full cuisine overview: 20–40 dishes/techniques",
        "Professional kitchen facilities",
        "Chef-instructor with verifiable credentials",
        "Certificate of completion in most cases",
      ],
      badge: "Best for real skill development",
    },
    {
      country: "Professional diploma (1–9 months)",
      flag: "🏆",
      salaryRange: "£8,000 – £28,000",
      salaryLabel: "total programme cost (Le Cordon Bleu and equivalents)",
      includes: [
        "Internationally recognised professional credential",
        "Classic Cycle or Grand Diplôme",
        "Industry connections and placement support",
        "For career changers and serious professionals only",
      ],
      badge: "Professional qualification",
    },
  ],

  roleTypesHeading: "Which type of culinary learner are you?",
  roleTypesIntro:
    "Your motivation shapes everything: which destination, which school type, which pace, and what you actually do with the skills when you get home.",
  roleTypes: [
    {
      icon: "🏠",
      title: "Curious Home Cook",
      level: "Entry level",
      keyCerts: ["No certification needed", "Recipe cards + technique notes"],
      salaryRange: "Half-day to weekend / £50–£500",
      description:
        "You already cook at home and enjoy it, and you want to return from a trip genuinely able to make one cuisine better than before. You are not interested in professional credentials or intensive study — you want a great experience that translates directly into your kitchen on a Tuesday evening. Prioritise schools with generous recipe materials, small class sizes (under eight), and teachers who explain the 'why' behind techniques. Market visits are particularly valuable at this level — understanding ingredient selection is as important as cooking technique.",
    },
    {
      icon: "📚",
      title: "Serious Enthusiast",
      level: "Entry-mid level",
      keyCerts: ["Completion certificates from reputable schools", "Technique portfolio"],
      salaryRange: "Week-long to multi-week / £800–£4,000",
      description:
        "You cook seriously at home — dinner parties, complex projects, regular experimentation — and you want to close a specific gap in your skills. You might want to understand French sauce-making properly, learn to make pasta from scratch, or master the flavour-building logic of Thai cooking. A week-long residential school with a professional chef-instructor is your optimal format. Look for schools where the curriculum is structured around technique transfer rather than entertainment — you want to understand the principles, not just follow a recipe.",
    },
    {
      icon: "📸",
      title: "Food Content Creator",
      level: "Mid level",
      keyCerts: ["Behind-the-scenes content rights", "Photography-friendly environment"],
      salaryRange: "Weekend to week / £200–£2,000",
      description:
        "You are building content — for social media, a food blog, or a video channel — and a cooking course abroad provides both skills and material. For you, location aesthetics matter: a stone farmhouse kitchen in Tuscany, a traditional wok station in Bangkok, a Moroccan riad with tagines over coals. Ask schools explicitly whether photography during classes is permitted and encouraged. Market visit sequences, hands-on cooking shots, and the finished dish at the table are the content beats that perform best in this format.",
    },
    {
      icon: "🎓",
      title: "Professional or Career Changer",
      level: "Mid-senior level",
      keyCerts: ["Le Cordon Bleu Grand Diplôme", "City & Guilds Level 2/3 Professional Cookery", "WSET (for wine pairing)"],
      salaryRange: "3–9 months / £8,000–£28,000",
      description:
        "You are entering the food industry — as a chef, a private cook, a food stylist, a culinary educator, or a food media professional — and you need a credential that the industry recognises. Le Cordon Bleu is the most globally portable. Ballymaloe Cookery School in Ireland is exceptional for farm-to-fork philosophy. Instituto Culinario de México is the best regional option for Latin American cuisine. For this track, visit campuses if possible before committing, talk to alumni, and ask what the employment or career outcome of graduates looks like in practice.",
    },
  ],

  regionsHeading: "Best destinations for a culinary skillcation",
  regionsIntro:
    "The right destination depends entirely on the cuisine you want to learn. Each region below has a distinct culinary identity — and the best schools are embedded in it, not separate from it.",

  regions: [
    {
      slug: "italy-cooking",
      name: "Italy — Tuscany & Emilia-Romagna",
      label: "Italy",
      image: "https://images.unsplash.com/photo-1464219551459-ac14ae01fbe0?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Rolling Tuscan hills with cypress trees and a stone farmhouse at harvest time",
      season: "Best: Sep–Oct (harvest) and Apr–May (spring produce). Avoid August.",
      body: "Italy is the default destination for European culinary education, and for good reason: the cuisine is defined by region, season, and ingredient quality — principles that only make sense when you are standing in the place. Tuscany is the most popular region for cooking schools, centred around Florence, Siena, and the Chianti countryside. Emilia-Romagna — home of Parma ham, Parmigiano-Reggiano, fresh pasta, and balsamic vinegar — is arguably the country's most important culinary region and is increasingly popular for serious learners. Bologna-based schools offer the deepest pasta education available anywhere. September harvest season, when the vineyards and olive groves are active, adds a dimension that no other time of year can match.",
    },
    {
      slug: "thailand-cooking",
      name: "Thailand — Chiang Mai & Bangkok",
      label: "Thailand",
      image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Colourful Thai market stalls with fresh herbs, chilies, and lemongrass in the morning light",
      season: "Best: Nov–Mar (cool, dry season). Apr–Jun for mango season dishes.",
      body: "Thailand has one of the richest culinary cultures in the world, and the infrastructure for cooking education is exceptional. Chiang Mai is the preferred destination for serious learners — the Northern Thai culinary tradition is distinct from the central Thai dishes most people know, and the city has a concentration of high-quality, professional-standard schools. Bangkok is better for contemporary Thai cuisine and offers more variety. Market visits in Thailand are uniquely educational: the diversity of fresh herbs, fermented pastes, and regional ingredients in a single morning market is genuinely overwhelming in the best way. Thai cooking courses are among the best value anywhere — a week of excellent professional instruction costs a fraction of comparable European schools.",
    },
    {
      slug: "france-cooking",
      name: "France — Paris & Lyon",
      label: "France",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Classic French bistro interior with white tablecloths, wine glasses, and warm candlelight",
      season: "Best: Sep–Jun. Autumn for mushroom and game season. Spring for asparagus and morels.",
      body: "France remains the benchmark for classical culinary technique, and this reputation is earned. French cooking is architecture — there are fundamental structures (stocks, mother sauces, pastry techniques) that underpin a vast range of dishes. Learning those structures in France, with access to French ingredients and producers, is the most direct path to technical fluency in the kitchen. Paris is the natural centre — Le Cordon Bleu's flagship campus, along with independent ateliers and market-to-table programmes across the arrondissements. Lyon, often called the gastronomic capital of France, is less visited by culinary tourists but has exceptional bouchon culture and a strong independent school scene. Périgord in the autumn for truffle and duck confit season is a specific pilgrimage worth making.",
    },
    {
      slug: "japan-cooking",
      name: "Japan — Tokyo & Kyoto",
      label: "Japan",
      image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=900&q=80",
      imageAlt: "A Japanese sushi chef slicing fish at a wooden counter in a minimalist Tokyo kitchen",
      season: "Best: Mar–Apr (spring) for sakura confectionery; Oct–Nov for autumn kaiseki ingredients.",
      body: "Japanese cuisine is a philosophy as much as a cuisine — the concept of shokunin (artisan mastery through lifelong practice) means that even a short cooking course in Japan teaches you something about approach and attention that no other culinary culture quite replicates. Ramen, sushi, and knife skills courses in Tokyo range from tourist-friendly half-days to serious multi-week programmes for professional cooks. Kyoto specialises in kaiseki — the multi-course seasonal Japanese haute cuisine — and the seasonal ingredient awareness you develop there transfers to every style of cooking you do thereafter. Sushi courses in particular benefit enormously from Japanese context: fish quality, rice seasoning, and the relationship between knife and fish are things you can only truly learn in Japan.",
    },
    {
      slug: "morocco-cooking",
      name: "Morocco — Marrakesh & Fes",
      label: "Morocco",
      image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Colourful Moroccan spice market stalls with pyramids of cumin, saffron, and paprika",
      season: "Best: Oct–Apr. Avoid July–August (extreme heat, Ramadan timing varies).",
      body: "Morocco is one of the most underrated culinary destinations in the world. Moroccan cuisine — built around preserved lemons, argan oil, ras el hanout, slow-cooked tagines, and the ritual of pastilla — is complex, seasonal, and deeply tied to hospitality culture. Marrakesh has the most developed cooking school infrastructure for international visitors, with programmes that typically begin in the medina souks selecting spices and preserved ingredients before returning to a riad kitchen to cook tagines, couscous, and pastilla. Fes offers a deeper, less tourist-oriented experience. The ability to return home and make genuinely good Moroccan food is one of the most distinctive culinary skills an English-speaking cook can develop.",
    },
  ],

  seasonalCalendar: [
    {
      region: "Tuscany, Italy",
      months: "Sep – Oct",
      locations: ["Florence", "Siena", "Chianti", "Montalcino"],
      notes: "Grape harvest and olive oil pressing season. White truffle season begins in October. Farmhouse schools at peak season — book early.",
    },
    {
      region: "Périgord, France",
      months: "Nov – Jan",
      locations: ["Sarlat-la-Canéda", "Périgueux", "Bergerac"],
      notes: "Black truffle season (Périgord black truffle, December–January). Duck confit and foie gras tradition. Smaller crowds than summer.",
    },
    {
      region: "Chiang Mai, Thailand",
      months: "Nov – Mar",
      locations: ["Chiang Mai", "Chiang Rai"],
      notes: "Cool dry season — most comfortable for market visits and cooking. April–June adds mango season dishes to curricula.",
    },
    {
      region: "Japan",
      months: "Mar – Apr and Oct – Nov",
      locations: ["Tokyo", "Kyoto", "Osaka"],
      notes: "Cherry blossom season (Mar–Apr) unlocks sakura wagashi and spring ingredient courses. Autumn (Oct–Nov) is mushroom and persimmon season — kaiseki at its richest.",
    },
    {
      region: "Morocco",
      months: "Oct – Apr",
      locations: ["Marrakesh", "Fes", "Essaouira"],
      notes: "Comfortable temperatures for market visits and cooking. Avoid July–August heat. Ramadan timing varies annually — confirm school schedules.",
    },
  ],

  goodToKnowHeading: "What to know before you book a cooking course abroad",
  goodToKnow: [
    {
      emoji: "🔪",
      title: "Ask whether it is hands-on or demonstration",
      body: "Some 'cooking classes' are actually demonstrations where you watch a chef cook and then eat the food. Demonstration classes have value, but if your goal is to improve your cooking, you need to physically do the work — chopping, seasoning, adjusting, tasting. Before booking, confirm explicitly: will I have my own workstation and cook the dishes myself, or will I watch and then eat? The distinction matters enormously for skill transfer.",
    },
    {
      emoji: "🏠",
      title: "Check whether the recipes scale to a home kitchen",
      body: "Professional cooking school recipes often use equipment you will never own: commercial induction hobs, stand mixers with dough hooks, blast chillers, professional mandolines. Ask the school to confirm that the techniques and recipes are designed to be reproduced in a domestic kitchen. The best schools think about this deliberately — they teach the principle (caramelisation, emulsification, reduction) alongside the recipe, so you can apply it with whatever equipment you have at home.",
    },
    {
      emoji: "🌱",
      title: "Choose timing around what is in season",
      body: "The ingredient quality difference between in-season and out-of-season produce is the most important lesson in cooking, and it is something you can only truly understand by experiencing it. A cooking course in Tuscany in September with fresh-pressed olive oil and just-harvested wine grapes is a categorically different educational experience from the same course in January with winter produce. When you book, ask the school what is in season during your visit and what dishes are taught at that time of year.",
    },
    {
      emoji: "📋",
      title: "The teacher matters more than the school brand",
      body: "A school's reputation is built on its best teachers, but you may not be taught by those people. When booking, ask who specifically will teach your class, what their background is, and whether they speak your language well enough to explain technique rather than just demonstrate. On review platforms, look for comments specifically about the instructor's knowledge and communication — not just whether the food tasted good and the setting was nice.",
    },
    {
      emoji: "🥗",
      title: "Declare dietary requirements clearly at the time of booking",
      body: "Serious culinary schools can accommodate most dietary requirements — vegetarian, vegan, gluten-free, allergens — but they need to know in advance. Some will adjust the entire class curriculum; others will prepare alternative ingredients only for you. A handful of schools (particularly those focused on specific traditional cuisines with non-negotiable ingredients) cannot accommodate certain requirements. Find this out before you book, not after you arrive.",
    },
  ],

  faqHeading: "Common questions about cooking courses abroad",
  faqIntro: "Practical answers for people planning a culinary skillcation.",
  faqs: [
    {
      question: "Do I need prior cooking experience to attend a cooking school abroad?",
      answer:
        "Not for most programmes. The majority of enthusiast-level cooking schools abroad welcome complete beginners and design their programmes accordingly. What matters is genuine interest and willingness to engage — not existing skill level. That said, professional diploma programmes (Le Cordon Bleu Classic Cycle and above) do expect a baseline of kitchen confidence and some previous cooking experience. For those programmes, read the prerequisites carefully.",
    },
    {
      question: "Is a half-day cooking class worth doing, or should I commit to a full week?",
      answer:
        "A half-day class is absolutely worth doing — it will enrich your travel experience, connect you with local food culture, and leave you with a handful of recipes you can actually reproduce at home. It is not a substitute for a week-long programme if your goal is genuine skill development. Think of a half-day class as a cultural experience with culinary benefits, and a week-long school as a genuine education. Both are valuable; they serve different purposes.",
    },
    {
      question: "How do I know if a cooking school is teaching authentic cuisine versus a tourist version?",
      answer:
        "Three indicators: the teacher's background (have they cooked professionally in that cuisine, or do they run a business for tourists?), the ingredient sourcing (do they go to a local market, or use pre-measured supermarket ingredients?), and the curriculum (are they teaching the full flavour-building logic of the cuisine, or just a selection of photogenic dishes?). Reading reviews on platforms like Cookly and Go Overseas, specifically looking for comments from people with genuine cooking backgrounds, will reveal whether the school serves learners or tourists.",
    },
    {
      question: "What can I realistically cook after a week-long culinary course?",
      answer:
        "After a well-structured week in Thailand: 10–15 dishes from scratch, an understanding of the flavour-building logic (balancing sweet, sour, salty, spicy, and umami), and the ability to shop correctly for Thai ingredients at home. After a week in Italy: fresh pasta in several formats, a proper ragù, two or three sauces, bread, and one or two desserts. The specific output depends on the school's curriculum — ask for a day-by-day breakdown before you book, not just a general description.",
    },
    {
      question: "Can I get a professional culinary qualification in less than a year abroad?",
      answer:
        "Yes — Le Cordon Bleu's Basic Cuisine Certificate (the first level of the Classic Cycle) takes approximately 10 weeks. This is a recognised professional qualification used as a stepping stone by career changers. The full Grand Diplôme (which combines Cuisine and Pâtisserie certificates) takes 9 months. Other shorter programmes (Ballymaloe 12-week certificate, various regional cooking academies) offer structured qualifications in three to four months. None of these should be confused with a degree-level qualification, but they are genuinely respected within the food industry.",
    },
    {
      question: "What should I look for in a market tour component of a cooking programme?",
      answer:
        "The best market tours teach you to shop, not just observe. You should be selecting your own ingredients, asking questions about provenance and variety, and understanding what 'good' looks and smells like for the key ingredients of that cuisine. A guide who points at things and explains them is informative. A teacher who hands you a list and a budget and lets you make choices, then discusses them, is educational. The latter produces genuine kitchen literacy — the ability to assess ingredient quality that you can apply in any market, anywhere in the world.",
    },
    {
      question: "Is accommodation usually included in cooking school programmes?",
      answer:
        "It depends on the format. Day classes and most week-long school programmes do not include accommodation — you book it separately. Villa-based cooking holidays (Tuscany Now & More style) almost always include accommodation, as the venue is the school. Residential culinary retreats (listed on BookRetreats) include accommodation by definition. For longer professional programmes (Le Cordon Bleu and equivalents), accommodation is separate but the school can usually direct you to recommended options near the campus. Always clarify before booking.",
    },
    {
      question: "Which country has the best cooking courses for value — quality relative to cost?",
      answer:
        "Thailand consistently tops this ranking. A week of excellent professional-standard Thai cooking instruction in Chiang Mai costs £300–£600 — a fraction of what a comparable course in France or Italy would cost. Morocco and Mexico are also exceptional value. France and Italy offer the highest absolute quality at the professional level and the richest cultural culinary context, but at significantly higher cost. For pure value, Southeast Asia is hard to beat. For Western culinary technique with cultural depth, Southern Europe is the investment.",
    },
  ],

  youtubeVideosHeading: "Watch before you book",
  youtubeVideos: [
    {
      videoId: "U5EjMEbEDFM",
      title: "What cooking school in Italy is actually like",
      channelName: "Italia Living",
      description: "An honest walk-through of a week-long Italian cooking school experience — what you learn, what surprises you, and what you cook.",
    },
    {
      videoId: "XCnw2QSsZIs",
      title: "Thai cooking class in Chiang Mai — full day experience",
      channelName: "Mark Wiens",
      description: "Market visit, full cooking session, and a meal together — the format that the best Thai cooking schools use.",
    },
    {
      videoId: "cXIqGOPm8g4",
      title: "Le Cordon Bleu Paris — what the first week is really like",
      channelName: "Le Cordon Bleu Official",
      description: "Inside the legendary culinary school — what the professional programme involves and what students produce in their first weeks.",
    },
  ],

  disclaimer:
    "Course fees, availability, and curriculum details change regularly. Always confirm current pricing, class sizes, dietary accommodation, and teacher credentials directly with the school before booking. Seasonal timing recommendations are editorial guidance — individual school schedules vary.",

  ctaHeading: "Find your culinary course abroad",
  ctaDescription:
    "Browse cooking programmes by destination and duration, or explore other skillcation experiences on Abroader.",
  ctaLinks: [
    { href: "https://www.cookly.me", label: "Browse on Cookly", primary: true },
    { href: "/opportunities/wine-course-abroad", label: "Wine & gastronomy courses" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
  relatedLinks: [
    { href: "/opportunities/wine-course-abroad", label: "Wine courses abroad" },
    { href: "/opportunities/language-immersion-abroad", label: "Language immersion" },
    { href: "/opportunities/winery-harvest-work", label: "Work a wine harvest" },
  ],
};
