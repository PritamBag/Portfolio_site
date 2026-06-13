import PropTypes from "prop-types";
import { skillGroups } from "../data/portfolioData";

const Expertise = ({ onOpenHireModal }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-[0_20px_60px_rgba(139,92,246,0.15)]">
          <div className="h-1 w-full gradient-brand" />

          <div className="px-8 py-10 md:px-10 md:py-12">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div className="text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-400">
                  Tech Stack
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                  Technology I work with
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
                  The stack here is tuned around delivery — backend systems,
                  integrations, commerce customization, and day-to-day operations
                  software.
                </p>
                <button
                  className="mt-8 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 gradient-brand"
                  onClick={onOpenHireModal}
                >
                  Start a conversation
                </button>
              </div>

              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/8 px-3.5 py-1.5 text-sm font-medium text-slate-300 transition hover:border-fuchsia-500/40 hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Expertise.propTypes = {
  onOpenHireModal: PropTypes.func.isRequired,
};

export default Expertise;
