import { MapPin, Phone } from "lucide-react";
import { PageHero, CTASection } from "../components/sections";
import Reveal from "../components/Reveal";
import { AREAS, PHONE, PHONE_TEL } from "../lib/data";

const ServiceAreas = () => (
  <>
    <PageHero
      eyebrow="Service Areas"
      title="Proudly servicing Greater Sydney"
      sub="From the Eastern Suburbs to the west and everywhere between — if you're in Sydney, we've got your comfort covered. Not sure if we cover you? Just call."
    />

    <section className="pb-24" data-testid="areas-grid">
      <div className="sp-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((a, i) => (
          <Reveal key={a.region} delay={(i % 3) * 0.08}>
            <div data-testid={`area-card-${i}`} className="hover-lift h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm hover:border-[#0055FF]/30">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EBF3FF] text-[#0055FF]">
                <MapPin className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{a.region}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {a.suburbs.map((s) => (
                  <li key={s} className="rounded-full bg-slate-50 px-3 py-1 text-sm text-slate-600">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="sp-container mt-14">
        <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#002244] p-10 text-center sm:flex-row sm:text-left">
          <p className="max-w-lg text-lg text-blue-100/80">Outside these areas? We often travel further for the right project — give us a call to check availability.</p>
          <a href={PHONE_TEL} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0055FF] px-7 py-4 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]" data-testid="areas-call-btn">
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default ServiceAreas;
