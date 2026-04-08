"use client";

import Link from "next/link";
import { useState } from "react";
import type { Vertical } from "@/lib/verticals";

export default function HomeVerticalCard({ v }: { v: Vertical }) {
  const [hover, setHover] = useState(false);

  return (
    <Link href={v.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "1.75rem",
          cursor: "pointer",
          height: "100%",
          boxSizing: "border-box",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          transform: hover ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hover
            ? `0 20px 48px rgba(0,0,0,0.1), 0 0 0 1px ${v.accent}40`
            : "0 1px 3px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
            background: v.light,
            marginBottom: "1.25rem",
          }}
        >
          {v.emoji}
        </div>

        <h3
          style={{
            color: "#0d1117",
            fontSize: "1rem",
            fontWeight: 700,
            margin: "0 0 0.45rem",
            letterSpacing: "-0.01em",
          }}
        >
          {v.title}
        </h3>

        <p
          style={{
            color: "#999",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            margin: "0 0 1.5rem",
          }}
        >
          {v.description}
        </p>

        {/* Pill CTA */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.25rem",
            color: v.accent,
            fontWeight: 600,
            fontSize: "0.82rem",
            background: v.light,
            padding: "0.35rem 0.9rem",
            borderRadius: "999px",
          }}
        >
          Explore →
        </div>
      </div>
    </Link>
  );
}
