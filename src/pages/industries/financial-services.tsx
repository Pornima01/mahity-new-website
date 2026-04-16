import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const challenges = [
  { icon: "⚖️", text: "Regulatory requirements slow down every change" },
  { icon: "🏛️", text: "Legacy core systems resist modernisation efforts" },
  { icon: "📋", text: "Audit preparation consumes weeks of engineering time" },
];
const outcomes = [
  { stat: "Weeks → Hours", label: "Audit cycles shrink", icon: "⏱️" },
  { stat: "Days not Quarters", label: "New services launch in", icon: "🚀" },
  { stat: "Evidence", label: "Regulators see compliance, not promises", icon: "✅" },
];
const capabilities = [
  { title: "Policy-as-Code Controls", body: "We map regulatory mandates like PCI, SOX, or GDPR to policy-as-code controls that validate every deployment before it reaches production." },
  { title: "Strangler Pattern Migration", body: "Core systems are wrapped with modern APIs. Strangler patterns gradually replace or augment legacy workloads without rip-and-replace risk." },
  { title: "Immutable Audit Trails", body: "Every change leaves an immutable audit trail, and environments auto-remediate to remain compliant — always." },
];

function CircuitBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.008] rounded-full bg-[#f0c040] blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-[0.006] rounded-full bg-[#c8860a] blur-[120px]" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.01]" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="20%" x2="30%" y2="10%" stroke="#f0c040" strokeWidth="0.5"/>
        <line x1="30%" y1="10%" x2="55%" y2="25%" stroke="#f0c040" strokeWidth="0.5"/>
        <line x1="55%" y1="25%" x2="75%" y2="15%" stroke="#f0c040" strokeWidth="0.5"/>
        <line x1="75%" y1="15%" x2="90%" y2="35%" stroke="#f0c040" strokeWidth="0.5"/>
        <line x1="20%" y1="60%" x2="40%" y2="75%" stroke="#f0c040" strokeWidth="0.5"/>
        <line x1="30%" y1="10%" x2="20%" y2="60%" stroke="#f0c040" strokeWidth="0.5"/>
        {[["10%","20%"],["30%","10%"],["55%","25%"],["75%","15%"],["90%","35%"],["20%","60%"],["65%","55%"],["85%","70%"]].map(([cx,cy],i)=>(
          <g key={i}><circle cx={cx} cy={cy} r="4" fill="none" stroke="#f0c040" strokeWidth="0.8"/><circle cx={cx} cy={cy} r="1.5" fill="#f0c040"/></g>
        ))}
      </svg>
    </div>
  );
}

function GoldLine() {
  return (
    <motion.div initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true}}
      transition={{duration:1.1,ease:[0.22,1,0.36,1]}} style={{originX:0}}
      className="h-px bg-gradient-to-r from-[#f0c040] via-[#b8972e] to-transparent"/>
  );
}


