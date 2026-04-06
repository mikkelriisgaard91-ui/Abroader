"use client";

import { useState } from "react";

const teal = "#246374";
const gold = "#fcba36";

export function GuideFAQ({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              border: "1px solid rgba(36,99,116,0.12)",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1rem 1.1rem",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                fontFamily: "inherit",
              }}
            >
              <span style={{ fontWeight: 700, color: teal, fontSize: "1rem", lineHeight: 1.45 }}>{item.question}</span>
              <span
                aria-hidden
                style={{
                  flexShrink: 0,
                  color: gold,
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                }}
              >
                ▼
              </span>
            </button>
            {isOpen ? (
              <div
                style={{
                  padding: "0 1.1rem 1.1rem",
                  color: "#444",
                  fontSize: "0.98rem",
                  lineHeight: 1.65,
                  borderTop: "1px solid rgba(36,99,116,0.08)",
                }}
              >
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
