"use client";

import Image from "next/image";
import { useState } from "react";

const CAREER_SUPPORT_CONSULTATION_URL =
  "https://abroader-1746694588.teamtailor.com/jobs/7595440-career-support/faa16629-7e11-495c-ae0d-1ac980fc7f61";

// ─── Icon ────────────────────────────────────────────────────────────────────

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const trustPills = [
  "Advisors in 12+ countries",
  "Most clients interview within 6 weeks",
  "Free first consultation",
];

const forCards = [
  {
    title: "Don't know where to start",
    body: "You're keen to move but haven't figured out which countries, roles, or industries suit your background. We help you map it out before you spend time applying.",
  },
  {
    title: "CV needs a rethink",
    body: "Your CV was built for your home market. International recruiters read things differently — structure, length, and how you describe experience all need adjusting.",
  },
  {
    title: "Nervous about interviews",
    body: "Cross-border interviews have extra layers: explaining why you're moving, handling salary in a new currency, and how you come across over video. We get you ready.",
  },
];

const steps = [
  {
    n: "01",
    title: "Find your direction",
    body: "We work out which markets, roles, and companies match your background, language skills, and goals — so you have a focused shortlist, not an open-ended search.",
    subs: null,
  },
  {
    n: "02",
    title: "CV optimisation",
    body: "Concrete edits on structure, wording, and layout so your CV lands with international hiring managers and gets you into real conversations.",
    subs: null,
  },
  {
    n: "03",
    title: "Interview skills",
    body: "Practise answers, delivery, and storytelling — with a focus on the questions that come up specifically in cross-border hiring.",
    subs: null,
  },
  {
    n: "04",
    title: "Building your network",
    body: "Most roles abroad are filled through connections, not job boards. We show you how to build yours from scratch.",
    subs: [
      "Warm introductions — we connect you with people already working in your target market or company",
      "LinkedIn outreach templates — ready-to-send messages written to get replies without feeling cold or spammy",
      "Communities and events — a shortlist of the groups, meetups, and forums where the right people spend their time",
    ],
  },
];

const testimonials = [
  {
    initials: "SP",
    name: "Sara P.",
    journey: "UK → Netherlands",
    quote:
      "I'd been applying for months with no replies. After one CV session my response rate changed completely — three interviews lined up within a fortnight.",
  },
  {
    initials: "TO",
    name: "Tomás O.",
    journey: "Ireland → Germany",
    quote:
      "The mock interviews were genuinely tough, which made the real ones feel manageable. I had an offer after my second interview — couldn't have done it without the prep.",
  },
  {
    initials: "AK",
    name: "Amara K.",
    journey: "France → Singapore",
    quote:
      "I didn't know a single person in Singapore. Six weeks later I had coffee chats, warm leads, and found my role through one of the communities they recommended.",
  },
];

const stats = [
  { value: "6 weeks", label: "avg. to first interview" },
  { value: "12+", label: "countries covered" },
  { value: "84%", label: "land a role within 3 months" },
];

type PkgColor = "teal" | "purple" | "amber" | "coral";

const packages: {
  name: string;
  price: string | null;
  color: PkgColor;
  popular: boolean;
  tagline: string;
  saveBadge?: string;
  features: string[];
}[] = [
  {
    name: "Free consultation",
    price: null,
    color: "teal",
    popular: false,
    tagline: "Not sure where to start? Talk it through first.",
    features: [
      "30-minute 1:1 video call with an advisor",
      "Honest read on your situation and what's realistic",
      "Clear next steps — no pressure, no commitment",
    ],
  },
  {
    name: "CV optimisation",
    price: "£79",
    color: "purple",
    popular: false,
    tagline: "Get your CV working for international hiring managers.",
    features: [
      "Full CV review with detailed written feedback",
      "Concrete rewrites for structure, wording, and length",
      "One follow-up session to review your revised version",
      "2 weeks email Q&A with your CV advisor",
    ],
  },
  {
    name: "Interview support",
    price: "£79",
    color: "coral",
    popular: false,
    tagline: "Walk into your next interview ready for the tough questions.",
    features: [
      "2 mock interview sessions over video call",
      "Written feedback after each session",
      "Cross-border prep: explaining your move, salary, and video presence",
      "Answer frameworks for questions common in international hiring",
    ],
  },
  {
    name: "Job search",
    price: "£99",
    color: "teal",
    popular: false,
    tagline: "Find the right roles — without trawling job boards yourself.",
    features: [
      "Research across job boards for your profile and targets",
      "Curated shortlist of roles and employers worth your time",
      "Per-employer strategy: channels, timing, and messaging",
      "Shared application tracker so nothing slips",
    ],
  },
  {
    name: "Full programme",
    price: "£199",
    color: "amber",
    popular: true,
    tagline: "CV, interviews, and job search — handled together.",
    saveBadge: "Save £58",
    features: [
      "Everything in CV optimisation, Interview support, and Job search",
      "LinkedIn profile review and optimisation",
      "Network strategy session with your lead advisor",
      "6 weeks email Q&A",
    ],
  },
];

