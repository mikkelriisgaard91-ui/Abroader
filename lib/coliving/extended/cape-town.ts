import type { ColivingExtendedContent } from "./types";
import { colivingImgs } from "./gallery-helpers";

const SLUG = "cape-town";
const LABEL = "Coliving Cape Town";

const FILES = [
  "cape-town-01-d2cc4f7a37e0.jpeg",
  "cape-town-02-db714c1e163a.jpeg",
  "cape-town-03-090e38fd9541.jpg",
  "cape-town-04-cd2496e49fac.jpg",
  "cape-town-05-00edf8d64d25.jpeg",
  "cape-town-06-ee0b4d3ba553.jpeg",
  "cape-town-07-c001965204f2.jpg",
  "cape-town-08-5dd477db9c60.jpeg",
  "cape-town-09-a110f09ef3fd.jpeg",
  "cape-town-10-c9de718ea6fb.jpeg",
  "cape-town-11-84a138718878.jpg",
  "cape-town-12-4d001a7d08a9.jpeg",
  "cape-town-13-8691300e1452.jpeg",
  "cape-town-14-d2b8d63b872d.jpeg",
  "cape-town-15-6518098e4c59.jpeg",
  "cape-town-16-31e17d7673ab.jpeg",
  "cape-town-17-a3da70a28568.jpeg",
] as const;

