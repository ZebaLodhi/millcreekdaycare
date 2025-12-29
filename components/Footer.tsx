import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏠</span>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-display font-bold">Millcreek</span>
                <span className="text-xs text-white/60">Home Childcare</span>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Providing quality home childcare services with love, dedication,
              and a commitment to nurturing young minds.
            </p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full"
                asChild
              >
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full"
                asChild
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full"
                asChild
              >
                <a href="mailto:info@millcreekchildcare.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-white/80 hover:text-accent transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-accent transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/programs#infant" className="text-white/80 hover:text-accent transition-colors">
                  Infant Care
                </Link>
              </li>
              <li>
                <Link href="/programs#toddler" className="text-white/80 hover:text-accent transition-colors">
                  Toddler Program
                </Link>
              </li>
              <li>
                <Link href="/programs#preschool" className="text-white/80 hover:text-accent transition-colors">
                  Preschool
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>123 Millcreek Lane<br />Your City, State 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+11234567890" className="hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@millcreekchildcare.com" className="hover:text-accent transition-colors">
                  info@millcreekchildcare.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <Separator className="mt-12 bg-white/20" />
        <div className="pt-8 text-center text-sm text-white/60">
          <p>&copy; {currentYear} Millcreek Home Childcare. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}



