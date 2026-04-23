import type { OpportunityLanding } from "./types";

export const MOTORCYCLE_TOUR_RETREAT: OpportunityLanding = {
  slug: "motorcycle-tour-retreat",
  metaTitle: "Motorcycle Tour Retreats Abroad 2026 — Vietnam, Patagonia, Balkans & More | Abroader",
  metaDescription:
    "The definitive guide to motorcycle touring retreats abroad. Guided and self-guided tours in Vietnam, Patagonia, the Balkans, India, and Mongolia — real operators, real routes, real costs.",
  heroTitle: "Motorcycle tour retreats abroad",
  heroSubtitle:
    "A guided motorcycle tour abroad is arguably the most immersive way to experience a country — you are inside the landscape rather than observing it through a window, stopping when something interests you, taking roads that never appear on a tourist itinerary. The growth of adventure motorcycle touring has produced a world-class operator market across the most compelling routes on earth. Here is how to choose one that will actually deliver on the promise.",
  heroImage:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Motorcyclist on a winding mountain road in a remote landscape with dramatic sky overhead",
  category: "Retreats",
  stats: [
    { value: "Vietnam", label: "most popular first-time destination" },
    { value: "200+", label: "tours across 6 continents (Edelweiss)" },
    { value: "7–21", label: "typical tour duration in days" },
    { value: "6–8 months", label: "advance booking required for Patagonia" },
  ],

  introHeading: "What makes a motorcycle tour retreat different from independent travel",
  introParagraphs: [
    "A guided motorcycle tour is not the same as renting a scooter and improvising. The best operators build routes that take months to perfect — local road intelligence, permissions for restricted areas, pre-vetted accommodation, mechanics on call, and guides who can communicate with locals and navigate bureaucratic border crossings without losing hours. The difference between a self-planned route and a professionally guided one is the difference between seeing the most accessible 10% of a destination and the most extraordinary 50% of it.",
    "The motorcycle touring market has matured into a distinct travel category. Global operators like Edelweiss Bike Travel and Ride Expeditions run programmes on six continents. Destination specialists — Ride ADV in Patagonia, Vietnam Bikers in Southeast Asia — have built deep local expertise over years of operation. The experience of riding Patagonia's Carretera Austral with a local guide who has ridden it forty times is categorically different from riding it alone with a GPS and a phrase book.",
    "Most tours provide rental bikes, which solves the shipping problem and ensures you are on a machine appropriate to the terrain. This has opened adventure touring to a much wider audience — you no longer need to own a large adventure bike or be willing to pack it on a freight flight. Many participants arrive having only ridden middleweight bikes at home and find themselves on KTM 790 Adventures or BMW GS bikes on unpaved high-altitude roads, which is precisely the appeal.",
  ],

  howItWorksHeading: "How to plan and book a motorcycle tour abroad",
  howItWorks: [
    {
      step: 1,
      title: "Assess your riding experience honestly",
      body: "Most guided tours require a minimum of one to two years of riding experience and a full motorcycle licence. Patagonian and Himalayan routes specifically require off-road and gravel competency — unprepared riders on these routes cause delays and safety issues for the group. Vietnam dirt bike tours are generally more accessible to intermediate riders. Be honest in your self-assessment; most operators ask for riding experience details when booking.",
    },
    {
      step: 2,
      title: "Choose between guided, self-guided, and supported",
      body: "Fully guided tours have a lead guide on the road and a support vehicle following — the most accessible option. Self-guided tours provide GPX routes, pre-booked accommodation, and emergency support without a guide in front of you — more freedom, higher skill requirement. Supported tours are a hybrid: you ride unsupported daily but the operator handles logistics, accommodation, and mechanical support. Each suits a different travel style.",
    },
    {
      step: 3,
      title: "Choose a destination matched to your riding style",
      body: "Vietnam (Ho Chi Minh Trail, Ha Giang Loop) suits riders who want cultural immersion on varied terrain. Patagonia (Ruta 40, Carretera Austral) is for riders who want dramatic wilderness on dirt roads with minimal services. The Balkans offer European infrastructure with dramatically reduced tourist density and a mix of tarmac and gravel. India (Manali to Leh, Rajasthan circuits) is culturally overwhelming and logistically unpredictable — exactly what appeals to some riders.",
    },
    {
      step: 4,
      title: "Book at least 4–8 months early for the best routes",
      body: "The most in-demand tours — particularly Patagonia and Mongolia — sell out the same year they open for bookings. If you have a specific destination and season in mind, research and book well ahead. Last-minute spaces do exist but are rarely on the most sought-after routes or in the best accommodation.",
    },
    {
      step: 5,
      title: "Sort your licence, insurance, and international driving permit",
      body: "Almost every country requires an International Driving Permit (IDP) alongside your domestic licence for foreign motorcycle riding. The IDP is issued by national motoring associations (AA, RAC, or equivalent) and takes days to process. Your travel insurance must specifically cover motorcycle riding — this exclusion catches many people out. Sort both at least a month before departure.",
    },
  ],

  whyProviders:
    "Motorcycle tour operators range from global multi-destination companies with decades of experience to boutique destination specialists who ride the same routes repeatedly and know them in extraordinary depth. Both are represented below.",

  providerGroups: [
    {
      heading: "Global multi-destination operators",
      intro:
        "These operators run tours across multiple continents and are the most efficient starting point for comparing across destinations, styles, and bike availability.",
      providers: [
        {
          name: "Edelweiss Bike Travel",
          description:
            "The world's largest guided motorcycle tour operator with 200+ tours across 6 continents. Covers the Balkans, Scandinavia, India, Japan, Patagonia, and Africa. Rental bikes included in most tours — no need to ship your own. Established 1980; the benchmark for organised motorcycle travel globally.",
          tags: ["200+ Tours", "6 Continents", "Rental Bikes Included", "Since 1980"],
          href: "https://www.edelweissbike.com",
          category: "direct-employer",
          useWhen: "You want the widest range of destinations and the most established reputation in guided motorcycle touring.",
        },
        {
          name: "Ride Expeditions",
          description:
            "Adventure moto tour operator running guided and self-guided tours across Vietnam, Patagonia, India, Colombia, Mongolia, and South Africa since 2012. GPX routes, support vehicles, and local guides. Known for off-the-beaten-track route curation and small group sizes.",
          tags: ["3 Continents", "Guided + Self-Guided", "Small Groups", "Since 2012"],
          href: "https://www.rideexpeditions.com",
          category: "direct-employer",
          useWhen: "You want adventure touring with local route intelligence and flexible guided or independent options.",
        },
        {
          name: "Horizons Unlimited (Community)",
          description:
            "The world's largest motorcycle travel community and forum. Invaluable for independent route planning, country-specific visa and border information, and connecting with other riders. Not a commercial tour operator — a community resource essential for self-guided planning.",
          tags: ["Community Resource", "Route Planning", "Global", "Forum"],
          href: "https://www.horizonsunlimited.com",
          category: "aggregator",
          useWhen: "You are planning a self-guided tour and want the collective intelligence of the global adventure touring community.",
        },
      ],
    },
    {
      heading: "Destination-specialist operators",
      intro:
        "For specific destinations, operators with deep local knowledge consistently deliver a better experience than generalist companies. These three represent the leaders in their respective areas.",
      providers: [
        {
          name: "Vietnam Bikers",
          description:
            "Top-rated Vietnam motorcycle tour operator on TripAdvisor. Specialises in off-road and adventure routes through Ha Giang, the Sapa Loop, and into Laos. Expert local guides, quality bikes, and a safety record built over years of international tours. Current 2026/2027 season bookings open.",
          tags: ["Vietnam + Laos", "Off-Road Routes", "TripAdvisor Top Rated"],
          href: "https://vietnammotorcycletours.com",
          category: "direct-employer",
          useWhen: "You want local Vietnamese expertise, off-road route access, and a consistently reviewed operation in Southeast Asia.",
        },
        {
          name: "Ride ADV (Patagonia Specialist)",
          description:
            "Patagonia motorcycle tour specialist with a limited private fleet. Guided group tours and Fly & RIDE self-guided packages across Chile and Argentina. High demand — some dates sell out 6–8 months in advance. The most specialised and respected operator on the Carretera Austral.",
          tags: ["Patagonia", "Chile · Argentina", "Carretera Austral", "Books Out Fast"],
          href: "https://www.rideadv.com",
          category: "direct-employer",
          useWhen: "Patagonia is your specific destination — this is the most specialised and demand-intensive operator for the route.",
        },
        {
          name: "MotoPatagonia",
          description:
            "Boutique Patagonia motorcycle tour company immersing riders in local culture across Ruta 40 and Carretera Austral. Small group tours with personalised itineraries and genuine cultural depth beyond the road itself — estancia stays, wildlife stops, authentic local dining.",
          tags: ["Patagonia", "Small Groups", "Cultural Immersion", "Ruta 40"],
          href: "https://www.motopatagonia.com",
          category: "direct-employer",
          useWhen: "You want Patagonia with a smaller group and deeper cultural engagement than the larger operator packages.",
        },
      ],
    },
  ],

  regionsHeading: "Best destinations for motorcycle tour retreats",
  regionsIntro:
    "The five destinations below consistently produce the most talked-about motorcycle touring experiences globally. Each has a distinct character, terrain type, and optimal season.",

  regions: [
    {
      slug: "vietnam",
      name: "Vietnam",
      label: "Vietnam",
      image:
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Motorcyclist on a winding mountain road through green terraced rice fields in Ha Giang, Vietnam",
      season: "Best: October – April (avoiding the wet season)",
      body: "Vietnam's road network combines some of the most diverse terrain in Southeast Asia with an extraordinary density of cultural experience per kilometre. The Ha Giang Loop in the far north — a circuit through limestone karst mountains and Hmong hill tribe villages near the Chinese border — has become one of the world's most celebrated motorcycle routes in the past decade. The Ho Chi Minh Trail, running roughly parallel to the coast from north to south, passes through jungle, mountains, and former wartime history. Guided tours typically use semi-automatic 110cc bikes for the mountain routes or larger adventure bikes for the trails. Vietnam is considered the most accessible adventure touring destination for relative beginners — the roads are technically manageable, the food and accommodation are exceptional in quality and price, and the cultural immersion is immediate.",
    },
    {
      slug: "patagonia",
      name: "Patagonia",
      label: "Patagonia",
      image:
        "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Motorcycle on a gravel road in Patagonia with snow-capped Andes in the background",
      season: "Best: November – March (Southern Hemisphere summer)",
      body: "Patagonia is among the world's most viscerally powerful motorcycle destinations. The Carretera Austral — a mostly unpaved road running 1,240km south from Puerto Montt through Chilean Patagonia — is widely cited as the most spectacular route in South America. The road passes through old-growth rainforest, glacial rivers, and coastal fjords with almost no commercial infrastructure — fuel, food, and shelter must be planned in advance. Argentina's Ruta 40, running parallel to the Andes from the north, is more accessible and covers equally dramatic high-altitude pampas terrain. Tours require genuine off-road competency; the combination of loose gravel, river crossings, and Patagonian wind (which can exceed 100km/h) separates this from recreational touring. The reward is proportional to the challenge.",
    },
    {
      slug: "balkans",
      name: "The Balkans",
      label: "Balkans",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Motorcyclist on a coastal road in Montenegro with the Adriatic visible below",
      season: "Best: May – September",
      body: "The Balkans have emerged as Europe's most compelling motorcycle touring region — a combination of European road infrastructure, dramatically reduced tourist traffic compared to Western Europe, and route diversity ranging from Adriatic coastal roads to Montenegrin mountain passes. Albania, Bosnia, Kosovo, Serbia, Montenegro, and North Macedonia all offer extraordinary scenery that has not yet been over-touristed. The complete circuit from Dubrovnik through Albania to Belgrade and back covers multiple cultural traditions, Ottoman and communist architectural heritage, and landscapes that transition from Mediterranean coastal to alpine within a day's riding. An international licence is required in several Balkan nations; border crossings between non-EU countries add logistical complexity that a guided tour manages significantly better than self-planning.",
    },
    {
      slug: "india-himalaya",
      name: "India — Himalayan Routes",
      label: "India",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Royal Enfield motorcycle on the Manali to Leh highway with snow-capped peaks in the background",
      season: "Best: June – September (road opening window)",
      body: "The Manali to Leh Highway is the world's second-highest motorable road and one of the most mythologised motorcycle routes in existence. The route passes through Himalayan passes exceeding 5,000 metres, crossing landscapes that range from arid moonscape to alpine meadow within a single day. The Royal Enfield Himalayan has become the preferred machine on these routes — robust, locally serviced, and appropriately geared for altitude. Guided tours typically arrange fuel and altitude sickness medication logistics, which are genuinely complex at this elevation. This is not a beginner route — altitude sickness is a real risk, roads can close to single vehicles when snowfall arrives, and mechanical support in remote Himalayan passes is limited.",
    },
    {
      slug: "mongolia",
      name: "Mongolia",
      label: "Mongolia",
      image:
        "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Motorcycle crossing a vast open steppe in Mongolia with a ger camp in the distance",
      season: "Best: June – September",
      body: "Mongolia offers the world's most extreme off-road motorcycle touring experience — an enormous country with almost no sealed roads, a nomadic culture unchanged for centuries, and the logistical challenge of navigating by GPS track rather than road sign. The route from Ulaanbaatar through the Orkhon Valley, the Gobi Desert, and to the Russian border is the classic circuit. Riders sleep in ger camps or wild camp with the genuine support of nomadic families along the way. This is a destination for experienced off-road riders who want genuinely remote adventure — it is not a destination for those primarily interested in scenery from a comfortable saddle. Guided tours make the logistics manageable; independent riding in Mongolia is not recommended without extensive prior off-road experience.",
    },
  ],

  salaryHighlightsHeading: "What does a motorcycle tour retreat cost?",
  salaryHighlightsIntro:
    "Guided motorcycle tour pricing typically includes the rental bike, accommodation, guide, and in some cases meals. Flights and personal expenses are separate. The ranges below reflect 7–14 day tour packages.",
  salaryHighlights: [
    {
      country: "Vietnam (7–10 days)",
      flag: "🏍️",
      salaryRange: "€600–€1,200",
      salaryLabel: "guided tour, bike included",
      includes: ["Rental bike (semi-auto or adventure)", "Local guide on road", "Accommodation and breakfast", "Best value destination globally"],
      badge: "Most accessible for beginners",
    },
    {
      country: "Balkans (10–14 days)",
      flag: "🇷🇸",
      salaryRange: "€1,400–€2,800",
      salaryLabel: "guided tour, bike included",
      includes: ["Mid-size adventure bike rental", "Accommodation throughout", "Lead guide and support vehicle", "Border crossing logistics"],
    },
    {
      country: "India Himalaya (12–14 days)",
      flag: "🏔️",
      salaryRange: "€1,200–€2,500",
      salaryLabel: "guided tour, bike included",
      includes: ["Royal Enfield Himalayan rental", "Altitude sickness protocol", "Permits and border paperwork", "Local guide and support"],
    },
    {
      country: "Patagonia (14–21 days)",
      flag: "🗺️",
      salaryRange: "€2,500–€5,000",
      salaryLabel: "guided tour, bike included",
      includes: ["BMW GS or KTM adventure bike", "Support vehicle", "Pre-booked accommodation", "Books out 6–8 months ahead"],
      badge: "Most in-demand tour globally",
    },
  ],

  seasonalCalendar: [
    {
      region: "Vietnam",
      months: "October – April",
      locations: ["Ha Giang Loop", "Ho Chi Minh Trail", "Hai Van Pass", "Sapa region"],
      notes: "Avoid the monsoon season (May–September) for the mountain routes. The Ha Giang Loop is particularly striking in autumn when the rice terraces are yellow.",
    },
    {
      region: "Patagonia",
      months: "November – March",
      locations: ["Carretera Austral", "Ruta 40", "Torres del Paine area"],
      notes: "Southern Hemisphere summer only — the Carretera Austral is effectively inaccessible outside this window. November and March have fewer tourists than December–February.",
    },
    {
      region: "Balkans",
      months: "May – September",
      locations: ["Montenegro coast", "Albania (Riviera)", "Bosnia (Sarajevo)", "Kosovo"],
      notes: "July and August are peak tourist season on the Adriatic coast but inland routes remain uncrowded. May, June, and September offer the best weather-to-crowd ratio.",
    },
    {
      region: "India — Manali to Leh",
      months: "June – September",
      locations: ["Manali", "Rohtang Pass", "Jispa", "Sarchu", "Leh"],
      notes: "The highway typically opens in early June and closes with first heavy snowfall, usually late September. July–August has the most reliable open conditions.",
    },
    {
      region: "Mongolia",
      months: "June – September",
      locations: ["Ulaanbaatar", "Orkhon Valley", "Gobi Desert", "Khovsgol Lake"],
      notes: "Only viable during the summer window. June can still be cold at altitude; August–September offers the most stable weather conditions.",
    },
  ],

  goodToKnow: [
    {
      emoji: "📋",
      title: "An IDP is required in most countries outside the EU",
      body: "An International Driving Permit (IDP) is required alongside your domestic licence in most non-EU countries. Obtain it from your national motoring association (AA, RAC in the UK) — the process takes a few days and costs around £10–20. Do not assume your licence alone will satisfy local requirements; being stopped without an IDP in Vietnam, India, or Patagonia will create significant delays.",
    },
    {
      emoji: "🏍️",
      title: "Rental bikes are the practical choice for most international tours",
      body: "Shipping your own bike internationally costs £500–£1,500 in freight and adds weeks of logistics. For all but the most extended multi-country tours, using a tour operator's rental fleet is more practical and cost-effective. Most operators specify the bikes available — verify these match the terrain and your experience level before booking.",
    },
    {
      emoji: "🌬️",
      title: "Patagonian wind is a genuine safety factor",
      body: "The wind in Chilean and Argentine Patagonia regularly exceeds 80–100km/h. This is not an exaggeration for effect — it is a documented meteorological condition that can blow riders off lightweight bikes. Tour operators familiar with Patagonia build rest days into itineraries for wind windows and adjust routes accordingly. Solo riders without local knowledge often cannot do this.",
    },
    {
      emoji: "⚕️",
      title: "Altitude sickness on Himalayan and high-altitude routes requires preparation",
      body: "AMS (Acute Mountain Sickness) is a genuine risk above 3,000 metres. The Manali–Leh route crosses passes above 5,300m. Acclimatisation days, proper hydration, and having Diamox available (with medical advice) are standard precautions. Operators familiar with these routes brief all participants and have protocols in place; know the symptoms before you go.",
    },
    {
      emoji: "🛡️",
      title: "Travel insurance must explicitly cover motorcycle riding",
      body: "The majority of standard travel policies exclude motorcycle riding — some even exclude it as a passenger. Specialist providers (World Nomads, Battleface, Campbell Irvine) offer policies that specifically cover adventure motorcycle touring. Read the exclusions carefully before purchasing. A medical evacuation from a remote Himalayan pass or Patagonian valley without coverage is a financially catastrophic scenario.",
    },
  ],

  faqHeading: "Motorcycle tour retreat FAQ",
  faqIntro:
    "The most common questions from riders considering their first guided tour abroad.",

  faqs: [
    {
      question: "Do I need to be an experienced rider to join a guided motorcycle tour?",
      answer:
        "It depends entirely on the route. Vietnam dirt bike tours are accessible to intermediate riders with a year or two of experience. Patagonian and Himalayan routes require genuine off-road competency and comfort with technical terrain. Most operators state minimum experience requirements clearly — take these seriously. Joining a tour above your skill level is both dangerous for you and disruptive to the group.",
    },
    {
      question: "Will I need my own motorcycle, or are rental bikes provided?",
      answer:
        "Most guided tours include a rental bike as part of the package. The bike models vary by destination and operator — Edelweiss typically uses BMW GS or KTM Adventure bikes for international tours; Vietnam Bikers uses Yamaha XSR or semi-automatic bikes for mountain routes. Verify the specific bike model when booking and ensure it matches your experience and licence category.",
    },
    {
      question: "What licence do I need for a motorcycle tour abroad?",
      answer:
        "You typically need your domestic motorcycle licence plus an International Driving Permit (IDP) for most countries outside the EU. Licence categories matter — an A2 licence (European) restricts engine size in many countries. Full A category licences are typically required for adventure bikes above 500cc. Check the specific country requirements with your operator before booking.",
    },
    {
      question: "How physically demanding is a two-week motorcycle tour?",
      answer:
        "Significant. Daily riding of 200–400km on varying road surfaces over two weeks is physically demanding — back, wrists, and shoulders are the most commonly mentioned fatigue points. Off-road routes add vibration and physical exertion far beyond tarmac touring. Building core strength before departure, packing ergonomic gloves, and using the tour's rest days for genuine rest rather than activity are all commonly recommended by experienced tour participants.",
    },
    {
      question: "What happens if my bike breaks down mid-tour?",
      answer:
        "Professional guided tours include mechanical support — typically a follow vehicle with tools, spare parts, and a mechanically trained support driver. Serious mechanical failures can result in rider transfer to a spare bike if available, or to a support vehicle until the next town. This is one of the primary reasons guided tours are recommended over fully independent riding in remote destinations.",
    },
    {
      question: "Is Patagonia suitable for a first international motorcycle tour?",
      answer:
        "Only if you have extensive off-road experience. The Carretera Austral involves river crossings, deep gravel, and sustained Patagonian winds that challenge experienced off-road riders. For a first international guided tour, Vietnam or the Balkans are significantly more accessible and forgiving while still delivering exceptional experiences.",
    },
    {
      question: "How far in advance should I book a motorcycle tour?",
      answer:
        "Patagonia tours (November–March season) typically require booking 6–8 months in advance for preferred dates. Vietnam and Balkan tours have more availability but good operators' prime dates still sell 3–5 months out. If you have a specific destination, season, and operator in mind, the practical answer is: as soon as you are certain you can commit to the travel dates.",
    },
    {
      question: "Can I join a guided motorcycle tour as a complete non-rider?",
      answer:
        "Some operators offer pillion (passenger) places on guided tours, allowing non-riders to experience the journey from behind a qualified rider. This is more common on tarmac-heavy European routes. For off-road routes like Patagonia and Vietnam dirt tracks, pillion riding is typically not offered due to safety considerations. Check with your specific operator.",
    },
  ],

  disclaimer:
    "Road and route conditions vary significantly by season. Licence and permit requirements change and vary by nationality. The information above is editorial guidance only — always verify current entry requirements, insurance obligations, and route conditions with your chosen operator and relevant authorities before travel.",

  ctaHeading: "Find your motorcycle tour",
  ctaDescription:
    "Browse motorcycle touring retreats and adventure travel listed on Abroader, or book a consultation to identify the right destination and operator for your riding experience.",
  ctaLinks: [
    { href: "/retreats", label: "Browse all retreats", primary: true },
    { href: "/retreats/motorcycle-trips", label: "Motorcycle retreats" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/retreats", label: "All retreats" },
    { href: "/opportunities/hiking-guide-jobs", label: "Hiking guide jobs" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
