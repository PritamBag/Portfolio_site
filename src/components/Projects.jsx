import PropTypes from "prop-types";
import { projectGroups } from "../data/portfolioData";
import ImagePlaceholder from "./ImagePlaceholder";

const ProjectCard = ({ project }) => (
  <article
    className="overflow-hidden rounded-2xl border border-white/70 shadow-sm transition hover:shadow-[0_12px_40px_rgba(197,94,162,0.15)] glass-card
      flex flex-col
      lg:grid lg:row-span-6 lg:grid-rows-subgrid"
  >
    {/* Row 1 — gradient accent */}
    <div className="h-0.5 w-full flex-shrink-0 gradient-brand" />

    {/* Row 2 — image */}
    <div className="bg-slate-50 p-5">
      <ImagePlaceholder
        src={project.image}
        alt={project.title}
        hint={project.imageHint}
        className="h-52 w-full rounded-xl object-cover sm:h-60"
        fallbackClassName="h-52 w-full rounded-xl sm:h-60"
      />
    </div>

    {/* Row 3 — subtitle + title */}
    <div className="px-6 pt-5 pb-1">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
          {project.subtitle}
        </p>
        {project.isLive && (
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        )}
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold text-slate-900">
        {project.title}
      </h3>
    </div>

    {/* Row 4 — summary only */}
    <div className="px-6 pt-3 pb-1">
      <p className="text-sm leading-7 text-slate-600 md:text-base">
        {project.summary}
      </p>
    </div>

    {/* Row 5 — stack tags only (always starts at same Y) */}
    <div className="px-6 pb-3 pt-2">
      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Row 6 — details + links (fills remaining height) */}
    <div className="flex flex-1 flex-col px-6 pb-6 pt-3 lg:flex-none lg:h-full">
      <ul className="flex-1 space-y-2 text-sm text-slate-600">
        {project.details.map((detail) => (
          <li key={detail} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full gradient-brand" />
            {detail}
          </li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-200 px-4 py-2 text-sm font-semibold text-fuchsia-600 transition hover:bg-fuchsia-50"
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
};

const Projects = ({ limit = null, showIntro = true }) => {
  const groups = projectGroups.map((group) => ({
    ...group,
    projects: limit ? group.projects.slice(0, limit) : group.projects,
  }));

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      {showIntro && (
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600">
            Projects
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-5xl">
            Professional work, freelance delivery, and reusable engineering
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
            Work across enterprise backends, commerce platforms, ERP systems, and open-source contributions.
          </p>
        </div>
      )}

      <div className="mt-10 space-y-14">
        {groups.map((group) => {
          // Split into pairs so each pair forms its own 2-col subgrid
          const pairs = [];
          for (let i = 0; i < group.projects.length; i += 2) {
            pairs.push(group.projects.slice(i, i + 2));
          }

          return (
            <div key={group.id}>
              <div className="mb-6">
                <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">
                  {group.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{group.description}</p>
              </div>

              <div className="space-y-6">
                {pairs.map((pair, pairIdx) => (
                  <div
                    key={pairIdx}
                    className="grid gap-6 lg:gap-x-6 lg:gap-y-0 lg:grid-cols-2 lg:items-start"
                  >
                    {pair.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Projects.propTypes = {
  limit: PropTypes.number,
  showIntro: PropTypes.bool,
};

export default Projects;
