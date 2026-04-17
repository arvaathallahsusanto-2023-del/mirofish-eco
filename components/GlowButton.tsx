"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GlowButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function GlowButton({ 
  children, 
  icon: Icon, 
  variant = "primary", 
  className = "",
  onClick 
}: GlowButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 text-sm md:text-base
        ${isPrimary 
          ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]" 
          : "bg-white/5 border border-white/10 text-white hover:bg-white/10"}
        ${className}
      `}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />}
    </motion.button>
  );
}
