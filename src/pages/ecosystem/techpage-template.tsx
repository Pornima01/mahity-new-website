// import React, { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { fetchTechPage } from "../../lib/strapi";

// const PAGE_BG = "#050505";

// const useWindowWidth = () => {
//   const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
//   useEffect(() => {
//     const h = () => setW(window.innerWidth);
//     window.addEventListener("resize", h);
//     return () => window.removeEventListener("resize", h);
//   }, []);
//   return w;
// };

// const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

// const TechPageTemplate: React.FC = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const [page, setPage] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const heroRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
//   const width = useWindowWidth();
//   const isMobile = width < 640;

//   useEffect(() => {
//     if (slug) {
//       fetchTechPage(slug).then((data) => {
//         setPage(data);
//         setLoading(false);
//       });
//     }
//   }, [slug]);

//   if (loading) return (
//     <div style={{ background: PAGE_BG, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
//       <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
//         style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.08)", borderTopColor: "#e8b84b" }} />
//       <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" }}>Loading</p>
//     </div>
//   );

//   if (!page) return (
//     <div style={{ background: PAGE_BG, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
//       <span style={{ fontSize: 64, color: "#fff" }}>404</span>
//       <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 16 }}>Page not found</p>
//     </div>
//   );

//   const A = page.accent_color || "#e8b84b";
//   const A10 = A + "1a";

//   return (
//     <div style={{ background: PAGE_BG, minHeight: "100vh", overflowX: "hidden" }}>

//       {/* ══ HERO ══ */}
//       <div ref={heroRef} style={{ position: "relative", minHeight: isMobile ? "auto" : "88vh",
//         display: "flex", alignItems: "center", overflow: "hidden", paddingBottom: isMobile ? 40 : 0 }}>

//         <motion.div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
//           <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
//             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//             style={{ position: "absolute", top: "-10%", left: "-5%",
//               width: isMobile ? 300 : 700, height: isMobile ? 300 : 700,
//               background: `radial-gradient(circle, ${A}18 0%, transparent 65%)`, filter: "blur(60px)" }} />
//           <motion.div animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
//             transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//             style={{ position: "absolute", bottom: "0%", right: "-10%",
//               width: isMobile ? 250 : 500, height: isMobile ? 250 : 500,
//               background: `radial-gradient(circle, ${A}0f 0%, transparent 65%)`, filter: "blur(80px)" }} />
//         </motion.div>

//         <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
//           backgroundImage: `linear-gradient(${A}08 1px, transparent 1px), linear-gradient(90deg, ${A}08 1px, transparent 1px)`,
//           backgroundSize: "60px 60px" }} />
//         <div style={{ position: "absolute", inset: 0, backgroundImage: NOISE, pointerEvents: "none", opacity: 0.6 }} />
//         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
//           background: `linear-gradient(to bottom, transparent, ${PAGE_BG})`, pointerEvents: "none" }} />

//         <motion.div style={{ y: heroY, opacity: heroOpacity, position: "relative", zIndex: 2,
//           width: "100%", maxWidth: 1200, margin: "0 auto",
//           padding: isMobile ? "100px 20px 40px" : "80px 48px 60px" }}>

//           <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
//               padding: "6px 16px", borderRadius: 999, border: `1px solid ${A}44`,
//               background: A10, backdropFilter: "blur(8px)" }}>
//             <div style={{ width: 6, height: 6, borderRadius: "50%", background: A, boxShadow: `0 0 8px ${A}` }} />
//             <span style={{ color: A, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
//               {page.category}
//             </span>
//           </motion.div>

//           <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             style={{ fontSize: isMobile ? "1.9rem" : "clamp(2rem, 3.8vw, 3.2rem)", fontWeight: 900,
//               color: "#fff", lineHeight: 1.1, marginBottom: 20, maxWidth: 800, letterSpacing: "-0.02em" }}>
//             {page.hero_title?.split(page.name).map((part: string, i: number) => (
//               <React.Fragment key={i}>
//                 {i > 0 && (
//                   <span style={{ background: `linear-gradient(135deg, ${A}, ${A}bb)`,
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//                     {page.name}
//                   </span>
//                 )}
//                 {part}
//               </React.Fragment>
//             ))}
//           </motion.h1>

//           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             style={{ fontSize: isMobile ? 15 : 17, color: "rgba(255,255,255,0.45)",
//               maxWidth: 580, lineHeight: 1.85, marginBottom: 28 }}>
//             {page.hero_description}
//           </motion.p>