type TeamColor = "teal" | "purple" | "amber";

const team: {
  initials: string;
  name: string;
  journey: string;
  specialism: string;
  tag: string;
  tagColor: TeamColor;
}[] = [
  {
    initials: "JM",
    name: "James M.",
    journey: "UK → Netherlands → Singapore",
    specialism: "Career strategy and job search planning for first-time movers. Focuses on identifying realistic targets quickly.",
    tag: "Job search",
    tagColor: "teal",
  },
  {
    initials: "LV",
    name: "Laura V.",
    journey: "Spain → Germany → Canada",
    specialism: "CV writing and positioning for international markets across Europe and North America.",
    tag: "CV optimisation",
    tagColor: "purple",
  },
  {
    initials: "DA",
    name: "David A.",
    journey: "Nigeria → UK → UAE",
    specialism: "Interview coaching and confidence-building for cross-border hiring, including video and async formats.",
    tag: "Interview support",
    tagColor: "amber",
  },
];

const faqs = [
  {
    q: "Which destinations do you cover?",
    a: "We currently have advisors with direct experience in 12+ countries across Europe, Asia, and the Middle East. If your target country isn't one we know well, we'll tell you honestly rather than guessing.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients have their first interview within six weeks of starting. Timelines vary depending on your target market, the state of your CV when we begin, and how much time you can put in each week.",
  },
  {
    q: "Will I work with one advisor or a team?",
    a: "You'll have one lead advisor throughout — someone who knows your situation and keeps the thread. For specialist areas like CV writing or interview coaching, your lead may bring in a colleague with specific expertise.",
  },
  {
    q: "What if I don't get any interviews?",
    a: "If you've completed the Full programme and haven't had a single interview, we'll give you an additional month of support at no charge. We'd rather fix the problem than leave you stuck.",
  },
  {
    q: "Do I need to have decided to move before booking?",
    a: "No. Some clients come to us still weighing up whether a move makes sense. The free consultation is a good place to think it through — we won't push you toward a decision, and there's no obligation to continue.",
  },
  {
    q: "Is support via video call or async?",
    a: "Both. Live sessions happen over video call (Zoom or Google Meet). Between sessions you can reach your advisor by email or, on the Full programme, for 6 weeks. We don't do phone-only calls — video gives us much more to work with.",
  },
];

// ─── Color maps ───────────────────────────────────────────────────────────────

const pkgColorMap: Record<
  PkgColor,
  { dot: string; label: string; badge: string; accentBorder: string; btn: string }
> = {
  teal: {
    dot: "bg-[#246374]",
    label: "text-[#246374]",
    badge: "bg-[#8ed2e1]/20 text-[#246374] border border-[#8ed2e1]",
    accentBorder: "border-[#246374]",
    btn: "bg-[#246374] hover:bg-[#1a4d5c] text-white",
  },
  purple: {
    dot: "bg-violet-600",
    label: "text-violet-700",
    badge: "bg-violet-50 text-violet-700 border border-violet-200",
    accentBorder: "border-violet-600",
    btn: "bg-violet-600 hover:bg-violet-700 text-white",
  },
  amber: {
    dot: "bg-[#fcba36]",
    label: "text-[#b8820a]",
    badge: "bg-[#fcba36]/15 text-[#8a5e00] border border-[#fcba36]",
    accentBorder: "border-[#fcba36]",
    btn: "bg-[#fcba36] hover:bg-[#f0aa20] text-[#2a1f0a]",
  },
  coral: {
    dot: "bg-rose-500",
    label: "text-rose-600",
    badge: "bg-rose-50 text-rose-700 border border-rose-200",
    accentBorder: "border-rose-500",
    btn: "bg-rose-500 hover:bg-rose-600 text-white",
  },
};

