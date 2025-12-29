import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Discover the mission and philosophy behind Millcreek Home Childcare. Learn about our commitment to nurturing every child's potential.",
};

export default function MissionPage() {
  const philosophyCards = [
    {
      title: "Play-Based Learning",
      description: "We believe children learn best through purposeful play. Our curriculum is designed to spark curiosity and foster a love of learning.",
      color: "#48D1CC",
    },
    {
      title: "Social-Emotional Growth",
      description: "Building confidence, empathy, and emotional intelligence is at the heart of everything we do.",
      color: "#8ADDE6",
    },
    {
      title: "Physical Development",
      description: "Daily opportunities for active play and outdoor exploration support healthy physical development.",
      color: "#EED7F0",
    },
    {
      title: "Creative Expression",
      description: "Art, music, and imaginative play allow children to express themselves and develop creativity.",
      color: "#4877AD",
    },
    {
      title: "Nature Connection",
      description: "We nurture an appreciation for the natural world through outdoor activities and environmental exploration.",
      color: "#48D1CC",
    },
    {
      title: "Family Partnership",
      description: "Strong communication with families ensures a consistent, supportive experience for every child.",
      color: "#8ADDE6",
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
                <BreadcrumbPage className="text-navy/70">Our Mission</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-navy mb-4">Our Mission</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Guiding every child toward their fullest potential
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section bg-white">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-br from-secondary to-primary rounded-3xl overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="text-white text-2xl md:text-3xl mb-6">Our Mission Statement</h2>
              <p className="text-white/95 text-lg md:text-xl leading-relaxed">
                To provide a nurturing, safe, and stimulating environment where every child is
                encouraged to explore, learn, and grow at their own pace. We are committed to
                partnering with families to foster the whole child—socially, emotionally,
                physically, and intellectually—preparing them for a lifetime of curiosity and success.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="section-header">
            <h2>Our Philosophy</h2>
            <p>The approach that guides our daily practice</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophyCards.map((card, index) => (
              <Card
                key={index}
                className="border-0 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: card.color }}
                />
                <CardHeader className="p-8 pb-0">
                  <CardTitle className="text-xl text-navy">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <p className="text-navy/70">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Our Vision</h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              We envision a community where every child enters school confident, curious, and
              ready to learn. Through our dedication to quality early childhood education,
              we strive to be a trusted partner for families and a leader in nurturing the
              next generation of creative thinkers and compassionate individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-5xl">
              <span title="Love">❤️</span>
              <span title="Learning">📚</span>
              <span title="Play">🎨</span>
              <span title="Growth">🌱</span>
              <span title="Community">👨‍👩‍👧‍👦</span>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}



