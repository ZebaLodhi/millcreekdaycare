import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary via-primary-light to-navy pt-28">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/3 -right-1/4 w-[70%] h-[120%] bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[50%] h-[70%] bg-pink/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">

          {/* LEFT: TEXT */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display font-bold leading-[1.08] mb-6">
              {/* Line 1 */}
              <span className="block text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem]">
                <span className="text-accent">Where </span>
                <span className="text-pink">Every </span>
                <span className="text-yellow">Child&apos;s</span>
              </span>

              {/* Line 2 */}
              <span className="block mt-1 text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem]">
                <span className="text-white">Journey </span>
                <span className="text-secondary">Begins</span>
              </span>
            </h1>

            <p className="max-w-[540px] text-white/90 text-lg mb-8">
              A warm, nurturing home environment where children learn, grow,
              and thrive through play-based discovery and personalized care.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/programs">Explore Programs</Link>
              </Button>

              <Button asChild variant="outline-light" size="lg">
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative w-full max-w-[560px] mx-auto lg:mx-0">
            <Image
              src="/images/gallery-1.jpg"
              alt="Child learning and playing"
              width={560}
              height={440}
              className="w-full h-auto rounded-3xl object-cover shadow-xl"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}

