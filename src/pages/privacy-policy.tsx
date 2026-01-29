"use client";
import React, { useEffect, useState, useRef, JSX } from "react";
import {
  motion,
  useScroll,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";
import { Shield, Lock, Eye, FileText, Globe, Bell, CheckCircle2, Sparkles } from "lucide-react";

export default function PrivacyPolicy(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);


  useEffect(() => {
    setIsLoaded(true);

    
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e: Event) => {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const sectionInView = sectionRefs.map((ref) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInView(ref, { once: false, amount: 0.3 })
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const sectionVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] w-full overflow-hidden relative">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,159,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,159,26,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff9f1a] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Blueprint overlay */}
      <div className="absolute inset-0 blueprint-overlay pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 relative inline-block px-2">
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0099ff] to-[#ff9f1a] bg-clip-text text-transparent">
                Privacy Policy
              </span>
              <motion.div
                className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#ff9f1a]" />
              </motion.div>
            </h1>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2"
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            At <span className="text-white font-semibold">Mahity, Systems Pvt Ltd</span>, we value and respect your privacy and
            are fully committed to protecting it. This Privacy Policy outlines
            our comprehensive practices regarding the collection, use, and
            disclosure of your information when you utilize our cloud-native
            services.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 sm:mt-8 h-px bg-gradient-to-r from-transparent via-[#ff9f1a] to-transparent"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Sections */}
          <motion.section className="space-y-6 sm:space-y-8 md:space-y-12">
            {/* Section 1 */}
            <motion.div
              ref={sectionRefs[0]}
              id="section-1"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[0] ? "visible" : "hidden"}
              className="relative"
            >
              {/* Decorative corner accent */}
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#ff9f1a]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-xl bg-[#ff9f1a] blur-xl opacity-50"
                    />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
                      Information Collection
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      We collect several types of information for various purposes to
                      provide and enhance our services to you. This may include:
                    </p>
                  </div>
                </div>

                <motion.div
                  variants={cardContainerVariants}
                  initial="hidden"
                  animate={sectionInView[0] ? "visible" : "hidden"}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 relative"
                >
                  {[
                    {
                      title: "Personal Data",
                      description: "Information such as your name, email address, phone number, and any other details you voluntarily provide through surveys or contact forms.",
                      gradient: "from-[#ff9f1a] to-[#ffb84d]",
                      icon: "👤",
                    },
                    {
                      title: "Usage Data",
                      description: "Information about your interaction with our services, including your IP address, browser type, pages visited, time and date of visit, and other diagnostic data.",
                      gradient: "from-[#00f2ff] to-[#0099ff]",
                      icon: "📊",
                    },
                    {
                      title: "Tracking & Cookies Data",
                      description: "Data collected using cookies and similar tracking technologies to monitor activity and improve user experience.",
                      gradient: "from-[#0099ff] to-[#0066cc]",
                      icon: "🍪",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                      }}
                      className="relative group/card"
                    >
                      {/* Card glow on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover/card:opacity-10 rounded-xl blur transition-opacity duration-300`}></div>
                      
                      <div className="relative glass-card p-4 sm:p-5 rounded-xl border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 group-hover/card:border-l-[#00f2ff] transition-all duration-300 h-full" style={{ borderLeftColor: index === 0 ? '#ff9f1a' : index === 1 ? '#00f2ff' : '#0099ff' }}>
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                          {item.title}
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff9f1a] opacity-0 group-hover/card:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              ref={sectionRefs[1]}
              id="section-2"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[1] ? "visible" : "hidden"}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#00f2ff]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-l-[#00f2ff] border-y-0 border-r-0 hover:border-l-[#00d4e6] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute inset-0 rounded-xl bg-[#00f2ff] blur-xl opacity-50"
                    />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#00f2ff] to-[#0099ff] flex items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                      <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h6 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      Cookies and IP-Based Tracking
                    </h6>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      We utilize cookies and similar tracking technologies to monitor
                      activities on our services. Cookies are files with a small
                      amount of data, including an anonymous unique identifier. You
                      can configure your browser to refuse all cookies or to alert you
                      when a cookie is being sent. However, declining cookies may
                      limit your ability to use certain parts of our services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              ref={sectionRefs[2]}
              id="section-3"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[2] ? "visible" : "hidden"}
              className="relative"
            >
              <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#0099ff]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-l-[#0099ff] border-y-0 border-r-0 hover:border-l-[#0088ee] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0099ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="absolute inset-0 rounded-xl bg-[#0099ff] blur-xl opacity-50"
                    />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#0099ff] to-[#0066cc] flex items-center justify-center shadow-[0_0_30px_rgba(0,153,255,0.4)]">
                      <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      Links to Other Sites
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Our services may include links to external sites that are not
                      operated by us. If you click on a third-party link, you will be
                      directed to that site. We strongly recommend reviewing the
                      Privacy Policy of each site you visit.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              ref={sectionRefs[3]}
              id="section-4"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[3] ? "visible" : "hidden"}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#ff9f1a]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                      className="absolute inset-0 rounded-xl bg-[#ff9f1a] blur-xl opacity-50"
                    />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      Processing of Information
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                      The information we collect from you may be used in the following
                      ways:
                    </p>

                    <motion.div
                      variants={cardContainerVariants}
                      initial="hidden"
                      animate={sectionInView[3] ? "visible" : "hidden"}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                    >
                      {[
                        {
                          title: "To Personalize Your Experience",
                          description: "Enhance your interaction with our services.",
                          icon: "🎯",
                          color: "#ff9f1a",
                        },
                        {
                          title: "To Improve Our Services",
                          description: "Continuously improve the functionality and features.",
                          icon: "🚀",
                          color: "#00f2ff",
                        },
                        {
                          title: "To Enhance Customer Service",
                          description: "Provide better support and service to our users.",
                          icon: "💬",
                          color: "#0099ff",
                        },
                        {
                          title: "To Send Periodic Emails",
                          description: "Provide updates, newsletters, and communications.",
                          icon: "📧",
                          color: "#ff9f1a",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={cardVariants}
                          whileHover={{
                            scale: 1.05,
                            y: -5,
                          }}
                          className="glass-card p-4 sm:p-5 rounded-xl border-l-4 border-y-0 border-r-0 hover:border-white/30 transition-all duration-300 group/item"
                          style={{ borderLeftColor: index % 2 === 0 ? '#ff9f1a' : '#00f2ff' }}
                        >
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 group-hover/item:text-[#ff9f1a] transition-colors">
                                {item.title}
                              </div>
                              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              ref={sectionRefs[4]}
              id="section-5"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[4] ? "visible" : "hidden"}
              className="relative"
            >
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#00f2ff]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-l-[#00f2ff] border-y-0 border-r-0 hover:border-l-[#00d4e6] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                      className="absolute inset-0 rounded-xl bg-[#00f2ff] blur-xl opacity-50"
                    />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#00f2ff] to-[#0099ff] flex items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                      <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      Security
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      The security of your data is paramount to us. However, please be
                      aware that no method of transmission over the Internet or
                      electronic storage is 100% secure. While we strive to use
                      commercially acceptable measures to protect your personal data,
                      we cannot guarantee its absolute security.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              ref={sectionRefs[5]}
              id="section-6"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView[5] ? "visible" : "hidden"}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#0099ff]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-l-[#0099ff] border-y-0 border-r-0 hover:border-l-[#0088ee] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0099ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                      className="absolute inset-0 rounded-xl bg-[#0099ff] blur-xl opacity-50"
                    />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#0099ff] to-[#0066cc] flex items-center justify-center shadow-[0_0_30px_rgba(0,153,255,0.4)]">
                      <Bell className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      Changes to This Privacy Policy
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      We may update our Privacy Policy periodically. We will notify
                      you of any changes by posting the new Privacy Policy on this
                      page. You are advised to review this Privacy Policy regularly
                      for any modifications.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Enhanced Footer CTA */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="mt-12 sm:mt-16 relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#ff9f1a]/20 to-[#00f2ff]/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden glass-card p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#00f2ff] transition-all duration-500"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(255,159,26,0.05) 0%, rgba(0,242,255,0.05) 100%)",
                    "linear-gradient(45deg, rgba(0,242,255,0.05) 0%, rgba(255,159,26,0.05) 100%)",
                    "linear-gradient(45deg, rgba(255,159,26,0.05) 0%, rgba(0,242,255,0.05) 100%)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0"
              />
              
              <div className="relative text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block mb-3 sm:mb-4"
                >
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ff9f1a]" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
                  Questions About Our Privacy Policy?
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed px-2">
                  By using our services, you consent to our Privacy Policy. If you
                  have any questions or concerns about this Privacy Policy, please
                  contact us.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}