//           {/* Hero bullets */}
//           {page.hero_bullets && Array.isArray(page.hero_bullets) && page.hero_bullets.length > 0 && (
//             <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//               transition={{ delay: 0.28 }}
//               style={{ listStyle: "none", padding: 0, marginBottom: 36,
//                 display: "flex", flexDirection: "column", gap: 10 }}>
//               {page.hero_bullets.map((b: string, i: number) => (
//                 <motion.li key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.32 + i * 0.08 }}
//                   style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                   <div style={{ width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
//                     background: `${A}22`, border: `1px solid ${A}55`,
//                     display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
//                       <path d="M2 5l2.5 2.5L8 3" stroke={A} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   </div>
//                   <span style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? 13 : 15 }}>{b}</span>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}

//           <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.42 }}
//             style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//             <CTAButton href="/contact-us" accent={A} filled>
//               {page.cta_primary || "Get Started"}
//             </CTAButton>
//             <CTAButton href="/contact-us" accent={A}>
//               {page.cta_secondary || "Learn More"}
//             </CTAButton>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* ══ STATS BAR ══ */}
//       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }} transition={{ duration: 0.6 }}
//         style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px 48px" : "0 48px 64px" }}>
//         <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
//           gap: isMobile ? 12 : 16, padding: isMobile ? "20px" : "28px 36px",
//           background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
//           border: `1px solid ${A}22`, borderRadius: 16, backdropFilter: "blur(12px)" }}>
//           {[
//             { value: "24/7", label: "Support" },
//             { value: "99.9%", label: "Uptime SLA" },
//             { value: "50+", label: "Deployments" },
//             { value: "< 2h", label: "Response Time" },
//           ].map((s, i) => (
//             <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }} transition={{ delay: i * 0.08 }}
//               style={{ textAlign: "center", padding: "12px 0" }}>
//               <div style={{ fontSize: isMobile ? 22 : 28, fontWeight: 900,
//                 background: `linear-gradient(135deg, ${A}, ${A}99)`,
//                 WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                 backgroundClip: "text", marginBottom: 4 }}>{s.value}</div>
//               <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)",
//                 fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* ══ WHY SECTION ══ */}
//       {page.why_title && (
//         <FeatureSection title={page.why_title} description={page.why_description}
//           bullets={page.why_bullets} accent={A} index={0} isMobile={isMobile} />
//       )}

//       {/* ══ SECTION 2 + CALLOUT ══ */}
//       {page.section2_title && (
//         <>
//           <FeatureSection title={page.section2_title} description={page.section2_description}
//             bullets={page.section2_bullets} accent={A} index={1} isMobile={isMobile} variant="card" />
//           {page.callout_quote && (
//             <CalloutQuote quote={page.callout_quote} accent={A} isMobile={isMobile} />
//           )}
//         </>
//       )}

//       {/* ══ SECTION 3 ══ */}
//       {page.section3_title && (
//         <FeatureSection title={page.section3_title} description={page.section3_description}
//           bullets={page.section3_bullets} accent={A} index={2} isMobile={isMobile} />
//       )}

//       {/* ══ SECTION 4 ══ */}
//       {page.section4_title && (
//         <FeatureSection title={page.section4_title} description={page.section4_description}
//           bullets={page.section4_bullets} accent={A} index={3} isMobile={isMobile} variant="card" />
//       )}

//       {/* ══ SECTION 5 (Use-Cases) ══ */}
//       {page.section5_title && (
//         <FeatureSection title={page.section5_title} description={page.section5_description}
//           bullets={page.section5_bullets} accent={A} index={4} isMobile={isMobile} />
//       )}

//       {/* ══ CTA BANNER ══ */}
//       <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }} transition={{ duration: 0.7 }}
//         style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px 64px" : "0 48px 80px" }}>
//         <div style={{ position: "relative", padding: isMobile ? "40px 24px" : "56px 64px",
//           borderRadius: 20, overflow: "hidden", textAlign: "center",
//           background: `linear-gradient(135deg, ${A}18, ${A}08)`, border: `1px solid ${A}33` }}>
//           <div style={{ position: "absolute", inset: 0, backgroundImage: NOISE, opacity: 0.5 }} />
//           <div style={{ position: "relative", zIndex: 1 }}>
//             <h2 style={{ fontSize: isMobile ? "1.6rem" : "2.2rem", fontWeight: 900, color: "#fff", marginBottom: 12 }}>
//               Ready to modernize on <span style={{ color: A }}>{page.name}</span>?
//             </h2>
//             <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 14 : 16,
//               maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>
//               Let's build a plan tailored to your infrastructure and goals.
//             </p>
//             <CTAButton href="/contact-us" accent={A} filled large>
//               Book a Free Assessment
//             </CTAButton>
//           </div>
//         </div>
//       </motion.div>

