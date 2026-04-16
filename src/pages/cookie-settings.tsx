"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Cookie, Shield, RefreshCw, Mail,
  CheckCircle2, Info, ChevronRight,
} from "lucide-react";

type SectionId =
  | "what" | "who" | "types" | "legal" | "use"
  | "manage" | "personal" | "third" | "changes" | "contact";

const SECTIONS: { id: SectionId; num: string; label: string; color: string }[] = [
  { id: "what",     num: "01", label: "What Are Cookies?",      color: "#ff9f1a" },
  { id: "who",      num: "02", label: "Who Sets Cookies?",       color: "#00f2ff" },
  { id: "types",    num: "03", label: "Types of Cookies",        color: "#ff9f1a" },
  { id: "legal",    num: "04", label: "Legal Basis & Consent",   color: "#00f2ff" },
  { id: "use",      num: "05", label: "How We Use Cookies",      color: "#ff9f1a" },
  { id: "manage",   num: "06", label: "Managing Your Choices",   color: "#00f2ff" },
  { id: "personal", num: "07", label: "Cookies & Personal Data", color: "#ff9f1a" },
  { id: "third",    num: "08", label: "Third Party Cookies",     color: "#00f2ff" },
  { id: "changes",  num: "09", label: "Changes to This Policy",  color: "#ff9f1a" },
  { id: "contact",  num: "10", label: "Contact Us",              color: "#00f2ff" },
];

const Pill = ({ children, color = "#ff9f1a" }: { children: React.ReactNode; color?: string }) => (
  <span
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono border"
    style={{ borderColor: `${color}45`, background: `${color}12`, color }}
  >
    {children}
  </span>
);

const Callout = ({ color = "#ff9f1a", icon: Icon = Info, children }: {
  color?: string; icon?: React.ElementType; children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl border my-5"
    style={{ borderColor: `${color}28`, background: `${color}09` }}>
    <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} />
    <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
  </div>
);

