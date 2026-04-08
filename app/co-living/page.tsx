import Image from "next/image";
import Link from "next/link";
import {
  EXPLAINERS,
  HERO,
  INTRO_CLOSING,
  RECRUITER_CONTACT_URL,
  REGIONS,
  type ColivingListing,
  type RegionBlock,
} from "./content";

const recruiterPrimaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-rj-primary px-8 py-4 text-base font-bold text-rj-on-primary shadow-[0_8px_28px_rgba(253,187,55,0.22)] transition-all hover:brightness-105 active:scale-[0.98] sm:px-10 sm:text-lg";

const readMoreButtonClass =
  "inline-flex w-full items-center justify-center rounded-full border border-rj-secondary/55 bg-rj-secondary/10 px-5 py-2.5 text-sm font-semibold text-rj-secondary transition hover:bg-rj-secondary/18 active:scale-[0.98] sm:w-auto sm:min-w-[10rem]";

/** Sticky sub-nav sits under site header (min-height ~64px) */
const CONTINENT_NAV_STICKY_TOP = "top-16";

const continentNavStyles: Record<string, { label: string; hint: string; ring: string }> = {
  europe: {
    label: "Europe",
    hint: "Spain, Portugal, Bulgaria",
    ring: "hover:border-rj-secondary/50 hover:shadow-[0_0_0_1px_rgba(142,210,225,0.35)] focus-visible:border-rj-secondary/60",
  },
  africa: {
    label: "Africa",
    hint: "Morocco, South Africa",
    ring: "hover:border-amber-400/40 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.2)] focus-visible:border-amber-400/50",
  },
  "south-america": {
    label: "South America",
    hint: "Mexico, Colombia, Brazil",
    ring: "hover:border-emerald-400/35 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.2)] focus-visible:border-emerald-400/45",
  },
};

/** Community / shared space — Unsplash (images.unsplash.com in next.config.ts) */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85";

