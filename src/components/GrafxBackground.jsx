import { useEffect, useRef } from "react";

/**
 * Premium ambient background:
 *  - SVG fractal-noise grain overlay (premium texture)
 *  - Dot grid
 *  - Aurora gradient layers (animated)
 *  - Mouse-reactive blobs (RAF lerp, no re-renders)
 */
const GrafxBackground = () => {
  const w1 = useRef(null);
  const w2 = useRef(null);
  const w3 = useRef(null);
  const w4 = useRef(null);

  useEffect(() => {
    let rafId;
    const target = { x: 0, y: 0 };
    const cur    = { x: 0, y: 0 };
    const lerp   = (a, b, t) => a + (b - a) * t;

    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth  - 0.5) * 44;
      target.y = (e.clientY / window.innerHeight - 0.5) * 44;
    };

    const tick = () => {
      cur.x = lerp(cur.x, target.x, 0.032);
      cur.y = lerp(cur.y, target.y, 0.032);

      if (w1.current) w1.current.style.transform = `translate(${cur.x * -0.6}px,${cur.y * -0.5}px)`;
      if (w2.current) w2.current.style.transform = `translate(${cur.x *  0.5}px,${cur.y *  0.45}px)`;
      if (w3.current) w3.current.style.transform = `translate(calc(-50% + ${cur.x * 0.22}px),calc(-50% + ${cur.y * 0.22}px))`;
      if (w4.current) w4.current.style.transform = `translate(${cur.x *  0.38}px,${cur.y *  0.3}px)`;

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* ── Noise grain ── */}
      <svg
        className="pointer-events-none fixed inset-0 h-full w-full"
        aria-hidden="true"
        style={{ opacity: 0.038, zIndex: 3, mixBlendMode: "soft-light" }}
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* ── Dot grid ── */}
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle,rgba(139,92,246,0.068) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      {/* ── Aurora gradient layers ── */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <div className="aurora-1 absolute inset-0" />
        <div className="aurora-2 absolute inset-0" />
        <div className="aurora-3 absolute inset-0" />
      </div>

      {/* ── Mouse-reactive blobs ── */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <div ref={w1} className="absolute -right-48 -top-24">
          <div
            className="h-[720px] w-[720px] rounded-full blur-[190px]"
            style={{ background: "rgba(197,94,162,0.16)", animation: "blobDrift1 20s ease-in-out infinite" }}
          />
        </div>
        <div ref={w2} className="absolute -left-48 bottom-0">
          <div
            className="h-[680px] w-[680px] rounded-full blur-[190px]"
            style={{ background: "rgba(139,92,246,0.13)", animation: "blobDrift2 27s ease-in-out infinite" }}
          />
        </div>
        <div ref={w3} className="absolute left-1/2 top-1/2">
          <div
            className="h-[540px] w-[540px] rounded-full blur-[230px]"
            style={{ background: "rgba(197,94,162,0.07)", animation: "blobPulse 15s ease-in-out infinite" }}
          />
        </div>
        <div ref={w4} className="absolute bottom-1/3 right-1/4">
          <div
            className="h-[400px] w-[400px] rounded-full blur-[170px]"
            style={{ background: "rgba(139,92,246,0.09)", animation: "blobDrift1 19s ease-in-out infinite reverse" }}
          />
        </div>
      </div>
    </>
  );
};

export default GrafxBackground;
