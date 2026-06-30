"use client";

import { useState, useEffect } from "react";
import BrandLogo from "@/components/BrandLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Nav() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.jobs, href: "#jobs" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.forEmployers, href: "#employers" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-base/90 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <BrandLogo showTagline />

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <a href="#contact" className="btn-primary text-sm px-5 py-2.5">
              {t.nav.getInTouch}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              className="w-11 h-11 flex flex-col justify-center items-center gap-[5px]"
              onClick={() => setMenuOpen(true)}
              aria-label={t.nav.openMenu}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} className="block h-0.5 w-6 rounded-full bg-ink" />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-center items-center gap-8 bg-base">
          <button
            type="button"
            className="absolute top-5 right-6 w-11 h-11 flex items-center justify-center text-2xl text-ink"
            onClick={() => setMenuOpen(false)}
            aria-label={t.nav.closeMenu}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-4xl font-bold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-4 text-xl px-10 py-4 min-h-[56px]"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.getInTouch}
          </a>
        </div>
      )}
    </>
  );
}
