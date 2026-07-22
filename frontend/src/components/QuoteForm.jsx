import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Check, Phone } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "./ui/select";
import { SERVICE_OPTIONS, PHONE, PHONE_TEL } from "../lib/data";
import { submitQuote } from "../lib/api";

const initial = { name: "", phone: "", suburb: "", service: "", message: "" };

const fieldClass =
  "h-12 rounded-sm border-0 border-b border-[#E5E5EA] bg-transparent px-0 text-[#1D1D1F] shadow-none focus-visible:border-[#1E3A8A] focus-visible:ring-0 placeholder:text-[#6E6E73]/60";

export const QuoteForm = ({ onDark = false }) => {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.suburb || !form.service) {
      toast.error("Please complete your name, phone, suburb and service.");
      return;
    }
    if (form.phone.replace(/\D/g, "").length < 8) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setLoading(true);
    try {
      await submitQuote(form);
      setDone(true);
      setForm(initial);
      toast.success("Thank you — we'll be in touch shortly.");
    } catch (err) {
      toast.error("Something went wrong. Please call us instead.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div data-testid="quote-success" className="py-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A] text-white">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-serif text-2xl text-[#1D1D1F]">Request received</h3>
        <p className="mt-2 text-[#6E6E73]">One of our team will call you shortly to arrange your free quote.</p>
        <button onClick={() => setDone(false)} data-testid="quote-another-btn"
          className="mt-6 text-sm font-semibold text-[#1E3A8A] link-line">
          Submit another request
        </button>
      </div>
    );
  }

  const labelClass = `mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] ${onDark ? "text-white/70" : "text-[#6E6E73]"}`;

  return (
    <form onSubmit={handleSubmit} data-testid="quote-form" className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className={labelClass}>Name</label>
          <Input id="q-name" data-testid="quote-name-input" value={form.name}
            onChange={(e) => update("name", e.target.value)} placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="q-phone" className={labelClass}>Phone</label>
          <Input id="q-phone" data-testid="quote-phone-input" value={form.phone}
            onChange={(e) => update("phone", e.target.value)} placeholder="04xx xxx xxx" className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-suburb" className={labelClass}>Suburb</label>
          <Input id="q-suburb" data-testid="quote-suburb-input" value={form.suburb}
            onChange={(e) => update("suburb", e.target.value)} placeholder="e.g. Bankstown" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Service Required</label>
          <Select value={form.service} onValueChange={(v) => update("service", v)}>
            <SelectTrigger data-testid="quote-service-select"
              className="h-12 rounded-sm border-0 border-b border-[#E5E5EA] bg-transparent px-0 text-[#1D1D1F] shadow-none focus:ring-0 data-[placeholder]:text-[#6E6E73]/60">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_OPTIONS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="q-message" className={labelClass}>Message (optional)</label>
        <Textarea id="q-message" data-testid="quote-message-input" value={form.message}
          onChange={(e) => update("message", e.target.value)} placeholder="Tell us a little about your home or the system you have in mind…"
          className="min-h-24 rounded-sm border-0 border-b border-[#E5E5EA] bg-transparent px-0 text-[#1D1D1F] shadow-none focus-visible:border-[#1E3A8A] focus-visible:ring-0 placeholder:text-[#6E6E73]/60" />
      </div>

      <div className="mt-1 flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={loading} data-testid="quote-submit-btn"
          className="flex h-[52px] flex-1 items-center justify-center rounded-sm bg-[#1E3A8A] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-[1.01] disabled:opacity-70">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Get Free Quote"}
        </button>
        <a href={PHONE_TEL} data-testid="quote-call-btn"
          className={`flex items-center justify-center gap-2 rounded-sm border px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors ${onDark ? "border-white/40 text-white hover:bg-white/10" : "border-[#1D1D1F] text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white"}`}>
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </form>
  );
};

export default QuoteForm;
