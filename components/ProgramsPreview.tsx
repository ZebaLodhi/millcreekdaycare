import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProgramsPreview() {
  const programs = [
    {
      id: "infant",
      title: "Infant Care",
      age: "6 weeks - 18 months",
      description: "Gentle, responsive care that nurtures your baby's development through sensory exploration and secure attachments.",
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&h=300&fit=crop",
    },
    {
      id: "toddler",
      title: "Toddler Program",
      age: "18 months - 3 years",
      description: "Active learning experiences that support language development, motor skills, and growing independence.",
      image: "https://images.unsplash.com/photo-1567448400815-46da0c3949e8?w=400&h=300&fit=crop",
    },
    {
      id: "preschool",
      title: "Preschool",
      age: "3 - 5 years",
      description: "Kindergarten preparation through structured learning, social skills development, and creative expression.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="section-header">
          <h2>Our Programs</h2>
          <p>Age-appropriate programs designed to nurture growth at every stage</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="group overflow-hidden p-0 border-0 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 rounded-2xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute bottom-4 left-4 bg-accent text-navy hover:bg-accent/90 px-4 py-2 text-sm font-bold">
                  {program.age}
                </Badge>
              </div>
              <CardHeader className="p-6 pb-0">
                <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-3">
                <p className="text-navy/70 mb-4">{program.description}</p>
                <Button variant="link" asChild className="p-0 h-auto text-navy font-bold hover:text-pink">
                  <Link href={`/programs#${program.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



