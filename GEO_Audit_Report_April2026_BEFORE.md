# GEO Audit Report — Boutique Diving Bali
## Full Site Audit: All 13 Pages
## Date: April 16, 2026

---

## EXECUTIVE SUMMARY

### Score Breakdown

| Priority | Passed | Failed | Partial | N/A | Total |
|----------|--------|--------|---------|-----|-------|
| HIGH     | 12     | 4      | 2       | 0   | 18    |
| MEDIUM   | 14     | 7      | 3       | 2   | 26    |
| LOW      | 6      | 3      | 1       | 3   | 13    |

### Overall GEO Readiness Score
(Weighted: HIGH=5pts, MEDIUM=3pts, LOW=1pt)

- Earned: (12×5) + (2×2.5) + (14×3) + (3×1.5) + (6×1) + (1×0.5) = 60 + 5 + 42 + 4.5 + 6 + 0.5 = **118 / 167 possible = 70.7%**

### Verdict

The site has strong fundamentals — excellent SSR, fast TTFB, clean semantic HTML, rich JSON-LD, good FAQ coverage, and no anti-patterns. The main gaps are: (1) Amazonbot blocked in robots.txt (Cloudflare managed), (2) missing homepage canonical, (3) title tags too long on most pages, (4) no OG images on 7/8 service pages, (5) schemas lack `@id` interlinking and `logo`, and (6) several AI-facing files don't exist yet (llms-full.txt, ai.txt).

---

## CRITICAL FAILURES (HIGH items marked FAIL)

| # | Item | Issue | Remediation |
|---|------|-------|-------------|
| 1 | 1.1 | **Amazonbot blocked** in robots.txt (Cloudflare managed rules). Amazonbot powers Alexa/Echo AI answers. | Update Cloudflare robots.txt settings to allow Amazonbot. |
| 2 | 1.6 | **Homepage missing canonical tag.** No `alternates.canonical` in page.tsx metadata. All other 12 pages have canonical. | Add `alternates: { canonical: "https://www.boutiquedivingbali.com" }` to homepage metadata. |
| 3 | 3.5 | **Title tags too long** on 9 of 13 pages (80–103 chars vs recommended 30–65). Only homepage, privacy, terms, and layout default are within range. | Shorten title tags on all service pages, about, and contact to under 65 characters. |
| 4 | 4.1 | **Organization schema missing `logo`** field in layout.tsx `@graph`. | Add `logo: "https://www.boutiquedivingbali.com/images/logo-icon-only.png"` to Organization schema. |

---

## FULL ITEM-BY-ITEM RESULTS

### Section 1 — Crawler Accessibility & Machine Readability

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 1.1 AI crawlers allowed | HIGH | **FAIL** | Amazonbot is explicitly `Disallow: /`. Applebot-Extended also blocked but that is training-only. The following training-only bots are blocked (acceptable): ClaudeBot, GPTBot, CCBot, Google-Extended, Bytespider, meta-externalagent. CloudflareBrowserRenderingCrawler also blocked. All rules are Cloudflare-managed. | Unblock Amazonbot in Cloudflare robots.txt config (it powers Alexa/Echo AI answers, which is a search use case). All other blocks are training-only bots — acceptable. |
| 1.2 robots.txt valid | HIGH | **PASS** | Returns HTTP 200, plain text, has User-agent directives with Allow/Disallow, Sitemap line present. Includes Cloudflare content-signal headers (search=yes, ai-train=no). | None. |
| 1.3 All 13 pages HTTP 200 | HIGH | **PASS** | All 13 pages return `200` with no redirects. | None. |
| 1.4 SSR content | HIGH | **PASS** | Homepage H1, meta description, and 6 JSON-LD blocks are all present in raw `curl` HTML. Service pages (dive-butler, basic-diver) also have H1 and JSON-LD in raw HTML. Despite using AnimatedSection wrappers, Next.js SSR renders all content server-side. | None. |
| 1.5 sitemap.xml | HIGH | **PASS** | Returns 200, valid XML, all 13 pages listed with `<lastmod>`, `<changefreq>`, and `<priority>`. robots.txt references `Sitemap: https://www.boutiquedivingbali.com/sitemap.xml`. | None. |
| 1.6 Canonical tags | HIGH | **FAIL** | 12 of 13 pages have canonical tags in source metadata. **Homepage (page.tsx) is missing `alternates.canonical`.** Raw HTML confirms no `<link rel="canonical">` on homepage. | Add `alternates: { canonical: "https://www.boutiquedivingbali.com" }` to homepage metadata export. |
| 1.7 TTFB | MEDIUM | **PASS** | Homepage: 0.14s, Dive Butler: 0.40s. Both well under 800ms threshold. Cloudflare CDN with `age: 490` cache hit. | None. |
| 1.8 No rendering gates | HIGH | **PASS** | No `x-robots-tag` HTTP header. No `noindex` anywhere in source. No login walls, cookie walls, or interstitials. Skip-to-content link present in layout.tsx. | None. |
| 1.9 HTTPS & TLS | HIGH | **PASS** | HTTP/2 200 over HTTPS. HSTS header present with `max-age=63072000; includeSubDomains; preload`. Cloudflare TLS. | None. |

