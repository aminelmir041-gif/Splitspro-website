import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Star, ShieldCheck, Clock, Award } from "lucide-react";
import Reveal from "../components/Reveal";
import BrandsMarquee from "../components/BrandsMarquee";
import { SectionHeading, CTASection, StatsRow } from "../components/sections";
import QuoteForm from "../components/QuoteForm";
import { SERVICES, IMAGES, PHONE, PHONE_TEL, PROCESS } from "../lib/data";

const HERO_LINES = ["Premium", "Air Conditioning"];

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} data-testid="hero" className="relative min-h-[92vh] overflow-hidden pt-32 sm:pt-40">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 -z-10">
        <img src={IMAGES.heroHome} alt="Premium Australian home" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </motion.div>

      <div className="sp-container relative">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0055FF] backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-[#0055FF]" /> Sydney's 5-star AC specialists
          </span>
        </motion.div>

        <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] tracking-tighter text-[#0A0A0A] sm:text-7xl lg:text-8xl">
          {HERO_LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden py-1">
              <motion.span
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                {i === 1 ? <span className="text-[#0055FF]">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          Luxury installation, repairs and servicing across Sydney. Quiet, efficient systems from the world&apos;s leading brands — finished to perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link to="/contact" data-testid="hero-cta-quote" className="inline-flex items-center gap-2 rounded-full bg-[#0055FF] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_40px_rgba(0,85,255,0.4)] transition-transform duration-300 hover:scale-[1.03]">
            Get a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
          <a href={PHONE_TEL} data-testid="hero-cta-call" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-base font-semibold text-[#0A0A0A] backdrop-blur transition-colors hover:border-[#0055FF] hover:text-[#0055FF]">
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-500"
        >
          <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-[#0055FF]" /> Licensed & insured</span>
          <span className="flex items-center gap-2"><Clock className="h-5 w-5 text-[#0055FF]" /> Same-day emergency</span>
          <span className="flex items-center gap-2"><Award className="h-5 w-5 text-[#0055FF]" /> Fixed transparent quotes</span>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => (
  <>
    <Hero />
    <BrandsMarquee />

    {/* Services */}
    <section className="py-20 sm:py-28" data-testid="services-section">
      <div className="sp-container">
        <SectionHeading eyebrow="What we do" title="Premium air conditioning, end to end" sub="From new installations to repairs and servicing — one trusted team for every climate need." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <Link to={`/${s.slug}`} data-testid={`service-card-${i}`}
                className="hover-lift group block h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm hover:border-[#0055FF]/30">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EBF3FF] text-[#0055FF] transition-colors duration-300 group-hover:bg-[#0055FF] group-hover:text-white">
                  <s.icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-[#0A0A0A]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0055FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Manifesto */}
    <section className="bg-[#F9FAFB] py-20 sm:py-28" data-testid="manifesto-section">
      <div className="sp-container">
        <SectionHeading eyebrow="The SplitsPro standard" title="Comfort, engineered like a luxury product" />
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className={`${i === 1 ? "lg:mt-16" : ""} ${i === 2 ? "lg:mt-8" : ""}`}>
                <div className="font-display text-7xl font-extrabold tracking-tighter text-[#0055FF]/15">{p.step}</div>
                <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            </Reveal>
          )).slice(0, 3)}
        </div>
      </div>
    </section>

    {/* Feature split with image */}
    <section className="py-20 sm:py-28">
      <div className="sp-container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,34,68,0.18)]">
            <img src={IMAGES.techIndoor} alt="SplitsPro technician at work" className="h-[480px] w-full object-cover" loading="lazy" />
            <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 p-5">
              <div className="flex items-center gap-1 text-[#0055FF]">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#0055FF]" />)}
              </div>
              <p className="mt-2 text-sm font-medium text-[#0A0A0A]">&ldquo;Immaculate finish, punctual and honest. The SplitsPro team set the benchmark.&rdquo;</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="Why homeowners choose us" title="A premium experience from first call to final clean" sub="We treat every home like our own — protecting your space, working tidily and finishing to a standard you'll notice." />
          <div className="mt-10"><StatsRow /></div>
        </div>
      </div>
    </section>

    {/* Quote form */}
    <section className="bg-[#F9FAFB] py-20 sm:py-28" data-testid="home-quote-section">
      <div className="sp-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <SectionHeading eyebrow="Free quote" title="Tell us about your space" sub="Share a few details and we'll call you back with honest advice and a fixed, transparent quote. No email required — just a quick call." />
        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,34,68,0.08)] sm:p-10">
            <QuoteForm />
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection />
  </>
);

export default Home;
