// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Hero from "../components/hero";

// type IconName =
//   | "gear"
//   | "dollar"
//   | "shield"
//   | "users"
//   | "flame"
//   | "bulb"
//   | "bolt"
//   | "check"
//   | "cloud"
//   | "wrench"
//   | "lock"
//   | "robot"
//   | "rocket"
//   | "arrow";

// interface DilemmaRow {
//   pain: string;
//   solve: string;
//   deliver: string;
//   outcome: string;
//   icon: IconName;
//   color: string;
// }

// interface DilemmaColumn {
//   key: string;
//   label: string;
//   icon: IconName;
//   accent: string;
// }

// interface ServiceCard {
//   title: string;
//   icon: IconName;
//   color: string;
//   description: string;
// }

// interface CompanyLogo {
//   name: string;
//   logo: string;
// }

// interface Badge {
//   icon: IconName;
//   label: string;
// }

// const ICONS: Record<IconName, string | string[]> = {
//   gear: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.93-3c.04-.33.07-.67.07-1s-.03-.67-.07-1l2.16-1.68a.5.5 0 0 0 .12-.64l-2.05-3.55a.5.5 0 0 0-.61-.22l-2.55 1.03a7.47 7.47 0 0 0-1.73-1L13.9 2.1a.5.5 0 0 0-.49-.43h-2.82a.5.5 0 0 0-.49.43l-.38 2.71a7.47 7.47 0 0 0-1.73 1L6.44 4.78a.5.5 0 0 0-.61.22L3.78 8.55a.49.49 0 0 0 .12.64L6.07 10.8A7.6 7.6 0 0 0 6 12c0 .33.03.67.07 1l-2.17 1.68a.49.49 0 0 0-.12.64l2.05 3.55c.12.22.37.31.61.22l2.55-1.03c.54.39 1.12.72 1.73 1l.38 2.71c.06.25.28.43.49.43h2.82c.21 0 .43-.18.49-.43l.38-2.71a7.47 7.47 0 0 0 1.73-1l2.55 1.03c.24.09.49 0 .61-.22l2.05-3.55a.49.49 0 0 0-.12-.64L18.93 13z",
//   dollar: ["M12 2v20", "M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"],
//   shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
//   users: [
//     "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
//     "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
//     "M23 21v-2a4 4 0 0 0-3-3.87",
//     "M16 3.13a4 4 0 0 1 0 7.75",
//   ],
//   flame:
//     "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
//   bulb: [
//     "M9 18h6",
//     "M10 22h4",
//     "M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z",
//   ],
//   bolt: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
//   check: ["M22 11.08V12a10 10 0 1 1-5.93-9.14", "M22 4L12 14.01l-3-3"],
//   cloud: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
//   wrench:
//     "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
//   lock: [
//     "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z",
//     "M7 11V7a5 5 0 0 1 10 0v4",
//   ],
//   robot: [
//     "M12 8V4H8",
//     "M20 8H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z",
//     "M9 13h.01",
//     "M15 13h.01",
//   ],
//   rocket: [
//     "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
//     "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
//     "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
//     "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
//   ],
//   arrow: "M5 12h14M12 5l7 7-7 7",
// };

// const SvgIcon = ({
//   name,
//   size = 22,
//   color = "currentColor",
// }: {
//   name: IconName;
//   size?: number;
//   color?: string;
// }) => {
//   const d = ICONS[name];
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke={color}
//       strokeWidth={1.8}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       {Array.isArray(d) ? (
//         d.map((p, i) => <path key={i} d={p} />)
//       ) : (
//         <path d={d as string} />
//       )}
//     </svg>
//   );
// };

// const IconBadge = ({
//   name,
//   color,
//   size = 40,
// }: {
//   name: IconName;
//   color: string;
//   size?: number;
// }) => (
//   <div
//     className="rounded-full flex items-center justify-center flex-shrink-0"
//     style={{
//       width: size,
//       height: size,
//       background: `${color}1a`,
//       border: `1.5px solid ${color}44`,
//     }}
//   >
//     <SvgIcon name={name} size={Math.round(size * 0.46)} color={color} />
//   </div>
// );

// const useWindowWidth = () => {
//   const [width, setWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1024,
//   );
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return width;
// };

// const dilemmaRows: DilemmaRow[] = [
//   {
//     pain: "Complexity slows your teams",
//     solve:
//       "We help design systems and processes that abstract complexity, not add to it",
//     deliver: "Data-driven approach, documentation as code, and automation",
//     outcome: "Devs ship features; you control the infrastructure",
//     icon: "gear",
//     color: "#6366f1",
//   },
//   {
//     pain: "Cloud costs are unpredictable and rising",
//     solve: "We implement FinOps that ties spend to business value",
//     deliver: "Real-time dashboards, commitment discounts, rightsizing",
//     outcome: "20–35% predictable cost reduction within 3 months",
//     icon: "dollar",
//     color: "#10b981",
//   },
//   {
//     pain: "Security & compliance are afterthoughts",
//     solve:
//       "We embed DevSecOps from day one — policy as code, automated guardrails",
//     deliver: "Shift-left workshops, CI/CD pipeline instrumentation",
//     outcome: "Audit-ready environments, not remediation crises",
//     icon: "shield",
//     color: "#f59e0b",
//   },
//   {
//     pain: "You lack internal platform engineering skills",
//     solve:
//       "We co-build internal developer platforms (IDPs) using open-source building blocks",
//     deliver:
//       "Joint backlog, knowledge transfer sessions, reference architectures",
//     outcome: "Your team becomes the platform authority",
//     icon: "users",
//     color: "#00c2e0",
//   },
// ];

