import da from "./da";
import en from "./en";
import pl from "./pl";
import type { Locale, Translations } from "./types";

export type { Locale, Translations } from "./types";
export { LOCALES, LOCALE_COOKIE } from "./types";

const dictionaries: Record<Locale, Translations> = { en, da, pl };

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale] ?? dictionaries.en;
}
