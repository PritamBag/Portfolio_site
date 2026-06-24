import { certifications } from "../data/portfolioData";
import PropTypes from "prop-types";

/* Tonal cap palette — keyed by cert category + index fallback for variety */
const CAT_PALETTE = {
  "CI & CD":            { cap: "linear-gradient(135deg,#dcfce7 0%,#a7f3d0 100%)", on: "#064e3b", iconBg: "rgba(255,255,255,0.55)" },
  "Cloud & DevOps":     { cap: "linear-gradient(135deg,#dcfce7 0%,#a7f3d0 100%)", on: "#064e3b", iconBg: "rgba(255,255,255,0.55)" },
  "Python":             { cap: "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)", on: "#1e1b4b", iconBg: "rgba(255,255,255,0.55)" },
  "Backend Development":{ cap: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)", on: "#21005d", iconBg: "rgba(255,255,255,0.55)" },
  "Frontend Development":{ cap: "linear-gradient(135deg,#ffd8ed 0%,#ffb0d4 100%)", on: "#3d0a22", iconBg: "rgba(255,255,255,0.55)" },
  "General":            { cap: "linear-gradient(135deg,#ffedd5 0%,#fed7aa 100%)", on: "#7c2d12", iconBg: "rgba(255,255,255,0.55)" },
};
/* Cycling palette for categories that don't match a key */
const FALLBACK_PALS = [
  { cap: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)", on: "#21005d", iconBg: "rgba(255,255,255,0.55)" },
  { cap: "linear-gradient(135deg,#ffd8ed 0%,#ffb0d4 100%)", on: "#3d0a22", iconBg: "rgba(255,255,255,0.55)" },
  { cap: "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)", on: "#1e1b4b", iconBg: "rgba(255,255,255,0.55)" },
  { cap: "linear-gradient(135deg,#dcfce7 0%,#a7f3d0 100%)", on: "#064e3b", iconBg: "rgba(255,255,255,0.55)" },
  { cap: "linear-gradient(135deg,#ffedd5 0%,#fed7aa 100%)", on: "#7c2d12", iconBg: "rgba(255,255,255,0.55)" },
];

const CertCard = ({ cert, idx }) => {
  const pal = CAT_PALETTE[cert.category] ?? FALLBACK_PALS[idx % FALLBACK_PALS.length];

  return (
    <article className="m3-feature-card flex flex-col">

      {/* Tonal gradient cap — icon + category chip */}
      <div
        className="flex items-center gap-4 px-6 py-6"
        style={{ background: pal.cap }}
      >
        {/* Frosted icon container */}
        <div
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-sm"
          style={{ background: pal.iconBg, backdropFilter: "blur(8px)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            style={{ color: pal.on }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        </div>

        {/* Category chip */}
        <span
          className="rounded-full px-3 py-1.5"
          style={{
            background: "rgba(255,255,255,0.60)",
            backdropFilter: "blur(6px)",
            fontFamily: '"Google Sans Text","DM Sans",sans-serif',
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: pal.on,
          }}
        >
          {cert.category}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col px-6 py-5">

        {/* Cert title */}
        <h3
          style={{
            fontFamily: '"Google Sans","DM Sans",sans-serif',
            fontSize: "1.05rem",
            fontWeight: 600,
            lineHeight: "1.55rem",
            color: "var(--md-sys-color-on-surface)",
          }}
        >
          {cert.title}
        </h3>

        {/* Issuer */}
        <p
          className="mt-2"
          style={{
            fontFamily: '"Google Sans Text","DM Sans",sans-serif',
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: "var(--md-sys-color-primary)",
          }}
        >
          {cert.issuer}
        </p>

        {/* Date + credential ID */}
        <p
          className="mt-1.5"
          style={{
            fontFamily: '"Google Sans Text","DM Sans",sans-serif',
            fontSize: "0.8125rem",
            color: "var(--md-sys-color-outline)",
          }}
        >
          Issued {cert.date}
        </p>
        {cert.credentialId && (
          <p
            style={{
              fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              fontSize: "0.8125rem",
              color: "var(--md-sys-color-outline)",
            }}
          >
            ID: {cert.credentialId}
          </p>
        )}

        {/* Skill chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <span key={skill} className="m3-chip">{skill}</span>
          ))}
        </div>

        {/* View credential link */}
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="m3-btn m3-btn-text mt-5 self-start px-0"
            style={{ color: "var(--md-sys-color-primary)", gap: "0.375rem" }}
          >
            View Credential
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

CertCard.propTypes = { cert: PropTypes.object.isRequired, idx: PropTypes.number.isRequired };

const Certifications = () => {
  return (
    <section className="relative overflow-hidden w-full py-16 md:py-24">

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
      <div className="anim-fade-up max-w-3xl">
        <h1
          className="m3-display-sm font-semibold"
          style={{ color: "var(--md-sys-color-on-surface)", fontFamily: '"Google Sans Display","DM Sans",sans-serif' }}
        >
          Credentials and learning milestones
        </h1>
        <p
          className="mt-5 leading-8"
          style={{
            fontFamily: '"Google Sans Text","DM Sans",sans-serif',
            fontSize: "1rem",
            color: "var(--md-sys-color-on-surface-variant)",
          }}
        >
          Formal recognition of skills built through coursework, platforms, and structured learning.
          Each certificate reflects a deliberate investment in a specific area of the stack.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} idx={i} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Certifications;
