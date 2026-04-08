import type { ColivingExtendedContent } from "./types";

/**
 * Coliving Tarifa — structure aligned with the partner landing page.
 * Copy is paraphrased for Abroader; confirm numbers and prices on the partner site.
 */
export const TARIFA_EXTENDED: ColivingExtendedContent = {
  heroStats: ["2 homes · 19 private rooms", "Old town · 10 min to the beach"],
  seasonLine: "Typical coliving season: mid-November through late March (confirm dates when booking).",
  amenityPills: [
    "Fibre Wi‑Fi",
    "Desk in every room",
    "Community events",
    "Dedicated coworking",
    "Community manager",
    "Weekly cleaning",
  ],
  // Partner photography (Nomadico / Wix) in /public/coliving/tarifa — refresh with scripts/download-tarifa-partner-images.mjs (other cities: scripts/download-all-coliving-images.mjs).
  gallery: [
    { src: "/coliving/tarifa/tarifa-01-94543b295843.jpeg", alt: "Coliving Tarifa — rooftop and sea view" },
    { src: "/coliving/tarifa/tarifa-02-6a88d1bf93da.jpeg", alt: "Coliving and coworking in Tarifa" },
    { src: "/coliving/tarifa/tarifa-03-e086ac1fdd85.jpeg", alt: "Coliving Tarifa — outdoor terrace" },
    { src: "/coliving/tarifa/tarifa-04-7cab030ff51c.jpg", alt: "Coliving Tarifa — community space" },
    { src: "/coliving/tarifa/tarifa-05-844f2463e326.jpg", alt: "Coliving Tarifa — coastal setting" },
    { src: "/coliving/tarifa/tarifa-06-cf82e973e172.jpeg", alt: "Coliving Tarifa — workspace" },
    { src: "/coliving/tarifa/tarifa-07-aa7cddd83c33.jpg", alt: "Coliving Tarifa — interior" },
    { src: "/coliving/tarifa/tarifa-08-c8b5aeaff77f.jpg", alt: "Coliving Tarifa — living area" },
    { src: "/coliving/tarifa/tarifa-09-7b7556d96f27.jpeg", alt: "Coliving Tarifa — shared home" },
    { src: "/coliving/tarifa/tarifa-10-99f3726801ea.jpeg", alt: "Coliving Tarifa — house detail" },
    { src: "/coliving/tarifa/tarifa-11-6693989baa65.jpeg", alt: "Coliving Tarifa — stay and work" },
    { src: "/coliving/tarifa/tarifa-12-0e0cb0d6925b.jpeg", alt: "Coliving Tarifa — Nomadico home" },
    { src: "/coliving/tarifa/tarifa-13-4256e35fb50d.jpeg", alt: "Coliving Tarifa — property" },
    { src: "/coliving/tarifa/tarifa-14-732fe79da7bb.jpeg", alt: "Coliving Tarifa — Tarifa base" },
  ],
  workspaceImages: [
    { src: "/coliving/tarifa/tarifa-06-cf82e973e172.jpeg", alt: "Dedicated coworking at Tarifa casa" },
    { src: "/coliving/tarifa/tarifa-07-aa7cddd83c33.jpg", alt: "Desk and room at Tarifa hub" },
    { src: "/coliving/tarifa/tarifa-08-c8b5aeaff77f.jpg", alt: "Work-friendly space at Tarifa hub" },
  ],
  homes: {
    label: "Homes · Coliving Tarifa",
    title: "Two houses, one community",
    intro:
      "Both properties are woven into a single community. Alongside last-minute sunset walks and surf ideas, the team runs weekly gatherings shaped by everyone’s input. A community manager keeps the tone welcoming so you settle in quickly.",
    blocks: [
      {
        name: "Tarifa hub",
        subtitle: "For nomads and travellers",
        bullets: [
          "On a calm street near Puerta Jerez — a 20th-century house with rooftop views over the old town, Gibraltar, and Morocco on clear days",
          "14 private rooms",
          "Shared kitchen",
          "Rooftop terrace · yoga mats",
          "Laundry · TV lounge",
          "Pets allowed (confirm with host) · heating",
        ],
      },
      {
        name: "Tarifa casa",
        subtitle: "For nomads and travellers",
        bullets: [
          "About five minutes on foot from the main hub — coworking sits on the ground floor of this house",
          "5 private rooms",
          "Heating · shared kitchen · laundry",
          "Rooftop terrace",
        ],
      },
    ],
  },
  workspace: {
    label: "Workspace · Coliving Tarifa",
    title: "Ride the wind, keep your focus",
    paragraphs: [
      "Fibre internet runs through both homes, and Tarifa’s creative buzz makes it easy to get into flow. Each room has a desk for calls and deep work, with extra nooks when you want a change of scene.",
      "Most guests stay in the hub; the dedicated cowork is a converted yoga studio in Tarifa casa — roughly five minutes through the old town — built for comfort, quiet, and bumping into other residents.",
    ],
    highlights: [
      {
        title: "Community dinners",
        subtitle: "Shared cooking and evenings out at tapas spots",
      },
      {
        title: "Morning flow",
        subtitle: "Rooftop yoga or meditation to start the day",
      },
      {
        title: "On the water",
        subtitle: "Learn to surf or kite — the wind is part of daily life",
      },
    ],
    galleryCaptions: ["Tarifa casa — coworking", "Tarifa hub — room desk", "Tarifa hub — room desk"],
  },
  community: {
    label: "Community · Coliving Tarifa",
    title: "Mindful · Ocean · Nature",
    body:
      "In Tarifa, the day often follows the breeze: slow starts in the old town, a walk through white lanes to the cowork, and sunsets that slide into group meals. Between beaches, trails, and spontaneous nights out, meeting people feels natural. The community manager helps set a weekly rhythm — think mindful moments, creative sessions, or a cold swim — while residents co-create what happens next. With Africa on the horizon, the town mixes raw nature, culture, and creativity in one energising flow.",
  },
  destination: {
    title: "Tarifa",
    paragraphs: [
      "Pack a kite and leave stress behind: Tarifa is known for steady wind, long beaches, and an open-minded crowd. The town is famous for kitesurfing and windsurfing, plus dramatic nature nearby.",
      "The coliving sits in the historic centre, close to cafés and restaurants, with the beach roughly ten minutes on foot. Summers are hot and Mediterranean; winters stay mild, with wind most of the year — ideal for water sports or simply unwinding by the sea.",
      "You are at continental Europe’s southern tip; on a clear day you can make out Africa across the strait. Expect a relaxed, international vibe and locals who are used to visitors from everywhere — a strong mix of chill days and adventure for remote workers.",
    ],
  },
  pricing: {
    label: "Pricing · Coliving Tarifa",
    title: "Longer stays, sensible rates",
    refundNote: "The partner typically offers a full refund up to one month before check-in if plans change — verify on their booking page.",
    guaranteeLine: "Strong community and competitive rates — details and “best price” rules live on the partner site.",
    table: {
      columnLabels: ["Double · shared bath", "Standard double", "Superior double", "Premium double"],
      rows: [
        { period: "1 week", amounts: ["€286", "€325", "€385", "€429"] },
        { period: "2 weeks", amounts: ["€473", "€545", "€627", "€715"] },
        { period: "1 month", amounts: ["€737", "€847", "€957", "€1,089"] },
      ],
      footnote: "Both homes · amounts in EUR · confirm live rates and room names when you book.",
    },
  },
  locals: {
    label: "Reviews · Coliving Tarifa",
    title: "Notes from the area",
    paragraphs: [
      "Life in Tarifa blends outdoor life, culture, and a tight-knit feel. The compact medina-style centre keeps daily needs within walking distance — cafés, affordable eats, groceries for group cooking, or a gym session with others from the house.",
      "Nature lovers come for the water and trails; nearby parks and beaches like Bolonia add dramatic scenery and hiking.",
      "The wind shapes the week: Poniente often feels cooler, Levante warmer — both are part of why kiting and surfing are so big here. Between the light, the sea, and the mix of visitors and locals, many people find Tarifa an authentic base for a season abroad.",
    ],
  },
  hosts: {
    title: "Your hosts on the ground",
    body:
      "Two long-term operators run both homes in the heart of Tarifa. In summer the spaces work as hostels; from autumn through spring they shift into coliving for Nomadico-style stays (plus the occasional walk-in surfer).",
  },
  location: {
    label: "Location · Coliving Tarifa",
    title: "Old town",
    bullets: [
      "Two connected homes in the historic centre",
      "Beach roughly 10 minutes on foot",
      "Ferry to Tangier (Morocco) for a weekend away",
      "Shops and cafés around the corner",
      "Fly via Málaga, Seville, or Gibraltar — BlaBlaCar is a popular ride-share option south",
    ],
  },
  faq: [
    {
      question: "How do I get there?",
      answer:
        "Most people arrive via Málaga (flight, bus, train, or ferry). By car is about 2h30; BlaBlaCar is often cheaper. Bus to Algeciras plus taxi to Tarifa works too. Gibraltar, Jerez, and Seville are alternatives — the partner’s guide usually spells out each route.",
    },
    {
      question: "Kitchen and laundry?",
      answer:
        "Shared kitchens are fully equipped for cooking together. Laundry is available on site.",
    },
    {
      question: "Do I need a car?",
      answer:
        "You can walk most of Tarifa. For beach-hopping or villages nearby, a scooter or rental car helps; buses also link to Cádiz, Seville, and Málaga.",
    },
    {
      question: "How do booking and payment work?",
      answer:
        "Book on the partner’s site. They accept cards, Wise, iDEAL, Apple and Google Pay, and bank transfer in many cases. After booking you usually get local tips and arrival details.",
    },
    {
      question: "Is day-to-day life expensive?",
      answer:
        "Moderate for Spain: simple meals often sit around €8–10, coffee about €2, drinks by the beach a bit more — many residents live comfortably without overspending.",
    },
    {
      question: "Can I take video calls? Is Wi‑Fi reliable?",
      answer:
        "Fibre is available for focused work and calls. There is a dedicated coworking space, plus other corners in the houses if you want variety. Every room has a private desk.",
    },
    {
      question: "Shops nearby?",
      answer:
        "The old town has small grocers, cafés, and surf shops — mostly walkable. Markets are great for produce and pastries.",
    },
    {
      question: "What is there to do?",
      answer:
        "Kite and surf, coastal walks, mindfulness, or a day trip to Morocco (ferry in roughly 35 minutes). Evenings often mean tapas, sunsets, and sometimes flamenco.",
    },
    {
      question: "Is it safe?",
      answer:
        "Tarifa is generally safe and welcoming. The main hazard is sometimes the wind — hold onto your hat.",
    },
    {
      question: "Is there a community manager?",
      answer:
        "Yes. They help you settle in and organise dinners, hikes, and outings with other nomads.",
    },
  ],
};
