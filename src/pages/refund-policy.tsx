"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldOff, Scale, Globe, AlertCircle, ShoppingBag, ArrowUpDown,
  XCircle, Server, Gift, Receipt, CreditCard, Database, RefreshCw,
  Layers, Sparkles, ChevronDown, LayoutPanelLeft,
} from "lucide-react";

type SectionItem = {
  sub: string;
  text: string;
  bullets?: string[];
};

type Section = {
  id: string;
  number: string;
  title: string;
  icon: React.ElementType;
  content: SectionItem[];
};

const sections: Section[] = [
  {
    id: "scope", number: "01", title: "Scope and Acceptance", icon: Layers,
    content: [
      { sub: "1.1", text: `This Refund Policy governs all fees, charges, and payments for access to and use of the Company's software‑as‑a‑service platform, including any subscriptions, add‑ons, usage‑based charges, implementation or professional services, and any other paid features (collectively, the "Services").` },
      { sub: "1.2", text: `By creating an account, subscribing to, or otherwise using the Services, the customer ("Customer") agrees that all amounts charged by the Company are non‑refundable except as explicitly provided in this Policy or required by applicable law.` },
      { sub: "1.3", text: `This Policy forms part of, and is incorporated into, the Company's main Terms of Service or Master Subscription Agreement. In the event of any conflict, the provision that more clearly disclaims refunds (to the extent allowed by law) will prevail.` },
    ],
  },
  {
    id: "principles", number: "02", title: "General Refund Principles", icon: ShieldOff,
    content: [
      { sub: "2.1", text: "All fees and charges for the Services are final and non‑refundable, including without limitation:", bullets: ["Recurring subscription fees (monthly, annual, multi‑year, or any other term).", "One‑time setup, onboarding, or implementation fees.", "Overages, metered usage, or consumption‑based charges.", "Add‑on modules, premium features, and additional user licenses.", "Support, training, consulting, and other professional services."] },
      { sub: "2.2", text: "The Company does not provide full or partial refunds or credits for: unused time in a subscription term, downgrade of plan, early termination, non‑use or lack of use, dissatisfaction with features that function as described, or failure by Customer to use or access the Services." },
      { sub: "2.3", text: "Fees remain non‑refundable regardless of whether the Services are suspended, limited, or terminated by the Company due to Customer's breach of the Terms, misuse, or violation of law." },
    ],
  },
  {
    id: "cooling", number: "03", title: "Cooling‑Off Periods and Local Law Overrides", icon: Globe,
    content: [
      { sub: "3.1", text: "If mandatory consumer or data‑protection laws in Customer's jurisdiction grant a non‑waivable cooling‑off period or right of withdrawal (for example, certain EU/UK consumer rights), the Company will honor the minimum rights required by such laws, and any refund will be limited strictly to what those laws require." },
      { sub: "3.2", text: "Where such laws apply, any statutory withdrawal or cancellation period will begin on the earlier of: (a) the date of subscription purchase, or (b) the date on which Customer first gains access to the Services." },
      { sub: "3.3", text: "To exercise any statutory right of withdrawal, Customer must follow the notice and cooperation requirements specified by law and by the Company's instructions at the time of the request. Failure to provide required information or documentation may delay or prevent any refund mandated by law." },
      { sub: "3.4", text: "Nothing in this Policy is intended to limit any non‑waivable consumer rights under applicable law; however, to the maximum extent permitted, the Customer's right to refunds is excluded or minimized in accordance with this Policy." },
    ],
  },
  {
    id: "billing", number: "04", title: "Billing Errors and Unauthorized Transactions", icon: AlertCircle,
    content: [
      { sub: "4.1", text: "If Customer believes it has been incorrectly billed (for example, duplicate charges, incorrect amounts, or charges that do not reflect the agreed pricing), Customer must notify the Company in writing within a reasonable time after the charge appears on Customer's invoice or statement, and in any case no later than the shortest period permitted by applicable law." },
      { sub: "4.2", text: "Upon timely notice, the Company will investigate the claim and, if it confirms that an error occurred, will issue either:", bullets: ["A refund for the incorrect amount; or", "An account credit that will be applied to future invoices, at the Company's discretion, unless a cash refund is required by law or payment‑processor rules."] },
      { sub: "4.3", text: "Charges resulting from unauthorized use of Customer's credentials or accounts (for example, by its employees, contractors, or third parties) are the responsibility of Customer and are not refundable, unless applicable law provides otherwise." },
      { sub: "4.4", text: "Where required by card‑scheme rules or law, the Company may cooperate with its payment processors and financial institutions to process refunds for fraudulent or unauthorized card charges; in such cases, any refund will be limited to the amount strictly required." },
    ],
  },
  {
    id: "marketplace", number: "05", title: "Marketplace and Reseller Purchases", icon: ShoppingBag,
    content: [
      { sub: "5.1", text: "If Customer acquires the Services through a cloud marketplace, app store, distributor, or reseller, then any refund or credit may be subject to the separate refund policy of that marketplace, distributor, or reseller." },
      { sub: "5.2", text: "The Company is not obligated to provide any refund where:", bullets: ["The marketplace or reseller's policy states that prices and fees are non‑refundable;", "The marketplace or reseller declines or fails to process a refund."] },
      { sub: "5.3", text: `Where a marketplace or reseller enables a limited "buyer's remorse" window (for example, 48–72 hours for cancellation with refund), any rights to refund are governed solely by that window and its conditions; outside that window, all fees are non‑refundable and any refunds are at the Company's sole discretion, if permitted at all.` },
      { sub: "5.4", text: "If a refund is issued through a marketplace or reseller, Customer agrees that such marketplace or reseller may recover corresponding amounts from the Company, offset such amounts against future disbursements, or require reimbursement, and that this arrangement does not create any additional refund rights for Customer beyond those granted in this Policy or by law." },
    ],
  },
  {
    id: "upgrades", number: "06", title: "Upgrades, Downgrades, and Plan Changes", icon: ArrowUpDown,
    content: [
      { sub: "6.1", text: "Upgrades: If Customer upgrades to a higher‑tier plan, adds users, or purchases additional features, Customer will be billed the applicable additional fees, which are non‑refundable. If permitted by the billing system or marketplace, the Company may, at its discretion, apply a credit for any unused portion of the prior plan term, but is not obligated to do so unless required by law or by specific marketplace rules." },
      { sub: "6.2", text: "Downgrades: If Customer downgrades a plan, removes users, or reduces features, the change will generally take effect at the start of the next billing period. No refunds or credits will be issued for unused time or decreased usage in the current billing period." },
      { sub: "6.3", text: "Plan changes initiated by the Company (such as price changes or restructuring of tiers) will be communicated in advance as required by the Terms; Customer may cancel before the effective date of such changes, but no refunds will be issued for any already‑paid amounts." },
    ],
  },
  {
    id: "cancellation", number: "07", title: "Cancellations and Termination", icon: XCircle,
    content: [
      { sub: "7.1", text: "Customer may cancel its subscription at any time through the account settings or by providing written notice in accordance with the Terms. Cancellation will prevent renewal of the subscription at the end of the current billing term." },
      { sub: "7.2", text: "Cancellation does not entitle Customer to a refund of any fees already paid, including pre‑paid amounts for the remaining portion of the billing term; Customer will maintain access until the end of the then‑current term, unless the Company terminates earlier for cause." },
      { sub: "7.3", text: "If the Company terminates the Services for cause due to Customer's breach, violation of law, or risk to security or integrity of the platform, no refunds or credits will be provided for any unused portion of the subscription term." },
      { sub: "7.4", text: "If the Company terminates the Services for convenience (i.e., not for cause), the Company may, at its sole discretion, issue a prorated refund or credit for the unused portion of the term, but is not required to do so except where mandated by law." },
    ],
  },
  {
    id: "availability", number: "08", title: "Service Availability, Performance, and Credits", icon: Server,
    content: [
      { sub: "8.1", text: "The Services may be subject to planned maintenance, unplanned downtime, or performance issues. These events do not entitle Customer to a refund unless expressly stated in a separate Service Level Agreement (SLA) that provides for specific service credits." },
      { sub: "8.2", text: "If the Company offers an SLA that provides service credits for failure to meet defined uptime or performance commitments, such credits:", bullets: ["Are the sole and exclusive remedy for the relevant service deficiency.", "Are not redeemable for cash.", "Are non‑transferable and may only be applied to future invoices."] },
      { sub: "8.3", text: "Service credits do not constitute a refund and will not be provided where downtime results from factors outside the Company's reasonable control, Customer's systems or network, or Customer's misuse of the Services." },
    ],
  },
  {
    id: "trials", number: "09", title: "Trials, Promotions, and Coupons", icon: Gift,
    content: [
      { sub: "9.1", text: "Free trials: The Company may offer free or discounted trials of the Services for a specified period. Upon expiration of the trial, any continued use will be billed at the then‑current rates; such charges are non‑refundable. Free trial periods themselves are not eligible for refunds or monetary credits." },
      { sub: "9.2", text: "Promotional pricing and discounts: Fees paid under promotional or discounted offers are subject to this same No‑Refund Policy; no refunds or credits will be granted solely because a promotion ends, changes, or becomes more or less favorable." },
      { sub: "9.3", text: "Coupons and credits: Any coupons, referral bonuses, or promotional credits are non‑refundable, non‑redeemable for cash, and may have expiration dates or usage conditions." },
    ],
  },
  {
    id: "taxes", number: "10", title: "Taxes, Duties, and Regulatory Charges", icon: Receipt,
    content: [
      { sub: "10.1", text: `All fees are exclusive of taxes unless expressly stated otherwise. Customer is responsible for payment of all applicable taxes, duties, levies, and similar governmental charges (collectively, "Taxes") associated with its purchase and use of the Services.` },
      { sub: "10.2", text: "Once collected, Taxes are generally not refundable, except where the relevant tax authority requires a refund or credit and sufficient documentation is provided. The Company may require Customer to provide proof that no tax credit has been claimed and to assist with any required filings or adjustments." },
      { sub: "10.3", text: "If any payment is required to be made without deduction or withholding of Taxes, Customer will gross‑up the payment so that the Company receives the full amount it would have received had no deduction or withholding been required." },
    ],
  },
  {
    id: "chargebacks", number: "11", title: "Chargebacks and Disputes", icon: CreditCard,
    content: [
      { sub: "11.1", text: "Customer agrees not to initiate chargebacks with its payment provider for amounts that are subject to this No‑Refund Policy and have been correctly charged. Doing so may be considered a breach of the Terms and may result in suspension or termination of the Services." },
      { sub: "11.2", text: "If a chargeback is initiated, the Company reserves the right to:", bullets: ["Suspend or terminate Customer's access to the Services.", "Recover all amounts owed, including any chargeback fees imposed by payment processors.", "Pursue any other remedies available at law or in equity."] },
      { sub: "11.3", text: "The Company may, at its sole discretion and without waiving this Policy, choose to resolve a dispute by issuing a partial or full refund or credit; such actions are goodwill gestures only and do not constitute a course of dealing or a waiver of this Policy for future transactions." },
    ],
  },
  {
    id: "data", number: "12", title: "Data Access After Termination", icon: Database,
    content: [
      { sub: "12.1", text: "Upon termination or expiration of the Services, Customer's access to the platform and data may be limited or disabled after a defined retention period stated in the Terms or data‑retention policy. Such limitation or deletion does not entitle Customer to any refund or credit." },
      { sub: "12.2", text: "Customer is responsible for exporting or backing up its data prior to the end of its subscription or retention period. The Company has no obligation to store or maintain Customer data beyond the agreed retention period and bears no refund obligation related to data deletion in accordance with its policies." },
    ],
  },
  {
    id: "modifications", number: "13", title: "Modifications to This Policy", icon: RefreshCw,
    content: [
      { sub: "13.1", text: "The Company may update or modify this No‑Refund Policy from time to time. Material changes will be notified to Customer as required by law or by the Terms (for example, via email or in‑app notice)." },
      { sub: "13.2", text: "Except to the extent required by law, changes to this Policy will apply prospectively, and will not retroactively create any refund rights for past transactions." },
    ],
  },
  {
    id: "severability", number: "14", title: "Severability and Enforceability", icon: Scale,
    content: [
      { sub: "14.1", text: "If any provision of this Policy is found to be invalid, illegal, or unenforceable by a court or competent authority, that provision will be enforced to the maximum extent permissible, and the remaining provisions will remain in full force and effect." },
      { sub: "14.2", text: "To the maximum extent permitted by applicable law, this Policy is intended to exclude or limit any right to refund not expressly granted herein or required by mandatory law." },
    ],
  },
];

