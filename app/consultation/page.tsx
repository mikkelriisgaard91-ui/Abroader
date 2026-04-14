import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultation | Abroader",
  description: "Book a consultation with Abroader — placeholder page.",
};

export default function ConsultationPage() {
  return (
    <main
      style={{
        maxWidth: "36rem",
        margin: "0 auto",
        padding: "3rem 1.25rem",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>Consultation</h1>
      <p style={{ color: "#444", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        This is a placeholder page for consultation booking. Replace this with your real booking flow or embed when
        ready.
      </p>
      <Link href="/" style={{ color: "#246374", fontWeight: 600 }}>
        Back to home
      </Link>
    </main>
  );
}
