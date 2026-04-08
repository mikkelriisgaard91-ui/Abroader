import type { ColivingExtendedContent } from "./types";
import { colivingImgs } from "./gallery-helpers";

const SLUG = "florianopolis";
const LABEL = "Coliving Florianópolis";

const FILES = [
  "florianopolis-01-0854a0e98b88.jpeg",
  "florianopolis-02-062234c6ad63.jpeg",
  "florianopolis-03-cab3fff66e27.jpg",
  "florianopolis-04-31c7d54d521c.jpeg",
  "florianopolis-05-d45ea887214a.jpeg",
  "florianopolis-06-8db25f84eabb.jpeg",
  "florianopolis-07-13e1c4c24829.jpeg",
  "florianopolis-08-1498485b9ffe.jpeg",
  "florianopolis-09-b81e7d67fb18.jpg",
  "florianopolis-10-b1851882ca11.jpg",
  "florianopolis-11-7769ba38c3ff.jpg",
  "florianopolis-12-36c367241c46.jpeg",
  "florianopolis-13-77a025804eb0.jpeg",
  "florianopolis-14-1317f704bc06.jpeg",
  "florianopolis-15-0336e9ba2d99.jpeg",
  "florianopolis-16-f7a4b070b9c0.jpeg",
  "florianopolis-17-246d07cc6387.jpeg",
  "florianopolis-18-be76a349f833.jpeg",
  "florianopolis-19-b23d5ce5ac06.jpeg",
  "florianopolis-20-0826302dcffb.jpeg",
] as const;

