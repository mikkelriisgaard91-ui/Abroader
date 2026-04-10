import Image from "next/image";
import Link from "next/link";

import { RECRUITER_CONTACT_URL } from "../../content";
import { TARIFA_EXTENDED } from "@/lib/coliving/extended/tarifa";
import type { FeaturedJobDto } from "@/lib/remote-jobs/teamtailor-featured";
import { LANGUAGE_JOB_TAB_LABELS, type LanguageJobTabId } from "@/lib/remote-jobs/language-job-tabs";

type Props = {
  recruiterJob: FeaturedJobDto | null;
  peerJob: FeaturedJobDto | null;
  peerTab: LanguageJobTabId | null;
};

function SpotlightJobCard({
  badge,
  title,
  meta,
  eyebrow,
  href,
  external,
  cta,
}: {
  badge: string;
  title: string;
  meta: string;
  eyebrow: string;
  href: string;
  external?: boolean;
  cta: string;
}) {
  const inner = (
    <>
      <span className="lj-spotlight-badge">{badge}</span>
      <span className="lj-spotlight-eyebrow">{eyebrow}</span>
      <span className="lj-spotlight-title">{title}</span>
      <span className="lj-spotlight-meta">{meta}</span>
      <span className="lj-spotlight-cta">
        {cta} <span aria-hidden>→</span>
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="lj-spotlight-card lj-spotlight-card--job"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="lj-spotlight-card lj-spotlight-card--job">
      {inner}
    </Link>
  );
}

export function LanguageJobPromo({ recruiterJob, peerJob, peerTab }: Props) {
  const tarifaHero = TARIFA_EXTENDED.gallery[0];
  const tabLabel = peerTab ? LANGUAGE_JOB_TAB_LABELS[peerTab] : null;
  const browseHref = peerTab ? `/language-jobs?tab=${peerTab}` : "/language-jobs";

  return (
    <div className="lj-job-promo-region" aria-labelledby="lj-job-promo-heading">
      <h2 id="lj-job-promo-heading" className="rj-detail__aside-title">
        Featured opportunities
      </h2>
      <p className="rj-detail__aside-lede">
        Roles and stays we highlight for Abroader candidates — including our international recruiter opening, more in
        your language track, and co-living in Spain.
      </p>
      <ul className="lj-spotlight-stack">
        <li>
          {recruiterJob ? (
            <SpotlightJobCard
              badge="Hiring at Abroader"
              eyebrow={recruiterJob.employmentTypeLabel}
              title={recruiterJob.title}
              meta={`📍 ${recruiterJob.locationLabel}`}
              href={recruiterJob.applyUrl}
              external
              cta="Apply on Teamtailor"
            />
          ) : (
            <a
              href={RECRUITER_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lj-spotlight-card lj-spotlight-card--job"
            >
              <span className="lj-spotlight-badge">Hiring at Abroader</span>
              <span className="lj-spotlight-eyebrow">International recruiter</span>
              <span className="lj-spotlight-title">Speak with our team about your next role abroad</span>
              <span className="lj-spotlight-meta">Careersite · Relocation &amp; language roles</span>
              <span className="lj-spotlight-cta">
                Get in touch <span aria-hidden>→</span>
              </span>
            </a>
          )}
        </li>
        <li>
          {peerJob ? (
            <SpotlightJobCard
              badge={tabLabel ? `More ${tabLabel} roles` : "More in this track"}
              eyebrow={peerJob.employmentTypeLabel}
              title={peerJob.title}
              meta={`📍 ${peerJob.locationLabel}`}
              href={`/language-jobs/job/${peerJob.id}`}
              cta="View role on Abroader"
            />
          ) : (
            <Link href={browseHref} className="lj-spotlight-card lj-spotlight-card--job">
              <span className="lj-spotlight-badge">{tabLabel ? `${tabLabel} jobs` : "Language jobs"}</span>
              <span className="lj-spotlight-eyebrow">Same category</span>
              <span className="lj-spotlight-title">
                {tabLabel
                  ? `Browse more ${tabLabel.toLowerCase()}-speaking roles`
                  : "Browse open language roles across all tracks"}
              </span>
              <span className="lj-spotlight-meta">Listings from our Teamtailor careersite</span>
              <span className="lj-spotlight-cta">
                Open job board <span aria-hidden>→</span>
              </span>
            </Link>
          )}
        </li>
        <li>
          <Link href="/co-living/tarifa" className="lj-spotlight-card lj-spotlight-card--coliving">
            <div className="lj-spotlight-coliving-media">
              <Image
                src={tarifaHero.src}
                alt={tarifaHero.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
              />
              <span className="lj-spotlight-coliving-scrim" aria-hidden />
            </div>
            <div className="lj-spotlight-coliving-body">
              <span className="lj-spotlight-badge lj-spotlight-badge--on-dark">Co-living</span>
              <span className="lj-spotlight-title lj-spotlight-title--on-dark">Coliving Tarifa — Spain</span>
              <span className="lj-spotlight-meta lj-spotlight-meta--on-dark">
                Mindful community by the sea — coworking, fibre, and a long season in Andalusia.
              </span>
              <span className="lj-spotlight-cta lj-spotlight-cta--on-dark">
                View listing <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
