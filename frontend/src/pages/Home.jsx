import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowUpRight, Phone, Check, MapPin, ImageIcon } from "lucide-react";
import Reveal from "../components/Reveal";
import {
  SectionHeading, Overline, CTASection, ProcessTimeline, BrandStrip, WhyGrid, TiltCard, Airflow,
} from "../components/sections";
import {
  IMAGES, FEATURED_SERVICES, AREAS, FAQS, PHONE, PHONE_TEL,
} from "../lib/data";
import { getReviews } from "../lib/api";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

const FLOAT_CARDS = [
  { label: "Premium Installation", style: "left-4 top-[24%] sm:left-8", depth: 26, delay: 0.7 },
  { label: "Licensed & Insured", style: "right-6 top-[40%] sm:right-10", depth: 40, delay: 0.9 },
  { label: "Western Sydney", style: "left-8 bottom-[16%] sm:left-16", depth: 18, delay: 1.1 },
];

const FloatCard = ({ card, index, smx, smy }) => {
  const cx = useTransform(smx, [-0.5, 0.5], [-card.depth, card.depth]);
  const cy = useTransform(smy, [-0.5, 0.5], [-card.depth, card.depth]);
  return (
    <motion.div
      className={`absolute z-10 hidden md:block ${card.style}`}
      style={{ x: cx, y: cy }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="glass-card flex items-center gap-2.5 rounded-full px-5 py-3"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A] text-white"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
        <span className="text-sm font-semibold text-[#0B1F3A]">{card.label}</span>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  const imgX = useTransform(smx, [-0.5, 0.5], [-24, 24]);
  const imgY = useTransform(smy, [-0.5, 0.5], [-16, 16]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const zoom = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section ref={ref} onMouseMove={onMove} data-testid="hero" className="relative h-screen min-h-[680px] overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={{ scale: zoom, x: imgX, y: imgY }}>
        <img src={IMAGES.heroInterior} alt="Luxury modern Australian home interior" className="h-full w-full scale-110 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/80 via-[#0B1F3A]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-[#0B1F3A]/20" />
      </motion.div>

      <Airflow className="z-0 opacity-50" />

      {/* Floating glass cards */}
      {FLOAT_CARDS.map((c, i) => (
        <FloatCard key={c.label} card={c} index={i} smx={smx} smy={smy} />
      ))}

      <motion.div className="sp-container relative z-10 flex h-full flex-col justify-center" style={{ y: contentY, opacity: fade }}>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
          <Overline light>Premium Residential Air Conditioning · Western Sydney</Overline>
        </motion.div>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.0] tracking-tight text-white sm:text-6xl lg:text-8xl">
          {["Crafted Comfort", "For Every Home"].map((line, i) => (
            <span key={line} className="block overflow-hidden py-1">
              <motion.span className="block" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.55 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-blue-100/85 sm:text-xl">
          Every home deserves the right solution. We take the time to understand your home, recommend the perfect air conditioning system and install it with precision and care.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.05 }} className="mt-9 flex flex-wrap gap-4">
          <Link to="/contact" data-testid="hero-quote-btn" className="btn-glass">Get Free Quote <ArrowUpRight className="h-4 w-4" /></Link>
          <a href={PHONE_TEL} data-testid="hero-call-btn" className="btn-glass-outline"><Phone className="h-4 w-4" /> Call Now</a>
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        <motion.div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/40 p-1.5" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
          <motion.span className="h-2 w-1 rounded-full bg-white" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

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

const Services = () => (
  <section className="bg-[#F5F5F7] py-28 sm:py-36" data-testid="services-section">
    <div className="sp-container">
      <SectionHeading overline="What We Do" title="Considered services, precisely delivered" />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {FEATURED_SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 2) * 0.1}>
            <TiltCard className="h-full [transform-style:preserve-3d]">
              <Link to={`/${s.slug}`} data-testid={`service-card-${i}`} className="group block h-full overflow-hidden rounded-2xl border border-[#E5E5EA] bg-white soft-shadow-sm">
                <div className="img-reveal relative aspect-[16/10] overflow-hidden">
                  {s.placeholder ? (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#0B1F3A] text-blue-100/70">
                      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
                      <span className="mt-3 text-sm">Project image coming soon</span>
                    </div>
                  ) : (
                    <img src={s.image} alt={s.title} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  )}
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full glass-card text-[#1E3A8A]">
                    <s.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-[#1D1D1F]">{s.title}</h3>
                  <p className="mt-3 text-[#6E6E73]">{s.desc}</p>
                  <span className="link-line mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#1E3A8A]">
                    Explore <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WhySplitsPro = () => (
  <section className="bg-white py-28 sm:py-36" data-testid="why-section">
    <div className="sp-container">
      <SectionHeading overline="Why SplitsPro" title="Trust Earned Through Craftsmanship" sub="No inflated claims. No rushed installations. Just thoughtful planning, quality workmanship and genuine care." />
      <div className="mt-16"><WhyGrid /></div>
    </div>
  </section>
);

const GalleryPreview = () => (
  <section className="bg-[#F5F5F7] py-28 sm:py-36" data-testid="gallery-preview">
    <div className="sp-container">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading overline="Real Installations" title="Work we&apos;re proud to show" />
        <Reveal><Link to="/gallery" className="link-line text-sm font-semibold uppercase tracking-wider text-[#1E3A8A]">View Full Gallery</Link></Reveal>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          { src: IMAGES.rinnaiIndoor, t: "Rinnai Indoor Split" },
          { src: IMAGES.daikinOutdoor, t: "Daikin Condenser" },
          { src: IMAGES.rinnaiOutdoor, t: "Rinnai Outdoor Unit" },
        ].map((g, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="group img-reveal relative overflow-hidden rounded-2xl soft-shadow-sm">
              <img src={g.src} alt={g.t} loading="lazy" className="img-zoom aspect-[3/4] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-serif text-lg text-white">{g.t}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => { getReviews().then(setReviews).catch(() => setReviews([])); }, []);
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] py-28 sm:py-36" data-testid="reviews-section">
      <Airflow className="opacity-25" />
      <div className="sp-container relative">
        <SectionHeading overline="Google Reviews" title="Kind words from local homeowners" light />
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <Reveal key={r.id} delay={i * 0.1}>
              <figure data-testid={`review-${i}`}>
                <p className="text-yellow-400 tracking-widest">{"★".repeat(r.rating)}</p>
                <blockquote className="mt-5 font-serif text-xl leading-relaxed text-white/90">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-6 text-sm text-blue-100/60">{r.name} · {r.suburb}</figcaption>
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

const MAPS_SRC = "https://www.google.com/maps?q=Bankstown+NSW+Australia&z=12&output=embed";

const ServiceAreas = () => {
  const [active, setActive] = useState(null);
  return (
    <section className="bg-[#F5F5F7] py-28 sm:py-36" data-testid="areas-section">
      <div className="sp-container grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading overline="Service Areas" title="Proudly serving Western Sydney" sub="Local knowledge, premium workmanship and a genuinely personal service across our suburbs." />
          <div className="mt-10 flex flex-wrap gap-3">
            {AREAS.map((a, i) => (
              <Reveal key={a} delay={(i % 4) * 0.05}>
                <button
                  data-testid={`area-${i}`}
                  onMouseEnter={() => setActive(a)}
                  onFocus={() => setActive(a)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${active === a ? "border-[#1E3A8A] bg-[#1E3A8A] text-white" : "border-[#E5E5EA] bg-white text-[#1D1D1F] hover:border-[#1E3A8A]"}`}
                >
                  <MapPin className="mr-1.5 inline h-3.5 w-3.5" />{a}
                </button>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-[#6E6E73]">Not sure if we cover your suburb? <a href={PHONE_TEL} className="font-semibold text-[#1E3A8A] link-line">Call {PHONE}</a></p>
        </div>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-[#E5E5EA] soft-shadow">
            <iframe title="SplitsPro service areas map" src={active ? `https://www.google.com/maps?q=${encodeURIComponent(active + " NSW Australia")}&z=13&output=embed` : MAPS_SRC} width="100%" height="440" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-testid="areas-map" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const HomeFAQ = () => (
  <section className="bg-white py-28 sm:py-36" data-testid="faq-section">
    <div className="sp-container grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
      <SectionHeading overline="FAQ" title="Answers, before you ask" />
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`} className="border-b border-[#E5E5EA]">
              <AccordionTrigger className="py-6 text-left font-serif text-xl font-normal text-[#1D1D1F] hover:no-underline">{f.q}</AccordionTrigger>
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
    <Services />
    <WhySplitsPro />
    <GalleryPreview />
    <Reviews />
    <Process />
    <ServiceAreas />
    <HomeFAQ />
    <CTASection />
  </>
);

export default Home;
