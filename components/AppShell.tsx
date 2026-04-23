"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import NewsletterSection from "@/components/NewsletterSection";
import BackToTopButton from "@/components/BackToTopButton";

function isOpportunitiesPath(pathname: string | null) {
  if (!pathname) return false;
  return pathname === "/opportunities" || pathname.startsWith("/opportunities/");
}

const mainWrapperStyle = {
  display: "flex",
  flexDirection: "column" as const,
  width: "100%",
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNewsletter = !isOpportunitiesPath(pathname);

  return (
    <>
      <Nav />
      <div style={mainWrapperStyle}>{children}</div>
      {showNewsletter ? <NewsletterSection /> : null}
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <ExitIntentPopup />
    </>
  );
}
