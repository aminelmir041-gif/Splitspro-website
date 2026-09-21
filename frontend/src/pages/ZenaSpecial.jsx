import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Check, Loader2, Phone, ShieldCheck, Sparkles, Wifi, Wind, Eye, Clock3 } from "lucide-react";
import { toast } from "sonner";
import { submitQuote } from "../lib/api";
import { IMAGES, PHONE, PHONE_TEL } from "../lib/data";

const offers = [
  { kw: "2.5kW", price: "$1,900", note: "Ideal for many bedrooms & smaller rooms" },
  { kw: "5.0kW", price: "$2,550", note: "A strong choice for medium living areas" },
  { kw: "6.0kW", price: "$2,750", note: "Extra capacity for larger living spaces" },
];

const features = [
  { icon: Wifi, title: "Built-in Wi-Fi", text: "Smartphone control built into the Zena range for easy temperature control." },
  { icon: Sparkles, title: "Streamer air purification", text: "Daikin clean-air technology designed to help reduce odours and airborne contaminants captured by the system." },
  { icon: Eye, title: "Intelligent comfort", text: "Smart sensing helps the system respond to room conditions and occupancy." },
  { icon: Wind, title: "Premium airflow", text: "Refined airflow control helps spread heating and cooling comfortably through the room." },
];

const trust = [
  "5-Year Daikin Manufacturer Warranty",
  "SplitsPro Installation Guarantee",
  "Standard Electrical Installation Included",
  "Installation Within 7 Business Days",
];

