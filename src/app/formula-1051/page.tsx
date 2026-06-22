import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Formula1051Content from "@/components/Formula1051Page";

export const metadata: Metadata = {
  title: "Formula 1051 — 10 Year Ceramic Coating | 5 Star Shine Auto Detail LLC",
  description:
    "Formula 1051 by AvantGuard Coatings: a professional-grade 10-year ceramic coating with 99.8 gloss rating, 8+ micron film build, and self-healing properties. Tampa, FL.",
};

export default function Formula1051Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-white">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Formula1051Content />
      </main>
      <Footer />
    </div>
  );
}