// const dilemmaColumns: DilemmaColumn[] = [
//   { key: "pain", label: "Your Pain Point", icon: "flame", accent: "#ef4444" },
//   { key: "solve", label: "How We Solve It", icon: "bulb", accent: "#6366f1" },
//   { key: "deliver", label: "How We Deliver", icon: "bolt", accent: "#f59e0b" },
//   {
//     key: "outcome",
//     label: "The Outcome You Own",
//     icon: "check",
//     accent: "#10b981",
//   },
// ];

// const DilemmaTable: React.FC = () => {
//   const [activeRow, setActiveRow] = useState<number | null>(null);
//   const width = useWindowWidth();
//   const isMobile = width < 768;

//   if (isMobile) {
//     return (
//       <div className="flex flex-col gap-4">
//         {dilemmaRows.map((row, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 4 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: i * 0.08 }}
//             className="overflow-hidden rounded-2xl border"
//             style={{
//               background: "rgba(255, 255, 255, 0.03)",
//               borderColor: `${row.color}33`,
//             }}
//           >
//             <div
//               className="border-b p-4 flex items-center gap-3"
//               style={{
//                 background: `${row.color}18`,
//                 borderBottomColor: `${row.color}30`,
//               }}
//             >
//               <IconBadge name={row.icon} color={row.color} size={38} />
//               <p className="text-sm font-bold text-white m-0">{row.pain}</p>
//             </div>

//             <div className="p-4 flex flex-col gap-3">
//               {dilemmaColumns.slice(1).map((c) => (
//                 <div
//                   key={c.key}
//                   className="rounded-lg border p-3"
//                   style={{
//                     background: `${c.accent}0d`,
//                     borderColor: `${c.accent}22`,
//                   }}
//                 >
//                   <div className="flex items-center gap-2 mb-2">
//                     <IconBadge name={c.icon} color={c.accent} size={24} />
//                     <span
//                       className="text-xs font-bold uppercase tracking-wider"
//                       style={{ color: c.accent }}
//                     >
//                       {c.label}
//                     </span>
//                   </div>
//                   <p
//                     className="text-sm leading-relaxed m-0"
//                     style={{
//                       color:
//                         c.key === "outcome"
//                           ? "#6ee7b7"
//                           : "rgba(255, 255, 255, 0.7)",
//                       fontWeight: c.key === "outcome" ? 600 : 400,
//                     }}
//                   >
//                     {(row as any)[c.key]}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-2.5 mb-3">
//         {dilemmaColumns.map((c) => (
//           <div
//             key={c.key}
//             className="rounded-xl border p-4 flex items-center gap-3"
//             style={{
//               background: `${c.accent}14`,
//               borderColor: `${c.accent}40`,
//             }}
//           >
//             <IconBadge name={c.icon} color={c.accent} size={34} />
//             <span
//               className="text-xs font-bold uppercase tracking-wide leading-tight"
//               style={{ color: c.accent }}
//             >
//               {c.label}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-col gap-2">
//         {dilemmaRows.map((row, i) => (
//           <div
//             key={i}
//             onMouseEnter={() => setActiveRow(i)}
//             onMouseLeave={() => setActiveRow(null)}
//             className="grid grid-cols-4 gap-2 transition-transform"
//             style={{ transform: activeRow === i ? "scale(1.007)" : "scale(1)" }}
//           >
//             {dilemmaColumns.map((c, ci) => {
//               const isActive = activeRow === i;
//               const hoverBg: Record<string, string> = {
//                 pain: "rgba(239, 68, 68, 0.13)",
//                 solve: "rgba(99, 102, 241, 0.13)",
//                 deliver: "rgba(245, 158, 11, 0.13)",
//                 outcome: "rgba(16, 185, 129, 0.13)",
//               };
//               const hoverBorder: Record<string, string> = {
//                 pain: "rgba(239, 68, 68, 0.45)",
//                 solve: "rgba(99, 102, 241, 0.45)",
//                 deliver: "rgba(245, 158, 11, 0.45)",
//                 outcome: "rgba(16, 185, 129, 0.45)",
//               };

