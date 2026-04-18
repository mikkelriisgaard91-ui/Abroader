import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JobDescription } from "@/app/remote-jobs/job/[id]/job-description";
import {
  fetchAllLanguageDepartmentJobs,
  fetchTeamtailorJobById,
  pickPeerLanguageJob,
  LANGUAGE_JOB_TAB_ORDER,
  type FeaturedJobDetailDto,
} from "@/lib/remote-jobs/teamtailor-featured";
import {
  LanguageJobCountryInsights,
  LanguageJobCountryMetricsSidebar,
} from "./language-job-country-insights";
import { LanguageJobRecruitmentSteps } from "./language-job-recruitment-steps";
import { LanguageJobPromo } from "./language-job-promo";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const job = await fetchTeamtailorJobById(id);
  if (!job) {
    return { title: "Job not found — Abroader" };
  }
  const raw = job.descriptionPlain?.trim() ?? "";
  const desc =
    raw.length > 0
      ? raw.length <= 160
        ? raw
        : `${raw.slice(0, 157).trimEnd()}…`
      : `${job.title} — ${job.employmentTypeLabel} in ${job.locationLabel}. Apply via Teamtailor on Abroader.`;
  return {
    title: `${job.title} — Language jobs | Abroader`,
    description: desc,
  };
}

export default async function LanguageJobDetailPage({ params }: PageProps) {
  const { id } = await params;
  const recruiterId = process.env.TEAMTAILOR_LANDING_INTERNATIONAL_RECRUITER_JOB_ID?.trim();

  const [rawJob, recruiterJob, allByTab] = await Promise.all([
    fetchTeamtailorJobById(id),
    recruiterId ? fetchTeamtailorJobById(recruiterId) : Promise.resolve(null),
    fetchAllLanguageDepartmentJobs(),
  ]);

  let job: FeaturedJobDetailDto | null = rawJob;
  if (!job) {
    for (const tab of LANGUAGE_JOB_TAB_ORDER) {
      const r = allByTab[tab];
      if (r.ok) {
        const found = r.jobs.find((j) => j.id === id);
        if (found) { job = found; break; }
      }
    }
  }

  if (!job) notFound();

  const { tab: peerTab, peer: peerJob } = pickPeerLanguageJob(id, allByTab, recruiterJob?.id);

  return (
    <main className="lj-page rj-page overflow-x-hidden pb-12">
      <article className="rj-section rj-detail">
        <div className="rj-section__inner rj-detail__layout">
          <div className="rj-detail__main">
            <nav className="rj-detail__nav" aria-label="Breadcrumb">
              <Link href="/language-jobs" className="rj-detail__back">
                ← Back to language jobs
              </Link>
            </nav>

            {job.pictureUrl ? (
              <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-rj-elevated shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                {/* eslint-disable-next-line @next/next/no-img-element -- Teamtailor careersite URLs */}
                <img
                  src={job.pictureUrl}
                  alt=""
                  className="max-h-[min(22rem,50vh)] w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rj-bg/90 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            ) : (
              <div
                className="relative mb-8 flex max-h-[min(22rem,50vh)] min-h-[12rem] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-rj-elevated to-rj-surface-high shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
                aria-hidden
              >
                <span className="text-7xl text-rj-secondary/50 md:text-8xl">😊</span>
              </div>
            )}

            <header className="rj-detail__header">
              <span className="rj-detail__source" title="Careersite">
                Teamtailor
              </span>
              <h1 className="rj-detail__title">{job.title}</h1>
              <p className="rj-detail__company">Abroader</p>
            </header>

            <dl className="rj-detail__meta">
              <div>
                <dt>Location</dt>
                <dd>📍 {job.locationLabel}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{job.employmentTypeLabel}</dd>
              </div>
            </dl>

            {job.descriptionPlain ? (
              <section className="rj-detail__body" aria-labelledby="lj-job-desc-heading">
                <h2 id="lj-job-desc-heading" className="rj-detail__h2">
                  About this role
                </h2>
                <div className="rj-detail__prose">
                  <JobDescription text={job.descriptionPlain} />
                </div>
              </section>
            ) : (
              <section className="rj-detail__body" aria-labelledby="lj-job-desc-heading">
                <h2 id="lj-job-desc-heading" className="rj-detail__h2">
                  About this role
                </h2>
                <p className="rj-detail__fallback">
                  Full posting details open when you apply — you&apos;ll continue to Teamtailor in a new tab.
                </p>
              </section>
            )}

            <LanguageJobCountryInsights locationLabel={job.locationLabel} />

            <LanguageJobRecruitmentSteps />

            <div className="rj-detail__actions">
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rj-btn rj-btn--primary"
              >
                Apply on Teamtailor →
              </a>
              <Link href="/language-jobs" className="rj-btn rj-btn--ghost">
                More language jobs
              </Link>
            </div>

            <p className="rj-detail__legal">
              Listing provided by Teamtailor. Abroader connects you to this role; apply through the official
              careersite.
            </p>
          </div>

          <aside className="rj-detail__aside lj-job-detail-sidebar" aria-label="Featured opportunities and location snapshot">
            <LanguageJobPromo recruiterJob={recruiterJob} peerJob={peerJob} peerTab={peerTab} />
            <LanguageJobCountryMetricsSidebar locationLabel={job.locationLabel} />
          </aside>
        </div>
      </article>
    </main>
  );
}
