import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Check, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { PHONE, PHONE_TEL, BRANDS, PROCESS, WHY } from "../lib/data";

export const Overline = ({ children, light = false }) => (
  <span className={`overline ${light ? "text-blue-300" : ""}`}>{children}</span>
);

export const SectionHeading = ({ overline, title, sub, align = "left", light = false }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {overline && <Reveal><Overline light={light}>{overline}</Overline></Reveal>}
    <Reveal delay={0.05}>
      <h2 className={`mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl text-balance ${light ? "text-white" : "text-[#1D1D1F]"}`}>{title}</h2>
    </Reveal>
    {sub && <Reveal delay={0.1}><p className={`mt-5 text-lg leading-relaxed ${light ? "text-blue-100/70" : "text-[#6E6E73]"}`}>{sub}</p></Reveal>}
  </div>
);

// Soft animated airflow lines (used over hero / navy sections)
export const Airflow = ({ className = "" }) => (
  <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none" aria-hidden>
    {[0, 1, 2, 3].map((i) => (
      <motion.path
        key={i}
        d={`M-50 ${120 + i * 110} C 300 ${60 + i * 110}, 600 ${200 + i * 90}, 1250 ${100 + i * 110}`}
        stroke="url(#airflowGrad)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.6, 0], x: [0, 40, 0] }}
        transition={{ duration: 9 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
      />
    ))}
    <defs>
      <linearGradient id="airflowGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
        <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// Deep-navy hero used by interior pages (no photo reuse)
export const PageHero = ({ overline, title, sub, image, note }) => {
  if (image) {
    return (
      <section className="relative flex min-h-[58vh] items-end overflow-hidden">
        <div className="img-reveal absolute inset-0 -z-10">
          <motion.img src={image} alt={title} initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/85 via-[#0B1F3A]/40 to-[#0B1F3A]/20" />
        </div>
        <div className="sp-container pb-16 pt-40">
          <Reveal><Overline light>{overline}</Overline></Reveal>
          <Reveal delay={0.05}><h1 className="mt-5 max-w-4xl font-serif text-5xl font-medium leading-none tracking-tight text-white md:text-6xl lg:text-7xl text-balance">{title}</h1></Reveal>
          {sub && <Reveal delay={0.1}><p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80">{sub}</p></Reveal>}
        </div>
      </section>
    );
  }
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-[#0B1F3A]">
      <motion.div aria-hidden className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#1E3A8A]/50 blur-[120px]" animate={{ x: [0, 80, 0], y: [0, 40, 0] }} transition={{ duration: 16, repeat: Infinity }} />
      <motion.div aria-hidden className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-[#2563EB]/30 blur-[120px]" animate={{ x: [0, -60, 0], y: [0, -30, 0] }} transition={{ duration: 18, repeat: Infinity }} />
      <Airflow className="opacity-40" />
      <div className="sp-container relative pb-16 pt-40">
        <Reveal><Overline light>{overline}</Overline></Reveal>
        <Reveal delay={0.05}><h1 className="mt-5 max-w-4xl font-serif text-5xl font-medium leading-none tracking-tight text-white md:text-6xl lg:text-7xl text-balance">{title}</h1></Reveal>
        {sub && <Reveal delay={0.1}><p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80">{sub}</p></Reveal>}
        {note && <Reveal delay={0.15}><p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-blue-100/70">{note}</p></Reveal>}
      </div>
    </section>
  );
};

export const CTASection = () => (
  <section className="relative overflow-hidden bg-[#0B1F3A] py-28 sm:py-36" data-testid="cta-section">
    <motion.div aria-hidden className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#1E3A8A]/40 blur-[130px]" animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 8, repeat: Infinity }} />
    <Airflow className="opacity-30" />
    <div className="sp-container relative z-10 text-center">
      <Reveal><Overline light>Request a quote</Overline></Reveal>
      <Reveal delay={0.06}><h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl text-balance">Let&apos;s craft the right comfort for your home</h2></Reveal>
      <Reveal delay={0.12}><p className="mx-auto mt-6 max-w-xl text-lg text-blue-100/70">A considered consultation, an honest recommendation and a precise installation. Request your free, no-obligation quote today.</p></Reveal>
      <Reveal delay={0.18}>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" data-testid="cta-quote-btn" className="btn-glass-light">Get Free Quote <ArrowUpRight className="h-4 w-4" /></Link>
          <a href={PHONE_TEL} className="btn-glass-outline"><Phone className="h-4 w-4" /> {PHONE}</a>
        </div>
      </Reveal>
    </div>
  </section>
);

// 3D tilt card for services
export const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { mx.set(0.5); my.set(0.5); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const WhyGrid = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {WHY.map((w, i) => (
      <Reveal key={w.title} delay={(i % 3) * 0.08}>
        <div className="hover-rise group h-full rounded-2xl border border-[#E5E5EA] bg-white p-8 soft-shadow-sm">
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF3FF] text-[#1E3A8A]">
            <motion.span aria-hidden className="absolute inset-0 rounded-full bg-[#1E3A8A]/10" animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }} />
            <w.icon className="h-6 w-6" strokeWidth={1.7} />
          </span>
          <h3 className="mt-6 font-serif text-xl text-[#1D1D1F]">{w.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#6E6E73]">{w.desc}</p>
        </div>
      </Reveal>
    ))}
  </div>
);

export const ProcessTimeline = () => (
  <div className="relative">
    <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#E5E5EA] lg:block" />
    <motion.div
      className="absolute left-0 top-7 hidden h-px bg-[#1E3A8A] lg:block"
      initial={{ width: "0%" }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
    />
    <div className="grid gap-12 lg:grid-cols-4">
      {PROCESS.map((p, i) => (
        <Reveal key={p.step} delay={i * 0.12}>
          <div className="relative">
            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#1E3A8A] bg-white font-serif text-lg font-medium text-[#1E3A8A]">{p.step}</span>
            <h3 className="mt-6 font-serif text-2xl text-[#1D1D1F]">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6E6E73]">{p.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export const BrandStrip = () => (
  <div className="border-y border-[#E5E5EA] bg-white py-14" data-testid="brand-strip">
    <div className="sp-container">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#6E6E73]">Trusted premium brands</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {BRANDS.map((b) => (
          <span key={b.name} className="cursor-default font-serif text-2xl text-[#1D1D1F]/30 transition-colors duration-300 sm:text-3xl"
            style={{ transition: "color .3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = b.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            {b.name}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const FeatureList = ({ items }) => (
  <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
    {items.map((it, i) => (
      <Reveal key={it} delay={(i % 2) * 0.05}>
        <li className="flex items-center gap-4 border-b border-[#E5E5EA] pb-5">
          <Check className="h-5 w-5 shrink-0 text-[#1E3A8A]" strokeWidth={2} />
          <span className="text-lg text-[#1D1D1F]">{it}</span>
        </li>
      </Reveal>
    ))}
  </ul>
);
