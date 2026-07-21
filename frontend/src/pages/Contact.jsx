import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/sections";
import Reveal from "../components/Reveal";
import QuoteForm from "../components/QuoteForm";
import { PHONE, PHONE_TEL, ABN } from "../lib/data";

const INFO = [
  { icon: Phone, label: "Call us", value: PHONE, href: PHONE_TEL },
  { icon: MapPin, label: "Service area", value: "Greater Sydney & surrounds" },
  { icon: Clock, label: "Hours", value: "Mon–Sat, plus emergency call-outs" },
  { icon: ShieldCheck, label: "ABN", value: ABN },
];

const Contact = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Let's get you comfortable"
      sub="Request your free, no-obligation quote below or call us directly. Fast response, honest advice, premium results."
    />

    <section className="pb-24" data-testid="contact-section">
      <div className="sp-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {INFO.map((item) => {
                const Comp = item.href ? "a" : "div";
                return (
                  <Comp key={item.label} {...(item.href ? { href: item.href } : {})}
                    data-testid={`contact-info-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-colors hover:border-[#0055FF]/30">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EBF3FF] text-[#0055FF]">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-400">{item.label}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-[#0A0A0A]">{item.value}</p>
                  </Comp>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 rounded-3xl bg-[#002244] p-8 text-white">
              <h3 className="font-display text-2xl font-bold">Prefer to talk?</h3>
              <p className="mt-2 text-blue-100/70">Speak directly with our team for immediate help and honest advice.</p>
              <a href={PHONE_TEL} data-testid="contact-call-btn"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0055FF] px-7 py-4 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]">
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,34,68,0.08)] sm:p-10">
            <h2 className="font-display text-2xl font-bold">Get your free quote</h2>
            <p className="mt-2 text-slate-500">We&apos;ll call you back — no email needed.</p>
            <div className="mt-8"><QuoteForm /></div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Contact;
