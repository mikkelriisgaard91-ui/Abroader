import { cookies } from "next/headers";
import { LOCALE_COOKIE, LOCALES, type Locale } from "@/config/i18n";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  return LOCALES.includes(value as Locale) ? (value as Locale) : "en";
}
