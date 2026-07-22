import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV } from "../lib/data";
import Logo from "./Logo";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-[#E5E5EA] bg-white py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="sp-container flex items-center justify-between gap-6">
        <Logo scrolled={scrolled} />

        <div className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `link-line text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-[#1E3A8A]" : "text-[#1D1D1F] hover:text-[#1E3A8A]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="nav-get-quote-btn"
            className="hidden rounded-sm bg-[#1E3A8A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:scale-[1.02] sm:block"
          >
            Get Quote
          </Link>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E5EA] text-[#1D1D1F] lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="sp-container grid gap-1 py-6">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `border-b border-[#F5F5F7] py-4 font-serif text-xl ${
                      isActive ? "text-[#1E3A8A]" : "text-[#1D1D1F]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact" className="mt-4 rounded-sm bg-[#1E3A8A] px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-white">
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
