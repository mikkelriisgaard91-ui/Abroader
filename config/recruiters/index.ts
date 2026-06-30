import stefano from "./stefano";
import maleneMadsen from "./malene-madsen";
import marieSorensen from "./marie-sorensen";
import sofieJensen from "./sofie-jensen";
import tinaJakobsenObando from "./tina-jakobsen-obando";
import type { Locale } from "@/config/i18n";
import { getTranslations } from "@/config/i18n";
import type { RecruiterConfig } from "./types";
import { getRecruiterForLocale } from "./types";

export type { RecruiterConfig, ResolvedRecruiter, LocalizedString, LocalizedStringArray } from "./types";
export { getRecruiterForLocale };

export const recruiters: Record<string, RecruiterConfig> = {
  [stefano.slug]: stefano,
  [maleneMadsen.slug]: maleneMadsen,
  [marieSorensen.slug]: marieSorensen,
  [sofieJensen.slug]: sofieJensen,
  [tinaJakobsenObando.slug]: tinaJakobsenObando,
};

export const recruiterList: RecruiterConfig[] = Object.values(recruiters);

export const defaultRecruiter = maleneMadsen;

export function getRecruiterBySlug(slug: string): RecruiterConfig | undefined {
  return recruiters[slug];
}

export function recruiterMetadata(recruiter: RecruiterConfig, locale: Locale = "en") {
  const t = getTranslations(locale).metadata;
  return {
    title: `${recruiter.name} — ${t.title}`,
    description: t.description.replace("{name}", recruiter.name),
    openGraph: {
      title: `${recruiter.name} — ${t.ogTitle}`,
      description: t.ogDescription.replace("{name}", recruiter.name),
      siteName: "Abroader",
    },
  };
}
