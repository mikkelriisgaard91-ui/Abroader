"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useEffect, useState } from "react";
import { verticals } from "@/lib/verticals";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="site-nav__icon" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    startTransition(() => setMenuOpen(false));
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={`site-nav${menuOpen ? " site-nav--open" : ""}`}>
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__brand" aria-label="Abroader home">
          <img src="/logo-abroader.png" alt="" className="site-nav__logo" />
        </Link>

        <button
          type="button"
          className="site-nav__menu-btn"
          aria-expanded={menuOpen}
          aria-controls="site-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav id="site-nav-menu" className="site-nav__links" aria-label="Main navigation">
          {verticals.map((v) => {
            const active = pathname === v.href || pathname.startsWith(`${v.href}/`);
            return (
              <Link
                key={v.href}
                href={v.href}
                className={`site-nav__link${active ? " site-nav__link--active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <span aria-hidden style={{ marginRight: "0.4rem" }}>
                  {v.emoji}
                </span>
                {v.title}
              </Link>
            );
          })}
        </nav>
      </div>

      {menuOpen ? (
        <button type="button" className="site-nav__scrim" tabIndex={-1} aria-label="Close menu" onClick={() => setMenuOpen(false)} />
      ) : null}
    </header>
  );
}