function ListingCard({ listing }: { listing: ColivingListing }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-rj-surface-high/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8">
      <h3 className="font-rj-headline mb-2 text-xl font-bold leading-snug text-rj-fg sm:text-2xl">
        <Link
          href={`/co-living/${listing.id}`}
          className="rounded-sm text-rj-fg transition hover:text-rj-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rj-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-rj-surface-high"
        >
          {listing.title}
        </Link>
      </h3>
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-rj-secondary">{listing.location}</p>
      <p className="mb-5 text-pretty text-base leading-relaxed text-rj-muted">{listing.description}</p>
      <ul className="mb-6 flex flex-1 flex-col gap-2 text-sm text-rj-fg/90">
        {listing.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rj-primary" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto border-t border-white/10 pt-5">
        {listing.prices.map((p) => (
          <p key={p} className="font-rj-headline text-lg font-bold text-rj-primary">
            {p}
          </p>
        ))}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={`/co-living/${listing.id}`}
            className="inline-flex w-full items-center justify-center rounded-full border border-rj-primary/45 bg-rj-primary/12 px-5 py-2.5 text-sm font-semibold text-rj-primary transition hover:bg-rj-primary/20 active:scale-[0.98] sm:w-auto sm:min-w-[10rem]"
          >
            Full details
          </Link>
          <a
            href={listing.readMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={readMoreButtonClass}
          >
            Partner site
          </a>
        </div>
      </div>
    </article>
  );
}

function ContinentNav() {
  return (
    <nav
      aria-label="Browse by continent"
      className={`sticky ${CONTINENT_NAV_STICKY_TOP} z-40 -mx-4 mb-12 border-b border-white/[0.07] bg-gradient-to-b from-rj-band/98 via-rj-band/95 to-rj-band/85 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 md:-mx-10 md:px-10 lg:-mx-12 lg:px-12 xl:-mx-16 xl:px-16 2xl:-mx-20 2xl:px-20`}
    >
      <p className="mb-3 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-rj-muted">Browse by region</p>
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
        {REGIONS.map((region) => {
          const style = continentNavStyles[region.id] ?? {
            label: region.name,
            hint: "",
            ring: "hover:border-white/25",
          };
          return (
            <a
              key={region.id}
              href={`#region-${region.id}`}
              className={`group flex min-w-[10.5rem] flex-1 flex-col items-center justify-center rounded-2xl border border-white/10 bg-rj-surface-high/75 px-4 py-3 text-center shadow-[0_8px_28px_rgba(0,0,0,0.12)] transition-all sm:min-w-0 sm:flex-none sm:px-6 ${style.ring} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rj-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-rj-band`}
            >
              <span className="font-rj-headline text-base font-bold text-rj-fg group-hover:text-rj-secondary sm:text-lg">{style.label}</span>
              {style.hint ? (
                <span className="mt-0.5 text-[0.7rem] leading-tight text-rj-muted group-hover:text-rj-fg/80">{style.hint}</span>
              ) : null}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function RegionSection({ region }: { region: RegionBlock }) {
  return (
    <section className="mb-20 scroll-mt-24 last:mb-0" aria-labelledby={`region-${region.id}`}>
      <h2
        id={`region-${region.id}`}
        className="font-rj-headline mb-10 scroll-mt-36 text-3xl font-extrabold text-rj-fg sm:text-4xl"
      >
        {region.name}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {region.listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
      {region.footnote ? (
        <p className="mt-8 text-center text-sm italic text-rj-muted">{region.footnote}</p>
      ) : null}
    </section>
  );
}

export default function CoLivingPage() {
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
            <p className="lj-handwritten-stamp mb-4 text-lg text-rj-secondary md:text-xl">{HERO.eyebrow}</p>
            <h1 className="font-rj-headline mb-6 text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-rj-fg sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-7xl">
              {HERO.title}
            </h1>
            <p className="mb-8 max-w-xl text-pretty text-base leading-relaxed text-rj-muted sm:text-lg md:text-xl">{HERO.subtitle}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#co-living-destinations" className={recruiterPrimaryCtaClass}>
                Browse Co-living options
              </a>
            </div>
            <p className="mt-6 text-sm text-rj-muted md:text-base">Coworking · Community · Flexible stays</p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={HERO_IMAGE}
                alt="People collaborating together at a shared table"
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
          </div>
        </div>
      </section>

      <section
        id="co-living-destinations"
        className="scroll-mt-24 relative border-t border-white/[0.06] bg-gradient-to-b from-rj-band to-rj-bg px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-24 xl:px-16 2xl:px-20"
      >
        <div
          className="pointer-events-none absolute right-0 top-24 h-[400px] w-[400px] rounded-full bg-rj-secondary/8 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <p className="mx-auto mb-10 max-w-[48rem] text-pretty text-center text-lg leading-relaxed text-rj-muted md:text-xl">
            {INTRO_CLOSING.lead}
          </p>

          <ContinentNav />

          {REGIONS.map((region) => (
            <RegionSection key={region.id} region={region} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-rj-bg px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="font-rj-headline mb-12 text-center text-3xl font-extrabold text-rj-fg sm:text-4xl">Co-living abroad</h2>
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
            {EXPLAINERS.map((block) => (
              <div key={block.id} className="rounded-2xl border border-white/10 bg-rj-surface-high/60 p-6 md:p-8">
                <h3 className="font-rj-headline mb-4 text-xl font-bold text-rj-fg sm:text-2xl">{block.title}</h3>
                <p className="mb-4 text-pretty leading-relaxed text-rj-muted">{block.body}</p>
                {block.bullets ? (
                  <ul className="flex flex-col gap-2 text-rj-fg/95">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rj-secondary" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-rj-surface-high px-6 py-14 text-center md:px-12 md:py-16">
          <div
            className="lj-blurred-orb pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-rj-primary/12"
            aria-hidden
          />
          <p className="relative z-10 mb-8 text-pretty text-lg leading-relaxed text-rj-muted md:text-xl">
            Want help choosing a destination or understanding what is included? Our team can point you in the right direction.
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
