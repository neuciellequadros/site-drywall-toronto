"use client";

import * as React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { sendQuoteAction, ActionState } from "@/app/actions/send-quote";

export function ContactSection() {
  const [state, setState] = React.useState<ActionState | null>(null);
  const [isPending, setIsPending] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setState(null);

    const formData = new FormData(event.currentTarget);
    try {
      const result = await sendQuoteAction(state, formData);
      setState(result);
      if (result.success && formRef.current) {
        formRef.current.reset();
      }
    } catch {
      setState({
        success: false,
        message: "An unexpected error occurred. Please call or message us directly.",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#08080a] relative overflow-hidden"
    >
      {/* Background Diagonal Gold Highlights */}
      <div className="gold-diagonal-line top-16 left-0 w-2/3 -rotate-12 opacity-35" />
      <div className="gold-diagonal-line bottom-10 right-10 w-1/3 -rotate-6 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative z-10">
        {/* Left Column: Direct Contact Details & Info */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
              Get a Quote
            </span>
            <div className="w-10 h-[1px] bg-brand-gold" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-zinc-100 font-light leading-tight">
            Let&apos;s Build <br />
            <span className="italic font-semibold text-gold-gradient">
              Your Project Together
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
            Contact MS Drywall Finish for a free detailed estimate. We are ready to discuss your architectural project specifications and provide the highest level finish.
          </p>

          {/* Contact Details List */}
          <div className="space-y-4 pt-4 text-sm text-zinc-300">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-4 group p-2 -ml-2 rounded-xl hover:bg-brand-charcoal/60 transition-colors"
            >
              <div className="w-11 h-11 rounded-full border border-brand-borderGold bg-brand-charcoal flex items-center justify-center text-brand-gold group-hover:border-brand-gold shrink-0">
                <Phone className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">
                  Direct Line &amp; Call
                </span>
                <span className="font-semibold tracking-wide text-zinc-100 group-hover:text-brand-gold transition-colors text-sm sm:text-base">
                  {siteConfig.contact.phone}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-4 group p-2 -ml-2 rounded-xl hover:bg-brand-charcoal/60 transition-colors"
            >
              <div className="w-11 h-11 rounded-full border border-brand-borderGold bg-brand-charcoal flex items-center justify-center text-brand-gold group-hover:border-brand-gold shrink-0">
                <Mail className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">
                  Estimates &amp; Blueprints
                </span>
                <span className="font-semibold text-zinc-200 group-hover:text-brand-gold transition-colors text-xs sm:text-sm">
                  {siteConfig.contact.email}
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-2 -ml-2 rounded-xl hover:bg-brand-charcoal/60 transition-colors"
            >
              <div className="w-11 h-11 rounded-full border border-brand-borderGold bg-brand-charcoal flex items-center justify-center text-brand-gold group-hover:border-brand-gold shrink-0">
                <Instagram className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">
                  Project Portfolio
                </span>
                <span className="font-semibold text-zinc-200 group-hover:text-brand-gold transition-colors text-xs sm:text-sm">
                  {siteConfig.contact.instagram}
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-2 -ml-2 rounded-xl">
              <div className="w-11 h-11 rounded-full border border-brand-borderGold bg-brand-charcoal flex items-center justify-center text-brand-gold shrink-0">
                <MapPin className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <p className="text-zinc-100 font-semibold text-sm">
                  Toronto, Ontario
                </p>
                <p className="text-xs text-zinc-400">
                  Serving Oakville, Vaughan, Mississauga, Yorkville &amp; GTA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Intake Form */}
        <div className="lg:col-span-7 bg-[#111115] border border-brand-border/70 rounded-2xl p-6 sm:p-9 shadow-2xl relative">
          <h3 className="font-serif-luxury text-2xl font-bold text-zinc-100 mb-6">
            Request Your Free Project Estimate
          </h3>

          {/* Feedback Banner */}
          {state && (
            <div
              className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm ${
                state.success
                  ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-200"
                  : "bg-red-950/60 border border-red-500/40 text-red-200"
              }`}
            >
              {state.success ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              )}
              <p>{state.message}</p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot for Bot Prevention (Hidden) */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5"
                >
                  Full Name <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="e.g. Marcello C."
                  className="w-full bg-[#18181d] border border-brand-border rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                />
                {state?.errors?.fullName && (
                  <p className="text-[11px] text-red-400 mt-1">
                    {state.errors.fullName[0]}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5"
                >
                  Email Address <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. client@example.com"
                  className="w-full bg-[#18181d] border border-brand-border rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                />
                {state?.errors?.email && (
                  <p className="text-[11px] text-red-400 mt-1">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5"
                >
                  Phone Number <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g. (437) 000-0000"
                  className="w-full bg-[#18181d] border border-brand-border rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                />
                {state?.errors?.phone && (
                  <p className="text-[11px] text-red-400 mt-1">
                    {state.errors.phone[0]}
                  </p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5"
                >
                  Project Type <span className="text-brand-gold">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full bg-[#18181d] border border-brand-border rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                >
                  <option value="" disabled className="text-zinc-500">
                    Select Scope
                  </option>
                  <option value="Residential Custom Home" className="bg-brand-charcoal">
                    Residential Custom Home
                  </option>
                  <option value="Level 5 Skim / Mirror Finish" className="bg-brand-charcoal">
                    Level 5 Skim / Mirror Finish
                  </option>
                  <option value="Custom Ceilings & Bulkheads" className="bg-brand-charcoal">
                    Custom Ceilings &amp; Bulkheads
                  </option>
                  <option value="Commercial / Office Fitout" className="bg-brand-charcoal">
                    Commercial / Office Fitout
                  </option>
                  <option value="Full Remodel & Taping" className="bg-brand-charcoal">
                    Full Remodel &amp; Taping
                  </option>
                  <option value="Drywall Repair & Water Damage" className="bg-brand-charcoal">
                    Drywall Repair &amp; Water Damage
                  </option>
                </select>
                {state?.errors?.projectType && (
                  <p className="text-[11px] text-red-400 mt-1">
                    {state.errors.projectType[0]}
                  </p>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label
                htmlFor="details"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5"
              >
                Project Details &amp; Location <span className="text-brand-gold">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={4}
                placeholder="Tell us about your project scope, approximate square footage, GTA location, and target timeline..."
                className="w-full bg-[#18181d] border border-brand-border rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
              />
              {state?.errors?.details && (
                <p className="text-[11px] text-red-400 mt-1">
                  {state.errors.details[0]}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 px-6 rounded-xl text-xs uppercase tracking-widest font-bold text-brand-black bg-gold-gradient hover:opacity-95 shadow-[0_4px_25px_rgba(203,168,100,0.3)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Specifications...</span>
                </>
              ) : (
                <>
                  <span>Send Estimate Request</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-zinc-500 pt-2">
              🔒 We respond to all requests within 24 hours. Your blueprints and project details remain strictly confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

