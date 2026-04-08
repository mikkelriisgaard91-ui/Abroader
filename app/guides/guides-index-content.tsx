"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  allGuides,
  getHeroPills,
  guideHasDigitalNomadVisa,
  type CountryGuide,
} from "@/lib/guides";

type PillId = "all" | "easy" | "dnv" | "lowcost" | "net";
type RegionId =
  | "all"
  | "europe"
  | "asia"
  | "north-america"
  | "caribbean"
  | "south-america"
  | "oceania";

const teal = "#246374";
const gold = "#fcba36";
const snow = "#fafafa";
const tealLight = "#e8f4f7";

function isEuropeGuide(g: CountryGuide): boolean {
  return g.continent === "Europe" || g.continent.startsWith("Europe");
}

function isAsiaGuide(g: CountryGuide): boolean {
  return g.continent === "Asia";
}

function isNorthAmericaGuide(g: CountryGuide): boolean {
  return g.continent === "North America";
}

function isSouthAmericaGuide(g: CountryGuide): boolean {
  return g.continent === "South America";
}

function isCaribbeanGuide(g: CountryGuide): boolean {
  return g.continent === "Caribbean";
}

function isOceaniaGuide(g: CountryGuide): boolean {
  return g.continent === "Oceania";
}

function matchesPill(g: CountryGuide, pill: PillId): boolean {
  if (pill === "all") return true;
  if (pill === "easy") return g.visaDifficulty === "Easy";
  if (pill === "dnv") return guideHasDigitalNomadVisa(g);
  if (pill === "lowcost") return g.costOfLiving === "Low";
  if (pill === "net") return g.internetSpeed === "Excellent";
  return true;
}

function matchesSearch(g: CountryGuide, q: string): boolean {
  const needle = q.trim().toLowerCase();
  if (!needle) return true;
  return (
    g.country.toLowerCase().includes(needle) ||
    g.capital.toLowerCase().includes(needle) ||
    g.slug.toLowerCase().includes(needle)
  );
}

function applyFilters(guides: CountryGuide[], pill: PillId, q: string): CountryGuide[] {
  return guides.filter((g) => matchesPill(g, pill) && matchesSearch(g, q));
}

export default function GuidesIndexContent() {
  const [q, setQ] = useState("");
  const [pill, setPill] = useState<PillId>("all");
  const [region, setRegion] = useState<RegionId>("all");
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

  const europeGuides = useMemo(
    () => allGuides.filter(isEuropeGuide),
    []
  );
  const asiaGuides = useMemo(
    () => allGuides.filter(isAsiaGuide),
    []
  );
  const northAmericaGuides = useMemo(
    () => allGuides.filter(isNorthAmericaGuide),
    []
  );

  const southAmericaGuides = useMemo(
    () => allGuides.filter(isSouthAmericaGuide),
    []
  );

  const caribbeanGuides = useMemo(
    () => allGuides.filter(isCaribbeanGuide),
    []
  );

  const oceaniaGuides = useMemo(
    () => allGuides.filter(isOceaniaGuide),
    []
  );

  const europeFiltered = useMemo(
    () => applyFilters(europeGuides, pill, q),
    [europeGuides, pill, q]
  );
  const asiaFiltered = useMemo(
    () => applyFilters(asiaGuides, pill, q),
    [asiaGuides, pill, q]
  );
  const northAmericaFiltered = useMemo(
    () => applyFilters(northAmericaGuides, pill, q),
    [northAmericaGuides, pill, q]
  );

  const southAmericaFiltered = useMemo(
    () => applyFilters(southAmericaGuides, pill, q),
    [southAmericaGuides, pill, q]
  );

  const caribbeanFiltered = useMemo(
    () => applyFilters(caribbeanGuides, pill, q),
    [caribbeanGuides, pill, q]
  );

  const oceaniaFiltered = useMemo(
    () => applyFilters(oceaniaGuides, pill, q),
    [oceaniaGuides, pill, q]
  );

  const filtered = useMemo(() => {
    const base =
      region === "all"
        ? allGuides
        : region === "europe"
          ? europeGuides
          : region === "asia"
            ? asiaGuides
            : region === "north-america"
              ? northAmericaGuides
              : region === "caribbean"
                ? caribbeanGuides
                : region === "south-america"
                  ? southAmericaGuides
                  : oceaniaGuides;
    return applyFilters(base, pill, q);
  }, [
    region,
    europeGuides,
    asiaGuides,
    northAmericaGuides,
    caribbeanGuides,
    southAmericaGuides,
    oceaniaGuides,
    pill,
    q,
  ]);

  const pills: { id: PillId; label: string }[] = [
    { id: "all", label: "All" },
    { id: "easy", label: "Easy Visa" },
    { id: "dnv", label: "Digital Nomad Visa" },
    { id: "lowcost", label: "Low Cost" },
    { id: "net", label: "High Internet" },
  ];

  const regionPills: { id: RegionId; label: string }[] = [
    { id: "all", label: "All regions" },
    { id: "europe", label: "Europe" },
    { id: "asia", label: "Asia" },
    { id: "north-america", label: "North America" },
    { id: "caribbean", label: "Caribbean" },
    { id: "south-america", label: "South America" },
    { id: "oceania", label: "Oceania" },
  ];

  return (
    <main style={{ flex: 1, width: "100%", minHeight: "100%", position: "relative", zIndex: 1 }}>
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
          Country Guides for Remote Workers
        </h1>
        <p
          style={{
            color: "#ffffff",
            fontSize: "1.1rem",
            maxWidth: "620px",
            margin: "0 auto 1.75rem",
            lineHeight: 1.65,
          }}
        >
          In-depth guides for Europe, Asia, North America, the Caribbean, South America, and Oceania — visas,
          cost of living, cities, taxes, and community tips for digital nomads and expats.
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
          padding: "1rem 1.25rem 0.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {regionPills.map((r) => {
          const active = region === r.id;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setRegion(r.id)}
              style={{
                cursor: "pointer",
                border: active ? "2px solid " + gold : "2px solid rgba(36,99,116,0.25)",
                backgroundColor: active ? gold : "#ffffff",
                color: active ? "#2a1f0a" : teal,
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.45rem 1rem",
                borderRadius: "999px",
              }}
            >
              {r.label}
            </button>
          );
        })}
      </section>

      <section
        style={{
          backgroundColor: tealLight,
          padding: "0.5rem 1.25rem 1.5rem",
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
                border: active ? "2px solid " + gold : "2px solid rgba(36,99,116,0.25)",
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

        {region === "all" ? (
          <>
            <GuideSection
              title="Europe"
              subtitle={`${europeFiltered.length} guide${europeFiltered.length === 1 ? "" : "s"}`}
              guides={europeFiltered}
              cols={cols}
            />
            <GuideSection
              title="Asia"
              subtitle={`${asiaFiltered.length} guide${asiaFiltered.length === 1 ? "" : "s"}`}
              guides={asiaFiltered}
              cols={cols}
            />
            <GuideSection
              title="North America"
              subtitle={`${northAmericaFiltered.length} guide${northAmericaFiltered.length === 1 ? "" : "s"}`}
              guides={northAmericaFiltered}
              cols={cols}
            />
            <GuideSection
              title="Caribbean"
              subtitle={`${caribbeanFiltered.length} guide${caribbeanFiltered.length === 1 ? "" : "s"}`}
              guides={caribbeanFiltered}
              cols={cols}
            />
            <GuideSection
              title="South America"
              subtitle={`${southAmericaFiltered.length} guide${southAmericaFiltered.length === 1 ? "" : "s"}`}
              guides={southAmericaFiltered}
              cols={cols}
            />
            <GuideSection
              title="Oceania"
              subtitle={`${oceaniaFiltered.length} guide${oceaniaFiltered.length === 1 ? "" : "s"}`}
              guides={oceaniaFiltered}
              cols={cols}
            />
            {europeFiltered.length === 0 &&
            asiaFiltered.length === 0 &&
            northAmericaFiltered.length === 0 &&
            caribbeanFiltered.length === 0 &&
            southAmericaFiltered.length === 0 &&
            oceaniaFiltered.length === 0 ? (
              <p style={{ textAlign: "center", color: "#666", marginTop: "2rem" }}>
                No guides match your filters. Try clearing search or switching filters.
              </p>
            ) : null}
          </>
        ) : (
          <>
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
          </>
        )}
      </section>
    </main>
  );
}

