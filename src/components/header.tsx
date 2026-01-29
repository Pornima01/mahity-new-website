import React, { useState } from "react";
import { Page, SolutionCategory } from "../types/index";
import logo from "../assets/images/mahitylogo.png";

interface NavbarProps {
  activePage: Page;
}

const solutionCategories: SolutionCategory[] = [
  {
    id: "1",
    title: "Cloud & Infrastructure ",
    description: "Reduce Analysis Paralysis and clearly categorize your expertise",
    href: "solutions/cloud-infrastructure",
    icon: "cloud",
  },
  {
    id: "2",
    title: "Security & Operations",
    description: "CONTENT (5 WORDS)",
    href: "solutions/security-operations",
    icon: "sync",
  },
  {
    id: "3",
    title: "Data & Innovation",
    description: "CONTENT (5 WORDS)",
    href: "solutions/data-innovation",
    icon: "database",
  },
  {
    id: "4",
    title: "Business Solutions",
    description: "CONTENT (5 WORDS)",
    href: "solutions/business-solutions",
    icon: "shield",
  },
];

const solutionContent = {
  "1": {
    services: [
      { title: "Migration & Modernization (Aws / Azure / Gcp)", href: "services/migration-modernization" },
      { title: "Multi-Cloud Management", href: "services/multi-cloud-mnagement" },
      {
        title: "Desktop Virtualization",
        href: "services/desktop-virtualization",
      },
      
    ],
    featured: {
      icon: "architecture",
      title: "Enterprise Cloud Design",
      description:
        "Build robust, scalable cloud infrastructure tailored to your business needs",
      link: "solutions/cloud-architecture/enterprise",
    },
  },
  "2": {
    services: [
      { title: "Security Audit", href: "services/security-audit" },
      { title: "SIEM ", href: "services/siem" },
      { title: "Dev Sec Ops ", href: "services/devsecops" },
      { title: "FinOps / Observability ", href: "services/finops-observability " },
      
    ],
    featured: {
      icon: "autorenew",
      title: "DevOps Transformation",
      description:
        "Accelerate delivery with automated workflows and modern DevOps practices",
      link: "solutions/devops/transformation",
    },
  },
  "3": {
    services: [
      { title: "Data Warehousing / Data Lake", href: "services/data-warehousing-lake" },
      { title: "AI Offerings", href: "services/ai-offerings " },
     
    ],
    featured: {
      icon: "insights",
      title: "Modern Data Platform",
      description:
        "Transform raw data into actionable insights with cutting-edge analytics",
      link: "solutions/data-engineering/platform",
    },
  },
  "4": {
    services: [
      { title: "Workspace / Email", href: "services/workspace-email" },
      { title: "Marketing Communication", href: "services/marketing-communication" },
      
    ],
    featured: {
      icon: "verified_user",
      title: "Security First Approach",
      description:
        "Protect your infrastructure with enterprise-grade security solutions",
      link: "solutions/security/enterprise",
    },
  },
};