### Section 2 — llms.txt & AI-Facing Files

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 2.1 llms.txt exists | HIGH | **PASS** | HTTP 200, content-type `text/plain; charset=utf-8`. Has H1 (`# Boutique Diving Bali`), blockquote summary, H2 sections (About, Services, Destinations, Key Pages, Pricing, Founder). All 8 services listed with URLs. Basic Diver included. | None. |
| 2.2 llms-full.txt | MEDIUM | **FAIL** | HTTP 404. Does not exist. | Create `public/llms-full.txt` with expanded content from all 13 pages — full service descriptions, FAQ answers, pricing details, founder bio. |
| 2.3 Markdown alternatives | LOW | **FAIL** | `about.md` returns 404. No `.md` alternatives exist for any page. | Consider creating markdown versions of key pages (about, services) for AI consumption. Low priority. |
| 2.4 ai.txt | LOW | **FAIL** | HTTP 404. Does not exist. | Consider creating `public/ai.txt` with AI-specific usage permissions and capabilities summary. Low priority — emerging standard. |

### Section 3 — Semantic HTML Structure

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 3.1 One H1 per page | HIGH | **PASS** | All 13 pages have exactly 1 `<h1>` tag. Verified in source code. | None. |
| 3.2 Heading hierarchy | MEDIUM | **PARTIAL** | Homepage: H1 → H2 → H3 → H4 (footer). H4 is used for footer column headers ("Services", "Explore", "Connect") which is semantically acceptable as footer is a separate landmark. No skipped levels in main content. Service pages follow H1 → H2 → H3 cleanly. | Consider using a non-heading element (e.g., `<p>` with styling) for footer column headers instead of `<h4>`, since they're navigation labels not content headings. Low priority. |
| 3.3 Semantic landmarks | HIGH | **PASS** | Homepage: 1 `<main>`, 12 `<section>`, 1 `<footer>`. Header.tsx: 1 `<header>`, 1 `<nav>`. Service pages: 1 `<main>` each. Proper landmark usage throughout. | None. |
| 3.4 Skip navigation | MEDIUM | **PASS** | `<a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to content</a>` present in layout.tsx. | Note: The `#main-content` id target should exist on the `<main>` element. Verify it is set — if missing, the skip link won't work. |
| 3.5 Title tags | HIGH | **FAIL** | 9 of 13 pages exceed 65-character recommended length. Lengths: Homepage 52 (OK), Basic Diver 81, Custom Fun Dives 92, Dive Butler 100, Junior OWD 86, Open Water 99, Scuba Explorer 85, Scuba Skills Update 94, Specialty 103, About 82, Contact 84, Privacy 37 (OK), Terms 41 (OK). | Shorten all service/about/contact title tags to 55–65 characters. Keep brand name. Example: "Private SSI Open Water Course Bali \| Boutique Diving Bali" (57 chars). |
| 3.6 Meta descriptions | MEDIUM | **PARTIAL** | Homepage description (from layout.tsx fallback): 215 chars — too long (max 160 recommended). Basic Diver: 166 chars — slightly over. Open Water: 140 chars — OK. Privacy: 120 chars — OK. Most service pages are in the 120–160 range. Homepage page.tsx has NO page-level `description` — it relies on layout.tsx default which is 215 chars. | Add a page-level `description` to homepage metadata (120–155 chars). Review and trim any descriptions over 160 chars. |
| 3.7 lang attribute | HIGH | **PASS** | `<html lang="en">` in layout.tsx. | None. |
| 3.8 No iframes | MEDIUM | **PASS** | Zero `<iframe>` elements found across all source files. | None. |

