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

## Backlog / Next
- P1: Wire /api/quotes to GoHighLevel (webhook/API) for real lead automation
- P1: Replace sample reviews with real GBP reviews (structure already in DB via /api/reviews)
- P2: Add per-page unique meta tags (react-helmet) + sitemap.xml/robots.txt for SEO
- P2: Replace stock imagery with SplitsPro's own project photos; add real logo asset
- P2: Simple admin/lead export view for /api/quotes
