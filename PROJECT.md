# PROJECT.md — Boutique Diving Bali

## Project Overview

**Project Name:** Boutique Diving Bali  
**Type:** Website (Next.js)  
**Description:** Indonesia's premier personal dive concierge — luxury private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond.  
**Live URL:** https://www.boutiquedivingbali.com (Coming Soon mode)  
**Preview URL:** https://www.boutiquedivingbali.com/preview (full homepage, not indexed)  
**Repository:** https://github.com/Raptor78Bali/boutique-diving-bali

## Status: ✅ HOMEPAGE COMPLETE — LIVE

### Completed Steps
- [x] Next.js project initialized (TypeScript, Tailwind, App Router)
- [x] shadcn/ui installed (button, badge, separator)
- [x] Fonts configured (Cormorant Garamond, DM Sans)
- [x] Brand design system implemented (CSS variables, animations)
- [x] Components created (AnimatedSection, JsonLd, FaqAccordion, Header)
- [x] Full 14-section homepage built (Task 2)
- [x] 8 service sub-pages created (placeholder)
- [x] sitemap.xml generated
- [x] llms.txt for AI search engines
- [x] Coming Soon landing page deployed
- [x] Full homepage moved to /preview (hidden, not indexed)
- [x] Vercel deployment complete
- [x] Custom domain connected

### Services (7 total)
1. Scuba Explorer (Ages 8-9)
2. Junior Open Water Diver (Ages 10-14)
3. Open Water Diver (Age 15+)
4. SSI Specialty Courses
5. Scuba Skills Update
6. Custom Fun Dives
7. Dive Butler Service

### Key Details
- **Email:** info@boutiquedivingbali.com
- **Stats:** 250+ dives, 15+ destinations
- **Trust strip:** Switzerland, Australia, Germany, UK, USA, Singapore

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Cormorant Garamond, DM Sans)
- **Hosting:** Vercel

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

## File Structure
```
boutique-diving-bali/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Coming Soon landing page
│   │   ├── preview/page.tsx   # Full 14-section homepage
│   │   ├── sitemap.ts
│   │   ├── services/           # 8 service pages
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── AnimatedSection.tsx
│       ├── FaqAccordion.tsx
│       ├── JsonLd.tsx
│       └── ui/
├── public/
│   └── llms.txt
└── package.json
```

## Next Steps
- [ ] Build out full service pages (replace placeholders)
- [ ] Add photo gallery
- [ ] Add real underwater photos (currently placeholders)
- [ ] Launch full site (remove Coming Soon)

## Contact
- **Owner:** Dominic Frei (SSI Scuba Diving Instructor)
- **Location:** Bali, Indonesia
- **Niche:** Luxury private diving, no groups, fully bespoke experiences