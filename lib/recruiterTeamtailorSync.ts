import type { RecruiterConfig } from "@/config/recruiters";
import {
  fetchTeamtailorUser,
  type TeamtailorUserProfile,
} from "@/lib/teamtailor";

function htmlToPlainText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function shortBioFromLongBio(longBio: string): string {
  const paragraph = longBio.split(/\n\n+/).find((part) => part.trim()) ?? longBio;
  const sentence = paragraph.match(/^[^.!?]+[.!?]/)?.[0]?.trim() ?? paragraph;
  if (sentence.length <= 220) return sentence;
  return `${sentence.slice(0, 217).trim()}…`;
}

function mergeProfile(config: RecruiterConfig, profile: TeamtailorUserProfile): RecruiterConfig {
  const longBioEn = htmlToPlainText(profile.descriptionHtml) || config.longBio.en;
  const titleEn = profile.title || config.title.en;

  return {
    ...config,
    teamtailorUserId: profile.id,
    name: profile.name || config.name,
    firstName: profile.firstName || config.firstName,
    title: {
      en: titleEn,
      da: config.title.da === config.title.en ? titleEn : config.title.da,
    },
    photoUrl: profile.photoUrl || config.photoUrl,
    shortBio: {
      en: shortBioFromLongBio(longBioEn),
      da: config.shortBio.da,
    },
    longBio: {
      en: longBioEn,
      da: config.longBio.da,
    },
    pullQuote: {
      en: `${titleEn} — building long-term talent pipelines across international markets.`,
      da: config.pullQuote.da,
    },
    email: profile.email || config.email,
    linkedIn: config.hideLinkedIn ? "" : profile.linkedIn || config.linkedIn,
    whatsappUrl: config.whatsappUrl || profile.whatsappUrl,
  };
}

/** Overlay live Teamtailor profile fields onto static recruiter config. */
export async function syncRecruiterFromTeamtailor(
  config: RecruiterConfig
): Promise<RecruiterConfig> {
  const profile = await fetchTeamtailorUser(config.teamtailorUserId, config.email);
  if (!profile) return config;

  return mergeProfile(config, profile);
}
