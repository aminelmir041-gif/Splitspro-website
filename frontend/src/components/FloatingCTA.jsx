import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingCTA = () => (
  <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          to="/contact"
          data-testid="floating-quote-btn"
          className="flex items-center gap-2 rounded-full border border-white/25 bg-[#1E3A8A]/90 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_44px_rgba(11,31,58,0.45)] backdrop-blur-xl transition-colors duration-300 hover:bg-[#1E3A8A]"
        >
          Get Free Quote
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </motion.div>
  </div>
);

export default FloatingCTA;
