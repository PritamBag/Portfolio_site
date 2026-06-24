import { useEffect, useState } from "react";
import { socialLinks, siteConfig } from "../data/portfolioData";
import { loadRecaptchaScript, submitContactForm } from "../utils/contactForm";
import DecorGrafx from "./DecorGrafx";

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
    <section className="relative overflow-hidden w-full py-16 md:py-24">

      <DecorGrafx id="ctn" ringPos="bl" dotPos="tr" c1="#6366f1" c2="#7c3aed" c3="#c55ea2" orbitPos="mr"
        showCube cubePos="tr" cubeSize={86}
        showBrackets
      />

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
      {/* Page header */}
      <div className="anim-fade-up max-w-3xl">
        <h1
          className="m3-display-sm font-semibold"
          style={{ color: "var(--md-sys-color-on-surface)", fontFamily: '"Google Sans Display","DM Sans",sans-serif' }}
        >
          Let&apos;s talk about product, backend systems, or freelance work
        </h1>
        <p
          className="mt-5 leading-8"
          style={{
            fontFamily: '"Google Sans Text","DM Sans",sans-serif',
            fontSize: "1rem",
            color: "var(--md-sys-color-on-surface-variant)",
          }}
        >
          {siteConfig.availability}
        </p>
      </div>

      <div className="anim-fade-up mt-14 grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-start">

        {/* ── Left sidebar ── */}
        <div className="flex flex-col gap-5">

          {/* Profiles card */}
          <div className="m3-feature-card overflow-hidden">
            {/* Tonal cap */}
            <div
              className="px-6 py-5"
              style={{ background: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)" }}
            >
              <p
                style={{
                  fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#21005d",
                  opacity: 0.65,
                }}
              >
                Profiles &amp; Links
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: '"Google Sans","DM Sans",sans-serif',
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#21005d",
                }}
              >
                Find me online
              </p>
            </div>
            {/* Link list */}
            <div className="px-5 py-5 space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl px-4 py-3 transition-colors"
                  style={{
                    border: "1px solid var(--md-sys-color-outline-variant)",
                    color: "var(--md-sys-color-on-surface)",
                    background: "var(--md-sys-color-surface-container-lowest)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--md-sys-color-primary-container)";
                    e.currentTarget.style.borderColor = "var(--md-sys-color-primary-container)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--md-sys-color-surface-container-lowest)";
                    e.currentTarget.style.borderColor = "var(--md-sys-color-outline-variant)";
                  }}
                >
                  <span className="flex items-center gap-3">
                    <i
                      className={`fa-brands ${link.icon} w-4 text-center`}
                      style={{ color: "var(--md-sys-color-primary)" }}
                    />
                    <span
                      style={{
                        fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "var(--md-sys-color-on-surface)",
                      }}
                    >
                      {link.label}
                    </span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--md-sys-color-outline)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Direct contact card */}
          <div className="m3-feature-card overflow-hidden">
            {/* Tonal cap */}
            <div
              className="px-6 py-5"
              style={{ background: "linear-gradient(135deg,#ffd8ed 0%,#ffb0d4 100%)" }}
            >
              <p
                style={{
                  fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#3d0a22",
                  opacity: 0.65,
                }}
              >
                Direct Contact
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: '"Google Sans","DM Sans",sans-serif',
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#3d0a22",
                }}
              >
                Reach out directly
              </p>
            </div>
            <div className="px-6 py-5 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 group"
                style={{ color: "var(--md-sys-color-on-surface-variant)" }}
              >
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--md-sys-color-primary-container)", color: "var(--md-sys-color-primary)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                    fontSize: "0.9rem",
                    color: "var(--md-sys-color-on-surface-variant)",
                  }}
                >
                  {siteConfig.email}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--md-sys-color-secondary-container)", color: "var(--md-sys-color-secondary)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                    fontSize: "0.9rem",
                    color: "var(--md-sys-color-on-surface-variant)",
                  }}
                >
                  {siteConfig.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Resume CTA */}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="m3-btn m3-btn-elevated w-full"
            style={{ justifyContent: "center", height: "2.75rem" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Resume
          </a>
        </div>

        {/* ── Right — contact form ── */}
        <div
          className="m3-feature-card overflow-hidden"
          style={{ boxShadow: "0 12px 40px rgba(124,58,237,0.10), var(--md-sys-elevation-1)" }}
        >
          {/* Form card tonal cap */}
          <div
            className="px-8 py-6"
            style={{ background: "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)" }}
          >
            <p
              style={{
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#1e1b4b",
                opacity: 0.6,
              }}
            >
              Message
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: '"Google Sans Display","DM Sans",sans-serif',
                fontSize: "1.375rem",
                fontWeight: 600,
                color: "#1e1b4b",
              }}
            >
              Send a message
            </p>
            <p
              className="mt-1.5"
              style={{
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                fontSize: "0.875rem",
                color: "#1e1b4b",
                opacity: 0.65,
              }}
            >
              I&apos;ll get back to you within a day or two.
            </p>
          </div>

          <div className="px-8 py-7">

            {/* Success banner */}
            {submitStatus === "success" && (
              <div
                className="mb-6 flex items-start gap-3 rounded-2xl p-4"
                style={{ background: "#d1fae5", border: "1px solid #6ee7b7" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p style={{ fontFamily: '"Google Sans Text","DM Sans",sans-serif', fontSize: "0.9rem", fontWeight: 600, color: "#064e3b" }}>Message sent!</p>
                  <p style={{ fontFamily: '"Google Sans Text","DM Sans",sans-serif', fontSize: "0.875rem", color: "#065f46", marginTop: "0.15rem" }}>I&apos;ll be in touch soon.</p>
                </div>
              </div>
            )}

            {/* Error banner */}
            {submitStatus === "error" && (
              <div
                className="mb-6 flex items-start gap-3 rounded-2xl p-4"
                style={{ background: "#fee2e2", border: "1px solid #fca5a5" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p style={{ fontFamily: '"Google Sans Text","DM Sans",sans-serif', fontSize: "0.9rem", fontWeight: 600, color: "#7f1d1d" }}>Please fill in all fields and try again.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    style={{ fontFamily: '"Google Sans Text","DM Sans",sans-serif', fontSize: "0.8125rem", fontWeight: 500, color: "var(--md-sys-color-on-surface-variant)" }}
                  >
                    Your Name
                  </label>
                  <input
                    id="name" type="text" name="name"
                    placeholder="Firstname Lastname"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={100} required
                    className="md-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    style={{ fontFamily: '"Google Sans Text","DM Sans",sans-serif', fontSize: "0.8125rem", fontWeight: 500, color: "var(--md-sys-color-on-surface-variant)" }}
                  >
                    Email Address
                  </label>
                  <input
                    id="email" type="email" name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={100} required
                    className="md-input"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  style={{ fontFamily: '"Google Sans Text","DM Sans",sans-serif', fontSize: "0.8125rem", fontWeight: 500, color: "var(--md-sys-color-on-surface-variant)" }}
                >
                  Message
                </label>
                <textarea
                  id="message" name="message"
                  placeholder="Tell me about the project or role you have in mind..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6} maxLength={1000} required
                  className="md-input resize-y"
                />
              </div>

              <p
                style={{ fontFamily: '"Google Sans Text","DM Sans",sans-serif', fontSize: "0.8125rem", color: "var(--md-sys-color-outline)" }}
              >
                Protected by reCAPTCHA.
              </p>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="m3-btn m3-btn-filled w-full"
                style={{ justifyContent: "center", height: "2.75rem", opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : submitStatus === "success" ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
