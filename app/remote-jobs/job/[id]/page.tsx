import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrowseJobById } from "@/lib/remote-jobs/browse-data";
import { fetchTeamtailorFeaturedJobs } from "@/lib/remote-jobs/teamtailor-featured";
import { FeaturedTeamtailorSidebar } from "./featured-teamtailor-sidebar";
import { JobDescription } from "./job-description";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ source?: string }>;
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const sp = searchParams ? await searchParams : {};
  const job = await getBrowseJobById(id, sp.source);
  if (!job) {
    return { title: "Listing not found — Abroader" };
  }
  const raw = job.descriptionPlain?.trim() ?? "";
  const desc =
    raw.length > 0
      ? raw.length <= 160
        ? raw
        : `${raw.slice(0, 157).trimEnd()}…`
      : `Remote role at ${job.companyName}. Apply via ${job.source} on Abroader.`;
  return {
    title: `${job.title} — ${job.companyName} | Abroader`,
    description: desc,
  };
}

export default async function RemoteJobDetailPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const sp = searchParams ? await searchParams : {};
  const job = await getBrowseJobById(id, sp.source);
  if (!job) notFound();

  const loc = (job.locationRestrictions ?? []).join(", ") || "Location flexible";

  const featuredResult = await fetchTeamtailorFeaturedJobs({ englishOnly: true, pageSize: 24 });
  const featuredSidebarJobs = featuredResult.ok ? featuredResult.jobs.slice(0, 5) : [];

  return (
    <main className="rj-page">
      <div className="rj-mesh" aria-hidden>
        <div className="rj-mesh__orb rj-mesh__orb--a" />
        <div className="rj-mesh__orb rj-mesh__orb--b" />
        <div className="rj-mesh__orb rj-mesh__orb--c" />
      </div>

      <article className="rj-section rj-detail">
        <div className="rj-section__inner rj-detail__layout">
          <div className="rj-detail__main">
          <nav className="rj-detail__nav" aria-label="Breadcrumb">
            <Link href="/remote-jobs#jobs" className="rj-detail__back">
              ← Back to remote jobs
            </Link>
          </nav>

          <header className="rj-detail__header">
            <span className="rj-detail__source" title="Job board">
              {job.source}
            </span>
            <h1 className="rj-detail__title">{job.title}</h1>
            <p className="rj-detail__company">{job.companyName}</p>
          </header>

          <dl className="rj-detail__meta">
            <div>
              <dt>Location</dt>
              <dd>📍 {loc}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{job.employmentType}</dd>
            </div>
            {job.salary ? (
              <div>
                <dt>Compensation</dt>
                <dd>{job.salary}</dd>
              </div>
            ) : null}
          </dl>

          <div className="rj-detail__actions">
            <a
              href={job.applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rj-btn rj-btn--primary"
            >
              Apply on {job.source} →
            </a>
            <Link href="/remote-jobs#jobs" className="rj-btn rj-btn--ghost">
              More jobs
            </Link>
          </div>

          {job.descriptionPlain ? (
            <section className="rj-detail__body" aria-labelledby="rj-detail-desc-heading">
              <h2 id="rj-detail-desc-heading" className="rj-detail__h2">
                About this role
              </h2>
              <div className="rj-detail__prose">
                <JobDescription text={job.descriptionPlain} />
              </div>
              <div className="rj-detail__actions rj-detail__actions--after-jd">
                <a
                  href={job.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rj-btn rj-btn--primary"
                >
                  Apply on {job.source} →
                </a>
                <Link href="/remote-jobs#jobs" className="rj-btn rj-btn--ghost">
                  More jobs
                </Link>
              </div>
            </section>
          ) : (
            <p className="rj-detail__fallback">
              Full posting details open when you apply — you&apos;ll continue to {job.source} in a new
              tab.
            </p>
          )}

          <p className="rj-detail__legal">
            Listing provided by {job.source}. Abroader does not employ the hiring company; apply
            through their official page.
          </p>
          </div>

          <FeaturedTeamtailorSidebar jobs={featuredSidebarJobs} />
        </div>
      </article>
    </main>
  );
}
