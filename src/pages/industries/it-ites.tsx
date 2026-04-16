import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



const challenges = [
  { icon: "📋", title: "Compliance Fragmentation", text: "Every client brings different compliance requirements" },
  { icon: "🏘️", title: "Noisy Neighbours", text: "Multi-tenancy creates noisy neighbour risks" },
  { icon: "👥", title: "Manual Scaling", text: "Scaling means hiring more people, not leveraging more automation" },
];
const capabilities = [
  { num: "01", tag: "Multi-Tenant", title: "Isolated Tenant Boundaries", body: "We build platforms that treat each client environment as a tenant with clearly defined boundaries, while sharing the economic benefits of common infrastructure.", accent: "#8b5cf6" },
  { num: "02", tag: "Policy Engine", title: "Codified Compliance Profiles", body: "Compliance profiles are codified and applied automatically based on client tier — no manual audits, no missed configurations.", accent: "#38bdf8" },
  { num: "03", tag: "Self-Service", title: "Zero-Ticket Provisioning", body: "Self-service portals let internal or external teams provision what they need without opening a ticket, while usage-based showback ensures every client pays for exactly what they use.", accent: "#4ade80" },
];
const outcomes = [
  { stat: "Days", sub: "not months", label: "to onboard new clients", color: "#8b5cf6" },
  { stat: "Scale ≠ Headcount", sub: "automation handles growth", label: "Infrastructure scales without linearly scaling headcount", color: "#38bdf8" },
  { stat: "Zero Tickets", sub: "self-service portals", label: "Teams focus on delivery, not environment wrangling", color: "#4ade80" },
];

function TenantTicker() {
  const [n, setN] = useState(847);
  useEffect(() => {
    const iv = setInterval(() => setN(v => v + Math.floor(Math.random() * 2)), 3000);
    return () => clearInterval(iv);
  }, []);
  return (
    <motion.span key={n} initial={{y:-6,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}}>{n}</motion.span>
  );
}

function ITBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.009] bg-[#8b5cf6] blur-[140px] rounded-full"/>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-[0.007] bg-[#38bdf8] blur-[110px] rounded-full"/>
      
      <div className="absolute inset-0 opacity-[0.012]" style={{backgroundImage:"radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)",backgroundSize:"40px 40px"}}/>
    </div>
  );
}


