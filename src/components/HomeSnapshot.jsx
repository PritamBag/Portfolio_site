import { architectureHighlights, homeStats, projectGroups } from "../data/portfolioData";
import ImagePlaceholder from "./ImagePlaceholder";
import DecorGrafx from "./DecorGrafx";

const featuredProjects = projectGroups.find((g) => g.id === "featured")?.projects ?? [];

const archIcons = {
  architecture: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  events: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  integration: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
};

const HomeSnapshot = () => {
  return (
    <div className="relative overflow-hidden mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20 lg:px-8">

      <DecorGrafx id="snap" ringPos="br" dotPos="tl" c1="#EC4899" c2="#8B5CF6" c3="#06B6D4" orbitPos="ml"
        showCube cubePos="br" cubeSize={92}
        showPolygons polyPos="tr"
      />

      {/* Stats — single unified bar */}
      <div className="anim-fade-up overflow-hidden rounded-2xl border border-white/70 shadow-sm glass-card">
        <div className="h-0.5 w-full gradient-brand" />
        <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 md:grid-cols-4 md:divide-y-0">
          {homeStats.map((stat) => (
            <div key={stat.label} className="px-6 py-6 text-center">
              <p className="font-display text-4xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture — flat list, no individual card boxes */}
      <div className="mt-24">
        <div className="anim-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-600">
            System Design & Architecture
          </p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">
              Beyond writing code
            </h2>
            <p className="hidden max-w-sm text-right text-sm text-slate-500 md:block">
              As an SDE I participate in architecture decisions and build patterns that scale.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {architectureHighlights.map((item, i) => (
            <div
              key={item.id}
              className="anim-fade-up flex gap-4"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="gradient-brand mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-white">
                {archIcons[item.icon]}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured projects */}
      <div className="mt-24">
        <div className="anim-fade-up flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-600">
              Featured Work
            </p>
            <h2 className="mt-1.5 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Projects that shipped
            </h2>
          </div>
          <a href="#/projects" className="hidden text-sm font-semibold text-violet-600 hover:text-violet-700 md:block">
            View all →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <article
              key={project.slug}
              className="anim-fade-up flex flex-col overflow-hidden rounded-2xl border border-white/70 shadow-sm transition hover:shadow-[0_12px_40px_rgba(197,94,162,0.15)] glass-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Gradient top accent */}
              <div className="h-0.5 w-full gradient-brand flex-shrink-0" />

              {/* Image */}
              <div className="bg-slate-50 p-4">
                <ImagePlaceholder
                  src={project.image}
                  alt={project.title}
                  hint={project.imageHint}
                  className="h-40 w-full rounded-xl object-cover"
                  fallbackClassName="h-40 w-full rounded-xl"
                />
              </div>

              {/* Content — flex-col + flex-1 so link pins to bottom */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                    {project.subtitle}
                  </p>
                  {project.isLive && (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Live
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-500 line-clamp-3">
                  {project.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {item}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-400">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
                {project.links.length > 0 && (
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700"
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
          <a href="#/projects" className="text-sm font-semibold text-violet-600 hover:text-violet-700">
            View all projects →
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSnapshot;