function HeroImage() {
  const YOUR_IMAGE_SRC = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80";
  return (
    <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[400px] rounded-2xl overflow-hidden border border-[#f0c040]/20">
      <img src={YOUR_IMAGE_SRC} alt="Financial Services" className="absolute inset-0 w-full h-full object-cover" style={{filter:"brightness(0.5) saturate(0.6)"}}/>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/85 via-transparent to-[#f0c040]/05"/>
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#f0c040]/60"/>
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#f0c040]/30"/>
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#f0c040]/30"/>
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#f0c040]/60"/>
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#f0c040]"/>
        <span style={{fontFamily:"'DM Mono',monospace"}} className="text-[#f0c040]/65 text-[9px] tracking-[0.25em] uppercase">Enterprise Infrastructure</span>
      </div>
    </div>
  );
}

export default function FinancialServices() {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({target:heroRef,offset:["start start","end start"]});
  const heroY = useTransform(scrollYProgress,[0,1],["0%","28%"]);
  const heroOpacity = useTransform(scrollYProgress,[0,0.75],[1,0]);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');
        .fs-display{font-family:'Playfair Display',serif}
        .fs-mono{font-family:'DM Mono',monospace}
        .fs-body{font-family:'DM Sans',sans-serif}
        .gold-text{background:linear-gradient(135deg,#b8972e 0%,#f0c040 50%,#d4a843 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .vault-card{border:1px solid rgba(240,192,64,0.18);background:rgba(240,192,64,0.02);border-radius:14px;transition:all 0.35s ease}
        .vault-card:hover{border-color:rgba(240,192,64,0.45);background:rgba(240,192,64,0.05)}
        .cap-row{border-left:2px solid rgba(240,192,64,0.12);padding-left:1.25rem;transition:border-color 0.3s,background 0.3s;border-radius:0 12px 12px 0;user-select:none}
        .cap-row:hover{border-left-color:rgba(240,192,64,0.65);background:rgba(240,192,64,0.035)}
      `}</style>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <CircuitBg/>
        <motion.div style={{y:heroY,opacity:heroOpacity}} className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-24 pt-24 pb-14">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div>
              <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#f0c040]"/>
                <span className="fs-mono text-[#f0c040] text-[10px] md:text-xs tracking-[0.4em] uppercase">Financial Services</span>
              </motion.div>
              <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.95,delay:0.15}}
                className="fs-display text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.05] mb-5">
                Compliance as code,{" "}<span className="gold-text">resilience</span>{" "}by design,{" "}
                <em className="not-italic text-white/35">innovation</em>{" "}at speed.
              </motion.h1>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.55}} className="mb-5"><GoldLine/></motion.div>
              <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.7}}
                className="fs-body text-white/58 text-sm sm:text-base md:text-lg leading-relaxed">
                In financial services, you can't trade stability for velocity. You need infrastructure that delivers both — with audit trails built in, not bolted on.
              </motion.p>
            </div>
            
            <motion.div initial={{opacity:0,scale:0.94,y:20}} animate={{opacity:1,scale:1,y:0}} transition={{duration:1.1,delay:0.25}}>
              <HeroImage/>
            </motion.div>
          </div>
        </motion.div>
      </section>

    
      <section className="py-14 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-10">
            <span className="fs-mono text-[#f0c040]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-3">Common Challenges</span>
            <GoldLine/>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {challenges.map((c,i)=>(
              <motion.div key={i} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="vault-card p-6 group">
                <div className="text-3xl mb-4">{c.icon}</div>
                <p className="fs-body text-white/65 text-sm leading-relaxed">{c.text}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-[#f0c040]/0 via-[#f0c040]/22 to-[#f0c040]/0 group-hover:via-[#f0c040]/55 transition-all duration-500"/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mb-10">
            <span className="fs-mono text-[#f0c040]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-3">How We Solve It</span>
            <GoldLine/>
          </motion.div>
          <div className="space-y-4">
            {capabilities.map((cap,i)=>(
              <motion.div key={i} initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.15}} className="cap-row py-5">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 items-start">
                  <span className="fs-mono text-[#f0c040]/18 text-3xl md:text-5xl font-black leading-none select-none shrink-0">{String(i+1).padStart(2,"0")}</span>
                  <div>
                    <h3 className="fs-display text-lg md:text-2xl font-bold text-white mb-2 select-none">{cap.title}</h3>
                    <p className="fs-body text-white/50 leading-relaxed text-sm md:text-base select-none">{cap.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-14 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mb-10">
            <span className="fs-mono text-[#f0c040]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-3">Outcomes</span>
            <GoldLine/>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {outcomes.map((o,i)=>(
              <motion.div key={i} initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.12}} className="relative vault-card p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0c040]/50 to-transparent"/>
                <div className="text-3xl mb-3">{o.icon}</div>
                <div className="fs-display text-xl md:text-2xl font-black gold-text mb-1">{o.stat}</div>
                <p className="fs-body text-white/48 text-xs md:text-sm">{o.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative vault-card p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0c040]/40 to-transparent"/>
            <span className="absolute top-2 left-4 fs-display text-[5rem] leading-none text-[#f0c040]/05 select-none font-black">"</span>
            <p className="fs-display text-lg md:text-2xl lg:text-3xl text-white/72 italic relative z-10 text-center">
              Your regulators see{" "}<span className="gold-text not-italic font-black">evidence</span>{" "}of compliance, not promises of it.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}