import PropTypes from "prop-types";
import { skillGroups } from "../data/portfolioData";
import DecorGrafx from "./DecorGrafx";

const Expertise = ({ onOpenHireModal }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="anim-fade-up relative overflow-hidden rounded-3xl bg-slate-900 shadow-[0_24px_80px_rgba(139,92,246,0.18)]">
          <DecorGrafx id="exp" dark ringPos="tr" dotPos="bl" orbitPos="br"
            showCube cubePos="bl" cubeSize={82}
            showBrackets
          />
          <div className="h-1 w-full gradient-brand" />

          <div className="px-8 py-12 md:px-12 md:py-14">

            {/* Header row */}
            <div className="grid gap-8 md:grid-cols-[1fr_auto]">
              <div className="text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
                  Tech Stack
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                  Technology I work with
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 md:text-base">
                  The stack is tuned around delivery — backend systems, integrations,
                  commerce customization, and operational software.
                </p>
              </div>
              <div className="flex items-start">
                <button
                  className="whitespace-nowrap rounded-full px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.10em] text-white transition hover:opacity-90 gradient-brand"
                  onClick={onOpenHireModal}
                >
                  Start a conversation
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 h-px bg-white/10" />

            {/* Skills grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, i) => (
                <div
                  key={group.title}
                  className="anim-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-sm gradient-brand" />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {group.title}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/12 bg-white/8 px-3.5 py-1.5 text-sm font-medium text-slate-200 transition hover:border-fuchsia-400/60 hover:bg-fuchsia-500/10 hover:text-white"
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
    </section>
  );
};

Expertise.propTypes = {
  onOpenHireModal: PropTypes.func.isRequired,
};

export default Expertise;
