
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


import githubIcon from "../../assets/images/github.svg";
import mariadbIcon from "../../assets/images/mariadb.svg";
import gitlabIcon from "../../assets/images/gitlab.svg";
import harborIcon from "../../assets/images/harbor.svg";
import ansibleIcon  from "../../assets/images/ansible.svg";
import terraformIcon from "../../assets/images/terraform.svg";
import postgresIcon from "../../assets/images/postgres.svg";
import mongodbIcon from "../../assets/images/mongodb.svg";
import kafkaIcon from "../../assets/images/kafka.svg";
import nginxIcon from "../../assets/images/nginx.svg";
import ciliumIcon from "../../assets/images/cilium.svg";
import istioIcon from "../../assets/images/istio.svg";
import traefikIcon from "../../assets/images/traefik.svg";
import openshiftIcon from "../../assets/images/openshift.svg";
import kubernetesIcon from "../../assets/images/kubernetes.svg";
import oryIcon from "../../assets/images/ory.svg";
import keycloakIcon from "../../assets/images/keycloak.svg";
import prometheusIcon from "../../assets/images/prometheus.svg";
import elkIcon from "../../assets/images/elk.svg";
import zabbixIcon from "../../assets/images/zabbix.svg";
import nutanixIcon from "../../assets/images/nutanix.svg";
import redhatIcon from "../../assets/images/redhat.svg";
import quayIcon    from "../../assets/images/quay.svg";          
import tykIcon     from "../../assets/images/tyk.svg";          
import aviIcon     from "../../assets/images/avi.svg";           
import vmwareIcon   from "../../assets/images/vmware.svg";  
import eksIcon     from "../../assets/images/eks.svg";           
import aksIcon     from "../../assets/images/aks.svg";           
import gkeIcon     from "../../assets/images/gke.svg";          
import awsIcon     from "../../assets/images/aws.svg";           
import azureIcon   from "../../assets/images/azure.svg";         
import gcpIcon     from "../../assets/images/gcp.svg";           
import kyvernoIcon from "../../assets/images/kyverno.svg";       
import sysdigIcon  from "../../assets/images/sysdig.svg";        
import vaultIcon   from "../../assets/images/vault.svg"; 


const GOLD        = "#e8b84b";
const GOLD_BORDER = "#c8962a";
const BOX_BG      = "#0e0e12";
const PAGE_BG     = "#050505";   
const ICON_BG     = "#1a1a22";
const FOOTER_BG   = "#030303";


interface Tech {
  name: string;
  logoUrl?: string;
  icon?: string;
  href: string;
  description?: string;
}


const useWindowWidth = () => {
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  React.useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
};


