"use client";

import { motion } from "framer-motion";

export default function SideVideos() {
  const videoUrl = "/videos/golden_age.mp4";

  return (
    <>
      {/* Right Video - Asymmetrical Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale brightness-150 contrast-125 mix-blend-screen"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Cinematic masks for a 'rapi' blend - Full Background adaptation */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020409_100%)] opacity-40" />
      </motion.div>
    </>
  );
}
