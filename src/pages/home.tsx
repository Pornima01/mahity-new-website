import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/hero';

// Counter animation component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const HomePage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Hero variant="home" />
      
     

      {/* Stop Guessing Section - Enhanced */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,159,26,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            {...fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-bold uppercase tracking-wider">Free Cloud Audit</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Stop Guessing,<br />
                Start <span className="hero-gradient-text">Scaling</span>
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-sm">check</span>
                  </div>
                  <p className="text-white/70 text-lg">Uncover hidden costs and security gaps</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-sm">check</span>
                  </div>
                  <p className="text-white/70 text-lg">Rapid 30-minute assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-sm">check</span>
                  </div>
                  <p className="text-white/70 text-lg">Actionable recommendations</p>
                </div>
              </div>
              <motion.button 
                className="group relative bg-primary text-gray-900 px-8 py-4 rounded-lg text-base font-bold overflow-hidden shadow-[0_0_30px_rgba(255,159,26,0.4)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Your Free Audit
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary bg-[length:200%_100%] group-hover:animate-shimmer"></div>
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative glass-card rounded-3xl p-2 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Meeting"
                  className="rounded-2xl object-cover w-full h-[400px]"
                />
              
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Platforms - Enhanced with Logos */}
      <section className="py-20 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Multi-Cloud <span className="hero-gradient-text">Expertise</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Certified professionals across all major cloud platforms
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { 
                name: 'Amazon Web Services',
                icon: '☁️',
                color: 'from-orange-500/20 to-yellow-500/20',
                certifications: ['Solutions Architect', 'DevOps Engineer']
              },
              { 
                name: 'Microsoft Azure',
                icon: '🔷',
                color: 'from-blue-500/20 to-cyan-500/20',
                certifications: ['Azure Administrator', 'Solutions Expert']
              },
              { 
                name: 'Google Cloud Platform',
                icon: '🔵',
                color: 'from-green-500/20 to-blue-500/20',
                certifications: ['Cloud Architect', 'Data Engineer']
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                <div className="relative glass-card rounded-2xl p-8 border border-white/10 h-full hover:border-primary/50 transition-all">
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <h3 className="text-white font-bold text-xl mb-4">{platform.name}</h3>
                  <div className="space-y-2">
                    {platform.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="material-symbols-outlined text-primary text-sm">verified</span>
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solve Your Toughest Cloud Challenges - Enhanced */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Solve Your Toughest <span className="hero-gradient-text">Cloud Challenges</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              We tackle the problems that keep you up at night
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                
                title: 'Stop Cloud Overspending',
                problem: 'Cloud bills spiraling out of control with idle resources draining your budget',
                solution: 'AI-powered cost analysis identifies waste and creates optimization roadmap',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
                color: 'from-red-500/20 to-orange-500/20'
              },
              {
               
                title: 'Defend Before Threats Surface',
                problem: 'Hidden vulnerabilities that could be catastrophic to your business',
                solution: 'Comprehensive security audits uncover risks and deliver action plans',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
                color: 'from-blue-500/20 to-purple-500/20'
              },
              {
                
                title: 'Migrate Legacy Without Risk',
                problem: 'Legacy apps stuck on aging infrastructure with migration fears',
                solution: 'Proven strategies move workloads with minimal risk and zero downtime',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
                color: 'from-green-500/20 to-teal-500/20'
              }
            ].map((challenge, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all h-full flex flex-col">
                    <div className="h-52 overflow-hidden relative">
                      <img 
                        src={challenge.image}
                        alt={challenge.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                   
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-4">{challenge.title}</h3>
                      
                      <div className="space-y-4 flex-1">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-red-400 text-sm">error</span>
                            <p className="text-red-400 text-sm font-semibold uppercase tracking-wide">The Pain</p>
                          </div>
                          <p className="text-white/60 text-sm leading-relaxed">{challenge.problem}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                            <p className="text-green-400 text-sm font-semibold uppercase tracking-wide">The Solution</p>
                          </div>
                          <p className="text-white/60 text-sm leading-relaxed">{challenge.solution}</p>
                        </div>
                      </div>

                      <motion.button 
                        className="mt-6 w-full glass-card px-4 py-3 rounded-lg border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack - Enhanced
      <section className="py-24 px-6 bg-gradient-to-b from-[#050505] to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Core <span className="hero-gradient-text">Technology Stack</span>
            </h2>
            <p className="text-white/60 text-lg">Industry-leading tools and platforms</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: 'widgets', name: 'Kubernetes', desc: 'Container orchestration', color: 'text-blue-400' },
              { icon: 'terminal', name: 'RedHat OpenShift', desc: 'Enterprise K8s', color: 'text-red-400' },
              { icon: 'deployed_code', name: 'Docker', desc: 'Containerization', color: 'text-cyan-400' },
              { icon: 'construction', name: 'Terraform', desc: 'Infrastructure as Code', color: 'text-purple-400' },
              { icon: 'settings_suggest', name: 'Ansible', desc: 'Automation', color: 'text-green-400' },
              { icon: 'integration_instructions', name: 'Jenkins', desc: 'CI/CD Pipeline', color: 'text-orange-400' },
              { icon: 'monitor_heart', name: 'Prometheus', desc: 'Monitoring', color: 'text-yellow-400' },
              { icon: 'storage', name: 'PostgreSQL', desc: 'Database', color: 'text-indigo-400' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all text-center h-full flex flex-col items-center justify-center gap-3">
                  <div className={`w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined text-4xl ${tech.color}`}>{tech.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{tech.name}</h3>
                    <p className="text-white/50 text-xs">{tech.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

    

      {/* Cloud Economics - Enhanced */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#050505] to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            {...fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="text-red-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  Critical Alert
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Stop the Bleed:<br />
                Master Your <span className="hero-gradient-text">Cloud Economics</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="glass-card p-4 rounded-xl border border-red-500/30">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-2xl font-bold">87%</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">of cloud spend is wasted</p>
                      <p className="text-white/60 text-sm">Most businesses overspend by 20-30% on idle resources</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-4 rounded-xl border border-green-500/30">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-green-400 text-3xl">savings</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">$1K to $1M+ in savings</p>
                      <p className="text-white/60 text-sm">Our audits spot leaks instantly, giving you back wasted spend</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button 
                className="bg-primary text-gray-900 px-8 py-4 rounded-lg text-base font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,159,26,0.4)] flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Cloud Cost Review
                <span className="material-symbols-outlined">arrow_forward</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-red-500/30 rounded-3xl blur-3xl"></div>
              <div className="relative glass-card rounded-3xl p-2 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="Analytics Dashboard"
                  className="rounded-2xl object-cover w-full h-[450px]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-32 px-6 bg-[#050505] border-t border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <motion.div
              className="inline-block mb-8"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <span className="material-symbols-outlined text-primary text-8xl">rocket_launch</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Cloud Journey<br />
              Starts <span className="hero-gradient-text">Here</span>
            </h2>
            <p className="text-white/70 text-xl mb-12 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their cloud infrastructure.<br />
              <span className="text-primary font-semibold">Book your free audit today.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.button 
                className="group relative bg-primary text-gray-900 px-12 py-6 rounded-xl text-xl font-bold overflow-hidden shadow-[0_0_50px_rgba(255,159,26,0.6)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get Started Today
                  <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-primary to-orange-400 bg-[length:200%_100%] group-hover:animate-shimmer"></div>
              </motion.button>
              
              <motion.button 
                className="glass-card px-12 py-6 rounded-xl text-xl font-bold border border-primary/30 hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Solutions
              </motion.button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: 'security', text: 'SOC 2 Compliant' },
                { icon: 'verified', text: 'ISO Certified' },
                { icon: 'support_agent', text: '24/7 Support' },
                { icon: 'workspace_premium', text: 'Industry Leaders' }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 rounded-xl border border-white/10 hover:border-primary/50 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <span className="material-symbols-outlined text-primary text-3xl mb-2 block">{badge.icon}</span>
                  <p className="text-white/70 text-sm font-semibold">{badge.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;