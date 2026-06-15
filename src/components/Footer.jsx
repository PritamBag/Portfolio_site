import { socialLinks, siteConfig } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* ── Decorative: constellation ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full opacity-[0.14]" viewBox="0 0 1200 80" preserveAspectRatio="xMidYMid slice" fill="none">
          {[
            {x:80,y:20},{x:140,y:50},{x:220,y:15},{x:310,y:40},{x:400,y:22},
            {x:520,y:55},{x:600,y:18},{x:680,y:45},{x:780,y:25},{x:870,y:58},
            {x:960,y:20},{x:1040,y:48},{x:1120,y:30},
          ].map((s,i) => (
            <circle key={i} cx={s.x} cy={s.y} r={i % 4 === 0 ? 2 : 1.2} fill={i % 2 === 0 ? '#C55EA2' : '#8B5CF6'}/>
          ))}
          {[
            [80,20, 140,50],[140,50, 220,15],[310,40, 400,22],
            [600,18, 680,45],[780,25, 870,58],[960,20, 1040,48],[1040,48, 1120,30],
          ].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8B5CF6" strokeWidth="0.6" opacity="0.5"/>
          ))}
        </svg>
        <div className="absolute left-1/4 right-1/4 top-0 h-px opacity-[0.35]"
          style={{ background: 'linear-gradient(90deg, transparent, #C55EA2 40%, #8B5CF6 60%, transparent)' }}/>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-1.5">
            <p className="text-base font-semibold tracking-[-0.01em] text-slate-900">
              {siteConfig.name}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              {siteConfig.title}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 transition hover:text-violet-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
