import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLenis } from "lenis/react";
import { ArrowLeft, ArrowUpRight, Check, Info } from "lucide-react";
import { PageHero, SectionHeading, TrustBadges, ServiceReviews, GoogleRating, CTASection } from "../components/sections";
import Reveal from "../components/Reveal";
import QuoteForm from "../components/QuoteForm";
import { SPLIT_BRANDS, PRICING_DISCLAIMER, FORM_TRUST_STRIP } from "../lib/data";

const BrandPage = () => {
  const { slug } = useParams();
  const brand = SPLIT_BRANDS.find((b) => b.slug === slug);
  const lenis = useLenis();
  const [selected, setSelected] = useState(null);

  if (!brand) return <Navigate to="/split-systems" replace />;

  const handleBook = (rangeName, priceRow) => {
    const sel = { rangeName, kw: priceRow.kw, price: priceRow.price };
    setSelected(sel);
    setTimeout(() => {
      const el = document.getElementById("book");
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: -20 });
      else el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const jumpToRange = (rangeSlug) => {
    const el = document.getElementById(`range-${rangeSlug}`);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -20 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectionMessage = selected
    ? `I'd like to book installation for ${brand.brand} ${selected.rangeName} ${selected.kw} — advertised at ${selected.price} supplied & installed.`
    : "";

  const formKey = selected ? `${brand.slug}-${selected.rangeName}-${selected.kw}` : `${brand.slug}-default`;
  const submitLabel = selected
    ? `Book ${brand.brand} ${selected.rangeName} ${selected.kw}`
    : `Get My ${brand.brand} Quote`;

  return (
    <>
      <Helmet>
        <title>{brand.metaTitle}</title>
        <meta name="description" content={brand.metaDesc} />
        <link rel="canonical" href={`https://splitspro.com.au/split-systems/${brand.slug}`} />
        <meta property="og:title" content={brand.metaTitle} />
        <meta property="og:description" content={brand.metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={brand.image} />
      </Helmet>

      <PageHero overline={brand.brand} title={brand.h1} sub={brand.tagline} image={brand.image} />

      <TrustBadges />

      {/* Intro + range jump nav */}
      <section className="bg-white py-24 sm:py-32" data-testid="brand-intro">
        <div className="sp-container">
          <Link to="/split-systems" data-testid="brand-back" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#C8A46A] link-line">
            <ArrowLeft className="h-4 w-4" /> Split System Air Conditioning
          </Link>
          <div className="mt-6 max-w-3xl">
            <p className="leading-relaxed text-[#6E6E73]">{brand.body}</p>
          </div>

          {brand.ranges.length > 1 && (
            <div className="mt-10 flex flex-wrap items-center gap-3" data-testid="range-tabs">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6E6E73]">Jump to:</span>
              {brand.ranges.map((r, i) => (
                <button key={r.slug} onClick={() => jumpToRange(r.slug)} data-testid={`range-tab-${r.slug}`}
                  className="rounded-full border border-[#0B0B0B]/15 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B0B0B] transition-all hover:border-[#C8A46A] hover:text-[#C8A46A]">
                  {r.name}
                </button>
              ))}
            </div>
          )}

          <div className="mt-10"><GoogleRating /></div>
        </div>
      </section>

      {/* Ranges + pricing tables */}
      {brand.ranges.map((range, ri) => (
        <section
          key={range.slug}
          id={`range-${range.slug}`}
          data-testid={`range-${range.slug}`}
          className={`scroll-mt-24 py-24 sm:py-32 ${ri % 2 === 0 ? "bg-[#F5F5F7]" : "bg-white"}`}
        >
          <div className="sp-container">
            <SectionHeading overline={brand.brand} title={`${brand.brand} ${range.name}`} sub={range.blurb} />

            <div className="mt-12 overflow-hidden rounded-2xl border border-[#E5E5EA] bg-white soft-shadow-sm">
              <div className="hidden border-b border-[#E5E5EA] bg-[#0B0B0B] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F8F7F5] sm:grid sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-8">
                <span>Capacity</span>
                <span>Supplied &amp; Installed</span>
                <span className="text-right">Book</span>
              </div>
              {range.prices.map((row, i) => (
                <div
                  key={row.kw}
                  data-testid={`price-row-${range.slug}-${row.kw.replace(/[^0-9a-z]/gi, "")}`}
                  className={`grid gap-3 px-6 py-6 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-8 ${i > 0 ? "border-t border-[#E5E5EA]" : ""}`}
                >
                  <span className="font-serif text-2xl text-[#0B0B0B]">{row.kw}</span>
                  <span className="font-serif text-2xl text-[#0B0B0B]">
                    {row.price} <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#6E6E73]">Supplied &amp; Installed</span>
                  </span>
                  <button
                    onClick={() => handleBook(range.name, row)}
                    data-testid={`book-btn-${range.slug}-${row.kw.replace(/[^0-9a-z]/gi, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0B0B0B] border border-[#C8A46A]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#F8F7F5] transition-all hover:border-[#C8A46A] hover:text-[#E4CFA6] hover:-translate-y-[2px]"
                  >
                    Book Installation <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-[#6E6E73]" data-testid={`disclaimer-${range.slug}`}>
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C8A46A]" /> {PRICING_DISCLAIMER}
            </p>
          </div>
        </section>
      ))}

      {/* Booking form — pre-filled with selection */}
      <section id="book" className="scroll-mt-24 bg-[#0B0B0B] py-24 sm:py-32" data-testid="brand-book-section">
        <div className="sp-container grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="overline text-[#C8A46A]">Book Installation</span>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl text-balance">
              {selected
                ? `Book your ${brand.brand} ${selected.rangeName} ${selected.kw}`
                : `Book your ${brand.brand} installation`}
            </h2>
            {selected && (
              <p className="mt-5 text-lg text-[#C8A46A]" data-testid="brand-selected-summary">
                {selected.price} · Supplied &amp; Installed
              </p>
            )}
            <p className="mt-6 max-w-md leading-relaxed text-white/70">
              Send us your details and we&apos;ll be in touch to confirm your booking and site details. No obligation.
            </p>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10" data-testid="brand-quote-card">
              <QuoteForm
                key={formKey}
                onDark
                defaultService="Split System Installation"
                defaultMessage={selectionMessage}
                submitLabel={submitLabel}
              />
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5">
                {FORM_TRUST_STRIP.slice(0, 5).map((t) => (
                  <li key={t} className="flex items-center gap-1.5 text-xs font-medium text-white/70">
                    <Check className="h-3.5 w-3.5 text-[#C8A46A]" strokeWidth={2.5} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sibling brand nav */}
      <section className="bg-[#F5F5F7] py-24 sm:py-32">
        <div className="sp-container">
          <SectionHeading overline="Explore Other Brands" title="Compare our split system range" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPLIT_BRANDS.filter((b) => b.slug !== brand.slug).map((b) => (
              <Link key={b.slug} to={`/split-systems/${b.slug}`} data-testid={`brand-link-${b.slug}`}
                className="group flex items-center justify-between rounded-xl border border-[#E5E5EA] bg-white p-5 transition-all duration-300 hover:border-[#C8A46A] hover:-translate-y-[2px] soft-shadow-sm">
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-[#6E6E73]">{b.brand}</span>
                  <span className="mt-1 block font-serif text-lg text-[#0B0B0B]">View prices</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#C8A46A] transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/split-systems" data-testid="brand-back-main" className="inline-flex items-center gap-2 rounded-md bg-[#0B0B0B] border border-[#C8A46A]/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#F8F7F5] transition-all hover:border-[#C8A46A] hover:-translate-y-[2px]">
              <ArrowLeft className="h-4 w-4" /> Back to Split System Air Conditioning
            </Link>
          </div>
        </div>
      </section>

      <ServiceReviews category="split-systems" light />

      <CTASection />
    </>
  );
};

export default BrandPage;
