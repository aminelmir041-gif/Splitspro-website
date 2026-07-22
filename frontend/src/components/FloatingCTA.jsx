import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_TEL } from "../lib/data";

export const FloatingCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 z-40 hidden md:block"
          >
            <Link to="/contact" data-testid="floating-quote-btn" className="btn-glass shadow-[0_16px_44px_rgba(30,58,138,0.4)]">
              Get Free Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky glass bar */}
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 md:hidden">
        <a href={PHONE_TEL} data-testid="sticky-call-btn"
          className="glass-card flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0B1F3A]">
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link to="/contact" data-testid="sticky-quote-btn"
          className="flex items-center justify-center rounded-full bg-[#1E3A8A] py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_10px_30px_rgba(30,58,138,0.4)]">
          Free Quote
        </Link>
      </div>
    </>
  );
};

export default FloatingCTA;
