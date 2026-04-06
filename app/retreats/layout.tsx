import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Rock_Salt } from "next/font/google";
import "../remote-jobs/remote-jobs.css";
import "../language-jobs/language-jobs.css";
import "./retreats.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});
const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rock-salt",
});

export const metadata: Metadata = {
  title: "Retreats — Abroader",
  description:
    "Surf, yoga, kitesurf, and more—filter retreats by category, trip type, region, and budget. Partner listings with full details on BookSurfCamps.",
};

export default function RetreatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`retreats-surface ${inter.variable} ${plusJakarta.variable} ${rockSalt.variable} font-rj-body text-[#2a3d42] antialiased selection:bg-[rgba(36,99,116,0.12)] selection:text-[#246374]`}
      style={{ margin: 0, padding: 0 }}
    >
      {children}
    </div>
  );
}
