import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import TourBookingForm from "./TourBookingForm";

export const metadata: Metadata = {
  title: "Book a Daycare Tour | Mill Creek Childcare",
  description:
    "Schedule a relaxed, no-pressure daycare tour at Mill Creek Childcare. Meet our caregivers, explore our space, and see if we’re the right fit for your family.",
};

export default function BookTourPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream via-cream-light to-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pink/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container-custom relative z-10 max-w-3xl text-center">
          <h1 className="text-navy mb-4">
            Schedule a Daycare Tour
          </h1>

          <p className="text-xl text-navy/80 mb-6">
            Visit our home, meet our caregivers, and experience the warm,
            nurturing environment where your child will learn and grow.
          </p>

          <p className="text-sm text-navy/60">
            Tours are relaxed, friendly, and completely pressure-free.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">

            {/* LEFT: EXPECTATIONS / TRUST */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl mb-4">
                What You’ll Experience
              </h2>

              <p className="text-navy/70 mb-6">
                Choosing childcare is a big decision. Our tours are designed to
                help you feel confident, informed, and comfortable — without
                any pressure to enroll.
              </p>

              <ul className="space-y-4">
                {[
                  "Meet our caregivers and ask questions",
                  "See indoor and outdoor play spaces",
                  "Learn about daily routines and learning activities",
                  "Discuss availability and next steps if interested",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span className="text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* SOFT EXIT */}
              <p className="mt-8 text-sm text-navy/60">
                Just have a quick question?
                <Link
                  href="/contact"
                  className="ml-1 text-primary font-semibold underline"
                >
                  Contact us instead
                </Link>
              </p>
            </div>

            {/* RIGHT: FORM (PRIMARY ACTION) */}
            <div className="lg:col-span-3">
              <div className="max-w-xl ml-auto">
                <TourBookingForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
