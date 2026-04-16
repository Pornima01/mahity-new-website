// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface Service {
//   title: string;
//   description: string;
//   icon: string;
// }

// interface Solution {
//   id: string;
//   title: string;
//   tagline: string;
//   description: string;
//   icon: string;
//   color: string;
//   gradient: string;
//   services: Service[];
// }

// const SolutionsPage: React.FC = () => {
//   const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

//   const solutions: Solution[] = [
//     {
//       id: "1",
//       title: "Cloud & Infrastructure",
//       tagline: "Build. Scale. Optimize.",
//       description:
//         "Design and implement scalable, resilient cloud infrastructure that grows with your business",
//       icon: "cloud",
//       color: "from-blue-500/20 to-cyan-500/20",
//       gradient: "from-blue-500 to-cyan-500",
//       services: [
//         {
//           title: "Migration & Modernization",
//           description: "Strategic planning across AWS, Azure, and GCP",
//           icon: "cloud_sync",
//         },
//         {
//           title: "Multi-Cloud Management",
//           description: "Seamless integration of on-premise and cloud",
//           icon: "hub",
//         },
//         {
//           title: "Desktop Virtualization",
//           description: "Risk-free migration with zero downtime",
//           icon: "flight_takeoff",
//         },
//       ],
//     },
//     {
//       id: "2",
//       title: "Security & Operations",
//       tagline: "Automate. Accelerate. Innovate.",
//       description:
//         "Streamline development workflows with modern DevOps practices and intelligent automation",
//       icon: "sync",
//       color: "from-orange-500/20 to-yellow-500/20",
//       gradient: "from-orange-500 to-yellow-500",
//       services: [
//         {
//           title: "Security Audit",
//           description: "Automated build, test, and deployment",
//           icon: "webhook",
//         },
//         {
//           title: "SIEM",
//           description: "Terraform and CloudFormation expertise",
//           icon: "code",
//         },
//         {
//           title: "Dev Sec Ops",
//           description: "Kubernetes and Docker management",
//           icon: "widgets",
//         },
//         {
//           title: "FinOps / Observability",
//           description: "Quality assurance automation",
//           icon: "fact_check",
//         },
//       ],
//     },
//     {
//       id: "3",
//       title: "Data & Innovation",
//       tagline: "Collect. Process. Analyze.",
//       description:
//         "Transform raw data into actionable insights with cutting-edge analytics platforms",
//       icon: "database",
//       color: "from-purple-500/20 to-pink-500/20",
//       gradient: "from-purple-500 to-pink-500",
//       services: [
//         {
//           title: "Data Warehousing / Data Lake",
//           description: "Real-time and batch data processing",
//           icon: "account_tree",
//         },
//         {
//           title: "AI Offerings",
//           description: "Snowflake, Redshift, and BigQuery",
//           icon: "warehouse",
//         },
//       ],
//     },
//     {
//       id: "4",
//       title: "Business Solutions",
//       tagline: "Protect. Comply. Defend.",
//       description:
//         "Enterprise-grade security with zero-trust architecture and automated compliance",
//       icon: "shield",
//       color: "from-green-500/20 to-emerald-500/20",
//       gradient: "from-green-500 to-emerald-500",
//       services: [
//         {
//           title: "Workspace / Email",
//           description: "Never trust, always verify security",
//           icon: "verified_user",
//         },
//         {
//           title: "Marketing Communication",
//           description: "IAM policies and role-based access",
//           icon: "badge",
//         },
//       ],
//     },
//   ];

//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6 },
//   };

//   return (
//     <div className="min-h-screen bg-[#050505]">
//       {/* Enhanced Custom Header */}
//       <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
//         {/* Animated background */}
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,159,26,0.15),transparent_50%)]"></div>
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 2px 2px, rgba(255,159,26,0.15) 1px, transparent 0)",
//               backgroundSize: "40px 40px",
//             }}
//           ></div>
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div
//             className="text-center max-w-4xl mx-auto"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
//               Complete Cloud Solutions for
//               <span className="hero-gradient-text"> Modern Businesses</span>
//             </h1>
//             <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
//               Click any pillar below to explore its specialized services
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Enhanced Zigzag Timeline with Better Mobile Support */}
//       <section className="py-8 sm:py-12 md:py-20 px-4 md:px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Vertical Timeline Line - Desktop Only */}
//           <div className="relative">
//             <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/20 -translate-x-1/2"></div>

//             {/* Mobile Timeline Line - Left Side */}
//             <div className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/20"></div>

//             <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
//               {solutions.map((solution, index) => (
//                 <motion.div
//                   key={solution.id}
//                   className="relative"
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <div
//                     className={`flex gap-4 sm:gap-6 md:gap-8 items-start ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
//                   >
//                     {/* Desktop Timeline Icon - Center */}
//                     <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 md:top-12 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-orange-500 items-center justify-center shadow-[0_0_30px_rgba(255,159,26,0.6)] z-10 group-hover:scale-110 transition-transform">
//                       <span className="material-symbols-outlined text-2xl md:text-3xl text-white">
//                         {solution.icon}
//                       </span>
//                     </div>

