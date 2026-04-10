"use client";

import { useEffect, useRef, useState } from "react";
import { GET_CONTACTED_URL } from "@/lib/employers";

export default function EmployersStickyBar() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel placed at the bottom of the hero — when it leaves the viewport the bar appears */}
      <div ref={sentinelRef} aria-hidden />

      <div
        className={`employers-sticky-bar${visible ? " employers-sticky-bar--visible" : ""}`}
        aria-hidden={!visible}
      >
        <div className="employers-sticky-bar__inner">
          <p className="employers-sticky-bar__text">
            Ready to hire internationally?
          </p>
          <a
            href={GET_CONTACTED_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="employers-sticky-bar__cta"
            tabIndex={visible ? 0 : -1}
          >
            Get contacted
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