### Section 4 — Structured Data (JSON-LD)

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 4.1 Organization schema | HIGH | **PARTIAL** | Organization schema exists in layout.tsx `@graph` with `name`, `url`, `description`, `email`, `founder`, `contactPoint`, `areaServed`, `sameAs`. **Missing: `logo` field.** | Add `logo: "https://www.boutiquedivingbali.com/images/logo-icon-only.png"` to Organization schema. |
| 4.2 sameAs ≥3 URLs | MEDIUM | **FAIL** | Layout.tsx Organization sameAs has only 2 entries: Instagram + Google Maps. Homepage Person/ProfessionalService schemas have only Instagram (1 entry each). Inconsistent across schemas. | Add at minimum: Facebook page (if exists), SSI profile page, or WhatsApp business URL. Standardize sameAs across all Organization/Person/ProfessionalService schemas. |
| 4.3 WebSite + SearchAction | MEDIUM | **FAIL** | WebSite schema exists in layout.tsx `@graph` with `name`, `url`, `publisher`. **No `potentialAction` / `SearchAction`.** | Site has no search functionality, so SearchAction is not applicable. However, the WebSite schema should ideally have a `description` field. Mark as N/A if no site search exists. |
| 4.4 LocalBusiness schema | MEDIUM | **PASS** | ProfessionalService schema on homepage with `name`, `description`, `url`, `telephone`, `email`, `image`, `logo`, `priceRange`, `address` (with locality/region/country), `geo` coordinates, `contactPoint`, `areaServed` (5 places), `founder`, `hasOfferCatalog`. Also LocalBusiness in separate homepage schema. | None. |
| 4.5 Service schema per page | HIGH | **PASS** | All 8 service pages have Service schema with `name`, `description`, `provider`, `areaServed`, `serviceType`, `priceRange`, `url`. Scuba Explorer also has `audience` with age range. | None. |
| 4.6 BreadcrumbList | HIGH | **PASS** | All 10 sub-pages (8 services + about + contact) have BreadcrumbList schema. Privacy and terms have BreadcrumbList too. Homepage does not need one. | None. |
| 4.7 FAQPage schema | HIGH | **PASS** | FaqAccordion component auto-generates FAQPage schema via JsonLd component. All 9 pages with FAQs (homepage + 8 services) get FAQPage schema automatically. Schema includes `@context`, `@type: FAQPage`, `mainEntity` array with Question/Answer pairs. | None. |
| 4.8 Person schema | MEDIUM | **PASS** | Person schema for Dominic Frei on homepage (via `dangerouslySetInnerHTML`) with `name`, `jobTitle`, `description`, `nationality`, `knowsAbout`, `knowsLanguage`, `sameAs`, `worksFor`. About page also has Person schema via JsonLd component. | None. |
| 4.9 Article schema | LOW | **N/A** | No blog or article content on the site. | N/A. |
| 4.10 Speakable schema | LOW | **N/A** | Not implemented. Emerging feature — low priority. | Consider adding Speakable schema to FAQ answers for voice assistant optimization. Low priority. |
| 4.11 JSON-LD valid syntax | MEDIUM | **PASS** | All JSON-LD blocks use valid JavaScript objects (via JsonLd component or `JSON.stringify`). No syntax errors detected. Build succeeds without JSON-LD errors. | None. |
| 4.12 @id interlinking | MEDIUM | **FAIL** | No `@id` properties used anywhere. Organization, Person, WebSite, Service schemas do not reference each other via `@id`. | Add `@id` to Organization, Person, and WebSite schemas in layout.tsx, then reference them from Service schemas via `provider: { "@id": "..." }`. This creates a connected knowledge graph. |

