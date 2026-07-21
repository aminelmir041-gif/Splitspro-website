import ServicePage from "./ServicePage";
import { IMAGES } from "../lib/data";

const Ducted = () => (
  <ServicePage
    eyebrow="Ducted Air Conditioning"
    title="Ducted Installation"
    sub="Zoned, concealed ducted air conditioning that cools your entire home evenly — beautifully integrated and barely seen."
    image={IMAGES.heroHome}
    intro={{
      heading: "Whole-home comfort, elegantly hidden",
      body: "Ducted systems deliver seamless climate control across every room with discreet ceiling vents and smart zoning. We plan each install carefully to minimise disruption and deliver a premium, architectural finish.",
    }}
    features={[
      "Custom zoning for room-by-room control",
      "Discreet ductwork and designer vents",
      "Ideal for new builds and established homes",
      "Ducted system replacements and upgrades",
      "Commercial ducted solutions available",
      "Energy-smart inverter technology",
    ]}
    gallery={[IMAGES.heroHome, IMAGES.living]}
    processTitle="Designed around your home"
  />
);

export default Ducted;
