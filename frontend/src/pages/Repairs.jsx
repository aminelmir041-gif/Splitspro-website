import ServicePage from "./ServicePage";
import { IMAGES } from "../lib/data";

const Repairs = () => (
  <ServicePage
    eyebrow="Repairs & Emergency"
    title="Air Conditioning Repairs"
    sub="Fast, accurate diagnostics and lasting repairs for every brand — including same-day emergency call-outs when the heat won't wait."
    image={IMAGES.techOutdoor}
    intro={{
      heading: "Back to comfort, fast",
      body: "Not cooling, making noise, or leaking? Our licensed technicians diagnose the real problem the first time and fix it properly. We repair all major brands and offer honest advice on repair versus replacement.",
    }}
    features={[
      "Same-day emergency response available",
      "All brands diagnosed and repaired",
      "Honest repair-vs-replace advice",
      "Air conditioner replacements when needed",
      "Upfront pricing before any work begins",
      "Workmanship you can rely on",
    ]}
    gallery={[IMAGES.techOutdoor, IMAGES.techIndoor]}
    processTitle="Diagnose, fix, done"
  />
);

export default Repairs;