export const FLORIANOPOLIS_EXTENDED: ColivingExtendedContent = {
  heroStats: ["3 homes · 9 private & 3 shared rooms", "Barra da Lagoa · Ilha da Magia"],
  seasonLine: "Typical season 1 March – 20 December — confirm open dates for each house.",
  amenityPills: [
    "Fibre Wi‑Fi",
    "Desk in every room",
    "Community events",
    "Garden workspaces",
    "Pools and nature access",
    "Weekly cleaning",
  ],
  gallery: colivingImgs(SLUG, LABEL, FILES),
  workspaceImages: [
    { src: `/coliving/${SLUG}/florianopolis-06-8db25f84eabb.jpeg`, alt: "Cle’s home — long tables and garden light" },
    { src: `/coliving/${SLUG}/florianopolis-07-13e1c4c24829.jpeg`, alt: "Patricia’s — cosy cowork corner" },
    { src: `/coliving/${SLUG}/florianopolis-08-1498485b9ffe.jpeg`, alt: "Workspace nook in Floripa coliving" },
  ],
  homes: {
    label: "Homes · Coliving Florianópolis",
    title: "Three homes, one island rhythm",
    intro:
      "Cle, Patricia, and Rebecca split the community across Barra da Lagoa: solar-powered calm, pet-friendly rooftops, and a studio hub five minutes from Cle’s workspace. You pick the vibe; the manager keeps everyone orbiting the same dinners and surf checks.",
    blocks: [
      {
        name: "Cle’s home",
        subtitle: "Eco-minded nomads",
        bullets: [
          "4 private rooms around garden, pool, and fire pit",
          "Solar power story plus art room that doubles as quiet office",
          "Long sunlit tables indoors and out",
        ],
      },
      {
        name: "Patricia’s home",
        subtitle: "Social travellers",
        bullets: [
          "2 private rooms · 3 shared rooms — pets welcome",
          "Rooftop golden hour, laundry, A/C, fireplace nights",
          "Garden hangouts with dogs Sorriso and Guará",
        ],
      },
      {
        name: "Rebecca’s home",
        subtitle: "Studio seekers",
        bullets: [
          "1 studio · 2 private rooms near the village centre",
          "Full access to Cle’s workspace five minutes away",
          "Garden hammocks for reading between calls",
        ],
      },
    ],
  },
  workspace: {
    label: "Workspace · Coliving Florianópolis",
    title: "From leafy nooks to cowork tables",
    paragraphs: [
      "Fibre, natural light, and desks in every bedroom keep async teams happy. Patricia’s house hides small cowork zones; Cle’s adds communal tables and an art-room office. Rebecca’s guests commute on foot to Cle’s space for deep-focus days.",
      "Island humidity meets ocean breeze — plan calls before the afternoon heat if you skip A/C.",
    ],
    highlights: [
      { title: "Night out", subtitle: "Samba, drinks, and local friends" },
      { title: "Joaquina beach", subtitle: "Surf progression for every level" },
      { title: "Turtle releases", subtitle: "Projeto TAMAR and beach volunteering" },
    ],
    galleryCaptions: ["Cle’s workspace", "Patricia’s terrace", "Island mood"],
  },
  community: {
    label: "Community · Coliving Florianópolis",
    title: "Surfing · outdoors · joyful",
    body:
      "Floripa rewards the sun-seekers: shared breakfasts, afternoon sprints, then beach or lagoon sunsets. Managers stitch hikes, Hawaiian canoe rows, and lazy caipirinha evenings. Three houses feel like one orbit — swap dinners, borrow boards, repeat.",
  },
  destination: {
    title: "Florianópolis",
    paragraphs: [
      "Brazil’s magic island mixes Atlantic rainforest, forty-odd beaches, and a safety record that comforts first-timers.",
      "Barra da Lagoa is a fishing village between mellow Barra beach and wild Moçambique — surf schools, nomad houses, and seafood on the sand.",
      "Expect generous locals, seafood stews, and a calendar full of digital-nomad meetups.",
    ],
  },
  pricing: {
    label: "Pricing · Coliving Florianópolis",
    title: "USD · mixed room types",
    refundNote: "Partner refund window (often one month) applies — read checkout.",
    guaranteeLine: "Dynamic “from” pricing — final quote on Nomadico.",
    table: {
      columnLabels: ["Private ensuite", "Shared · 4 (female)", "Shared · 4 (mixed)", "Shared · 6"],
      rows: [
        { period: "1 week", amounts: ["from $277", "$171", "$164", "$137"] },
        { period: "2 weeks", amounts: ["from $462", "$285", "$274", "$228"] },
        { period: "1 month", amounts: ["from $770", "$475", "$456", "$380"] },
      ],
      footnote:
        "Amounts follow the partner grid (Patricia/Cle/Rebecca mix). Pick the correct house + bed on their booking flow.",
    },
  },
  locals: {
    label: "Reviews · Coliving Florianópolis",
    title: "Barra da Lagoa living",
    paragraphs: [
      "Five minutes puts you on Barra beach for lessons or Sombrero restaurant; keep walking to Moçambique for empty sand.",
      "Projeto TAMAR rescues sea turtles a short ride away — worth the detour.",
      "Canal fishermen still sell the day’s catch; Sambaqui rock art reminds you how long people have loved this bay.",
    ],
  },
  hosts: {
    title: "Your hosts on the ground",
    body:
      "Cle documents the world yet always returns for Barra’s food and kindness. Patricia opened her family home to share warmth. Rebecca stayed for the slow island cadence — together they anchor the three-house community.",
  },
  location: {
    label: "Location · Coliving Florianópolis",
    title: "Barra da Lagoa",
    bullets: [
      "Beach ~5 minutes on foot",
      "Supermarkets ~2 minutes away",
      "FLN airport ~40 minutes / ~€8–10 Uber equivalent",
      "Parking at coliving when you rent a car",
      "Nature reserves encircle the village — trails in every direction",
    ],
  },
  faq: [
    {
      question: "How do I get there?",
      answer:
        "Connect through São Paulo or Rio to Florianópolis (FLN). Uber/Bolt to Barra da Lagoa is quick; public transit works but is slow with bags.",
    },
    {
      question: "Kitchen and laundry?",
      answer: "Each house has a full kitchen; washers on site with nearby lavanderías as backup.",
    },
    {
      question: "Do I need a car?",
      answer: "Scooter or car unlocks the whole island; buses exist but rentals add freedom for surf safaris.",
    },
    {
      question: "How do booking and payment work?",
      answer: "Nomadico handles international payments; you receive onboarding packs after booking.",
    },
    {
      question: "Is it expensive?",
      answer: "Local lunch $5–8; trendy beach bars cost more. Overall Brazil’s south island beats most Western coasts.",
    },
    {
      question: "Can I take calls? Is Wi‑Fi reliable?",
      answer: "Fibre supports video calls; each room has a desk plus shared cowork corners in Cle’s and Patricia’s homes.",
    },
    {
      question: "Shops nearby?",
      answer: "Mini markets, padarias, and beach bars within blocks.",
    },
    {
      question: "What is there to do?",
      answer: "Surf Barra, hike Barra lighthouse trails, sunset drinks in Lagoa da Conceição, weekend beach hops.",
    },
    {
      question: "Is it safe?",
      answer: "Florianópolis is among Brazil’s safest hubs — still use normal travel awareness.",
    },
    {
      question: "Is there a community manager?",
      answer: "Yes — dinners, hikes, and surf missions keep the group connected.",
    },
  ],
};
