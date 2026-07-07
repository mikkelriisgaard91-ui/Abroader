"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { homeNavCta, homeNavLinks } from "@/config/homeNav";

function NavItem({
  href,
  label,
  className,
  onNavigate,
  isActive,
  external,
}: {
  href: string;
  label: string;
  className: string;
  onNavigate?: () => void;
  isActive?: boolean;
  external?: boolean;
}) {
  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onNavigate}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "text-ink font-semibold" : ""}`}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function HomeNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const closeMenu = () => setMenuOpen(false);

  const isLinkActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-base/85 backdrop-blur-xl shadow-sm border-b border-border/60"
            : "bg-base/80 backdrop-blur-md border-b border-border/30"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between gap-4">
          <BrandLogo showTagline />

          <div className="hidden md:flex items-center gap-6">
            {homeNavLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                external={Boolean("external" in link && link.external)}
                isActive={isLinkActive(link.href)}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-200"
              />
            ))}
            <Link
              href={homeNavCta.href}
              className="btn-primary text-sm px-5 py-2.5"
              aria-current={isLinkActive(homeNavCta.href) ? "page" : undefined}
            >
              {homeNavCta.label}
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-0.5 w-6 rounded-full bg-ink" />
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
            aria-label="Close menu"
          >
            ✕
          </button>
          {homeNavLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              external={Boolean("external" in link && link.external)}
              isActive={isLinkActive(link.href)}
              className="text-3xl font-bold text-ink"
              onNavigate={closeMenu}
            />
          ))}
          <Link
            href={homeNavCta.href}
            className="btn-primary mt-4 text-xl px-10 py-4 min-h-[56px]"
            onClick={closeMenu}
            aria-current={isLinkActive(homeNavCta.href) ? "page" : undefined}
          >
            {homeNavCta.label}
          </Link>
        </div>
      )}
    </>
  );
}
