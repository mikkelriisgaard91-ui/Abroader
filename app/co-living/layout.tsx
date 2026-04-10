import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Rock_Salt } from "next/font/google";
import "../remote-jobs/remote-jobs.css";
import "../language-jobs/language-jobs.css";

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
  title: "Community Co-Living abroad — Abroader",
  description:
    "Community co-living for remote workers: coworking, events, and like-minded people in Europe, Africa, and South America. Compare destinations, monthly prices in EUR, and what is included.",
};

export default function CoLivingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} ${plusJakarta.variable} ${rockSalt.variable} font-rj-body bg-rj-bg text-rj-fg antialiased selection:bg-rj-primary selection:text-rj-on-primary`}
      style={{ margin: 0, padding: 0 }}
    >
      {children}
    </div>
  );
}
