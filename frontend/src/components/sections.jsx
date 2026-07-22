import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Check } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE, PHONE_TEL, BRANDS, PROCESS } from "../lib/data";

export const Overline = ({ children, light = false }) => (
  <span className={`overline ${light ? "text-white/60" : ""}`}>{children}</span>
);

export const SectionHeading = ({ overline, title, sub, align = "left", light = false }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {overline && <Reveal><Overline light={light}>{overline}</Overline></Reveal>}
    <Reveal delay={0.05}>
      <h2 className={`mt-5 font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl text-balance ${light ? "text-white" : "text-[#1D1D1F]"}`}>{title}</h2>
    </Reveal>
    {sub && <Reveal delay={0.1}><p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/70" : "text-[#6E6E73]"}`}>{sub}</p></Reveal>}
  </div>
);

export const PageHero = ({ overline, title, sub, image }) => (
  <section className="relative flex min-h-[62vh] items-end overflow-hidden">
    <div className="img-reveal absolute inset-0 -z-10">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
    </div>
    <div className="sp-container pb-16 pt-40 sm:pb-20">
      <Reveal><Overline light>{overline}</Overline></Reveal>
      <Reveal delay={0.05}>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-medium leading-none tracking-tight text-white md:text-6xl lg:text-7xl text-balance">{title}</h1>
      </Reveal>
      {sub && <Reveal delay={0.1}><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{sub}</p></Reveal>}
    </div>
  </section>
);

export const CTASection = ({ image }) => (
  <section className="relative overflow-hidden bg-[#1D1D1F] py-28 sm:py-36" data-testid="cta-section">
    {image && (
      <div className="absolute inset-0 -z-0 opacity-20">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
    )}
    <div className="sp-container relative z-10 text-center">
      <Reveal><Overline light>Request a quote</Overline></Reveal>
      <Reveal delay={0.06}>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl text-balance">
          Let&apos;s craft the right comfort for your home
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          A considered assessment, an honest recommendation and a precise installation. Request your free, no-obligation quote today.
        </p>
      </Reveal>
      <Reveal delay={0.18}>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" data-testid="cta-quote-btn" className="rounded-sm bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1D1D1F] transition-transform duration-300 hover:scale-[1.02]">
            Get Free Quote
          </Link>
          <a href={PHONE_TEL} className="flex items-center gap-2 rounded-sm border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export const TrustList = ({ items }) => (
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

export const ProcessTimeline = ({ light = false }) => (
  <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
    {PROCESS.map((p, i) => (
      <Reveal key={p.step} delay={i * 0.08}>
        <div className={`border-t pt-6 ${light ? "border-white/20" : "border-[#1D1D1F]"}`}>
          <span className={`font-serif text-5xl font-medium ${light ? "text-white/40" : "text-[#1E3A8A]"}`}>{p.step}</span>
          <h3 className={`mt-5 font-serif text-2xl ${light ? "text-white" : "text-[#1D1D1F]"}`}>{p.title}</h3>
          <p className={`mt-3 text-sm leading-relaxed ${light ? "text-white/60" : "text-[#6E6E73]"}`}>{p.desc}</p>
        </div>
      </Reveal>
    ))}
  </div>
);

export const BrandStrip = () => (
  <div className="border-y border-[#E5E5EA] bg-white py-14" data-testid="brand-strip">
    <div className="sp-container">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#6E6E73]">
        Trusted premium brands
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {BRANDS.map((b) => (
          <span key={b} className="font-serif text-2xl text-[#1D1D1F]/40 transition-colors duration-300 hover:text-[#1D1D1F] sm:text-3xl">{b}</span>
        ))}
      </div>
    </div>
  </div>
);

export const BeforeAfter = ({ before, after }) => {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);

  const move = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      data-testid="before-after"
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-sm"
      onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
      onClick={(e) => move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <img src={after} alt="After installation" className="absolute inset-0 h-full w-full object-cover" />
      <img src={before} alt="Before installation" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      <span className="absolute left-4 top-4 rounded-sm bg-black/60 px-3 py-1 text-xs uppercase tracking-wider text-white" style={{ opacity: pos > 12 ? 1 : 0 }}>Before</span>
      <span className="absolute right-4 top-4 rounded-sm bg-[#1E3A8A] px-3 py-1 text-xs uppercase tracking-wider text-white">After</span>
      <div className="absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
        <div
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white soft-shadow"
          data-testid="before-after-handle"
        >
          <span className="text-[#1E3A8A]">⇄</span>
        </div>
      </div>
    </div>
  );
};
