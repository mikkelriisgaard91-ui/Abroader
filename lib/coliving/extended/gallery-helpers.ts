import type { ColivingGalleryImage } from "./types";

/** Build `/public/coliving/{slug}/` image entries from downloaded partner filenames. */
export function colivingImgs(slug: string, label: string, files: readonly string[]): ColivingGalleryImage[] {
  return files.map((name, i) => ({
    src: `/coliving/${slug}/${name}`,
    alt: `${label} — photo ${i + 1}`,
  }));
}