const FeatureGrid = ({ items }: { items: { emoji: string; title: string; desc: string; color: string }[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
    {items.map((item, i) => (
      <motion.div key={i} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
        className="p-4 sm:p-5 rounded-2xl border relative overflow-hidden group cursor-default"
        style={{ borderColor: `${item.color}22`, background: `${item.color}07` }}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(135deg, ${item.color}12, transparent 70%)` }} />
        <div className="relative">
          <div className="text-2xl mb-3">{item.emoji}</div>
          <div className="font-bold text-sm mb-1" style={{ color: item.color }}>{item.title}</div>
          <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const CookieTypeBlock = ({ num, title, color, children }: {
  num: string; title: string; color: string; children: React.ReactNode;
}) => (
  <div className="border rounded-2xl overflow-hidden mb-4" style={{ borderColor: `${color}22` }}>
    <div className="flex items-center gap-3 px-5 py-4"
      style={{ background: `${color}09`, borderBottom: `1px solid ${color}18` }}>
      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md"
        style={{ background: `${color}18`, color }}>{num}</span>
      <span className="font-bold text-white text-sm sm:text-base">{title}</span>
    </div>
    <div className="px-5 py-4 text-sm text-gray-300 leading-relaxed">{children}</div>
  </div>
);

const Section = ({ id, num, title, color, children }: {
  id: SectionId; num: string; title: string; color: string; children: React.ReactNode;
}) => (
  <motion.section id={`s-${id}`}
    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.06 }} transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative py-12 sm:py-14 border-b border-white/[0.05] last:border-0"
  >
    <div className="absolute right-0 top-4 font-black leading-none select-none pointer-events-none font-mono"
      style={{ fontSize: "clamp(80px, 12vw, 140px)", color, opacity: 0.05, lineHeight: 1 }}>
      {num}
    </div>
    <div className="relative">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center justify-center rounded-xl font-black font-mono flex-shrink-0"
          style={{ width: "48px", height: "48px", fontSize: "15px", background: `${color}18`, border: `1.5px solid ${color}40`, color }}>
          {num}
        </div>
        <div className="h-px flex-1" style={{ background: `${color}20` }} />
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-7 leading-tight tracking-tight">
        {title}
      </h2>
      <div className="max-w-3xl">{children}</div>
    </div>
  </motion.section>
);

export default function CookiePolicy() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState<SectionId>("what");
  const [pastHero, setPastHero] = useState(false);
const [nearFooter, setNearFooter] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => { setLoaded(true); }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroH = heroRef.current?.offsetHeight ?? window.innerHeight;
      setPastHero(y > heroH * 0.6);
      const scrollY = y + 100;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(`s-${SECTIONS[i].id}`);
        if (el && el.getBoundingClientRect().top + y <= scrollY) {
          setActive(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const goto = (id: SectionId) => {
    const el = document.getElementById(`s-${id}`);
    if (!el) return;
    const navHeight = 72;
    const rect = el.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    window.scrollTo({ top: absoluteTop - navHeight - 20, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

    
      <motion.div style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-[#ff9f1a] via-[#ffdd88] to-[#00f2ff]" />
      </motion.div>

    
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[5%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,159,26,0.05) 0%, transparent 65%)" }} />
        <motion.div animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 7 }}
          className="absolute bottom-[10%] right-[5%] w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,242,255,0.04) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "radial-gradient(circle, #ff9f1a 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, #050505 100%)" }} />
      </div>

  
<div ref={heroRef} className="relative z-10 flex flex-col items-center justify-center text-center"
  style={{ minHeight: "100vh", padding: "100px 5vw 60px 5vw" }}>

 
  <div className="overflow-hidden leading-none mb-0">
    <motion.h1 initial={{ y: 90 }} animate={loaded ? { y: 0 } : {}}
      transition={{ delay: 0.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="font-black leading-[0.88] tracking-tighter text-white"
      style={{ fontSize: "clamp(72px, 11vw, 140px)" }}>
      Cookie
    </motion.h1>
  </div>
  <div className="overflow-hidden leading-none mb-10">
    <motion.h1 initial={{ y: 90 }} animate={loaded ? { y: 0 } : {}}
      transition={{ delay: 0.35, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="font-black leading-[0.88] tracking-tighter"
      style={{ fontSize: "clamp(72px, 11vw, 140px)", WebkitTextStroke: "2.5px #ff9f1a", color: "transparent" }}>
      Policy
    </motion.h1>
  </div>

 
  <motion.div initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.55, duration: 0.6 }}
    className="max-w-2xl mx-auto space-y-4 text-gray-400 text-base leading-relaxed mb-8">
    <p>
      This Cookie Policy explains how{" "}
      <span className="text-white font-semibold">Mahity Systems Private Limited</span>{" "}
      ("Mahity", "we", "us", or "our") uses cookies and similar tracking technologies on our
      websites, applications, and online services (collectively, the "Services"). It should
      be read together with our Privacy Policy.
    </p>
    <p>
      By clicking "Accept" on our cookie banner or continuing to use our Services after
      seeing the banner (where permitted by law), you consent to our use of cookies as
      described in this policy. Where required by law (for example, under GDPR/ePrivacy or
      India's DPDP regime), we will not set non-essential cookies until you have given
      explicit consent through our cookie banner or settings.
    </p>
  </motion.div>

  
  <motion.div initial={{ opacity: 0 }} animate={loaded ? { opacity: 1 } : {}}
    transition={{ delay: 0.75, duration: 0.5 }}
    className="flex flex-wrap justify-center gap-2.5 mb-10">
    <Pill color="#ff9f1a"><RefreshCw className="w-3 h-3" /> Last updated: [insert date]</Pill>
    <Pill color="#00f2ff"><Shield className="w-3 h-3" /> GDPR / DPDP Compliant</Pill>

  </motion.div>

 
  <motion.div initial={{ scaleX: 0 }} animate={loaded ? { scaleX: 1 } : {}}
    transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
    className="w-full max-w-2xl mx-auto h-px origin-center"
    style={{ background: "linear-gradient(90deg, transparent, #ff9f1a, rgba(0,242,255,0.4), #ff9f1a, transparent)" }} />

  
</div>

     
      <div className="relative z-10">

       
     <motion.div
  animate={{ opacity: pastHero && !nearFooter ? 1 : 0, x: pastHero && !nearFooter ? 0 : -12 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="hidden lg:flex fixed z-50 flex-col justify-center"
  style={{
    top: "72px",
    left: 0,
    bottom: "80px",
    width: "240px",
    pointerEvents: pastHero && !nearFooter ? "auto" : "none",
  }}
>
  <div className="pl-8 xl:pl-10 pr-4 overflow-y-auto" style={{ maxHeight: "100%", paddingBottom: "24px" }}>
    <div className="mb-5">
      <span className="text-[16px] font-mono font-bold tracking-[0.35em] uppercase text-gray-300">
        Sections
      </span>
    </div>
    <nav className="space-y-0.5">
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <button key={s.id} onClick={() => goto(s.id)}
            className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg transition-all duration-200 text-left"
            style={{ background: isActive ? `${s.color}12` : "transparent" }}>
            <motion.div
              animate={{ height: isActive ? 28 : 14, opacity: isActive ? 1 : 0.22 }}
              transition={{ duration: 0.22 }}
              className="w-[3px] rounded-full flex-shrink-0"
              style={{ background: s.color }} />
            <span className="text-sm font-medium leading-tight transition-colors duration-200"
              style={{ color: isActive ? "#e5e7eb" : "#888" }}>
              {s.label}
            </span>
          </button>
        );
      })}
    </nav>
  </div>
</motion.div>

       
        <main className="lg:pl-[240px] xl:pl-[260px] px-6 sm:px-10 lg:pr-10 xl:pr-20 pb-24">
          <div className="lg:border-l lg:border-white/[0.06] lg:pl-10 xl:pl-14 max-w-4xl">

            <Section id="what" num="01" title="What Are Cookies?" color="#ff9f1a">
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>Cookies are small text files that are placed on your device (computer, tablet, mobile) when you visit a website. They are widely used to make websites work, to improve performance, and to provide information to the site owners and their partners.</p>
                <Callout color="#ff9f1a" icon={Info}>
                  Similar technologies (such as pixels, web beacons, local storage, SDKs, or device identifiers) may perform a similar function, and we refer to all of these collectively as{" "}
                  <span className="text-white font-semibold">cookies</span> in this policy.
                </Callout>
              </div>
            </Section>

            <Section id="who" num="02" title="Who Sets Cookies?" color="#00f2ff">
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>Cookies may be set by:</p>
                <FeatureGrid items={[
                  { emoji: "🏢", title: "First-party cookies", desc: "Placed by Mahity when you visit our Services.", color: "#ff9f1a" },
                  { emoji: "🔗", title: "Third-party cookies", desc: "Placed by third parties such as analytics providers, advertising networks, or social media platforms.", color: "#00f2ff" },
                ]} />
                <p>Third-party cookies may collect data about your online activities over time and across different websites and services.</p>
              </div>
            </Section>

            <Section id="types" num="03" title="Types of Cookies We Use" color="#ff9f1a">
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
                <p className="mb-6">We use the following categories of cookies:</p>
                <CookieTypeBlock num="3.1" title="Strictly Necessary (Essential) Cookies" color="#ff9f1a">
                  <div className="space-y-3">
                    <p>These cookies are essential for the operation of our Services and cannot be switched off in our systems. They are usually only set in response to actions you take, such as logging in, setting your privacy preferences, or filling in forms. Without these cookies, some parts of the Services may not function properly.</p>
                    <p>Because they are strictly necessary, we do not require your consent to use these cookies (where permitted by applicable law).</p>
                    <div className="pt-2">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Examples (illustrative, not exhaustive):</p>
                      <div className="flex flex-wrap gap-2">
                        {[{ name: "csrf_token", desc: "Prevents cross-site request forgery." }, { name: "session_id", desc: "Keeps you logged in as you navigate pages." }]
                          .map((c, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#ff9f1a]/20 bg-[#ff9f1a]/5">
                              <code className="text-[#ff9f1a] font-mono text-xs font-bold">{c.name}</code>
                              <span className="text-gray-500 text-xs hidden sm:inline">— {c.desc}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </CookieTypeBlock>
                <CookieTypeBlock num="3.2" title="Functional (Preference) Cookies" color="#00f2ff">
                  <p>These cookies enable the Services to provide enhanced functionality and personalization, such as remembering your language, region, or other preferences. If you do not allow these cookies, some or all of these features may not function properly. We will ask for your consent to use these cookies where required by law.</p>
                </CookieTypeBlock>
                <CookieTypeBlock num="3.3" title="Analytics and Performance Cookies" color="#ff9f1a">
                  <p>These cookies help us understand how visitors use our Services, so we can measure and improve performance. They allow us to count visits and traffic sources, see which pages are most and least popular, and understand how users move around the site. These cookies will only be set with your consent where required (e.g., in the EU/EEA, UK, and other opt-in jurisdictions).</p>
                </CookieTypeBlock>
                <CookieTypeBlock num="3.4" title="Advertising and Marketing Cookies" color="#00f2ff">
                  <p>These cookies may be set by us or by our advertising partners to show you relevant adverts on our Services or on other sites, and to measure the effectiveness of campaigns. We will only use advertising/marketing cookies with your prior consent where required by law (for example, under GDPR/ePrivacy and DPDP). You can withdraw your consent at any time via our cookie settings.</p>
                </CookieTypeBlock>
              </div>
            </Section>

            <Section id="legal" num="04" title="Legal Basis and Consent" color="#00f2ff">
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>Where required by applicable laws (including EU/UK GDPR, the ePrivacy Directive, and India's Digital Personal Data Protection Act 2023), we rely on:</p>
                <div className="space-y-3">
                  {[
                    { label: "Legitimate interests", desc: "For strictly necessary cookies that are essential to provide the Services you request.", color: "#ff9f1a" },
                    { label: "Your consent", desc: "For functional, analytics, and marketing cookies that are not strictly necessary.", color: "#00f2ff" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl border"
                      style={{ borderColor: `${item.color}22`, background: `${item.color}07` }}>
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                      <p><span className="font-bold" style={{ color: item.color }}>{item.label}</span> – {item.desc}</p>
                    </div>
                  ))}
                </div>
                <p>Consent must be freely given, specific, informed, and indicated by a clear affirmative action (for example, clicking "Accept" in our cookie banner or managing your preferences). We will not use pre-checked boxes or implied consent where the law requires an active choice.</p>
                <p>You may withdraw or change your consent at any time through our cookie settings or as described below. Withdrawing consent will not affect the lawfulness of processing based on consent before its withdrawal.</p>
              </div>
            </Section>

            <Section id="use" num="05" title="How We Use Cookies" color="#ff9f1a">
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>Depending on the cookie type, we use cookies:</p>
                <div className="divide-y divide-white/[0.05]">
                  {[
                    { icon: "🔐", text: "To enable core functionality such as secure login, load balancing, and session management." },
                    { icon: "⚙️", text: "To remember your settings and choices (e.g., language, timezone, display preferences)." },
                    { icon: "📊", text: "To understand how our Services are used, which features are most used, and where we can improve." },
                    { icon: "🛡️", text: "To help us detect and prevent fraud, abuse, and security incidents." },
                    { icon: "📢", text: "To show you relevant content, communications, and advertisements and measure their effectiveness." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-3.5">
                      <span className="text-lg w-7 flex-shrink-0">{item.icon}</span>
                      <p className="text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="manage" num="06" title="Managing Cookies and Your Choices" color="#00f2ff">
              <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                {[
                  {
                    sub: "6.1", label: "Cookie Banner and Preference Center", color: "#ff9f1a",
                    content: (<>
                      <p className="mb-3">When you first visit our Services (and periodically thereafter, as required by law), you will see a cookie banner or pop-up that allows you to:</p>
                      <ul className="space-y-2 mb-3">
                        {["Accept all cookies.", "Reject non-essential cookies.", "Manage your preferences by category (e.g., functional, analytics, marketing)."]
                          .map((t, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <ChevronRight className="w-3.5 h-3.5 text-[#ff9f1a] flex-shrink-0 mt-0.5" />
                              <span>{t}</span>
                            </li>
                          ))}
                      </ul>
                      <p className="mb-2">You can change your cookie preferences at any time by clicking the "Cookie Settings" link in our footer / account settings.</p>
                      <p>We will honor your choices, but please note that disabling certain cookies may affect functionality or personalization of the Services.</p>
                    </>),
                  },
                  {
                    sub: "6.2", label: "Browser Settings", color: "#00f2ff",
                    content: (<p>Most web browsers allow you to control cookies through their settings, including blocking or deleting cookies. If you block all cookies, including essential ones, you may not be able to access or use some parts of our Services.</p>),
                  },
                  {
                    sub: "6.3", label: '"Do Not Track" and Global Privacy Controls', color: "#ff9f1a",
                    content: (<p>Some browsers and extensions provide "Do Not Track" (DNT) or Global Privacy Control (GPC) signals. Where required by law, we will treat such signals as an opt-out or refusal of non-essential cookies to the extent technically feasible and supported by our systems.</p>),
                  },
                ].map((block, i) => (
                  <div key={i}>
                    {i > 0 && <div className="h-px bg-white/[0.05] mb-6" />}
                    <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
                      <span className="font-mono text-xs px-2 py-0.5 rounded-md"
                        style={{ background: `${block.color}18`, color: block.color }}>{block.sub}</span>
                      {block.label}
                    </h3>
                    {block.content}
                  </div>
                ))}
              </div>
            </Section>

            <Section id="personal" num="07" title="Cookies and Personal Data" color="#ff9f1a">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Some cookies collect information that may be considered personal data under applicable data-protection laws (for example, IP address, device identifiers, or identifiers associated with your account). Where this is the case, our use of cookies will also be subject to our Privacy Policy, which explains your rights and how to exercise them. Depending on your location, you may have rights such as access, correction, deletion, restriction, objection, or portability of personal data processed via cookies, as well as the right to withdraw consent.
              </p>
            </Section>

            <Section id="third" num="08" title="Cookies Used by Third Parties" color="#00f2ff">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Our Services may integrate content or features from third parties (for example, analytics services, payment processors, embedded videos, or social media plugins). These third parties may place their own cookies on your device and collect information about your online activities over time and across different websites. We do not control the cookies used by these third parties. You should review their privacy and cookie policies for more information.
              </p>
            </Section>

            <Section id="changes" num="09" title="Changes to This Cookie Policy" color="#ff9f1a">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our use of cookies, applicable laws, or technical and business developments. When we make material changes, we will notify you by updating the "Last updated" date at the top of this policy and, where required, by showing a notice or banner on our Services. We encourage you to review this Cookie Policy periodically.
              </p>
            </Section>

          
            <motion.section id="s-contact" 
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
              className="relative py-12 sm:py-14 pb-4">
              <div className="flex items-center gap-3 mb-8">
                 <div className="absolute right-0 top-4 font-black leading-none select-none pointer-events-none font-mono"
    style={{ fontSize: "clamp(80px, 12vw, 140px)", color: "#00f2ff", opacity: 0.05, lineHeight: 1 }}>
    10
  </div>
                <div className="h-px flex-1" style={{ background: "#00f2ff20" }} />
              </div>
              <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 border"
                style={{ borderColor: "#ff9f1a20", background: "linear-gradient(135deg, rgba(255,159,26,0.06) 0%, rgba(0,242,255,0.03) 50%, rgba(0,153,255,0.04) 100%)" }}>
                <motion.div animate={{ x: ["-100%", "220%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 5 }}
                  className="absolute top-0 left-0 w-1/3 h-full pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,159,26,0.05), transparent)" }} />
                <div className="relative flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                  <motion.div animate={{ rotate: [0, 360] }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="flex-shrink-0 w-20 h-20 mx-auto md:mx-0 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed opacity-20" style={{ borderColor: "#ff9f1a" }} />
                    <div className="absolute inset-3 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #ff9f1a, #ffdd88)" }}>
                      <Mail className="w-8 h-8 text-[#050505]" />
                    </div>
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                  
                    <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">Contact Us</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-md">
                      If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at:
                    </p>
                    <motion.a href="mailto:[insert contact email]"
                      whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm"
                      style={{ background: "linear-gradient(135deg, #ff9f1a, #ffdd88)", color: "#050505", boxShadow: "0 0 28px rgba(255,159,26,0.25)" }}>
                      <Mail className="w-4 h-4" />
                      [insert contact email]
                    </motion.a>
                    <p className="mt-4 text-xs text-gray-600">You may also contact us using the details provided in our Privacy Policy.</p>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </main>
      </div>
    </div>
  );
}