function HeroImage() {
  const YOUR_IMAGE_SRC = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80";
  return (
    <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[380px] rounded-2xl overflow-hidden" style={{border:"1px solid rgba(139,92,246,0.18)"}}>
      <img src={YOUR_IMAGE_SRC} alt="IT Infrastructure" className="absolute inset-0 w-full h-full object-cover" style={{filter:"brightness(0.38) saturate(0.45) hue-rotate(200deg)"}}/>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a12]/90 via-[#0a0a12]/20 to-transparent"/>
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#8b5cf6]/55"/>
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#8b5cf6]/55"/>
    
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-[#0a0a12]/95 to-transparent flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" style={{animation:"it-pulse 2s ease-in-out infinite"}}/>
          <span style={{fontFamily:"'JetBrains Mono',monospace"}} className="text-[#4ade80]/70 text-[10px] tracking-[0.25em] uppercase">
            <TenantTicker/> tenants online
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" style={{animation:"it-pulse 2s ease-in-out infinite",animationDelay:"0.8s"}}/>
          <span style={{fontFamily:"'JetBrains Mono',monospace"}} className="text-[#38bdf8]/60 text-[10px] tracking-[0.2em] uppercase">99.98% uptime</span>
        </div>
      </div>
    </div>
  );
}

export default function ITIES() {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({target:heroRef,offset:["start start","end start"]});
  const heroY = useTransform(scrollYProgress,[0,1],["0%","22%"]);
  const heroOpacity = useTransform(scrollYProgress,[0,0.8],[1,0]);

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');
        .it-display{font-family:'Inter',sans-serif}
        .it-mono{font-family:'JetBrains Mono',monospace}
        .violet-text{background:linear-gradient(135deg,#8b5cf6,#38bdf8,#4ade80);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .it-card{background:rgba(139,92,246,0.03);border:1px solid rgba(139,92,246,0.12);border-radius:14px;transition:all 0.3s}
        .it-card:hover{background:rgba(139,92,246,0.07);border-color:rgba(139,92,246,0.3)}
        .it-cap{border:1px solid rgba(139,92,246,0.1);border-radius:12px;transition:all 0.3s;background:rgba(139,92,246,0.02)}
        .it-cap:hover{border-color:rgba(139,92,246,0.28);background:rgba(139,92,246,0.05)}
        @keyframes it-pulse{0%,100%{opacity:1}50%{opacity:0.3}}
        .it-dot{animation:it-pulse 2.2s ease-in-out infinite}
      `}</style>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <ITBg/>
        <motion.div style={{y:heroY,opacity:heroOpacity}} className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-24 pt-24 pb-14">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
             
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}
                className="inline-flex items-center gap-2 bg-[#8b5cf6]/08 border border-[#8b5cf6]/20 rounded-lg px-3 py-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] it-dot"/>
                <span className="it-mono text-[#8b5cf6]/65 text-[10px] tracking-[0.35em] uppercase">IT / ITES</span>
                <span className="it-mono text-white/20 text-[10px] mx-1">|</span>
                <span className="it-mono text-white/30 text-[10px]"><TenantTicker/> tenants</span>
              </motion.div>

              <motion.h1 initial={{opacity:0,y:44}} animate={{opacity:1,y:0}} transition={{duration:0.95,delay:0.18}}
                className="it-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.1] mb-5">
                Your infrastructure should be a{" "}
                <span className="violet-text">service provider,</span>{" "}
                not a ticket system.
              </motion.h1>

              <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:1,delay:0.6,ease:[0.22,1,0.36,1]}}
                style={{originX:0}} className="h-px bg-gradient-to-r from-[#8b5cf6] via-[#38bdf8] to-transparent mb-5"/>

              <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.75}}
                className="it-display text-white/50 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                For IT services organisations, infrastructure is the product. It must be multi-tenant, self-service, and invisible to the teams consuming it.
              </motion.p>
            </div>
         
            <motion.div initial={{opacity:0,scale:0.94,y:20}} animate={{opacity:1,scale:1,y:0}} transition={{duration:1.1,delay:0.3}}>
              <HeroImage/>
            </motion.div>
          </div>
        </motion.div>
      </section>

     
      <section className="py-14 md:py-20 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] it-dot"/>
            <span className="it-mono text-[#8b5cf6]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">Common Challenges</span>
            <div className="flex-1 h-px bg-[#8b5cf6]/08"/>
          </motion.div>
        
          <div className="space-y-3">
            {challenges.map((c,i)=>(
              <motion.div key={i} initial={{opacity:0,x:i%2===0?-20:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="it-card p-5 md:p-6 flex items-start gap-5">
                <span className="text-2xl shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <h3 className="it-display font-semibold text-[#8b5cf6] text-sm md:text-base mb-1">{c.title}</h3>
                  <p className="it-display text-white/50 text-sm leading-relaxed">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-14 md:py-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#08080f]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] it-dot"/>
            <span className="it-mono text-[#38bdf8]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">How We Solve It</span>
            <div className="flex-1 h-px bg-[#38bdf8]/08"/>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {capabilities.map((cap,i)=>(
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.13}}
                className="it-cap p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="it-mono text-[10px] tracking-widest border rounded px-2 py-0.5" style={{color:cap.accent,borderColor:`${cap.accent}30`}}>{cap.tag}</span>
                  <span className="it-mono text-white/12 text-2xl font-black select-none">{cap.num}</span>
                </div>
                <div className="w-8 h-0.5 rounded-full" style={{backgroundColor:cap.accent}}/>
                <h3 className="it-display text-base md:text-lg font-semibold text-white leading-snug">{cap.title}</h3>
                <p className="it-display text-white/45 text-sm leading-relaxed select-none">{cap.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-14 md:py-20 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] it-dot"/>
            <span className="it-mono text-[#4ade80]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">Outcomes</span>
            <div className="flex-1 h-px bg-[#4ade80]/08"/>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {outcomes.map((o,i)=>(
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.12}}
                className="it-card p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px" style={{background:`linear-gradient(90deg,transparent,${o.color}55,transparent)`}}/>
                <div className="it-display text-lg md:text-2xl font-bold mb-1" style={{color:o.color}}>{o.stat}</div>
                <div className="it-mono text-white/25 text-[10px] tracking-widest mb-2">{o.sub}</div>
                <p className="it-display text-white/48 text-sm leading-relaxed">{o.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="it-card p-8 md:p-10 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(139,92,246,0.4),transparent)"}}/>
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(74,222,128,0.2),transparent)"}}/>
            <p className="it-display text-lg md:text-2xl font-semibold text-white/75 leading-snug">
              Infrastructure that gets out of the way{" "}
              <span className="violet-text font-bold">and lets your teams move.</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}