//                     {/* Mobile Timeline Icon - Left Side */}
//                     <div className="lg:hidden flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(255,159,26,0.6)] z-10">
//                       <span className="material-symbols-outlined text-xl sm:text-2xl text-white">
//                         {solution.icon}
//                       </span>
//                     </div>

//                     {/* Content Side */}
//                     <div
//                       className={`flex-1 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}
//                     >
//                       {/* Pillar Card */}
//                       <motion.div
//                         onClick={() =>
//                           setExpandedPillar(
//                             expandedPillar === solution.id ? null : solution.id,
//                           )
//                         }
//                         className="relative group cursor-pointer"
//                         whileHover={{ scale: 1.01 }}
//                         whileTap={{ scale: 0.99 }}
//                       >
//                         <div
//                           className={`absolute inset-0 bg-gradient-to-r ${solution.color} rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
//                         ></div>

//                         <div
//                           className={`relative glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border transition-all ${
//                             expandedPillar === solution.id
//                               ? "border-primary shadow-[0_0_30px_rgba(255,159,26,0.4)]"
//                               : "border-white/10 hover:border-primary/50"
//                           }`}
//                         >
//                           <div className="flex items-center justify-between gap-3 sm:gap-4">
//                             <div className="flex-1 min-w-0">
//                               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 break-words">
//                                 {solution.title}
//                               </h2>
//                               <p className="text-primary text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2">
//                                 {solution.tagline}
//                               </p>
//                               <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">
//                                 {solution.description}
//                               </p>
//                             </div>

//                             <AnimatePresence mode="wait">
//                               {expandedPillar !== solution.id ? (
//                                 <motion.div
//                                   key="arrow"
//                                   className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
//                                   initial={{ opacity: 0, scale: 0 }}
//                                   animate={{ opacity: 1, scale: 1 }}
//                                   exit={{ opacity: 0, scale: 0 }}
//                                   transition={{ duration: 0.2 }}
//                                 >
//                                   <motion.div
//                                     className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_25px_rgba(255,159,26,0.8)]"
//                                     animate={{ y: [0, -8, 0] }}
//                                     transition={{
//                                       duration: 1.5,
//                                       repeat: Infinity,
//                                       ease: "easeInOut",
//                                     }}
//                                   >
//                                     <span className="material-symbols-outlined text-gray-900 text-2xl sm:text-3xl font-bold">
//                                       arrow_downward
//                                     </span>
//                                   </motion.div>
//                                 </motion.div>
//                               ) : (
//                                 <motion.div
//                                   key="close"
//                                   className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30"
//                                   initial={{ opacity: 0, scale: 0 }}
//                                   animate={{ opacity: 1, scale: 1 }}
//                                   exit={{ opacity: 0, scale: 0 }}
//                                   transition={{ duration: 0.2 }}
//                                 >
//                                   <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_25px_rgba(255,159,26,0.8)] cursor-pointer hover:scale-110 transition-transform">
//                                     <span className="material-symbols-outlined text-gray-900 text-2xl sm:text-3xl font-bold">
//                                       close
//                                     </span>
//                                   </div>
//                                 </motion.div>
//                               )}
//                             </AnimatePresence>
//                           </div>
//                         </div>
//                       </motion.div>
//                     </div>

//                     {/* Empty space on opposite side - Desktop Only */}
//                     <div className="hidden lg:block flex-1"></div>
//                   </div>

//                   {/* Simple Connector Line */}
//                   <AnimatePresence>
//                     {expandedPillar === solution.id && (
//                       <motion.div
//                         className="flex justify-center"
//                         initial={{ opacity: 0, scaleY: 0 }}
//                         animate={{ opacity: 1, scaleY: 1 }}
//                         exit={{ opacity: 0, scaleY: 0 }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                         style={{ originY: 0 }}
//                       >
//                         <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-primary/70 to-primary/30"></div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   {/* Services Grid with Smart Layout */}
//                   <AnimatePresence>
//                     {expandedPillar === solution.id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.4, ease: "easeInOut" }}
//                         className="relative overflow-hidden"
//                       >
//                         {/* Dynamic Horizontal Line - adjusts based on service count */}
//                         {solution.services.length > 1 && (
//                           <motion.div
//                             className="hidden lg:block absolute top-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
//                             style={{
//                               left:
//                                 solution.services.length === 2
//                                   ? "25%"
//                                   : solution.services.length === 3
//                                     ? "16.666%"
//                                     : solution.services.length === 4
//                                       ? "12.5%"
//                                       : "8.333%",
//                               right:
//                                 solution.services.length === 2
//                                   ? "25%"
//                                   : solution.services.length === 3
//                                     ? "16.666%"
//                                     : solution.services.length === 4
//                                       ? "12.5%"
//                                       : "8.333%",
//                             }}
//                             initial={{ scaleX: 0 }}
//                             animate={{ scaleX: 1 }}
//                             transition={{ delay: 0.2, duration: 0.5 }}
//                           />
//                         )}

