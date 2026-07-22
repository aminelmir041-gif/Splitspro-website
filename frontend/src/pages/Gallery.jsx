import { motion } from "framer-motion";
import { PageHero, CTASection, BeforeAfter, SectionHeading } from "../components/sections";
import Reveal from "../components/Reveal";
import { GALLERY, IMAGES, BEFORE_AFTER } from "../lib/data";

const Gallery = () => (
  <>
    <PageHero
      overline="Gallery"
      title="Installations worth showing"
      sub="A considered look at recent SplitsPro projects across Western Sydney homes and businesses — clean, discreet and beautifully finished."
      image={IMAGES.wallUnit}
    />

    <section className="bg-white py-24" data-testid="gallery-grid">
      <div className="sp-container columns-1 gap-6 sm:columns-2 lg:columns-3">
        {GALLERY.map((g, i) => (
          <motion.figure
            key={i}
            data-testid={`gallery-item-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group img-reveal relative mb-6 break-inside-avoid overflow-hidden rounded-sm"
          >
            <img src={g.src} alt={g.title} loading="lazy" className="img-zoom w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="font-serif text-lg text-white">{g.title}</span>
              <span className="text-xs uppercase tracking-wider text-white/80">{g.tag}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>

    <section className="bg-[#F5F5F7] py-28 sm:py-36">
      <div className="sp-container grid items-center gap-14 lg:grid-cols-2">
        <SectionHeading overline="Before & After" title="A clean, professional finish" sub="We replace tired old units with beautifully finished, efficient systems. Drag to compare." />
        <Reveal delay={0.1}><BeforeAfter before={BEFORE_AFTER.before} after={BEFORE_AFTER.after} /></Reveal>
      </div>
    </section>

    <CTASection image={IMAGES.home} />
  </>
);

export default Gallery;
