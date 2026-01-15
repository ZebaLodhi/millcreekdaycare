import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutPreview from "@/components/AboutPreview";
import ProgramsPreview from "@/components/ProgramsPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

/* ================================
   Page Metadata
   (Inherits OG + Twitter from layout.tsx)
================================ */

export const metadata: Metadata = {
  title: "Mill Creek Child Care – Where Every Child’s Journey Begins",
  description:
    "A warm, nurturing home environment where children learn, grow, and thrive through play-based discovery and personalized care.",
};

/* ================================
   Home Page
================================ */

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: "Mill Creek Child Care",
    description:
      "A warm, nurturing home environment where children learn, grow, and thrive through play-based discovery and personalized care.",
    url: "https://www.millcreekhomechildcare.com",
    telephone: "(123) 456-7890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Millcreek Lane",
      addressLocality: "Your City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "US",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 07:00-18:00",
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <Features />
      <AboutPreview />
      <ProgramsPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