//       {/* ══ FAQ ══ */}
//       {page.faq && page.faq.length > 0 && (
//         <FAQSection faq={page.faq} accent={A} isMobile={isMobile} />
//       )}

//       <div style={{ height: 80 }} />
//     </div>
//   );
// };

// /* ── CTA BUTTON ── */
// const CTAButton: React.FC<{
//   href: string; accent: string; filled?: boolean; large?: boolean; children: React.ReactNode;
// }> = ({ href, accent, filled, large, children }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <motion.a href={href} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//       onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
//       style={{ display: "inline-flex", alignItems: "center", gap: 8,
//         padding: large ? "16px 36px" : "12px 28px", borderRadius: 10,
//         fontWeight: 700, fontSize: large ? 16 : 14, textDecoration: "none",
//         transition: "box-shadow 0.2s",
//         background: filled ? (hovered ? `${accent}ee` : accent) : "transparent",
//         color: filled ? "#000" : accent,
//         border: filled ? "none" : `1.5px solid ${accent}55`,
//         boxShadow: filled && hovered ? `0 0 32px ${accent}55` : "none" }}>
//       {children}
//       {filled && <span style={{ fontSize: 16 }}>→</span>}
//     </motion.a>
//   );
// };

// /* ── CALLOUT QUOTE ── */
// const CalloutQuote: React.FC<{ quote: string; accent: string; isMobile: boolean }> = ({ quote, accent, isMobile }) => (
//   <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }} transition={{ duration: 0.6 }}
//     style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px 48px" : "0 48px 64px" }}>
//     <div style={{ position: "relative", padding: isMobile ? "28px 24px 28px 36px" : "32px 40px 32px 56px",
//       borderRadius: 14, background: `${accent}0c`, border: `1px solid ${accent}33`,
//       borderLeft: `4px solid ${accent}` }}>
//       <div style={{ position: "absolute", top: isMobile ? 16 : 20, left: isMobile ? 10 : 18,
//         fontSize: isMobile ? 36 : 48, color: `${accent}33`, lineHeight: 1, fontFamily: "Georgia, serif" }}>
//         "
//       </div>
//       <p style={{ color: "rgba(255,255,255,0.75)", fontSize: isMobile ? 15 : 18,
//         lineHeight: 1.8, fontStyle: "italic", margin: 0, position: "relative", zIndex: 1 }}>
//         {quote}
//       </p>
//     </div>
//   </motion.div>
// );

// /* ── FEATURE SECTION ── */
// const FeatureSection: React.FC<{
//   title: string; description?: string | null; bullets?: string[] | null;
//   accent: string; index: number; isMobile: boolean; variant?: "default" | "card";
// }> = ({ title, description, bullets, accent, index, isMobile, variant = "default" }) => {
//   const isCard = variant === "card";
//   return (
//     <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//       style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px 56px" : "0 48px 72px" }}>
//       <div style={{ padding: isCard ? (isMobile ? "28px 20px" : "44px 52px") : 0,
//         borderRadius: isCard ? 20 : 0,
//         background: isCard ? "rgba(255,255,255,0.025)" : "transparent",
//         border: isCard ? "1px solid rgba(255,255,255,0.06)" : "none",
//         position: "relative", overflow: isCard ? "hidden" : "visible" }}>
//         {isCard && (
//           <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2,
//             background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }} />
//         )}
//         <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
//           <div style={{ width: 32, height: 32, borderRadius: 8, display: "flex",
//             alignItems: "center", justifyContent: "center", flexShrink: 0,
//             background: `${accent}22`, border: `1px solid ${accent}44` }}>
//             <span style={{ color: accent, fontSize: 12, fontWeight: 900 }}>
//               {String(index + 1).padStart(2, "0")}
//             </span>
//           </div>
//           <div style={{ height: 1, flex: 1, maxWidth: 40,
//             background: `linear-gradient(90deg, ${accent}44, transparent)` }} />
//         </div>
//         <h2 style={{ fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 3vw, 2.2rem)",
//           fontWeight: 900, color: "#fff", marginBottom: description ? 14 : 28,
//           lineHeight: 1.2, letterSpacing: "-0.01em", maxWidth: 680 }}>
//           {title}
//         </h2>
//         {description && (
//           <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 14 : 16,
//             lineHeight: 1.85, marginBottom: 28, maxWidth: 640 }}>
//             {description}
//           </p>
//         )}
//         {bullets && Array.isArray(bullets) && bullets.length > 0 && (
//           <div style={{ display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : bullets.length > 3 ? "1fr 1fr" : "1fr",
//             gap: isMobile ? 10 : 12 }}>
//             {bullets.map((b: string, i: number) => (
//               <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
//                 style={{ display: "flex", alignItems: "flex-start", gap: 14,
//                   padding: "14px 16px", borderRadius: 10,
//                   background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
//                 <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0,
//                   background: `${accent}22`, border: `1px solid ${accent}44`,
//                   display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
//                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                     <path d="M2 5l2.5 2.5L8 3" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </div>
//                 <span style={{ color: "rgba(255,255,255,0.72)", fontSize: isMobile ? 13 : 15, lineHeight: 1.65 }}>{b}</span>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </motion.section>
//   );
// };

