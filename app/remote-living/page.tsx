import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { REMOTE_LIVING_HUB_CARDS } from "@/lib/remote-living/category-landing";

const SITE = "https://abroader.vercel.app";

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-[#fcba36] px-8 py-4 text-base font-semibold text-[#2a1f0a] shadow-[0_8px_28px_rgba(252,186,54,0.28)] transition-all hover:brightness-[0.97] active:scale-[0.98] sm:px-10 sm:text-lg";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85";

export const metadata: Metadata = {
  title: "Remote Living — Abroader",
  description:
    "Community coliving, vanlife, eco stays, and learning-focused living — find your style of life abroad.",
  openGraph: {
    title: "Remote Living — Abroader",
    description:
      "Community coliving, vanlife, eco stays, and learning-focused living — find your style of life abroad.",
    url: `${SITE}/remote-living`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE}/remote-living`,
  },
};

export default function RemoteLivingHubPage() {
  return (
    <main className="lj-page overflow-x-hidden pb-16 font-rj-body">
      <section className="relative flex min-h-[min(780px,92vh)] w-full items-center overflow-hidden px-4 pt-16 pb-0 sm:px-6 md:px-10 lg:min-h-[min(860px,90vh)] lg:px-12 lg:pt-20 lg:pb-0">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#e8f4f7]">
          <Image
            src={HERO_IMAGE}
            alt="People collaborating together in a bright shared space"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover object-[50%_45%]"
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#5a6c70]">Remote Living</p>
            <h1 className="font-rj-headline mb-5 text-balance text-3xl font-bold leading-[1.12] text-[#1a2e33] sm:text-4xl md:text-5xl lg:text-[2.75rem]">
              Live abroad on your own terms
            </h1>
            <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#4a5c60] md:text-xl">
              From community houses to life on the road — pick the style that matches how you want to work, learn, and
              explore.
            </p>
            <a href="#browse-categories" className={primaryCtaClass}>
              Browse categories
            </a>
          </div>
        </div>
      </section>

      <section
        id="browse-categories"
        className="scroll-mt-24 border-b border-[rgba(36,99,116,0.1)] bg-[#fafafa] px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1100px]">
          <h2 className="font-rj-headline mb-4 text-center text-3xl font-bold text-[#1a2e33] sm:text-4xl">
            Choose your remote living style
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-pretty text-lg text-[#4a5c60]">
            Four ways remote workers and travellers build a life abroad — each with its own rhythm and community.
          </p>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {REMOTE_LIVING_HUB_CARDS.map((card) => (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className="flex h-full flex-col rounded-2xl border border-[rgba(36,99,116,0.12)] bg-white p-6 shadow-[0_12px_40px_-24px_rgba(36,99,116,0.18)] transition hover:border-[rgba(36,99,116,0.22)] hover:shadow-[0_16px_48px_-20px_rgba(36,99,116,0.22)] md:p-8"
                >
                  <span className="mb-3 text-3xl" aria-hidden>
                    {card.emoji}
                  </span>
                  <h3 className="font-rj-headline mb-2 text-xl font-bold text-[#1a2e33]">{card.title}</h3>
                  <p className="text-pretty text-[#4a5c60] leading-relaxed">{card.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#246374]">Explore →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:px-10 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-[#5a6c70]">Looking for work abroad or structured breaks? Explore the rest of Abroader.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/remote-jobs"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(36,99,116,0.2)] bg-white px-8 py-3 text-sm font-semibold text-[#246374] shadow-sm transition-colors hover:border-[rgba(36,99,116,0.35)] hover:bg-[#e8f4f7]"
            >
              Remote jobs
            </Link>
            <Link
              href="/retreats"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(36,99,116,0.2)] bg-white px-8 py-3 text-sm font-semibold text-[#246374] shadow-sm transition-colors hover:border-[rgba(36,99,116,0.35)] hover:bg-[#e8f4f7]"
            >
              Retreats
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
