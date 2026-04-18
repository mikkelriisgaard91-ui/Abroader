"use client";

import Image from "next/image";
import { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";

const headingStyle = { fontFamily: "var(--font-travel-heading, Poppins, sans-serif)" };
const bodyStyle = { fontFamily: "var(--font-travel-body, Inter, sans-serif)" };

/** Curated Unsplash — allowed via next.config remotePatterns */
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2400&q=80",
  tripCity:
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=80",
  tripRoute:
    "https://images.unsplash.com/photo-1524850011238-e3d235fc7d79?auto=format&fit=crop&w=900&q=80",
  tripSlow:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
  stepsSide:
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
  testimonialsBg:
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80",
  teamBanner:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80",
} as const;

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 7.5l5 5 5-5" />
    </svg>
  );
}

function IconShortTrip({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20h16M6 16l4-8 4 5 4-9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 8h.01M14 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconMultiStop({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 16.5l3-6M13.5 9.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconLongTrip({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18M8 4v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const trustPills = [
  "Short trips to long-haul adventures",
  "Flights, stays, and activities sorted",
  "Free first consultation",
];

const travelQuotes = [
  {
    quote: "Not all those who wander are lost.",
    attribution: "J.R.R. Tolkien",
  },
  {
    quote: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
    attribution: "Mark Twain",
  },
  {
    quote: "We travel, some of us forever, to seek other states, other lives, other souls.",
    attribution: "Anaïs Nin",
  },
];

const tripTypes: {
  icon: typeof IconShortTrip;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}[] = [
  {
    icon: IconShortTrip,
    title: "Short trips",
    description: "City breaks and weekenders with a tight plan and zero guesswork.",
    tags: ["2–5 days", "Urban focus"],
    image: IMAGES.tripCity,
    imageAlt: "City skyline at dusk, lights across buildings",
  },
  {
    icon: IconMultiStop,
    title: "Multi-destination",
    description: "Route planning and pacing so multi-stop trips feel doable, not frantic.",
    tags: ["Connections", "Timing"],
    image: IMAGES.tripRoute,
    imageAlt: "Coastal road winding along the sea",
  },
  {
    icon: IconLongTrip,
    title: "Long trips",
    description: "Slow travel and sabbaticals with structure that still leaves room to wander.",
    tags: ["Weeks to months", "Flex built in"],
    image: IMAGES.tripSlow,
    imageAlt: "Mountain range above clouds at sunrise",
  },
];

const steps: {
  n: string;
  title: string;
  body: string;
  subs: string[] | null;
}[] = [
  {
    n: "1",
    title: "Your idea turned into a plan",
    body: "We take what you already know — dates, a region, a mood — and shape it into a clear route, pace, and set of priorities you can actually follow.",
    subs: null,
  },
  {
    n: "2",
    title: "Budget planning",
    body: "A realistic split across transport, stays, food, and experiences, with buffer for the surprises that always show up on the road.",
    subs: null,
  },
  {
    n: "3",
    title: "Flights",
    body: "We advise on options and trade-offs; you choose where to book when you are ready.",
    subs: [
      "When to book for your route and season",
      "Layover routing that avoids painful connections",
      "Flexible date options when your plans might shift",
    ],
  },
  {
    n: "4",
    title: "Accommodation",
    body: "Recommendations that match how you like to travel — not a generic hotel list.",
    subs: [
      "Types covered from hostels to apartments and boutique stays",
      "Location advice so you are near what you care about",
      "When to book ahead versus staying flexible",
    ],
  },
  {
    n: "5",
    title: "Activities & experiences",
    body: "Curated ideas for what to do when you are there — mix of must-sees and quieter local picks — so you are not scrolling reviews the night before.",
    subs: null,
  },
];

const testimonials = [
  {
    initials: "RK",
    name: "Rosa K.",
    trip: "Long weekend in Lisbon",
    quote:
      "We had three days and wanted food, tiles, and no rushing. The day-by-day flow was spot on — we saw plenty and still had time for coffee in Alfama.",
  },
  {
    initials: "JD",
    name: "James D.",
    trip: "Three months in Southeast Asia",
    quote:
      "I was overwhelmed by how many stops to include. They helped me slow down, reorder the route, and give each place a fair shot. Best money I spent before leaving.",
  },
  {
    initials: "MP",
    name: "Maya P.",
    trip: "Japan on a mid-range budget",
    quote:
      "The flight timing and airport choices alone saved me a headache and a chunk of cash. The rest of the plan felt like I had a friend who had already done the trip.",
  },
];

const stats = ["50+ countries planned", "£380 avg. saved on flights", "4.9 average client rating"];

type PkgColor = "teal" | "purple" | "amber" | "coral";

const packages: {
  name: string;
  price: string | null;
  color: PkgColor;
  popular: boolean;
  features: string[];
}[] = [
  {
    name: "Free planning call",
    price: null,
    color: "teal",
    popular: false,
    features: [
      "30-minute video call",
      "Clarify your trip style and constraints",
      "High-level direction and honest fit check",
      "No obligation to continue",
    ],
  },
  {
    name: "Essentials",
    price: "£49",
    color: "purple",
    popular: false,
    features: [
      "One destination or short loop",
      "Written itinerary outline with daily themes",
      "Budget snapshot and booking checklist",
      "Email follow-up for two weeks",
    ],
  },
  {
    name: "Complete",
    price: "£99",
    color: "amber",
    popular: true,
    features: [
      "Everything in Essentials",
      "Detailed day plan with alternatives",
      "Flight and stay shortlists with rationale",
      "Activity ideas matched to your pace",
      "Email support for four weeks",
    ],
  },
  {
    name: "Long trip",
    price: "£179",
    color: "coral",
    popular: false,
    features: [
      "Multi-week or multi-month routes",
      "Pacing, rest stops, and seasonality",
      "Deeper budget modelling and contingencies",
      "Check-in structure while you are away",
      "Priority email support for eight weeks",
    ],
  },
];

const pkgColorMap: Record<
  PkgColor,
  { dot: string; label: string; badge: string; btn: string }
> = {
  teal: {
    dot: "bg-[#246374]",
    label: "text-[#246374]",
    badge: "bg-[#8ed2e1]/20 text-[#246374] border-[0.5px] border-[#8ed2e1]",
    btn: "bg-[#246374] hover:bg-[#1a4d5c] text-white",
  },
  purple: {
    dot: "bg-violet-600",
    label: "text-violet-700",
    badge: "bg-violet-50 text-violet-700 border-[0.5px] border-violet-200",
    btn: "bg-violet-600 hover:bg-violet-700 text-white",
  },
  amber: {
    dot: "bg-[#fcba36]",
    label: "text-[#b8820a]",
    badge: "bg-[#fcba36]/15 text-[#8a5e00] border-[0.5px] border-[#fcba36]",
    btn: "bg-[#fcba36] hover:bg-[#f0aa20] text-[#2a1f0a]",
  },
  coral: {
    dot: "bg-rose-500",
    label: "text-rose-600",
    badge: "bg-rose-50 text-rose-700 border-[0.5px] border-rose-200",
    btn: "bg-rose-500 hover:bg-rose-600 text-white",
  },
};

type TeamColor = "teal" | "purple" | "amber";

const team: {
  initials: string;
  name: string;
  experience: string;
  specialism: string;
  tag: string;
  tagColor: TeamColor;
}[] = [
  {
    initials: "EL",
    name: "Elena L.",
    experience: "40+ countries",
    specialism: "Europe and Mediterranean loops, train-heavy routes, and food-led city breaks.",
    tag: "Short & multi-stop",
    tagColor: "teal",
  },
  {
    initials: "CN",
    name: "Chris N.",
    experience: "35+ countries",
    specialism: "Long-haul planning, awkward connections, and getting more from a mid-range budget.",
    tag: "Flights & value",
    tagColor: "purple",
  },
  {
    initials: "SA",
    name: "Sam A.",
    experience: "28+ countries",
    specialism: "Slow travel and sabbaticals — pacing, visas as a topic to research, and staying sane on the road.",
    tag: "Long trips",
    tagColor: "amber",
  },
];

const teamTagMap: Record<TeamColor, string> = {
  teal: "bg-[#8ed2e1]/25 text-[#246374]",
  purple: "bg-violet-50 text-violet-700",
  amber: "bg-[#fcba36]/20 text-[#7a5200]",
};

const faqs = [
  {
    q: "Do you book flights and hotels for us?",
    a: "No — we are a planning and advice service, not a booking agent. We recommend options, explain trade-offs, and give you clear next steps. You hold the bookings so you keep full control of payments and changes.",
  },
  {
    q: "What if I only have a vague idea?",
    a: "That is normal. The free call is there to turn a rough thought into something workable — dates, region, budget ballpark, and what a good trip would feel like. We only suggest paid plans if it genuinely makes sense.",
  },
  {
    q: "How far in advance should I plan?",
    a: "Short breaks often come together in a few weeks. Longer routes benefit from more lead time for better fares and stay choice — especially in peak season. We will tell you what is worth locking early versus leaving open.",
  },
  {
    q: "Can you help if I am travelling solo?",
    a: "Yes. Solo trips often need extra thought on safety, social energy, and logistics. We factor that into pacing, where you stay, and how packed each day should be.",
  },
  {
    q: "Do you cover visa and travel insurance advice?",
    a: "We can point you toward what to check based on your nationality and route, and flag common pitfalls. Final decisions on visas and policies stay with you and official sources — we are not immigration or insurance advisers.",
  },
  {
    q: "What is included in the itinerary document?",
    a: "A clear written plan: route overview, day-by-day structure, stay and transport notes, activity ideas, and practical reminders. Exact depth depends on the package — Complete and long trip include more detail and alternatives.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[0.5px] border-[#246374]/15">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-6 font-semibold text-[#1a3339]" style={headingStyle}>
          {q}
        </span>
        <ChevronDownIcon
          className={`shrink-0 text-[#246374]/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 leading-relaxed text-[#2d4a52]/80" style={bodyStyle}>
          {a}
        </p>
      )}
    </div>
  );
}

function scrollToPackages(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
}

export default function TravelContent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="w-full bg-[#fafafa] antialiased text-[#2d4a52]" style={bodyStyle}>
      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} context="travel" />
      {/* Hero */}
      <section className="relative w-full min-h-[520px] overflow-hidden md:min-h-[580px]">
        <Image
          src={IMAGES.hero}
          alt="Travel essentials flat lay: map, camera, and notebook"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d2e37]/82" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8ed2e1]/12 via-transparent to-[#0d2e37]/50" aria-hidden />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 pb-20 pt-16 text-center md:pb-28 md:pt-24">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#fcba36]/35 bg-[#fcba36]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#fcba36]"
            style={headingStyle}
          >
            <span aria-hidden>✦</span>
            Abroader travel planning
          </div>
          <h1
            className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.65rem]"
            style={headingStyle}
          >
            Your trip, planned properly — from a weekend away to months on the road
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#8ed2e1]/95">
            One-to-one travel planning and advice: we help you shape the route, budget, flights, stays, and
            experiences. You book when you are ready — we do not take commissions or handle payments for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#8ed2e1]/35 bg-[#8ed2e1]/12 px-4 py-1.5 text-sm font-medium text-[#8ed2e1] backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="rounded-lg bg-[#fcba36] px-7 py-3 text-center text-base font-semibold text-[#2a1f0a] transition-colors hover:bg-[#f0aa20]"
              style={headingStyle}
            >
              Talk to a travel planner
            </button>
            <a
              href="#packages"
              onClick={scrollToPackages}
              className="rounded-lg border border-white/35 bg-white/10 px-7 py-3 text-center text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/18"
              style={headingStyle}
            >
              See packages
            </a>
          </div>
        </div>
      </section>

      {/* Trip types */}
      <section className="border-b border-[0.5px] border-[#246374]/10 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            Trip types
          </h2>
          <p className="mt-2 max-w-2xl text-[#2d4a52]/80">
            Whether you are gone for a few days or a few months, the same principle applies: a plan that fits how you
            actually travel.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tripTypes.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="group flex flex-col overflow-hidden rounded-xl border-[0.5px] border-[#246374]/12 bg-[#fafafa] shadow-none transition-colors hover:border-[#246374]/22"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0d2e37]/88 via-[#0d2e37]/25 to-transparent"
                      aria-hidden
                    />
                    <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-[#246374] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-[#1a3339]" style={headingStyle}>
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#2d4a52]/75">{card.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border-[0.5px] border-[#246374]/15 bg-[#e8f4f7]/80 px-2.5 py-0.5 text-xs font-medium text-[#246374]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel quotes */}
      <section className="border-b border-[0.5px] border-[#246374]/10 bg-[#246374] px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p
            className="text-center text-xs font-semibold tracking-wide text-[#8ed2e1]/90"
            style={headingStyle}
          >
            Words for the road
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold text-white md:text-3xl" style={headingStyle}>
            Travel quotes we love
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {travelQuotes.map((item) => (
              <blockquote
                key={item.attribution}
                className="flex flex-col rounded-xl border border-[#8ed2e1]/20 bg-[#0d2e37]/55 px-6 py-8"
              >
                <span className="text-3xl font-serif leading-none text-[#fcba36]" aria-hidden>
                  &ldquo;
                </span>
                <p className="mt-2 flex-1 text-lg leading-relaxed text-white/95">{item.quote}</p>
                <footer className="mt-4 text-sm font-medium text-[#8ed2e1]">— {item.attribution}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* What we help with */}
      <section className="border-b border-[0.5px] border-[#246374]/10 bg-[#fafafa] px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
              What we help with
            </h2>
            <p className="mt-2 text-[#2d4a52]/75">
              Planning and recommendations — you stay in control of every booking.
            </p>
            <div className="mt-10 space-y-10">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-5 md:gap-8">
                  <span
                    className="mt-0.5 w-7 shrink-0 text-lg font-bold text-[#fcba36]"
                    style={headingStyle}
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a3339]" style={headingStyle}>
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#2d4a52]/75">{step.body}</p>
                    {step.subs && (
                      <ul className="mt-4 space-y-2">
                        {step.subs.map((sub) => (
                          <li key={sub} className="flex items-start gap-2.5 text-sm text-[#2d4a52]/75">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ed2e1]" aria-hidden />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="sticky top-24 overflow-hidden rounded-xl border-[0.5px] border-[#246374]/12 shadow-none">
              <div className="relative aspect-[4/5] w-full min-h-[280px] lg:aspect-auto lg:min-h-[520px]">
                <Image
                  src={IMAGES.stepsSide}
                  alt="Open map and camera on a wooden surface, planning a journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-[#246374]/10" aria-hidden />
              </div>
              <div className="border-t border-[#246374]/10 bg-white px-5 py-4">
                <p className="text-sm font-semibold text-[#246374]" style={headingStyle}>
                  Plan with clarity
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#2d4a52]/65">
                  The same teal-and-gold Abroader palette you see across the site — built for calm, confident trips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden border-b border-[0.5px] border-[#246374]/10 bg-[#f0f4f5] px-5 py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={IMAGES.testimonialsBg}
            alt=""
            fill
            className="object-cover opacity-[0.14]"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#fafafa]/90" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            What travellers say
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-xl border-[0.5px] border-[#246374]/12 bg-white/95 p-6 backdrop-blur-sm"
              >
                <p className="leading-relaxed text-[#2d4a52]/85">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#246374] text-xs font-semibold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a3339]">{t.name}</p>
                    <p className="text-xs text-[#246374]/55">{t.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 rounded-xl border-[0.5px] border-[#246374]/12 bg-[#246374] p-8 md:grid-cols-3">
            {stats.map((s) => (
              <p
                key={s}
                className="text-center text-xl font-bold text-[#fcba36] md:text-2xl"
                style={headingStyle}
              >
                {s}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section
        id="packages"
        className="border-b border-[0.5px] border-[#246374]/10 bg-white px-5 py-14 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            Packages
          </h2>
          <p className="mt-2 max-w-2xl text-[#2d4a52]/75">
            Pick a level that matches how much detail you want. All prices are illustrative placeholders.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => {
              const c = pkgColorMap[pkg.color];
              const borderClass = pkg.popular
                ? "border-2 border-blue-600"
                : "border-[0.5px] border-[#246374]/12";
              return (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-xl bg-[#fafafa] p-6 ${borderClass}`}
                >
                  {pkg.popular && (
                    <span
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-0.5 text-xs font-semibold ${c.badge}`}
                      style={headingStyle}
                    >
                      Most popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-[#1a3339]" style={headingStyle}>
                      {pkg.name}
                    </h3>
                    {pkg.price ? (
                      <p className={`mt-1 text-2xl font-bold ${c.label}`} style={headingStyle}>
                        {pkg.price}
                      </p>
                    ) : (
                      <p className={`mt-1 text-base font-medium ${c.label}`}>Free</p>
                    )}
                  </div>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#2d4a52]/80">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${c.dot}`} aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setShowModal(true)}
                    className={`mt-6 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${c.btn}`}
                    style={headingStyle}
                  >
                    {pkg.price ? "Book now" : "Book free call"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team + banner */}
      <section className="border-b border-[0.5px] border-[#246374]/10 bg-[#fafafa]">
        <div className="relative h-48 w-full overflow-hidden md:h-56">
          <Image
            src={IMAGES.teamBanner}
            alt="View from an airplane window above clouds and coastline"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0d2e37]/55" aria-hidden />
          <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
            <p className="max-w-2xl text-lg font-medium text-white md:text-xl" style={headingStyle}>
              Every itinerary starts with curiosity — we help you turn it into a route you can trust.
            </p>
          </div>
        </div>
        <div className="px-5 py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
              The team
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-[#2d4a52]/75">
              Our team has collectively visited 80+ countries — they have been there, made the mistakes, and know what
              is worth it.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border-[0.5px] border-[#246374]/12 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#246374] text-sm font-semibold text-white">
                      {member.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a3339]" style={headingStyle}>
                        {member.name}
                      </p>
                      <p className="text-xs text-[#246374]/55">{member.experience}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#2d4a52]/70">{member.specialism}</p>
                  <span
                    className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${teamTagMap[member.tagColor]}`}
                  >
                    {member.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[0.5px] border-[#246374]/10 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            Frequently asked questions
          </h2>
          <div className="mt-8">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#246374] px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={headingStyle}>
            Got a trip in mind? Let us talk it through
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="mt-8 inline-block rounded-lg bg-[#fcba36] px-8 py-3 text-base font-semibold text-[#2a1f0a] transition-colors hover:bg-[#f0aa20]"
            style={headingStyle}
          >
            Book free call
          </button>
        </div>
      </section>
    </main>
  );
}