// /* ── FAQ SECTION ── */
// const FAQSection: React.FC<{ faq: { q: string; a: string }[]; accent: string; isMobile: boolean }> = ({ faq, accent, isMobile }) => {
//   const [open, setOpen] = useState<number | null>(null);
//   return (
//     <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }} transition={{ duration: 0.7 }}
//       style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px 64px" : "0 48px 80px" }}>
//       <div style={{ marginBottom: 36 }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
//           <div style={{ height: 1, width: 32, background: `${accent}66` }} />
//           <span style={{ color: `${accent}88`, fontSize: 11, fontWeight: 700,
//             letterSpacing: "0.18em", textTransform: "uppercase" }}>FAQ</span>
//         </div>
//         <h2 style={{ fontSize: isMobile ? "1.6rem" : "2.2rem", fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>
//           Frequently Asked Questions
//         </h2>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//         {faq.map((item, i) => (
//           <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }} transition={{ delay: i * 0.05 }}
//             onClick={() => setOpen(open === i ? null : i)}
//             style={{ borderRadius: 12, overflow: "hidden", cursor: "pointer",
//               border: `1px solid ${open === i ? accent + "44" : "rgba(255,255,255,0.07)"}`,
//               background: open === i ? `${accent}08` : "rgba(255,255,255,0.02)",
//               transition: "border-color 0.25s, background 0.25s" }}>
//             <div style={{ padding: isMobile ? "16px 18px" : "20px 24px",
//               display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
//               <p style={{ color: open === i ? "#fff" : "rgba(255,255,255,0.8)",
//                 fontWeight: 700, fontSize: isMobile ? 14 : 15, margin: 0, lineHeight: 1.5, transition: "color 0.2s" }}>
//                 {item.q}
//               </p>
//               <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}
//                 style={{ width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
//                   border: `1.5px solid ${open === i ? accent : "rgba(255,255,255,0.2)"}`,
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   color: open === i ? accent : "rgba(255,255,255,0.4)",
//                   fontSize: 18, fontWeight: 300, transition: "border-color 0.2s, color 0.2s" }}>
//                 +
//               </motion.div>
//             </div>
//             <AnimatePresence initial={false}>
//               {open === i && (
//                 <motion.div key="ans" initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.28, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
//                   <div style={{ padding: isMobile ? "0 18px 18px" : "0 24px 22px", borderTop: `1px solid ${accent}22` }}>
//                     <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? 13 : 15,
//                       lineHeight: 1.85, margin: "14px 0 0", maxWidth: 720 }}>
//                       {item.a}
//                     </p>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default TechPageTemplate;


import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { fetchTechPage } from "../../lib/strapi";

const PAGE_BG = "#050505";
const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

const getBg = (variant: string, accent: string, isMobile: boolean) => {
  const s = isMobile;
  switch (variant) {
    case "dots":
      return {
        backgroundImage: `radial-gradient(${accent}22 1px, transparent 1px)`,
        backgroundSize: s ? "28px 28px" : "44px 44px",
      };
    case "lines":
  return {
    backgroundImage: `
      linear-gradient(${accent}0a 1px, transparent 1px)
    `,
    backgroundSize: s ? "100% 32px" : "100% 56px",
  };
    case "circuit":
      return {
        backgroundImage: `
          linear-gradient(${accent}07 1px, transparent 1px),
          linear-gradient(90deg, ${accent}07 1px, transparent 1px),
          linear-gradient(${accent}04 1px, transparent 1px),
          linear-gradient(90deg, ${accent}04 1px, transparent 1px)
        `,
        backgroundSize: s
          ? "80px 80px, 80px 80px, 20px 20px, 20px 20px"
          : "120px 120px, 120px 120px, 30px 30px, 30px 30px",
      };
    case "cross":
  return {
    backgroundImage: `
      linear-gradient(${accent}12 1px, transparent 1px),
      linear-gradient(90deg, ${accent}12 1px, transparent 1px),
      linear-gradient(${accent}06 1px, transparent 1px),
      linear-gradient(90deg, ${accent}06 1px, transparent 1px)
    `,
    backgroundSize: s
      ? "40px 40px, 40px 40px, 8px 8px, 8px 8px"
      : "60px 60px, 60px 60px, 12px 12px, 12px 12px",
  };
case "corners":
  return {
    backgroundImage: `
      radial-gradient(circle at 0% 0%, ${accent}0c 0px, transparent 40px),
      radial-gradient(circle at 100% 0%, ${accent}08 0px, transparent 40px),
      radial-gradient(circle at 0% 100%, ${accent}08 0px, transparent 40px),
      radial-gradient(circle at 100% 100%, ${accent}0c 0px, transparent 40px)
    `,
    backgroundSize: s ? "60px 60px" : "100px 100px",
  };
    default: 
      return {
        backgroundImage: `
          linear-gradient(${accent}18 1px, transparent 1px),
          linear-gradient(90deg, ${accent}18 1px, transparent 1px)
        `,
        backgroundSize: s ? "80px 80px" : "120px 120px",
      };
  }
};


