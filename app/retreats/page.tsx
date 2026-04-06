import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { RECRUITER_CONTACT_URL } from "../language-jobs/content";
import { RetreatsCatalogSection, RetreatsCatalogSectionFallback } from "./retreats-catalog-section";

/** Brand: --gold #fcba36, on-gold per rj-on-primary */
const primaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-[#fcba36] px-8 py-4 text-base font-semibold text-[#2a1f0a] shadow-[0_8px_28px_rgba(252,186,54,0.28)] transition-all hover:brightness-[0.97] active:scale-[0.98] sm:px-10 sm:text-lg";

const RETREATS_HERO_IMAGE = "/retreats/hero-all-retreats.jpg";

const HIGHLIGHTS: { title: string; body: string; icon: string }[] = [
  {
    title: "Clear inclusions",
    body: "Structured programs with dates, meals, and what you need on site—no guesswork on what you are signing up for.",
    icon: "spa",
  },
  {
    title: "Places that slow you down",
    body: "Coasts, mountains, and quiet towns—pick a backdrop that matches how you want to reset: surf, yoga, wind, or whatever is next.",
    icon: "nature",
  },
  {
    title: "People on the same wavelength",
    body: "Small groups, shared houses, and hosts who know how to welcome travellers—so you are a name, not a booking number.",
    icon: "groups",
  },
];

function MaterialIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`} aria-hidden>
      {name}
    </span>
  );
}

export default function RetreatsPage() {
  return (
    <main className="lj-page overflow-x-hidden pb-16 font-rj-body">
      <section className="relative flex min-h-[min(780px,92vh)] w-full items-center overflow-hidden px-4 pt-16 pb-0 sm:px-6 md:px-10 lg:min-h-[min(860px,90vh)] lg:px-12 lg:pt-20 lg:pb-0">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#e8f4f7]">
          <Image
            src={RETREATS_HERO_IMAGE}
            alt="Calm turquoise ocean and sandy beach from above"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover object-[50%_55%]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-white/78 via-[#e8f4f7]/65 to-[#fafafa]/90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#fafafa]/92 via-transparent to-white/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-14 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/65 to-transparent sm:h-16"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] pb-8 sm:pb-10 lg:pb-12">
          <div className="retreats-hero-breathe max-w-3xl rounded-[2rem] border border-[rgba(36,99,116,0.12)] bg-white/82 p-8 shadow-[0_24px_56px_-28px_rgba(36,99,116,0.14)] backdrop-blur-md sm:p-10 md:p-12">
            <h1 className="font-rj-headline mb-5 text-balance text-3xl font-bold leading-[1.12] text-[#1a2e33] sm:text-4xl md:text-5xl lg:text-[2.75rem]">
              Your Next Retreat Starts Here
            </h1>
            <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#4a5c60] md:text-xl">
              Explore, compare, and book retreats worldwide — tailored to your style, location, and price range.
            </p>
            <a href="#browse-retreats" className={primaryCtaClass}>
              See listings
            </a>
          </div>
        </div>
      </section>

      <Suspense fallback={<RetreatsCatalogSectionFallback />}>
        <RetreatsCatalogSection />
      </Suspense>

      <section
        id="why-retreats"
        className="scroll-mt-24 border-b border-[rgba(36,99,116,0.1)] bg-gradient-to-b from-transparent to-[#e8f4f7]/35 px-4 py-20 sm:px-6 md:px-10 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1100px]">
          <h2 className="font-rj-headline mb-4 text-center text-3xl font-bold text-[#1a2e33] sm:text-4xl md:text-5xl">
            Built for a real break
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-pretty text-lg text-[#4a5c60] md:text-xl">
            A week somewhere else is a different rhythm: new light, new people, and room to focus on what you came for—
            whether that is waves, breathwork, or wind in your kite.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
            {HIGHLIGHTS.map((h) => (
              <article
                key={h.title}
                className="flex flex-col rounded-3xl border border-[rgba(36,99,116,0.1)] bg-white p-8 shadow-[0_16px_48px_-20px_rgba(36,99,116,0.1)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f4f7] text-[#246374]">
                  <MaterialIcon name={h.icon} className="text-2xl" />
                </div>
                <h3 className="font-rj-headline mb-3 text-xl font-semibold text-[#1a2e33]">{h.title}</h3>
                <p className="leading-relaxed text-[#4a5c60]">{h.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[rgba(36,99,116,0.1)] bg-white px-6 py-14 text-center shadow-[0_20px_56px_-24px_rgba(36,99,116,0.12)] md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[rgba(142,210,225,0.25)] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-[rgba(252,186,54,0.12)] blur-3xl"
            aria-hidden
          />
          <h2 className="relative z-10 font-rj-headline mb-4 text-2xl font-bold text-[#1a2e33] md:text-3xl">
            Want a human to narrow it down?
          </h2>
          <p className="relative z-10 mb-10 text-pretty text-lg leading-relaxed text-[#4a5c60] md:text-xl">
            Tell us your dates, budget, and whether you want surf, yoga, kitesurf, or something else—we will point you
            toward trips that fit.
          </p>
          <a href={RECRUITER_CONTACT_URL} target="_blank" rel="noopener noreferrer" className={`relative z-10 ${primaryCtaClass}`}>
            Speak to a recruiter
          </a>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-[#5a6c70]">Exploring paid work or volunteering? Browse our other paths abroad.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/remote-jobs"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(36,99,116,0.2)] bg-white px-8 py-3 text-sm font-semibold text-[#246374] shadow-sm transition-colors hover:border-[rgba(36,99,116,0.35)] hover:bg-[#e8f4f7]"
            >
              Remote jobs
            </Link>
            <Link
              href="/volunteering"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(36,99,116,0.2)] bg-white px-8 py-3 text-sm font-semibold text-[#246374] shadow-sm transition-colors hover:border-[rgba(36,99,116,0.35)] hover:bg-[#e8f4f7]"
            >
              Volunteering
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
