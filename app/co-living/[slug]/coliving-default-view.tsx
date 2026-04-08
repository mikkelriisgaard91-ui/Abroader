import Image from "next/image";
import Link from "next/link";
import type { ColivingListingResolved } from "../content";
import { RECRUITER_CONTACT_URL } from "../content";

const DEFAULT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85";

const recruiterPrimaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-rj-primary px-8 py-4 text-base font-bold text-rj-on-primary shadow-[0_8px_28px_rgba(253,187,55,0.22)] transition-all hover:brightness-105 active:scale-[0.98] sm:px-10 sm:text-lg";

const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-full border border-rj-secondary/55 bg-rj-secondary/10 px-6 py-3 text-sm font-semibold text-rj-secondary transition hover:bg-rj-secondary/18 active:scale-[0.98] sm:px-8 sm:text-base";

export function ColivingDefaultView({ listing }: { listing: ColivingListingResolved }) {
  return (
    <main className="lj-page overflow-x-hidden bg-rj-bg pb-16 font-rj-body text-rj-fg selection:bg-rj-primary selection:text-rj-on-primary">
      <section className="relative overflow-hidden bg-[#001016] px-4 py-10 sm:px-6 md:px-10 lg:px-12 lg:py-14 xl:px-16 2xl:px-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(0,74,92,0.45)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-rj-band to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <nav className="mb-8 text-sm text-rj-muted" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/co-living" className="font-medium text-rj-secondary transition hover:text-rj-fg">
                  Co-living
                </Link>
              </li>
              <li className="text-rj-muted/80" aria-hidden>
                /
              </li>
              <li>
                <Link
                  href={`/co-living#region-${listing.regionId}`}
                  className="font-medium text-rj-secondary transition hover:text-rj-fg"
                >
                  {listing.regionName}
                </Link>
              </li>
              <li className="text-rj-muted/80" aria-hidden>
                /
              </li>
              <li className="max-w-[min(100%,28rem)] truncate text-rj-fg/90">{listing.title}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_min(40%,440px)] lg:items-start lg:gap-14">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-rj-secondary">{listing.location}</p>
              <h1 className="font-rj-headline mb-6 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-rj-fg sm:text-4xl md:text-5xl">
                {listing.title}
              </h1>
              <p className="mb-8 max-w-2xl text-pretty text-base leading-relaxed text-rj-muted sm:text-lg">
                {listing.description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={listing.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={recruiterPrimaryCtaClass}
                >
                  View on partner site
                </a>
                <Link href="/co-living#co-living-destinations" className={secondaryCtaClass}>
                  All destinations
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:aspect-[16/11]">
                <Image
                  src={DEFAULT_HERO_IMAGE}
                  alt="Coastal view — sea and shoreline"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[50%_55%]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001016]/70 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-gradient-to-b from-rj-band to-rj-bg px-4 py-14 sm:px-6 md:px-10 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[720px]">
          <h2 className="font-rj-headline mb-6 text-2xl font-bold text-rj-fg sm:text-3xl">What&apos;s included</h2>
          <ul className="mb-10 flex flex-col gap-3 text-rj-fg/95">
            {listing.features.map((f) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rj-primary" aria-hidden />
                <span className="text-pretty leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-white/10 bg-rj-surface-high/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8">
            <h3 className="font-rj-headline mb-4 text-lg font-bold text-rj-fg">From</h3>
            {listing.prices.map((p) => (
              <p key={p} className="font-rj-headline text-2xl font-bold text-rj-primary sm:text-3xl">
                {p}
              </p>
            ))}
            <p className="mt-4 text-sm leading-relaxed text-rj-muted">
              Prices are indicative and set by the partner; confirm current rates and availability on their site.
            </p>
            <a
              href={listing.readMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 ${recruiterPrimaryCtaClass} w-full sm:w-auto`}
            >
              View on partner site
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-rj-surface-high px-6 py-12 text-center md:px-10 md:py-14">
          <div
            className="lj-blurred-orb pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-rj-primary/12"
            aria-hidden
          />
          <p className="relative z-10 mb-6 text-pretty text-base leading-relaxed text-rj-muted md:text-lg">
            Want help choosing a coliving or understanding what is included? Our team can point you in the right direction.
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
