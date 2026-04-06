"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  allGuides,
  guideHasDigitalNomadVisa,
  type CountryGuide,
} from "@/lib/guides";

type PillId = "all" | "easy" | "dnv" | "lowcost" | "net";

const teal = "#246374";
const gold = "#fcba36";
const snow = "#fafafa";
const tealLight = "#e8f4f7";

function matchesPill(g: CountryGuide, pill: PillId): boolean {
  if (pill === "all") return true;
  if (pill === "easy") return g.visaDifficulty === "Easy";
  if (pill === "dnv") return guideHasDigitalNomadVisa(g);
  if (pill === "lowcost") return g.costOfLiving === "Low";
  if (pill === "net") return g.internetSpeed === "Excellent";
  return true;
}

export default function GuidesIndexPage() {
  const [q, setQ] = useState("");
  const [pill, setPill] = useState<PillId>("all");
  const [cols, setCols] = useState("repeat(2, minmax(0, 1fr))");

  useEffect(() => {
    const mqTablet = window.matchMedia("(min-width: 640px)");
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      if (mqDesktop.matches) setCols("repeat(4, minmax(0, 1fr))");
      else if (mqTablet.matches) setCols("repeat(3, minmax(0, 1fr))");
      else setCols("repeat(2, minmax(0, 1fr))");
    };
    apply();
    mqTablet.addEventListener("change", apply);
    mqDesktop.addEventListener("change", apply);
    return () => {
      mqTablet.removeEventListener("change", apply);
      mqDesktop.removeEventListener("change", apply);
    };
  }, []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return allGuides.filter((g) => {
      if (!matchesPill(g, pill)) return false;
      if (!needle) return true;
      return (
        g.country.toLowerCase().includes(needle) ||
        g.capital.toLowerCase().includes(needle)
      );
    });
  }, [q, pill]);

  const pills: { id: PillId; label: string }[] = [
    { id: "all", label: "All" },
    { id: "easy", label: "Easy Visa" },
    { id: "dnv", label: "Digital Nomad Visa" },
    { id: "lowcost", label: "Low Cost" },
    { id: "net", label: "High Internet" },
  ];

  return (
    <main style={{ flex: 1, width: "100%", minHeight: "100%" }}>
      <section
        style={{
          backgroundColor: teal,
          padding: "3.5rem 1.25rem 3rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: gold,
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            margin: "0 0 0.75rem",
            lineHeight: 1.2,
          }}
        >
          European Country Guides for Remote Workers
        </h1>
        <p
          style={{
            color: "#ffffff",
            fontSize: "1.1rem",
            maxWidth: "560px",
            margin: "0 auto 1.75rem",
            lineHeight: 1.65,
          }}
        >
          Everything you need to know about working and living abroad in Europe
        </p>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by country or capital…"
          aria-label="Search guides"
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "0.85rem 1.1rem",
            borderRadius: "999px",
            border: "2px solid rgba(252,186,54,0.35)",
            fontSize: "1rem",
            outline: "none",
            backgroundColor: snow,
            color: "#171717",
          }}
        />
      </section>

      <section
        style={{
          backgroundColor: tealLight,
          padding: "1rem 1.25rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pills.map((p) => {
          const active = pill === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setPill(p.id)}
              style={{
                cursor: "pointer",
                border: active ? `2px solid ${gold}` : "2px solid rgba(36,99,116,0.25)",
                backgroundColor: active ? gold : "#ffffff",
                color: active ? "#2a1f0a" : teal,
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.45rem 1rem",
                borderRadius: "999px",
              }}
            >
              {p.label}
            </button>
          );
        })}
      </section>

      <section style={{ padding: "2rem 1.25rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ color: "#555", fontSize: "0.95rem", marginBottom: "1.25rem", textAlign: "center" }}>
          Showing {filtered.length} of {allGuides.length} guides
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: cols,
            gap: "1.25rem",
          }}
        >
          {filtered.map((g) => (
            <GuideCard key={g.slug} g={g} />
          ))}
        </div>
        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666", marginTop: "2rem" }}>
            No guides match your filters. Try clearing search or switching filters.
          </p>
        ) : null}
      </section>
    </main>
  );
}

function GuideCard({ g }: { g: CountryGuide }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={`/guides/${g.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <article
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "1.35rem 1.15rem",
          borderTop: hover ? `4px solid ${gold}` : "4px solid transparent",
          boxShadow: hover
            ? "0 12px 32px rgba(36,99,116,0.14)"
            : "0 4px 18px rgba(0,0,0,0.06)",
          transform: hover ? "translateY(-6px)" : "translateY(0)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(36,99,116,0.08)",
        }}
      >
        <div style={{ fontSize: "3rem", lineHeight: 1, marginBottom: "0.5rem" }} aria-hidden>
          {g.flag}
        </div>
        <h2
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: teal,
            fontSize: "1.25rem",
            fontWeight: 700,
            margin: "0 0 0.35rem",
          }}
        >
          {g.country}
        </h2>
        <p style={{ color: "#666", fontSize: "0.95rem", margin: "0 0 0.85rem" }}>{g.capital}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
          <StatPill label={g.costOfLiving} />
          <StatPill label={g.visaDifficulty} />
          <StatPill label={g.internetSpeed} />
        </div>
        <span
          style={{
            marginTop: "auto",
            color: gold,
            fontWeight: 700,
            fontSize: "0.95rem",
          }}
        >
          Read Guide →
        </span>
      </article>
    </Link>
  );
}

function StatPill({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: "0.72rem",
        fontWeight: 600,
        padding: "0.25rem 0.5rem",
        borderRadius: "999px",
        backgroundColor: tealLight,
        color: teal,
        border: "1px solid rgba(36,99,116,0.15)",
      }}
    >
      {label}
    </span>
  );
}
