"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CTA_LINK, FLYT_TIL_PORTUGAL_PATH, portugalNavCta, portugalNavLinks } from "@/config/portugalLanding";

export default function PortugalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        aria-label="Hovednavigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-base/90 backdrop-blur-xl shadow-sm border-b border-border/60"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between gap-4">
          <a href={FLYT_TIL_PORTUGAL_PATH} className="flex shrink-0 items-center gap-2.5">
            <Image src="/logo.svg" alt="" width={177} height={160} priority className="h-8 w-auto" aria-hidden />
            <span className="text-xl font-extrabold tracking-tight">
              <span className={scrolled ? "text-ink" : "text-base"}>Abro</span>
              <span className="text-accent">ader</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {portugalNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled ? "text-ink-muted hover:text-ink" : "text-base/85 hover:text-base"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-5 py-2.5">
              {portugalNavCta.label}
            </a>
          </div>

          <button
            type="button"
            className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setMenuOpen(true)}
            aria-label="Åbn menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className={`block h-0.5 w-6 rounded-full ${scrolled ? "bg-ink" : "bg-base"}`} />
            ))}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-center items-center gap-8 bg-base/95 backdrop-blur-xl md:hidden">
          <button
            type="button"
            className="absolute top-5 right-6 w-11 h-11 flex items-center justify-center text-2xl text-ink"
            onClick={closeMenu}
            aria-label="Luk menu"
          >
            ✕
          </button>
          {portugalNavLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-3xl font-bold text-ink" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 text-xl px-10 py-4 min-h-[56px]"
            onClick={closeMenu}
          >
            {portugalNavCta.label}
          </a>
        </div>
      )}
    </>
  );
}
