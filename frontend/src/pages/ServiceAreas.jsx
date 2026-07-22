import { useState } from "react";
import { Phone, MapPin } from "lucide-react";
import { PageHero, CTASection, SectionHeading } from "../components/sections";
import Reveal from "../components/Reveal";
import { AREAS_REGIONS, PHONE, PHONE_TEL } from "../lib/data";

const mapFor = (a) =>
  a
    ? `https://www.google.com/maps?q=${encodeURIComponent(a + " NSW Australia")}&z=13&output=embed`
    : "https://www.google.com/maps?q=Bankstown+NSW+Australia&z=11&output=embed";

const ServiceAreas = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <PageHero
        overline="Service Areas"
        title="South West Sydney specialists — servicing all of Sydney"
        sub="Based in South Western Sydney, we bring premium air conditioning installation, cleaning, maintenance and repairs to homes right across the Sydney metropolitan area."
      />

      <section className="bg-white py-28 sm:py-36" data-testid="areas-grid">
        <div className="sp-container grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading overline="Where We Work" title="Your suburb, expertly covered" />
            <div className="mt-10 space-y-6">
              {AREAS_REGIONS.map((grp) => (
                <Reveal key={grp.region} delay={0.03}>
                  <div>
                    <h3 className={`font-serif text-lg ${grp.primary ? "text-[#1E3A8A]" : "text-[#1D1D1F]"}`}>
                      {grp.region}
                      {grp.primary && <span className="ml-2 rounded-full bg-[#1E3A8A] px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wider text-white">Primary</span>}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {grp.suburbs.map((a, i) => (
                        <button
                          key={a}
                          data-testid={`area-${grp.region.replace(/\s+/g, "-").toLowerCase()}-${i}`}
                          onMouseEnter={() => setActive(a)}
                          onFocus={() => setActive(a)}
                          onClick={() => setActive(a)}
                          className={`rounded-full border px-3.5 py-1.5 text-sm transition-all duration-300 ${active === a ? "border-[#1E3A8A] bg-[#1E3A8A] text-white" : "border-[#E5E5EA] bg-white text-[#6E6E73] hover:border-[#1E3A8A] hover:text-[#1D1D1F]"}`}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[#6E6E73]"><MapPin className="mr-1 inline h-4 w-4 text-[#1E3A8A]" /> SplitsPro services <span className="font-semibold text-[#1D1D1F]">all Sydney metropolitan suburbs</span>. Don&apos;t see yours listed?</p>
              <a href={PHONE_TEL} data-testid="areas-call-btn" className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#1E3A8A] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-[1.02]">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-[#E5E5EA] soft-shadow lg:sticky lg:top-28">
              <iframe title="SplitsPro service map" src={mapFor(active)} width="100%" height="560" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-testid="areas-map" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServiceAreas;
