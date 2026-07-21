import { Link } from "react-router-dom";
import { Snowflake } from "lucide-react";

export const Logo = ({ light = false, className = "" }) => (
  <Link to="/" data-testid="logo-link" className={`flex items-center gap-2.5 ${className}`}>
    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#0055FF] text-white shadow-[0_6px_20px_rgba(0,85,255,0.35)]">
      <Snowflake className="h-5 w-5" strokeWidth={2.4} />
    </span>
    <span className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-[#0A0A0A]"}`}>
      Splits<span className="text-[#0055FF]">Pro</span>
    </span>
  </Link>
);

export default Logo;
