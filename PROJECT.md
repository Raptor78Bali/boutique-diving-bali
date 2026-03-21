# PROJECT.md — Boutique Diving Bali

## Project Overview

**Project Name:** Boutique Diving Bali  
**Type:** Website (Next.js)  
**Description:** Indonesia's premier personal dive concierge — luxury private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond.  
**Target URL:** https://boutiquedivingbali.com  
**Repository:** https://github.com/Raptor78Bali/boutique-diving-bali

## Status: SETUP COMPLETE — Ready for Vercel Deployment

### Completed Steps
- [x] Next.js project initialized (TypeScript, Tailwind, App Router)
- [x] shadcn/ui installed (button, badge, separator)
- [x] Fonts configured (Cormorant Garamond, DM Sans, JetBrains Mono)
- [x] Brand design system implemented (CSS variables, animations)
- [x] Components created (AnimatedSection, JsonLd, FaqAccordion)
- [x] Placeholder homepage created
- [x] Dev server verified (localhost:3000)
- [x] GitHub push complete

### Pending
- [ ] Vercel deployment
- [ ] Custom domain configuration
- [ ] Full content pages

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Cormorant Garamond, DM Sans, JetBrains Mono)
- **Hosting:** Vercel (pending)

## Brand Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| brand-navy | #0A1628 | Primary dark |
| brand-ocean-midnight | #0B2A3A | Hero gradient |
| brand-teal | #0C7C6B | Primary accent |
| brand-gold | #C5A55A | Secondary accent |
| brand-cream | #FDF8F0 | Background |
| brand-text | #2D4349 | Body text |

### CSS Animations
- `ocean-shift` — Hero background movement
- `light-ray-drift` — Light rays effect
- `particle-float` — Bubbles rising
- `gold-glow` — Button glow effect
- `gradient-text-shift` — Gold text gradient animation
- `scroll-bounce` — Scroll indicator bounce
- `float-subtle` — Card float on hover

## File Structure
```
boutique-diving-bali/
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout + fonts
│   │   ├── page.tsx       # Homepage
│   │   └── globals.css    # Brand CSS + animations
│   └── components/
│       ├── AnimatedSection.tsx
│       ├── FaqAccordion.tsx
│       ├── JsonLd.tsx
│       └── ui/            # shadcn components
├── public/
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── components.json
```

## Next Steps

1. **Deploy to Vercel** (awaiting user confirmation)
2. **Connect custom domain** (boutiquedivingbali.com)
3. **Build out full pages:**
   - Services page
   - Destinations page
   - About page
   - Contact page
4. **Add photo gallery**
5. **SEO optimization**

## Contact
- **Owner:** Dominic Frei (SSI Scuba Diving Instructor)
- **Location:** Bali, Indonesia
- **Niche:** Luxury private diving, no groups, fully bespoke experiences