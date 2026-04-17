"use client";
// Version 1.0.4 - Production Background Video Visibility Fix

import { motion } from "framer-motion";
import { 
  Library, 
  Network, 
  Target, 
  Users, 
  Globe, 
  ArrowRight, 
  Brain, 
  Database,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import GlowButton from "@/components/GlowButton";
import BentoGrid, { BentoCard } from "@/components/BentoGrid";
import ResearchRepository from "@/components/ResearchRepository";
import IntellectualWeb from "@/components/IntellectualWeb";
import AIModal from "@/components/AIModal";
import ImpactModal from "@/components/ImpactModal";
import ConnectModal from "@/components/ConnectModal";
import SideVideos from "@/components/SideVideos";
import { useState } from "react";
import { SAMPLE_STAKEHOLDERS } from "@/lib/sample-data";

const stakeholders = [
  { label: "Akademisi", icon: Users, color: "text-cyan-400" },
  { label: "Regulator", icon: ShieldCheck, color: "text-emerald-400" },
  { label: "Industri", icon: Zap, color: "text-amber-400" },
  { label: "Masyarakat", icon: Group, color: "text-violet-400" }
];

// Helper for dynamic Group icon if lucide-react version differs
function Group(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" />
      <path d="M17 21v-2a4 4 0 0 0-4-4H11a4 4 0 0 0-4 4v2" />
      <circle cx="7" cy="10" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h1" />
      <circle cx="17" cy="10" r="3" />
      <path d="M21 21v-2a4 4 0 0 0-4-4h-1" />
    </svg>
  );
}