//               return (
//                 <div
//                   key={c.key}
//                   className="relative overflow-hidden rounded-2xl border p-4 transition-all"
//                   style={{
//                     background: isActive
//                       ? hoverBg[c.key]
//                       : "rgba(255, 255, 255, 0.018)",
//                     borderColor: isActive
//                       ? hoverBorder[c.key]
//                       : "rgba(255, 255, 255, 0.07)",
//                     boxShadow: isActive
//                       ? `inset 0 0 24px ${c.accent}12, 0 0 0 0 transparent`
//                       : "none",
//                   }}
//                 >
//                   {ci === 0 && (
//                     <>
//                       <div
//                         className="absolute left-0 top-0 bottom-0 rounded-l-2xl transition-all"
//                         style={{
//                           width: isActive ? 4 : 3,
//                           background: row.color,
//                           opacity: isActive ? 1 : 0.6,
//                         }}
//                       />
//                       <div className="mb-3 pl-1">
//                         <IconBadge
//                           name={row.icon}
//                           color={row.color}
//                           size={36}
//                         />
//                       </div>
//                     </>
//                   )}

//                   <p
//                     className="text-sm leading-relaxed m-0 transition-colors"
//                     style={{
//                       paddingLeft: ci === 0 ? 6 : 0,
//                       color:
//                         ci === 3
//                           ? "#6ee7b7"
//                           : ci === 0
//                             ? "rgba(255, 255, 255, 0.92)"
//                             : isActive
//                               ? "rgba(255, 255, 255, 0.80)"
//                               : "rgba(255, 255, 255, 0.55)",
//                       fontWeight: ci === 0 || ci === 3 ? 600 : 400,
//                     }}
//                   >
//                     {(row as any)[c.key]}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ─────────────────────────────────────────────
// // Hero Section
// // ─────────────────────────────────────────────
// // const Hero: React.FC = () => {
// //   return (
// //     <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-[#050505]">
// //       {/* Background Image */}
// //       <div className="absolute inset-0 z-0">
// //         <img
// //           src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1974&auto=format&fit=crop"
// //           alt="Globe Background"
// //           className="w-full h-full object-cover object-center brightness-[0.3]"
// //         />
// //       </div>

// //       {/* Dark Overlays */}
// //       <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
// //       <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]/80"></div>

// //       {/* Content */}
// //       <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
// //         <div className="max-w-3xl">
// //           {/* Badge */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className="mb-8"
// //           >
// //             <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-blue-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
// //               <span className="relative flex h-2 w-2">
// //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
// //                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
// //               </span>
// //               Enterprise Cloud Solutions
// //             </span>
// //           </motion.div>

// //           {/* Main Heading */}
// //           <motion.h1
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-white"
// //           >
// //             Modernize Your Infrastructure.{" "}
// //             <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
// //               Secure Your Data.
// //             </span>{" "}
// //             Without the Downtime.
// //           </motion.h1>

// //           {/* Subheading */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="text-slate-300 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
// //           >
// //             Enterprise-grade Multi-Cloud, DevSecOps, and Data solutions for
// //             scaling businesses. We bridge the gap between legacy systems and
// //             cloud-native innovation.
// //           </motion.p>

// //           {/* CTA Buttons */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             className="flex flex-col sm:flex-row gap-4"
// //           >
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black text-base font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
// //             >
// //               Get Your Security Audit in 30 Minutes
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="px-8 py-4 bg-slate-900/50 hover:bg-slate-800/70 backdrop-blur-sm text-white text-base font-bold rounded-lg border-2 border-amber-400/60 hover:border-amber-300 transition-all duration-200"
// //             >
// //               Explore Our Services
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* Bottom Fade */}
// //       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10"></div>
// //     </section>
// //   );
// // };

// const HomePage: React.FC = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6 },
//   };

//   const staggerContainer = {
//     initial: {},
//     whileInView: { transition: { staggerChildren: 0.1 } },
//   };

//   const services: ServiceCard[] = [
//     {
//       title: "Cloud-Native Infrastructure",
//       icon: "cloud",
//       color: "#6366f1",
//       description:
//         "Modern, scalable cloud architectures built for performance and reliability",
//     },
//     {
//       title: "Platform Engineering",
//       icon: "wrench",
//       color: "#10b981",
//       description: "Custom platforms that empower your teams to deliver faster",
//     },
//     {
//       title: "Cloud Governance",
//       icon: "shield",
//       color: "#f59e0b",
//       description:
//         "Comprehensive governance frameworks for security and compliance",
//     },
//     {
//       title: "FinOps & Cost Optimization",
//       icon: "dollar",
//       color: "#00c2e0",
//       description: "Data-driven cost optimization to maximize your cloud ROI",
//     },
//     {
//       title: "Data & AI (Emerging)",
//       icon: "robot",
//       color: "#ec4899",
//       description: "Cutting-edge data solutions and AI implementations",
//     },
//   ];

//   const companies: CompanyLogo[] = [
//     {
//       name: "AWS",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
//     },
//     {
//       name: "Microsoft",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//     },
//     {
//       name: "GCP",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
//     },
//   ];

