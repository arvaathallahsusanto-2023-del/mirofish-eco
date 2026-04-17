"use client";

import { motion } from "framer-motion";
import { Network, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Research", href: "#research" },
  { name: "Stakeholders", href: "#stakeholders" },
  { name: "Global Hub", href: "#global" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020409]/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Network className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-black tracking-widest text-white font-outfit uppercase">EKSYARHUB</span>
            <span className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] font-inter uppercase">Islamic Economics Research Network</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-300 tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <button className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-[#020409] border-b border-white/5 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-black font-bold rounded-xl">
            Join Network
          </button>
        </motion.div>
      )}
    </nav>
  );
}
