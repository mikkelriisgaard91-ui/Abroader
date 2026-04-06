import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allGuides, getGuideBySlug, getRelatedGuides, type CountryGuide } from "@/lib/guides";
import { GuideFAQ } from "./guide-faq";
import { GuideTOC, type TocItem } from "./guide-toc";

const teal = "#246374";
const gold = "#fcba36";
const snow = "#fafafa";
const tealLight = "#e8f4f7";
const frostedBlue = "#8ed2e1";

const SITE = "https://abroader.vercel.app";

type PageProps = { params: Promise<{ slug: string }> };

function buildTocItems(guide: CountryGuide): TocItem[] {
  const items: TocItem[] = [
    { id: "overview", label: "Overview" },
    { id: "visa", label: "Visas" },
    { id: "cost", label: "Cost of Living" },
    { id: "cities", label: "Cities" },
  ];
  if (guide.bestNeighbourhoods?.length) items.push({ id: "neighbourhoods", label: "Neighbourhoods" });
  if (guide.bankingTips) items.push({ id: "banking", label: "Banking" });
  if (guide.healthcareInfo) items.push({ id: "healthcare", label: "Healthcare" });
  if (guide.culturalTips) items.push({ id: "culture", label: "Culture" });
  if (guide.expatCommunities?.length) items.push({ id: "community", label: "Community" });
  if (guide.prosAndCons) items.push({ id: "pros-cons", label: "Pros & Cons" });
  if (guide.faqs?.length) items.push({ id: "faqs", label: "FAQs" });
  return items;
}

function FormattedGuideText({ text }: { text: string }) {
  const parts = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => (
        <p key={i} style={{ margin: "0 0 1rem", color: "#444", lineHeight: 1.7, fontSize: "0.98rem" }}>
          {p}
        </p>
      ))}
    </>
  );
}

export async function generateStaticParams() {
  return allGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    return { title: "Guide not found — Abroader" };
  }
  const url = `${SITE}/guides/${guide.slug}`;
  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      type: "article",
      url,
    },
    alternates: {
      canonical: url,
    },
  };
}

function toneCost(cost: string): { bg: string; border: string } {
  if (cost === "Low") return { bg: "rgba(34,197,94,0.18)", border: "rgba(22,163,74,0.55)" };
  if (cost === "Medium") return { bg: "rgba(252,186,54,0.22)", border: "rgba(217,119,6,0.5)" };
  return { bg: "rgba(248,113,113,0.2)", border: "rgba(239,68,68,0.5)" };
}

function toneVisa(v: string): { bg: string; border: string } {
  if (v === "Easy") return { bg: "rgba(34,197,94,0.18)", border: "rgba(22,163,74,0.55)" };
  if (v === "Medium") return { bg: "rgba(252,186,54,0.22)", border: "rgba(217,119,6,0.5)" };
  return { bg: "rgba(248,113,113,0.2)", border: "rgba(239,68,68,0.5)" };
}

function toneNet(n: string): { bg: string; border: string } {
  if (n === "Excellent") return { bg: "rgba(34,197,94,0.18)", border: "rgba(22,163,74,0.55)" };
  if (n === "Good") return { bg: "rgba(252,186,54,0.22)", border: "rgba(217,119,6,0.5)" };
  return { bg: "rgba(248,113,113,0.2)", border: "rgba(239,68,68,0.5)" };
}

