import PropTypes from "prop-types";

const RING = {
  tr: { position:"absolute", right:"-120px", top:"-80px",   width:"560px", height:"560px" },
  tl: { position:"absolute", left: "-120px", top:"-80px",   width:"560px", height:"560px" },
  br: { position:"absolute", right:"-120px", bottom:"-80px",width:"560px", height:"560px" },
  bl: { position:"absolute", left: "-120px", bottom:"-80px",width:"560px", height:"560px" },
};
const DOT = {
  tr: { position:"absolute", right:"20px", top:"28px"    },
  tl: { position:"absolute", left: "20px", top:"28px"    },
  br: { position:"absolute", right:"20px", bottom:"28px" },
  bl: { position:"absolute", left: "20px", bottom:"28px" },
};
const ORBIT = {
  mr: { position:"absolute", right:"32px", top:"33%"    },
  ml: { position:"absolute", left: "32px", top:"33%"    },
  br: { position:"absolute", right:"32px", bottom:"14%" },
  bl: { position:"absolute", left: "32px", bottom:"14%" },
};
const CUBE_POS = {
  tr: { position:"absolute", right:"72px",  top:"80px"    },
  tl: { position:"absolute", left:"72px",   top:"80px"    },
  br: { position:"absolute", right:"72px",  bottom:"80px" },
  bl: { position:"absolute", left:"72px",   bottom:"80px" },
};
const CUBE_POS2 = {
  tr: { position:"absolute", left:"16%",  bottom:"100px" },
  tl: { position:"absolute", right:"16%", bottom:"100px" },
  br: { position:"absolute", left:"16%",  top:"100px"    },
  bl: { position:"absolute", right:"16%", top:"100px"    },
};
const POLY_POS = {
  tl: { position:"absolute", left:"-24px",  top:"-24px"    },
  tr: { position:"absolute", right:"-24px", top:"-24px"    },
  bl: { position:"absolute", left:"-24px",  bottom:"-24px" },
  br: { position:"absolute", right:"-24px", bottom:"-24px" },
};

const CubePaths = ({ gid }) => (
  <>
    <line x1="50" y1="10" x2="90" y2="30" stroke={`url(#${gid})`} strokeWidth="1.6"/>
    <line x1="90" y1="30" x2="50" y2="50" stroke={`url(#${gid})`} strokeWidth="1.6"/>
    <line x1="50" y1="50" x2="10" y2="30" stroke={`url(#${gid})`} strokeWidth="1.6"/>
    <line x1="10" y1="30" x2="50" y2="10" stroke={`url(#${gid})`} strokeWidth="1.6"/>
    <line x1="90" y1="30" x2="90" y2="70" stroke={`url(#${gid})`} strokeWidth="1.6"/>
    <line x1="90" y1="70" x2="50" y2="90" stroke={`url(#${gid})`} strokeWidth="1.6"/>
    <line x1="50" y1="90" x2="50" y2="50" stroke={`url(#${gid})`} strokeWidth="1.6"/>
    <line x1="10" y1="30" x2="10" y2="70" stroke={`url(#${gid})`} strokeWidth="1.6"/>
    <line x1="10" y1="70" x2="50" y2="90" stroke={`url(#${gid})`} strokeWidth="1.6"/>
    {/* 3 hidden back edges (dashed) */}
    <line x1="10" y1="70" x2="50" y2="50" stroke={`url(#${gid})`} strokeWidth="1.0" strokeDasharray="3 2"/>
    <line x1="50" y1="50" x2="90" y2="70" stroke={`url(#${gid})`} strokeWidth="1.0" strokeDasharray="3 2"/>
    <line x1="50" y1="50" x2="50" y2="10" stroke={`url(#${gid})`} strokeWidth="1.0" strokeDasharray="3 2"/>
  </>
);

