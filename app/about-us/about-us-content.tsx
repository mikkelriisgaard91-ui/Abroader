import Image from "next/image";
import Link from "next/link";

const CONTACT_URL = "https://abroader.io/en/bliv-kontaktet/";
const TEAMTAILOR_URL =
  "https://abroader-1746694588.teamtailor.com/da/jobs/6578060-fedt-du-vil-hore-fra-os/f6d61284-191c-4471-85ab-7c22ffc1a544";

const expectations = [
  {
    title: "Many opportunities",
    body:
      "On our platform you can explore many different types of jobs abroad, and we work to connect you with strong opportunities that fit what you are looking for.",
  },
  {
    title: "Quality partners",
    body:
      "The Abroader team carefully selects our partners and works to ensure that promised conditions are actually delivered on the ground.",
  },
  {
    title: "Transparency",
    body:
      "You can see the details on salary, housing, and the fine print, so you have full insight into the options you are considering.",
  },
  {
    title: "Community",
    body:
      "Abroader is a dynamic community for adventurous professionals who dream of working abroad and learning from others on the same path.",
  },
  {
    title: "Inspiration",
    body:
      "You will find inspiration, learning resources, and practical tips you can use the next time you choose to work abroad.",
  },
  {
    title: "International team",
    body:
      "The Abroader team is made up of international people who live or have lived abroad and want to pass that experience on.",
  },
] as const;

const team = [
  { name: "Jonathan Parisi", role: "Developer", location: "Copenhagen, Denmark" },
  { name: "Malene Madsen", role: "Co-founder", location: "Kolding, Denmark" },
  { name: "Eva Duffy", role: "Volunteer", location: "Lejre, Denmark" },
  { name: "Patrick Sahlgren", role: "Developer", location: "Copenhagen, Denmark" },
  { name: "Frederik Bjørk", role: "Developer", location: "Copenhagen, Denmark" },
  { name: "Mads Hartmann", role: "Business developer", location: "Algarve, Portugal" },
  { name: "Marie Sørensen", role: "International recruiter", location: "Benalmádena, Spain" },
  { name: "Frank Gjesvold", role: "International recruiter", location: "St Julian's, Malta" },
  { name: "Anastasia Hoffmann", role: "International recruiter", location: "Berlin, Germany" },
  { name: "Christoffer Frellesen", role: "Business developer", location: "Jutland, Denmark" },
  { name: "Kim Anthony", role: "People & process coordinator", location: "Bali, Indonesia" },
] as const;

const faqs = [
  {
    q: "What is Abroader?",
    a: "Abroader is a travel platform for young people, built for Gen Y and Gen Z. We help you find jobs abroad, volunteering opportunities, digital nomad setups, and backpacker experiences — so it is easier to work, travel, and explore the world.",
  },
  {
    q: "Is it free to get a job through Abroader?",
    a: "Yes. If you get a job through one of Abroader's partner employers, it is 100% free for you as a candidate.",
  },
  {
    q: "What if I want extra help with my job search?",
    a: "We offer Job Search Premium (a paid service), where you can get personal job search support, CV design and feedback, interview coaching and practice, and relocation help (housing, flights, insurance).",
  },
  {
    q: "Does volunteering cost money?",
    a: "Yes — our volunteer programmes have a participation fee. We aim to be among the most affordable on the market so you can travel, make a difference, and still keep your budget under control.",
  },
  {
    q: "How do I get a job at Abroader?",
    a: "We collaborate in many ways and always encourage people to reach out — especially if you are already planning to move abroad. There may be a path for you to join our journey.",
  },
  {
    q: "Why choose Abroader?",
    a: "Because we get it. We are built for young people who want more than a job — they want an adventure. Whether you work, volunteer, or live the dream as a digital nomad, Abroader makes going abroad safer, simpler, and more exciting.",
  },
] as const;

const ctaButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[#fcba36] px-8 py-3.5 text-base font-semibold text-[#2a1f0a] shadow-lg shadow-[#246374]/15 transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246374]";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-full border-2 border-white/85 bg-white/12 px-8 py-3.5 text-base font-semibold text-white shadow-sm backdrop-blur-md transition-[background-color,transform,box-shadow] duration-300 motion-safe:hover:bg-white/22 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function AboutUsContent() {
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col bg-[var(--snow)] text-[#2d4a52] antialiased">
      {/* Hero — inset frame, lighter overlay, tuned focal point on photo */}
      <section className="relative w-full bg-[var(--snow)] px-4 pb-3 pt-6 md:px-6 md:pb-6 md:pt-8">
        <div className="relative mx-auto max-w-[min(100%,1400px)] min-h-[min(72vh,780px)] overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_-12px_rgba(36,99,116,0.28)] ring-1 ring-[#246374]/[0.08] md:rounded-[2rem] md:min-h-[min(78vh,860px)]">
          <Image
            src="/about/hero-travel.jpg"
            alt="Travellers exploring abroad"
            fill
            priority
            className="object-cover object-[center_22%] brightness-[1.03] contrast-[1.02] saturate-[1.06] md:object-[center_26%]"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          {/* Airy top, readable bottom — photo stays visible in upper area */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#021820]/45 via-[#0d3d4a]/38 to-[#041a1f]/88"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(142,210,225,0.12),transparent_55%)]"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#020f14]/95 via-[#061f26]/55 to-transparent"
            aria-hidden
          />
          <div className="relative z-10 flex min-h-[min(72vh,780px)] flex-col items-center justify-center px-5 pb-14 pt-24 text-center md:min-h-[min(78vh,860px)] md:px-10 md:pb-20 md:pt-28">
            <p className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#c8eef5] backdrop-blur-md">
              Abroader
            </p>
            <h1 className="max-w-4xl font-[Georgia,serif] text-balance text-4xl font-bold leading-[1.06] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl md:leading-[1.05]">
              <span className="bg-gradient-to-br from-[#fff8e8] via-[#fcba36] to-[#e8a82a] bg-clip-text text-transparent">
                Welcome to Abroader
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/92 md:mt-8 md:text-xl md:leading-relaxed">
              Meaningful, affordable opportunities abroad — built by people who have packed the suitcase
              and taken the leap themselves.
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={ctaButtonClass}>
                Contact us
              </a>
              <a
                href={TEAMTAILOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButtonClass}
              >
                Work with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        id="story"
        className="scroll-mt-24 border-b border-[#246374]/[0.07] bg-[var(--snow)] px-5 py-16 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#246374]/70">Who we are</p>
          <h2 className="mt-3 font-[Georgia,serif] text-3xl font-bold tracking-tight text-[#246374] md:text-4xl">
            Our story
          </h2>
          <div className="mt-8 space-y-6 text-pretty text-lg leading-relaxed text-[#2d4a52]">
            <p>
              Abroader is for everyone who dreams of living and working abroad. Behind Abroader stands
              an international team with roots in many countries. We all have one thing in common — we
              have travelled, studied, and worked abroad for extended periods ourselves.
            </p>
            <p>
              We know how it feels to stand there with your suitcase packed, butterflies in your stomach,
              and uncertainty about what comes next. We have been there — the first time we leapt into
              the world without quite knowing what waited on the other side.
            </p>
            <p>
              That is why we built Abroader: to make it easier for others to take the same step — with
              support, reassurance, and knowledge from people who understand the journey from the inside.
              We know the experience is not only about landing a job, but about everything that comes
              with it: new cultures, new people, and the personal growth that happens when you dare to
              try something new.
            </p>
            <p className="font-medium text-[#246374]">
              At Abroader, our goal is to make living and working abroad feel safe, exciting, and
              life-changing.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={ctaButtonClass}>
              Contact us
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#246374]/25 bg-white px-8 py-3.5 text-base font-semibold text-[#246374] transition-[border-color,background-color] duration-300 motion-safe:hover:border-[#246374]/45 motion-safe:hover:bg-[#e8f4f7]"
            >
              Browse opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-[#246374]/[0.07] bg-gradient-to-br from-[#e8f4f7]/90 via-[var(--snow)] to-[#eef8fa] px-5 py-16 md:px-8 md:py-24">
        <blockquote className="relative mx-auto max-w-3xl text-center">
          <span
            className="pointer-events-none absolute -left-1 top-0 font-[Georgia,serif] text-6xl leading-none text-[#246374]/[0.12] md:-left-2 md:text-7xl"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="relative font-[Georgia,serif] text-2xl font-semibold not-italic leading-snug text-[#1a5a68] md:text-[1.75rem] md:leading-snug">
            Our mission is to provide meaningful and affordable opportunities abroad.
          </p>
        </blockquote>
      </section>

      {/* What to expect */}
      <section
        id="expectations"
        className="scroll-mt-24 bg-[var(--snow)] px-5 py-16 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#246374]/70">
            What we stand for
          </p>
          <h2 className="mt-3 text-center font-[Georgia,serif] text-3xl font-bold tracking-tight text-[#246374] md:text-4xl">
            What you can expect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg leading-relaxed text-[#2d4a52]/88">
            Clear information, trusted partners, and a community that understands the move.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {expectations.map((item, i) => (
              <article
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#246374]/[0.08] bg-gradient-to-br from-white to-[#f4fafb] p-6 shadow-[0_2px_20px_rgba(36,99,116,0.06)] ring-1 ring-white/80 transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_16px_48px_-8px_rgba(36,99,116,0.14)] md:p-7"
              >
                <span className="mb-4 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#246374]/[0.08] text-sm font-bold tabular-nums text-[#246374] transition-colors duration-300 group-hover:bg-[#fcba36]/25 group-hover:text-[#1a4d5a]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[Georgia,serif] text-xl font-bold tracking-tight text-[#246374]">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-[0.95rem] leading-relaxed text-[#2d4a52]/92">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="scroll-mt-24 border-t border-[#246374]/[0.07] bg-gradient-to-b from-[#f0f9fb] via-[var(--snow)] to-[var(--snow)] px-5 py-16 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#246374]/70">
            People behind the platform
          </p>
          <h2 className="mt-3 text-center font-[Georgia,serif] text-3xl font-bold tracking-tight text-[#246374] md:text-4xl">
            Team Abroader
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg leading-relaxed text-[#2d4a52]/88">
            International people who have lived the journey — and want to help you take yours.
          </p>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li
                key={member.name}
                className="rounded-2xl border border-[#246374]/[0.08] bg-white px-5 py-5 shadow-[0_2px_16px_rgba(36,99,116,0.05)] transition-[box-shadow,transform] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_8px_28px_rgba(36,99,116,0.1)]"
              >
                <p className="font-semibold text-[#246374]">{member.name}</p>
                <p className="mt-1 text-sm text-[#2d4a52]/90">{member.role}</p>
                <p className="mt-2 text-sm italic text-[#246374]/75">{member.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 border-t border-[#246374]/[0.07] bg-[var(--snow)] px-5 py-16 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#246374]/70">
            Helpful answers
          </p>
          <h2 className="mt-3 text-center font-[Georgia,serif] text-3xl font-bold tracking-tight text-[#246374] md:text-4xl">
            Questions and answers
          </h2>
          <div className="mt-12 divide-y divide-[#246374]/[0.1] rounded-3xl border border-[#246374]/[0.08] bg-white px-2 shadow-[0_4px_32px_rgba(36,99,116,0.06)] md:px-6">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group border-0 py-1 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer list-none py-5 pl-2 pr-8 text-left text-lg font-semibold text-[#246374] transition-colors duration-200 marker:content-none motion-safe:hover:text-[#1a4d5a] md:py-6 md:pl-0">
                  <span className="flex items-start justify-between gap-4">
                    <span>{item.q}</span>
                    <span
                      className="mt-1 shrink-0 text-[#fcba36] transition-transform duration-300 group-open:rotate-180"
                      aria-hidden
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </summary>
                <p className="pb-6 pl-2 text-pretty leading-relaxed text-[#2d4a52] md:pl-0">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#246374] via-[#1d5564] to-[#143d4a] px-5 py-16 text-center md:px-8 md:py-24">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#8ed2e1]/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#fcba36]/10 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <h2 className="font-[Georgia,serif] text-2xl font-bold text-[#fcba36] md:text-3xl">
            Ready to take the leap?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-[#b8e6ef]">
            Get in touch — we would love to hear about your plans and how we can help.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={ctaButtonClass}>
              Contact us
            </a>
            <a
              href={TEAMTAILOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#8ed2e1]/55 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-[background-color,transform] duration-300 motion-safe:hover:bg-white/12 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Work with us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
