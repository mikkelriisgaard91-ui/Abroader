import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "European Country Guides — Abroader",
  description:
    "Remote work guides for Europe: visas, cost of living, best cities, taxes and community tips for digital nomads and expats.",
};

export default function GuidesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        fontFamily: `${inter.style.fontFamily}, system-ui, -apple-system, sans-serif`,
        flex: 1,
        width: "100%",
        color: "#171717",
        backgroundColor: "#fafafa",
      }}
    >
      {children}
    </div>
  );
}
