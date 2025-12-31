import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutPreview from "@/components/AboutPreview";
import ProgramsPreview from "@/components/ProgramsPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Mill Creek Childcare - Where Every Child's Journey Begins",
  description:
    "A warm, nurturing home environment where children learn, grow, and thrive through play-based discovery and personalized care.",
  alternates: {
    canonical: "https://millcreekchildcare.com/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: "Mill Creek Childcare",
    description:
      "A warm, nurturing home environment where children learn, grow, and thrive through play-based discovery and personalized care.",
    url: "https://millcreekchildcare.com",
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



