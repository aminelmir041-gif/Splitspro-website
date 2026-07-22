import { Phone } from "lucide-react";
import { PageHero, CTASection, SectionHeading } from "../components/sections";
import Reveal from "../components/Reveal";
import { AREAS, IMAGES, PHONE, PHONE_TEL } from "../lib/data";

const MAPS_SRC = "https://www.google.com/maps?q=Bass+Hill+NSW+Australia&z=11&output=embed";

const ServiceAreas = () => (
  <>
    <PageHero
      overline="Service Areas"
      title="Western Sydney specialists"
      sub="We know the homes and streets we work in. Local knowledge, premium workmanship and a genuinely personal service."
      image={IMAGES.home}
    />

    <section className="bg-white py-28 sm:py-36" data-testid="areas-grid">
      <div className="sp-container grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading overline="Where We Work" title="Proudly serving your suburb" />
          <div className="mt-10 flex flex-wrap gap-x-2 gap-y-4">
            {AREAS.map((a, i) => (
              <Reveal key={a} delay={(i % 5) * 0.04}>
                <span data-testid={`area-${i}`} className="font-serif text-2xl text-[#1D1D1F] sm:text-3xl">
                  {a}{i < AREAS.length - 1 && <span className="mx-2.5 text-[#1E3A8A]">·</span>}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-[#6E6E73]">
              Outside these suburbs? We often travel further for the right project.
            </p>
            <a href={PHONE_TEL} data-testid="areas-call-btn" className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#1E3A8A] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-[1.02]">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-sm border border-[#E5E5EA] soft-shadow-sm">
            <iframe title="SplitsPro service map" src={MAPS_SRC} width="100%" height="460" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-testid="areas-map" />
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection image={IMAGES.philosophy} />
  </>
);

export default ServiceAreas;
