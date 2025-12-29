import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/* ================================
   Fonts
================================ */

/* Fredoka – main site font */
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
})

/* Railey – Canva logo font (FIXED filename) */
const railey = localFont({
  src: '../public/fonts/Railey-PersonalUse.ttf',
  variable: '--font-railey',
  display: 'swap',
})

/* ================================
   Metadata
================================ */

export const metadata: Metadata = {
  metadataBase: new URL('https://millcreekchildcare.com'),
  title: {
    default: 'Millcreek Home Childcare - Nurturing Young Minds',
    template: '%s | Millcreek Home Childcare',
  },
  description:
    'A warm, nurturing home environment where children learn, grow, and thrive through play-based discovery and personalized care.',
  keywords: [
    'home childcare',
    'daycare',
    'childcare',
    'preschool',
    'infant care',
    'toddler program',
    'early childhood education',
    'play-based learning',
  ],
  authors: [{ name: 'Millcreek Home Childcare' }],
  creator: 'Millcreek Home Childcare',
  publisher: 'Millcreek Home Childcare',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://millcreekchildcare.com',
    siteName: 'Millcreek Home Childcare',
    title: 'Millcreek Home Childcare - Nurturing Young Minds',
    description:
      "Where every child's journey begins. A warm, nurturing home environment for play-based discovery and personalized care.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Millcreek Home Childcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Millcreek Home Childcare - Nurturing Young Minds',
    description:
      "Where every child's journey begins. Quality home childcare with personalized attention.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

/* ================================
   Root Layout
================================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${railey.variable}`}
    >
      <body className="font-fredoka antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


