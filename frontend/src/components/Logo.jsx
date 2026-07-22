import { Link } from "react-router-dom";

export const LOGO_SRC =
  "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/a55k1vny_file_0000000066a4820ba3e92654f08d7669.jpg";

export const Logo = ({ light = false, scrolled = false }) => (
  <Link to="/" data-testid="logo-link" className="flex items-center">
    {light ? (
      <span className="inline-flex rounded-sm bg-white p-2.5">
        <img src={LOGO_SRC} alt="SplitsPro Airconditioning" className="h-12 w-auto object-contain" />
      </span>
    ) : (
      <img
        src={LOGO_SRC}
        alt="SplitsPro Airconditioning"
        className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-11" : "h-14"}`}
      />
    )}
  </Link>
);

export default Logo;
