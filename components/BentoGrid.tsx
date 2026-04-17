"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  colorClass?: string;
  glowClass?: string;
}

export function BentoCard({
  title,
  description,
  icon: Icon,
  className = "",
  colorClass = "text-cyan-400",
  glowClass = "group-hover:bg-cyan-500/10",
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/8 overflow-hidden glass-card ${className}`}
    >
      <div className={`absolute inset-0 ${glowClass} transition-colors duration-500 opacity-0 group-hover:opacity-100`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-${colorClass.split("-")[1]}-500/30 transition-colors`}>
          <Icon className={`w-6 h-6 ${colorClass}`} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/80 leading-relaxed text-sm md:text-base font-medium">
          {description}
        </p>
      </div>
      
      {/* Decorative arrow */}
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center ${colorClass}`}>
          →
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
      {children}
    </div>
  );
}
