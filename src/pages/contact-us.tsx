import React, { useState, useEffect } from "react";
import heroBackgroundImage from "../assets/images/contact-us-hero-bg.png";

    

    // Copy Icon Component
    const CopyIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
    );

    // Check Icon Component
    const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
    </svg>
    );

    // Shared Location Section Component
    const LocationSection = () => {
    const [openSection, setOpenSection] = useState<string>("");

    return (
        <div className="bg-[#050505] px-4 md:px-6 lg:px-12 py-8 md:py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
            {/* Updated Layout: Heading on Left, Accordion on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Left Side - Heading */}
            <div className="lg:col-span-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Locations
                </h2>
            </div>

            {/* Right Side - Accordion */}
            <div className="lg:col-span-2">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
                {/* Global Headquarters */}
                <div className="border-b border-gray-700 last:border-b-0">
                    <button
                    onClick={() => setOpenSection(openSection === "headquarters" ? "" : "headquarters")}
                    className="w-full px-4 md:px-6 py-4 flex items-center justify-between hover:bg-gray-800 transition-colors"
                    >
                    <span className="text-lg md:text-xl font-semibold text-white">Headquarters</span>
                    <svg
                        className={`w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-transform ${openSection === "headquarters" ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    </button>
                    {openSection === "headquarters" && (
                    <div className="px-4 md:px-6 py-4 md:py-6 bg-gray-900/50">
                        <div className="mb-4 md:mb-6">
                        <p className="text-white font-bold mb-2">Mahity Systems</p>
                        <p className="text-sm md:text-base text-gray-400 mb-1">G-Square Business Park, 1102</p>
                        <p className="text-sm md:text-base text-gray-400 mb-1">Opp. Sanpada Railway Station Road, Sector 30A</p>
                        <p className="text-sm md:text-base text-gray-400 mb-1">Vashi, Navi Mumbai</p>
                        <p className="text-sm md:text-base text-gray-400 mb-1">Maharashtra 400703</p>
                        <p className="text-sm md:text-base text-gray-400">India</p>
                        </div>
                        
                        <div>
                        <p className="text-white font-bold mb-2">Mailing Address</p>
                        <p className="text-sm md:text-base text-gray-400 mb-1">MAHITY SYSTEMS LLC</p>
                        <p className="text-sm md:text-base text-gray-400 mb-1">SPENCER SCHNEIER SOLE MBR</p>
                        <p className="text-sm md:text-base text-gray-400 mb-1">30 N GOULD ST STE R</p>
                        <p className="text-sm md:text-base text-gray-400 mb-1">Sheridan, WY 82801</p>
                        <p className="text-sm md:text-base text-gray-400">United States</p>
                        </div>
                    </div>
                    )}
                </div>
                </div>
            </div>
            </div>

            {/* Fraud Warning */}
            <div className="mt-8 md:mt-14 border border-[#ff9f1a] p-3 md:p-4 rounded-lg bg-gray-800/50">
            <p className="text-xs md:text-sm lg:text-base text-gray-300">
                <span className="font-semibold text-white">Note*</span>
                <br />
                Mahity does not charge any fees for job applications or
                processing. Please be cautious of fraudsters and do not fall for
                any scams. If you encounter suspicious activity, report it to us
                immediately via mail –{" "}
                <a
                href="mailto:careers@mahity.com"
                className="text-[#ff9f1a] hover:underline"
                >
                careers@mahity.com
                </a>
            </p>
            </div>
        </div>
        </div>
    );
    };

    function ContactUs() {
    const [activeTab, setActiveTab] = useState<"sales" | "support" | "careers">("sales");
    const [isVisible, setIsVisible] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    // Sales Form State
    const [salesFormData, setSalesFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        reason: "",
        description: "",
    });
    const [salesErrors, setSalesErrors] = useState<{ [key: string]: string }>({});
    const [isSalesSubmitting, setIsSalesSubmitting] = useState(false);
    const [isSalesSubmitted, setIsSalesSubmitted] = useState(false);
    const [salesSubmitStatus, setSalesSubmitStatus] = useState<{
        success?: boolean;
        message?: string;
    }>({});

    // Careers Form State
    const [careersFormData, setCareersFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        position: "",
        employmentStatus: "",
        resume: null as File | null,
    });
    const [careersErrors, setCareersErrors] = useState<Record<string, string>>({});
    const [isCareersSubmitting, setIsCareersSubmitting] = useState(false);
    const [isCareersSubmitted, setIsCareersSubmitted] = useState(false);
    const [careersSubmitStatus, setCareersSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const countriesAndCities: Record<string, string[]> = {
        India: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"],
        "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"],
        "United Kingdom": ["London", "Birmingham", "Manchester", "Liverpool", "Leeds", "Sheffield", "Bristol", "Newcastle", "Leicester", "Nottingham"],
        Canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton", "Winnipeg", "Quebec City", "Hamilton", "Kitchener"],
        Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Wollongong", "Logan City"],
        Germany: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
        Singapore: ["Singapore"],
        UAE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
    };

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    // Copy to clipboard function
    const copyToClipboard = (text: string, type: "email" | "phone") => {
        navigator.clipboard.writeText(text);
        if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
        } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    // Sales Form Handlers
    const handleSalesChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setSalesFormData((prev) => ({ ...prev, [name]: value }));
        if (salesErrors[name]) {
        setSalesErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
        }
    };

    const validateSalesForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!salesFormData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!salesFormData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!salesFormData.email.trim()) {
        newErrors.email = "Email is required";
        } else {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(salesFormData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        }
        if (salesFormData.contactNumber.trim()) {
        const digitsOnly = salesFormData.contactNumber.replace(/\D/g, "");
        if (digitsOnly.length < 10) {
            newErrors.contactNumber = "Phone number must have at least 10 digits";
        } else if (digitsOnly.length > 15) {
            newErrors.contactNumber = "Phone number is too long";
        }
        }
        if (!salesFormData.reason) newErrors.reason = "Please select a reason";
        if (!salesFormData.description.trim()) newErrors.description = "Description is required";
        setSalesErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSalesSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateSalesForm()) return;

        setIsSalesSubmitting(true);
        setSalesSubmitStatus({});

        try {
        const submitData = {
            firstName: salesFormData.firstName.trim(),
            lastName: salesFormData.lastName.trim(),
            email: salesFormData.email.trim(),
            contactNumber: salesFormData.contactNumber.trim() || "Not Provided",
            reason: salesFormData.reason,
            description: salesFormData.description.trim(),
        };

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submitData),
            cache: "no-store",
        });

        const result = await response.json();

        if (response.ok && result.success) {
            setSalesFormData({
            firstName: "",
            lastName: "",
            email: "",
            contactNumber: "",
            reason: "",
            description: "",
            });
            setIsSalesSubmitted(true);
        } else {
            throw new Error(result.message || "Something went wrong");
        }
        } catch (error: unknown) {
        console.error("Form Submission Error:", error);
        setSalesSubmitStatus({
            success: false,
            message: error instanceof Error ? error.message : "There was an error submitting the form. Please try again.",
        });
        } finally {
        setIsSalesSubmitting(false);
        }
    };

    // Careers Form Handlers
    const handleCareersInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setCareersFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === "country" ? { city: "" } : {}),
        }));
        if (careersErrors[name]) {
        setCareersErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        if (!allowedTypes.includes(file.type)) {
            setCareersErrors((prev) => ({
            ...prev,
            resume: "Please upload a PDF or Word document",
            }));
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setCareersErrors((prev) => ({
            ...prev,
            resume: "File size should not exceed 5MB",
            }));
            return;
        }
        setCareersFormData((prev) => ({ ...prev, resume: file }));
        setCareersErrors((prev) => ({ ...prev, resume: "" }));
        }
    };

    const validateCareersForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!careersFormData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!careersFormData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!careersFormData.email.trim()) {
        newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(careersFormData.email)) {
        newErrors.email = "Please enter a valid email";
        }
        if (!careersFormData.phone.trim()) {
        newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s-()]{10,}$/.test(careersFormData.phone)) {
        newErrors.phone = "Please enter a valid phone number";
        }
        if (!careersFormData.country) newErrors.country = "Please select a country";
        if (!careersFormData.city) newErrors.city = "Please select a city";
        if (!careersFormData.position.trim()) newErrors.position = "Please enter the position you're applying for";
        if (!careersFormData.employmentStatus) newErrors.employmentStatus = "Please select your employment status";
        if (!careersFormData.resume) newErrors.resume = "Please upload your resume";
        setCareersErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCareersSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateCareersForm()) {
        setCareersSubmitStatus({
            type: "error",
            message: "Please fill in all required fields correctly",
        });
        return;
        }

        setIsCareersSubmitting(true);
        setCareersSubmitStatus({ type: null, message: "" });

        try {
        const formDataToSend = new FormData();
        formDataToSend.append("firstName", careersFormData.firstName);
        formDataToSend.append("lastName", careersFormData.lastName);
        formDataToSend.append("email", careersFormData.email);
        formDataToSend.append("phone", careersFormData.phone);
        formDataToSend.append("country", careersFormData.country);
        formDataToSend.append("city", careersFormData.city);
        formDataToSend.append("position", careersFormData.position);
        formDataToSend.append("employmentStatus", careersFormData.employmentStatus);
        if (careersFormData.resume) {
            formDataToSend.append("resume", careersFormData.resume);
        }

        const response = await fetch("/api/career-application", {
            method: "POST",
            body: formDataToSend,
        });

        const result = await response.json();

        if (response.ok && result.success) {
            setCareersFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            position: "",
            employmentStatus: "",
            resume: null,
            });
            const fileInput = document.getElementById("resume") as HTMLInputElement;
            if (fileInput) fileInput.value = "";
            setIsCareersSubmitted(true);
        } else {
            throw new Error(result.message || "Failed to submit application");
        }
        } catch (error) {
        console.error("Form submission error:", error);
        setCareersSubmitStatus({
            type: "error",
            message: error instanceof Error ? error.message : "Failed to submit application. Please try again.",
        });
        } finally {
        setIsCareersSubmitting(false);
        }
    };

    return (
        <div className="bg-[#050505] min-h-screen">
        <style>{`
            @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
            }
            @keyframes bounceIn {
            0% { opacity: 0; transform: scale(0.3); }
            50% { opacity: 1; transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); }
            }
            @keyframes checkmark {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
            }
            .animate-fadeInDown { animation: fadeInDown 0.8s ease-out forwards; }
            .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
            .animate-bounceIn { animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
        `}</style>

        {/* Hero Section with Background Image */}
        <div 
            className="py-16 md:py-20 lg:py-24 px-4 border-b border-gray-800 relative overflow-hidden"
           style={{
  backgroundImage: `url(${heroBackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gray-900/80"></div>
            
            <div className="max-w-7xl mx-auto text-center relative z-10 pt-4 md:pt-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
                Mahity Technology Sales and Support
            </p>
            </div>
        </div>

        {/* Updated Tabs Section with Pointer - Mobile Responsive */}
        <div className="border-b border-gray-800 sticky top-0 z-40 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-48">
                <button
                onClick={() => setActiveTab("sales")}
                className="relative px-4 sm:px-8 md:px-12 lg:px-14 py-4 md:py-6 text-base md:text-lg font-semibold transition-all group"
                >
                <span className={activeTab === "sales" ? "text-[#ff9f1a]" : "text-gray-400 group-hover:text-white"}>
                    Sales
                </span>
                {activeTab === "sales" && (
                    <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff9f1a]"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] md:border-l-8 md:border-r-8 md:border-t-8 border-l-transparent border-r-transparent border-t-[#ff9f1a]"></div>
                    </>
                )}
                </button>
                
                <button
                onClick={() => setActiveTab("support")}
                className="relative px-4 sm:px-8 md:px-12 lg:px-14 py-4 md:py-6 text-base md:text-lg font-semibold transition-all group"
                >
                <span className={activeTab === "support" ? "text-[#ff9f1a]" : "text-gray-400 group-hover:text-white"}>
                    Support
                </span>
                {activeTab === "support" && (
                    <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff9f1a]"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] md:border-l-8 md:border-r-8 md:border-t-8 border-l-transparent border-r-transparent border-t-[#ff9f1a]"></div>
                    </>
                )}
                </button>
                
                <button
                onClick={() => setActiveTab("careers")}
                className="relative px-4 sm:px-8 md:px-12 lg:px-14 py-4 md:py-6 text-base md:text-lg font-semibold transition-all group"
                >
                <span className={activeTab === "careers" ? "text-[#ff9f1a]" : "text-gray-400 group-hover:text-white"}>
                    Careers
                </span>
                {activeTab === "careers" && (
                    <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff9f1a]"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] md:border-l-8 md:border-r-8 md:border-t-8 border-l-transparent border-r-transparent border-t-[#ff9f1a]"></div>
                    </>
                )}
                </button>
            </div>
            </div>
        </div>

        {/* Tab Content */}
        <div>
            {/* SALES TAB */}
            {activeTab === "sales" && (
            <div>
                {/* Contact Form Section */}
                <div className="px-4 md:px-6 lg:px-12 py-8 md:py-12 bg-[#050505]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Left Side - Contact Info */}
                    <div className="lg:col-span-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                        Contact sales
                    </h2>
                    
                    <p className="text-gray-400 mb-6 md:mb-8 pt-2 text-sm md:text-base leading-relaxed">
                        Our sales team is here to help you find the right solutions — so you can grow your business, increase efficiency and deliver the future. Fill out this form or call us at:
                    </p>

                    <div className="space-y-4 md:space-y-6">
                        <div>
                        <p className="text-white font-bold mb-2 text-sm md:text-base">Contact:</p>
                        <a href="tel:+918291624489" className="text-[#ff9f1a] text-base md:text-lg hover:text-[#ffb84d] transition-colors break-all">
                            +91 8291624489
                        </a>
                        </div>

                        <div>
                        <p className="text-white font-bold mb-2 text-sm md:text-base">Email:</p>
                        <a href="mailto:ask@mahity.com" className="text-[#ff9f1a] text-base md:text-lg hover:text-[#ffb84d] transition-colors break-all">
                            ask@mahity.com
                        </a>
                        </div>
                    </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:col-span-2" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 1s ease-out' }}>
                    <div className="space-y-4 shadow-2xl px-4 sm:px-6 md:px-8 py-6 md:py-10 border border-gray-700 rounded-lg bg-gray-800/50 hover:border-[#ff9f1a] transition-all duration-500">
                        {isSalesSubmitted ? (
                        <div className="text-center py-8 md:py-12 animate-bounceIn">
                            <div className="flex justify-center mb-4 md:mb-6">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ strokeDasharray: 100, strokeDashoffset: 0, animation: 'checkmark 0.5s ease-out 0.3s backwards' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            </div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Thank You!</h3>
                            <p className="text-base md:text-lg text-gray-400 mb-2 px-4">We have received your message successfully!</p>
                            <p className="text-base md:text-lg text-[#ff9f1a] font-medium mb-6 md:mb-8 px-4">Our team will get in touch with you shortly.</p>
                            <button onClick={() => setIsSalesSubmitted(false)} className="px-8 md:px-10 py-3 md:py-4 bg-[#ff9f1a] text-gray-900 font-bold rounded-xl hover:bg-[#ffb84d] active:scale-95 transition-all shadow-lg text-sm md:text-base">
                            Back to Contact Form
                            </button>
                        </div>
                        ) : (
                        <form onSubmit={handleSalesSubmit} className="space-y-4">
                            {salesSubmitStatus.message && !salesSubmitStatus.success && (
                            <div className="p-3 rounded-lg bg-red-900/50 text-red-300 border border-red-700 animate-fadeInUp text-sm">{salesSubmitStatus.message}</div>
                            )}

                            <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 group">
                                <label className="block text-sm md:text-base text-gray-400 mb-1 font-medium">First Name *</label>
                                <input type="text" name="firstName" value={salesFormData.firstName} onChange={handleSalesChange} className={`bg-gray-700/50 text-white w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 ${salesErrors.firstName ? "border-red-500" : "border-gray-600"} focus:border-[#ff9f1a] focus:ring-4 focus:ring-[#ff9f1a]/20 transition-all duration-300 hover:bg-gray-700 outline-none text-sm md:text-base`} />
                                {salesErrors.firstName && <p className="text-red-400 text-xs md:text-sm mt-1 animate-fadeInUp">{salesErrors.firstName}</p>}
                            </div>
                            <div className="flex-1 group">
                                <label className="block text-sm md:text-base text-gray-400 mb-1 font-medium">Last Name *</label>
                                <input type="text" name="lastName" value={salesFormData.lastName} onChange={handleSalesChange} className={`bg-gray-700/50 text-white w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 ${salesErrors.lastName ? "border-red-500" : "border-gray-600"} focus:border-[#ff9f1a] focus:ring-4 focus:ring-[#ff9f1a]/20 transition-all duration-300 hover:bg-gray-700 outline-none text-sm md:text-base`} />
                                {salesErrors.lastName && <p className="text-red-400 text-xs md:text-sm mt-1 animate-fadeInUp">{salesErrors.lastName}</p>}
                            </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 group">
                                <label className="block text-sm md:text-base text-gray-400 mb-1 font-medium">Email Address *</label>
                                <input type="email" name="email" value={salesFormData.email} onChange={handleSalesChange} className={`bg-gray-700/50 text-white w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 ${salesErrors.email ? "border-red-500" : "border-gray-600"} focus:border-[#ff9f1a] focus:ring-4 focus:ring-[#ff9f1a]/20 transition-all duration-300 hover:bg-gray-700 outline-none text-sm md:text-base`} />
                                {salesErrors.email && <p className="text-red-400 text-xs md:text-sm mt-1 animate-fadeInUp">{salesErrors.email}</p>}
                                {!salesErrors.email && salesFormData.email && <p className="text-green-500 text-xs mt-1">✓ Email format looks good</p>}
                            </div>
                            <div className="flex-1 group">
                                <label className="block text-sm md:text-base text-gray-400 mb-1 font-medium">Phone Number</label>
                                <input type="tel" name="contactNumber" value={salesFormData.contactNumber} onChange={handleSalesChange} className={`bg-gray-700/50 text-white w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 ${salesErrors.contactNumber ? "border-red-500" : "border-gray-600"} focus:border-[#ff9f1a] focus:ring-4 focus:ring-[#ff9f1a]/20 transition-all duration-300 hover:bg-gray-700 outline-none text-sm md:text-base`} />
                                {salesErrors.contactNumber && <p className="text-red-400 text-xs md:text-sm mt-1 animate-fadeInUp">{salesErrors.contactNumber}</p>}
                            </div>
                            </div>

                            <div className="group">
                            <label className="block text-sm md:text-base text-gray-400 mb-2 font-medium">What are you interested in? *</label>
                            <select name="reason" value={salesFormData.reason} onChange={handleSalesChange} className={`bg-gray-700/50 text-white w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 ${salesErrors.reason ? "border-red-500" : "border-gray-600"} focus:border-[#ff9f1a] focus:ring-4 focus:ring-[#ff9f1a]/20 transition-all duration-300 hover:bg-gray-700 outline-none text-sm md:text-base`}>
                                <option value="" hidden>Select an option</option>
                                <option value="Cloud Migration">Cloud Migration</option>
                                <option value="AI & ML">AI & Machine Learning</option>
                                <option value="Data Analytics">Data Analytics</option>
                                <option value="App Modernization">Application Modernization</option>
                                <option value="Security">Security & Compliance</option>
                                <option value="Other">Other</option>
                            </select>
                            {salesErrors.reason && <p className="text-red-400 text-xs md:text-sm mt-1 animate-fadeInUp">{salesErrors.reason}</p>}
                            </div>

                            <div className="group">
                            <label className="block text-sm md:text-base text-gray-400 mb-2 font-medium">Message *</label>
                            <textarea name="description" placeholder="Tell us about your project requirements, timeline, and any specific questions you have..." value={salesFormData.description} onChange={handleSalesChange} className={`bg-gray-700/50 text-white w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 ${salesErrors.description ? "border-red-500" : "border-gray-600"} focus:border-[#ff9f1a] focus:ring-4 focus:ring-[#ff9f1a]/20 h-28 md:h-32 transition-all duration-300 hover:bg-gray-700 outline-none resize-none placeholder-gray-500 text-sm md:text-base`}></textarea>
                            {salesErrors.description && <p className="text-red-400 text-xs md:text-sm mt-1 animate-fadeInUp">{salesErrors.description}</p>}
                            </div>

                            <div className="flex justify-center pt-2">
                            <button type="submit" disabled={isSalesSubmitting} className="w-full px-6 md:px-8 py-3 md:py-4 bg-[#ff9f1a] text-gray-900 font-bold rounded-lg hover:bg-[#ffb84d] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg shadow-[#ff9f1a]/20 text-sm md:text-base">
                                {isSalesSubmitting ? (
                                <span className="flex items-center justify-center gap-3">
                                    <span className="inline-block w-4 h-4 md:w-5 md:h-5 border-3 border-gray-900 border-t-transparent rounded-full animate-spin"></span>
                                    Sending...
                                </span>
                                ) : "Send Message"}
                            </button>
                            </div>
                        </form>
                        )}
                    </div>
                    </div>
                </div>
                </div>

                {/* Location Section */}
                <LocationSection />
            </div>
            )}

            {/* SUPPORT TAB */}
            {activeTab === "support" && (
            <div>
                <div className="py-12 md:py-16 px-4 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Mahity Technology Support</h2>
                    <p className="text-lg md:text-xl pt-2 md:pt-4 text-gray-400 px-4">Get help from our expert support team</p>
                    </div>

                    {/* Support Contact Cards - Mobile Responsive */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
                    {/* Email Support */}
                    <div className="bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#ff9f1a] transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">Email Support</h3>
                        <button onClick={() => copyToClipboard("support@mahity.com", "email")} className="p-2 hover:bg-gray-700 rounded transition-colors flex-shrink-0" title="Copy email">
                            {copiedEmail ? <CheckIcon className="w-5 h-5 md:w-6 md:h-6 text-green-500" /> : <CopyIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />}
                        </button>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">Get help via email</p>
                        <a href="mailto:support@mahity.com" className="text-[#ff9f1a] font-bold text-base md:text-lg hover:text-[#ffb84d] transition-colors break-all">support@mahity.com</a>
                    </div>

                    {/* Phone Support */}
                    <div className="bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-[#ff9f1a] transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">Phone Support</h3>
                        <button onClick={() => copyToClipboard("8291624489", "phone")} className="p-2 hover:bg-gray-700 rounded transition-colors flex-shrink-0" title="Copy phone">
                            {copiedPhone ? <CheckIcon className="w-5 h-5 md:w-6 md:h-6 text-green-500" /> : <CopyIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />}
                        </button>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">Talk to our experts</p>
                        <a href="tel:8291624489" className="text-[#ff9f1a] font-bold text-base md:text-lg hover:text-[#ffb84d] transition-colors">+91 8291624489</a>
                    </div>
                    </div>
                </div>
                </div>

                {/* Location Section */}
                <LocationSection />
            </div>
            )}

            {/* CAREERS TAB */}
            {activeTab === "careers" && (
            <div>
                <div className="bg-[#050505] py-12 md:py-16 px-4">
                {isCareersSubmitted ? (
                    <div className="max-w-2xl mx-auto text-center animate-bounceIn">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 md:p-8 lg:p-12 transform hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4 md:mb-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ strokeDasharray: 100, strokeDashoffset: 0, animation: 'checkmark 0.5s ease-out 0.3s backwards' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6">Thank You!</h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 px-4">Your application has been submitted successfully!<br /><span className="text-[#ff9f1a] font-medium">Our HR team will review your application and get in touch with you shortly.</span></p>
                        <button onClick={() => setIsCareersSubmitted(false)} className="px-8 md:px-10 py-3 md:py-4 bg-[#ff9f1a] text-gray-900 font-bold rounded-xl hover:bg-[#ffb84d] active:scale-95 transition-all shadow-lg text-sm md:text-base">
                        Back to Careers Page
                        </button>
                    </div>
                    </div>
                ) : (
                    <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Join Our Team</h2>
                        <p className="text-lg md:text-xl text-gray-400 px-4">Mahity Technology accelerates the value of the cloud. Join us on our mission.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Left Side - Career Contact Info */}
                        <div className="lg:col-span-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                            Career Opportunities
                        </h3>
                        
                        <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                            Join our dynamic team and be part of innovative projects that shape the future of cloud technology. We're looking for talented individuals who are passionate about making a difference.
                        </p>

                        <div className="space-y-4 md:space-y-6">
                            <div>
                            <p className="text-white font-bold mb-2 text-sm md:text-base">Career Inquiries:</p>
                            <a href="mailto:careers@mahity.com" className="text-[#ff9f1a] text-base md:text-lg hover:text-[#ffb84d] transition-colors break-all">
                                careers@mahity.com
                            </a>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 md:p-4">
                            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                                We offer competitive compensation, comprehensive benefits, and opportunities for professional growth in a collaborative environment.
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* Right Side - Application Form */}
                        <div className="lg:col-span-2">
                        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 md:p-8 lg:p-12 hover:border-[#ff9f1a] transition-all duration-500">
                            <form onSubmit={handleCareersSubmit} className="space-y-5 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2">First Name <span className="text-red-500">*</span></label>
                                <input type="text" name="firstName" value={careersFormData.firstName} onChange={handleCareersInputChange} className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-gray-700/50 text-white border ${careersErrors.firstName ? "border-red-500" : "border-gray-600"} rounded-lg focus:ring-2 focus:ring-[#ff9f1a] focus:border-transparent outline-none transition text-sm md:text-base`} />
                                {careersErrors.firstName && <p className="mt-1 text-xs md:text-sm text-red-400">{careersErrors.firstName}</p>}
                                </div>
                                <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2">Last Name <span className="text-red-500">*</span></label>
                                <input type="text" name="lastName" value={careersFormData.lastName} onChange={handleCareersInputChange} className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-gray-700/50 text-white border ${careersErrors.lastName ? "border-red-500" : "border-gray-600"} rounded-lg focus:ring-2 focus:ring-[#ff9f1a] focus:border-transparent outline-none transition text-sm md:text-base`} />
                                {careersErrors.lastName && <p className="mt-1 text-xs md:text-sm text-red-400">{careersErrors.lastName}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2">Email <span className="text-red-500">*</span></label>
                                <input type="email" name="email" value={careersFormData.email} onChange={handleCareersInputChange} className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-gray-700/50 text-white border ${careersErrors.email ? "border-red-500" : "border-gray-600"} rounded-lg focus:ring-2 focus:ring-[#ff9f1a] focus:border-transparent outline-none transition text-sm md:text-base`} />
                                {careersErrors.email && <p className="mt-1 text-xs md:text-sm text-red-400">{careersErrors.email}</p>}
                                </div>
                                <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2">Phone <span className="text-red-500">*</span></label>
                                <input type="tel" name="phone" value={careersFormData.phone} onChange={handleCareersInputChange} className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-gray-700/50 text-white border ${careersErrors.phone ? "border-red-500" : "border-gray-600"} rounded-lg focus:ring-2 focus:ring-[#ff9f1a] focus:border-transparent outline-none transition text-sm md:text-base`} />
                                {careersErrors.phone && <p className="mt-1 text-xs md:text-sm text-red-400">{careersErrors.phone}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2">Country <span className="text-red-500">*</span></label>
                                <select name="country" value={careersFormData.country} onChange={handleCareersInputChange} className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-gray-700/50 text-white border ${careersErrors.country ? "border-red-500" : "border-gray-600"} rounded-lg focus:ring-2 focus:ring-[#ff9f1a] focus:border-transparent outline-none transition text-sm md:text-base`}>
                                    <option value="">Select a country</option>
                                    {Object.keys(countriesAndCities).map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                                {careersErrors.country && <p className="mt-1 text-xs md:text-sm text-red-400">{careersErrors.country}</p>}
                                </div>
                                <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2">City <span className="text-red-500">*</span></label>
                                <select name="city" value={careersFormData.city} onChange={handleCareersInputChange} disabled={!careersFormData.country} className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-gray-700/50 text-white border ${careersErrors.city ? "border-red-500" : "border-gray-600"} rounded-lg focus:ring-2 focus:ring-[#ff9f1a] focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base`}>
                                    <option value="">Select a city</option>
                                    {careersFormData.country && countriesAndCities[careersFormData.country]?.map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                                {careersErrors.city && <p className="mt-1 text-xs md:text-sm text-red-400">{careersErrors.city}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2">What position are you applying for? <span className="text-red-500">*</span></label>
                                <input type="text" name="position" value={careersFormData.position} onChange={handleCareersInputChange} className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-gray-700/50 text-white border ${careersErrors.position ? "border-red-500" : "border-gray-600"} rounded-lg focus:ring-2 focus:ring-[#ff9f1a] focus:border-transparent outline-none transition placeholder-gray-500 text-sm md:text-base`} placeholder="e.g., Software Developer, DevOps Engineer, etc." />
                                {careersErrors.position && <p className="mt-1 text-xs md:text-sm text-red-400">{careersErrors.position}</p>}
                            </div>

                            <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-3">What is your current employment status? <span className="text-red-500">*</span></label>
                                <div className="space-y-2 md:space-y-3">
                                {[{ value: "experienced", label: "Experienced Professional" }, { value: "fresher", label: "Fresher" }, { value: "student", label: "Student" }].map((option) => (
                                    <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                                    <input type="radio" name="employmentStatus" value={option.value} checked={careersFormData.employmentStatus === option.value} onChange={handleCareersInputChange} className="w-4 h-4 text-[#ff9f1a] focus:ring-[#ff9f1a] focus:ring-2" />
                                    <span className="text-sm md:text-base text-gray-300">{option.label}</span>
                                    </label>
                                ))}
                                </div>
                                {careersErrors.employmentStatus && <p className="mt-1 text-xs md:text-sm text-red-400">{careersErrors.employmentStatus}</p>}
                            </div>

                            <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2">Upload Resume <span className="text-red-500">*</span></label>
                                <label className={`flex justify-center px-4 md:px-6 py-6 md:py-8 border-2 border-dashed ${careersErrors.resume ? "border-red-500" : "border-gray-600"} rounded-lg cursor-pointer hover:border-[#ff9f1a] transition bg-gray-700/30`}>
                                <div className="space-y-2 text-center">
                                    <svg className="mx-auto h-10 w-10 md:h-12 md:w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="text-xs md:text-sm text-gray-400">{careersFormData.resume ? <span className="font-medium text-[#ff9f1a] break-all px-2">{careersFormData.resume.name}</span> : <><span className="font-medium text-[#ff9f1a]">Upload a file</span> or drag and drop</>}</div>
                                    <p className="text-xs text-gray-500">PDF or Word document up to 5MB</p>
                                </div>
                                <input id="resume" name="resume" type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                                </label>
                                {careersErrors.resume && <p className="mt-1 text-xs md:text-sm text-red-400">{careersErrors.resume}</p>}
                            </div>

                            {careersSubmitStatus.type === "error" && !isCareersSubmitted && (
                                <div className="p-3 md:p-4 rounded-lg bg-red-900/50 text-red-300 border border-red-700 text-sm">{careersSubmitStatus.message}</div>
                            )}

                            <div className="flex justify-center">
                                <button type="submit" disabled={isCareersSubmitting} className="w-full md:w-auto px-10 md:px-12 py-3 md:py-4 bg-[#ff9f1a] text-gray-900 font-semibold rounded-lg hover:bg-[#ffb84d] focus:outline-none focus:ring-2 focus:ring-[#ff9f1a] focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 text-sm md:text-base">
                                {isCareersSubmitting ? (
                                    <span className="flex items-center justify-center gap-3">
                                    <span className="inline-block w-4 h-4 md:w-5 md:h-5 border-3 border-gray-900 border-t-transparent rounded-full animate-spin"></span>
                                    Submitting...
                                    </span>
                                ) : "Submit Application"}
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                )}
                </div>

                {/* Location Section */}
                <LocationSection />
            </div>
            )}
        </div>
        </div>
    );
    }

    export default ContactUs;