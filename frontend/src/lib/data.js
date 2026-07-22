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
  heroInterior: "https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg",
  philosophy: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab",
  split: "https://images.unsplash.com/photo-1762341123870-d706f257a12e",
  ducted: "https://images.pexels.com/photos/8297856/pexels-photo-8297856.jpeg",
  technician: "https://images.pexels.com/photos/6471911/pexels-photo-6471911.jpeg",
  cleaning: "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg",
  // proven luxury/detail shots
  home: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef",
  living: "https://images.unsplash.com/flagged/photo-1556438758-872c68902f60",
  wallUnit: "https://images.unsplash.com/photo-1718203862467-c33159fdc504",
  interiorLight: "https://images.pexels.com/photos/7870751/pexels-photo-7870751.jpeg",
  techIndoor: "https://images.pexels.com/photos/32588555/pexels-photo-32588555.jpeg",
};

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
    image: IMAGES.technician,
    icon: Wrench,
  },
  {
    slug: "servicing",
    title: "Air Conditioning Maintenance",
    desc: "Considered, preventative servicing that protects your investment and your comfort year-round.",
    image: IMAGES.techIndoor,
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
  { src: IMAGES.wallUnit, title: "Master Bedroom Split", tag: "Split System" },
  { src: IMAGES.ducted, title: "Concealed Ducted Vents", tag: "Ducted" },
  { src: IMAGES.living, title: "Open-Plan Living", tag: "Residential" },
  { src: IMAGES.split, title: "Precision Wall Fit", tag: "Installation" },
  { src: IMAGES.interiorLight, title: "Minimal Interior Zone", tag: "Commercial" },
  { src: IMAGES.technician, title: "Outdoor Condenser", tag: "Installation" },
  { src: IMAGES.home, title: "Contemporary Residence", tag: "Ducted" },
  { src: IMAGES.techIndoor, title: "Service & Clean", tag: "Maintenance" },
];

export const BEFORE_AFTER = {
  before: IMAGES.techIndoor,
  after: IMAGES.wallUnit,
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