const DecorGrafx = ({
  id,
  ringPos      = "tr",
  dotPos       = "bl",
  orbitPos     = "mr",
  c1           = "#7c3aed",    /* M3 primary */
  c2           = "#c55ea2",    /* M3 secondary */
  c3           = "#6366f1",    /* M3 tertiary */
  dark         = false,
  showGrid     = false,
  flipCurve    = false,
  showCube     = false,
  cubePos      = "tr",
  cubeSize     = 95,
  showBrackets = false,
  showPolygons = false,
  polyPos      = "bl",
}) => {
  const R = `${id}-r`;
  const D = `${id}-d`;
  const C = `${id}-c`;

  const col     = (i) => dark ? "white" : [c1, c2, c3][i];
  const ringOp  = dark ? 0.22 : 0.28;
  const curveOp = dark ? 0.20 : 0.20;
  const sz2     = Math.round(cubeSize * 0.52);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* Full-height side washes — ensures color coverage on tall sections */}
      <div className="absolute inset-y-0 left-0 w-[40%]" style={{
        background: `linear-gradient(to right, ${col(0)}10 0%, transparent 100%)`,
      }} />
      <div className="absolute inset-y-0 right-0 w-[40%]" style={{
        background: `linear-gradient(to left, ${col(2)}0D 0%, transparent 100%)`,
      }} />

      {/* Center bloom — fills the middle of long sections */}
      <div className="absolute" style={{
        left: "50%", top: "50%",
        width: "520px", height: "520px",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        background: dark
          ? "rgba(99,102,241,0.07)"
          : `radial-gradient(circle, ${col(1)}18 0%, transparent 60%)`,
        filter: "blur(60px)",
      }} />

      {/* Tonal corner blobs */}
      <div
        className="absolute"
        style={{
          ...RING[ringPos],
          width: "380px", height: "380px",
          borderRadius: "50%",
          background: dark
            ? "rgba(124,58,237,0.12)"
            : `radial-gradient(circle, ${col(0)}38 0%, transparent 65%)`,
          filter: "blur(48px)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute"
        style={{
          ...DOT[dotPos],
          width: "260px", height: "260px",
          borderRadius: "50%",
          background: dark
            ? "rgba(197,94,162,0.10)"
            : `radial-gradient(circle, ${col(1)}2E 0%, transparent 65%)`,
          filter: "blur(36px)",
        }}
      />

      {/* Paper-noise texture */}
      <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.030 }}>
        <filter id={`${id}-paper`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id}-paper)`}/>
      </svg>

      {/* Optional 3-D perspective grid */}
      {showGrid && (
        <div className="hero-pgrid">
          <div className="hero-pgrid-inner" />
        </div>
      )}

      {/* Animated flowing curves */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ opacity: curveOp }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={C}
            x1={flipCurve ? "100%" : "0%"} y1="0%"
            x2={flipCurve ? "0%"   : "100%"} y2="0%"
          >
            <stop offset="0%"   stopColor={col(0)} stopOpacity={dark ? 0.9 : 1}/>
            <stop offset="50%"  stopColor={col(1)} stopOpacity={dark ? 0.7 : 1}/>
            <stop offset="100%" stopColor={col(2)} stopOpacity={dark ? 0.5 : 1}/>
          </linearGradient>
        </defs>
        <path d="M-80,180 Q220,60 520,220 T1300,140"
          stroke={`url(#${C})`} strokeWidth="2.8" fill="none">
          <animate attributeName="d"
            values="M-80,180 Q220,60 520,220 T1300,140;M-80,220 Q220,30 520,260 T1300,110;M-80,180 Q220,60 520,220 T1300,140"
            dur="10s" repeatCount="indefinite"/>
        </path>
        <path d="M-80,380 Q300,250 620,360 T1400,300"
          stroke={`url(#${C})`} strokeWidth="2.2" fill="none" opacity="0.75">
          <animate attributeName="d"
            values="M-80,380 Q300,250 620,360 T1400,300;M-80,340 Q300,290 620,320 T1400,340;M-80,380 Q300,250 620,360 T1400,300"
            dur="14s" repeatCount="indefinite"/>
        </path>
        <path d="M200,0 Q380,150 320,340 T260,640"
          stroke={`url(#${C})`} strokeWidth="1.8" fill="none" opacity="0.60">
          <animate attributeName="d"
            values="M200,0 Q380,150 320,340 T260,640;M240,0 Q340,160 380,310 T300,640;M200,0 Q380,150 320,340 T260,640"
            dur="12s" repeatCount="indefinite"/>
        </path>
      </svg>

      {/* Concentric rings */}
      <div style={{ ...RING[ringPos], opacity: ringOp }}>
        <svg viewBox="0 0 560 560" fill="none" style={{ width:"100%", height:"100%" }}>
          <defs>
            <linearGradient id={R} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor={col(0)}/>
              <stop offset="50%"  stopColor={col(1)}/>
              <stop offset="100%" stopColor={col(2)}/>
            </linearGradient>
          </defs>
          <circle cx="280" cy="280" r="270" stroke={`url(#${R})`} strokeWidth="2.0"/>
          <circle cx="280" cy="280" r="210" stroke={`url(#${R})`} strokeWidth="1.5" strokeDasharray="8 5"/>
          <circle cx="280" cy="280" r="150" stroke={`url(#${R})`} strokeWidth="1.5"/>
          <circle cx="280" cy="280" r="90"  stroke={`url(#${R})`} strokeWidth="1.3" strokeDasharray="5 4"/>
          <circle cx="280" cy="280" r="40"  stroke={`url(#${R})`} strokeWidth="1.2"/>
          <circle cx="280" cy="280" r="12"  fill={`url(#${R})`} opacity="0.85"/>
        </svg>
      </div>

      {/* 5×5 dot matrix */}
      <div style={{ ...DOT[dotPos], opacity: 0.38 }}>
        <svg viewBox="0 0 170 170" style={{ width:"144px", height:"144px" }} fill="none">
          <defs>
            <linearGradient id={D} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor={col(0)}/>
              <stop offset="100%" stopColor={col(2)}/>
            </linearGradient>
          </defs>
          {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
            <circle key={`${r}-${c}`}
              cx={c*36+10} cy={r*36+10}
              r={r===0||c===0 ? 3.5 : 4.5}
              fill={`url(#${D})`}
              opacity={1-(r+c)*0.06}/>
          )))}
        </svg>
      </div>

      {/* Cross / plus accents — 3 scattered */}
      {[
        { s:{ position:"absolute", left:"25%",  top:"48px"    }, sz:32, ci:0, op:0.35 },
        { s:{ position:"absolute", right:"33%", bottom:"60px" }, sz:26, ci:1, op:0.28 },
        { s:{ position:"absolute", left:"64px", top:"50%"     }, sz:20, ci:2, op:0.22 },
      ].map(({ s, sz, ci, op }, i) => (
        <svg key={i} style={{ ...s, opacity:op, width:sz, height:sz }} viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="0"  x2="12" y2="24" stroke={col(ci)} strokeWidth="2"/>
          <line x1="0"  y1="12" x2="24" y2="12" stroke={col(ci)} strokeWidth="2"/>
        </svg>
      ))}

      {/* Orbit ring */}
      <svg
        style={{ ...ORBIT[orbitPos], opacity:0.30, width:"96px", height:"96px" }}
        viewBox="0 0 80 80" fill="none"
      >
        <circle cx="40" cy="40" r="36" stroke={col(2)} strokeWidth="1.5" strokeDasharray="6 3"/>
        <circle cx="40" cy="40" r="22" stroke={col(1)} strokeWidth="1.2"/>
        <circle cx="40" cy="40" r="6"  fill={col(2)}   opacity="0.85"/>
      </svg>

      {/* Hex pair */}
      <svg
        style={{ position:"absolute", left:"33%", bottom:"20px", opacity:0.28, width:"52px", height:"52px" }}
        viewBox="0 0 40 40" fill="none"
      >
        <polygon points="20,2 35,11 35,29 20,38 5,29 5,11"  stroke={col(1)} strokeWidth="1.6"/>
        <polygon points="20,9 29,14 29,26 20,31 11,26 11,14" stroke={col(2)} strokeWidth="1.1"/>
      </svg>

      {/* ── Wireframe isometric cubes ── */}
      {showCube && (
        <>
          {/* Primary cube */}
          <div className="decor-float-y"
            style={{ ...CUBE_POS[cubePos], width:`${cubeSize}px`, height:`${cubeSize}px`, opacity: dark ? 0.38 : 0.32 }}
          >
            <svg viewBox="0 0 100 100" fill="none" style={{ width:"100%", height:"100%" }}>
              <defs>
                <linearGradient id={`${id}-cb`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor={col(0)}/>
                  <stop offset="55%"  stopColor={col(1)}/>
                  <stop offset="100%" stopColor={col(2)}/>
                </linearGradient>
              </defs>
              <CubePaths gid={`${id}-cb`}/>
              <polygon points="50,10 90,30 50,50 10,30" fill={col(0)} fillOpacity="0.18"/>
              <polygon points="90,30 90,70 50,90 50,50" fill={col(1)} fillOpacity="0.14"/>
              <polygon points="10,30 50,50 50,90 10,70" fill={col(2)} fillOpacity="0.10"/>
            </svg>
          </div>

          {/* Secondary smaller cube */}
          <div className="decor-float-y2"
            style={{ ...CUBE_POS2[cubePos], width:`${sz2}px`, height:`${sz2}px`, opacity: dark ? 0.24 : 0.22 }}
          >
            <svg viewBox="0 0 100 100" fill="none" style={{ width:"100%", height:"100%" }}>
              <defs>
                <linearGradient id={`${id}-cb2`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor={col(2)}/>
                  <stop offset="100%" stopColor={col(0)}/>
                </linearGradient>
              </defs>
              <CubePaths gid={`${id}-cb2`}/>
            </svg>
          </div>
        </>
      )}

      {/* ── Abstract code brackets  { } ── */}
      {showBrackets && (
        <>
          <svg
            style={{ position:"absolute", left:"2.5%", top:"16%", opacity: dark ? 0.30 : 0.24 }}
            width="56" height="144"
            viewBox="0 0 56 144"
          >
            <defs>
              <linearGradient id={`${id}-bk1`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor={col(0)}/>
                <stop offset="100%" stopColor={col(1)}/>
              </linearGradient>
            </defs>
            <text x="2" y="120"
              fontFamily="'Courier New', Courier, monospace"
              fontSize="134" fontWeight="200"
              fill={`url(#${id}-bk1)`}
            >{"{"}</text>
          </svg>
          <svg
            style={{ position:"absolute", right:"2.5%", bottom:"16%", opacity: dark ? 0.24 : 0.18 }}
            width="56" height="144"
            viewBox="0 0 56 144"
          >
            <defs>
              <linearGradient id={`${id}-bk2`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor={col(1)}/>
                <stop offset="100%" stopColor={col(2)}/>
              </linearGradient>
            </defs>
            <text x="-22" y="120"
              fontFamily="'Courier New', Courier, monospace"
              fontSize="134" fontWeight="200"
              fill={`url(#${id}-bk2)`}
            >{"}"}</text>
          </svg>
        </>
      )}

      {/* ── Overlapping geometric polygon composition ── */}
      {showPolygons && (
        <div style={{ ...POLY_POS[polyPos], width:"260px", height:"240px", opacity: 0.34 }}>
          <svg viewBox="0 0 230 210" fill="none" style={{ width:"100%", height:"100%" }}>
            <defs>
              <linearGradient id={`${id}-pg`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor={col(0)}/>
                <stop offset="100%" stopColor={col(2)}/>
              </linearGradient>
            </defs>
            <polygon points="115,14 214,192 16,192"
              stroke={col(0)} strokeWidth="1.6"
              fill={col(0)} fillOpacity="0.14"/>
            <polygon points="24,24 206,42 98,198"
              stroke={col(1)} strokeWidth="1.3"
              fill={col(1)} fillOpacity="0.12"
              transform="rotate(12,115,105)"/>
            <polygon points="58,10 196,178 20,155"
              stroke={col(2)} strokeWidth="1.1"
              fill={col(2)} fillOpacity="0.09"
              transform="rotate(-18,115,105)"/>
            <polygon points="115,48 182,168 48,168"
              stroke={`url(#${id}-pg)`} strokeWidth="1.2"
              fill="none" strokeDasharray="6 4"/>
            <polygon points="115,36 162,68 146,122 84,122 68,68"
              stroke={col(0)} strokeWidth="1.0"
              fill="none" strokeDasharray="5 3" opacity="0.90"/>
            <polygon points="168,58 184,68 184,90 168,100 152,90 152,68"
              stroke={col(2)} strokeWidth="0.9"
              fill={col(2)} fillOpacity="0.12"
              strokeDasharray="3 2"/>
            <line x1="0" y1="105" x2="115" y2="14"
              stroke={col(1)} strokeWidth="0.8" opacity="0.7"/>
            <line x1="230" y1="80" x2="115" y2="192"
              stroke={col(0)} strokeWidth="0.8" opacity="0.65"/>
          </svg>
        </div>
      )}

    </div>
  );
};

DecorGrafx.propTypes = {
  id:           PropTypes.string.isRequired,
  ringPos:      PropTypes.oneOf(["tr","tl","br","bl"]),
  dotPos:       PropTypes.oneOf(["tr","tl","br","bl"]),
  orbitPos:     PropTypes.oneOf(["mr","ml","br","bl"]),
  c1:           PropTypes.string,
  c2:           PropTypes.string,
  c3:           PropTypes.string,
  dark:         PropTypes.bool,
  showGrid:     PropTypes.bool,
  flipCurve:    PropTypes.bool,
  showCube:     PropTypes.bool,
  cubePos:      PropTypes.oneOf(["tr","tl","br","bl"]),
  cubeSize:     PropTypes.number,
  showBrackets: PropTypes.bool,
  showPolygons: PropTypes.bool,
  polyPos:      PropTypes.oneOf(["tr","tl","br","bl"]),
};

export default DecorGrafx;
