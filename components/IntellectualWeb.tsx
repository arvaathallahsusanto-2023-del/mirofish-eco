"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Network, X, Users, MessageSquareShare, Map as MapIcon } from "lucide-react";
import { SAMPLE_STAKEHOLDERS, SAMPLE_CONNECTIONS } from "@/lib/sample-data";

export default function IntellectualWeb({ 
  isOpen, 
  onClose,
  initialCluster
}: { 
  isOpen: boolean, 
  onClose: () => void,
  initialCluster?: string | null
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020409]/95 backdrop-blur-3xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl bg-gradient-to-br from-[#0d1117] to-[#020409] border border-white/10 rounded-3xl md:rounded-[3rem] overflow-hidden flex flex-col h-[90vh] md:h-[85vh] shadow-[0_0_100px_rgba(34,211,238,0.15)]"
          >
            {/* Header */}
            <div className="p-4 md:p-8 border-b border-white/5 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Network className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-4xl font-black text-white font-outfit uppercase tracking-tight">Intellectual Web</h2>
                  <p className="text-gray-400 text-[10px] md:text-sm mt-0.5 md:mt-1 hidden sm:block">Mapping the interconnected synergy of stakeholders.</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 md:p-3 hover:bg-white/10 rounded-full transition-colors text-white"
                aria-label="Close"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Visualization Area */}
            <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-grid-pattern bg-fixed pt-16 md:pt-24 pb-12">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020409] via-transparent to-transparent pointer-events-none" />
              <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[80px] md:blur-[120px]" />
              
              {/* Network SVG Layer - Arrows between nodes */}
              <svg className="absolute inset-0 w-full h-full z-10 overflow-visible pointer-events-none">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="rgba(34, 211, 238, 0.4)" />
                  </marker>
                </defs>
                
                {SAMPLE_STAKEHOLDERS.map((s1, i) => {
                  return SAMPLE_STAKEHOLDERS.map((s2, j) => {
                    // Only connect professors or specific connections
                    if (i < j && (s1.cluster === "Expert Professor" && s2.cluster === "Expert Professor")) {
                      const dist = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 260;
                      const a1 = (i / SAMPLE_STAKEHOLDERS.length) * Math.PI * 2;
                      const a2 = (j / SAMPLE_STAKEHOLDERS.length) * Math.PI * 2;
                      
                      const centerX = "50%";
                      const centerY = "50%";
                      
                      // We need relative coordinates from center
                      const x1 = Math.cos(a1) * dist;
                      const y1 = Math.sin(a1) * dist;
                      const x2 = Math.cos(a2) * dist;
                      const y2 = Math.sin(a2) * dist;

                      return (
                        <motion.path
                          key={`link-${i}-${j}`}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 2, delay: 1 }}
                          d={`M calc(50% + ${x1}px) calc(50% + ${y1}px) L calc(50% + ${x2}px) calc(50% + ${y2}px)`}
                          stroke="rgba(34, 211, 238, 0.2)"
                          strokeWidth="1"
                          fill="none"
                          marker-end="url(#arrowhead)"
                          className="drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                        />
                      );
                    }
                    return null;
                  });
                })}
              </svg>

              {/* Central Node - DISAPPEARS WHEN CLUSTER IS SELECTED */}
              {!initialCluster && (
                <motion.div 
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-20 w-20 h-20 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.3)]"
                >
                  <MapIcon className="w-10 h-10 md:w-16 md:h-16 text-black" />
                  <span className="absolute -bottom-8 md:-bottom-10 whitespace-nowrap text-white font-black text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase">Core</span>
                </motion.div>
              )}

              {/* Stakeholder Nodes (Floating around center) */}
              {SAMPLE_STAKEHOLDERS.map((s, i) => {
                const angle = (i / SAMPLE_STAKEHOLDERS.length) * Math.PI * 2;
                // Responsive distance
                const distance = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 260;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                return (
                  <motion.div
                    key={s.id}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x, y, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 1, type: "spring" }}
                    whileHover={{ scale: 1.1, zIndex: 30 }}
                    className={`absolute p-2 md:p-4 rounded-xl md:rounded-2xl border backdrop-blur-xl cursor-help group transition-all duration-500
                      ${initialCluster === s.cluster 
                        ? "bg-cyan-500/20 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] z-40 scale-110" 
                        : "bg-white/5 border-white/10"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className={`relative w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden border-2
                        ${initialCluster === s.cluster ? "border-cyan-400 glow-cyan" : "border-white/20"}
                      `}>
                        {s.imageUrl ? (
                          <img src={s.imageUrl} alt={s.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center text-[8px] md:text-xs font-black
                            ${initialCluster === s.cluster ? "bg-cyan-400 text-black" : "bg-cyan-500/10 text-cyan-400"}
                          `}>
                            {s.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="max-w-[100px] md:max-w-[160px]">
                        <p className="text-white font-black text-[10px] md:text-[13px] leading-tight font-outfit line-clamp-1">{s.name}</p>
                        <p className={`text-[7px] md:text-[9px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-black mt-0.5 md:mt-1
                          ${initialCluster === s.cluster ? "text-cyan-400" : "text-cyan-400/60"}
                        `}>
                          {s.role.split(' ')[0]}
                        </p>
                      </div>
                    </div>
                    
                    {/* Tooltip Content - Hidden on mobile to prevent clutter */}
                    <div className="absolute top-full left-0 mt-4 w-48 p-4 rounded-xl bg-[#0d1117] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block pointer-events-none z-50">
                      <p className="text-xs text-gray-300 italic font-medium">"{s.role}"</p>
                      <div className="mt-2 flex items-center gap-2 text-[10px] text-cyan-400 font-bold uppercase">
                        <MessageSquareShare className="w-3 h-3" /> Connected
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer / Legend - Optimized for mobile */}
            <div className="p-4 md:p-8 bg-white/[0.02] border-t border-white/5 flex flex-wrap items-center justify-center gap-4 md:gap-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[8px] md:text-xs font-bold text-white/60 tracking-widest uppercase">Nodes: {SAMPLE_STAKEHOLDERS.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-indigo-400" />
                <span className="text-[8px] md:text-xs font-bold text-white/60 tracking-widest uppercase">Connected</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
