import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const challenges = [
  { icon: "📂", title: "Fragmented Records", text: "Patient records remain fragmented across paper and disconnected systems" },
  { icon: "🏥", title: "Siloed Networks", text: "Clinic and hospital networks operate as silos, unable to share critical information" },
  { icon: "🔒", title: "Compliance Friction", text: "Data protection compliance feels like an obstacle rather than a design principle" },
];
const outcomes = [
  { text: "Patient wait times drop when providers spend less time chasing records", icon: "⏳" },
  { text: "Patients get better care when their medical records follow them, not get stuck in silos.", icon: "❤️" },
  { text: "Infrastructure and records are compliance and regulation ready.", icon: "🛡️" },
];
const capabilities = [
  { title: "Modern Data Perimeters", body: "We implement modern data perimeters that keep patient information secure while allowing authorized providers access exactly when needed.", color: "#00d4a8" },
  { title: "Standardized API Integration", body: "Legacy hospital systems are connected through standardized APIs, gradually replacing manual data entry with automated flows.", color: "#00b8d9" },
  { title: "Regulation-Ready Infrastructure", body: "Compliance with data protection regulations is integrated into your IT infrastructure — not patched on top.", color: "#3d8ef0" },
];

function PulseRing({ size = 60, delay = 0 }) {
  return (
    <motion.div className="absolute rounded-full border border-[#00d4a8] pointer-events-none"
      style={{width:size,height:size,marginLeft:-size/2,marginTop:-size/2}}
      animate={{scale:[1,2.2],opacity:[0.35,0]}}
      transition={{duration:3,delay,repeat:Infinity,ease:"easeOut"}}/>
  );
}

function HeartbeatLine() {
  return (
    <svg className="w-full h-8 overflow-visible" viewBox="0 0 800 40" fill="none">
      <motion.path d="M0,20 L160,20 L185,20 L198,3 L211,37 L224,3 L237,37 L248,20 L270,20 L800,20"
        stroke="url(#hbGrad2)" strokeWidth="1.5" fill="none"
        initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}}
        transition={{duration:2.2,ease:"easeInOut"}}/>
      <defs>
        <linearGradient id="hbGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00d4a8" stopOpacity="0"/>
          <stop offset="35%" stopColor="#00d4a8" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#3d8ef0" stopOpacity="0.25"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function OrganicBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.012] bg-[#00d4a8] blur-[140px]"/>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full opacity-[0.01] bg-[#0055aa] blur-[110px]"/>
      <div className="absolute inset-0 opacity-[0.01]" style={{backgroundImage:"radial-gradient(circle, #00d4a8 1px, transparent 1px)",backgroundSize:"32px 32px"}}/>
    </div>
  );
}


function HeroImage() {
  const YOUR_IMAGE_SRC = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80";
  return (
    <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[400px] rounded-2xl overflow-hidden" style={{border:"1px solid rgba(0,212,168,0.18)"}}>
      <img src={YOUR_IMAGE_SRC} alt="Healthcare" className="absolute inset-0 w-full h-full object-cover" style={{filter:"brightness(0.45) saturate(0.65) hue-rotate(10deg)"}}/>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#040c0c]/90 via-[#040c0c]/20 to-transparent"/>
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#00d4a8]/55"/>
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#00d4a8]/55"/>
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00d4a8]" style={{animation:"pulse-teal 2s ease-in-out infinite"}}/>
        <span style={{fontFamily:"'JetBrains Mono',monospace"}} className="text-[#00d4a8]/65 text-[9px] tracking-[0.25em] uppercase">Secure Patient Infrastructure</span>
      </div>
      <div className="absolute bottom-8 right-8 flex items-center justify-center">
        <PulseRing size={50} delay={0}/><PulseRing size={50} delay={1}/><PulseRing size={50} delay={2}/>
        <div className="w-2 h-2 rounded-full bg-[#00d4a8]"/>
      </div>
    </div>
  );
}

