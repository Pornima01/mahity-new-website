import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Custom404() {
  const [count, setCount] = useState(5);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitch, setGlitch] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 24,
      y: (e.clientY / window.innerHeight - 0.5) * 24,
    });
  };

 
 useEffect(() => {
    if (count <= 0) { window.location.href = "/"; return; }
    const t = setTimeout(() => setCount((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [count]);

  
  useEffect(() => {
    const flash = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    };
    const id = setInterval(flash, 2800 + Math.random() * 2000);
    return () => clearInterval(id);
  }, []);


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
        ? "rgba(0,242,255,0.6)"
        : i % 3 === 1
        ? "rgba(255,159,26,0.6)"
        : "rgba(255,255,255,0.25)",
    })), []
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden relative select-none"
      style={{ backgroundColor: "#050505", fontFamily: "'Poppins', sans-serif" }}
      onMouseMove={handleMouseMove}
    >
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.9 }}
      />

      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,242,255,0.04) 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />

      
      <div
        className="absolute top-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,242,255,0.07) 0%, transparent 100%)" }}
      />

      
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,159,26,0.07) 0%, transparent 100%)" }}
      />

    

     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ width: p.w, height: p.w, top: `${p.top}%`, left: `${p.left}%`, background: p.color }}
            animate={{ y: [0, -50, 0], opacity: [0.15, 1, 0.15], scale: [0.8, 1.4, 0.8] }}
            transition={{ repeat: Infinity, duration: p.dur, ease: "easeInOut" }}
          />
        ))}
      </div>

     
      {[220, 360, 500].map((size, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: size,
            height: size,
            top: "50%",
            left: "50%",
            marginLeft: -size / 2,
            marginTop: -size / 2,
            border: `1px solid ${i % 2 === 0 ? "rgba(0,242,255,0.07)" : "rgba(255,159,26,0.06)"}`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.015, 1] }}
          transition={{ rotate: { repeat: Infinity, duration: 14 + i * 6, ease: "linear" }, scale: { repeat: Infinity, duration: 5 + i, ease: "easeInOut" } }}
        />
      ))}

      
      <motion.div
        className="relative z-10 w-full max-w-lg mx-4 px-10 py-14 text-center rounded-2xl"
        style={{
          background: "rgba(5,5,5,0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(0,242,255,0.12)",
          boxShadow: "0 0 60px rgba(0,242,255,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
          x: mousePos.x * 0.35,
          y: mousePos.y * 0.35,
        }}
        initial={{ opacity: 0, y: 60, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        
        <div
          className="absolute top-0 left-8 right-8 h-px rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,242,255,0.6), transparent)" }}
        />

        
        <div className="relative inline-block mb-2">
          <motion.span
            className="block font-bold leading-none"
            style={{
              fontSize: "clamp(72px, 18vw, 108px)",
              background: "linear-gradient(135deg, #00f2ff 0%, #0077ff 50%, #00f2ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: glitch ? "drop-shadow(3px 0 0 rgba(255,0,80,0.8)) drop-shadow(-3px 0 0 rgba(0,242,255,0.8))" : "none",
              letterSpacing: "-2px",
            }}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            404
          </motion.span>

         
          <AnimatePresence>
            {glitch && (
              <>
                <motion.span
                  className="absolute inset-0 block font-bold leading-none pointer-events-none"
                  style={{
                    fontSize: "clamp(72px, 18vw, 108px)",
                    color: "rgba(255,0,80,0.5)",
                    letterSpacing: "-2px",
                    clipPath: "inset(30% 0 40% 0)",
                    transform: "translateX(4px)",
                  }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                >
                  404
                </motion.span>
                <motion.span
                  className="absolute inset-0 block font-bold leading-none pointer-events-none"
                  style={{
                    fontSize: "clamp(72px, 18vw, 108px)",
                    color: "rgba(0,242,255,0.5)",
                    letterSpacing: "-2px",
                    clipPath: "inset(55% 0 20% 0)",
                    transform: "translateX(-4px)",
                  }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                >
                  404
                </motion.span>
              </>
            )}
          </AnimatePresence>
        </div>

        
        <motion.div
          className="mx-auto mb-6"
          style={{ height: 1, width: 56, background: "linear-gradient(90deg, transparent, #ff9f1a, transparent)" }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.h2
          className="text-2xl font-semibold text-white mb-2"
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="mb-3 text-xs font-mono tracking-widest uppercase"
          style={{ color: "rgba(0,242,255,0.5)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Error · 404 · Not Found
        </motion.p>

        <motion.p
          className="mb-10 text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          The page you're looking for has drifted into the void.
          <br />Let's get you back on track.
        </motion.p>

       
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/">
            <motion.span
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-black cursor-pointer"
              style={{ background: "linear-gradient(90deg, #ff9f1a, #ffcc66)" }}
              whileHover={{ scale: 1.06, boxShadow: "0 0 24px rgba(255,159,26,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L12 3l9 9"/><path d="M12 3v18"/></svg>
              Go Home
            </motion.span>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.75)",
            }}
            whileHover={{ scale: 1.06, background: "rgba(255,255,255,0.08)", borderColor: "rgba(0,242,255,0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            Go Back
          </motion.button>
        </motion.div>

        
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Redirecting to home
            </span>
            <motion.span
              key={count}
              className="text-xs font-bold"
              style={{ color: "#ff9f1a" }}
              initial={{ scale: 1.5, opacity: 0.4 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {count}s
            </motion.span>
          </div>
         
          <div
            className="w-full h-0.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #ff9f1a, #ffcc66)" }}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>
        </motion.div>

       
        <div className="absolute bottom-4 left-4 w-4 h-4 pointer-events-none" style={{ borderLeft: "1px solid rgba(0,242,255,0.3)", borderBottom: "1px solid rgba(0,242,255,0.3)" }} />
        <div className="absolute bottom-4 right-4 w-4 h-4 pointer-events-none" style={{ borderRight: "1px solid rgba(0,242,255,0.3)", borderBottom: "1px solid rgba(0,242,255,0.3)" }} />
        <div className="absolute top-4 left-4 w-4 h-4 pointer-events-none" style={{ borderLeft: "1px solid rgba(0,242,255,0.15)", borderTop: "1px solid rgba(0,242,255,0.15)" }} />
        <div className="absolute top-4 right-4 w-4 h-4 pointer-events-none" style={{ borderRight: "1px solid rgba(0,242,255,0.15)", borderTop: "1px solid rgba(0,242,255,0.15)" }} />
      </motion.div>
    </div>
  );
}