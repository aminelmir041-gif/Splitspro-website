import ServicePage from "./ServicePage";
import { IMAGES } from "../lib/data";

const SplitSystems = () => (
  <ServicePage
    overline="Split System Installation"
    title="Quiet comfort, room by room"
    sub="Expertly sized and installed split systems that suit the space they serve — beautifully finished and barely heard."
    image={IMAGES.wallUnit}
    intro={{
      heading: "The right split, in exactly the right place",
      body: "We never guess. We assess the room, its orientation and how you use it, then recommend a system sized precisely for the space. Every install is planned for tidy pipe runs, discreet placement and a flawless finish.",
    }}
    features={[
      "Correct sizing for each room",
      "Premium brands — Daikin, Mitsubishi Electric, Fujitsu, Panasonic",
      "Tidy, concealed pipe runs",
      "Split system replacements & upgrades",
      "Clean, professional finish",
      "Manufacturer warranty",
    ]}
    gallery={[IMAGES.split]}
  />
);

export default SplitSystems;
