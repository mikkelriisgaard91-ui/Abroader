import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Abroader",
  description: "The page you were looking for doesn't exist.",
};

const links = [
  { href: "/work", label: "Work Abroad" },
  { href: "/remote-living", label: "Living Abroad" },
  { href: "/retreats", label: "Retreats" },
  { href: "/guides", label: "Country Guides" },
];

export default function NotFound() {
  return (
    <main
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
        backgroundColor: "var(--snow)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <p
        style={{
          fontSize: "5rem",
          fontWeight: 800,
          color: "var(--teal)",
          lineHeight: 1,
          marginBottom: "1rem",
          letterSpacing: "-0.04em",
          opacity: 0.18,
        }}
      >
        404
      </p>

      <h1
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
          fontWeight: 700,
          color: "#1a333a",
          marginBottom: "0.75rem",
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.02em",
        }}
      >
        Page not found
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          color: "#5a6d73",
          maxWidth: "420px",
          lineHeight: 1.65,
          marginBottom: "2.5rem",
        }}
      >
        The page you were looking for doesn&apos;t exist or may have moved.
        Here are some places to get started.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.65rem",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.55rem 1.1rem",
              borderRadius: "999px",
              border: "1.5px solid rgba(36,99,116,0.28)",
              backgroundColor: "rgba(255,255,255,0.9)",
              color: "var(--teal)",
              fontSize: "0.9rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "0.7rem 1.8rem",
          borderRadius: "999px",
          backgroundColor: "var(--teal)",
          color: "#fff",
          fontSize: "0.95rem",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
