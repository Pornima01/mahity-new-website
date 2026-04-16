import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type IconName = "arrow"|"warning"|"wrench"|"refresh"|"layers"|"shield"|"lock"|"chart"|"check"|"cloud"|"gear"|"bolt"|"rocket"|"code"|"users"|"cpu"|"globe";
const ICONS: Record<IconName,string|string[]> = {
  arrow:"M5 12h14M12 5l7 7-7 7",
  warning:["M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z","M12 9v4","M12 17h.01"],
  wrench:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  refresh:"M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15",
  layers:["M12 2L2 7l10 5 10-5-10-5z","M2 17l10 5 10-5","M2 12l10 5 10-5"],
  shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  lock:["M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z","M7 11V7a5 5 0 0 1 10 0v4"],
  chart:["M18 20V10","M12 20V4","M6 20v-6"],
  check:["M22 11.08V12a10 10 0 1 1-5.93-9.14","M22 4L12 14.01l-3-3"],
  cloud:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  gear:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.93-3c.04-.33.07-.67.07-1s-.03-.67-.07-1l2.16-1.68a.5.5 0 0 0 .12-.64l-2.05-3.55a.5.5 0 0 0-.61-.22l-2.55 1.03a7.47 7.47 0 0 0-1.73-1L13.9 2.1a.5.5 0 0 0-.49-.43h-2.82a.5.5 0 0 0-.49.43l-.38 2.71a7.47 7.47 0 0 0-1.73 1L6.44 4.78a.5.5 0 0 0-.61.22L3.78 8.55a.49.49 0 0 0 .12.64L6.07 10.8A7.6 7.6 0 0 0 6 12c0 .33.03.67.07 1l-2.17 1.68a.49.49 0 0 0-.12.64l2.05 3.55c.12.22.37.31.61.22l2.55-1.03c.54.39 1.12.72 1.73 1l.38 2.71c.06.25.28.43.49.43h2.82c.21 0 .43-.18.49-.43l.38-2.71a7.47 7.47 0 0 0 1.73-1l2.55 1.03c.24.09.49 0 .61-.22l2.05-3.55a.49.49 0 0 0-.12-.64L18.93 13z",
  bolt:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  rocket:["M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z","M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"],
  code:["M16 18l6-6-6-6","M8 6l-6 6 6 6"],
  users:["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2","M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z","M23 21v-2a4 4 0 0 0-3-3.87","M16 3.13a4 4 0 0 1 0 7.75"],
  cpu:["M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z","M9 9h6v6H9z","M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"],
  globe:["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z","M2 12h20","M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"],
};

const A  = "#84cc16";
const A2 = "#facc15";
const GRID = "rgba(132,204,22,0.22)";

const SvgIcon = ({ name, size=22, color="currentColor" }: { name:IconName; size?:number; color?:string }) => {
  const d = ICONS[name];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      {Array.isArray(d) ? d.map((p,i)=><path key={i} d={p}/>) : <path d={d as string}/>}
    </svg>
  );
};
const IconBadge = ({ name, color=A, size=40 }: { name:IconName; color?:string; size?:number }) => (
  <div className="rounded-full flex items-center justify-center flex-shrink-0"
    style={{ width:size, height:size, background:`${color}22`, border:`1.5px solid ${color}55` }}>
    <SvgIcon name={name} size={Math.round(size*0.46)} color={color}/>
  </div>
);
const GT = ({ children }: { children:React.ReactNode }) => (
  <span className="bg-clip-text text-transparent" style={{ backgroundImage:`linear-gradient(135deg,${A},${A2})` }}>{children}</span>
);
const SL = ({ children }: { children:React.ReactNode }) => (
  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color:A }}>{children}</p>
);
const AnimatedCounter = ({ target, suffix="" }: { target:number; suffix?:string }) => {
  const [count,setCount]=useState(0);
  const ref=useRef<HTMLSpanElement>(null);
  const inView=useInView(ref,{once:true});
  useEffect(()=>{
    if(!inView) return;
    let start=0;
    const tick=(ts:number)=>{ if(!start) start=ts; const p=Math.min((ts-start)/1800,1); setCount(Math.floor((1-Math.pow(1-p,3))*target)); if(p<1) requestAnimationFrame(tick); else setCount(target); };
    requestAnimationFrame(tick);
  },[inView,target]);
  return <span ref={ref}>{count}{suffix}</span>;
};
const Particles = () => {
  const pts = Array.from({length:18},(_,i)=>({id:i,x:Math.random()*100,y:Math.random()*100,s:Math.random()*3+1,d:Math.random()*8+5,dl:Math.random()*4}));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pts.map(p=>(
        <motion.div key={p.id} className="absolute rounded-full"
          style={{ left:`${p.x}%`,top:`${p.y}%`,width:p.s,height:p.s,background:`${A}35` }}
          animate={{ y:[-20,20,-20],opacity:[0.2,0.6,0.2] }}
          transition={{ duration:p.d,delay:p.dl,repeat:Infinity,ease:"easeInOut" }}/>
      ))}
    </div>
  );
};

