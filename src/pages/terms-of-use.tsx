
"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  FileText,
  UserCheck,
  Key,
  Shield,
  Brain,
  MessageSquare,
  CreditCard,
  Package,
  AlertTriangle,
  Scale,
  ShieldAlert,
  ExternalLink,
  Gavel,
  Settings,
  Sparkles,
  Book,
  Lock,
  Copyright,
  Handshake,
  RefreshCw,
} from "lucide-react";

const TermsOfUse = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    {
      id: "introduction",
      title: "Introduction and Acceptance",
      icon: FileText,
    },
    { id: "eligibility", title: "Eligibility and Accounts", icon: UserCheck },
    { id: "definition", title: "Definitions", icon: Book },
    { id: "license", title: "License and Use of the Platform", icon: Key },
    {
      id: "conduct",
      title: "User Conduct and Acceptable Use",
      icon: Brain,
    },
    {
      id: "feedback",
      title: "Customer Content and Data Protection",
      icon: Lock,
    },
    { id: "payments", title: "Payments, Fees, and Refunds", icon: CreditCard },
    { id: "intellectual", title: "Intellectual Property", icon: Copyright },
    {
      id: "thirdparty",
      title: "Third‑Party Links and Services",
      icon: ExternalLink,
    },
    { id: "disclaimer", title: "Disclaimers", icon: AlertTriangle },
    { id: "liability", title: "Limitation of Liability", icon: ShieldAlert },

    {
      id: "indemnity",
      title: "Indemnification",
      icon: Handshake,
    },
    { id: "governing", title: "Governing Law and Jurisdiction", icon: Gavel },
    { id: "changesToTheTerms", title: "Changes to the Terms", icon: RefreshCw },
    { id: "miscellaneous", title: "Miscellaneous", icon: Settings },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] w-full relative">
    <style>{`
  .sidebar-scroll::-webkit-scrollbar {
    width: 4px;
  }
  .sidebar-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .sidebar-scroll::-webkit-scrollbar-thumb {
    background: rgba(255,159,26,0.5);
    border-radius: 999px;
    transform: scaleX(0.3);
    transform-origin: right;
  }
  .sidebar-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255,159,26,0.9);
  }
`}</style>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,159,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,159,26,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff9f1a] rounded-full"
           style={{
  left: `${(i * 5.3) % 100}%`,
  top: `${(i * 7.1) % 100}%`,
}}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
           transition={{
  duration: 3 + (i % 3),
  repeat: Infinity,
  delay: i * 0.15,
}}
          />
        ))}
      </div>

      <div className="fixed inset-0 blueprint-overlay pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 relative z-10">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0099ff] to-[#ff9f1a] bg-clip-text text-transparent">
                Terms of Use
              </span>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-[#ff9f1a]" />
              </motion.div>
            </h1>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-2"
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="text-sm sm:text-lg text-gray-400 leading-relaxed italic">
              Last updated: March 13,2026
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-[#ff9f1a] to-transparent"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
         <div className="lg:w-1/4">
          <div
  className="sidebar-scroll lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto"
  style={{
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(255,159,26,0.5) transparent",
  }}
>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-4 md:p-6 border-l-4 border-l-[#00f2ff] border-y-0 border-r-0"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#ff9f1a]" />
                  Contents
                </h2>
                <ul className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`text-left w-full py-2 px-3 rounded-lg transition duration-200 text-sm flex items-center gap-3 group ${
                            activeSection === section.id
                              ? "bg-[#ff9f1a]/20 text-white border-l-2 border-[#ff9f1a]"
                              : "text-gray-400 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 transition-colors ${
                              activeSection === section.id
                                ? "text-[#ff9f1a]"
                                : "text-[#ff9f1a] group-hover:text-[#00f2ff]"
                            }`}
                          />
                          <span className="flex-1">{section.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </div>
          

          {/* Main Content */}
          <motion.div
            className="lg:w-3/4"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Section 1: Introduction and Acceptance */}
            <motion.div
              id="introduction"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <FileText className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Introduction and Acceptance
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    These Terms of Use (“Terms”) govern your access to and use
                    of Mahity’s website, web applications, mobile applications,
                    APIs, and related services (collectively, the Platform),
                    including any content, learning materials, documentation,
                    tools, and features made available through the Platform
                    (collectively, the Services).
                  </p>
                  <p>
                    Mahity Systems Private Limited, a company incorporated in
                    India, together with its affiliates (Mahity, we, us, or our)
                    provides the Platform and Services.
                  </p>
                  <p>
                    By accessing or using the Platform, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms,
                    our Privacy Policy, and any additional terms or policies we
                    make available to you (together, the Agreement). If you do
                    not agree with any part of the Agreement, you must not
                    access or use the Platform or Services.
                  </p>
                  <p>
                    Mahity may modify these Terms at any time. Changes take
                    effect when posted on the Platform (or on a stated effective
                    date). Your continued use of the Platform after changes are
                    posted constitutes your acceptance of the updated Terms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Eligibility and Accounts */}
            <motion.div
              id="eligibility"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <UserCheck className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Eligibility and Accounts
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    You must be at least 18 years of age, or the legal age of
                    majority in your jurisdiction, to create an account or
                    purchase paid Services. If you are between 13 and 18, you
                    may use the Platform only with the consent and supervision
                    of a parent or legal guardian, who will be responsible for
                    your use. Users under 13 (or 16 where local law requires a
                    higher age for online consent) are not permitted to use or
                    register on the Platform.
                  </p>
                  <p>
                    To access certain Services or content, you may be required
                    to register and provide accurate, current, and complete
                    information. You agree to keep this information up to date
                    and to maintain the confidentiality of your login
                    credentials. You are responsible for all activity that
                    occurs under your account.
                  </p>
                  <p>
                    If any of your registration information changes, you agree
                    to notify us as described in our Contact/Support section or
                    update it in your account settings, where available.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 3: Definitions */}
            <motion.div
              id="definition"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <Book className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Definitions
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <div>
                    <p className="fontsemibold textwhite mb-2 sm:mb-3">
                      For purposes of this Agreement:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                      <li>
                        <b>Customer</b> means the organization or individual
                        that creates an account or purchases access to the
                        Services.
                      </li>
                      <li>
                        <b>Authorized</b> Users are individuals whom the
                        Customer authorizes to access the Platform on its
                        behalf.
                      </li>
                      <li>
                        <b>Customer</b> Content means any data, text, files,
                        media, or other materials that you or your Authorized
                        Users upload, submit, or store on or through the
                        Platform.
                      </li>
                      <li>
                        <b>Mahity Content</b> means all content and materials
                        provided by Mahity, including courses, sessions (live or
                        recorded), reference materials, text files,
                        documentation, designs, and other content made available
                        through the Platform.
                      </li>
                      <li>
                        <b>Mahity IP</b> has the meaning in Section 8 below.
                      </li>
                    </ul>
                    <p className="fontsemibold textwhite mt-4 sm:mb-3">
                      Unless otherwise agreed in a separate written contract,
                      these Terms apply to both individual and business users
                      globally.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4:  License and Use of the Platform */}
            <motion.div
              id="license"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <Key className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    License and Use of the Platform
                  </h3>
                </div>

                <div className="relative space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <p className="fontsemibold text-gray-400">
                    Subject to your compliance with this Agreement and payment
                    of applicable fees, Mahity grants you a limited,
                    non‑exclusive, non‑transferable, non‑sublicensable license
                    to access and use the Platform and Mahity Content solely for
                    your personal or internal business purposes during the term
                    of your subscription or access.
                  </p>

                  <p className="fontsemibold text-gray-400">
                    Where the Platform allows, you may temporarily download or
                    cache a single copy of certain downloadable Mahity Content
                    for personal or internal business, non‑commercial,
                    transitory viewing. This license does not grant any
                    ownership rights in Mahity Content or Mahity IP.
                  </p>
                  <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                    <div>
                      <p className="font-semibold textwhite mb-2 sm:mb-3">
                        Except as expressly permitted in this Agreement or in
                        writing by Mahity, you may not:
                      </p>
                      <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                        <li>
                          Sell, resell, rent, lease, sublicense, or otherwise
                          make the Platform or Services available to third
                          parties as a service bureau or hosted service.
                        </li>
                        <li>
                          Copy, modify, adapt, translate, create derivative
                          works from, or publicly display or perform any part of
                          the Platform or Mahity Content.
                        </li>
                        <li>
                          Reverse engineer, decompile, or otherwise attempt to
                          derive source code from the Platform, except to the
                          limited extent permitted by non‑waivable law.
                        </li>
                      </ul>
                      <p className="fontsemibold textwhite mt-4 sm:mb-3">
                        Mahity may modify, suspend, or discontinue the Platform
                        or any part of the Services at any time, with or without
                        notice, subject to any separate contractual commitments
                        you have with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 5:  User Conduct and Acceptable Use */}

            <motion.div
              id="conduct"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <Shield className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    User Conduct and Acceptable Use
                  </h3>
                </div>

                <div className="relative space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <p className="fontsemibold text-gray-400">
                    You agree to use the Platform only for lawful purposes and
                    in accordance with this Agreement and all applicable laws
                    and regulations (including export‑control and sanctions
                    laws).
                  </p>

                  <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                    <div>
                      <p className="fontsemibold textwhite mb-2 sm:mb-3">
                        You must not:
                      </p>
                      <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                        <li>
                          Use the Platform for any unlawful, harmful,
                          fraudulent, or abusive purpose.
                        </li>
                        <li>
                          Upload, share, or promote content that is illegal,
                          defamatory, obscene, harassing, hateful,
                          discriminatory, or otherwise objectionable.
                        </li>
                        <li>
                          Upload or distribute viruses, malware, or any code
                          intended to disrupt or damage software, hardware, or
                          data.
                        </li>
                        <li>
                          Attempt to gain unauthorized access to any accounts,
                          systems, or networks connected to the Platform.
                        </li>
                        <li>
                          Impersonate any person or entity, or misrepresent your
                          affiliation with any person or entity, including using
                          another user’s identity, certificates, or credentials.
                        </li>
                        <li>
                          Send spam or unsolicited messages, or post untargeted,
                          repetitive, or deceptive content to drive traffic to
                          third‑party sites.
                        </li>
                        <li>
                          Use the Platform to deceive, extort, or blackmail
                          others, or to promote terrorist acts or violence.
                        </li>
                        <li>
                          Post content that reveals sensitive personal
                          information of others without proper authorization.
                        </li>
                      </ul>
                      <p className="fontsemibold textwhite mt-4 sm:mb-3">
                        Mahity may remove content, restrict access to the
                        Platform, suspend or terminate accounts, or take any
                        other action it reasonably deems necessary if it
                        believes you have violated this Agreement or applicable
                        law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 5: Customer Content and Data Protection */}
            <motion.div
              id="feedback"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <Lock className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Customer Content and Data Protection
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <h4 className="text-lg md:text-xl font-semibold text-white flex-1">
                     Ownership of Customer Content
                  </h4>
                  <p>
                    You retain all rights to Customer Content that you submit or
                    upload to the Platform. By submitting Customer Content, you
                    grant Mahity a worldwide, non‑exclusive, royalty‑free
                    license to host, store, reproduce, process, transmit, and
                    display such Customer Content as reasonably necessary to
                    operate, maintain, secure, and improve the Platform and
                    Services, and to comply with legal obligations.
                  </p>
                  <p>
                    You represent and warrant that you have all necessary
                    rights, consents, and permissions to upload and use Customer
                    Content, and that such use does not violate law or
                    third‑party rights.
                  </p>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base mt-2">
                  <h4 className="text-lg md:text-xl font-semibold text-white flex-1">
                     Privacy and Roles
                  </h4>
                  <p>
                    Mahity processes personal data in accordance with its
                    Privacy Policy, which is incorporated into this Agreement by
                    reference.
                  </p>
                  <p>
                    If you are an organization, you typically act as the “data
                    controller” (or “data fiduciary” under India’s Digital
                    Personal Data Protection Act, 2023) and Mahity acts as your
                    “data processor” for personal data you upload or collect
                    through the Platform, unless otherwise specified in a
                    separate written agreement.dlapiperdataprotection+2 Where
                    required by applicable privacy laws (for example, EU/UK
                    GDPR‑style laws or the DPDP Act), Mahity will enter into a
                    separate Data Processing Agreement with you to govern such
                    processing of personal data. In case of conflict between
                    these Terms and any Data Processing Agreement regarding
                    personal data, the Data Processing Agreement will prevail.
                  </p>

                  <div>
                    <p className="fontsemibold textwhite mb-2 sm:mb-3">
                      You are responsible for:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                      <li>
                        Determining the purposes and means of processing
                        personal data through the Platform.
                      </li>
                      <li>
                        Providing all legally required privacy notices and
                        obtaining all necessary consents (where applicable) from
                        individuals whose data you process.
                      </li>
                      <li>
                        Configuring and using the Platform in a manner that
                        complies with applicable privacy and data‑protection
                        laws.corporate.cyrilamarchandblogs+3
                      </li>
                    </ul>
                  </div>

                  <p>
                    Mahity will implement appropriate technical and
                    organizational security measures to protect personal data it
                    processes on your behalf, consistent with industry standards
                    and applicable law.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 6:  Payments, Fees, and Refunds */}
            <motion.div
              id="payments"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <CreditCard className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Payments, Fees, and Refunds
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    Certain Services or content may require payment of fees,
                    which will be displayed on the Platform or in an order form
                    at the time of purchase (the Fees). Payment processing is
                    handled by third‑party payment processors and may be subject
                    to their terms and policies, as well as applicable taxes.
                  </p>
                  <p>
                    Unless otherwise stated in a specific agreement or in a
                    published Refund Policy, all Fees are non‑refundable once
                    paid, including in cases of cancellation, non‑use, or
                    partial use of the Services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 7: Intellectual Property*/}
            <motion.div
              id="intellectual"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <Copyright className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Intellectual Property
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    Mahity and its licensors own all rights, title, and interest
                    in and to the Platform, Services, Mahity Content, and all
                    related technology, software, designs, layouts, logos,
                    trademarks, trade dress, and other materials, including any
                    improvements and derivatives (collectively, Mahity IP).
                  </p>
                  <p>
                    Mahity IP is protected by copyright, trademark, patent,
                    trade‑secret, and other intellectual‑property laws. Except
                    for the limited license granted in Section 4, no rights in
                    Mahity IP are granted to you, whether by implication,
                    estoppel, or otherwise.cloud.google+1 You may not use
                    Mahity’s names, logos, or trademarks without our prior
                    written consent.
                  </p>
                  <p>
                    If you provide suggestions, ideas, comments, or other
                    feedback about the Platform or Services (“Feedback”), you
                    grant Mahity a worldwide, irrevocable, perpetual,
                    royalty‑free license to use, reproduce, modify, adapt,
                    publish, translate, create derivative works from,
                    distribute, and display such Feedback for any purpose,
                    without compensation to you. You will not acquire any rights
                    in Mahity IP as a result of such use.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 8: Third‑Party Links and Services*/}
            <motion.div
              id="thirdparty"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <ExternalLink className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Third‑Party Links and Services
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    The Platform may contain links to third‑party websites or
                    services that are not owned or controlled by Mahity. Mahity
                    has not reviewed all linked sites and is not responsible for
                    their content, privacy practices, or availability. Use of
                    any third‑party website or service is at your own risk and
                    subject to that third party’s terms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 9: Disclaimer*/}
            <motion.div
              id="disclaimer"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <AlertTriangle className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Disclaimers
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    The Platform and Services are provided on an “as is” and “as
                    available” basis, with all faults and defects, without
                    warranty of any kind. To the maximum extent permitted by
                    applicable law, Mahity and its affiliates, licensors, and
                    service providers expressly disclaim all warranties, whether
                    express, implied, statutory, or otherwise, including implied
                    warranties of merchantability, fitness for a particular
                    purpose, title, and non‑infringement.
                  </p>

                  <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                    <div>
                      <p className="fontsemibold textwhite mb-2 sm:mb-3">
                        Without limiting the foregoing, Mahity does not warrant
                        that:
                      </p>
                      <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                        <li>
                          The Platform or Services will be uninterrupted,
                          error‑free, secure, or available at any particular
                          time or location.
                        </li>
                        <li>
                          Any content, data, or materials available through the
                          Platform will be accurate, complete, or current.
                        </li>
                        <li>
                          The Platform, its servers, or communications sent from
                          Mahity are free of viruses or other harmful
                          components.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    Any uptime or performance commitments are only as expressly
                    stated in a separate service level agreement, if any, and
                    not in these Terms.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion of certain
                    warranties, so some of the above exclusions may not apply to
                    you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 10: Limitation of Liability */}
            <motion.div
              id="liability"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <ShieldAlert className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Limitation of Liability
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    To the maximum extent permitted by applicable law, Mahity’s
                    total aggregate liability arising out of or relating to the
                    Platform, Services, and this Agreement, whether in contract,
                    tort, or otherwise, shall not exceed the total Fees you have
                    paid to Mahity for the Services giving rise to the claim in
                    the twelve (12) months immediately preceding the event
                    giving rise to such liability.
                  </p>
                  <p>
                    To the maximum extent permitted by law, Mahity shall not be
                    liable for any indirect, incidental, consequential, special,
                    punitive, or exemplary damages, or for loss of profits,
                    revenue, goodwill, or data, even if advised of the
                    possibility of such damages.
                  </p>
                  <p>
                    Some jurisdictions do not allow exclusion or limitation of
                    liability for certain damages; in such cases, the
                    limitations above apply only to the extent permitted by
                    applicable law.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 11: Indemnification */}
            <motion.div
              id="indemnity"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <Handshake className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Indemnification
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    You agree to indemnify, defend, and hold harmless Mahity and
                    its officers, directors, employees, and agents from and
                    against any claims, demands, losses, damages, liabilities,
                    costs, and expenses (including reasonable attorney’s fees)
                    arising out of or related to:
                  </p>

                  <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                    <li>Your breach of this Agreement.</li>
                    <li>
                      Your violation of any law or any rights of a third party.
                    </li>
                    <li>
                      Any Customer Content you upload, submit, or otherwise make
                      available through the Platform.
                    </li>
                  </ul>

                  <p>
                    Mahity will provide you with prompt notice of any claim,
                    allow you to control the defense and settlement (subject to
                    Mahity’s right to participate with its own counsel at its
                    own expense), and provide reasonable cooperation at your
                    cost. You may not settle any claim that imposes an admission
                    of liability or non‑monetary obligations on Mahity without
                    Mahity’s prior written consent.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 12: Governing Law and Jurisdiction*/}
            <motion.div
              id="governing"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <Gavel className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Governing Law and Jurisdiction
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    This Agreement is governed by and construed in accordance
                    with the laws of India, without regard to its
                    conflict‑of‑law rules.
                  </p>
                  <p>
                    You agree to submit to the exclusive jurisdiction of the
                    courts located in Mumbai, India, for any dispute arising out
                    of or relating to this Agreement, the Platform, or the
                    Services, except where you are entitled to mandatory
                    protections under the laws of another country that cannot
                    legally be waived.
                  </p>
                  <p>
                    If you are entitled to mandatory consumer protection or
                    data‑protection rights under the laws of another country,
                    nothing in this Agreement limits those non‑waivable rights.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 13: Changes to the Terms */}
            <motion.div
              id="changesToTheTerms"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <RefreshCw className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Changes to the Terms
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    We may update or modify these Terms, our Privacy Policy, and
                    other policies from time to time to reflect changes in our
                    Services, business, or applicable laws and regulations.
                  </p>
                  <p>
                    We will post updated Terms on the Platform with a revised
                    “Last updated” date.
                  </p>
                  <p>
                    Where required by law, we will provide additional notice
                    (for example, via email or in‑product notifications). If you
                    do not agree to the updated Terms, you must stop using the
                    Platform and Services. Your continued use after the
                    effective date of updated Terms constitutes your acceptance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 14: Miscellaneous */}
            <motion.div
              id="miscellaneous"
              variants={sectionVariants}
              className="mb-8 scroll-mt-24"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative flex items-center gap-4 mb-6">
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
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
                      <Settings className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Miscellaneous
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    You may not assign or transfer this Agreement, in whole or
                    in part, without our prior written consent, and any
                    attempted assignment without such consent will be null and
                    void. We may assign or transfer this Agreement in connection
                    with a merger, acquisition, or sale of assets, or by
                    operation of law.
                  </p>
                  <p>
                    If any provision of this Agreement is held invalid or
                    unenforceable, that provision will be enforced to the
                    maximum extent permissible, and the remaining provisions
                    will remain in full force and effect.
                  </p>
                  <p>
                    No failure or delay by Mahity in exercising any right or
                    remedy under this Agreement shall constitute a waiver of
                    such right or remedy.
                  </p>
                  <p>
                    We are not responsible for any delay or failure to perform
                    due to causes beyond our reasonable control, including
                    events of force majeure such as natural disasters, acts of
                    government, war, terrorism, labor disputes, or internet or
                    power failures.
                  </p>
                  <p>
                    This Agreement, together with any additional terms and the
                    Privacy Policy, constitutes the entire agreement between you
                    and Mahity regarding the Platform and Services and
                    supersedes all prior or contemporaneous agreements on the
                    same subject matter.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;