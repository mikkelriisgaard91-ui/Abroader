"use client";

import type { ResolvedRecruiter } from "@/config/recruiters";
import BrandLogo from "@/components/BrandLogo";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Footer({ recruiter }: { recruiter: ResolvedRecruiter }) {
  const { t } = useLocale();

  return (
    <footer className="py-12 border-t border-base/10 bg-ink">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <BrandLogo variant="light" />
          <p className="text-sm mt-3 text-base/45">{t.footer.tagline}</p>
          <p className="text-sm mt-0.5 text-base/35">
            {t.footer.pageBy} {recruiter.name}
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1.5">
          <a
            href="https://abroader.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-base/55 hover:text-base transition-colors"
          >
            abroader.io →
          </a>
          <p className="text-xs text-base/25">
            © {new Date().getFullYear()} Abroader. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
