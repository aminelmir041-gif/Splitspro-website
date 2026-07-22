import { Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "../components/sections";
import Reveal from "../components/Reveal";
import QuoteForm from "../components/QuoteForm";
import { PHONE, PHONE_TEL, ABN, HOURS, IMAGES } from "../lib/data";

const Contact = () => (
  <>
    <PageHero
      overline="Contact"
      title="Let's craft your comfort"
      sub="Request your free, no-obligation quote below or call us directly. Thoughtful advice, precise workmanship, lasting comfort."
      image={IMAGES.philosophy}
    />

    <section className="bg-white py-24 sm:py-32" data-testid="contact-section">
      <div className="sp-container grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <span className="overline">Speak With Us</span>
            <a href={PHONE_TEL} data-testid="contact-call-btn" className="mt-5 flex items-center gap-3 font-serif text-4xl text-[#1D1D1F] transition-colors hover:text-[#1E3A8A]">
              <Phone className="h-7 w-7 text-[#1E3A8A]" /> {PHONE}
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12 space-y-8">
              <div className="border-t border-[#E5E5EA] pt-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6E6E73]"><Clock className="h-4 w-4" /> Opening Hours</p>
                <div className="mt-4 space-y-2">
                  {HOURS.map((h) => (
                    <p key={h.day} className="flex justify-between text-[#1D1D1F]"><span>{h.day}</span><span className="text-[#6E6E73]">{h.time}</span></p>
                  ))}
                </div>
              </div>
              <div className="border-t border-[#E5E5EA] pt-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6E6E73]"><MapPin className="h-4 w-4" /> Service Area</p>
                <p className="mt-4 text-[#1D1D1F]">Western Sydney & surrounds</p>
                <p className="mt-2 text-sm text-[#6E6E73]">ABN {ABN}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="rounded-sm border border-[#E5E5EA] bg-white p-8 soft-shadow sm:p-10">
            <h2 className="font-serif text-3xl text-[#1D1D1F]">Get your free quote</h2>
            <p className="mt-2 text-[#6E6E73]">We&apos;ll call you back — no email needed.</p>
            <div className="mt-8"><QuoteForm /></div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Contact;
