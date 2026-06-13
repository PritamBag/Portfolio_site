import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { socialLinks, siteConfig } from "../data/portfolioData";
import { loadRecaptchaScript, submitContactForm } from "../utils/contactForm";

const HireMeModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    loadRecaptchaScript();
  }, []);

  const handleInputChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
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

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="max-h-screen w-full max-w-lg overflow-y-auto rounded-3xl bg-white px-5 py-6 shadow-2xl">
        <p className="mb-4 text-center text-2xl font-bold text-slate-700">
          Hire Me
        </p>

        {submitStatus === "success" && (
          <div className="mb-4 rounded border border-green-400 bg-green-100 p-3 text-green-700">
            <p className="font-semibold">Success!</p>
            <p>Your message has been sent successfully. The modal will close shortly.</p>
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
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            maxLength={100}
            required
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            maxLength={1000}
            required
            className="resize-y rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          ></textarea>

          <div className="text-center text-xs text-slate-400">
            By submitting this form, you agree to our Privacy Policy and Terms
            and Conditions.
          </div>

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
              className="mt-4 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
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

const navItems = [
  { title: "Home", path: "#/" },
  { title: "About", path: "#/about" },
  { title: "Resume", path: "#/resume" },
  { title: "Projects", path: "#/projects" },
  { title: "Certifications", path: "#/certifications" },
  { title: "Blog", path: "#/blog" },
  { title: "Contact", path: "#/contact" },
];

const Header = ({ currentRoute, onOpenHireModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentRoute]);

  const activeRoute = useMemo(() => currentRoute || "/", [currentRoute]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.80)" }}>
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <a href="#/" className="flex flex-col">
          <span className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
            {siteConfig.name}
          </span>
          <span className="text-xs text-slate-500">{siteConfig.title}</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const isActive = activeRoute === item.path.replace("#", "");

            return (
              <a
                key={item.title}
                href={item.path}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-violet-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.title}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
            >
              <i className={`fa-brands ${link.icon}`}></i>
            </a>
          ))}
          <button
            onClick={onOpenHireModal}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 gradient-brand"
          >
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen((value) => !value)}
          className="rounded-lg border border-slate-300 p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                {item.title}
              </a>
            ))}

            <div className="mt-2 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
                  aria-label={link.label}
                >
                  <i className={`fa-brands ${link.icon}`}></i>
                </a>
              ))}
            </div>

            <button
              onClick={onOpenHireModal}
              className="mt-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  currentRoute: PropTypes.string.isRequired,
  onOpenHireModal: PropTypes.func.isRequired,
};

export default Header;
export { HireMeModal };
