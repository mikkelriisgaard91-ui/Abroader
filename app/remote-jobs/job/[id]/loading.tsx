export default function RemoteJobLoading() {
  return (
    <main className="rj-page">
      <div className="rj-mesh" aria-hidden>
        <div className="rj-mesh__orb rj-mesh__orb--a" />
        <div className="rj-mesh__orb rj-mesh__orb--b" />
        <div className="rj-mesh__orb rj-mesh__orb--c" />
      </div>
      <div className="rj-section rj-detail">
        <div className="rj-section__inner rj-section__inner--narrow">
          <div className="rj-detail__nav">
            <div className="rj-skel-pulse rj-detail__skel-back" />
          </div>
          <header className="rj-detail__header">
            <div className="rj-skel-pulse rj-detail__skel-pill" />
            <div className="rj-skel-pulse rj-detail__skel-title" />
            <div className="rj-skel-pulse rj-detail__skel-sub" />
          </header>
          <div className="rj-detail__meta rj-detail__meta--loading">
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <div className="rj-skel-pulse rj-detail__skel-dt" />
                <div className="rj-skel-pulse rj-detail__skel-dd" />
              </div>
            ))}
          </div>
          <div className="rj-detail__actions">
            <div className="rj-skel-pulse rj-detail__skel-btn" />
            <div className="rj-skel-pulse rj-detail__skel-btn-ghost" />
          </div>
          <div className="rj-detail__prose rj-detail__prose--loading">
            <div className="rj-skel-pulse rj-detail__skel-h2" />
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="rj-skel-pulse rj-detail__skel-line" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
