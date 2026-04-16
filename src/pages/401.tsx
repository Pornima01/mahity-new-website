import React, { useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Error401() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.2,
      speed: Math.random() * 0.18 + 0.04,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.025 + 0.008,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.opacity += s.twinkleSpeed * s.twinkleDir;
        if (s.opacity >= 1) { s.opacity = 1; s.twinkleDir = -1; }
        if (s.opacity <= 0.05) { s.opacity = 0.05; s.twinkleDir = 1; }
        s.y -= s.speed;
        if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity * 0.7})`;
        ctx.fill();
      });
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      w: Math.random() * 4 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      dur: Math.random() * 4 + 2,
      color: i % 3 === 0
        ? "rgba(255,159,26,0.6)"
        : i % 3 === 1
        ? "rgba(0,242,255,0.5)"
        : "rgba(255,255,255,0.2)",
    })), []
  );

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center overflow-hidden relative select-none"
      style={{ backgroundColor: "#050505", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Starfield */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.9 }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,159,26,0.04) 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Orange vignette top */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "40vh",
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,159,26,0.07) 0%, transparent 100%)",
        }}
      />

      {/* Cyan vignette bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "40vh",
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,242,255,0.06) 0%, transparent 100%)",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.w,
              height: p.w,
              top: `${p.top}%`,
              left: `${p.left}%`,
              background: p.color,
            }}
            animate={{ y: [0, -50, 0], opacity: [0.15, 1, 0.15], scale: [0.8, 1.4, 0.8] }}
            transition={{ repeat: Infinity, duration: p.dur, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Rotating rings — hidden on very small screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {[220, 360, 500].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              top: "50%",
              left: "50%",
              marginLeft: -size / 2,
              marginTop: -size / 2,
              border: `1px solid ${i % 2 === 0 ? "rgba(255,159,26,0.07)" : "rgba(0,242,255,0.06)"}`,
            }}
            animate={{ rotate: i % 2 === 0 ? -360 : 360, scale: [1, 1.015, 1] }}
            transition={{
              rotate: { repeat: Infinity, duration: 14 + i * 6, ease: "linear" },
              scale: { repeat: Infinity, duration: 5 + i, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      {/* Card */}
      <motion.div
        className="relative z-10 w-full mx-4 text-center rounded-2xl"
        style={{
          maxWidth: "min(480px, calc(100vw - 32px))",
          padding: "clamp(32px, 8vw, 56px) clamp(20px, 6vw, 40px)",
          background: "rgba(5,5,5,0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,159,26,0.12)",
          boxShadow: "0 0 60px rgba(255,159,26,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
        initial={{ opacity: 0, y: 60, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 rounded-full pointer-events-none"
          style={{
            left: "2rem",
            right: "2rem",
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,159,26,0.7), transparent)",
          }}
        />

        {/* Corner accents — only on sm+ */}
        <div className="absolute top-4 left-4 w-3 h-3 pointer-events-none hidden sm:block" style={{ borderLeft: "1px solid rgba(255,159,26,0.25)", borderTop: "1px solid rgba(255,159,26,0.25)" }} />
        <div className="absolute top-4 right-4 w-3 h-3 pointer-events-none hidden sm:block" style={{ borderRight: "1px solid rgba(255,159,26,0.25)", borderTop: "1px solid rgba(255,159,26,0.25)" }} />
        <div className="absolute bottom-4 left-4 w-3 h-3 pointer-events-none hidden sm:block" style={{ borderLeft: "1px solid rgba(255,159,26,0.25)", borderBottom: "1px solid rgba(255,159,26,0.25)" }} />
        <div className="absolute bottom-4 right-4 w-3 h-3 pointer-events-none hidden sm:block" style={{ borderRight: "1px solid rgba(255,159,26,0.25)", borderBottom: "1px solid rgba(255,159,26,0.25)" }} />

        {/* Lock icon */}
        <motion.div
          className="flex justify-center mb-5"
          initial={{ opacity: 0, scale: 0.4, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative flex items-center justify-center rounded-2xl"
            style={{
              width: "clamp(56px, 12vw, 76px)",
              height: "clamp(56px, 12vw, 76px)",
              background: "rgba(255,159,26,0.07)",
              border: "1px solid rgba(255,159,26,0.2)",
            }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,159,26,0)",
                "0 0 28px rgba(255,159,26,0.3)",
                "0 0 0px rgba(255,159,26,0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff9f1a"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "clamp(24px, 5vw, 34px)", height: "clamp(24px, 5vw, 34px)" }}
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <motion.path
                d="M7 11V7a5 5 0 0 1 10 0v4"
                animate={{ d: ["M7 11V7a5 5 0 0 1 10 0v4", "M7 11V5a5 5 0 0 1 10 0v0"] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut", delay: 1 }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* 401 */}
        <motion.span
          className="block font-bold leading-none mb-2"
          style={{
            fontSize: "clamp(64px, 18vw, 108px)",
            background: "linear-gradient(135deg, #ff9f1a 0%, #ffcc55 50%, #ff9f1a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-2px",
          }}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          401
        </motion.span>

        {/* Divider */}
        <motion.div
          className="mx-auto mb-5"
          style={{
            height: 1,
            width: 56,
            background: "linear-gradient(90deg, transparent, #00f2ff, transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.h2
          className="font-semibold text-white mb-2"
          style={{ fontSize: "clamp(18px, 4vw, 24px)" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Authorization Required
        </motion.h2>

        {/* Tech label */}
        <motion.p
          className="mb-3 font-mono tracking-widest uppercase"
          style={{ fontSize: "clamp(9px, 2vw, 12px)", color: "rgba(255,159,26,0.5)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Error · 401 · Unauthorized
        </motion.p>

        <motion.p
          className="mb-8 leading-relaxed"
          style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "rgba(255,255,255,0.45)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          You don't have permission to access this page.
          <br className="hidden sm:block" />
          {" "}Please log in or contact your administrator.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/" className="w-full sm:w-auto">
            <motion.span
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-black cursor-pointer"
              style={{
                fontSize: "clamp(12px, 3vw, 14px)",
                background: "linear-gradient(90deg, #ff9f1a, #ffcc66)",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(255,159,26,0.45)" }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12L12 3l9 9" /><path d="M12 3v18" />
              </svg>
              Go to Home Page
            </motion.span>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full font-semibold"
            style={{
              fontSize: "clamp(12px, 3vw, 14px)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.75)",
            }}
            whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,159,26,0.35)" }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Go Back
          </motion.button>
        </motion.div>

        {/* Status bar */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <motion.div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#ff4444" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          />
          <span
            className="font-mono uppercase tracking-widest"
            style={{ fontSize: "clamp(8px, 2vw, 11px)", color: "rgba(255,255,255,0.3)" }}
          >
            Access Denied · Contact Admin
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}