const teamTagMap: Record<TeamColor, string> = {
  teal: "bg-[#8ed2e1]/25 text-[#246374]",
  purple: "bg-violet-50 text-violet-700",
  amber: "bg-[#fcba36]/20 text-[#7a5200]",
};

// ─── FAQ item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#246374]/15">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-6 font-semibold text-[#1a3339]" style={{ fontFamily: "var(--font-cs-heading, Poppins, sans-serif)" }}>
          {q}
        </span>
        <ChevronDownIcon
          className={`shrink-0 text-[#246374]/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 leading-relaxed text-[#2d4a52]/80" style={{ fontFamily: "var(--font-cs-body, Inter, sans-serif)" }}>
          {a}
        </p>
      )}
    </div>
  );
}

// ─── Smooth scroll ────────────────────────────────────────────────────────────

function scrollToPackages(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
}

// ─── Shared style helpers ─────────────────────────────────────────────────────

const headingStyle = { fontFamily: "var(--font-cs-heading, Poppins, sans-serif)" };
const bodyStyle = { fontFamily: "var(--font-cs-body, Inter, sans-serif)" };

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CareerSupportContent() {
  return (
    <main className="w-full bg-[#fafafa] antialiased" style={bodyStyle}>
      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/guide-cities/germany/berlin.jpg"
          alt="Berlin city skyline at night — representing your career move abroad"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d2e37]/80" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8ed2e1]/10 via-transparent to-[#0d2e37]/40" aria-hidden />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 pb-20 pt-20 text-center md:pb-28 md:pt-28">
          <h1
            className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
            style={headingStyle}
          >
            Your first move abroad starts with the right job
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#8ed2e1]/90">
            One-to-one support from advisors who have done it themselves — covering job search, CV optimisation, and interview prep so you can move with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#8ed2e1]/30 bg-[#8ed2e1]/10 px-4 py-1.5 text-sm font-medium text-[#8ed2e1] backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={CAREER_SUPPORT_CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#fcba36] px-7 py-3 text-base font-semibold text-[#2a1f0a] transition-colors hover:bg-[#f0aa20]"
              style={headingStyle}
            >
              Book a free consultation
            </a>
            <a
              href="#packages"
              onClick={scrollToPackages}
              className="rounded-lg border border-white/30 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              See packages
            </a>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="border-b border-[#246374]/10 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            Who this is for
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {forCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#246374]/12 bg-[#fafafa] p-6"
              >
                <h3
                  className="text-base font-semibold text-[#246374]"
                  style={headingStyle}
                >
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#2d4a52]/75">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 text-sm text-[#246374]/50">
            This service isn&apos;t the right fit for senior executives or people who haven&apos;t yet decided whether they want to move.
          </p>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="border-b border-[#246374]/10 bg-[#fafafa] px-5 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            What we do
          </h2>
          <div className="mt-10 space-y-10">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-6">
                <span
                  className="mt-0.5 w-8 shrink-0 text-lg font-bold text-[#fcba36]"
                  style={headingStyle}
                >
                  {step.n}
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold text-[#1a3339]"
                    style={headingStyle}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#2d4a52]/75">{step.body}</p>
                  {step.subs && (
                    <ul className="mt-4 space-y-2">
                      {step.subs.map((sub) => (
                        <li key={sub} className="flex items-start gap-2.5 text-sm text-[#2d4a52]/75">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ed2e1]"
                            aria-hidden
                          />
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
      </section>

      {/* ── Testimonials ── */}
      <section className="border-b border-[#246374]/10 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            What clients say
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-xl border border-[#246374]/12 bg-[#fafafa] p-6"
              >
                <p className="leading-relaxed text-[#2d4a52]/80">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#246374] text-xs font-semibold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a3339]">{t.name}</p>
                    <p className="text-xs text-[#246374]/50">{t.journey}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 rounded-xl bg-[#246374] p-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-[#fcba36]" style={headingStyle}>
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-[#8ed2e1]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section
        id="packages"
        className="border-b border-[#246374]/10 bg-[#fafafa] px-5 py-14 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            Packages
          </h2>
          <p className="mt-2 text-[#2d4a52]/65">
            Pick the area you need help with, or take all three together and save.
          </p>

          {/* Free consultation — shown above the paid grid */}
          <div className="mt-8">
            {(() => {
              const free = packages[0];
              const c = pkgColorMap[free.color];
              return (
                <div className="flex flex-col gap-4 rounded-xl border border-[#246374]/12 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-[#1a3339]" style={headingStyle}>
                        {free.name}
                      </h3>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.badge}`}>
                        Free
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[#2d4a52]/65 italic">{free.tagline}</p>
                    <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                      {free.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[#2d4a52]/75">
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={CAREER_SUPPORT_CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`shrink-0 rounded-lg px-6 py-2.5 text-center text-sm font-semibold transition-colors ${c.btn}`}
                    style={headingStyle}
                  >
                    Book free call
                  </a>
                </div>
              );
            })()}
          </div>

          {/* Paid packages grid */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.slice(1).map((pkg) => {
              const c = pkgColorMap[pkg.color];
              return (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-xl bg-white p-6 ${
                    pkg.popular
                      ? `border-2 ${c.accentBorder}`
                      : "border border-[#246374]/12"
                  }`}
                >
                  {pkg.popular && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-0.5 text-xs font-semibold ${c.badge}`}
                      style={headingStyle}
                    >
                      Most popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-[#1a3339]" style={headingStyle}>
                      {pkg.name}
                    </h3>
                    <div className="mt-1 flex items-baseline gap-2">
                      <p className={`text-2xl font-bold ${c.label}`} style={headingStyle}>
                        {pkg.price}
                      </p>
                      {pkg.saveBadge && (
                        <span className="text-xs font-medium text-emerald-600">
                          {pkg.saveBadge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#2d4a52]/60 italic">
                      {pkg.tagline}
                    </p>
                  </div>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#2d4a52]/80">
                        <span
                          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${c.dot}`}
                          aria-hidden
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CAREER_SUPPORT_CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${c.btn}`}
                    style={headingStyle}
                  >
                    Get started
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The team ── */}
      <section className="border-b border-[#246374]/10 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            The team
          </h2>
          <p className="mt-2 text-[#2d4a52]/65">
            Everyone on our team has made at least one international move themselves.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-[#246374]/12 bg-[#fafafa] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#246374] text-sm font-semibold text-white">
                    {member.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a3339]" style={headingStyle}>
                      {member.name}
                    </p>
                    <p className="text-xs text-[#246374]/50">{member.journey}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#2d4a52]/70">
                  {member.specialism}
                </p>
                <span
                  className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${teamTagMap[member.tagColor]}`}
                >
                  {member.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-b border-[#246374]/10 bg-[#fafafa] px-5 py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1a3339] md:text-3xl" style={headingStyle}>
            Common questions
          </h2>
          <div className="mt-8">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="bg-[#246374] px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-xl">
          <h2
            className="text-2xl font-bold text-white md:text-3xl"
            style={headingStyle}
          >
            Start with a free conversation
          </h2>
          <p className="mt-3 text-[#8ed2e1]">
            No commitment, no hard sell — just a straight talk about what you&apos;re working toward and whether we can help.
          </p>
          <a
            href={CAREER_SUPPORT_CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-[#fcba36] px-8 py-3 text-base font-semibold text-[#2a1f0a] transition-colors hover:bg-[#f0aa20]"
            style={headingStyle}
          >
            Book free call
          </a>
        </div>
      </section>

    </main>
  );
}
