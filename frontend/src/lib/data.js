import {
  Snowflake, Wind, Wrench, Sparkles, ShieldCheck, Settings2,
} from "lucide-react";

export const PHONE = "0414 698 435";
export const PHONE_TEL = "tel:0414698435";
export const ABN = "62 137 127 557";

export const HOURS = [
  { day: "Monday – Friday", time: "7:00am – 6:00pm" },
  { day: "Saturday", time: "8:00am – 4:00pm" },
  { day: "Sunday", time: "Emergency call-outs" },
];

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Split Systems", to: "/split-systems" },
  { label: "Ducted", to: "/ducted" },
  { label: "Cleaning", to: "/cleaning" },
  { label: "Gallery", to: "/gallery" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Services shown in the hero form dropdown
export const SERVICE_OPTIONS = [
  "Split System Installation",
  "Ducted Air Conditioning",
  "Air Conditioner Cleaning",
  "Air Conditioning Repairs",
  "Air Conditioning Maintenance",
  "Air Conditioner Replacement",
  "Emergency Air Conditioning",
  "Commercial Air Conditioning",
];

export const IMAGES = {
  // Real SplitsPro project photography (client-supplied)
  livingSplit: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/g2e5o1an_AdobeStock_2001823238.webp",
  controller: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/micwrs4g_AdobeStock_709351486_Editorial_Use_Only.webp",
  cleaning: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/lf1angzr_AdobeStock_2014887759.webp",
  // Supporting genuine architectural photography
  home: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef",
  interiorLight: "https://images.pexels.com/photos/7870751/pexels-photo-7870751.jpeg",
  livingAlt: "https://images.unsplash.com/flagged/photo-1556438758-872c68902f60",
};

// Convenience aliases used across pages
IMAGES.heroInterior = IMAGES.livingSplit;
IMAGES.philosophy = IMAGES.interiorLight;
IMAGES.split = IMAGES.livingSplit;
IMAGES.ducted = IMAGES.controller;
IMAGES.technician = IMAGES.cleaning;
IMAGES.wallUnit = IMAGES.livingSplit;
IMAGES.living = IMAGES.livingAlt;
IMAGES.techIndoor = IMAGES.cleaning;

export const FEATURED_SERVICES = [
  {
    slug: "split-systems",
    title: "Split System Installation",
    desc: "Quiet, energy-efficient split systems, expertly sized and installed for the room they serve.",
    image: IMAGES.wallUnit,
    icon: Snowflake,
  },
  {
    slug: "ducted",
    title: "Ducted Air Conditioning",
    desc: "Whole-home comfort concealed within your ceiling, with discreet vents and intelligent zoning.",
    image: IMAGES.ducted,
    icon: Wind,
  },
  {
    slug: "cleaning",
    title: "Air Conditioner Cleaning",
    desc: "Thorough coil and filter cleaning for healthier air, cleaner systems and better efficiency.",
    image: IMAGES.cleaning,
    icon: Sparkles,
  },
  {
    slug: "repairs",
    title: "Air Conditioning Repairs",
    desc: "Accurate diagnostics and lasting repairs across every major brand, done right the first time.",
    image: IMAGES.cleaning,
    icon: Wrench,
  },
  {
    slug: "servicing",
    title: "Air Conditioning Maintenance",
    desc: "Considered, preventative servicing that protects your investment and your comfort year-round.",
    image: IMAGES.controller,
    icon: Settings2,
  },
];

export const BRANDS = ["Daikin", "Mitsubishi Electric", "Fujitsu", "Panasonic", "Rinnai"];

export const TRUST = [
  "Licensed & Insured",
  "Premium Installation Workmanship",
  "Tailored Comfort Solutions",
  "Honest Recommendations",
  "Clean Professional Finish",
  "Respect For Your Home",
  "High Quality Brands",
  "Energy Efficient Solutions",
  "Reliable After Sales Support",
  "Every Installation Individually Planned",
];

export const HERO_TRUST = [
  "Licensed & Insured",
  "Premium Installation Workmanship",
  "Manufacturer Warranty",
  "Western Sydney Specialists",
];

export const PROCESS = [
  { step: "01", title: "Home Assessment", desc: "We visit, listen and understand your home — its rooms, orientation, insulation and how you live in it." },
  { step: "02", title: "Tailored Comfort Plan", desc: "A considered recommendation with the right system, capacity and placement — and a clear, honest quote." },
  { step: "03", title: "Precision Installation", desc: "Skilled technicians install with care, protecting your home and finishing every detail to a premium standard." },
  { step: "04", title: "Enjoy Lasting Comfort", desc: "Balanced, efficient comfort backed by maintenance and reliable after-sales support whenever you need us." },
];

export const AREAS = [
  "Bass Hill", "Bankstown", "Chester Hill", "Guildford", "Granville",
  "Fairfield", "Liverpool", "Parramatta", "Panania", "Revesby",
];

export const GALLERY = [
  { src: IMAGES.livingSplit, title: "Living Room Split Install", tag: "Split System" },
  { src: IMAGES.controller, title: "Daikin Zone Controller", tag: "Ducted" },
  { src: IMAGES.cleaning, title: "Filter Clean & Service", tag: "Cleaning" },
  { src: IMAGES.livingAlt, title: "Open-Plan Living", tag: "Residential" },
  { src: IMAGES.home, title: "Contemporary Residence", tag: "Ducted" },
  { src: IMAGES.interiorLight, title: "Minimal Interior Zone", tag: "Commercial" },
];

export const BEFORE_AFTER = {
  before: IMAGES.cleaning,
  after: IMAGES.livingSplit,
};

export const FAQS = [
  { q: "How do you decide which system is right for my home?", a: "We start with a home assessment — considering room sizes, ceiling height, orientation, insulation and how you use each space. Rather than guessing, we recommend the system that genuinely suits your home and budget." },
  { q: "Which air conditioning brands do you install?", a: "We install and service premium brands including Daikin, Mitsubishi Electric, Fujitsu, Panasonic and Rinnai, and will recommend the best fit for your needs." },
  { q: "Do you offer air conditioner cleaning?", a: "Yes. We provide thorough coil and filter cleaning to improve air quality, efficiency and the lifespan of your system — ideal before summer." },
  { q: "Are you licensed and insured?", a: "Absolutely. SplitsPro is fully licensed, insured and refrigerant-handling certified. ABN 62 137 127 557." },
  { q: "How long does an installation take?", a: "A standard split system is typically completed within a few hours. Ducted systems usually take one to two days depending on the size of the home. We confirm timing at the planning stage." },
  { q: "Do you clean up after the installation?", a: "Always. A clean, professional finish and respect for your home are part of the SplitsPro standard — we leave your space spotless." },
  { q: "Which areas do you service?", a: "We specialise across Western Sydney including Bass Hill, Bankstown, Chester Hill, Guildford, Granville, Fairfield, Liverpool, Parramatta, Panania and Revesby. Call us to confirm your suburb." },
];

export const REVIEWS_FALLBACK = [];
