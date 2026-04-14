import HomeVerticalCard from "@/components/HomeVerticalCard";
import { consultationNavVerticals } from "@/lib/consultation-nav";
import { verticals } from "@/lib/verticals";

const stats = [
  { value: "10,000+", label: "live opportunities" },
  { value: "120+", label: "countries" },
  { value: "Free", label: "always" },
];

export default function Page() {
  return (
    <main style={{ backgroundColor: "#f5f5f3", flex: 1, width: "100%" }}>
      {/* Hero */}
      <section
        style={{
          background: "#0d1117",
          padding: "7rem 2rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            width: "700px",
            height: "450px",
            background:
              "radial-gradient(ellipse, rgba(36,99,116,0.45) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "10%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(252,186,54,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Eyebrow badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            background: "rgba(252,186,54,0.1)",
            border: "1px solid rgba(252,186,54,0.25)",
            borderRadius: "999px",
            padding: "0.4rem 1.1rem",
            marginBottom: "2.25rem",
            color: "#fcba36",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <span>✦</span>
          <span>Work · Travel · Live Abroad</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "1.5rem",
            fontFamily: "Georgia, serif",
          }}
        >
          <span style={{ color: "#ffffff" }}>Your life abroad</span>
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #fcba36 0%, #ffd97a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            starts here
          </span>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "1.1rem",
            maxWidth: "460px",
            margin: "0 auto 3.25rem",
            lineHeight: 1.75,
          }}
        >
          Thousands of opportunities to work, teach, volunteer and live abroad —
          all in one place.
        </p>

        {/* Stats pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.6rem",
            flexWrap: "wrap",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "999px",
                padding: "0.5rem 1.25rem",
                fontSize: "0.88rem",
                color: "#fff",
              }}
            >
              <span style={{ fontWeight: 700 }}>{s.value}</span>
              <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: "0.4rem" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Vertical cards */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "#0d1117",
              letterSpacing: "-0.025em",
              marginBottom: "0.6rem",
            }}
          >
            Opportunities at abroader.io
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "1rem",
          }}
        >
          {verticals.filter((v) => v.href !== "/guides").map((v) => (
            <HomeVerticalCard key={v.href} v={v} />
          ))}
        </div>
      </section>

      {/* Expert help: career + travel */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "#0d1117",
              letterSpacing: "-0.025em",
              marginBottom: "0.6rem",
            }}
          >
            Get help from experts to start your Abroader journey
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "1rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Book a free consultation — our team helps with applications abroad and practical travel planning.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "1rem",
          }}
        >
          {consultationNavVerticals.map((v) => (
            <HomeVerticalCard key={v.href} v={v} />
          ))}
        </div>
      </section>
    </main>
  );
}
