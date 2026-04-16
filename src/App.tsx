

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Footer from "./components/footer";
import AboutUs from "./pages/about-us";


// Import your pages
import HomePage from "./pages/home";
import ContactUs from "./pages/contact-us";
import GetAudited from "./pages/get-audited";
import PrivacyPolicy from "./pages/privacy-policy";
import RefundPolicy from "./pages/refund-policy";
import TermsOfUse from "./pages/terms-of-use";
import CloudInfrastructure from "./pages/solutions/cloud-native-infrastructure";
import MultiHybridCloud from "./pages/solutions/multi-hybrid-cloud";
import PlatformEngineering from "./pages/solutions/platform-engineering";
import CloudGovernanceSecurity  from "./pages/solutions/cloud-governance-security";
import FinOpsCostOptimization from "./pages/solutions/finops-cost-optimization";
import DataAICloud from "./pages/solutions/data-ai-cloud";
import Navbar from "./components/header";
import FinancialServices from "./pages/industries/financial-services";
import HealthcareLifeSciences from "./pages/industries/healthcare-life-sciences";
import RetailEcommerce from "./pages/industries/retail-ecommerce";
import Manufacturing from "./pages/industries/manufacturing";
import ItItes from "./pages/industries/it-ites";
import EcosystemPage from "./pages/ecosystem/page";
import TechPageTemplate from "./pages/ecosystem/techpage-template";
import CookieSettings from "./pages/cookie-settings"
import Custom404 from "./pages/404"
import Error401 from "./pages/401"

// 404 Page Component
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] pt-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/60 mb-8">Page not found</p>
        <a
          href="/"
          className="px-6 py-3 bg-primary text-background-dark rounded-lg hover:scale-105 transition-transform font-bold inline-block"
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
      <div className="flex flex-col min-h-screen relative bg-[#050505]">
        {/* Fixed progress bar at the top */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 z-[60]"
          style={{ width: progressBar, originX: "0%" }}
        >
          <div className="h-full bg-gradient-to-r from-[#ff9f1a] via-[#ffb84d] to-[#00f2ff] shadow-[0_0_20px_rgba(255,159,26,0.6)]"></div>
          <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
        </motion.div>

        {/* Global Navbar */}
        <Navbar activePage="home" />
        

        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Solutions Pages */}
            
            <Route
              path="/solutions/cloud-native-infrastructure"
              element={<CloudInfrastructure />}
            />
            <Route
              path="/solutions/multi-hybrid-cloud-strategy"
              element={<MultiHybridCloud />}
            />
             <Route
              path="/solutions/platform-engineering"
              element={<PlatformEngineering />}
            />
            <Route
              path="/solutions/cloud-governance-security"
              element={<CloudGovernanceSecurity />}
            />
            <Route
              path="/solutions/finops-cost-optimization"
              element={<FinOpsCostOptimization  />}
            />
            <Route
              path="/solutions/data-ai-cloud"
              element={<DataAICloud  />}
            />

            {/* Industry Pages */}
            <Route path="/industries/financial-services" element={<FinancialServices />} />
            <Route path="/industries/healthcare-life-sciences" element={<HealthcareLifeSciences />} />
            <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/it-ites" element={<ItItes />} />


            {/* Ecosystem Page */}
<Route path="/ecosystem" element={<EcosystemPage />} />

<Route path="/ecosystem/:slug" element={<TechPageTemplate />} />

            {/* Other Pages */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/get-audited" element={<GetAudited />} />
            <Route path="/about-us" element={<AboutUs />} />

            {/* Policy-terms-cookies-refund Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/refund-policy" element={<RefundPolicy />}/>
            <Route path="/cookie-settings" element={<CookieSettings />} />

            {/* 404 Not Found - Must be last */}
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/401" element={<Error401 />} />
<Route path="*" element={<Custom404 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