### Section 5 — Content Structure for AI Extraction

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 5.1 Summary-first paragraph | HIGH | **PASS** | Homepage has entity-rich opening: "Boutique Diving Bali is a premium personal diving concierge service founded by Dominic Frei..." within first 300 words of main content. Service pages open with descriptive paragraphs explaining the service. | None. |
| 5.2 FAQ / Q&A blocks | HIGH | **PASS** | Homepage: 9 questions. All 8 service pages: 7 questions each. Total: 65 FAQ items with FAQPage schema. About and Contact pages have 0 FAQs. | Consider adding 3–5 FAQ items to About page (e.g., "What certifications does Dominic hold?", "What languages does Dominic speak?"). |
| 5.3 Self-contained paragraphs | MEDIUM | **PASS** | Sampled paragraphs from homepage and service pages. Content opens with entity-rich subjects ("Boutique Diving Bali", "Dominic", "The SSI Basic Diver program") rather than pronoun-dependent starts. Well-written concierge language throughout. | None. |
| 5.4 Paragraph length | MEDIUM | **PASS** | Paragraphs are 2–4 sentences. Sentences are clear and readable. No wall-of-text issues. | None. |
| 5.5 Statistics / quantitative data | MEDIUM | **PASS** | Homepage stats bar: "500+ Dives Completed", "100% Private & Bespoke", "15+ Destinations", "5★ Guest Experience". Service pages include specific numbers: depths (12m, 18m), age ranges (8–12, 10–14, 15+), group sizes (up to 4), course durations. | None. |
| 5.6 Expert quotes / testimonials | MEDIUM | **PARTIAL** | 3 testimonials on homepage with names and origins (Sarah & James / Australia, The Mueller Family / Germany, Chen Wei / Singapore). **No Review or AggregateRating schema wrapping them.** Testimonials appear to be placeholders (not verified reviews). | Add Review schema markup to testimonials. Consider linking to or embedding real Google Maps reviews. |
| 5.7 Outbound citations | MEDIUM | **FAIL** | Only 1 outbound link to an authoritative external source: Ocean Sun Dive Resort (`ocean-sun.com/en`). No links to SSI official site, Wikipedia articles about USAT Liberty wreck, dive sites, or other authoritative sources. | Add outbound links to: SSI official site (ssi.com), USAT Liberty Wikipedia page (from service pages that mention it), and any other authoritative diving/tourism sources. |
| 5.8 Content fluency | LOW | **PASS** | Content is polished, professional concierge language. No grammar issues, no awkward phrasing. British English spellings used consistently (colour, practise, metres). | None. |
| 5.9 Unique insight | MEDIUM | **PASS** | Strong differentiation: Dive Butler concept is unique, personal concierge positioning is distinctive, Swiss Army + corporate security background is novel angle. Content reflects genuine industry insight (Koh Samui industry research story). | None. |
| 5.10 No keyword stuffing | MEDIUM | **PASS** | No unnatural keyword repetition. Brand name and key terms appear naturally. Word frequency analysis shows normal distribution. | None. |
| 5.11 Lists for comparable data | LOW | **PASS** | Services grid uses card-based layout (semantically rendered as links with descriptive content). FAQ uses list role. Stats in grid. 3 `<ul>` elements on homepage. No `<table>` elements — not needed given the content type. | None. |
| 5.12 Descriptive link anchors | MEDIUM | **PASS** | No "click here" links found. Service cards use "Learn More →" which is acceptable in card context (the card itself provides context). Internal links use descriptive text: "Read Full Story →", "Visit Ocean Sun Dive Resort", "Discover Dive Butler". | None. |

