import type { ColivingExtendedContent } from "./types";
import { colivingImgs } from "./gallery-helpers";

const SLUG = "puerto-escondido";
const LABEL = "Coliving Puerto Escondido";

const FILES = [
  "puerto-escondido-01-17e3ae7c2747.jpeg",
  "puerto-escondido-02-35f0aa88a394.jpg",
  "puerto-escondido-03-8132e101ddfa.jpeg",
  "puerto-escondido-04-5d715ccda5a2.jpeg",
  "puerto-escondido-05-44cb2dde499f.jpeg",
  "puerto-escondido-06-eb7c13ea6cfb.jpg",
  "puerto-escondido-07-e4d96dc8aeb8.jpeg",
  "puerto-escondido-08-e42e7c280ef2.jpeg",
  "puerto-escondido-09-e33e475b324f.jpeg",
  "puerto-escondido-10-56ab6f1e9abc.jpeg",
  "puerto-escondido-11-03215112d4ce.jpeg",
  "puerto-escondido-12-ffa7a5f67698.jpeg",
  "puerto-escondido-13-23584e1e3ed4.jpeg",
  "puerto-escondido-14-720b358d64cb.jpeg",
] as const;

export const PUERTO_ESCONDIDO_EXTENDED: ColivingExtendedContent = {
  heroStats: ["1 home · 9 private & 1 shared room", "Near Rinconada · Oaxaca coast"],
  seasonLine: "Primary seasons: early September–10 December and late April–10 July — always confirm exact windows before paying.",
  amenityPills: [
    "Starlink + cable internet",
    "A/C and fans",
    "Community events",
    "Dedicated cowork + call room",
    "Pool and rooftop",
    "Weekly cleaning",
  ],
  gallery: colivingImgs(SLUG, LABEL, FILES),
  workspaceImages: [
    { src: `/coliving/${SLUG}/puerto-escondido-07-e4d96dc8aeb8.jpeg`, alt: "El Pacifico cowork — bay views" },
    { src: `/coliving/${SLUG}/puerto-escondido-08-e42e7c280ef2.jpeg`, alt: "Coliving Puerto Escondido — work lounge" },
    { src: `/coliving/${SLUG}/puerto-escondido-09-e33e475b324f.jpeg`, alt: "Call-friendly setup" },
  ],
  homes: {
    label: "Home · Coliving Puerto Escondido",
    title: "Julio’s home — family roots in Puerto",
    intro:
      "Julio’s family helped shape this stretch of coast. The house mixes character with serious connectivity: Starlink plus cable, A/C for hot-call days, a meeting room, and a cowork level that steals your attention with ocean colour.",
    blocks: [
      {
        name: "Julio’s home",
        subtitle: "Nomads and surfers",
        bullets: [
          "10 private rooms (studios and rooms) plus shared option",
          "Pool, gym corner, rooftop, hammocks, projector nights",
          "Kitchen built for batch cooking between sessions",
          "Quiet side of town near Rinconada — birds still audible",
        ],
      },
    ],
  },
  workspace: {
    label: "Workspace · Coliving Puerto Escondido",
    title: "From laptops to lineups",
    paragraphs: [
      "Rooms and studios are dialled for focus; the cowork floor is built for nomads with sightlines over the Pacific. Ergonomic chairs and A/C keep long Zooms humane.",
      "When the swell is firing, your lunch break might be a quick paddle — that is the Puerto contract.",
    ],
    highlights: [
      { title: "Big-wave theatre", subtitle: "World-class breaks within earshot" },
      { title: "Taco missions", subtitle: "Local spots beat room service every time" },
      { title: "Ocean neighbours", subtitle: "Dolphin watches and turtle releases nearby" },
    ],
    galleryCaptions: ["El Pacifico", "Cowork floor", "Call room"],
  },
  community: {
    label: "Community · Coliving Puerto Escondido",
    title: "Surf · sunset · culture",
    body:
      "Creative, easygoing residents balance deep work with slow Oaxacan time: coffee on the terrace, surf checks, communal dinners with local cooks, and scooter runs to La Punta when you crave nightlife. Managers help stitch yoga, tacos, and weekend hops to Mazunte or Zipolite without derailing deadlines.",
  },
  destination: {
    title: "Puerto Escondido",
    paragraphs: [
      "Oaxaca’s barefoot surf capital mixes palm-lined streets, strong coffee, and the so-called “Puerto vortex” (people plan a week and stay a season).",
      "Rivers, lagoons, and waterfalls sit inland; the town itself stays walkable and welcoming.",
      "Expect heat, colour, and a steady stream of artists beside remote workers.",
    ],
  },
  pricing: {
    label: "Pricing · Coliving Puerto Escondido",
    title: "Seasonal USD tiers",
    refundNote: "Partner refund policy applies — read dates carefully because seasons split the calendar.",
    guaranteeLine: "Second-season tariffs and A/C surcharges are listed on Nomadico.",
    table: {
      columnLabels: ["Studio (fan)", "Private · shared bath", "Shared room"],
      rows: [
        { period: "1 week · peak bands", amounts: ["$349", "$296", "$244"] },
        { period: "2 weeks", amounts: ["$663", "$562", "$464"] },
        { period: "4 weeks", amounts: ["$1,231", "$1,046", "$862"] },
      ],
      footnote:
        "USD · reflects Apr–Jul / Sep–Oct style bands on the partner page; Nov/Dec/Mar pricing and AC add-ons differ — verify at checkout.",
    },
  },
  locals: {
    label: "Reviews · Coliving Puerto Escondido",
    title: "Neighbourhood notes",
    paragraphs: [
      "You are close enough to cafés and tacos yet far enough for bird song — Bacocho and Carrizalillo beaches are short walks for swims or beginner sets.",
      "Scooter to La Punta in minutes when you want hostel energy; Pauline Coworking sits nearby for a third-space day.",
      "Chacahua day trips deliver Afro-Mexican culture, mangroves, and heavier waves.",
    ],
  },
  hosts: {
    title: "Your hosts on the ground",
    body:
      "Julio and Marlen carry generations of local history; they keep the house humming, share surf beta, and greet you like returning family.",
  },
  location: {
    label: "Location · Coliving Puerto Escondido",
    title: "Centro / Rinconada edge",
    bullets: [
      "PXM airport ~8 minutes by taxi",
      "Bus terminal ~5 minutes on foot",
      "Nearest swimmable beach ~8 minutes walking",
      "Cafés, markets, and laundries surround the block",
    ],
  },
  faq: [
    {
      question: "How do I get there?",
      answer:
        "Fly Mexico City → Puerto Escondido (~1h45) or overland from Oaxaca City. From PXM, colectivos and taxis are quick; negotiate taxi fares upfront.",
    },
    {
      question: "Kitchen and laundry?",
      answer: "Shared kitchen for communal cooking; laundry service sits next door.",
    },
    {
      question: "Do I need a car?",
      answer: "Walk or scooter (€10–15/day) covers most needs; we help arrange rentals or airport pickups.",
    },
    {
      question: "How do booking and payment work?",
      answer: "Nomadico checkout handles cards, Wise, iDEAL, Apple/Google Pay, and wires.",
    },
    {
      question: "Is it expensive?",
      answer: "Street food and smoothies stay cheap; beach clubs cost more. Overall Puerto remains gentle on wallets.",
    },
    {
      question: "Can I take calls? Is Wi‑Fi reliable?",
      answer:
        "Starlink plus cable keeps video calls workable despite town-wide fibre gaps. Desks in every room; dedicated cowork for team days.",
    },
    {
      question: "Shops nearby?",
      answer: "Minimarkets and fruit stands at the corner; larger supermarket ~500m away.",
    },
    {
      question: "What is there to do?",
      answer: "Surf spectating, hidden beaches, bioluminescent lagoons, yoga, mezcal tastings, and road trips along the Oaxacan coast.",
    },
    {
      question: "Is it safe?",
      answer: "Puerto is relaxed; stick to lit areas late at night and normal travel sense.",
    },
    {
      question: "Is there a community manager?",
      answer: "Yes — on-site help with surf meetups, yoga, and taco crawls.",
    },
  ],
};
