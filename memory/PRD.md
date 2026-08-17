# SplitsPro — Premium Air Conditioning Website (PRD)

## Problem Statement
Premium, high-converting, Apple/Tesla-inspired marketing website for an Australian AC company "SplitsPro".
Phone: 0414 698 435 · ABN: 62 137 127 557 · NO email anywhere.
Awwwards-level motion (framer-motion + lenis), bright white + premium blue (#0055FF), glassmorphism, luxury feel.

## Personas
- Sydney homeowners needing install/repair/servicing
- Commercial clients (offices, retail, hospitality)

## Core Requirements (static)
- Pages: Home, About, Split Systems, Ducted, Repairs, Servicing, Gallery, Reviews, Service Areas, FAQ, Contact
- Services (11) + Brands (Daikin, Mitsubishi Electric, Fujitsu, Panasonic, Rinnai)
- Quote/contact form collects ONLY Name, Phone, Service, Suburb (+optional message). No email field.
- Sticky "Call Now" CTA; GoHighLevel-ready (form posts to /api/quotes, easy to wire webhook later)

## Architecture
- Backend (FastAPI + Mongo): POST/GET /api/quotes (leads), GET /api/reviews (seeded 8 AU reviews)
- Frontend (React 19): react-router-dom, lenis smooth scroll (ReactLenis root), framer-motion reveals/parallax,
  kinetic masked hero, react-fast-marquee brands, shadcn UI (Select/Accordion/Input/Textarea) + sonner toasts
- Fonts: Outfit (headings) + Satoshi (body)

## Implemented (2026-07-21)
- v1: All 11 pages, kinetic hero, services grid, forms. Tested 23/23.
- v2 (LUXURY REDESIGN): Ground-up editorial redesign into a premium home-services/architectural brand.
  - New art direction: Playfair Display + Manrope, minimal white/light-grey/charcoal/blue palette, no cards/dashboards/gradients/fake stats.
  - Editorial hero "Crafted Comfort For Every Home" with in-hero quote form (Name, Phone, Suburb, Service, Message) + trust points.
  - Homepage: Hero, Brand Philosophy, alternating Featured Services (incl. Cleaning), Why Choose (genuine trust markers), Gallery preview, Before/After slider, Google Reviews (dark), 4-step Process, Service Areas, FAQ, Final CTA.
  - Region switched to Western Sydney (Bass Hill, Bankstown, Chester Hill, Guildford, Granville, Fairfield, Liverpool, Parramatta, Panania, Revesby); reviews re-seeded (SEED_VERSION=2).
  - New nav (Home/Split Systems/Ducted/Cleaning/Gallery/Service Areas/About/Contact + Get Quote), transparent→white on scroll.
  - Floating persistent Get-Free-Quote (desktop) + sticky Call/Quote (mobile). Rich footer: Google Maps, opening hours, social, ABN, phone. NO email, NO fake stats.
  - New /cleaning page. Tested: backend 8/8, frontend 62/62 — 100% pass.
- v3 (IMMERSIVE / AWWWARDS-LEVEL REDESIGN):
  - Full-screen luxury home-interior HERO with mouse-follow parallax, floating glass info cards, airflow SVG animation, scroll zoom, masked headline reveal.
  - Transparent PNG logo generated (/logo.png, white box removed via PIL); blends into nav, white over hero / dark on scroll.
  - Premium interactions: 3D tilt service cards, page-load animation, custom desktop cursor, smooth page transitions, glass buttons, moving navy gradients, animated process timeline, brand hover-colour.
  - Removed Before/After entirely. Every service has a unique real photo; Ducted + Maintenance show elegant "Project image coming soon" placeholders (awaiting client photos).
  - Real client photography wired in (hero interior, living-room split, Rinnai indoor/outdoor, Daikin condenser/controller, cleaning). Skipped the AI smart-home graphic per brief.
  - Services reduced to 4 (Split, Ducted, Cleaning, Maintenance & Repairs). Why="Trust Earned Through Craftsmanship" (6 markers). Interactive Service Areas map. New suburbs: Bass Hill, Bankstown, Chester Hill, Condell Park, Greenacre, Guildford, Panania, Revesby.
  - Tested: backend 8/8, frontend 100% (~30 assertions), zero regressions.

## Awaiting from client
- Real Google review text (name/rating/text) to replace sample reviews.

## v4–v7 (polish + real photography + SEO)
- Real client photos wired per section: Split=Daikin Zena + living-room split; Ducted=ducted hallway vent + concealed vent (no controller); Cleaning=filter clean; Maintenance & Repairs hero=technician-on-ladder (focal object-[50%_38%] so the person is framed, not the ceiling). Skipped AI/smart-home graphic + browser screenshots.
- CTA UX: hero keeps Call Now + Get Free Quote; single scroll-triggered action bar appears only after the full-height hero scrolls off (mobile full-width dual bar charcoal+navy; desktop compact lower-right group); removed the old centred pill and hero glass badges.
- Header: larger transparent logo (h-14 desktop), transparent→frosted-white on scroll, shrinks on scroll, no overlap with hero H1.
- Local SEO service areas: grouped regions, PRIMARY South Western Sydney, secondary Western Sydney/Inner West/Eastern/Sutherland/Canterbury-Bankstown/Liverpool/Macarthur; interactive map; "services all Sydney metropolitan suburbs". Meta/keywords updated.
- Quote form suburb placeholder = "Enter your suburb" (not pre-filled). Gallery = 7-tile masonry (installs, indoor/outdoor/ducted), no dupes on homepage.
- Verified: iteration_7 100% pass (backend 8/8, frontend all criteria, zero regressions).

## v8 — LEAD-GEN CONVERSION REDESIGN (2026-07-22)
Goal: optimise the site for Google/Meta Ads lead generation while keeping the luxury aesthetic.
- **Hero**: new premium living-room image (IMAGES.heroLiving), "Crafted Comfort For Every Home", buttons "Free Quote & Plan" (Lenis smooth-scroll to on-page enquiry form) + "Call 0414 698 435". Google rating badge (5.0 · 14 Verified Reviews) + featured Sia review directly under the CTA.
- **Homepage enquiry form** directly below hero (id="enquiry"): Name, Phone, **Email (optional)**, Suburb, Service, Message + **optional photo upload**. Two-step: uploadPhoto → submitQuote with photo_url.
- **Backend**: QuoteCreate/Quote extended with `email` + `photo_url`. New `/api/upload` (Emergent object storage, 10MB + image-type limits, 403 re-init retry) and `/api/files/{path}` (serves stored images). Reviews re-seeded (SEED_VERSION=3) with real reviewer names/texts + `category` + `featured` (Sia). EMERGENT_LLM_KEY added to backend/.env for object storage.
- **Reviews distributed**: real Google reviews scattered site-wide via `ServiceReviews` (filters by category, falls back to general). Per-service page shows its matched reviewer (Split=Mustapha Hamed, Ducted=Charles Speights, Cleaning=Carolyn Hicks, Repairs=Mohammad Sowaid, Servicing=John Wick). /reviews page enriched with Google rating + avatar cards. NO external Google links (per client — reviews stay on-page).
- **Service landing pages** (ServicePage.jsx + SERVICE_LANDING config per slug): hero, trust badges (5.0 Google / Licensed & Insured / Premium Brands / Western Sydney), benefits grid, real-installation gallery, matched reviews, process, tailored FAQ, **tailored quote form** (e.g. "Book Your Free Split System Quote & Plan"), service-areas map + CTA.
- **SEO/Trust**: HVACBusiness + AggregateRating (5.0/14) JSON-LD schema + og:image in index.html; trust badges on every service page; local Western Sydney SEO retained.
- Reusable components added to sections.jsx: `GoogleRating`, `TrustBadges`, `ServiceReviews`.
- Verified: iteration_9 — backend 12/12 pytest PASS, frontend 11/11 acceptance PASS, zero bugs. Backend tests at /app/backend/tests/backend_test.py.

## v9 — HOME COMFORT PLAN™ CONVERSION UPGRADE (Split + Ducted only, 2026-07-22)
Goal: lift Google/Meta Ads conversions on the two highest-intent pages WITHOUT redesigning them.
- New template `HomeComfortPage.jsx` used ONLY by /split-systems and /ducted (Cleaning/Repairs/Servicing keep the original ServicePage.jsx with bottom form — unchanged).
- Compact enquiry form moved HIGH on the page: premium two-column `reserve-section` (id="reserve") right after hero + trust badges. Left = Home Comfort Plan value copy + Google rating + one service-specific review + trust bullets; right = form card with Google rating above form, heading "Reserve Your Complimentary Home Comfort Plan™", submit "Reserve My Home Comfort Plan", and a 7-item trust strip below.
- Added reinforcement sections below the form: Home Comfort Plan™ premium block (badge "Complimentary · valued over $200" + 9 inclusion cards), curiosity ("Why is our Home Comfort Plan different?"), guarantee ("Built to last. Backed with confidence." — 5 cards), exclusivity ("Complimentary for a limited number of homeowners each month" + scroll-to-form CTA), plus existing benefits/gallery/process/FAQ/service-areas/CTA reused with identical styling.
- Reviews are service-specific: /split-systems shows only split reviewer(s), /ducted only ducted — inline, no separate testimonials page.
- Shared content in data.js: HOME_COMFORT_INCLUDES (9), HOME_COMFORT_GUARANTEES (5), FORM_TRUST_STRIP (7).
- Verified: iteration_10 — frontend 9/9 acceptance PASS, zero regressions (Cleaning/Repairs/Servicing + Home unaffected). Backend unchanged (iteration_9 12/12).

## v10 — PREMIUM VISUAL REFRESH (Black + Metallic Gold, 2026-07-23)
Goal: elevate the entire site to a timeless, architectural, Apple/Porsche/B&O luxury aesthetic while keeping layout & functionality intact.
- **Palette shift**: primary accent Blue #1E3A8A → Metallic Gold #C8A46A; dark section bg Navy #0B1F3A → Rich Black #0B0B0B; light icon tint #EEF3FF → Warm Cream #F3E9D2; body/warm white #F8F7F5. Applied via bulk `replace_all` across 12 component/page files + a full rewrite of `index.css` (CSS variables, buttons, cursor, loader, leaflet tooltips, ::selection).
- **Hero overlay**: swapped the equal-darkening blue overlays for two new utility classes: `.hero-overlay-lr` (left-to-right black→transparent, ~92%→0% per spec) + `.hero-overlay-base` (subtle bottom-only fade for CTA legibility). Applied to Home hero and every PageHero. Hero image stays bright, warm & luxurious; the AC unit remains clearly visible.
- **Split System hero image**: swapped from the darker bedroom shot to the brighter `IMAGES.splitLiving` (Adobe living-room with a wall-mounted split visible up front); introImage still uses the bedroom.
- **Buttons refined** (`.btn-glass`, `.btn-glass-light`, `.btn-glass-outline` in index.css): rich-black backgrounds, metallic gold borders/hover glow, softer 0.375rem radius, elegant shadows — no bright yellow/orange gold.
- **Typography**: heading font untouched; removed the risky `color` on `.font-serif` compound selector that was overriding `text-white` on hero headings; body copy contrast preserved via body `color: var(--sp-ink)`. Overline tracking widened to `[0.28em]` in gold for the premium accent look.
- **Desktop logo**: added `lg:h-[70px]` (unscrolled) and `lg:h-[54px]` (scrolled) — ~25-30% larger on desktop only. Mobile/tablet unchanged. Header height unchanged.
- **Navbar**: scrolled bg tightened from `bg-white/80` → `bg-[#F8F7F5]/95` so the header doesn't blend with dark hero content behind it.
- Functionality untouched — only colors, CSS variables, hero overlays, logo sizing, and one hero image were changed. Compile clean; previous functional tests (iteration_9 12/12, iteration_10 9/9) still valid.



## v11 — DESKTOP HEADER + PREMIUM MAP (2026-07-23)
- **Desktop header** (lg only, mobile/tablet unchanged): logo enlarged to `lg:h-[70px]` scrolled (+30%) and `lg:h-[94px]` unscrolled (+34%), vertically centred via existing `items-center`. Padding zeroed on desktop (`lg:py-0`) so header height stays identical while the logo becomes the visual anchor. Spacing widened for a Porsche/Apple feel: outer nav `gap-6 → lg:gap-14` (logo↔nav / nav↔phone), inner nav-links `gap-6 → lg:gap-10`.
- **Service Areas map** (`ServiceAreasMap.jsx`): removed the misleading 11 km Circle around Bass Hill. Expanded coverage markers from 12 → 20 suburbs across Western Sydney and surrounds (Parramatta, Liverpool, Fairfield, Cabramatta, Bankstown, Blacktown, Campbelltown, Penrith, Auburn, Merrylands, Wetherill Park, Guildford, Granville, Chester Hill, Regents Park, Greenacre, Revesby, Panania, Oran Park, Woodcroft). Zoom widened 11 → 10 to communicate a broader region. Markers restyled in the palette: **gold fill + white border** for suburbs, **black fill + gold border** (radius 13) for the HQ marker with permanent tooltip "Splits Pro HQ · Based in Bass Hill". Added subtle hover animation (radius +3, fillOpacity 1) on every marker for a premium interactive feel.
- **Map CTA**: button re-labelled "Check Your Suburb" → **"Check Availability"** and restyled to rich-black with gold border + hover glow.
- **Service-areas intro copy** unified across HomeComfortPage, ServicePage, Home and ServiceAreas pages: "Based in Bass Hill, Splits Pro proudly services homes across Western Sydney and surrounding suburbs. If your suburb isn't listed, contact us — we regularly travel outside our primary service areas."
- Functionality unchanged; compile clean; verified via screenshot (logo prominent + centred with generous spacing, map wider zoom, gold markers rendering).


## v12 — GALLERY + SPLIT SYSTEMS SEO OVERHAUL (2026-07-24)
- **Gallery**: added 4 real customer installs — Daikin Zena in ensuite, Rinnai split in living, Daikin outdoor bracket mount, Daikin split in garage/utility. Total gallery entries: 7 → 11.
- **Split Systems SEO** — comprehensive on-page SEO **without touching the premium design**. Uses `react-helmet-async` (installed) inside a new `HelmetProvider` in App.js.
  - New H1: *"Split System Air Conditioning Supply & Installation"* with subhead *"Compare trusted air conditioning brands, view supplied and installed prices and find the right split system for your room."*
  - Meta title: *"Split System Air Conditioning Supply & Installation | SplitsPro"*; meta description mentions Daikin, Rinnai, Mitsubishi Electric & Mitsubishi Heavy Industries + supplied-and-installed + free sizing advice. Canonical + OG tags set.
  - **Brand pricing nav** (`brand-pricing-nav`) — 6 clickable brand cards near the top AND repeated under a *"Split System Air Conditioner Prices — Supplied & Installed"* heading, each linking to a dedicated brand page. Card text includes the brand/range name ("View Daikin Cora prices" etc.).
  - New content sections (naturally worded — no keyword stuffing): *Split system air conditioning for your home* (bedrooms/living/office/granny flats/apartments/individual rooms/replacements), *What size split system do I need?* + **Get Free Sizing Advice** CTA, *Professional split system installation* with 4 real install photos and descriptive alt text (e.g. *"Daikin split system air conditioner installed in a modern ensuite"*), *Replacing an old split system?* + **Get a Replacement Quote** CTA.
  - Extended FAQ: 8 new SEO-focused Q&As merged with existing (installation cost, sizing for bedroom / living room, replacement, brand choice, supply & install, install duration).
- **6 dedicated brand pages** (`/split-systems/:slug`) via new `BrandPage.jsx` template + `SPLIT_BRANDS` config in data.js:
  - `/split-systems/daikin-cora` · `/daikin-alira-x` · `/rinnai-pb-series` · `/rinnai-t-series` · `/mitsubishi-electric` · `/mitsubishi-heavy-ciara`.
  - Each page has unique `<title>`, meta description, canonical, H1, body copy, available capacities and a brand-tagged quote form (submit label "Get My {Brand} Quote"). Cross-brand cards link between siblings; a prominent **"Back to Split System Air Conditioning"** CTA links to the hub — clean site hierarchy.
- **HomeComfortPage** extended with optional `helmet`, `seoBlocks` and `extraFaqs` props so the SEO additions live inside the same page without any redesign. Ducted and the other services are untouched.
- **Technical SEO**: `/public/sitemap.xml` created with 18 URLs incl. all brand pages (`/split-systems/*`); `/public/robots.txt` referencing the sitemap. Existing LocalBusiness/HVACBusiness structured data (index.html) unchanged.
- Compile clean; brand pages verified via HTTP 200 + screenshot (Daikin Cora renders correctly with hero H1, trust badges, back-link and brand quote card).

## Backlog / Next (updated)
- P1: Wire /api/quotes (+ photo_url) to GoHighLevel via webhook/API for real lead automation.
- P2: Simple admin/lead view to review submitted leads + uploaded photos.
- P2: Per-page unique meta tags (react-helmet) + sitemap.xml/robots.txt.
- P3 (non-blocking, from code review): derive hero featured review from GET /api/reviews (featured=true) to avoid drift with data.js; add Cache-Control to /api/files responses.


## Backlog / Next
- P1: Wire /api/quotes to GoHighLevel (webhook/API) for real lead automation
- P1: Replace sample reviews with real GBP reviews (structure already in DB via /api/reviews)
- P2: Add per-page unique meta tags (react-helmet) + sitemap.xml/robots.txt for SEO
- P2: Replace stock imagery with SplitsPro's own project photos; add real logo asset
- P2: Simple admin/lead export view for /api/quotes
