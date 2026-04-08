/** Rich landing layout inspired by partner pages; optional per listing `id`. */

export type ColivingGalleryImage = {
  src: string;
  alt: string;
};

export type ColivingHomeBlock = {
  name: string;
  subtitle: string;
  bullets: string[];
};

export type ColivingHighlightCard = {
  title: string;
  subtitle: string;
};

export type ColivingPricingTable = {
  /** Column headers (room types), rewritten */
  columnLabels: string[];
  rows: { period: string; amounts: string[] }[];
  footnote?: string;
};

export type ColivingFaqItem = {
  question: string;
  answer: string;
};

export type ColivingExtendedContent = {
  heroStats: string[];
  seasonLine?: string;
  amenityPills: string[];
  gallery: ColivingGalleryImage[];
  /** If set, workspace section uses these three shots; otherwise first three from `gallery`. */
  workspaceImages?: ColivingGalleryImage[];
  homes: {
    label: string;
    title: string;
    intro: string;
    blocks: ColivingHomeBlock[];
  };
  workspace: {
    label: string;
    title: string;
    paragraphs: string[];
    highlights: ColivingHighlightCard[];
    galleryCaptions?: string[];
  };
  community: {
    label: string;
    title: string;
    body: string;
  };
  destination: {
    title: string;
    paragraphs: string[];
  };
  pricing: {
    label: string;
    title: string;
    refundNote: string;
    guaranteeLine: string;
    table: ColivingPricingTable;
  };
  locals: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  hosts: {
    title: string;
    body: string;
  };
  location: {
    label: string;
    title: string;
    bullets: string[];
  };
  faq: ColivingFaqItem[];
};
