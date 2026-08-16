import Image from "next/image";
import Link from "next/link";
import { FLYT_TIL_PORTUGAL_PATH, portugalFooterContent } from "@/config/portugalLanding";

export default function PortugalFooter() {
  return (
    <footer className="py-14 lg:py-16 border-t border-base/10 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div>
            <a href={FLYT_TIL_PORTUGAL_PATH} className="flex shrink-0 items-center gap-2.5">
              <Image src="/logo.svg" alt="" width={177} height={160} className="h-8 w-auto" aria-hidden />
              <span className="text-xl font-extrabold tracking-tight text-base">Abroader</span>
            </a>
            <p className="text-sm mt-3 text-base/45 max-w-xs leading-relaxed">
              {portugalFooterContent.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3">
            {portugalFooterContent.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-base/55 hover:text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-base/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {portugalFooterContent.secondaryLinks.map((link) => (
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
              href={portugalFooterContent.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-base/55 hover:text-base transition-colors"
            >
              {portugalFooterContent.website.label} →
            </a>
            <p className="text-xs text-base/25">© {new Date().getFullYear()} Abroader. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
