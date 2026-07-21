import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { NAV, SERVICES, PHONE, PHONE_TEL, ABN } from "../lib/data";
import Logo from "./Logo";

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-slate-100 bg-[#002244] text-white">
    <div className="sp-container grid gap-12 py-16 md:grid-cols-4">
      <div className="md:col-span-1">
        <Logo light />
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-blue-100/70">
          Premium air conditioning installation, repairs and servicing across Sydney. Licensed, insured and finished to a luxury standard.
        </p>
        <a href={PHONE_TEL} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0055FF] px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]">
          <Phone className="h-4 w-4" /> {PHONE}
        </a>
      </div>

      <div>
        <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-blue-100/60">Explore</h4>
        <ul className="mt-5 space-y-3">
          {NAV.slice(0, 6).map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="text-sm text-blue-100/80 transition-colors hover:text-white">{n.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-blue-100/60">Services</h4>
        <ul className="mt-5 space-y-3">
          {SERVICES.slice(0, 6).map((s) => (
            <li key={s.title}>
              <Link to={`/${s.slug}`} className="text-sm text-blue-100/80 transition-colors hover:text-white">{s.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-blue-100/60">Get in touch</h4>
        <div className="mt-5 space-y-4 text-sm text-blue-100/80">
          <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0055FF]" /> Servicing Greater Sydney & surrounds</p>
          <p className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0055FF]" /> {PHONE}</p>
          <p className="text-blue-100/60">ABN {ABN}</p>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="sp-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-blue-100/60 sm:flex-row">
        <p>© {new Date().getFullYear()} SplitsPro. All rights reserved.</p>
        <p>ABN {ABN} · Fully licensed & insured</p>
      </div>
    </div>
  </footer>
);

export default Footer;
