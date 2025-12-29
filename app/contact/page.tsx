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
  title: "Contact Us",
  description:
    "Get in touch with Millcreek Home Childcare. Schedule a tour, ask questions, or learn more about enrollment.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Millcreek Lane\nYour City, State 12345",
      color: "#48D1CC",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(123) 456-7890",
      color: "#EED7F0",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@millcreekchildcare.com",
      color: "#8ADDE6",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday - Friday\n7:00 AM - 6:00 PM",
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
                  <Link href="/" className="text-primary hover:text-pink-dark">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-navy/70">Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-navy mb-4">Contact Us</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            We&apos;d love to hear from you and show you around
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl mb-6">Get In Touch</h2>
              <p className="text-navy/70 mb-8">
                Have questions about our programs or want to schedule a tour?
                We&apos;re here to help! Reach out to us through any of the methods below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: info.color + '30' }}
                      >
                        <IconComponent className="h-6 w-6" style={{ color: info.color }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">{info.title}</h4>
                        <p className="text-navy/70 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  );
                })}
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
          <CardContent className="p-0 h-96 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
            <div className="flex items-center gap-2 text-white text-lg">
              <MapPin className="h-6 w-6" />
              <span>Interactive map would be embedded here</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}



