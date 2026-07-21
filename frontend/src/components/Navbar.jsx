import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, PHONE, PHONE_TEL } from "../lib/data";
import Logo from "./Logo";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-slate-100 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="sp-container flex items-center justify-between gap-4">
        <Logo />

        <div className="hidden items-center gap-0.5 xl:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `rounded-full px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                  isActive ? "text-[#0055FF]" : "text-slate-600 hover:text-[#0A0A0A]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            data-testid="nav-call-btn"
            className="hidden items-center gap-2 rounded-full bg-[#0055FF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(0,85,255,0.3)] transition-transform duration-300 hover:scale-[1.03] sm:flex"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0A0A0A] xl:hidden"
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass mt-3 overflow-hidden border-t border-slate-100 xl:hidden"
          >
            <div className="sp-container grid gap-1 py-5">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? "bg-[#EBF3FF] text-[#0055FF]" : "text-slate-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a href={PHONE_TEL} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#0055FF] px-5 py-3.5 text-base font-semibold text-white">
                <Phone className="h-5 w-5" /> Call {PHONE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
