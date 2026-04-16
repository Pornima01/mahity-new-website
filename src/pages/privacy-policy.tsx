
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  User,
  Globe,
  Database,
  Settings,
  Share2,
  Cookie,
  Lock,
  Clock,
  Mail,
  AlertCircle,
  FileText,
  Sparkles,
  Eye,
  Server,
  CreditCard,
  BarChart2,
  MapPin,
  SquareArrowOutUpRight,
  RefreshCw,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("who-we-are");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    { id: "who-we-are", title: "Who We Are", icon: User },
    { id: "scope", title: "Scope of This Policy", icon: Globe },
    { id: "categories", title: "Categories of Personal Data", icon: Database },
    { id: "how-we-collect", title: "How We Collect Data", icon: Eye },
    { id: "purposes", title: "Purposes & Legal Bases", icon: FileText },
    { id: "cookies", title: "Cookies & Technologies", icon: Cookie },
    { id: "sharing", title: "How We Share Data", icon: Share2 },
    { id: "international", title: "International Transfers", icon: MapPin },
    { id: "retention", title: "Data Retention", icon: Clock },
    { id: "security", title: "Security Measures", icon: Lock },
    { id: "rights", title: "Your Rights", icon: Shield },
    { id: "contact", title: "Contact Us", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
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



  const SectionCard = ({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <div
  id={id}
  className="mb-8 scroll-mt-24"
>
      <div className="relative glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#ff9f1a] border-y-0 border-r-0 hover:border-l-[#ffb84d] transition-all duration-500 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff9f1a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 relative">
  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9f1a] to-[#ffb84d] flex items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.4)]">
    <Icon className="w-7 h-7 text-gray-900" />
  </div>
</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
            {title}
          </h3>
        </div>
        <div className="relative space-y-4 text-gray-400 text-sm sm:text-base">
          {children}
        </div>
      </div>
   </div>
);
  const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg md:text-xl font-semibold text-white mt-4 mb-2">
      {children}
    </h4>
  );

  const BulletList = ({ items }: { items: React.ReactNode[] }) => (
    <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-[#050505] w-full relative">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,159,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,159,26,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
       {[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute w-1 h-1 bg-[#ff9f1a] rounded-full"
    style={{
      left: `${(i * 5.3) % 100}%`,
      top: `${(i * 7.1) % 100}%`,
    }}
    animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
    transition={{
      duration: 3 + (i % 3),
      repeat: Infinity,
      delay: i * 0.15,
    }}
  />
))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-[#00f2ff] via-[#0099ff] to-[#ff9f1a] bg-clip-text text-transparent">
              Privacy Policy
            </span>
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: [0, 10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-[#ff9f1a]" />
            </motion.div>
          </h1>
          <p className="text-sm sm:text-lg text-gray-400 leading-relaxed italic">
            Last updated: March 13, 2026
          </p>
          <motion.p
            className="max-w-4xl mx-auto mt-4 text-gray-400 space-y-4 text-sm sm:text-base"
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p>
              Mahity Systems Private Limited (“<b>Mahity</b>”, “<b>we</b>”, “
              <b>us</b>”, or “<b>our</b>”) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and protect personal data when you use our websites,
              products, and services, including our SaaS platform, web apps, and
              mobile apps (collectively, the “<b>Services</b>”).{" "}
            </p>

            <p>
              This Privacy Policy is intended to meet the transparency
              requirements of global privacy laws, including the EU/UK
              GDPR‑style regimes, India’s Digital Personal Data Protection Act,
              2023 (“<b>DPDP Act</b>”), and other applicable laws, to the extent
              they apply to Mahity’s processing of personal data.{" "}
            </p>
            <p>
              By accessing or using the Services, you acknowledge that you have
              read and understood this Privacy Policy. If you do not agree, you
              should stop using the Services.
            </p>
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-[#ff9f1a] to-transparent"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        

          {/* Main Content */}
   <div className="lg:w-full">
            {/* 1. Who We Are */}
            <SectionCard
              id="who-we-are"
              icon={User}
              title="Who We Are & How to Contact Us"
            >
              <p>
                <b className=" text-white">Controller</b>: For most processing
                described in this Privacy Policy, Mahity Systems Private Limited
                acts as the “data controller” (or “data fiduciary” under the
                DPDP Act), meaning we determine the purposes and means of
                processing personal data. In some cases (for example, where we
                process data purely on behalf of a business customer), we may
                act as a “data processor”; such processing is governed by a
                separate Data Processing Agreement.
              </p>

              <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-1">
                <p className=" py-2">
                  <b>Contact details</b>
                </p>
                <p className="text-white font-semibold">
                  Mahity Systems Private Limited
                </p>
                <div className="text-gray-400 text-xs md:text-sm leading-relaxed space-y-0.5">
                  <p>G-Square Business Park, 1102</p>
                  <p>Opp. Sanpada Railway Station Road, Sector 30A</p>
                  <p>Vashi, Navi Mumbai</p>
                  <p>Maharashtra 400703</p>
                  <p>India</p>
                </div>
                <p>
                  Email:{" "}
                  <span className="text-[#00f2ff]">
                    <a
                      href="mailto:ask@mahity.com"
                      className="text-[#ff9f1a] hover:underline"
                    >
                      ask@mahity.com
                    </a>
                  </span>
                </p>
              </div>
              <p>
                If you are in a jurisdiction that requires it (e.g., certain
                GDPR contexts), you may contact us at this email for
                privacy‑specific questions or to exercise your rights.
              </p>
            </SectionCard>

            {/* 2. Scope */}
            <SectionCard
              id="scope"
              icon={Globe}
              title="Scope of This Privacy Policy"
            >
              <p>This Privacy Policy applies when:</p>
              <BulletList
                items={[
                  "You visit or interact with our websites or web apps.",
                  "You create or use an account on our SaaS platform.",
                  "You attend our online or in‑person events, webinars, or training.",
                  "You communicate with us (e.g., via email, chat, or support tickets).",
                ]}
              />
              <p className="mt-2 font-semibold text-white">
                It does <b>not</b> apply to:
              </p>
              <BulletList
                items={[
                  "Third‑party websites, apps, or services that are linked from our Services but are not controlled by Mahity.",
                  "Customer-controlled environments where Mahity acts solely as a data processor; in those cases, the customer’s privacy policy and Data Processing Agreement apply to how personal data is handled.",
                ]}
              />
            </SectionCard>

            {/* 3. Categories */}
            <SectionCard
              id="categories"
              icon={Database}
              title="Categories of personal data we collect"
            >
              <p>
                The personal data we collect depends on how you use the
                Services. We may collect the following categories:
              </p>

              {[
                {
                  icon: User,
                  label: "Identity & Contact Data",
                  items: [
                    "Name, username, display name",
                    "Email address, phone number",
                    "Company name, job title, department",
                    "Country, city, or general location information",
                  ],
                },
                {
                  icon: Settings,
                  label: "Account & Customer Data",
                  items: [
                    "Account credentials (hashed passwords or login tokens)",
                    "Subscription and plan details",
                    "Tenant / organization identifiers",
                    "Customer support tickets and communications",
                  ],
                },
                {
                  icon: CreditCard,
                  label: "Billing & Transaction Data",
                  items: [
                    "Billing address and contact details",
                    "Partial payment information (e.g., last 4 digits, card type) where needed; full card details are typically processed by our payment processors, not stored by Mahity",
                    "Transaction history, invoices, and tax IDs where applicable",
                  ],
                },
                {
                  icon: BarChart2,
                  label: "Usage & Technical Data",
                  items: [
                    "IP address, device identifiers, and browser type",
                    "Operating system, device type, and settings",
                    "Log data (pages visited, features used, timestamps, referring pages)",
                    "Clicks, scrolls, and other interaction data for analytics and product improvement",
                  ],
                },
                {
                  icon: Mail,
                  label: "Communications & Support Data",
                  items: [
                    "Emails, chats, and messages exchanged with us",
                    "Feedback, survey responses, and feature requests",
                    "Call recordings or transcripts where legally permissible and with notice",
                  ],
                },
                {
                  icon: Server,
                  label: "Content You Upload or Provide",
                  items: [
                    "Files, documents, text, or other content you submit to the platform as part of using our Services",
                    "Metadata associated with uploaded content",
                  ],
                },
              ].map(({ icon: SubIcon, label, items }) => (
                <div
                  key={label}
                  className="rounded-xl bg-white/5 border border-white/10 p-4"
                >
                  <p className="text-white font-semibold mb-2 flex items-center gap-2">
                    <SubIcon className="w-4 h-4 text-[#ff9f1a]" />
                    {label}
                  </p>
                  <BulletList items={items} />
                </div>
              ))}

              <p className="mt-2 text-gray-500 italic">
                We do not intentionally collect sensitive personal data (such as
                special categories under GDPR or highly sensitive categories
                under DPDP) unless it is strictly necessary and clearly
                described at the point of collection, and only with your
                explicit consent or as otherwise permitted by law.
              </p>
            </SectionCard>

            {/* 4. How We Collect */}
            <SectionCard
              id="how-we-collect"
              icon={Eye}
              title="How We Collect Personal Data"
            >
              <p>We collect personal data in the following ways:</p>
              <BulletList
                items={[
                  <>
                    <b className="text-white">Directly from you:</b> When you
                    register for an account, fill out forms, subscribe to a
                    plan, contact support, or otherwise communicate with us.
                  </>,
                  <>
                    <b className="text-white">Automatically:</b> Through
                    cookies, similar technologies, and log files when you use
                    our Services. See our Cookie Policy for details.
                    [web:91][web:121][web:124]
                  </>,
                  <>
                    <b className="text-white">From your organization:</b> If
                    your employer or organization creates an account and adds
                    you as an Authorized User, they may provide your identity
                    and contact information to us.
                  </>,
                  <>
                    <b className="text-white">From third parties:</b> Such as
                    payment processors, analytics providers, or integration
                    partners, in line with this Privacy Policy and applicable
                    law.
                  </>,
                ]}
              />
              <p>
                Where required by the DPDP Act or GDPR, we provide notice before
                or at the time of data collection and ensure any consent is
                informed, specific, and given through a clear affirmative
                action.
              </p>
            </SectionCard>

            {/* 5. Purposes */}
            <SectionCard
              id="purposes"
              icon={FileText}
              title="Purposes and legal bases for processing"
            >
              <p>
                We process personal data for the following purposes and, where
                required, on the following legal bases:
              </p>
              {[
                {
                  title: "Providing and operating the Services",
                  items: [
                    "To create and manage your account.",
                    "To provide features and functionality you request.",
                    "To process transactions, billing, and payments.",
                  ],
                  bases: [
                    "Performance of a contract (or steps prior to entering into a contract).",
                    "Legitimate interests in operating and improving our Services.",
                  ],
                },
                {
                  title: "Customer Support & Communication",
                  items: [
                    "To respond to your queries, requests, and complaints.",
                    "To send transactional or service‑related communications (security alerts, account notices, subscription updates).",
                  ],
                  bases: [
                    "Performance of a contract.",
                    "Legitimate interests in communicating with users and ensuring service quality.",
                  ],
                },
                {
                  title: "Analytics, improvement, and personalization",
                  items: [
                    "To analyze usage patterns, measure performance, and improve our Services.",
                    "To develop new features and services.",
                    "To personalize content, experiences, and recommendations.",
                  ],
                  bases: [
                    "Legitimate interests in improving and developing our Services.",
                    "Consent, where required for the use of certain analytics cookies or identifiers.",
                  ],
                },
                {
                  title: "Marketing & Outreach",
                  items: [
                    "To send you newsletters, product updates, and promotional communications (where permitted).",
                    "To run campaigns, webinars, or events and measure their effectiveness.",
                  ],
                  bases: [
                    "Consent, where required (for example, for email marketing in some regions).",
                    "Legitimate interests in promoting our Services to business customers, subject to applicable opt‑out rules.",
                  ],
                },
                {
                  title: "Security, Fraud Prevention & Compliance",
                  items: [
                    "To monitor and protect the security and integrity of our Services.",
                    "To detect and prevent fraud, abuse, or unauthorized access.",
                    "To comply with legal obligations, respond to lawful requests, and protect our rights, users, and the public.",
                  ],
                  bases: [
                    "Legitimate interests in ensuring security and preventing fraud.",
                    "Compliance with legal obligations.",
                  ],
                },
                {
                  title: "Other purposes with your consent",
                  desc: "Where we rely on consent (for example, for certain uses of cookies, marketing, or processing of sensitive data), we will clearly explain the purpose at the point of collection. You may withdraw your consent at any time, without affecting the lawfulness of processing based on consent before withdrawal.",
                },
              ].map(({ title, items, bases, desc }) => (
                <div
                  key={title}
                  className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-2"
                >
                  <p className="text-white font-semibold">{title}</p>

                  {!desc ? (
                    <>
                      {items && <BulletList items={items} />}
                      {bases && (
                        <>
                          <p className="text-[#00f2ff] text-xs mt-2">
                            <b>Legal bases:</b>
                          </p>
                          {bases.map((item, i) => (
                            <p
                              key={i}
                              className="text-[#00f2ff] text-xs mt-2 ml-2"
                            >
                              {item}
                            </p>
                          ))}
                        </>
                      )}
                    </>
                  ) : (
                    <p>{desc}</p>
                  )}
                </div>
              ))}
            </SectionCard>

            {/* 6. Cookies */}
            <SectionCard
              id="cookies"
              icon={Cookie}
              title="Cookies & Similar Technologies"
            >
              <p>
                We use cookies and similar technologies to operate and improve
                our Services, remember your preferences, and analyze usage. For
                more information about how we use cookies, the types we use, and
                how you can manage your preferences, please see our{" "}
                <span className="text-[#00f2ff] font-semibold underline cursor-pointer">
                  Cookie Policy
                </span>
                .
              </p>
            </SectionCard>

            {/* 7. Sharing */}
            <SectionCard
              id="sharing"
              icon={Share2}
              title="How We Share Personal Data"
            >
              <p className=" text-white">
                We do <b>not</b> sell your personal data. We may share personal
                data with:
              </p>

              {[
                {
                  label: "Service Providers (Processors)",
                  desc: "We share data with trusted third‑party vendors who provide services to us, such as:",
                  items: [
                    "Cloud hosting and infrastructure",
                    "Payment processing",
                    "Analytics and usage monitoring",
                    "Email and communication tools",
                    "Customer support and ticketing tools",
                  ],
                  desc2:
                    "These providers may only process personal data on our instructions and must protect it in accordance with our agreements and applicable law.",
                },
                {
                  label: "Business Customers (Where We Act as Processor)",
                  desc: "If your account is managed by your organization, certain administrators or account owners may access information about your use of the Services, including some personal data, as part of the services they provide to you. In such cases, the organization’s privacy notice governs how they use that data.",
                },
                {
                  label: "Affiliates & Group Companies",
                  desc: "We may share data with our affiliates and group companies for internal administrative purposes, consistent with this Privacy Policy. ",
                },
                {
                  label: "Legal & Compliance",
                  desc: "We may disclose personal data where necessary to:",
                  items: [
                    "Comply with applicable laws, regulations, legal processes, or government requests.",
                    "Enforce our agreements, including our Terms of Use.",
                    "Protect the rights, property, or safety of Mahity, our users, or the public.",
                  ],
                },
                {
                  label: "Business Transfers",
                  desc: "If we are involved in a merger, acquisition, financing, restructuring, or sale of all or a portion of our business, personal data may be transferred as part of that transaction, in compliance with applicable law and subject to appropriate safeguards.",
                },
              ].map(({ label, desc, items, desc2 }) => (
                <div
                  key={label}
                  className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-2"
                >
                  <p className="text-white font-semibold">{label}</p>

                  {desc && <p>{desc}</p>}
                  {items && <BulletList items={items} />}
                  {desc2 && <p>{desc2}</p>}
                </div>
              ))}
            </SectionCard>

            {/* 8. International Transfers */}
            <SectionCard
              id="international"
              icon={MapPin}
              title="International Transfers of Personal Data"
            >
              <p>
                Mahity is based in India but may process personal data globally,
                including in countries that may have different data‑protection
                laws from your country of residence.
              </p>
              <p>
                Where we transfer personal data internationally, we will take
                appropriate steps to ensure an adequate level of protection,
                such as:
              </p>
              <BulletList
                items={[
                  "Using standard contractual clauses or equivalent safeguards for transfers from the EEA/UK where required by GDPR.",
                  "Complying with DPDP Act requirements for cross‑border transfers, including any “negative list” restrictions and “deemed consent” provisions where applicable.",
                  " Implementing contractual and technical safeguards with our service providers and partners.",
                ]}
              />
              <p>
                You can contact us for more information about the specific
                safeguards applied to international transfers that concern you.
              </p>
            </SectionCard>

            {/* 9. Data Retention */}
            <SectionCard id="retention" icon={Clock} title="Data Retention">
              <p>
                We retain personal data for as long as necessary to fulfill the
                purposes for which it was collected, including to:
              </p>
              <BulletList
                items={[
                  "Provide and maintain the Services.",
                  "Comply with legal, tax, and accounting obligations.",
                  "Resolve disputes and enforce our agreements.",
                ]}
              />
              <p>
                When personal data is no longer needed for these purposes, we
                will delete it or anonymize it, unless a longer retention period
                is required or permitted by law (for example, for audit or fraud
                prevention).
              </p>
              <p>
                Retention periods may vary based on the type of data and the
                context of processing. If you request deletion of your account
                or data, we will follow the steps described in Section 10,
                subject to our legal obligations and legitimate interests.
              </p>
            </SectionCard>

            {/* 10. Your Rights */}
            <SectionCard
              id="rights"
              icon={Shield}
              title="Your rights and choices"
            >
              <p>
                Your rights will depend on the laws that apply where you live
                and how we interact with you, but may include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    right: "Access",
                    desc: "To obtain confirmation and a copy of personal data we hold about you.",
                  },
                  {
                    right: "Rectification",
                    desc: "To correct inaccurate or incomplete personal data",
                  },
                  {
                    right: "Erasure",
                    desc: "To request deletion of personal data in certain circumstances.",
                  },
                  {
                    right: "Restriction",
                    desc: "To request we restrict processing under certain conditions.",
                  },
                  {
                    right: "Portability",
                    desc: "To receive personal data in a structured, commonly used, machine‑readable format and transmit it to another controller where technically feasible.",
                  },
                  {
                    right: "Objection",
                    desc: "To object to processing based on legitimate interests or direct marketing.",
                  },
                  {
                    right: "Withdraw Consent",
                    desc: "Where we rely on consent, you can withdraw it at any time.",
                  },
                ].map(({ right, desc }) => (
                  <div
                    key={right}
                    className="rounded-xl bg-white/5 border border-white/10 p-3"
                  >
                    <p className="text-[#ff9f1a] font-semibold text-sm">
                      {right}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{desc}</p>
                  </div>
                ))}
              </div>

              <p>Under the DPDP Act, you may also have rights to:</p>

              <BulletList
                items={[
                  "Access and correct personal data.",
                  "Withdraw consent and seek erasure where consent is the legal basis.",
                  "Lodge grievances and complaints with a designated grievance officer or the Data Protection Board.",
                ]}
              />
              <p>
                To exercise your rights, please contact us using the details in
                Section 1. We may need to verify your identity before
                responding. We will respond in accordance with applicable law.
              </p>
              <p>
                You also have the right to lodge a complaint with your local
                data‑protection authority or the Data Protection Board of India
                (for DPDP matters) if you believe your rights have been
                violated.
              </p>
            </SectionCard>

            {/* 11. Security */}
            <SectionCard id="security" icon={Lock} title="Security">
              <p>
                We use appropriate technical and organizational measures
                designed to protect personal data against unauthorized access,
                loss, misuse, or alteration, taking into account the nature of
                the data and the risks involved. These may include:
              </p>
              <BulletList
                items={[
                  "Access controls and authentication",
                  "Encryption in transit and/or at rest where appropriate",
                  "Network and application security measures",
                  "Logging and monitoring",
                  "Employee training and confidentiality commitments",
                ]}
              />
              <p>
                However, no system can be 100% secure, and we cannot guarantee
                absolute security. You are responsible for maintaining the
                confidentiality of any login credentials and for promptly
                notifying us of any suspected unauthorized access to your
                account.
              </p>
            </SectionCard>

            {/* 12. Cookies */}
            <SectionCard
              id="childrens"
              icon={Cookie}
              title="Children’s privacy"
            >
              <p>
                Our Services are not directed to children under 13, or a higher
                age where required by local law (e.g., 16 for certain online
                consent). We do not knowingly collect personal data from
                children under such ages. If we learn that a child has provided
                personal data in violation of this policy, we will take steps to
                delete such data.
              </p>
            </SectionCard>

            {/* 13. Links to other websites */}
            <SectionCard
              id="links"
              icon={SquareArrowOutUpRight}
              title="Links to other websites"
            >
              <p>
                Our Services may contain links to third‑party websites or
                services. This Privacy Policy does not apply to those third
                parties, and we are not responsible for their privacy practices.
                We encourage you to review the privacy policies of any
                third‑party sites or services you visit.
              </p>
            </SectionCard>

            {/* 14. Changes to this Privacy Policy */}
            <SectionCard
              id="changes"
              icon={RefreshCw}
              title="Changes to this Privacy Policy"
            >
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technologies, or legal requirements.
                When we make material changes, we will update the “Last updated”
                date at the top and, where required, provide additional notice
                (e.g., by email or a prominent notice in the Services).
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we protect your information.
              </p>
            </SectionCard>

            {/* 15. Contact */}
            <SectionCard id="contact" icon={Mail} title="Contact Us">
              <p>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or our handling of personal data, you can contact
                us at:
              </p>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 space-y-2">
                <p className="text-white font-semibold">
                  Mahity Systems Private Limited
                </p>
                <div className="text-gray-400 text-xs md:text-sm leading-relaxed space-y-0.5">
                  <p>G-Square Business Park, 1102</p>
                  <p>Opp. Sanpada Railway Station Road, Sector 30A</p>
                  <p>Vashi, Navi Mumbai</p>
                  <p>Maharashtra 400703</p>
                  <p>India</p>
                </div>
                <p>
                  Email:{" "}
                  <span className="text-[#00f2ff]">
                    <a
                      href="mailto:ask@mahity.com"
                      className="text-[#ff9f1a] hover:underline"
                    >
                      ask@mahity.com
                    </a>
                  </span>
                </p>
              </div>
              <p>
                If you are located in a region with specific privacy rights
                (such as the EU/EEA, UK, or India), you may also contact your
                local data‑protection authority or the Data Protection Board of
                India if you are not satisfied with our response.
              </p>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
