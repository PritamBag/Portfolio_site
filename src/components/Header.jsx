import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { socialLinks, siteConfig } from "../data/portfolioData";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentRoute]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeRoute = useMemo(() => currentRoute || "/", [currentRoute]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/[0.06] backdrop-blur-md transition-shadow"
      style={{
        background: "rgba(255,255,255,0.82)",
        boxShadow: scrolled
          ? "0px 1px 2px rgba(0,0,0,0.20), 0px 2px 6px 2px rgba(0,0,0,0.08)"
          : "none",
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        {/* Brand — Title Large (22sp / 500) */}
        <a href="#/" className="flex items-center">
          <span className="m3-title-lg text-slate-900 tracking-tight">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop nav — Label Large, normal case */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeRoute === item.path.replace("#", "");
            return (
              <a
                key={item.title}
                href={item.path}
                className="relative px-3 py-1.5 rounded-full transition-colors"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.00625rem",
                  color: isActive
                    ? "var(--md-sys-color-primary)"
                    : "var(--md-sys-color-on-surface-variant)",
                  background: isActive
                    ? "var(--md-sys-color-primary-container)"
                    : "transparent",
                }}
              >
                {item.title}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA — M3 Filled button (brand gradient) */}
        <div className="hidden items-center lg:flex">
          <button
            onClick={onOpenHireModal}
            className="m3-btn m3-btn-filled"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile toggle — M3 Icon Button */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 lg:hidden"
          style={{ color: "var(--md-sys-color-on-surface-variant)" }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu — M3 surface, extra-large radius */}
      {isMenuOpen && (
        <div
          className="absolute inset-x-0 top-full z-50 px-4 py-4 lg:hidden"
          style={{
            background: "var(--md-sys-color-surface-container-low)",
            borderBottom: "1px solid var(--md-sys-color-outline-variant)",
            boxShadow: "var(--md-sys-elevation-2)",
          }}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-0.5">
            {navItems.map((item) => {
              const isActive = activeRoute === item.path.replace("#", "");
              return (
                <a
                  key={item.title}
                  href={item.path}
                  className="rounded-full px-4 py-2.5 transition-colors"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: isActive
                      ? "var(--md-sys-color-primary)"
                      : "var(--md-sys-color-on-surface-variant)",
                    background: isActive
                      ? "var(--md-sys-color-primary-container)"
                      : "transparent",
                  }}
                >
                  {item.title}
                </a>
              );
            })}
            <div className="mt-3 flex gap-2 px-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                  style={{
                    border: "1px solid var(--md-sys-color-outline-variant)",
                    color: "var(--md-sys-color-on-surface-variant)",
                  }}
                  aria-label={link.label}
                >
                  <i className={`fa-brands ${link.icon} text-sm`}></i>
                </a>
              ))}
            </div>
            <button
              onClick={onOpenHireModal}
              className="m3-btn m3-btn-filled mt-3"
              style={{ justifyContent: "center" }}
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