const SPEND_TEAMS = [
  { team:"Platform",  pct:34, spend:"$12.4k", color:A },
  { team:"Backend",   pct:28, spend:"$10.2k", color:A2 },
  { team:"ML / Data", pct:22, spend:"$8.0k",  color:"#f59e0b" },
  { team:"Frontend",  pct:16, spend:"$5.8k",  color:"#8b5cf6" },
];
const SpendDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref,{once:true});
  const [animate,setAnimate] = useState(false);
  useEffect(()=>{ if(inView) setTimeout(()=>setAnimate(true),300); },[inView]);
  return (
    <div ref={ref} className="space-y-4">
      <div className="flex items-end justify-between mb-2">
        <div>
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Total Monthly Spend</p>
          <motion.p initial={{ opacity:0,y:8 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5,delay:0.3 }}
            className="text-3xl font-black" style={{ color:A }}>$36.4k</motion.p>
        </div>
        <motion.span initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.6 }}
          className="text-xs font-black px-3 py-1 rounded-full"
          style={{ background:"#22c55e20",color:"#22c55e",border:"1px solid #22c55e40" }}>
          ↓ 31% vs last month
        </motion.span>
      </div>
      {SPEND_TEAMS.map((t,i)=>(
        <motion.div key={i} initial={{ opacity:0,x:16 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.4,delay:0.2+i*0.1 }}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-bold text-white/70">{t.team}</span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/40">{t.pct}%</span>
              <span className="text-sm font-black" style={{ color:t.color }}>{t.spend}</span>
            </div>
          </div>
          <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div className="h-full rounded-full"
              initial={{ width:0 }} animate={{ width:animate?`${t.pct}%`:"0%" }}
              transition={{ duration:0.9,delay:0.3+i*0.12,ease:"easeOut" }}
              style={{ background:`linear-gradient(90deg,${t.color},${t.color}99)` }}/>
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity:0,y:8 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.9 }}
        className="mt-4 pt-4 border-t border-white/[0.08] flex items-center gap-3 rounded-xl px-4 py-3"
        style={{ background:"#22c55e08",border:"1px solid #22c55e25" }}>
        <IconBadge name="chart" color="#22c55e" size={32}/>
        <div>
          <p className="text-xs font-black text-white/80">Savings Plan recommendation</p>
          <p className="text-xs text-white/40 mt-0.5">Purchase 1yr compute — save ~$8.2k/mo</p>
        </div>
      </motion.div>
    </div>
  );
};