const useWindowWidth = () => {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
};

const TechPageTemplate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [page, setPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  useEffect(() => {
    if (slug) {
      fetchTechPage(slug).then((data) => {
        setPage(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading)
    return (
      <div style={{ background: PAGE_BG, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.08)", borderTopColor: "#e8b84b" }}
        />
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" }}>Loading</p>
      </div>
    );

  if (!page)
    return (
      <div style={{ background: PAGE_BG, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <span style={{ fontSize: 64, color: "#fff" }}>404</span>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 16 }}>Page not found</p>
      </div>
    );

  const A = page.accent_color || "#e8b84b";
  const content = page.content || [];
  let sectionIndex = 0;

 
  const bgStyle = getBg(page.bg_variant || "grid", A, isMobile);

  return (
    <div
      style={{
        background: PAGE_BG,
        minHeight: "100vh",
        overflowX: "hidden",
        ...bgStyle,
      }}
    >
      <div ref={heroRef} style={{ position: "relative" }}>
        {/* Ambient orbs */}
        <motion.div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", top: "-5%", left: "-5%",
              width: isMobile ? 240 : isTablet ? 500 : 700,
              height: isMobile ? 240 : isTablet ? 500 : 700,
              background: `radial-gradient(circle, ${A}18 0%, transparent 65%)`,
              filter: "blur(60px)",
            }}
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{
              position: "absolute", top: "20%", right: "-10%",
              width: isMobile ? 180 : isTablet ? 350 : 500,
              height: isMobile ? 180 : isTablet ? 350 : 500,
              background: `radial-gradient(circle, ${A}0f 0%, transparent 65%)`,
              filter: "blur(80px)",
            }}
          />
        </motion.div>

        <div style={{ position: "relative", zIndex: 1 }}>
          {content.map((block: any, i: number) => {
            const type = block.__component;

            if (type === "blocks.hero-block")
              return <HeroBlock key={i} block={block} accent={A} heroY={heroY} heroOpacity={heroOpacity} isMobile={isMobile} isTablet={isTablet} pageName={page.name} pageCategory={page.category} />;

            if (type === "blocks.text-block") {
              const idx = sectionIndex++;
              return <TextBlock key={i} block={block} accent={A} index={idx} isMobile={isMobile} isTablet={isTablet} />;
            }

            if (type === "blocks.image-block")
              return <ImageBlock key={i} block={block} accent={A} isMobile={isMobile} />;

            if (type === "blocks.quote-block")
              return <QuoteBlock key={i} block={block} accent={A} isMobile={isMobile} />;

            if (type === "blocks.faq-block")
              return <FAQBlock key={i} block={block} accent={A} isMobile={isMobile} />;

            if (type === "blocks.cta-banner")
              return <CTABannerBlock key={i} block={block} accent={A} isMobile={isMobile} pageName={page.name} />;

            return null;
          })}
        </div>
      </div>

      <div style={{ height: isMobile ? 48 : 80 }} />
    </div>
  );
};

/* ══════════════════════════════
   HERO BLOCK
══════════════════════════════ */
const HeroBlock: React.FC<{
  block: any; accent: string; heroY: any; heroOpacity: any;
  isMobile: boolean; isTablet: boolean; pageName: string; pageCategory: string;
}> = ({ block, accent, heroY, heroOpacity, isMobile, isTablet, pageName, pageCategory }) => {
  const A10 = accent + "1a";

  return (
    <div
      style={{
        position: "relative",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        alignItems: "center",
        paddingBottom: isMobile ? 48 : 0,
        background: "transparent",
        zIndex: 2,
      }}
    >
      <motion.div
        style={{
          y: isMobile ? 0 : heroY,       // disable parallax on mobile (performance)
          opacity: isMobile ? 1 : heroOpacity,
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile
            ? "96px 20px 40px"
            : isTablet
            ? "100px 32px 60px"
            : "80px 48px 60px",
        }}
      >
        {/* Category pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: isMobile ? 18 : 24,
            padding: isMobile ? "5px 12px" : "6px 16px",
            borderRadius: 999,
            border: `1px solid ${accent}44`,
            background: A10,
            backdropFilter: "blur(8px)",
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent, boxShadow: `0 0 8px ${accent}` }} />
          <span style={{ color: accent, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {pageCategory}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: isMobile ? "2rem" : isTablet ? "2.8rem" : "clamp(2rem, 3.8vw, 3.2rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: isMobile ? 14 : 20,
            maxWidth: 800,
            letterSpacing: "-0.02em",
          }}
        >
          {block.title?.split(pageName).map((part: string, i: number) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <span style={{ background: `linear-gradient(135deg, ${accent}, ${accent}bb)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {pageName}
                </span>
              )}
              {part}
            </React.Fragment>
          ))}
        </motion.h1>

        {/* Description */}
        {block.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: isMobile ? 14 : isTablet ? 16 : 17,
              color: "rgba(255,255,255,0.45)",
              maxWidth: isMobile ? "100%" : 580,
              lineHeight: 1.85,
              marginBottom: isMobile ? 20 : 28,
            }}
          >
            {block.description}
          </motion.p>
        )}

        {/* Bullets */}
        {block.bullets && Array.isArray(block.bullets) && block.bullets.length > 0 && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            style={{ listStyle: "none", padding: 0, marginBottom: isMobile ? 28 : 36, display: "flex", flexDirection: "column", gap: isMobile ? 14 : 18 }}
          >
            {block.bullets.map((b: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32 + i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <div
                  style={{
                    width: isMobile ? 18 : 20, height: isMobile ? 18 : 20,
                    borderRadius: "50%", flexShrink: 0,
                    background: `${accent}22`, border: `1px solid ${accent}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? 14 : 16 }}>{b}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          style={{
            display: "flex",
            gap: isMobile ? 10 : 12,
            flexWrap: "wrap",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {block.cta_primary && (
            <CTAButton href="/contact-us" accent={accent} filled fullWidthMobile={isMobile}>
              {block.cta_primary}
            </CTAButton>
          )}
          {block.cta_secondary && (
            <CTAButton href="/contact-us" accent={accent} fullWidthMobile={isMobile}>
              {block.cta_secondary}
            </CTAButton>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════
   TEXT BLOCK
══════════════════════════════ */
const TextBlock: React.FC<{
  block: any; accent: string; index: number; isMobile: boolean; isTablet: boolean;
}> = ({ block, accent, index, isMobile, isTablet }) => {
  const isCard = block.variant === "card";
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: isMobile ? "0 20px 48px" : isTablet ? "0 32px 60px" : "0 48px 72px",
      }}
    >
      <div
        style={{
          padding: isCard ? (isMobile ? "24px 18px" : isTablet ? "32px 36px" : "44px 52px") : 0,
          borderRadius: isCard ? 20 : 0,
          background: isCard ? "rgba(255,255,255,0.025)" : "transparent",
          border: isCard ? "1px solid rgba(255,255,255,0.06)" : "none",
          position: "relative",
          overflow: isCard ? "hidden" : "visible",
        }}
      >
        {isCard && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }} />
        )}

        {/* Number badge row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: isMobile ? 20 : 28 }}>
          <div
            style={{
              flexShrink: 0,
              width: isMobile ? 48 : 60,
              height: isMobile ? 48 : 60,
              borderRadius: 14,
              background: `${accent}22`,
              border: `2px solid ${accent}77`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 0 0 1px ${accent}22, 0 4px 20px ${accent}30`,
            }}
          >
            <span style={{ fontSize: isMobile ? 16 : 20, fontWeight: 900, color: accent, letterSpacing: "-0.02em" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div
            style={{
              height: 1.5,
              width: isMobile ? 60 : 160,
              flexShrink: 0,
              background: `linear-gradient(90deg, ${accent}88, ${accent}00)`,
              borderRadius: 2,
            }}
          />
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: isMobile ? "1.4rem" : isTablet ? "1.8rem" : "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 900,
            color: "#fff",
            marginBottom: block.description ? 12 : 24,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            maxWidth: 680,
          }}
        >
          {block.title}
        </h2>

        {block.description && (
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: isMobile ? 14 : 16,
              lineHeight: 1.85,
              marginBottom: isMobile ? 20 : 28,
              maxWidth: 640,
            }}
          >
            {block.description}
          </p>
        )}

        {/* Bullets */}
        {block.bullets && Array.isArray(block.bullets) && block.bullets.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 12 }}>
            {block.bullets.map((b: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: isMobile ? "12px 14px" : "15px 20px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    width: isMobile ? 20 : 22, height: isMobile ? 20 : 22,
                    borderRadius: 6, flexShrink: 0,
                    background: `${accent}22`, border: `1px solid ${accent}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ color: "rgba(255,255,255,0.72)", fontSize: isMobile ? 13 : 15, lineHeight: 1.65 }}>{b}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

/* ══════════════════════════════
   IMAGE BLOCK
══════════════════════════════ */
const ImageBlock: React.FC<{ block: any; accent: string; isMobile: boolean }> = ({ block, accent, isMobile }) => {
  const STRAPI_URL = (process as any).env?.STRAPI_URL || "http://localhost:1337";
  const imgUrl = block.image?.url
    ? block.image.url.startsWith("http") ? block.image.url : `${STRAPI_URL}${block.image.url}`
    : null;

  if (!imgUrl) return null;

  const isLeft = block.position === "left";
  const isFull = block.position === "full" || block.position === "bottom";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px 40px" : "0 48px 64px" }}
    >
      {isFull ? (
        <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${accent}22` }}>
          <img src={imgUrl} alt={block.caption || ""} style={{ width: "100%", display: "block", objectFit: "cover" }} />
          {block.caption && (
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textAlign: "center", padding: "10px 0" }}>{block.caption}</p>
          )}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : isLeft ? "row" : "row-reverse", gap: isMobile ? 20 : 48, alignItems: "center" }}>
          <div style={{ flex: 1, borderRadius: 16, overflow: "hidden", border: `1px solid ${accent}22` }}>
            <img src={imgUrl} alt={block.caption || ""} style={{ width: "100%", display: "block", objectFit: "cover" }} />
          </div>
          {block.caption && (
            <div style={{ flex: 1 }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 14 : 16, lineHeight: 1.8 }}>{block.caption}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

/* ══════════════════════════════
   QUOTE BLOCK
══════════════════════════════ */
const QuoteBlock: React.FC<{ block: any; accent: string; isMobile: boolean }> = ({ block, accent, isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px 40px" : "0 48px 64px" }}
  >
    <div
      style={{
        position: "relative",
        padding: isMobile ? "24px 20px 24px 32px" : "32px 40px 32px 56px",
        borderRadius: 14,
        background: `${accent}0c`,
        border: `1px solid ${accent}33`,
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <div style={{ position: "absolute", top: isMobile ? 12 : 20, left: isMobile ? 8 : 18, fontSize: isMobile ? 32 : 48, color: `${accent}33`, lineHeight: 1, fontFamily: "Georgia, serif" }}>"</div>
      <p style={{ color: "rgba(255,255,255,0.75)", fontSize: isMobile ? 14 : 18, lineHeight: 1.8, fontStyle: "italic", margin: 0, position: "relative", zIndex: 1 }}>
        {block.quote}
      </p>
    </div>
  </motion.div>
);

/* ══════════════════════════════
   FAQ BLOCK
══════════════════════════════ */
const FAQBlock: React.FC<{ block: any; accent: string; isMobile: boolean }> = ({ block, accent, isMobile }) => {
  const [open, setOpen] = useState<number | null>(null);
  const faq = block.faq || [];
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px 56px" : "0 48px 80px" }}
    >
      <div style={{ marginBottom: isMobile ? 24 : 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ height: 1, width: 32, background: `${accent}66` }} />
          <span style={{ color: `${accent}88`, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>FAQ</span>
        </div>
        <h2 style={{ fontSize: isMobile ? "1.5rem" : "2.2rem", fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>
          Frequently Asked Questions
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 10 }}>
        {faq.map((item: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              borderRadius: 12, overflow: "hidden", cursor: "pointer",
              border: `1px solid ${open === i ? accent + "44" : "rgba(255,255,255,0.07)"}`,
              background: open === i ? `${accent}08` : "rgba(255,255,255,0.02)",
              transition: "border-color 0.25s, background 0.25s",
            }}
          >
            <div style={{ padding: isMobile ? "14px 16px" : "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <p style={{ color: open === i ? "#fff" : "rgba(255,255,255,0.8)", fontWeight: 700, fontSize: isMobile ? 13 : 15, margin: 0, lineHeight: 1.5 }}>
                {item.q}
              </p>
              <motion.div
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: isMobile ? 22 : 24, height: isMobile ? 22 : 24,
                  borderRadius: "50%", flexShrink: 0,
                  border: `1.5px solid ${open === i ? accent : "rgba(255,255,255,0.2)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: open === i ? accent : "rgba(255,255,255,0.4)",
                  fontSize: isMobile ? 16 : 18, fontWeight: 300,
                }}
              >+</motion.div>
            </div>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="ans"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: isMobile ? "0 16px 16px" : "0 24px 22px", borderTop: `1px solid ${accent}22` }}>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? 13 : 15, lineHeight: 1.85, margin: "12px 0 0" }}>
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

/* ══════════════════════════════
   CTA BANNER BLOCK
══════════════════════════════ */
const CTABannerBlock: React.FC<{ block: any; accent: string; isMobile: boolean; pageName: string }> = ({
  block, accent, isMobile, pageName,
}) => {
  const orbs = [
    { size: isMobile ? 200 : 320, top: "-30%", left: "-8%",  delay: 0,  dur: 14 },
    { size: isMobile ? 160 : 260, top: "40%",  right: "-6%", delay: 2,  dur: 18 },
    { size: isMobile ? 120 : 180, top: "10%",  left: "45%",  delay: 4,  dur: 12 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px 56px" : "0 48px 80px" }}
    >
      <div
        style={{
          position: "relative",
          padding: isMobile ? "40px 24px" : "48px 80px",
          borderRadius: isMobile ? 18 : 24,
          overflow: "hidden",
          textAlign: "center",
          background: `linear-gradient(145deg, ${accent}1a 0%, ${accent}08 50%, #050505 100%)`,
          border: `1px solid ${accent}44`,
          boxShadow: `0 0 80px ${accent}14, inset 0 1px 0 ${accent}22`,
        }}
      >
        {orbs.map((o, i) => (
          <motion.div
            key={i}
            animate={{ x: [0, i % 2 === 0 ? 20 : -20, 0], y: [0, i % 2 === 0 ? -16 : 16, 0] }}
            transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
            style={{
              position: "absolute", width: o.size, height: o.size,
              top: o.top, left: (o as any).left, right: (o as any).right,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${accent}1a 0%, transparent 65%)`,
              filter: "blur(40px)", pointerEvents: "none",
            }}
          />
        ))}

        <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }} />

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${accent}08 1px, transparent 1px), linear-gradient(90deg, ${accent}08 1px, transparent 1px)`,
          backgroundSize: isMobile ? "60px 60px" : "100px 100px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
        }} />

        <div style={{ position: "absolute", inset: 0, backgroundImage: NOISE, opacity: 0.4 }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: isMobile ? "1.5rem" : "clamp(1.9rem, 3.2vw, 2.8rem)",
              fontWeight: 900, color: "#fff",
              marginBottom: isMobile ? 10 : 14,
              lineHeight: 1.15, letterSpacing: "-0.025em",
            }}
          >
            {block.title || `Ready to modernize on ${pageName}?`}
          </motion.h2>

          {block.description && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              style={{
                color: "rgba(255,255,255,0.42)",
                fontSize: isMobile ? 13 : 16,
                maxWidth: isMobile ? "100%" : 480,
                margin: isMobile ? "0 0 24px" : "0 auto 32px",
                lineHeight: 1.75,
              }}
            >
              {block.description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            style={{ display: "flex", gap: isMobile ? 10 : 14, justifyContent: "center", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", alignItems: "center" }}
          >
            <CTAButton href="/contact-us" accent={accent} filled large={!isMobile} fullWidthMobile={isMobile}>
              {block.button_text || "Book a Free Assessment"}
            </CTAButton>
            {block.button_secondary && (
              <CTAButton href="/contact-us" accent={accent} large={!isMobile} fullWidthMobile={isMobile}>
                {block.button_secondary}
              </CTAButton>
            )}
          </motion.div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: "20%", right: "20%", height: 1, background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }} />
      </div>
    </motion.div>
  );
};

/* ══════════════════════════════
   CTA BUTTON (shared)
══════════════════════════════ */
const CTAButton: React.FC<{
  href: string; accent: string; filled?: boolean;
  large?: boolean; fullWidthMobile?: boolean; children: React.ReactNode;
}> = ({ href, accent, filled, large, fullWidthMobile, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: fullWidthMobile ? "100%" : "auto",
        padding: large ? "16px 36px" : "13px 24px",
        borderRadius: 10,
        fontWeight: 700,
        fontSize: large ? 16 : 14,
        textDecoration: "none",
        transition: "box-shadow 0.2s",
        background: filled ? (hovered ? `${accent}ee` : accent) : "transparent",
        color: filled ? "#000" : accent,
        border: filled ? "none" : `1.5px solid ${accent}55`,
        boxShadow: filled && hovered ? `0 0 32px ${accent}55` : "none",
      }}
    >
      {children}
      {filled && <span style={{ fontSize: 16 }}>→</span>}
    </motion.a>
  );
};

export default TechPageTemplate;