# 📝 Content Customization Guide

## Updating Business Information

### Contact Details
Update your contact information in these files:
- `components/Footer.tsx` - Footer contact section
- `app/contact/page.tsx` - Contact page details
- `app/page.tsx` - Homepage structured data

### Business Name & Branding
- `app/layout.tsx` - Site metadata and title
- `components/Navbar.tsx` - Logo and navigation
- `components/Footer.tsx` - Footer branding

## Modifying Content

### Homepage Sections
Edit `app/page.tsx` and the following components:
- `components/Hero.tsx` - Main headline and hero image
- `components/Features.tsx` - "Why Choose Us" features
- `components/AboutPreview.tsx` - About section preview
- `components/ProgramsPreview.tsx` - Programs showcase
- `components/Testimonials.tsx` - Parent testimonials
- `components/CTA.tsx` - Call to action section

### Programs
Edit the programs data in two places:
- `data/programs.json` - Program information
- `app/programs/page.tsx` - Programs page layout

### Testimonials
Update `data/testimonials.json`:
```json
{
  "id": "1",
  "content": "Your testimonial text...",
  "author": "Parent Name",
  "childInfo": "Parent of Child, Age",
  "initials": "PN"
}
```

### FAQ
Update `data/faq.json` with your questions and answers.

## Adding Images

1. Place images in `public/images/`
2. Reference them as `/images/filename.jpg`
3. Use the Next.js Image component for optimization

```tsx
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={500}
  height={400}
/>
```

## Changing Colors

Edit `tailwind.config.ts` to modify the color palette:
- `primary` - Main brand color (blue)
- `secondary` - Accent color (teal)
- `accent` - Light accent (light blue)
- `pink` - Pink accent
- `cream` - Background color
- `navy` - Dark text color

## Adding New Pages

1. Create a new folder in `app/` (e.g., `app/enrollment/`)
2. Add a `page.tsx` file
3. Add the route to navigation in `components/Navbar.tsx`
4. Add to footer links in `components/Footer.tsx`
5. Add to sitemap in `app/sitemap.ts`

## SEO Optimization

Each page can have custom metadata:
```tsx
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description for search engines",
};
```



