import Link from "next/link";
import { parseLanguageJobsUiTabParam } from "@/lib/remote-jobs/language-job-tabs";
import { fetchAllLanguageDepartmentJobs } from "@/lib/remote-jobs/teamtailor-featured";
import {
  HERO_QUICK_BENEFITS,
  PROCESS_STEPS,
  RECRUITER_CONTACT_URL,
  SUCCESS_STORIES_SCROLL,
  type ScrollTestimonial,
} from "./content";
import { HERO_BENEFIT_ICONS } from "./hero-benefit-icons";
import LanguageJobsFAQ from "@/components/LanguageJobsFAQ";
import { LanguageJobsListingSection } from "./language-jobs-listing";

function MaterialIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`} aria-hidden>
      {name}
    </span>
  );
}

const recruiterPrimaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-rj-primary px-8 py-4 text-base font-bold text-rj-on-primary shadow-[0_8px_28px_rgba(253,187,55,0.22)] transition-all hover:brightness-105 active:scale-[0.98] sm:px-10 sm:text-lg";

function SuccessStoryCard({ t, className }: { t: ScrollTestimonial; className?: string }) {
  return (
    <article
      className={`lj-glass-panel flex h-full w-[min(85vw,340px)] shrink-0 flex-col rounded-2xl border border-white/10 p-6 md:p-8 sm:w-[320px] ${className ?? ""}`}
    >
      <MaterialIcon name="format_quote" className="mb-4 text-4xl text-rj-secondary/90" />
      <p className="mb-6 flex-1 leading-relaxed text-rj-fg/95 italic">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rj-surface-high text-[0.65rem] font-bold leading-tight text-rj-fg ring-1 ring-white/10">
          {t.initial}
        </div>
        <div className="min-w-0 text-left">
          <div className="font-bold text-rj-fg">{t.name}</div>
          <div className="text-xs font-medium tracking-wide text-rj-muted">{t.locationCaps}</div>
        </div>
      </div>
    </article>
  );
}

export default async function LanguageJobsPage({
  searchParams,
}: {
  searchParams?: Promise<{ tab?: string }>;
}) {
  const sp = searchParams ? await searchParams : {};
  const initialLanguageTab = parseLanguageJobsUiTabParam(sp.tab);

  const testimonialLoop = [...SUCCESS_STORIES_SCROLL, ...SUCCESS_STORIES_SCROLL];
  const languageJobResults = await fetchAllLanguageDepartmentJobs();
  const hideLanguageJobsSection =
    !languageJobResults.danish.ok &&
    languageJobResults.danish.error === "TEAMTAILOR_API_TOKEN is not configured.";

  return (
    <main className="lj-page overflow-x-hidden bg-rj-bg pb-12 font-rj-body text-rj-fg selection:bg-rj-primary selection:text-rj-on-primary">
      {/* Hero — full-width band; copy + benefits split on large screens */}
      <section className="relative flex min-h-[min(880px,92vh)] w-full items-center overflow-hidden bg-[radial-gradient(ellipse_140%_90%_at_50%_-15%,#004a5c_0%,#00161d_42%,#001016_100%)] px-4 py-16 sm:px-6 md:px-10 lg:min-h-[min(820px,90vh)] lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(126,200,212,0.12)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="lj-blurred-orb pointer-events-none absolute -left-16 top-[18%] h-[28rem] w-[28rem] rounded-full bg-rj-primary/18 md:left-[-4rem] md:h-[32rem] md:w-[32rem]"
          aria-hidden
        />
        <div
          className="lj-blurred-orb pointer-events-none absolute bottom-[12%] -right-20 h-[26rem] w-[26rem] rounded-full bg-rj-secondary/12 md:right-[-6rem] md:h-[30rem] md:w-[30rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-rj-band/90 via-rj-band/20 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-14 xl:gap-20 2xl:gap-24">
            <div className="min-w-0 flex-1 lg:max-w-[min(52rem,54%)] xl:max-w-[min(56rem,52%)]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rj-secondary/30 bg-rj-surface-high/75 px-4 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-md">
                <MaterialIcon name="flight_takeoff" className="text-lg text-rj-secondary" />
                <span className="text-sm font-semibold uppercase tracking-wide text-rj-secondary">Relo Paid!</span>
              </div>
              <h1 className="font-rj-headline mb-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-rj-fg sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.25rem] xl:leading-[1.05] 2xl:text-8xl">
                Now Hiring in <span className="text-rj-primary">12+ Countries</span>
              </h1>
              <h2 className="font-rj-headline mb-8 text-xl font-bold leading-snug text-rj-secondary sm:text-2xl md:text-3xl lg:max-w-xl">
                Work Abroad Using Your Language Skills
              </h2>
              <p className="mb-10 max-w-2xl text-pretty text-base leading-relaxed text-rj-muted sm:text-lg md:text-xl">
                Discover telecommunication jobs across Europe and beyond – relocation support included. Start your global
                adventure today.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href={RECRUITER_CONTACT_URL} target="_blank" rel="noopener noreferrer" className={recruiterPrimaryCtaClass}>
                  Speak to a Recruiter
                </a>
                <span className="lj-handwritten-stamp ml-1 text-lg text-rj-secondary sm:text-xl">Pack your bags!</span>
              </div>
            </div>

            <div className="min-w-0 flex-1 lg:pl-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 lg:gap-4 xl:gap-5">
                {HERO_QUICK_BENEFITS.map((b) => {
                  const Icon = HERO_BENEFIT_ICONS[b.iconKey];
                  return (
                    <div
                      key={b.label}
                      className="group relative flex min-h-[168px] flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-rj-surface-high/80 via-rj-elevated/45 to-rj-surface-low/40 p-6 text-center shadow-[0_8px_36px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-rj-secondary/45 hover:shadow-[0_20px_56px_rgba(0,0,0,0.4)] sm:min-h-[176px] sm:p-7 md:min-h-[188px] lg:min-h-[200px] lg:p-8"
                    >
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br from-rj-primary/25 via-rj-secondary/15 to-transparent ring-1 ring-white/15 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:ring-rj-secondary/35 sm:h-20 sm:w-20">
                        <Icon className="h-10 w-10 shrink-0 text-rj-secondary transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11" />
                      </div>
                      <span className="max-w-[12rem] text-sm font-semibold leading-snug tracking-tight text-rj-fg sm:max-w-none sm:text-base md:text-[1.05rem]">
                        {b.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All language jobs — Teamtailor departments per language */}
      {!hideLanguageJobsSection ? (
        <LanguageJobsListingSection
          languageResults={languageJobResults}
          recruiterPrimaryCtaClass={recruiterPrimaryCtaClass}
          initialTab={initialLanguageTab}
        />
      ) : null}

      {/* Process */}
      <section className="relative overflow-hidden bg-rj-band py-24">
        <div
          className="lj-blurred-orb absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rj-secondary/10"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
          <h2 className="font-rj-headline mb-16 text-center text-4xl font-extrabold text-rj-fg">Simple 3-Step Process</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="group text-center">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-rj-primary text-3xl font-bold text-rj-on-primary shadow-[0_12px_32px_rgba(253,187,55,0.2)] transition-transform group-hover:scale-105">
                  {s.step}
                </div>
                <h3 className="mb-4 text-xl font-bold text-rj-fg">{s.title}</h3>
                <p className="text-rj-muted">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center border-t border-white/10 pt-12 text-center">
            <p className="mb-4 max-w-md text-pretty text-rj-muted">
              Questions about relocation, timelines, or what happens next? Our recruiters can walk you through it.
            </p>
            <a href={RECRUITER_CONTACT_URL} target="_blank" rel="noopener noreferrer" className={recruiterPrimaryCtaClass}>
              Speak to a Recruiter
            </a>
          </div>
        </div>
      </section>

      {/* Success stories — marquee (right to left, infinite) */}
      <section className="bg-gradient-to-b from-rj-bg to-rj-surface-low/80 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-rj-headline mb-4 text-4xl font-extrabold text-rj-fg">Success Stories</h2>
          <div className="lj-handwritten-stamp text-xl text-rj-secondary">Real journeys, real people</div>
        </div>

        <div className="hidden grid-cols-1 gap-6 motion-reduce:grid md:grid-cols-2 lg:grid-cols-3">
          {SUCCESS_STORIES_SCROLL.map((t) => (
            <SuccessStoryCard key={t.id} t={t} className="!w-full min-w-0 sm:!w-full" />
          ))}
        </div>

        <div className="lj-success-marquee motion-reduce:hidden -mx-6 max-w-[100vw] md:mx-0 md:max-w-none">
          <div className="rj-testimonials-marquee__viewport">
            <div className="rj-testimonials-marquee__track">
              {testimonialLoop.map((t, i) => (
                <SuccessStoryCard key={`${t.id}-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <LanguageJobsFAQ recruiterPrimaryCtaClass={recruiterPrimaryCtaClass} />

      {/* Final CTA */}
      <section className="mb-12 px-6 md:px-12 lg:px-20">
        <div
          className={`relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-rj-surface-high p-12 text-center md:p-24`}
        >
          <div
            className="lj-blurred-orb absolute -left-10 -top-10 h-64 w-64 rounded-full bg-rj-primary/10"
            aria-hidden
          />
          <div className="relative z-10">
            <h2 className="font-rj-headline mb-8 text-4xl font-extrabold leading-tight text-rj-fg md:text-6xl">
              Start your journey abroad today
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a href={RECRUITER_CONTACT_URL} target="_blank" rel="noopener noreferrer" className={recruiterPrimaryCtaClass}>
                Speak to a Recruiter
              </a>
              <Link
                href="/remote-jobs"
                className="rounded-full border border-rj-secondary/35 px-10 py-4 text-lg font-bold text-rj-secondary transition-colors hover:bg-rj-secondary/10 hover:text-rj-fg"
              >
                Browse Jobs
              </Link>
            </div>
            <div className="lj-handwritten-stamp mt-12 text-lg text-rj-muted">Your adventure awaits!</div>
          </div>
        </div>
      </section>
    </main>
  );
}
