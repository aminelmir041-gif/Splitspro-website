import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import QuoteForm from "../components/QuoteForm";
import {
  SectionHeading, Overline, CTASection, TrustList,
  ProcessTimeline, BrandStrip, BeforeAfter,
} from "../components/sections";
import {
  IMAGES, FEATURED_SERVICES, TRUST, HERO_TRUST, AREAS, FAQS,
  PHONE, PHONE_TEL, BEFORE_AFTER,
} from "../lib/data";
import { getReviews } from "../lib/api";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};

const Hero = () => (
  <section data-testid="hero" className="relative min-h-screen overflow-hidden">
    <div className="img-reveal absolute inset-0 -z-10">
      <motion.img
        src={IMAGES.heroInterior}
        alt="Warm, light-filled luxury Australian living room"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
    </div>

    <div className="sp-container grid min-h-screen items-center gap-12 pt-32 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
      <div>
        <motion.div custom={0} variants={fadeIn} initial="hidden" animate="visible">
          <Overline>Premium Air Conditioning · Western Sydney</Overline>
        </motion.div>
        <motion.h1
          custom={1} variants={fadeIn} initial="hidden" animate="visible"
          className="mt-6 font-serif text-5xl font-medium leading-[1.02] tracking-tight text-[#1D1D1F] sm:text-6xl lg:text-7xl text-balance"
        >
          Crafted Comfort<br />For Every Home
        </motion.h1>
        <motion.p
          custom={2} variants={fadeIn} initial="hidden" animate="visible"
          className="mt-7 max-w-xl text-lg leading-relaxed text-[#6E6E73]"
        >
          Every home deserves the right solution. We take the time to understand your home, recommend the right air conditioning system and install it with precision — so you can enjoy lasting comfort without the guesswork.
        </motion.p>

        <motion.div custom={3} variants={fadeIn} initial="hidden" animate="visible" className="mt-9 flex flex-wrap gap-4">
          <Link to="/contact" data-testid="hero-quote-btn" className="rounded-sm bg-[#1E3A8A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:scale-[1.02]">
            Get Free Quote
          </Link>
          <a href={PHONE_TEL} data-testid="hero-call-btn" className="flex items-center gap-2 rounded-sm border border-[#1D1D1F] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#1D1D1F] transition-colors hover:bg-[#1D1D1F] hover:text-white">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </motion.div>

        <motion.ul custom={4} variants={fadeIn} initial="hidden" animate="visible" className="mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {HERO_TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2.5 text-sm text-[#1D1D1F]">
              <Check className="h-4 w-4 shrink-0 text-[#1E3A8A]" strokeWidth={2.5} /> {t}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Hero quote form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-sm border border-[#E5E5EA] bg-white/90 p-8 backdrop-blur-2xl soft-shadow sm:p-10"
        data-testid="hero-quote-panel"
      >
        <h2 className="font-serif text-2xl text-[#1D1D1F]">Request your free quote</h2>
        <p className="mt-1.5 text-sm text-[#6E6E73]">A quick call back — no email required.</p>
        <div className="mt-7"><QuoteForm /></div>
      </motion.div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="bg-white py-28 sm:py-36" data-testid="philosophy-section">
    <div className="sp-container">
      <Reveal><Overline>Our Philosophy</Overline></Reveal>
      <Reveal delay={0.05}>
        <p className="mt-8 max-w-4xl font-serif text-3xl font-normal leading-[1.25] tracking-tight text-[#1D1D1F] sm:text-4xl lg:text-5xl text-balance">
          We don&apos;t simply install air conditioners. We craft comfort — planning every detail, recommending only what your home truly needs, and finishing each installation with the care of skilled craftsmen.
        </p>
      </Reveal>
    </div>
  </section>
);

const FeaturedServices = () => (
  <section className="bg-[#F5F5F7] py-28 sm:py-36" data-testid="services-section">
    <div className="sp-container">
      <SectionHeading overline="What We Do" title="Considered services, precisely delivered" />
      <div className="mt-20 space-y-24">
        {FEATURED_SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={0.05}>
            <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Link to={`/${s.slug}`} className="group img-reveal block overflow-hidden rounded-sm" data-testid={`service-image-${i}`}>
                <img src={s.image} alt={s.title} loading="lazy" className="img-zoom aspect-[4/3] w-full object-cover" />
              </Link>
              <div>
                <span className="font-serif text-5xl font-medium text-[#1E3A8A]/25">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-3xl text-[#1D1D1F] sm:text-4xl">{s.title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-[#6E6E73]">{s.desc}</p>
                <Link to={`/${s.slug}`} data-testid={`service-link-${i}`} className="link-line mt-7 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#1E3A8A]">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="bg-white py-28 sm:py-36" data-testid="why-section">
    <div className="sp-container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <SectionHeading overline="Why Homeowners Choose Us" title="Trust, earned through craftsmanship" sub="No inflated claims — just the standards we hold ourselves to on every job." />
      </div>
      <div><TrustList items={TRUST} /></div>
    </div>
  </section>
);

const GalleryPreview = () => (
  <section className="bg-[#F5F5F7] py-28 sm:py-36" data-testid="gallery-preview">
    <div className="sp-container">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading overline="Real Installations" title="Work we're proud to show" />
        <Reveal><Link to="/gallery" className="link-line text-sm font-semibold uppercase tracking-wider text-[#1E3A8A]">View full gallery</Link></Reveal>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[IMAGES.wallUnit, IMAGES.ducted, IMAGES.living].map((src, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="group img-reveal overflow-hidden rounded-sm">
              <img src={src} alt="SplitsPro installation" loading="lazy" className="img-zoom aspect-[3/4] w-full object-cover" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const BeforeAfterSection = () => (
  <section className="bg-white py-28 sm:py-36" data-testid="before-after-section">
    <div className="sp-container grid items-center gap-14 lg:grid-cols-2">
      <SectionHeading overline="Before & After" title="A clean, professional finish — every time" sub="We remove tired old units and replace them with beautifully finished, efficient systems. Drag to compare." />
      <Reveal delay={0.1}><BeforeAfter before={BEFORE_AFTER.before} after={BEFORE_AFTER.after} /></Reveal>
    </div>
  </section>
);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => { getReviews().then(setReviews).catch(() => setReviews([])); }, []);
  return (
    <section className="bg-[#1D1D1F] py-28 sm:py-36" data-testid="reviews-section">
      <div className="sp-container">
        <SectionHeading overline="Google Reviews" title="Kind words from local homeowners" light />
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <Reveal key={r.id} delay={i * 0.1}>
              <figure data-testid={`review-${i}`}>
                <p className="text-yellow-400 tracking-widest">★★★★★</p>
                <blockquote className="mt-5 font-serif text-xl leading-relaxed text-white/90">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-6 text-sm text-white/60">{r.name} · {r.suburb}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="bg-white py-28 sm:py-36" data-testid="process-section">
    <div className="sp-container">
      <SectionHeading overline="Our Process" title="Thoughtful from first visit to lasting comfort" />
      <div className="mt-16"><ProcessTimeline /></div>
    </div>
  </section>
);

const ServiceAreasStrip = () => (
  <section className="bg-[#F5F5F7] py-28 sm:py-36" data-testid="areas-section">
    <div className="sp-container">
      <SectionHeading overline="Service Areas" title="Proudly serving Western Sydney" align="center" />
      <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-x-3 gap-y-4">
        {AREAS.map((a, i) => (
          <Reveal key={a} delay={(i % 5) * 0.04}>
            <span className="font-serif text-2xl text-[#1D1D1F] sm:text-3xl">
              {a}<span className="mx-3 text-[#1E3A8A]">·</span>
            </span>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-10 text-center text-[#6E6E73]">
          Not sure if we cover your suburb? <a href={PHONE_TEL} className="font-semibold text-[#1E3A8A] link-line">Call {PHONE}</a>
        </p>
      </Reveal>
    </div>
  </section>
);

const HomeFAQ = () => (
  <section className="bg-white py-28 sm:py-36" data-testid="faq-section">
    <div className="sp-container grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
      <SectionHeading overline="FAQ" title="Answers, before you ask" />
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`} className="border-b border-[#E5E5EA]">
              <AccordionTrigger className="py-6 text-left font-serif text-xl font-normal text-[#1D1D1F] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-[#6E6E73]">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <BrandStrip />
    <Philosophy />
    <FeaturedServices />
    <WhyChoose />
    <GalleryPreview />
    <BeforeAfterSection />
    <Reviews />
    <Process />
    <ServiceAreasStrip />
    <HomeFAQ />
    <CTASection image={IMAGES.home} />
  </>
);

export default Home;
