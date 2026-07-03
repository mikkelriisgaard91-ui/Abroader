"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { homeNavLinks } from "@/config/homeNav";

function NavItem({
  href,
  label,
  className,
  onNavigate,
  isActive,
}: {
  href: string;
  label: string;
  className: string;
  onNavigate?: () => void;
  isActive?: boolean;
}) {
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
          <BrandLogo />

          <div className="hidden md:flex items-center gap-8">
            {homeNavLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isLinkActive(link.href)}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-200"
              />
            ))}
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
              isActive={isLinkActive(link.href)}
              className="text-3xl font-bold text-ink"
              onNavigate={closeMenu}
            />
          ))}
        </div>
      )}
    </>
  );
}
