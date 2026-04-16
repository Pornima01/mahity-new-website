
import React, { useState } from "react";
import { Page, SolutionCategory } from "../types/index";
import logo from "../assets/images/mahitylogo.png";

interface NavbarProps {
  activePage: Page;
}

const solutionCategories: SolutionCategory[] = [
  {
    id: "1",
    title: "Cloud‑Native Infrastructure",
    description: "CONTENT (5 WORDS)",
    href: "/solutions/cloud-native-infrastructure",
    icon: "cloud",
  },
  {
    id: "2",
    title: "Multi/Hybrid Cloud Strategy",
    description: "CONTENT (5 WORDS)",
    href: "/solutions/multi-hybrid-cloud-strategy",
    icon: "sync",
  },
  {
    id: "3",
    title: "Platform Engineering",
    description: "CONTENT (5 WORDS)",
    href: "/solutions/platform-engineering",
    icon: "engineering",
  },
  {
    id: "4",
    title: "Cloud Governance & Security",
    description: "CONTENT (5 WORDS)",
    href: "/solutions/cloud-governance-security",
    icon: "database",
  },
  {
    id: "5",
    title: "FinOps & Cost Optimization",
    description: "CONTENT (5 WORDS)",
    href: "/solutions/finops-cost-optimization",
    icon: "shield",
  },
  {
    id: "6",
    title: "Data & AI on Cloud",
    description: "CONTENT (5 WORDS)",
    href: "/solutions/data-ai-cloud",
    icon: "psychology",
  },
];


const solutionHrefToId: Record<string, string> = Object.fromEntries(
  solutionCategories.map((c) => [c.href, c.id]),
);

const solutionContent = {
  "1": {
    featured: {
      icon: "architecture",
      title: "Enterprise Cloud Design",
      description:
        "Build robust, scalable cloud infrastructure tailored to your business needs",
      link: "solutions/cloud-architecture/enterprise",
    },
  },
  "2": {
    featured: {
      icon: "autorenew",
      title: "DevOps Transformation",
      description:
        "Accelerate delivery with automated workflows and modern DevOps practices",
      link: "solutions/devops/transformation",
    },
  },
  "3": {
    featured: {
      icon: "insights",
      title: "Modern Data Platform",
      description:
        "Transform raw data into actionable insights with cutting-edge analytics",
      link: "solutions/data-engineering/platform",
    },
  },
  "4": {
    featured: {
      icon: "verified_user",
      title: "Security First Approach",
      description:
        "Protect your infrastructure with enterprise-grade security solutions",
      link: "solutions/security/enterprise",
    },
  },
  "5": {
    featured: {
      icon: "savings",
      title: "Cost Optimization",
      description: "Reduce cloud spend with intelligent FinOps strategies",
      link: "solutions/finops/optimization",
    },
  },
  "6": {
    featured: {
      icon: "psychology",
      title: "AI on Cloud",
      description:
        "Build AI-powered platforms with scalable data infrastructure",
      link: "solutions/data-ai/platform",
    },
  },
};

const platforms = [
  {
    id: "financial",
    name: "Financial Services",
    icon: "account_balance",
    href: "/industries/financial-services",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: "health_and_safety",
    href: "/industries/healthcare-life-sciences",
  },
  {
    id: "retail",
    name: "Retail & E‑commerce",
    icon: "storefront",
    href: "/industries/retail-ecommerce",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "precision_manufacturing",
    href: "/industries/manufacturing",
  },
  {
    id: "itites",
    name: "IT/ITES",
    icon: "computer",
    href: "/industries/it-ites",
  },
];

