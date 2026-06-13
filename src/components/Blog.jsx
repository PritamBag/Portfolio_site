import { blogIdeas } from "../data/portfolioData";

const Blog = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
          Blog
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-5xl">
          Writing space for engineering notes and case studies
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          This page is ready for technical writing. For now, it holds planned
          topics you can replace with real articles whenever you publish them.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
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
    </section>
  );
};

export default Blog;