const TechIcon: React.FC<{ tech: Tech; size?: number; textSize?: number }> = ({
  tech, size = 54, textSize = 10,
}) => {
  const [hovered, setHovered] = useState(false);
  const [ripple,  setRipple]  = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
    navigate(tech.href);
  };

  return (
    <div
      className="flex flex-col items-center cursor-pointer select-none"
      style={{ gap: 6, minWidth: size + 8, position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center rounded-full overflow-hidden"
        style={{
          width: size, height: size,
          background:  hovered ? "rgba(200,150,42,0.18)" : ICON_BG,
          border:      `1.5px solid ${hovered ? GOLD_BORDER : "rgba(255,255,255,0.08)"}`,
          boxShadow:   hovered
            ? `0 0 0 3px rgba(200,150,42,0.15), 0 8px 24px rgba(0,0,0,0.7)`
            : `0 2px 10px rgba(0,0,0,0.6)`,
          transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
          flexShrink: 0,
        }}
      >
        <AnimatePresence>
          {ripple && (
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0.6, scale: 0.4 }}
              animate={{ opacity: 0,   scale: 2.2  }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.38 }}
              style={{ background: `radial-gradient(circle, ${GOLD_BORDER}80, transparent)` }}
            />
          )}
        </AnimatePresence>

        {tech.logoUrl ? (
        
          <div style={{
            width: size * 0.82, height: size * 0.82,
            background: "#ffffff",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: size * 0.06,
            flexShrink: 0,
            boxShadow: hovered ? `0 0 8px rgba(232,184,75,0.35)` : "none",
            transition: "box-shadow 0.2s",
          }}>
            <img
              src={tech.logoUrl}
              alt={tech.name}
              style={{
                width: "80%", height: "80%",
                objectFit: "contain",
                mixBlendMode: "multiply",
                filter: hovered
                  ? "brightness(1.1) drop-shadow(0 0 3px rgba(232,184,75,0.3))"
                  : "brightness(1)",
                transition: "filter 0.2s",
              }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).parentElement!.style.display = "none"; }}
            />
          </div>
        ) : (
          <span
            className="material-symbols-outlined"
            style={{
              color: hovered ? GOLD : "rgba(255,255,255,0.68)",
              fontSize: size * 0.43,
              transition: "color 0.2s",
            }}
          >
            {tech.icon}
          </span>
        )}
      </motion.div>

      <span
        className="text-center leading-tight font-medium transition-colors duration-200"
        style={{ fontSize: textSize, color: hovered ? GOLD : "rgba(255,255,255,0.72)", maxWidth: size + 16 }}
      >
        {tech.name}
      </span>

      <AnimatePresence>
        {hovered && tech.description && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.14 }}
            style={{
              position: "absolute", bottom: "100%", left: "50%",
              transform: "translateX(-50%)", marginBottom: 8,
              width: 128, zIndex: 60, pointerEvents: "none",
            }}
          >
            <div
              className="rounded-lg px-2.5 py-2 text-center"
              style={{
                background: "rgba(5,5,10,0.97)",
                border: `1px solid ${GOLD_BORDER}55`,
                boxShadow: "0 8px 28px rgba(0,0,0,0.8)",
              }}
            >
              <p style={{ fontSize: 10, color: "#fff", fontWeight: 700, marginBottom: 2 }}>{tech.name}</p>
              <p style={{ fontSize: 9,  color: "rgba(255,255,255,0.42)", lineHeight: 1.35 }}>{tech.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const Pill: React.FC<{ label: string; filled?: boolean }> = ({ label, filled = false }) => (
  <div
    style={{
      display: "inline-flex", alignItems: "center",
      padding: "4px 12px", borderRadius: 999,
      fontSize: 10, fontWeight: 700, letterSpacing: "0.04em", whiteSpace: "nowrap",
      border: `1.5px solid ${GOLD_BORDER}`,
      color:      filled ? "#1a1a20" : GOLD,
      background: filled
        ? `linear-gradient(135deg, ${GOLD_BORDER}, ${GOLD})`
        : "rgba(200,150,42,0.1)",
      margin: "0 auto",
    }}
  >
    {label}
  </div>
);


const Box: React.FC<{
  title: string;
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ title, children, delay = 0, style = {} }) => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.52, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: BOX_BG, border: `1.5px solid ${GOLD_BORDER}`, borderRadius: 8, display: "flex", flexDirection: "column", ...style }}
    >
      <div style={{ padding: "10px 14px", borderBottom: `1px solid rgba(200,150,42,0.22)`, textAlign: "center", flexShrink: 0 }}>
        <h3 style={{ color: GOLD, fontSize: 13, fontWeight: 800, lineHeight: 1.35, textShadow: "0 0 14px rgba(232,184,75,0.3)", whiteSpace: "pre-line" }}>
          {title}
        </h3>
      </div>
      <div style={{ flex: 1, padding: "14px" }}>{children}</div>
    </motion.div>
  );
};


const IconRow: React.FC<{ techs: Tech[]; size?: number; gap?: number; centered?: boolean; staggerBase?: number }> = ({
  techs, size = 52, gap = 14, centered = true, staggerBase = 0,
}) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap, justifyContent: centered ? "center" : "flex-start" }}>
    {techs.map((t, i) => (
      <motion.div key={t.name} initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.32, delay: staggerBase + i * 0.07, ease: "backOut" }}>
        <TechIcon tech={t} size={size} />
      </motion.div>
    ))}
  </div>
);


