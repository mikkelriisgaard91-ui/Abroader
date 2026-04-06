import Image from "next/image";
import { PLATFORMS, RECRUITER_CONTACT_URL } from "./content";
import { PlatformCard } from "./platform-card";

const recruiterPrimaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-rj-primary px-8 py-4 text-base font-bold text-rj-on-primary shadow-[0_8px_28px_rgba(253,187,55,0.22)] transition-all hover:brightness-105 active:scale-[0.98] sm:px-10 sm:text-lg";

/** European coastal town at sunset — Unsplash (images.unsplash.com in next.config.ts) */
const HERO_SIDE_IMAGE =
  "https://images.unsplash.com/photo-1499678329028-101435549a4a?auto=format&fit=crop&w=1200&q=85";

function MaterialIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`} aria-hidden>
      {name}
    </span>
  );
}

export default function WorkForAccommodationPage() {
  return (
    <main className="lj-page overflow-x-hidden bg-rj-bg pb-12 font-rj-body text-rj-fg selection:bg-rj-primary selection:text-rj-on-primary">
      <section className="relative overflow-hidden bg-[#001016] px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(0,74,92,0.45)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rj-band to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_min(42%,480px)] lg:items-center lg:gap-16">
          <div>
            <p className="lj-handwritten-stamp mb-4 text-lg text-rj-secondary md:text-xl">Your next chapter starts here</p>
            <h1 className="font-rj-headline mb-6 text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-rj-fg sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-7xl">
              Live Abroad —
              <br />
              <span className="text-rj-primary">Without</span>
              <br />
              Paying for Accommodation
            </h1>
            <p className="mb-8 max-w-xl text-pretty text-base leading-relaxed text-rj-muted sm:text-lg md:text-xl">
              Discover work opportunities across Europe where your stay is covered — from hostels to resorts.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={RECRUITER_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={recruiterPrimaryCtaClass}
              >
                Speak with a recruiter
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-rj-secondary/35 bg-rj-surface-high/60 px-4 py-2 text-sm font-semibold text-rj-secondary backdrop-blur-sm">
                <MaterialIcon name="verified" className="text-rj-secondary" />
                verified
              </span>
            </div>
            <p className="mt-6 text-sm text-rj-muted md:text-base">
              No experience needed • Flexible stays • Start anytime
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={HERO_SIDE_IMAGE}
                alt="Traveler enjoying a sunset in a European coastal town"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[50%_35%]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001016]/80 via-transparent to-transparent"
                aria-hidden
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[280px]">
              <div className="lj-glass-panel rounded-2xl border border-white/15 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                <div className="mb-3 flex items-center gap-2 text-rj-secondary">
                  <MaterialIcon name="hotel" className="text-2xl" />
                  <span className="text-xs font-bold uppercase tracking-wider">Rent Free</span>
                </div>
                <p className="text-sm leading-relaxed text-rj-fg/95">
                  Average savings of €1,200/month on housing alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] bg-gradient-to-b from-rj-band to-rj-bg px-4 py-20 sm:px-6 md:px-10 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        <div
          className="pointer-events-none absolute right-0 top-24 h-[400px] w-[400px] rounded-full bg-rj-secondary/8 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <h2 className="font-rj-headline mb-4 text-balance text-3xl font-extrabold text-rj-fg sm:text-4xl md:text-5xl">
            Top 10 Platforms to Find Your Stay
          </h2>
          <p className="text-pretty text-lg text-rj-muted md:text-xl">
            Detailed breakdown of the best-kept secrets for the modern nomad.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-16 flex max-w-[880px] flex-col gap-12 lg:gap-16">
          {PLATFORMS.map((p) => (
            <PlatformCard key={p.id} platform={p} />
          ))}
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-rj-surface-high px-6 py-14 text-center md:px-12 md:py-16">
          <div
            className="lj-blurred-orb pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-rj-primary/12"
            aria-hidden
          />
          <p className="relative z-10 mb-8 text-pretty text-lg leading-relaxed text-rj-muted md:text-xl">
            Not sure which platform fits you? Our team helps you shortlist real stays that match your skills.
          </p>
          <a
            href={RECRUITER_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 ${recruiterPrimaryCtaClass}`}
          >
            Speak with a recruiter
          </a>
        </div>
      </section>
    </main>
  );
}
