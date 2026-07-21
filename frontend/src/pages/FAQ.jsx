import { PageHero, CTASection } from "../components/sections";
import Reveal from "../components/Reveal";
import { FAQS } from "../lib/data";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

const FAQ = () => (
  <>
    <PageHero
      eyebrow="FAQ"
      title="Answers, before you ask"
      sub="Everything you need to know about our air conditioning installation, repairs and servicing. Still curious? We're a phone call away."
    />

    <section className="pb-24" data-testid="faq-section">
      <div className="sp-container max-w-3xl">
        <Reveal>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white px-6 shadow-sm">
                <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-slate-500">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>

    <CTASection />
  </>
);

export default FAQ;
