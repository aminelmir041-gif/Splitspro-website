import ServicePage from "./ServicePage";
import { IMAGES } from "../lib/data";

const SplitSystems = () => (
  <ServicePage
    eyebrow="Split Systems"
    title="Split System Installation"
    sub="Whisper-quiet, energy-efficient split systems installed and replaced to a flawless premium standard across Sydney."
    image={IMAGES.acWall}
    intro={{
      heading: "The perfect split for every room",
      body: "From compact bedrooms to open-plan living, we size, position and install your split system for maximum comfort and minimal running costs — with a spotless, professional finish every time.",
    }}
    features={[
      "Expert sizing so your system is never over or under-powered",
      "Premium brands: Daikin, Mitsubishi Electric, Fujitsu, Panasonic",
      "Tidy back-to-back and concealed pipe runs",
      "Split system replacements and upgrades",
      "Fixed, transparent quotes with no hidden fees",
      "Fully licensed, insured and refrigerant certified",
    ]}
    gallery={[IMAGES.acWall, IMAGES.interior]}
    processTitle="From consult to cool in four steps"
  />
);

export default SplitSystems;
