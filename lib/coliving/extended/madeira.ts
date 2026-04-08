import type { ColivingExtendedContent } from "./types";
import { colivingImgs } from "./gallery-helpers";

const SLUG = "madeira";
const LABEL = "Coliving Madeira";

const FILES = [
  "madeira-01-89c9b03f71a9.jpeg",
  "madeira-02-e901b71cbed1.jpeg",
  "madeira-03-e136a6c9d16b.jpeg",
  "madeira-04-1f7a6c92b98a.jpeg",
  "madeira-05-34b7804bf446.jpeg",
  "madeira-06-2676001909dd.jpeg",
  "madeira-07-2cfda8f41f11.jpeg",
  "madeira-08-868c7414a2a7.jpeg",
  "madeira-09-2915c757de65.jpeg",
  "madeira-10-63dd9bba7044.jpeg",
  "madeira-11-ed522b7c15d3.jpeg",
  "madeira-12-20bae5f39ec4.jpeg",
  "madeira-13-62e43c0a2b65.jpeg",
  "madeira-14-ae4ed91b5139.jpeg",
] as const;

export const MADEIRA_EXTENDED: ColivingExtendedContent = {
  heroStats: ["1 home · 9 private rooms", "Paul do Mar · west Madeira"],
  seasonLine: "Typical season October–May; some inventory may be waitlist-only — check the partner page for the latest.",
  amenityPills: [
    "Fibre Wi‑Fi",
    "Desk in every room",
    "Community events",
    "Free Ponta do Sol coworking",
    "Community manager",
    "Weekly cleaning",
  ],
  gallery: colivingImgs(SLUG, LABEL, FILES),
  workspaceImages: [
    { src: `/coliving/${SLUG}/madeira-06-2676001909dd.jpeg`, alt: "Madeira — workspace and island light" },
    { src: `/coliving/${SLUG}/madeira-07-2cfda8f41f11.jpeg`, alt: "Ponta do Sol coworking access" },
    { src: `/coliving/${SLUG}/madeira-08-868c7414a2a7.jpeg`, alt: "Coliving Madeira — work-friendly setup" },
  ],
  homes: {
    label: "Home · Coliving Madeira",
    title: "Adam’s home — between ocean and peaks",
    intro:
      "The house sits in Paul do Mar, where the Atlantic meets steep green ridges. Even as spaces evolve, the idea stays the same: a small, intentional group, shared meals, and easy access to both trails and salt air.",
    blocks: [
      {
        name: "Adam’s home",
        subtitle: "Nomads and slow-travel guests",
        bullets: [
          "Nine private rooms in a tight-knit setup",
          "Shared kitchen and laundry",
          "Terrace time with sunset light",
          "Community manager shaping weekly rhythm",
          "Free access to Madeira’s public cowork in Ponta do Sol (short drive)",
          "Supermarket and village life within reach",
        ],
      },
    ],
  },
  workspace: {
    label: "Workspace · Coliving Madeira",
    title: "Home desks plus free Ponta do Sol coworking",
    paragraphs: [
      "Rooms are wired for calls and deep work on fibre. When you want a scene change, the island’s complimentary coworking hub in Ponta do Sol is part of the deal — meet other nomads and swap island tips between focus blocks.",
      "Expect bright Atlantic air, reliable video calls, and a slower clock than most mainland cities.",
    ],
    highlights: [
      { title: "By the ocean", subtitle: "Afternoons near the water between work sprints" },
      { title: "Trail days", subtitle: "Group hikes along levadas and cliffs" },
      { title: "Sunset terrace", subtitle: "Evening debriefs as the light drops into the sea" },
    ],
    galleryCaptions: ["Work spots", "Ponta do Sol", "Coliving life"],
  },
  community: {
    label: "Community · Coliving Madeira",
    title: "Village · ocean · hikes",
    body:
      "Paul do Mar keeps a human scale: cowork mornings, long lunches, then hikes or a swim before dinner runs late on the terrace. The manager helps stitch together shared meals and adventures, while guests bring their own ideas. Salty breeze and big views make community here feel grounded and a little magical.",
  },
  destination: {
    title: "Madeira",
    paragraphs: [
      "Madeira is a hiking and viewpoint paradise with serious digital infrastructure — a favourite for nomads who want island calm without feeling remote.",
      "Paul do Mar is a west-coast village: surf for advanced riders, dramatic walks, and a younger, social edge compared with some smaller parishes.",
      "Tunnels and roads make crossing the island feasible; many guests share rides or rent wheels for weekend loops.",
    ],
  },
  pricing: {
    label: "Pricing · Coliving Madeira",
    title: "Rates and availability",
    refundNote: "Refund windows and waitlist rules are published on the partner booking flow.",
    guaranteeLine: "Join the waitlist or book open dates directly on the partner site for the latest pricing.",
    table: {
      columnLabels: ["Private room (guide)"],
      rows: [{ period: "From (Abroader card)", amounts: ["€564 / month"] }],
      footnote:
        "Nomadico may use waitlists or seasonal pricing — open the partner site for live quotes, room names, and availability.",
    },
  },
  locals: {
    label: "Reviews · Coliving Madeira",
    title: "Notes from the area",
    paragraphs: [
      "Paul do Mar rewards hikers: levadas, coastal paths, and ocean panoramas are never far.",
      "The village feels social enough to make friends yet calm enough for focus — a sweet spot for longer stays.",
      "Stock up at the newer supermarket; neighbouring Jardim do Mar has its own veggie shop for lighter shops on foot.",
    ],
  },
  hosts: {
    title: "Your hosts on the ground",
    body:
      "Joni and Adam left conventional careers to build a warm base for nomads — a place to slow down, connect, and feel inspired by the island.",
  },
  location: {
    label: "Location · Coliving Madeira",
    title: "Paul do Mar",
    bullets: [
      "West Madeira — ocean on the doorstep",
      "~20 minutes by car to Ponta do Sol coworking",
      "~1 hour to the airport with today’s road network",
      "Rental cars and scooters available via partner introductions",
      "Community ride-shares common for groceries and outings",
    ],
  },
  faq: [
    {
      question: "How do I get there?",
      answer:
        "Fly into Funchal. Bolt or pre-booked taxis run about €70–85; several local drivers are listed on the partner page. Renting a car or scooter helps if you want to circle the island on weekends.",
    },
    {
      question: "Kitchen and laundry?",
      answer: "Shared kitchen with full equipment plus a washing machine for guest use.",
    },
    {
      question: "Do I need a car?",
      answer:
        "Buses cover short hops, but a rental unlocks the mountains and north shore. Partners connect you with trusted rentals.",
    },
    {
      question: "How do booking and payment work?",
      answer: "Book and pay on the partner site (card, Wise, iDEAL, Apple/Google Pay, bank transfer). You receive guides after confirmation.",
    },
    {
      question: "Is it expensive?",
      answer: "Mid-range for Europe: meals roughly €8–12, coffee near €2, with plenty of free nature for balance.",
    },
    {
      question: "Can I take calls? Is Wi‑Fi reliable?",
      answer:
        "Fibre supports video calls; each room has a desk. Ponta do Sol coworking is free when you want variety — about 15 minutes away.",
    },
    {
      question: "Shops nearby?",
      answer: "Small grocers and cafés are walkable; larger shops are a short drive.",
    },
    {
      question: "What is there to do?",
      answer:
        "Levada hikes, volcanic pools, whale watching, vineyards, and cliff viewpoints — classic Madeira in every direction.",
    },
    {
      question: "Is it safe?",
      answer: "Madeira ranks among Europe’s safest islands; normal travel awareness is enough for most visitors.",
    },
    {
      question: "Is there a community manager?",
      answer: "Yes — they help you settle, organise hikes, dinners, and group adventures.",
    },
  ],
};
