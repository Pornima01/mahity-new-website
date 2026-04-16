import React, { useState } from "react";
import { Linkedin, Twitter, Send } from "lucide-react";
import logo from "../assets/images/mahitylogo.png";


interface SmartLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const SmartLink: React.FC<SmartLinkProps> = ({ to, children, className, ...props }) => {
  return (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  );
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 space-y-6">
            <img src={logo} alt="Mahity Logo" className="h-16 w-auto mb-4" />

            <p className="text-sm leading-relaxed text-gray-400">
              Empowering businesses with intelligent solutions that drive growth
              and innovation.
            </p>

            <div>
              <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">
                Subscribe to Insights
              </h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9f1a] text-white placeholder-gray-500"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-4 py-2 bg-[#ff9f1a] hover:bg-[#ffb84d] rounded-lg transition-colors"
                  aria-label="Subscribe"
                >
                  <Send size={18} className="text-gray-900" />
                </button>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             
              <div>
                <h3 className="text-white font-semibold mb-6 text-lg">Platform</h3>
                <ul className="space-y-3">
                  <li>
                    <SmartLink to="/core-solution-a" className="hover:text-white transition-colors text-gray-400">
                      Core Solution A
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/core-solution-b" className="hover:text-white transition-colors text-gray-400">
                      Core Solution B
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/enterprise-security" className="hover:text-white transition-colors text-gray-400">
                      Enterprise Security
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/integrations" className="hover:text-white transition-colors text-gray-400">
                      Integrations
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/pricing" className="hover:text-white transition-colors text-gray-400">
                      Pricing
                    </SmartLink>
                  </li>
                </ul>
              </div>

          
              <div>
                <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <SmartLink to="/resource-library" className="hover:text-white transition-colors text-gray-400">
                      Resource Library
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/case-studies" className="hover:text-white transition-colors text-gray-400">
                      Case Studies
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/blog" className="hover:text-white transition-colors text-gray-400">
                      Blog Insights
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/documentation" className="hover:text-white transition-colors text-gray-400">
                      Documentation / API
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/support" className="hover:text-white transition-colors text-gray-400">
                      Support Center
                    </SmartLink>
                  </li>
                </ul>
              </div>

              
              <div>
                <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <SmartLink to="/about-us" className="hover:text-white transition-colors text-gray-400">
                      About Us
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/leadership" className="hover:text-white transition-colors text-gray-400">
                      Leadership Team
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/careers" className="hover:text-white transition-colors text-gray-400">
                      Careers{" "}
                      <span className="text-green-400 text-xs font-semibold">(Hiring!)</span>
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/partners" className="hover:text-white transition-colors text-gray-400">
                      Partner Program
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink to="/contact-us" className="hover:text-white transition-colors text-gray-400">
                      Contact Sales
                    </SmartLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-800"></div>

    
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-400">
            © {currentYear} Mahity Systems. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-gray-400">
            <SmartLink to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </SmartLink>
            <SmartLink to="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </SmartLink>
            <SmartLink to="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Service
            </SmartLink>
             
            <SmartLink to="/cookie-settings" className="hover:text-white transition-colors">
              Cookie Settings
            </SmartLink>
            <SmartLink to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </SmartLink>
          </div>
        </div>
      </div>
    </footer>
  );
}