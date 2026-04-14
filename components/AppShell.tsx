"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import NewsletterSection from "@/components/NewsletterSection";
import BackToTopButton from "@/components/BackToTopButton";

const mainWrapperStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column" as const,
  width: "100%",
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div style={mainWrapperStyle}>{children}</div>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <ExitIntentPopup />
    </>
  );
}