const resources = [
  { id: "blog", name: "Blog", icon: "article", href: "resources/blog" },
  {
    id: "whitepapers",
    name: "Whitepapers & PDFs",
    icon: "description",
    href: "resources/whitepapers",
  },
  {
    id: "case-studies",
    name: "Case Studies",
    icon: "cases",
    href: "resources/case-studies",
  },
];

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const pathname =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/$/, "")
      : "";

  
  const isOnSolutionsSection = pathname.startsWith("/solutions");
  
  const activeSolutionId = solutionHrefToId[pathname] ?? null;

  
  const isOnIndustriesSection = pathname.startsWith("/industries");
 
  const activeIndustryHref =
    platforms.find((p) => p.href === pathname)?.href ?? null;

 
  const isOnEcosystem =
    pathname === "/ecosystem" || pathname.startsWith("/ecosystem");

  const handleDropdownClick = (menu: string) =>
    setOpenDropdown(openDropdown === menu ? null : menu);
  const closeDropdown = () => setOpenDropdown(null);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileAccordion(null);
  };
  const toggleMobileAccordion = (menu: string) =>
    setMobileAccordion(mobileAccordion === menu ? null : menu);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim()) {
      setNewsletterError("Email is required");
      return;
    }
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError("Please enter a valid email");
      return;
    }
    setNewsletterError("");
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSuccess(false), 3000);
  };

  
  const currentContent =
    solutionContent[
      (selectedSolution ||
        activeSolutionId ||
        "1") as keyof typeof solutionContent
    ];

  return (
    <>
      {openDropdown && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 hidden lg:block"
          style={{ top: "80px" }}
          onClick={closeDropdown}
        />
      )}

      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <img
              src={logo}
              alt="Mahity Systems"
              className="h-12 sm:h-16 md:h-20 w-auto max-h-16 sm:max-h-24 transition-transform group-hover:scale-110 drop-shadow-lg"
            />
          </a>

          
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {/* Home */}
            <a
              href="/"
              className={`text-sm font-medium transition-colors ${
                activePage === "home" &&
                !isOnSolutionsSection &&
                !isOnIndustriesSection &&
                !isOnEcosystem
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Home
            </a>

            
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("solutions")}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  openDropdown === "solutions" || isOnSolutionsSection
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Solutions
                <span
                  className={`material-symbols-outlined text-base transition-transform duration-200 ${openDropdown === "solutions" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
            </div>

            
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("platforms")}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  openDropdown === "platforms" || isOnIndustriesSection
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Industries
                <span
                  className={`material-symbols-outlined text-base transition-transform duration-200 ${openDropdown === "platforms" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
            </div>

            
            <a
              href="/ecosystem"
              onClick={closeDropdown}
              className={`relative text-sm font-medium transition-colors group ${
                isOnEcosystem
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Ecosystem
            </a>

            {/* Resources */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("resources")}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  openDropdown === "resources" || activePage === "resources"
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Resources
                <span
                  className={`material-symbols-outlined text-base transition-transform duration-200 ${openDropdown === "resources" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/get-audited"
              className="bg-primary text-background-dark px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,159,26,0.2)]"
            >
              Get Audited
            </a>
            <a
              href="/contact-us"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 hover:bg-primary/25 hover:border-primary transition-all group"
              title="Contact Us"
            >
              <span
                className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform"
                style={{ fontSize: "22px" }}
              >
                phone_in_talk
              </span>
            </a>
          </div>

          
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* ── SOLUTIONS  ── */}
        {/* {openDropdown === "solutions" && (
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
            <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-0" style={{ width: "850px", minHeight: "400px" }}> */}

        {/* Left — category list */}
        {/* <div className="p-8 bg-white/5 border-r border-white/10">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-5">Our Solutions</h3>
                  <div className="space-y-1">
                    {solutionCategories.map((cat) => {
                      const isActive  = cat.id === activeSolutionId;   // currently on this solution page
                      const isHovered = cat.id === selectedSolution;
                      return (
                        <a key={cat.id} href={cat.href}
                          onMouseEnter={() => setSelectedSolution(cat.id)}
                          onMouseLeave={() => setSelectedSolution("")}
                          onClick={closeDropdown}
                          className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all overflow-hidden ${
                            isActive ? "bg-primary/10" : isHovered ? "bg-white/5" : ""
                          }`}>
                          {/* Running border — only for the page user is currently on */}
        {/* {isActive && (
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ borderRadius: "0.5rem" }}>
                              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)"
                                fill="none" stroke="#ff9f1a" strokeWidth="1"
                                strokeDasharray="200" strokeDashoffset="0" rx="8"
                                className="running-border-svg"
                                style={{ filter: "drop-shadow(0 0 4px #ff9f1a)" }} />
                            </svg>
                          )}
                          <span className={`material-symbols-outlined text-lg ${isHovered || isActive ? "text-primary" : "text-white/50"}`}>{cat.icon}</span>
                          <span className={`text-sm font-medium transition-colors ${isHovered || isActive ? "text-primary" : "text-white/80"}`}>{cat.title}</span>
                          {isHovered && !isActive && (
                            <span className="material-symbols-outlined text-base text-primary ml-auto">chevron_right</span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>  */}

        {/* Right — featured card */}
        {/* <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent">
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 h-full flex flex-col">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Featured</span>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-primary text-2xl">{currentContent.featured.icon}</span>
                      </div>
                      <h4 className="text-white font-bold text-base mb-2">{currentContent.featured.title}</h4>
                      <p className="text-white/60 text-xs mb-4 leading-relaxed">{currentContent.featured.description}</p>
                      <a href={currentContent.featured.link} onClick={closeDropdown}
                        className="text-primary text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Learn more <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )} */}

        {/* ── SOLUTIONS ── */}
        {openDropdown === "solutions" && (
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
            <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div style={{ width: "460px", minHeight: "400px" }}>
                <div className="p-8">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-5">
                    Our Solutions
                  </h3>
                  <div className="space-y-3">
                    {solutionCategories.map((cat) => {
                      const isActive = cat.id === activeSolutionId;
                      const isHovered = cat.id === selectedSolution;
                      return (
                        <a
                          key={cat.id}
                          href={cat.href}
                          onMouseEnter={() => setSelectedSolution(cat.id)}
                          onMouseLeave={() => setSelectedSolution("")}
                          onClick={closeDropdown}
                          className={`relative flex items-center gap-4 px-5 py-3 rounded-xl transition-all overflow-hidden ${
                            isActive
                              ? "bg-primary/10"
                              : isHovered
                                ? "bg-white/5"
                                : ""
                          }`}
                        >
                          {isActive && (
                            <svg
                              className="absolute inset-0 w-full h-full pointer-events-none"
                              style={{ borderRadius: "0.5rem" }}
                            >
                              <rect
                                x="1"
                                y="1"
                                width="calc(100% - 2px)"
                                height="calc(100% - 2px)"
                                fill="none"
                                stroke="#ff9f1a"
                                strokeWidth="1"
                                strokeDasharray="200"
                                strokeDashoffset="0"
                                rx="8"
                                className="running-border-svg"
                                style={{
                                  filter: "drop-shadow(0 0 4px #ff9f1a)",
                                }}
                              />
                            </svg>
                          )}
                          <span
                            className={`material-symbols-outlined text-xl ${isHovered || isActive ? "text-primary" : "text-primary/60"}`}
                          >
                            {cat.icon}
                          </span>
                          <span
                            className={`text-sm font-medium transition-colors ${isHovered || isActive ? "text-primary" : "text-white/80"}`}
                          >
                            {cat.title}
                          </span>
                          {isHovered && !isActive && (
                            <span className="material-symbols-outlined text-base text-primary ml-auto">
                              chevron_right
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── INDUSTRIES DROPDOWN ── */}
        {/* {openDropdown === "platforms" && (
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
            <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-0" style={{ width: "850px", minHeight: "400px" }}> */}

        {/* Left — industry list with active highlight matching solutions pattern */}
        {/* <div className="p-8 border-r border-white/10">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-5">Industries</h3>
                  <div className="space-y-1">
                    {platforms.map((platform) => {
                      const isActive  = platform.href === activeIndustryHref;
const isHovered = hoveredIndustry === platform.id;  
return (
                        <a key={platform.id} href={platform.href}
                          onMouseEnter={() => setHoveredIndustry(platform.id)}
onMouseLeave={() => setHoveredIndustry(null)}
                          onClick={(e) => { e.preventDefault(); closeDropdown(); window.location.href = platform.href; }}
                          className={`relative flex items-center gap-3 p-3 rounded-lg transition-all overflow-hidden ${
                            isActive ? "bg-primary/10" : isHovered ? "bg-white/5" : ""
                          }`}> */}
        {/* Running border — same as solutions, only for active page */}
        {/* {isActive && (
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ borderRadius: "0.5rem" }}>
                              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)"
                                fill="none" stroke="#ff9f1a" strokeWidth="1"
                                strokeDasharray="200" strokeDashoffset="0" rx="8"
                                className="running-border-svg"
                                style={{ filter: "drop-shadow(0 0 4px #ff9f1a)" }} />
                            </svg>
                          )}
                          <span className={`material-symbols-outlined flex-shrink-0 transition-colors ${isActive || isHovered ? "text-primary" : "text-primary/60"}`}
                            style={{ fontSize: "22px" }}>{platform.icon}</span>
                          <span className={`font-medium text-sm transition-colors ${isActive || isHovered ? "text-primary" : "text-white/80"}`}>
                            {platform.name}
                          </span>
                          {isHovered && !isActive && (
                            <span className="material-symbols-outlined text-base text-primary ml-auto">chevron_right</span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div> */}

        {/* Right — technologies (unchanged) */}
        {/* <div className="p-8 bg-white/5">
                  <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-5">Technologies</h3>
                  <div className="space-y-1">
                    {[
                      { icon: "widgets",                  name: "Kubernetes", href: "tech/kubernetes" },
                      { icon: "construction",             name: "Terraform",  href: "tech/terraform"  },
                      { icon: "deployed_code",            name: "Docker",     href: "tech/docker"     },
                      { icon: "settings_suggest",         name: "Ansible",    href: "tech/ansible"    },
                      { icon: "integration_instructions", name: "Jenkins",    href: "tech/jenkins"    },
                    ].map((t, i) => (
                      <a key={i} href={t.href} onClick={closeDropdown}
                        className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group">
                        <span className="material-symbols-outlined text-lg">{t.icon}</span>
                        <span className="relative inline-block pb-1">{t.name}
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl" />
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a href="platforms/all" onClick={closeDropdown}
                      className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                      See All Industries <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )} */}

        {/* ── INDUSTRIES  ── */}
        {openDropdown === "platforms" && (
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
            <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div style={{ width: "460px", minHeight: "400px" }}>
                <div className="p-8">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-5">
                    Industries
                  </h3>
                  <div className="space-y-3">
                    {platforms.map((platform) => {
                      const isActive = platform.href === activeIndustryHref;
                      const isHovered = hoveredIndustry === platform.id;
                      return (
                        <a
                          key={platform.id}
                          href={platform.href}
                          onMouseEnter={() => setHoveredIndustry(platform.id)}
                          onMouseLeave={() => setHoveredIndustry(null)}
                          onClick={(e) => {
                            e.preventDefault();
                            closeDropdown();
                            window.location.href = platform.href;
                          }}
                          className={`relative flex items-center gap-4 px-5 py-3 rounded-xl transition-all overflow-hidden ${
                            isActive
                              ? "bg-primary/10"
                              : isHovered
                                ? "bg-white/5"
                                : ""
                          }`}
                        >
                          {isActive && (
                            <svg
                              className="absolute inset-0 w-full h-full pointer-events-none"
                              style={{ borderRadius: "0.5rem" }}
                            >
                              <rect
                                x="1"
                                y="1"
                                width="calc(100% - 2px)"
                                height="calc(100% - 2px)"
                                fill="none"
                                stroke="#ff9f1a"
                                strokeWidth="1"
                                strokeDasharray="200"
                                strokeDashoffset="0"
                                rx="8"
                                className="running-border-svg"
                                style={{
                                  filter: "drop-shadow(0 0 4px #ff9f1a)",
                                }}
                              />
                            </svg>
                          )}
                          <span
                            className={`material-symbols-outlined flex-shrink-0 transition-colors ${isActive || isHovered ? "text-primary" : "text-primary/60"}`}
                            style={{ fontSize: "22px" }}
                          >
                            {platform.icon}
                          </span>
                          <span
                            className={`font-medium text-sm transition-colors ${isActive || isHovered ? "text-primary" : "text-white/80"}`}
                          >
                            {platform.name}
                          </span>
                          {isHovered && !isActive && (
                            <span className="material-symbols-outlined text-base text-primary ml-auto">
                              chevron_right
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── RESOURCES ── */}
        {/* {openDropdown === "resources" && (
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
            <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-0" style={{ width: "850px", minHeight: "400px" }}>
                <div className="p-8 border-r border-white/10">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-5">Learning Center</h3>
                  <div className="space-y-2">
                    {resources.map((r) => (
                      <a key={r.id} href={r.href} onClick={closeDropdown}
                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors group">
                        <span className="material-symbols-outlined text-primary text-lg">{r.icon}</span>
                        <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                          <span className="relative inline-block pb-1">{r.name}
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl" />
                            </span>
                          </span>
                        </span>
                      </a>
                    ))}
                    <a href="resources/videos" onClick={closeDropdown}
                      className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors group">
                      <span className="material-symbols-outlined text-primary text-lg">play_circle</span>
                      <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                        <span className="relative inline-block pb-1">Video Tutorials
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl" />
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="p-8 bg-white/5">
                  <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-5">Support & Community</h3>
                  <div className="space-y-1">
                    {[
                      { icon: "menu_book",       name: "Documentation",   href: "support/documentation" },
                      { icon: "help",            name: "FAQ",             href: "support/faq"           },
                      { icon: "groups",          name: "Community Forum", href: "support/community"     },
                      { icon: "contact_support", name: "Contact Support", href: "support/contact"       },
                    ].map((item, i) => (
                      <a key={i} href={item.href} onClick={closeDropdown}
                        className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group">
                        <span className="material-symbols-outlined text-lg">{item.icon}</span>
                        <span className="relative inline-block pb-1">{item.name}
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl" />
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <p className="text-white font-semibold text-sm mb-1">Newsletter</p>
                      <p className="text-white/60 text-xs">Stay updated with our latest insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* ── RESOURCES ── */}
        {openDropdown === "resources" && (
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
            <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div style={{ width: "480px" }}>
                <div className="p-8">
                  <div className="space-y-1 mb-6">
                    {[
                      {
                        id: "blog",
                        name: "Blog",
                        icon: "article",
                        href: "resources/blog",
                      },
                      {
                        id: "whitepapers",
                        name: "Whitepapers & PDFs",
                        icon: "description",
                        href: "resources/whitepapers",
                      },
                      {
                        id: "case-studies",
                        name: "Case Studies",
                        icon: "cases",
                        href: "resources/case-studies",
                      },
                      {
                        id: "faq",
                        name: "FAQ",
                        icon: "help",
                        href: "support/faq",
                      },
                    ].map((r) => (
                      <a
                        key={r.id}
                        href={r.href}
                        onClick={closeDropdown}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <span className="material-symbols-outlined text-primary text-lg">
                          {r.icon}
                        </span>
                        <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                          <span className="relative inline-block pb-1">
                            {r.name}
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl" />
                            </span>
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Newsletter */}
                  <div className="pt-5 border-t border-white/10 max-w-sm mx-auto">
                    <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                      <p className="text-white font-semibold text-sm mb-3">
                        Newsletter
                      </p>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex gap-2">
                          <input
                            type="email"
                            value={newsletterEmail}
                            onChange={(e) => {
                              setNewsletterEmail(e.target.value);
                              setNewsletterError("");
                              setNewsletterSuccess(false);
                            }}
                            placeholder="Stay updated with our latest insights"
                            className="flex-1 bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-white/35 focus:outline-none focus:border-primary/60 transition-colors"
                          />
                          <button
                            onClick={handleNewsletterSubmit}
                            className="bg-primary text-background-dark text-xs font-bold px-3 py-2 rounded-lg hover:brightness-110 transition-all whitespace-nowrap"
                          >
                            Subscribe
                          </button>
                        </div>
                        {newsletterError && (
                          <p className="text-red-400 text-[10px]">
                            {newsletterError}
                          </p>
                        )}
                        {newsletterSuccess && (
                          <p className="text-green-400 text-[10px]">
                            ✓ Subscribed successfully!
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

    
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-background-dark border-l border-white/10 z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <nav className="space-y-2">
            {/* Home */}
            <a
              href="/"
              onClick={toggleMobileMenu}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                activePage === "home" &&
                !isOnSolutionsSection &&
                !isOnIndustriesSection &&
                !isOnEcosystem
                  ? "text-primary bg-primary/10"
                  : "text-white hover:bg-white/5"
              }`}
            >
              Home
            </a>

            {/* Solutions accordion */}
            <div>
              <button
                onClick={() => toggleMobileAccordion("solutions")}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                  mobileAccordion === "solutions" || isOnSolutionsSection
                    ? "text-primary bg-primary/10"
                    : "text-white hover:bg-white/5"
                }`}
              >
                <span>Solutions</span>
                <span
                  className={`material-symbols-outlined transition-transform ${mobileAccordion === "solutions" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              {mobileAccordion === "solutions" && (
                <div className="mt-2 space-y-1 pl-4">
                  {solutionCategories.map((cat) => {
                    const isActive = cat.id === activeSolutionId;
                    return (
                      <a
                        key={cat.id}
                        href={cat.href}
                        onClick={toggleMobileMenu}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary/15 text-primary border border-primary/30"
                            : "text-white/70 hover:bg-white/5"
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">
                          {cat.icon}
                        </span>
                        <span className="font-medium text-sm">{cat.title}</span>
                        {isActive && (
                          <span className="material-symbols-outlined text-sm ml-auto">
                            radio_button_checked
                          </span>
                        )}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

           
            <div>
              <button
                onClick={() => toggleMobileAccordion("platforms")}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                  mobileAccordion === "platforms" || isOnIndustriesSection
                    ? "text-primary bg-primary/10"
                    : "text-white hover:bg-white/5"
                }`}
              >
                <span>Industries</span>
                <span
                  className={`material-symbols-outlined transition-transform ${mobileAccordion === "platforms" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              {mobileAccordion === "platforms" && (
                <div className="mt-1 space-y-0.5 pl-2">
                  {platforms.map((p) => {
                    const isActive = p.href === activeIndustryHref;
                    return (
                      <a
                        key={p.id}
                        href={p.href}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileMenu();
                          window.location.href = p.href;
                        }}
                        className={`flex items-center gap-3 py-2.5 px-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary/15 text-primary border border-primary/30"
                            : "text-white/70 hover:text-primary hover:bg-white/5"
                        }`}
                      >
                        <span
                          className="material-symbols-outlined flex-shrink-0 text-primary/70"
                          style={{ fontSize: "20px" }}
                        >
                          {p.icon}
                        </span>
                        <span className="text-sm font-medium leading-tight">
                          {p.name}
                        </span>
                        {isActive && (
                          <span className="material-symbols-outlined text-sm ml-auto">
                            radio_button_checked
                          </span>
                        )}
                      </a>
                    );
                  })}
                  {/* <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1 px-3">Technologies</p>
                    {[
                      { icon: "widgets",                  name: "Kubernetes", href: "tech/kubernetes" },
                      { icon: "construction",             name: "Terraform",  href: "tech/terraform"  },
                      { icon: "deployed_code",            name: "Docker",     href: "tech/docker"     },
                      { icon: "settings_suggest",         name: "Ansible",    href: "tech/ansible"    },
                      { icon: "integration_instructions", name: "Jenkins",    href: "tech/jenkins"    },
                    ].map((t) => (
                      <a key={t.name} href={t.href} onClick={toggleMobileMenu}
                        className="flex items-center gap-3 text-white/70 hover:text-primary hover:bg-white/5 py-2.5 px-3 rounded-lg transition-colors">
                        <span className="material-symbols-outlined flex-shrink-0 text-primary/70" style={{ fontSize: "20px" }}>{t.icon}</span>
                        <span className="text-sm font-medium leading-tight">{t.name}</span>
                      </a>
                    ))}
                  </div> */}
                </div>
              )}
            </div>

          
            <a
              href="/ecosystem"
              onClick={toggleMobileMenu}
              className={`block py-3 px-4 rounded-lg transition-colors font-medium ${
                isOnEcosystem
                  ? "text-primary bg-primary/10"
                  : "text-white hover:bg-white/5"
              }`}
            >
              Ecosystem
            </a>

            {/* Resources accordion */}
            <div>
              <button
                onClick={() => toggleMobileAccordion("resources")}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                  mobileAccordion === "resources" || activePage === "resources"
                    ? "text-primary bg-primary/10"
                    : "text-white hover:bg-white/5"
                }`}
              >
                <span>Resources</span>
                <span
                  className={`material-symbols-outlined transition-transform ${mobileAccordion === "resources" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              {mobileAccordion === "resources" && (
                <div className="mt-2 space-y-1 pl-4">
                  {[
                    {
                      id: "blog",
                      name: "Blog",
                      icon: "article",
                      href: "resources/blog",
                    },
                    {
                      id: "whitepapers",
                      name: "Whitepapers & PDFs",
                      icon: "description",
                      href: "resources/whitepapers",
                    },
                    {
                      id: "case-studies",
                      name: "Case Studies",
                      icon: "cases",
                      href: "resources/case-studies",
                    },
                    {
                      id: "faq",
                      name: "FAQ",
                      icon: "help",
                      href: "support/faq",
                    },
                  ].map((r) => (
                    <a
                      key={r.id}
                      href={r.href}
                      onClick={toggleMobileMenu}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-white/70 hover:text-primary hover:bg-white/5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-primary/70 text-lg">
                        {r.icon}
                      </span>
                      <span className="text-sm font-medium">{r.name}</span>
                    </a>
                  ))}

                  {/* Newsletter */}
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                      <p className="text-white font-semibold text-sm mb-3">
                        Newsletter
                      </p>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex gap-2">
                          <input
                            type="email"
                            value={newsletterEmail}
                            onChange={(e) => {
                              setNewsletterEmail(e.target.value);
                              setNewsletterError("");
                              setNewsletterSuccess(false);
                            }}
                            placeholder="Stay updated with our latest insights"
                            className="flex-1 min-w-0 bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-white/35 focus:outline-none focus:border-primary/60 transition-colors"
                          />
                          <button
                            onClick={handleNewsletterSubmit}
                            className="bg-primary text-background-dark text-xs font-bold px-3 py-2 rounded-lg hover:brightness-110 transition-all whitespace-nowrap flex-shrink-0"
                          >
                            Subscribe
                          </button>
                        </div>
                        {newsletterError && (
                          <p className="text-red-400 text-[10px]">
                            {newsletterError}
                          </p>
                        )}
                        {newsletterSuccess && (
                          <p className="text-green-400 text-[10px]">
                            ✓ Subscribed successfully!
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}{" "}
            </div>
          </nav>

          <div className="flex items-center gap-2 mt-8">
            <a
              href="/get-audited"
              onClick={toggleMobileMenu}
              className="flex-1 flex items-center justify-center bg-primary text-background-dark px-6 py-3 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,159,26,0.2)]"
            >
              Get Audited
            </a>
            <a
              href="/contact-us"
              onClick={toggleMobileMenu}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/15 border border-primary/30 hover:bg-primary/25 hover:border-primary transition-all group"
              title="Contact Us"
            >
              <span
                className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform"
                style={{ fontSize: "20px" }}
              >
                phone_in_talk
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-rtl { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .animate-slide-rtl { animation: slide-rtl 1.5s linear infinite; }
        @keyframes dash-run { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -400; } }
        .running-border-svg { animation: dash-run 3s linear infinite; }
      `}</style>
    </>
  );
};

export default Navbar;
