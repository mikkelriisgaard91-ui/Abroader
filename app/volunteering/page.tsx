import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { fetchVolunteerDepartmentJobs } from "@/lib/remote-jobs/teamtailor-featured";
import { RECRUITER_CONTACT_URL } from "../language-jobs/content";
import { VolunteeringAbroadersOpinionSection, VolunteeringImpactSection } from "./volunteering-story-sections";
import { VolunteeringJobsCatalog } from "./volunteering-jobs-catalog";

const recruiterPrimaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-rj-primary px-8 py-4 text-base font-bold text-rj-on-primary shadow-[0_4px_20px_rgba(252,186,54,0.35)] transition-all hover:brightness-105 active:scale-[0.98] sm:px-10 sm:text-lg";

const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 sm:px-10 sm:text-lg";

const sectionPad = "px-6 py-16 md:px-12 md:py-20 lg:px-16";

/**
 * Volunteer travel — group in front of an adventure van (road trip / journey abroad).
 * Unsplash: Derrick Pare — images.unsplash.com allowed in next.config.ts
 */
const VOLUNTEER_HERO_IMAGE =
  "https://images.unsplash.com/photo-1761986758241-77549539536a?auto=format&fit=crop&w=3840&q=95";

function CatalogFallback() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/80 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 h-10 max-w-md animate-pulse rounded-lg bg-slate-200/80" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-80 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function VolunteeringPage() {
  const volunteerResult = await fetchVolunteerDepartmentJobs();

  return (
    <main className="overflow-x-hidden bg-white pb-16 font-rj-body text-slate-800 antialiased selection:bg-amber-200/80 selection:text-slate-900">
      <section className={`${sectionPad} border-b border-slate-100 bg-white pt-12 lg:pt-16`}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-1.5 text-amber-900/90 shadow-sm">
              <span className="text-lg leading-none" aria-hidden>
                🌍
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide">Make an impact</span>
            </div>
            <h1 className="font-rj-headline mb-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Volunteer jobs <span className="text-amber-600">abroad</span>
            </h1>
            <p className="mb-8 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
              Explore a catalogue of placements from our network. Narrow by region and the kind of volunteering you want
              — conservation, community, education, and more.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#volunteer-jobs" className={recruiterPrimaryCtaClass}>
                Browse roles
              </a>
              <a href={RECRUITER_CONTACT_URL} target="_blank" rel="noopener noreferrer" className={secondaryCtaClass}>
                Speak to a recruiter
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl ring-1 ring-slate-200/80">
              <Image
                src={VOLUNTEER_HERO_IMAGE}
                alt="Travellers grouped in front of a green adventure van — volunteer travel and journeys abroad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                className="object-cover object-[50%_12%] sm:object-[50%_13%] md:object-[50%_14%]"
              />
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<CatalogFallback />}>
        <VolunteeringJobsCatalog
          result={volunteerResult}
          recruiterPrimaryCtaClass={recruiterPrimaryCtaClass}
          recruiterContactUrl={RECRUITER_CONTACT_URL}
          cardVariant="light"
        />
      </Suspense>

      <VolunteeringImpactSection recruiterUrl={RECRUITER_CONTACT_URL} ctaClassName={recruiterPrimaryCtaClass} />

      <VolunteeringAbroadersOpinionSection />

      <section className={`${sectionPad} border-t border-slate-100 bg-slate-50/80`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-slate-600">
            Looking for paid work abroad? Explore our other verticals — remote, language, and seasonal roles.
          </p>
          <Link
            href="/remote-jobs"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            Browse all jobs
          </Link>
        </div>
      </section>
    </main>
  );
}
