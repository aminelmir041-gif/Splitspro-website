import { PageHero, SectionHeading, FeatureList, ProcessTimeline, BrandStrip, CTASection } from "../components/sections";
import Reveal from "../components/Reveal";
import { ImageIcon } from "lucide-react";

const ServicePage = ({ overline, title, sub, image, intro, features }) => (
  <>
    <PageHero overline={overline} title={title} sub={sub} image={image}
      note={!image ? "Project photography coming soon" : undefined} />

    <section className="bg-white py-28 sm:py-36">
      <div className="sp-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading overline="The SplitsPro Approach" title={intro.heading} sub={intro.body} />
        </div>
        <Reveal delay={0.1}>
          {image ? (
            <div className="img-reveal overflow-hidden rounded-2xl soft-shadow">
              <img src={image} alt={title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
          ) : (
            <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl bg-[#0B1F3A] text-blue-100/70">
              <ImageIcon className="h-9 w-9" strokeWidth={1.4} />
              <span className="mt-3 text-sm">Project image coming soon</span>
            </div>
          )}
        </Reveal>
      </div>
    </section>

    <section className="bg-[#F5F5F7] py-28 sm:py-36">
      <div className="sp-container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading overline="What's Included" title="Held to a premium standard" />
        <FeatureList items={features} />
      </div>
    </section>

    <BrandStrip />

    <section className="bg-white py-28 sm:py-36">
      <div className="sp-container">
        <SectionHeading overline="Our Process" title="A seamless, considered experience" />
        <div className="mt-16"><ProcessTimeline /></div>
      </div>
    </section>

    <CTASection />
  </>
);

export default ServicePage;
