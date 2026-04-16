import React, { useEffect, useState } from "react";

const GetAudited: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 4,
    }))
  );

  useEffect(() => {
    const fn = (e: MouseEvent) =>
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-6 text-center relative overflow-hidden">
      <style>{`
        @keyframes fadeUp   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer  { 0%{background-position:-250% center} 100%{background-position:250% center} }
        @keyframes ring     { 0%{transform:scale(1);opacity:.55} 100%{transform:scale(2.1);opacity:0} }
        @keyframes scan     { 0%{top:0%;opacity:1} 100%{top:100%;opacity:0} }
        @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes dash     { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:-500} }
        @keyframes glow     { 0%,100%{opacity:.4} 50%{opacity:1} }
        @keyframes twinkle  { 0%,100%{opacity:0;transform:scale(.5)} 50%{opacity:1;transform:scale(1)} }

        .fu1{animation:fadeUp .8s ease-out .05s both}
        .fu2{animation:fadeUp .8s ease-out .2s  both}
        .fu3{animation:fadeUp .8s ease-out .35s both}
        .fu4{animation:fadeUp .8s ease-out .5s  both}
        .fu5{animation:fadeUp .8s ease-out .65s both}

        .shimmer{
          background:linear-gradient(90deg,#ff9f1a 0%,#fff5cc 30%,#ff9f1a 55%,#ffc94d 75%,#ff9f1a 100%);
          background-size:250% auto;
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
          animation:shimmer 4s linear infinite;
        }

        .ring1{animation:ring 2.4s ease-out infinite}
        .ring2{animation:ring 2.4s ease-out .8s infinite}
        .ring3{animation:ring 2.4s ease-out 1.6s infinite}

        .scan-ln{
          position:absolute;left:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent,rgba(255,159,26,.8),transparent);
          animation:scan 2.4s ease-in-out infinite;pointer-events:none;
        }

        .orbit    {animation:spinSlow 18s linear infinite}
        .orbit-rev{animation:spinSlow 12s linear infinite reverse}

        .dash-svg {animation:dash 4s linear infinite}
        .dash-svg2{animation:dash 6s linear infinite reverse}

        .twinkle{animation:twinkle var(--dur) ease-in-out var(--delay) infinite}
        .glow-pulse{animation:glow 2.5s ease-in-out infinite}

        .card-btn{transition:transform .25s ease,filter .25s ease}
        .card-btn:hover{transform:translateY(-3px);filter:brightness(1.12)}
        .card-btn:active{transform:scale(.97)}

        .grid-lines{
          background-image:
            linear-gradient(rgba(255,159,26,.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,159,26,.03) 1px,transparent 1px);
          background-size:56px 56px;
        }
      `}</style>

    
      <div className="fixed inset-0 grid-lines pointer-events-none" />

     
      <div className="fixed inset-0 pointer-events-none hidden sm:block" style={{
        background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,159,26,.06) 0%, transparent 60%)`
      }} />

  
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(255,159,26,.1) 0%,transparent 65%)" }} />
      <div className="fixed bottom-0 left-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(255,159,26,.05) 0%,transparent 70%)" }} />
      <div className="fixed top-1/4 right-0 w-64 h-64 pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(255,159,26,.04) 0%,transparent 70%)" }} />

    
      {particles.map(p => (
        <div key={p.id} className="fixed pointer-events-none rounded-full twinkle"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: `${p.size}px`, height: `${p.size}px`,
            background: "#ff9f1a",
            "--dur": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          } as React.CSSProperties} />
      ))}

      
      <div className="relative z-10 w-full max-w-2xl mx-auto">

       
        <div className="fu1 flex justify-center mb-4">
          <div className="relative flex items-center justify-center" style={{ width: 110, height: 110 }}>

           
            <svg className="absolute inset-0 w-full h-full orbit" viewBox="0 0 110 110" fill="none">
              <circle cx="55" cy="55" r="50" stroke="rgba(255,159,26,0.12)" strokeWidth="1" strokeDasharray="8 6" className="dash-svg" />
            </svg>
            <svg className="absolute inset-0 w-full h-full orbit-rev" viewBox="0 0 110 110" fill="none">
              <circle cx="55" cy="55" r="40" stroke="rgba(255,159,26,0.08)" strokeWidth="1" strokeDasharray="4 8" className="dash-svg2" />
            </svg>

          
            <div className="absolute orbit" style={{ width: 110, height: 110 }}>
              <div className="absolute w-2 h-2 rounded-full bg-[#ff9f1a] glow-pulse"
                style={{ top: 5, left: "50%", transform: "translateX(-50%)", boxShadow: "0 0 8px #ff9f1a" }} />
            </div>

            <div className="absolute w-14 h-14 rounded-full border border-[#ff9f1a]/18 ring1" />
            <div className="absolute w-14 h-14 rounded-full border border-[#ff9f1a]/12 ring2" />
            <div className="absolute w-14 h-14 rounded-full border border-[#ff9f1a]/08 ring3" />

          
            <div className="relative w-14 h-14 rounded-2xl border border-[#ff9f1a]/35 flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg,rgba(255,159,26,.18) 0%,rgba(255,159,26,.04) 100%)",
                boxShadow: "0 0 40px rgba(255,159,26,.25),0 0 80px rgba(255,159,26,.08),inset 0 0 20px rgba(255,159,26,.07)"
              }}>
              <div className="scan-ln" />
             
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#ff9f1a]/60 rounded-tl" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#ff9f1a]/60 rounded-tr" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#ff9f1a]/60 rounded-bl" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#ff9f1a]/60 rounded-br" />
              <span className="material-symbols-outlined text-[#ff9f1a] relative z-10" style={{ fontSize: "26px" }}>manage_search</span>
            </div>

          </div>
        </div>

       
        <div className="fu2 flex justify-center mb-3">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#ff9f1a]/30 bg-[#ff9f1a]/8"
            style={{ backdropFilter: "blur(16px)", boxShadow: "0 0 24px rgba(255,159,26,.12)" }}>
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9f1a] opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-[#ff9f1a]" />
            </span>
            <span className="text-[#ff9f1a] text-xs font-bold uppercase tracking-[.18em]">Coming Soon</span>
          </div>
        </div>

       
        <h1 className="fu3 text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.04] tracking-tight mb-3 px-2">
          Get Your Cloud
          <br />
          <span className="shimmer">Audited</span>
        </h1>

       
        <div className="fu3 flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#ff9f1a]/50" />
          <span className="material-symbols-outlined text-[#ff9f1a]/50 text-sm">auto_awesome</span>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#ff9f1a]/50" />
        </div>

       
        <p className="fu4 text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-5 px-2">
          We're crafting something powerful — a complete cloud audit experience
          to uncover risks, slash costs, and unlock peak performance.
          <span className="block mt-1.5 text-white/35 text-xs">Stay tuned, it's almost here.</span>
        </p>

       
        <div className="fu4 flex flex-wrap justify-center gap-2 mb-5 px-2">
          {[
            { icon: "security",     label: "Risk Assessment"   },
            { icon: "savings",      label: "Cost Optimization" },
            { icon: "verified",     label: "Compliance Audit"  },
            { icon: "speed",        label: "Performance Check" },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.03]"
              style={{ backdropFilter: "blur(8px)" }}>
              <span className="material-symbols-outlined text-[#ff9f1a]/70" style={{ fontSize: "14px" }}>{f.icon}</span>
              <span className="text-white/50 text-xs font-medium">{f.label}</span>
            </div>
          ))}
        </div>

       
        <div className="fu5 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
          <a href="/contact-us"
            className="card-btn w-full sm:w-auto flex items-center justify-center gap-2 bg-[#ff9f1a] text-gray-900 px-6 py-2.5 rounded-xl font-black text-sm"
            style={{ boxShadow: "0 0 32px rgba(255,159,26,.35),0 8px 32px rgba(255,159,26,.2)" }}>
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
            Talk to Our Team
          </a>
          <a href="/"
            className="card-btn w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white/55 border border-white/10 hover:bg-white/5 hover:text-white">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Home
          </a>
        </div>

       
        <div className="fu5 mt-5 flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {[
            { icon: "lock",       text: "Secure & Private" },
            { icon: "bolt",       text: "Fast Turnaround"  },
            { icon: "thumb_up",   text: "Expert Team"      },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-1.5 text-white/25">
              <span className="material-symbols-outlined text-[#ff9f1a]/35" style={{ fontSize: "14px" }}>{t.icon}</span>
              <span className="text-xs">{t.text}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default GetAudited;