const MobileSection: React.FC<{ title: string; delay?: number; children: React.ReactNode }> = ({
  title, delay = 0, children,
}) => {
  const [open, setOpen] = useState(true);
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: BOX_BG, border: `1.5px solid ${GOLD_BORDER}`, borderRadius: 10, overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "transparent", border: "none", cursor: "pointer", borderBottom: open ? `1px solid rgba(200,150,42,0.22)` : "none" }}>
        <h3 style={{ color: GOLD, fontSize: 13, fontWeight: 800, textAlign: "left", lineHeight: 1.35, whiteSpace: "pre-line" }}>{title}</h3>
        <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 20, flexShrink: 0, transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>expand_more</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
            <div style={{ padding: 16 }}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const PillGroup: React.FC<{ label: string; filled?: boolean; techs: Tech[]; size?: number; staggerBase?: number }> = ({
  label, filled = false, techs, size = 46, staggerBase = 0,
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
    <Pill label={label} filled={filled} />
    <IconRow techs={techs} size={size} gap={10} centered staggerBase={staggerBase} />
  </div>
);



const versionRegistry: Tech[] = [
  { name: "Github", logoUrl: githubIcon,  href: "/ecosystem/github", description: "Source control & CI/CD" },
  { name: "Gitlab", logoUrl: gitlabIcon,  href: "/ecosystem/gitlab", description: "DevOps platform"        },
];

const containerRegistry: Tech[] = [
  {
    name: "Quay",
    logoUrl: quayIcon, 
    href: "/ecosystem/quay", description: "Red Hat Quay registry",
  },
  {
    name: "Harbor",
    logoUrl: harborIcon,
    href: "/ecosystem/harbor", description: "Trusted cloud registry",
  },
];

const automation: Tech[] = [
  { name: "Ansible",   logoUrl: ansibleIcon,     href: "/ecosystem/ansible",   description: "IT automation platform" },
  { name: "Terraform", logoUrl: terraformIcon, href: "/ecosystem/terraform", description: "Infrastructure as code" },
];

const databases: Tech[] = [
  { name: "MariaDB",  logoUrl: mariadbIcon,    href: "/ecosystem/mariadb",    description: "Open source relational DB" },
  { name: "Postgres", logoUrl: postgresIcon,          href: "/ecosystem/postgresql", description: "Advanced SQL database"     },
  { name: "MongoDB",  logoUrl: mongodbIcon,                href: "/ecosystem/mongodb",    description: "Developer data platform"   },
];

const streaming: Tech[] = [
  {
    name: "Kafka",
    logoUrl: kafkaIcon, 
    href: "/ecosystem/kafka", description: "Distributed event streaming",
  },
];

const apiGateway: Tech[] = [
  { name: "NGINX", logoUrl:nginxIcon, href: "/ecosystem/nginx", description: "High-performance proxy" },
  {
    name: "TYK",
    logoUrl: tykIcon, 
    href: "/ecosystem/tyk", description: "API management platform",
  },
];

const containerNetworking: Tech[] = [
  {
    name: "Cilium",
    logoUrl: ciliumIcon,
    href: "/ecosystem/cilium", description: "eBPF-based networking",
  },
];

const serviceMesh: Tech[] = [
  {
    name: "Cilium",
    logoUrl:ciliumIcon,
    href: "/ecosystem/cilium-mesh", description: "eBPF service mesh",
  },
  {
    name: "Istio",
    logoUrl: istioIcon,
    href: "/ecosystem/istio", description: "Connect, secure services",
  },
];

const ingress: Tech[] = [
  {
    name: "Traefik",
    logoUrl: traefikIcon,
    href: "/ecosystem/traefik", description: "Cloud native proxy",
  },
  { name: "NGINX", logoUrl: nginxIcon, href: "/ecosystem/nginx", description: "Reverse proxy & LB" },
  {
    name: "AVI",
    
    logoUrl: aviIcon,
    href: "/ecosystem/avi", description: "VMware load balancer",
  },
];

const platform: Tech[] = [
  {
    name: "VMware Tanzu",
    logoUrl: vmwareIcon, 
    href: "/ecosystem/tanzu", description: "VMware Kubernetes",
  },
  {
    name: "OpenShift",
    logoUrl: openshiftIcon,
    href: "/ecosystem/openshift", description: "Enterprise Kubernetes",
  },
  {
    name: "Kubernetes",
    logoUrl: kubernetesIcon,
    href: "/ecosystem/kubernetes", description: "Container orchestration",
  },
  {
    name: "EKS",
    logoUrl: eksIcon, 
    href: "/ecosystem/eks", description: "AWS Elastic Kubernetes",
  },
  {
    name: "AKS",
    logoUrl: aksIcon,
    href: "/ecosystem/aks", description: "Azure Kubernetes Service",
  },
  {
    name: "GKE",
    logoUrl: gkeIcon,
    href: "/ecosystem/gke", description: "Google Kubernetes Engine",
  },
];

const compliance: Tech[] = [
  {
    name: "Kyverno",
    logoUrl: kyvernoIcon,
    href: "/ecosystem/kyverno", description: "K8s native policy mgmt",
  },
  {
    name: "Sysdig",
    logoUrl: sysdigIcon,
    href: "/ecosystem/sysdig", description: "Cloud security platform",
  },
];

const sso: Tech[] = [
  { name: "ORY",      logoUrl: oryIcon, href: "/ecosystem/ory",      description: "Open source identity"  },
  { name: "KeyCloak", logoUrl: keycloakIcon,  href: "/ecosystem/keycloak", description: "Identity & access mgmt" },
];

const keyMgmt: Tech[] = [
  {
    name: "Hashicorp Vault",
    logoUrl: vaultIcon,
    href: "/ecosystem/vault", description: "Secrets management",
  },
];

const monitoring: Tech[] = [
  {
    name: "Prometheus",
    logoUrl: prometheusIcon,
    href: "/ecosystem/prometheus", description: "Cloud-native monitoring",
  },
  {
    name: "ELK",
    logoUrl: elkIcon,
    href: "/ecosystem/elk", description: "Elastic log analytics",
  },
  {
    name: "Zabbix",
    logoUrl: zabbixIcon,
    href: "/ecosystem/zabbix", description: "Enterprise monitoring",
  },
];

const infrastructure: Tech[] = [
  {
    name: "Nutanix",
    logoUrl: nutanixIcon,
    href: "/ecosystem/nutanix", description: "Hyper-converged infrastructure",
  },
  {
    name: "Red Hat OpenShift",
    logoUrl: redhatIcon,
    href: "/ecosystem/openshift-infra", description: "Enterprise Kubernetes by Red Hat",
  },
];

const publicCloud: Tech[] = [
  {
    name: "AWS",
    logoUrl: awsIcon,
    href: "/ecosystem/aws", description: "Amazon Web Services",
  },
  {
    name: "Azure",
    logoUrl: azureIcon,
    href: "/ecosystem/azure", description: "Microsoft Azure",
  },
  {
    name: "GCP",
    logoUrl: gcpIcon,
    href: "/ecosystem/gcp", description: "Google Cloud Platform",
  },
];


const EcosystemPage: React.FC = () => {
  const width     = useWindowWidth();
  const isMobile  = width < 640;
  const isTablet  = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  
  const ColGroup = ({ groups }: { groups: { label: string; techs: Tech[]; s: number; size?: number }[] }) => (
    <>
      {groups.map(g => (
        <div key={g.label} style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <Pill label={g.label} />
          <IconRow techs={g.techs} size={g.size ?? 52} gap={12} staggerBase={g.s} />
        </div>
      ))}
    </>
  );

  return (
    <div style={{ background: PAGE_BG, minHeight: "100vh" }}>

     
      <section className="relative overflow-hidden text-center"
        style={{ paddingTop: isMobile ? 96 : 112, paddingBottom: isMobile ? 32 : 40, paddingLeft: 16, paddingRight: 16 }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(200,150,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,42,0.04) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }} />
        <motion.div className="absolute rounded-full pointer-events-none"
          style={{ top: 0, left: "30%", width: isMobile ? 300 : 720, height: isMobile ? 180 : 360,
            background: "radial-gradient(circle, rgba(200,150,42,0.07) 0%, transparent 70%)", filter: "blur(90px)" }}
          animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 7, repeat: Infinity }} />

        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-3 justify-center mb-4 sm:mb-5">
            <div className="h-px w-8 sm:w-14" style={{ background: `linear-gradient(90deg, transparent, ${GOLD_BORDER})` }} />
            <span style={{ fontSize: isMobile ? 9 : 10, fontWeight: 900, letterSpacing: "0.25em", color: `${GOLD}88`, textTransform: "uppercase" }}>Cloud Native Ecosystem</span>
            <div className="h-px w-8 sm:w-14" style={{ background: `linear-gradient(270deg, transparent, ${GOLD_BORDER})` }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-white mb-3 leading-tight"
            style={{ fontSize: isMobile ? "1.7rem" : "clamp(1.8rem, 4vw, 3rem)" }}>
            Our{" "}
            <span style={{ background: `linear-gradient(95deg,${GOLD},#d4752a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Technology Ecosystem
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
            style={{ fontSize: isMobile ? 12 : 14, color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.7 }}>
            Every tool across every layer — from container builds to multi-cloud.
            Click any technology to explore how we implement it.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center" style={{ gap: isMobile ? 24 : 40 }}>
            {[{ value: "9", label: "Ecosystem Layers" }, { value: "40+", label: "Technologies" }, { value: "3", label: "Public Clouds" }].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span className="font-black" style={{ fontSize: isMobile ? 20 : 26, background: `linear-gradient(95deg,${GOLD},#d4752a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.value}</span>
                <span style={{ fontSize: isMobile ? 9 : 10, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <div className="max-w-7xl mx-auto px-4 my-6 sm:my-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3">
          <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${GOLD_BORDER}88)` }} />
          <span style={{ fontSize: isMobile ? 9 : 12, fontWeight: 900, letterSpacing: "0.22em", color: `${GOLD}88`, textTransform: "uppercase", padding: "0 10px" }}>Architecture Diagram</span>
          <div className="h-px flex-1" style={{ background: `linear-gradient(270deg, transparent, ${GOLD_BORDER}88)` }} />
        </motion.div>
      </div>

      
      <section style={{ padding: `0 ${isMobile ? 12 : 16}px 60px` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          
          {isMobile && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <MobileSection title={"App Definition &\nImage Build"} delay={0.05}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <PillGroup label="Version Registry"   techs={versionRegistry}   size={46} staggerBase={0.05} />
                  <PillGroup label="Container Registry" techs={containerRegistry} size={46} staggerBase={0.1}  />
                  <PillGroup label="Automation"         techs={automation}        size={46} staggerBase={0.15} />
                </div>
              </MobileSection>
              <MobileSection title="Containerized Software Solutions" delay={0.08}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <PillGroup label="Database"              techs={databases}  size={46} staggerBase={0.05} />
                  <PillGroup label="Streaming & Messaging" techs={streaming}  size={46} staggerBase={0.1}  />
                  <PillGroup label="API Gateway"           techs={apiGateway} size={46} staggerBase={0.12} />
                </div>
              </MobileSection>
              <MobileSection title="Network & Security" delay={0.11}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <PillGroup label="Container Networking" techs={containerNetworking} size={46} staggerBase={0.05} />
                  <PillGroup label="Service Mesh"         techs={serviceMesh}         size={46} staggerBase={0.1}  />
                  <PillGroup label="Ingress"              techs={ingress}             size={46} staggerBase={0.15} />
                </div>
              </MobileSection>
              <MobileSection title="Container Platform" delay={0.14}>
                <IconRow techs={platform} size={48} gap={12} centered staggerBase={0.05} />
              </MobileSection>
              <MobileSection title="Application Security" delay={0.17}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <PillGroup label="Compliance"     techs={compliance} size={46} staggerBase={0.05} />
                  <PillGroup label="SSO"            techs={sso}        size={46} staggerBase={0.1}  />
                  <PillGroup label="Key Management" techs={keyMgmt}    size={46} staggerBase={0.15} />
                </div>
              </MobileSection>
              <MobileSection title={"Observability &\nAnalysis"} delay={0.2}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <Pill label="Monitoring & Logging" />
                  <IconRow techs={monitoring} size={46} gap={10} centered staggerBase={0.05} />
                </div>
              </MobileSection>
              <MobileSection title="Infrastructure Platform" delay={0.23}>
                <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
                  {infrastructure.map((t, i) => (
                    <motion.div key={t.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}>
                      <TechIcon tech={t} size={64} textSize={11} />
                    </motion.div>
                  ))}
                </div>
              </MobileSection>
              <MobileSection title="Public Cloud" delay={0.26}>
                <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
                  {publicCloud.map((t, i) => (
                    <motion.div key={t.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}>
                      <TechIcon tech={t} size={64} textSize={11} />
                    </motion.div>
                  ))}
                </div>
              </MobileSection>
            </div>
          )}

          
          {isTablet && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Box title={"App Definition &\nImage Build"} delay={0.05}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <ColGroup groups={[{ label: "Version Registry", techs: versionRegistry, s: 0.05, size: 46 }, { label: "Container Registry", techs: containerRegistry, s: 0.1, size: 46 }, { label: "Automation", techs: automation, s: 0.15, size: 46 }]} />
                  </div>
                </Box>
                <Box title="Containerized Software Solutions" delay={0.08}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <ColGroup groups={[{ label: "Database", techs: databases, s: 0.08, size: 44 }, { label: "Streaming & Messaging", techs: streaming, s: 0.12, size: 44 }, { label: "API Gateway", techs: apiGateway, s: 0.16, size: 44 }]} />
                  </div>
                </Box>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Box title="Network & Security" delay={0.1}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <ColGroup groups={[{ label: "Container Networking", techs: containerNetworking, s: 0.1, size: 44 }, { label: "Service Mesh", techs: serviceMesh, s: 0.14, size: 44 }, { label: "Ingress", techs: ingress, s: 0.18, size: 44 }]} />
                  </div>
                </Box>
                <Box title="Application Security" delay={0.12}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <ColGroup groups={[{ label: "Compliance", techs: compliance, s: 0.12, size: 44 }, { label: "SSO", techs: sso, s: 0.16, size: 44 }, { label: "Key Management", techs: keyMgmt, s: 0.2, size: 44 }]} />
                  </div>
                </Box>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Box title="Container Platform" delay={0.14}>
                  <IconRow techs={platform} size={50} gap={12} centered staggerBase={0.14} />
                </Box>
                <Box title={"Observability &\nAnalysis"} delay={0.16}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
                    <Pill label="Monitoring & Logging" />
                    <IconRow techs={monitoring} size={46} gap={10} centered staggerBase={0.16} />
                  </div>
                </Box>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Box title="Infrastructure Platform" delay={0.18}>
                  <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", minHeight: 100 }}>
                    {infrastructure.map((t, i) => <motion.div key={t.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 + i * 0.12 }}><TechIcon tech={t} size={68} textSize={11} /></motion.div>)}
                  </div>
                </Box>
                <Box title="Public Cloud" delay={0.2}>
                  <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", minHeight: 100 }}>
                    {publicCloud.map((t, i) => <motion.div key={t.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 + i * 0.12 }}><TechIcon tech={t} size={68} textSize={11} /></motion.div>)}
                  </div>
                </Box>
              </div>
            </div>
          )}

         
          {isDesktop && (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "210px 1fr 195px 215px", gap: 10 }}>

              
                <Box title={"App Definition &\nImage Build"} delay={0.05}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <ColGroup groups={[{ label: "Version Registry", techs: versionRegistry, s: 0.1 }, { label: "Container Registry", techs: containerRegistry, s: 0.15 }, { label: "Automation", techs: automation, s: 0.2 }]} />
                  </div>
                </Box>

              
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <Box title="Containerized Software Solutions" delay={0.1}>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                      <ColGroup groups={[{ label: "Database", techs: databases, s: 0.12 }, { label: "Streaming & Messaging", techs: streaming, s: 0.16 }, { label: "API Gateway", techs: apiGateway, s: 0.2 }]} />
                    </div>
                  </Box>
                  <Box title="Network & Security" delay={0.15}>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                      <ColGroup groups={[{ label: "Container Networking", techs: containerNetworking, s: 0.18 }, { label: "Service Mesh", techs: serviceMesh, s: 0.22 }, { label: "Ingress", techs: ingress, s: 0.26 }]} />
                    </div>
                  </Box>
                  <Box title="Container Platform" delay={0.2} style={{ flex: 1 }}>
                    <IconRow techs={platform} size={64} gap={18} centered staggerBase={0.22} />
                  </Box>
                </div>

                
                <Box title="Application Security" delay={0.15} style={{ height: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <ColGroup groups={[{ label: "Compliance", techs: compliance, s: 0.18, size: 50 }, { label: "SSO", techs: sso, s: 0.22, size: 50 }, { label: "Key Management", techs: keyMgmt, s: 0.26, size: 50 }]} />
                  </div>
                </Box>

                
                <Box title={"Observability &\nAnalysis"} delay={0.18} style={{ height: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <Pill label="Monitoring & Logging" />
                    <IconRow techs={monitoring} size={50} gap={12} centered staggerBase={0.22} />
                  </div>
                </Box>
              </div>

            
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
                <Box title="Infrastructure Platform" delay={0.28}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap", minHeight: 110 }}>
                    {infrastructure.map((t, i) => <motion.div key={t.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.32 + i * 0.12 }}><TechIcon tech={t} size={80} textSize={12} /></motion.div>)}
                  </div>
                </Box>
                <Box title="Public Cloud" delay={0.3}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap", minHeight: 110 }}>
                    {publicCloud.map((t, i) => <motion.div key={t.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.32 + i * 0.12 }}><TechIcon tech={t} size={80} textSize={12} /></motion.div>)}
                  </div>
                </Box>
              </div>
            </>
          )}

        </div>
      </section>

    </div>
  );
};

export default EcosystemPage;