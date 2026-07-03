import type { Locale } from "@/config/i18n";

export type LocalizedString = { en: string; da: string };
export type LocalizedStringArray = { en: string[]; da: string[] };

export function getLocalized(value: LocalizedString, locale: Locale): string {
  return value[locale] ?? value.en;
}

export function getLocalizedArray(value: LocalizedStringArray, locale: Locale): string[] {
  return value[locale] ?? value.en;
}
