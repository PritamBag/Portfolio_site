import { blogIdeas, blogPosts } from "../data/portfolioData";

/* Tonal palette cycling for published posts */
const POST_CAPS = [
  { cap: "linear-gradient(135deg,#e9ddff 0%,#cbb8f4 100%)", on: "#21005d" },
  { cap: "linear-gradient(135deg,#ffd8ed 0%,#ffb0d4 100%)", on: "#3d0a22" },
  { cap: "linear-gradient(135deg,#e0e7ff 0%,#a5b4fc 100%)", on: "#1e1b4b" },
];
const IDEA_CAPS = [
  { cap: "linear-gradient(135deg,#dcfce7 0%,#a7f3d0 100%)", on: "#064e3b" },
  { cap: "linear-gradient(135deg,#ffedd5 0%,#fed7aa 100%)", on: "#7c2d12" },
  { cap: "linear-gradient(135deg,#fef9c3 0%,#fde68a 100%)", on: "#713f12" },
];

const Blog = () => {
  return (
    <section className="relative overflow-hidden w-full py-16 md:py-24">

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
      {/* Page header */}
      <div className="max-w-3xl">
        <h1
          className="m3-display-sm font-semibold"
          style={{ color: "var(--md-sys-color-on-surface)", fontFamily: '"Google Sans Display","DM Sans",sans-serif' }}
        >
          Occasional writing on things I build and the decisions behind them
        </h1>
        <p
          className="mt-5 leading-8"
          style={{
            fontFamily: '"Google Sans Text","DM Sans",sans-serif',
            fontSize: "1rem",
            color: "var(--md-sys-color-on-surface-variant)",
          }}
        >
          I write when something from production is worth documenting — architecture patterns,
          implementation decisions, and what building real software actually looks like.
        </p>
      </div>

      {/* ── Published posts ── */}
      {blogPosts.length > 0 && (
        <div className="mt-14">
          <p
            className="mb-7"
            style={{
              fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--md-sys-color-on-surface-variant)",
            }}
          >
            Published
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post, i) => {
              const pal = POST_CAPS[i % POST_CAPS.length];
              return (
                <article key={post.slug} className="m3-feature-card group flex flex-col">

                  {/* Tonal editorial cap — post title lives here */}
                  <div
                    className="flex flex-col justify-between gap-4 px-6 py-7"
                    style={{ background: pal.cap, minHeight: "10rem" }}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-3 py-1"
                        style={{
                          background: "rgba(255,255,255,0.65)",
                          backdropFilter: "blur(4px)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: pal.on,
                          fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                        }}
                      >
                        {post.status}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                          fontSize: "0.8125rem",
                          color: pal.on,
                          opacity: 0.6,
                        }}
                      >
                        {post.date} · {post.readTime}
                      </span>
                    </div>

                    <h2
                      className="transition-opacity group-hover:opacity-80"
                      style={{
                        fontFamily: '"Google Sans Display","DM Sans",sans-serif',
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        lineHeight: "1.65rem",
                        color: pal.on,
                      }}
                    >
                      {post.title}
                    </h2>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
                    {post.subtitle && (
                      <p
                        style={{
                          fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "var(--md-sys-color-primary)",
                        }}
                      >
                        {post.subtitle}
                      </p>
                    )}
                    <p
                      className="mt-3 leading-7 flex-1"
                      style={{
                        fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                        fontSize: "0.9375rem",
                        color: "var(--md-sys-color-on-surface-variant)",
                      }}
                    >
                      {post.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="m3-chip">{tag}</span>
                      ))}
                    </div>
                    <a
                      href={`#/blog/${post.slug}`}
                      className="m3-btn m3-btn-text mt-5 self-start px-0"
                      style={{ color: "var(--md-sys-color-primary)", gap: "0.375rem" }}
                    >
                      Read article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Coming soon posts ── */}
      <div className="mt-14">
        <p
          className="mb-7"
          style={{
            fontFamily: '"Google Sans Text","DM Sans",sans-serif',
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--md-sys-color-on-surface-variant)",
          }}
        >
          Coming Soon
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {blogIdeas.map((post, i) => {
            const pal = IDEA_CAPS[i % IDEA_CAPS.length];
            return (
              <article key={post.title} className="m3-feature-card flex flex-col">
                {/* Tonal cap */}
                <div className="px-5 py-5" style={{ background: pal.cap }}>
                  <span
                    className="rounded-full px-3 py-1"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: pal.on,
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                    }}
                  >
                    {post.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-5 py-5">
                  <h2
                    style={{
                      fontFamily: '"Google Sans Display","DM Sans",sans-serif',
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      lineHeight: "1.55rem",
                      color: "var(--md-sys-color-on-surface)",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="mt-3 leading-7 flex-1"
                    style={{
                      fontFamily: '"Google Sans Text","DM Sans",sans-serif',
                      fontSize: "0.875rem",
                      color: "var(--md-sys-color-on-surface-variant)",
                    }}
                  >
                    {post.summary}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Blog;
