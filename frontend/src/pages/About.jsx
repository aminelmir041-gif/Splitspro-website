import { PageHero, SectionHeading, TrustList, ProcessTimeline, BrandStrip, CTASection } from "../components/sections";
import Reveal from "../components/Reveal";
import { IMAGES, TRUST } from "../lib/data";

const About = () => (
  <>
    <PageHero
      overline="About SplitsPro"
      title="Craftsmen of comfort"
      sub="We're Western Sydney air conditioning specialists who believe every home deserves a considered, precise solution — not a one-size-fits-all sell."
      image={IMAGES.philosophy}
    />

    <section className="bg-white py-28 sm:py-36">
      <div className="sp-container">
        <Reveal><span className="overline">Our Belief</span></Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-4xl font-serif text-3xl font-normal leading-[1.25] tracking-tight text-[#1D1D1F] sm:text-4xl lg:text-5xl text-balance">
            Every home is different. Rather than guessing, we take the time to understand yours — then recommend and install the right system, properly, the first time.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-[#F5F5F7] py-28 sm:py-36">
      <div className="sp-container grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="img-reveal overflow-hidden rounded-sm">
            <img src={IMAGES.home} alt="Premium Australian home" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
        </Reveal>
        <div>
          <SectionHeading overline="How We Work" title="The feeling of hiring true craftsmen" sub="Working with SplitsPro should feel like engaging a premium architect or bespoke builder — thoughtful planning, precise workmanship and genuine respect for your home." />
        </div>
      </div>
    </section>

    <section className="bg-white py-28 sm:py-36">
      <div className="sp-container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading overline="What We Stand For" title="Principles we won't compromise" />
        <TrustList items={TRUST} />
      </div>
    </section>

    <BrandStrip />

    <section className="bg-[#F5F5F7] py-28 sm:py-36">
      <div className="sp-container">
        <SectionHeading overline="Our Process" title="Considered from start to finish" />
        <div className="mt-16"><ProcessTimeline /></div>
      </div>
    </section>

    <CTASection image={IMAGES.philosophy} />
  </>
);

export default About;
