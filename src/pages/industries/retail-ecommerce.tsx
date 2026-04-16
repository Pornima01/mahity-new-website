import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const challenges = [
  { icon: "📈", tag: "Scale", text: "Black Friday and flash sales expose scaling limits" },
  { icon: "📦", tag: "Inventory", text: "Inventory data drifts across order, warehouse, and store systems" },
  { icon: "🛒", tag: "Experience", text: "Customer experience suffers when the cart slows down" },
];
const capabilities = [
  { tag: "Auto-Scale", title: "Surge-Proof Architecture", body: "We implement auto-scaling architectures that spin up capacity during demand surges and spin down when traffic normalises — no manual intervention, no over-provisioning costs.", accent: "#ff6b2b" },
  { tag: "Event-Driven", title: "Real-Time Inventory Sync", body: "Inventory systems are synchronised through event-driven patterns so every channel sees the same stock in real time.", accent: "#ff2d78" },
  { tag: "SLO-Driven", title: "Customer-Focused Performance", body: "Performance budgets and SLOs keep teams focused on what matters to the customer — speed, reliability, accuracy.", accent: "#ffaa00" },
];
const outcomes = [
  { metric: "10×", label: "Traffic spike — site stays fast", color: "#ff6b2b" },
  { metric: "~100%", label: "Inventory accuracy across all channels", color: "#ff2d78" },
  { metric: "😴", label: "Engineering sleeps through crunch time", color: "#ffaa00" },
];

function TrafficCounter() {
  const [count, setCount] = useState(12480);
  useEffect(() => {
    const iv = setInterval(() => setCount(c => c + Math.floor(Math.random() * 12 + 4)), 1800);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="inline-flex items-baseline gap-1.5">
      <motion.span key={count} initial={{y:-8,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,ease:"easeOut"}}
        className="re-mono text-[#ff6b2b] text-lg md:text-2xl font-bold tabular-nums">{count.toLocaleString()}</motion.span>
      <span className="re-mono text-white/30 text-xs tracking-widest">req/s</span>
    </div>
  );
}

function SpeedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[0,1,2,3,4].map(i=>(
        <motion.div key={i} className="absolute h-px"
          style={{top:`${14+i*16}%`,left:0,right:0,background:`linear-gradient(90deg,transparent,rgba(255,107,43,${0.007+i*0.002}),transparent)`}}
          animate={{x:["-100%","100%"]}} transition={{duration:6+i*1.2,delay:i*0.8,repeat:Infinity,ease:"linear"}}/>
      ))}
    </div>
  );
}

function ElectricBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.012] bg-[#ff6b2b] blur-[130px]"/>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] opacity-[0.008] bg-[#ff2d78] blur-[100px]"/>
      <div className="absolute inset-0 opacity-[0.004]" style={{backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,107,43,0.6) 39px,rgba(255,107,43,0.6) 40px)"}}/>
    </div>
  );
}

function BarChart() {
  const heights = [12,18,10,22,16,8,20,14,24,10,18,16];
  return (
    <div className="flex items-end gap-0.5 h-6">
      {heights.map((h,i)=>(
        <motion.div key={i} className="rounded-sm bg-[#ff6b2b]"
          animate={{height:[`${h}px`,`${h+8}px`,`${h}px`]}}
          transition={{duration:3.5,delay:i*0.25,repeat:Infinity,ease:"easeInOut"}}
          style={{minWidth:"3px",width:"3px"}}/>
      ))}
    </div>
  );
}


function HeroImage() {
  const YOUR_IMAGE_SRC = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80";
  return (
    <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[400px] rounded-2xl overflow-hidden" style={{border:"1px solid rgba(255,107,43,0.22)"}}>
      <img src={YOUR_IMAGE_SRC} alt="Retail" className="absolute inset-0 w-full h-full object-cover" style={{filter:"brightness(0.45) saturate(0.7)"}}/>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#060404]/90 via-[#060404]/20 to-transparent"/>
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#ff6b2b]/60"/>
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#ff6b2b]/60"/>
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b2b]" style={{animation:"blink 1s step-end infinite"}}/>
        <span style={{fontFamily:"'Space Mono',monospace"}} className="text-[#ff6b2b]/65 text-[9px] tracking-[0.25em] uppercase">Elastic Scale Platform</span>
      </div>
    </div>
  );
}

