import type { RetreatListingDetail } from "../retreat-listing-detail.types";

/** BookSurfCamps disclosure when imagery is not from the operator’s site */
const NOTE_BSC =
  "Always confirm current photos and inclusions for this package on BookSurfCamps before you pay.";

const NOTE_CROCRO =
  "Photos from Crocro Surf Maroc’s official website (Tamraght). " + NOTE_BSC;

const NOTE_PENICHE =
  "Photos from Peniche Surf Lodge’s website gallery (Google-hosted assets). " + NOTE_BSC;

const NOTE_TSE =
  "Lead image from The Surf Experience (Wix-hosted). Additional shots show the Algarve surf coast context. " +
  NOTE_BSC;

const NOTE_HARMONY =
  "Photos from Harmony Surf Lodge (official property imagery). " + NOTE_BSC;

const NOTE_STOCK_MA =
  "Moroccan Atlantic surf and coast — illustrative imagery typical of Taghazout-area camps; verify this operator’s photos on BookSurfCamps. " +
  NOTE_BSC;

const NOTE_STOCK_PT =
  "Portugal coastline and surf — illustrative imagery; verify Maria’s Hostel Surf photos on BookSurfCamps. " +
  NOTE_BSC;

const NOTE_STOCK_MIX =
  "Illustrative destination imagery plus catalog-style shots; confirm the venue on BookSurfCamps. " + NOTE_BSC;

