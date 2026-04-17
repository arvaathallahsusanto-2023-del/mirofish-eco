"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Brain, X, Cpu, Search, Sparkles } from "lucide-react";

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const clusters = [
  { name: "Islamic Fintech", count: 245, growth: "+12%", color: "bg-cyan-500" },
  { name: "Social Finance", count: 189, growth: "+8%", color: "bg-indigo-500" },
  { name: "Halal Industry", count: 312, growth: "+15%", color: "bg-emerald-500" },
  { name: "Monetary Policy", count: 124, growth: "+5%", color: "bg-purple-500" },
  { name: "Sharia Banking", count: 420, growth: "+4%", color: "bg-blue-500" },
];

export default function AIModal({ isOpen, onClose }: AIModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl bg-gradient-to-br from-black to-black border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col h-[75vh] shadow-[0_0_80px_rgba(34,211,238,0.1)]"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between relative z-10 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tight">AI Semantic Mapping</h2>
                  <p className="text-white/80 text-sm mt-1">Autonomous clustering of research themes using LLM Vector Embeddings.</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Visualization Content */}
            <div className="flex-1 p-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square flex items-center justify-center">
                {/* Visualizer rings */}
                <div className="absolute inset-0 border border-white/5 rounded-full animate-pulse" />
                <div className="absolute inset-12 border border-indigo-500/10 rounded-full animate-ping" />
                
                {/* Topic Nodes */}
                {clusters.map((c, i) => {
                  const angle = (i / clusters.length) * Math.PI * 2;
                  const dist = 140;
                  const x = Math.cos(angle) * dist;
                  const y = Math.sin(angle) * dist;
                  
                  return (
                    <motion.div
                      key={c.name}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, x, y }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                      className="absolute p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center gap-1 group cursor-pointer hover:border-indigo-400/50 transition-colors"
                    >
                      <div className={`w-3 h-3 rounded-full ${c.color} shadow-[0_0_10px_currentColor] mb-1`} />
                      <span className="text-[10px] font-bold text-white uppercase tracking-tighter whitespace-nowrap">{c.name}</span>
                      <span className="text-[9px] text-white/60 font-medium">{c.count} Papers</span>
                    </motion.div>
                  );
                })}

                <div className="w-24 h-24 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/40 relative z-20">
                  <Sparkles className="w-10 h-10 text-indigo-400 animate-pulse" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-400" />
                    Neural Insights
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed italic border-l-2 border-indigo-500/30 pl-4">
                    "The neural engine has identified a significant semantic overlap between <span className="text-indigo-400">Waqf Assets</span> and <span className="text-cyan-400">Sustainable Infrastructure</span> in 2024 publications, suggesting a shift towards long-term social impact."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {clusters.slice(0, 4).map(c => (
                    <div key={c.name} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-[10px] font-bold text-white/60 uppercase mb-1">{c.name}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black text-white">{c.count}</span>
                        <span className="text-[10px] text-emerald-400 font-bold">{c.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2">
                  <Search className="w-4 h-4" /> Run Deep Semantic Search
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
