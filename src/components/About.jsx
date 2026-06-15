import bannerImage from "../assets/PIC-4.png";
import { aboutContent, personalHighlights } from "../data/portfolioData";

const About = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">

      {/* Story section */}
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              className="h-80 w-full object-cover md:h-[460px]"
              src={bannerImage}
              alt="Pritam Bag"
            />
          </div>

          {/* At a glance — gradient card */}
          <div className="relative overflow-hidden rounded-2xl p-6 text-white gradient-brand">
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/8" />
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-white/6" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                At a glance
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-7 text-white/90">
                {[
                  "Kolkata, West Bengal, India",
                  "MCA — Techno India Hooghly (2024)",
                  "B.Sc Mathematics — Barasat College (2021)",
                  "1.5+ years in the industry",
                  "Co-author at Nomad Journey",
                ].map((fact) => (
                  <li key={fact} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-600">
            About
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-5xl">
            {aboutContent.title}
          </h1>

          <div className="mt-7 space-y-5 border-l-2 border-slate-100 pl-5">
            {aboutContent.story.map((paragraph, index) => (
              <p key={index} className="text-sm leading-8 text-slate-600 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Focus areas — pills instead of cards */}
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-600">
              What I focus on
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {aboutContent.focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies — no card boxes, just top-line accent */}
      <div className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-600">
          Beyond the code
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-slate-900 md:text-3xl">
          What keeps me grounded
        </h2>
        <div className="mt-6 grid gap-px border border-white/70 bg-slate-200/60 sm:grid-cols-3 rounded-2xl overflow-hidden">
          {personalHighlights.map((item) => (
            <div key={item.title} className="flex flex-col p-6 glass-card">
              <div className="mb-3 h-0.5 w-8 gradient-brand rounded-full" />
              <h3 className="font-display text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{item.description}</p>
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-700"
                >
                  {item.link.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
