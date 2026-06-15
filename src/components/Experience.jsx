import { educationItems, experienceItems, siteConfig } from "../data/portfolioData";
import ImagePlaceholder from "./ImagePlaceholder";
import DecorGrafx from "./DecorGrafx";

const Experience = () => {
  return (
    <section className="relative overflow-hidden mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:px-8">

      <DecorGrafx id="xpr" ringPos="bl" dotPos="tr" c1="#9333EA" c2="#6366F1" c3="#06B6D4" flipCurve orbitPos="mr"
        showCube cubePos="br" cubeSize={90}
        showPolygons polyPos="tl"
      />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600">
            Resume
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-5xl">
            Work history & education
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
            1.5+ years across enterprise backend work, framework contribution, API integrations, and operational software.
          </p>
        </div>

        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.10em] text-white transition hover:opacity-90 gradient-brand"
        >
          Open Resume
        </a>
      </div>

      {/* Experience items */}
      <div className="anim-fade-up mt-14 space-y-0 divide-y divide-slate-100 border border-white/70 rounded-2xl overflow-hidden glass-card">
        {experienceItems.map((item, index) => (
          <div key={`${item.company}-${item.role}-${item.period}`} className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[80px_1fr] md:items-start">
              <div className="flex-shrink-0">
                <ImagePlaceholder
                  src={item.logo}
                  alt={`${item.company} logo`}
                  hint={item.logoHint || `Add ${item.company} logo to src/assets/ and import it in portfolioData.js`}
                  className="h-16 w-16 rounded-xl border border-slate-100 bg-white object-contain p-2 shadow-sm"
                  fallbackClassName="h-16 w-16 rounded-xl"
                />
              </div>

              <div>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{item.role}</h2>
                    <p className="text-sm font-medium text-violet-600">{item.company}</p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {item.period} · {item.location}
                    </p>
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="mt-1 text-xs font-semibold text-violet-600 hover:text-violet-700 md:mt-0">
                      Visit site →
                    </a>
                  )}
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>

                {/* Flat bullet list — no mini-cards */}
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full gradient-brand" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education — timeline */}
      <div className="anim-fade-up mt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600">
          Education
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-slate-900 md:text-3xl">
          Academic background
        </h2>

        <div className="relative mt-8 border-l-2 border-slate-100 pl-8 space-y-6">
          {educationItems.map((item) => (
            <div key={`${item.title}-${item.institute}`} className="relative">
              <span className="absolute -left-[2.35rem] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white shadow-sm gradient-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-0.5 text-sm font-medium text-violet-600">{item.institute}</p>
              <p className="mt-0.5 text-xs text-slate-400">{item.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
