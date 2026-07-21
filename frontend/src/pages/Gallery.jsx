import { motion } from "framer-motion";
import { PageHero, CTASection } from "../components/sections";
import { GALLERY } from "../lib/data";

const Gallery = () => (
  <>
    <PageHero
      eyebrow="Our work"
      title="Installations worth showing off"
      sub="A look at recent SplitsPro projects across Sydney homes and businesses — clean, discreet and beautifully finished."
    />

    <section className="pb-24" data-testid="gallery-grid">
      <div className="sp-container columns-1 gap-6 sm:columns-2 lg:columns-3">
        {GALLERY.map((g, i) => (
          <motion.figure
            key={i}
            data-testid={`gallery-item-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mb-6 break-inside-avoid overflow-hidden rounded-[1.75rem] shadow-sm"
          >
            <img src={g.src} alt={g.title} loading="lazy"
              className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
              <span className="font-display text-lg font-semibold text-white">{g.title}</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">{g.tag}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>

    <CTASection />
  </>
);

export default Gallery;
