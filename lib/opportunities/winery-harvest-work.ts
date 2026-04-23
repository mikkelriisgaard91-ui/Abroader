import type { OpportunityLanding } from "./types";

export const WINERY_HARVEST_WORK: OpportunityLanding = {
  slug: "winery-harvest-work",
  metaTitle: "Winery & harvest work abroad: roles, pay & how to apply | Abroader",
  metaDescription:
    "The honest guide to harvest work in France, Italy, New Zealand and Australia — role types, what they pay, when each region picks, and how to chain two hemispheres for back-to-back harvests.",
  heroTitle: "Winery & harvest work abroad",
  heroSubtitle:
    "Two months in a Burgundy vineyard, or February in Marlborough before the summer crowds arrive. Harvest work is shorter, more physical, and more varied than most people expect — and a well-timed season in the right region can be one of the most memorable things you ever do.",
  heroImage:
    "https://images.unsplash.com/photo-1759062453094-814f40c03e9b?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt:
    "Rolling Tuscan hills covered in vineyards bathed in warm golden sunset light",
  category: "Work Abroad",
  stats: [
    { value: "6", label: "providers compared" },
    { value: "4", label: "key regions" },
    { value: "2–8 weeks", label: "typical harvest window" },
    { value: "2×/year", label: "possible with both hemispheres" },
  ],

  introHeading: "What harvest work actually involves — and why the reality is better than the myth",
  introParagraphs: [
    "The image of harvest work is romantic: wandering through golden vines with a wicker basket, drinking Burgundy in the evenings. The reality is more physical, more social, and often more rewarding than that image suggests — but it is not the same thing. Picking grapes is repetitive, outdoor, sometimes back-breaking work, typically starting at dawn and running through the heat of the day. The payoff is that you finish early, eat well (most wineries feed their pickers properly), and spend evenings with a team of people from all over the world who are all doing the same thing.",
    "The range of roles in the harvest ecosystem is broader than just picking. Cellar hands work inside the winery during crush, sorting fruit, cleaning tanks, and assisting with fermentation — it is more technical, often more physically demanding than picking, and a much better introduction to the winemaking process. Cellar door hospitality roles handle wine tourism: tastings, tours, retail. Tractor and machinery drivers work the vineyard at the mechanical harvest end. All of these roles exist in parallel during the 4–8 week harvest season.",
    "The financial picture depends entirely on how you approach it. Work exchange platforms (WWOOF, Workaway) offer food and accommodation in exchange for labour — no pay, but very low cost of travel. Paid positions on job boards in France, New Zealand, and Australia offer the national minimum wage or better, with accommodation often included. The best deal in any market is a paid position with included accommodation at a well-run winery where the cellar door stays open after harvest for additional hours. That combination does not require luck — it requires applying early and being selective.",
  ],

  howItWorksHeading: "How to plan a harvest season",
  howItWorks: [
    {
      step: 1,
      title: "Know your harvest window — and plan backwards from it",
      body: "Northern hemisphere harvest (Europe) runs roughly August to October depending on region and grape variety. Southern hemisphere (New Zealand, Australia, South Africa, Chile) runs February to May. The harvest window closes fast — 4–8 weeks and the season is over. Pick your target region, find out when it picks, and start planning 4–6 months ahead.",
    },
    {
      step: 2,
      title: "Decide: work exchange or paid work",
      body: "WWOOF and Workaway connect you with smaller, often organic producers who take volunteers in exchange for food and accommodation. It is the lowest-barrier entry into harvest work — but you are not paid. Paid positions through Travail Saisonnier, Wine Jobs Online, and direct winery applications pay the national minimum wage or above. If money matters, go paid. If learning and access to smaller artisan producers matters, work exchange has real advantages.",
    },
    {
      step: 3,
      title: "Sort your visa before you contact wineries",
      body: "EU nationals move freely within EU wine regions. For New Zealand and Australia, a Working Holiday Visa (IEC for UK, various agreements for other nationalities) is the primary route for paid work — processing takes weeks to months, so apply before you start searching for roles. Australia's Seasonal Worker Programme offers a specific pathway for some nationalities but is more structured. Check the embassy requirements for your passport and your target country.",
    },
    {
      step: 4,
      title: "Apply direct to wineries and parallel with job boards",
      body: "A well-timed email to a winery's production manager or HR team 3–4 months before harvest, with a specific subject line and a short paragraph on your relevant experience, converts at a surprisingly high rate. Wineries get fewer unsolicited applications than you expect. Run this in parallel with job boards (Wine Jobs Online for NZ/AU, Travail Saisonnier for France) for the widest coverage.",
    },
    {
      step: 5,
      title: "Pack for outdoor work, not a wine tour",
      body: "Waterproof boots or wellies (vineyards are muddy in the morning), multiple pairs of work gloves, layers for cold mornings and hot afternoons, and sun protection. Secateurs (grape-cutting scissors) are usually provided by the winery but worth confirming. If you are picking for multiple weeks, prioritise comfort and durability over anything else.",
    },
  ],

  roleTypesHeading: "Which harvest role suits you?",
  roleTypesIntro:
    "Harvest work covers more than picking. Your background and goals determine which role to target — and which wineries to approach.",
  roleTypes: [
    {
      icon: "🍇",
      title: "Grape picker",
      level: "Entry level",
      description:
        "The most accessible entry point. You work in the vineyard cutting grape bunches and moving them to collection bins or trailers. Work starts early (typically 6–7am) and finishes by early afternoon in hot regions. Physically demanding on the back and knees. The social dynamic — picking alongside a team of seasonal workers — is the main draw beyond the pay. No experience required whatsoever.",
      keyCerts: ["No qualifications required", "Physical fitness expected"],
      salaryRange: "€50–90 /day or national min wage",
    },
    {
      icon: "🍾",
      title: "Cellar hand",
      level: "Entry-mid level",
      description:
        "Works inside the winery during harvest crush: receiving fruit, operating sorting tables, managing pump-overs, cleaning tanks, and assisting the winemaker with fermentation decisions. More technically interesting than picking and a far better window into how wine is actually made. A forklift licence is genuinely useful; previous production or food-industry experience helps. This role gets you inside the winery — which is where the most interesting conversations happen.",
      keyCerts: ["Forklift licence useful", "Food/production experience valued", "WSET 1 or 2 a bonus"],
      salaryRange: "€1,400–2,000 /mo equivalent",
    },
    {
      icon: "🌿",
      title: "Viticulture assistant",
      level: "Entry-mid level",
      description:
        "Vineyard-based rather than winery-based — this role assists with the management of the vines themselves. During harvest it means harvest coordination, bin tracking, and logistics. Outside harvest season it involves pruning, shoot-thinning, and canopy management. Best for people interested in the agricultural side of wine production rather than the cellar. Some wineries hire viticulture assistants for the full growing season (8–10 months), not just harvest.",
      keyCerts: ["Agriculture or horticulture background helpful", "Willingness to learn viticulture"],
      salaryRange: "€1,300–1,800 /mo",
    },
    {
      icon: "🍽️",
      title: "Cellar door & hospitality",
      level: "Entry-mid level",
      description:
        "Works in the tasting room and wine shop during the harvest tourism spike. Manages tastings, tours, and retail sales. Harvest season is peak demand at many wine tourist destinations — Marlborough, Tuscany, and the Barossa all see significant visitor traffic. Hospitality or retail experience transfers directly. Wine knowledge is beneficial but can be learned on the job; many cellar doors provide training before the season starts.",
      keyCerts: ["RSA (Responsible Service of Alcohol) in NZ/AU", "Hospitality experience preferred", "WSET helps but not required"],
      salaryRange: "€1,200–1,700 /mo",
    },
    {
      icon: "🚜",
      title: "Tractor & machinery operator",
      level: "Mid level",
      description:
        "Operates tractors, grape harvesters, and vineyard machinery during mechanical harvest. Also covers forklift operations in the winery yard. Requires a relevant machinery licence and ideally prior agricultural machinery experience. The highest-paid role in harvest work for people without formal winemaking qualifications. Demand is consistent because the skills are transferable and the licence pool is relatively small.",
      keyCerts: ["Tractor/heavy vehicle licence required", "Agricultural machinery experience expected", "Forklift licence for yard work"],
      salaryRange: "€1,600–2,400 /mo",
    },
  ],

  whyProviders:
    "Harvest work providers split into two distinct categories: work exchange platforms (no pay, board included) and paid job boards or direct employer routes. The right choice depends on your goals — work exchange suits people who want an immersive, low-cost experience with smaller producers; paid boards suit those who need income or want a more professional, structured placement. We have listed the best of both, plus the community resources that experienced harvest workers actually use.",

  providerGroups: [
    {
      heading: "Work exchange — food, accommodation & the experience",
      intro:
        "These platforms connect you with wineries and organic vineyards that take volunteers in exchange for food and accommodation. No cash wage, but no accommodation cost either. Best for first-timers, low-budget travellers, or those who want access to smaller artisan producers that do not advertise paid positions.",
      providers: [
        {
          name: "WWOOF",
          description:
            "The original work exchange network for organic farms and vineyards, operating in over 100 countries. France, Italy, Spain, New Zealand, and Australia all have active national WWOOF organisations with strong vineyard listings. You pay a small annual membership fee per country and then contact hosts directly. The quality of placements varies — read host reviews carefully — but the best WWOOF vineyard placements offer a genuine window into small-scale organic viticulture that paid positions rarely provide.",
          tags: ["Work exchange", "Organic vineyards", "100+ countries", "Food & accommodation included", "Annual membership fee"],
          href: "https://wwoof.net",
          category: "training-placement",
          useWhen:
            "You want an immersive, low-cost experience at a smaller organic vineyard and are not primarily motivated by earning money.",
        },
        {
          name: "Workaway",
          description:
            "A broader work exchange platform with hundreds of vineyard and winery listings in Italy, Spain, Portugal, and France. Particularly strong for Tuscany, the Douro Valley, and Rioja. Hosts offer free accommodation (and usually meals) in exchange for 5–6 hours of work per day. The platform's review system is robust and lets you screen both hosts and other travellers. Workaway charges a small annual subscription and has a younger, more travel-oriented community than WWOOF.",
          tags: ["Tuscany · Douro · Rioja", "Work exchange", "Free accommodation", "50,000+ hosts globally", "Annual subscription"],
          href: "https://www.workaway.info",
          category: "training-placement",
          useWhen:
            "You want a work exchange placement at a vineyard in southern Europe, particularly Italy, Portugal, or Spain.",
        },
      ],
    },
    {
      heading: "Paid work — job boards and direct employer routes",
      intro:
        "These platforms list paid harvest positions with wineries and agricultural contractors. Accommodation is frequently included. For New Zealand and Australian listings, a Working Holiday Visa is the standard requirement for non-citizens.",
      providers: [
        {
          name: "Wine Jobs Online",
          description:
            "New Zealand's leading wine industry job board, with the strongest coverage of NZ harvest roles (Marlborough, Hawke's Bay, Central Otago) and a growing Australian section. Covers cellar hands, vineyard workers, tractor operators, and cellar door staff alongside permanent winemaker roles. The site lists openings from both large corporate wineries and family estates. Roles typically go live October–November for a February–April NZ harvest.",
          tags: ["NZ market leader", "Marlborough · Hawke's Bay · Central Otago", "All role types", "Australian listings growing"],
          href: "https://www.winejobsonline.com",
          category: "job-board",
          useWhen:
            "You want a paid harvest role in New Zealand or Australia and are willing to apply 3–4 months before the Southern Hemisphere harvest starts.",
        },
        {
          name: "Travail Saisonnier",
          description:
            "France's dedicated seasonal agricultural job platform, with hundreds of grape harvest (vendange) listings across Bordeaux, Burgundy, Champagne, and Alsace each August–September. Many positions include free accommodation on the estate. Pay follows the French agricultural minimum wage (SMIC), with overtime common during peak harvest weeks. EU nationals apply without restriction; non-EU workers need to check French seasonal worker visa eligibility.",
          tags: ["France specialist", "Bordeaux · Burgundy · Champagne · Alsace", "Paid + accommodation", "Aug–Oct season"],
          href: "https://www.travailsaisonnier.com/EN/grape-harvest-job.html",
          category: "job-board",
          useWhen:
            "You want a paid vendange position in France, ideally with on-estate accommodation included, for the August–October harvest.",
        },
      ],
    },
    {
      heading: "Community & resources",
      intro:
        "These are the places experienced harvest workers actually look for leads — not official job boards, but communities and guides with real-world intelligence on what is available.",
      providers: [
        {
          name: "Travelling Winemakers (Facebook Group)",
          description:
            "A private Facebook community of over 60,000 harvest workers, winemakers, and cellar hands sharing live job leads, visa tips, winery recommendations, and accommodation advice across both hemispheres. This is where harvest workers announce their availability, where small wineries post openings they do not bother to put on job boards, and where you can find out in real time which regions and which producers are worth applying to. Essential reading before your first season.",
          tags: ["60,000+ members", "Live job leads", "Both hemispheres", "Visa & accommodation advice", "Free to join"],
          href: "https://www.facebook.com/groups/travellingwinemakers",
          category: "aggregator",
          useWhen:
            "You want real-time intelligence from the harvest worker community — job leads, producer reviews, and visa advice that does not appear on official job boards.",
        },
        {
          name: "Seasonal Work Visa (Guide)",
          description:
            "A comprehensive guide to the seasonal agricultural work visa programmes in Australia, Canada, New Zealand, and Germany. Covers eligibility by nationality, pay rates, how to apply for sponsored positions, and the differences between working holiday visa routes and structured seasonal worker programmes. Essential reading if you are from a country without a standard working holiday visa agreement with your target destination.",
          tags: ["Visa guide", "Australia · Canada · NZ · Germany", "Sponsored work pathways", "Nationality-specific detail"],
          href: "https://seasonalworkvisa.com/seasonal-work-visa-jobs-offering-countries-for-harvesting/",
          category: "aggregator",
          useWhen:
            "You need to understand your visa options for Australia, New Zealand, or Germany before you start applying for harvest positions.",
        },
      ],
    },
  ],

  regionsHeading: "Where to do a harvest season",
  regionsIntro:
    "France and Italy dominate the Northern Hemisphere market for character and volume; New Zealand and Australia are the best-organised paid options in the Southern Hemisphere. The calendar runs in opposite directions, which makes back-to-back harvests possible.",

  regions: [
    {
      slug: "france",
      name: "France — Bordeaux, Burgundy & Champagne",
      label: "France",
      image:
        "https://images.unsplash.com/photo-1758315479875-c0e021270ada?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Green rolling vineyard hills in the Champagne region of France under summer sky",
      season: "Harvest: Aug – Oct",
      body: "France has the largest and most varied harvest market in the world. Bordeaux picks from late August into October depending on the appellation; Burgundy concentrates into a tight 2–3 week window in September; Champagne is highly structured and often uses large contractor crews. Most paid positions include on-estate accommodation. EU nationals work without restriction. Post-Brexit, British passport holders need to check their seasonal worker visa eligibility through the French consulate — processing times for agricultural visas have improved but are not instant. Travail Saisonnier is the go-to board for France.",
      relatedHref: "/retreats",
      relatedLabel: "Explore French wine retreats",
    },
    {
      slug: "italy",
      name: "Italy — Tuscany, Piedmont & Veneto",
      label: "Italy",
      image:
        "https://images.unsplash.com/photo-1761329824218-3e22c840f99f?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Rows of vines on golden hillside rolling landscape at sunset in Italian countryside",
      season: "Harvest: Sep – Oct",
      body: "Italy's harvest concentrates in September and October across a remarkably diverse set of regions — from Nebbiolo in Piedmont to Sangiovese in Tuscany to Glera in the Veneto. The setting is frequently spectacular, the food is extraordinary, and the cellar dinner culture (meals shared with the winery team during harvest) is one of the genuine pleasures of Italian wine work. The hiring market is more informal than France or NZ — direct contact with estates works well, and Workaway covers many smaller Tuscan and Umbrian producers. Some Italian is useful in smaller operations. EU nationals move freely; non-EU workers need a seasonal work visa.",
    },
    {
      slug: "new-zealand",
      name: "New Zealand — Marlborough & Central Otago",
      label: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1545309451-fc04a9c4bc5b?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Rows of grapevines covering hillside vineyard in New Zealand under clear sky",
      season: "Harvest: Feb – Apr",
      body: "New Zealand's wine industry is among the most professionally organised in the world, and that extends to harvest employment. Marlborough — home of most of the country's Sauvignon Blanc — and Central Otago run structured harvests from late February through April. Roles are paid at NZ minimum wage or above, accommodation is usually included in cellar hand and machinery operator packages, and the working conditions are well-regulated. The Working Holiday Visa (accessible to UK, Irish, Australian, and around 30 other nationalities) is the standard entry route and allows up to 12 months of work. Wine Jobs Online has the best coverage of NZ harvest listings.",
      relatedHref: "/co-living",
      relatedLabel: "Find co-living in New Zealand",
    },
    {
      slug: "australia",
      name: "Australia — Barossa, Hunter Valley & Clare Valley",
      label: "Australia",
      image:
        "https://images.unsplash.com/photo-1773319825721-2b1d96676a84?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Aerial view of vineyard with harvest machinery working between rows of vines",
      season: "Harvest: Feb – May",
      body: "Australia's harvest runs slightly later and longer than NZ, from February through May depending on the region and variety. The Barossa Valley (South Australia) is the most famous picking destination; the Hunter Valley (NSW) and Clare Valley (SA) offer smaller, more intimate operations. Paid harvest work counts towards a second-year Working Holiday Visa in Australia — making it attractive to people on a gap year who want to extend their stay. Pay follows Australian award wages, which are among the highest in the world for agricultural work. The combination of high wages and a second-year visa extension makes Australia the most financially compelling harvest destination for the right nationalities.",
    },
  ],

  goodToKnowHeading: "Things they don't put in the brochure",
  goodToKnow: [
    {
      emoji: "💪",
      title: "It is physical work — genuinely so",
      body: "Picking grapes means bending, crouching, and repeating the same motion for 6–8 hours. By day three your back will feel it. Cellar work involves lifting, climbing, and cleaning in confined spaces. Going in prepared — with stretched muscles, supportive footwear, and realistic expectations — makes the difference between a great harvest and one you spend complaining about.",
    },
    {
      emoji: "🌍",
      title: "You can do two harvests in one year",
      body: "Northern Hemisphere picks August–October. Southern Hemisphere picks February–April. The gap is short enough that a well-planned itinerary lets you do France or Italy in autumn, then New Zealand or Australia in February — back-to-back harvests in the same calendar year. It takes visa planning and modest savings for the gap, but it is more achievable than it sounds and doubles the experience.",
    },
    {
      emoji: "📩",
      title: "Emailing wineries directly works better than you expect",
      body: "Most small and medium wineries do not fill all their harvest positions through job boards. A concise, well-written email to the production manager or owner — sent 3–4 months before harvest — with your availability, relevant experience, and the specific role you are interested in gets read and often responded to. Personalise each one. Generic applications to a long list of wineries get deleted.",
    },
    {
      emoji: "🏠",
      title: "Accommodation quality varies enormously",
      body: "Some winery accommodation is genuinely beautiful — converted stone buildings, shared meals, a working farm. Some is a caravan or a bunk in a shed near a busy road. Ask specific questions before you accept: how many people share the accommodation, what facilities are available, and whether meals are included or a food budget is provided. This shapes the entire experience.",
    },
    {
      emoji: "💰",
      title: "Understand piece rate before you agree to it",
      body: "Some picking operations pay by weight (piece rate) rather than by the hour. In a good year on productive vines, piece rate can exceed hourly pay substantially. In a difficult vintage with low yields or tough-to-harvest varieties, it can fall below minimum wage. Ask explicitly whether pay is hourly or piece rate before you accept. Paid job board positions in France and NZ are far more likely to be properly regulated.",
    },
    {
      emoji: "🍷",
      title: "You do not need to know anything about wine",
      body: "Harvest workers are not expected to be wine experts. What wineries need is physical reliability, a good attitude, and the willingness to learn. Most people finish a harvest knowing far more about wine than they expected — not from studying, but from being inside the process for a month. The winemaking team tends to explain what is happening, especially if you ask questions. It is a natural education.",
    },
  ],

  faqHeading: "Common questions about harvest work abroad",
  faqIntro: "Direct answers based on how the market actually works.",
  faqs: [
    {
      question: "When should I start applying for harvest work?",
      answer:
        "For the Northern Hemisphere harvest (France, Italy — August to October), start applying from April or May. For the Southern Hemisphere harvest (NZ, Australia — February to April), start from October. The best-organised wineries and the best-paid positions fill earliest. Applying 3–4 months ahead of harvest is the minimum; 5–6 months gives you access to the widest pool.",
    },
    {
      question: "Do I need a working holiday visa for harvest work in New Zealand or Australia?",
      answer:
        "Yes, for paid work. The Working Holiday Visa (or International Experience Canada-style equivalent) is the standard route for most nationalities. NZ grants WHVs to UK, Irish, US, Canadian, German, French, and around 30 other nationalities for stays of up to 12 months. Australia's WHV covers similar nationalities and has the added incentive of counting regional agricultural work towards a second-year visa extension. Check your nationality's eligibility on the relevant immigration website and apply well before you plan to travel.",
    },
    {
      question: "Is work exchange (WWOOF / Workaway) worth it over paid work?",
      answer:
        "It depends on your goal. Work exchange means no cash wage but also no accommodation or food costs — the net difference may be smaller than it looks. The quality of the experience tends to be higher at smaller, more artisan producers who use WWOOF rather than paid labour. If you want to earn money, go paid. If you want a genuinely immersive, relationship-based experience at a small organic winery, work exchange often delivers something that paid positions do not.",
    },
    {
      question: "Do I need to speak French or Italian for European harvest work?",
      answer:
        "For large commercial picking operations in Champagne and Bordeaux that regularly take international workers, English is typically sufficient. For smaller estates in Burgundy, Tuscany, or Piedmont — especially those using Workaway or direct applications — some French or Italian is genuinely useful and will significantly improve your day-to-day experience. It is not a barrier to entry, but it is a clear differentiator if you have it.",
    },
    {
      question: "How long does a harvest season last?",
      answer:
        "The picking window for most regions is 4–8 weeks. After picking, cellar hands continue through fermentation and pressing — adding another 4–8 weeks of cellar work. The total harvest employment period can therefore range from a few weeks (picking only) to 3–4 months (picking plus cellar). Some wineries in NZ and Australia offer employment year-round for the right candidates, extending from harvest into the growing season.",
    },
    {
      question: "Does Abroader hire harvest workers directly?",
      answer:
        "No. Abroader is a discovery platform. We list and explain the best job boards, work exchange platforms, and resources so you can find the right route. All applications and employment contracts go through the individual providers listed on this page.",
    },
  ],

  disclaimer:
    "Visa requirements, working holiday agreements, and seasonal worker programmes change regularly and vary by nationality. This page provides editorial guidance only — always verify current requirements with the relevant embassy or official immigration authority before accepting any employment contract.",

  ctaHeading: "Find your harvest season",
  ctaDescription:
    "Browse live seasonal roles, explore wine regions, or book a free consultation to plan your harvest abroad.",
  ctaLinks: [
    { href: "/hospitality", label: "Browse seasonal jobs", primary: true },
    { href: "/retreats", label: "Wine retreats" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/volunteering", label: "Volunteering" },
    { href: "/co-living", label: "Co-living options" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