export const CAPE_TOWN_EXTENDED: ColivingExtendedContent = {
  heroStats: ["2 homes · 19 private & 2 shared rooms", "Bloubergstrand · Table Mountain views"],
  seasonLine: "Homes may open on staggered calendars (e.g. March vs October) — confirm which house is live for your dates.",
  amenityPills: [
    "Fibre Wi‑Fi",
    "Desk in most rooms",
    "Community events",
    "Dedicated workspaces",
    "Power backup",
    "Weekly cleaning",
  ],
  gallery: colivingImgs(SLUG, LABEL, FILES),
  workspaceImages: [
    { src: `/coliving/${SLUG}/cape-town-06-ee0b4d3ba553.jpeg`, alt: "Coliving Cape Town — cowork with the group" },
    { src: `/coliving/${SLUG}/cape-town-07-c001965204f2.jpg`, alt: "Work corner with Atlantic light" },
    { src: `/coliving/${SLUG}/cape-town-08-5dd477db9c60.jpeg`, alt: "Poolside laptop sessions" },
  ],
  homes: {
    label: "Homes · Coliving Cape Town",
    title: "Two houses beside the Atlantic",
    intro:
      "Both properties lean social: fibre, dedicated work zones, backup power for load-shedding, and plenty of hammocks for debriefs after kiting. Pick the house that matches your budget — shared rooms in Miri’s place keep Cape Town accessible.",
    blocks: [
      {
        name: "Miri’s home",
        subtitle: "Nomads and travellers",
        bullets: [
          "8 private rooms · 3 shared rooms — ideal if you want max community per rand",
          "Pool, garden, hammocks, board games, laundry",
          "Kitchen and lounge built for instant friendships",
          "Seasonal opening — check partner calendar",
        ],
      },
      {
        name: "Jody’s home",
        subtitle: "Nomads and travellers",
        bullets: [
          "11 private rooms with fireplace, pool, projector, pool table",
          "Garden workspace and quiet call nooks",
          "Same fibre and backup power story",
          "Seasonal opening — verify before booking",
        ],
      },
    ],
  },
  workspace: {
    label: "Workspace · Coliving Cape Town",
    title: "Cape Town is calling",
    paragraphs: [
      "Both homes run fibre, battery backup, and thoughtfully placed desks so calls survive load-shedding. Shared kitchens and pool decks become informal offices when the weather cooperates.",
      "Private rooms mostly include desks; loungers and bar stools fill the gaps for lighter tasks.",
    ],
    highlights: [
      { title: "Sunset hikes", subtitle: "Lion’s Head missions after work" },
      { title: "Morning flow", subtitle: "Garden yoga before inbox zero" },
      { title: "Wine country", subtitle: "Group runs to Durbanville cellars" },
    ],
    galleryCaptions: ["Cowork vibes", "Atlantic views", "Home base"],
  },
  community: {
    label: "Community · Coliving Cape Town",
    title: "Hiking · kitesurfing · wildlife",
    body:
      "Blouberg life orbits the mountain across the bay: dawn yoga, midday focus blocks, evening braais. Managers and guests co-author wine tastings, kitesurf missions, or low-key movie nights. You are close enough to Cape Town’s energy yet far enough to hear the surf.",
  },
  destination: {
    title: "Cape Town",
    paragraphs: [
      "Mediterranean climate, dramatic nature, and a food scene that rivals far bigger metros — Cape Town earns repeat visits.",
      "Bloubergstrand pairs wide beaches with Table Mountain backdrops and a strong kite scene; Uber/Bolt into town is quick and affordable.",
      "Weekends unlock Stellenbosch, Muizenberg surf, or paragliding if you crave adrenaline.",
    ],
  },
  pricing: {
    label: "Pricing · Coliving Cape Town",
    title: "Beachside value",
    refundNote: "Partner policy usually includes a one-month refund window — read the checkout fine print.",
    guaranteeLine: "Best-price details sit on Nomadico.",
    table: {
      columnLabels: ["Miri · double ensuite", "Jody · double ensuite", "Cabin / van · shared bath", "Shared room"],
      rows: [
        { period: "1 week", amounts: ["€343", "€315", "€203", "€119"] },
        { period: "2 weeks", amounts: ["€617", "€567", "€365", "€214"] },
        { period: "1 month", amounts: ["€1,029", "€945", "€609", "€357"] },
      ],
      footnote: "EUR · rounded from partner grid — map each price to the exact room category when booking.",
    },
  },
  locals: {
    label: "Reviews · Coliving Cape Town",
    title: "Life in Bloubergstrand",
    paragraphs: [
      "Twenty to thirty minutes from the CBD with Table Mountain framed over the water — kites, cafés, and nomad meetups are daily background noise.",
      "Gyms, yoga studios, and beach runs keep you moving; massages stay affordable compared with Europe.",
      "City museums, Bo-Kaap, and V&A are a short ride when you need urban intensity.",
    ],
  },
  hosts: {
    title: "Your hosts on the ground",
    body:
      "Phil and Miri have run yoga-and-kite guesthouses for years — they know the hidden beaches, wind forecasts, and how to make Cape Town feel like home fast.",
  },
  location: {
    label: "Location · Coliving Cape Town",
    title: "Bloubergstrand",
    bullets: [
      "Beach roughly five minutes on foot",
      "Supermarkets and weekend markets ~15 minutes walking",
      "CPT airport ~40 minutes by rideshare",
      "City centre ~20–30 minutes depending on traffic",
      "Premium gyms a short drive; neighbourhood studios closer",
    ],
  },
  faq: [
    {
      question: "How do I get there?",
      answer:
        "Cape Town International is half an hour by Uber/Bolt (ZAR 250–400). MyCiTi bus is budget-friendly with luggage patience. Domestic links from Joburg or Durban are frequent.",
    },
    {
      question: "Kitchen and laundry?",
      answer: "Full kitchens with appliances and coffee gear; laundry machines on site.",
    },
    {
      question: "Do I need a car?",
      answer:
        "Rideshare covers most needs; rent a car for peninsula loops, penguin beaches, or long coast drives.",
    },
    {
      question: "How do booking and payment work?",
      answer: "Book via Nomadico with standard payment options; local safety and load-shedding tips arrive after booking.",
    },
    {
      question: "Is it expensive?",
      answer: "Groceries and local eateries beat many Western cities; tourist strips cost more. Sunsets remain free.",
    },
    {
      question: "Can I take calls? Is Wi‑Fi reliable?",
      answer:
        "Fibre plus UPS/battery backup keeps calls online. Dedicated cowork zones and in-room desks cover different work styles.",
    },
    {
      question: "Shops nearby?",
      answer: "Cafés, groceries, and mini markets walkable; bigger retail in town or the Waterfront.",
    },
    {
      question: "What is there to do?",
      answer:
        "Table Mountain, Bo-Kaap, Muizenberg surf, Stellenbosch wine, Signal Hill sundowners, cage diving, paragliding — pick your adrenaline level.",
    },
    {
      question: "Is it safe?",
      answer:
        "Stay aware as in any major city; Blouberg is gated and community-minded. Hosts share neighbourhood-specific guidance on arrival.",
    },
    {
      question: "Is there a community manager?",
      answer: "Yes — welcome dinners, hikes, and weekend plans are part of the rhythm.",
    },
  ],
};
