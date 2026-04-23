"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
        backgroundColor: "var(--snow)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <p
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          lineHeight: 1,
        }}
        aria-hidden
      >
        🌍
      </p>

      <h1
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
          fontWeight: 700,
          color: "#1a333a",
          marginBottom: "0.75rem",
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.02em",
        }}
      >
        Something went wrong
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          color: "#5a6d73",
          maxWidth: "400px",
          lineHeight: 1.65,
          marginBottom: "2.5rem",
        }}
      >
        An unexpected error occurred. Try again or head back to the homepage.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          onClick={reset}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.7rem 1.8rem",
            borderRadius: "999px",
            backgroundColor: "var(--teal)",
            color: "#fff",
            fontSize: "0.95rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Try again
        </button>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.7rem 1.8rem",
            borderRadius: "999px",
            border: "1.5px solid rgba(36,99,116,0.28)",
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "var(--teal)",
            fontSize: "0.95rem",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
