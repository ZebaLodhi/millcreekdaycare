import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-accent">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl text-navy mb-4">
          Ready to Join Our Family?
        </h2>
        <p className="text-lg text-navy/80 mb-8 max-w-2xl mx-auto">
          Schedule a visit to see our home childcare environment and meet our caring team.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="navy" size="lg">
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="tel:+13053210846">
              <Phone className="mr-2 h-4 w-4" />
              Call us! (305) 321-0846
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}



