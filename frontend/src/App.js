import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import { Toaster } from "@/components/ui/sonner";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

import Home from "@/pages/Home";
import About from "@/pages/About";
import SplitSystems from "@/pages/SplitSystems";
import Ducted from "@/pages/Ducted";
import Cleaning from "@/pages/Cleaning";
import Repairs from "@/pages/Repairs";
import Servicing from "@/pages/Servicing";
import Gallery from "@/pages/Gallery";
import Reviews from "@/pages/Reviews";
import ServiceAreas from "@/pages/ServiceAreas";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);
  return null;
};

function App() {
  return (
    <div className="App">
      <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/split-systems" element={<SplitSystems />} />
              <Route path="/ducted" element={<Ducted />} />
              <Route path="/cleaning" element={<Cleaning />} />
              <Route path="/repairs" element={<Repairs />} />
              <Route path="/servicing" element={<Servicing />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </ReactLenis>
    </div>
  );
}

export default App;
