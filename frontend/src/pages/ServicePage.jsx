import { PageHero, SectionHeading, TrustList, ProcessTimeline, BrandStrip, CTASection } from "../components/sections";
import Reveal from "../components/Reveal";

const ServicePage = ({ overline, title, sub, image, intro, features, gallery = [] }) => (
  <>
    <PageHero overline={overline} title={title} sub={sub} image={image} />

    <section className="bg-white py-28 sm:py-36">
      <div className="sp-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading overline="The SplitsPro Approach" title={intro.heading} sub={intro.body} />
        </div>
        <Reveal delay={0.1}>
          <div className="img-reveal overflow-hidden rounded-sm">
            <img src={gallery[0] || image} alt={title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-[#F5F5F7] py-28 sm:py-36">
      <div className="sp-container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading overline="What's Included" title="Held to a premium standard" />
        <TrustList items={features} />
      </div>
    </section>

    <BrandStrip />

    <section className="bg-white py-28 sm:py-36">
      <div className="sp-container">
        <SectionHeading overline="Our Process" title="A seamless, considered experience" />
        <div className="mt-16"><ProcessTimeline /></div>
      </div>
    </section>

    <CTASection image={image} />
  </>
);

export default ServicePage;
