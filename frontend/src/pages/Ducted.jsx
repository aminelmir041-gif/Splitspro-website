import ServicePage from "./ServicePage";
import { IMAGES } from "../lib/data";

const Ducted = () => (
  <ServicePage
    overline="Ducted Air Conditioning"
    title="Whole-home comfort, elegantly hidden"
    sub="Zoned ducted air conditioning concealed within your ceiling — seamless comfort with discreet vents and intelligent control."
    image={IMAGES.ducted}
    intro={{
      heading: "Designed around your home, not the other way around",
      body: "Ducted systems reward careful planning. We map zones to how you live, plan ceiling access to minimise disruption and integrate vents so they sit quietly within your architecture. The result is even, effortless comfort throughout.",
    }}
    features={[
      "Custom zoning for room-by-room control",
      "Discreet ductwork and designer vents",
      "Ideal for new builds and established homes",
      "Ducted replacements and upgrades",
      "Energy-efficient inverter technology",
      "Commercial ducted solutions available",
    ]}
    gallery={[IMAGES.home]}
  />
);

export default Ducted;
