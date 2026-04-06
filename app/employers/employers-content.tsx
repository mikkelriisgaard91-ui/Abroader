import Image from "next/image";
import Link from "next/link";
import { GET_CONTACTED_URL } from "@/lib/employers";

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-[#fcba36] px-8 py-3.5 text-base font-semibold text-[#2a1f0a] shadow-lg shadow-[#246374]/15 transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246374]";

const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-full border-2 border-[#246374]/35 bg-white px-8 py-3.5 text-base font-semibold text-[#246374] shadow-sm transition-[transform,box-shadow,background-color] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-[var(--teal-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246374]";

const benefits = [
  {
    title: "Reach the right people",
    body:
      "Connect with candidates who are actively looking for international experience — not just another inbox of unqualified applicants.",
  },
  {
    title: "Transparent process",
    body:
      "Clear expectations on role requirements, relocation, and timelines so both sides know what they are signing up for.",
  },
  {
    title: "Partnership mindset",
    body:
      "We work with employers who take candidate experience seriously and want hires who thrive in a new country.",
  },
] as const;

export default function EmployersContent() {
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col bg-[var(--snow)] text-[#2d4a52] antialiased">
      <section className="relative w-full bg-[var(--snow)] px-4 pb-3 pt-6 md:px-6 md:pb-6 md:pt-8">
        <div className="relative mx-auto max-w-[min(100%,1400px)] min-h-[min(62vh,640px)] overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_-12px_rgba(36,99,116,0.28)] ring-1 ring-[#246374]/[0.08] md:rounded-[2rem] md:min-h-[min(68vh,720px)]">
          <Image
            src="/about/hero-travel.jpg"
            alt="People collaborating in a bright workspace"
            fill
            priority
            className="object-cover object-[center_30%] brightness-[1.02] contrast-[1.02] saturate-[1.05] md:object-[center_28%]"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#021820]/50 via-[#0d3d4a]/42 to-[#041a1f]/90"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(142,210,225,0.1),transparent_55%)]"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#020f14]/95 via-[#061f26]/5 to-transparent" aria-hidden />
          <div className="relative z-10 flex min-h-[min(62vh,640px)] flex-col items-center justify-center px-5 pb-14 pt-20 text-center md:min-h-[min(68vh,720px)] md:px-10 md:pb-20 md:pt-24">
            <p className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#c8eef5] backdrop-blur-md">
              For employers
            </p>
            <h1 className="max-w-3xl font-[Georgia,serif] text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl md:text-[3.15rem] md:leading-[1.06]">
              <span className="bg-gradient-to-br from-[#fff8e8] via-[#fcba36] to-[#e8a82a] bg-clip-text text-transparent">
                Hire abroad
              </span>{" "}
              with a partner who gets relocation
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/88 md:text-xl">
              Abroader helps you reach motivated talent for roles overseas — with a process that respects both your team and
              every candidate&apos;s move.
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

      <section className="mx-auto w-full max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="mb-10 text-center font-[Georgia,serif] text-3xl font-bold text-[#1a3a44] md:text-4xl">
          Why work with us
        </h2>
        <ul className="flex flex-col gap-10">
          {benefits.map((b) => (
            <li key={b.title}>
              <h3 className="mb-2 text-xl font-bold text-[#246374]">{b.title}</h3>
              <p className="text-pretty leading-relaxed text-[#3d5c66]">{b.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14 flex justify-center">
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
