import type { ColivingExtendedContent } from "./types";
import { colivingImgs } from "./gallery-helpers";

const SLUG = "medellin";
const LABEL = "Coliving Medellín";

const FILES = [
  "medellin-01-4c111fbfe982.jpg",
  "medellin-02-01a076af513e.jpg",
  "medellin-03-c0e72de48bd5.jpeg",
  "medellin-04-6881cdd388e2.jpg",
  "medellin-05-353d25194c82.jpg",
  "medellin-06-ead3c30db74e.jpeg",
  "medellin-07-c4f22b7acb15.jpeg",
  "medellin-08-14d202c551f5.jpeg",
  "medellin-09-9282c6dc8cdf.jpg",
  "medellin-10-a822648da355.jpeg",
  "medellin-11-beefd95fe347.jpeg",
  "medellin-12-1f7c7dc19c52.jpeg",
  "medellin-13-8c176dc5c037.jpg",
  "medellin-14-0b82e6a994c6.jpg",
] as const;

export const MEDELLIN_EXTENDED: ColivingExtendedContent = {
  heroStats: ["1 home · 15 studios", "Belén · Laureles next door"],
  seasonLine: "Open year-round — spring-in-the-city weather most months.",
  amenityPills: [
    "Fibre Wi‑Fi",
    "Desk in every studio",
    "Community events",
    "Rooftop cowork floor",
    "Jacuzzi and hammocks",
    "Weekly cleaning",
  ],
  gallery: colivingImgs(SLUG, LABEL, FILES),
  workspaceImages: [
    { src: `/coliving/${SLUG}/medellin-07-c4f22b7acb15.jpeg`, alt: "Cowork floor overlooking the park" },
    { src: `/coliving/${SLUG}/medellin-08-14d202c551f5.jpeg`, alt: "Caobo — bright work lounge" },
    { src: `/coliving/${SLUG}/medellin-09-9282c6dc8cdf.jpg`, alt: "Studio desk setup" },
  ],
  homes: {
    label: "Home · Coliving Medellín",
    title: "Caobo — park-front studios",
    intro:
      "Caobo is a family-run stack of 15 studios facing greenery, minutes from Laureles’ cafés. Expect fans, laundry help, a lush rooftop with jacuzzi, and a cowork level that catches morning light over the park.",
    blocks: [
      {
        name: "Caobo",
        subtitle: "Nomads who want city soul",
        bullets: [
          "15 private studios with in-room desks",
          "Shared kitchen and rooftop social zones",
          "Jacuzzi, hammocks, and salsa-proof soundtracks downstairs",
          "Laundry service plus machines",
          "Real Belén neighbourhood ambience — occasional street life soundtrack",
        ],
      },
    ],
  },
  workspace: {
    label: "Workspace · Coliving Medellín",
    title: "City energy, leafy views",
    paragraphs: [
      "The renovated cowork floor is airy, ergonomic, and wired on fibre — ideal for collaboration days or heads-down sprints. Studios stay quiet for calls when you need isolation.",
      "Large windows face the park, so breaks feel like mini resets without leaving the building.",
    ],
    highlights: [
      { title: "Host family dinners", subtitle: "Bernardo and Carol invite you into their rhythm" },
      { title: "City adventures", subtitle: "Salsa bars, art walks, late snacks" },
      { title: "Day trips", subtitle: "Guatapé, coffee farms, Comuna 13 murals" },
    ],
    galleryCaptions: ["Cowork panorama", "Shared spaces", "Studio focus"],
  },
  community: {
    label: "Community · Coliving Medellín",
    title: "Homey · salsa · vibrant",
    body:
      "Medellín’s spring climate keeps windows open and moods high. Mornings smell like coffee; afternoons stack meetings and terrace chats; evenings wander toward salsa or rooftop jacuzzi soaks. Managers and hosts co-host meals and weekend missions so you never feel like a tourist on mute.",
  },
  destination: {
    title: "Medellín",
    paragraphs: [
      "The “city of eternal spring” blends jungle green, metro convenience, and a music scene that pulls you onto the dance floor.",
      "Belén offers authentic barrio life with quick access to Laureles’ nomad cafés and Provenza’s nightlife a cheap Uber away.",
      "Food-obsessed visitors stay for arepas, tasting menus, and rooftop sunsets.",
    ],
  },
  pricing: {
    label: "Pricing · Coliving Medellín",
    title: "Studio tiers in USD",
    refundNote: "One-month refund window is standard on the partner site — confirm while booking.",
    guaranteeLine: "Best-price language lives with Nomadico.",
    table: {
      columnLabels: ["Deluxe", "Premium", "Plus", "Standard"],
      rows: [
        { period: "1 week", amounts: ["$505", "$430", "$363", "$321"] },
        { period: "2 weeks", amounts: ["$930", "$795", "$666", "$590"] },
        { period: "4 weeks", amounts: ["$1,495", "$1,280", "$1,080", "$955"] },
      ],
      footnote: "USD · studio categories — map names carefully on checkout.",
    },
  },
  locals: {
    label: "Reviews · Coliving Medellín",
    title: "Belén & Laureles",
    paragraphs: [
      "Belén feels residential and affordable — Pueblito Paisa and Parque de Belén are local landmarks worth repeat visits.",
      "Laureles is a short walk: leafy streets, student energy, La 70 salsa bars, and specialty coffee.",
      "Poblado shines for big nights out; visit for dinner then come home to quieter sleep.",
    ],
  },
  hosts: {
    title: "Your hosts on the ground",
    body:
      "Bernardo and Carol opened Caobo as an extension of their family table — expect birthdays, spontaneous Spanish practice, and genuine care.",
  },
  location: {
    label: "Location · Coliving Medellín",
    title: "Belén — Laureles",
    bullets: [
      "MDE airport ~45 minutes / ~$15 Uber",
      "Laureles core ~15 minutes on foot",
      "Supermarket ~10 minutes walking",
      "Gym ~5 minutes away",
      "Poblado nightlife ~20 minutes by Uber",
    ],
  },
  faq: [
    {
      question: "How do I get there?",
      answer:
        "José María Córdova airport buses and taxis drop you in Medellín; collective taxis save money if you do not mind a connection. Uber works reliably in town.",
    },
    {
      question: "Kitchen and laundry?",
      answer: "Equipped shared kitchen; machines on site plus nearby lavanderías.",
    },
    {
      question: "Do I need a car?",
      answer:
        "Uber and the metro cover most trips; Encicla bikes have a station nearby; driving is optional unless you explore Jardín or coffee towns weekly.",
    },
    {
      question: "How do booking and payment work?",
      answer: "Standard Nomadico checkout with international-friendly payments.",
    },
    {
      question: "Is it expensive?",
      answer: "Medellín remains budget-friendly: meals $5–10, salsa cover charges low, Ubers cheap.",
    },
    {
      question: "Can I take calls? Is Wi‑Fi reliable?",
      answer: "Fibre to the building; cowork floor and studios both handle video calls. Watch metro pickpockets on leisure rides.",
    },
    {
      question: "Shops nearby?",
      answer: "Park-facing cafés, groceries, and restaurants within a few blocks.",
    },
    {
      question: "What is there to do?",
      answer: "Parque Arví, coffee tours, Comuna 13, gastronomy crawls, salsa until dawn.",
    },
    {
      question: "Is it safe?",
      answer: "Laureles/Belén are among the calmer districts; stay aware as in any big city.",
    },
    {
      question: "Is there a community manager?",
      answer: "Yes — on-site support for dinners, hikes, and impromptu dance nights.",
    },
  ],
};
