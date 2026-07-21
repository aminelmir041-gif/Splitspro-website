import { useState } from "react";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Phone } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "./ui/select";
import { SERVICES, PHONE, PHONE_TEL } from "../lib/data";
import { submitQuote } from "../lib/api";

const initial = { name: "", phone: "", service: "", suburb: "", message: "" };

export const QuoteForm = ({ compact = false }) => {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.suburb) {
      toast.error("Please complete all required fields.");
      return;
    }
    setLoading(true);
    try {
      await submitQuote(form);
      setDone(true);
      setForm(initial);
      toast.success("Thanks! We'll be in touch shortly.");
    } catch (err) {
      toast.error("Something went wrong. Please call us instead.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div data-testid="quote-success" className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-[#0055FF]" />
        <h3 className="mt-5 font-display text-2xl font-bold">Request received</h3>
        <p className="mt-2 text-slate-500">One of our team will call you shortly to confirm your free quote.</p>
        <Button onClick={() => setDone(false)} variant="outline" className="mt-6 rounded-full" data-testid="quote-another-btn">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} data-testid="quote-form" className="grid gap-5">
      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="grid gap-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" data-testid="quote-name-input" value={form.name}
            onChange={(e) => update("name", e.target.value)} placeholder="Your name"
            className="h-14 rounded-xl border-slate-200 focus-visible:ring-[#0055FF]" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" data-testid="quote-phone-input" value={form.phone}
            onChange={(e) => update("phone", e.target.value)} placeholder="04xx xxx xxx"
            className="h-14 rounded-xl border-slate-200 focus-visible:ring-[#0055FF]" />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="grid gap-2">
          <Label>Service *</Label>
          <Select value={form.service} onValueChange={(v) => update("service", v)}>
            <SelectTrigger data-testid="quote-service-select" className="h-14 rounded-xl border-slate-200 focus:ring-[#0055FF]">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (
                <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="suburb">Suburb *</Label>
          <Input id="suburb" data-testid="quote-suburb-input" value={form.suburb}
            onChange={(e) => update("suburb", e.target.value)} placeholder="e.g. Bondi"
            className="h-14 rounded-xl border-slate-200 focus-visible:ring-[#0055FF]" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Details (optional)</Label>
        <Textarea id="message" data-testid="quote-message-input" value={form.message}
          onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your space or the issue…"
          className="min-h-28 rounded-xl border-slate-200 focus-visible:ring-[#0055FF]" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" disabled={loading} data-testid="quote-submit-btn"
          className="h-14 flex-1 rounded-full bg-[#0055FF] text-base font-semibold hover:bg-[#002244]">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Get My Free Quote"}
        </Button>
        <a href={PHONE_TEL} data-testid="quote-call-btn"
          className="flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 px-6 text-base font-semibold text-[#0A0A0A] transition-colors hover:border-[#0055FF] hover:text-[#0055FF]">
          <Phone className="h-5 w-5" /> Call {PHONE}
        </a>
      </div>
      <p className="text-xs text-slate-400">By submitting you agree to be contacted about your enquiry. We never share your details.</p>
    </form>
  );
};

export default QuoteForm;
