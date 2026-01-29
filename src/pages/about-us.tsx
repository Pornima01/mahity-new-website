import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Hero from '../components/hero';


const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <div ref={ref}>{count}{suffix}</div>;
};


const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-3 md:gap-8 items-start"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* DESKTOP */}
      {index % 2 === 0 ? (
        <>
          {/* Desktop LEFT side for even items */}
          <motion.div 
            className="hidden md:flex flex-1 text-right pr-8 justify-end"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all inline-block max-w-md">
              <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">
                {item.label}
              </span>
              <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>

          {/* Center icon */}
          <div className="relative flex flex-col items-center flex-shrink-0">
            <motion.div 
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center relative z-10 ${
                isInView ? 'bg-primary shadow-[0_0_20px_rgba(255,159,26,0.6)] md:shadow-[0_0_30px_rgba(255,159,26,0.6)]' : 'bg-primary/20'
              } transition-all duration-500`}
              animate={isInView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="material-symbols-outlined text-xl md:text-3xl text-gray-900">{item.icon}</span>
            </motion.div>
          </div>

          {/* Mobile: Content on right - Desktop: Empty space */}
          <motion.div 
            className="flex-1 text-left md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card rounded-xl p-4 border border-primary/20 hover:border-primary/50 transition-all">
              <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">
                {item.label}
              </span>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-white/70 text-xs leading-relaxed">{item.description}</p>
            </div>
          </motion.div>

          
          <div className="hidden md:block flex-1"></div>
        </>
      ) : (
        <>
       
          <div className="hidden md:block flex-1"></div>

          {/* Center icon */}
          <div className="relative flex flex-col items-center flex-shrink-0">
            <motion.div 
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center relative z-10 ${
                isInView ? 'bg-primary shadow-[0_0_20px_rgba(255,159,26,0.6)] md:shadow-[0_0_30px_rgba(255,159,26,0.6)]' : 'bg-primary/20'
              } transition-all duration-500`}
              animate={isInView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="material-symbols-outlined text-xl md:text-3xl text-gray-900">{item.icon}</span>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 text-left pl-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-primary/20 hover:border-primary/50 transition-all md:max-w-md">
              <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">
                {item.label}
              </span>
              <h3 className="text-white font-bold text-base md:text-xl mb-2 md:mb-3">{item.title}</h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timelineData = [
    {
      label: "Foundation",
      title: "The Beginning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "rocket_launch"
    },
    {
      label: "Growth",
      title: "Scaling Excellence",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: "trending_up"
    },
    {
      label: "Innovation",
      title: "Industry Recognition",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: "workspace_premium"
    },
    {
      label: "Leadership",
      title: "Market Leader",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: "emoji_events"
    },
    {
      label: "Future",
      title: "Next Generation",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      icon: "psychology"
    }
  ];

  const values = [
    {
      icon: "bolt",
      title: "Innovation First",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: "verified_user",
      title: "Security Always",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "handshake",
      title: "Customer Success",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: "eco",
      title: "Sustainable Tech",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      color: "from-emerald-500/20 to-green-500/20"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Emily Watson",
      role: "Head of Cloud Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "David Kim",
      role: "Chief Security Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Hero variant="about" />

      {/* Mission Section */}
      <section className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-4">
              Our <span className="hero-gradient-text">Mission</span>
            </h2>
            <p className="text-white/70 text-base md:text-xl max-w-4xl mx-auto leading-relaxed px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </motion.div>

          {/* Stats Grid  */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20"
            variants={{
              initial: {},
              whileInView: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { value: 500, suffix: "+", label: "Enterprise Clients" },
              { value: 99, suffix: ".9%", label: "Uptime SLA" },
              { value: 50, suffix: "+", label: "Cloud Experts" },
              { value: 24, suffix: "/7", label: "Global Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/10 hover:border-primary/50 transition-all text-center group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 md:mb-3">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/60 font-medium text-xs md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      <section className="py-16 md:py-32 px-4 md:px-6 relative" ref={timelineRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-20" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-4">
              Our <span className="hero-gradient-text">Journey</span>
            </h2>
            <p className="text-white/70 text-base md:text-xl max-w-3xl mx-auto px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </motion.div>

          
          <div className="relative">
          
            <svg
              className="absolute left-[18px] md:left-1/2 top-0 md:-translate-x-1/2 h-full w-1"
              style={{ zIndex: 1 }}
            >
              
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100%"
                stroke="rgba(255,159,26,0.2)"
                strokeWidth="2"
              />
             
              <motion.line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100%"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeDasharray="1"
                style={{
                  pathLength: pathLength,
                  filter: "drop-shadow(0 0 10px rgba(255,159,26,0.8))"
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff9f1a" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ff9f1a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00f2ff" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

           
            <div className="space-y-12 md:space-y-24 relative z-10">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-4">
              Our <span className="hero-gradient-text">Values</span>
            </h2>
            <p className="text-white/70 text-base md:text-xl max-w-3xl mx-auto px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
            variants={{
              initial: {},
              whileInView: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl md:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-primary/50 transition-all h-full">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">{value.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-3 md:mb-4">{value.title}</h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-4">
              Meet Our <span className="hero-gradient-text">Leaders</span>
            </h2>
            <p className="text-white/70 text-base md:text-xl max-w-3xl mx-auto px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            variants={{
              initial: {},
              whileInView: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
              
                  <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <a href={member.social.linkedin} className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-white text-sm md:text-base">link</span>
                    </a>
                    <a href={member.social.twitter} className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-white text-sm md:text-base">share</span>
                    </a>
                  </div>
                </div>
                <h3 className="text-white font-bold text-sm md:text-xl mb-1">{member.name}</h3>
                <p className="text-primary text-xs md:text-sm font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-4">
              Why <span className="hero-gradient-text">Choose Us</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            variants={{
              initial: {},
              whileInView: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "speed",
                title: "Lightning Fast",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore."
              },
              {
                icon: "savings",
                title: "Cost Effective",
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              },
              {
                icon: "support_agent",
                title: "24/7 Expert Support",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              },
              {
                icon: "security",
                title: "Enterprise Security",
                description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              },
              {
                icon: "auto_awesome",
                title: "AI-Powered",
                description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem."
              },
              {
                icon: "public",
                title: "Global Scale",
                description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary/50 transition-all group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-primary/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all">
                  <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">{item.icon}</span>
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl mb-2 md:mb-3">{item.title}</h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      <section className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-cyan-500/10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-4">
              Ready to Transform Your <span className="hero-gradient-text">Cloud?</span>
            </h2>
            <p className="text-white/70 text-base md:text-xl mb-8 md:mb-12 px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <motion.button 
                className="group relative bg-primary text-gray-900 px-8 md:px-10 py-4 md:py-5 rounded-lg md:rounded-xl text-base md:text-lg font-bold overflow-hidden shadow-[0_0_40px_rgba(255,159,26,0.5)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Today
                  <span className="material-symbols-outlined text-xl md:text-2xl">arrow_forward</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-primary to-orange-500 bg-[length:200%_100%] group-hover:animate-shimmer"></div>
              </motion.button>
              
              <motion.button 
                className="glass-card px-8 md:px-10 py-4 md:py-5 rounded-lg md:rounded-xl text-base md:text-lg font-bold border border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
                <span className="material-symbols-outlined text-xl md:text-2xl">calendar_today</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;