const platforms = [
  { id: "aws", name: "Amazon Web Services", icon: "☁️", href: "platforms/aws" },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    icon: "🔷",
    href: "platforms/gcp",
  },
  { id: "azure", name: "Microsoft Azure", icon: "🔵", href: "platforms/azure" },
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
  const [selectedSolution, setSelectedSolution] = useState<string>("1");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const handleDropdownClick = (menu: string) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
      if (menu === "solutions") {
        setSelectedSolution("1");
      }
    }
  };

  const handleSolutionClick = (id: string) => {
    setSelectedSolution(id);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileAccordion(null);
  };

  const toggleMobileAccordion = (menu: string) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const currentContent =
    solutionContent[selectedSolution as keyof typeof solutionContent];

  return (
    <>
      {/* Desktop Dropdown Overlay - BELOW navbar */}
      {openDropdown && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 hidden lg:block"
          style={{ top: "80px" }}
          onClick={closeDropdown}
        />
      )}

      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <img
              src={logo}
              alt="Mahity Systems"
              className="h-12 sm:h-16 md:h-20 w-auto max-h-16 sm:max-h-24 transition-transform group-hover:scale-110 drop-shadow-lg"
            />
          </a>

          {/* Desktop Navigation - CLICK ONLY */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-12">
            {/* Home - Only yellow when on home page */}
            <a
              href="/"
              className={`text-sm font-medium transition-colors ${
                activePage === "home"
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Home
            </a>

            {/* Solutions - Yellow when dropdown open OR on solutions page */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("solutions")}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  openDropdown === "solutions" || activePage === "solutions"
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Solutions
                <span
                  className={`material-symbols-outlined text-base transition-transform ${openDropdown === "solutions" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
            </div>

            {/* Platforms - Yellow when dropdown open OR on platforms page */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("platforms")}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  openDropdown === "platforms" || activePage === "platforms"
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Platforms
                <span
                  className={`material-symbols-outlined text-base transition-transform ${openDropdown === "platforms" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
            </div>

            {/* Resources - Yellow when dropdown open OR on resources page */}
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
                  className={`material-symbols-outlined text-base transition-transform ${openDropdown === "resources" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <a
            href="/contact-us"
            className="hidden md:block bg-primary text-background-dark px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,159,26,0.2)] text-center"
          >
            Get Audited
          </a>

          {/* Mobile Menu Button */}
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

        {/* SOLUTIONS DROPDOWN - WIDER AND CLOSER */}
        {openDropdown === "solutions" && (
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
            <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div
                className="grid grid-cols-12 gap-0"
                style={{ width: "1200px", minHeight: "500px" }}
              >
                {/* Left Column - Solution Categories with ARROW */}
                <div className="col-span-4 bg-white/5 p-8 border-r border-white/10">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-5">
                    Our Solutions
                  </h3>
                  <div className="space-y-2">
                    {solutionCategories.map((cat) => (
                      <div
                        key={cat.id}
                        onClick={() => handleSolutionClick(cat.id)}
                        className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all relative ${
                          selectedSolution === cat.id
                            ? "bg-primary/10 border border-primary/30"
                            : "hover:bg-white/10"
                        }`}
                      >
                        {/* Smooth running border line SVG */}
                        {selectedSolution === cat.id && (
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
                              style={{ filter: "drop-shadow(0 0 4px #ff9f1a)" }}
                            />
                          </svg>
                        )}

                        {/* ARROW INDICATOR */}
                        {selectedSolution === cat.id && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary z-10">
                            <span className="material-symbols-outlined text-2xl animate-pulse">
                              arrow_forward
                            </span>
                          </div>
                        )}

                        <span
                          className={`material-symbols-outlined mt-0.5 text-xl ${
                            selectedSolution === cat.id
                              ? "text-primary"
                              : "text-primary/70"
                          }`}
                        >
                          {cat.icon}
                        </span>
                        <div className="flex-1 pr-8">
                          <p
                            className={`font-semibold text-sm transition-colors ${
                              selectedSolution === cat.id
                                ? "text-primary"
                                : "text-white"
                            }`}
                          >
                            {cat.title}
                          </p>
                          <p className="text-white/50 text-xs mt-0.5">
                            {cat.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* VIEW ALL SOLUTIONS BUTTON */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <a
                      href="solutions"
                      className="flex items-center justify-between px-4 py-3 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors group"
                      onClick={closeDropdown}
                    >
                      <span className="text-primary font-semibold text-sm">
                        View All Solutions
                      </span>
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                        double_arrow
                      </span>
                    </a>
                  </div>
                </div>

                {/* Middle Column - Dynamic Services with BIDIRECTIONAL UNDERLINE */}
                <div className="col-span-4 p-8 border-r border-white/10">
                  <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-5">
                    Services & Capabilities
                  </h3>
                  <div className="space-y-1">
                    {currentContent.services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block text-white hover:text-primary transition-colors py-2.5 text-sm font-medium group"
                        onClick={closeDropdown}
                      >
                        <span className="relative inline-block pb-2">
                          {service.title}

                          <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-ltr"></span>
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Column - Featured Content */}
                <div className="col-span-4 p-8 bg-gradient-to-br from-primary/10 to-transparent">
                  <div className="bg-white/5 rounded-lg p-5 border border-white/10 h-full flex flex-col">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                      Featured
                    </span>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-primary text-3xl">
                          {currentContent.featured.icon}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-3">
                        {currentContent.featured.title}
                      </h4>
                      <p className="text-white/60 text-sm mb-5">
                        {currentContent.featured.description}
                      </p>
                      <div className="inline-block">
                        <a
                          href={currentContent.featured.link}
                          className="text-primary text-sm font-semibold inline-flex items-center gap-1 transition-transform hover:scale-110"
                          onClick={closeDropdown}
                        >
                          Learn more
                          <span className="material-symbols-outlined text-sm mt-1">
                            arrow_forward
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PLATFORMS DROPDOWN - WIDER AND CLOSER */}
        {openDropdown === "platforms" && (
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
            <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div
                className="grid grid-cols-2 gap-0"
                style={{ width: "950px", minHeight: "450px" }}
              >
                <div className="p-8 border-r border-white/10">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-5">
                    Cloud Platforms
                  </h3>
                  <div className="space-y-2">
                    {platforms.map((platform) => (
                      <a
                        key={platform.id}
                        href={platform.href}
                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                        onClick={closeDropdown}
                      >
                        <span className="text-2xl">{platform.icon}</span>
                        <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                          <span className="relative inline-block pb-1">
                            {platform.name}
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                            </span>
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-4">
                      Additional Platforms
                    </h4>
                    <a
                      href="platforms/oracle"
                      className="block text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="relative inline-block pb-1">
                        Oracle Cloud
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="platforms/ibm"
                      className="block text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="relative inline-block pb-1">
                        IBM Cloud
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="platforms/alibaba"
                      className="block text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="relative inline-block pb-1">
                        Alibaba Cloud
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="p-8 bg-white/5">
                  <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-5">
                    Technologies
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tech/kubernetes"
                      className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-lg">
                        widgets
                      </span>
                      <span className="relative inline-block pb-1">
                        Kubernetes
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="tech/terraform"
                      className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-lg">
                        construction
                      </span>
                      <span className="relative inline-block pb-1">
                        Terraform
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="tech/docker"
                      className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-lg">
                        deployed_code
                      </span>
                      <span className="relative inline-block pb-1">
                        Docker
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="tech/ansible"
                      className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-lg">
                        settings_suggest
                      </span>
                      <span className="relative inline-block pb-1">
                        Ansible
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="tech/jenkins"
                      className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-lg">
                        integration_instructions
                      </span>
                      <span className="relative inline-block pb-1">
                        Jenkins
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                  </div>

                  <div className="mt-8">
                    <a
                      href="platforms/all"
                      className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1"
                      onClick={closeDropdown}
                    >
                      See All Platforms
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RESOURCES DROPDOWN - WIDER AND CLOSER */}
        {openDropdown === "resources" && (
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
            <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div
                className="grid grid-cols-2 gap-0"
                style={{ width: "850px", minHeight: "400px" }}
              >
                <div className="p-8 border-r border-white/10">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-5">
                    Learning Center
                  </h3>
                  <div className="space-y-2">
                    {resources.map((resource) => (
                      <a
                        key={resource.id}
                        href={resource.href}
                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                        onClick={closeDropdown}
                      >
                        <span className="material-symbols-outlined text-primary text-lg">
                          {resource.icon}
                        </span>
                        <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                          <span className="relative inline-block pb-1">
                            {resource.name}
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                            </span>
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-5">
                    <a
                      href="resources/videos"
                      className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        play_circle
                      </span>
                      <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                        <span className="relative inline-block pb-1">
                          Video Tutorials
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="p-8 bg-white/5">
                  <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-5">
                    Support & Community
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="support/documentation"
                      className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-lg">
                        menu_book
                      </span>
                      <span className="relative inline-block pb-1">
                        Documentation
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="support/faq"
                      className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-lg">
                        help
                      </span>
                      <span className="relative inline-block pb-1">
                        FAQ
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="support/community"
                      className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-lg">
                        groups
                      </span>
                      <span className="relative inline-block pb-1">
                        Community Forum
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="support/contact"
                      className="flex items-center gap-3 text-white hover:text-primary transition-colors py-2.5 text-sm group"
                      onClick={closeDropdown}
                    >
                      <span className="material-symbols-outlined text-lg">
                        contact_support
                      </span>
                      <span className="relative inline-block pb-1">
                        Contact Support
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-rtl"></span>
                        </span>
                      </span>
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <p className="text-white font-semibold text-sm mb-1">
                        Newsletter
                      </p>
                      <p className="text-white/60 text-xs">
                        Stay updated with our latest insights
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-background-dark border-l border-white/10 z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {/* Home */}
            <a
              href="/"
              className={`block py-3 px-4 rounded-lg transition-colors ${
                activePage === "home"
                  ? "text-primary bg-primary/10"
                  : "text-white hover:bg-white/5"
              }`}
              onClick={toggleMobileMenu}
            >
              Home
            </a>

            {/* Service Solutions Accordion */}
            <div>
              <button
                onClick={() => toggleMobileAccordion("solutions")}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                  mobileAccordion === "solutions" || activePage === "solutions"
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
                <div className="mt-2 space-y-2 pl-4">
                  {solutionCategories.map((cat) => (
                    <div key={cat.id}>
                      <button
                        onClick={() => handleSolutionClick(cat.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedSolution === cat.id
                            ? "bg-primary/10 text-primary"
                            : "text-white/70 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-lg">
                            {cat.icon}
                          </span>
                          <div>
                            <p className="font-medium text-sm">{cat.title}</p>
                            <p className="text-xs opacity-70">
                              {cat.description}
                            </p>
                          </div>
                        </div>
                      </button>

                      {selectedSolution === cat.id && (
                        <div className="mt-2 ml-4 space-y-1 border-l-2 border-primary/30 pl-3">
                          {currentContent.services.map((service, index) => (
                            <a
                              key={index}
                              href={service.href}
                              className="block text-white/70 hover:text-primary py-2 text-sm transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              {service.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <a
                    href="solutions"
                    className="flex items-center justify-between px-4 py-3 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors group text-primary font-semibold text-sm"
                    onClick={toggleMobileMenu}
                  >
                    <span>View All Solutions</span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      double_arrow
                    </span>
                  </a>
                </div>
              )}
            </div>

            {/* Platforms Accordion */}
            <div>
              <button
                onClick={() => toggleMobileAccordion("platforms")}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                  mobileAccordion === "platforms" || activePage === "platforms"
                    ? "text-primary bg-primary/10"
                    : "text-white hover:bg-white/5"
                }`}
              >
                <span>Platforms</span>
                <span
                  className={`material-symbols-outlined transition-transform ${mobileAccordion === "platforms" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>

              {mobileAccordion === "platforms" && (
                <div className="mt-2 space-y-1 pl-4">
                  <div className="mb-3">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2 px-3">
                      Cloud Platforms
                    </p>
                    {platforms.map((platform) => (
                      <a
                        key={platform.id}
                        href={platform.href}
                        className="flex items-center gap-3 text-white/70 hover:text-primary py-2 px-3 transition-colors"
                        onClick={toggleMobileMenu}
                      >
                        <span className="text-xl">{platform.icon}</span>
                        <span className="text-sm">{platform.name}</span>
                      </a>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2 px-3">
                      Technologies
                    </p>
                    <a
                      href="tech/kubernetes"
                      className="block text-white/70 hover:text-primary py-2 px-3 text-sm"
                      onClick={toggleMobileMenu}
                    >
                      Kubernetes
                    </a>
                    <a
                      href="tech/terraform"
                      className="block text-white/70 hover:text-primary py-2 px-3 text-sm"
                      onClick={toggleMobileMenu}
                    >
                      Terraform
                    </a>
                    <a
                      href="tech/docker"
                      className="block text-white/70 hover:text-primary py-2 px-3 text-sm"
                      onClick={toggleMobileMenu}
                    >
                      Docker
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Accordion */}
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
                  {resources.map((resource) => (
                    <a
                      key={resource.id}
                      href={resource.href}
                      className="flex items-center gap-3 text-white/70 hover:text-primary py-2 px-3 transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      <span className="material-symbols-outlined text-lg">
                        {resource.icon}
                      </span>
                      <span className="text-sm">{resource.name}</span>
                    </a>
                  ))}
                  <a
                    href="support/documentation"
                    className="block text-white/70 hover:text-primary py-2 px-3 text-sm"
                    onClick={toggleMobileMenu}
                  >
                    Documentation
                  </a>
                  <a
                    href="support/faq"
                    className="block text-white/70 hover:text-primary py-2 px-3 text-sm"
                    onClick={toggleMobileMenu}
                  >
                    FAQ
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile CTA Button */}
          <a
            href="/contact-us"
            onClick={toggleMobileMenu}
            className="block w-full mt-8 bg-primary text-background-dark px-6 py-3 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,159,26,0.2)] text-center"
          >
            Get Audited
          </a>
        </div>
      </div>

      {/* CSS Animation for continuous running underline */}
      <style>{`
  @keyframes slide-ltr {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .animate-slide-ltr {
    animation: slide-ltr 1.5s linear infinite;
  }

  /* Smooth continuous running border */
  @keyframes dash-run {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -400;
    }
  }

  .running-border-svg {
    animation: dash-run 3s linear infinite;
  }
`}</style>
    </>
  );
};

export default Navbar;
