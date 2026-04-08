import type { ColivingExtendedContent } from "./types";
import { colivingImgs } from "./gallery-helpers";

const SLUG = "bansko";
const LABEL = "Coliving Bansko";

const FILES = [
  "bansko-01-d212fa4281f1.jpeg",
  "bansko-02-d6cf47f12b6a.jpeg",
  "bansko-03-a3120b15051a.jpeg",
  "bansko-04-6c45f9347eb9.jpeg",
  "bansko-05-755aa6189306.jpeg",
  "bansko-06-6f42f567a794.jpeg",
  "bansko-07-c1b220c45c0a.jpeg",
  "bansko-08-b10613585bdf.jpeg",
  "bansko-09-a5250c118dc2.jpeg",
  "bansko-10-5a7167150f93.jpg",
  "bansko-11-9d6dd62c3aa0.jpeg",
  "bansko-12-5eb8a4c2bbb2.jpeg",
  "bansko-13-39bdeef02eb6.jpeg",
  "bansko-14-b7a4db2d5ab3.jpeg",
  "bansko-15-ce3123f7c424.jpeg",
] as const;

export const BANSKO_EXTENDED: ColivingExtendedContent = {
  heroStats: ["1 home · 13 private rooms", "Upper Bansko · walk to Nestwork"],
  seasonLine: "Summer focus: June and July (confirm current season windows on the partner site).",
  amenityPills: [
    "Fibre Wi‑Fi",
    "Desk in every room",
    "Community events",
    "Nestwork coworking included",
    "Community manager on site",
    "Weekly cleaning",
  ],
  gallery: colivingImgs(SLUG, LABEL, FILES),
  workspaceImages: [
    { src: `/coliving/${SLUG}/bansko-10-5a7167150f93.jpg`, alt: "Nestwork coworking — focus space near Pirin peaks" },
    { src: `/coliving/${SLUG}/bansko-11-9d6dd62c3aa0.jpeg`, alt: "Coliving Bansko — community and mountain mood" },
    { src: `/coliving/${SLUG}/bansko-12-5eb8a4c2bbb2.jpeg`, alt: "Coliving Bansko — shared life in the house" },
  ],
  homes: {
    label: "Home · Coliving Bansko",
    title: "Adriana’s home — mountain views and a chef-host",
    intro:
      "One house holds the whole community: every room looks toward the peaks, with a desk and solid Wi‑Fi. Meals come from the on-site mehana — home cooking from your host team so you spend less time planning groceries and more time hiking or coworking.",
    blocks: [
      {
        name: "Adriana’s home",
        subtitle: "Nomads and travellers",
        bullets: [
          "13 private rooms with mountain outlooks",
          "Fireplace and warm common spaces",
          "Shared kitchen plus restaurant on site",
          "Outdoor areas for coffee between calls",
          "Included access to Nestwork Coworking downhill",
          "Laundry on site (and services in town if needed)",
        ],
      },
    ],
  },
  workspace: {
    label: "Workspace · Coliving Bansko",
    title: "Peak productivity",
    paragraphs: [
      "You do not have to pick between a cosy house and a buzzing office: rooms are set up for deep work on fibre, and Nestwork Coworking is included when you want a change of scene — a short walk into town.",
      "Expect comfortable focus zones, friendly energy from other nomads, and Pirin views that make long afternoons feel lighter.",
    ],
    highlights: [
      { title: "Cowork access", subtitle: "Weekday rhythm at Nestwork, ten minutes on foot" },
      { title: "Campfire nights", subtitle: "Stories, music, and easy social time" },
      { title: "Mountain days", subtitle: "Hikes, hot springs, and Nomad Fest energy in summer" },
    ],
    galleryCaptions: ["Nestwork", "Community moments", "Life in the house"],
  },
  community: {
    label: "Community · Coliving Bansko",
    title: "Mountains · focus · adventure",
    body:
      "Bansko runs at a calm alpine pace with a strong year-round nomad crowd. Mornings might be a cold plunge or yoga, midday is cowork blocks, and evenings drift into pizza, sauna, or shared tables. The community manager helps set the beat while guests co-create hikes, festivals, and low-key nights in — always with 360° peaks outside the window.",
  },
  destination: {
    title: "Bansko",
    paragraphs: [
      "Bulgaria’s mountain hub mixes low cost of living with dramatic scenery — many remote workers stay for months because the maths and the lifestyle both work.",
      "Fast internet, a high density of cowork spaces, and easy hops toward Greece or Turkey keep Bansko on short lists for “best nomad bases” in Europe.",
      "Cold plunges, hot springs, and trailheads above town round out the picture: it is as much about recovery and nature as it is about inbox zero.",
    ],
  },
  pricing: {
    label: "Pricing · Coliving Bansko",
    title: "Longer stays, gentle rates",
    refundNote: "The partner typically refunds in full up to one month before check-in — double-check their booking terms.",
    guaranteeLine: "Community-first pricing and “best rate” rules are explained on the partner site.",
    table: {
      columnLabels: ["Suite", "Private ensuite", "Private · shared bath"],
      rows: [
        { period: "1 week", amounts: ["€315", "€292", "€265"] },
        { period: "2 weeks", amounts: ["€491", "€455", "€415"] },
        { period: "1 month", amounts: ["€746", "€695", "€638"] },
      ],
      footnote: "EUR · Adriana’s home · confirm live availability and room names when you book.",
    },
  },
  locals: {
    label: "Reviews · Coliving Bansko",
    title: "Notes from the area",
    paragraphs: [
      "The house sits in upper Bansko — roughly fifteen minutes downhill to the centre and Nestwork, along a stream with Vihren peak behind you.",
      "Breakfast spots abound; many regulars mention French-style pastries in town before a work block.",
      "Head uphill another quarter hour and you are in forest and river dips — a favourite reset before opening the laptop.",
    ],
  },
  hosts: {
    title: "Your hosts on the ground",
    body:
      "Adriana and her family treat the house as a guest home, not a hotel: expect warm welcomes, stories from Ivan, and the occasional glass of homemade rakia or juice after dinner.",
  },
  location: {
    label: "Location · Coliving Bansko",
    title: "Upper town",
    bullets: [
      "One home above the historic core",
      "About 10 minutes to the old centre on foot",
      "Shops and restaurants within walking distance",
      "Forest trails nearby for morning walks",
      "Sofia Airport ~3h by bus or transfer — partners send driver tips after booking",
    ],
  },
  faq: [
    {
      question: "How do I get there?",
      answer:
        "Most people fly to Sofia (~3 hours by bus or private transfer). Buses leave from the central station for a few euros; a pre-booked driver is the comfortable option. You receive vetted contacts after booking.",
    },
    {
      question: "Kitchen and laundry?",
      answer: "Full shared kitchen for cooking together. Laundry machines on site; drop-off services exist in town.",
    },
    {
      question: "Do I need a car?",
      answer:
        "Daily life is walkable. Rent a car or taxi for villages and trailheads; buses and trains also connect to Sofia and Plovdiv.",
    },
    {
      question: "How do booking and payment work?",
      answer:
        "Book on the partner site with card, Wise, iDEAL, Apple/Google Pay, or bank transfer. You get arrival info and local tips once confirmed.",
    },
    {
      question: "Is it expensive?",
      answer:
        "Bansko is among Europe’s budget-friendly nomad hubs — meals often €5–10 and coffee around €1.50.",
    },
    {
      question: "Can I take calls? Is Wi‑Fi reliable?",
      answer:
        "Fibre runs in the house; Nestwork is included weekdays for a separate focus zone. Every room has a desk for quiet calls.",
    },
    {
      question: "Shops nearby?",
      answer: "Groceries, bakeries, cafés, and a produce market are a short walk away.",
    },
    {
      question: "What is there to do?",
      answer:
        "Summer means hiking, biking, lakes, hot springs in Banya, cable-car views, and a busy nomad social calendar — movie nights, barbecues, and mountain outings.",
    },
    {
      question: "Is it safe?",
      answer: "Bansko is small and calm; locals are used to visitors. Walking home late still feels comfortable for most guests.",
    },
    {
      question: "Is there a community manager?",
      answer: "Yes — they live on site, welcome you in, and organise hikes and family-style dinners with the group.",
    },
  ],
};
