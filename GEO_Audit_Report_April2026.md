# GEO Audit Report — Boutique Diving Bali
## Full Site Audit: All 13 Pages
## Date: April 16, 2026

---

## EXECUTIVE SUMMARY

### Score Breakdown

| Priority | Passed | Partial | Failed | N/A | Browser Test | Total Scorable |
|----------|--------|---------|--------|-----|--------------|----------------|
| HIGH     | 23     | 2       | 1      | 0   | 1            | 26 (+1 deferred) |
| MEDIUM   | 19     | 5       | 2      | 0   | 0            | 26             |
| LOW      | 9      | 3       | 4      | 3   | 0            | 16             |

### Overall GEO Readiness Score
Weighted scoring: HIGH = 5 pts (PASS=5, PARTIAL=3, FAIL=0), MEDIUM = 3 pts (PASS=3, PARTIAL=1.5, FAIL=0), LOW = 1 pt (PASS=1, PARTIAL=0.5, FAIL=0)

| Priority | Earned | Possible |
|----------|--------|----------|
| HIGH     | 121    | 130      |
| MEDIUM   | 64.5   | 78       |
| LOW      | 10.5   | 16       |

**Overall Score: 196 / 224 = 87.5%**

**Verdict: STRONG — with a handful of actionable fixes that would push this above 95%.**

---

## CRITICAL FAILURES (HIGH items marked FAIL)

| Item | Issue | Remediation Priority |
|------|-------|---------------------|
| 1.1 | **Amazonbot blocked in robots.txt** (Cloudflare-managed rule). Amazonbot is an AI search crawler, not a training bot. Blocking it prevents Alexa/Amazon AI surfaces from indexing the site. | **P1 — Fix immediately.** Override in Cloudflare dashboard or add explicit `User-agent: Amazonbot / Allow: /` after the Cloudflare-managed block. |

---

## FULL ITEM-BY-ITEM RESULTS

### Section 1 — Crawler Accessibility & Machine Readability

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 1.1 AI crawlers allowed | HIGH | **FAIL** | Cloudflare-managed robots.txt blocks `Amazonbot`. Applebot-Extended is also blocked (distinct from Applebot — Applebot itself is NOT blocked). All other search/AI bots (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Googlebot, Bingbot, MistralAI-User, Google-NotebookLM, Gemini-Deep-Research, GoogleAgent-URLContext) are NOT blocked. Training-only bots (GPTBot, ClaudeBot, Google-Extended, CCBot) are blocked — this is intentional and fine. | Unblock Amazonbot in Cloudflare. |
| 1.2 robots.txt valid | HIGH | PASS | Returns HTTP 200, plain text, has `User-agent: *` with `Allow: /`, includes `Sitemap:` directive. Uses Cloudflare Content-Signal format with proper header comments. | None |
| 1.3 All 13 pages return 200 | HIGH | PASS | All 13 URLs return HTTP 200 with no redirects. | None |
| 1.4 SSR content present | HIGH | PASS | Raw `curl` output contains: H1 ("Your Personal Diving"), meta description, canonical tag, OG tags, 11 JSON-LD blocks. All critical content is server-side rendered despite using animated wrappers (FadeInUp, FadeIn). Pages are NOT `"use client"` — only interactive components (Header, FaqAccordion) use that directive. | None |
| 1.5 sitemap.xml valid | HIGH | PASS | Returns 200, valid XML, all 13 pages listed with `<lastmod>` (2026-04-16), `<changefreq>`, and `<priority>`. Sitemap referenced in robots.txt. | None |
| 1.6 Canonical tags | HIGH | PASS | All 13 pages have canonical URLs set via Next.js `metadata.alternates.canonical`. Confirmed in raw HTML: `<link rel="canonical" href="..."/>`. All use `https://www.boutiquedivingbali.com` prefix. | None |
| 1.7 TTFB | MEDIUM | PASS | Homepage: 149ms. Dive Butler: 184ms. Both well under 800ms threshold. | None |
| 1.8 No rendering gates | HIGH | PASS | No `x-robots-tag` header. No `noindex` in any source file. No login walls, cookie walls, or consent gates. Skip-to-content link present for accessibility. | None |
| 1.9 HTTPS & TLS | HIGH | PASS | HTTP/2 200 over HTTPS. HSTS header present: `max-age=63072000; includeSubDomains; preload`. No certificate errors. Cloudflare + Vercel infrastructure. | None |

