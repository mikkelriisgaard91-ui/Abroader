import type { OpportunityLanding } from "./types";

export const FARM_WORK_ABROAD: OpportunityLanding = {
  slug: "farm-work-abroad",
  metaTitle: "Farm work abroad: countries, pay & how to find jobs | Abroader",
  metaDescription:
    "A complete guide to finding farm work abroad — from Australia's Working Holiday Visa regional work to WWOOF organic volunteer programmes worldwide. Understand the types of work, what it pays, and how to find legitimate farm employers.",
  heroTitle: "Farm work abroad",
  heroSubtitle:
    "Farm work is one of the most accessible ways to work internationally — no qualifications required, high demand year-round, and in Australia, 88 days qualifies your second Working Holiday Visa. Here is how the market actually works, from harvest seasons to WWOOF exchanges.",
  heroImage:
    "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Worker in a green field harvesting vegetables on a sunny farm day",
  category: "Work Abroad",
  stats: [
    { value: "AUD 24–35", label: "hourly rate on Australian farms" },
    { value: "88 days", label: "regional work for Australian 2nd WHV" },
    { value: "WWOOF", label: "worldwide free accommodation in exchange for farm help" },
    { value: "Year-round", label: "demand across multiple countries and seasons" },
  ],

  introHeading: "What farm work abroad actually covers — and who does it",
  introParagraphs: [
    "Farm work abroad encompasses a wide spectrum: picking strawberries in Spain's Huelva province, mustering cattle on an Australian outback station, helping harvest wine grapes in New Zealand's Marlborough region, volunteering at an organic smallholding in Italy through WWOOF, or maintaining a market garden in Japan through the WWOOF Japan network. The common thread is agricultural and rural work, which is almost universally accessible without formal qualifications — and which in many countries creates pathways to extended work rights that other types of seasonal work do not.",
    "The single most important farm work destination internationally is Australia, and the reason is the Working Holiday Visa second-year extension system. Working Holiday Visa (WHV) holders who complete 88 calendar days of specified regional work — including all types of farm work, fishing, forestry, and mining in regional postcodes — become eligible to apply for a second 12-month WHV. A third year is available to those who complete 179 days of regional work. This framework has made Australia a uniquely attractive destination for international farm workers, with a market infrastructure — farm employment agencies, regional accommodation, backpacker networks — entirely organised around supporting WHV holders.",
    "WWOOF (Willing Workers on Organic Farms) represents a different model entirely: you work on an organic farm typically 4–6 hours per day in exchange for free accommodation and meals, with no money changing hands. WWOOF networks operate in over 100 countries, from New Zealand to Italy to India. It is not a way to earn money — it is a way to live cheaply while experiencing rural life, learning agricultural skills, and travelling in a different mode than conventional backpacking. Many people combine paid farm work (to earn money) with WWOOF positions (to extend their travel cheaply between paid roles).",
  ],

  howItWorksHeading: "How to find and start farm work abroad",
  howItWorks: [
    {
      step: 1,
      title: "Decide between paid farm employment and WWOOF volunteering",
      body: "Paid farm employment (picking, planting, mustering, irrigation, machinery) requires a working holiday visa or appropriate work rights, pays real wages, and is the route for people who need income while travelling. WWOOF volunteering requires only a tourist visa in most countries, costs nothing beyond a WWOOF membership fee (typically £15–£30 per year), and suits people who want to extend their travels cheaply in exchange for daily farm help. Many travellers do both: earn money in paid farm roles, then use WWOOF placements to bridge between paid work periods cheaply.",
    },
    {
      step: 2,
      title: "Get the right visa for your target destination",
      body: "Australia's Working Holiday Visa (subclass 417 or 462) is the primary vehicle for paid farm work and must be applied for before your 31st birthday (35 for some nationalities). New Zealand's WHV covers paid farm employment. Canada's IEC Working Holiday Visa covers agricultural work in Ontario, BC Okanagan, and Nova Scotia. WWOOF positions in Europe typically use tourist visas — but confirm the rules for your specific nationality and destination country, as some countries formally classify WWOOF as work. EU nationals can work on farms across the EU without additional visas.",
    },
    {
      step: 3,
      title: "Register on government farm job databases and specialist platforms",
      body: "For Australia: the Harvest Trail (jobsearch.gov.au/harvesttrail) and the Seasonal Worker Connect service list verified farm employers. For New Zealand: Pick NZ (picknz.co.nz). For Europe: EURES (eures.ec.europa.eu) lists agricultural positions across EU states. For WWOOF: WWOOF International (wwoof.net) provides links to national WWOOF organisations in each country. Joining the relevant national WWOOF organisation gives you access to their host farm database.",
    },
    {
      step: 4,
      title: "Contact farms directly — some of the best opportunities are not advertised",
      body: "Australian farms and stations (particularly cattle and sheep stations in the outback) hire through word of mouth, existing worker networks, and direct drop-in far more than through job boards. Regional Australia — Longreach, Broken Hill, Mount Isa, Katherine — has farming operations that are difficult to find through standard platforms. Backpacker communities and hostel notice boards in regional towns are the most reliable intelligence source for what is actually available locally at a given moment.",
    },
    {
      step: 5,
      title: "For Australia: document your 88 days meticulously from day one",
      body: "The 88-day regional work requirement for a second Australian WHV requires specific documentation: payslips showing employer details, dates worked, and hours; and a group certificate number from a registered employer. Cash-in-hand work with unregistered employers does not count, and cannot be retroactively verified. Start a dedicated record of your regional work days on your first day of farm employment. Photograph your payslips and upload them to cloud storage regularly.",
    },
  ],

  whyProviders:
    "Farm work resources split into three categories: government-run job databases that list verified farm employers; WWOOF networks that connect volunteers with organic farms worldwide; and recruitment agencies and backpacker employment services that match workers with farms regionally. For Australia, the government Harvest Trail system is the most reliable starting point. For WWOOF, the international WWOOF network is the only route. For regional farm employment agencies, we list the most active operators.",

  providerGroups: [
    {
      heading: "Government farm employment programmes",
      intro:
        "These government-supported systems are the most reliable and legally secure routes to finding paid farm work. They list verified, registered employers — the only type that counts toward Australia's 88-day WHV extension requirement.",
      providers: [
        {
          name: "Harvest Trail — Australian Government",
          description:
            "The Australian Government's official harvest and farm labour database, listing seasonal positions across all Australian states and territories by region and crop type. The Harvest Trail website maps current and upcoming demand, links to the Jobs in Australia portal for actual applications, and provides definitive information on which regions and employer types qualify for the 88-day second-year Working Holiday Visa extension. Essential starting resource for any WHV holder planning farm work in Australia.",
          tags: ["Official Australian Government", "88-day WHV qualification info", "All states", "Verified employers", "Free"],
          href: "https://www.jobsearch.gov.au/harvesttrail",
          category: "government-programme",
          useWhen:
            "You are in Australia on a WHV and need an authoritative database of verified farm employers that count toward your 88-day regional work requirement.",
        },
        {
          name: "Seasonal Worker Programme — Australian DAFF",
          description:
            "The Australian Government's Seasonal Worker Programme (SWP) is a managed labour mobility scheme primarily designed for workers from Pacific Island nations and Timor-Leste, providing temporary work in Australian horticulture, accommodation tourism, and meat processing. While not the primary route for WHV holders, the SWP provides useful context on which farm operators are accredited by the government and operate within the legal framework — accredited SWP employers are among the most professionally managed operations in Australian agriculture.",
          tags: ["Managed programme", "Pacific island workers", "Accredited employers list", "Legal framework reference", "DAFF managed"],
          href: "https://www.agriculture.gov.au/agriculture-land/farm-food-drought/agricultural-workforce/seasonal-worker-programme",
          category: "government-programme",
          useWhen:
            "You want to understand which Australian farm operators are government-accredited, or are researching the SWP as an alternative to the standard WHV route.",
        },
        {
          name: "EURES — European Jobs Network (Agriculture)",
          description:
            "The European Employment Services network operated by the European Commission, facilitating labour mobility across EU and EEA member states. The agriculture section lists seasonal farm and harvest positions across France, Spain, Germany, Netherlands, Poland, and other member states. EU nationals can take up any listed position without additional work authorisation. Non-EU nationals should check residency and work permit requirements for the specific member state.",
          tags: ["EU employment portal", "All EU member states", "Agriculture section", "Free movement", "Non-EU guidance"],
          href: "https://eures.ec.europa.eu",
          category: "government-programme",
          useWhen:
            "You are an EU national looking for farm work across multiple European countries, or researching what agricultural positions are available across the bloc.",
        },
      ],
    },
    {
      heading: "WWOOF — organic farm volunteering worldwide",
      intro:
        "WWOOF (Willing Workers on Organic Farms) networks connect volunteers with organic and sustainable farms worldwide. You provide 4–6 hours of daily help; the farm provides free accommodation and meals. No money changes hands. These are the primary WWOOF networks by region.",
      providers: [
        {
          name: "WWOOF International",
          description:
            "The umbrella organisation linking WWOOF national networks in over 100 countries. WWOOF International's website provides direct links to the national WWOOF organisation for each country — from WWOOF Australia to WWOOF Japan to WWOOF Italy to WWOOF USA. Joining any national WWOOF network (typically £15–£30 per year) gives you access to that country's farm host database. Some countries use the WWOOF International unified database; others maintain independent national sites. The best starting point for anyone researching WWOOF options across multiple countries.",
          tags: ["100+ countries", "Links to all national networks", "One-stop research", "Membership via national orgs"],
          href: "https://wwoof.net",
          category: "job-board",
          useWhen:
            "You want to research WWOOF opportunities across multiple countries before deciding where to go.",
        },
        {
          name: "WWOOF Australia",
          description:
            "Australia's national WWOOF organisation, with over 2,200 host farms ranging from small organic market gardens to larger permaculture properties, cattle stations, and beekeeping operations. Annual membership costs approximately AUD 70 and gives access to the full host database with contact details. WWOOF Australia hosts span all states and territories — from tropical Queensland farms to Tasmanian apple orchards to Western Australian wheat properties. Note: WWOOF in Australia does not count toward the 88-day WHV regional work requirement, as no wages are paid.",
          tags: ["2,200+ host farms", "All Australian states", "AUD 70/year membership", "Organic focus", "Does NOT count for 88 days"],
          href: "https://wwoof.com.au",
          category: "job-board",
          useWhen:
            "You want to WWOOF in Australia and access the national host database — but understand this will not count toward your WHV 88-day requirement.",
        },
        {
          name: "HelpX",
          description:
            "A work exchange platform (not exclusively WWOOF, but similar model) listing farms, guesthouses, outdoor education centres, and language schools across 50+ countries that offer accommodation and meals in exchange for 4–5 hours of daily help. HelpX includes both organic and conventional farms, and has strong coverage in Europe, Australia, and New Zealand. Annual membership approximately £20 for two years. Not a purely agricultural platform — the farm listings sit alongside hostel and other host types.",
          tags: ["50+ countries", "Farm + other host types", "£20/2 years", "Europe & Oceania strong", "Conventional + organic"],
          href: "https://www.helpx.net",
          category: "job-board",
          useWhen:
            "You want a broader work exchange search that includes farms alongside other host types, particularly in Europe and Oceania.",
        },
        {
          name: "Workaway — Farm Hosts",
          description:
            "Workaway's 50,000+ host listings include a significant proportion of farm and agricultural hosts — organic smallholdings, permaculture projects, vineyards, market gardens, and livestock farms worldwide. The WWOOF model and Workaway model overlap considerably; Workaway includes farms that aren't officially WWOOF hosts, and the review system provides a useful quality signal. Annual membership approximately £35 for solo travellers. Strong in Latin America, Southeast Asia, and Southern Europe markets where WWOOF national networks are smaller.",
          tags: ["50,000+ hosts", "Farm section", "Global", "Review system", "Latin America & SE Asia strong"],
          href: "https://www.workaway.info",
          category: "job-board",
          useWhen:
            "You want to find farm host exchanges in destinations with weaker WWOOF national networks, particularly Latin America and Southeast Asia.",
        },
      ],
    },
    {
      heading: "Paid farm work — regional employment agencies",
      intro:
        "These agencies and services specifically match farm workers with paid agricultural employment in Australia and internationally. Particularly useful for finding work quickly in regional areas without physically driving from farm to farm.",
      providers: [
        {
          name: "Agri Labour Australia",
          description:
            "One of Australia's largest agricultural labour hire companies, placing working holiday visa holders and local workers with farms, stations, and horticulture operations across Queensland, NSW, Victoria, South Australia, and Western Australia. Agri Labour acts as the employer of record — meaning you are employed by Agri Labour and placed with the farm, which simplifies payslip and tax documentation (important for WHV 88-day verification). They work with both small farms and large corporate agricultural operations.",
          tags: ["All eastern states", "WHV employer of record", "Payslip documentation", "All crop types", "Large + small farms"],
          href: "https://www.agrilabour.com.au",
          category: "direct-employer",
          useWhen:
            "You are in Australia and want a placement agency that provides proper payslips for your 88-day WHV documentation.",
        },
        {
          name: "Pinnacle People — Agricultural Division",
          description:
            "A recruitment firm with an agricultural and horticulture division operating across South Australia, Victoria, and NSW. Pinnacle places WHV holders and local workers in vineyard, orchard, and vegetable growing operations, with a focus on matching workers to positions that meet the regional work criteria for the Australian Working Holiday Visa extension.",
          tags: ["South Australia strong", "Victoria & NSW", "Vineyard & orchard focus", "WHV regional work", "Recruitment agency"],
          href: "https://www.pinnaclepeople.com.au/job-seekers/agriculture-horticulture/",
          category: "direct-employer",
          useWhen:
            "You are targeting South Australian wine region farm work (Barossa, McLaren Vale, Clare Valley) and want a placement agency.",
        },
      ],
    },
  ],

  regionsHeading: "Where farm work abroad is most accessible",
  regionsIntro:
    "Farm work follows crop seasons and visa frameworks. These destinations have the most developed infrastructure for international farm workers — from government-supported systems to well-established backpacker farm networks.",

  regions: [
    {
      slug: "australia",
      name: "Australia — East Coast and Regional",
      label: "Australia",
      image:
        "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Australian farm in the outback with red earth and clear blue sky",
      season: "Year-round (region and crop specific)",
      body: "Australia is the most important destination for international farm workers globally, driven by the Working Holiday Visa second-year extension framework. The east coast follows a crop calendar from Queensland (bananas, mangoes, tomatoes — October to January) south through New South Wales (wine grapes, stone fruit, vegetables — November to March) to Victoria (stone fruit, apples, wine grapes — January to May). The Northern Territory has station work (cattle mustering, agriculture support) year-round. Western Australia runs intensive horticulture in the Perth Hills, Manjimup, and Kununurra year-round. Beyond horticulture, Australian cattle and sheep stations offer stockwork, fencing, and station maintenance roles that are often less competitive and deeply different in character from crop-picking — remote, physically demanding, and genuinely immersive in Australian rural culture.",
      relatedHref: "/opportunities/fruit-picking-jobs-abroad",
      relatedLabel: "Fruit picking jobs guide",
    },
    {
      slug: "new-zealand",
      name: "New Zealand — Hawke's Bay, Marlborough, Waikato",
      label: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=900&q=80",
      imageAlt: "New Zealand farm with green hills, sheep, and mountains in the distance",
      season: "February – June (main harvest); year-round (sheep and dairy)",
      body: "New Zealand's farm work market splits between horticulture (fruit picking and packing, February through June) and pastoral farming (sheep, beef, and dairy). The pastoral sector — dominated by large sheep and dairy stations in the South Island's Canterbury Plains, Otago, and Marlborough regions, and the Waikato and Northland in the North Island — runs year-round and offers a very different working experience from the seasonal picking market. Farm hands, dairy assistants, fencing crews, and shearing shed hands are all accessible to WHV holders. The government's Recognised Seasonal Employer (RSE) scheme manages a structured Pacific worker programme for horticulture — WHV holders operate in parallel to this scheme, filling additional capacity particularly in peak picking periods.",
    },
    {
      slug: "canada",
      name: "Canada — Okanagan, Ontario, Prairie Provinces",
      label: "Canada",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Canadian farm with fields of grain and prairie sky in Saskatchewan",
      season: "May – November (crop specific)",
      body: "Canada's farm work market operates under the Seasonal Agricultural Worker Program (SAWP) for managed labour migration from Mexico and Caribbean countries, alongside the open market for IEC Working Holiday Visa holders. WHV holders work across BC Okanagan fruit farming (cherries, peaches, apples — June to October), Ontario vegetable and grain farming, Alberta cattle and grain operations, and Nova Scotia apple picking. The Prairie provinces (Saskatchewan, Manitoba, Alberta) run grain harvest operations August through October that employ large numbers of temporary workers. Canadian agricultural wages are regulated by provincial minimum wages — BC and Ontario have some of the highest agricultural minimum rates in the country.",
    },
    {
      slug: "wwoof-italy",
      name: "Italy — Tuscany, Umbria, Piedmont (WWOOF)",
      label: "Italy (WWOOF)",
      image:
        "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Italian vineyard in Tuscany with rolling hills and cypress trees at sunset",
      season: "March – November (most host farms)",
      body: "Italy has one of the most beloved WWOOF networks in the world, with over 1,000 host farms spread across Tuscany, Umbria, Piedmont, Campania, Sicily, and other regions. WWOOF Italy (wwoof.it) hosts include vineyards, olive groves, cheese farms, market gardens, and agriturismo (farm guesthouses) — the range of agricultural contexts and the quality of life in Italian rural areas makes this consistently one of the most popular WWOOF destinations. The WWOOF exchange — 4–6 hours of work per day in exchange for accommodation and three meals — is particularly compelling in Italian contexts where the meals alone represent significant value. EU nationals can work freely; non-EU WWOOF volunteers are technically in a legal grey area as the arrangement is not employment but some countries' immigration frameworks query it.",
    },
    {
      slug: "japan",
      name: "Japan — Hokkaido, Rural Regions (WWOOF)",
      label: "Japan",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Rural Japanese farm landscape with rice paddies and mountain backdrop",
      season: "Year-round (host-specific)",
      body: "WWOOF Japan (wwoofjapan.com) has an extensive host database across Hokkaido (dairy farming, vegetable growing, lavender cultivation), the Japanese Alps region, Kyushu, Shikoku, and rural Honshu. The Japanese farming experience is culturally distinctive — the language barrier is real (basic Japanese is genuinely useful), and the working rhythm of Japanese farm households is quite different from European or Australian equivalents. That said, Japan WWOOF is consistently praised by volunteers for the depth of cultural immersion it provides. Japan introduced a Working Holiday Visa for citizens of the UK, Australia, Canada, New Zealand, Ireland, and other eligible countries that covers paid work, though most farm volunteers use the tourist visa for WWOOF arrangements.",
    },
    {
      slug: "ireland",
      name: "Ireland — WWOOF and Seasonal Farm Work",
      label: "Ireland",
      image:
        "https://images.unsplash.com/photo-1509565840034-3c385bbe6451?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Green Irish farmland with stone walls and rolling hills under dramatic sky",
      season: "March – October (most host farms)",
      body: "Ireland has a smaller but well-regarded WWOOF network (WWOOF Ireland) with host farms focused on organic and biodynamic growing, smallholding management, and sustainable food production. Irish farm work includes vegetable growing, livestock care, cheese making, and market preparation. EU nationals work freely; UK nationals work under the Common Travel Area arrangement. For paid seasonal work beyond WWOOF, the Irish agriculture sector (particularly mushroom picking, vegetable harvesting, and sheep farming in Connacht and Munster) employs seasonal workers who can source roles through the local agriculture forums and regional Teagasc (Agriculture and Food Development Authority) notices.",
    },
  ],

  goodToKnowHeading: "Things worth knowing before you start farm work abroad",
  goodToKnow: [
    {
      emoji: "📋",
      title: "For Australia: only registered employers count toward 88 days",
      body: "The 88-day Working Holiday Visa extension requirement is only satisfied by work with registered, tax-compliant farm employers who can provide formal payslips. Cash-in-hand labour, unregistered contractors, and informal farm arrangements — however common they may be in some agricultural regions — provide no documentation that satisfies the Home Affairs requirement. This distinction matters enormously: it represents an additional 12 months of Australian working rights.",
    },
    {
      emoji: "🌾",
      title: "Farm work is physically hard — particularly in the first two weeks",
      body: "Farm work involves sustained physical activity in outdoor conditions: early starts, long days on your feet or bent double, variable weather, and work that does not pause for discomfort. Most people adapt within two weeks and find the work manageable. The first week is the reliable shock period — particularly for people without a physical work background. Arrive with appropriate clothing (work boots, sun protection, waterproofs for Australia and NZ), ibuprofen for muscle soreness, and realistic expectations.",
    },
    {
      emoji: "🏡",
      title: "WWOOF is not free travel — it is a work exchange",
      body: "WWOOF hosts expect genuine, reliable work during the agreed hours. They provide accommodation and meals; you provide real labour — weeding, planting, irrigation management, animal care, processing, or whatever the farm's current needs require. WWOOF hosts who have bad experiences with unreliable or disengaged volunteers will not give you a good reference — and the WWOOF review system increasingly makes references matter. Treat a WWOOF placement as a professional commitment, not a casual arrangement.",
    },
    {
      emoji: "🌏",
      title: "WWOOF legal status varies by country",
      body: "In most countries, WWOOF is treated as a cultural exchange or volunteer arrangement and is tolerated on tourist visas. In some countries (Switzerland, Germany in certain contexts), the work component of WWOOF could technically constitute employment requiring work authorisation. The practical risk is usually low, but the legal situation is worth understanding before you commit to an extended WWOOF placement. WWOOF International provides guidance notes per country, and national WWOOF organisations typically address the legal context in their membership documentation.",
    },
    {
      emoji: "💰",
      title: "Piece-rate farming can earn significantly above hourly minimums — or below",
      body: "Piece-rate pay (per bin, per kilogram, per tray) means your actual daily earnings depend on your speed and the crop's yield that day. Experienced pickers consistently out-earn the hourly equivalent; beginners in their first week typically underperform the hourly rate. In Australia, farms are legally required to top up piece-rate earnings to the Horticulture Award hourly rate if piece rates come in below it. Some farms do not enforce this — if you are consistently earning below the minimum Award rate on piece rates, your employer is legally obligated to make up the difference.",
    },
    {
      emoji: "🤝",
      title: "The best farm work opportunities come through local networks",
      body: "In regional Australia, New Zealand, and Canada, the most interesting farm work — station jobs, specialist roles, long-term positions — is filled through word of mouth, hostel noticeboards, and direct contact rather than online databases. Arriving in a regional town, staying at the local backpacker hostel, and talking to people who have just finished or are looking for work provides intelligence that government databases lag weeks or months behind. The local hostel owner often has direct relationships with farms that need workers right now.",
    },
  ],

  seasonalCalendarHeading: "Farm work season calendar by country",
  seasonalCalendarIntro:
    "Farm work follows crop and livestock seasons that move predictably with geography and climate. This calendar helps you plan which country to target and when, so you arrive at the right time for the work you want.",
  seasonalCalendar: [
    {
      region: "Australia (Horticulture)",
      months: "October – May (north to south)",
      locations: ["Bundaberg QLD", "Mildura VIC", "Shepparton VIC", "Swan Hill VIC", "Griffith NSW"],
      notes:
        "Follow the east coast trail north to south as seasons move — Queensland peaks October–January, Victoria February–May. 88 days for second-year WHV.",
    },
    {
      region: "Australia (Station Work)",
      months: "Year-round",
      locations: ["Longreach QLD", "Alice Springs NT", "Broken Hill NSW", "Kalgoorlie WA", "Katherine NT"],
      notes:
        "Cattle mustering peaks March–July (dry season outback). Sheep shearing rotates year-round. Station work is harder to find but deeper in experience than horticulture.",
    },
    {
      region: "New Zealand (Horticulture + Pastoral)",
      months: "February – June (horticulture); Year-round (dairy/sheep)",
      locations: ["Hawke's Bay", "Marlborough", "Bay of Plenty", "Canterbury", "Waikato"],
      notes:
        "Apple and kiwifruit harvest February–June. Dairy and sheep farming year-round. WHV from 40+ countries.",
    },
    {
      region: "Italy (WWOOF)",
      months: "March – November",
      locations: ["Tuscany", "Umbria", "Piedmont", "Campania", "Sicily"],
      notes:
        "Peak WWOOF season spring–autumn. Vendange (grape harvest) September–October is high demand. WWOOF Italy membership AUD/EUR equivalent ~£20/year.",
    },
    {
      region: "Canada (Prairies + Okanagan)",
      months: "May – November",
      locations: ["Okanagan BC", "Niagara ON", "Lethbridge AB", "Regina SK", "Wolfville NS"],
      notes:
        "Stone fruit peaks June–August in Okanagan. Grain harvest August–October in prairie provinces. IEC WHV required.",
    },
    {
      region: "New Zealand / Japan (WWOOF)",
      months: "Year-round",
      locations: ["Hokkaido (Japan)", "Canterbury NZ", "North Island NZ", "Kyushu Japan"],
      notes:
        "Year-round WWOOF opportunities in both countries. Japan WWOOF most active spring and summer. NZ WWOOF aligns with shoulder seasons around paid harvest work.",
    },
  ],

  salaryHighlightsHeading: "What farm workers earn abroad — by country",
  salaryHighlightsIntro:
    "Paid farm work earnings vary by country, crop type, and whether work is on hourly or piece-rate terms. WWOOF and work exchanges involve no wages — the value is in eliminated accommodation and food costs.",
  salaryHighlights: [
    {
      country: "Australia (Horticulture Award)",
      flag: "🇦🇺",
      salaryRange: "AUD 24–35",
      salaryLabel: "per hour (plus piece-rate bonuses)",
      includes: [
        "Piece-rate potential above hourly",
        "88 days qualifies 2nd-year WHV",
        "Some farms include accommodation",
        "Weekly pay standard",
      ],
      badge: "Highest hourly rate + visa benefit",
    },
    {
      country: "New Zealand",
      flag: "🇳🇿",
      salaryRange: "NZD 22–28",
      salaryLabel: "per hour (Horticulture minimum)",
      includes: [
        "WHV from 40+ countries",
        "Piece-rate on some crops",
        "Pastoral (dairy/sheep) available year-round",
        "Regional accommodation tight in peak",
      ],
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      salaryRange: "CAD 16–20",
      salaryLabel: "per hour (provincial minimum)",
      includes: [
        "IEC Working Holiday Visa",
        "Prairie grain harvest Aug–Oct",
        "Okanagan fruit June–Oct",
        "Piece-rate on some operations",
      ],
    },
    {
      country: "WWOOF (Global)",
      flag: "🌱",
      salaryRange: "No wage",
      salaryLabel: "Free accommodation + meals (exchange)",
      includes: [
        "4–6 hours work per day",
        "All food and accommodation provided",
        "£15–£30/year membership",
        "100+ countries",
      ],
      badge: "Lowest cost of travel",
    },
    {
      country: "Germany (Asparagus/Grapes)",
      flag: "🇩🇪",
      salaryRange: "€12.41+",
      salaryLabel: "per hour (minimum wage 2024)",
      includes: [
        "EU work rights simplest route",
        "Some accommodation included",
        "Asparagus April–June; grapes Sep–Oct",
        "Legal minimum enforced",
      ],
    },
  ],

  faqHeading: "Common questions about farm work abroad",
  faqIntro: "Practical answers for anyone planning their first farm work experience internationally.",
  faqs: [
    {
      question: "What is the difference between WWOOF and Workaway for farm placements?",
      answer:
        "WWOOF (Willing Workers on Organic Farms) is exclusively for organic and sustainable farms — the host farms must meet certain organic or ecological criteria. WWOOF is a dedicated network with its own national organisations, membership fees, and host databases. Workaway is a broader work exchange platform covering farms, hostels, language schools, and other types of hosts worldwide — it includes both organic and conventional farms, and the host selection is not limited to agricultural contexts. Many farms list on both platforms. WWOOF has a stronger reputation for quality organic farm experiences; Workaway has broader geographic coverage, particularly in regions where WWOOF national networks are smaller.",
    },
    {
      question: "How does the Australian Working Holiday Visa 88-day extension work?",
      answer:
        "WHV holders who complete 88 calendar days of specified regional work — including agriculture, horticulture, forestry, fishing, and mining in postcodes classified as regional — become eligible to apply for a second 12-month WHV. The 88 days do not have to be consecutive. They must be with a registered employer who provides formal payslips — cash-in-hand work cannot be documented and does not count. You apply for the second visa online through the Department of Home Affairs after completing the 88 days. A third-year extension requires 179 days of regional work. Age limits apply at application time, not at completion.",
    },
    {
      question: "Can I do farm work in Europe without being an EU citizen?",
      answer:
        "Paid farm employment in EU countries requires work authorisation — EU nationals have free movement, while non-EU nationals need a national work visa or permit. Some EU seasonal worker schemes (Germany's seasonal worker programme, Spain's Huelva strawberry arrangements) provide managed pathways for non-EU workers. WWOOF in Europe is typically done on a tourist visa, operating in a legal grey area that is widely tolerated but not universally legal. New Zealand and Australia's working holiday visa programmes are the most accessible formal routes for non-EU farm workers.",
    },
    {
      question: "What type of work does farm work abroad actually involve?",
      answer:
        "Farm work abroad encompasses picking and packing fruits and vegetables, vineyard work (pruning, harvesting, vine training), livestock management (mustering, feeding, milking, shearing), crop planting and maintenance, greenhouse work, irrigation management, and general farm maintenance. WWOOF placements often include a broader mix: market garden management, seed saving, animal care, food processing and preservation, and farm infrastructure work. Station work in Australia (cattle and sheep stations) includes stockwork, fencing, machinery maintenance, and general station management tasks.",
    },
    {
      question: "Is it safe to work on farms that I find through informal networks rather than databases?",
      answer:
        "Informal farm work arrangements — found through hostel noticeboards, Facebook groups, or word of mouth — are common and often legitimate. The risks are: informal (cash) arrangements don't count toward Australia's 88-day requirement; some informal arrangements undercut minimum wages; and unregistered labour contractors have been associated with exploitation in several high-profile cases. The safest approach is to use government databases (Harvest Trail, Pick NZ) or registered labour agencies for paid work, and verified WWOOF or Workaway listings with recent positive reviews for volunteer exchanges.",
    },
    {
      question: "What accommodation is available near farms in Australia?",
      answer:
        "Australian farm accommodation falls into three categories: on-site farm accommodation (rare but extremely convenient — confirm before accepting a position); caravan parks in nearby regional towns (the most common option, typically AUD 25–50 per night for a powered site); and backpacker hostels in regional towns (typically AUD 25–40 per night for a dormitory bed). Many regional hostels have relationships with local farms and run informal job boards. Accommodation in peak harvest areas (Bundaberg, Mildura, Shepparton) is competitive and expensive during picking season — arrange it before arriving rather than on spec.",
    },
    {
      question: "Can I combine WWOOF with paid farm work during the same trip?",
      answer:
        "Yes — this is a common and effective travel pattern. Many people alternate between paid farm work (to earn money) and WWOOF placements (to travel cheaply between paid work periods). In Australia, for example, you might do three months of paid picking work in Queensland (earning money and accumulating 88-day WHV credit), then WWOOF at an organic farm in the Blue Mountains for a few weeks to travel cheaply while transitioning to the next paid position in Victoria. WWOOF requires only a membership fee; the accommodation and food savings are the financial benefit rather than income.",
    },
    {
      question: "Does Abroader place farm workers directly?",
      answer:
        "No. Abroader is a discovery and comparison platform. We list government programmes, WWOOF networks, job boards, and regional agencies so you can find the right route. All applications and contacts go directly through the individual providers listed on this page.",
    },
  ],

  disclaimer:
    "Salary figures are editorial estimates based on national minimum wage and Award rates as of 2024 and may not reflect current conditions. The Australian 88-day regional work requirement and eligible employer registration rules are subject to government policy changes — always verify current requirements with the Department of Home Affairs before making visa decisions. WWOOF's legal status varies by country. Working without appropriate visa authorisation carries immigration and legal risks.",

  ctaHeading: "Plan your farm work abroad",
  ctaDescription:
    "Explore Working Holiday Visa options, compare WWOOF destinations, or book a free consultation with the Abroader team to plan your agricultural adventure.",
  ctaLinks: [
    { href: "/opportunities/fruit-picking-jobs-abroad", label: "Fruit picking abroad", primary: true },
    { href: "/opportunities/hostel-work-abroad", label: "Hostel work abroad" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/opportunities/fruit-picking-jobs-abroad", label: "Fruit picking jobs" },
    { href: "/opportunities/bartending-jobs-abroad", label: "Bartending jobs abroad" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
