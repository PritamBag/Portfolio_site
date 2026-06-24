import { architectureHighlights, homeStats, projectGroups } from "../data/portfolioData";
import ImagePlaceholder from "./ImagePlaceholder";
import DecorGrafx from "./DecorGrafx";

const featuredProjects = projectGroups.find((g) => g.id === "featured")?.projects ?? [];

/* M3 tonal palette — container + on-container pairs for each card cap */
const CAP_COLORS = [
  /* Primary */ {
    cap:   "linear-gradient(135deg, #e9ddff 0%, #cbb8f4 100%)",
    icon:  "#21005d",
    iconBg:"rgba(33,0,93,0.10)",
    num:   "#21005d",
  },
  /* Secondary */  {
    cap:   "linear-gradient(135deg, #ffd8ed 0%, #ffb0d4 100%)",
    icon:  "#3d0a22",
    iconBg:"rgba(61,10,34,0.10)",
    num:   "#3d0a22",
  },
  /* Tertiary */ {
    cap:   "linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 100%)",
    icon:  "#1e1b4b",
    iconBg:"rgba(30,27,75,0.10)",
    num:   "#1e1b4b",
  },
  /* Success teal */  {
    cap:   "linear-gradient(135deg, #dcfce7 0%, #a7f3d0 100%)",
    icon:  "#064e3b",
    iconBg:"rgba(6,78,59,0.10)",
    num:   "#064e3b",
  },
];

const archIcons = {
  architecture: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  events: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  integration: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
};

const HomeSnapshot = () => {
  return (
    <div className="relative overflow-hidden w-full py-16 md:py-20">

      <DecorGrafx id="snap" ringPos="br" dotPos="tl" c1="#7c3aed" c2="#c55ea2" c3="#6366f1" orbitPos="ml"
        showCube cubePos="br" cubeSize={92}
        showPolygons polyPos="tr"
      />

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">

      {/* ── Stats — M3 feature cards with tonal gradient caps ── */}
      <div className="anim-fade-up grid grid-cols-2 gap-4 sm:grid-cols-4">
        {homeStats.map((stat, i) => {
          const t = CAP_COLORS[i % CAP_COLORS.length];
          return (
            <div key={stat.label} className="m3-feature-card">
              {/* Tonal gradient cap */}
              <div
                className="flex flex-col items-center justify-center px-4 py-8 text-center"
                style={{ background: t.cap, minHeight: "8rem" }}
              >
                <p
                  className="m3-display-sm font-semibold leading-none"
                  style={{ color: t.num, fontFamily: '"Google Sans Display","DM Sans",sans-serif' }}
                >
                  {stat.value}
                </p>
              </div>
              {/* Label */}
              <div className="px-4 py-3 text-center">
                <p className="m3-label-md" style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Architecture — M3 feature cards ── */}
      <div className="mt-24">
        <div className="anim-fade-up flex items-end justify-between gap-4">
          <h2 className="m3-headline-md font-semibold"
              style={{ color: "var(--md-sys-color-on-surface)", fontFamily: '"Google Sans","DM Sans",sans-serif' }}>
            Beyond writing code
          </h2>
          <p className="hidden max-w-xs text-right m3-body-sm md:block"
             style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
            As an SDE I participate in architecture decisions and build patterns that scale.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {architectureHighlights.map((item, i) => {
            const t = CAP_COLORS[i % CAP_COLORS.length];
            return (
              <div
                key={item.id}
                className="anim-fade-up m3-feature-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Tonal cap with icon */}
                <div
                  className="flex items-center justify-center px-6 py-8"
                  style={{ background: t.cap, minHeight: "7rem" }}
                >
                  {/* Frosted icon container */}
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.48)", backdropFilter: "blur(8px)", color: t.icon }}
                  >
                    {archIcons[item.icon]}
                  </div>
                </div>
                {/* Body */}
                <div className="p-5">
                  <h3 className="m3-title-md" style={{ color: "var(--md-sys-color-on-surface)" }}>
                    {item.title}
                  </h3>
                  <p className="m3-body-sm mt-2 leading-6"
                     style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Featured Projects ── */}
      <div className="mt-24">
        <div className="anim-fade-up flex items-end justify-between">
          <h2 className="m3-headline-md font-semibold"
              style={{ color: "var(--md-sys-color-on-surface)", fontFamily: '"Google Sans","DM Sans",sans-serif' }}>
            Projects that shipped
          </h2>
          <a href="#/projects"
             className="hidden m3-label-lg md:block"
             style={{ color: "var(--md-sys-color-primary)" }}>
            View all →
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <article
              key={project.slug}
              className="anim-fade-up m3-feature-card flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image cap — gradient frame + inner box */}
              <div style={{ background: CAP_COLORS[i % CAP_COLORS.length].cap, padding: "0.875rem 0.875rem 0" }}>
                <div className="relative overflow-hidden rounded-xl" style={{ height: "10rem" }}>
                  <ImagePlaceholder
                    src={project.image}
                    alt={project.title}
                    hint={project.imageHint}
                    className="h-full w-full object-cover"
                    fallbackClassName="h-full w-full"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full px-2.5 py-0.5" style={{ background: "rgba(255,255,255,0.90)", backdropFilter: "blur(4px)", fontSize: "0.7rem", fontWeight: 500, color: "rgba(30,27,46,0.78)", fontFamily: '"Google Sans Text","DM Sans",sans-serif' }}>
                      {project.subtitle}
                    </span>
                    {project.isLive && (
                      <span className="flex items-center gap-1 rounded-full px-2.5 py-0.5" style={{ background: "rgba(255,255,255,0.90)", backdropFilter: "blur(4px)", fontSize: "0.7rem", fontWeight: 600, color: "#065f46", fontFamily: '"Google Sans Text","DM Sans",sans-serif' }}>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Live
                      </span>
                    )}
                  </div>
                </div>
                <div style={{ height: "0.625rem" }} />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                  <h3 className="m3-title-lg" style={{ color: "var(--md-sys-color-on-surface)" }}>
                    {project.title}
                  </h3>
                  <p className="m3-body-sm mt-2 leading-6 line-clamp-3"
                     style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
                    {project.summary}
                  </p>
                </div>

                {/* Stack chips */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item} className="m3-chip">{item}</span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="m3-chip" style={{ opacity: 0.6 }}>
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                {project.links.length > 0 && (
                  <div className="mt-4 border-t pt-4"
                       style={{ borderColor: "var(--md-sys-color-outline-variant)" }}>
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m3-btn m3-btn-text px-0"
                        style={{ color: "var(--md-sys-color-primary)", gap: "0.375rem" }}
                      >
                        {link.label}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <a href="#/projects"
             className="m3-label-lg"
             style={{ color: "var(--md-sys-color-primary)" }}>
            View all projects →
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomeSnapshot;
