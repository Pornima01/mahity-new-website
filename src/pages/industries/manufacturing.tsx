import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



const challenges = [
  { icon: "⚙️", title: "Legacy Machinery", text: "Production lines run on outdated systems that cannot share data" },
  { icon: "🔍", title: "Late Quality Detection", text: "Quality issues are detected after batches are complete, not during production" },
  { icon: "⚡", title: "Infrastructure Fragility", text: "Power and network fluctuations disrupt critical operations" },
];
const capabilities = [
  { tag: "Edge Gateway", title: "Legacy-to-Modern Bridge", body: "We bridge legacy machinery to modern data pipelines using industrial gateway devices that translate proprietary protocols into standard formats.", accent: "#f59e0b" },
  { tag: "Edge Computing", title: "Offline-Resilient Processing", body: "Edge computing nodes process data locally, keeping production running even when wide area network connectivity drops.", accent: "#10b981" },
  { tag: "ML Monitoring", title: "Real-Time Quality Intelligence", body: "Machine learning models trained on historical data identify quality risks in real time, alerting operators before defects occur.", accent: "#f59e0b" },
];
const outcomes = [
  { value: "↓ Downtime", sub: "predictive maintenance catches failures early", color: "#f59e0b" },
  { value: "↑ Quality", sub: "defects detected during production, not after", color: "#10b981" },
  { value: "↓ Energy", sub: "optimised against variable power costs", color: "#f59e0b" },
];

function OEECounter() {
  const [val, setVal] = useState(97.4);
  useEffect(() => {
    const iv = setInterval(() => setVal(v => parseFloat((v + (Math.random() * 0.3 - 0.15)).toFixed(1))), 2400);
    return () => clearInterval(iv);
  }, []);
  return (
    <motion.span key={val} initial={{y:-6,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.4}}>
      {val}%
    </motion.span>
  );
}

function Waveform() {
  return (
    <svg viewBox="0 0 500 32" fill="none" className="w-full h-7 overflow-visible">
      <motion.path d="M0,16 L70,16 L85,16 L93,3 L101,29 L109,3 L117,29 L125,16 L155,16 L175,16 L183,6 L191,26 L199,6 L207,26 L215,16 L260,16 L280,16 L286,1 L292,31 L298,1 L304,31 L310,16 L370,16 L500,16"
        stroke="url(#mfgWave)" strokeWidth="1.5" fill="none"
        initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}}
        transition={{duration:2.2,ease:"easeInOut"}}/>
      <defs>
        <linearGradient id="mfgWave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
          <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function MfgBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.009] bg-[#f59e0b] blur-[130px] rounded-full"/>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-[0.007] bg-[#10b981] blur-[110px] rounded-full"/>
    
      <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage:"linear-gradient(rgba(245,158,11,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.7) 1px,transparent 1px)",backgroundSize:"80px 80px"}}/>
    </div>
  );
}


function HeroImage() {
  const YOUR_IMAGE_SRC = "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=80";
  return (
    <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[400px] rounded-xl overflow-hidden" style={{border:"1px solid rgba(245,158,11,0.2)"}}>
      <img src={YOUR_IMAGE_SRC} alt="Manufacturing" className="absolute inset-0 w-full h-full object-cover" style={{filter:"brightness(0.38) saturate(0.45) sepia(0.15)"}}/>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a08]/90 via-[#0a0a08]/20 to-transparent"/>
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#f59e0b]/55"/>
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#f59e0b]/55"/>
      
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.5) 3px,rgba(0,0,0,0.5) 4px)"}}/>
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" style={{animation:"mfg-blink 1.4s ease-in-out infinite"}}/>
        <span style={{fontFamily:"'JetBrains Mono',monospace"}} className="text-[#f59e0b]/60 text-[9px] tracking-[0.25em] uppercase">Production Line Active</span>
      </div>
 
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 border border-[#f59e0b]/20 rounded px-2.5 py-1.5">
        <span style={{fontFamily:"'JetBrains Mono',monospace"}} className="text-white/35 text-[9px] tracking-widest uppercase">OEE</span>
        <span style={{fontFamily:"'JetBrains Mono',monospace"}} className="text-[#f59e0b] text-sm font-bold tabular-nums"><OEECounter/></span>
      </div>
    </div>
  );
}

