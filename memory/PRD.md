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
- All 11 pages, kinetic hero, brands marquee, services bento grid, numbered manifesto, gallery masonry,
  reviews from API, service areas, FAQ accordion, contact + home quote forms, glass navbar, mobile menu,
  sticky call bar, SEO meta/title. Tested: 23/23 checks pass (backend 100%, frontend 100%).

## Backlog / Next
- P1: Wire /api/quotes to GoHighLevel (webhook/API) for real lead automation
- P1: Replace sample reviews with real GBP reviews (structure already in DB via /api/reviews)
- P2: Add per-page unique meta tags (react-helmet) + sitemap.xml/robots.txt for SEO
- P2: Replace stock imagery with SplitsPro's own project photos; add real logo asset
- P2: Simple admin/lead export view for /api/quotes