export default async function GuideCountryPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(slug, 3);
  const heroHighlights = guide.highlights.slice(0, 5);
  const tocItems = buildTocItems(guide);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.seoTitle,
    description: guide.seoDescription,
    dateModified: guide.updated ?? undefined,
    author: {
      "@type": "Organization",
      name: "Abroader",
    },
  };

  const faqLd =
    guide.faqs?.length ?
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  return (
    <main style={{ flex: 1, width: "100%" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {faqLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      ) : null}

      {/* Hero */}
      <section
        style={{
          backgroundColor: teal,
          padding: "3rem 1.25rem 3.5rem",
          textAlign: "center",
        }}
      >
        {guide.updated ? (
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: frostedBlue,
                color: teal,
                padding: "0.35rem 0.85rem",
                borderRadius: "999px",
                fontSize: "0.82rem",
                fontWeight: 700,
                border: "1px solid rgba(36,99,116,0.15)",
              }}
            >
              Last updated: {guide.updated}
            </span>
          </div>
        ) : null}
        <div style={{ fontSize: "5rem", lineHeight: 1, marginBottom: "0.75rem" }} aria-hidden>
          {guide.flag}
        </div>
        <h1
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: gold,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            margin: "0 0 1rem",
          }}
        >
          {guide.country}
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          {[`Capital: ${guide.capital}`, guide.timezone, guide.language].map((t) => (
            <span
              key={t}
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                padding: "0.4rem 0.85rem",
                borderRadius: "999px",
                fontSize: "0.9rem",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.65rem",
            justifyContent: "center",
            marginBottom: "1.75rem",
          }}
        >
          <StatBadge label="Cost" value={guide.costOfLiving} tone={toneCost(guide.costOfLiving)} />
          <StatBadge label="Visa" value={guide.visaDifficulty} tone={toneVisa(guide.visaDifficulty)} />
          <StatBadge label="Internet" value={guide.internetSpeed} tone={toneNet(guide.internetSpeed)} />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
          }}
        >
          <Link
            href="/remote-jobs"
            style={{
              display: "inline-block",
              backgroundColor: gold,
              color: "#2a1f0a",
              fontWeight: 700,
              padding: "0.75rem 1.35rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Browse Remote Jobs in {guide.country} →
          </Link>
          <a
            href="#visa"
            style={{
              display: "inline-block",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontWeight: 700,
              padding: "0.75rem 1.35rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontSize: "0.95rem",
              border: "2px solid rgba(255,255,255,0.45)",
            }}
          >
            View Visa Requirements ↓
          </a>
        </div>
      </section>

      <style>{`
        @media (min-width: 901px) {
          .guide-page-layout { display: flex; flex-direction: row; gap: 2rem; align-items: flex-start; max-width: 1180px; margin: 0 auto; padding: 0 1.25rem; }
        }
        @media (max-width: 900px) {
          .guide-page-layout { display: block; max-width: 1180px; margin: 0 auto; padding: 0 1.25rem; }
        }
      `}</style>

      <div className="guide-page-layout">
        <GuideTOC items={tocItems} />
        <div style={{ flex: 1, minWidth: 0, width: "100%" }}>
          {/* Overview */}
          <section
            id="overview"
            style={{
              backgroundColor: "#ffffff",
              padding: "2rem 0",
              borderBottom: "1px solid rgba(36,99,116,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
              {heroHighlights.map((h) => (
                <span
                  key={h}
                  style={{
                    backgroundColor: snow,
                    border: `1px solid rgba(252,186,54,0.45)`,
                    color: teal,
                    padding: "0.5rem 0.85rem",
                    borderRadius: "999px",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: gold, marginRight: "0.35rem" }}>✓</span>
                  {h}
                </span>
              ))}
            </div>
          </section>

          {/* Visa */}
          <section id="visa" style={{ backgroundColor: tealLight, padding: "2.75rem 0" }}>
            <div style={{ maxWidth: "960px", margin: "0 auto" }}>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  color: teal,
                  fontSize: "1.75rem",
                  margin: "0 0 1.5rem",
                  textAlign: "center",
                }}
              >
                Visa Options
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {guide.visaOptions.map((v) => {
                  const isDn = /digital nomad/i.test(v.name);
                  return (
                    <div
                      key={v.name}
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        padding: "1.25rem",
                        border: "1px solid rgba(36,99,116,0.12)",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <h3 style={{ margin: 0, color: teal, fontSize: "1.15rem" }}>{v.name}</h3>
                        {isDn ? (
                          <span
                            style={{
                              backgroundColor: "rgba(252,186,54,0.25)",
                              color: "#5c4200",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              padding: "0.2rem 0.55rem",
                              borderRadius: "6px",
                              border: `1px solid ${gold}`,
                            }}
                          >
                            ⭐ Digital Nomad Visa
                          </span>
                        ) : null}
                      </div>
                      <VisaRow label="Duration" value={v.duration} />
                      <VisaRow label="Cost" value={v.cost} />
                      <VisaRow label="Requirements" value={v.requirements} />
                    </div>
                  );
                })}
              </div>

              {guide.applicationProcess ? (
                <div
                  style={{
                    marginTop: "2rem",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    border: "1px solid rgba(36,99,116,0.12)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      color: teal,
                      fontSize: "1.25rem",
                      margin: "0 0 1rem",
                    }}
                  >
                    Application process
                  </h3>
                  <FormattedGuideText text={guide.applicationProcess} />
                </div>
              ) : null}
            </div>
          </section>

          {/* Cost of living + real monthly */}
          <section id="cost" style={{ backgroundColor: "#ffffff", padding: "2.75rem 0" }}>
            <div style={{ maxWidth: "960px", margin: "0 auto" }}>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  color: teal,
                  fontSize: "1.75rem",
                  margin: "0 0 1.25rem",
                  textAlign: "center",
                }}
              >
                Cost of Living
              </h2>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  fontWeight: 700,
                  color: teal,
                  margin: "0 0 2rem",
                }}
              >
                ~${guide.avgMonthlyCost.toLocaleString()}/month average
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                <CostCard emoji="🏠" title="Rent" amount={guide.costBreakdown.rent} />
                <CostCard emoji="🍽️" title="Food" amount={guide.costBreakdown.food} />
                <CostCard emoji="🚆" title="Transport" amount={guide.costBreakdown.transport} />
                <CostCard emoji="💼" title="Coworking" amount={guide.costBreakdown.coworking} />
              </div>

              {guide.realMonthlyCost ? (
                <div
                  style={{
                    marginTop: "2.25rem",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    padding: "1.75rem",
                    border: "2px solid rgba(36,99,116,0.12)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      color: teal,
                      fontSize: "1.35rem",
                      margin: "0 0 1rem",
                      textAlign: "center",
                    }}
                  >
                    What a month actually costs
                  </h3>
                  <div style={{ color: "#444", fontSize: "0.98rem", lineHeight: 1.75 }}>
                    <FormattedGuideText text={guide.realMonthlyCost} />
                  </div>
                  <p
                    style={{
                      margin: "1rem 0 0",
                      fontSize: "0.88rem",
                      color: "#666",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    Costs vary by lifestyle and city.
                  </p>
                </div>
              ) : null}
            </div>
          </section>

          {/* Cities */}
          <section id="cities" style={{ backgroundColor: tealLight, padding: "2.75rem 0" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  color: teal,
                  fontSize: "1.75rem",
                  margin: "0 0 1.5rem",
                  textAlign: "center",
                }}
              >
                Best Cities for Remote Workers
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {guide.cities.map((c) => (
                  <div
                    key={c.name}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      padding: "1.25rem",
                      border: "1px solid rgba(36,99,116,0.1)",
                    }}
                  >
                    <h3 style={{ margin: "0 0 0.5rem", color: teal, fontSize: "1.2rem" }}>{c.name}</h3>
                    <p style={{ margin: "0 0 0.75rem", color: "#555", lineHeight: 1.55, fontSize: "0.95rem" }}>
                      {c.vibe}
                    </p>
                    <p style={{ margin: "0 0 0.35rem", fontSize: "0.9rem", color: "#333" }}>
                      <strong>Avg rent:</strong> {c.avgRent}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#333" }}>
                      <strong>Coworking:</strong> {c.coworkingSpaces}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Neighbourhoods */}
          {guide.bestNeighbourhoods?.length ? (
            <section id="neighbourhoods" style={{ backgroundColor: tealLight, padding: "2.75rem 0" }}>
              <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: teal,
                    fontSize: "1.75rem",
                    margin: "0 0 1.5rem",
                    textAlign: "center",
                  }}
                >
                  Best neighbourhoods for remote workers
                </h2>
                {Array.from(new Set((guide.bestNeighbourhoods ?? []).map((n) => n.city))).map((city) => (
                  <div key={city} style={{ marginBottom: "1.75rem" }}>
                    <h3
                      style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: teal,
                        fontSize: "1.15rem",
                        margin: "0 0 1rem",
                      }}
                    >
                      {city}
                    </h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "1rem",
                      }}
                    >
                      {(guide.bestNeighbourhoods ?? []).filter((n) => n.city === city).map((n) => (
                        <div
                          key={`${n.city}-${n.neighbourhood}`}
                          style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            padding: "1.15rem",
                            border: "1px solid rgba(36,99,116,0.1)",
                          }}
                        >
                          <div style={{ marginBottom: "0.5rem" }}>
                            <span
                              style={{
                                display: "inline-block",
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.04em",
                                color: teal,
                                backgroundColor: "rgba(36,99,116,0.08)",
                                padding: "0.2rem 0.5rem",
                                borderRadius: "6px",
                              }}
                            >
                              {n.city}
                            </span>
                          </div>
                          <h4 style={{ margin: "0 0 0.5rem", color: teal, fontSize: "1.1rem", fontWeight: 800 }}>
                            {n.neighbourhood}
                          </h4>
                          <p style={{ margin: 0, color: "#555", lineHeight: 1.55, fontSize: "0.95rem" }}>
                            {n.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Banking */}
          {guide.bankingTips ? (
            <section id="banking" style={{ backgroundColor: "#ffffff", padding: "2.75rem 0" }}>
              <div style={{ maxWidth: "960px", margin: "0 auto" }}>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: teal,
                    fontSize: "1.75rem",
                    margin: "0 0 1.25rem",
                    textAlign: "center",
                  }}
                >
                  Banking &amp; Money Tips
                </h2>
                <div style={{ marginBottom: "1rem" }}>
                  <FormattedGuideText text={guide.bankingTips} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                  {["💡 Use Wise for international transfers", "Compare ATM fees before you withdraw", "Keep proof of income for account opening"].map(
                    (tip) => (
                      <span
                        key={tip}
                        style={{
                          backgroundColor: tealLight,
                          color: teal,
                          padding: "0.45rem 0.85rem",
                          borderRadius: "999px",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          border: "1px solid rgba(36,99,116,0.15)",
                        }}
                      >
                        {tip}
                      </span>
                    )
                  )}
                </div>
              </div>
            </section>
          ) : null}

          {/* Healthcare */}
          {guide.healthcareInfo ? (
            <section id="healthcare" style={{ backgroundColor: tealLight, padding: "2.75rem 0" }}>
              <div style={{ maxWidth: "960px", margin: "0 auto" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <h2
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      color: teal,
                      fontSize: "1.75rem",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    Healthcare
                  </h2>
                  <span
                    style={{
                      backgroundColor: "#ffffff",
                      color: teal,
                      fontWeight: 800,
                      fontSize: "0.78rem",
                      padding: "0.35rem 0.65rem",
                      borderRadius: "999px",
                      border: `2px solid ${gold}`,
                    }}
                    title="Indicative quality band for travellers and expats"
                  >
                    Quality: EU top tier
                  </span>
                </div>
                <FormattedGuideText text={guide.healthcareInfo} />
              </div>
            </section>
          ) : null}

          {/* Culture */}
          {guide.culturalTips ? (
            <section id="culture" style={{ backgroundColor: "#ffffff", padding: "2.75rem 0" }}>
              <div style={{ maxWidth: "960px", margin: "0 auto" }}>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: teal,
                    fontSize: "1.75rem",
                    margin: "0 0 1.25rem",
                    textAlign: "center",
                  }}
                >
                  Culture &amp; Lifestyle
                </h2>
                <FormattedGuideText text={guide.culturalTips} />
              </div>
            </section>
          ) : null}

          {/* Expat communities */}
          {guide.expatCommunities?.length ? (
            <section id="community" style={{ backgroundColor: tealLight, padding: "2.75rem 0" }}>
              <div style={{ maxWidth: "960px", margin: "0 auto" }}>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: teal,
                    fontSize: "1.75rem",
                    margin: "0 0 1.25rem",
                    textAlign: "center",
                  }}
                >
                  Expat &amp; Nomad Communities
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                  {guide.expatCommunities.map((c) => (
                    <a
                      key={c}
                      href={`https://www.google.com/search?q=${encodeURIComponent(c)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        backgroundColor: "#ffffff",
                        color: teal,
                        padding: "0.5rem 0.9rem",
                        borderRadius: "999px",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        border: "1px solid rgba(36,99,116,0.18)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                    >
                      {c}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* Pros & cons */}
          {guide.prosAndCons ? (
            <section id="pros-cons" style={{ backgroundColor: "#ffffff", padding: "2.75rem 0" }}>
              <div style={{ maxWidth: "960px", margin: "0 auto" }}>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: teal,
                    fontSize: "1.75rem",
                    margin: "0 0 1.5rem",
                    textAlign: "center",
                  }}
                >
                  Pros &amp; Cons
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div>
                    <h3 style={{ color: teal, margin: "0 0 0.75rem", fontSize: "1.05rem" }}>✅ Pros</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {guide.prosAndCons.pros.map((p) => (
                        <span
                          key={p}
                          style={{
                            backgroundColor: "rgba(34,197,94,0.12)",
                            border: "1px solid rgba(22,163,74,0.35)",
                            color: "#166534",
                            padding: "0.55rem 0.75rem",
                            borderRadius: "10px",
                            fontSize: "0.92rem",
                            lineHeight: 1.45,
                          }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 style={{ color: teal, margin: "0 0 0.75rem", fontSize: "1.05rem" }}>❌ Cons</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {guide.prosAndCons.cons.map((p) => (
                        <span
                          key={p}
                          style={{
                            backgroundColor: "rgba(248,113,113,0.12)",
                            border: "1px solid rgba(239,68,68,0.35)",
                            color: "#991b1b",
                            padding: "0.55rem 0.75rem",
                            borderRadius: "10px",
                            fontSize: "0.92rem",
                            lineHeight: 1.45,
                          }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* FAQs */}
          {guide.faqs?.length ? (
            <section id="faqs" style={{ backgroundColor: tealLight, padding: "2.75rem 0" }}>
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: teal,
                    fontSize: "1.75rem",
                    margin: "0 0 1.5rem",
                    textAlign: "center",
                  }}
                >
                  Frequently Asked Questions
                </h2>
                <GuideFAQ faqs={guide.faqs} />
              </div>
            </section>
          ) : null}

          {/* Tax + community tips (original) */}
          <section style={{ backgroundColor: "#ffffff", padding: "2.75rem 0" }}>
            <div
              style={{
                maxWidth: "960px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: teal,
                    fontSize: "1.35rem",
                    margin: "0 0 0.75rem",
                  }}
                >
                  Tax Information
                </h2>
                <p style={{ margin: 0, color: "#444", lineHeight: 1.65, fontSize: "0.98rem" }}>{guide.taxInfo}</p>
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: teal,
                    fontSize: "1.35rem",
                    margin: "0 0 0.75rem",
                  }}
                >
                  Community Tips
                </h2>
                <p style={{ margin: 0, color: "#444", lineHeight: 1.65, fontSize: "0.98rem" }}>{guide.communityTips}</p>
              </div>
            </div>
          </section>

          {/* Best for */}
          <section style={{ backgroundColor: tealLight, padding: "2.5rem 0" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  color: teal,
                  fontSize: "1.5rem",
                  margin: "0 0 1rem",
                }}
              >
                This destination is perfect for…
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                {guide.bestFor.map((b) => (
                  <span
                    key={b}
                    style={{
                      backgroundColor: "rgba(252,186,54,0.2)",
                      color: "#5c4200",
                      padding: "0.45rem 0.9rem",
                      borderRadius: "999px",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      border: `1px solid ${gold}`,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Jobs CTA */}
          <section style={{ backgroundColor: teal, padding: "3rem 1.25rem", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: gold,
                fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
                margin: "0 0 0.75rem",
              }}
            >
              Ready to work remotely in {guide.country}?
            </h2>
            <p
              style={{
                color: "#ffffff",
                fontSize: "1.05rem",
                margin: "0 0 1.5rem",
                maxWidth: "520px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Browse remote jobs available now
            </p>
            <Link
              href={guide.jobLink}
              style={{
                display: "inline-block",
                backgroundColor: gold,
                color: "#2a1f0a",
                fontWeight: 700,
                padding: "0.85rem 1.6rem",
                borderRadius: "999px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Browse Jobs →
            </Link>
          </section>

          {/* Related */}
          <section style={{ backgroundColor: "#ffffff", padding: "2.75rem 1.25rem 3.5rem" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  color: teal,
                  fontSize: "1.5rem",
                  margin: "0 0 1.5rem",
                  textAlign: "center",
                }}
              >
                Explore nearby countries
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1rem",
                }}
              >
                {related.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      backgroundColor: snow,
                      borderRadius: "12px",
                      padding: "1.25rem",
                      border: `1px solid rgba(36,99,116,0.12)`,
                      display: "block",
                    }}
                  >
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.35rem" }}>{g.flag}</div>
                    <div style={{ fontWeight: 700, color: teal, fontSize: "1.1rem" }}>{g.country}</div>
                    <div style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.25rem" }}>{g.capital}</div>
                    <div style={{ color: gold, fontWeight: 700, marginTop: "0.75rem", fontSize: "0.9rem" }}>
                      Read Guide →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function StatBadge({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: { bg: string; border: string };
}) {
  return (
    <span
      style={{
        backgroundColor: tone.bg,
        border: `2px solid ${tone.border}`,
        color: "#1f2937",
        padding: "0.45rem 0.9rem",
        borderRadius: "999px",
        fontSize: "0.88rem",
        fontWeight: 700,
      }}
    >
      {label}: {value}
    </span>
  );
}

function VisaRow({ label, value }: { label: string; value: string }) {
  return (
    <p style={{ margin: "0.35rem 0", fontSize: "0.95rem", color: "#333", lineHeight: 1.55 }}>
      <span style={{ color: teal, fontWeight: 700 }}>{label}: </span>
      <span style={{ color: "#374151" }}>{value}</span>
    </p>
  );
}

function CostCard({ emoji, title, amount }: { emoji: string; title: string; amount: string }) {
  return (
    <div
      style={{
        backgroundColor: tealLight,
        borderRadius: "12px",
        padding: "1.15rem",
        border: "1px solid rgba(36,99,116,0.12)",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "0.35rem" }} aria-hidden>
        {emoji}
      </div>
      <div style={{ fontWeight: 700, color: teal, marginBottom: "0.5rem" }}>{title}</div>
      <div style={{ color: "#444", fontSize: "0.95rem", lineHeight: 1.45 }}>{amount}</div>
    </div>
  );
}
