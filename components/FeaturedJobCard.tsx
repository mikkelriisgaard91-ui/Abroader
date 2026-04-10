import Link from "next/link";
import type { FeaturedJobDto } from "@/lib/remote-jobs/teamtailor-featured";

const glassCard =
  "rounded-2xl border border-white/10 bg-rj-elevated/45 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]";

const lightCard =
  "rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all hover:border-amber-200/80 hover:shadow-md";

export function FeaturedJobCard({
  job,
  variant = "default",
  primaryCta,
}: {
  job: FeaturedJobDto;
  variant?: "default" | "light";
  /** When set, the card CTA links here instead of the Teamtailor apply URL (e.g. internal landing page). */
  primaryCta?: { href: string; label: string };
}) {
  const ctaHref = primaryCta?.href ?? job.applyUrl;
  const ctaLabel = primaryCta?.label ?? "Apply now";
  const cardClass = variant === "light" ? lightCard : glassCard;
  const cardHoverClass =
    variant === "default"
      ? "transition-all hover:border-rj-secondary/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
      : "";
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
  const mutedClass = variant === "light" ? "mb-3 text-sm text-slate-600" : "mb-3 text-sm text-rj-muted";
  const badgeClass =
    variant === "light"
      ? "mb-4 inline-flex w-fit rounded-full border border-amber-200/80 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900/90"
      : "mb-4 inline-flex w-fit rounded-full border border-rj-secondary/20 bg-rj-secondary/10 px-3 py-1 text-xs text-rj-secondary";
  const linkClass =
    variant === "light"
      ? "inline-flex items-center gap-1 text-sm font-bold text-amber-700 transition-transform group-hover:translate-x-0.5"
      : "inline-flex items-center gap-1 text-sm font-bold text-rj-primary transition-transform group-hover:translate-x-0.5";
  const placeholderClass =
    variant === "light" ? "flex h-full w-full items-center justify-center text-4xl text-amber-300/80" : "flex h-full w-full items-center justify-center text-4xl text-rj-secondary/50";

  const mediaBlock = (
    <div className={imgBg}>
      {job.pictureUrl ? (
        // eslint-disable-next-line @next/next/no-img-element -- Teamtailor careersite URLs
        <img
          src={job.pictureUrl}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
      ) : (
        <div className={placeholderClass} aria-hidden>
          😊
        </div>
      )}
      <div className={imageOverlay} aria-hidden />
    </div>
  );

  const bodyBlock = (
    <div className="flex flex-1 flex-col p-6">
      <h3 className={titleClass}>{job.title}</h3>
      <p className={mutedClass}>📍 {job.locationLabel}</p>
      <span className={badgeClass}>{job.employmentTypeLabel}</span>
      <div className="mt-auto">
        {primaryCta ? (
          <span className={linkClass}>
            {ctaLabel}
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </span>
        ) : (
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {ctaLabel}
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );

  if (primaryCta) {
    return (
      <Link
        href={ctaHref}
        className={`${cardClass} group relative flex flex-col overflow-hidden no-underline ${cardHoverClass}`}
      >
        {mediaBlock}
        {bodyBlock}
      </Link>
    );
  }

  return (
    <article className={`${cardClass} group relative flex flex-col overflow-hidden ${cardHoverClass}`}>
      {mediaBlock}
      {bodyBlock}
    </article>
  );
}
