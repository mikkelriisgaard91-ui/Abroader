import type { OpportunityLanding } from "./types";

export const PHOTOGRAPHY_TRAVEL_COURSE: OpportunityLanding = {
  slug: "photography-travel-course",
  metaTitle: "Photography workshops abroad: Iceland, Morocco, Japan & beyond | Abroader",
  metaDescription:
    "Find the right travel photography workshop for your level — from Aurora shooting in Iceland to portraits in Marrakesh and winter temples in Japan. What you'll actually learn, what gear you need, and how to choose a guide worth following.",
  heroTitle: "Photography workshops abroad",
  heroSubtitle:
    "The difference between a holiday snap and a photograph that stops someone mid-scroll is not the camera — it is knowing what to look for and when to press the shutter. A photography workshop in a visually extraordinary place, guided by someone who knows both the craft and the light, accelerates that knowledge faster than years of solo shooting.",
  heroImage:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Photographer silhouetted on a volcanic hillside in Iceland at sunrise with aurora colours behind",
  category: "Skillcation",
  stats: [
    { value: "1 – 14 days", label: "workshop length range" },
    { value: "4 – 12", label: "typical group size" },
    { value: "RAW + edit", label: "what you take home" },
    { value: "Golden hour", label: "the reason for the 4am alarm" },
  ],

  introHeading: "What a photography workshop actually changes",
  introParagraphs: [
    "Most photographers plateau. They shoot for years, take thousands of photos, and improve slowly — because they are doing the same things in the same way and getting the same feedback (which is essentially none) from social media metrics. A guided photography workshop in an unfamiliar environment with a professional instructor breaks that plateau in days. You are forced to make decisions you have never made before — about light you have never shot in, subjects you have never approached, and compositions you would not have attempted without prompting.",
    "What a good photography workshop teaches you is not settings. Settings are in the manual. What it teaches you is seeing — the habit of noticing light quality, of reading a scene for its strongest element before you raise the camera, of being patient enough to wait for the moment rather than shooting reflexively and hoping. These are cognitive habits, and they are best developed under the gentle pressure of being with a group and an instructor in a situation where interesting things are actually happening around you.",
    "The output of a good photography workshop is not a set of finished images — though you will produce those. The output is the way you see when you come home and shoot your ordinary life. The light on a coffee cup in the morning. The geometry of a staircase in your city. The expression on your child's face before they realise you are looking. Extraordinary places teach you to see, and you carry that home.",
  ],

  howItWorksHeading: "How to choose and book the right photography workshop abroad",
  howItWorks: [
    {
      step: 1,
      title: "Match the destination to the photography you want to make",
      body: "Iceland is extraordinary for landscape, aurora, and long-exposure waterfall work — but you need cold-weather gear, a weather-sealed camera body, and genuine comfort with harsh conditions. Morocco is exceptional for street portraiture, geometric architecture, and colour — but it requires confidence with people and an understanding of local customs around photographing strangers. Japan in autumn and spring offers probably the most reliably beautiful subject matter in the world. Choose the destination based on what kind of photographs you want to make, not just where you want to go.",
    },
    {
      step: 2,
      title: "Assess the instructor's portfolio — not the company's marketing",
      body: "The photographs on a workshop website are often sourced from the destination rather than made by the instructors. Before booking, find the individual guide's personal portfolio — their Instagram, website, or portfolio platform — and look at their actual work. Does it show the kind of photographs you want to make? Is the technical quality high? Does it demonstrate genuine artistry rather than just technically correct exposures? A guide who makes photographs you admire will teach you things you cannot teach yourself.",
    },
    {
      step: 3,
      title: "Check what is actually taught versus what is experienced",
      body: "Some photography tours are experiences — you go to beautiful places with a guide and take photographs. This has value. A photography workshop involves structured instruction: the instructor reviews your images, explains why something did or did not work, demonstrates an alternative approach, and gives you directed exercises to try. Ask directly: how much time is spent on instruction and image review versus location visits? The best workshops integrate both — teaching happens at the location, in the moment, not only in classroom debriefs.",
    },
    {
      step: 4,
      title: "Understand what gear you actually need",
      body: "Many workshops are unnecessarily intimidating about gear requirements. The honest answer: a mirrorless or DSLR camera that shoots in RAW, a wide-angle lens (24–35mm equivalent or wider for landscapes), and a tripod are the essentials for most travel and landscape workshops. Arctic and underwater workshops have specific requirements (weather-sealed body, specific lens focal lengths). Ask the tour operator to send you a detailed gear list before you book — and ask whether they can lend or rent any items you do not own.",
    },
    {
      step: 5,
      title: "Plan for the editing phase — the photograph is made in two stages",
      body: "The best photography workshops include at least one post-processing session — a group review and editing walkthrough where the instructor shows you how to develop the images you made on location. If this is not included, ask whether the guide will provide editing notes, a preset library, or a follow-up online session. Coming home with 2,000 raw files and no idea how to develop them is frustrating. The edit is half the photograph.",
    },
  ],

  whyProviders:
    "Photography workshop providers range from solo photographer-guides running small intimate trips to established multi-guide organisations with standardised curricula. For landscape work, smaller operators with deep location knowledge consistently outperform larger companies. For street and documentary work, a guide who has genuine relationships in the community you are photographing is essential. Use the platforms below to find your shortlist, then evaluate each guide's personal portfolio before booking.",

  providerGroups: [
    {
      heading: "Specialist photography tour operators",
      intro:
        "These organisations are built specifically around photography education in extraordinary locations. They employ professional photographer-guides and structure their trips around light, season, and photographic output rather than general tourism.",
      providers: [
        {
          name: "Light & Land",
          description:
            "A UK-founded photography tour operator considered one of the best in the world for landscape and travel photography education. Runs guided workshops in Iceland, Morocco, the Scottish Highlands, Patagonia, and across Europe, led by named professional photographers whose personal portfolios are publicly available and verifiable. Trips are structured around the light — 4am starts for golden hour are standard and non-negotiable. Group sizes are deliberately small (eight to twelve participants). Post-processing sessions are included. The level of instruction is genuinely high — this is for people who are serious about photography, not first-time holiday snappers.",
          tags: ["Landscape + travel", "Iceland · Morocco · Patagonia", "Small groups", "Pro photographer-guides", "Editing included"],
          href: "https://www.lightandland.co.uk",
          category: "training-placement",
          useWhen:
            "You are a serious photographer — intermediate to advanced — who wants structured instruction in extraordinary locations from instructors with verifiable professional portfolios.",
        },
        {
          name: "Iceland Photo Tours",
          description:
            "The specialist for Iceland photography, run by Icelandic photographers who have shot the country for decades. Programmes cover aurora photography, glacier landscapes, waterfall long exposures, volcanic terrain, and highland summer light. The local knowledge is irreplaceable — knowing which locations produce the best light at which time of year, which weather conditions create the most dramatic scenes, and how to position relative to the aurora are things only a local guide can offer with reliability. Gear rental including weather-sealed bodies and ultrawide lenses is available. Best for anyone specifically targeting Iceland landscape photography.",
          tags: ["Iceland specialist", "Aurora · Glaciers · Waterfalls", "Local guides", "Gear rental", "All seasons"],
          href: "https://icelandphototours.com",
          category: "training-placement",
          useWhen:
            "Iceland is your specific destination and you want guides with deep local knowledge who know the light, the weather patterns, and the best locations for each season.",
        },
        {
          name: "Atlas Workshops",
          description:
            "Morocco and Middle East photography workshops with a strong focus on documentary-style portraiture, souks, and architectural geometry. Runs small-group programmes in Marrakesh, Fes, and the Atlas Mountains with local cultural fixers who facilitate authentic access to subjects and locations. The documentary and street photography instruction is genuine — you learn about ethical photography practice, how to approach and communicate with subjects, and how to use light in chaotic urban environments. Best for photographers interested in human subjects, colour, and cultural depth rather than pure landscape work.",
          tags: ["Morocco · Middle East", "Street + portraiture", "Small groups", "Cultural access", "Documentary focus"],
          href: "https://atlasworkshops.com",
          category: "training-placement",
          useWhen:
            "You want to shoot people, streets, and architecture in North Africa or the Middle East with a guide who has genuine local cultural access and documentary photography expertise.",
        },
        {
          name: "Japan Photo Guide",
          description:
            "Specialist Japan photography tours covering Kyoto temples, autumn foliage, winter snow monkeys, Tokyo urban night photography, and cherry blossom season. The guides are professional photographers who live in Japan — seasonal timing knowledge is exceptional. Programmes are structured around Japan's extraordinary seasonal visual transitions (sakura in March/April, momiji foliage in October/November, winter snow in February). Best for photographers who want to make the classic Japan photographs well rather than just document having been there.",
          tags: ["Japan specialist", "Kyoto · Tokyo · Snow country", "Seasonal timing", "Temple + landscape + urban", "Local guides"],
          href: "https://www.japanphotoguide.com",
          category: "training-placement",
          useWhen:
            "Japan is your destination and you want to time your visit and your locations around the seasonal visual calendar with guides who know exactly where to be and when.",
        },
      ],
    },
    {
      heading: "Premium and aggregator options",
      intro:
        "These options sit at either the premium end of the market or provide a broad platform for comparing photographers and workshops. National Geographic is the most aspirational brand; the aggregator platforms help you find lesser-known but often excellent independent photographer-guides.",
      providers: [
        {
          name: "National Geographic Expeditions — Photography",
          description:
            "National Geographic's expedition arm runs photography-focused trips led by photographers who have shot for the magazine. The brand carries significant weight and the destinations are extraordinary — Galápagos, Antarctica, Bhutan, East Africa. The price point is high (most trips run £4,000–£12,000 per person), but the instruction quality and the access to locations and subjects that the NatGeo network can arrange are often genuinely unique. Best for photographers who want the most aspirational brand experience and are willing to pay for it.",
          tags: ["Premium", "Remote destinations", "NatGeo photographers", "Antarctic · Galápagos · Bhutan", "Aspirational"],
          href: "https://www.nationalgeographic.com/expeditions/activity/photography",
          category: "direct-employer",
          useWhen:
            "You want the most prestigious photography expedition experience available and have the budget for a premium trip with NatGeo-affiliated photographers in extraordinary, remote locations.",
        },
      ],
    },
  ],

  salaryHighlightsHeading: "Which workshop format matches your level and goal?",
  salaryHighlightsIntro:
    "Photography workshops range from a single day in a city with a local photographer to a two-week expedition to one of the world's most visually dramatic places. The right format depends on your current level, your available time, and what you want to produce.",
  salaryHighlights: [
    {
      country: "Day workshop",
      flag: "📷",
      salaryRange: "£80 – £350",
      salaryLabel: "per person (location-specific, guide-led)",
      includes: [
        "4–8 hours with a professional photographer-guide",
        "Specific technique focus (golden hour, street, long exposure)",
        "Immediate feedback on your images",
        "Best for a specific skill gap or city visit",
      ],
      badge: "Best for focused skill work",
    },
    {
      country: "4–5 day intensive trip",
      flag: "🌄",
      salaryRange: "£600 – £1,800",
      salaryLabel: "per person (excluding flights and accommodation)",
      includes: [
        "Multiple location days across different light conditions",
        "Evening image reviews and editing sessions",
        "A genuine portfolio-quality image set to take home",
        "Best level for serious amateurs wanting a step-change",
      ],
      badge: "Most popular format",
    },
    {
      country: "Full expedition (10–14 days)",
      flag: "🏔️",
      salaryRange: "£1,800 – £5,000",
      salaryLabel: "per person (excluding international flights)",
      includes: [
        "Remote or multiple destinations within a region",
        "Significant portfolio output across diverse subjects",
        "Deep relationship with guide — mentor-level feedback",
        "Often includes accommodation and internal transport",
      ],
      badge: "Best for portfolio building",
    },
    {
      country: "NatGeo or premium expedition",
      flag: "🌍",
      salaryRange: "£4,000 – £14,000",
      salaryLabel: "per person (typically all-inclusive)",
      includes: [
        "National Geographic or equivalent brand photographer",
        "Extraordinary access to remote or exclusive locations",
        "All accommodation, transport, and permits included",
        "For serious photographers with aspirational goals",
      ],
      badge: "Premium experience",
    },
  ],

  roleTypesHeading: "Which type of photography workshop suits you?",
  roleTypesIntro:
    "Photography workshops serve very different motivations. The right format depends on what you want to shoot, how serious you are, and what you want to do with the images afterwards.",
  roleTypes: [
    {
      icon: "🌅",
      title: "Weekend Shooter",
      level: "Entry level",
      keyCerts: ["No prior experience required", "Any interchangeable lens camera"],
      salaryRange: "Day to weekend / £80–£500",
      description:
        "You have a good camera, you enjoy photography as part of travel, and you want to make meaningfully better images on your trips — images you are proud to print or share. You are not planning to go professional, but you want to understand why some of your shots work and others do not. A day or weekend workshop focused on a single location or technique is ideal. Prioritise a guide who is a patient teacher, not just an impressive shooter — the ability to explain concepts to non-technical learners is a distinct skill.",
    },
    {
      icon: "📱",
      title: "Travel Content Creator",
      level: "Entry-mid level",
      keyCerts: ["Lightroom/Capture One basics", "Strong composition instinct"],
      salaryRange: "Weekend to 5-day trip / £300–£1,500",
      description:
        "You are building content for social media, a blog, or a brand — and photography quality is a direct driver of your engagement and professional credibility. For you, understanding how to create consistent visual style matters as much as individual image quality. A workshop that covers both shooting and editing workflow, in a visually rich destination, gives you both better images and a replicable process. Look for workshops that explicitly include post-processing sessions and cover export settings for different platforms.",
    },
    {
      icon: "🎯",
      title: "Serious Amateur",
      level: "Mid level",
      keyCerts: ["RAW shooting", "Manual exposure", "Lightroom or Capture One"],
      salaryRange: "5–10 day expedition / £800–£3,500",
      description:
        "You already shoot in RAW, you understand the exposure triangle, you post-process your own images — and you have plateaued. You want to be challenged by a photographer who is significantly better than you, in conditions that genuinely test your skills. Iceland in winter, Morocco's medinas, Japan in cherry blossom season. Look for workshops with a high instructor-to-student ratio (maximum eight students per guide), published instructor portfolios you genuinely admire, and structured feedback sessions where your individual work is discussed.",
    },
    {
      icon: "🖼️",
      title: "Pro Transition",
      level: "Mid-senior level",
      keyCerts: ["Portfolio of publishable work", "Commercial and licensing understanding"],
      salaryRange: "Multi-week expedition / £2,500–£12,000",
      description:
        "You are working toward professional photography — commercial work, editorial commissions, licensing, or teaching. A photography workshop at this level is about portfolio development, industry connections, and finding a photographic voice. You need instructors who work professionally in the sector you are targeting (editorial, commercial, fine art) and who can speak to the business of photography as well as the craft. NatGeo-affiliated expeditions and established workshop brands with strong alumni networks are the priority at this level.",
    },
  ],

  regionsHeading: "Best destinations for a photography workshop",
  regionsIntro:
    "Each destination below offers a specific photographic environment — subject matter, light quality, and visual culture that you cannot replicate elsewhere. Choose based on what you want to photograph, not just where you want to go.",

  regions: [
    {
      slug: "iceland-photography",
      name: "Iceland",
      label: "Iceland",
      image: "https://images.unsplash.com/photo-1531168486895-c522eb0c8fac?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Green and purple aurora borealis reflected in a still glacial lagoon in Iceland",
      season: "Aurora: Oct–Mar. Midnight sun landscape: May–Aug. Puffins: Jun–Aug.",
      body: "Iceland is the world's most photographically extraordinary accessible destination — volcanic black sand beaches, glacial lagoons with floating icebergs, geothermal steam vents, waterfalls in every direction, and the aurora borealis in winter. The photographic challenge is that Iceland's conditions are demanding: rapidly changing weather, extreme cold, wet spray near waterfalls, and the physical logistics of long-exposure work in wind. A guided workshop with local photographers who know the conditions is the difference between struggling with the environment and working with it. Jökulsárlón glacial lagoon, Skógafoss, Kirkjufell, and the Westfjords are the headline locations — each has specific timing and positioning that only local knowledge can optimise.",
    },
    {
      slug: "morocco-photography",
      name: "Morocco",
      label: "Morocco",
      image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Narrow blue and white alleyways of Chefchaouen Morocco with hanging lanterns and geometric shadows",
      season: "Best: Oct–Apr. Avoid July–August heat. Ramadan timing varies.",
      body: "Morocco is one of the world's richest documentary and architectural photography destinations. The medinas of Marrakesh, Fes, and Chefchaouen offer a density of visual material — light cutting through narrow alleys, geometric tile patterns, the chaos of souks at peak hour — that rewards patient, skilled photographers with extraordinary images. The central photographic challenge is ethical street photography: navigating the relationship between photographer and subject in a culture with complex norms around being photographed. The best workshops include fixers or locally-connected guides who facilitate respectful, meaningful photographic encounters rather than opportunistic tourist shots. Atlas mountain landscapes offer a dramatic contrast to the medina.",
    },
    {
      slug: "japan-photography",
      name: "Japan",
      label: "Japan",
      image: "https://images.unsplash.com/photo-1490761668535-35497054764e?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Traditional Japanese torii gates leading through autumn foliage near a Kyoto shrine",
      season: "Cherry blossom: Mar–Apr. Autumn foliage: Oct–Nov. Snow monkeys: Jan–Feb.",
      body: "Japan offers the most seasonally precise photographic opportunity in the world — the exact week of cherry blossom peak, the turning of the maple leaves, the first snow at Jigokudani where macaques bathe in thermal pools. Japanese visual culture — from the architectural precision of Kyoto's temple gardens to the sensory overload of Shinjuku at night — gives photographers a subject matter that is simultaneously ancient and hyper-modern, serene and chaotic. For serious photographers, Japan is the most demanding destination in the best sense: every element of a well-composed image has meaning, and understanding that meaning requires the cultural context that a good local guide provides.",
    },
    {
      slug: "namibia-photography",
      name: "Namibia",
      label: "Namibia",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Vast orange sand dunes of Sossusvlei Namibia at sunrise with dramatic shadows and a lone tree",
      season: "May – Sep (dry season, best wildlife and landscape light).",
      body: "Namibia is a landscape photographer's singular destination — the Namib Desert, one of the world's oldest, produces the kind of images that win awards: dead camel thorn trees silhouetted against blood-orange dunes at Deadvlei, oryx crossing vast salt pans at dawn, Milky Way photography of near-incomprehensible clarity over the southern desert sky. The challenge is scale and logistics — distances are vast and conditions are harsh. A guided photography expedition handles both, allowing you to focus on the photography while the guide manages the dawn-to-dusk logistics of positioning. Best visited May–September during the dry season when the light is extraordinary and wildlife concentrates around remaining water sources.",
    },
    {
      slug: "india-photography",
      name: "India — Rajasthan",
      label: "India",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Painted havelis and turbaned men at the golden Jaisalmer fort market in Rajasthan at dusk",
      season: "Best: Oct – Mar. Avoid monsoon (Jul–Sep) and peak summer heat (Apr–Jun).",
      body: "Rajasthan is India's most visually saturated region — turban colours, painted havelis, camel fairs, and palace architecture against desert light that is uniquely golden. Jaisalmer, Udaipur, Jodhpur (the Blue City), and Jaipur each offer a distinct photographic environment. The Pushkar Camel Fair in November is arguably the world's single richest week for documentary photography. India presents significant challenges for first-time photographers: the volume of stimulation is overwhelming, the ethical complexity of photographing poverty requires careful thought, and the logistics without a guide are consuming. A workshop that handles logistics and cultural framing allows you to focus entirely on the photography.",
    },
  ],

  seasonalCalendar: [
    {
      region: "Iceland",
      months: "Oct – Mar (aurora) / May – Aug (midnight sun)",
      locations: ["Jökulsárlón", "Skógafoss", "Kirkjufell", "Westfjords"],
      notes: "Aurora viewing requires dark skies — October to March. Midnight sun landscape photography May–August. Puffin season June–August at Látrabjarg cliffs.",
    },
    {
      region: "Japan",
      months: "Mar – Apr / Oct – Nov",
      locations: ["Kyoto", "Tokyo", "Jigokudani (Nagano)", "Hokkaido"],
      notes: "Cherry blossom peak varies year to year — track bloom forecasts in February. Autumn foliage (momiji) October–November from north to south. Snow monkey season December–February.",
    },
    {
      region: "Morocco",
      months: "Oct – Apr",
      locations: ["Marrakesh", "Fes", "Chefchaouen", "Sahara (Merzouga)"],
      notes: "October–February for coolest temperatures and best light. Sahara dune photography: October–March for manageable temperatures. Avoid July–August heat.",
    },
    {
      region: "Namibia",
      months: "May – Sep",
      locations: ["Sossusvlei", "Deadvlei", "Etosha NP", "NamibRand"],
      notes: "Dry season produces clearest light and concentrated wildlife. June–August for Milky Way photography (darkest skies, below freezing at night in desert).",
    },
    {
      region: "India (Rajasthan)",
      months: "Oct – Mar",
      locations: ["Jaisalmer", "Jodhpur", "Udaipur", "Pushkar"],
      notes: "Pushkar Camel Fair (November, date varies with Hindu calendar) — the world's most photographically rich week. Winter light October–February is golden and manageable in temperature.",
    },
  ],

  goodToKnowHeading: "What to know before your first photography workshop",
  goodToKnow: [
    {
      emoji: "⏰",
      title: "The 4am alarm is not optional",
      body: "Golden hour — the 30–60 minutes after sunrise and before sunset — produces the light that great landscape photographs are made in. In Iceland in winter, sunrise might be 10am; in Namibia in summer, it is 5:30am. In Japan during cherry blossom season, you need to be at Maruyama Park before the tour groups arrive at 7am. Every great landscape photography workshop centres its day around golden hour, which means early mornings and late evenings are the working hours. Embrace this or choose a different kind of workshop.",
    },
    {
      emoji: "🌧️",
      title: "Weather-sealed gear for specific destinations",
      body: "For Iceland, spray from waterfalls and driving rain are standard shooting conditions — a weather-sealed camera body is genuinely necessary, not a luxury. For desert destinations (Namibia, Morocco Sahara), fine sand penetrates camera bodies over time — lens changes in the field are best minimised. For Japan in spring, the main hazard is crowds rather than weather. Ask your specific workshop operator what conditions to prepare for and whether gear rental is available if you do not own the required items.",
    },
    {
      emoji: "🗂️",
      title: "Plan for 2,000 raw files — have a workflow before you go",
      body: "A serious photography workshop will produce more images than you have ever taken in a similar time frame. You will come home with 1,500–3,000 raw files that need culling, selecting, and editing before they become photographs. If you do not have a post-processing workflow (Lightroom, Capture One, or equivalent), spend time learning the basics before you travel — specifically import, culling, and basic RAW development. The workshop's editing sessions will build on this foundation. Arriving without it means the post-workshop period is frustrating rather than rewarding.",
    },
    {
      emoji: "🤝",
      title: "Street photography requires cultural preparation",
      body: "Photographing people in Morocco, India, or any documentary-rich destination without cultural context and basic language phrases is both ethically questionable and produces worse images. Before a documentary photography workshop, research local customs around photography: in some communities, pointing a camera without permission is deeply offensive; in others, a smile and eye contact is sufficient consent. The best workshops include a cultural briefing on the first day. If yours does not, ask for one. The photographs you make when you have genuine human connection with your subjects are categorically better than those taken without it.",
    },
    {
      emoji: "🔋",
      title: "Cold destroys battery life faster than you expect",
      body: "In Iceland in January or Namibia at a desert dawn, camera batteries drain at roughly twice the rate of normal conditions. Bring twice as many batteries as you think you need, store them inside a jacket pocket (body warmth slows discharge), and start each shooting session with fully charged batteries. Running out of power at the moment the aurora appears, or during a camel fair at peak light, is the most avoidable disappointment in travel photography.",
    },
  ],

  faqHeading: "Common questions about photography workshops abroad",
  faqIntro: "Practical answers from photographers who have done this.",
  faqs: [
    {
      question: "What camera do I need for a photography workshop abroad?",
      answer:
        "A mirrorless or DSLR camera that can shoot in RAW format is the baseline requirement for most landscape and travel workshops. Specific destinations may have additional requirements: weather-sealed bodies for Iceland and other wet environments, or a wide-angle lens (24mm equivalent or wider) for landscape work. Smartphone photography workshops also exist, but most serious workshops require an interchangeable lens camera. If you are unsure, contact the operator before booking — many can recommend or arrange gear rental.",
    },
    {
      question: "Do I need to shoot in manual mode for a photography workshop?",
      answer:
        "Not necessarily for introductory workshops, but you should at minimum understand what aperture, shutter speed, and ISO do — the exposure triangle. Shooting in aperture priority mode (Av) while you understand the other elements is fine for many workshops. For technical workshops covering long exposure, low-light, or aurora photography, manual mode control is essential. If you are unsure of your current level, be honest with the operator — they can place you in the appropriate group.",
    },
    {
      question: "What is the ideal group size for a photography workshop?",
      answer:
        "Eight to twelve participants per instructor is the standard for a quality workshop. Below six and you often lose the energy and peer feedback that a group dynamic provides. Above twelve and individual attention becomes scarce, waiting times at key locations increase, and the group moves at the slowest person's pace. When evaluating workshops, ask specifically about the instructor-to-participant ratio — not just the total group size, as some trips have multiple guides.",
    },
    {
      question: "Is post-processing instruction included in photography workshops?",
      answer:
        "It varies by provider. The best workshops include at least one dedicated editing session where the instructor walks through their workflow on images made during the trip. Some include individual image reviews. Many do not include editing instruction at all. If editing education is a priority for you, confirm it is explicitly included before booking — and ask specifically whether the instructor will review your individual images or just demonstrate their own workflow.",
    },
    {
      question: "Do I own the images I make on a photography workshop?",
      answer:
        "Yes — you own all images you make on a photography workshop. Some operators ask for permission to use participant images for marketing purposes; you can decline. If the workshop involves photographing private venues, indigenous communities, or locations with commercial licensing requirements, the operator should inform you in advance. For travel and landscape photography in public locations, copyright belongs entirely to you.",
    },
    {
      question: "Which destination is best for a first-time photography workshop?",
      answer:
        "For landscape beginners, Iceland in summer (midnight sun, no extreme cold) or Scotland are the most forgiving physically while being visually extraordinary. For travel and street photography beginners, Chefchaouen in Morocco (the Blue City) is the most visually accessible. Japan in cherry blossom season is extraordinary but logistically more complex. Namibia and Patagonia are best for intermediate-to-advanced photographers who can handle demanding conditions. Choose a destination where the conditions will not overwhelm you physically — you cannot photograph well when you are cold, scared, or exhausted.",
    },
    {
      question: "How do I verify that a photography workshop guide is genuinely skilled?",
      answer:
        "Find the individual guide's personal portfolio — their website, Instagram, or portfolio platform — and evaluate their actual work. Look for: technical quality (sharpness, exposure, clean RAW files), artistic merit (composition, moment, emotional impact), and breadth (can they shoot in different conditions and produce different types of images?). Separately, read reviews that specifically mention the guide's teaching ability rather than just the destination. Being a brilliant photographer and being a brilliant photography teacher are different skills — you need both.",
    },
    {
      question: "What should I do with my images when I get home?",
      answer:
        "Back up your raw files in two locations before you do anything else (external hard drive plus cloud). Then cull your selects — aim for 50–100 best images from a week-long trip, not 2,000. Edit those selects thoughtfully, using the techniques from the workshop's editing sessions. Print your ten best images — printing forces you to evaluate your work with fresh eyes and teaches you things about composition and light that screens conceal. Finally, share selectively on whatever platform suits your purpose, and immediately plan when you will shoot again.",
    },
  ],

  youtubeVideosHeading: "Watch before you shoot",
  youtubeVideos: [
    {
      videoId: "7ZVyNjKSr0M",
      title: "Iceland photography — how to shoot the aurora",
      channelName: "Thomas Heaton",
      description: "A professional landscape photographer's practical guide to aurora photography in Iceland — gear, settings, and the mindset for shooting in extreme conditions.",
    },
    {
      videoId: "PwCfFKNnG7E",
      title: "How I approach street photography in Morocco",
      channelName: "Sean Tucker",
      description: "The ethics and practicalities of street photography in a culturally complex destination — how to engage authentically rather than opportunistically.",
    },
    {
      videoId: "5pb03DnCzFk",
      title: "Japan cherry blossom photography — timing, locations, tips",
      channelName: "Nigel Danson",
      description: "When to go, where to be, and how to make photographs that capture more than 'I was there in spring.'",
    },
  ],

  disclaimer:
    "Workshop availability, pricing, and group sizes change seasonally. Weather conditions at photography destinations cannot be guaranteed — aurora sightings are probability-based, not certain. Always check gear requirements, physical fitness expectations, and insurance coverage directly with the operator before booking.",

  ctaHeading: "Find your photography workshop abroad",
  ctaDescription:
    "Compare photography tours and workshops by destination, level, and duration.",
  ctaLinks: [
    { href: "https://www.lightandland.co.uk", label: "Browse Light & Land workshops", primary: true },
    { href: "/opportunities/adventure-certification-abroad", label: "Adventure certification trips" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
  relatedLinks: [
    { href: "/opportunities/stargazing-astronomy-travel", label: "Stargazing & astronomy travel" },
    { href: "/opportunities/language-immersion-abroad", label: "Language immersion abroad" },
    { href: "/opportunities/creative-arts-retreat", label: "Creative arts retreats" },
  ],
};
