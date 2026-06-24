import PropTypes from "prop-types";
import { projectGroups } from "../data/portfolioData";
import ImagePlaceholder from "./ImagePlaceholder";

/* Cap tonal palettes cycling per project group */
const CAP_SETS = [
  { cap: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)" },
  { cap: "linear-gradient(135deg,#ffd8ed 0%,#ffb0d4 100%)" },
  { cap: "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)" },
];

const ProjectCard = ({ project, capSet }) => (
  <article className="m3-feature-card flex flex-col" style={{ height: "100%" }}>

    {/* ── Image cap — gradient frame + inner box that image fills ── */}
    <div style={{ background: capSet.cap, padding: "1rem 1rem 0" }}>
      {/* Inner box: image fills with object-cover, rounded corners */}
      <div className="relative overflow-hidden rounded-xl" style={{ height: "11.5rem" }}>
        <ImagePlaceholder
          src={project.image}
          alt={project.title}
          hint={project.imageHint}
          className="h-full w-full object-cover"
          fallbackClassName="h-full w-full"
        />
        {/* Subtle scrim for readability of chips */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.30) 0%, transparent 55%)" }} />
        {/* Overlaid chips on image */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
          <span className="rounded-full px-2.5 py-0.5" style={{ background: "rgba(255,255,255,0.90)", backdropFilter: "blur(6px)", fontSize: "0.72rem", fontWeight: 500, color: "rgba(30,27,46,0.78)", fontFamily: '"Google Sans Text","DM Sans",sans-serif' }}>
            {project.subtitle}
          </span>
          {project.isLive && (
            <span className="flex items-center gap-1.5 rounded-full px-2.5 py-0.5" style={{ background: "rgba(255,255,255,0.90)", backdropFilter: "blur(6px)", fontSize: "0.72rem", fontWeight: 600, color: "#065f46", fontFamily: '"Google Sans Text","DM Sans",sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live
            </span>
          )}
        </div>
      </div>
      {/* Gradient strip below inner box — small breathing room */}
      <div style={{ height: "0.75rem" }} />
    </div>

    {/* ── Card body ── */}
    <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
      {/* Title */}
      <h3
        style={{
          fontFamily: '"Google Sans Display","DM Sans",sans-serif',
          fontSize: "1.15rem",
          fontWeight: 600,
          lineHeight: "1.55rem",
          color: "var(--md-sys-color-on-surface)",
        }}
      >
        {project.title}
      </h3>

      {/* Summary */}
      <p
        className="mt-3 leading-7"
        style={{
          fontFamily: '"Google Sans Text","DM Sans",sans-serif',
          fontSize: "0.9375rem",
          color: "var(--md-sys-color-on-surface-variant)",
        }}
      >
        {project.summary}
      </p>

      {/* Detail bullets */}
      <ul className="mt-4 space-y-2.5">
        {project.details.map((detail) => (
          <li
            key={detail}
            className="flex items-start gap-3 leading-6"
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
            {detail}
          </li>
        ))}
      </ul>

      {/* Stack chips — flex-1 spacer above so chips + links sit at card bottom */}
      <div className="mt-auto pt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="m3-chip">{item}</span>
        ))}
      </div>

      {/* Action links */}
      {project.links.length > 0 && (
        <div
          className="mt-4 flex flex-wrap gap-3 border-t pt-4"
          style={{ borderColor: "var(--md-sys-color-outline-variant)" }}
        >
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="m3-btn m3-btn-tonal"
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
);

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  capSet:  PropTypes.object.isRequired,
};

const Projects = ({ limit = null, showIntro = true }) => {
  const groups = projectGroups.map((group) => ({
    ...group,
    projects: limit ? group.projects.slice(0, limit) : group.projects,
  }));

  return (
    <section className="relative overflow-hidden w-full py-16 md:py-24">

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">

      {showIntro && (
        <div className="max-w-3xl">
          <h1
            className="m3-display-sm font-semibold"
            style={{ color: "var(--md-sys-color-on-surface)", fontFamily: '"Google Sans Display","DM Sans",sans-serif' }}
          >
            Professional work, freelance delivery, and reusable engineering
          </h1>
          <p
            className="mt-5 leading-8"
            style={{
              fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              fontSize: "1rem",
              color: "var(--md-sys-color-on-surface-variant)",
            }}
          >
            Work across enterprise backends, commerce platforms, ERP systems, and open-source contributions.
            Each project reflects a real delivery — shipped, maintained, and used in production.
          </p>
        </div>
      )}

      <div className="mt-14 space-y-20">
        {groups.map((group, groupIdx) => {
          const capSet = CAP_SETS[groupIdx % CAP_SETS.length];
          const pairs  = [];
          for (let i = 0; i < group.projects.length; i += 2) {
            pairs.push(group.projects.slice(i, i + 2));
          }

          return (
            <div key={group.id}>
              {/* Group header banner */}
              <div
                className="mb-8 px-7 py-5"
                style={{
                  borderRadius: "var(--md-sys-shape-large)",
                  background: capSet.cap,
                }}
              >
                <h2
                  style={{
                    fontFamily: '"Google Sans Display","DM Sans",sans-serif',
                    fontSize: "1.375rem",
                    fontWeight: 600,
                    color: "#1e1b2e",
                  }}
                >
                  {group.title}
                </h2>
                <p
                  className="mt-2 leading-7"
                  style={{
                    fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                    fontSize: "0.9375rem",
                    color: "rgba(30,27,46,0.62)",
                  }}
                >
                  {group.description}
                </p>
              </div>

              <div className="space-y-6">
                {pairs.map((pair, pairIdx) => (
                  <div
                    key={pairIdx}
                    className="anim-fade-up grid gap-6 lg:grid-cols-2"
                    style={{ animationDelay: `${pairIdx * 0.1}s` }}
                  >
                    {pair.map((project) => (
                      <div key={project.slug} style={{ display: "flex", flexDirection: "column" }}>
                        <ProjectCard project={project} capSet={capSet} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  limit:     PropTypes.number,
  showIntro: PropTypes.bool,
};

export default Projects;
