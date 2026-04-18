"use client";

import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/447344033843";

export default function WhatsAppButton() {
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Auto-show the bubble after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setBubbleVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBubbleVisible(false);
    setDismissed(true);
  };

  return (
    <div className="whatsapp-fab-wrap">
      {/* Chat bubble */}
      <div className={`whatsapp-bubble${bubbleVisible ? " whatsapp-bubble--visible" : ""}`} role="status" aria-live="polite">
        <button
          className="whatsapp-bubble__close"
          aria-label="Dismiss"
          onClick={dismiss}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="12" height="12" aria-hidden>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <p className="whatsapp-bubble__heading">👋 Hey there!</p>
        <p className="whatsapp-bubble__text">Ask us anything — we usually reply in minutes.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-bubble__cta"
        >
          Start a chat
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      {/* Main button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="whatsapp-fab"
        onClick={() => setBubbleVisible(false)}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
        {/* Pulse ring */}
        <span className="whatsapp-fab__pulse" aria-hidden />
      </a>
    </div>
  );
}
