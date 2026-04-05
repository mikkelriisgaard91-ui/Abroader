import type { FeaturedJobDto } from "@/lib/remote-jobs/teamtailor-featured";

type Props = {
  jobs: FeaturedJobDto[];
};

export function FeaturedTeamtailorSidebar({ jobs }: Props) {
  if (jobs.length === 0) return null;

  return (
    <aside className="rj-detail__aside" aria-labelledby="rj-detail-featured-heading">
      <h2 id="rj-detail-featured-heading" className="rj-detail__aside-title">
        Featured remote roles
      </h2>
      <p className="rj-detail__aside-lede">Hand-picked English listings from our Teamtailor careersite.</p>
      <ul className="rj-detail__featured-list">
        {jobs.map((job) => (
          <li key={job.id}>
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rj-detail__featured-card"
            >
              <div className="rj-detail__featured-card-media">
                {job.pictureUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element -- external Teamtailor URLs
                  <img src={job.pictureUrl} alt="" className="rj-detail__featured-card-img" />
                ) : (
                  <div className="rj-detail__featured-card-placeholder" aria-hidden>
                    ✦
                  </div>
                )}
              </div>
              <div className="rj-detail__featured-card-body">
                <span className="rj-detail__featured-card-eyebrow">{job.employmentTypeLabel}</span>
                <span className="rj-detail__featured-card-title">{job.title}</span>
                <span className="rj-detail__featured-card-meta">📍 {job.locationLabel}</span>
                <span className="rj-detail__featured-card-cta">
                  View role <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