const QuickZenaForm = ({ dark = false, initialSize = "Not sure" }) => {
  const [phone, setPhone] = useState("");
  const [suburb, setSuburb] = useState("");
  const [room, setRoom] = useState("");
  const [size, setSize] = useState(initialSize);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8 || !suburb.trim()) {
      toast.error("Please enter your phone number and suburb.");
      return;
    }

    setLoading(true);
    try {
      await submitQuote({
        name: "Zena landing page lead",
        phone: phone.trim(),
        suburb: suburb.trim(),
        service: "Split System Installation",
        email: "",
        photo_url: "",
        message: `Daikin Zena limited-time offer enquiry. Selected: ${size}. Room size: ${room.trim() || "Not supplied"}. Offer requested: 2.5kW $1,900 / 5.0kW $2,550 / 6.0kW $2,750 fully supplied & installed, standard electrical included.`,
      });
      setDone(true);
      toast.success("Got it — SplitsPro will contact you shortly.");
    } catch (err) {
      toast.error("Something went wrong. Please call SplitsPro instead.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = dark
    ? "h-14 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-base text-white outline-none placeholder:text-white/45 focus:border-[#C8A46A]"
    : "h-14 w-full rounded-xl border border-[#DDD7CA] bg-white px-4 text-base text-[#1D1D1F] outline-none placeholder:text-[#6E6E73]/60 focus:border-[#C8A46A]";

  if (done) {
    return (
      <div className={`rounded-2xl p-7 text-center ${dark ? "bg-white/10 text-white" : "bg-[#F7F2E8] text-[#1D1D1F]"}`}>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C8A46A] text-white">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-serif text-2xl">Your Zena enquiry is in.</h3>
        <p className={`mt-2 text-sm ${dark ? "text-white/70" : "text-[#6E6E73]"}`}>
          We’ll contact you to confirm sizing, site conditions and the installation date.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-3" data-testid="zena-quick-form">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          aria-label="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          inputMode="tel"
          placeholder="Phone number"
          className={inputClass}
          data-testid="zena-phone"
        />
        <input
          aria-label="Suburb"
          value={suburb}
          onChange={(e) => setSuburb(e.target.value)}
          placeholder="Your suburb"
          className={inputClass}
          data-testid="zena-suburb"
        />
      </div>

      <div className="grid grid-cols-3 gap-2" aria-label="Choose Zena size">
        {offers.map((o) => (
          <button
            type="button"
            key={o.kw}
            onClick={() => setSize(o.kw)}
            className={`min-h-14 rounded-xl border px-2 text-sm font-bold transition-all ${
              size === o.kw
                ? "border-[#C8A46A] bg-[#C8A46A] text-white"
                : dark
                  ? "border-white/15 bg-white/5 text-white hover:border-[#C8A46A]"
                  : "border-[#DDD7CA] bg-white text-[#1D1D1F] hover:border-[#C8A46A]"
            }`}
          >
            {o.kw}
          </button>
        ))}
      </div>

      <input
        aria-label="Room size"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        placeholder="Room size (optional) — e.g. 6m × 5m"
        className={inputClass}
        data-testid="zena-room"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-1 flex h-14 items-center justify-center rounded-xl bg-[#C8A46A] px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.01] disabled:opacity-70"
        data-testid="zena-submit"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Claim This Zena Price"}
      </button>

      <p className={`text-center text-xs ${dark ? "text-white/50" : "text-[#6E6E73]"}`}>
        Only phone + suburb are required. We’ll confirm sizing and site conditions before booking.
      </p>
    </form>
  );
};

const ZenaSpecial = () => {
  const scrollToForm = () => {
    const el = document.getElementById("zena-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <Helmet>
        <title>Daikin Zena Special Sydney | From $1,900 Fully Installed | SplitsPro</title>
        <meta
          name="description"
          content="One-off Daikin Zena sale from SplitsPro: 2.5kW $1,900, 5.0kW $2,550 and 6.0kW $2,750 fully supplied and installed, including standard electrical installation."
        />
        <link rel="canonical" href="https://splitspro.com.au/daikin-zena-special" />
        <meta property="og:title" content="Daikin Zena One-Off Special | SplitsPro" />
        <meta property="og:description" content="2.5kW $1,900 • 5.0kW $2,550 • 6.0kW $2,750 — all fully supplied & installed." />
        <meta property="og:image" content={IMAGES.splitBedroom} />
      </Helmet>

      <div className="bg-[#0B0B0B] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white">
        One-off Daikin Zena sale · <span className="text-[#E4CFA6]">This exact offer will not be repeated</span>
      </div>

      <section className="relative overflow-hidden bg-[#0B0B0B] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(200,164,106,0.20),transparent_34%)]" />
        <div className="sp-container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-[#C8A46A]/40 bg-[#C8A46A]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E4CFA6]">
              Daikin Zena · Limited Allocation
            </span>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Premium Daikin Zena.
              <span className="block text-[#E4CFA6]">Fully installed from $1,900.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Designer styling, smart comfort and Daikin reliability — with standard electrical installation included.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {offers.map((o) => (
                <button
                  key={o.kw}
                  onClick={() => scrollToForm(o.kw)}
                  className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 text-left transition-all hover:-translate-y-1 hover:border-[#C8A46A]"
                >
                  <span className="text-sm font-bold text-[#E4CFA6]">{o.kw} Zena</span>
                  <span className="mt-1 block font-serif text-4xl">{o.price}</span>
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.09em] text-white/55">
                    Fully supplied & installed
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-white/85">
                  <Check className="h-4 w-4 shrink-0 text-[#C8A46A]" strokeWidth={3} /> {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#zena-form"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#C8A46A] px-8 text-sm font-bold uppercase tracking-[0.12em] text-white"
              >
                Claim the Zena Special
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/25 px-7 text-sm font-bold uppercase tracking-[0.12em] text-white"
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-2 -top-4 z-10 rotate-3 rounded-2xl bg-[#E4CFA6] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-[#0B0B0B] shadow-xl">
              One-off
              <br />
              sale
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white p-4 shadow-2xl">
              <img
                src={IMAGES.splitBedroom}
                alt="Daikin Zena split system air conditioner"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4 text-[#1D1D1F]">
                <div>
                  <p className="font-serif text-xl">Daikin Zena</p>
                  <p className="text-xs text-[#6E6E73]">Designer reverse-cycle split system</p>
                </div>
                <span className="rounded-full bg-[#F5F0E7] px-3 py-2 text-xs font-bold">2.5 · 5.0 · 6.0kW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E5E5EA] bg-white">
        <div className="sp-container grid grid-cols-2 divide-x divide-y divide-[#E5E5EA] py-3 sm:grid-cols-4 sm:divide-y-0">
          {[
            ["5 Years", "Manufacturer warranty"],
            ["7 Business Days", "Installation target"],
            ["Included", "Standard electrical"],
            ["Guaranteed", "SplitsPro installation"],
          ].map(([big, small]) => (
            <div key={big} className="px-4 py-5 text-center">
              <p className="font-serif text-xl text-[#1D1D1F]">{big}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#6E6E73]">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-20 sm:py-28">
        <div className="sp-container">
          <div className="max-w-3xl">
            <span className="overline text-[#C8A46A]">Why Zena</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1D1D1F] sm:text-5xl">
              A premium split system that looks like it belongs in your home.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#6E6E73]">
              Zena is Daikin’s designer wall-mounted range — slim, refined and packed with smart comfort features.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-[#E5E5EA] bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F0E7] text-[#9A7742]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-[#1D1D1F]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6E6E73]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="sp-container">
          <div className="text-center">
            <span className="overline text-[#C8A46A]">One-off installed pricing</span>
            <h2 className="mt-4 font-serif text-4xl text-[#1D1D1F] sm:text-5xl">Choose your Zena size.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#6E6E73]">
              Every price below is fully supplied and installed for a standard installation, including standard electrical installation.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-3">
            {offers.map((o, i) => (
              <div key={o.kw} className={`rounded-3xl border p-7 ${i === 0 ? "border-[#C8A46A] bg-[#FCF8F0]" : "border-[#E5E5EA] bg-white"}`}>
                {i === 0 && (
                  <span className="rounded-full bg-[#C8A46A] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                    From $1,900
                  </span>
                )}
                <h3 className="mt-5 font-serif text-3xl text-[#1D1D1F]">Daikin Zena {o.kw}</h3>
                <p className="mt-3 font-serif text-5xl text-[#1D1D1F]">{o.price}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#9A7742]">Fully supplied & installed</p>
                <p className="mt-5 text-sm text-[#6E6E73]">{o.note}</p>
                <ul className="mt-6 space-y-3 text-sm text-[#1D1D1F]">
                  {[
                    "Standard installation included",
                    "Standard electrical installation included",
                    "5-year manufacturer warranty",
                    "SplitsPro installation guarantee",
                    "Installation within 7 business days",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A46A]" strokeWidth={3} />
                      {x}
                    </li>
                  ))}
                </ul>
                <a
                  href="#zena-form"
                  className="mt-7 flex min-h-13 items-center justify-center rounded-xl bg-[#0B0B0B] px-5 py-4 text-sm font-bold uppercase tracking-[0.11em] text-white"
                >
                  Get {o.kw} for {o.price}
                </a>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-4xl text-center text-xs leading-relaxed text-[#6E6E73]">
            Advertised pricing applies to a standard installation and is subject to site conditions, correct system sizing and stock availability.
            Non-standard access, extra pipework, pumps, switchboard upgrades or other additional work is quoted before proceeding.
          </p>
        </div>
      </section>

      <section id="zena-form" className="scroll-mt-24 bg-[#0B0B0B] py-20 text-white sm:py-28">
        <div className="sp-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <span className="overline text-[#C8A46A]">10-second enquiry</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Secure the Zena special before the allocation is gone.</h2>
            <p className="mt-5 max-w-lg text-lg text-white/65">
              No long form. Enter your phone and suburb, choose the size you’re considering, and we’ll confirm the rest with you.
            </p>
            <div className="mt-8 space-y-3">
              {[
                { icon: Clock3, text: "Installation within 7 business days" },
                { icon: ShieldCheck, text: "5-year manufacturer warranty" },
                { icon: Check, text: "SplitsPro installation guarantee" },
                { icon: Check, text: "Standard electrical installation included" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm font-semibold text-white/80">
                  <Icon className="h-5 w-5 text-[#C8A46A]" /> {text}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:p-8">
            <p className="font-serif text-2xl">Get this price confirmed</p>
            <p className="mt-1 text-sm text-white/55">Phone + suburb are the only required fields.</p>
            <div className="mt-6">
              <QuickZenaForm dark />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F2E8] py-16">
        <div className="sp-container text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7742]">Limited Zena allocation</p>
          <h2 className="mx-auto mt-3 max-w-4xl font-serif text-3xl leading-tight text-[#1D1D1F] sm:text-4xl">
            You won’t see this exact Zena offer again.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6E6E73]">
            Once the allocated systems are sold, these fully installed promotional prices end.
          </p>
          <a href="#zena-form" className="mt-7 inline-flex min-h-14 items-center justify-center rounded-xl bg-[#0B0B0B] px-8 text-sm font-bold uppercase tracking-[0.12em] text-white">
            Claim the offer
          </a>
        </div>
      </section>
    </>
  );
};

export default ZenaSpecial;