export default function Home() {
  const [isRepoOpen, setIsRepoOpen] = useState(false);
  const [isWebOpen, setIsWebOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isImpactOpen, setIsImpactOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);

  const openWebWithCluster = (cluster: string) => {
    setSelectedCluster(cluster);
    setIsWebOpen(true);
  };

  return (
    <div className="relative bg-glow-mesh">
      <SideVideos />
      <main className="min-h-screen bg-transparent selection:bg-cyan-500/30 overflow-x-hidden relative z-10">
        <Navbar />
      
      {/* ── HERO SECTION ── */}
      <section id="ecosystem" className="relative pt-60 pb-32 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "-4s" }} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-10 py-3 rounded-full glass-premium mb-12 animate-float border-cyan-500/30"
            >
               <div className="inline-flex items-center gap-2 text-cyan-400 text-[10px] font-black tracking-[0.4em] uppercase">
                <Star className="w-3.5 h-3.5 fill-cyan-400" />
                <span>The Global Elite Researcher Network</span>
              </div>
            </motion.div>

            <div className="mb-12">
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-white/30 uppercase block mb-4">
                Curated Architecture by Arva Athallah Susanto
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-7xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] mb-16 font-outfit"
            >
              THE GLOBAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 animate-gradient italic">
                EKSYAR HUB
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium opacity-80"
            >
              The world's most advanced intelligence mapping for Islamic Economics. 
              Connecting global stakeholders, tracing scientific impact, and optimizing sharia-compliant growth.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <GlowButton icon={ArrowRight} onClick={() => setIsWebOpen(true)}>
                Explore Ecosystem
              </GlowButton>
              <GlowButton variant="outline" onClick={() => setIsRepoOpen(true)}>
                Research Database
              </GlowButton>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass-premium"
          >
            {[
              { label: "Scientific Papers", val: "17+" },
              { label: "Active Citations", val: "85+" },
              { label: "Collaborators", val: "12" },
              { label: "Global Nodes", val: "24" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#020409]/40 backdrop-blur-md px-8 py-10 group hover:bg-white/[0.02] transition-colors">
                <div className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">{stat.val}</div>
                <div className="text-[10px] font-black text-cyan-400/60 tracking-[0.2em] uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RESEARCH ARCHITECTURE (BENTO) ── */}
      <section id="research" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 font-outfit">
              System <span className="text-cyan-400">Architecture</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our infrastructure is built to unify fragmented data into a cohesive knowledge graph.
            </p>
          </div>

          <BentoGrid>
            <div onClick={() => setIsWebOpen(true)} className="md:col-span-4 cursor-pointer">
              <BentoCard 
                className="h-full"
                title="Intellectual Web"
                description="A dynamic network of cross-referenced research papers, finding hidden connections between Islamic finance and modern economic challenges."
                icon={Network}
                colorClass="text-cyan-400"
                glowClass="group-hover:bg-cyan-500/5"
              />
            </div>
            <div onClick={() => setIsAIOpen(true)} className="md:col-span-2 cursor-pointer h-full">
              <BentoCard 
                className="h-full"
                title="AI Mapping"
                description="Semantic search and automated clustering of research themes."
                icon={Brain}
                colorClass="text-indigo-400"
                glowClass="group-hover:bg-indigo-500/5"
              />
            </div>
            <div onClick={() => setIsRepoOpen(true)} className="md:col-span-3 cursor-pointer">
              <BentoCard 
                className="h-full"
                title="Global Repository"
                description="Secure, decentralized access to the world's largest Islamic Economics thesis database across UI, IPB, UNAIR, and more."
                icon={Database}
                colorClass="text-emerald-400"
                glowClass="group-hover:bg-emerald-500/5"
              />
            </div>
            <div onClick={() => setIsImpactOpen(true)} className="md:col-span-3 cursor-pointer">
              <BentoCard 
                className="h-full"
                title="Impact Tracker"
                description="Monitor how research influences real-world policies and industrial growth."
                icon={Target}
                colorClass="text-amber-400"
                glowClass="group-hover:bg-amber-500/5"
              />
            </div>
          </BentoGrid>
        </div>
      </section>

      {/* ── STAKEHOLDER NETWORK ── */}
      <section id="stakeholders" className="py-32 px-6 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight font-outfit">
                United by <br/>
                <span className="text-indigo-400">Vision.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                Mirofish Eco bridges the gap between theoretical research and practical implementation by connecting four major stakeholder pillars.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {stakeholders.map((s) => (
                  <div 
                    key={s.label} 
                    onClick={() => openWebWithCluster(s.label)}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-pointer group"
                  >
                    <s.icon className={`w-10 h-10 ${s.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-bold text-sm tracking-widest uppercase group-hover:text-cyan-400 transition-colors">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Spinning rings */}
              <div className="absolute inset-0 border-[1px] border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-10 border-[1px] border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-20 border-[1px] border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
              
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center p-8 shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                <Globe className="w-full h-full text-black animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CROWD / WAITLIST SECTION (Mirofish Style) ── */}
      <section className="relative pt-40 pb-0 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-[-100px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6"
          >
            <span className="text-sm font-black text-white/80 uppercase tracking-[0.3em]">Join the Global Think-Tank</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 font-outfit uppercase tracking-tighter">
            Join the waitlist to get <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">notified at launch!</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            The World's largest Islamic Economics research network is scaling. 
            Connect with Prof. Dr. Imron Mawardi, Prof. Dr. Sri Herianingrum, and other global titans.
          </p>
        </div>

        {/* The Crowd Illustration */}
        <div className="relative w-full overflow-hidden mt-12 flex justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-[1800px] select-none pointer-events-none"
          >
            <img 
              src="/images/crowd.png" 
              alt="Researcher Crowd" 
              className="w-full h-auto object-cover grayscale brightness-150 contrast-125 mix-blend-screen opacity-60"
            />
            {/* Gradient Overlay for seamless blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent h-[40%] bottom-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-[10%] top-0" />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto p-16 rounded-[3rem] bg-gradient-to-br from-cyan-900/20 to-indigo-900/20 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 font-outfit">Join the Hub.</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              Become part of the most advanced Islamic Economics research network in the world.
            </p>
            <div className="flex justify-center">
              <GlowButton className="text-xl px-12 py-6" onClick={() => setIsConnectOpen(true)}>
                Connect Now
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Network className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-black tracking-widest uppercase">EKSYARHUB</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            © 2026 EksyarHub | Global Islamic Economics Research Hub. 
            <a href="https://www.instagram.com/arva_as/" target="_blank" rel="noopener noreferrer" className="ml-1 text-cyan-400 hover:text-cyan-300 transition-colors font-bold">
              Powered by arva_as
            </a>
          </p>
          <div className="flex gap-8">
            {["Twitter", "LinkedIn", "Github"].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors font-bold text-sm tracking-wide">{social}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ResearchRepository isOpen={isRepoOpen} onClose={() => setIsRepoOpen(false)} />
      <IntellectualWeb 
        isOpen={isWebOpen} 
        onClose={() => {
          setIsWebOpen(false);
          setSelectedCluster(null);
        }} 
        initialCluster={selectedCluster}
      />
      <AIModal isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      <ImpactModal isOpen={isImpactOpen} onClose={() => setIsImpactOpen(false)} />
      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
      </main>
    </div>
  );
}
