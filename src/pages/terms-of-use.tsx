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
} from "lucide-react";

const TermsOfUse = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    { id: "welcome", title: "Terms of Use", icon: FileText },
    { id: "access", title: "Access and Registration", icon: UserCheck },
    { id: "license", title: "License to Use", icon: Key },
    { id: "conduct", title: "Code of Conduct", icon: Shield },
    { id: "intellectual", title: "Intellectual Property", icon: Brain },
    { id: "feedback", title: "Feedback", icon: MessageSquare },
    { id: "payments", title: "Payments and Refunds", icon: CreditCard },
    { id: "shipping", title: "Shipping Policy", icon: Package },
    { id: "disclaimer", title: "Disclaimer", icon: AlertTriangle },
    { id: "liability", title: "Limitation of Liability", icon: Scale },
    { id: "indemnity", title: "Indemnity and Release", icon: ShieldAlert },
    {
      id: "thirdparty",
      title: "Links to Third Party Websites",
      icon: ExternalLink,
    },
    { id: "governing", title: "Governing Law and Jurisdiction", icon: Gavel },
    { id: "miscellaneous", title: "Miscellaneous", icon: Settings },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset to account for fixed header
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

  // Track active section on scroll
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
      {/* Animated grid pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,159,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,159,26,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
      <div className="fixed inset-0 blueprint-overlay pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 relative z-10">
        {/* Hero Header */}
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
            className="max-w-4xl mx-auto space-y-4"
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Welcome to{" "}
              <span className="text-white font-semibold">Mahity</span>. These
              Terms of Use govern your access to and use of our website
              (Website), including any content, public forums, and services
              provided on or through the Website and any associated mobile
              applications (Application) (collectively referred to as the
              Platform). By accessing or using the Platform, you agree to comply
              with and be bound by these Terms of Use.
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">
                Mahity Systems Pvt Ltd
              </span>{" "}
              reserves the right to modify these Terms of Use at any time.
              Changes will be effective immediately upon posting on the Website.
              Your continued use of the Platform following the posting of
              revised terms signifies your acceptance of those changes. Please
              review these terms periodically for updates. If you do not agree
              with these terms, kindly refrain from using our Platform.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-[#ff9f1a] to-transparent"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Sidebar Navigation - Fixed with proper height */}
          <div className="lg:w-1/4">
            <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
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
                          className={`text-left w-full py-2 px-3 rounded-lg transition duration-200 text-sm flex items-center gap-2 group ${
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
            {/* Section 1: Terms of Use */}
            <motion.div
              id="welcome"
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
                    Terms of Use
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    These Terms of Use apply to end users of the Mahity website
                    (referred to as Learners, You, Your). This Agreement,
                    including the privacy policy and any other terms and
                    conditions published on the Platform or communicated to you
                    from time to time (collectively referred to as the
                    Agreement), defines the relationship and responsibilities
                    between You and the Creator in using the Platform. Your
                    access to the Platform is subject to Your acceptance of this
                    Agreement. We encourage you to take the time to read
                    thoroughly and understand this Agreement.
                  </p>
                  <p>
                    By accessing or using the Platform, you acknowledge and
                    agree to be bound by these Terms of Use. Mahity Systems Pvt
                    Ltd reserves the right to modify these terms at any time,
                    with changes taking effect immediately upon posting. Your
                    continued use of the Platform indicates your acceptance of
                    any revised terms. Please review these terms regularly to
                    stay informed of any updates. If you do not agree with any
                    part of these terms, you must refrain from using our
                    Platform.
                  </p>
                  <p>
                    When we speak of Creator, we, us, and our, we collectively
                    mean Hansei, being the creator of this Platform and the
                    content/materials/services contained therein.
                  </p>
                  <p>
                    By accessing this Platform, You are agreeing to be bound by
                    the terms of this Agreement, all applicable laws and
                    regulations. From time to time, versions of the
                    above-mentioned policies and terms are made available on the
                    Platform for Your reference, to understand how we handle
                    Your personal information. By using or visiting the Platform
                    and services provided to You on, from, or through the
                    Platform, You are expressly agreeing to the terms of the
                    Agreement and any other terms that are updated from time to
                    time. If You disagree with any part of this Agreement or do
                    not wish to be bound by the same, then please do not use the
                    Platform in any manner.
                  </p>
                  <p>
                    By accessing this Platform, you agree to be bound by the
                    terms of this Agreement, as well as all applicable laws and
                    regulations. From time to time, updated versions of the
                    policies described above and terms will be made available on
                    the Platform for your reference, ensuring transparency on
                    how we handle your personal information. By using or
                    visiting the Platform and availing the services provided to
                    you on, from, or through the Platform, you explicitly agree
                    to the terms of this Agreement and any other terms that may
                    be updated periodically.
                  </p>
                  <p>
                    Should you disagree with any part of this Agreement or
                    prefer not to be bound by it, please refrain from using the
                    Platform in any capacity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Access and Registration */}
            <motion.div
              id="access"
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
                    Access and Registration
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    To use our Platform, you must be at least 18 years of age.
                    If you are between 13 and 18 years old, you must obtain
                    permission from your parent or legal guardian. By using the
                    Platform, you confirm that you have received the necessary
                    consents and permissions. Users under the age of 13 (or 16,
                    depending on your country of residence) are not permitted to
                    use or register on the Platform for any content or services.
                  </p>
                  <p>
                    To access the Content offered on the Platform, you must
                    register by providing your name and email address. Please
                    review our Privacy Policy to understand how we manage your
                    information. Additionally, access to certain Content may
                    require a fee. For details, refer to our Payments & Refunds
                    section.
                  </p>
                  <p>
                    You represent that the information you provide during
                    registration is accurate and complete, and you meet the
                    eligibility criteria for using the Platform and accessing
                    the Content. You also agree to notify us of any changes to
                    your information by contacting us as specified in the
                    Contact Us section.
                  </p>
                  <p>
                    For the purposes of this Agreement, Content refers to any
                    course or session (whether pre-recorded or live) published
                    by the Creator on the Platform, including any related
                    reference materials and text files offered as part of the
                    Content.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 3: License to Use */}
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
                    License to Use
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    You are granted a limited, non-exclusive license to access
                    and view the Content on the Platform for your personal,
                    non-commercial use only. Additionally, if permitted by the
                    Platform, you may temporarily download one copy of any
                    downloadable Content (including Creator Content, as defined
                    below) for personal and non-commercial transitory viewing.
                    This license does not permit you to assign or sublicense the
                    rights granted under this Agreement to any other party.
                  </p>
                  <div>
                    <p className="font-semibold text-white mb-2 sm:mb-3">
                      Furthermore, you are expressly prohibited from:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                      <li>
                        Modifying, editing, or copying the Content, Creator
                        Content, or any material available on the Platform
                      </li>
                      <li>
                        Creating derivative works or exploiting any material on
                        the Platform (including Content and Creator Content), or
                        any portion thereof, in any manner not expressly allowed
                        under this license
                      </li>
                      <li>
                        Publicly displaying (whether for commercial or
                        non-commercial purposes) the Content, Creator Content,
                        or any material available on the Platform
                      </li>
                      <li>
                        Attempting to decompile or reverse engineer any software
                        contained on the Platform
                      </li>
                      <li>
                        Removing any copyright or other proprietary notations
                        from the Content, Creator Content, or any material
                        available on the Platform
                      </li>
                      <li>
                        Transferring any material available on the Platform to
                        another person, or mirroring it on any other server.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4: Code of Conduct */}
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
                    Code of Conduct
                  </h3>
                </div>

                <div className="relative space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <p className="font-semibold text-gray-300">
                    You agree to the following:
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                      <div>
                        <li className="text-white font-bold">
                             
                          Legitimate usage of the Platform:
                        </li>
                        <p className="text-gray-400">
                          You agree to use the Platform only for lawful purposes
                          and agree not to engage in any activity that violates
                          any applicable central, state, local, federal, or
                          international law or regulation (including, without
                          limitation, any laws regarding the export of data or
                          software to and from the USA or other countries). You
                          also agree not to use the Platform in any manner that
                          disrupts, damages, or impairs it or access to it,
                          including promoting or encouraging illegal activity
                          such as hacking, cracking, distributing counterfeit
                          software, compromised accounts, or cheats or hacks for
                          the Platform, or engaging in fraudulent activity.
                        </p>
                      </div>
                      <div>
                        <li className="text-white font-bold">
                          No harmful or dangerous content:
                        </li>
                        <p className="text-gray-400">
                          Content that incites or promotes violence, causes
                          physical or emotional harm, endangers the safety of
                          individuals, or is otherwise objectionable is
                          expressly prohibited. The Platform must only be used
                          for permitted purposes as outlined in this Agreement.
                        </p>
                      </div>
                      <div>
                        <li className="text-white font-bold">
                          No hateful or defamatory content:
                        </li>
                        <p className="text-gray-400">
                          While exchanging ideas and opinions is essential for
                          learning, hate speech, libelous, slanderous,
                          threatening, violent, predatory, or defamatory
                          statements are not tolerated. Content that incites
                          hatred against specific individuals or groups based on
                          race, ethnicity, nationality, caste, religion,
                          disability, gender, age, sexual orientation, or gender
                          identity is strictly prohibited.
                        </p>
                      </div>
                      <div>
                        <li className="text-white font-bold">
                          Violent and graphic content:
                        </li>
                        <p className="text-gray-400">
                          Content created solely to sensationalize, shock, or
                          disturb individuals is not allowed. Content promoting
                          terrorist acts or inciting violence is strictly
                          prohibited on the Platform.
                        </p>
                      </div>
                      <div>
                        <li className="text-white font-bold">
                          Harassment and bullying:
                        </li>
                        <p className="text-gray-400">
                          Harassment or bullying of any kind is not tolerated.
                          This includes abusive videos, comments, messages,
                          revealing someone's personal information (e.g.,
                          sensitive personally identifiable information),
                          humiliating content or comments, sexual harassment, or
                          sexual bullying in any form. The Platform is a safe
                          space for learning and mutual respect.
                        </p>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

             <motion.div
              variants={sectionVariants}
              className="mb-8"
            >
              <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative space-y-4">
                  {/* Spam Section */}
                  <div className="pt-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      Spam:
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Posting untargeted, unwanted, and repetitive content,
                      comments, or messages with the intention to spam a Public
                      Forum or the Platform and drive traffic to third-party sites
                      is a direct violation of this Agreement. Posting links to
                      external websites containing malware or other prohibited
                      sites is strictly not allowed.
                    </p>
                  </div>

                  {/* Scams Section */}
                  <div className="pt-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      Scams:
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Any content uploaded or posted to deceive others for
                      financial gain is not permitted. Practices of extortion or
                      blackmail are also strictly prohibited.
                    </p>
                  </div>

                  {/* Privacy Violation Section */}
                  <div className="pt-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      Privacy Violation:
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Please refer to our Privacy Policy to understand how to
                      protect your privacy and respect the privacy of other users.
                    </p>
                  </div>

                  {/* Impersonation Section */}
                  <div className="pt-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      Impersonation:
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Impersonating another person, including but not limited to
                      another learner, is strictly prohibited on our Platform.
                      Impersonation refers to intentionally causing confusion
                      about your identity by pretending to be someone else—this
                      includes using names, images, documents, certificates, or
                      any identifiers that do not belong to you. Similarly,
                      pretending to represent a company, institution, or group by
                      using their logo, brand name, or distinguishing marks is
                      also not allowed.
                    </p>
                  </div>

                  {/* Unauthorized Access Section */}
                  <div className="pt-2 ">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      Unauthorized Access or Disabling of Platform:
                    </h4>
                    <p className="font-semibold text-gray-300 mb-3 text-sm sm:text-base">
                      You agree not to:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-400 text-sm sm:text-base">
                      <li>
                        Use the Platform in any manner that could disable,
                        overburden, damage, or impair it, or interfere with other
                        users access.
                      </li>
                      <li>
                        Use any manual process to monitor or copy materials on the
                        Platform for unauthorized purposes.
                      </li>
                      <li>
                        Employ any device, software, or routine that disrupts the
                        proper functioning of the Platform.
                      </li>
                      <li>
                        Attack the Platform via a denial-of-service attack.
                      </li>
                      <li>
                        Attempt to gain unauthorized access to, interfere with, or
                        disrupt any parts of the Platform, its servers, or
                        associated databases or systems.
                      </li>
                      <li>
                        Introduce viruses, trojan horses, worms, keystroke
                        loggers, malware, or other malicious or harmful technology
                        to the Platform.
                      </li>
                    </ul>
                    <p className="mt-3 text-gray-400 text-sm sm:text-base">
                      If any violation of the above rules of conduct comes to our
                      notice, we reserve the right to restrict your access to the
                      Platform, terminate accounts, or remove violating content at
                      any time without prior notice.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 5: Intellectual Property */}
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
                      <Brain className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Intellectual Property
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    Mahity Systems Pvt Ltd owns all information and materials,
                    including Content and Creator Content (in any form or media)
                    provided or communicated to you by or on behalf of us. This
                    includes, but is not limited to, the Platform itself,
                    trademarks, trade dress, logos, wordmarks, illustrations,
                    letters, images, ideas, concepts, layout, design, flow, look
                    and feel of the Platform, logos, marks, graphics, audio
                    files, video files, software owned by or licensed to us, and
                    instructions embedded in any digital documents.
                    Collectively, these are referred to as Creator`s
                    Intellectual Property.
                  </p>
                  <p>
                    Creator`s Intellectual Property, including copyrights and
                    trademarks contained therein, may not be modified by you in
                    any way. You acknowledge and agree that you do not acquire
                    any ownership rights to Creator`s Intellectual Property by
                    using the Platform or any part thereof. Creator`s
                    Intellectual Property is protected by applicable
                    intellectual property laws, including international
                    copyright, trademark, patent, trade secret, and other
                    proprietary rights laws. Unauthorized use, reproduction,
                    modification, distribution, transmission, republication,
                    display, or performance of Creator`s Intellectual Property
                    or any component thereof is strictly prohibited.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 6: Feedback */}
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
                      <MessageSquare className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Feedback
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    If you submit suggestions, ideas, comments, or questions
                    containing product feedback about any Content or the
                    Platform (Feedback), you grant us a worldwide,
                    non-exclusive, royalty-free, perpetual, and irrevocable
                    right to use, reproduce, modify, adapt, publish, translate,
                    create derivative works from, distribute, transmit, and
                    display such Feedback in any form. You will have no
                    intellectual property rights in any Content or Platform as a
                    result of our incorporation of Feedback.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 7: Payments and Refunds*/}
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
                    Payments and Refunds
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    To register or enroll for any Content, you may need to pay a
                    fee (Content Fee). Refer to our Platform for pricing
                    details. Payment of the Content Fee will be processed
                    through third-party payment processors and may be subject to
                    applicable taxes. Please review the terms and policies of
                    the third-party payment processors for more information.
                    Once you purchase access to Content on the Platform, the
                    purchase cannot be canceled, and no refund of the Content
                    Fee will be provided, unless otherwise stated in our Refund
                    Policy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 8: Shipping Policy*/}
            <motion.div
              id="shipping"
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
                      <Package className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Shipping Policy
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    Thank you for choosing hansei.in for your educational needs.
                    We offer electronic delivery of all our products, meaning
                    there is no physical shipment involved. Once you complete
                    your purchase, your product will be made available according
                    to the delivery timeline specified on the product page. We
                    strive to provide timely and efficient delivery of our
                    products and are confident in your satisfaction with our
                    service.
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
                    Disclaimer
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    The Platform is provided as is and as available, with all
                    faults and defects, without warranty of any kind. To the
                    maximum extent permitted by applicable law, the Creator, on
                    its own behalf and on behalf of its affiliates, licensors,
                    and service providers, expressly disclaims all warranties,
                    whether express, implied, statutory, or otherwise, including
                    implied warranties of merchantability, fitness for a
                    particular purpose, title, and non-infringement. Without
                    limitation, the Creator makes no representation or warranty
                    regarding the operation or availability of the Platform, or
                    that it will be uninterrupted or error-free, or that the
                    information, content, and materials available on the
                    Platform will be accurate, reliable, or current. The Creator
                    also disclaims any warranties that the Platform, its
                    servers, the content, or emails sent from or on behalf of
                    the Creator are free of viruses or other harmful components.
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
                      <Scale className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Limitation of Liability
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    In no event shall the Creator be liable for any damages
                    (including loss of data or profit, or business interruption)
                    arising from the use or inability to use the Content or any
                    other materials on the Platform, even if the Creator has
                    been notified of the possibility of such damages. Some
                    jurisdictions do not allow limitations on implied warranties
                    or liability for consequential or incidental damages, so
                    these limitations may not apply to you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 11: Indemnity and Release */}
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
                      <ShieldAlert className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                    Indemnity and Release
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    You shall indemnify and hold harmless the Creator and its
                    officers, directors, agents, and employees from any claim or
                    demand, including reasonable attorney`s fees, made by any
                    third party due to or arising from your breach of this
                    Agreement or your violation of any law or rights of a third
                    party.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 12: Links to Third Party Websites*/}
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
                    Links to Third Party Websites
                  </h3>
                </div>

                <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
                  <p>
                    The Creator has not reviewed all sites linked to the
                    Platform and is not responsible for the contents of any
                    linked site. Inclusion of any link does not imply
                    endorsement by the Creator. Use of any linked website is at
                    your own risk.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 13: Governing Law and Jurisdiction */}
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
                    Any claim relating to the Platform shall be governed by the
                    laws of the Creator`s home jurisdiction, without regard to
                    its conflict of law provisions. You agree to submit to the
                    exclusive jurisdiction of the courts in the Creator`s home
                    jurisdiction.
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
                  <div>
                    <div className="font-bold text-white mb-2">
                      Alteration of Platform or Amendments to Conditions:
                    </div>
                    <p>
                      We reserve the right to make changes to our Platform,
                      policies, and this Agreement at any time. We will post new
                      terms with a revision date. You are subject to the policies
                      in force at the time you use the Platform, unless required
                      by law or government authority. If any condition is deemed
                      invalid, void, or unenforceable, it will be severable and
                      not affect the validity of other conditions.
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-2">
                      Waiver:
                    </div>
                    <p>
                      If you breach these conditions and we take no action, we
                      will still be entitled to use our rights and remedies in any
                      other situation where you breach these conditions.
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-2">
                      Assignment:
                    </div>
                    <p>
                      You may not assign or transfer this Agreement. Any attempt
                      will be null and void.
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-2">
                      Severability:
                    </div>
                    <p>
                      If any provision is adjudged unenforceable or invalid, it
                      will be limited to the minimum extent necessary, so this
                      Agreement will remain in effect.
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-2">
                      Events beyond our reasonable control:
                    </div>
                    <p>
                      We are not responsible for delays or failures to comply with
                      our obligations under these conditions if the delay or
                      failure arises from any cause beyond our control. This does
                      not affect your statutory rights.
                    </p>
                  </div>
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
