import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore our age-appropriate childcare programs for infants, toddlers, and preschoolers. Play-based learning designed to nurture growth at every stage.",
};

export default function ProgramsPage() {
  const programs = [
    {
      id: "infant",
      title: "Infant Care",
      ageRange: "6 weeks - 18 months",
      image: "/images/baby2.jpg",
      description: "Gentle, responsive care that nurtures your baby's development through sensory exploration, secure attachments, and loving interactions. Our infant program focuses on creating a safe, warm environment where your little one can grow and thrive.",
      features: [
        "Individualized feeding and sleep schedules",
        "Tummy time and motor skill development",
        "Sensory exploration activities",
        "Language development through songs and stories",
        "Daily communication with parents",
        "Safe, nurturing environment",
      ],
    },
    {
      id: "toddler",
      title: "Toddler Program",
      ageRange: "18 months - 3 years",
      image: "/images/toddler1.jpg",
      description: "Active learning experiences that support language development, motor skills, and growing independence. Our toddler program encourages exploration and discovery while building essential social and emotional skills.",
      features: [
        "Language-rich environment",
        "Art and creative expression",
        "Gross motor play and outdoor activities",
        "Introduction to sharing and cooperation",
        "Potty training support",
        "Structured daily routines",
      ],
    },
    {
      id: "preschool",
      title: "Preschool",
      ageRange: "3 - 5 years",
      image: "/images/preschool2.jpg",
      description: "Kindergarten preparation through structured learning, social skills development, and creative expression. Our preschool program builds confidence and school readiness while keeping the joy of learning alive.",
      features: [
        "Early literacy and math concepts",
        "Science and nature exploration",
        "Social-emotional development",
        "Creative arts and music",
        "Physical education and outdoor play",
        "Kindergarten readiness preparation",
      ],
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-cream via-cream-light to-secondary/20 relative overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pink/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container-custom relative z-10 text-center mt-12">
          <h1 className="text-navy mb-4">Our Programs</h1>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto">
            Age-appropriate programs designed to nurture growth at every stage
          </p>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, index) => (
        <section 
          key={program.id} 
          id={program.id}
          className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="container-custom">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                <div className="relative">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-soft-lg w-full"
                  />
                </div>
              </div>
              <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
                <h2 className="text-3xl md:text-4xl mb-3">{program.title}</h2>
                <Badge className="mb-6 bg-accent text-navy hover:bg-accent/90 px-5 py-2 text-sm font-bold">
                  {program.ageRange}
                </Badge>
                <p className="text-navy/70 mb-6">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-navy">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTA />
    </>
  );
}