const STATS = [
  { value:40,  suffix:"%", label:"Average reduction in cloud spend after engagement",  color:A,         icon:"chart" as IconName },
  { value:100, suffix:"%", label:"Cost visibility by team and service from day one",   color:A2,        icon:"users" as IconName },
  { value:3,   suffix:"x", label:"ROI on FinOps tooling within the first quarter",     color:"#f59e0b", icon:"bolt"  as IconName },
];
const CHALLENGES = [
  { icon:"warning" as IconName, color:"#ef4444", label:"Top-Down Mandates Fail",       text:"Cost optimization fails when imposed top-down — developers bypass mandates, so savings never stick." },
  { icon:"chart"   as IconName, color:A,         label:"Bills Arrive With No Context", text:"Cloud bills arrive at the end of the month with no visibility into who spent what or why." },
  { icon:"refresh" as IconName, color:"#f59e0b", label:"Waste Compounds Silently",     text:"Idle resources, oversized instances, and orphaned snapshots accumulate unnoticed until the damage is done." },
];
const DELIVERABLES = [
  { icon:"chart"  as IconName, color:A,         title:"Real-Time Cost Visibility",         desc:"Kubecost or Vantage deployed with spend tagged by team and service — every engineer sees what their choices cost, in real time." },
  { icon:"gear"   as IconName, color:A2,        title:"Automated Rightsizing Policies",    desc:"We identify waste and commitment opportunities, then implement automated rightsizing so savings happen continuously, not just once." },
  { icon:"bolt"   as IconName, color:"#f59e0b", title:"Strategic Savings Plan Purchases",  desc:"Savings Plans and Reserved Instances purchased based on actual usage patterns — not guesswork — to maximise commitment discounts safely." },
  { icon:"users"  as IconName, color:"#8b5cf6", title:"Weekly FinOps Reviews",             desc:"Showback reports make cost visible and actionable for every team. Engineers understand and own the cost impact of their choices." },
];
const OUTCOMES = [
  { icon:"chart"   as IconName, color:A,         text:"20–40% reduction in cloud spend — sustained, not a one-time fix." },
  { icon:"refresh" as IconName, color:A2,        text:"Monthly bills become predictable and no longer surprise your finance team." },
  { icon:"users"   as IconName, color:"#f59e0b", text:"Engineers understand and own the cost impact of their architectural choices." },
];

