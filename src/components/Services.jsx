import PropTypes from "prop-types";
import { projectGroups, servicesContent, socialLinks } from "../data/portfolioData";

const SANS_TEXT    = '"Google Sans Text","DM Sans",sans-serif';
const SANS_DISPLAY = '"Google Sans Display","DM Sans",sans-serif';

/* Cap tonal palettes cycling per service card */
const CAPS = [
  { cap: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)", on: "#21005d" },
  { cap: "linear-gradient(135deg,#ffd8ed 0%,#ffb0d4 100%)", on: "#3d0a22" },
  { cap: "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)", on: "#1e1b4b" },
  { cap: "linear-gradient(135deg,#dcfce7 0%,#a7f3d0 100%)", on: "#064e3b" },
];

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  className: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
};

const icons = {
  erp: (
    <svg {...svgProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  wordpress: (
    <svg {...svgProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  web: (
    <svg {...svgProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  testing: (
    <svg {...svgProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  review: (
    <svg {...svgProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  backend: (
    <svg {...svgProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  deploy: (
    <svg {...svgProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  ),
};

const externalProps = (href) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

const upwork = socialLinks.find((l) => l.label === "Upwork");

const projectsBySlug = Object.fromEntries(
  projectGroups.flatMap((g) => g.projects).map((p) => [p.slug, p])
);

const Services = ({ onOpenHireModal }) => {
  const { title, intro, services, process, faqs } = servicesContent;

  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">

        {/* ── Intro ── */}
        <div className="max-w-3xl">
          <h1
            className="m3-display-sm font-semibold"
            style={{ color: "var(--md-sys-color-on-surface)", fontFamily: SANS_DISPLAY }}
          >
            {title}
          </h1>
          <p className="mt-5 leading-8" style={{ fontFamily: SANS_TEXT, fontSize: "1rem", color: "var(--md-sys-color-on-surface-variant)" }}>
            {intro}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="m3-btn m3-btn-filled" onClick={onOpenHireModal}>
              Get a quote
            </button>
            {upwork && (
              <a href={upwork.href} target="_blank" rel="noopener noreferrer" className="m3-btn m3-btn-tonal">
                Hire me on Upwork
              </a>
            )}
          </div>
        </div>

        {/* ── Service cards ── */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const t = CAPS[i % CAPS.length];
            return (
              <article key={service.id} id={service.id} className="anim-fade-up m3-feature-card flex flex-col">
                <div className="flex items-center gap-4 px-6 py-5" style={{ background: t.cap }}>
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(6px)", color: t.on }}
                  >
                    {icons[service.icon]}
                  </div>
                  <h2 style={{ fontFamily: SANS_DISPLAY, fontSize: "1.15rem", fontWeight: 600, color: t.on }}>
                    {service.title}
                  </h2>
                </div>

                <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
                  <p className="leading-7" style={{ fontFamily: SANS_TEXT, fontSize: "0.9375rem", color: "var(--md-sys-color-on-surface-variant)" }}>
                    {service.problem}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 leading-6" style={{ fontFamily: SANS_TEXT, fontSize: "0.875rem", color: "var(--md-sys-color-on-surface)" }}>
                        <span className="mt-[0.38rem] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "var(--md-sys-color-primary)" }} />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Proof from real work */}
                  <div
                    className="mt-5 rounded-xl px-4 py-3"
                    style={{ background: "var(--md-sys-color-surface-container)", border: "1px solid var(--md-sys-color-outline-variant)" }}
                  >
                    <p style={{ fontFamily: SANS_TEXT, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--md-sys-color-primary)" }}>
                      Proof from real work
                    </p>
                    <p className="mt-1 leading-6" style={{ fontFamily: SANS_TEXT, fontSize: "0.85rem", color: "var(--md-sys-color-on-surface-variant)" }}>
                      {service.proof.text}
                      {service.proof.link && (
                        <>
                          {" "}
                          <a
                            href={service.proof.link.href}
                            {...externalProps(service.proof.link.href)}
                            className="font-semibold"
                            style={{ color: "var(--md-sys-color-primary)" }}
                          >
                            {service.proof.link.label} →
                          </a>
                        </>
                      )}
                    </p>

                    {/* Related projects - jump to the matching card on the Projects page */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span style={{ fontFamily: SANS_TEXT, fontSize: "0.75rem", fontWeight: 600, color: "var(--md-sys-color-on-surface-variant)" }}>
                        Related projects:
                      </span>
                      {service.proof.projects
                        .map((slug) => projectsBySlug[slug])
                        .filter(Boolean)
                        .map((project) => (
                          <a
                            key={project.slug}
                            href={`/projects/#${project.slug}`}
                            className="rounded-full px-3 py-1 transition-colors"
                            style={{
                              background: "var(--md-sys-color-primary-container)",
                              color: "var(--md-sys-color-on-primary-container)",
                              fontFamily: SANS_TEXT,
                              fontSize: "0.78rem",
                              fontWeight: 600,
                            }}
                          >
                            {project.title} →
                          </a>
                        ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {service.stack.map((item) => (
                      <span key={item} className="m3-chip">{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── How I work ── */}
        <div className="mt-24">
          <h2 className="anim-fade-up m3-headline-md font-semibold" style={{ color: "var(--md-sys-color-on-surface)", fontFamily: SANS_DISPLAY }}>
            How I work
          </h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title} className="anim-fade-up m3-feature-card p-5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ background: "var(--md-sys-color-primary-container)", color: "var(--md-sys-color-on-primary-container)", fontFamily: SANS_DISPLAY, fontWeight: 700 }}
                >
                  {i + 1}
                </span>
                <h3 className="m3-title-md mt-4" style={{ color: "var(--md-sys-color-on-surface)" }}>{step.title}</h3>
                <p className="m3-body-sm mt-2 leading-6" style={{ color: "var(--md-sys-color-on-surface-variant)" }}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* ── FAQ ── */}
        <div className="mt-24 max-w-3xl">
          <h2 className="anim-fade-up m3-headline-md font-semibold" style={{ color: "var(--md-sys-color-on-surface)", fontFamily: SANS_DISPLAY }}>
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="anim-fade-up m3-feature-card px-6 py-5">
                <h3 className="m3-title-md" style={{ color: "var(--md-sys-color-on-surface)" }}>{faq.q}</h3>
                <p className="mt-2 leading-7" style={{ fontFamily: SANS_TEXT, fontSize: "0.9375rem", color: "var(--md-sys-color-on-surface-variant)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Closing CTA ── */}
        <div
          className="anim-fade-up mt-20 flex flex-col gap-5 px-8 py-10 md:flex-row md:items-center md:justify-between"
          style={{
            borderRadius: "var(--md-sys-shape-extra-large)",
            background: "linear-gradient(135deg, var(--md-sys-color-surface-container-lowest) 0%, var(--md-sys-color-surface-container) 42%, var(--md-sys-color-primary-container) 100%)",
            border: "1px solid var(--md-sys-color-outline-variant)",
          }}
        >
          <div>
            <h2 style={{ fontFamily: SANS_DISPLAY, fontSize: "1.6rem", fontWeight: 600, color: "var(--md-sys-color-on-surface)" }}>
              Have a project in mind?
            </h2>
            <p className="mt-2 max-w-lg leading-7" style={{ fontFamily: SANS_TEXT, fontSize: "0.9375rem", color: "var(--md-sys-color-on-surface-variant)" }}>
              Tell me what you&apos;re trying to build or fix. I&apos;ll reply with an approach and a clear scope.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <button className="m3-btn m3-btn-filled" onClick={onOpenHireModal}>Get a quote</button>
            <a href="/contact/" className="m3-btn m3-btn-tonal">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  onOpenHireModal: PropTypes.func.isRequired,
};

export default Services;
