import { useState } from "react";
import { Phone, MapPin } from "lucide-react";
import { PageHero, CTASection, SectionHeading } from "../components/sections";
import Reveal from "../components/Reveal";
import { AREAS, PHONE, PHONE_TEL } from "../lib/data";

const mapFor = (a) =>
  a
    ? `https://www.google.com/maps?q=${encodeURIComponent(a + " NSW Australia")}&z=13&output=embed`
    : "https://www.google.com/maps?q=Bankstown+NSW+Australia&z=12&output=embed";

const ServiceAreas = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <PageHero
        overline="Service Areas"
        title="Western Sydney specialists"
        sub="We know the homes and streets we work in. Local knowledge, premium workmanship and a genuinely personal service."
      />

      <section className="bg-white py-28 sm:py-36" data-testid="areas-grid">
        <div className="sp-container grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading overline="Where We Work" title="Proudly serving your suburb" />
            <div className="mt-10 flex flex-wrap gap-3">
              {AREAS.map((a, i) => (
                <Reveal key={a} delay={(i % 4) * 0.05}>
                  <button
                    data-testid={`area-${i}`}
                    onMouseEnter={() => setActive(a)}
                    onFocus={() => setActive(a)}
                    onClick={() => setActive(a)}
                    className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${active === a ? "border-[#1E3A8A] bg-[#1E3A8A] text-white" : "border-[#E5E5EA] bg-white text-[#1D1D1F] hover:border-[#1E3A8A]"}`}
                  >
                    <MapPin className="mr-1.5 inline h-3.5 w-3.5" />{a}
                  </button>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-10 text-[#6E6E73]">Outside these suburbs? We often travel further for the right project.</p>
              <a href={PHONE_TEL} data-testid="areas-call-btn" className="btn-glass mt-5">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-[#E5E5EA] soft-shadow">
              <iframe title="SplitsPro service map" src={mapFor(active)} width="100%" height="460" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-testid="areas-map" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServiceAreas;
