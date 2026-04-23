"use client";

import Link from "next/link";
import { useState } from "react";

// ─── Static footer data ───────────────────────────────────────────────────────

type FooterLink = { label: string; href: string };
type FooterColumn = { heading: string; links: FooterLink[] };

const NAV_COLUMNS: FooterColumn[] = [
  {
    heading: "Work Abroad",
    links: [
      { label: "Overview", href: "/work" },
      { label: "Remote Jobs", href: "/remote-jobs" },
      { label: "Language Jobs", href: "/language-jobs" },
      { label: "Seasonal Jobs", href: "/hospitality" },
      { label: "Work for Accommodation", href: "/work-for-accommodation" },
    ],
  },
  {
    heading: "Retreats",
    links: [
      { label: "All Retreats", href: "/retreats" },
      { label: "Surfing Retreats", href: "/retreats/surf" },
      { label: "Yoga Retreats", href: "/retreats/yoga" },
      { label: "Martial Arts", href: "/retreats/martial-arts" },
      { label: "Motorcycle Trips", href: "/retreats/motorcycle-trips" },
    ],
  },
  {
    heading: "Remote Living",
    links: [
      { label: "Overview", href: "/remote-living" },
      { label: "Community Co-Living", href: "/co-living" },
      { label: "Vanlife", href: "/remote-living/vanlife" },
      { label: "Eco & Sustainable", href: "/remote-living/eco-sustainable" },
      { label: "Learning Living", href: "/remote-living/learning-based" },
    ],
  },
  {
    heading: "Volunteering & Inspiration",
    links: [
      { label: "Volunteering", href: "/volunteering" },
      { label: "Country Guides", href: "/guides" },
      { label: "Opportunities", href: "/opportunities" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Opportunities", href: "/opportunities" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

const CONVERSION_LINKS: FooterLink[] = [
  { label: "Book a consultation", href: "/consultation" },
  { label: "Career support", href: "/career-support" },
  { label: "Travel planning", href: "/travel" },
];

// ─── Email signup ─────────────────────────────────────────────────────────────

function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setErrorMessage("");
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        return;
      }
      let message = "Something went wrong. Try again.";
      try {
        const data = (await res.json()) as { error?: string };
        if (data.error) message = data.error;
      } catch {
        /* ignore */
      }
      setErrorMessage(message);
      setStatus("error");
    } catch {
      setErrorMessage("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="site-footer__email-success">
        You&rsquo;re in! We&rsquo;ll keep you posted on the best opportunities abroad.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="site-footer__email-form" noValidate>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="site-footer__email-input"
        required
        aria-label="Email address for newsletter"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="site-footer__email-btn"
      >
        {status === "loading" ? "…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="site-footer__email-error">{errorMessage || "Something went wrong. Try again."}</p>
      )}
    </form>
  );
}

// ─── Mobile accordion section ─────────────────────────────────────────────────

function MobileAccordion({ col }: { col: FooterColumn }) {
  return (
    <details className="site-footer__acc">
      <summary>
        {col.heading}
        <svg
          className="site-footer__acc-chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className="site-footer__acc-panel">
        {col.links.map((link) => (
          <Link key={link.href + link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();
  const navCols = NAV_COLUMNS.slice(0, 4);
  const companyCol = NAV_COLUMNS[4];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        {/* ── TOP: brand + conversion card ── */}
        <div className="site-footer__top">

          {/* Brand */}
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__brand-link" aria-label="Abroader home">
              <img
                src="/logo-abroader.png"
                alt="Abroader"
                className="site-footer__logo"
                width={160}
                height={38}
              />
            </Link>
            <p className="site-footer__tagline">Your life abroad starts here ✦</p>
            <p className="site-footer__desc">
              Discover the best opportunities to work, live, and learn abroad across 120+ countries.
            </p>

            <EmailSignup />

            {/* Social icons */}
            <div className="site-footer__socials">
              <a
                href="https://www.tiktok.com/@abroader.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abroader on TikTok"
                className="site-footer__social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/abroader.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abroader on Instagram"
                className="site-footer__social-link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@abroader"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abroader on YouTube"
                className="site-footer__social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.1 29.1 0 0 0 1 12a29.1 29.1 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.1 29.1 0 0 0 23 12a29.1 29.1 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/abroader.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abroader on Facebook"
                className="site-footer__social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Conversion card */}
          <div className="site-footer__conversion">
            <p className="site-footer__conversion-title">Need help getting started abroad?</p>
            <div className="site-footer__conversion-links">
              {CONVERSION_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="site-footer__conversion-link">
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* ── DESKTOP NAV columns ── */}
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navCols.map((col) => (
            <div key={col.heading} className="site-footer__col">
              <h2 className="site-footer__heading">{col.heading}</h2>
              <ul className="site-footer__list">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="site-footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company column — visually separated */}
          <div className="site-footer__col site-footer__col--company">
            <h2 className="site-footer__heading">{companyCol.heading}</h2>
            <ul className="site-footer__list">
              {companyCol.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="site-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ── MOBILE accordion nav ── */}
        <nav className="site-footer__mob-nav" aria-label="Footer navigation">
          {navCols.map((col) => (
            <MobileAccordion key={col.heading} col={col} />
          ))}
          {/* Company links flat on mobile */}
          <div className="site-footer__acc site-footer__acc--company">
            <p className="site-footer__mob-section-label">{companyCol.heading}</p>
            <div className="site-footer__acc-panel site-footer__acc-panel--flat">
              {companyCol.links.map((link) => (
                <Link key={link.href + link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* ── BOTTOM BAR ── */}
        <div className="site-footer__bar">
          <p>© {year} Abroader — All rights reserved</p>
          <div className="site-footer__bar-links">
            <Link href="/privacy" className="site-footer__bar-link">Privacy</Link>
            <Link href="/about-us" className="site-footer__bar-link">About us</Link>
            <Link href="/opportunities" className="site-footer__bar-link">Opportunities</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
