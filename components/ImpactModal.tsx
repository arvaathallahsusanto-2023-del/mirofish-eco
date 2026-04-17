"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Target, X, BarChart3, TrendingUp, Globe, FileText } from "lucide-react";

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const metrics = [
  { label: "Policy Citations", value: "842", growth: "+12.5%", icon: FileText, color: "text-amber-400" },
  { label: "Industrial App", value: "124", growth: "+22.1%", icon: TrendingUp, color: "text-emerald-400" },
  { label: "Global Reach", value: "45", sub: "Countries", icon: Globe, color: "text-cyan-400" },
];

export default function ImpactModal({ isOpen, onClose }: ImpactModalProps) {
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
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl bg-black border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col h-[80vh] shadow-[0_0_80px_rgba(34,211,238,0.1)]"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tight">Impact Tracker v2.0</h2>
                  <p className="text-white/80 text-sm mt-1">Measuring the tangible influence of research on global Islamic Economic policy.</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-8 overflow-y-auto">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {metrics.map((m) => (
                  <div key={m.label} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors group">
                    <div className="flex items-center justify-between mb-4">
                      <m.icon className={`w-6 h-6 ${m.color}`} />
                      {m.growth && <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg">{m.growth}</span>}
                    </div>
                    <div className="text-3xl font-black text-white mb-1">{m.value}</div>
                    <div className="text-xs font-bold text-white/60 uppercase tracking-widest leading-none">{m.label}</div>
                    {m.sub && <div className="text-[10px] text-gray-600 mt-1">{m.sub}</div>}
                  </div>
                ))}
              </div>

              {/* Chart Mockup */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-white flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-cyan-400" />
                      Publication vs. Policy Adoption
                    </h3>
                  </div>
                  
                  <div className="h-48 flex items-end gap-2 px-4">
                    {[40, 60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        className={`flex-1 rounded-t-lg ${i % 2 === 0 ? 'bg-cyan-500/40' : 'bg-amber-500/40'} border-t border-white/20 hover:opacity-100 opacity-60 transition-opacity`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 px-2">
                    {['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'].map(y => (
                      <span key={y} className="text-[8px] font-bold text-gray-600 tracking-tighter">{y}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.2em]">Latest Impact Cases</h3>
                  {[
                    { title: "KNKS Implementation Framework", src: "UI Researcher", impact: "High" },
                    { title: "Zakat Digitalization Roadmap", src: "BAZNAS / IPB", impact: "Critical" },
                    { title: "Halal Ecosystem Standardization", src: "UNAIR / Govt", impact: "Medium" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                      <div>
                        <div className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">{item.title}</div>
                        <div className="text-[10px] text-gray-500 font-medium">Source: {item.src}</div>
                      </div>
                      <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${item.impact === 'Critical' ? 'bg-red-500/10 text-red-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
                        {item.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
