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

/* Railey – logo font */
const railey = localFont({
  src: '../public/fonts/Railey-PersonalUse.ttf',
  variable: '--font-railey',
  display: 'swap',
})

/* ================================
   Metadata (SEO + Facebook Fix)
================================ */

const SITE_URL = 'https://www.millcreekhomechildcare.com'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Mill Creek Child Care – Nurturing Young Minds',
    template: '%s | Mill Creek Child Care',
  },

  description:
    'A warm, nurturing home environment where children learn, grow, and thrive through play-based discovery and personalized care.',

  keywords: [
    'home child care',
    'daycare',
    'childcare',
    'preschool',
    'infant care',
    'toddler program',
    'early childhood education',
    'play-based learning',
    'family daycare',
  ],

  authors: [{ name: 'Mill Creek Child Care' }],
  creator: 'Mill Creek Child Care',
  publisher: 'Mill Creek Child Care',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Mill Creek Child Care',
    title: 'Mill Creek Child Care – Nurturing Young Minds',
    description:
      "Where every child’s journey begins. A warm, nurturing home environment for play-based learning and personalized care.",
    images: [
      {
        url: OG_IMAGE, // ✅ ABSOLUTE URL (CRITICAL)
        width: 1200,
        height: 630,
        alt: 'Mill Creek Child Care – Trusted Home Daycare',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mill Creek Child Care – Nurturing Young Minds',
    description:
      'Trusted home child care with personalized attention and play-based learning.',
    images: [OG_IMAGE], // ✅ ABSOLUTE URL
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
    <html lang="en" className={`${fredoka.variable} ${railey.variable}`}>
      <body className="font-fredoka antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