export default function HealthcareLifeSciences() {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({target:heroRef,offset:["start start","end start"]});
  const heroY = useTransform(scrollYProgress,[0,1],["0%","25%"]);
  const heroOpacity = useTransform(scrollYProgress,[0,0.8],[1,0]);

  return (
    <div className="min-h-screen bg-[#040c0c] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400&display=swap');
        .hc-display{font-family:'Sora',sans-serif}
        .hc-mono{font-family:'JetBrains Mono',monospace}
        .teal-text{background:linear-gradient(135deg,#00d4a8,#00b8d9,#3d8ef0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .hc-card{background:rgba(0,212,168,0.03);border:1px solid rgba(0,212,168,0.12);border-radius:16px;transition:all 0.3s}
        .hc-card:hover{background:rgba(0,212,168,0.07);border-color:rgba(0,212,168,0.32)}
        @keyframes pulse-teal{0%,100%{opacity:1}50%{opacity:0.35}}
        .pulse-dot{animation:pulse-teal 2s ease-in-out infinite}
      `}</style>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <OrganicBg/>
        <motion.div style={{y:heroY,opacity:heroOpacity}} className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-24 pt-24 pb-14">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00d4a8] pulse-dot"/>
                <span className="hc-mono text-[#00d4a8]/70 text-[10px] md:text-xs tracking-[0.3em] uppercase">Healthcare & Life Sciences</span>
              </motion.div>
              <motion.h1 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:0.2}}
                className="hc-display text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.06] mb-5">
                Protect patient data{" "}<span className="teal-text">without slowing</span>{" "}down care delivery.
              </motion.h1>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}} className="mb-5 max-w-lg">
                <HeartbeatLine/>
              </motion.div>
              <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.9}}
                className="hc-display text-white/52 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                Healthcare infrastructure must comply with data protection laws and support clinical workflows without becoming a barrier to patient outcomes.
              </motion.p>
            </div>
        
            <motion.div initial={{opacity:0,scale:0.94,y:20}} animate={{opacity:1,scale:1,y:0}} transition={{duration:1.1,delay:0.3}}>
              <HeroImage/>
            </motion.div>
          </div>
        </motion.div>
      </section>

      
      <section className="py-14 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-10">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-1 h-6 bg-[#00d4a8] rounded-full"/>
              <span className="hc-mono text-[#00d4a8]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">Common Challenges</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {challenges.map((c,i)=>(
              <motion.div key={i} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="hc-card p-6">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="hc-display font-semibold text-[#00d4a8] mb-2 text-base">{c.title}</h3>
                <p className="hc-display text-white/52 leading-relaxed text-sm font-light">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-14 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#040e0e]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mb-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-[#00b8d9] rounded-full"/>
              <span className="hc-mono text-[#00b8d9]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">How We Solve It</span>
            </div>
          </motion.div>
          <div className="space-y-4">
            {capabilities.map((cap,i)=>(
              <motion.div key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.15}}
                className="hc-card p-5 md:p-7 flex flex-row gap-5 items-start">
                <div className="w-1 min-h-[44px] rounded-full flex-shrink-0 self-stretch mt-1" style={{backgroundColor:cap.color}}/>
                <div>
                  <h3 className="hc-display text-base md:text-xl font-semibold text-white mb-2">{cap.title}</h3>
                  <p className="hc-display text-white/50 leading-relaxed font-light text-sm">{cap.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-14 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mb-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-[#3d8ef0] rounded-full"/>
              <span className="hc-mono text-[#3d8ef0]/55 text-[10px] md:text-xs tracking-[0.4em] uppercase">Outcomes</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {outcomes.map((o,i)=>(
              <motion.div key={i} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.12}}
                className="relative hc-card p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-55" style={{background:"linear-gradient(90deg,#00d4a8,#3d8ef0)"}}/>
                <div className="text-2xl mb-3">{o.icon}</div>
                <p className="hc-display text-white/62 leading-relaxed font-light text-sm">{o.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="hc-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(0,212,168,0.45),transparent)"}}/>
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(61,142,240,0.25),transparent)"}}/>
            <h3 className="hc-display text-lg md:text-2xl lg:text-3xl font-semibold text-white leading-snug">
              Compliance woven into your infrastructure,{" "}<span className="teal-text">not patched on top.</span>
            </h3>
          </motion.div>
        </div>
      </section>
    </div>
  );
}