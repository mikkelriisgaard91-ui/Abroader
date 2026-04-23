import Image from "next/image";
import Link from "next/link";

import { countOpportunityProviders, OPPORTUNITY_SLUGS } from "@/lib/opportunities";
import { REMOTE_BROWSE_LISTING_CAP } from "@/lib/remote-jobs/browse-data";
import { retreatCatalog } from "@/lib/retreats/catalog";
import { STATIC_VOLUNTEER_LISTINGS } from "@/lib/volunteering/static-volunteer-listings";

import { PLATFORMS } from "./work-for-accommodation/content";

// Helper: pass CSS custom properties through React's style prop
function cssVars(v: Record<string, string>): React.CSSProperties {
  return v as unknown as React.CSSProperties;
}

const polaroids = [
  {
    // Colourful Cinque Terre cliff-side villages — instantly recognisable, vibrant
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=480&q=90&fit=crop",
    alt: "Cinque Terre, Italy",
    caption: "Cinque Terre, Italy 🇮🇹",
    w: 215, h: 275,
    top: 5, left: 0,
    rot: "-6deg", z: 3,
  },
  {
    // Stunning tropical beach aerial — crystal blue water, white sand
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&q=90&fit=crop",
    alt: "Island life, Thailand",
    caption: "Island life, Thailand 🏝️",
    w: 245, h: 160,
    top: 0, right: 0,
    rot: "6deg", z: 2,
  },
  {
    // Person at laptop at a stunning outdoor rooftop — nomad energy
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=420&q=90&fit=crop&crop=center",
    alt: "Nomad life, Bali",
    caption: "Nomad life, Bali 🌴",
    w: 200, h: 255,
    top: 200, left: 50,
    rot: "-3deg", z: 4,
  },
  {
    // Dramatic Dolomites mountain peak — adventure, freedom
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=480&q=90&fit=crop",
    alt: "The Dolomites, Italy",
    caption: "The Dolomites, Italy ⛰️",
    w: 220, h: 170,
    top: 260, right: 5,
    rot: "5deg", z: 3,
  },
];

const categoryNav = [
  { title: "Remote Jobs",           href: "/remote-jobs",             emoji: "💻" },
  { title: "Language Jobs",         href: "/language-jobs",           emoji: "🗣️" },
  { title: "Seasonal Jobs",         href: "/hospitality",             emoji: "🏨" },
  { title: "Retreats",              href: "/retreats",                emoji: "🌿" },
  { title: "Volunteering",          href: "/volunteering",            emoji: "🌍" },
  { title: "Work for Accommodation",href: "/work-for-accommodation",  emoji: "🛏️" },
  { title: "Remote Living",         href: "/remote-living",           emoji: "🏘️" },
  { title: "Country Guides",        href: "/guides",                  emoji: "🗺️" },
];

const featuredCards = [
  {
    title: "Remote Jobs",
    tagline: "Work from anywhere",
    href: "/remote-jobs",
    accent: "#246374",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&fit=crop",
    alt: "Person working on a laptop abroad",
  },
  {
    title: "Language Jobs",
    tagline: "Teach, translate, connect",
    href: "/language-jobs",
    accent: "#fcba36",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&fit=crop",
    alt: "Language teaching abroad",
  },
  {
    title: "Seasonal Jobs",
    tagline: "Live where others holiday",
    href: "/hospitality",
    accent: "#8ed2e1",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80&fit=crop",
    alt: "Luxury resort and hotel abroad",
  },
];

const moreCards = [
  {
    title: "Retreats",
    tagline: "Surf, yoga & mindful stays",
    href: "/retreats",
    emoji: "🌿",
    accent: "#246374",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop&crop=center",
    alt: "Yoga retreat abroad",
  },
  {
    title: "Volunteering",
    tagline: "Make a difference worldwide",
    href: "/volunteering",
    emoji: "🌍",
    accent: "#246374",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&fit=crop",
    alt: "Volunteering abroad",
  },
  {
    title: "Work for Accommodation",
    tagline: "Trade skills for a place to stay",
    href: "/work-for-accommodation",
    emoji: "🛏️",
    accent: "#4a9aaa",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80&fit=crop",
    alt: "Hostel work exchange abroad",
  },
  {
    title: "Remote Living",
    tagline: "Coliving, vanlife & eco stays",
    href: "/remote-living",
    emoji: "🏘️",
    accent: "#4a9aaa",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80&fit=crop",
    alt: "Van life and remote living",
  },
];

