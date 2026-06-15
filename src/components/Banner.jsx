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

      {/* ── 3-D perspective grid (bottom fade) ── */}
      <div className="hero-pgrid pointer-events-none" aria-hidden="true">
        <div className="hero-pgrid-inner" />
      </div>

      {/* ── Decorative layer ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">

        {/* Animated flowing curves */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.055]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curve-g1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C55EA2" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path d="M-80,180 Q220,60 520,220 T1300,140" stroke="url(#curve-g1)" strokeWidth="1.5" fill="none">
            <animate attributeName="d"
              values="M-80,180 Q220,60 520,220 T1300,140;M-80,220 Q220,30 520,260 T1300,110;M-80,180 Q220,60 520,220 T1300,140"
              dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M-80,380 Q300,250 620,360 T1400,300" stroke="url(#curve-g1)" strokeWidth="1" fill="none" opacity="0.55">
            <animate attributeName="d"
              values="M-80,380 Q300,250 620,360 T1400,300;M-80,340 Q300,290 620,320 T1400,340;M-80,380 Q300,250 620,360 T1400,300"
              dur="14s" repeatCount="indefinite" />
          </path>
          <path d="M200,0 Q380,150 320,320 T260,600" stroke="url(#curve-g1)" strokeWidth="0.8" fill="none" opacity="0.35">
            <animate attributeName="d"
              values="M200,0 Q380,150 320,320 T260,600;M240,0 Q340,160 380,300 T300,600;M200,0 Q380,150 320,320 T260,600"
              dur="12s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Concentric rings — top-right */}
        <div className="absolute -right-32 -top-20 h-[640px] w-[640px] opacity-[0.08]">
          <svg viewBox="0 0 640 640" fill="none" className="h-full w-full">
            <defs>
              <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C55EA2" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <circle cx="320" cy="320" r="310" stroke="url(#ring-grad)" strokeWidth="1" />
            <circle cx="320" cy="320" r="250" stroke="url(#ring-grad)" strokeWidth="0.8" strokeDasharray="6 5" />
            <circle cx="320" cy="320" r="185" stroke="url(#ring-grad)" strokeWidth="0.8" />
            <circle cx="320" cy="320" r="118" stroke="url(#ring-grad)" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="320" cy="320" r="58"  stroke="url(#ring-grad)" strokeWidth="0.8" />
            <circle cx="320" cy="320" r="18"  fill="url(#ring-grad)" opacity="0.5" />
          </svg>
        </div>

        {/* 5×5 dot matrix — bottom-left */}
        <div className="absolute bottom-10 left-8 opacity-[0.14]">
          <svg viewBox="0 0 170 170" className="h-40 w-40" fill="none">
            <defs>
              <linearGradient id="dot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C55EA2" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
              <circle
                key={`${r}-${c}`}
                cx={c * 36 + 10} cy={r * 36 + 10} r={r === 0 || c === 0 ? 3 : 4}
                fill="url(#dot-grad)"
                opacity={1 - (r + c) * 0.07}
              />
            )))}
          </svg>
        </div>

        {/* Plus / cross accents */}
        <svg className="absolute left-1/4 top-12 h-7 w-7 opacity-[0.16]" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="0" x2="12" y2="24" stroke="#C55EA2" strokeWidth="1.5" />
          <line x1="0"  y1="12" x2="24" y2="12" stroke="#C55EA2" strokeWidth="1.5" />
        </svg>
        <svg className="absolute right-1/3 bottom-16 h-5 w-5 opacity-[0.13]" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="0" x2="12" y2="24" stroke="#8B5CF6" strokeWidth="1.5" />
          <line x1="0"  y1="12" x2="24" y2="12" stroke="#8B5CF6" strokeWidth="1.5" />
        </svg>
        <svg className="absolute left-14 top-1/2 h-4 w-4 opacity-[0.10]" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="0" x2="12" y2="24" stroke="#C55EA2" strokeWidth="1.5" />
          <line x1="0"  y1="12" x2="24" y2="12" stroke="#C55EA2" strokeWidth="1.5" />
        </svg>

        {/* Orbit rings mid-right */}
        <svg className="absolute right-10 top-1/3 h-24 w-24 opacity-[0.11]" viewBox="0 0 96 96" fill="none">
          <circle cx="48" cy="48" r="44" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="5 3" />
          <circle cx="48" cy="48" r="28" stroke="#C55EA2" strokeWidth="0.8" />
          <circle cx="48" cy="48" r="6"  fill="#8B5CF6" opacity="0.6" />
        </svg>

        {/* Small hex shape — top-left area */}
        <svg className="absolute left-1/3 bottom-8 h-10 w-10 opacity-[0.09]" viewBox="0 0 40 40" fill="none">
          <polygon
            points="20,2 35,11 35,29 20,38 5,29 5,11"
            stroke="#C55EA2" strokeWidth="1"
          />
          <polygon
            points="20,9 29,14 29,26 20,31 11,26 11,14"
            stroke="#8B5CF6" strokeWidth="0.7"
          />
        </svg>

      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        {/* Left */}
        <div className="px-1 md:px-0">
          <span className="badge-shimmer inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-700">
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
            <span>1.5+ years in industry</span>
            <span className="text-slate-300">·</span>
            <span className="font-medium text-emerald-600">Open to opportunities</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#/projects"
              className="rounded-full px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.10em] text-white transition hover:opacity-90 gradient-brand"
            >
              View Projects
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.10em] text-fuchsia-700 transition hover:bg-fuchsia-100"
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
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white/80 shadow-[0_24px_70px_rgba(197,94,162,0.22)] backdrop-blur-sm">
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
