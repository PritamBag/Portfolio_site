import PropTypes from "prop-types";
import { blogPosts } from "../data/portfolioData";

const renderBlock = (block, idx) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={idx} className="mt-10 mb-3 font-display text-2xl font-semibold text-slate-900">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="mt-7 mb-2 font-display text-lg font-semibold text-slate-800">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="mt-4 text-base leading-7 text-slate-600">
          {block.text}
        </p>
      );
    case "code":
      return (
        <div key={idx} className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-slate-900">
          {block.lang && (
            <div className="border-b border-slate-700 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {block.lang}
              </span>
            </div>
          )}
          <pre className="p-5 text-sm leading-6 text-slate-100">
            <code>{block.text}</code>
          </pre>
        </div>
      );
    case "table":
      return (
        <div key={idx} className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                {block.headers.map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className={`px-4 py-3 text-slate-600 ${cIdx === 0 ? "font-medium text-slate-800" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
};

const BlogPost = ({ slug }) => {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-24 text-center">
        <p className="text-slate-500">Post not found.</p>
        <a href="#/blog" className="mt-4 inline-block text-violet-600 hover:underline">
          Back to Blog
        </a>
      </div>
    );
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16 md:px-6 md:py-24">
      {/* Back */}
      <a
        href="#/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-violet-600 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Blog
      </a>

      {/* Header */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
            {post.status}
          </span>
          <span className="text-xs text-slate-400">{post.date}</span>
          <span className="text-xs text-slate-400">{post.readTime}</span>
        </div>

        <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-2 text-lg text-slate-500">{post.subtitle}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-slate-200" />

      {/* Content */}
      <div className="mt-8">
        {post.content.map((block, idx) => renderBlock(block, idx))}
      </div>

      {/* Footer */}
      <div className="mt-16 border-t border-slate-200 pt-8">
        <a
          href="#/blog"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to all posts
        </a>
      </div>
    </article>
  );
};

BlogPost.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default BlogPost;
