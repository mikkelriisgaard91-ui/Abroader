"use client";

import { useState } from "react";

const INTEREST_OPTIONS = [
  { value: "seasonal_work", label: "Seasonal Work" },
  { value: "language_jobs", label: "Language Jobs" },
  { value: "retreats", label: "Retreats" },
  { value: "remote_jobs", label: "Remote Jobs" },
  { value: "travel_inspiration", label: "Travel Inspiration" },
  { value: "online_income", label: "Online Income" },
] as const;

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const allValues = INTEREST_OPTIONS.map((o) => o.value);
  const allSelected = allValues.every((v) => interests.includes(v));

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleAll = () => {
    setInterests(allSelected ? [] : [...allValues]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, interests }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-section__inner">
        {submitted ? (
          <div className="newsletter-section__success">
            <span className="newsletter-section__emoji">🎉</span>
            <h2 className="newsletter-section__heading">You&apos;re on the list!</h2>
            <p className="newsletter-section__sub">
              We&apos;ll send you the best international jobs and opportunities. Talk soon.
            </p>
          </div>
        ) : (
          <>
            <div className="newsletter-section__copy">
              <p className="newsletter-section__label">Stay in the loop</p>
              <h2 className="newsletter-section__heading">
                The best jobs abroad, straight to your inbox
              </h2>
              <p className="newsletter-section__sub">
                Weekly picks of remote jobs, language positions, seasonal roles, and relocation opportunities. No spam. Unsubscribe any time.
              </p>
            </div>

            <div className="newsletter-section__body">
              <fieldset className="newsletter-section__interests">
                <legend className="newsletter-section__interests-legend">
                  What are you interested in?{" "}
                  <span className="newsletter-section__interests-optional">(optional)</span>
                </legend>
                <div className="newsletter-section__interests-grid">
                  <button
                    type="button"
                    className={`newsletter-section__interest-label newsletter-section__interest-all${allSelected ? " newsletter-section__interest-label--all-active" : ""}`}
                    onClick={toggleAll}
                    aria-pressed={allSelected}
                  >
                    All of the above
                  </button>
                  {INTEREST_OPTIONS.map(({ value, label }) => (
                    <label key={value} className="newsletter-section__interest-label">
                      <input
                        type="checkbox"
                        className="newsletter-section__interest-checkbox"
                        checked={interests.includes(value)}
                        onChange={() => toggleInterest(value)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <form onSubmit={handleSubmit} className="newsletter-section__form" noValidate>
                <div className="newsletter-section__field">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-section__input"
                    aria-label="Email address"
                    required
                  />
                  <button type="submit" className="newsletter-section__btn">
                    Subscribe
                  </button>
                </div>
                {error && <p className="newsletter-section__error">{error}</p>}
                <p className="newsletter-section__disclaimer">
                  By subscribing you agree to our{" "}
                  <a href="/privacy" className="newsletter-section__privacy-link">
                    privacy policy
                  </a>
                  . UK &amp; EU GDPR compliant.
                </p>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
