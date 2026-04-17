"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, GraduationCap, X, Calendar } from "lucide-react";
import { SAMPLE_RESEARCH } from "@/lib/sample-data";

export default function ResearchRepository({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredResearch = SAMPLE_RESEARCH.filter(r => 
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.university.toLowerCase().includes(search.toLowerCase()) ||
    r.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl bg-black border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col h-[85vh] shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02] relative z-20">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Search className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tight">Research Repository</h2>
                  <p className="text-white/80 text-sm mt-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Verified publications by <span className="text-white font-bold">AA Susanto</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search - Sticky */}
            <div className="p-8 bg-[#0d1117] border-b border-white/5 relative z-10">
              <div className="relative group max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-cyan-400 transition-colors" />
                <input 
                  type="text"
                  placeholder="Filter and search research index..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-8 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-medium text-lg glass-card"
                />
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-grid-pattern">
              {filteredResearch.length > 0 ? (
                filteredResearch.map((res) => (
                  <motion.div
                    key={res.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`
                      relative p-8 rounded-3xl border transition-all duration-300 group
                      ${expandedId === res.id 
                        ? "bg-white/10 border-cyan-500/50 shadow-[0_0_40px_rgba(34,211,238,0.1)]" 
                        : "bg-white/[0.03] border-white/5 hover:border-white/20"}
                    `}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="space-y-4 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest border border-cyan-500/20">
                            {res.area}
                          </span>
                          <span className="flex items-center gap-1.5 text-gray-500 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full">
                            <Calendar className="w-3.5 h-3.5" /> {res.year}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-black text-white leading-tight font-outfit">
                          {res.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                          <span className="flex items-center gap-2 font-bold text-gray-300">
                            <BookOpen className="w-4.5 h-4.5 text-cyan-400" /> {res.author}
                          </span>
                          <span className="flex items-center gap-2 font-medium">
                            <GraduationCap className="w-4.5 h-4.5 text-white/40" /> {res.university}
                          </span>
                        </div>

                        <AnimatePresence>
                          {expandedId === res.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 mt-6 border-t border-white/10">
                                <h4 className="text-xs font-black text-cyan-400 uppercase tracking-[0.2em] mb-3">Abstract</h4>
                                <p className="text-white/80 leading-relaxed font-medium italic">
                                  "{res.abstract}"
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <button 
                        onClick={() => setExpandedId(expandedId === res.id ? null : res.id)}
                        className={`
                          whitespace-nowrap px-6 py-3 rounded-xl text-sm font-bold transition-all border flex items-center gap-2
                          ${expandedId === res.id 
                            ? "bg-white text-black border-white" 
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white hover:text-black hover:border-white"}
                        `}
                      >
                        {expandedId === res.id ? "Close Abstract" : "Read Abstract"}
                        <motion.div
                          animate={{ rotate: expandedId === res.id ? 180 : 0 }}
                        >
                          →
                        </motion.div>
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 py-32">
                  <span className="text-6xl mb-6 opacity-20">🔍</span>
                  <p className="text-2xl font-bold font-outfit tracking-tight">No matching research found.</p>
                </div>
              )}
            </div>

            {/* Footer / Source */}
            <div className="p-8 bg-white/[0.02] border-t border-white/5 flex items-center justify-between relative z-20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] text-white/60 font-black uppercase tracking-[0.2em]">Verified Academic Index</span>
              </div>
              <a 
                href="https://scholar.google.com/citations?user=7gI4mGYAAAAJ&hl=id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] text-white font-black uppercase tracking-[0.2em] hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300"
              >
                Google Scholar Profile ↗
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
