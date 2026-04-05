import Link from "next/link";

export default function RemoteJobNotFound() {
  return (
    <main className="rj-page">
      <div className="rj-mesh" aria-hidden>
        <div className="rj-mesh__orb rj-mesh__orb--a" />
        <div className="rj-mesh__orb rj-mesh__orb--b" />
        <div className="rj-mesh__orb rj-mesh__orb--c" />
      </div>
      <section className="rj-section rj-detail">
        <div className="rj-section__inner rj-section__inner--narrow">
          <h1 className="rj-detail__title">This listing isn&apos;t available</h1>
          <p className="rj-detail__fallback">
            It may have been filled or removed from the job boards we sync. Try browsing current
            openings.
          </p>
          <Link href="/remote-jobs#jobs" className="rj-btn rj-btn--primary">
            Back to remote jobs
          </Link>
        </div>
      </section>
    </main>
  );
}
