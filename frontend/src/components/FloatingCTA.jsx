import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_TEL } from "../lib/data";

export const FloatingCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating quote */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-8 right-8 z-40 hidden md:block"
          >
            <Link
              to="/contact"
              data-testid="floating-quote-btn"
              className="rounded-sm bg-[#1E3A8A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white soft-shadow transition-transform duration-300 hover:scale-[1.03]"
            >
              Get Free Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky call + quote */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden">
        <a
          href={PHONE_TEL}
          data-testid="sticky-call-btn"
          className="flex items-center justify-center gap-2 bg-[#1D1D1F] py-4 text-sm font-semibold uppercase tracking-wider text-white"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link
          to="/contact"
          data-testid="sticky-quote-btn"
          className="flex items-center justify-center bg-[#1E3A8A] py-4 text-sm font-semibold uppercase tracking-wider text-white"
        >
          Get Free Quote
        </Link>
      </div>
    </>
  );
};

export default FloatingCTA;
