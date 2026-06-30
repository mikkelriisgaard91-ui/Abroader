import type { Metadata } from "next";
import { Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";

import "./globals-preview.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-tagline",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abroader.io"),
  title: "Abroader — International Recruitment",
  description: "Find your next opportunity abroad with Abroader.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Abroader — International Recruitment",
    description: "Find your next opportunity abroad with Abroader.",
    siteName: "Abroader",
  },
};

export default function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`preview-root ${plusJakarta.variable} ${dancingScript.variable}`}>{children}</div>;
}
