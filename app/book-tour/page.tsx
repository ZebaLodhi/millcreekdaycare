import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import TourBookingForm from "./TourBookingForm";

export const metadata: Metadata = {
  title: "Schedule a Daycare Tour",
  description:
    "Book a tour of Millcreek Home Childcare. See our nurturing environment and learn how we can support your child's growth and development.",
};

export default function BookTourPage() {
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
                  <Link href="/" className="text-primary hover:text-pink-dark">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-navy/70">Book a Tour</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-navy mb-4">Schedule a Daycare Tour</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Come see our warm, nurturing environment firsthand. During your visit,
            you&apos;ll meet our caregivers, explore our play and learning spaces,
            and discover how we can support your child&apos;s unique journey.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <TourBookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
