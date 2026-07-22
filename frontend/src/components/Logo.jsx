import { Link } from "react-router-dom";
import { Snowflake } from "lucide-react";

export const Logo = ({ light = false }) => (
  <Link to="/" data-testid="logo-link" className="flex items-center gap-2.5">
    <span className={`flex h-8 w-8 items-center justify-center rounded-full ${light ? "bg-white text-[#1E3A8A]" : "bg-[#1E3A8A] text-white"}`}>
      <Snowflake className="h-4 w-4" strokeWidth={2} />
    </span>
    <span className={`font-serif text-2xl font-semibold tracking-tight ${light ? "text-white" : "text-[#1D1D1F]"}`}>
      SplitsPro
    </span>
  </Link>
);

export default Logo;
