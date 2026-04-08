import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ColivingExtendedContent } from "@/lib/coliving/extended";
import type { ColivingListingResolved } from "../content";
import { RECRUITER_CONTACT_URL } from "../content";
import { ColivingFaq } from "./coliving-faq";

const recruiterPrimaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-rj-primary px-8 py-4 text-base font-bold text-rj-on-primary shadow-[0_8px_28px_rgba(253,187,55,0.22)] transition-all hover:brightness-105 active:scale-[0.98] sm:px-10 sm:text-lg";

const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-full border border-rj-secondary/55 bg-rj-secondary/10 px-6 py-3 text-sm font-semibold text-rj-secondary transition hover:bg-rj-secondary/18 active:scale-[0.98] sm:px-8 sm:text-base";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-rj-secondary sm:text-xs">{children}</p>
  );
}

function shortListingTitle(title: string): string {
  const parts = title.split("—");
  return parts[0]?.trim() || title;
}

export function ColivingExtendedView({
  listing,
  extended,
}: {
  listing: ColivingListingResolved;
  extended: ColivingExtendedContent;
}) {
  const workspaceShots = extended.workspaceImages ?? extended.gallery.slice(0, 3);
  const captions = extended.workspace.galleryCaptions ?? workspaceShots.map((g) => g.alt);

  return (
    <main className="lj-page overflow-x-hidden bg-rj-bg pb-16 font-rj-body text-rj-fg selection:bg-rj-primary selection:text-rj-on-primary">
      {/* Hero — partner-style stats + pills */}
      <section className="relative overflow-hidden bg-[#001016] px-4 pb-12 pt-8 sm:px-6 md:px-10 lg:px-12 lg:pb-16 lg:pt-10 xl:px-16 2xl:px-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(0,74,92,0.45)_0%,transparent_55%)]"
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
              <li className="max-w-[min(100%,20rem)] truncate text-rj-fg/90">{listing.title}</li>
            </ol>
          </nav>

          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-rj-muted">{listing.location}</p>
          <h1 className="font-rj-headline mb-4 text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-rj-fg sm:text-5xl md:text-6xl">
            {shortListingTitle(listing.title)}
          </h1>
          <div className="mb-6 flex flex-wrap gap-2">
            {extended.heroStats.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-rj-fg/95 sm:text-sm"
              >
                {s}
              </span>
            ))}
          </div>
          {extended.seasonLine ? (
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-rj-muted">{extended.seasonLine}</p>
          ) : null}
          <div className="mb-8 flex flex-wrap gap-2">
            {extended.amenityPills.map((pill) => (
              <span
                key={pill}
                className="rounded-lg border border-rj-secondary/35 bg-rj-secondary/10 px-3 py-1.5 text-xs font-medium text-rj-secondary sm:text-sm"
              >
                {pill}
              </span>
            ))}
          </div>
          <p className="mb-8 max-w-2xl text-pretty text-base leading-relaxed text-rj-muted sm:text-lg">{listing.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={listing.readMoreUrl} target="_blank" rel="noopener noreferrer" className={recruiterPrimaryCtaClass}>
              Book on partner site
            </a>
            <Link href="/co-living#co-living-destinations" className={secondaryCtaClass}>
              All destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery strip — carousel feel */}
      <section className="border-y border-white/[0.06] bg-rj-band py-6">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          {extended.gallery.map((img, i) => (
            <figure
              key={`${img.src}-${i}`}
              className="relative h-56 w-[min(85vw,380px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 shadow-lg sm:h-64 md:h-72"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="380px" />
              <figcaption className="sr-only">
                {i + 1} / {extended.gallery.length}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Homes */}
      <section className="px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>{extended.homes.label}</SectionLabel>
          <h2 className="font-rj-headline mb-6 text-3xl font-extrabold text-rj-fg sm:text-4xl">{extended.homes.title}</h2>
          <p className="mb-12 max-w-3xl text-pretty text-lg leading-relaxed text-rj-muted">{extended.homes.intro}</p>
          <div className="grid gap-8 md:grid-cols-2">
            {extended.homes.blocks.map((home) => (
              <div
                key={home.name}
                className="rounded-2xl border border-white/10 bg-rj-surface-high/70 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.15)] backdrop-blur-sm md:p-8"
              >
                <h3 className="font-rj-headline mb-1 text-xl font-bold text-rj-primary sm:text-2xl">{home.name}</h3>
                <p className="mb-4 text-sm font-medium text-rj-muted">{home.subtitle}</p>
                <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-rj-fg/95">
                  {home.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rj-secondary" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspace */}
      <section className="border-t border-white/[0.06] bg-[#0a1218] px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>{extended.workspace.label}</SectionLabel>
          <h2 className="font-rj-headline mb-8 text-3xl font-extrabold text-rj-fg sm:text-4xl">{extended.workspace.title}</h2>
          <div className="mb-10 space-y-5 text-pretty text-base leading-relaxed text-rj-muted sm:text-lg">
            {extended.workspace.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mb-12 grid gap-4 sm:grid-cols-3">
            {workspaceShots.map((img, idx) => (
              <figure key={`ws-${idx}-${img.src}`} className="overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:640px) 100vw, 33vw" />
                </div>
                <figcaption className="border-t border-white/10 bg-rj-surface-high/80 px-3 py-2 text-center text-xs text-rj-muted">
                  {captions[idx] ?? img.alt}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {extended.workspace.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-white/10 bg-rj-surface-high/50 p-5 text-center sm:p-6"
              >
                <h3 className="font-rj-headline mb-2 text-lg font-bold text-rj-fg">{h.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-rj-muted">{h.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="border-t border-white/[0.06] bg-gradient-to-b from-rj-band to-rj-bg px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{extended.community.label}</SectionLabel>
          <h2 className="font-rj-headline mb-8 text-3xl font-extrabold text-rj-fg sm:text-4xl">{extended.community.title}</h2>
          <p className="text-pretty text-lg leading-relaxed text-rj-muted">{extended.community.body}</p>
        </div>
      </section>

      {/* Destination */}
      <section className="px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-rj-headline mb-8 text-center text-3xl font-extrabold text-rj-fg sm:text-4xl">
            {extended.destination.title}
          </h2>
          <div className="space-y-6 text-pretty text-base leading-relaxed text-rj-muted sm:text-lg">
            {extended.destination.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="border-t border-white/[0.06] bg-[#0a1218] px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[1000px]">
          <SectionLabel>{extended.pricing.label}</SectionLabel>
          <h2 className="font-rj-headline mb-4 text-3xl font-extrabold text-rj-fg sm:text-4xl">{extended.pricing.title}</h2>
          <p className="mb-2 max-w-2xl text-sm leading-relaxed text-rj-muted">{extended.pricing.refundNote}</p>
          <p className="mb-10 max-w-2xl text-sm font-medium text-rj-secondary">{extended.pricing.guaranteeLine}</p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-rj-surface-high/80">
                  <th className="px-4 py-3 font-rj-headline font-bold text-rj-fg sm:px-5">Stay</th>
                  {extended.pricing.table.columnLabels.map((label) => (
                    <th key={label} className="px-3 py-3 font-rj-headline text-xs font-bold leading-tight text-rj-fg sm:px-4 sm:text-sm">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {extended.pricing.table.rows.map((row) => (
                  <tr key={row.period} className="border-b border-white/[0.06] odd:bg-white/[0.02]">
                    <td className="px-4 py-3 font-semibold capitalize text-rj-fg sm:px-5">{row.period}</td>
                    {row.amounts.map((cell, ci) => (
                      <td key={`${row.period}-${ci}`} className="px-3 py-3 text-rj-muted sm:px-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {extended.pricing.table.footnote ? (
            <p className="mt-4 text-center text-xs text-rj-muted sm:text-sm">{extended.pricing.table.footnote}</p>
          ) : null}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <div className="text-center">
              {listing.prices.map((p) => (
                <p key={p} className="font-rj-headline text-lg font-bold text-rj-fg">
                  <span className="text-rj-primary">{p}</span>
                </p>
              ))}
            </div>
            <a href={listing.readMoreUrl} target="_blank" rel="noopener noreferrer" className={recruiterPrimaryCtaClass}>
              See availability
            </a>
          </div>
        </div>
      </section>

      {/* Locals + hosts */}
      <section className="border-t border-white/[0.06] bg-gradient-to-b from-rj-band to-rj-bg px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[800px]">
          <SectionLabel>{extended.locals.label}</SectionLabel>
          <h2 className="font-rj-headline mb-8 text-3xl font-extrabold text-rj-fg sm:text-4xl">{extended.locals.title}</h2>
          <div className="mb-12 space-y-6 text-pretty text-base leading-relaxed text-rj-muted sm:text-lg">
            {extended.locals.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-rj-surface-high/60 p-6 md:p-8">
            <h3 className="font-rj-headline mb-4 text-xl font-bold text-rj-fg">{extended.hosts.title}</h3>
            <p className="text-pretty leading-relaxed text-rj-muted">{extended.hosts.body}</p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[720px]">
          <SectionLabel>{extended.location.label}</SectionLabel>
          <h2 className="font-rj-headline mb-8 text-2xl font-extrabold text-rj-fg sm:text-3xl">{extended.location.title}</h2>
          <ul className="flex flex-col gap-3 text-pretty text-base leading-relaxed text-rj-muted">
            {extended.location.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rj-primary" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] bg-[#0a1218] px-4 py-16 sm:px-6 md:px-10 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[800px]">
          <SectionLabel>FAQ · {shortListingTitle(listing.title)}</SectionLabel>
          <h2 className="font-rj-headline mb-10 text-center text-3xl font-extrabold text-rj-fg sm:text-4xl">Questions</h2>
          <ColivingFaq items={extended.faq} />
        </div>
      </section>

      {/* Recruiter */}
      <section className="px-4 pb-4 pt-8 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-rj-surface-high px-6 py-12 text-center md:px-10 md:py-14">
          <div
            className="lj-blurred-orb pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-rj-primary/12"
            aria-hidden
          />
          <p className="relative z-10 mb-6 text-pretty text-base leading-relaxed text-rj-muted md:text-lg">
            Want help comparing colivings or planning your stay? We are happy to point you in the right direction.
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
