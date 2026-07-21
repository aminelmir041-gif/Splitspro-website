import {
  Snowflake, Wind, RefreshCw, Wrench, Settings, SprayCan,
  Siren, Home as HomeIcon, Building2, Cog, ArrowLeftRight,
} from "lucide-react";

export const PHONE = "0414 698 435";
export const PHONE_TEL = "tel:0414698435";
export const ABN = "62 137 127 557";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Split Systems", to: "/split-systems" },
  { label: "Ducted", to: "/ducted" },
  { label: "Repairs", to: "/repairs" },
  { label: "Servicing", to: "/servicing" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  { icon: Snowflake, title: "Split System Installation", slug: "split-systems", desc: "Precision-fitted split systems for whisper-quiet comfort in any room." },
  { icon: Wind, title: "Ducted Installation", slug: "ducted", desc: "Zoned, concealed ducted air conditioning that cools the whole home evenly." },
  { icon: RefreshCw, title: "Air Conditioner Replacement", slug: "repairs", desc: "Upgrade tired, inefficient units to quiet, energy-smart systems." },
  { icon: ArrowLeftRight, title: "Split System Replacement", slug: "split-systems", desc: "Swap out old splits for the latest inverter technology." },
  { icon: Cog, title: "Ducted System Replacement", slug: "ducted", desc: "Full ducted upgrades with modern controllers and zoning." },
  { icon: Wrench, title: "Air Conditioning Repairs", slug: "repairs", desc: "Fast, accurate diagnostics and lasting fixes for every brand." },
  { icon: Settings, title: "Air Conditioning Servicing", slug: "servicing", desc: "Scheduled servicing to keep performance high and bills low." },
  { icon: SprayCan, title: "Air Conditioner Cleaning", slug: "servicing", desc: "Deep coil and filter cleaning for healthier, cleaner air." },
  { icon: Siren, title: "Emergency Air Conditioning", slug: "repairs", desc: "Same-day emergency response when the heat won't wait." },
  { icon: HomeIcon, title: "Residential Air Conditioning", slug: "split-systems", desc: "Tailored home comfort solutions, beautifully installed." },
  { icon: Building2, title: "Commercial Air Conditioning", slug: "ducted", desc: "Reliable climate control for offices, retail and hospitality." },
];

export const BRANDS = ["Daikin", "Mitsubishi Electric", "Fujitsu", "Panasonic", "Rinnai"];

export const IMAGES = {
  heroHome: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef",
  homeAlt: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
  techOutdoor: "https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg",
  techIndoor: "https://images.pexels.com/photos/32588555/pexels-photo-32588555.jpeg",
  interior: "https://images.pexels.com/photos/7870751/pexels-photo-7870751.jpeg",
  acWall: "https://images.unsplash.com/photo-1718203862467-c33159fdc504",
  living: "https://images.unsplash.com/flagged/photo-1556438758-872c68902f60",
};

export const GALLERY = [
  { src: IMAGES.heroHome, title: "Poolside Residence", tag: "Ducted" },
  { src: IMAGES.acWall, title: "Master Bedroom Split", tag: "Split System" },
  { src: IMAGES.living, title: "Open-Plan Living", tag: "Residential" },
  { src: IMAGES.techOutdoor, title: "Outdoor Condenser Fit", tag: "Installation" },
  { src: IMAGES.interior, title: "Minimal Interior Zone", tag: "Commercial" },
  { src: IMAGES.techIndoor, title: "Service & Clean", tag: "Servicing" },
  { src: IMAGES.homeAlt, title: "Contemporary Home", tag: "Ducted" },
];

export const AREAS = [
  { region: "Sydney CBD & Inner", suburbs: ["Sydney CBD", "Surry Hills", "Newtown", "Redfern", "Alexandria", "Pyrmont"] },
  { region: "Eastern Suburbs", suburbs: ["Bondi", "Randwick", "Coogee", "Maroubra", "Double Bay", "Vaucluse"] },
  { region: "North Shore", suburbs: ["Chatswood", "North Sydney", "Mosman", "Lane Cove", "Hornsby", "Willoughby"] },
  { region: "Northern Beaches", suburbs: ["Manly", "Dee Why", "Brookvale", "Mona Vale", "Avalon", "Freshwater"] },
  { region: "Western Sydney", suburbs: ["Parramatta", "Penrith", "Blacktown", "Castle Hill", "Baulkham Hills", "Liverpool"] },
  { region: "Southern Sydney", suburbs: ["Cronulla", "Sutherland", "Hurstville", "Miranda", "Kogarah", "Caringbah"] },
];

export const FAQS = [
  { q: "How much does a split system installation cost?", a: "Every home is different, so we provide a fixed, transparent quote after understanding your space, room size and preferred brand. There are no hidden fees — the price we quote is the price you pay." },
  { q: "Which air conditioning brands do you install?", a: "We install and service premium brands including Daikin, Mitsubishi Electric, Fujitsu, Panasonic and Rinnai. We'll recommend the best fit for your budget and requirements." },
  { q: "Do you offer emergency air conditioning repairs?", a: "Yes. We prioritise emergency call-outs, especially during heatwaves, and aim to restore your comfort the same day wherever possible." },
  { q: "How often should I service my air conditioner?", a: "We recommend a professional service and clean at least once a year — ideally before summer — to maintain efficiency, air quality and warranty compliance." },
  { q: "Are you licensed and insured?", a: "Absolutely. SplitsPro is fully licensed, insured and refrigerant-handling certified. ABN 62 137 127 557." },
  { q: "Do you install ducted air conditioning in existing homes?", a: "Yes. We install ducted systems in both new builds and established homes, carefully planning zoning and ceiling access to minimise disruption." },
  { q: "How long does an installation take?", a: "A standard back-to-back split system is typically completed within a few hours. Ducted systems usually take one to two days depending on the size of the home." },
  { q: "Do you clean up after the job?", a: "Always. We treat your home with respect and leave every workspace spotless — clean installs are part of the SplitsPro standard." },
];

export const PROCESS = [
  { step: "01", title: "Consult", desc: "We assess your space, listen to your goals and recommend the ideal system — no pressure, no upsell." },
  { step: "02", title: "Design", desc: "A tailored plan with the right capacity, brand and zoning, delivered as a fixed transparent quote." },
  { step: "03", title: "Install", desc: "Licensed technicians install with precision, protecting your home and finishing to a premium standard." },
  { step: "04", title: "Enjoy", desc: "Perfectly balanced comfort, backed by servicing and support whenever you need us." },
];

export const STATS = [
  { value: "10+", label: "Years experience" },
  { value: "2,500+", label: "Systems installed" },
  { value: "5★", label: "Average rating" },
  { value: "100%", label: "Licensed & insured" },
];
