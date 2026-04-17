"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Building, Mail, ChevronRight } from "lucide-react";
import { useState } from "react";
import GlowButton from "./GlowButton";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020409]/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-gradient-to-br from-[#0d1117] to-[#020409] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.1)]"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="p-10 text-center relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tight mb-2">Join the Ecosystem</h2>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                Connect your research with global regulators and industry experts. Be part of the change.
              </p>
            </div>

            <div className="px-10 pb-12 relative z-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-10 h-10 text-emerald-400" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                  <p className="text-gray-400 text-sm">Our network coordinators will review your profile and contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      required
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm"
                    />
                  </div>
                  
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                       required
                       type="text" 
                       placeholder="Institution (Uni, Bank, Govt)"
                       className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                       required
                       type="email" 
                       placeholder="Professional Email"
                       className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm"
                    />
                  </div>

                  <div className="pt-4">
                    <GlowButton className="w-full justify-center py-4 text-sm uppercase tracking-widest">
                      Request Invitation
                    </GlowButton>
                  </div>
                  
                  <p className="text-[10px] text-center text-gray-500">
                    By requesting an invitation, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white z-[70]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Background Glow */}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
