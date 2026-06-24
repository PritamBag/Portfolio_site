import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { loadRecaptchaScript, submitContactForm } from "../utils/contactForm";

const HireMeModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    loadRecaptchaScript();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      alert("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await submitContactForm(formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => { onClose(); window.location.reload(); }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      alert(error.message || "Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    /* M3 Scrim */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.50)", backdropFilter: "blur(3px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* M3 Dialog surface
          Spec: Extra-large radius (28dp), surface-container-high,
          min-width 280dp, max-width 560dp, padding 24dp */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-headline"
        className="w-full max-w-md overflow-hidden"
        style={{
          background: "var(--md-sys-color-surface-container-high)",
          borderRadius: "var(--md-sys-shape-extra-large)",
          boxShadow: "var(--md-sys-elevation-3)",
        }}
      >
        {/* Dialog header — 24dp padding */}
        <div className="px-6 pt-6 pb-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              {/* Headline — Title Large (22sp / 400) */}
              <h2
                id="dialog-headline"
                className="m3-title-lg"
                style={{ fontSize: "1.375rem", color: "var(--md-sys-color-on-surface)" }}
              >
                Let&apos;s work together
              </h2>
              {/* Supporting text — Body Medium */}
              <p
                className="m3-body-md mt-1"
                style={{ color: "var(--md-sys-color-on-surface-variant)" }}
              >
                Send a message and I&apos;ll get back to you shortly.
              </p>
            </div>

            {/* Close — M3 Icon Button */}
            <button
              onClick={onClose}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors"
              style={{
                background: "var(--md-sys-color-surface-container-highest)",
                color: "var(--md-sys-color-on-surface-variant)",
              }}
              aria-label="Close dialog"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dialog content — 24dp horizontal, 16dp vertical padding */}
        <div className="px-6 py-5 flex flex-col gap-4">
          {submitStatus === "success" && (
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3 m3-body-sm font-medium"
              style={{ background: "#d1fae5", color: "#065f46" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Message sent — I&apos;ll be in touch shortly.
            </div>
          )}

          {/* M3 Outlined Text Fields */}
          <div className="flex flex-col gap-1">
            <label
              className="m3-label-sm px-1"
              style={{ color: "var(--md-sys-color-on-surface-variant)" }}
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleInputChange}
              maxLength={100}
              className="md-input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="m3-label-sm px-1"
              style={{ color: "var(--md-sys-color-on-surface-variant)" }}
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
              maxLength={100}
              className="md-input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="m3-label-sm px-1"
              style={{ color: "var(--md-sys-color-on-surface-variant)" }}
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="What would you like to work on together?"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              maxLength={1000}
              className="md-input resize-y"
            />
          </div>

          <p className="m3-body-sm" style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>

        {/* Dialog actions — right-aligned, 24dp padding
            M3: Text or Filled buttons, never Outlined for dialog actions */}
        <div className="flex items-center justify-end gap-2 px-6 pb-6">
          <button onClick={onClose} className="m3-btn m3-btn-text">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="m3-btn m3-btn-filled"
            style={{ opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
        </div>
      </div>
    </div>
  );
};

HireMeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default HireMeModal;