### Section 2 — llms.txt & AI-Facing Files

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 2.1 llms.txt exists | HIGH | PASS | Returns 200, well-structured Markdown. Has H1 (`# Boutique Diving Bali`), blockquote summary, H2 sections (About, Services, Destinations, Key Pages, Pricing, Founder). Comprehensive and accurate. | None |
| 2.2 llms-full.txt exists | HIGH | PASS | Returns HTTP 200 with `content-type: text/plain; charset=utf-8`. File exists and is served. | None |
| 2.3 Markdown page alternatives | LOW | FAIL | `/about.md` returns 404. No `.md` alternatives exist for any page. | Consider creating `.md` route alternatives for key pages (about, services). Low priority. |
| 2.4 ai.txt | LOW | FAIL | Returns 404. | Consider creating an `ai.txt` file. Very low priority — not widely adopted yet. |

### Section 3 — Semantic HTML Structure

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 3.1 One H1 per page | HIGH | PASS | All 13 pages have exactly 1 `<h1>` tag. Verified in source files. | None |
| 3.2 Logical heading hierarchy | MEDIUM | PASS | All pages follow H1 → H2 → H3 without skipping levels. Service pages use H2 for sections, H3 for sub-items. Footer uses H4 appropriately. | None |
| 3.3–3.4 Semantic landmarks | MEDIUM | PASS | All pages use `<main id="main-content">`. Header uses `<nav>` with proper structure. Footer uses `<footer>`. `<section>` elements used throughout. Breadcrumb navigation uses `<nav aria-label="Breadcrumb">` with semantic `<ol><li>`. Skip-to-content link in layout. | None |
| 3.5 Title tags | HIGH | PASS | All 13 pages have unique titles with brand name. Lengths: 25–55 characters (all within acceptable range). Examples: "Try Scuba Diving in Bali \| Boutique Diving Bali" (48 chars), "Contact \| Boutique Diving Bali" (30 chars), "Personal Dive Butler Indonesia \| Boutique Diving Bali" (53 chars). | None |
| 3.6 Meta descriptions | HIGH | PASS | All 13 pages have unique, descriptive meta descriptions. Lengths: 80–165 characters. All are descriptive and action-oriented. | None |
| 3.7 lang attribute | MEDIUM | PASS | `<html lang="en">` in layout.tsx. | None |
| 3.8 No content in iframes | LOW | PASS | No `<iframe>` elements found anywhere in the codebase. | None |

