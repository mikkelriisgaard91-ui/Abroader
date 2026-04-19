"use client";

import { useState } from "react";
import Link from "next/link";

const AVAILABILITY_OPTIONS = [
  { id: "weekday-morning", label: "Weekday mornings (9am–12pm)" },
  { id: "weekday-afternoon", label: "Weekday afternoons (12pm–5pm)" },
  { id: "weekday-evening", label: "Weekday evenings (5pm–8pm)" },
  { id: "weekends", label: "Weekends" },
];

const headingStyle = { fontFamily: "Poppins, sans-serif" };

export default function ConsultationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [errorHint, setErrorHint] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleAvailability = (id: string) => {
    setAvailability((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!email || !email.includes("@")) { setError("Please enter a valid email address."); return; }
    if (availability.length === 0) { setError("Please select at least one availability slot."); return; }
    setError("");
    setErrorHint("");
    setLoading(true);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email, availability }),
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

  return (
    <main className="w-full min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-lg px-5 py-16 md:py-24">

        {submitted ? (
          <div className="rounded-2xl border border-[#8ed2e1]/40 bg-white p-10 text-center shadow-sm">
            <span className="text-5xl" aria-hidden>📅</span>
            <h1 className="mt-4 text-2xl font-bold text-[#1a3339]" style={headingStyle}>
              You&apos;re booked in!
            </h1>
            <p className="mt-3 leading-relaxed text-[#4a6b76]">
              Thanks, {name.split(" ")[0]}. We&apos;ll send a meeting invite to{" "}
              <strong>{email}</strong> shortly.
            </p>
            <Link
              href="/"
              className="mt-8 inline-block rounded-lg bg-[#246374] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a4f5e]"
              style={headingStyle}
            >
              Back to home
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#1a3339] md:text-4xl" style={headingStyle}>
                Book a free consultation
              </h1>
              <p className="mt-3 leading-relaxed text-[#4a6b76]">
                Tell us a little about you and when you&apos;re free. We&apos;ll send you an online meeting invite — no commitment required.
              </p>
            </div>

            <div className="rounded-2xl border border-[#246374]/12 bg-white p-8 shadow-sm">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-name" className="text-sm font-semibold text-[#1a3339]">
                    Your name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-[#246374]/20 px-4 py-3 text-sm text-[#1a3339] outline-none transition-colors focus:border-[#246374]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-email" className="text-sm font-semibold text-[#1a3339]">
                    Email address
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-[#246374]/20 px-4 py-3 text-sm text-[#1a3339] outline-none transition-colors focus:border-[#246374]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-[#1a3339]">
                    When are you usually available?
                  </p>
                  <div className="flex flex-col gap-3">
                    {AVAILABILITY_OPTIONS.map((opt) => (
                      <label key={opt.id} className="flex cursor-pointer items-center gap-3 text-sm text-[#2d4a52]">
                        <input
                          type="checkbox"
                          checked={availability.includes(opt.id)}
                          onChange={() => toggleAvailability(opt.id)}
                          className="h-4 w-4 flex-shrink-0 cursor-pointer accent-[#246374]"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-red-600">{error}</p>
                    {errorHint ? (
                      <p className="text-sm leading-relaxed text-[#4a6b76]">{errorHint}</p>
                    ) : null}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-[#246374] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a4f5e] disabled:opacity-60"
                  style={headingStyle}
                >
                  {loading ? "Sending…" : "Request a consultation"}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
