import ServicePage from "./ServicePage";
import { IMAGES } from "../lib/data";

const Repairs = () => (
  <ServicePage
    overline="Air Conditioning Repairs"
    title="Diagnosed properly, fixed for good"
    sub="Accurate diagnostics and lasting repairs across every major brand — including same-day emergency call-outs when comfort can't wait."
    image={IMAGES.technician}
    intro={{
      heading: "We find the real problem, then fix it right",
      body: "Not cooling, noisy or leaking? We diagnose the underlying cause rather than treating symptoms, and give honest advice on whether a repair or replacement makes better sense for your home.",
    }}
    features={[
      "Same-day emergency response available",
      "All major brands repaired",
      "Honest repair-vs-replace advice",
      "Upfront pricing before any work",
      "Reliable, lasting fixes",
      "Respect for your home",
    ]}
    gallery={[IMAGES.techIndoor]}
  />
);

export default Repairs;
