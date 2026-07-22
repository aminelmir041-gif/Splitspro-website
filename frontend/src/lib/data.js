import {
  Snowflake, Wind, Wrench, Sparkles, ShieldCheck, HeartHandshake,
  BadgeCheck, Home as HomeIcon, Brush, MessageSquareQuote,
} from "lucide-react";

export const PHONE = "0414 698 435";
export const PHONE_TEL = "tel:0414698435";
export const ABN = "62 137 127 557";
export const LOGO = "/logo.png";

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

export const SERVICE_OPTIONS = [
  "Split System Installation",
  "Ducted Air Conditioning",
  "Air Conditioner Cleaning",
  "Maintenance & Repairs",
  "Air Conditioner Replacement",
  "Emergency Air Conditioning",
  "Commercial Air Conditioning",
];

// Real client photography (uploaded). No stock, no reuse across sections.
export const IMAGES = {
  heroInterior: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/q6fmbwv0_AdobeStock_569217207.webp",
  livingSplit: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/g2e5o1an_AdobeStock_2001823238.webp",
  rinnaiIndoor: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/iai8aofm_20260716_183258%281%29.webp",
  daikinOutdoor: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/8sn2d27k_AdobeStock_1222382516_Editorial_Use_Only.webp",
  rinnaiOutdoor: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/meyqoj4d_file_000000004bf881fbb2fa04727afb3b11.png",
  cleaning: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/lf1angzr_AdobeStock_2014887759.webp",
  controller: "https://customer-assets-lxgj4vgw.emergentagent.net/job_splitspro-preview/artifacts/micwrs4g_AdobeStock_709351486_Editorial_Use_Only.webp",
};

export const FEATURED_SERVICES = [
  {
    slug: "split-systems",
    title: "Split System Installation",
    desc: "Quiet, energy-efficient split systems, expertly sized and installed for the room they serve.",
    image: IMAGES.livingSplit,
    placeholder: false,
    icon: Snowflake,
  },
  {
    slug: "ducted",
    title: "Ducted Air Conditioning",
    desc: "Whole-home comfort concealed within your ceiling, with discreet vents and intelligent zoning.",
    image: null,
    placeholder: true,
    icon: Wind,
  },
  {
    slug: "cleaning",
    title: "Air Conditioner Cleaning",
    desc: "Thorough coil and filter cleaning for healthier air, cleaner systems and better efficiency.",
    image: IMAGES.cleaning,
    placeholder: false,
    icon: Sparkles,
  },
  {
    slug: "repairs",
    title: "Maintenance & Repairs",
    desc: "Careful servicing and accurate diagnostics that keep every brand running at its best.",
    image: IMAGES.controller,
    placeholder: false,
    icon: Wrench,
  },
];

export const BRANDS = [
  { name: "Daikin", color: "#0097E0" },
  { name: "Mitsubishi Electric", color: "#E60012" },
  { name: "Panasonic", color: "#0033A0" },
  { name: "Fujitsu", color: "#E60027" },
  { name: "Rinnai", color: "#E4002B" },
];

export const WHY = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed, insured and refrigerant-handling certified for complete peace of mind." },
  { icon: HeartHandshake, title: "Tailored Comfort Solutions", desc: "Every system is matched precisely to your home, not sold from a script." },
  { icon: BadgeCheck, title: "Premium Installation Standards", desc: "Meticulous workmanship and finishing on every single installation." },
  { icon: HomeIcon, title: "Respect For Your Home", desc: "We protect your space, work tidily and treat your home as our own." },
  { icon: Brush, title: "Clean Workmanship", desc: "Spotless finishes and a clean site — always left better than we found it." },
  { icon: MessageSquareQuote, title: "Honest Recommendations", desc: "Straight advice with no pressure and no inflated claims." },
];

export const PROCESS = [
  { step: "01", title: "Consultation", desc: "We visit, listen and understand your home — how you live and what you need." },
  { step: "02", title: "Recommendation", desc: "A considered plan with the right system and a clear, honest quote." },
  { step: "03", title: "Professional Installation", desc: "Skilled technicians install with precision, care and a premium finish." },
  { step: "04", title: "Enjoy Lasting Comfort", desc: "Balanced, efficient comfort backed by reliable after-sales support." },
];

export const AREAS = [
  "Bass Hill", "Bankstown", "Chester Hill", "Condell Park",
  "Greenacre", "Guildford", "Panania", "Revesby",
];

export const GALLERY = [
  { src: IMAGES.rinnaiIndoor, title: "Rinnai Indoor Split", tag: "Split System", placeholder: false },
  { src: IMAGES.daikinOutdoor, title: "Daikin Condenser Install", tag: "Installation", placeholder: false },
  { src: IMAGES.rinnaiOutdoor, title: "Rinnai Outdoor Unit", tag: "Installation", placeholder: false },
  { src: null, title: "Project image coming soon", tag: "New Project", placeholder: true },
];

export const FAQS = [
  { q: "How do you decide which system is right for my home?", a: "We start with a consultation — considering room sizes, ceiling height, orientation, insulation and how you use each space. Rather than guessing, we recommend the system that genuinely suits your home and budget." },
  { q: "Which air conditioning brands do you install?", a: "We install and service premium brands including Daikin, Mitsubishi Electric, Panasonic, Fujitsu and Rinnai, and will recommend the best fit for your needs." },
  { q: "Do you offer air conditioner cleaning?", a: "Yes. We provide thorough coil and filter cleaning to improve air quality, efficiency and the lifespan of your system — ideal before summer." },
  { q: "Are you licensed and insured?", a: "Absolutely. SplitsPro is fully licensed, insured and refrigerant-handling certified. ABN 62 137 127 557." },
  { q: "How long does an installation take?", a: "A standard split system is typically completed within a few hours. Ducted systems usually take one to two days depending on the size of the home. We confirm timing at the planning stage." },
  { q: "Do you clean up after the installation?", a: "Always. A clean, professional finish and respect for your home are part of the SplitsPro standard — we leave your space spotless." },
  { q: "Which areas do you service?", a: "We specialise across Western Sydney including Bass Hill, Bankstown, Chester Hill, Condell Park, Greenacre, Guildford, Panania and Revesby. Call us to confirm your suburb." },
];
