"use client";

import { useEffect, useState } from "react";

const gold = "#fcba36";
const teal = "#246374";

export type TocItem = { id: string; label: string };

export function GuideTOC({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;

    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((n): n is HTMLElement => Boolean(n));

    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const linkStyle = (id: string) => ({
    display: "block",
    padding: "0.45rem 0.65rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: active === id ? "#2a1f0a" : teal,
    backgroundColor: active === id ? gold : "transparent",
    border: active === id ? `1px solid ${gold}` : "1px solid transparent",
    cursor: "pointer",
    transition: "background-color 0.15s, color 0.15s",
  });

  return (
    <div className="guide-toc-wrap" style={{ flexShrink: 0 }}>
      <style>{`
        @media (min-width: 901px) {
          .guide-toc-wrap { width: 200px; }
          .guide-toc-desktop { display: block; }
          .guide-toc-mobile { display: none; }
        }
        @media (max-width: 900px) {
          .guide-toc-wrap { width: 100%; }
          .guide-toc-desktop { display: none; }
          .guide-toc-mobile { display: block; }
        }
      `}</style>

      <nav
        className="guide-toc-desktop"
        aria-label="Table of contents"
        style={{
          position: "sticky",
          top: "2rem",
          alignSelf: "flex-start",
        }}
      >
        <p
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 700,
            color: teal,
            fontSize: "0.95rem",
            margin: "0 0 0.65rem",
          }}
        >
          On this page
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                style={linkStyle(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="guide-toc-mobile"
        aria-label="Table of contents"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backgroundColor: "#ffffff",
          padding: "0.65rem 0",
          marginBottom: "0.5rem",
          borderBottom: "1px solid rgba(36,99,116,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "0.15rem",
            scrollbarWidth: "thin",
          }}
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
              }}
              style={{
                flex: "0 0 auto",
                padding: "0.45rem 0.85rem",
                borderRadius: "999px",
                fontSize: "0.82rem",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
                color: active === item.id ? "#2a1f0a" : teal,
                backgroundColor: active === item.id ? gold : "#e8f4f7",
                border: `1px solid ${active === item.id ? gold : "rgba(36,99,116,0.15)"}`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
