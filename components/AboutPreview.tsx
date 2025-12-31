import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AboutPreview() {
  return (
    <section className="section bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Owner Image */}
          <div className="relative flex justify-center">
            <Image
              src="/images/batool.png"
              alt="Batool - Owner of Shady Grove Children's Place"
              width={400}
              height={500}
              className="rounded-2xl shadow-soft-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <Badge className="mb-6 bg-secondary text-white hover:bg-secondary/90 px-5 py-2 text-sm font-bold uppercase tracking-wide">
              About the Owner
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6">
              Meet Batool
            </h2>
            <p className="text-navy/70 mb-4">
              As the owner and primary caregiver at Mill Creek Home Childcare, I'm a devoted mother of 3 children, with 6 years of experience in child care. I hold an Associate's Degree in Computer Science and I am deeply passionate about fostering a supportive and educational environment for children.
            </p>
            <p className="text-navy/70 mb-6">
              I decided to open my own daycare because of my love for nurturing young minds and witnessing their developmental milestones. I strive to provide a clean, secure, and compassionate space where children can learn, grow, and thrive.
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