const waysAbroadCount = OPPORTUNITY_SLUGS.length;

/** Rows we actually surface: opportunity provider cards, retreat catalogue, remote browse cap, volunteer cards, work-exchange platforms. */
const curatedLiveListingTotal =
  countOpportunityProviders() +
  retreatCatalog.length +
  STATIC_VOLUNTEER_LISTINGS.length +
  REMOTE_BROWSE_LISTING_CAP +
  PLATFORMS.length;

const liveOpportunitiesStat = curatedLiveListingTotal.toLocaleString("en-US");

const stats = [
  { value: liveOpportunitiesStat, label: "live opportunities" },
  { value: "120+",    label: "countries" },
  { value: String(waysAbroadCount), label: "ways to go abroad" },
  { value: "Free",    label: "always" },
];

export default function Page() {
  return (
    <main style={{ backgroundColor: "#ffffff", flex: 1, width: "100%" }}>

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        isolation: "isolate",
      }}>

        {/* z:0 — Background travel image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=90&fit=crop"
            fill
            alt=""
            style={{ objectFit: "cover", opacity: 0.42 }}
            priority
          />
        </div>

        {/* z:1 — Left-to-right gradient: solid white on text, clear on image side */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            backgroundImage: "linear-gradient(100deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 28%, rgba(255,255,255,0.78) 48%, rgba(255,255,255,0.22) 72%, rgba(255,255,255,0.05) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* z:2 — Colour glows */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-60px",
            width: "520px",
            height: "520px",
            zIndex: 2,
            backgroundImage: "radial-gradient(circle, rgba(252,186,54,0.2) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "8%",
            width: "380px",
            height: "380px",
            zIndex: 2,
            backgroundImage: "radial-gradient(circle, rgba(36,99,116,0.1) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* z:4 — Content */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 2rem 6rem", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "3rem", alignItems: "center", width: "100%", position: "relative", zIndex: 4 }}>

          {/* LEFT — text */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#e8f4f7", border: "1px solid rgba(36,99,116,0.22)", borderRadius: "999px", padding: "0.4rem 1.1rem", marginBottom: "2.25rem", color: "#246374", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase" }}>
              <span>✦</span>
              <span>Work · Travel · Live Abroad</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.03em", marginBottom: "1.5rem", color: "#0d1117", fontFamily: "Georgia, serif" }}>
              Your life abroad<br />
              <span className="hp-headline-highlight">starts here.</span>
            </h1>

            <p style={{ color: "#5a5a5a", fontSize: "1.12rem", lineHeight: 1.8, marginBottom: "2.25rem", maxWidth: "410px" }}>
              Thousands of ways to work, teach, volunteer and live abroad — remote jobs, seasonal gigs, retreats and more. All in one place, always free.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <Link href="/remote-jobs" style={{ textDecoration: "none" }}>
                <div style={{ background: "#246374", color: "#fff", padding: "0.95rem 2.1rem", borderRadius: "999px", fontWeight: 700, fontSize: "1rem", cursor: "pointer", boxShadow: "0 4px 18px rgba(36,99,116,0.3)" }}>
                  Explore opportunities
                </div>
              </Link>
              <Link href="/career-support" style={{ textDecoration: "none" }}>
                <div style={{ background: "transparent", color: "#246374", padding: "0.95rem 2.1rem", borderRadius: "999px", fontWeight: 600, fontSize: "1rem", border: "1.5px solid #246374", cursor: "pointer" }}>
                  Talk to an expert
                </div>
              </Link>
            </div>

            {/* Social proof — avatar stack */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
              <div style={{ display: "flex" }}>
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&q=80&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&q=80&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&q=80&fit=crop&crop=faces",
                ].map((src, i) => (
                  <div key={i} style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2.5px solid #fff", marginLeft: i > 0 ? "-11px" : 0, overflow: "hidden", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.13)", zIndex: 4 - i }}>
                    <Image src={src} fill alt="Explorer" style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#777", lineHeight: 1.4 }}>
                Joined by <strong style={{ color: "#0d1117" }}>10,000+</strong> explorers already abroad
              </div>
            </div>
          </div>

          {/* RIGHT — polaroid collage */}
          <div className="hp-polaroid-collage" style={{ position: "relative", height: "530px" }}>
            {polaroids.map((p, i) => (
              <div
                key={i}
                className="hp-polaroid-wrapper"
                style={{
                  ...cssVars({ "--hp-rot": p.rot }),
                  position: "absolute",
                  top: p.top !== undefined ? p.top : undefined,
                  left: "left" in p ? (p as { left: number }).left : undefined,
                  right: "right" in p ? (p as { right: number }).right : undefined,
                  bottom: "bottom" in p ? (p as { bottom: number }).bottom : undefined,
                  zIndex: p.z,
                }}
              >
                {/* Polaroid frame */}
                <div style={{ background: "#fff", padding: "9px 9px 42px", borderRadius: "3px", boxShadow: "0 8px 28px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07)" }}>
                  <div style={{ position: "relative", width: p.w, height: p.h, borderRadius: "1px", overflow: "hidden" }}>
                    <Image src={p.src} fill alt={p.alt} style={{ objectFit: "cover" }} sizes="260px" />
                  </div>
                  <div style={{ paddingTop: "9px", textAlign: "center", fontSize: "0.7rem", color: "#999", fontWeight: 500, letterSpacing: "0.01em", fontFamily: "Georgia, serif" }}>
                    {p.caption}
                  </div>
                </div>
              </div>
            ))}

            {/* Live opportunities badge */}
            <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", zIndex: 10, background: "#246374", color: "#fff", borderRadius: "999px", padding: "0.55rem 1.2rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", fontWeight: 700, boxShadow: "0 6px 22px rgba(36,99,116,0.38)", whiteSpace: "nowrap" }}>
              <span className="hp-live-dot" />
              {liveOpportunitiesStat} live opportunities
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. CATEGORY NAV ─────────────────────────────────────── */}
      <nav className="hp-cat-scroll" style={{ background: "#fafafa", borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb", padding: "1.1rem 2rem" }}>
        <div style={{ display: "flex", gap: "0.65rem", maxWidth: "1200px", margin: "0 auto", flexWrap: "nowrap", alignItems: "center" }}>
          <span style={{ color: "#aaa", fontSize: "0.75rem", fontWeight: 600, whiteSpace: "nowrap", marginRight: "0.4rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Browse</span>
          {categoryNav.map(v => (
            <Link key={v.href} href={v.href} style={{ textDecoration: "none" }}>
              <div className="hp-cat-pill" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "#fff", border: "1.5px solid #e5e5e5", borderRadius: "999px", padding: "0.45rem 1rem", fontSize: "0.82rem", fontWeight: 600, color: "#333", whiteSpace: "nowrap", cursor: "pointer" }}>
                <span>{v.emoji}</span>
                <span>{v.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>

      {/* ── 3. FEATURED OPPORTUNITIES ───────────────────────────── */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-block", background: "#e8f4f7", color: "#246374", borderRadius: "999px", padding: "0.35rem 1rem", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Work abroad
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d1117", letterSpacing: "-0.025em", lineHeight: 1.2, maxWidth: "500px", margin: 0 }}>
            Thousands of ways to earn<br />while you roam
          </h2>
        </div>

        <div className="hp-feat-grid">
          {featuredCards.map(c => (
            <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
              <div className="hp-feat-card" style={{ borderRadius: "20px", overflow: "hidden", background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", cursor: "pointer" }}>
                <div style={{ position: "relative", height: "230px" }}>
                  <Image src={c.image} fill alt={c.alt} style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: c.accent }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem", color: "#fff" }}>
                    <div style={{ fontSize: "0.75rem", opacity: 0.75, marginBottom: "0.2rem", fontWeight: 500 }}>{c.tagline}</div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800 }}>{c.title}</div>
                  </div>
                </div>
                <div style={{ padding: "1.1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.85rem", color: "#777" }}>Browse all listings</span>
                  <span style={{ color: c.accent, fontWeight: 700, fontSize: "1.1rem" }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4. STATS BAND ───────────────────────────────────────── */}
      <section style={{ background: "#246374", padding: "4.5rem 2rem" }}>
        <div className="hp-stats-grid" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.15)" : "none", paddingLeft: i > 0 ? "2rem" : 0 }}>
              <div style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fcba36", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", marginTop: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. MORE WAYS ────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-block", background: "#fff8ec", color: "#b07c0c", borderRadius: "999px", padding: "0.35rem 1rem", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1rem" }}>
            More ways
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d1117", letterSpacing: "-0.025em", lineHeight: 1.2, maxWidth: "500px", margin: 0 }}>
            Live it your way — there's<br />a path for everyone
          </h2>
        </div>

        <div className="hp-more-grid">
          {moreCards.map(c => (
            <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
              <div className="hp-mini-card" style={{ borderRadius: "20px", overflow: "hidden", background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", display: "flex", height: "180px", cursor: "pointer" }}>
                <div style={{ position: "relative", width: "190px", flexShrink: 0 }}>
                  <Image src={c.image} fill alt={c.alt} style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontSize: "1.3rem", marginBottom: "0.4rem" }}>{c.emoji}</div>
                  <h3 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#0d1117", margin: "0 0 0.35rem", letterSpacing: "-0.01em" }}>{c.title}</h3>
                  <p style={{ color: "#999", fontSize: "0.83rem", margin: "0 0 0.75rem", lineHeight: 1.55 }}>{c.tagline}</p>
                  <div style={{ color: c.accent, fontWeight: 700, fontSize: "0.82rem" }}>Explore →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 6. PATH SPLIT — Work vs Live ────────────────────────── */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="hp-path-grid">

          {/* Work abroad */}
          <Link href="/remote-jobs" style={{ textDecoration: "none" }}>
            <div className="hp-path-card" style={{ borderRadius: "24px", overflow: "hidden", position: "relative", height: "420px", cursor: "pointer" }}>
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&fit=crop"
                fill
                alt="Working abroad with a laptop"
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(150deg, rgba(36,99,116,0.88) 0%, rgba(36,99,116,0.45) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.65)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: "0.7rem" }}>For job-seekers</div>
                <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", margin: "0 0 0.7rem", letterSpacing: "-0.025em", lineHeight: 1.15 }}>Find work abroad</h3>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.95rem", margin: "0 0 1.5rem", lineHeight: 1.65 }}>Remote roles, language jobs, seasonal gigs — jobs that fund your life abroad.</p>
                <div style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: "#246374", borderRadius: "999px", padding: "0.6rem 1.4rem", fontWeight: 700, fontSize: "0.9rem", width: "fit-content" }}>
                  Browse jobs →
                </div>
              </div>
            </div>
          </Link>

          {/* Live abroad */}
          <Link href="/remote-living" style={{ textDecoration: "none" }}>
            <div className="hp-path-card" style={{ borderRadius: "24px", overflow: "hidden", position: "relative", height: "420px", cursor: "pointer" }}>
              <Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80&fit=crop"
                fill
                alt="Living abroad in beautiful nature"
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(150deg, rgba(180,125,15,0.82) 0%, rgba(252,186,54,0.38) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ fontSize: "0.72rem", color: "rgba(0,0,0,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: "0.7rem" }}>For free spirits</div>
                <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#0d1117", margin: "0 0 0.7rem", letterSpacing: "-0.025em", lineHeight: 1.15 }}>Live differently</h3>
                <p style={{ color: "rgba(0,0,0,0.62)", fontSize: "0.95rem", margin: "0 0 1.5rem", lineHeight: 1.65 }}>Vanlife, coliving, retreats, and eco stays — find your ideal base abroad.</p>
                <div style={{ display: "inline-flex", alignItems: "center", background: "#0d1117", color: "#fcba36", borderRadius: "999px", padding: "0.6rem 1.4rem", fontWeight: 700, fontSize: "0.9rem", width: "fit-content" }}>
                  Explore lifestyles →
                </div>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ── 7. COUNTRY GUIDES TEASER ────────────────────────────── */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/guides" style={{ textDecoration: "none" }}>
          <div className="hp-feat-card" style={{ borderRadius: "24px", overflow: "hidden", position: "relative", height: "290px", cursor: "pointer" }}>
            <Image
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80&fit=crop"
              fill
              alt="European city guide for remote workers"
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.35) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "480px" }}>
              <div style={{ fontSize: "0.75rem", color: "#fcba36", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>🗺️ Country Guides</div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", margin: "0 0 0.75rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Find your perfect base abroad</h3>
              <p style={{ color: "rgba(255,255,255,0.62)", fontSize: "0.95rem", margin: "0 0 1.5rem", lineHeight: 1.65 }}>
                In-depth guides on visas, cost of living, and best cities for remote workers across Europe and Oceania.
              </p>
              <div style={{ display: "inline-flex", background: "#fcba36", color: "#0d1117", borderRadius: "999px", padding: "0.6rem 1.4rem", fontWeight: 700, fontSize: "0.9rem", width: "fit-content" }}>
                Read the guides →
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ── 8. EXPERT HELP ──────────────────────────────────────── */}
      <section style={{ background: "#fafafa", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ display: "inline-block", background: "#e8f4f7", color: "#246374", borderRadius: "999px", padding: "0.35rem 1rem", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1rem" }}>Expert help</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0d1117", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "1rem" }}>
              Not sure where to start?<br />We&apos;ve got you.
            </h2>
            <p style={{ color: "#888", fontSize: "1rem", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
              Book a free one-to-one with the Abroader team — career guidance or practical travel planning.
            </p>
          </div>

          <div className="hp-consult-grid">
            {[
              {
                title: "Career support",
                desc: "CV help, job applications, and interview prep — direct support as you move abroad.",
                href: "/career-support",
                emoji: "💼",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&fit=crop&crop=faces",
                alt: "Career advice for moving abroad",
              },
              {
                title: "Travel planning",
                desc: "Routes, budgets, flights, and stays — let us help you plan a trip that actually happens.",
                href: "/travel",
                emoji: "🧭",
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80&fit=crop",
                alt: "Travel planning abroad",
              },
            ].map(c => (
              <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
                <div className="hp-mini-card" style={{ borderRadius: "20px", overflow: "hidden", background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", display: "flex", height: "200px", cursor: "pointer" }}>
                  <div style={{ position: "relative", width: "220px", flexShrink: 0 }}>
                    <Image src={c.image} fill alt={c.alt} style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{c.emoji}</div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0d1117", margin: "0 0 0.45rem" }}>{c.title}</h3>
                    <p style={{ color: "#999", fontSize: "0.84rem", margin: "0 0 1rem", lineHeight: 1.6 }}>{c.desc}</p>
                    <div style={{ color: "#246374", fontWeight: 700, fontSize: "0.84rem" }}>Book free call →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA BANNER ───────────────────────────────────────── */}
      <section style={{ background: "#fcba36", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✈️</div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0d1117", letterSpacing: "-0.025em", marginBottom: "1rem", fontFamily: "Georgia, serif" }}>
            Ready to go abroad?
          </h2>
          <p style={{ color: "rgba(0,0,0,0.58)", fontSize: "1.1rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Start exploring thousands of opportunities — it&apos;s free, and always will be.
          </p>
          <Link href="/remote-jobs" style={{ textDecoration: "none" }}>
            <div style={{ display: "inline-block", background: "#246374", color: "#fff", padding: "1rem 2.5rem", borderRadius: "999px", fontWeight: 700, fontSize: "1.05rem", cursor: "pointer" }}>
              Start exploring →
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
