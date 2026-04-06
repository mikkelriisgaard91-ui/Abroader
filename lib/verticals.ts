export const verticals = [
  {
    title: "Remote Jobs",
    description: "Work from anywhere in the world. Browse fully remote roles across every industry and timezone.",
    href: "/remote-jobs",
    accent: "#246374",
    light: "#e8f4f7",
    emoji: "💻",
  },
  {
    title: "Language Jobs",
    description: "Put your language skills to work abroad. Teaching, translation, and bilingual roles worldwide.",
    href: "/language-jobs",
    accent: "#fcba36",
    light: "#fff8ec",
    emoji: "🗣️",
  },
  {
    title: "Hospitality",
    description: "Hotels, resorts, yachts and more. Live and work in incredible destinations around the globe.",
    href: "/hospitality",
    accent: "#8ed2e1",
    light: "#f0fafc",
    emoji: "🏨",
  },
  {
    title: "Volunteering",
    description: "Make a difference while experiencing the world. NGOs, conservation, and community projects.",
    href: "/volunteering",
    accent: "#246374",
    light: "#e8f4f7",
    emoji: "🌍",
  },
  {
    title: "Country Guides",
    description:
      "Visas, cost of living and best cities for remote workers across Europe — in-depth guides for your next base.",
    href: "/guides",
    accent: "#fcba36",
    light: "#fff8ec",
    emoji: "🗺️",
  },
];

export type Vertical = (typeof verticals)[number];