//   const badges: Badge[] = [
//     { icon: "check", label: "100% Free" },
//     { icon: "bolt", label: "30 Minutes" },
//     { icon: "shield", label: "No Obligation" },
//     { icon: "bulb", label: "Instant Insights" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#050505]">
//       <Hero />

//       <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#050505]">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
//               The{" "}
//               <span className="bg-gradient-to-r  from-amber-400 to-orange-500 bg-clip-text text-transparent">
//                 Mahity Approach
//               </span>
//             </h2>
//             <p className="text-white/70 text-base md:text-lg max-w-4xl mx-auto">
//               From chaos to clarity. Here's how we transform your
//               infrastructure.
//             </p>
//           </motion.div>
//           <DilemmaTable />
//         </div>
//       </section>

//       <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#050505] border-t border-white/10">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             {/* Section Title */}
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Trusted By
//             </h2>
//             <p className="text-xl md:text-2xl text-white/70 mb-16">
//               Engineering Leaders At
//             </p>

//             <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
//               {companies.map((company, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group"
//                 >
//                   <div className="p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl hover:border-white/30 transition-all duration-300 hover:bg-white/10">
//                     <img
//                       src={company.logo}
//                       alt={`${company.name} logo`}
//                       className="h-12 md:h-14 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter drop-shadow-lg"
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="mt-16 pt-12 border-t border-white/10"
//             >
//               <p className="text-white/60 text-sm md:text-base">
//                 Trusted by{" "}
//                 <span className="text-white font-semibold">
//                   50+ engineering teams
//                 </span>{" "}
//                 worldwide
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#050505]">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
//               The Mahity Way –{" "}
//               <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
//                 Focus, Then Depth
//               </span>
//             </h2>
//             <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto">
//               Most cloud consultancies claim to do everything. We do not.
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="whileInView"
//             viewport={{ once: true }}
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6 rounded-xl border-2 border-white/10 hover:border-amber-400 bg-white/[0.02] transition-all duration-300"
//                 whileHover={{ y: -5 }}
//                 variants={fadeInUp}
//               >
//                 <div className="mb-4">
//                   <IconBadge
//                     name={service.icon}
//                     color={service.color}
//                     size={48}
//                   />
//                 </div>
//                 <h3 className="text-white font-semibold text-lg md:text-xl mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-white/70 text-sm md:text-base">
//                   {service.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#050505] relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-cyan-500/5" />
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex justify-center mb-8">
//               <IconBadge name="rocket" color="#ff9f1a" size={80} />
//             </div>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Ready to{" "}
//               <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
//                 Optimize?
//               </span>
//             </h2>
//             <p className="text-white/70 text-base md:text-xl mb-4">
//               Are you done paying for waste?
//             </p>
//             <p className="text-amber-400 text-lg md:text-2xl font-bold mb-12">
//               Don't lie to yourself. What do you have to lose?
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black text-base md:text-lg font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
//               >
//                 Book Your Free Audit{" "}
//                 <SvgIcon name="arrow" size={20} color="currentColor" />
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 md:px-10 py-4 md:py-5 bg-white/[0.05] hover:bg-white/10 text-white text-base md:text-lg font-bold rounded-lg border border-amber-400/30 hover:border-amber-300/50 transition-all duration-200 flex items-center justify-center gap-2"
//               >
//                 View Case Studies{" "}
//                 <SvgIcon name="arrow" size={20} color="currentColor" />
//               </motion.button>
//             </div>

//             <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/60">
//               {badges.map((badge, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-2 text-sm md:text-base"
//                 >
//                   <SvgIcon name={badge.icon} size={16} color="#ff9f1a" />
//                   <span className="font-semibold">{badge.label}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;



import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Hero from "../components/hero";

type IconName =
  | "gear"
  | "dollar"
  | "shield"
  | "users"
  | "flame"
  | "bulb"
  | "bolt"
  | "check"
  | "cloud"
  | "wrench"
  | "lock"
  | "robot"
  | "rocket"
  | "arrow"
  | "globe";
interface DilemmaRow {
  pain: string;
  solve: string;
  deliver: string;
  outcome: string;
  icon: IconName;
  color: string;
}
interface ServiceCard {
  title: string;
  icon: IconName;
  color: string;
  description: string;
}
interface CompanyLogo {
  name: string;
  logo: string;
  invert?: boolean;
}
interface Badge {
  icon: IconName;
  label: string;
}


