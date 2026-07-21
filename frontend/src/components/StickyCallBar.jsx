import { PHONE, PHONE_TEL } from "../lib/data";
import { Phone } from "lucide-react";

export const StickyCallBar = () => (
  <a
    href={PHONE_TEL}
    data-testid="sticky-call-btn"
    className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-[#0055FF] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,85,255,0.45)] transition-transform duration-300 active:scale-95 md:hidden"
  >
    <Phone className="h-5 w-5" /> Call {PHONE}
  </a>
);

export default StickyCallBar;
