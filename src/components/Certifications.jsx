import { certifications } from "../data/portfolioData";

const categoryColors = {
  "Backend Development": {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    dot: "bg-violet-400",
  },
  "Frontend Development": {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    dot: "bg-blue-400",
  },
  "Cloud & DevOps": {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    dot: "bg-emerald-400",
  },
};

const defaultColor = {
  bg: "bg-indigo-50",
  text: "text-indigo-700",
  border: "border-indigo-200",
  dot: "bg-indigo-400",
};

const CertCard = ({ cert }) => {
  const color = categoryColors[cert.category] ?? defaultColor;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-white/70 shadow-sm transition hover:shadow-[0_12px_40px_rgba(197,94,162,0.15)] glass-card">
      <div className={`h-1 w-full gradient-brand`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border ${color.border} ${color.bg}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${color.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${color.border} ${color.bg} ${color.text}`}>
            {cert.category}
          </span>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="font-display text-xl font-semibold text-slate-900">{cert.title}</h3>
          <p className="mt-1 text-sm font-medium text-slate-600">{cert.issuer}</p>
          <p className="mt-1 text-xs text-slate-400">Issued {cert.date}</p>
          {cert.credentialId && (
            <p className="mt-1 text-xs text-slate-400">ID: {cert.credentialId}</p>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {skill}
            </span>
          ))}
        </div>

        {cert.link && (
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700">
            View Credential
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

const Certifications = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600">
          Certifications
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-5xl">
          Credentials and learning milestones
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          Formal recognition of skills built through coursework, platforms, and structured learning.
          Each certificate reflects a deliberate investment in a specific area.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-violet-200 bg-violet-50/50 p-6 text-center">
        <p className="text-sm text-slate-500">
          Update the <code className="rounded bg-violet-100 px-1.5 py-0.5 text-xs text-violet-700">certifications</code> array in{" "}
          <code className="rounded bg-violet-100 px-1.5 py-0.5 text-xs text-violet-700">src/data/portfolioData.js</code> to add your actual certifications.
        </p>
      </div>
    </section>
  );
};

export default Certifications;