function GuideSection({
  title,
  subtitle,
  guides,
  cols,
}: {
  title: string;
  subtitle: string;
  guides: CountryGuide[];
  cols: string;
}) {
  if (guides.length === 0) return null;
  return (
    <div style={{ marginBottom: "2.75rem" }}>
      <h2
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          color: teal,
          fontSize: "1.5rem",
          fontWeight: 700,
          margin: "0 0 0.25rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid " + gold,
        }}
      >
        {title}
      </h2>
      <p style={{ color: "#666", fontSize: "0.9rem", margin: "0 0 1.25rem" }}>{subtitle}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: cols,
          gap: "1.25rem",
        }}
      >
        {guides.map((g) => (
          <GuideCard key={g.slug} g={g} />
        ))}
      </div>
    </div>
  );
}

function GuideCard({ g }: { g: CountryGuide }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={`/guides/${g.slug}`}
      prefetch
      style={{ textDecoration: "none", color: "inherit", display: "block", cursor: "pointer" }}
    >
      <article
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "1.35rem 1.15rem",
          borderTop: hover ? "4px solid " + gold : "4px solid transparent",
          borderRight: "1px solid rgba(36,99,116,0.08)",
          borderBottom: "1px solid rgba(36,99,116,0.08)",
          borderLeft: "1px solid rgba(36,99,116,0.08)",
          boxShadow: hover
            ? "0 12px 32px rgba(36,99,116,0.14)"
            : "0 4px 18px rgba(0,0,0,0.06)",
          transform: hover ? "translateY(-6px)" : "translateY(0)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease, border-top-color 0.2s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: "3rem", lineHeight: 1, marginBottom: "0.5rem" }} aria-hidden>
          {g.flag}
        </div>
        <h3
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: teal,
            fontSize: "1.25rem",
            fontWeight: 700,
            margin: "0 0 0.35rem",
          }}
        >
          {g.country}
        </h3>
        <p style={{ color: "#666", fontSize: "0.95rem", margin: "0 0 0.85rem" }}>{g.capital}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
          {getHeroPills(g).map((pill) => (
            <span
              key={`${g.slug}-${pill.label}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.65rem",
                fontWeight: 600,
                padding: "0.28rem 0.5rem",
                borderRadius: "999px",
                backgroundColor: tealLight,
                color: teal,
                border: "1px solid rgba(36,99,116,0.15)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <img src={pill.src} alt="" width={14} height={14} style={{ flexShrink: 0 }} aria-hidden />
              {pill.label}
            </span>
          ))}
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

