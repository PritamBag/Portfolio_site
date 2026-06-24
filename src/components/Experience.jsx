import { educationItems, experienceItems, siteConfig } from "../data/portfolioData";
import ImagePlaceholder from "./ImagePlaceholder";
import DecorGrafx from "./DecorGrafx";

const EXP_CAPS = [
  { cap: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)", on: "#21005d" },
  { cap: "linear-gradient(135deg,#ffd8ed 0%,#ffb0d4 100%)", on: "#3d0a22" },
  { cap: "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)", on: "#1e1b4b" },
];
const EDU_CAPS = [
  { cap: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)", on: "#21005d" },
  { cap: "linear-gradient(135deg,#dcfce7 0%,#a7f3d0 100%)", on: "#064e3b" },
  { cap: "linear-gradient(135deg,#ffedd5 0%,#fed7aa 100%)", on: "#7c2d12" },
];

const Experience = () => {
  return (
    <section className="relative overflow-hidden w-full py-16 md:py-24">

      <DecorGrafx id="xpr" ringPos="bl" dotPos="tr" c1="#7c3aed" c2="#6366f1" c3="#c55ea2" flipCurve orbitPos="mr"
        showCube cubePos="br" cubeSize={90}
        showPolygons polyPos="tl"
      />

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
      {/* Page header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h1
            className="m3-display-sm font-semibold"
            style={{ color: "var(--md-sys-color-on-surface)", fontFamily: '"Google Sans Display","DM Sans",sans-serif' }}
          >
            Work history &amp; education
          </h1>
          <p
            className="mt-5 leading-8"
            style={{
              fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              fontSize: "1rem",
              color: "var(--md-sys-color-on-surface-variant)",
            }}
          >
            1.5+ years across enterprise backend work, framework contribution, API integrations,
            and operational software — built for real teams and real production loads.
          </p>
        </div>
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="m3-btn m3-btn-filled flex-shrink-0"
        >
          Open Resume
        </a>
      </div>

      {/* ── Experience entries ── */}
      <div className="anim-fade-up mt-14 space-y-6">
        {experienceItems.map((item, index) => {
          const pal = EXP_CAPS[index % EXP_CAPS.length];
          return (
            <article
              key={`${item.company}-${item.role}-${item.period}`}
              className="m3-feature-card overflow-hidden"
            >
              {/* Tonal gradient cap */}
              <div
                className="flex flex-wrap items-center gap-5 px-7 py-5"
                style={{ background: pal.cap }}
              >
                <div className="flex-shrink-0">
                  <ImagePlaceholder
                    src={item.logo}
                    alt={`${item.company} logo`}
                    hint={item.logoHint || `${item.company} logo`}
                    className="h-14 w-14 rounded-2xl border-2 border-white/60 bg-white object-contain p-2 shadow-sm"
                    fallbackClassName="h-14 w-14 rounded-2xl"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2
                    style={{
                      fontFamily: '"Google Sans","DM Sans",sans-serif',
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: pal.on,
                    }}
                  >
                    {item.role}
                  </h2>
                  <p
                    style={{
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: pal.on,
                      opacity: 0.72,
                      marginTop: "0.18rem",
                    }}
                  >
                    {item.company} · {item.period}
                  </p>
                  <p
                    style={{
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                      fontSize: "0.8125rem",
                      color: pal.on,
                      opacity: 0.52,
                      marginTop: "0.1rem",
                    }}
                  >
                    {item.location}
                  </p>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 rounded-full px-4 py-1.5 transition-opacity hover:opacity-70"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(6px)",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: pal.on,
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                    }}
                  >
                    Visit →
                  </a>
                )}
              </div>

              {/* Card body */}
              <div className="px-7 py-6">
                <p
                  className="leading-8"
                  style={{
                    fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                    fontSize: "0.9375rem",
                    color: "var(--md-sys-color-on-surface-variant)",
                  }}
                >
                  {item.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 leading-7"
                      style={{
                        fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                        fontSize: "0.875rem",
                        color: "var(--md-sys-color-on-surface-variant)",
                      }}
                    >
                      <span
                        className="mt-[0.38rem] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: "var(--md-sys-color-primary)" }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Education ── */}
      <div className="anim-fade-up mt-20">
        <h2
          style={{
            fontFamily: '"Google Sans Display","DM Sans",sans-serif',
            fontSize: "1.75rem",
            fontWeight: 600,
            color: "var(--md-sys-color-on-surface)",
          }}
        >
          Academic background
        </h2>
        <p
          className="mt-3 leading-7"
          style={{
            fontFamily: '"Google Sans Text","DM Sans",sans-serif',
            fontSize: "0.9375rem",
            color: "var(--md-sys-color-on-surface-variant)",
          }}
        >
          Formal academic foundation in mathematics and computer applications.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {educationItems.map((item, i) => {
            const pal = EDU_CAPS[i % EDU_CAPS.length];
            return (
              <article key={`${item.title}-${item.institute}`} className="m3-feature-card overflow-hidden">
                {/* Tonal cap */}
                <div className="px-6 py-5" style={{ background: pal.cap }}>
                  <p
                    style={{
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: pal.on,
                      opacity: 0.55,
                    }}
                  >
                    Education
                  </p>
                  <h3
                    className="mt-1.5"
                    style={{
                      fontFamily: '"Google Sans","DM Sans",sans-serif',
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: pal.on,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                {/* Body */}
                <div className="px-6 py-5">
                  <p
                    style={{
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "var(--md-sys-color-primary)",
                    }}
                  >
                    {item.institute}
                  </p>
                  <p
                    className="mt-1.5"
                    style={{
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                      color: "var(--md-sys-color-on-surface-variant)",
                    }}
                  >
                    {item.meta}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Experience;
