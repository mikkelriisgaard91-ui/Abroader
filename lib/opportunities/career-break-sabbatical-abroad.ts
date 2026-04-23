import type { OpportunityLanding } from "./types";

export const CAREER_BREAK_SABBATICAL_ABROAD: OpportunityLanding = {
  slug: "career-break-sabbatical-abroad",
  metaTitle: "Career break & sabbatical abroad — planning guide | Abroader",
  metaDescription:
    "How to plan, fund, and make the most of structured time off — without derailing your career. Budget bands, negotiation tactics, and return strategy.",
  heroTitle: "Career break & sabbatical abroad",
  heroSubtitle:
    "How to plan, fund, and make the most of structured time off — without derailing your career.",
  heroImage: "/images/sabbatical.jpg",
  heroImageAlt: "Travel journal and passport on a map symbolising planning a career break abroad",
  category: "Remote Living",
  stats: [
    { value: "4", label: "break archetypes" },
    { value: "6+", label: "months runway typical" },
    { value: "€800+", label: "monthly budget from" },
    { value: "12+", label: "resources compared" },
  ],

  introHeading: "Why structure matters more than the destination",
  introParagraphs: [
    "Taking a career break is the most searched and least understood life decision for people in their late 20s through mid-40s. Everyone wants to do it. Very few understand how to do it without wrecking their career, burning through savings, or coming back feeling like they've just had a very long holiday.",
    "The difference between a career break that changes your life and one that leaves you anxious and broke comes down to one thing: structure. Not a rigid itinerary — but a clear sense of why you're doing it, what you're doing with your time, and how you're going to return to work on your own terms.",
    "A sabbatical abroad combines time away from a specific job with real engagement in the world — whether that's language learning, volunteering, studying, building something, or simply recovering from a burnout that's been building for years. It is not a failure. In 2026, it's increasingly a strategic career move that signals self-awareness, initiative, and global perspective to future employers — if you frame it correctly.",
    "This guide covers the full picture: how to financially prepare, how to negotiate a sabbatical with your employer, which types of structured break work for which people, and how to come back with something to show for it.",
    "This guide is written for burned-out professionals who need a reset; people at a career crossroads; those who have delayed travel and feel the window closing; anyone wanting immersion over a classroom course; and people recovering from a health event or major life change who need space to think.",
  ],

  roleTypesHeading: "Which sabbatical profile fits you?",
  roleTypesIntro:
    "There is no single 'right' break — the best plan depends on why you're leaving and what you need to return with. Start by matching your situation to one of these archetypes.",
  roleTypes: [
    {
      title: "The Burnout Escaper",
      icon: "🔋",
      level: "Mid level",
      description:
        "Has hit a wall — genuinely exhausted, not just bored. Needs the first 4–6 weeks to do almost nothing. After that, begins to rediscover what actually interests them. The temptation is to fill every day; the skill is resisting it until your real priorities surface naturally. Often comes back with more clarity on what they want than they had in years.",
      keyCerts: [
        "Minimum 3–6 months savings runway",
        "Medical check before long travel if burnout is severe",
        "Accommodation with a kitchen — eating well matters more than you think",
        "Permission to not 'achieve' anything for the first month",
      ],
      salaryRange: "Monthly spend: €1,200–€2,500 depending on destination and lifestyle",
    },
    {
      title: "The Skill Builder",
      icon: "📚",
      level: "Mid level",
      description:
        "Takes a break specifically to acquire something: a language, a trade, a certification, a portfolio. Structure is built around the course or programme — not around travel. May spend 3 months in one city learning Spanish, or doing a CELTA to teach English, or completing an online Masters while based abroad. Returns with a concrete credential or capability, not just stories.",
      keyCerts: [
        "Enrolled in a structured programme before leaving",
        "Accommodation near the learning institution",
        "Realistic study schedule that doesn't crowd out the life abroad",
        "Budget that accounts for course fees",
      ],
      salaryRange: "Monthly spend: €1,500–€3,000 (higher due to course costs)",
    },
    {
      title: "The Volunteering Convert",
      icon: "🌱",
      level: "Mid level",
      description:
        "Uses the break to contribute — conservation, teaching, community projects — often as a way to test a potential career pivot into the non-profit or social impact sector. Gets depth of experience impossible to get from a short volunteering holiday. Returns with a network, references, and real on-the-ground credibility in the field they're pivoting into.",
      keyCerts: [
        "Selected a reputable volunteer placement (avoid voluntourism)",
        "Background check if working with minors or vulnerable groups",
        "6+ weeks minimum — anything shorter is impact-tourism not contribution",
        "Clear motivation beyond 'wanting to give back'",
      ],
      salaryRange: "Monthly spend: €800–€1,800 (lower costs if food/accommodation included in placement)",
    },
    {
      title: "The Negotiated Sabbatical",
      icon: "🤝",
      level: "Senior level",
      description:
        "Takes time off with the company's knowledge and — ideally — blessing. Returns to the same role or a defined role at the end. Requires proactive negotiation, a clear return plan, and often a minimum tenure of 2–3 years at the organisation. The career-safest way to take a break. Increasingly offered by forward-thinking employers as a retention tool.",
      keyCerts: [
        "2+ years at current employer",
        "Strong performance record",
        "Detailed proposal for the break (duration, what you'll do, return plan)",
        "Ideally: informal conversation before formal request",
      ],
      salaryRange: "Costs same as other break types — may receive partial pay from some employers",
    },
  ],

  howItWorksHeading: "How to plan a sabbatical that actually works",
  howItWorks: [
    {
      step: 1,
      title: "Decide the type and duration — before anything else",
      body: "The single biggest planning mistake is buying flights before knowing what kind of break you're taking. A 3-month burnout recovery looks completely different from a 6-month language immersion, which looks nothing like a 12-month round-the-world trip. Pin down your primary goal first. Then duration. Then destination. In that order.",
    },
    {
      step: 2,
      title: "Build your financial runway — the real number",
      body: "Calculate monthly spend for your chosen destination (see budget section below), multiply by duration, add 20% for flights, gear, insurance, unexpected costs, and the 'I need to come home for a week' emergency. That's your real number. Most people underestimate by 30–40%. The gap between your savings and that number tells you exactly when you can leave.",
    },
    {
      step: 3,
      title: "Negotiate with your employer — or resign strategically",
      body: "If you've been at your company 2+ years with good performance, a sabbatical conversation is worth having before you resign. Many employers will grant 3–6 months unpaid leave rather than lose a good person. Frame it as an investment: 'I'll come back refreshed and with [specific thing]. Here's my handover plan.' If they say no, you know where you stand. If you do resign, do it professionally — you'll likely want a reference.",
    },
    {
      step: 4,
      title: "Add one anchor structure to the break",
      body: "Even if your primary goal is recovery, give yourself one anchor structure per month minimum. A language class three mornings a week. A volunteer project on Tuesdays and Thursdays. A writing habit. An online course. This isn't about being productive — it's about having something to organise your time around, because unstructured freedom becomes anxiety faster than most people expect.",
    },
    {
      step: 5,
      title: "Plan the re-entry before you leave",
      body: "The people who struggle most are those who treat the return as 'future me's problem.' Decide before you go: what kind of role do you want to return to? What would make this break a success in professional terms? One thing you'll have built, learned, or done that you can speak to in interviews. Your re-entry plan doesn't need to be detailed — just thought through.",
    },
  ],

  whyProviders:
    "The resources below span planning communities, accredited language schools, ethical volunteering platforms, and structured wellness programmes. Use them to build a break with substance — not just a longer holiday.",

  providerGroups: [
    {
      heading: "🗺️ Sabbatical planning & community",
      intro: "Start with stories, calculators, and peers who have done it — before you book anything.",
      providers: [
        {
          name: "Sabbatical.com",
          description:
            "Community and resources specifically for career break planners — budget calculators, story archive of people who've done it, and a directory of structured programmes. The most focused sabbatical resource online.",
          tags: ["Planning", "Community", "Resources"],
          href: "https://www.sabbatical.com",
          category: "aggregator",
          useWhen: "You want a dedicated hub for sabbatical planning tools and real peer stories.",
        },
        {
          name: "Career Break Secrets",
          description:
            "Long-running blog and community for people planning career breaks — covers negotiation tactics, re-entry strategies, and honest stories from people who took the leap. Less polished, more real.",
          tags: ["Blog", "Community", "Re-entry"],
          href: "https://www.careerbreaksecrets.com",
          category: "aggregator",
          useWhen: "You want candid write-ups on negotiation and coming back to work.",
        },
        {
          name: "The Break Community (Reddit r/solotravel + r/digitalnomad)",
          description:
            "Active Reddit communities where people share real sabbatical and career break experiences — budget breakdowns, destination intel, and employer negotiation stories. Search 'sabbatical' or 'career break' in both subreddits.",
          tags: ["Community", "Reddit", "Real Stories"],
          href: "https://www.reddit.com/r/solotravel",
          category: "aggregator",
          useWhen: "You want raw budget threads and negotiation anecdotes from travellers.",
        },
      ],
    },
    {
      heading: "🗣️ Language learning abroad",
      intro: "Structured immersion beats app-only learning when you need a credential or fluency jump.",
      providers: [
        {
          name: "Don Quijote Spanish Schools",
          description:
            "Established Spanish language schools in Spain and Latin America — structured immersion programmes from 2 weeks to 6 months. Schools in Valencia, Barcelona, Granada, Salamanca, and CDMX. Good student accommodation network.",
          tags: ["Spanish", "Schools", "Europe & LatAm"],
          href: "https://www.donquijote.org",
          category: "training-placement",
          useWhen: "You're anchoring your break around accredited Spanish immersion.",
        },
        {
          name: "Goethe-Institut",
          description:
            "German language and culture programmes across Germany and globally. Intensive formats from 2–12 weeks. High quality — these are the gold standard for German language learning abroad.",
          tags: ["German", "Intensive", "Cultural"],
          href: "https://www.goethe.de",
          category: "training-placement",
          useWhen: "You want structured German courses with international recognition.",
        },
        {
          name: "Alliance Française",
          description:
            "French language programmes in France and 130 countries worldwide. From beginner to C2. A structured Alliance Française course is both genuinely useful and credible on a CV for certain industries.",
          tags: ["French", "Global", "Certification"],
          href: "https://www.alliancefr.org",
          category: "training-placement",
          useWhen: "French fluency or certification is core to your break outcome.",
        },
      ],
    },
    {
      heading: "🌍 Structured volunteering",
      intro: "Longer placements beat one-week voluntourism — choose operators with local partnerships.",
      providers: [
        {
          name: "Projects Abroad",
          description:
            "Volunteer placements in 30+ countries across conservation, teaching, medicine, and community development. Longer-term programmes (2–6 months) offer meaningful depth. Ethical organisation with local partnerships.",
          tags: ["Placements", "Conservation", "Teaching"],
          href: "https://www.projects-abroad.co.uk",
          category: "training-placement",
          useWhen: "You want vetted multi-month placements with documented support.",
        },
        {
          name: "WWOOF (Worldwide Opportunities on Organic Farms)",
          description:
            "Work on organic farms worldwide in exchange for food and accommodation. Popular for people who want a slower sabbatical with manual work, community, and a connection to land. No skills required.",
          tags: ["Farming", "Food + Board", "Slow Travel"],
          href: "https://wwoof.net",
          category: "training-placement",
          useWhen: "You want low-cost room and board in exchange for farm work.",
        },
        {
          name: "Workaway",
          description:
            "Skill and labour exchange with hosts worldwide — from permaculture farms to guesthouses to social enterprises. Often 5 hours of work per day in exchange for accommodation and meals. Low cost, high variety.",
          tags: ["Skill Exchange", "Global", "Low Cost"],
          href: "https://www.workaway.info",
          category: "aggregator",
          useWhen: "You want maximum variety and are comfortable screening hosts carefully.",
        },
      ],
    },
    {
      heading: "🧘 Health, wellbeing & retreat",
      intro: "Burnout-first programmes differ from a standard yoga holiday — look for clinical or structured recovery tracks.",
      providers: [
        {
          name: "Sattva Retreat (and similar dedicated wellness retreats)",
          description:
            "Multi-week immersive wellness programmes for people in recovery from burnout — structured daily routines, therapy, movement, nutrition. Different from a yoga holiday. Significant investment but targeted at deep recovery.",
          tags: ["Burnout Recovery", "Structured", "Wellness"],
          href: "https://sattva.life",
          category: "direct-employer",
          useWhen: "Recovery — not sightseeing — is the primary goal of your break.",
        },
        {
          name: "Remote Year",
          description:
            "Group travel programme combining remote work or study with a curated community moving through multiple countries over 4–12 months. Removes the logistics burden — accommodation, coworking, community all handled. High cost but all-inclusive.",
          tags: ["Group Travel", "Structured", "Community"],
          href: "https://www.remoteyear.com",
          category: "aggregator",
          useWhen: "You want logistics handled and a built-in cohort for a multi-month journey.",
        },
      ],
    },
  ],

  salaryHighlightsHeading: "What a sabbatical costs — realistic monthly bands",
  salaryHighlightsIntro:
    "These bands are editorial estimates for planning — always build your own budget from destination research, insurance quotes, and a 20% contingency buffer.",
  salaryHighlights: [
    {
      country: "Budget sabbatical (SE Asia / Eastern Europe)",
      flag: "🌏",
      salaryRange: "€800 – €1,400",
      salaryLabel: "per month typical",
      includes: [
        "Based in Chiang Mai, Tbilisi, or Bali — accommodation, food, local transport, basic activities.",
        "Excludes flights and health insurance (add €100–€150/month for comprehensive travel insurance).",
      ],
    },
    {
      country: "Mid-range sabbatical (Southern Europe / LatAm)",
      flag: "☀️",
      salaryRange: "€1,500 – €2,500",
      salaryLabel: "per month typical",
      includes: [
        "Based in Spain, Portugal, Mexico, or Colombia — comfortable living with weekend travel.",
        "Language school fees typically add €400–€800/month on top.",
      ],
    },
    {
      country: "Higher-cost destinations (Western Europe / Oceania)",
      flag: "🌐",
      salaryRange: "€2,800 – €4,500",
      salaryLabel: "per month typical",
      includes: [
        "France, Germany, Australia, or New Zealand — higher rent and daily costs.",
        "WWOOF or Workaway-type placements can cut accommodation and food by 50–70%.",
      ],
    },
    {
      country: "Full sabbatical runway (recommended savings)",
      flag: "💰",
      salaryRange: "6× monthly budget + 20% buffer",
      salaryLabel: "rule of thumb",
      badge: "Plan the number",
      includes: [
        "Example: 6 months at €1,800/month average → target ~€13,000 saved minimum including buffer.",
        "Covers the break, flights, insurance, gear, and job-search costs on return.",
      ],
    },
  ],

  regionsHeading: "Where sabbatical-takers go — four macro regions",
  regionsIntro:
    "You can sabbatical anywhere — but certain regions dominate for cost, infrastructure, and community. These four cover the majority of structured breaks.",
  regions: [
    {
      slug: "southeast-asia-sabbatical",
      name: "Southeast Asia",
      label: "SE Asia",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Tropical coastline and calm sea in Southeast Asia",
      season: "Nov–Feb peak in Thailand; year-round options",
      body: "The classic sabbatical region — low cost, warm, and with enough infrastructure to be comfortable without the sterility of a modern Western city. Thailand (Chiang Mai, Ko Lanta) suits slow, reflective sabbaticals. Bali suits the creativity-and-wellness crowd. Vietnam's budget and energy attracts people looking to build or learn something. Cambodia has established volunteering infrastructure. Highlights: Thailand offers the best all-round value for longer sabbaticals; Bali has the strongest wellness and creative retreat ecosystem; Vietnam is one of the fastest-growing destinations for career-change sabbaticals.",
    },
    {
      slug: "southern-eastern-europe-sabbatical",
      name: "Southern & Eastern Europe",
      label: "Europe / Caucasus",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Historic European city rooftops at sunset",
      season: "Apr–Jun & Sep–Oct ideal for Mediterranean",
      body: "For people who want 'abroad' but not 'alien' — Mediterranean climate, walkable cities, good food, and cultures that feel accessible. Spain and Portugal for language learning and café-working. Georgia (Tbilisi) for the under-the-radar option with excellent food and extraordinarily low costs. Italy for those prioritising quality of life over budget. Highlights: Spain (Valencia, Granada) for affordable bases; Georgia (Tbilisi) as one of Europe's most underrated sabbatical cities; Portugal (Lisbon, Madeira) for English-friendly slow living.",
    },
    {
      slug: "latin-america-sabbatical",
      name: "Latin America",
      label: "LatAm",
      image:
        "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Colonial architecture and plaza in Latin America",
      season: "May–Sep popular; regional variation",
      body: "Spanish immersion combined with rich culture and low costs makes Latin America exceptional for the Skill Builder profile. Mexico (CDMX, Oaxaca) for culture depth and food obsessives. Colombia (Medellín, Cartagena) for climate, energy, and surprisingly strong coworking. Argentina (Buenos Aires) for European cultural feel at post-devaluation prices. Highlights: Mexico for food, culture, and immersion; Colombia (Medellín for tech, Cartagena for pace); Argentina for intellectual sabbaticals.",
    },
    {
      slug: "oceania-long-haul-sabbatical",
      name: "Oceania & long-haul",
      label: "Oceania / Asia",
      image:
        "https://images.unsplash.com/photo-1523482580638-016775bc3cac?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Coastal cliffs and ocean in Australia",
      season: "Southern summer Nov–Feb; check WHV age limits",
      body: "Australia and New Zealand offer working holiday visas for under-35s from many countries — not a pure sabbatical, but a funded break with legal right to work. For older sabbatical-takers, both countries are expensive but exceptional for outdoor lifestyle, mental health recovery, and career recalibration in a world-class English-speaking environment. Japan is increasingly viable for long-stay cultural immersion sabbaticals.",
    },
  ],

  seasonalCalendarHeading: "When to plan — a simple timeline",
  seasonalCalendarIntro:
    "Sabbatical timing is personal, but these windows match weather, crowds, and re-entry rhythms for many people.",
  seasonalCalendar: [
    {
      region: "Research and financial preparation",
      months: "Jan – Mar",
      locations: ["Home base"],
      notes: "For most people, the best time to start planning — after the post-Christmas reflection period. Research destinations, calculate runway, begin employer conversation if applicable.",
    },
    {
      region: "Ideal start — SE Asia or Europe",
      months: "Apr – May",
      locations: ["Thailand", "Portugal", "Spain"],
      notes: "After resignation notice periods complete. SE Asia shoulder season (before peak summer heat). Southern Europe spring — perfect weather, lower tourist crowds.",
    },
    {
      region: "Latin America & Eastern Europe",
      months: "Jun – Aug",
      locations: ["Mexico", "Georgia", "Andes"],
      notes: "Tbilisi and Eastern Europe at their best. CDMX rainy season (afternoon rains only). Avoid SE Asia (heat and rain). Good window for Andean South America.",
    },
    {
      region: "Peak global shoulder season",
      months: "Sep – Oct",
      locations: ["Global"],
      notes: "Arguably the best two months to be almost anywhere: Europe warm and uncrowded, SE Asia cooling, LatAm dry season settling. A September start is the ideal timing for many sabbaticals.",
    },
    {
      region: "SE Asia cool season & Southern Hemisphere summer",
      months: "Nov – Dec",
      locations: ["Chiang Mai", "Bali", "Australia"],
      notes: "Chiang Mai and Bali at their finest (cool and dry). Australia and New Zealand heading into summer. Budget for flights — prices spike November–December.",
    },
    {
      region: "Re-entry planning",
      months: "Dec – Jan",
      locations: ["Home / next base"],
      notes: "If on a 6-month sabbatical, spend the final month refreshing your CV, reconnecting with your network, and preparing your 'what did you do?' narrative. January job market re-opens strongly — ideal return timing.",
    },
  ],

  goodToKnowHeading: "What experienced sabbatical-takers wish they'd known",
  goodToKnow: [
    {
      emoji: "🎯",
      title: "The 'what did you do?' question is not a trap — it's an opportunity",
      body: "Every post-sabbatical interview will include this question. The wrong answer is defensive: 'I just needed a break.' The right answer is honest and framed as investment: 'I took six months to [learn Spanish / do conservation work / recover from burnout and clarify what I actually wanted] — and I came back with [specific outcome].' Employers who penalise sabbaticals are employers you probably don't want to work for.",
    },
    {
      emoji: "🏥",
      title: "Health insurance is non-negotiable — and often underestimated",
      body: "Your home country's health insurance (EHIC card for EU, NHS for UK) does not cover you adequately for a long trip abroad. Comprehensive travel health insurance for a 6-month sabbatical costs €500–€1,200 depending on age and destination. World Nomads and SafetyWing are the most popular among long-term travellers. Do not leave without it.",
    },
    {
      emoji: "📅",
      title: "The first month abroad is often the hardest",
      body: "Euphoria lasts the first week. Reality of 'I'm alone in a foreign city with no routine' can hit weeks 2–3. This is normal — it passes. Build in social activities deliberately: language class, volunteer placement, coworking, local meetup. The structure is there to help you build connections, not to keep you busy.",
    },
    {
      emoji: "🔍",
      title: "A sabbatical won't fix a bad career — it'll give you space to see it clearly",
      body: "If you're miserable in your current role but hoping a break will make you love it again, manage expectations. A sabbatical is excellent for burnout recovery, career direction clarity, and skill building. It is not therapy. Consider what you actually want to be different when you return, and design the break around making that happen.",
    },
    {
      emoji: "🤝",
      title: "Negotiate, don't announce",
      body: "If you're going to ask your employer for a sabbatical, frame it as a proposal, not a resignation letter. 'I want to discuss taking a 3-month unpaid leave of absence — I've prepared a handover plan and a return date' is received very differently from 'I'm thinking of leaving for a while.' The more thought-through your proposal, the harder it is to say no.",
    },
    {
      emoji: "🚪",
      title: "Your re-entry is easier than you think",
      body: "The most common sabbatical fear is 'I won't be able to get a job when I return.' In practice, most people who plan their break well find that re-entry is faster and better than expected — they come back with more confidence, clearer goals, and often better interviews. The people who struggle are those who burned bridges on the way out or who can't articulate what the break gave them.",
    },
  ],

  faqHeading: "Frequently asked questions",
  faqIntro: "Honest answers to the questions we hear most often before a long career break.",
  faqs: [
    {
      question: "How much money do I need before taking a career break?",
      answer:
        "Calculate your total monthly spend for your chosen destination, multiply by the break duration plus 2 months (job search buffer on return), then add 20% for contingencies. For a 6-month sabbatical in Southeast Asia: target €10,000–€14,000. Southern Europe: €14,000–€20,000. These are real numbers, not minimums — leaving with less creates anxiety that undermines the purpose of the break.",
    },
    {
      question: "Will a career break hurt my career?",
      answer:
        "Less than you fear, more than you'd like if you do nothing with it. A well-structured break with one concrete outcome (language, skill, experience, credential) is increasingly respected by employers — especially in creative, tech, and professional services industries. A year of unaccounted-for time with nothing to show is harder to explain. The framing matters enormously.",
    },
    {
      question: "How do I negotiate a sabbatical with my employer?",
      answer:
        "Prepare: (1) your proposal in writing — duration, dates, handover plan, return date; (2) your case — performance record, tenure, what you'll return with; (3) a fallback — if 3 months is too long, would 6 weeks work? Most rejections happen because the ask is too vague. 'I'd like some time off' is easy to say no to. 'Here's my 3-month leave proposal with a full handover document and a return date' is much harder.",
    },
    {
      question: "What's the difference between a sabbatical and just quitting?",
      answer:
        "A sabbatical implies a return — either to the same employer (negotiated leave) or to employment in your field (self-managed career break). 'Quitting' implies leaving with no plan. The distinction matters for your mindset: a sabbatical is a structured investment in yourself, not an escape. If you're framing it as escape, spend some time being honest about what you're escaping from, because that will still be there when you return.",
    },
    {
      question: "Is 3 months long enough for a meaningful career break?",
      answer:
        "Yes — if you're focused. Three months in one region with one anchor goal (language, volunteering, course) is enough to genuinely transform perspective and build something meaningful. The trap of 3-month breaks is trying to visit 12 countries — you end up tired and shallow. Pick a base, add one structured element, and move regionally on weekends. You'll extract more from 3 months of depth than 6 months of breadth.",
    },
    {
      question: "What about relationships, mortgages, and life admin back home?",
      answer:
        "These are real constraints and not excuses. Most people who take sabbaticals have partners, leases, and responsibilities — they plan around them rather than waiting for perfect conditions. Options: take the break together, agree on a visit schedule, rent out your flat, pause non-essential subscriptions, set up auto-payments for recurring bills. The logistics are solvable with 8–12 weeks of planning. 'Perfect conditions' never arrive — that's the lesson most sabbatical returnees wish they'd learned sooner.",
    },
  ],

  disclaimer:
    "Visa rules, employment law, and tax residency for long stays abroad vary by nationality and change frequently. This page is editorial guidance only — verify flights, insurance, visas, and tax with official sources or qualified advisers before you commit.",

  ctaHeading: "Plan your next chapter abroad",
  ctaDescription:
    "Explore remote living guides, visa routes, and other structured opportunities — or talk to the team about mapping a realistic timeline.",
  ctaLinks: [
    { href: "/opportunities", label: "Browse opportunities", primary: true },
    { href: "/opportunities/digital-nomad-coliving", label: "Coliving guide" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/opportunities/workcation-hotspot-guide", label: "Workcation hotspot guide" },
    { href: "/co-living", label: "Remote living hub" },
    { href: "/opportunities/burnout-wellness-retreat", label: "Burnout retreat guide" },
  ],
};
