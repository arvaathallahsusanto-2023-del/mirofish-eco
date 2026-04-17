"use client";

import { motion } from "framer-motion";

export default function SideVideos() {
  const videoUrl = "/videos/golden_age.mp4";

  return (
    <>
      {/* Right Video - Asymmetrical Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#020409]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale brightness-110 contrast-125"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Elegant Vignette & Cinematic Overlays */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020409] to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020409] to-transparent opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#020409_100%)] opacity-70" />
      </motion.div>
    </>
  );
}
