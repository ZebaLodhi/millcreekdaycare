import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Millcreek Home Childcare - our experienced caregivers, nurturing environment, and commitment to early childhood education.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Love & Nurturing",
      description: "Every child is treated with warmth, kindness, and the love they deserve to feel secure and valued.",
    },
    {
      title: "Play-Based Learning",
      description: "Children learn best through play. We create meaningful experiences that spark curiosity and discovery.",
    },
    {
      title: "Individual Attention",
      description: "Small group sizes ensure each child receives personalized care tailored to their unique needs.",
    },
    {
      title: "Safe Environment",
      description: "A secure, home-like setting where children feel comfortable and parents have peace of mind.",
    },
    {
      title: "Family Partnership",
      description: "We believe in working closely with families to support each child's growth and development.",
    },
    {
      title: "Joyful Exploration",
      description: "Encouraging children to explore, question, and discover the world around them with wonder.",
    },
  ];

  const borderColors = ['#48D1CC', '#8ADDE6', '#EED7F0', '#4877AD', '#F7D154', '#48D1CC'];

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
                <BreadcrumbPage className="text-navy/70">About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-navy mb-4">About Us</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Discover the heart behind Millcreek Home Childcare
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center items-center h-full">
              <Image
                src="/images/pic1.jpg"
                alt="Children learning together at Mill Creek Home Childcare"
                width={500}
                height={400}
                className="rounded-2xl shadow-soft-lg object-cover w-full max-w-md"
              />
            </div>
            <div>
              <Badge className="mb-6 bg-secondary text-white hover:bg-secondary/90 px-5 py-2 text-sm font-bold uppercase tracking-wide">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl mb-6">A Place Where Children Flourish</h2>
              <p className="text-navy/70 mb-4">
                At Millcreek Home Childcare, we believe every child deserves a nurturing environment
                that supports their natural curiosity and love of learning. Our experienced caregivers
                create meaningful experiences that help children develop confidence, creativity, and
                essential life skills.
              </p>
              <p className="text-navy/70 mb-6">
                With over a decade of experience in early childhood education, we&apos;ve created a home
                away from home where children feel valued, respected, and inspired to reach their
                full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 border-l-4 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all"
                style={{ borderLeftColor: borderColors[index] }}
              >
                <CardHeader className="p-8 pb-0">
                  <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-3">
                  <p className="text-navy/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}



