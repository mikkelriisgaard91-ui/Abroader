import Link from "next/link";
import { landingFooter } from "@/config/abroaderLanding";

export default function LandingFooter() {
  return (
    <footer className="py-14 lg:py-16 border-t border-base/10 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div>
            <p className="font-bold text-lg tracking-tight text-base">Abroader</p>
            <p className="text-sm mt-2 text-base/45 max-w-xs leading-relaxed">
              {landingFooter.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3">
            {landingFooter.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={"external" in link && link.external ? "_blank" : undefined}
                rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-base/55 hover:text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-base/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {landingFooter.secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-base/40 hover:text-base/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1.5">
            <a
              href={landingFooter.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-base/55 hover:text-base transition-colors"
            >
              {landingFooter.website.label} →
            </a>
            <p className="text-xs text-base/25">
              © {new Date().getFullYear()} Abroader. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
