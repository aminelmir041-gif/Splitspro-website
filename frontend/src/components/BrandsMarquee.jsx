import Marquee from "react-fast-marquee";
import { BRANDS } from "../lib/data";

export const BrandsMarquee = () => (
  <div className="border-y border-slate-100 bg-white py-10" data-testid="brands-marquee">
    <div className="sp-container mb-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        Proudly installing the world&apos;s leading brands
      </p>
    </div>
    <Marquee speed={40} gradient gradientColor="#ffffff" gradientWidth={120} pauseOnHover>
      {BRANDS.concat(BRANDS).map((b, i) => (
        <span
          key={i}
          className="mx-12 font-display text-2xl font-semibold text-slate-300 transition-colors duration-300 hover:text-[#0055FF] sm:text-3xl"
        >
          {b}
        </span>
      ))}
    </Marquee>
  </div>
);

export default BrandsMarquee;
