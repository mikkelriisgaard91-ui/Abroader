import { REMOTE_JOBS_TESTIMONIALS, type RemoteJobsTestimonial } from "./testimonials-data";

const glassPanel =
  "rounded-xl border border-[rgba(141,209,224,0.1)] bg-[rgba(0,58,71,0.4)] backdrop-blur-[12px]";

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
    <section className="border-t border-white/10 bg-rj-surface-low/90 px-6 py-24">
      <div className="mx-auto max-w-7xl">
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