export default function FinOps() {
  const [hovered,setHovered]=useState<number|null>(null);
  return (
    <div className="min-h-screen bg-[#050505] pt-10 overflow-x-hidden">
      <section className="relative min-h-[100svh] flex items-center py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage:`linear-gradient(${GRID} 1px,transparent 1px),linear-gradient(90deg,${GRID} 1px,transparent 1px)`, backgroundSize:"80px 80px" }}/>
        <Particles/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none" style={{ background:`radial-gradient(ellipse,${A}10 0%,transparent 65%)` }}/>
        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border hidden lg:block" style={{ borderColor:`${A}20` }}/>
        <div className="absolute right-[-70px]  top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border hidden lg:block" style={{ borderColor:`${A}12` }}/>
        <div className="relative max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.4 }}
                className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-white/50 mb-6 sm:mb-8">
                <a href="/" className="hover:text-white/80 transition-colors">Home</a>
                <SvgIcon name="arrow" size={12}/>
                <span style={{ color:A }}>FinOps &amp; Cost Optimization</span>
              </motion.div>
              <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5,delay:0.05 }} className="mb-7">
                <span className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest"
                  style={{ background:`${A}18`, border:`1px solid ${A}45`, color:A }}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background:A }}/>
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background:A }}/>
                  </span>
                  Solution Deep-Dive
                </span>
              </motion.div>

             
              <div className="mb-7 text-3xl sm:text-5xl md:text-6xl font-black leading-[1.04] tracking-tight text-white">
                {["Cloud","cost","is","a"].map((w,i)=>(
                  <motion.span key={i} initial={{ opacity:0,y:28 }} animate={{ opacity:1,y:0 }}
                    transition={{ duration:0.5,delay:0.12+i*0.07 }} className="inline-block mr-[0.25em]">{w}</motion.span>
                ))}
                <br/>
                {["function","of"].map((w,i)=>(
                  <motion.span key={i} initial={{ opacity:0,y:28 }} animate={{ opacity:1,y:0 }}
                    transition={{ duration:0.5,delay:0.42+i*0.07 }} className="inline-block mr-[0.25em]">{w}</motion.span>
                ))}
                <br/>
                {["overall","infrastructure"].map((w,i)=>(
                  <motion.span key={i} initial={{ opacity:0,y:28 }} animate={{ opacity:1,y:0 }}
                    transition={{ duration:0.5,delay:0.42+i*0.07 }} className="inline-block mr-[0.25em]">{w}</motion.span>
                ))}
                <br/>
                <motion.span initial={{ opacity:0,y:28 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5,delay:0.58 }}
                  className="inline-block mr-[0.25em]"><GT>architecture,</GT></motion.span>
                <br/>
                <motion.span initial={{ opacity:0,y:28 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5,delay:0.68 }}
                  className="inline-block text-white/35 text-2xl sm:text-3xl md:text-4xl font-black">not just usage.</motion.span>
              </div>

              <motion.p initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6,delay:0.78 }}
                className="text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10">
                Real savings come from rightsizing, eliminating waste, and using commitment discounts intelligently —
                but only if <span className="text-white/80 font-semibold">developers remain in control</span>.
              </motion.p>
              <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6,delay:0.9 }}
                className="flex flex-col sm:flex-row gap-3">
                <motion.a href="/contact-us" whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 font-bold rounded-lg text-black text-sm sm:text-base whitespace-nowrap"
                  style={{ background:`linear-gradient(135deg,${A},${A2})`, boxShadow:`0 0 30px ${A}45` }}>
                  Book a Free Cost Review <SvgIcon name="arrow" size={16} color="currentColor"/>
                </motion.a>
                <motion.a href="/solutions" whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/[0.05] hover:bg-white/[0.09] text-white font-bold rounded-lg border border-white/[0.15] transition-all text-sm sm:text-base">
                  All Solutions
                </motion.a>
              </motion.div>
            </div>
            <motion.div initial={{ opacity:0,x:40 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.7,delay:0.5 }}
              className="p-4 sm:p-6 rounded-3xl border w-full mt-6 lg:mt-0"
              style={{ borderColor:`${A}25`, background:"rgba(10,10,12,0.70)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-6 text-center" style={{ color:A }}>Live Spend Visibility — by Team</p>
              <SpendDashboard/>
              <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/[0.08]">
                {[{label:"Showback",color:A},{label:"Rightsizing",color:A2},{label:"Savings Plans",color:"#f59e0b"}].map((p,i)=>(
                  <motion.div key={i} initial={{ opacity:0,y:8 }} animate={{ opacity:1,y:0 }} transition={{ delay:1+i*0.1 }}
                    className="rounded-xl border px-2 py-2 text-center text-xs font-bold"
                    style={{ borderColor:`${p.color}40`, background:`${p.color}12`, color:p.color }}>{p.label}</motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"/>
      </section>

      <section className="py-10 sm:py-14 px-4 sm:px-6 border-t border-b border-white/[0.08]" style={{ background:`linear-gradient(135deg,${A}05,${A2}03)` }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {STATS.map((s,i)=>(
            <motion.div key={i} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.12 }}
              className="text-center p-6 sm:p-8 rounded-2xl border relative overflow-hidden group" style={{ borderColor:`${s.color}25`, background:`${s.color}08` }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background:`radial-gradient(ellipse at center,${s.color}18,transparent 70%)` }}/>
              <div className="relative z-10">
                <div className="flex justify-center mb-4"><IconBadge name={s.icon} color={s.color} size={46}/></div>
                <div className="text-4xl sm:text-5xl font-black mb-3" style={{ color:s.color }}><AnimatedCounter target={s.value} suffix={s.suffix}/></div>
                <p className="text-white/50 text-sm leading-relaxed">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="mb-14">
            <SL>Sound familiar?</SL>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">Why cost programmes <GT>don't stick</GT></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CHALLENGES.map((c,i)=>(
              <motion.div key={i} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
                transition={{ duration:0.5,delay:i*0.12 }} whileHover={{ y:-6 }}
                className="relative overflow-hidden rounded-2xl border p-5 sm:p-7 group cursor-default"
                style={{ borderColor:`${c.color}30`, background:`${c.color}09` }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background:`linear-gradient(90deg,transparent,${c.color},transparent)` }}/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background:`radial-gradient(ellipse at top left,${c.color}18,transparent 65%)` }}/>
                <div className="relative z-10">
                  <div className="mb-5"><IconBadge name={c.icon} color={c.color} size={50}/></div>
                  <p className="text-base font-black mb-3" style={{ color:c.color }}>{c.label}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 border-t border-white/[0.08]" style={{ background:`linear-gradient(180deg,#050505,${A}05,#050505)` }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="mb-14">
            <SL>Our Approach</SL>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-6">What you <GT>walk away with</GT></h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-3xl pl-5" style={{ borderLeft:`2px solid ${A}45` }}>
              We deploy real-time cost visibility tools with spend tagged by team and service, identify waste and commitment opportunities, then implement automated rightsizing policies and purchase Savings Plans strategically. Weekly FinOps reviews make cost visible and actionable for everyone.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DELIVERABLES.map((item,i)=>(
              <motion.div key={i} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
                transition={{ duration:0.5,delay:i*0.1 }}
                onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} whileHover={{ y:-6 }}
                className="relative overflow-hidden rounded-2xl border p-5 sm:p-7 transition-all duration-300"
                style={{ borderColor:hovered===i?`${item.color}55`:"rgba(255,255,255,0.09)", background:hovered===i?`${item.color}0d`:"rgba(255,255,255,0.025)" }}>
                <motion.div className="absolute top-0 left-0 right-0 h-px" animate={{ opacity:hovered===i?1:0 }} style={{ background:`linear-gradient(90deg,transparent,${item.color},transparent)` }}/>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-[0.07]" style={{ background:item.color }}/>
                <div className="flex items-start gap-5 relative z-10">
                  <motion.div animate={{ scale:hovered===i?1.1:1,rotate:hovered===i?4:0 }} transition={{ duration:0.3 }}>
                    <IconBadge name={item.icon} color={item.color} size={46}/>
                  </motion.div>
                  <div>
                    <h3 className="text-white font-black text-lg mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="mb-12">
            <SL>The Outcome You Own</SL>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">Bills you can <GT>predict and explain.</GT></h2>
          </motion.div>
          <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-16">
            {OUTCOMES.map((o,i)=>(
              <motion.div key={i} initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}
                transition={{ duration:0.5,delay:i*0.12 }} whileHover={{ x:6 }}
                className="flex items-center gap-5 rounded-2xl border border-white/[0.09] bg-white/[0.02] px-4 sm:px-7 py-4 sm:py-5 group transition-all duration-300"
                onMouseEnter={e=>(e.currentTarget.style.borderColor=`${A}35`)}
                onMouseLeave={e=>(e.currentTarget.style.borderColor="rgba(255,255,255,0.09)")}>
                <div className="flex-shrink-0"><IconBadge name={o.icon} color={o.color} size={48}/></div>
                <p className="text-white/75 text-base md:text-lg font-medium leading-relaxed group-hover:text-white transition-colors">{o.text}</p>
                <div className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"><SvgIcon name="arrow" size={18} color={o.color}/></div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            className="relative overflow-hidden rounded-3xl border p-8 sm:p-12 md:p-16 text-center"
            style={{ borderColor:`${A}28`, background:`linear-gradient(135deg,${A}0b,${A2}06)` }}>
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background:`${A}10` }}/>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background:`${A2}08` }}/>
            <motion.div animate={{ y:[-5,5,-5] }} transition={{ duration:4,repeat:Infinity,ease:"easeInOut" }} className="inline-block mb-8">
              <IconBadge name="chart" color={A} size={72}/>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-5 relative z-10">
              Spend less.<br/><GT>Ship more. Stay in control.</GT>
            </h2>
            <p className="text-white/55 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-md mx-auto relative z-10 leading-relaxed">
              Stop reacting to surprise bills. Let's build cost visibility and governance your engineers actually trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.a href="/contact-us" whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 font-bold rounded-lg text-black"
                style={{ background:`linear-gradient(135deg,${A},${A2})`, boxShadow:`0 0 40px ${A}45` }}>
                Start the Conversation <SvgIcon name="arrow" size={18} color="currentColor"/>
              </motion.a>
              <motion.a href="/solutions" whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-white/[0.05] hover:bg-white/10 text-white font-bold rounded-lg border border-white/15 transition-all">
                Explore Other Solutions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}