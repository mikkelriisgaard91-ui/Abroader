import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abroader.io"),
  title: "Abroader — Your life abroad starts here",
  description:
    "Browse remote jobs, language jobs, seasonal jobs and volunteering opportunities abroad",
  manifest: "/site.webmanifest",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Abroader",
              url: "https://www.abroader.io",
              logo: "https://www.abroader.io/logo-abroader.png",
              description:
                "Abroader helps people find remote jobs, language jobs, seasonal work, volunteering, co-living, retreats, and country guides for living and working abroad.",
              sameAs: [
                "https://www.instagram.com/abroader.io/",
                "https://www.tiktok.com/@abroader.io/",
                "https://www.youtube.com/@abroader",
                "https://www.facebook.com/abroader.io/",
                "https://www.linkedin.com/company/abroader-io/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Abroader",
              url: "https://www.abroader.io",
            }),
          }}
        />
        <AppShell>{children}</AppShell>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
