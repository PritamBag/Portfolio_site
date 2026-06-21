import { blogIdeas, blogPosts } from "../data/portfolioData";
import DecorGrafx from "./DecorGrafx";

const Blog = () => {
  return (
    <section className="relative overflow-hidden mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:px-8">

      <DecorGrafx id="blg" ringPos="br" dotPos="tl" c1="#9333EA" c2="#6366F1" c3="#3B82F6" flipCurve orbitPos="bl"
        showCube cubePos="tr" cubeSize={90}
        showPolygons polyPos="bl"
      />
      <div className="max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
          Blog
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-5xl">
          Occasional writing on things I build and the decisions behind them
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          I write when something from production is worth documenting — architecture patterns, implementation decisions, and what building real software actually looks like.
        </p>
      </div>

      {/* Published posts */}
      {blogPosts.length > 0 && (
        <div className="mt-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Published
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_35px_rgba(15,23,42,0.08)] transition hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
                    {post.status}
                  </span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold text-slate-900 group-hover:text-violet-700 transition">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-400">{post.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 flex-1">
                  {post.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`#/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:underline"
                >
                  Read article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Planned posts */}
      <div className="mt-12">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Coming Soon
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {blogIdeas.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_35px_rgba(15,23,42,0.08)]"
            >
              <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
                {post.status}
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-slate-900">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
