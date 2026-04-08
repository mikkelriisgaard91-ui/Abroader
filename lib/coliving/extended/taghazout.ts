import type { ColivingExtendedContent } from "./types";
import { colivingImgs } from "./gallery-helpers";

const SLUG = "taghazout";
const LABEL = "Coliving Taghazout Bay";

const FILES = [
  "taghazout-01-651883e673b1.jpeg",
  "taghazout-02-22a0ded62888.jpg",
  "taghazout-03-d448a5128262.jpeg",
  "taghazout-04-8a7c6c969673.jpeg",
  "taghazout-05-26e3e63daf67.jpeg",
  "taghazout-06-336960ab01df.jpeg",
  "taghazout-07-33d45928bdbf.jpeg",
  "taghazout-08-6fa4293a113b.jpeg",
  "taghazout-09-dbcf368965ec.jpeg",
  "taghazout-10-906a3b1ec151.jpeg",
  "taghazout-11-7faabd50e02c.jpeg",
  "taghazout-12-d90a42ff6809.jpeg",
  "taghazout-13-83b4e8dbd4c5.jpeg",
  "taghazout-14-e57d38706555.jpeg",
  "taghazout-15-2e37b379e34a.jpg",
  "taghazout-16-c96cba599b8d.jpeg",
  "taghazout-17-343d2c3f5144.jpeg",
  "taghazout-18-7c00dcc63b6c.jpg",
  "taghazout-19-b7289f19df46.jpeg",
  "taghazout-20-0a81a658079f.jpeg",
  "taghazout-21-b6f9840a3f60.jpeg",
] as const;