const U = (photoId: string, alt: string) =>
  ({
    src: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=85`,
    alt,
  }) as const;

const MOR_GALLERY = [
  U("photo-1502680390469-be75c86b636f", "Surfer on an Atlantic wave — Morocco surf coast"),
  U("photo-1455264745730-baec00521a82", "Ocean swell and lineup — Morocco Atlantic"),
  U("photo-1439405326854-014607f694d7", "Breaking waves at sunset"),
  U("photo-1544551763-57af15389c95", "Surf culture on the beach"),
  U("photo-1495567729529-eb671076e9f8", "Golden-hour Atlantic shoreline"),
];

const moroccoHero = [
  `https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=85`,
  `https://images.unsplash.com/photo-1519046903927-41ddb181e49b?auto=format&fit=crop&w=1800&q=85`,
  `https://images.unsplash.com/photo-1455264745730-baec00521a82?auto=format&fit=crop&w=1800&q=85`,
  `https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1800&q=85`,
  `https://images.unsplash.com/photo-1544551763-57af15389c95?auto=format&fit=crop&w=1800&q=85`,
  `https://images.unsplash.com/photo-1495567729529-eb671076e9f8?auto=format&fit=crop&w=1800&q=85`,
];

function moroccoDetail(
  heroIndex: number,
  intro: string[],
): RetreatListingDetail {
  return {
    heroImageSrc: moroccoHero[heroIndex % moroccoHero.length]!,
    galleryImages: [...MOR_GALLERY],
    photoNote: NOTE_STOCK_MA,
    introParagraphs: intro,
  };
}

function ptMariaDetail(heroIdx: number, intro: string[]): RetreatListingDetail {
  const heroes = [
    `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85`,
    `https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1800&q=85`,
    `https://images.unsplash.com/photo-1526484988358-03dd6fc9f23d?auto=format&fit=crop&w=1800&q=85`,
  ];
  const gal = [
    U("photo-1507525428034-b723cf961d3e", "Atlantic beach — northern Portugal"),
    U("photo-1476514525535-07fb3b4ae5f1", "Coastal cliffs and waves"),
    U("photo-1526484988358-03dd6fc9f23d", "Surf session in Portugal"),
    U("photo-1559827260-dc66d52bef19", "Beach break on the Portuguese coast"),
    U("photo-1505142468610-359e7d316be0", "Ocean horizon from the shore"),
  ];
  return {
    heroImageSrc: heroes[heroIdx % heroes.length]!,
    galleryImages: [...gal],
    photoNote: NOTE_STOCK_PT,
    introParagraphs: intro,
  };
}

const CROCRO_HERO =
  "https://www.crocrosurfmaroc.com/wp-content/uploads/2022/08/IMG_9227-scaled-2.jpg";

const CROCRO_GALLERY = [
  {
    src: "https://www.crocrosurfmaroc.com/wp-content/uploads/2022/08/IMG_0005.jpg",
    alt: "Crocro Surf Maroc camp and Tamraght bay area",
  },
  {
    src: "https://www.crocrosurfmaroc.com/wp-content/uploads/2022/06/IMG_0677.jpg",
    alt: "Surf guiding at Crocro Surf Maroc, Morocco",
  },
  {
    src: "https://www.crocrosurfmaroc.com/wp-content/uploads/2022/06/IMG_9141-scaled-1.jpg",
    alt: "Atlantic surf session with Crocro Surf Maroc",
  },
  {
    src: "https://www.crocrosurfmaroc.com/wp-content/uploads/2022/08/IMG_0711-1-3.jpg",
    alt: "Surf camp life at Crocro Surf Maroc",
  },
  {
    src: "https://www.crocrosurfmaroc.com/wp-content/uploads/2024/10/IMG-20241022-WA0016.jpg",
    alt: "Tamraght surf experience with Crocro Surf Maroc",
  },
];

const PENICHE_HERO =
  "https://lh3.googleusercontent.com/4uLLqS_qG2VJhBBvS7FqnEothda403QN1vAy9UOAiqfiQeq2jwuuMNvNkkV8AxC7v2j7QtS5RNflFKpulgt3SrTj_JVDtzE=s1200";

const PENICHE_GALLERY = [
  {
    src: "https://lh3.googleusercontent.com/EbrfPoA-rjjWF1awssr4ewrJO3EAKdj7j1e2jzcx-xlStMCSDRRr5S6HM_2bNMKcspIQZdDHlY9pfvSggx4IohJxENw3GQ7o=s1200",
    alt: "Peniche Surf Lodge — coastal surf in Portugal",
  },
  {
    src: "https://lh3.googleusercontent.com/HEbm_PzydafN-AhY8C5Y8mdVwLuXnFYCHMWW8PUFWSTBQ_6JO4Ngd86mugy9w6hYDCdgfS_gNXiU7GW-eRxScMADUM3Q3fsy=s1200",
    alt: "Surf and beach near Peniche",
  },
  {
    src: "https://lh3.googleusercontent.com/YkzeWQt-gSKmNCUkkBBzNe9kFf-QE48ykDre8g6dRD1Sv92hB6a5krqJgD8HFgz0iaimjKv67iFMdBr7EiQCmCEXCNbLCw=s1200",
    alt: "Peniche area waves",
  },
  {
    src: "https://lh3.googleusercontent.com/lnr_EC1N6YCWysqyrH0IThYWTlBjoo9B4FbXXzx7CHZiUUHROIC9aSMNAmc7vdwUyjRAHdNykRDfvBTR5EkVU0r25V7UzrI=s1200",
    alt: "Surf lodge guests and coastline",
  },
  {
    src: "https://lh3.googleusercontent.com/FjEYpEKNv-4oosurEGC0nrmU9OBsf3DXNz1DJ1TOP1KJF5E_n4VL6cNv9i9Su3-T2lE5jpatgcABOZF-_C4l25zOhGzr9A=s1200",
    alt: "Atlantic surf at Peniche, Portugal",
  },
];

const TSE_HERO =
  "https://static.wixstatic.com/media/77d9fa_06c5b940196d4fa3af96090bf6fd0c21~mv2.jpg/v1/fill/w_1600,h_900,al_c,q_85,usm_0.66_1.00_0.01/77d9fa_06c5b940196d4fa3af96090bf6fd0c21~mv2.jpg";

const TSE_GALLERY = [
  {
    src: TSE_HERO,
    alt: "The Surf Experience — Lagos, Algarve",
  },
  U("photo-1507525428034-b723cf961d3e", "Algarve coastline and surf beaches"),
  U("photo-1519046903927-41ddb181e49b", "Surf session in warm water"),
  U("photo-1526484988358-03dd6fc9f23d", "Board and beach — southern Portugal"),
  U("photo-1559827260-dc66d52bef19", "Atlantic swell on the Algarve"),
];

const HARMONY_GALLERY_IMGS = [
  {
    src: "https://harmonysurflodge.com/wp-content/uploads/2024/12/aaaaweb.webp",
    alt: "Harmony Surf Lodge and coastline near Imi Ouaddar, Morocco",
  },
  {
    src: "https://harmonysurflodge.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-03-18-at-11.41.38-2.jpeg",
    alt: "Surf camp terrace and Atlantic views at Harmony Surf Lodge",
  },
  {
    src: "https://harmonysurflodge.com/wp-content/uploads/2025/09/IMG_6762.jpg",
    alt: "Surf lodge accommodation and shared spaces at Harmony Surf Lodge",
  },
  {
    src: "https://harmonysurflodge.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-18-at-11.41.34.jpeg",
    alt: "Taghazout-area surf and coastal landscape near the lodge",
  },
  {
    src: "https://harmonysurflodge.com/wp-content/uploads/2024/12/IMG_5567-2048x1536.jpg",
    alt: "Guests and surf lifestyle at Harmony Surf Lodge, Morocco",
  },
];

export const SURF_LISTING_DETAILS: Record<string, RetreatListingDetail> = {
  "harmony-surf-lodge": {
    heroImageSrc:
      "https://harmonysurflodge.com/wp-content/uploads/2024/12/P1744179-min-web-scaled.webp",
    galleryImages: [...HARMONY_GALLERY_IMGS],
    photoNote: NOTE_HARMONY,
    introParagraphs: [
      "Harmony Surf Lodge sits in Imi Ouaddar, a quiet bay between Agadir and Taghazout on Morocco’s Atlantic coast — the same swell corridor that makes Taghazout a winter surf staple, with a slightly slower village feel and quick access to varied beach and point setups.",
      "This seven-day premium coaching package keeps groups small (up to eight guests), with instruction in English aimed at beginner and intermediate surfers who want structured progression — not just board rental and a lift to the beach.",
    ],
    whatsIncluded: [
      "Six nights’ full-board accommodation",
      "Five surf lessons plus supervised free surf time",
      "Surf equipment and daily transport to surf spots",
      "Transfer from Agadir Al Massira (AGA) airport",
      "Evening photo and video debrief sessions to review your technique",
    ],
    programNotes: [
      "Coaching is geared toward beginner and intermediate levels; days combine guided lessons with free surf under supervision so you can practise what you learn.",
      "Typical rhythm: surf-focused days with transport to the day’s best conditions for your group, plus time to rest and refuel at the lodge between sessions.",
    ],
    accommodationNotes: [
      "Listing format is usually shared or private room options — exact room categories and meal plans are confirmed when you select dates on BookSurfCamps.",
      "Imi Ouaddar is well placed for Agadir airport transfers and for exploring Taghazout’s surf scene without staying in the busiest strip.",
    ],
    goodToKnow: [
      {
        title: "Seasonality",
        body: "Morocco’s Atlantic coast is most consistent for surf trips from autumn through spring; always check swell expectations for your exact week when you book.",
      },
      {
        title: "Price",
        body: "The indicative “from” price depends on season, room type, and availability — final quotes are shown on BookSurfCamps when you pick dates.",
      },
    ],
  },

  "harmony-surf-lodge-5": {
    heroImageSrc:
      "https://harmonysurflodge.com/wp-content/uploads/2024/12/P1744179-min-web-scaled.webp",
    galleryImages: [...HARMONY_GALLERY_IMGS],
    photoNote: NOTE_HARMONY,
    introParagraphs: [
      "This five-day Harmony Surf Lodge package keeps the same Imi Ouaddar base as the longer stays — between Agadir and Taghazout — with coaching aimed at all levels who want a compact progress-focused week.",
      "Use it as an introduction to Morocco’s Atlantic surf scene or as a shorter reset between longer trips; room categories and exact lesson count follow the BookSurfCamps listing for your dates.",
    ],
    goodToKnow: [
      {
        title: "Compared to the 7-day premium trip",
        body: "Check the BookSurfCamps page for this package to see exact nights, meals, and how many coached sessions are included in five days versus the week-long premium coaching retreat.",
      },
    ],
  },

  "crocro-surf-maroc": {
    heroImageSrc: CROCRO_HERO,
    galleryImages: [...CROCRO_GALLERY],
    photoNote: NOTE_CROCRO,
    introParagraphs: [
      "Crocro Surf Maroc runs out of Tamraght on Morocco’s Taghazout bay — a social, long-running camp known for pairing daily surf with yoga on this itinerary.",
      "Expect certified surf instruction, photo and video feedback, full board, and room for up to 15 guests; optional airport transfer is confirmed on BookSurfCamps.",
    ],
  },

  "crocro-surf-maroc-8-agadir": {
    heroImageSrc: CROCRO_HERO,
    galleryImages: [...CROCRO_GALLERY],
    photoNote: NOTE_CROCRO,
    introParagraphs: [
      "Eight days of Crocro’s surf and yoga rhythm around the Agadir–Tamraght coastline — same Crocro team and camp philosophy as shorter weeks, with more time to stack sessions and recovery.",
      "Compare room types and exact schedule on BookSurfCamps; airport transfer options are listed there.",
    ],
  },

  "peniche-surf-lodge-safari": {
    heroImageSrc: PENICHE_HERO,
    galleryImages: [...PENICHE_GALLERY],
    photoNote: NOTE_PENICHE,
    introParagraphs: [
      "Peniche Surf Lodge sits on Portugal’s central Atlantic coast — a classic European surf hub with varied breaks from mellow beachies to heavier reefs nearby.",
      "This affordable week bundles five in-water coaching sessions plus daily rental with guidance; full inclusions and dates are on BookSurfCamps.",
    ],
  },

  "surf-experience-lagos": {
    heroImageSrc: TSE_HERO,
    galleryImages: [...TSE_GALLERY],
    photoNote: NOTE_TSE,
    introParagraphs: [
      "The Surf Experience operates from Lagos on Portugal’s Algarve — a compact surf-camp format focused on progression in friendly southern waves.",
      "This five-day refreshing camp is aimed at guests who want structured time in the water; confirm level fit and meals on BookSurfCamps.",
    ],
  },

  "paddle-out-morocco": moroccoDetail(0, [
    "Paddle Out Morocco runs beginner-focused surf and yoga packages from Tamraght, minutes from Taghazout’s main breaks.",
    "Expect personalized coaching for newer surfers, a relaxed house vibe, and practical details — transfers and exact pack — on BookSurfCamps.",
  ]),

  "paddle-out-morocco-6-rejuvenating": moroccoDetail(1, [
    "Six days of surf and yoga with Paddle Out Morocco between Tamraght and Taghazout — more time to settle into the rhythm than a five-day sprint.",
    "Confirm which meals and yoga sessions are bundled for your dates on BookSurfCamps.",
  ]),

  "atlanticzin-kitesurf": {
    heroImageSrc:
      "https://images.unsplash.com/photo-1536697248797-292a8ac79e95?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      U("photo-1536697248797-292a8ac79e95", "Kitesurfing on open water"),
      U("photo-1505142468610-359e7d316be0", "Wind and waves — coastal watersports"),
      U("photo-1439405326854-014607f694d7", "Ocean energy and swell"),
      U("photo-1476611330566-8442c07f73d9", "Board sports on the sea"),
      U("photo-1526484988358-03dd6fc9f23d", "Active week on the water"),
    ],
    photoNote: NOTE_STOCK_MIX,
    introParagraphs: [
      "Atlanticzin Watersports runs kitesurf progression camps in the Essaouira wind corridor — one of Morocco’s classic spots for steady breeze and open beach launches.",
      "Choose beginner or intermediate tracks and confirm equipment, lessons, and accommodation on BookSurfCamps.",
    ],
  },

  "atlanticzin-kitesurf-6-essaouira": {
    heroImageSrc:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      U("photo-1505142468610-359e7d316be0", "Open ocean — kitesurf-friendly conditions"),
      U("photo-1536697248797-292a8ac79e95", "Kitesurfing session"),
      U("photo-1505142468610-359e7d316be0", "Ocean horizon"),
      U("photo-1439405326854-014607f694d7", "Breaking waves"),
      U("photo-1526484988358-03dd6fc9f23d", "Water sports atmosphere"),
    ],
    photoNote: NOTE_STOCK_MIX,
    introParagraphs: [
      "Six-day kitesurf camp with Atlanticzin near Essaouira — shorter than the eight-day pack but still long enough to build solid kite control.",
      "Verify gear rental, lesson hours, and accommodation tier on BookSurfCamps.",
    ],
  },

  "marias-hostel-porto": ptMariaDetail(0, [
    "Maria’s Hostel Surf runs nature-focused surf camps along Portugal’s northern coast; this Porto-based week is built around coaching and simple surf-house living.",
    "Confirm which beach zones you’ll surf and whether transfers from Porto are included on BookSurfCamps.",
  ]),

  "marias-hostel-surf-8-ovar": ptMariaDetail(1, [
    "Eight days at Maria’s Hostel Surf on the Ovar / Aveiro stretch — more nights to stack sessions and explore the northern breaks.",
    "Check the listing for level spread (all levels) and how nature-camp logistics work day to day.",
  ]),

  "marias-hostel-surf-6-ovar": ptMariaDetail(2, [
    "Six-day all-levels nature surf camp with Maria’s Hostel Surf near Ovar and Aveiro — a mid-length option if you want northern Portugal without a full week-plus stay.",
    "Transfers and daily schedule are confirmed on BookSurfCamps.",
  ]),

  "haleiwa-surf-yoga-oahu": {
    heroImageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      U("photo-1506905925346-21bda4d32df4", "Tropical shoreline — Hawaii"),
      U("photo-1468413922366-776fc11beb7e", "Pacific waves — North Shore style conditions"),
      U("photo-1439405326854-014607f694d7", "Ocean swell"),
      U("photo-1544551763-57af15389c95", "Surf lifestyle on the beach"),
      U("photo-1519046903927-41ddb181e49b", "Surf session in clear water"),
    ],
    photoNote: NOTE_STOCK_MIX,
    introParagraphs: [
      "Haleiwa Surf and Yoga Retreats combines North Shore, Oahu time in the water with yoga and adventure add-ons on an all-inclusive format.",
      "Dates, group size, and exact adventure blocks vary — see BookSurfCamps for the edition you’re booking.",
    ],
  },

  "surfers-paradise-weligama": {
    heroImageSrc:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      U("photo-1583417319070-4a69db38a482", "Tropical bay — southern Sri Lanka"),
      U("photo-1439405326854-014607f694d7", "Indian Ocean swell"),
      U("photo-1507525428034-b723cf961d3e", "Beach break and palm-lined shore"),
      U("photo-1519046903927-41ddb181e49b", "Surf coaching in warm water"),
      U("photo-1544551763-57af15389c95", "Lineup and boards on the sand"),
    ],
    photoNote: NOTE_STOCK_MIX,
    introParagraphs: [
      "Surfers Paradise Weligama runs intensive surf classes on Sri Lanka’s south coast — Weligama remains a benchmark learner-friendly beach break.",
      "Confirm coach ratios, board hire, and accommodation style on BookSurfCamps.",
    ],
  },

  "surfcamp-360-santa-cruz": {
    heroImageSrc:
      "https://images.unsplash.com/photo-1526484988358-03dd6fc9f23d?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      U("photo-1526484988358-03dd6fc9f23d", "Surf session — Portugal"),
      U("photo-1507525428034-b723cf961d3e", "Atlantic coastline"),
      U("photo-1476514525535-07fb3b4ae5f1", "Cliffs and ocean"),
      U("photo-1559827260-dc66d52bef19", "Beach break"),
      U("photo-1519046903927-41ddb181e49b", "Boards and lineup"),
    ],
    photoNote: NOTE_STOCK_MIX,
    introParagraphs: [
      "Surfcamp 360 offers surf-and-yoga holidays from Santa Cruz, north of Lisbon — eight days split between coached surf and yoga blocks.",
      "See BookSurfCamps for accommodation, meal plan, and typical weekly rhythm.",
    ],
  },

  "fu-space-hostel-tamraght": moroccoDetail(2, [
    "Fu Space Hostel blends surf, yoga, and Tamraght-area adventures — a social hostel base a short hop from Taghazout’s breaks.",
    "Culture and adventure add-ons change by season; confirm the full itinerary on BookSurfCamps.",
  ]),

  "surf-maroc-6-tamraght": moroccoDetail(3, [
    "Surf Maroc’s beginner surf and yoga camp runs from Tamraght with a clear focus on first green waves and confidence in the lineup.",
    "Double-check what’s included for yoga frequency and meals for your selected week.",
  ]),

  "anamarsurfmorocco-5-tamraght": moroccoDetail(4, [
    "Anamar Surf Morocco packages five days of coached surfing around Tamraght — a tight format for travelers who want feedback without a full week off work.",
    "Coach ratio and equipment details are listed on BookSurfCamps.",
  ]),

  "hola-surf-5-tamraght": moroccoDetail(5, [
    "Hola Surf markets an all-inclusive surf-coaching block from Tamraght near Agadir — meals and gear are typically bundled; verify the exact pack online.",
    "Good for guests who want fewer logistics and more time in the water.",
  ]),

  "sand-surf-morocco-5": moroccoDetail(0, [
    "Sand Surf Morocco’s fluidity eco surf camp emphasizes mindful progression and a lighter environmental footprint in Tamraght.",
    "Confirm what “eco” means for accommodation and transport on the listing.",
  ]),

  "reborn-surf-camp-7": moroccoDetail(1, [
    "Reborn Surf Camp runs week-long camps in Tamraght in the classic Taghazout-area surf corridor.",
    "Compare this seven-day format with shorter Morocco camps if you’re deciding how many coached days you need.",
  ]),

  "let-us-surf-7-budget": moroccoDetail(2, [
    "Let Us Surf’s budget escape targets the Taghazout region with an affordable surf-week structure.",
    "Budget tiers sometimes mean shared rooms or fewer meals — confirm what’s in the price before booking.",
  ]),

  "easy-surf-maroc-8": moroccoDetail(3, [
    "Easy Surf Maroc lines up eight days of surf and yoga on Morocco’s Atlantic coast — longer than a weekender, with time for rest days between bigger sessions.",
    "Exact venue and transfer pickup points are on BookSurfCamps.",
  ]),

  "let-us-surf-5-relax": moroccoDetail(4, [
    "Let Us Surf’s five-day surf and relax format keeps intensity moderate — suited to all levels who want coaching without a competition pace.",
    "Check how many coached hours you get versus free surf on BookSurfCamps.",
  ]),
};
