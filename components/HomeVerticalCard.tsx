"use client";

import Link from "next/link";
import { useState } from "react";
import type { Vertical } from "@/lib/verticals";

export default function HomeVerticalCard({ v }: { v: Vertical }) {
  const [hover, setHover] = useState(false);

  return (
    <Link href={v.href} style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: v.light,
          borderRadius: "16px",
          padding: "2rem",
          borderTop: `4px solid ${v.accent}`,
          cursor: "pointer",
          height: "100%",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          transform: hover ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hover ? "0 8px 24px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div
          aria-hidden
          style={{
            width: "3rem",
            height: "3rem",
            marginBottom: "1rem",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.35rem",
            backgroundColor: "#fff",
            border: `2px solid ${v.accent}`,
          }}
        >
          {v.emoji}
        </div>
        <h3
          style={{
            color: v.accent,
            fontSize: "1.2rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          {v.title}
        </h3>
        <p style={{ color: "#444444", fontSize: "0.95rem", lineHeight: 1.6 }}>{v.description}</p>
        <div
          style={{
            marginTop: "1.5rem",
            color: v.accent,
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          Browse {v.title} →
        </div>
      </div>
    </Link>
  );
}
