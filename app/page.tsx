import Link from "next/link";
import HomeVerticalCard from "@/components/HomeVerticalCard";
import { verticals } from "@/lib/verticals";

export default function Page() {
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
          padding: "5rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#fcba36",
            fontSize: "3rem",
            fontWeight: 700,
            marginBottom: "1rem",
            fontFamily: "Georgia, serif",
          }}
        >
          Your life abroad starts here
        </h1>
        <p
          style={{
            color: "#ffffff",
            fontSize: "1.2rem",
            maxWidth: "560px",
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}
        >
          Browse thousands of opportunities to work, teach, volunteer and live abroad — all in one
          place.
        </p>
        <input
          type="text"
          placeholder="Search jobs, locations, or keywords..."
          style={{
            width: "100%",
            maxWidth: "520px",
            padding: "1rem 1.5rem",
            borderRadius: "999px",
            border: "none",
            fontSize: "1rem",
            outline: "none",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          }}
        />
      </section>

      <section style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.6rem",
            fontWeight: 600,
            color: "#246374",
            marginBottom: "2.5rem",
          }}
        >
          What are you looking for?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {verticals.map((v) => (
            <HomeVerticalCard key={v.href} v={v} />
          ))}
        </div>
      </section>
    </main>
  );
}
