import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
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
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      alt: "Children learning together",
      category: "Learning",
    },
    {
      src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop",
      alt: "Creative play time",
      category: "Play",
    },
    {
      src: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&h=400&fit=crop",
      alt: "Infant care",
      category: "Infant Care",
    },
    {
      src: "https://images.unsplash.com/photo-1567448400815-46da0c3949e8?w=600&h=400&fit=crop",
      alt: "Toddler activities",
      category: "Toddler",
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      alt: "Preschool learning",
      category: "Preschool",
    },
    {
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop",
      alt: "Art activities",
      category: "Art",
    },
    {
      src: "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=600&h=400&fit=crop",
      alt: "Reading time",
      category: "Learning",
    },
    {
      src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
      alt: "Outdoor play",
      category: "Outdoor",
    },
    {
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop",
      alt: "Music and movement",
      category: "Music",
    },
  ];

  const categories = ["All", "Learning", "Play", "Outdoor", "Art"];

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
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="px-6 py-2 bg-cream hover:bg-primary hover:text-white rounded-full font-semibold text-navy"
              >
                {category}
              </Button>
            ))}
          </div>

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



