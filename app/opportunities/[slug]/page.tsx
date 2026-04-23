import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  OPPORTUNITY_SLUGS,
  getOpportunityLanding,
  isOpportunitySlug,
} from "@/lib/opportunities";
import type {
  ProviderGroup,
  Region,
  FaqItem,
  SalaryHighlight,
  RoleType,
  SeasonalCalendarEntry,
  GoodToKnowTip,
} from "@/lib/opportunities";

const SITE = "https://www.abroader.io";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return OPPORTUNITY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const landing = getOpportunityLanding(slug);
  if (!landing) return { title: "Opportunity — Abroader" };
  const url = `${SITE}/opportunities/${slug}`;
  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: landing.metaTitle,
      description: landing.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function OpportunityLandingPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isOpportunitySlug(slug)) notFound();
  const landing = getOpportunityLanding(slug)!;

  const url = `${SITE}/opportunities/${slug}`;

  /* ── JSON-LD: BreadcrumbList + FAQPage ───────────────────────────── */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Opportunities",
        item: `${SITE}/opportunities`,
      },
      { "@type": "ListItem", position: 3, name: landing.heroTitle, item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landing.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const defaultCtaLinks = [
    { href: "/hospitality", label: "Browse seasonal jobs", primary: true },
    { href: "/opportunities", label: "All opportunities" },
    { href: "/consultation", label: "Book consultation" },
  ];

  const defaultRelatedLinks = [
    { href: "/volunteering", label: "Volunteering" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ];

  const ctaLinks = landing.ctaLinks ?? defaultCtaLinks;
  const relatedLinks = landing.relatedLinks ?? defaultRelatedLinks;

  return (
    <>
      {/* ── Structured data ────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={{ background: "#fafafa", color: "#1a2e33" }}>
        {/* ══════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            minHeight: "min(100vh, 780px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            overflow: "hidden",
          }}
        >
          <Image
            src={landing.heroImage}
            alt={landing.heroImageAlt}
            fill
            priority
            sizes="100vw"
            quality={90}
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(165deg, rgba(5,20,25,0.38) 0%, rgba(10,35,42,0.6) 45%, rgba(5,15,20,0.93) 100%)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 10,
              maxWidth: 820,
              margin: "0 auto",
              width: "100%",
              padding: "2rem 1.5rem 4.5rem",
            }}
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.55)",
                marginBottom: "1.25rem",
                display: "flex",
                gap: "0.4rem",
                alignItems: "center",
              }}
            >
              <Link
                href="/"
                style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
              >
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link
                href="/opportunities"
                style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
              >
                Opportunities
              </Link>
              <span aria-hidden>/</span>
              <span style={{ color: "rgba(255,255,255,0.85)" }}>
                {landing.heroTitle}
              </span>
            </nav>

            {/* Category badge */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                borderRadius: 9999,
                padding: "0.35rem 1rem",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#c8eef5",
                marginBottom: "1.1rem",
              }}
            >
              💼 {landing.category}
            </span>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
                fontWeight: 700,
                lineHeight: 1.06,
                color: "#fff",
                margin: "0 0 1.1rem",
              }}
            >
              {landing.heroTitle}
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.18rem)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 580,
                margin: "0 0 2rem",
              }}
            >
              {landing.heroSubtitle}
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#fcba36",
                  color: "#2a1f0a",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.8rem 1.75rem",
                  borderRadius: 9999,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(252,186,54,0.35)",
                }}
              >
                How it works
              </a>
              <a
                href="#providers"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.8rem 1.75rem",
                  borderRadius: 9999,
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(4px)",
                }}
              >
                Compare providers
              </a>
            </div>

            {/* Stats pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
              {landing.stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: "0.85rem",
                    padding: "0.6rem 1.1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#fcba36",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "rgba(232,244,247,0.75)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      lineHeight: 1.35,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            INTRO
        ══════════════════════════════════════════════════════════ */}
        <section
          style={{
            padding: "5rem 1.5rem",
            background: "#fff",
            borderTop: "1px solid rgba(36,99,116,0.07)",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#246374",
                marginBottom: "0.65rem",
              }}
            >
              The opportunity
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#1a2e33",
                margin: "0 0 2rem",
              }}
            >
              {landing.introHeading}
            </h2>
            {landing.introParagraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.78,
                  color: "#3a4e54",
                  margin: "0 0 1.25rem",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            ROLE TYPES (optional)
        ══════════════════════════════════════════════════════════ */}
        {landing.roleTypes && (
          <section
            id="roles"
            style={{
              padding: "5rem 1.5rem",
              background: "#f4f9fa",
              borderTop: "1px solid rgba(36,99,116,0.08)",
              scrollMarginTop: "72px",
            }}
          >
            <div style={{ maxWidth: 960, margin: "0 auto" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#246374",
                  marginBottom: "0.65rem",
                }}
              >
                Crew roles
              </span>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#1a2e33",
                  margin: "0 0 0.85rem",
                }}
              >
                {landing.roleTypesHeading ?? "What roles are available"}
              </h2>
              {landing.roleTypesIntro && (
                <p
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.72,
                    color: "#4a5c60",
                    maxWidth: 680,
                    margin: "0 0 2.5rem",
                  }}
                >
                  {landing.roleTypesIntro}
                </p>
              )}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))",
                  gap: "1rem",
                }}
              >
                {landing.roleTypes.map((role: RoleType) => (
                  <div
                    key={role.title}
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(36,99,116,0.1)",
                      borderRadius: "1.1rem",
                      padding: "1.5rem",
                      boxShadow: "0 4px 18px rgba(36,99,116,0.05)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.85rem",
                        marginBottom: "0.85rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.9rem",
                          lineHeight: 1,
                          flexShrink: 0,
                          marginTop: "0.1rem",
                        }}
                      >
                        {role.icon}
                      </span>
                      <div>
                        <p
                          style={{
                            fontFamily: "Georgia, serif",
                            fontWeight: 700,
                            fontSize: "1.05rem",
                            color: "#1a2e33",
                            margin: "0 0 0.3rem",
                          }}
                        >
                          {role.title}
                        </p>
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "#246374",
                            background: "rgba(36,99,116,0.08)",
                            border: "1px solid rgba(36,99,116,0.15)",
                            borderRadius: 9999,
                            padding: "0.2rem 0.65rem",
                          }}
                        >
                          {role.level}
                        </span>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        lineHeight: 1.72,
                        color: "#4a5c60",
                        margin: "0 0 0.85rem",
                      }}
                    >
                      {role.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.35rem",
                        marginBottom: "0.85rem",
                      }}
                    >
                      {role.keyCerts.map((cert) => (
                        <span
                          key={cert}
                          style={{
                            display: "inline-flex",
                            padding: "0.22rem 0.6rem",
                            borderRadius: 9999,
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            background: "rgba(36,99,116,0.07)",
                            color: "#246374",
                            border: "1px solid rgba(36,99,116,0.14)",
                          }}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                    <p
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#246374",
                        margin: 0,
                      }}
                    >
                      {role.salaryRange}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            HOW IT WORKS — numbered steps
        ══════════════════════════════════════════════════════════ */}
        <section
          id="how-it-works"
          style={{
            padding: "5rem 1.5rem",
            background: landing.roleTypes ? "#fff" : "#f4f9fa",
            borderTop: "1px solid rgba(36,99,116,0.08)",
            scrollMarginTop: "72px",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#246374",
                marginBottom: "0.65rem",
              }}
            >
              Step by step
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#1a2e33",
                margin: "0 0 2.5rem",
              }}
            >
              {landing.howItWorksHeading ?? "How it works — step by step"}
            </h2>
            <ol
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {landing.howItWorks.map((item) => (
                <li
                  key={item.step}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "1rem 1.25rem",
                    alignItems: "start",
                    background: "#fff",
                    border: "1px solid rgba(36,99,116,0.1)",
                    borderRadius: "1.1rem",
                    padding: "1.5rem 1.75rem",
                    boxShadow: "0 4px 18px rgba(36,99,116,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "2.4rem",
                      height: "2.4rem",
                      borderRadius: "50%",
                      background: "#246374",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.08rem",
                        fontWeight: 700,
                        color: "#1a2e33",
                        margin: "0 0 0.45rem",
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.93rem",
                        lineHeight: 1.72,
                        color: "#4a5c60",
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            YOUTUBE VIDEOS
        ══════════════════════════════════════════════════════════ */}
        {landing.youtubeVideos && landing.youtubeVideos.length > 0 && (
          <section
            style={{
              padding: "5rem 1.5rem",
              background: "#0f1f24",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#f5c842",
                  marginBottom: "0.65rem",
                }}
              >
                Watch &amp; learn
              </span>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#fff",
                  margin: "0 0 0.85rem",
                }}
              >
                {landing.youtubeVideosHeading ?? "See people doing it"}
              </h2>
              {landing.youtubeVideosIntro && (
                <p
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.72,
                    color: "rgba(255,255,255,0.7)",
                    maxWidth: 680,
                    margin: "0 0 2.5rem",
                  }}
                >
                  {landing.youtubeVideosIntro}
                </p>
              )}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {landing.youtubeVideos.map((video) => (
                  <a
                    key={video.videoId}
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      borderRadius: "10px",
                      overflow: "hidden",
                      background: "#1a2e33",
                      textDecoration: "none",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
                    }}
                  >
                    {/* Thumbnail */}
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={video.title}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      {/* Play button overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(0,0,0,0.25)",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            background: "#ff0000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Text */}
                    <div style={{ padding: "1rem 1.1rem 1.2rem" }}>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: "0 0 0.35rem",
                          lineHeight: 1.35,
                        }}
                      >
                        {video.title}
                      </p>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "#f5c842",
                          margin: "0 0 0.5rem",
                          fontWeight: 600,
                        }}
                      >
                        {video.channelName}
                      </p>
                      {video.description && (
                        <p
                          style={{
                            fontSize: "0.78rem",
                            color: "rgba(255,255,255,0.55)",
                            margin: 0,
                            lineHeight: 1.55,
                          }}
                        >
                          {video.description}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            PROVIDERS
        ══════════════════════════════════════════════════════════ */}
        <section
          id="providers"
          style={{
            padding: "5rem 1.5rem",
            background: landing.roleTypes ? "#f4f9fa" : "#fff",
            borderTop: "1px solid rgba(36,99,116,0.08)",
            scrollMarginTop: "72px",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#246374",
                marginBottom: "0.65rem",
              }}
            >
              Compare your options
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#1a2e33",
                margin: "0 0 0.85rem",
              }}
            >
              Providers — certifications, courses &amp; job boards
            </h2>
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: 1.72,
                color: "#4a5c60",
                maxWidth: 680,
                margin: "0 0 3rem",
              }}
            >
              {landing.whyProviders}
            </p>

            {landing.providerGroups.map((group: ProviderGroup) => (
              <div key={group.heading} style={{ marginBottom: "3.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#246374",
                    margin: "0 0 0.5rem",
                    borderBottom: "2px solid #e8f4f7",
                    paddingBottom: "0.6rem",
                  }}
                >
                  {group.heading}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.68,
                    color: "#5a6c70",
                    margin: "0 0 1.5rem",
                  }}
                >
                  {group.intro}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {group.providers.map((p) => (
                    <div
                      key={p.name}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: "1rem 1.5rem",
                        alignItems: "start",
                        background: "#f8fbfc",
                        border: "1px solid rgba(36,99,116,0.1)",
                        borderRadius: "1rem",
                        padding: "1.5rem",
                        transition: "box-shadow 0.18s ease",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: 700,
                            fontSize: "1.02rem",
                            color: "#1a2e33",
                            margin: "0 0 0.55rem",
                          }}
                        >
                          {p.name}
                        </p>
                        <p
                          style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.7,
                            color: "#4a5c60",
                            margin: "0 0 0.85rem",
                          }}
                        >
                          {p.description}
                        </p>
                        {/* "Use when" callout */}
                        <p
                          style={{
                            fontSize: "0.82rem",
                            lineHeight: 1.55,
                            color: "#2d5a64",
                            background: "#e8f4f7",
                            borderLeft: "3px solid #246374",
                            borderRadius: "0 0.4rem 0.4rem 0",
                            padding: "0.5rem 0.85rem",
                            margin: "0 0 0.85rem",
                          }}
                        >
                          <strong>Use this when:</strong> {p.useWhen}
                        </p>
                        {/* Tags */}
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.4rem",
                          }}
                        >
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                display: "inline-flex",
                                padding: "0.28rem 0.7rem",
                                borderRadius: 9999,
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                background: "rgba(36,99,116,0.07)",
                                color: "#246374",
                                border: "1px solid rgba(36,99,116,0.14)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={p.href}
                        target={p.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          p.href.startsWith("http") ? "noopener noreferrer" : undefined
                        }
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          padding: "0.55rem 1.1rem",
                          borderRadius: 9999,
                          border: "1.5px solid rgba(36,99,116,0.22)",
                          background: "#fff",
                          color: "#246374",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          alignSelf: "flex-start",
                        }}
                      >
                        Visit ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Disclaimer */}
            <p
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.6,
                color: "#7a9098",
                fontStyle: "italic",
                borderTop: "1px solid rgba(36,99,116,0.1)",
                paddingTop: "1.25rem",
                marginTop: "0.5rem",
              }}
            >
              {landing.disclaimer}
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SALARY HIGHLIGHTS (optional)
        ══════════════════════════════════════════════════════════ */}
        {landing.salaryHighlights && (
          <section
            id="pay"
            style={{
              padding: "5rem 1.5rem",
              background: "#f4f9fa",
              borderTop: "1px solid rgba(36,99,116,0.08)",
              scrollMarginTop: "72px",
            }}
          >
            <div style={{ maxWidth: 960, margin: "0 auto" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#246374",
                  marginBottom: "0.65rem",
                }}
              >
                Pay guide
              </span>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#1a2e33",
                  margin: "0 0 0.85rem",
                }}
              >
                {landing.salaryHighlightsHeading ?? "What you can earn"}
              </h2>
              {landing.salaryHighlightsIntro && (
                <p
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.72,
                    color: "#4a5c60",
                    maxWidth: 680,
                    margin: "0 0 2.5rem",
                  }}
                >
                  {landing.salaryHighlightsIntro}
                </p>
              )}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                  gap: "1.25rem",
                }}
              >
                {landing.salaryHighlights.map((s: SalaryHighlight) => (
                  <div
                    key={s.country}
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(36,99,116,0.1)",
                      borderRadius: "1.1rem",
                      padding: "1.5rem",
                      boxShadow: "0 4px 18px rgba(36,99,116,0.05)",
                      position: "relative",
                    }}
                  >
                    {s.badge && (
                      <span
                        style={{
                          position: "absolute",
                          top: "1rem",
                          right: "1rem",
                          background: "#fcba36",
                          color: "#2a1f0a",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          padding: "0.22rem 0.65rem",
                          borderRadius: 9999,
                        }}
                      >
                        {s.badge}
                      </span>
                    )}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <span style={{ fontSize: "2rem", lineHeight: 1 }}>{s.flag}</span>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#1a2e33",
                          margin: 0,
                          paddingRight: s.badge ? "4rem" : 0,
                        }}
                      >
                        {s.country}
                      </p>
                    </div>
                    <p
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        color: "#246374",
                        margin: "0 0 0.15rem",
                        lineHeight: 1,
                      }}
                    >
                      {s.salaryRange}
                    </p>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        color: "#7a9098",
                        margin: "0 0 1rem",
                        fontWeight: 500,
                      }}
                    >
                      {s.salaryLabel}
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                      }}
                    >
                      {s.includes.map((item) => (
                        <li
                          key={item}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.45rem",
                            fontSize: "0.8rem",
                            color: "#4a5c60",
                            lineHeight: 1.45,
                          }}
                        >
                          <span style={{ color: "#246374", fontWeight: 700, flexShrink: 0, marginTop: "0.05rem" }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            REGIONS
        ══════════════════════════════════════════════════════════ */}
        <section
          id="destinations"
          style={{
            padding: "5rem 1.5rem",
            background: "#0d2d36",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            scrollMarginTop: "72px",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#fcba36",
                marginBottom: "0.65rem",
              }}
            >
              Where to go
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.35rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#fff",
                margin: "0 0 0.85rem",
              }}
            >
              {landing.regionsHeading}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.72,
                color: "rgba(232,244,247,0.7)",
                maxWidth: 620,
                margin: "0 0 3rem",
              }}
            >
              {landing.regionsIntro}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
                gap: "1.75rem",
              }}
            >
              {landing.regions.map((region: Region) => (
                <article
                  key={region.slug}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "1.25rem",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "relative", height: 220 }}>
                    <Image
                      src={region.image}
                      alt={region.imageAlt}
                      fill
                      sizes="(min-width: 900px) 50vw, 100vw"
                      style={{ objectFit: "cover", objectPosition: "center 50%" }}
                    />
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(5,20,25,0.75) 0%, transparent 60%)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        bottom: "0.85rem",
                        left: "1rem",
                        background: "rgba(252,186,54,0.9)",
                        color: "#2a1f0a",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.28rem 0.75rem",
                        borderRadius: 9999,
                      }}
                    >
                      {region.season}
                    </span>
                  </div>

                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 0.75rem",
                      }}
                    >
                      {region.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.72,
                        color: "rgba(232,244,247,0.75)",
                        margin: region.relatedHref ? "0 0 1rem" : "0",
                      }}
                    >
                      {region.body}
                    </p>
                    {region.relatedHref && (
                      <Link
                        href={region.relatedHref}
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          color: "#8ed2e1",
                          textDecoration: "none",
                          borderBottom: "1px solid rgba(142,210,225,0.3)",
                          paddingBottom: "1px",
                        }}
                      >
                        {region.relatedLabel} →
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SEASONAL CALENDAR (optional)
        ══════════════════════════════════════════════════════════ */}
        {landing.seasonalCalendar && (
          <section
            id="season-planner"
            style={{
              padding: "5rem 1.5rem",
              background: "#fff",
              borderTop: "1px solid rgba(36,99,116,0.08)",
              scrollMarginTop: "72px",
            }}
          >
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#246374",
                  marginBottom: "0.65rem",
                }}
              >
                Season planner
              </span>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#1a2e33",
                  margin: "0 0 0.85rem",
                }}
              >
                {landing.seasonalCalendarHeading ?? "Seasonal hiring windows"}
              </h2>
              {landing.seasonalCalendarIntro && (
                <p
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.72,
                    color: "#4a5c60",
                    maxWidth: 680,
                    margin: "0 0 2.5rem",
                  }}
                >
                  {landing.seasonalCalendarIntro}
                </p>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                {landing.seasonalCalendar.map((entry: SeasonalCalendarEntry) => (
                  <div
                    key={entry.region}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(160px, 220px) 1fr",
                      gap: "1.25rem 1.75rem",
                      alignItems: "start",
                      background: "#f4f9fa",
                      border: "1px solid rgba(36,99,116,0.1)",
                      borderRadius: "1rem",
                      padding: "1.25rem 1.5rem",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "Georgia, serif",
                          fontWeight: 700,
                          fontSize: "0.98rem",
                          color: "#1a2e33",
                          margin: "0 0 0.45rem",
                        }}
                      >
                        {entry.region}
                      </p>
                      <span
                        style={{
                          display: "inline-block",
                          background: "rgba(252,186,54,0.18)",
                          color: "#7a4a00",
                          border: "1px solid rgba(252,186,54,0.4)",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "0.22rem 0.65rem",
                          borderRadius: 9999,
                        }}
                      >
                        {entry.months}
                      </span>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.35rem",
                          marginBottom: entry.notes ? "0.65rem" : 0,
                        }}
                      >
                        {entry.locations.map((loc) => (
                          <span
                            key={loc}
                            style={{
                              display: "inline-flex",
                              padding: "0.22rem 0.6rem",
                              borderRadius: 9999,
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              background: "rgba(36,99,116,0.07)",
                              color: "#246374",
                              border: "1px solid rgba(36,99,116,0.14)",
                            }}
                          >
                            {loc}
                          </span>
                        ))}
                      </div>
                      {entry.notes && (
                        <p
                          style={{
                            fontSize: "0.82rem",
                            lineHeight: 1.6,
                            color: "#5a6c70",
                            margin: 0,
                          }}
                        >
                          {entry.notes}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            GOOD TO KNOW (optional)
        ══════════════════════════════════════════════════════════ */}
        {landing.goodToKnow && landing.goodToKnow.length > 0 && (
          <section
            id="good-to-know"
            style={{
              padding: "5rem 1.5rem",
              background: "#111e22",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              scrollMarginTop: "72px",
            }}
          >
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#fcba36",
                  marginBottom: "0.65rem",
                }}
              >
                Insider knowledge
              </span>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.35rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#fff",
                  margin: "0 0 0.75rem",
                }}
              >
                {landing.goodToKnowHeading ?? "Things worth knowing"}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(232,244,247,0.55)",
                  maxWidth: 560,
                  margin: "0 0 3rem",
                }}
              >
                Not the obvious stuff. The things most guides leave out.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                  gap: "1.25rem",
                }}
              >
                {landing.goodToKnow.map((tip: GoodToKnowTip) => (
                  <div
                    key={tip.title}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      borderTop: "3px solid #fcba36",
                      borderRadius: "1rem",
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.85rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.65rem",
                          lineHeight: 1,
                          flexShrink: 0,
                        }}
                      >
                        {tip.emoji}
                      </span>
                      <h3
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                          lineHeight: 1.25,
                        }}
                      >
                        {tip.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        lineHeight: 1.75,
                        color: "rgba(232,244,247,0.65)",
                        margin: 0,
                      }}
                    >
                      {tip.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════════ */}
        <section
          id="faq"
          style={{
            padding: "5rem 1.5rem",
            background: "#f4f9fa",
            borderTop: "1px solid rgba(36,99,116,0.08)",
            scrollMarginTop: "72px",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#246374",
                marginBottom: "0.65rem",
              }}
            >
              FAQ
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#1a2e33",
                margin: "0 0 0.65rem",
              }}
            >
              {landing.faqHeading}
            </h2>
            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: 1.65,
                color: "#5a6c70",
                margin: "0 0 2rem",
              }}
            >
              {landing.faqIntro}
            </p>

            <div
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(36,99,116,0.12)",
              }}
            >
              {landing.faqs.map((faq: FaqItem, i) => (
                <details
                  key={i}
                  style={{
                    borderBottom:
                      i < landing.faqs.length - 1
                        ? "1px solid rgba(36,99,116,0.1)"
                        : "none",
                    background: "#fff",
                  }}
                >
                  <summary
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "1.15rem 1.4rem",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#1a2e33",
                      listStyle: "none",
                      userSelect: "none",
                    }}
                  >
                    {faq.question}
                    <span
                      aria-hidden
                      style={{ flexShrink: 0, color: "#246374", fontSize: "1.2rem" }}
                    >
                      +
                    </span>
                  </summary>
                  <div
                    style={{
                      padding: "0 1.4rem 1.2rem",
                      fontSize: "0.92rem",
                      lineHeight: 1.78,
                      color: "#4a5c60",
                    }}
                  >
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════════════════ */}
        <section
          style={{
            background: "#0d2d36",
            padding: "5rem 1.5rem",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#fcba36",
                marginBottom: "0.65rem",
              }}
            >
              Ready to get started?
            </span>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                color: "#fff",
                margin: "0.35rem 0 1.1rem",
                lineHeight: 1.15,
              }}
            >
              {landing.ctaHeading ?? "Get started today"}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.72,
                color: "rgba(232,244,247,0.68)",
                maxWidth: 540,
                margin: "0 auto 2.25rem",
              }}
            >
              {landing.ctaDescription ??
                "Browse live seasonal roles or book a free consultation with the Abroader team to map out your route abroad."}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.85rem",
                justifyContent: "center",
                marginBottom: "2.5rem",
              }}
            >
              {ctaLinks.map((link) =>
                link.primary ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      background: "#fcba36",
                      color: "#2a1f0a",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      padding: "0.85rem 2rem",
                      borderRadius: 9999,
                      textDecoration: "none",
                      boxShadow: "0 4px 20px rgba(252,186,54,0.35)",
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      background: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      padding: "0.85rem 2rem",
                      borderRadius: 9999,
                      textDecoration: "none",
                      border: "1.5px solid rgba(255,255,255,0.28)",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Related links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.5rem 1rem",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(232,244,247,0.4)",
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "0.15rem",
                }}
              >
                Related
              </span>
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "rgba(212,232,220,0.75)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(212,232,220,0.22)",
                    paddingBottom: "1px",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
