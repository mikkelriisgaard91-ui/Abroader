import type { OpportunityLanding } from "./types";

export const SEA_TURTLE_CONSERVATION: OpportunityLanding = {
  slug: "sea-turtle-conservation",
  metaTitle: "Sea Turtle Conservation Volunteering 2026 — Costa Rica, Greece, Sri Lanka & More | Abroader",
  metaDescription:
    "The complete guide to sea turtle conservation volunteering. Night patrols, hatchery work, and beach surveys in Costa Rica, Greece, Sri Lanka, and the Maldives — ethical programmes, real operators, what everything costs.",
  heroTitle: "Sea turtle conservation volunteering",
  heroSubtitle:
    "Sea turtle conservation volunteering is one of the most meaningful wildlife experiences available to an international volunteer — a direct contribution to protecting animals that have existed since the age of the dinosaurs and now face their gravest threat from human activity. But not all turtle programmes are equal, and some actively harm the animals they claim to protect. This guide explains what genuine conservation work involves, which operators run credible programmes, and how to choose one that produces real impact rather than a photogenic encounter.",
  heroImage:
    "https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Sea turtle crawling up a dark beach at night to nest, watched from a respectful distance by conservation volunteers",
  category: "Volunteering",
  stats: [
    { value: "7 of 7", label: "sea turtle species are threatened or endangered" },
    { value: "60+", label: "countries with active nesting beaches" },
    { value: "2 weeks", label: "ethical minimum commitment" },
    { value: "1988", label: "year the first international volunteer programme began in Costa Rica" },
  ],

  introHeading: "What sea turtle conservation volunteering actually involves",
  introParagraphs: [
    "Genuine sea turtle conservation work is not a beach holiday with turtles. It is night shifts. It is four hours on a dark beach in rain or heat, walking slowly, not using white lights, waiting — sometimes for hours — for a nesting female to appear. When she does, trained volunteers measure her carapace, tag her if she is untagged, and count and relocate the eggs to a predator-protected hatchery. Two months later, they monitor the hatchery, assist with counts of emerged hatchlings, and record nest success data. This data is submitted to national databases and international bodies including the IUCN Marine Turtle Specialist Group. That is what the work is. It is unglamorous, technically disciplined, and genuinely essential.",
    "The voluntourism industry has produced a parallel version that is none of these things: programmes that let paying visitors hold hatchlings for photographs, handle adult turtles during nesting, or 'release' hatchlings at times and in conditions that maximise mortality. These practices are not marginal — they are widespread, and the operators running them use the same language ('conservation', 'protection', 'give back') as legitimate programmes. The difference is measurable: programmes that submit data to IUCN databases, partner with national universities or government bodies, and publish multi-year nest success statistics are credible. Programmes that cannot answer these questions are not.",
    "The legitimate market is well-established and good. Operators including GVI (Global Vision International), Projects Abroad, SEE Turtles, and the direct-access programmes run through national parks in Costa Rica and Greece have collectively monitored hundreds of thousands of nests across decades of continuous data. The nesting season calendar is the primary logistical constraint — you need to be in the right place at the right time, which varies significantly by species and hemisphere. The guide below covers all of this in practical terms.",
  ],

  howItWorksHeading: "How to find and join a legitimate sea turtle programme",
  howItWorks: [
    {
      step: 1,
      title: "Identify your target destination and nesting window",
      body: "Sea turtle nesting is strictly seasonal. Leatherbacks in Costa Rica nest April through September; Loggerheads in Greece nest June through August; Green turtles in Sri Lanka's south coast nest November through February. You must align your travel dates with the active nesting season at your chosen destination — outside this window, there is no conservation work to do. The seasonalCalendar section below maps every destination's project window precisely.",
    },
    {
      step: 2,
      title: "Verify the operator's scientific credibility",
      body: "Ask the operator three specific questions before booking: (1) Does this programme submit nest data to IUCN's Marine Turtle Specialist Group or a national database? (2) Are any of your staff published in peer-reviewed literature? (3) Can you show me a multi-year nest success record? Credible operators answer all three. Programmes that cannot should be avoided regardless of how their marketing looks.",
    },
    {
      step: 3,
      title: "Check the handling policy",
      body: "Ethical turtle programmes strictly prohibit: handling hatchlings for photographs, using white lights on nesting beaches, approaching nesting females from the front or using flash photography, and releasing hatchlings in conditions other than natural emergence at night. If a programme's website shows volunteers holding hatchlings, this is a disqualifying red flag. Handle = harm in this context.",
    },
    {
      step: 4,
      title: "Commit to the right duration",
      body: "A two-week minimum is the ethical standard in the conservation community — shorter stays do not allow volunteers to develop the skills and pattern recognition required for quality data collection. Some researchers argue that four weeks is the meaningful minimum for genuine contribution. Extended stays (one to three months) are the most impactful and are the right choice for anyone with a serious conservation interest. If your schedule only allows one week, reconsider whether a turtle programme is the right fit for that trip.",
    },
    {
      step: 5,
      title: "Prepare physically and mentally for night work",
      body: "Night beach patrol work is physically uncomplicated but psychologically demanding. You will work a schedule that is inverted from normal — sleeping in the day, working 10pm to 4am on a rotating roster. You will have unproductive nights where no turtles appear. The humidity, mosquitoes, and sleep disruption are real. Being mentally prepared for these conditions — and arriving with adequate insect repellent and a red-light torch — makes the experience significantly more sustainable.",
    },
  ],

  whyProviders:
    "Sea turtle conservation programmes divide into direct research partnerships (working within national park systems alongside scientists), structured volunteer placements (operated by established international organisations with trained local staff), and booking platforms that aggregate programmes across multiple countries. The most important distinction is scientific credibility — the operators below all have verifiable data submission records.",

  providerGroups: [
    {
      heading: "Structured volunteer placement operators",
      intro:
        "These operators have established infrastructure, trained in-country staff, and verifiable track records across multiple nesting seasons. They are the most reliable route for first-time conservation volunteers.",
      providers: [
        {
          name: "GVI — Global Vision International",
          description:
            "One of the most established international conservation volunteering operators. GVI's sea turtle programmes run in Costa Rica, the Seychelles, and Thailand, combining nesting beach patrols with hatchery management and community education. Data is submitted to national conservation bodies and IUCN. Their programmes partner with local universities and national parks, and the scientific rigour distinguishes them from volunteer tourism operators.",
          tags: ["Costa Rica · Seychelles · Thailand", "IUCN Data Submission", "National Park Partnerships", "All Levels"],
          href: "https://www.gviworld.com",
          category: "direct-employer",
          useWhen: "You want a structured, scientifically credible programme with trained in-country staff and a verifiable conservation record.",
        },
        {
          name: "Projects Abroad",
          description:
            "Long-established international volunteering organisation with sea turtle programmes in Mexico (Pacific coast), Sri Lanka, and the Caribbean. Well-structured orientation and training, in-country support staff, and accommodation included. Offers options for under-18s and school groups with additional supervision protocols. Youth-safe accreditation from the Comhlámh Code of Good Practice.",
          tags: ["Mexico · Sri Lanka · Caribbean", "Youth Options Available", "Comhlámh Accredited", "Orientation Included"],
          href: "https://www.projects-abroad.co.uk",
          category: "direct-employer",
          useWhen: "You want a well-supported placement with youth options, school group coordination, or Caribbean or Sri Lanka as a preferred destination.",
        },
        {
          name: "IVHQ — International Volunteer HQ",
          description:
            "Budget-focused volunteering operator with sea turtle programmes in Costa Rica, Greece, and Mexico. One of the most affordable structured placement options available. Less research-intensive than GVI but with a strong operational track record and transparent pricing. Good independent reviews on GoOverseas and Volunteer World.",
          tags: ["Costa Rica · Greece · Mexico", "Budget-Focused", "Transparent Pricing", "Strong Reviews"],
          href: "https://www.volunteerhq.org",
          category: "direct-employer",
          useWhen: "You want an affordable, operationally reliable placement in Costa Rica or Greece without paying premium programme fees.",
        },
      ],
    },
    {
      heading: "Specialist organisations and research-access programmes",
      intro:
        "For volunteers with a stronger conservation or scientific interest, these organisations offer deeper involvement in research programmes and direct access to national park field stations.",
      providers: [
        {
          name: "SEE Turtles",
          description:
            "US non-profit running ethical sea turtle tour and volunteer programmes in Latin America and the Caribbean. SEE Turtles vets every programme it lists against specific ethical criteria — no handling, data submission requirements, community benefit standards. Also publishes a comprehensive guide to identifying ethical vs harmful turtle programmes, which is an invaluable free resource regardless of which operator you choose.",
          tags: ["Non-Profit", "Ethical Accreditation", "Latin America + Caribbean", "Research-Level Access"],
          href: "https://www.seeturtles.org",
          category: "training-placement",
          useWhen: "You want a non-profit operator with independently verified ethical standards, or want to use their free guide to vet any other programme you are considering.",
        },
        {
          name: "Volunteer World — Turtle Programmes",
          description:
            "Comparison platform aggregating sea turtle volunteer programmes globally. Lists and independently reviews programmes from multiple operators with verified guest reviews. Useful for comparing side-by-side across Costa Rica, Greece, Mexico, Mozambique, and Sri Lanka. Filter by duration, price, and operator type.",
          tags: ["Comparison Platform", "Global Listings", "Verified Reviews", "Multi-Destination"],
          href: "https://www.volunteerworld.com",
          category: "aggregator",
          useWhen: "You want to compare turtle programmes across multiple operators and destinations using independent reviews before committing.",
        },
      ],
    },
  ],

  regionsHeading: "Where to volunteer for sea turtle conservation",
  regionsIntro:
    "Each destination has a distinct nesting species, season window, and project character. The primary constraint is always the nesting calendar — the region sections below specify exact project windows alongside the volunteer experience.",

  regions: [
    {
      slug: "costa-rica",
      name: "Costa Rica",
      label: "Costa Rica",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Leatherback sea turtle nesting on Tortuguero beach, Costa Rica at night",
      season: "Leatherback: April – September; Green turtles: June – November (Tortuguero)",
      body: "Costa Rica is the global flagship destination for sea turtle conservation volunteering, and Tortuguero National Park on the Caribbean coast holds one of the largest green turtle nesting aggregations in the western hemisphere. International volunteer programmes have operated here continuously since the 1980s — the Caribbean Conservation Corporation (now Sea Turtle Conservancy) began work here in 1955, making it the world's oldest sea turtle conservation programme. Volunteers on the Pacific coast patrol for Leatherback and Olive Ridley turtles from April through September; Tortuguero's green turtle season peaks June through November. The biodiversity surrounding the project — the rainforest, the river system, the wildlife — gives the non-patrol hours of a Costa Rica placement an extraordinary quality that few other destinations match.",
      relatedHref: "/opportunities/surf-retreat-abroad",
      relatedLabel: "Surf retreats in Costa Rica",
    },
    {
      slug: "greece",
      name: "Greece — Zakynthos & Kefalonia",
      label: "Greece",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Loggerhead sea turtle emerging from the sea at Laganas Bay, Zakynthos, Greece",
      season: "Loggerhead nesting: June – August; Hatchling emergence: August – October",
      body: "Greece hosts the Mediterranean's most important Loggerhead (Caretta caretta) nesting beaches, concentrated on Zakynthos — where Laganas Bay is protected as a National Marine Park — and Kefalonia. ARCHELON, the Sea Turtle Protection Society of Greece, has been monitoring these beaches since 1983 and runs the longest-running citizen science turtle monitoring programme in Europe. The cultural experience of volunteering in Greece — island life, Mediterranean food, the beach archaeology of ancient sites nearby — combines with genuinely important conservation work on a critically important Mediterranean population. The main threat to this population is tourist development and boat traffic, which makes the presence of informed volunteers actively patrolling the beach during nesting season a direct countermeasure.",
    },
    {
      slug: "sri-lanka",
      name: "Sri Lanka",
      label: "Sri Lanka",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Green turtle hatchling emerging from beach sand at a hatchery in Kosgoda, Sri Lanka",
      season: "Green & Loggerhead nesting: November – April (south coast); year-round hatchery work",
      body: "Sri Lanka's southwest coast — particularly around Kosgoda, Rekawa, and Mirissa — hosts hatcheries and nesting beaches for five of the seven sea turtle species. The community-based hatchery model dominant here is distinct from the national park model in Costa Rica — local fishermen who historically collected turtle eggs as a food source now manage hatcheries as an alternative livelihood, with international volunteer programmes providing both funding and additional capacity. This community integration gives Sri Lankan turtle programmes a dimension of human development alongside wildlife conservation. The affordable cost of living, warm Indian Ocean water, and the proximity of surfing and wildlife activities make Sri Lanka one of the most enjoyable non-working environments for a turtle conservation placement.",
    },
    {
      slug: "maldives",
      name: "Maldives",
      label: "Maldives",
      image:
        "https://images.unsplash.com/photo-1576875765780-2f1b70b8bccf?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Green sea turtle swimming over a coral reef in the crystal-clear water of the Maldives",
      season: "Year-round nesting; peak April – October for Green turtles",
      body: "The Maldives combines sea turtle conservation with one of the world's most extraordinary marine environments — coral atolls with among the highest marine biodiversity indices on earth. Conservation programmes here include in-water monitoring (snorkelling and diving) alongside nesting beach work, making it the most aquatically immersive turtle programme available. The small island setting means volunteers live closely with the local community, and many programmes are run through resort partnerships that provide accommodation alongside research access. Costs are higher than other destinations due to the Maldives' island economy, but the combination of marine work, tropical environment, and the significance of the Indian Ocean turtle population makes this a compelling premium choice.",
    },
    {
      slug: "mozambique",
      name: "Mozambique",
      label: "Mozambique",
      image:
        "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Leatherback turtle tracks in sand at dawn on a remote beach in Mozambique's Ponta do Ouro",
      season: "Leatherback & Loggerhead nesting: October – March",
      body: "Mozambique's Inhambane Province and the Ponta do Ouro Protected Area in the south host some of the largest remaining Leatherback and Loggerhead nesting aggregations on the African continent. The volunteer context here is different from Costa Rica or Greece — this is a significantly less developed destination with a research field station character rather than a well-resourced operation. Volunteers genuinely fill a capacity gap that local organisations cannot resource independently. The marine environment — Bazaruto Archipelago, Manta Bay — is extraordinary. GVI and several direct university partnerships run programmes here and the combination of African wildlife proximity, Indian Ocean diving, and genuinely frontier-feeling conservation work attracts an experienced volunteer demographic.",
    },
    {
      slug: "mexico",
      name: "Mexico — Pacific Coast",
      label: "Mexico",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Olive Ridley turtle emerging to nest on a Pacific coast beach in Oaxaca, Mexico",
      season: "Olive Ridley & Leatherback: June – December; mass nesting (arribadas) July – November",
      body: "Mexico's Pacific coast — particularly Oaxaca's La Escobilla beach and the beaches around Puerto Vallarta — hosts the Olive Ridley turtle's extraordinary mass nesting events (arribadas), where tens of thousands of females nest simultaneously over several nights. These events have no equivalent anywhere else in the world and represent one of the most spectacular wildlife events in the conservation calendar. Mexico also has significant Leatherback populations in Michoacán state. Projects Abroad, IVHQ, and independent research programmes all operate here. The cultural richness of the Oaxaca context — the cuisine, the indigenous cultural heritage, the colonial architecture of Oaxaca city — makes non-project hours genuinely rewarding.",
    },
  ],

  roleTypes: [
    {
      title: "Night Patrol Volunteer",
      icon: "🌙",
      level: "Entry level",
      keyCerts: ["No prior experience required", "Training provided on arrival", "Minimum 2-week commitment"],
      salaryRange: "Programme fee: €800–€1,800 / 2 weeks",
      description:
        "The core volunteer role across all destinations. Nightly beach patrols (typically 10pm–4am in rotating shifts) to locate nesting females, assist with measurement and tagging, and escort eggs to hatchery protection where required. All training is provided. The primary requirement is patience, physical fitness for beach walking, and respect for strict handling protocols.",
    },
    {
      title: "Hatchery Assistant",
      icon: "🥚",
      level: "Entry level",
      keyCerts: ["No prior experience required", "Temperature monitoring training", "Data entry competency"],
      salaryRange: "Programme fee: €700–€1,600 / 2 weeks",
      description:
        "Manages the hatchery during the day: monitoring nest temperatures, recording emergence events, counting hatchlings, and maintaining nest success records. Less physically demanding than night patrol but requires meticulous attention to data recording. Most programmes rotate volunteers between beach patrol and hatchery roles across a two-week placement.",
    },
    {
      title: "Beach Survey Technician",
      icon: "📊",
      level: "Mid level",
      keyCerts: ["Scientific data collection methods", "GIS mapping basics useful", "Minimum 4-week commitment"],
      salaryRange: "Programme fee: €1,200–€2,500 / month",
      description:
        "Systematic daytime beach surveys to document nest locations, count false crawls (nesting attempts that did not result in egg laying), record human disturbance indicators, and map activity patterns. Feeds directly into population trend analysis. Requires greater data accuracy commitment than patrol work — most programmes reserve this role for volunteers with a science background or returning volunteers.",
    },
    {
      title: "Research Assistant",
      icon: "🔬",
      level: "Mid-senior level",
      keyCerts: ["Biology or ecology degree preferred", "3+ month commitment", "Data analysis skills"],
      salaryRange: "Programme fee: €2,000–€4,500 / 3 months (or partially funded)",
      description:
        "Integrated into the research team alongside scientists — genetic sampling, satellite tag deployment monitoring, population database management, and seasonal report writing. Some positions are partially or fully funded for postgraduate students with affiliated university programmes. The most scientifically substantive role available to international volunteers in this sector.",
    },
  ],

  salaryHighlightsHeading: "What does it cost to volunteer?",
  salaryHighlightsIntro:
    "Sea turtle conservation programmes require volunteers to pay a programme fee that covers accommodation, meals, training, equipment, and project running costs. This is standard across the sector. Fully-funded positions exist but are competitive and typically require scientific qualifications.",
  salaryHighlights: [
    {
      country: "Fully funded",
      flag: "🎓",
      salaryRange: "€0",
      salaryLabel: "programme fee — competitive selection",
      includes: ["Postgraduate research positions", "University-affiliated programmes", "VSO and equivalent structured schemes", "Requires relevant scientific qualification"],
      badge: "Rare — apply 6–12 months ahead",
    },
    {
      country: "Budget placement",
      flag: "🌿",
      salaryRange: "€700–€1,200",
      salaryLabel: "for 2 weeks all-in",
      includes: ["Shared dormitory accommodation", "Meals at project site", "Training and equipment", "IVHQ and Volunteer World tier"],
      badge: "Most affordable structured option",
    },
    {
      country: "Mid-range placement",
      flag: "🐢",
      salaryRange: "€1,200–€2,000",
      salaryLabel: "for 2–3 weeks all-in",
      includes: ["Shared room accommodation", "All meals", "Airport transfer included", "GVI and Projects Abroad tier"],
      badge: "Most popular tier",
    },
    {
      country: "Premium / extended",
      flag: "⭐",
      salaryRange: "€2,000–€4,500",
      salaryLabel: "for 1–3 months all-in",
      includes: ["Private or semi-private accommodation", "Research team integration", "University credit possible", "Maldives and research-station programmes"],
    },
  ],

  seasonalCalendar: [
    {
      region: "Costa Rica (Tortuguero, Caribbean coast)",
      months: "June – November",
      locations: ["Tortuguero National Park", "Parismina", "Cahuita"],
      notes: "Green turtle nesting peaks July–September. Leatherbacks use the Pacific coast April–September. Two simultaneous seasons on opposite coasts — unique globally.",
    },
    {
      region: "Greece (Zakynthos & Kefalonia)",
      months: "June – October",
      locations: ["Laganas Bay (Zakynthos)", "Mounda Beach (Kefalonia)", "Dafni Beach"],
      notes: "Loggerhead nesting June–August; hatchling emergence August–October. The National Marine Park patrol season opens June 1 and closes after the last emergence, typically mid-October.",
    },
    {
      region: "Sri Lanka (South & Southwest Coast)",
      months: "November – April",
      locations: ["Kosgoda", "Rekawa", "Mirissa", "Bentota"],
      notes: "Five species nest on the south coast, peak season December–March. Year-round hatchery work available. Coincides with Sri Lanka's dry season — ideal conditions for beach patrol.",
    },
    {
      region: "Maldives",
      months: "Year-round (peak April – October)",
      locations: ["Baa Atoll", "Lhaviyani Atoll", "Addu Atoll"],
      notes: "Green turtle nesting most active April–October. In-water monitoring programmes run year-round. The consistent warm water makes this the most year-round accessible destination.",
    },
    {
      region: "Mozambique (Ponta do Ouro, Inhambane)",
      months: "October – March",
      locations: ["Ponta do Ouro Protected Area", "Inhambane coastline", "Bazaruto Archipelago"],
      notes: "Southern Hemisphere summer nesting season. Leatherback and Loggerhead species. Coincides with the warm season — good visibility for any snorkel or dive research work.",
    },
    {
      region: "Mexico (Oaxaca, Pacific Coast)",
      months: "July – December",
      locations: ["La Escobilla (Oaxaca)", "Playa Mexiquillo", "Maruata (Michoacán)"],
      notes: "Olive Ridley mass nesting events (arribadas) occur July–November at La Escobilla — tens of thousands of females arriving within days. Leatherback season extends to December.",
    },
  ],

  goodToKnow: [
    {
      emoji: "🚩",
      title: "Red flag: programmes that let you hold hatchlings",
      body: "Any programme advertising hatchling release experiences where volunteers hold and photograph the animals is operating outside accepted conservation practice. Hatchlings imprint on magnetic fields and light direction during their scramble to the sea — handling disrupts this process. If a programme's website or social media shows volunteers holding hatchlings, this is a disqualifying indicator of its ethical standards.",
    },
    {
      emoji: "🔦",
      title: "White lights on nesting beaches cause nest abandonment",
      body: "Nesting females are extremely sensitive to light pollution during the nesting process. White torchlight — including phone screens — causes females to abort nesting attempts and return to the sea. Ethical programmes issue red-light torches and enforce a strict no-white-light policy on the beach after dark. This is basic practice; its absence is a serious red flag.",
    },
    {
      emoji: "📋",
      title: "Ask for the data: where does nest success information go?",
      body: "Credible programmes submit nest success data to national conservation databases and international bodies including IUCN's Marine Turtle Specialist Group. Ask your operator specifically: 'Where is the data from this project submitted, and can you show me a published report or database entry?' If they cannot answer this, the 'conservation' work you would be doing has no scientific value.",
    },
    {
      emoji: "🦟",
      title: "Prepare for the realities of tropical field station life",
      body: "Beach patrol stations in Costa Rica, Mozambique, and Sri Lanka are working field environments, not resorts. Shared dormitories, basic shower facilities, significant insect presence, and an inverted sleep schedule are standard. Pack a red-light head torch, DEET insect repellent (40% minimum concentration), a lightweight long-sleeved shirt for beach patrol, and a genuine tolerance for basic conditions.",
    },
    {
      emoji: "🤝",
      title: "Community benefit matters as much as species protection",
      body: "The most sustainable turtle conservation programmes are those where the local community has an economic stake in the turtles surviving. Ask whether the programme employs local guides and staff, whether any programme fees flow to community projects, and whether there is a community education component. Programmes that parachute international volunteers into a location without meaningful community integration tend to produce lower long-term conservation outcomes.",
    },
    {
      emoji: "📅",
      title: "Four weeks produces significantly more impact than two",
      body: "The ecological community has moved toward recommending four weeks as the minimum meaningful contribution for conservation volunteering. Two weeks is better than nothing, but the first week of any placement is primarily skill acquisition — the second week is when useful data collection begins. If your schedule allows four weeks, the marginal scientific value of the additional two weeks is substantial.",
    },
  ],

  faqHeading: "Sea turtle conservation volunteering FAQ",
  faqIntro:
    "Specific answers to the practical and ethical questions most commonly asked before booking a sea turtle placement.",

  faqs: [
    {
      question: "Do I need any qualifications to volunteer for sea turtle conservation?",
      answer:
        "No formal qualifications are required for night patrol and hatchery roles — these are the primary volunteer positions at most programmes. All training is provided on arrival, typically over one to two days before you begin fieldwork. A biology or ecology background is useful for research assistant roles but is not essential for the core patrol and hatchery work. Basic fitness, patience, and a genuine willingness to follow strict handling protocols are the relevant prerequisites.",
    },
    {
      question: "What is the minimum age for sea turtle conservation volunteering?",
      answer:
        "Most programmes accept volunteers from age 18 without a parent or guardian. Several operators — including Projects Abroad and GVI — run under-18 programmes with additional supervision protocols, accepting students from age 15 or 16 with parental consent. Night beach patrol work has a minimum age of 18 at most operators due to the independent nature of the work. Check the specific operator's age policy before booking if this is relevant.",
    },
    {
      question: "Is it ethical to volunteer at a sea turtle hatchery?",
      answer:
        "It depends entirely on the hatchery's practices and scientific affiliation. Hatcheries that follow established protocols — collecting eggs from naturally vulnerable beach sections (not systematically relocating all nests), maintaining temperature data, recording emergence statistics, and submitting data to research databases — are a legitimate and valuable conservation tool. Hatcheries that exist primarily as a tourist attraction, allow handling of hatchlings, or cannot demonstrate scientific data submission are not. Ask the specific questions in the vetting section before booking.",
    },
    {
      question: "What time do night patrols typically run?",
      answer:
        "Night patrols generally begin after dark — typically around 9pm or 10pm — and run until 3am or 4am, or until the patrol group has walked the full beach transect. Volunteers are divided into rotating groups so that the beach is covered continuously without any individual working a full night every night. After returning from patrol, most volunteers sleep until midday and use the afternoon for hatchery work, data entry, and informal education sessions.",
    },
    {
      question: "Will I definitely see a sea turtle nesting?",
      answer:
        "In peak nesting season at established sites, the probability is high but not guaranteed on any single night. In Costa Rica's Tortuguero peak (July–September), most volunteers see multiple nesting events within a two-week placement. In Greece, at a less dense nesting site, it may take several patrol nights to encounter a nesting female. In all cases, the nights where no turtles appear are not wasted — beach survey data from negative nights is genuinely valuable to population trend research.",
    },
    {
      question: "Can I volunteer without staying at the project accommodation?",
      answer:
        "Most sea turtle projects are in remote or semi-remote coastal locations where project accommodation is the only practical option. The field station or project house is typically within walking distance of the beach, which is a practical necessity for 10pm patrol starts. Some programmes in more accessible destinations (parts of Greece, some Sri Lanka sites) allow volunteers to find their own accommodation nearby, but this is the exception rather than the rule. Budget accordingly.",
    },
    {
      question: "What happens to the data that volunteers collect?",
      answer:
        "At scientifically credible programmes, volunteer-collected data (nest counts, carapace measurements, tag readings, emergence success rates) is entered into national population databases and submitted to IUCN's Marine Turtle Specialist Group, which produces the global Sea Turtle Status Report. This multi-decade citizen science dataset is the primary evidence base for international conservation policy decisions affecting turtles. When you ask an operator where their data goes, this is the answer you should be looking for.",
    },
    {
      question: "Is Costa Rica or Greece better for a first sea turtle placement?",
      answer:
        "Costa Rica offers the highest turtle encounter density in the world during peak season — a two-week placement at Tortuguero in August virtually guarantees multiple nesting encounters and the full programme experience. Greece offers a European cultural context, significantly lower long-haul travel cost, and a historically important Mediterranean population in a dramatically beautiful island setting. Costa Rica has the better wildlife science credentials for a conservation-focused volunteer; Greece has the better lifestyle context for a European volunteer combining conservation with travel. Both are credible choices.",
    },
    {
      question: "How do I know if a programme is genuinely ethical?",
      answer:
        "The most reliable vetting process: (1) Ask for the programme's IUCN data submission record or link. (2) Check whether the programme is listed as approved by SEE Turtles (seeturtles.org), which vets against specific ethical criteria. (3) Search Go Overseas and Volunteer World for independently written reviews — not testimonials on the operator's own website. (4) Check the operator's social media for any photographs showing volunteers holding hatchlings — this is an immediate disqualifier. (5) Ask specifically what proportion of programme fees are retained by the local in-country partner.",
    },
  ],

  disclaimer:
    "Sea turtle nesting seasons and project availability change annually. Always confirm current project windows and availability directly with your chosen operator before booking flights. The ethical guidelines above reflect current IUCN and Sea Turtle Conservancy recommendations — always defer to your in-country team leader's specific protocols on site.",

  ctaHeading: "Find your sea turtle conservation placement",
  ctaDescription:
    "Browse sea turtle and marine conservation volunteering programmes listed on Abroader, or book a free consultation to match the right destination and operator to your travel dates.",
  ctaLinks: [
    { href: "/volunteering/marine", label: "Browse marine volunteering", primary: true },
    { href: "/opportunities/marine-reef-conservation", label: "Coral reef conservation" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/opportunities/wildlife-conservation-volunteer", label: "Wildlife conservation" },
    { href: "/volunteering", label: "All volunteering" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
