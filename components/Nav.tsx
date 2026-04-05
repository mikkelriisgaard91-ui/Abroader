"use client";

import Link from "next/link";
import { verticals } from "@/lib/verticals";

export default function Nav() {
  return (
    <nav
      style={{
        backgroundColor: "#246374",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.5rem",
        flexShrink: 0,
        gap: "1rem",
      }}
    >
      <Link
        href="/"
        style={{
          color: "#fcba36",
          fontFamily: "Georgia, serif",
          fontSize: "1.25rem",
          fontWeight: 700,
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        Abroader
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          flex: 1,
          minWidth: 0,
          justifyContent: "flex-end",
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {verticals.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            style={{
              color: "#ffffff",
              fontSize: "0.9rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {v.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
