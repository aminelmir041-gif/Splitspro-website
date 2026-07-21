import { PageHero, SectionHeading, FeatureList, CTASection, StatsRow } from "../components/sections";
import Reveal from "../components/Reveal";
import BrandsMarquee from "../components/BrandsMarquee";
import { PROCESS } from "../lib/data";

const ServicePage = ({ eyebrow, title, sub, image, intro, features, gallery = [], processTitle }) => (
  <>
    <PageHero eyebrow={eyebrow} title={title} sub={sub} image={image} />

    <section className="py-20 sm:py-28">
      <div className="sp-container grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Why SplitsPro" title={intro.heading} sub={intro.body} />
          <div className="mt-8"><FeatureList items={features} /></div>
        </div>
        <Reveal delay={0.1}>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,34,68,0.14)]">
              <img src={gallery[0] || image} alt={title} className="h-[360px] w-full object-cover" loading="lazy" />
            </div>
            {gallery[1] && (
              <div className="overflow-hidden rounded-[2rem] shadow-sm">
                <img src={gallery[1]} alt={title} className="h-52 w-full object-cover" loading="lazy" />
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>

    <BrandsMarquee />

    <section className="bg-[#F9FAFB] py-20 sm:py-28">
      <div className="sp-container">
        <SectionHeading eyebrow="Our process" title={processTitle || "A seamless, premium experience"} align="center" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <div className="hover-lift h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                <div className="font-display text-5xl font-extrabold text-[#EBF3FF]">{p.step}</div>
                <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16"><StatsRow /></div>
      </div>
    </section>

    <CTASection />
  </>
);

export default ServicePage;