export default function RefundPolicy() {
  const [openId, setOpenId] = useState<string | null>("scope");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <div className="min-h-screen bg-[#050505] w-full relative">
      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .acc-header:hover { border-color: rgba(255,159,26,0.3) !important; background: rgba(255,159,26,0.05) !important; }
        .acc-header:hover .acc-num { color: #ff9f1a !important; }
        .acc-header:hover .acc-title { color: #d1d5db !important; }
      `}</style>

    
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,159,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,159,26,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff9f1a] rounded-full"
            style={{ left: `${(i * 5.3) % 100}%`, top: `${(i * 7.1) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 relative z-10">

   
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-[#00f2ff] via-[#0099ff] to-[#ff9f1a] bg-clip-text text-transparent">
              Refund Policy
            </span>
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: [0, 10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-[#ff9f1a]" />
            </motion.div>
          </h1>
          <p className="text-sm sm:text-lg text-gray-400 leading-relaxed italic">
            Last updated: March 13, 2026
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-[#ff9f1a] to-transparent"
          />
        </motion.div>

        <div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col gap-2">
              {sections.map((section, i) => {
                const Icon = section.icon;
                const isOpen = openId === section.id;

               
                const accent = { color: "#ff9f1a", glow: "transparent", iconBg: "linear-gradient(135deg,#ff9f1a,#ffb84d)", numColor: "#ff9f1a" };
            

                return (
                  <motion.div
                    key={section.id}
                    id={`section-${section.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.03 }}
                    style={{ scrollMarginTop: "100px" }}
                  >
                 
                    <button
                      onClick={() => toggle(section.id)}
                      className="acc-header w-full text-left transition-all duration-300"
                      style={{
                        display: "flex", alignItems: "center", gap: "14px",
                        padding: "16px 20px",
                        background: isOpen ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.07)",
                       borderLeft: `1px solid ${accent.color}`,
borderRight: `1px solid ${accent.color}`,
boxShadow: "none",
                        borderBottom: isOpen ? "none" : undefined,
                        borderRadius: isOpen ? "12px 12px 0 0" : "12px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                    
                      <span
                        className="acc-num"
                        style={{
                          fontSize: "14px", fontFamily: "monospace", fontWeight: 700,
                          color: isOpen ? "rgba(255,255,255,0.35)" : "rgba(255,159,26,0.4)",
                          minWidth: "24px", transition: "color 0.3s",
                          textShadow: isOpen ? "none" : `0 0 8px ${accent.glow}`,
                        }}
                      >
                        {section.number}
                      </span>

                    
                      <div style={{
                        width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: isOpen ? "rgba(255,255,255,0.06)" : "rgba(255,159,26,0.15)",
                        boxShadow: isOpen ? "none" : `0 0 18px ${accent.glow}`,
                        transition: "all 0.3s ease",
                      }}>
                        <Icon style={{
                          width: "17px", height: "17px",
                          color: isOpen ? "#ffffff" : "#ffffff",
                          transition: "color 0.3s",
                        }} />
                      </div>

                    
                      <span
                        className="acc-title"
                        style={{
                          flex: 1, fontSize: "16px", fontWeight: 700,
                          color: isOpen ? "#ffffff" : "#f3f4f6",
                          transition: "color 0.25s",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {section.title}
                      </span>

                    
                      <ChevronDown style={{
                        width: "16px", height: "16px",
                        color: isOpen ? "#4b5563" : accent.color,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease, color 0.25s",
                        flexShrink: 0,
                      }} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{
                            border: "1px solid rgba(255,159,26,0.4)",
                            borderTop: "none",
                            borderRadius: "0 0 16px 16px",
                            background: "rgba(255,255,255,0.015)",
                            padding: "0 20px 22px",
                          }}>
                           
                            <div style={{
                              height: "1px", margin: "0 0 20px",
                              background: "linear-gradient(90deg,rgba(255,159,26,0.5),rgba(0,242,255,0.2),transparent)",
                            }} />

                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                              {section.content.map((item, ci) => (
                                <div key={ci} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                                  {/* Glowing orange square marker */}
                                  <span style={{
                                    display: "flex", alignItems: "flex-start", paddingTop: "7px",
                                    minWidth: "14px", flexShrink: 0,
                                  }}>
                                    <span style={{
                                      width: "7px", height: "7px", borderRadius: "2px",
                                      background: "linear-gradient(135deg, #ff9f1a, #ffb84d)",
                                      boxShadow: "0 0 8px rgba(255,159,26,0.8), 0 0 16px rgba(255,159,26,0.3)",
                                      display: "block", flexShrink: 0,
                                    }} />
                                  </span>
                                  <div style={{ flex: 1 }}>
                                    <p style={{
                                      color: "#e5e7eb", fontSize: "14px", lineHeight: 1.85,
                                      margin: item.bullets ? "0 0 12px" : "0",
                                    }}>
                                      {item.text}
                                    </p>
                                    {item.bullets && (
                                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                                        {item.bullets.map((bullet, bi) => (
                                          <li key={bi} style={{
                                            color: "#d1d5db", fontSize: "13.5px", lineHeight: 1.75,
                                            paddingLeft: "18px", position: "relative",
                                          }}>
                                            <span style={{
                                              position: "absolute", left: "2px", top: "7px",
                                              width: "5px", height: "5px", borderRadius: "1px",
                                              background: "rgba(255,159,26,0.6)", display: "block",
                                            }} />
                                            {bullet}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
      </div>

      
    </div>
    </div>
  );
}