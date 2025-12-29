import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AboutPreview() {
  return (
    <section className="section bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=400&fit=crop"
              alt="Child learning at Millcreek"
              width={500}
              height={400}
              className="rounded-2xl shadow-soft-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=280&h=220&fit=crop"
              alt="Children playing together"
              width={280}
              height={220}
              className="absolute -bottom-8 -right-8 rounded-2xl shadow-soft-lg border-4 border-white hidden md:block"
            />
          </div>

          {/* Content */}
          <div>
            <Badge className="mb-6 bg-secondary text-white hover:bg-secondary/90 px-5 py-2 text-sm font-bold uppercase tracking-wide">
              About Us
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6">
              A Place Where Children Flourish
            </h2>
            <p className="text-navy/70 mb-4">
              At Millcreek Home Childcare, we believe every child deserves a nurturing
              environment that supports their natural curiosity and love of learning.
              Our experienced caregivers create meaningful experiences that help children
              develop confidence, creativity, and essential life skills.
            </p>
            <p className="text-navy/70 mb-6">
              With over a decade of experience in early childhood education, we've
              created a home away from home where children feel valued, respected,
              and inspired to reach their full potential.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}



