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
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 3000);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="max-h-screen w-full max-w-lg overflow-y-auto rounded-3xl bg-white px-5 py-6 shadow-2xl">
        <p className="mb-4 text-center text-2xl font-bold text-slate-700">Hire Me</p>

        {submitStatus === "success" && (
          <div className="mb-4 rounded border border-green-400 bg-green-100 p-3 text-green-700">
            <p className="font-semibold">Success!</p>
            <p>Your message has been sent. The modal will close shortly.</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 rounded border border-red-400 bg-red-100 p-3 text-red-700">
            <p className="font-semibold">Error!</p>
            <p>There was a problem sending your message. Please check your input and try again.</p>
          </div>
        )}

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            maxLength={100}
            required
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            maxLength={100}
            required
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            maxLength={1000}
            required
            className="resize-y rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-100"
          />
          <p className="text-center text-xs text-slate-400">
            By submitting this form, you agree to our Privacy Policy and Terms and Conditions.
          </p>
          <div className="flex justify-center gap-2">
            <button
              onClick={onClose}
              className="mt-4 rounded-full border border-slate-200 px-5 py-2 text-sm text-slate-600 transition hover:border-slate-300"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="mt-4 rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50 gradient-brand"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
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
