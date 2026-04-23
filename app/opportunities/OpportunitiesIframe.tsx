"use client";

import { useRef } from "react";

export default function OpportunitiesIframe() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function handleLoad() {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const resize = () => {
      try {
        const doc = iframe.contentDocument ?? iframe.contentWindow?.document;
        const h = doc?.documentElement?.scrollHeight;
        if (h && h > 300) {
          iframe.style.height = h + "px";
        }
      } catch {
        // same-origin should never throw; leave the safe fallback height
      }
    };

    // Try immediately, then again after fonts/images have settled
    resize();
    setTimeout(resize, 300);
  }

  return (
    <main
      style={{
        width: "100%",
        /* Matches the iframe body background so any extra height is invisible */
        backgroundColor: "#f0f8fa",
      }}
    >
      <iframe
        ref={iframeRef}
        title="Top 50 Trending Abroad Opportunities for Content and Guides"
        src="/abroader-top50-opportunities.html"
        style={{
          width: "100%",
          /* Generous safe height covers all 50 cards before onLoad fires */
          height: "4500px",
          border: 0,
          display: "block",
        }}
        onLoad={handleLoad}
      />
    </main>
  );
}