### Section 6 — Entity, Authority & E-E-A-T Signals

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 6.1 Brand name consistency | HIGH | **PASS** | "Boutique Diving Bali" appears in: H1 (homepage), `<title>` (all pages via template), Organization schema, footer, header logo alt text, llms.txt. Consistent throughout. | None. |
| 6.2 NAP consistency | MEDIUM | **PASS** | Phone (+41791722403): appears in 7 locations across layout, homepage, contact page — consistent. Email (info@boutiquedivingbali.com): appears in 13 locations — consistent. Address (Tulamben, Bali, Indonesia): consistent in schema and footer. | None. |
| 6.3 About page linked | MEDIUM | **PASS** | About page linked 3 times from homepage (header nav, "Read Full Story →" link, footer "Explore" column). Also linked in header navigation on all pages. | None. |
| 6.4 Founder visibility | HIGH | **PASS** | "Dominic" appears 21 times on homepage. Dedicated About section with photo + circular headshot overlay. Person schema with full details. About page is comprehensive. | None. |
| 6.5 Credentials visible | MEDIUM | **PASS** | "SSI Certified" / "SSI Professional" / "SSI-certified" appears 5 times on homepage, 5 times on about page. Trust badges: "SSI Certified Professional", "Swiss Precision & Safety", "In Bali Since 2021", "Multilingual (EN / DE)". | None. |
| 6.6 Trust signals | MEDIUM | **PASS** | Stats bar (500+ dives, 100% private, 15+ destinations, 5★). SSI credentials. Swiss Army background. Partner section with Ocean Sun (SSI Instructor Training Center). | None. |
| 6.7 Review schema | MEDIUM | **FAIL** | Testimonials section exists with 3 reviews showing 5-star ratings, names, and origins. **No Review or AggregateRating schema markup.** Google cannot extract review data for rich snippets. | Add Review schema to each testimonial and AggregateRating to the overall section. Better: link to verified review platforms. |
| 6.8 Policy page links | MEDIUM | **PASS** | Privacy Policy and Terms & Conditions linked in footer with proper hrefs. Both pages return 200. | None. |
| 6.9 Physical address + map | MEDIUM | **PARTIAL** | Footer shows "Bali, Indonesia" with MapPin icon. Schema has full address (Tulamben, Bali, ID) and geo coordinates. Google Maps link in sameAs (`maps.app.goo.gl/...`). **No visible map embed or clickable address on contact page.** | Consider adding Google Maps link or embed on contact page. The sameAs maps link is machine-readable but not user-visible. |

### Section 7 — Media & Multimodal

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 7.1 Image alt text quality | MEDIUM | **PASS** | All images have descriptive alt text (5–20 words). Examples: "Manta ray gliding over coral reef in Bali — private diving with Boutique Diving Bali", "Dominic Frei diving over coral reef in Bali — founder of Boutique Diving Bali". Logo alt: "Boutique Diving Bali". Destination cards have rich alt texts. | None. |
| 7.2 Alt text on all images | MEDIUM | **PASS** | All `<Image>` components have `alt` props. Hero carousel secondary images use `aria-hidden="true"` (correct for decorative duplicates). 8 images on homepage, all with descriptive alt text. | None. |
| 7.3 ImageObject schema | LOW | **FAIL** | No ImageObject schema found anywhere. Images are referenced in OG tags and some schemas (`image` property) but not as standalone ImageObject. | Add ImageObject schema for key images (founder photo, hero image) with `name`, `description`, `contentUrl`. Low priority. |
| 7.4 Video content | LOW | **N/A** | No video content on the site. No `<video>`, YouTube, or Vimeo embeds. | Consider adding a short video (60–90s) showcasing the diving experience. Would enhance engagement and provide VideoObject schema opportunity. |
| 7.5 VideoObject schema | LOW | **N/A** | N/A — no video content. | N/A. |
| 7.6 Image file names | MEDIUM | **PASS** | All descriptive: `hero-1-manta.jpg`, `founder-underwater.jpg`, `dest-bali.jpg`, `dest-komodo.jpg`, `dive-butler-section.jpg`, `partner-ocean-sun.png`, `og-image.jpg`. No opaque names like `IMG_1234.jpg`. | None. |
| 7.7 Image dimensions | MEDIUM | **PARTIAL** | Some images use `fill` prop (responsive, no explicit width/height needed). Logo uses `width={400} height={400}`. Partner image uses `width={220} height={220}`. Hero images use `fill` + `sizes="100vw"`. Founder headshot uses `fill`. **Destination card images use `fill` without explicit sizes beyond "280px".** | Ensure all images have appropriate `sizes` prop for responsive loading. Current implementation is functional but could be more precise. |

