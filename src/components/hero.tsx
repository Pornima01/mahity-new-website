
import React from 'react';

interface HeroProps {
  variant?: 'home' | 'solutions' | 'about' | 'platforms' | 'resources';
}

const Hero: React.FC<HeroProps> = ({ variant = 'home' }) => {
  const content = {
    home: {
      title: <>Mahity has you covered across all your cloud <span className="hero-gradient-text">Migration and Modernization</span> needs.</>,
      description: "Move from on‑prem, or legacy cloud to AWS, Azure, or GCP with minimal risk and predictable timelines.",
      cta: "Talk to a Cloud Migration Expert",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
     
    },
    solutions: {
      title: <>The Anywhere <span className="text-gradient-cyan hero-gradient-text">Office</span>: Secure Virtualization & Seamless Collaboration.</>,
      description: "Empower your distributed team with enterprise-grade desktop virtualization, high-security workspace management, and optimized marketing tools.",
      cta: "Explore Solutions",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      icon: "hub"
    },
    about: {
      title: <>The <span className="hero-gradient-text">Architects</span> of Scale.</>,
      description: "Engineering high-fidelity cloud environments for modern enterprises. We don't just migrate; we build digital fortresses designed for unmatched precision.",
      cta: "Our Story",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
      icon: "cloud"
    },
    platforms: {
      title: <>Enterprise-Grade <span className="hero-gradient-text">Cloud Platforms</span> Built for Scale.</>,
      description: "Certified expertise across AWS, Google Cloud, and Microsoft Azure. We architect solutions that leverage the unique strengths of each platform while maintaining vendor flexibility.",
      cta: "Compare Platforms",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      icon: "dns"
    },
    resources: {
      title: <>Insights & <span className="hero-gradient-text">Knowledge</span> for Cloud Leaders.</>,
      description: "Deep-dive whitepapers, architectural guides, and thought leadership from our team of cloud architects. Stay ahead with proven strategies and emerging best practices.",
      cta: "Browse Resources",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      icon: "library_books"
    }
  };

  const current = content[variant];

  return (
   <section className="relative min-h-[85vh] bg-[#050505] flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 blueprint-overlay pointer-events-none opacity-40"></div>
      
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark"></div>
        <img 
          src={current.image} 
          className="w-full h-full object-cover grayscale brightness-[0.4]"
          alt="Hero Background"
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] tracking-tight max-w-4xl">
            {current.title}
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl font-normal leading-relaxed">
            {current.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-background-dark px-8 py-4 rounded-lg text-base font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,159,26,0.3)]">
              {current.cta}
            </button>
            {variant === 'home' && (
              <button className="glass-card px-8 py-4 rounded-lg text-base font-bold hover:bg-white/10 transition-colors">
                View Cloud Solutions
              </button>
            )}
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-accent/20 to-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="w-full h-full glass-card rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden relative group">
              <img 
                src={current.image} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                alt="Architecture"
              />
              <div className="relative text-cyan-accent z-10 scale-125 transform transition-transform duration-700">
                
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3 glass-card px-4 py-2 rounded-full border border-white/10">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-primary">Secure Node Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;