import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abroader — International Recruitment",
  description: "Find your next opportunity abroad with Abroader.",
  openGraph: {
    title: "Abroader — International Recruitment",
    description: "Find your next opportunity abroad with Abroader.",
    siteName: "Abroader",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakarta.variable}>{children}</body>
    </html>
  );
}