### Section 4 — Structured Data (JSON-LD)

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 4.1 Organization schema | HIGH | PASS | Present in layout.tsx as `@graph` with `@type: "Organization"`, `@id: ".../#organization"`. Includes: name, url, description, email, logo (ImageObject with dimensions), founder, contactPoint, areaServed, sameAs, dateModified. | None |
| 4.2 sameAs has 3+ URLs | MEDIUM | **FAIL** | Organization in layout.tsx has only 2 URLs: Instagram + Google Maps. ProfessionalService on homepage has only 1 (Instagram). Person schema has only 1 (Instagram). | Add more sameAs URLs: WhatsApp business profile, SSI profile, Facebook (if any), LinkedIn (if any). Target 3–5 URLs minimum. |
| 4.3 WebSite schema | MEDIUM | **PARTIAL** | WebSite schema exists in BOTH layout.tsx (with @id and publisher reference) AND page.tsx (standalone, without @id, URL uses `boutiquedivingbali.com` without www). Duplicate schemas for the same entity. No SearchAction. | Remove the duplicate WebSite schema from page.tsx. Keep only the one in layout.tsx. Consider adding SearchAction if site search is planned. |
| 4.4 LocalBusiness / ProfessionalService | HIGH | **PARTIAL** | Homepage has TWO business entity schemas: (1) `LocalBusiness` at line 38 with `url: "https://boutiquedivingbali.com"` (no www, no @id) and `image: "https://boutiquedivingbali.com/logo.svg"` (file does not exist — logo.svg is not in public/), (2) `ProfessionalService` at line 131 with `@id: ".../#localbusiness"`, correct www URL, correct image path. These are duplicates describing the same entity with inconsistent data. | Remove the `localBusinessSchema` object (lines 38–50) from page.tsx entirely. The ProfessionalService schema (lines 131–187) is the correct, comprehensive one. Fix the duplicate. |
| 4.5 Service schema on service pages | HIGH | PASS | All 8 service pages have Service schema with: name, description, provider (linked to Organization via @id), areaServed, serviceType, priceRange, dateModified. Some include audience age ranges. | None |
| 4.6 BreadcrumbList | HIGH | PASS | All sub-pages (11 of 13, excluding homepage which doesn't need one) have BreadcrumbList schema with proper 2–3 level hierarchy. Matches visible breadcrumb navigation. | None |
| 4.7 FAQPage schema | HIGH | PASS | FaqAccordion component auto-generates FAQPage schema from question/answer arrays. 57 total FAQ items across 9 pages (homepage + 8 services). Proper @type Question/Answer structure. | None |
| 4.8 Person schema | MEDIUM | PASS | Dominic Frei Person schema present on homepage (@id: ".../#founder") and about page. Includes: name, jobTitle, nationality, knowsAbout, knowsLanguage, sameAs, worksFor (linked to Organization). | None |
| 4.9 Article/BlogPosting | LOW | NOT_APPLICABLE | No blog exists on this site. | None |
| 4.10 Speakable | LOW | NOT_APPLICABLE | Not implemented. Very low adoption. | None |
| 4.11 JSON-LD validates | HIGH | **PARTIAL** | Most schemas are syntactically valid. Issues: (1) `localBusinessSchema` on homepage references non-existent `logo.svg`, (2) URL inconsistency — some schemas use `boutiquedivingbali.com` (no www), others use `www.boutiquedivingbali.com`. Canonical is `www.`. (3) Duplicate WebSite and business entity schemas on homepage. | Fix URL consistency (always use `www.`). Remove duplicate schemas. Fix the logo.svg reference. |
| 4.12 @id interlinking | MEDIUM | **PARTIAL** | Good interlinking exists: Organization `@id`, founder Person `@id`, ProfessionalService references founder via `@id`. WebSite references Organization publisher via `@id`. But the duplicate LocalBusiness schema lacks `@id` and is not interlinked. Service pages reference Organization provider via `@id`. | Remove the unlinked LocalBusiness duplicate. The existing @id graph is solid. |

### Section 5 — Content Structure for AI Extraction

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 5.1 Summary-first paragraph | HIGH | PASS | Homepage has a strong entity-rich opening paragraph in the "Why Boutique Diving Bali" section: "Boutique Diving Bali is a premium personal diving concierge service founded by Dominic Frei, an SSI-certified Swiss diving professional based in Bali, Indonesia since 2021..." Self-contained, entity-dense, extractable. All service pages open with descriptive paragraphs. | None |
| 5.2 Answer-shaped Q&A content | HIGH | PASS | 57 FAQ items across 9 pages with FAQPage schema. Questions are natural-language, answers are comprehensive (50–150 words each). Excellent for AI extraction. | None |
| 5.3 Self-contained paragraphs | MEDIUM | PASS | Paragraphs generally open with entity-rich subjects ("Boutique Diving Bali...", "Dominic...", "The Dive Butler...") rather than pronouns. Content is extractable without surrounding context. | None |
| 5.4 Paragraph/sentence length | LOW | PASS | Paragraphs are 2–4 sentences. Sentences are clear and well-structured. Written in concierge language, not academic prose. | None |
| 5.5 Statistics & quantitative data | MEDIUM | PASS | Homepage stats bar: "500+ Dives Completed", "100% Private & Bespoke", "15+ Destinations", "5★ Guest Experience". Service pages include specific details (depth limits, age ranges, dive counts). | None |
| 5.6 Expert quotes / blockquotes | LOW | **FAIL** | Testimonials section exists with 3 guest quotes, but uses styled `<div>` elements, not semantic `<blockquote>` tags. No attributed expert citations. | Use `<blockquote>` with `<cite>` for testimonials. Consider adding an industry expert quote or SSI reference. |
| 5.7 Outbound citations | MEDIUM | **PARTIAL** | Homepage links to SSI (divessi.com) and Ocean Sun (ocean-sun.com). Basic-diver links to SSI Basic Diver program. Open-water links to Wikipedia USAT Liberty article. Terms page links to DAN (Divers Alert Network). Good but limited — only 4 unique external authority domains across 13 pages. | Add more outbound citations: link to SSI from more service pages, link to Indonesian tourism authority, link to UNESCO for Komodo, link to marine conservation organizations. |
| 5.8 Content fluency | LOW | PASS | Content is polished, professional concierge language. No grammatical errors. Consistent tone throughout. | None |
| 5.9 Unique insight | MEDIUM | PASS | Strong differentiation: Dive Butler concept, personal concierge positioning, "not a dive shop" messaging, Swiss precision angle, military/security background. Content that AI models would identify as unique vs. generic dive shop content. | None |
| 5.10 No keyword stuffing | MEDIUM | PASS | No repetitive keyword patterns. Natural language throughout. Keywords appear in context. | None |
| 5.11 Lists & tables | LOW | **PARTIAL** | Footer uses `<ul>` lists. Service pages use styled div grids for features, phases, and comparisons — but not semantic `<ul>/<ol>/<table>` elements. No comparison tables for services or pricing. | Consider adding a service comparison table on the homepage or a dedicated services overview. Use `<ul>` for feature lists within service pages. |
| 5.12 Descriptive link anchors | LOW | PASS | Service cards use "Learn More →" which is acceptable in card context. Navigation links use descriptive names. "Read Full Story →", "Discover Dive Butler", "Visit Ocean Sun Dive Resort" are all descriptive. No "click here" patterns found. | None |

### Section 6 — Entity, Authority & E-E-A-T Signals

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 6.1 Brand name consistency | HIGH | PASS | "Boutique Diving Bali" appears in: H1 (via "Your Personal Diving Concierge in Paradise" + brand in subhead), `<title>`, Organization schema, ProfessionalService schema, footer, header logo, llms.txt. Consistent across all touchpoints. | None |
| 6.2 NAP consistency | MEDIUM | **PARTIAL** | Name consistent. Phone: +41791722403 in schemas and WhatsApp links. Email: info@boutiquedivingbali.com consistent. Address: "Tulamben" appears in ProfessionalService schema and partner section, but full street address is not provided anywhere. Footer shows only "Bali, Indonesia" — no Tulamben, no postal code. Contact page mentions "Tulamben, East Bali" in practical info. | Add consistent full address (Tulamben, Karangasem, Bali 80853, Indonesia) to footer, contact page, and all schemas. |
| 6.3 About page linked from homepage | MEDIUM | PASS | Homepage links to `/about` in the founder section ("Read Full Story →"), the "Why Boutique Diving Bali Exists" section, and the footer navigation. Header navigation also links to About. | None |
| 6.4 Founder visibility | HIGH | PASS | Dominic Frei prominently featured on homepage: dedicated founder section with photo, headshot overlay, bio, credentials badges. Person schema with @id. About page is a deep-dive into his background. Name appears across multiple service pages. | None |
| 6.5 Credentials visible | MEDIUM | PASS | "SSI Certified Professional" badge on homepage. "SSI-certified Swiss diving professional" in entity paragraph. About page details full credential history. SSI links provided. Ocean Sun partnership validates training credentials. | None |
| 6.6 Trust signals | MEDIUM | PASS | Stats bar (500+ dives, 100% private, 15+ destinations, 5★). Country trust indicators ("Trusted by guests from Switzerland, Australia, Germany, UK, USA, Singapore"). 3 testimonials with names/origins. SSI + Ocean Sun partnership. Military/security background. | None |
| 6.7 Customer reviews with schema | MEDIUM | **FAIL** | 3 testimonials exist on homepage with names, origins, and 5-star ratings displayed visually. However: (1) No Review or AggregateRating schema markup. (2) Testimonials appear to be representative examples, not verified reviews from a platform. (3) No link to Google Maps reviews, TripAdvisor, or any review aggregator. | Add Review schema to testimonials (if they are real, attributed reviews). Link to Google Maps listing for verified reviews. Consider integrating TripAdvisor or Google review widget. |
| 6.8 Policy page links | LOW | PASS | Privacy Policy and Terms & Conditions linked in footer. Both pages exist and return 200. Links use proper anchor text. | None |
| 6.9 Physical address + map | MEDIUM | **PARTIAL** | Google Maps link in Organization schema sameAs (`maps.app.goo.gl/...`). GeoCoordinates in ProfessionalService schema. "Tulamben, East Bali" mentioned on contact page. But no embedded map on contact page, and footer only says "Bali, Indonesia" without specific address. | Add Google Maps embed or link on contact page. Show full address in footer. |

### Section 7 — Media & Multimodal

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 7.1–7.2 Image alt text | HIGH | PASS | All images across all pages have descriptive alt text. Examples: "Manta ray gliding over coral reef in Bali — private diving with Boutique Diving Bali", "Dominic Frei diving over coral reef in Bali — founder of Boutique Diving Bali", "Green sea turtle gliding over coral reef in Bali". 8–20 words each, descriptive, not keyword-stuffed. Decorative images use `aria-hidden="true"`. | None |
| 7.3 ImageObject schema | LOW | **PARTIAL** | ImageObject used for Organization logo in layout.tsx (with width/height). But no standalone ImageObject schemas for hero images, founder photos, or destination images. | Consider adding ImageObject schema to key images (founder portrait, destination photos). Low priority. |
| 7.4–7.5 Video content | LOW | NOT_APPLICABLE | No video content on the site. No YouTube, Vimeo, or `<video>` elements. | Consider adding underwater video content in the future — high-value for engagement and VideoObject schema. |
| 7.6 Image file names | LOW | PASS | Descriptive file names: `hero-1-manta.jpg`, `founder-underwater.jpg`, `dest-komodo.jpg`, `dive-butler-section.jpg`, `partner-ocean-sun.png`. Clear and SEO-friendly. | None |
| 7.7 Image dimensions | LOW | PASS | Next.js `<Image>` component handles width/height automatically with `fill` prop and explicit `sizes` attributes. No CLS from images. Priority loading on hero image (`priority` prop). | None |

### Section 8 — Freshness & Update Signals

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 8.1 Current copyright year | LOW | PASS | Footer uses `{new Date().getFullYear()}` — dynamically renders current year. Will always be current. | None |
| 8.2 dateModified in schema | MEDIUM | PASS | `dateModified: "2026-04-16"` present on: Organization schema (layout.tsx), all 8 service page schemas. Current and consistent. | None |
| 8.3 Last-Modified HTTP header | LOW | **FAIL** | No `Last-Modified` header in HTTP response. Vercel/Next.js does not set this by default for SSR pages. `x-vercel-cache: HIT` and `cache-control: public, max-age=0, must-revalidate` are present. | Consider adding `Last-Modified` header via Next.js middleware or Vercel config. Low priority — dateModified in schema is more important for AI engines. |

### Section 9 — Engine-Specific Signals

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 9.1 Open Graph tags | HIGH | PASS | Homepage has full OG tags: title, description, url, siteName, image (1200x630 with alt), type, locale. All verified in raw HTML output. Service pages inherit OG from layout defaults. | See note below on per-page OG images. |
| 9.2 Twitter Card metadata | MEDIUM | PASS | `summary_large_image` card type. Title, description, and image specified. Present on homepage and inherited site-wide. | None |
| 9.3 Favicon & Apple touch icons | LOW | PASS | Full icon set: favicon.ico (48x48), favicon-32.png, favicon-192.png, favicon-512.png, apple-touch-icon.png (180x180). Manifest.json referenced. | None |
| 9.4 Meta robots allows indexing | HIGH | PASS | `robots: { index: true, follow: true }` in layout.tsx metadata. No `noindex` found anywhere. `max-image-preview: "large"` and `max-video-preview: -1` are permissive. No `noai` or `noimageai` directives. | None |
| 9.5 No nosnippet / max-snippet | MEDIUM | PASS | `max-snippet: -1` in layout.tsx — this is PERMISSIVE (no limit on snippet length). This is the correct setting for GEO. No `nosnippet` found. | None |
| 9.6 Google Search Console verification | MEDIUM | PASS | `verification: { google: "AKiUau91FXJ-0rWV6roMTd9zOLVlXHv84-6mxPqvEZI" }` in layout.tsx metadata. | None |

**Note on OG images:** Only the homepage and basic-diver page specify an OG image explicitly (`og-image.jpg`). The remaining 11 pages inherit the layout default (same `og-image.jpg`). This means all pages share the same social preview image. Consider creating page-specific OG images for at least the Dive Butler, About, and a few key service pages.

### Section 10 — Core Web Vitals & Performance

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 10.1–10.3 LCP, INP, CLS | HIGH | REQUIRES_BROWSER_TEST | Cannot run Lighthouse in this environment. Indicators are positive: Next.js Image with `priority` on hero, `font-display: swap` on all fonts, no layout-shifting elements, static pre-rendering (`x-nextjs-prerender: 1`). | Run Lighthouse or PageSpeed Insights manually. Check especially LCP (hero image carousel) and CLS (font loading). |
| 10.4 Mobile responsive | HIGH | PASS | Responsive breakpoints throughout: `sm:`, `md:`, `lg:` Tailwind classes. Mobile hamburger menu in Header. `viewport` meta tag auto-included by Next.js. Flexible grid layouts. | None |
| 10.5 Page weight | MEDIUM | PASS | Homepage HTML: ~207 KB (including inlined CSS/JS chunks). Reasonable for a Next.js SSR page. Images are lazy-loaded except hero. Font preloading configured. | None |

### Section 11 — Anti-Patterns

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 11.1 No interstitials/popups | HIGH | PASS | No modals, popups, interstitials, or overlays found in any source file or component. | None |
| 11.2 No AI-generated boilerplate | MEDIUM | PASS | No instances of "in today's fast-paced", "revolutionize", "cutting-edge", "game-changing", "leverage", or "synergy" found. Content is original, human-written concierge language. | None |
| 11.3 No cloaking | HIGH | PASS | Normal UA response: 207,102 bytes. GPTBot UA response: 207,102 bytes. Identical content served to all user agents. | None |
| 11.4 Broken internal links | HIGH | PASS | All internal links from homepage (`/about`, `/contact`, `/privacy`, `/terms`, `/services/*`, `/#services`, `/#destinations`, `/#faq`) resolve to valid pages. All 13 pages return 200. Footer links verified. | None |
| 11.5 No duplicate H1s / titles | MEDIUM | PASS | Each page has exactly 1 H1 and a unique title tag. No duplicates across pages. | None |
| 11.6 No keyword stuffing | MEDIUM | PASS | Natural keyword distribution. No repetitive patterns. | None |
| 11.7 No hidden text | LOW | PASS | `sr-only` used appropriately for skip-to-content link (accessibility). `aria-hidden="true"` on decorative hero carousel images. `overflow-hidden` used for layout, not text hiding. No suspicious `display:none` or `visibility:hidden` on content. | None |

### Section 12 — Off-Page Signals (Informational Only)

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 12.1 Wikipedia / Wikidata | LOW | INFO | No Wikipedia or Wikidata entry exists for Boutique Diving Bali or Dominic Frei. | Long-term goal: as the brand grows, consider a Wikidata entry. Not actionable now. |
| 12.2 Brand mentions | LOW | INFO | Cannot verify from code. Brand is relatively new. | Monitor brand mentions via Google Alerts. Pursue press coverage, dive magazine features, travel blogger partnerships. |
| 12.3 Review aggregators | LOW | **PARTIAL** | Google Maps link present in Organization sameAs. No TripAdvisor, Trustpilot, or other review platform links. No review schema. | Set up TripAdvisor listing. Add links to Google Maps reviews. Once reviews accumulate, add AggregateRating schema. |

---

## PER-PAGE SUMMARY

| Page | Title OK | Desc OK | H1 Count | Canonical | JSON-LD Types | FAQ Count | OG Image | dateModified |
|------|----------|---------|----------|-----------|---------------|-----------|----------|--------------|
| Homepage | Yes (52 chars) | Yes (148 chars) | 1 | Yes (www) | Org, WebSite, LocalBusiness, ProfessionalService, Person, FAQPage, WebSite(dup) | 9 | og-image.jpg | Yes (layout) |
| Basic Diver | Yes (48 chars) | Yes (149 chars) | 1 | Yes | Service, BreadcrumbList, FAQPage | 7 | og-image.jpg | Yes |
| Scuba Explorer | Yes (47 chars) | Yes (107 chars) | 1 | Yes | Service, BreadcrumbList, FAQPage | 7 | inherited | Yes |
| Junior OWD | Yes (49 chars) | Yes (118 chars) | 1 | Yes | Service, BreadcrumbList, FAQPage | 7 | inherited | Yes |
| Open Water | Yes (51 chars) | Yes (139 chars) | 1 | Yes | Service, BreadcrumbList, FAQPage | 7 | inherited | Yes |
| Specialty | Yes (49 chars) | Yes (132 chars) | 1 | Yes | Service, BreadcrumbList, FAQPage | 7 | inherited | Yes |
| Scuba Skills Update | Yes (45 chars) | Yes (131 chars) | 1 | Yes | Service, BreadcrumbList, FAQPage | 7 | inherited | Yes |
| Custom Fun Dives | Yes (47 chars) | Yes (129 chars) | 1 | Yes | Service, BreadcrumbList, FAQPage | 7 | inherited | Yes |
| Dive Butler | Yes (53 chars) | Yes (147 chars) | 1 | Yes | Service, BreadcrumbList, HowTo, FAQPage | 6 | inherited | Yes |
| About | Yes (40 chars) | Yes (117 chars) | 1 | Yes | Person, BreadcrumbList | 0 | inherited | No |
| Contact | Yes (30 chars) | Yes (123 chars) | 1 | Yes | BreadcrumbList | 0 | inherited | No |
| Privacy | Yes (38 chars) | Yes (122 chars) | 1 | Yes | BreadcrumbList | 0 | inherited | No |
| Terms | Yes (44 chars) | Yes (145 chars) | 1 | Yes | BreadcrumbList | 0 | inherited | No |

---

## PRIORITIZED REMEDIATION LIST

### P1 — Fix Immediately (HIGH impact, easy fix)

1. **Unblock Amazonbot in robots.txt** (Item 1.1)
   - Cloudflare-managed rule blocks Amazonbot. Override in Cloudflare dashboard or add explicit allow rule.

2. **Remove duplicate schemas from homepage** (Items 4.4, 4.3, 4.11)
   - Delete `localBusinessSchema` object (page.tsx lines 38–50) — it duplicates the ProfessionalService schema with incorrect data (wrong URL, non-existent logo.svg).
   - Delete `websiteSchema` object (page.tsx lines 52–58) — it duplicates the WebSite schema in layout.tsx with inconsistent URL (missing www).

3. **Fix URL consistency in remaining schemas** (Item 4.11)
   - Ensure all schema URLs use `https://www.boutiquedivingbali.com` (with www) to match canonical.

### P2 — Fix Soon (MEDIUM impact)

4. **Expand sameAs arrays** (Item 4.2)
   - Organization and ProfessionalService sameAs should include 3+ URLs: Instagram, Google Maps, WhatsApp business catalog (if applicable), SSI profile (if available), any other social profiles.
   - Make sameAs consistent across Organization, ProfessionalService, and Person schemas.

5. **Add Review schema to testimonials** (Item 6.7)
   - If testimonials are from real, identifiable clients: add Review schema with author, reviewRating, datePublished.
   - Link to Google Maps listing for verified reviews.
   - Add AggregateRating to Organization/LocalBusiness schema once sufficient reviews exist.

6. **Improve NAP in footer** (Items 6.2, 6.9)
   - Add full address to footer: "Tulamben, Karangasem, Bali 80853, Indonesia"
   - Add Google Maps link on contact page.

7. **Use `<blockquote>` for testimonials** (Item 5.6)
   - Replace styled `<div>` with semantic `<blockquote cite="">` + `<cite>` for testimonial quotes.

8. **Add more outbound authority links** (Item 5.7)
   - Link to SSI from more service pages (specialty, open water, scuba skills update).
   - Link to UNESCO for Komodo National Park in destinations section.
   - Link to Indonesian Ministry of Tourism or Bali tourism authority.
   - Consider linking to marine conservation organizations (Project AWARE, Coral Triangle Initiative).

### P3 — Nice to Have (LOW impact)

9. **Create page-specific OG images** (Item 9.1 note)
   - At minimum: Dive Butler, About, Custom Fun Dives pages should have unique social preview images.

10. **Add `Last-Modified` header** (Item 8.3)
    - Via Next.js middleware or Vercel configuration.

11. **Add `.md` route alternatives** (Item 2.3)
    - Create `/about.md` and key service page `.md` alternatives for AI consumption.

12. **Use semantic `<ul>/<ol>` for feature lists** (Item 5.11)
    - Service page feature grids could benefit from being wrapped in `<ul>` with `<li>` items for better AI extraction.

13. **Add dateModified to About, Contact, Privacy, Terms schemas** (Item 8.2)
    - These pages currently don't have dateModified in their schemas.

14. **Set up review platform profiles** (Item 12.3)
    - Create/claim TripAdvisor listing.
    - Encourage Google Maps reviews.
    - Add review platform links to sameAs.

---

## SCHEMA GRAPH ANALYSIS

Current @id graph on homepage:

```
Organization (#organization)
  ├── founder → Person (#founder)
  ├── publisher of → WebSite (#website)
  └── referenced by → ProfessionalService (#localbusiness)
        └── founder → Person (#founder)

DUPLICATES (to remove):
  - LocalBusiness (no @id, lines 38-50) — conflicts with ProfessionalService
  - WebSite (no @id, lines 52-58) — conflicts with layout WebSite
```

After cleanup, the graph should be:

```
Organization (#organization)
  ├── founder → Person (#founder)
  ├── publisher of → WebSite (#website)
  └── subOrganization of → ProfessionalService (#localbusiness)
        └── founder → Person (#founder)
        └── hasOfferCatalog → Service pages
```

---

## RAW DATA APPENDIX

### robots.txt AI Crawler Status

| Bot | Purpose | Status |
|-----|---------|--------|
| OAI-SearchBot | OpenAI search | NOT BLOCKED |
| ChatGPT-User | ChatGPT browsing | NOT BLOCKED |
| Claude-SearchBot | Claude search | NOT BLOCKED |
| Claude-User | Claude browsing | NOT BLOCKED |
| PerplexityBot | Perplexity search | NOT BLOCKED |
| Perplexity-User | Perplexity browsing | NOT BLOCKED |
| Googlebot | Google search | NOT BLOCKED |
| Bingbot | Bing search | NOT BLOCKED |
| Applebot | Apple search | NOT BLOCKED |
| **Amazonbot** | **Amazon/Alexa search** | **BLOCKED** |
| MistralAI-User | Mistral AI | NOT BLOCKED |
| Google-NotebookLM | Google AI | NOT BLOCKED |
| Gemini-Deep-Research | Google AI | NOT BLOCKED |
| GoogleAgent-URLContext | Google AI | NOT BLOCKED |
| GPTBot | OpenAI training | Blocked (intentional) |
| ClaudeBot | Anthropic training | Blocked (intentional) |
| Google-Extended | Google training | Blocked (intentional) |
| CCBot | Common Crawl training | Blocked (intentional) |
| Applebot-Extended | Apple training | Blocked (intentional) |
| Bytespider | ByteDance training | Blocked (intentional) |
| meta-externalagent | Meta training | Blocked (intentional) |

### TTFB Measurements

| Page | TTFB |
|------|------|
| Homepage | 149ms |
| Dive Butler | 184ms |

### Page Weight

| Page | Size |
|------|------|
| Homepage (HTML) | 207,102 bytes (~202 KB) |

### Cloaking Test

| User Agent | Response Size |
|-----------|---------------|
| Mozilla/5.0 (normal) | 207,102 bytes |
| GPTBot | 207,102 bytes |
| **Result** | **IDENTICAL — No cloaking** |

---

*Report generated by Claude Opus 4.6 on April 16, 2026.*
*Audit methodology: Source code inspection + live HTTP verification of all 13 pages.*