export const TAGHAZOUT_EXTENDED: ColivingExtendedContent = {
  heroStats: ["3 homes · 15 private & 2 shared rooms", "Tamraght · year-round"],
  amenityPills: [
    "Fibre Wi‑Fi",
    "Desk in every room",
    "Community events",
    "Rooftop coworking",
    "Community manager",
    "Weekly cleaning",
  ],
  gallery: colivingImgs(SLUG, LABEL, FILES),
  workspaceImages: [
    { src: `/coliving/${SLUG}/taghazout-07-33d45928bdbf.jpeg`, alt: "Rooftop coworking with ocean air — Abdel Yan" },
    { src: `/coliving/${SLUG}/taghazout-08-6fa4293a113b.jpeg`, alt: "Workspace and views over Tamraght" },
    { src: `/coliving/${SLUG}/taghazout-09-dbcf368965ec.jpeg`, alt: "Louise’s home — bright work corner" },
  ],
  homes: {
    label: "Homes · Coliving Taghazout Bay",
    title: "Three houses, one community",
    intro:
      "Sunset surfs, shared dinners, and weekly events tie the homes together. A community manager keeps the social battery charged while guests co-create movie nights, cleanups, and weekend road trips.",
    blocks: [
      {
        name: "Abdel Yan",
        subtitle: "Nomads",
        bullets: [
          "Authentic Moroccan build with rooftop cowork and 360° sea-and-mountain views",
          "6 private rooms · 1 shared room",
          "Shared kitchen, lounge, laundry, rooftop chill zones",
        ],
      },
      {
        name: "Louise’s home",
        subtitle: "Nomads",
        bullets: [
          "Design-led house with colour, rooftop hangouts, and a warm communal feel",
          "5 private rooms · 1 shared room",
          "Kitchen, lounge, and creative corners for cowork marathons",
        ],
      },
      {
        name: "Abdel Sin",
        subtitle: "Nomads",
        bullets: [
          "Newer home a minute from Abdel Yan — same bay, same breeze",
          "3 private rooms · 2 studios",
          "Kitchen and rooftop for work or sunset hangs",
        ],
      },
    ],
  },
  workspace: {
    label: "Workspace · Coliving Taghazout Bay",
    title: "Rooftop coworking with ocean light",
    paragraphs: [
      "Fibre runs through each house; private desks handle calls, while rooftops give you daylight and sea breeze. Abdel’s rooftops are roughly a minute apart — hop between them when you need fresh perspective.",
      "Louise’s place adds big kitchen tables upstairs and a window-side table downstairs; guests freely mix between homes for variety.",
    ],
    highlights: [
      { title: "Wave prep", subtitle: "Surf school and board help from local partners" },
      { title: "Beach cleanup", subtitle: "Give back with neighbours and guests" },
      { title: "Desert play", subtitle: "Sandboarding and crew trips between work blocks" },
    ],
    galleryCaptions: ["Louise’s workspace level", "Abdel Yan rooftop", "Community focus"],
  },
  community: {
    label: "Community · Coliving Taghazout Bay",
    title: "Surf · culture · chill life",
    body:
      "Mornings are for swell checks, middays for laptops, nights for tagines and cards on the roof. Managers and guests co-design the week — think Paradise Valley runs, skate-park sunsets, or quiet tea after a long call. Tamraght keeps things human-scale; friendships form fast.",
  },
  destination: {
    title: "Taghazout Bay",
    paragraphs: [
      "Twenty kilometres north of Agadir, Taghazout Bay blends year-round sun, long beaches, and Amazigh hospitality. Fishing-village roots meet surf schools and nomad-friendly cafés.",
      "Nomadico’s base is Tamraght — quieter than central Taghazout, with specialty coffee, yoga, and waves a walk away.",
      "Agadir airport is under an hour; Marrakech bus links exist for overland arrivals.",
    ],
  },
  pricing: {
    label: "Pricing · Coliving Taghazout Bay",
    title: "Stretch longer stays",
    refundNote: "Full refund up to one month before check-in is commonly offered — verify on the partner checkout.",
    guaranteeLine: "Best-price promises and bundle rules live on Nomadico’s site.",
    table: {
      columnLabels: ["Private ensuite", "Private · shared bath", "Shared room"],
      rows: [
        { period: "1 week", amounts: ["€310", "€270", "€180"] },
        { period: "2 weeks", amounts: ["€510", "€445", "€295"] },
        { period: "1 month", amounts: ["€850", "€770", "€490"] },
      ],
      footnote: "EUR · illustrative room mapping — match exact home and room type on the partner site.",
    },
  },
  locals: {
    label: "Reviews · Coliving Taghazout Bay",
    title: "Notes from Tamraght",
    paragraphs: [
      "Tamraght feels like a Berber village first, resort second — informal addresses, corner shops, and cafés you learn by heart.",
      "You are minutes from both mountain trails and beach breaks; Nomadico sits centrally so neither feels far.",
      "Coffee nerds migrate to the roasteries named on the partner page; Tuesday market adds colour (and snacks) to the week.",
    ],
  },
  hosts: {
    title: "Your hosts on the ground",
    body:
      "Abdel’s family has deep roots next door and runs Surfskate for gear and lessons. Louise, Amanda, and Cami brought Danish design energy to a second home — together they keep the community surf-stoked and well fed.",
  },
  location: {
    label: "Location · Coliving Taghazout Bay",
    title: "Tamraght",
    bullets: [
      "Three linked homes in the village centre",
      "Cafés and tagine spots within a few minutes’ walk",
      "Beach and beginner-friendly waves ~10 minutes on foot",
      "~20 minute seaside ride to Taghazout village",
      "Agadir airport ~50 minutes by taxi",
    ],
  },
  faq: [
    {
      question: "How do I get there?",
      answer:
        "Agadir airport taxis run ~€30 day / €35 night. Budget buses exist with transfers. From Marrakech, direct shuttles (~€25) take 3.5–4 hours with big scenery.",
    },
    {
      question: "Kitchen and laundry?",
      answer: "Fully equipped shared kitchens. Laundry service sits near the house; Abdel’s building can help if you would rather surf than fold.",
    },
    {
      question: "Do I need a car?",
      answer: "Walking plus taxis covers daily life; scooters or cars unlock Agadir and secret beaches. Partners share rental contacts.",
    },
    {
      question: "How do booking and payment work?",
      answer: "Book on the partner site with flexible payment rails; guides arrive after confirmation.",
    },
    {
      question: "Is it expensive?",
      answer: "Local tagines and couscous stay cheap; third-wave cafés and beach clubs cost more. Long-stay coliving rates help balance the month.",
    },
    {
      question: "Can I take calls? Is Wi‑Fi reliable?",
      answer:
        "Fibre supports video calls. Rooftop cowork at Abdel’s is the sunny default; Louise’s tables are quieter alternatives. Every private room has a desk.",
    },
    {
      question: "Shops nearby?",
      answer: "Mini markets, fruit stalls, and surf shops are steps away; Tuesday souk is the weekly highlight.",
    },
    {
      question: "What is there to do?",
      answer:
        "Surf, yoga, Paradise Valley, Essaouira or Imsouane road trips, or low-key beach time with mint tea.",
    },
    {
      question: "Is it safe?",
      answer: "Tamraght and Taghazout are relaxed; use normal awareness with valuables, especially on busy beaches.",
    },
    {
      question: "Is there a community manager?",
      answer: "Yes — surf meetups, dinners, and weekend missions are their bread and butter.",
    },
  ],
};
