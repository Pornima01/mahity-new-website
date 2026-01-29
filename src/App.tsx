// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import Hero from "./components/hero";

// // Import your pages (you'll create these)
// import ContactUs from "./pages/contact-us";
// // import About from "./pages/About";
// // import Pricing from "./pages/Pricing";
// // import CoreSolutionA from "./pages/CoreSolutionA";
// // import CoreSolutionB from "./pages/CoreSolutionB";
// // import EnterpriseSecurity from "./pages/EnterpriseSecurity";
// // import Integrations from "./pages/Integrations";
// // import ResourceLibrary from "./pages/ResourceLibrary";
// // import CaseStudies from "./pages/CaseStudies";
// // import Blog from "./pages/Blog";
// // import Documentation from "./pages/Documentation";
// // import Support from "./pages/Support";
// // import Leadership from "./pages/Leadership";
// // import Careers from "./pages/Careers";
// // import Partners from "./pages/Partners";
// // import PrivacyPolicy from "./pages/PrivacyPolicy";
// // import TermsOfService from "./pages/TermsOfService";
// // import CookieSettings from "./pages/CookieSettings";
// // import Sitemap from "./pages/Sitemap";

// // Home Page Component
// function HomePage() {
//   return (
//     <div>
//       <Hero />
//       {/* Add other home page content here */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header activePage={"home"} />

//         <main className="flex-grow">
//           <Routes>
//             {/* Home Route */}
//             <Route path="/" element={<HomePage />} />

//             {/* Platform Routes */}
//             {/* <Route path="/core-solution-a" element={<CoreSolutionA />} />
//             <Route path="/core-solution-b" element={<CoreSolutionB />} />
//             <Route path="/enterprise-security" element={<EnterpriseSecurity />} />
//             <Route path="/integrations" element={<Integrations />} />
//             <Route path="/pricing" element={<Pricing />} /> */}

//             {/* Resources Routes */}
//             {/* <Route path="/resource-library" element={<ResourceLibrary />} />
//             <Route path="/case-studies" element={<CaseStudies />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/documentation" element={<Documentation />} />
//             <Route path="/support" element={<Support />} /> */}

//             {/* Company Routes */}
//             {/* <Route path="/about" element={<About />} />
//             <Route path="/leadership" element={<Leadership />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/partners" element={<Partners />} /> */}
//             <Route path="/contact-us" element={<ContactUs />} />

//             {/* Policy Routes */}
//             {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-of-service" element={<TermsOfService />} />
//             <Route path="/cookie-settings" element={<CookieSettings />} />
//             <Route path="/sitemap" element={<Sitemap />} /> */}

//             {/* 404 Not Found Route */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// // 404 Page Component
// function NotFound() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
//         <p className="text-xl text-gray-600 mb-8">Page not found</p>
//         <a
//           href="/"
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Go back home
//         </a>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutUs from "./pages/about-us";
import Solutions from "./pages/solutions";

// Import your pages
import HomePage from "./pages/home";
import ContactUs from "./pages/contact-us";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfUse from "./pages/terms-of-use";

// 404 Page Component
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/60 mb-8">Page not found</p>
        <a
          href="/"
          className="px-6 py-3 bg-primary text-background-dark rounded-lg hover:scale-105 transition-transform font-bold"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const progressBar = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        {/* Fixed progress bar at the top */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 z-[60]"
          style={{ width: progressBar, originX: "0%" }}
        >
          <div className="h-full bg-gradient-to-r from-[#ff9f1a] via-[#ffb84d] to-[#00f2ff] shadow-[0_0_20px_rgba(255,159,26,0.6)]"></div>
          <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
        </motion.div>

        <Header activePage="home" />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/about-us" element={<AboutUs />} />

            {/* Policy Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;