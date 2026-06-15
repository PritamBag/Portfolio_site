import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";
import bannerImage from "../assets/Photo.png";
import { heroRoles, siteConfig, socialLinks } from "../data/portfolioData";

const Banner = ({ onOpenHireModal }) => {
  const typedTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTarget.current, {
      strings: heroRoles,
      startDelay: 150,
      typeSpeed: 50,
      backSpeed: 28,
      backDelay: 1300,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent">

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        {/* Left */}
        <div className="px-1 md:px-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-700">
            {siteConfig.title}
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.92] text-slate-900 md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <h2 className="mt-5 min-h-[36px] text-lg font-medium text-slate-500 md:text-xl">
            Building as a{" "}
            <span ref={typedTarget} className="font-semibold text-gradient-brand" />
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            {siteConfig.summary}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {siteConfig.location}
            </span>
            <span className="text-slate-300">·</span>
            <span>~2 years in industry</span>
            <span className="text-slate-300">·</span>
            <span className="font-medium text-emerald-600">Open to opportunities</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#/projects"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 gradient-brand"
            >
              View Projects
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-6 py-3 text-sm font-semibold text-fuchsia-700 transition hover:bg-fuchsia-100"
            >
              Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-fuchsia-200 hover:text-fuchsia-600"
                aria-label={link.label}
              >
                <i className={`fa-brands ${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo card */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-[0_24px_70px_rgba(197,94,162,0.18)] backdrop-blur-sm">
            <div className="h-1 w-full gradient-brand" />
            <div className="p-6">
              <img
                className="mx-auto h-56 w-56 rounded-full border-4 border-white object-cover shadow-[0_18px_40px_rgba(139,92,246,0.18)] sm:h-60 sm:w-60 md:h-64 md:w-64"
                src={bannerImage}
                alt="Pritam Bag"
              />
              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">
                  Currently
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{siteConfig.currentRole}</p>
                <p className="mt-2 text-xs leading-6 text-slate-500">{siteConfig.heroDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  onOpenHireModal: PropTypes.func.isRequired,
};

export default Banner;
