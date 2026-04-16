

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  variant?: "home" | "solutions" | "about" | "platforms" | "resources";
}

const Hero: React.FC<HeroProps> = ({ variant = "home" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-[#050505]"
    >
     
      <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
        {[...Array(8)].map((_, i) => (
          <motion.div key={`vl-${i}`} className="absolute top-0 bottom-0 w-px"
            style={{ left: `${(i + 1) * 12.5}%`, background: "rgba(255,159,26,0.035)" }}
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 1.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }} />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div key={`hl-${i}`} className="absolute left-0 right-0 h-px"
            style={{ top: `${(i + 1) * 14.28}%`, background: "rgba(255,159,26,0.025)" }}
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }} />
        ))}
      </div>

     
      <motion.div className="absolute inset-0 z-[1]" style={{ y: yParallax }}>
        <img
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1974&auto=format&fit=crop"
          alt="Globe Background"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.2) saturate(0.6)" }}
        />
      </motion.div>

    
      <div className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 80% at 0% 50%, rgba(255,120,0,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/95 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050505] via-[#050505]/65 to-transparent pointer-events-none" />

     
      <motion.div className="absolute z-[2] rounded-full pointer-events-none"
        style={{ width: "min(480px, 80vw)", height: "min(480px, 80vw)", top: "-8%", right: "4%", background: "radial-gradient(circle, rgba(245,158,11,0.055) 0%, transparent 70%)", filter: "blur(40px)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute z-[2] rounded-full pointer-events-none hidden sm:block"
        style={{ width: 280, height: 280, bottom: "12%", right: "22%", background: "radial-gradient(circle, rgba(6,182,212,0.045) 0%, transparent 70%)", filter: "blur(28px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.75, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

      
      <motion.div
        className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-16 pt-28 sm:pt-32 pb-20 sm:pb-24"
        style={{ opacity: opacityParallax }}
      >
        <div className="max-w-3xl">

        
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-5 sm:mb-7"
          >
            <motion.div className="h-px bg-gradient-to-r from-amber-400 to-transparent"
              initial={{ width: 0 }} animate={{ width: 44 }}
              transition={{ duration: 0.8, delay: 0.2 }} />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ color: "rgba(251,191,36,0.75)" }}>
              Enterprise Cloud Solutions
            </span>
          </motion.div>

          
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-[1.1] tracking-tight text-white mb-4 sm:mb-5"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", fontFamily: "'Poppins', sans-serif" }}
          >
            Modernize Your Infrastructure.{" "}
            <span style={{ background: "linear-gradient(95deg, #fbbf24 0%, #f97316 55%, #fb923c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Secure Your Data.
            </span>{" "}
            Without the Downtime.
          </motion.h1>

          
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-7 sm:mb-8 max-w-xl"
            style={{ color: "rgba(203,213,225,0.8)" }}
          >
            Enterprise-grade Multi-Cloud, DevSecOps, and Data solutions for scaling businesses. We bridge the gap between legacy systems and cloud-native innovation.
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden px-6 sm:px-7 py-3.5 text-black text-sm font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{ background: "linear-gradient(95deg, #fbbf24, #f97316)" }}
            >
              <motion.div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.32) 50%, transparent 70%)", backgroundSize: "200% 100%" }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.8 }} />
              Get Your Security Audit in 30 Minutes
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
              className="px-6 sm:px-7 py-3.5 text-white text-sm font-bold rounded-lg border transition-all duration-300 w-full sm:w-auto"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", borderColor: "rgba(251,191,36,0.38)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(251,191,36,0.85)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 18px rgba(251,191,36,0.13)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(251,191,36,0.38)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}
            >
              Explore Our Services
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4 sm:gap-5"
          >
            <div className="flex -space-x-2">
              {["#6366f1", "#10b981", "#f59e0b", "#ec4899"].map((c, i) => (
                <div key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#050505] flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-white"
                  style={{ background: c, zIndex: 4 - i }}>
                  {["A", "M", "K", "R"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-[11px] sm:text-xs text-white/45">
                Trusted by <span className="text-white/75 font-semibold">50+ engineering teams</span>
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>

     
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;