//                         <div
//                           className={`grid gap-4 sm:gap-5 md:gap-6 relative pt-0 lg:pt-4 ${
//                             solution.services.length === 1
//                               ? "grid-cols-1 sm:max-w-md mx-auto"
//                               : solution.services.length === 2
//                                 ? "grid-cols-1 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto"
//                                 : solution.services.length === 3
//                                   ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//                                   : solution.services.length === 4
//                                     ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//                                     : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//                           }`}
//                         >
//                           {solution.services.map((service, serviceIndex) => {
//                             // For 4 services: show 3 in first row, 1 centered in second row
//                             const shouldCenter =
//                               solution.services.length === 4 &&
//                               serviceIndex === 3;

//                             return (
//                               <motion.div
//                                 key={serviceIndex}
//                                 className={`relative ${shouldCenter ? "lg:col-start-2" : ""}`}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: 20 }}
//                                 transition={{
//                                   delay: 0.1 + serviceIndex * 0.08,
//                                   duration: 0.4,
//                                 }}
//                               >
//                                 {/* Simple Vertical Line from top to card - Desktop only */}
//                                 {solution.services.length > 1 && (
//                                   <motion.div
//                                     className="hidden lg:block absolute -top-4 left-1/2 w-0.5 h-4 -translate-x-1/2 bg-gradient-to-b from-primary/50 to-transparent"
//                                     initial={{ scaleY: 0 }}
//                                     animate={{ scaleY: 1 }}
//                                     transition={{
//                                       delay: 0.3 + serviceIndex * 0.05,
//                                       duration: 0.3,
//                                     }}
//                                     style={{ originY: 0 }}
//                                   />
//                                 )}

//                                 {/* Service Card */}
//                                 <motion.div
//                                   className="group relative h-full"
//                                   whileHover={{ y: -5 }}
//                                   whileTap={{ scale: 0.98 }}
//                                 >
//                                   <div
//                                     className={`absolute inset-0 bg-gradient-to-br ${solution.color} rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//                                   />

//                                   <div className="relative glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 hover:border-primary/50 transition-all h-full flex flex-col">
//                                     {/* Icon Badge */}
//                                     <div
//                                       className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}
//                                     >
//                                       <span className="material-symbols-outlined text-xl sm:text-2xl text-white">
//                                         {service.icon}
//                                       </span>
//                                     </div>

//                                     {/* Content */}
//                                     <h4 className="text-white font-bold text-base sm:text-lg mb-2 leading-tight">
//                                       {service.title}
//                                     </h4>
//                                     <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
//                                       {service.description}
//                                     </p>

//                                     {/* Link with correct URL structure */}
//                                     <a
//                                       href={`/solutions/${solution.title
//                                         .toLowerCase()
//                                         .replace(/\s+/g, "-")
//                                         .replace(/&/g, "and")}/${service.title
//                                         .toLowerCase()
//                                         .replace(/\s+/g, "-")
//                                         .replace(/&/g, "and")
//                                         .replace(/\//g, "-")}`}
//                                       className="flex items-center gap-1 text-primary text-xs sm:text-sm font-semibold group/link hover:gap-2 transition-all mt-auto"
//                                     >
//                                       <span>Explore Service</span>
//                                       <span className="material-symbols-outlined text-sm sm:text-base group-hover/link:translate-x-1 transition-transform">
//                                         arrow_forward
//                                       </span>
//                                     </a>
//                                   </div>
//                                 </motion.div>
//                               </motion.div>
//                             );
//                           })}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section className="py-12 sm:py-16 md:py-24 px-4 md:px-6">
//         <div className="max-w-5xl mx-auto">
//           <motion.div
//             className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-primary/20 text-center relative overflow-hidden"
//             {...fadeInUp}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-cyan-500/10"></div>

//             <div className="relative z-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
//                 Ready to Transform Your{" "}
//                 <span className="hero-gradient-text">Infrastructure?</span>
//               </h2>
//               <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
//                 Let's discuss which solutions are right for your business.
//                 Schedule a free consultation with our experts.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
//                 <motion.button
//                   className="group relative bg-primary text-gray-900 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold overflow-hidden shadow-[0_0_30px_rgba(255,159,26,0.5)]"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="relative z-10 flex items-center justify-center gap-2">
//                     <span className="hidden sm:inline">
//                       Schedule Free Consultation
//                     </span>
//                     <span className="sm:hidden">Get Consultation</span>
//                     <span className="material-symbols-outlined text-lg sm:text-xl">
//                       calendar_today
//                     </span>
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-primary to-orange-500 bg-[length:200%_100%] group-hover:animate-shimmer"></div>
//                 </motion.button>

//                 <motion.button
//                   className="glass-card px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold border border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="hidden sm:inline">
//                     Download Service Guide
//                   </span>
//                   <span className="sm:hidden">Service Guide</span>
//                   <span className="material-symbols-outlined text-lg sm:text-xl">
//                     download
//                   </span>
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SolutionsPage;