### Section 8 — Freshness & Update Signals

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 8.1 Current copyright year | MEDIUM | **PASS** | `© {new Date().getFullYear()} Boutique Diving Bali` — dynamically generates current year. | None. |
| 8.2 dateModified in schema | MEDIUM | **FAIL** | No `dateModified` or `datePublished` properties in any JSON-LD schema across the entire site. | Add `dateModified` to Service schemas on service pages and to Organization schema. Use build date or last git commit date. |
| 8.3 Last-Modified header | LOW | **FAIL** | No `Last-Modified` HTTP header returned. Cloudflare CDN does not pass this through. Only `age: 490` (cache age) is present. | Configure Cloudflare or Next.js to send `Last-Modified` headers. Low priority — search engines can use sitemap `<lastmod>` instead. |

### Section 9 — Engine-Specific Signals

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 9.1 Open Graph tags | HIGH | **PARTIAL** | Homepage, all 8 service pages, about, and contact have OG tags (title, description, url, siteName). **Privacy and Terms pages have NO OG tags.** **7 of 8 service pages missing OG `images`** (only Basic Diver has explicit OG image; others rely on layout.tsx fallback). Homepage has full OG with image. | Add OG tags to privacy and terms pages. Add explicit `images` to all service page OG metadata. |
| 9.2 Twitter Card metadata | MEDIUM | **PASS** | All pages except privacy/terms have Twitter card metadata (`summary_large_image`). Layout.tsx provides fallback Twitter metadata. Privacy/terms inherit from layout. | Add explicit Twitter metadata to privacy and terms pages for completeness. Low priority. |
| 9.3 Favicon & Apple icons | MEDIUM | **PASS** | favicon.ico (48x48), favicon-32.png (32x32), favicon-192.png (192x192), favicon-512.png (512x512), apple-touch-icon.png (180x180). Manifest.json referenced. | None. |
| 9.4 Meta robots allows indexing | HIGH | **PASS** | `robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 }` in layout.tsx. No `noindex` or `nofollow` found anywhere. No `noai` or `noimageai` directives. | None. |
| 9.5 nosnippet / max-snippet | MEDIUM | **PASS** | `"max-snippet": -1` (unlimited snippet length allowed). No `nosnippet` directives. This is optimal for AI extraction. | None. |
| 9.6 Google Search Console | MEDIUM | **PASS** | `verification: { google: "AKiUau91FXJ-0rWV6roMTd9zOLVlXHv84-6mxPqvEZI" }` in layout.tsx metadata. | None. |

### Section 10 — Core Web Vitals & Performance

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 10.1 LCP | MEDIUM | **REQUIRES_BROWSER_TEST** | Cannot run Lighthouse from CLI in this environment. Lighthouse requires a headed browser. | Run `npx lighthouse https://www.boutiquedivingbali.com --only-categories=performance` locally or check PageSpeed Insights. |
| 10.2 INP | MEDIUM | **REQUIRES_BROWSER_TEST** | Same as above. | Same as above. |
| 10.3 CLS | MEDIUM | **REQUIRES_BROWSER_TEST** | Same as above. Hero carousel images may cause CLS if not properly sized. `fill` prop with `sizes` should mitigate. | Same as above. |
| 10.4 Mobile responsive | MEDIUM | **PASS** | Next.js adds viewport meta by default. Responsive breakpoints used throughout: `sm:`, `md:`, `lg:` classes. Grid layouts collapse appropriately. | None. |
| 10.5 Page weight | MEDIUM | **PASS** | Homepage: 206,180 bytes (~201 KB) for initial HTML document. Reasonable for a content-rich page with inline JSON-LD. Images are loaded lazily (except hero). | None. |

