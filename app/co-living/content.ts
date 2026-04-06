import { RECRUITER_CONTACT_URL } from "../language-jobs/content";

export { RECRUITER_CONTACT_URL };

export type ColivingListing = {
  id: string;
  title: string;
  location: string;
  description: string;
  features: string[];
  /** One or more price lines in EUR (approx. converted from partner DKK list prices) */
  prices: string[];
  /** Partner “Læs mere” target from https://abroader.io/coliving-i-udlandet/ */
  readMoreUrl: string;
};

export type RegionBlock = {
  id: string;
  name: string;
  listings: ColivingListing[];
  /** Optional note under listings (e.g. coming soon) */
  footnote?: string;
};

export const HERO = {
  eyebrow: "Remote work, real community",
  title: "Co-living abroad — live, work, and explore with others",
  subtitle:
    "Dream of living and working abroad without landing in a new country alone? Co-living abroad is a popular setup for digital nomads, remote workers, and adventurous travellers who want community, flexibility, and an easy start in a new place.",
};

export const INTRO_CLOSING = {
  lead:
    "Co-living combines housing, coworking, and social community in one experience. You get your own room or share with others, stable places to work, and a fast way to meet like-minded people from around the world — ideal if you work online and want to see the world without sacrificing comfort or productivity.",
};

export const REGIONS: RegionBlock[] = [
  {
    id: "europe",
    name: "Europe",
    listings: [
      {
        id: "tarifa",
        title: "Coliving Tarifa — mindful co-living by the sea",
        location: "Tarifa, Andalusia, Spain",
        description:
          "Live and work in Europe’s southernmost town, where sea, wind, and community set the scene for remote work. Coliving Tarifa blends calm, focus, and social time with coworking, wellness, and an international community of founders and remote workers.",
        features: [
          "Private room in a lively coliving community",
          "Stable, fast fibre internet",
          "Community and wellness activities included",
          "Access to a dedicated coworking space",
          "International community of digital nomads",
          "And much more…",
        ],
        prices: ["€738 / month"],
        readMoreUrl: "https://www.nomadico.io/tarifa-coliving",
      },
      {
        id: "bansko",
        title: "Coliving Bansko — focus, community, and mountains",
        location: "Bansko, Bulgaria",
        description:
          "Work with focus in the mountains and join a strong international community. With a private room, fast internet, coworking, and an active nomad scene, Bansko is a great mix of productivity, calm, and outdoor adventure.",
        features: [
          "Private room with mountain views in a cosy coliving home",
          "Fast fibre internet and work-friendly rooms",
          "Nestwork Coworking access included",
          "International community of digital nomads",
          "Lifestyle with balance and outdoor experiences",
          "And much more…",
        ],
        prices: ["€564 / month"],
        readMoreUrl: "https://www.nomadico.io/bansko-coliving",
      },
      {
        id: "madeira",
        title: "Coliving Madeira — island life, community, and focus",
        location: "Madeira, Portugal",
        description:
          "Live and work on one of Europe’s most beautiful islands, where sea, mountains, and a tight community support remote work. Coliving Madeira is for combining focus, nature, and deeper connections in a calm setting.",
        features: [
          "Private room in an intimate coliving home",
          "Fast fibre internet and work-friendly rooms",
          "Community manager and social activities",
          "Free coworking access in Ponta do Sol",
          "International community of digital nomads",
          "And much more…",
        ],
        prices: ["€564 / month"],
        readMoreUrl: "https://www.nomadico.io/madeira-coliving",
      },
    ],
  },
  {
    id: "africa",
    name: "Africa",
    listings: [
      {
        id: "taghazout",
        title: "Endless summer: coliving & coworking in Taghazout Bay",
        location: "Taghazout Bay, Morocco",
        description:
          "Live and work in the heart of a Moroccan surf town where community, relaxed living, and remote work go hand in hand. Enjoy fast Wi‑Fi, rooftop coworking with sea views, and a close community — with waves, sunsets, and culture as part of daily life, year round.",
        features: [
          "Three homes — one community",
          "Stable, fast fibre internet",
          "Surf and slow-living lifestyle",
          "Rooftop coworking",
          "International community of digital nomads",
          "Authentic local experience",
          "And much more…",
        ],
        prices: ["Shared room: from €483 / month", "Private room: from €752 / month"],
        readMoreUrl: "https://www.nomadico.io/taghazout-coliving",
      },
      {
        id: "cape-town",
        title: "Coliving Cape Town — hiking, kitesurfing, community, and mountains",
        location: "Bloubergstrand, Cape Town, South Africa",
        description:
          "Live and work by the sea in a social coliving built for digital nomads and travellers. With fast Wi‑Fi, good workspaces, and a strong community from day one, you get focused work, new friendships, and dramatic nature — without blowing the budget.",
        features: [
          "Private and shared rooms, pool, garden, lounge, and laundry",
          "Close to the beach",
          "Fast fibre internet and work-friendly rooms",
          "Ideal for remote work",
          "Community manager, weekly events, and social experiences",
          "Lifestyle with balance and outdoor activities",
          "And much more…",
        ],
        prices: ["Shared room: from €356 / month", "Private room: from €611 / month"],
        readMoreUrl: "https://www.nomadico.io/cape-town-coliving",
      },
    ],
    footnote: "New destination coming soon…",
  },
  {
    id: "south-america",
    name: "South America",
    listings: [
      {
        id: "puerto-escondido",
        title: "Coliving & coworking in Puerto Escondido",
        location: "Puerto Escondido, Oaxaca, Mexico",
        description:
          "Live and work in a relaxed surf town on Mexico’s Pacific coast, where slow living and focus go together. Stable Wi‑Fi, air-conditioned work areas, and a social coliving with a pool — minutes from the beach, waves, and local taco spots.",
        features: [
          "Private room in a lively coliving community",
          "Stable, fast fibre internet",
          "Quiet but central location",
          "Access to a dedicated coworking space",
          "International community of digital nomads",
          "Surf and nature",
          "And much more…",
        ],
        prices: ["Shared room: from €792 / month", "Private room: from €966 / month"],
        readMoreUrl: "https://www.nomadico.io/puerto-escondido-coliving",
      },
      {
        id: "medellin",
        title: "Coliving & coworking in Medellín",
        location: "Laureles, Medellín, Colombia",
        description:
          "Live and work in the city of eternal spring. This coliving mixes urban energy with green surroundings, a strong community, and great conditions for remote work — calm for focus, space for social life, and real local flavour in one of the city’s most popular neighbourhoods.",
        features: [
          "Studio next to a park and close to Laureles’ cafés and nightlife",
          "Fast fibre internet and work-friendly rooms",
          "Salsa, music, local trips, and weekends to Guatapé and coffee farms",
          "International community of digital nomads",
          "Lush rooftop, jacuzzi, and hammocks",
          "And much more…",
        ],
        prices: ["Studio: €779 / month"],
        readMoreUrl: "https://www.nomadico.io/medellin-coliving",
      },
      {
        id: "florianopolis",
        title: "Coliving & coworking in Florianópolis",
        location: "Barra da Lagoa, Florianópolis, Brazil",
        description:
          "Live and work on one of Brazil’s most beautiful islands, where beach life, nature, and community come together. This coliving offers focus, creativity, and a social community in relaxed green surroundings near the ocean.",
        features: [
          "Private or shared room with beach, jungle, and sea right outside",
          "Fast fibre internet and work-friendly rooms",
          "Great for surfing — beginner-friendly waves and surf schools within walking distance",
          "Relaxed lifestyle — samba nights, shared dinners, hikes, and ocean swims",
          "International community of digital nomads",
          "And much more…",
        ],
        prices: ["Shared room: from €322 / month", "Private room: from €597 / month"],
        readMoreUrl: "https://www.nomadico.io/florianopolis-coliving",
      },
    ],
  },
];