export default function Manufacturing40() {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({target:heroRef,offset:["start start","end start"]});
  const heroY = useTransform(scrollYProgress,[0,1],["0%","22%"]);
  const heroOpacity = useTransform(scrollYProgress,[0,0.8],[1,0]);

  return (
    <div className="min-h-screen bg-[#0a0a08] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
        .mfg-display{font-family:'Outfit',sans-serif}
        .mfg-mono{font-family:'JetBrains Mono',monospace}
        .amber-text{background:linear-gradient(135deg,#f59e0b,#fbbf24,#10b981);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .mfg-card{background:rgba(245,158,11,0.03);border:1px solid rgba(245,158,11,0.13);border-radius:12px;transition:all 0.3s}
        .mfg-card:hover{background:rgba(245,158,11,0.06);border-color:rgba(245,158,11,0.3)}
        .mfg-cap{border-left:2px solid rgba(245,158,11,0.15);padding-left:1.25rem;transition:all 0.3s;border-radius:0 10px 10px 0}
        .mfg-cap:hover{background:rgba(245,158,11,0.03);border-left-color:rgba(245,158,11,0.5)}
        @keyframes mfg-blink{0%,100%{opacity:1}50%{opacity:0.25}}
        .mfg-dot{animation:mfg-blink 1.8s ease-in-out infinite}
      `}</style>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <MfgBg/>
        <motion.div style={{y:heroY,opacity:heroOpacity}} className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-24 pt-24 pb-14">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <motion.div initial={{opacity:0,x:-16}} animate={{opacity:1,x:0}} transition={{duration:0.5}} className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#f59e0b] rotate-45 mfg-dot"/>
                <span className="mfg-mono text-[#f59e0b]/65 text-[10px] md:text-xs tracking-[0.4em] uppercase">Manufacturing 4.0</span>
              </motion.div>
              <motion.h1 initial={{opacity:0,y:44}} animate={{opacity:1,y:0}} transition={{duration:0.95,delay:0.15}}
                className="mfg-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold leading-[1.1] mb-5">
                Turn shop floor data into{" "}
                <span className="amber-text">business advantage,</span>{" "}
                not just noise.
              </motion.h1>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.75}} className="mb-5 max-w-lg">
                <Waveform/>
              </motion.div>
              <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.9}}
                className="mfg-display text-white/50 text-sm sm:text-base md:text-lg leading-relaxed font-light border-l-2 border-[#f59e0b]/20 pl-4">
                Modern manufacturing depends on closing the loop between production systems and business decisions — but only when infrastructure can handle the scale and variability.
              </motion.p>
            </div>
          
            <motion.div initial={{opacity:0,scale:0.94,y:20}} animate={{opacity:1,scale:1,y:0}} transition={{duration:1.1,delay:0.28}}>
              <HeroImage/>
            </motion.div>
          </div>
        </motion.div>
      </section>

     
      <section className="py-14 md:py-20 px-5 sm:px-8 md:px-16 lg:px-24 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 bg-[#f59e0b] rotate-45 mfg-dot"/>
            <span className="mfg-mono text-[#f59e0b]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">Common Challenges</span>
            <div className="flex-1 h-px bg-[#f59e0b]/08"/>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {challenges.map((c,i)=>(
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="mfg-card p-6">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="mfg-display font-semibold text-[#f59e0b] text-base mb-2">{c.title}</h3>
                <p className="mfg-display text-white/50 text-sm leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-14 md:py-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#080806]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 bg-[#10b981] rotate-45 mfg-dot"/>
            <span className="mfg-mono text-[#10b981]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">How We Solve It</span>
            <div className="flex-1 h-px bg-[#10b981]/08"/>
          </motion.div>
          <div className="space-y-3">
            {capabilities.map((cap,i)=>(
              <motion.div key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.12}}
                className="mfg-cap py-5 pr-4" style={{borderLeftColor:`${cap.accent}28`}}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 items-start">
                  <span className="mfg-mono text-[10px] tracking-widest border rounded px-2 py-0.5 shrink-0 self-start" style={{color:cap.accent,borderColor:`${cap.accent}30`}}>{cap.tag}</span>
                  <div>
                    <h3 className="mfg-display text-base md:text-lg font-semibold text-white mb-1.5 select-none">{cap.title}</h3>
                    <p className="mfg-display text-white/50 text-sm leading-relaxed select-none">{cap.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-14 md:py-20 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 bg-[#f59e0b] rotate-45 mfg-dot"/>
            <span className="mfg-mono text-[#f59e0b]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">Outcomes</span>
            <div className="flex-1 h-px bg-[#f59e0b]/08"/>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {outcomes.map((o,i)=>(
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.12}}
                className="mfg-card p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px" style={{background:`linear-gradient(90deg,transparent,${o.color}55,transparent)`}}/>
                <div className="mfg-display text-xl md:text-2xl font-bold mb-2" style={{color:o.color}}>{o.value}</div>
                <p className="mfg-display text-white/48 text-sm leading-relaxed">{o.sub}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="mfg-card p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(245,158,11,0.35),transparent)"}}/>
            <p className="mfg-display text-lg md:text-2xl font-semibold text-white/75 leading-snug">
              From reactive maintenance to{" "}
              <span className="amber-text font-bold">predictive intelligence</span>
              {" "}— at production scale.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}