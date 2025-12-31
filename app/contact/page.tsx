import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Millcreek Home Childcare",
  description:
    "Have questions about Millcreek Home Childcare? Contact us to learn more about our programs, availability, and enrollment process.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Mill Creek Home Childcare\n7300, Miller Fall Road\nRockville, MD 20855",
      color: "#48D1CC",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(305) 321-0846",
      color: "#EED7F0",
    },
    {
      icon: Mail,
      title: "Email",
      content: "bfali414@gmail.com",
      color: "#8ADDE6",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday – Friday\n7:00 AM – 6:00 PM",
      color: "#4877AD",
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
                  <Link
                    href="/"
                    className="text-primary hover:text-pink-dark"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-navy/70">
                  Contact Us
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-navy mb-4">We’re Here to Help</h1>

          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Have a question about our childcare programs, daily routines, or
            enrollment process? Reach out anytime and we’ll be happy to help.
          </p>

          {/* Intent clarity */}
          <p className="mt-6 text-sm text-navy/60">
            Looking to visit in person?{" "}
            <Link
              href="/book-tour"
              className="text-primary font-semibold underline"
            >
              Schedule a daycare tour
            </Link>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl mb-4">Get in Touch</h2>

              <p className="text-navy/70 mb-8">
                We know choosing childcare is a big decision. Whether you’re
                gathering information or just starting your search, we’re happy
                to answer your questions and guide you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${info.color}30` }}
                      >
                        <IconComponent
                          className="h-6 w-6"
                          style={{ color: info.color }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">
                          {info.title}
                        </h4>
                        <p className="text-navy/70 whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Secondary CTA */}
              <div className="mt-10 p-4 rounded-xl bg-secondary/10">
                <p className="text-sm text-navy/70">
                  Want to see our space, meet our caregivers, and experience our
                  environment firsthand?
                </p>
                <Link
                  href="/book-tour"
                  className="inline-block mt-2 text-primary font-semibold underline"
                >
                  Book a daycare tour →
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-cream">
        <Card className="border-0 rounded-none">
          <CardContent className="p-0 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.5!2d-77.1!3d39.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA2JzAwLjAiTiA3N8KwMDYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&q=7300+Miller+Fall+Road,+Rockville,+MD+20855"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mill Creek Home Childcare Location"
            />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
