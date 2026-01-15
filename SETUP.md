# 🛠️ Setup Guide

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

## Installation

1. **Clone or download the project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View your site:**
   Open [http://localhost:3000](http://localhost:3000)

## Environment Variables (Optional)

Create a `.env.local` file for environment-specific settings:

```env
# Site URL (for SEO)
NEXT_PUBLIC_SITE_URL=https://www.millcreekhomechildcare.com

# Contact Form (if using an email service)
# EMAIL_SERVICE_API_KEY=your_api_key
```

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## Customization Checklist

- [ ] Update site title and description in `app/layout.tsx`
- [ ] Add your logo to `public/brand/`
- [ ] Replace placeholder images in `public/images/`
- [ ] Update contact information in components
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Update testimonials in `data/testimonials.json`
- [ ] Modify FAQ in `data/faq.json`

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Module not found errors:**
```bash
rm -rf node_modules
npm install
```

**TypeScript errors:**
```bash
npm run lint
```



