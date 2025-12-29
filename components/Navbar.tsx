'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/mission', label: 'Our Mission' },
    { href: '/programs', label: 'Programs' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-soft'
          : 'bg-white shadow-soft'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-28">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-4 hover:opacity-90 transition-opacity"
            aria-label="Mill Creek Home Childcare Home"
          >
            <Image
              src="/images/logo.png"
              alt="Mill Creek Home Childcare logo"
              width={500}
              height={260}
              className="h-20 w-auto"
              priority
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xl font-display font-bold text-navy">
                Mill Creek
              </span>
              <span className="text-sm font-medium text-navy/70">
                Home Childcare
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-3">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'rounded-full font-semibold bg-transparent text-lg px-5 py-2 tracking-wide transition-colors',
                          isActive(link.href)
                            ? 'text-primary bg-secondary/20'
                            : 'text-navy hover:text-primary hover:bg-secondary/10'
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              className="ml-2 text-lg px-6 py-2 rounded-full"
            >
              <Link href="/book-tour">Book a Tour</Link>
            </Button>
          </div>

          {/* MOBILE MENU */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                {isOpen ? (
                  <X className="h-6 w-6 text-navy" />
                ) : (
                  <Menu className="h-6 w-6 text-navy" />
                )}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] bg-white">
              <SheetHeader>
                <SheetTitle className="text-navy font-display text-xl">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    asChild
                    className={cn(
                      'justify-start text-left h-14 px-4 text-lg font-semibold rounded-lg',
                      isActive(link.href)
                        ? 'text-primary bg-secondary/20'
                        : 'text-navy hover:text-primary hover:bg-secondary/10'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}

                <Button
                  asChild
                  className="mt-4 text-lg py-3 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/book-tour">Book a Tour</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  );
}
