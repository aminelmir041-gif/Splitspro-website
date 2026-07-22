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

## Backlog / Next
- P1: Wire /api/quotes to GoHighLevel (webhook/API) for real lead automation
- P1: Replace sample reviews with real GBP reviews (structure already in DB via /api/reviews)
- P2: Add per-page unique meta tags (react-helmet) + sitemap.xml/robots.txt for SEO
- P2: Replace stock imagery with SplitsPro's own project photos; add real logo asset
- P2: Simple admin/lead export view for /api/quotes
