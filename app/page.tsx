import Link from "next/link";

/** Static for SSR/client HTML match (avoid hydration mismatch from Date, etc.). */
const COPYRIGHT_YEAR = 2026;

const verticals = [
  {
    title: "Remote Jobs",
    description: "Work from anywhere in the world. Browse fully remote roles across every industry and timezone.",
    href: "/remote-jobs",
    accent: "#246374",
    light: "#e8f4f7",
    mark: "R",
  },
  {
    title: "Language Jobs",
    description: "Put your language skills to work abroad. Teaching, translation, and bilingual roles worldwide.",
    href: "/language-jobs",
    accent: "#fcba36",
    light: "#fff8ec",
    mark: "L",
  },
  {
    title: "Hospitality",
    description: "Hotels, resorts, yachts and more. Live and work in incredible destinations around the globe.",
    href: "/hospitality",
    accent: "#8ed2e1",
    light: "#f0fafc",
    mark: "H",
  },
  {
    title: "Volunteering",
    description: "Make a difference while experiencing the world. NGOs, conservation, and community projects.",
    href: "/volunteering",
    accent: "#246374",
    light: "#e8f4f7",
    mark: "V",
  },
] as const;

export default function Home() {
  return (
    <main style={{ backgroundColor: "#fafafa", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* Nav */}
      <nav style={{ backgroundColor: "#246374", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#fcba36", fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: "700", letterSpacing: "0.05em" }}>
          Abroader
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {verticals.map((v) => (
            <Link key={v.href} href={v.href} style={{ color: "#fafafa", textDecoration: "none", fontSize: "0.9rem" }}>
              {v.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "#246374", padding: "5rem 2rem 4rem", textAlign: "center" }}>
        <h1 style={{ color: "#fcba36", fontSize: "3rem", fontWeight: "700", marginBottom: "1rem", fontFamily: "Georgia, serif" }}>
          Your life abroad starts here
        </h1>
        <p style={{ color: "#fafafa", fontSize: "1.2rem", maxWidth: "560px", margin: "0 auto 2rem", lineHeight: "1.7" }}>
          Browse thousands of opportunities to work, teach, volunteer and live abroad — all in one place.
        </p>
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            margin: "0 auto 1.5rem",
          }}
        >
          <span
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#22c55e",
            }}
          />
          <span className="hero-decor-triangle" aria-hidden="true" />
          <span
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "#2563eb",
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Search jobs, locations, or keywords..."
          style={{
            width: "100%", maxWidth: "520px", padding: "1rem 1.5rem",
            borderRadius: "999px", border: "none", fontSize: "1rem",
            outline: "none", boxShadow: "0 2px 12px rgba(0,0,0,0.15)"
          }}
        />
      </section>

      {/* Vertical Cards */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.6rem", fontWeight: "600", color: "#246374", marginBottom: "2.5rem" }}>
          What are you looking for?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {verticals.map((v) => (
            <Link key={v.href} href={v.href} style={{ textDecoration: "none" }}>
              <div
                className="vertical-card-tile"
                style={{
                  backgroundColor: v.light,
                  borderRadius: "16px",
                  padding: "2rem",
                  borderTop: `4px solid ${v.accent}`,
                  cursor: "pointer",
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
                    fontWeight: 700,
                    color: v.accent,
                    backgroundColor: "#fff",
                    border: `2px solid ${v.accent}`,
                  }}
                >
                  {v.mark}
                </div>
                <h3 style={{ color: v.accent, fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.75rem" }}>
                  {v.title}
                </h3>
                <p style={{ color: "#444", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {v.description}
                </p>
                <div style={{ marginTop: "1.5rem", color: v.accent, fontWeight: "600", fontSize: "0.9rem" }}>
                  Browse {v.title}{" ->"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#246374", padding: "2rem", textAlign: "center", color: "#8ed2e1", fontSize: "0.85rem" }}>
        © {COPYRIGHT_YEAR} Abroader — Your life abroad starts here
      </footer>

    </main>
  );
}