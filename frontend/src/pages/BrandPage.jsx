import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { PageHero, SectionHeading, TrustBadges, ServiceReviews, GoogleRating, CTASection } from "../components/sections";
import Reveal from "../components/Reveal";
import QuoteForm from "../components/QuoteForm";
import { SPLIT_BRANDS, FORM_TRUST_STRIP } from "../lib/data";

const BrandPage = () => {
  const { slug } = useParams();
  const brand = SPLIT_BRANDS.find((b) => b.slug === slug);
  if (!brand) return <Navigate to="/split-systems" replace />;

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

      <PageHero
        overline={`${brand.brand} · ${brand.range}`}
        title={brand.h1}
        sub={brand.tagline}
        image={brand.image}
      />

      <TrustBadges />

      <section className="bg-white py-24 sm:py-32" data-testid="brand-intro">
        <div className="sp-container grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Link to="/split-systems" data-testid="brand-back" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#C8A46A] link-line">
              <ArrowLeft className="h-4 w-4" /> Split System Air Conditioning
            </Link>
            <h2 className="mt-6 font-serif text-3xl font-medium leading-tight text-[#1D1D1F] md:text-4xl text-balance">{brand.h1}</h2>
            <p className="mt-5 leading-relaxed text-[#6E6E73]">{brand.body}</p>

            <div className="mt-8 rounded-xl border border-[#E5E5EA] bg-[#F5F5F7] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6E6E73]">Available capacities</p>
              <p className="mt-2 font-serif text-lg text-[#1D1D1F]">{brand.sizes}</p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Supplied &amp; installed pricing", "Fixed written quote", "Manufacturer's warranty", "Professional installation"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#1D1D1F]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A46A]" strokeWidth={2} />
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <GoogleRating />
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[#E5E5EA] bg-white p-8 soft-shadow sm:p-10" data-testid="brand-quote-card">
              <h3 className="font-serif text-2xl text-[#1D1D1F]">Get your fixed installed price</h3>
              <p className="mt-2 text-sm text-[#6E6E73]">Tell us your room and we&apos;ll come back with a supplied-and-installed quote for the {brand.label}.</p>
              <div className="mt-7">
                <QuoteForm defaultService="Split System Installation" submitLabel={`Get My ${brand.brand} Quote`} />
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#E5E5EA] pt-5">
                {FORM_TRUST_STRIP.slice(0, 5).map((t) => (
                  <li key={t} className="flex items-center gap-1.5 text-xs font-medium text-[#6E6E73]">
                    <Check className="h-3.5 w-3.5 text-[#C8A46A]" strokeWidth={2.5} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-24 sm:py-32">
        <div className="sp-container">
          <SectionHeading overline="Explore Other Brands" title="Compare our split system range" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPLIT_BRANDS.filter((b) => b.slug !== brand.slug).map((b) => (
              <Link key={b.slug} to={`/split-systems/${b.slug}`} data-testid={`brand-link-${b.slug}`}
                className="group flex items-center justify-between rounded-xl border border-[#E5E5EA] bg-white p-5 transition-all duration-300 hover:border-[#C8A46A] hover:-translate-y-[2px] soft-shadow-sm">
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-[#6E6E73]">{b.brand}</span>
                  <span className="block font-serif text-lg text-[#1D1D1F]">{b.range}</span>
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