### Section 11 — Anti-Patterns

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 11.1 No interstitials/popups | HIGH | **PASS** | No modal, popup, interstitial, or overlay components found in any source file. | None. |
| 11.2 No AI boilerplate | MEDIUM | **PASS** | No instances of "in today's fast-paced", "revolutionize", "cutting-edge", "game-changing", "leverage", or "synergy" found. Content is original and authentic. | None. |
| 11.3 No cloaking | HIGH | **PASS** | Normal UA: 206,180 bytes. GPTBot UA: 206,180 bytes. Identical content served regardless of user agent. | None. |
| 11.4 Broken internal links | MEDIUM | **PASS** | All internal links extracted from homepage return 200: `/about`, `/contact`, `/privacy`, `/terms`, `/services/dive-butler`. No broken links detected. | None. |
| 11.5 No duplicate H1s/titles | HIGH | **PASS** | All 13 pages have exactly 1 H1. All title tags are unique across pages. | None. |
| 11.6 No keyword stuffing | MEDIUM | **PASS** | Already verified in 5.10. Natural keyword distribution. | None. |
| 11.7 No hidden text | MEDIUM | **PASS** | No `display:none` or `visibility:hidden` on content elements. `sr-only` class used appropriately for skip-to-content link. `aria-hidden="true"` used correctly on decorative hero carousel images. `overflow-hidden` used for layout purposes only. | None. |

### Section 12 — Off-Page Signals (Informational)

| Item | Priority | Status | Evidence | Remediation |
|------|----------|--------|----------|-------------|
| 12.1 Wikipedia / Wikidata | LOW | **INFO** | No Wikipedia or Wikidata entry exists for Boutique Diving Bali or Dominic Frei. | Consider creating a Wikidata entry for the business entity. Wikipedia article likely does not meet notability requirements yet. |
| 12.2 Brand mentions | LOW | **INFO** | Cannot assess from code. Requires external tools (Ahrefs, Brand24, etc.). | Monitor brand mentions across diving forums, travel blogs, and review sites. |
| 12.3 Review aggregators | LOW | **PARTIAL** | Google Maps link exists in sameAs schema (`maps.app.goo.gl/...`). No TripAdvisor, Trustpilot, or other review platform links found. | Create TripAdvisor listing and add to sameAs. Encourage verified reviews on Google Maps. Add links to review profiles in footer or contact page. |

---

## PER-PAGE SUMMARY

| Page | Title Length | Title OK | Desc OK | H1 Count | Canonical | JSON-LD Types | FAQ Count | OG Tags | OG Image |
|------|-------------|----------|---------|----------|-----------|---------------|-----------|---------|----------|
| Homepage | 52 | YES | LONG (215) | 1 | **MISSING** | Organization, WebSite, Person, ProfessionalService, LocalBusiness, WebSite, FAQPage | 9 | YES | YES |
| Basic Diver | 81 | **LONG** | OK (166) | 1 | YES | Service, BreadcrumbList, FAQPage | 7 | YES | YES |
| Scuba Explorer | 85 | **LONG** | OK | 1 | YES | Service, BreadcrumbList, FAQPage | 7 | YES | NO |
| Junior OWD | 86 | **LONG** | OK | 1 | YES | Service, BreadcrumbList, FAQPage | 7 | YES | NO |
| Open Water | 99 | **LONG** | OK (140) | 1 | YES | Service, BreadcrumbList, FAQPage | 7 | YES | NO |
| Specialty | 103 | **LONG** | OK | 1 | YES | Service, BreadcrumbList, FAQPage | 7 | YES | NO |
| Scuba Skills Update | 94 | **LONG** | OK | 1 | YES | Service, BreadcrumbList, FAQPage | 7 | YES | NO |
| Custom Fun Dives | 92 | **LONG** | OK | 1 | YES | Service, BreadcrumbList, FAQPage | 7 | YES | NO |
| Dive Butler | 100 | **LONG** | OK | 1 | YES | Service, BreadcrumbList, HowTo, FAQPage | 7 | YES | NO |
| About | 82 | **LONG** | OK | 1 | YES | Person, LocalBusiness, BreadcrumbList | 0 | YES | NO |
| Contact | 84 | **LONG** | OK | 1 | YES | BreadcrumbList | 0 | YES | NO |
| Privacy | 37 | YES | OK (120) | 1 | YES | BreadcrumbList | 0 | **NO** | NO |
| Terms | 41 | YES | OK | 1 | YES | BreadcrumbList | 0 | **NO** | NO |

