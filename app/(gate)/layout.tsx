import type { Metadata } from "next";

import "../globals-gate.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abroader.io"),
  title: "Abroader — Coming soon",
  description: "Abroader is being rebuilt. Check back soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
