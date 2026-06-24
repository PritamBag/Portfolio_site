import { socialLinks, siteConfig } from "../data/portfolioData";

const navLinks = [
  { label: "Home",           href: "#/" },
  { label: "About",          href: "#/about" },
  { label: "Projects",       href: "#/projects" },
  { label: "Experience",     href: "#/resume" },
  { label: "Certifications", href: "#/certifications" },
  { label: "Blog",           href: "#/blog" },
  { label: "Contact",        href: "#/contact" },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--md-sys-color-surface-container-highest)",
        borderTop: "1px solid var(--md-sys-color-outline-variant)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* M3 tonal gradient line at top */}
      <div
        className="h-0.5 w-full"
        style={{ background: "linear-gradient(90deg, #7c3aed 0%, #c55ea2 50%, #6366f1 100%)" }}
      />

      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-24 right-0 h-64 w-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(197,94,162,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-12 md:px-6 lg:px-8">

        {/* Main content row */}
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto]">

          {/* Brand block */}
          <div>
            <p
              style={{
                fontFamily: '"Google Sans Display","DM Sans",sans-serif',
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "var(--md-sys-color-on-surface)",
              }}
            >
              {siteConfig.name}
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--md-sys-color-on-surface-variant)",
              }}
            >
              {siteConfig.title}
            </p>
            <p
              className="mt-4 max-w-xs leading-6"
              style={{
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                fontSize: "0.875rem",
                color: "var(--md-sys-color-on-surface-variant)",
              }}
            >
              Building backend systems, Laravel products, and scalable integrations from Kolkata.
            </p>

            {/* Social icon buttons */}
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                  style={{
                    border: "1px solid var(--md-sys-color-outline-variant)",
                    background: "var(--md-sys-color-surface-container-lowest)",
                    color: "var(--md-sys-color-on-surface-variant)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--md-sys-color-primary-container)";
                    e.currentTarget.style.color = "var(--md-sys-color-primary)";
                    e.currentTarget.style.borderColor = "var(--md-sys-color-primary-container)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--md-sys-color-surface-container-lowest)";
                    e.currentTarget.style.color = "var(--md-sys-color-on-surface-variant)";
                    e.currentTarget.style.borderColor = "var(--md-sys-color-outline-variant)";
                  }}
                  aria-label={link.label}
                >
                  <i className={`fa-brands ${link.icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--md-sys-color-on-surface-variant)",
                marginBottom: "1rem",
              }}
            >
              Pages
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                    fontSize: "0.9rem",
                    color: "var(--md-sys-color-on-surface-variant)",
                    transition: "color 200ms",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--md-sys-color-primary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--md-sys-color-on-surface-variant)"; }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact block */}
          <div>
            <p
              style={{
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--md-sys-color-on-surface-variant)",
                marginBottom: "1rem",
              }}
            >
              Get in touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                  fontSize: "0.875rem",
                  color: "var(--md-sys-color-on-surface-variant)",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--md-sys-color-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--md-sys-color-on-surface-variant)"; }}
              >
                {siteConfig.email}
              </a>
              <a
                href="#/contact"
                className="m3-btn m3-btn-tonal self-start"
                style={{ height: "2rem", padding: "0 1rem", fontSize: "0.8125rem" }}
              >
                Say hello →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div
          className="mt-10 flex flex-col items-start justify-between gap-3 border-t pt-6 sm:flex-row sm:items-center"
          style={{ borderColor: "var(--md-sys-color-outline-variant)" }}
        >
          <p
            style={{
              fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              fontSize: "0.8125rem",
              color: "var(--md-sys-color-outline)",
            }}
          >
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              fontSize: "0.8125rem",
              color: "var(--md-sys-color-outline)",
            }}
          >
            Built with React + Vite · Material Design 3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
