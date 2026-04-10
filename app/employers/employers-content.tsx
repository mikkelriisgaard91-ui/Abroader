import Image from "next/image";
import Link from "next/link";
import { GET_CONTACTED_URL } from "@/lib/employers";
import EmployersStickyBar from "@/components/EmployersStickyBar";

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-[#fcba36] px-8 py-3.5 text-base font-semibold text-[#2a1f0a] shadow-lg shadow-[#246374]/15 transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246374]";

const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-[transform,box-shadow,background-color] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const cardCtaClass =
  "inline-flex items-center gap-2 rounded-full border border-[#246374]/25 bg-[#f0f8fa] px-5 py-2.5 text-sm font-semibold text-[#246374] transition-[transform,background-color,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-[#246374] motion-safe:hover:text-white motion-safe:hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246374]";

function DatabaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
      <path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9" />
      <path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11v2a7 7 0 0 0 7 7h0" />
      <path d="M11 5L4 9v6l7 4V5z" />
      <path d="M11 5l9 4-9 4" />
      <circle cx="20" cy="9" r="1" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const offerings = [
  {
    icon: <DatabaseIcon />,
    number: "01",
    title: "Database access",
    bestFor: "Move fast. Hire on your own terms.",
    body: "Abroader maintains a continuously updated database of pre-vetted candidates who are actively open to relocating internationally. You get direct access to their profiles — background, skills, languages, and relocation preferences — and can reach out yourself. You only pay a placement fee when a hire is made. No retainer, no monthly subscription.",
    cta: "Request database access",
  },
  {
    icon: <SearchIcon />,
    number: "02",
    title: "Active search & direct recruitment",
    bestFor: "Hard-to-fill roles that need a targeted approach.",
    body: "You brief us on the role, and our team runs a dedicated search — headhunting, outreach, and qualification included. We handle the entire pipeline so you don't have to. Fully contingency-based: if we don't place someone, you don't pay. No risk, full effort.",
    cta: "Tell us about your role",
  },
  {
    icon: <PeopleIcon />,
    number: "03",
    title: "Embedded recruiter",
    bestFor: "Scaling fast or going through a hiring surge.",
    body: "One of our experienced recruiters joins your team — attending your standups, using your tools, operating as an internal hire would. You get dedicated recruitment capacity without the cost or commitment of a full-time hire. Engage for a month, a quarter, or longer.",
    cta: "Talk to us about embedding",
  },
  {
    icon: <MegaphoneIcon />,
    number: "04",
    title: "Advertising & visibility",
    bestFor: "Employer brands wanting a relocation-ready audience.",
    body: "Your brand gets placed directly in front of our audience of internationally mobile professionals: featured spots on the Abroader homepage, dedicated newsletter placements, and access to partner channels. Ideal for building awareness before you're actively hiring.",
    cta: "See advertising options",
  },
] as const;

const stats = [
  { value: "500+", label: "Active candidates" },
  { value: "40+", label: "Countries covered" },
  { value: "100%", label: "Contingency-based" },
  { value: "4", label: "Ways to work with us" },
] as const;

export default function EmployersContent() {
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col bg-[var(--snow)] text-[#2d4a52] antialiased">

      <EmployersStickyBar />

      {/* ── Hero ── */}
      <section className="relative w-full bg-[var(--snow)] px-4 pb-3 pt-6 md:px-6 md:pb-6 md:pt-8">
        <div className="relative mx-auto max-w-[min(100%,1400px)] min-h-[min(62vh,640px)] overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_-12px_rgba(36,99,116,0.28)] ring-1 ring-[#246374]/[0.08] md:rounded-[2rem] md:min-h-[min(72vh,760px)]">
          <Image
            src="/about/hero-travel.jpg"
            alt="People collaborating in a bright workspace"
            fill
            priority
            className="object-cover object-[center_30%] brightness-[1.02] contrast-[1.02] saturate-[1.05] md:object-[center_28%]"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#021820]/45 via-[#0d3d4a]/40 to-[#041a1f]/92" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(142,210,225,0.1),transparent_55%)]" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#020f14]/95 via-[#061f26]/5 to-transparent" aria-hidden />

          <div className="relative z-10 flex min-h-[min(62vh,640px)] flex-col items-center justify-center px-5 pb-16 pt-20 text-center md:min-h-[min(72vh,760px)] md:px-10 md:pb-24 md:pt-28">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#c8eef5] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#fcba36]" aria-hidden />
              For employers
            </p>
            <h1 className="max-w-3xl font-[Georgia,serif] text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl md:text-[3.4rem] md:leading-[1.06]">
              The smarter way to{" "}
              <span className="bg-gradient-to-br from-[#fff8e8] via-[#fcba36] to-[#e8a82a] bg-clip-text text-transparent">
                hire internationally
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
              Abroader connects you with relocation-ready talent and gives you the recruitment muscle to make it happen — on your terms.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href={GET_CONTACTED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryCtaClass}
              >
                Get contacted
              </a>
              <Link href="/about-us" className={secondaryCtaClass}>
                About Abroader
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="w-full bg-[#246374] px-4 py-10 md:px-6">
        <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-y-8 md:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-[Georgia,serif] text-4xl font-bold text-[#fcba36]">{s.value}</span>
              <span className="text-sm font-medium text-white/70 uppercase tracking-wider">{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Offerings ── */}
      <section className="relative w-full overflow-hidden px-4 py-20 md:px-6 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(36,99,116,0.07),transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="font-[Georgia,serif] text-3xl font-bold text-[#1a3a44] md:text-4xl">
              How we partner with employers
            </h2>
            <p className="mt-4 text-lg text-[#4a6b76]">
              Four ways to work together — pick one, or combine them.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {offerings.map((item) => (
              <li
                key={item.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#246374]/12 bg-white shadow-sm ring-1 ring-[#246374]/[0.05] transition-shadow duration-300 hover:shadow-lg hover:shadow-[#246374]/10"
              >
                {/* top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#246374] to-[#fcba36]" aria-hidden />

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  {/* icon + number row */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#246374]/8 text-[#246374] ring-1 ring-[#246374]/15 transition-colors duration-300 group-hover:bg-[#246374] group-hover:text-white">
                      {item.icon}
                    </div>
                    <span className="font-[Georgia,serif] text-5xl font-bold leading-none text-[#246374]/8 select-none">
                      {item.number}
                    </span>
                  </div>

                  {/* best for pill */}
                  <p className="mb-3 inline-flex w-fit items-center rounded-full bg-[#fcba36]/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-[#9a6c00]">
                    {item.bestFor}
                  </p>

                  {/* title */}
                  <h3 className="mb-3 font-[Georgia,serif] text-xl font-bold text-[#1a3a44] leading-snug">
                    {item.title}
                  </h3>

                  {/* body */}
                  <p className="flex-1 text-pretty text-[0.95rem] leading-relaxed text-[#4a6b76]">
                    {item.body}
                  </p>

                  {/* cta */}
                  <div className="mt-7">
                    <a
                      href={GET_CONTACTED_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardCtaClass}
                    >
                      {item.cta}
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="w-full bg-[#0d2d36] px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#c8eef5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fcba36]" aria-hidden />
            Ready to hire?
          </p>
          <h2 className="mb-5 font-[Georgia,serif] text-3xl font-bold text-white md:text-4xl">
            Not sure where to start?{" "}
            <span className="bg-gradient-to-br from-[#fff8e8] via-[#fcba36] to-[#e8a82a] bg-clip-text text-transparent">
              Let&apos;s talk.
            </span>
          </h2>
          <p className="mb-10 text-pretty text-lg leading-relaxed text-white/65">
            Tell us about your hiring needs and we&apos;ll recommend the right model for you — no commitment required.
          </p>
          <a
            href={GET_CONTACTED_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryCtaClass}
          >
            Get contacted
          </a>
        </div>
      </section>

    </main>
  );
}
