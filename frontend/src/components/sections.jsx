import { Link } from "react-router-dom";
import { ArrowRight, Phone, Check } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { PHONE, PHONE_TEL, STATS } from "../lib/data";

export const Eyebrow = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0055FF]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#0055FF]" />
    {children}
  </span>
);

export const SectionHeading = ({ eyebrow, title, sub, align = "left" }) => (
  <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>}
    <Reveal delay={0.05}>
      <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-[#0A0A0A] sm:text-5xl text-balance">{title}</h2>
    </Reveal>
    {sub && <Reveal delay={0.1}><p className="mt-4 text-lg leading-relaxed text-slate-500">{sub}</p></Reveal>}
  </div>
);

export const PageHero = ({ eyebrow, title, sub, image }) => (
  <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EBF3FF] to-white" />
    <div className="sp-container grid items-center gap-12 lg:grid-cols-2">
      <div>
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 font-display text-5xl font-extrabold tracking-tighter text-[#0A0A0A] sm:text-6xl text-balance">{title}</h1>
        </Reveal>
        <Reveal delay={0.1}><p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500">{sub}</p></Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0055FF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,85,255,0.35)] transition-transform duration-300 hover:scale-[1.03]" data-testid="hero-quote-btn">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-[#0055FF] hover:text-[#0055FF]">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
      {image && (
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,34,68,0.18)]">
            <img src={image} alt={title} className="h-[420px] w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      )}
    </div>
  </section>
);

export const StatsRow = () => (
  <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
    {STATS.map((s, i) => (
      <Reveal key={s.label} delay={i * 0.06}>
        <div className="rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-sm">
          <div className="font-display text-4xl font-extrabold text-[#0055FF]">{s.value}</div>
          <div className="mt-2 text-sm text-slate-500">{s.label}</div>
        </div>
      </Reveal>
    ))}
  </div>
);

export const CTASection = () => (
  <section className="relative overflow-hidden bg-[#002244] py-20 sm:py-28">
    <motion.div
      aria-hidden
      className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#0055FF]/30 blur-3xl"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <div className="sp-container relative text-center">
      <Reveal>
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
          Ready for premium comfort in your home?
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mx-auto mt-5 max-w-xl text-lg text-blue-100/70">
          Book a free, no-obligation quote today. Fast response, honest advice and a finish you&apos;ll be proud of.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/contact" data-testid="cta-quote-btn" className="inline-flex items-center gap-2 rounded-full bg-[#0055FF] px-8 py-4 text-base font-semibold text-white transition-transform duration-300 hover:scale-[1.03]">
            Get a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
          <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10">
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export const FeatureList = ({ items }) => (
  <ul className="grid gap-4">
    {items.map((it) => (
      <li key={it} className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EBF3FF] text-[#0055FF]">
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
        <span className="text-slate-600">{it}</span>
      </li>
    ))}
  </ul>
);