const ICONS: Record<IconName, string | string[]> = {
  gear: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.93-3c.04-.33.07-.67.07-1s-.03-.67-.07-1l2.16-1.68a.5.5 0 0 0 .12-.64l-2.05-3.55a.5.5 0 0 0-.61-.22l-2.55 1.03a7.47 7.47 0 0 0-1.73-1L13.9 2.1a.5.5 0 0 0-.49-.43h-2.82a.5.5 0 0 0-.49.43l-.38 2.71a7.47 7.47 0 0 0-1.73 1L6.44 4.78a.5.5 0 0 0-.61.22L3.78 8.55a.49.49 0 0 0 .12.64L6.07 10.8A7.6 7.6 0 0 0 6 12c0 .33.03.67.07 1l-2.17 1.68a.49.49 0 0 0-.12.64l2.05 3.55c.12.22.37.31.61.22l2.55-1.03c.54.39 1.12.72 1.73 1l.38 2.71c.06.25.28.43.49.43h2.82c.21 0 .43-.18.49-.43l.38-2.71a7.47 7.47 0 0 0 1.73-1l2.55 1.03c.24.09.49 0 .61-.22l2.05-3.55a.49.49 0 0 0-.12-.64L18.93 13z",
  dollar: ["M12 2v20", "M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"],
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  users: [
    "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    "M23 21v-2a4 4 0 0 0-3-3.87",
    "M16 3.13a4 4 0 0 1 0 7.75",
  ],
  flame:
    "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
  bulb: [
    "M9 18h6",
    "M10 22h4",
    "M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z",
  ],
  bolt: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  check: ["M22 11.08V12a10 10 0 1 1-5.93-9.14", "M22 4L12 14.01l-3-3"],
  cloud: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  wrench:
    "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  lock: [
    "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z",
    "M7 11V7a5 5 0 0 1 10 0v4",
  ],
  robot: [
    "M12 8V4H8",
    "M20 8H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z",
    "M9 13h.01",
    "M15 13h.01",
  ],
  rocket: [
    "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
  ],
  arrow: "M5 12h14M12 5l7 7-7 7",
  globe: [
    "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    "M2 12h20",
    "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
  ],
};

const SvgIcon = ({
  name,
  size = 20,
  color = "currentColor",
}: {
  name: IconName;
  size?: number;
  color?: string;
}) => {
  const d = ICONS[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {Array.isArray(d) ? (
        d.map((p, i) => <path key={i} d={p} />)
      ) : (
        <path d={d as string} />
      )}
    </svg>
  );
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};


const dilemmaRows: DilemmaRow[] = [
  {
    pain: "Complexity slows your teams",
    solve:
      "We help design systems and processes that abstract complexity, not add to it",
    deliver: "Data-driven approach, documentation as code, and automation",
    outcome: "Devs ship features; you control the infrastructure",
    icon: "gear",
    color: "#6366f1",
  },
  {
    pain: "Cloud costs are unpredictable and rising",
    solve: "We implement FinOps that ties spend to business value",
    deliver: "Real-time dashboards, commitment discounts, rightsizing",
    outcome: "20–35% predictable cost reduction within 3 months",
    icon: "dollar",
    color: "#10b981",
  },
  {
    pain: "Security & compliance are afterthoughts",
    solve:
      "We embed DevSecOps from day one — policy as code, automated guardrails",
    deliver: "Shift-left workshops, CI/CD pipeline instrumentation",
    outcome: "Audit-ready environments, not remediation crises",
    icon: "shield",
    color: "#f59e0b",
  },
  {
    pain: "You lack internal platform engineering skills",
    solve:
      "We co-build internal developer platforms (IDPs) using open-source building blocks",
    deliver:
      "Joint backlog, knowledge transfer sessions, reference architectures",
    outcome: "Your team becomes the platform authority",
    icon: "users",
    color: "#00c2e0",
  },
];

const colMeta = [
  { key: "pain", label: "Your Pain Point", icon: "flame" as IconName },
  { key: "solve", label: "How We Solve It", icon: "bulb" as IconName },
  { key: "deliver", label: "How We Deliver", icon: "bolt" as IconName },
  { key: "outcome", label: "The Outcome You Own", icon: "check" as IconName },
];

const colAccents = ["#ef4444", "#6366f1", "#f59e0b", "#10b981"];


