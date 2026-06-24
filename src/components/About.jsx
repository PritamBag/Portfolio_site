import bannerImage from "../assets/PIC-4.png";
import { aboutContent, personalHighlights } from "../data/portfolioData";

const glanceFacts = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Kolkata, West Bengal, India",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    text: "MCA — Techno India Hooghly, 2024 (8.71 CGPA)",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    text: "B.Sc Mathematics — Barasat College, 2021",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "1.5+ years in the industry",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    text: "Co-author at Nomad Journey",
  },
];

const hobbyIcons = [
  /* Cooking */
  <svg key="cook" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  /* Blog / writing */
  <svg key="write" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>,
  /* Learning */
  <svg key="learn" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
];

const hobbyCaps = [
  "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)",
  "linear-gradient(135deg,#ffd8ed 0%,#ffb0d4 100%)",
  "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)",
];
const hobbyOnColors = ["#21005d", "#3d0a22", "#1e1b4b"];

const About = () => {
  return (
    <section className="relative overflow-hidden w-full py-16 md:py-24">

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
      {/* ── Main story grid ── */}
      <div className="anim-fade-up grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">

        {/* Left column */}
        <div className="flex flex-col gap-5">

          {/* Photo — large, clean, no card behind */}
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "var(--md-sys-shape-extra-large)",
              boxShadow: "0 24px 64px rgba(124,58,237,0.18), 0 4px 16px rgba(0,0,0,0.10)",
            }}
          >
            <img
              className="w-full object-cover"
              style={{ height: "440px", display: "block" }}
              src={bannerImage}
              alt="Pritam Bag"
            />
          </div>

          {/* At a glance card */}
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "var(--md-sys-shape-large)",
              boxShadow: "var(--md-sys-elevation-1)",
              background: "var(--md-sys-color-surface-container-lowest)",
            }}
          >
            {/* Tonal cap */}
            <div
              className="px-6 py-4"
              style={{ background: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)" }}
            >
              <p style={{ fontFamily: '"Google Sans","DM Sans",sans-serif', fontSize: "0.95rem", fontWeight: 600, color: "#21005d" }}>
                At a glance
              </p>
            </div>
            {/* Icon fact list */}
            <ul className="px-5 py-4 space-y-3">
              {glanceFacts.map((fact) => (
                <li key={fact.text} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "var(--md-sys-color-primary-container)", color: "var(--md-sys-color-primary)" }}
                  >
                    {fact.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                      fontSize: "0.875rem",
                      lineHeight: "1.5rem",
                      color: "var(--md-sys-color-on-surface-variant)",
                    }}
                  >
                    {fact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div>
          <h1
            style={{
              fontFamily: '"Google Sans Display","DM Sans",sans-serif',
              fontSize: "2.1rem",
              fontWeight: 700,
              lineHeight: "2.6rem",
              color: "var(--md-sys-color-on-surface)",
            }}
          >
            {aboutContent.title}
          </h1>

          {/* Lede — first paragraph, slightly featured */}
          <p
            className="mt-6 leading-8"
            style={{
              fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              fontSize: "1rem",
              color: "var(--md-sys-color-on-surface)",
            }}
          >
            {aboutContent.story[0]}
          </p>

          {/* Key stat callout strip */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { value: "8.71", label: "MCA CGPA" },
              { value: "1.5+", label: "Years exp." },
              { value: "9.10", label: "B.Sc CGPA" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl px-4 py-3 text-center"
                style={{ background: "var(--md-sys-color-primary-container)" }}
              >
                <p style={{ fontFamily: '"Google Sans Display","DM Sans",sans-serif', fontSize: "1.4rem", fontWeight: 700, color: "var(--md-sys-color-on-primary-container)" }}>
                  {s.value}
                </p>
                <p style={{ fontFamily: '"Google Sans Text","DM Sans",sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "var(--md-sys-color-on-primary-container)", opacity: 0.7, marginTop: "0.1rem" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Remaining story — left border accent */}
          <div
            className="mt-6 space-y-4 border-l-[3px] pl-5"
            style={{ borderColor: "var(--md-sys-color-primary-container)" }}
          >
            {aboutContent.story.slice(1).map((paragraph, index) => (
              <p
                key={index}
                className="leading-8"
                style={{
                  fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                  fontSize: "0.9375rem",
                  color: "var(--md-sys-color-on-surface-variant)",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Focus areas */}
          <div className="mt-9">
            <p
              style={{
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "var(--md-sys-color-on-surface-variant)",
                marginBottom: "0.75rem",
              }}
            >
              Focus areas
            </p>
            <div className="flex flex-wrap gap-2">
              {aboutContent.focusAreas.map((item, i) => {
                const colors = [
                  { bg: "#e9ddff", color: "#21005d" },
                  { bg: "#ffd8ed", color: "#3d0a22" },
                  { bg: "#e0e7ff", color: "#1e1b4b" },
                  { bg: "#dcfce7", color: "#064e3b" },
                  { bg: "#ffedd5", color: "#7c2d12" },
                ];
                const c = colors[i % colors.length];
                return (
                  <span
                    key={item}
                    className="rounded-full px-3 py-1.5"
                    style={{
                      background: c.bg,
                      color: c.color,
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Personal highlights ── */}
      <div className="mt-20">
        <h2
          style={{
            fontFamily: '"Google Sans Display","DM Sans",sans-serif',
            fontSize: "1.75rem",
            fontWeight: 600,
            color: "var(--md-sys-color-on-surface)",
          }}
        >
          What keeps me grounded
        </h2>

        <div className="anim-fade-up mt-7 grid gap-5 sm:grid-cols-3">
          {personalHighlights.map((item, i) => (
            <div key={item.title} className="m3-feature-card flex flex-col">
              {/* Cap with icon */}
              <div
                className="flex items-center gap-4 px-6 py-6"
                style={{ background: hobbyCaps[i % hobbyCaps.length] }}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(6px)", color: hobbyOnColors[i % hobbyOnColors.length] }}
                >
                  {hobbyIcons[i]}
                </div>
                <p
                  style={{
                    fontFamily: '"Google Sans","DM Sans",sans-serif',
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: hobbyOnColors[i % hobbyOnColors.length],
                  }}
                >
                  {item.title}
                </p>
              </div>
              {/* Body */}
              <div className="flex flex-1 flex-col px-6 py-5">
                <p
                  className="flex-1 leading-7"
                  style={{
                    fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                    fontSize: "0.9rem",
                    color: "var(--md-sys-color-on-surface-variant)",
                  }}
                >
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m3-btn m3-btn-text mt-4 self-start px-0"
                    style={{ color: "var(--md-sys-color-primary)", gap: "0.25rem" }}
                  >
                    {item.link.label} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
