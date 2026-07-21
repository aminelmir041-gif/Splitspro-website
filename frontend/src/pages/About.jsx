import { PageHero, SectionHeading, CTASection, StatsRow, FeatureList } from "../components/sections";
import Reveal from "../components/Reveal";
import BrandsMarquee from "../components/BrandsMarquee";
import { IMAGES } from "../lib/data";

const CHAPTERS = [
  { n: "01", title: "Obsessed with the finish", body: "Anyone can hang a unit on a wall. We care about pipe runs, bracket placement, cable management and the millimetre-perfect details that separate a good install from a premium one." },
  { n: "02", title: "Honest, never pushy", body: "We recommend what's right for your home and budget — not the most expensive option. Fixed, transparent quotes mean no surprises, ever." },
  { n: "03", title: "Respect for your home", body: "Drop sheets down, boots off, spotless clean-up. We treat your space with the same care we'd give our own." },
  { n: "04", title: "Here for the long run", body: "From installation to servicing and support, we build relationships — not one-off jobs. Your comfort is our reputation." },
];

const About = () => (
  <>
    <PageHero
      eyebrow="About SplitsPro"
      title="Premium comfort, done properly"
      sub="We're Sydney air conditioning specialists on a simple mission: deliver luxury-grade installations and service with total honesty and craftsmanship."
      image={IMAGES.techOutdoor}
    />

    <section className="py-20 sm:py-28">
      <div className="sp-container grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Our story" title="Built on craftsmanship and trust" sub="SplitsPro was founded to raise the bar for air conditioning in Australian homes. We combine technical expertise with a genuine obsession for quality — the kind of finish you'd expect from a luxury brand." />
          <div className="mt-8">
            <FeatureList items={[
              "Fully licensed, insured & refrigerant certified",
              "Premium brands only — Daikin, Mitsubishi Electric, Fujitsu, Panasonic, Rinnai",
              "Fixed transparent quotes with no hidden fees",
              "Residential & commercial specialists",
            ]} />
          </div>
        </div>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,34,68,0.16)]">
            <img src={IMAGES.homeAlt} alt="Premium Australian home" className="h-[460px] w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-[#F9FAFB] py-20 sm:py-28">
      <div className="sp-container">
        <SectionHeading eyebrow="What we stand for" title="Four principles, zero compromise" align="center" />
        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <div className={i % 2 === 1 ? "sm:mt-10" : ""}>
                <div className="font-display text-6xl font-extrabold tracking-tighter text-[#0055FF]/20">{c.n}</div>
                <h3 className="mt-3 font-display text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-slate-500">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20"><StatsRow /></div>
      </div>
    </section>

    <BrandsMarquee />
    <CTASection />
  </>
);

export default About;
