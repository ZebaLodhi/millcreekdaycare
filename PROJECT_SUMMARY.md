# 📋 Project Summary

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Fredoka (display), Nunito (body)

## Architecture Overview

### App Router Structure
```
app/
├── layout.tsx          # Root layout with Navbar + Footer
├── page.tsx            # Homepage
├── globals.css         # Global styles
├── robots.ts           # SEO robots.txt
├── sitemap.ts          # SEO sitemap
├── about/page.tsx      # About page
├── mission/page.tsx    # Mission page
├── programs/page.tsx   # Programs page
├── gallery/page.tsx    # Gallery page
└── contact/page.tsx    # Contact page
```

### Components
```
components/
├── Navbar.tsx          # Navigation (client component)
├── Footer.tsx          # Footer
├── Hero.tsx            # Homepage hero section
├── Features.tsx        # Feature cards
├── AboutPreview.tsx    # About section preview
├── ProgramsPreview.tsx # Programs showcase
├── Testimonials.tsx    # Testimonials section
├── CTA.tsx             # Call-to-action section
└── ContactForm.tsx     # Contact form (client component)
```

### Data Layer
```
data/
├── programs.json       # Program information
├── testimonials.json   # Parent testimonials
└── faq.json            # FAQ content
```

### Utilities
```
lib/
├── utils.ts            # Helper functions
└── validators.ts       # Form validation
```

### Type Definitions
```
types/
└── index.ts            # TypeScript interfaces
```

## Key Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (metadata, structured data, sitemap)
- ✅ Fast performance (Next.js image optimization)
- ✅ Accessible (semantic HTML, ARIA labels)
- ✅ Modern animations (CSS transitions)
- ✅ Type-safe (TypeScript)

## Design System

### Colors
- Primary: `#4877AD` (Navy Blue)
- Secondary: `#48D1CC` (Teal)
- Accent: `#8ADDE6` (Light Blue)
- Pink: `#EED7F0`
- Cream: `#FFF4E8` (Background)

### Typography
- Display: Fredoka (headings)
- Body: Nunito (paragraphs, UI)

### Spacing
- Uses Tailwind's default spacing scale
- Section padding: `py-16 md:py-24`
- Container max-width: `1280px`

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)



