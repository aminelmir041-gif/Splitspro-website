import { useEffect, useState } from "react";
import { PageHero, CTASection } from "../components/sections";
import Reveal from "../components/Reveal";
import { IMAGES } from "../lib/data";
import { getReviews } from "../lib/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then(setReviews).catch(() => setReviews([])).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHero
        overline="Google Reviews"
        title="Kind words from local homeowners"
        sub="Real feedback from Western Sydney customers who trusted SplitsPro with their comfort."
        image={IMAGES.living}
      />

      <section className="bg-white py-24 sm:py-32" data-testid="reviews-grid">
        <div className="sp-container">
          {loading ? (
            <p className="text-[#6E6E73]">Loading reviews…</p>
          ) : (
            <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
              {reviews.map((r, i) => (
                <Reveal key={r.id} delay={(i % 2) * 0.08}>
                  <figure data-testid={`review-card-${i}`} className="border-t border-[#E5E5EA] pt-8">
                    <p className="text-yellow-500 tracking-widest">{"★".repeat(r.rating)}</p>
                    <blockquote className="mt-5 font-serif text-2xl font-normal leading-relaxed text-[#1D1D1F]">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-6 text-sm text-[#6E6E73]">
                      <span className="font-semibold text-[#1D1D1F]">{r.name}</span> · {r.suburb}
                      {r.service ? <span className="block text-[#6E6E73]/70">{r.service}</span> : null}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection image={IMAGES.home} />
    </>
  );
};

export default Reviews;
