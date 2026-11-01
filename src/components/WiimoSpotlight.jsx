import { wiimoSpotlight as wiimo } from "../data/portfolioData";

/* WIIMO brand greens - deliberately off the indigo palette so the spotlight stands out */
const GREEN = {
  band:   "linear-gradient(135deg, #0f3d0a 0%, #1f6b0f 55%, #3fae0c 100%)",
  accent: "#b6f36a",
  glow:   "rgba(182,243,106,0.22)",
};

const SANS_TEXT    = '"Google Sans Text","DM Sans",sans-serif';
const SANS_DISPLAY = '"Google Sans Display","DM Sans",sans-serif';

const WiimoSpotlight = () => (
  <section
    aria-label="WIIMO spotlight"
    className="anim-fade-up relative overflow-hidden"
    style={{ borderRadius: "1.75rem", background: GREEN.band, boxShadow: "var(--md-sys-elevation-3)" }}
  >
    {/* Decorative rings */}
    <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full" style={{ background: GREEN.glow }} />
    <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.12)" }} />

    <div className="relative grid items-center gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.35fr_1fr] lg:gap-6">

      {/* ── Copy ── */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="rounded-full px-3 py-1"
            style={{ background: "rgba(255,255,255,0.14)", color: GREEN.accent, fontFamily: SANS_TEXT, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}
          >
            {wiimo.eyebrow}
          </span>
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1"
            style={{ background: "rgba(255,255,255,0.92)", color: "#065f46", fontFamily: SANS_TEXT, fontSize: "0.75rem", fontWeight: 600 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live on web &amp; Android
          </span>
        </div>

        <img src={wiimo.logo} alt={wiimo.name} className="mt-6 h-10 w-auto md:h-12" />

        <h2
          className="mt-4"
          style={{ fontFamily: SANS_DISPLAY, fontSize: "clamp(1.6rem, 3.2vw, 2.25rem)", fontWeight: 600, lineHeight: 1.2, color: "#ffffff" }}
        >
          {wiimo.tagline}
        </h2>

        <p className="mt-4 max-w-xl leading-7" style={{ fontFamily: SANS_TEXT, fontSize: "0.98rem", color: "rgba(255,255,255,0.82)" }}>
          {wiimo.description}
        </p>

        <p className="mt-3" style={{ fontFamily: SANS_TEXT, fontSize: "0.875rem", fontWeight: 600, color: GREEN.accent }}>
          {wiimo.role}
        </p>

        {/* Feature tiles */}
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {wiimo.features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl px-4 py-3"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.14)" }}
            >
              <p style={{ fontFamily: SANS_TEXT, fontSize: "0.9rem", fontWeight: 600, color: "#ffffff" }}>{f.title}</p>
              <p className="mt-1 leading-5" style={{ fontFamily: SANS_TEXT, fontSize: "0.8rem", color: "rgba(255,255,255,0.72)" }}>{f.text}</p>
            </div>
          ))}
        </div>

        {/* What I built across the stack */}
        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
          {wiimo.platforms.map((p) => (
            <div key={p.label}>
              <dt style={{ fontFamily: SANS_TEXT, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                {p.label}
              </dt>
              <dd className="mt-0.5" style={{ fontFamily: SANS_TEXT, fontSize: "0.82rem", color: "#ffffff" }}>{p.value}</dd>
            </div>
          ))}
        </dl>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          {wiimo.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="m3-btn"
              style={
                link.primary
                  ? { background: "#ffffff", color: "#14532d" }
                  : { background: "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.45)" }
              }
            >
              {link.label}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* ── App screenshot ── */}
      <div className="relative mx-auto w-full max-w-[17rem] lg:max-w-[19rem]">
        <div aria-hidden className="absolute inset-6 rounded-[2rem] blur-2xl" style={{ background: GREEN.glow }} />
        <img
          src={wiimo.screenshot}
          alt="WIIMO Android app home screen"
          loading="lazy"
          className="relative w-full rounded-[1.5rem]"
          style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.18)" }}
        />
      </div>
    </div>
  </section>
);

export default WiimoSpotlight;
