"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-modal="false">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__text">
          <p className="cookie-banner__heading">🍪 We use cookies</p>
          <p className="cookie-banner__body">
            We use cookies to improve your experience and analyse site traffic. By clicking{" "}
            <strong>Accept</strong>, you consent to our use of cookies in line with UK &amp; EU GDPR.{" "}
            <Link href="/privacy" className="cookie-banner__link">
              Privacy policy
            </Link>
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button onClick={decline} className="cookie-banner__btn cookie-banner__btn--decline">
            Decline
          </button>
          <button onClick={accept} className="cookie-banner__btn cookie-banner__btn--accept">
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
