import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { PageHero, CTASection } from "../components/sections";
import Reveal from "../components/Reveal";
import { getReviews } from "../lib/api";

const Stars = ({ n = 5 }) => (
  <div className="flex gap-0.5 text-[#0055FF]">
    {[...Array(n)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#0055FF]" />)}
  </div>
);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((data) => setReviews(data)).catch(() => setReviews([])).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Loved by Sydney homeowners"
        sub="Real feedback from customers who trusted SplitsPro with their comfort. We're proud of every five stars."
      />

      <section className="pb-24" data-testid="reviews-grid">
        <div className="sp-container">
          <div className="mb-12 flex flex-wrap items-center gap-6 rounded-3xl border border-slate-100 bg-[#EBF3FF] p-8">
            <div className="font-display text-6xl font-extrabold text-[#0055FF]">5.0</div>
            <div>
              <Stars />
              <p className="mt-1 text-sm text-slate-600">Based on our verified customer reviews</p>
            </div>
          </div>

          {loading ? (
            <p className="text-slate-400">Loading reviews…</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r, i) => (
                <Reveal key={r.id} delay={(i % 3) * 0.08}>
                  <div data-testid={`review-card-${i}`} className="hover-lift flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                    <Quote className="h-8 w-8 text-[#0055FF]/20" />
                    <p className="mt-4 flex-1 leading-relaxed text-slate-600">&ldquo;{r.text}&rdquo;</p>
                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <Stars n={r.rating} />
                      <p className="mt-2 font-display font-bold text-[#0A0A0A]">{r.name}</p>
                      <p className="text-sm text-slate-400">{r.suburb}{r.service ? ` · ${r.service}` : ""}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Reviews;