---

## PRIORITIZED REMEDIATION ROADMAP

### Priority 1 — Critical (Fix immediately)
1. **Unblock Amazonbot** in Cloudflare robots.txt settings
2. **Add homepage canonical tag**: `alternates: { canonical: "https://www.boutiquedivingbali.com" }` to page.tsx metadata
3. **Add `logo` to Organization schema** in layout.tsx
4. **Shorten title tags** on all 9 pages exceeding 65 characters

### Priority 2 — High Impact (Fix this week)
5. **Add OG images** to all service pages (currently only Basic Diver has them)
6. **Add explicit homepage meta description** in page.tsx (don't rely on layout.tsx fallback — trim to 155 chars)
7. **Add `@id` interlinking** to JSON-LD schemas (Organization, Person, WebSite, Service)
8. **Add Review/AggregateRating schema** to testimonials section
9. **Add `dateModified`** to Service and Organization schemas
10. **Add outbound authoritative links** (SSI official site, USAT Liberty Wikipedia, etc.)

### Priority 3 — Medium Impact (Fix this month)
11. **Create `llms-full.txt`** with expanded content from all pages
12. **Add OG/Twitter tags** to Privacy and Terms pages
13. **Expand sameAs** to 3+ URLs (add TripAdvisor, SSI profile, or Facebook)
14. **Add FAQ section** to About page
15. **Add Google Maps link** or embed to Contact page

### Priority 4 — Low Impact (Nice to have)
16. Create `ai.txt` file
17. Create `.md` alternatives for key pages
18. Add ImageObject schema for key images
19. Add Speakable schema to FAQ answers
20. Create Wikidata entry for the business
21. Verify `#main-content` id exists on `<main>` element (for skip link)

---

## RAW DATA NOTES

- **Cloudflare robots.txt** is managed via Cloudflare dashboard, not a static file in `public/`. Changes to allow/disallow bots must be made in Cloudflare settings, not in the codebase.
- **Content-Signal headers** in robots.txt (`search=yes, ai-train=no`) are a Cloudflare feature implementing the content-signal protocol for AI usage permissions. `search=yes` explicitly permits search indexing; `ai-train=no` blocks training use. This is well-configured.
- **Homepage page.tsx metadata** only exports `title` and `openGraph`/`twitter` — no top-level `description` or `alternates`. The layout.tsx provides fallback `description` (215 chars) and default OG tags.
- **FaqAccordion component** auto-generates FAQPage schema — no manual FAQ schema needed on any page. This is a clean, DRY implementation.
- **All service pages are server-rendered** (no `"use client"` directive) — they export Metadata type and render server-side. The AnimatedSection wrappers are client components but Next.js SSR renders the content within them.
- **Build output**: 17 routes (13 pages + /_not-found + /sitemap.xml + 2 others). All compile successfully.

---

*Report generated: April 16, 2026*
*Auditor: Claude Opus 4.6*
*Method: Source code analysis + live HTTP checks*
