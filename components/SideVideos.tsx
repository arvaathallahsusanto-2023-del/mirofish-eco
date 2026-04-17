"use client";

import { motion } from "framer-motion";

export default function SideVideos() {
  const videoUrl = "/videos/golden_age.mp4";

  return (
    <>
      {/* Right Video - Asymmetrical Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
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
        {/* Cinematic masks for a 'rapi' blend - Refined Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020409_85%)] opacity-80" />
      </motion.div>
    </>
  );
}
