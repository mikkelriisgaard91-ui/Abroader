"use client";

import type { Locale } from "@/config/i18n";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function FlagEn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="2.5" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="4" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2.5" />
    </svg>
  );
}

function FlagDa({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#C8102E" />
      <rect x="7" width="3" height="16" fill="#fff" />
      <rect y="6.5" width="24" height="3" fill="#fff" />
    </svg>
  );
}

const options: { locale: Locale; Flag: typeof FlagEn; label: string }[] = [
  { locale: "en", Flag: FlagEn, label: "EN" },
  { locale: "da", Flag: FlagDa, label: "DA" },
];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-white/80 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map(({ locale: optionLocale, Flag, label }) => {
        const active = locale === optionLocale;
        const ariaLabel =
          optionLocale === "en"
            ? t.languageSwitcher.switchToEnglish
            : t.languageSwitcher.switchToDanish;

        return (
          <button
            key={optionLocale}
            type="button"
            onClick={() => setLocale(optionLocale)}
            aria-label={ariaLabel}
            aria-pressed={active}
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              active
                ? "bg-accent text-white shadow-sm"
                : "text-ink-muted hover:text-ink hover:bg-base"
            }`}
          >
            <Flag className="w-4 h-2.5 rounded-[1px] overflow-hidden shrink-0" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
