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
