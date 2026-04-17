import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SideVideos() {
  const videoUrl = "/videos/golden_age.mp4";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Autoplay blocked or failed:", err);
      });
    }
  }, []);

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
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale brightness-125 contrast-[1.15] saturate-0"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Elegant Vignette & Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
        
        {/* Cinematic Noise/Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grain-y.com/images/grain.png')]" />
        
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
    </>
  );
}
