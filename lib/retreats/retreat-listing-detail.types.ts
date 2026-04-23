export type RetreatListingGalleryImage = {
  src: string;
  alt: string;
};

export type RetreatListingDetail = {
  heroImageSrc?: string;
  galleryImages?: RetreatListingGalleryImage[];
  photoNote?: string;
  introParagraphs?: string[];
  whatsIncluded?: string[];
  programNotes?: string[];
  accommodationNotes?: string[];
  goodToKnow?: { title: string; body: string }[];
};
