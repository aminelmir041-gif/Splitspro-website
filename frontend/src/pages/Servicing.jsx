import ServicePage from "./ServicePage";
import { IMAGES } from "../lib/data";

const Servicing = () => (
  <ServicePage
    eyebrow="Servicing & Cleaning"
    title="Air Conditioning Servicing"
    sub="Keep your system running at peak efficiency with professional servicing and deep cleaning for healthier air and lower bills."
    image={IMAGES.techIndoor}
    intro={{
      heading: "Protect your investment",
      body: "Regular servicing keeps your air conditioner efficient, extends its life and maintains warranty compliance. Our deep coil and filter cleaning also improves air quality — ideal before the summer rush.",
    }}
    features={[
      "Comprehensive performance service",
      "Deep coil and filter cleaning",
      "Improved air quality and efficiency",
      "Preventative checks to avoid breakdowns",
      "Maintains manufacturer warranty",
      "Scheduled servicing plans available",
    ]}
    gallery={[IMAGES.techIndoor, IMAGES.interior]}
    processTitle="Simple, thorough servicing"
  />
);

export default Servicing;
