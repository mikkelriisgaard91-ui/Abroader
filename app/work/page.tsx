import Link from "next/link";
import type { Metadata } from "next";
import { getFindWorkGroup, groupChildren } from "@/lib/nav-structure";

export const metadata: Metadata = {
  title: "Find work abroad — Abroader",
  description:
    "Browse remote, language, seasonal, and work-for-accommodation opportunities abroad — all in one place.",
};

export default function WorkHubPage() {
  const items = groupChildren(getFindWorkGroup());

  return (
    <main
      style={{
        backgroundColor: "var(--snow)",
        flex: 1,
        width: "100%",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          backgroundColor: "#246374",
          padding: "3.5rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#fcba36",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            marginBottom: "0.75rem",
            fontFamily: "Georgia, serif",
          }}
        >
          Find work abroad
        </h1>
        <p
          style={{
            color: "#ffffff",
            fontSize: "1.05rem",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.65,
          }}
        >
          Choose how you want to work — remote from anywhere, language roles, seasonal hospitality, or work in
          exchange for accommodation.
        </p>
      </section>

      <section style={{ padding: "3rem 1.5rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {items.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              style={{
                display: "block",
                padding: "1.5rem 1.35rem",
                borderRadius: "16px",
                textDecoration: "none",
                color: "#2d4a52",
                backgroundColor: "#fff",
                border: "1px solid rgba(36, 99, 116, 0.12)",
                boxShadow: "0 8px 28px rgba(36, 99, 116, 0.08)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
            >
              <h2
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#246374",
                  marginBottom: "0.5rem",
                }}
              >
                {v.title}
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.55, margin: 0, color: "#4a5c60" }}>{v.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