export default function RetailEcommerce() {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({target:heroRef,offset:["start start","end start"]});
  const heroY = useTransform(scrollYProgress,[0,1],["0%","28%"]);
  const heroOpacity = useTransform(scrollYProgress,[0,0.75],[1,0]);

  return (
    <div className="min-h-screen bg-[#060404] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700;800&family=Space+Mono:wght@400;700&display=swap');
        .re-display{font-family:'Space Grotesk',sans-serif}
        .re-mono{font-family:'Space Mono',monospace}
        .orange-text{background:linear-gradient(90deg,#ff6b2b,#ff2d78);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .re-card{background:rgba(255,107,43,0.03);border:1px solid rgba(255,107,43,0.15);border-radius:14px;transition:all 0.3s}
        .re-card:hover{background:rgba(255,107,43,0.07);border-color:rgba(255,107,43,0.38)}
        @keyframes blink{0%,100%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}}
        .blink{animation:blink 1s step-end infinite}
      `}</style>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <ElectricBg/><SpeedLines/>
        <motion.div style={{y:heroY,opacity:heroOpacity}} className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-24 pt-24 pb-14">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div>
              <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="inline-flex items-center gap-2 border border-[#ff6b2b]/28 rounded-full px-3 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b2b] blink"/>
                <span className="re-mono text-[#ff6b2b]/75 text-[10px] md:text-xs tracking-[0.3em] uppercase">Retail & E‑commerce</span>
              </motion.div>
              <motion.h1 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.15}}
                className="re-display text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-extrabold leading-[0.97] mb-5">
                Peak traffic{" "}<span className="orange-text">shouldn't</span>{" "}require peak anxiety.
              </motion.h1>
              <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.6}} className="flex items-center gap-4 mb-5 py-3 border-y border-[#ff6b2b]/14">
                <span className="re-mono text-white/28 text-[10px] tracking-widest uppercase hidden sm:block">Live</span>
                <TrafficCounter/><BarChart/>
              </motion.div>
              <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.7}}
                className="re-display text-white/52 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                Retail infrastructure either scales with your flash sales or becomes their biggest bottleneck. We build platforms that treat traffic spikes as routine, not emergencies.
              </motion.p>
            </div>
            
            <motion.div initial={{opacity:0,scale:0.94,y:20}} animate={{opacity:1,scale:1,y:0}} transition={{duration:1.1,delay:0.28}}>
              <HeroImage/>
            </motion.div>
          </div>
        </motion.div>
      </section>

     
      <section className="py-14 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-[#ff6b2b]"/>
            <span className="re-mono text-[#ff6b2b]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">Common Challenges</span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {challenges.map((c,i)=>(
              <motion.div key={i} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="re-card p-5 md:p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{c.icon}</span>
                  <span className="re-mono text-[#ff6b2b]/38 text-[9px] tracking-widest border border-[#ff6b2b]/18 rounded px-2 py-0.5">{c.tag}</span>
                </div>
                <p className="re-display text-white/62 leading-relaxed text-sm">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-14 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#080404]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-[#ff2d78]"/>
            <span className="re-mono text-[#ff2d78]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">How We Solve It</span>
          </motion.div>
          <div className="space-y-4">
            {capabilities.map((cap,i)=>(
              <motion.div key={i} initial={{opacity:0,x:-28}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.15}}
                className="re-card p-5 md:p-7 relative overflow-hidden">
                
                <span className="absolute top-4 right-5 re-mono font-black select-none pointer-events-none"
                  style={{color:cap.accent,opacity:0.08,fontSize:"3.5rem",lineHeight:1}}>{String(i+1).padStart(2,"0")}</span>
                
                <span className="re-mono text-[10px] tracking-widest border rounded px-2 py-0.5 inline-block mb-3"
                  style={{color:cap.accent,borderColor:`${cap.accent}35`,background:`${cap.accent}0a`}}>{cap.tag}</span>
                <h3 className="re-display text-base md:text-xl font-bold text-white mb-2">{cap.title}</h3>
                <p className="re-display text-white/50 leading-relaxed font-light text-sm select-none">{cap.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-14 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-[#ffaa00]"/>
            <span className="re-mono text-[#ffaa00]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">Outcomes</span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {outcomes.map((o,i)=>(
              <motion.div key={i} initial={{opacity:0,scale:0.94}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.12}} className="re-card p-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{background:`linear-gradient(90deg,transparent,${o.color},transparent)`}}/>
                <div className="re-display text-3xl md:text-5xl font-extrabold mb-3" style={{color:o.color}}>{o.metric}</div>
                <p className="re-display text-white/52 text-sm leading-relaxed">{o.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="relative overflow-hidden rounded-2xl border border-[#ff6b2b]/22 p-7 md:p-12 text-center"
            style={{background:"linear-gradient(135deg,rgba(255,107,43,0.05),rgba(255,45,120,0.04))"}}>
            <SpeedLines/>
            <h3 className="re-display text-xl md:text-3xl font-extrabold text-white relative z-10">
              Your site stays fast when traffic spikes{" "}<span className="orange-text">10×</span>
            </h3>
            <p className="re-display text-white/38 mt-3 relative z-10 text-sm">Engineering sleeps through what used to be "crunch time".</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}