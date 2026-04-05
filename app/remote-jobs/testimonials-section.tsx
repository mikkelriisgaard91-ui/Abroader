import { REMOTE_JOBS_TESTIMONIALS, type RemoteJobsTestimonial } from "./testimonials-data";

const glassPanel =
  "rounded-xl border border-rj-secondary/15 bg-rj-elevated/45 backdrop-blur-[12px]";

function TestimonialCard({ t, className }: { t: RemoteJobsTestimonial; className?: string }) {
  return (
    <article className={`${glassPanel} relative flex h-full flex-col p-6 md:p-8 ${className ?? ""}`}>
      <div className="font-rj-headline mb-2 text-4xl leading-none text-rj-primary">“</div>
      <p className="mb-6 flex-1 leading-relaxed text-rj-fg/95">{t.quote}</p>
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${t.avClass}`}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-rj-fg">{t.name}</div>
          <div className="text-sm text-rj-muted">{t.role}</div>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const items = REMOTE_JOBS_TESTIMONIALS;
  const loop = [...items, ...items];

  return (
    <section className="relative border-t border-white/[0.06] bg-gradient-to-b from-rj-bg via-rj-surface-low/95 to-rj-band px-6 py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rj-secondary/20 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="font-rj-headline mb-12 text-center text-3xl font-bold text-rj-fg md:text-4xl">
          What our candidates say
        </h2>

        {/* prefers-reduced-motion: static grid */}
        <div className="hidden motion-reduce:grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* Infinite horizontal marquee */}
        <div className="motion-reduce:hidden -mx-6 max-w-[100vw] md:mx-0 md:max-w-none">
          <div className="rj-testimonials-marquee__viewport">
            <div className="rj-testimonials-marquee__track">
              {loop.map((t, i) => (
                <TestimonialCard
                  key={`${t.id}-${i}`}
                  t={t}
                  className="w-[min(85vw,340px)] shrink-0 sm:w-[320px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
