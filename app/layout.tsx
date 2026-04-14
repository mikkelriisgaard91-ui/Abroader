import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Abroader — Your life abroad starts here",
  description:
    "Browse remote jobs, language jobs, seasonal jobs and volunteering opportunities abroad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          backgroundColor: "var(--snow)",
          color: "var(--foreground)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <AppShell>{children}</AppShell>
        <CookieBanner />
      </body>
    </html>
  );
}