const MobileRowCard: React.FC<{ row: DilemmaRow; index: number }> = ({
  row,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    className="rounded-2xl border overflow-hidden"
    style={{ background: `${row.color}08`, borderColor: `${row.color}30` }}
  >
   
    <div
      className="p-4 flex items-center gap-3 border-b"
      style={{ background: `${row.color}15`, borderColor: `${row.color}25` }}
    >
      <div
        className="rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          width: 36,
          height: 36,
          background: `${row.color}22`,
          border: `1.5px solid ${row.color}50`,
        }}
      >
        <SvgIcon name={row.icon} size={16} color={row.color} />
      </div>
      <p className="text-sm font-bold m-0" style={{ color: colAccents[0] }}>
        {row.pain}
      </p>
    </div>

  
    <div className="p-4 flex flex-col gap-3">
     
      <div
        className="rounded-xl p-3"
        style={{
          background: `${colAccents[1]}0d`,
          border: `1px solid ${colAccents[1]}22`,
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <SvgIcon name="bulb" size={12} color={colAccents[1]} />
          <span
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{ color: colAccents[1] }}
          >
            How We Solve It
          </span>
        </div>
        <p
          className="text-xs leading-relaxed m-0"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {row.solve}
        </p>
      </div>

      <div
        className="rounded-xl p-3"
        style={{
          background: `${colAccents[2]}0d`,
          border: `1px solid ${colAccents[2]}22`,
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <SvgIcon name="bolt" size={12} color={colAccents[2]} />
          <span
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{ color: colAccents[2] }}
          >
            How We Deliver
          </span>
        </div>
       <div className="flex flex-col gap-1">
  {row.deliver.split(", ").map((item, idx) => (
    <span
      key={idx}
      className="text-xs leading-relaxed"
      style={{ color: "rgba(255,255,255,0.55)" }}
    >
      {item}
    </span>
  ))}
</div>
      </div>

    
      <div
        className="rounded-xl p-3"
        style={{
          background: `${colAccents[3]}0d`,
          border: `1px solid ${colAccents[3]}22`,
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <SvgIcon name="check" size={12} color={colAccents[3]} />
          <span
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            The Outcome You Own
          </span>
        </div>
        <p
          className="text-xs font-semibold leading-relaxed m-0"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {row.outcome}
        </p>
      </div>
    </div>
  </motion.div>
);


const TabletRowCard: React.FC<{ row: DilemmaRow; index: number }> = ({
  row,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    className="rounded-2xl border overflow-hidden"
    style={{ background: `${row.color}08`, borderColor: `${row.color}30` }}
  >

    <div
      className="p-4 flex items-center gap-3 border-b"
      style={{ background: `${row.color}15`, borderColor: `${row.color}25` }}
    >
      <div
        className="rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          width: 36,
          height: 36,
          background: `${row.color}22`,
          border: `1.5px solid ${row.color}50`,
        }}
      >
        <SvgIcon name={row.icon} size={16} color={row.color} />
      </div>
      <p className="text-sm font-bold m-0" style={{ color: colAccents[0] }}>
        {row.pain}
      </p>
    </div>
   
    <div
      className="grid grid-cols-3 divide-x"
      style={{ borderColor: `${row.color}20` }}
    >
      {[
        {
          key: "solve",
          label: "How We Solve It",
          icon: "bulb" as IconName,
          ci: 1,
         content: (
  <p className="text-xs leading-relaxed m-0" style={{ color: "rgba(255,255,255,0.55)" }}>
    {row.solve}
  </p>
),

        },
        {
  key: "deliver",
  label: "How We Deliver",
  icon: "bolt" as IconName,
  ci: 2,
  content: (
    <div className="flex flex-col gap-1">
      {row.deliver.split(", ").map((item, idx) => (
        <span
          key={idx}
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {item}
        </span>
      ))}
    </div>
  ),
},
        {
          key: "outcome",
          label: "The Outcome You Own",
          icon: "check" as IconName,
          ci: 3,
          content: (
  <p className="text-xs font-semibold leading-relaxed m-0" style={{ color: "rgba(255,255,255,0.55)" }}>
    {row.outcome}
  </p>
),
        },
      ].map((col) => (
        <div
          key={col.key}
          className="p-3"
          style={{ borderColor: `${row.color}15` }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <SvgIcon name={col.icon} size={11} color={colAccents[col.ci - 1]} />
            <span
              className="text-[10px] font-bold uppercase tracking-wider"
              style={{ color: colAccents[col.ci - 1] }}
            >
              {col.label}
            </span>
          </div>
          {col.content}
        </div>
      ))}
    </div>
  </motion.div>
);


const DilemmaTable: React.FC = () => {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const width = useWindowWidth();

  
  if (width < 640) {
    return (
      <div className="flex flex-col gap-4">
        {dilemmaRows.map((row, i) => (
          <MobileRowCard key={i} row={row} index={i} />
        ))}
      </div>
    );
  }

  
  if (width < 1024) {
    return (
      <div className="flex flex-col gap-4">
        {dilemmaRows.map((row, i) => (
          <TabletRowCard key={i} row={row} index={i} />
        ))}
      </div>
    );
  }

  
  return (
    <div>
      
      <div className="grid grid-cols-4 gap-2.5 mb-3">
        {colMeta.map((c, ci) => (
          <motion.div
            key={c.key}
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.07 }}
            className="rounded-xl border p-4 flex items-center gap-3"
            style={{
              background: `${colAccents[ci]}14`,
              borderColor: `${colAccents[ci]}40`,
            }}
          >
            <div
              className="rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                width: 34,
                height: 34,
                background: `${colAccents[ci]}1a`,
                border: `1.5px solid ${colAccents[ci]}44`,
              }}
            >
              <SvgIcon name={c.icon} size={16} color={colAccents[ci]} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-wide leading-tight"
              style={{ color: colAccents[ci] }}
            >
              {c.label}
            </span>
          </motion.div>
        ))}
      </div>

     
      <div className="flex flex-col gap-2">
        {dilemmaRows.map((row, i) => {
          const isActive = activeRow === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
              className="grid grid-cols-4 gap-2 cursor-default"
              style={{
                transform: isActive ? "scale(1.006)" : "scale(1)",
                transition: "transform 0.22s ease",
              }}
            >
             
              <div
                className="relative overflow-hidden rounded-2xl border p-4 flex items-center gap-3 transition-all duration-200"
                style={{
                  background: isActive
                    ? `${colAccents[0]}14`
                    : "rgba(255,255,255,0.018)",
                  borderColor: isActive
                    ? `${colAccents[0]}50`
                    : "rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 rounded-l-2xl transition-all duration-200"
                  style={{
                    width: isActive ? 4 : 3,
                    background: row.color,
                    opacity: isActive ? 1 : 0.70,
                  }}
                />
                <div
                  className="rounded-full inline-flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    background: `${row.color}${isActive ? "28" : "18"}`,
                    border: `1.5px solid ${row.color}${isActive ? "65" : "38"}`,
                    transition: "all 0.2s",
                  }}
                >
                  <SvgIcon name={row.icon} size={17} color={row.color} />
                </div>
                <p
                  className="text-sm font-semibold leading-snug m-0 transition-colors duration-200"
                  style={{
                    color: isActive ? colAccents[0] : `${colAccents[0]}90`,
                  }}
                >
                  {row.pain}
                </p>
              </div>

            
              <div
                className="relative overflow-hidden rounded-2xl border p-4 flex flex-col justify-center transition-all duration-200"
                style={{
                  background: isActive
                    ? `${colAccents[1]}14`
                    : "rgba(255,255,255,0.018)",
                  borderColor: isActive
                    ? `${colAccents[1]}50`
                    : "rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="text-sm leading-relaxed m-0 transition-colors duration-200"
                  style={{
                    color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.70)",
                  }}
                >
                  {row.solve}
                </p>
              </div>

             
              <div
                className="relative overflow-hidden rounded-2xl border p-4 flex flex-col justify-center transition-all duration-200"
                style={{
                  background: isActive
                    ? `${colAccents[2]}14`
                    : "rgba(255,255,255,0.018)",
                  borderColor: isActive
                    ? `${colAccents[2]}50`
                    : "rgba(255,255,255,0.07)",
                }}
              >
               <div className="flex flex-col gap-2">
  {row.deliver.split(", ").map((item, idx) => (
    <span
      key={idx}
      className="text-sm leading-relaxed transition-colors duration-200"
      style={{
        color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.70)",
      }}
    >
      {item}
    </span>
  ))}
</div>
              </div>

            
              <div
                className="relative overflow-hidden rounded-2xl border p-4 flex flex-col justify-center transition-all duration-200"
                style={{
                  background: isActive
                    ? `${colAccents[3]}14`
                    : "rgba(255,255,255,0.018)",
                  borderColor: isActive
                    ? `${colAccents[3]}50`
                    : "rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="text-sm font-semibold leading-snug m-0 transition-colors duration-200"
                  style={{
                    color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.70)",

                  }}
                >
                  {row.outcome}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};


const SectionLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 justify-center mb-4 sm:mb-5"
  >
    <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-amber-400/60" />
    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-amber-400/70">
      {children}
    </span>
    <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-amber-400/60" />
  </motion.div>
);


const ServiceCardItem: React.FC<{ service: ServiceCard; index: number }> = ({
  service,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative p-5 sm:p-6 rounded-2xl border overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.02)",
        borderColor: "rgba(255,255,255,0.07)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          `${service.color}50`;
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 0 28px ${service.color}0d`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div
        className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top right, ${service.color}15, transparent)`,
        }}
      />
      <div
        className="mb-3 sm:mb-4 rounded-full flex items-center justify-center"
        style={{
          width: 44,
          height: 44,
          background: `${service.color}18`,
          border: `1.5px solid ${service.color}40`,
        }}
      >
        <SvgIcon name={service.icon} size={20} color={service.color} />
      </div>
      <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
        {service.title}
      </h3>
      <p className="text-white/55 text-sm leading-relaxed">
        {service.description}
      </p>
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}80, transparent)`,
        }}
      />
    </motion.div>
  );
};


const HomePage: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: "Cloud-Native Infrastructure",
      icon: "cloud",
      color: "#6366f1",
      description:
        "Modern, scalable cloud architectures built for performance and reliability",
    },
    {
      title: "Multi/Hybrid Cloud Strategy",
      icon: "globe",
      color: "#8b5cf6",
      description:
        "Run the right workload in the right place — consistent operations across any cloud without lock-in",
    },
    {
      title: "Platform Engineering",
      icon: "wrench",
      color: "#10b981",
      description: "Custom platforms that empower your teams to deliver faster",
    },
    {
      title: "Cloud Governance",
      icon: "shield",
      color: "#f59e0b",
      description:
        "Comprehensive governance frameworks for security and compliance",
    },
    {
      title: "FinOps & Cost Optimization",
      icon: "dollar",
      color: "#00c2e0",
      description: "Data-driven cost optimization to maximize your cloud ROI",
    },
    {
      title: "Data & AI",
      icon: "robot",
      color: "#ec4899",
      description: "Cutting-edge data solutions and AI implementations",
    },
  ];

  
  const companies: CompanyLogo[] = [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Microsoft Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Google Cloud",
     
      logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg",
    },
  ];

  const badges: Badge[] = [
    { icon: "check", label: "100% Free" },
    { icon: "bolt", label: "30 Minutes" },
    { icon: "shield", label: "No Obligation" },
    { icon: "bulb", label: "Instant Insights" },
  ];

  return (
    <div className="min-h-screen bg-[#050505]">
      <Hero />

    
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#050505] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,159,26,0.04) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none hidden md:block"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-6xl mx-auto relative">
          <SectionLabel>The Mahity Approach</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              The{" "}
              <span
                style={{
                  background: "linear-gradient(95deg,#fbbf24,#f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mahity Approach
              </span>
            </h2>
            <p className="text-white/55 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              From chaos to clarity. Here's how we transform your
              infrastructure.
            </p>
          </motion.div>
          <DilemmaTable />
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#050505] relative">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,159,26,0.18), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <SectionLabel>Partners & Platforms</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Trusted By
            </h2>
            <p className="text-lg sm:text-xl text-white/55">
               Leaders
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="group"
              >
                <div
                  className="px-6 sm:px-8 py-5 sm:py-7 rounded-2xl border transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(251,191,36,0.32)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 0 28px rgba(251,191,36,0.06)";
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "none";
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(255,255,255,0.025)";
                  }}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-8 sm:h-10 md:h-12 w-auto opacity-55 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      filter:
                        company.name === "Google Cloud"
                          ? "brightness(0) invert(1) opacity(0.6)"
                          : "drop-shadow(0 2px 6px rgba(0,0,0,0.4))",
                    }}
                    onError={(e) => {
                     
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".logo-fallback")) {
                        const span = document.createElement("span");
                        span.className = "logo-fallback";
                        span.style.cssText =
                          "color: rgba(255,255,255,0.7); font-weight: 700; font-size: 1rem; letter-spacing: 0.05em;";
                        span.textContent = company.name;
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 sm:mt-12 pt-8 sm:pt-10 text-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-white/45 text-sm md:text-base">
              Trusted by{" "}
              <span className="text-white font-semibold">
                50+ engineering teams
              </span>{" "}
              worldwide
            </p>
          </motion.div>
        </div>
      </section>

     
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#050505] relative overflow-hidden">
        <div
          className="absolute -right-40 top-1/3 w-96 h-96 rounded-full pointer-events-none hidden md:block"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <SectionLabel>What We Do</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              The Mahity Way –{" "}
              <span
                style={{
                  background: "linear-gradient(95deg,#fbbf24,#f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Focus, Then Depth
              </span>
            </h2>
            <p className="text-white/55 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Most cloud consultancies claim to do everything. We do not.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((s, i) => (
              <ServiceCardItem key={i} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#050505] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,158,11,0.055) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.035) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none border hidden sm:block"
          style={{
            width: 560,
            height: 560,
            borderColor: "rgba(251,191,36,0.04)",
          }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none border hidden sm:block"
          style={{
            width: 780,
            height: 780,
            borderColor: "rgba(251,191,36,0.022)",
          }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="flex justify-center mb-6 sm:mb-8"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: 64,
                  height: 64,
                  background: "rgba(255,159,26,0.12)",
                  border: "1.5px solid rgba(255,159,26,0.35)",
                }}
              >
                <SvgIcon name="rocket" size={28} color="#ff9f1a" />
              </div>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              Ready to{" "}
              <span
                style={{
                  background: "linear-gradient(95deg,#fbbf24,#f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Optimize?
              </span>
            </h2>
            <p className="text-white/55 text-sm sm:text-base md:text-xl mb-3">
              Are you done paying for waste?
            </p>
            <p className="text-amber-400 text-base sm:text-lg md:text-2xl font-bold mb-8 sm:mb-11">
              Don't lie to yourself. What do you have to lose?
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-11">
              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden px-7 sm:px-9 py-4 text-black text-sm sm:text-base font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                style={{
                  background: "linear-gradient(95deg, #fbbf24, #f97316)",
                }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                Book Your Free Audit{" "}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <SvgIcon name="arrow" size={18} color="currentColor" />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 sm:px-9 py-4 text-white text-sm sm:text-base font-bold rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  borderColor: "rgba(251,191,36,0.28)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(251,191,36,0.65)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 22px rgba(251,191,36,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(251,191,36,0.28)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "none";
                }}
              >
                View Case Studies{" "}
                <SvgIcon name="arrow" size={18} color="currentColor" />
              </motion.button>
            </div>

            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-white/50"
                >
                  <SvgIcon name={badge.icon} size={14} color="#ff9f1a" />
                  <span className="font-semibold">{badge.label}</span>
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
