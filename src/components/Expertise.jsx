import PropTypes from "prop-types";
import { skillGroups } from "../data/portfolioData";

/* Icon SVG per skill group */
const GROUP_META = {
  "Languages": {
    cap: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)",
    on: "#21005d",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  "Front-End": {
    cap: "linear-gradient(135deg,#ffd8ed 0%,#ffb0d4 100%)",
    on: "#3d0a22",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  "Back-End": {
    cap: "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)",
    on: "#1e1b4b",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  "Database": {
    cap: "linear-gradient(135deg,#dcfce7 0%,#a7f3d0 100%)",
    on: "#064e3b",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  "Tools & Platforms": {
    cap: "linear-gradient(135deg,#ffedd5 0%,#fed7aa 100%)",
    on: "#7c2d12",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
};

const DEFAULT_META = {
  cap: "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)",
  on: "#1e1b4b",
  icon: null,
};

const Expertise = ({ onOpenHireModal }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">

        {/* ── Header banner ── */}
        <div
          className="anim-fade-up relative overflow-hidden"
          style={{
            borderRadius: "var(--md-sys-shape-extra-large)",
            background: "linear-gradient(135deg, #0f0621 0%, #1e1060 55%, #0d0b1f 100%)",
            boxShadow: "0 24px 80px rgba(124,58,237,0.22)",
          }}
        >
          {/* Brand gradient top line */}
          <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg,#7c3aed,#c55ea2,#6366f1)" }} />

          {/* Decorative background blobs */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle,rgba(124,58,237,0.18) 0%,transparent 70%)" }} />
            <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full" style={{ background: "radial-gradient(circle,rgba(197,94,162,0.14) 0%,transparent 70%)" }} />
            {/* Geometric decorations */}
            <svg className="absolute right-8 top-8 h-20 w-20 opacity-[0.08]" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" stroke="#cbb8f4" strokeWidth="1" strokeDasharray="5 3"/>
              <circle cx="40" cy="40" r="22" stroke="#ffb0d4" strokeWidth="0.8"/>
              <circle cx="40" cy="40" r="10" stroke="#a5b4fc" strokeWidth="0.8"/>
            </svg>
            <svg className="absolute left-4 bottom-4 h-16 w-16 opacity-[0.07]" viewBox="0 0 64 64" fill="none">
              <polygon points="32,4 60,20 60,44 32,60 4,44 4,20" stroke="#cbb8f4" strokeWidth="1"/>
              <polygon points="32,14 50,24 50,40 32,50 14,40 14,24" stroke="#a5b4fc" strokeWidth="0.8"/>
            </svg>
          </div>

          <div className="relative px-8 py-10 md:px-12 md:py-12">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2
                  style={{
                    fontFamily: '"Google Sans Display","DM Sans",sans-serif',
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    lineHeight: "2.5rem",
                  }}
                >
                  Technology I work with
                </h2>
                <p
                  className="mt-3 max-w-lg leading-7"
                  style={{
                    fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.60)",
                  }}
                >
                  Stack tuned around delivery — backend systems, integrations,
                  commerce customization, and operational software.
                </p>
              </div>
              <button
                className="m3-btn m3-btn-filled flex-shrink-0 self-start"
                onClick={onOpenHireModal}
              >
                Start a conversation
              </button>
            </div>
          </div>
        </div>

        {/* ── Skill group cards ── */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const meta = GROUP_META[group.title] ?? DEFAULT_META;
            return (
              <div
                key={group.title}
                className="anim-fade-up m3-feature-card flex flex-col"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {/* Tonal gradient cap with icon + group name */}
                <div
                  className="flex items-center gap-4 px-6 py-5"
                  style={{ background: meta.cap }}
                >
                  {meta.icon && (
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(6px)", color: meta.on }}
                    >
                      {meta.icon}
                    </div>
                  )}
                  <p
                    style={{
                      fontFamily: '"Google Sans","DM Sans",sans-serif',
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: meta.on,
                    }}
                  >
                    {group.title}
                  </p>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 p-5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full px-3 py-1.5"
                      style={{
                        background: "var(--md-sys-color-surface-container)",
                        border: "1px solid var(--md-sys-color-outline-variant)",
                        fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "var(--md-sys-color-on-surface-variant)",
                      }}
                    >
                      {skill}
                    </span>
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

Expertise.propTypes = {
  onOpenHireModal: PropTypes.func.isRequired,
};

export default Expertise;
