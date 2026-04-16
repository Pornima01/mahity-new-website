import React from "react";
import { motion } from "framer-motion";

const CloudInfrastructurePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
     
      <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-[#050505] pt-20">
      
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
            alt="Cloud Infrastructure"
            className="w-full h-full object-cover object-center brightness-[0.25]"
          />
        </div>

        
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]/80"></div>

        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-blue-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                </span>
                Cloud Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-white"
            >
              Reduce Analysis Paralysis.{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Own Your Infrastructure.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              Clearly categorize your expertise and build cloud architectures that scale with your business.
              From migration to modernization, we provide battle-tested patterns and hands-on guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black text-base font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Your Transformation
              </button>
              <button className="px-8 py-4 bg-slate-900/50 hover:bg-slate-800/70 backdrop-blur-sm text-white text-base font-bold rounded-lg border-2 border-amber-400/60 hover:border-amber-300 transition-all duration-200">
                Schedule Consultation
              </button>
            </motion.div>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10"></div>
      </section>

      
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Cloud Services</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto">
              Comprehensive solutions covering every stage of your cloud journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Migration & Modernization", description: "Seamlessly migrate legacy applications to cloud-native architectures with zero downtime", icon: "🚀" },
              { title: "Multi-Cloud Management", description: "Unified management across AWS, Azure, and GCP for optimal cost and performance", icon: "☁️" },
              { title: "Desktop Virtualization", description: "Secure, scalable VDI solutions for distributed teams and remote workforces", icon: "💻" },
              { title: "Kubernetes & Containers", description: "Hardened EKS, AKS, GKE clusters with enterprise-grade reliability", icon: "🐳" },
              { title: "Serverless Architecture", description: "Lambda, Cloud Run, and event-driven solutions for cost-effective operations", icon: "⚡" },
              { title: "Infrastructure as Code", description: "Terraform, CloudFormation automation for reproducible, version-controlled infrastructure", icon: "📝" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-amber-400/50 transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Measurable <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto">
              What our clients achieve with cloud infrastructure transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "60-80% Faster Provisioning", description: "Reduce environment setup time from weeks to hours" },
              { title: "Zero Configuration Drift", description: "Automated consistency across all environments and clouds" },
              { title: "30-40% Cost Reduction", description: "Optimized resource utilization and right-sizing strategies" },
              { title: "Enterprise-Grade Security", description: "Built-in compliance, encryption, and access controls" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl border border-amber-600/30 bg-white/[0.02]"
              >
                <h3 className="text-amber-400 font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructurePage;