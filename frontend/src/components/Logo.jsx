import { Link } from "react-router-dom";
import { LOGO } from "../lib/data";

export const Logo = ({ onDark = false, scrolled = false }) => (
  <Link to="/" data-testid="logo-link" className="flex items-center">
    <img
      src={LOGO}
      alt="SplitsPro Airconditioning"
      className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-11" : "h-14"} ${onDark ? "[filter:brightness(0)_invert(1)]" : ""}`}
    />
  </Link>
);

export default Logo;
