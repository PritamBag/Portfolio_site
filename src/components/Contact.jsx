import { useEffect, useState } from "react";
import { socialLinks, siteConfig } from "../data/portfolioData";
import { loadRecaptchaScript, submitContactForm } from "../utils/contactForm";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    loadRecaptchaScript();
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitContactForm(formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500">
          Contact
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-5xl">
          Let&apos;s talk about product, backend systems, or freelance work
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          {siteConfig.availability}
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
        {/* Left: contact links */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/70 p-6 shadow-sm glass-card">
            <h2 className="font-display text-xl font-semibold text-slate-900">Profiles & Links</h2>
            <p className="mt-2 text-sm text-slate-500">
              Reach out directly on any of these platforms.
            </p>
            <div className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3.5 text-sm text-slate-700 transition hover:border-fuchsia-200 hover:bg-fuchsia-50"
                >
                  <span className="flex items-center gap-3">
                    <i className={`fa-brands ${link.icon} w-4 text-center text-base text-slate-700`}></i>
                    <span className="font-medium">{link.label}</span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 p-6 shadow-sm glass-card">
            <h2 className="font-display text-xl font-semibold text-slate-900">Direct contact</h2>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-violet-600"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                {siteConfig.phone}
              </div>
            </div>
          </div>

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-violet-50 px-5 py-3.5 text-sm font-semibold text-violet-700 transition hover:bg-indigo-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Resume
          </a>
        </div>

        {/* Right: inline form */}
        <div className="rounded-3xl border border-white/70 p-8 shadow-[0_16px_50px_rgba(197,94,162,0.10)] glass-card">
          <h2 className="font-display text-2xl font-semibold text-slate-900">Send a message</h2>
          <p className="mt-2 text-sm text-slate-500">
            I'll get back to you within a day or two.
          </p>

          {submitStatus === "success" && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-emerald-800">Message sent!</p>
                <p className="text-sm text-emerald-700">I'll be in touch soon. Thank you for reaching out.</p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-red-800">Something went wrong</p>
                <p className="text-sm text-red-700">Please fill in all fields and try again.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Firstname Lastname"
                  value={formData.name}
                  onChange={handleInputChange}
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-fuchsia-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-fuchsia-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about the project or role you have in mind..."
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                maxLength={1000}
                required
                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-fuchsia-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>

            <p className="text-xs text-slate-400">
              This form is protected by reCAPTCHA. By submitting you agree to our Privacy Policy.
            </p>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60 gradient-brand"
            >
              {isSubmitting ? (
                <>
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : submitStatus === "success" ? (
                "Message Sent"
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
