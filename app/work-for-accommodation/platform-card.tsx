import type { WorkExchangePlatform } from "./content";

function MaterialIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined shrink-0 ${className ?? ""}`} aria-hidden>
      {name}
    </span>
  );
}

function StarRow({ label }: { label: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3" role="img" aria-label={`${label}: 5 out of 5 stars`}>
      <span className="text-sm font-medium text-rj-muted">{label}:</span>
      <span className="text-base leading-none tracking-tight text-rj-primary" aria-hidden>
        ★★★★★
      </span>
    </div>
  );
}

export function PlatformCard({ platform }: { platform: WorkExchangePlatform }) {
  return (
    <article
      id={platform.id}
      className="lj-glass-panel scroll-mt-24 rounded-2xl border border-white/10 p-6 shadow-[0_8px_36px_rgba(0,0,0,0.28)] md:p-8"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-rj-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-rj-primary">
          Best for: {platform.bestFor}
        </span>
      </div>
      <h3 className="font-rj-headline mb-2 text-2xl font-extrabold text-rj-fg md:text-3xl">{platform.name}</h3>
      <p className="mb-6 text-pretty text-rj-muted">{platform.description}</p>

      <StarRow label="Friendliness" />

      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {platform.details.map((row) => (
          <div
            key={`${platform.id}-${row.label}`}
            className="flex gap-3 rounded-xl border border-white/8 bg-rj-surface-low/50 p-3"
          >
            <MaterialIcon name={row.icon} className="mt-0.5 text-rj-secondary" />
            <div className="min-w-0">
              <dt className="text-xs font-semibold uppercase tracking-wide text-rj-muted">{row.label}</dt>
              <dd className="text-sm font-medium text-rj-fg">{row.value}</dd>
            </div>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-2 text-rj-secondary">
            <MaterialIcon name="check_circle" className="text-xl" />
            <span className="text-sm font-bold uppercase tracking-wide">Brutally Honest Pros</span>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-rj-fg/95">
            {platform.pros.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rj-primary" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2 text-rj-muted">
            <MaterialIcon name="cancel" className="text-xl text-rj-muted" />
            <span className="text-sm font-bold uppercase tracking-wide">Brutally Honest Cons</span>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-rj-muted">
            {platform.cons.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <blockquote className="mt-8 border-l-4 border-rj-primary/60 pl-4 text-pretty italic leading-relaxed text-rj-fg/90">
        {platform.quote}
      </blockquote>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <StarRow label={platform.metricLabel} />
        <a
          href={platform.joinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-rj-primary px-6 py-3 text-sm font-bold text-rj-on-primary shadow-[0_8px_28px_rgba(253,187,55,0.22)] transition-all hover:brightness-105 active:scale-[0.98]"
        >
          {platform.joinCta}
        </a>
      </div>
    </article>
  );
}
