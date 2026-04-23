"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const WHATSAPP_URL = "https://wa.me/447344033843";

interface PageContext {
  tag: string | null;
  emoji: string;
  headline: string;
  sub: string;
  cta: string;
}

function getPageContext(pathname: string | null): PageContext {
  if (!pathname) return defaultContext();

  if (pathname === "/hospitality" || pathname.startsWith("/hospitality/") ||
      pathname === "/work" || pathname === "/work-for-accommodation") {
    return {
      tag: "seasonal_work",
      emoji: "🏔️",
      headline: "Your season abroad is one email away",
      sub: "We'll send you the best seasonal roles the moment they drop. No noise, just good jobs.",
      cta: "Send me seasonal roles",
    };
  }

  if (pathname === "/language-jobs" || pathname.startsWith("/language-jobs/")) {
    return {
      tag: "language_jobs",
      emoji: "🌍",
      headline: "Jobs that pay you to speak your language",
      sub: "New language job openings straight to your inbox. Be first in line.",
      cta: "Get language job alerts",
    };
  }

  if (pathname === "/retreats" || pathname.startsWith("/retreats/")) {
    return {
      tag: "retreats",
      emoji: "🧘",
      headline: "Find your next retreat placement",
      sub: "New retreat roles and openings, delivered straight to your inbox.",
      cta: "Show me retreat placements",
    };
  }

  if (pathname === "/remote-jobs" || pathname.startsWith("/remote-jobs/")) {
    return {
      tag: "remote_jobs",
      emoji: "💻",
      headline: "Remote work worth applying for",
      sub: "Curated remote picks delivered weekly. No job boards, no noise.",
      cta: "Get remote job picks",
    };
  }

  if (pathname === "/travel" ||
      pathname === "/remote-living" || pathname.startsWith("/remote-living/")) {
    return {
      tag: "travel_inspiration",
      emoji: "✈️",
      headline: "Travel smarter, work better",
      sub: "The best live-and-work opportunities, delivered weekly to your inbox.",
      cta: "Keep me inspired",
    };
  }

  if (pathname === "/co-living" || pathname.startsWith("/co-living/")) {
    return {
      tag: "travel_inspiration",
      emoji: "🏡",
      headline: "Live abroad, work remotely",
      sub: "Co-living spaces and remote opportunities, curated weekly.",
      cta: "Show me opportunities",
    };
  }

  return defaultContext();
}

function defaultContext(): PageContext {
  return {
    tag: null,
    emoji: "✈️",
    headline: "Before you go…",
    sub: "Get the best international jobs and opportunities delivered to your inbox. No spam, ever.",
    cta: "Keep me in the loop",
  };
}

export default function ExitIntentPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const hasShown = useRef(false);
  const readyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isReady = useRef(false);

  const ctx = getPageContext(pathname);

  useEffect(() => {
    if (sessionStorage.getItem("exit-intent-dismissed")) return;

    readyTimer.current = setTimeout(() => {
      isReady.current = true;
    }, 5000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!isReady.current) return;
      if (hasShown.current) return;
      if (e.clientY > 20) return;
      hasShown.current = true;
      setVisible(true);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (readyTimer.current) clearTimeout(readyTimer.current);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("exit-intent-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    const interests = ctx.tag ? [ctx.tag] : [];

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
    sessionStorage.setItem("exit-intent-dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div className="exit-overlay" role="dialog" aria-modal="true" aria-label={ctx.headline}>
      <div className="exit-popup">
        <button className="exit-popup__close" aria-label="Close" onClick={dismiss}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="16" height="16" aria-hidden>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="exit-popup__success">
            <span className="exit-popup__emoji">🎉</span>
            <h2 className="exit-popup__heading">You&apos;re in!</h2>
            <p className="exit-popup__sub">We&apos;ll send you the best jobs abroad. Talk soon.</p>
            <button onClick={dismiss} className="exit-popup__done">Close</button>
          </div>
        ) : (
          <>
            <span className="exit-popup__emoji">{ctx.emoji}</span>
            <h2 className="exit-popup__heading">{ctx.headline}</h2>
            <p className="exit-popup__sub">{ctx.sub}</p>
            <form onSubmit={handleSubmit} className="exit-popup__form" noValidate>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="exit-popup__input"
                aria-label="Email address"
                required
              />
              {error && <p className="exit-popup__error">{error}</p>}
              <button type="submit" className="exit-popup__submit">
                {ctx.cta}
              </button>
            </form>
            <div className="exit-popup__divider">
              <span>or</span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="exit-popup__whatsapp"
              onClick={dismiss}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              Chat with us on WhatsApp instead
            </a>
          </>
        )}
      </div>
    </div>
  );
}
