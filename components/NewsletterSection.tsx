"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
      body: JSON.stringify({ email }),
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
          </>
        )}
      </div>
    </section>
  );
}
