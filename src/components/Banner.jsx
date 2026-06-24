import { useEffect, useRef } from "react";
import Typed from "typed.js";
import bannerImage from "../assets/Photo.png";
import { heroRoles, siteConfig, socialLinks } from "../data/portfolioData";

const Banner = () => {
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
    <section className="relative overflow-hidden">

      {/* ── M3 gradient mesh — m3.material.io inspired ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Primary mesh blob — top-left, violet */}
        <div
          className="absolute"
          style={{
            top: "-160px", left: "-160px",
            width: "680px", height: "680px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(203,184,244,0.72) 0%, rgba(233,221,255,0.38) 48%, transparent 70%)",
            filter: "blur(56px)",
          }}
        />
        {/* Secondary mesh blob — top-right, pink */}
        <div
          className="absolute"
          style={{
            top: "-80px", right: "-80px",
            width: "580px", height: "580px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,176,212,0.65) 0%, rgba(255,216,237,0.35) 48%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
        {/* Tertiary mesh blob — bottom-center, indigo */}
        <div
          className="absolute"
          style={{
            bottom: "-60px", left: "35%",
            width: "500px", height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(165,180,252,0.60) 0%, rgba(224,231,255,0.30) 48%, transparent 70%)",
            filter: "blur(44px)",
          }}
        />
        {/* Center glow — warm */}
        <div
          className="absolute"
          style={{
            top: "30%", left: "42%",
            width: "360px", height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,216,237,0.35) 0%, transparent 65%)",
            filter: "blur(32px)",
          }}
        />

        {/* Animated flowing curves */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.18]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hero-curve" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c55ea2" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path d="M-80,180 Q220,60 520,220 T1300,140" stroke="url(#hero-curve)" strokeWidth="2.5" fill="none">
            <animate attributeName="d"
              values="M-80,180 Q220,60 520,220 T1300,140;M-80,220 Q220,30 520,260 T1300,110;M-80,180 Q220,60 520,220 T1300,140"
              dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M-80,380 Q300,250 620,360 T1400,300" stroke="url(#hero-curve)" strokeWidth="1.8" fill="none" opacity="0.65">
            <animate attributeName="d"
              values="M-80,380 Q300,250 620,360 T1400,300;M-80,340 Q300,290 620,320 T1400,340;M-80,380 Q300,250 620,360 T1400,300"
              dur="14s" repeatCount="indefinite" />
          </path>
          <path d="M300,0 Q480,160 420,360 T360,700" stroke="url(#hero-curve)" strokeWidth="1.4" fill="none" opacity="0.45">
            <animate attributeName="d"
              values="M300,0 Q480,160 420,360 T360,700;M340,0 Q440,180 480,330 T400,700;M300,0 Q480,160 420,360 T360,700"
              dur="12s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Perspective grid */}
        <div className="hero-pgrid">
          <div className="hero-pgrid-inner" />
        </div>

        {/* Large concentric ring — right side */}
        <div className="absolute -right-24 -top-20 h-[640px] w-[640px] opacity-[0.22]">
          <svg viewBox="0 0 600 600" fill="none" className="h-full w-full">
            <defs>
              <linearGradient id="hero-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c55ea2" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <circle cx="300" cy="300" r="290" stroke="url(#hero-ring)" strokeWidth="2.0" />
            <circle cx="300" cy="300" r="230" stroke="url(#hero-ring)" strokeWidth="1.5" strokeDasharray="10 6" />
            <circle cx="300" cy="300" r="165" stroke="url(#hero-ring)" strokeWidth="1.4" />
            <circle cx="300" cy="300" r="100" stroke="url(#hero-ring)" strokeWidth="1.2" strokeDasharray="6 4" />
            <circle cx="300" cy="300" r="45"  stroke="url(#hero-ring)" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="14"  fill="url(#hero-ring)" opacity="0.80" />
          </svg>
        </div>

        {/* 5×5 dot matrix */}
        <div className="absolute bottom-10 left-8 opacity-[0.32]">
          <svg viewBox="0 0 170 170" className="h-44 w-44" fill="none">
            <defs>
              <linearGradient id="hero-dot" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c55ea2" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
              <circle
                key={`${r}-${c}`}
                cx={c * 36 + 10} cy={r * 36 + 10}
                r={r === 0 || c === 0 ? 3.5 : 5}
                fill="url(#hero-dot)"
                opacity={1 - (r + c) * 0.06}
              />
            )))}
          </svg>
        </div>

        {/* Plus accents */}
        <svg className="absolute left-1/4 top-10 h-8 w-8 opacity-[0.30]" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="0" x2="12" y2="24" stroke="#c55ea2" strokeWidth="2" />
          <line x1="0"  y1="12" x2="24" y2="12" stroke="#c55ea2" strokeWidth="2" />
        </svg>
        <svg className="absolute right-1/3 bottom-14 h-6 w-6 opacity-[0.24]" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="0" x2="12" y2="24" stroke="#7c3aed" strokeWidth="2" />
          <line x1="0"  y1="12" x2="24" y2="12" stroke="#7c3aed" strokeWidth="2" />
        </svg>
        <svg className="absolute left-16 top-1/3 h-5 w-5 opacity-[0.20]" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="0" x2="12" y2="24" stroke="#6366f1" strokeWidth="1.8" />
          <line x1="0"  y1="12" x2="24" y2="12" stroke="#6366f1" strokeWidth="1.8" />
        </svg>

        {/* Orbit ring */}
        <svg className="absolute right-16 top-1/3 h-28 w-28 opacity-[0.26]" viewBox="0 0 96 96" fill="none">
          <circle cx="48" cy="48" r="44" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 3" />
          <circle cx="48" cy="48" r="28" stroke="#c55ea2" strokeWidth="1.2" />
          <circle cx="48" cy="48" r="8"  fill="#7c3aed" opacity="0.80" />
        </svg>

        {/* Hex accent pair */}
        <svg className="absolute left-1/3 bottom-8 h-12 w-12 opacity-[0.24]" viewBox="0 0 40 40" fill="none">
          <polygon points="20,2 35,11 35,29 20,38 5,29 5,11" stroke="#c55ea2" strokeWidth="1.6" />
          <polygon points="20,9 29,14 29,26 20,31 11,26 11,14" stroke="#7c3aed" strokeWidth="1.1" />
        </svg>
        {/* Small polygon — top area */}
        <svg className="absolute left-[60%] top-16 h-10 w-10 opacity-[0.18]" viewBox="0 0 40 40" fill="none">
          <polygon points="20,2 38,32 2,32" stroke="#6366f1" strokeWidth="1.4" />
          <polygon points="20,10 32,28 8,28" stroke="#c55ea2" strokeWidth="1.0" strokeDasharray="4 2" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">

        {/* Left — text */}
        <div className="px-1 md:px-0">

          {/* Display — Google Sans Display */}
          <h1
            className="m3-display-md font-semibold leading-[1.08]"
            style={{ color: "var(--md-sys-color-on-surface)", fontFamily: '"Google Sans Display","DM Sans",sans-serif' }}
          >
            {siteConfig.name}
          </h1>

          {/* Typed role — Title Large */}
          <h2
            className="mt-5 min-h-[3.5rem] sm:min-h-[1.75rem]"
            style={{
              fontFamily: '"Google Sans","DM Sans",sans-serif',
              fontSize: "1.25rem",
              fontWeight: 400,
              color: "var(--md-sys-color-on-surface-variant)",
            }}
          >
            Building as a{" "}
            <br className="sm:hidden" />
            <span ref={typedTarget} className="font-semibold text-gradient-brand" />
          </h2>

          {/* Summary — Body Large */}
          <p
            className="m3-body-lg mt-6 max-w-xl leading-8"
            style={{ color: "var(--md-sys-color-on-surface-variant)" }}
          >
            {siteConfig.summary}
          </p>

          {/* Meta chips — M3 tonal pill style */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
              style={{
                background: "var(--md-sys-color-primary-container)",
                color: "var(--md-sys-color-on-primary-container)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {siteConfig.location}
            </span>
            <span
              className="rounded-full px-3 py-1.5"
              style={{
                background: "var(--md-sys-color-tertiary-container)",
                color: "var(--md-sys-color-on-tertiary-container)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              }}
            >
              1.5+ years experience
            </span>
            <span
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
              style={{
                background: "#dcfce7",
                color: "#065f46",
                fontSize: "0.8125rem",
                fontWeight: 500,
                fontFamily: '"Google Sans Text","DM Sans",sans-serif',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to opportunities
            </span>
          </div>

          {/* CTAs — M3 Filled + Outlined */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#/projects" className="m3-btn m3-btn-filled">
              View Projects
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="m3-btn m3-btn-outlined"
            >
              Resume
            </a>
          </div>

          {/* Social — M3 Icon Buttons */}
          <div className="mt-8 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                style={{
                  border: "1px solid var(--md-sys-color-outline-variant)",
                  background: "var(--md-sys-color-surface-container-lowest)",
                  color: "var(--md-sys-color-on-surface-variant)",
                }}
                aria-label={link.label}
              >
                <i className={`fa-brands ${link.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Right — photo in M3 feature card */}
        <div className="flex items-center justify-center">
          <div
            className="relative w-full max-w-sm overflow-hidden"
            style={{
              borderRadius: "var(--md-sys-shape-extra-large)",
              boxShadow: "0 24px 80px rgba(124,58,237,0.18), var(--md-sys-elevation-2)",
              background: "var(--md-sys-color-surface-container-lowest)",
            }}
          >
            {/* Tonal gradient cap */}
            <div
              style={{
                background: "linear-gradient(135deg, #e9ddff 0%, #ffd8ed 60%, #e0e7ff 100%)",
                padding: "1.5rem",
                paddingBottom: "0",
              }}
            >
              <img
                className="mx-auto block rounded-full border-4 border-white object-cover shadow-[0_16px_40px_rgba(124,58,237,0.20)]"
                style={{ width: "220px", height: "220px" }}
                src={bannerImage}
                alt="Pritam Bag"
              />
            </div>

            {/* Card body */}
            <div className="p-6">
              <p
                className="m3-label-sm"
                style={{
                  color: "var(--md-sys-color-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Currently
              </p>
              <p className="m3-title-md mt-1.5" style={{ color: "var(--md-sys-color-on-surface)" }}>
                {siteConfig.currentRole}
              </p>
              <div
                className="mt-4 border-t pt-4"
                style={{ borderColor: "var(--md-sys-color-outline-variant)" }}
              >
                <p className="m3-body-sm leading-6" style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
                  {siteConfig.heroDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
