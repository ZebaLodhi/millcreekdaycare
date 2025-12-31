import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a peek inside Millcreek Home Childcare. See our nurturing environment, happy children, and the activities we enjoy every day.",
};

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/images/gallery/2.jpeg",
      alt: "Children at Mill Creek Home Childcare",
    },
    {
      src: "/images/gallery/3.jpeg",
      alt: "Learning activities",
    },
    {
      src: "/images/gallery/4.jpeg",
      alt: "Play time",
    },
    {
      src: "/images/gallery/5.jpeg",
      alt: "Creative activities",
    },
    {
      src: "/images/gallery/6.jpeg",
      alt: "Fun moments",
    },
    {
      src: "/images/gallery/7.jpeg",
      alt: "Daily activities",
    },
    {
      src: "/images/gallery/8.jpeg",
      alt: "Happy children",
    },
    {
      src: "/images/gallery/9.jpeg",
      alt: "Learning together",
    },
    {
      src: "/images/gallery/10.jpeg",
      alt: "Enjoying daycare",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream via-cream-light to-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pink/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container-custom relative z-10 text-center">
          <Breadcrumb className="justify-center mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-primary hover:text-pink-dark">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-navy/70">Gallery</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-navy mb-4">Gallery</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            A peek inside our nurturing environment
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-semibold">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}



