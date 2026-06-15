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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentRoute]);

  const activeRoute = useMemo(() => currentRoute || "/", [currentRoute]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/60 backdrop-blur-md"
      style={{ background: "rgba(255,255,255,0.80)" }}
    >
      <div className="mx-auto flex h-24 w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        {/* Logo / name */}
        <a href="#/" className="flex flex-col gap-0.5">
          <span className="text-xl font-semibold tracking-[-0.01em] text-slate-900 md:text-2xl">
            {siteConfig.name}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            {siteConfig.title}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = activeRoute === item.path.replace("#", "");
            return (
              <a
                key={item.title}
                href={item.path}
                className={`text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                  isActive ? "text-violet-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {item.title}
              </a>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center lg:flex">
          <button
            onClick={onOpenHireModal}
            className="rounded-full px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:opacity-90 gradient-brand"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="rounded-lg border border-slate-300 p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile menu — absolute so it layers over page content */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full z-50 border-t border-slate-200 bg-white shadow-xl px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="rounded-xl px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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
              className="mt-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white gradient-brand"
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
