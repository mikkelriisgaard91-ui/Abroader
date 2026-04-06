import Image from "next/image";
import Link from "next/link";
import type { StaticVolunteerListing } from "@/lib/volunteering/static-volunteer-listings";

const glassCard =
  "rounded-2xl border border-white/10 bg-rj-elevated/45 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]";

const lightCard =
  "rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all hover:border-amber-200/80 hover:shadow-md";

export function VolunteerOpportunityCard({
  listing,
  variant = "default",
}: {
  listing: StaticVolunteerListing;
  variant?: "default" | "light";
}) {
  const cardClass = variant === "light" ? lightCard : glassCard;
  const imageOverlay =
    variant === "light"
      ? "pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent opacity-90"
      : "pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,22,29,0.72)] via-transparent to-transparent opacity-90";
  const imgBg =
    variant === "light"
      ? "relative h-48 w-full shrink-0 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200"
      : "relative h-48 w-full shrink-0 overflow-hidden bg-gradient-to-br from-rj-elevated to-rj-surface-high";
  const titleClass =
    variant === "light"
      ? "font-rj-headline mb-2 text-lg font-bold leading-snug text-slate-900 md:text-xl"
      : "font-rj-headline mb-2 text-lg font-bold leading-snug text-rj-fg md:text-xl";
  const mutedClass = variant === "light" ? "mb-2 text-sm text-slate-600" : "mb-2 text-sm text-rj-muted";
  const badgeClass =
    variant === "light"
      ? "mb-3 inline-flex w-fit rounded-full border border-amber-200/80 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900/90"
      : "mb-3 inline-flex w-fit rounded-full border border-rj-secondary/20 bg-rj-secondary/10 px-3 py-1 text-xs text-rj-secondary";
  const descClass =
    variant === "light" ? "mb-4 text-sm leading-relaxed text-slate-700" : "mb-4 text-sm leading-relaxed text-rj-fg/90";
  const includedLabelClass =
    variant === "light" ? "mb-2 text-xs font-bold uppercase tracking-wider text-slate-500" : "mb-2 text-xs font-bold uppercase tracking-wider text-rj-muted";
  const listClass = variant === "light" ? "list-inside list-disc space-y-1.5 text-sm text-slate-600" : "list-inside list-disc space-y-1.5 text-sm text-rj-muted";
  const priceClass = variant === "light" ? "mb-4 text-sm font-semibold text-amber-800" : "mb-4 text-sm font-semibold text-rj-secondary";
  const primaryLinkClass =
    variant === "light"
      ? "inline-flex items-center gap-1 text-sm font-bold text-amber-700 transition-transform group-hover:translate-x-0.5"
      : "inline-flex items-center gap-1 text-sm font-bold text-rj-primary transition-transform group-hover:translate-x-0.5";
  const secondaryLinkClass =
    variant === "light"
      ? "inline-flex items-center gap-1 text-sm font-semibold text-slate-600 underline-offset-2 transition-colors hover:text-slate-900 hover:underline"
      : "inline-flex items-center gap-1 text-sm font-semibold text-rj-secondary underline-offset-2 transition-colors hover:text-rj-fg hover:underline";

  return (
    <article
      className={`${cardClass} group relative flex flex-col overflow-hidden ${
        variant === "default"
          ? "transition-all hover:border-rj-secondary/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          : ""
      }`}
    >
      <div className={imgBg}>
        <Image
          src={listing.pictureUrl}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
        <div className={imageOverlay} aria-hidden />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={titleClass}>{listing.title}</h3>
        <p className={mutedClass}>📍 {listing.locationLabel}</p>
        <span className={badgeClass}>{listing.badgeLabel}</span>
        <p className={descClass}>{listing.description}</p>
        <div className="mb-4">
          <p className={includedLabelClass}>Included</p>
          <ul className={listClass}>
            {listing.included.map((line) => (
              <li key={line} className="text-pretty">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <p className={priceClass}>{listing.priceLine}</p>
        <div className="mt-auto flex flex-col gap-3">
          {listing.landingPath ? (
            <>
              <Link href={listing.landingPath} className={primaryLinkClass}>
                Read full details
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <a
                href={listing.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryLinkClass}
              >
                Apply with recruiter
              </a>
            </>
          ) : (
            <a
              href={listing.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryLinkClass}
            >
              Read more and apply
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
