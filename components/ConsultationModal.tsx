"use client";

import { useState, useEffect, useRef } from "react";

const AVAILABILITY_OPTIONS = [
  { id: "weekday-morning", title: "Mornings", sub: "9am – 12pm", icon: "🌅" },
  { id: "weekday-afternoon", title: "Afternoons", sub: "12pm – 5pm", icon: "☀️" },
  { id: "weekday-evening", title: "Evenings", sub: "5pm – 8pm", icon: "🌆" },
  { id: "weekends", title: "Weekends", sub: "Sat & Sun", icon: "🗓️" },
];

const CONTEXT_COPY = {
  career: {
    heading: "Book a free career consultation",
    badge: "Career support · 30 min · No commitment",
    sub: "Tell us about your situation and when you're free. We'll send you an online meeting invite.",
    emailSubject: (name: string) => `New career consultation request from ${name}`,
  },
  travel: {
    heading: "Book a free travel planning call",
    badge: "Travel planning · 30 min · No commitment",
    sub: "Tell us about your trip idea and when you're free. We'll send you an online meeting invite.",
    emailSubject: (name: string) => `New travel planning request from ${name}`,
  },
};

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
  context?: "career" | "travel";
}

export default function ConsultationModal({ open, onClose, context = "career" }: ConsultationModalProps) {
  const copy = CONTEXT_COPY[context];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [errorHint, setErrorHint] = useState("");
  const [loading, setLoading] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstFieldRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const toggleAvailability = (id: string) =>
    setAvailability((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!email || !email.includes("@")) { setError("Please enter a valid email address."); return; }
    if (availability.length === 0) { setError("Please pick at least one time slot."); return; }
    setError("");
    setErrorHint("");
    setLoading(true);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email, availability, subject: copy.emailSubject(name.trim()) }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Something went wrong. Please try again.");
        setErrorHint(typeof data.hint === "string" ? data.hint : "");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setAvailability([]);
      setError("");
      setErrorHint("");
    }, 300);
  };

  if (!open) return null;

  return (
    <div
      className="consult-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Book a free consultation"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="consult-modal">

        {/* Header band */}
        <div className="consult-modal__header">
          <div className="consult-modal__header-left">
            <div className="consult-modal__brand-mark" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <span className="consult-modal__brand-name">Abroader</span>
          </div>
          <button className="consult-modal__close" aria-label="Close" onClick={handleClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="14" height="14" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="consult-modal__success">
            <div className="consult-modal__success-circle" aria-hidden>📅</div>
            <h2 className="consult-modal__success-heading">You&apos;re all set!</h2>
            <p className="consult-modal__success-sub">
              Thanks, {name.split(" ")[0]}. We&apos;ll send a meeting invite to{" "}
              <strong>{email}</strong> — usually within one working day.
            </p>
            <button onClick={handleClose} className="consult-modal__success-close">
              Done
            </button>
          </div>
        ) : (
          <div className="consult-modal__body">
            <h2 className="consult-modal__heading">{copy.heading}</h2>
            <div className="consult-modal__badge">
              <span className="consult-modal__badge-dot" aria-hidden />
              {copy.badge}
            </div>

            <form onSubmit={handleSubmit} className="consult-modal__form" noValidate>
              <div className="consult-modal__field">
                <label className="consult-modal__label" htmlFor="consult-name">Your name</label>
                <input
                  ref={firstFieldRef}
                  id="consult-name"
                  type="text"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="consult-modal__input"
                  required
                />
              </div>

              <div className="consult-modal__field">
                <label className="consult-modal__label" htmlFor="consult-email">Email address</label>
                <input
                  id="consult-email"
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="consult-modal__input"
                  required
                />
              </div>

              <div className="consult-modal__field">
                <p className="consult-modal__label">When are you usually free?</p>
                <div className="consult-modal__chips">
                  {AVAILABILITY_OPTIONS.map((opt) => {
                    const selected = availability.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleAvailability(opt.id)}
                        className={`consult-modal__chip${selected ? " consult-modal__chip--selected" : ""}`}
                        aria-pressed={selected}
                      >
                        <svg className="consult-modal__chip-check" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M2 5l2.5 2.5L8 2.5" />
                        </svg>
                        <span className="consult-modal__chip-title">
                          {opt.icon} {opt.title}
                        </span>
                        <span className="consult-modal__chip-sub">{opt.sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {error && (
                <div className="flex flex-col gap-2" role="alert">
                  <p className="consult-modal__error">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                    {error}
                  </p>
                  {errorHint ? (
                    <p className="text-xs leading-relaxed text-[#4a6b76]">{errorHint}</p>
                  ) : null}
                </div>
              )}

              <button type="submit" className="consult-modal__submit" disabled={loading}>
                {loading ? (
                  "Sending…"
                ) : (
                  <>
                    Request a consultation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