export const EXPLAINERS: { id: string; title: string; body: string; bullets?: string[] }[] = [
  {
    id: "what",
    title: "What is co-living abroad?",
    body:
      "Co-living abroad means sharing a house or complex with other international residents. Most colivings are built for digital nomads and remote workers and include:",
    bullets: [
      "Fast, stable Wi‑Fi",
      "A desk in your room or access to coworking",
      "Shared kitchen and living space",
      "A community manager and social activities",
      "Flexible stays — from a few weeks to several months",
    ],
  },
  {
    id: "who",
    title: "Who is it for?",
    body: "Co-living abroad is a great fit for:",
    bullets: [
      "Digital nomads",
      "Freelancers and remote employees",
      "Students on a gap year",
      "Founders and creative travellers who want more than a hostel or short-term rental",
    ],
  },
  {
    id: "benefits",
    title: "Benefits of co-living abroad",
    body:
      "One of the biggest benefits is community. Instead of building a network from scratch, you join an active community from day one. Many people find that makes the journey easier, more fun, and more meaningful.",
    bullets: [
      "Lower living costs compared with short-term rentals",
      "No long contracts or heavy paperwork",
      "Easy access to local experiences and insider tips",
      "Better work–life balance in inspiring surroundings",
    ],
  },
  {
    id: "start",
    title: "Get started with co-living abroad",
    body:
      "Co-living makes it easier to take the leap and move abroad for a while. You spend less energy on logistics and more on work, experiences, and relationships. It is a modern way to live and work — built for a flexible, global lifestyle. If you are considering co-living abroad, the most important step is choosing a destination and a community that fits your needs. The rest often falls into place.",
  },
];
