"use client";

import { motion } from "framer-motion";

export default function SideVideos() {
  const videoUrl = "https://media.sf-converter.com/get?__sig=vGE5-NduEAkiByPV6bfs3A&__expires=1776452313&uri=https%3A%2F%2Fscontent-lga3-1.cdninstagram.com%2Fo1%2Fv%2Ft2%2Ff2%2Fm86%2FAQP5REalVQTn9yXa4zgShbRk2piXhAejpF1GmWxN7LSi9q9eIZuxcUG338ko61111H5lFGZfEQL43aWXoxjcvm2midMEqspjWzkMWmw.mp4%3F_nc_cat%3D111%26_nc_sid%3D5e9851%26_nc_ht%3Dscontent-lga3-1.cdninstagram.com%26_nc_ohc%3DJs65RuHxgnEQ7kNvwGbfuoB%26efg%3DeyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNTYwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjA3NTc1MDIwOTgyNzUxOSwiYXNzZXRfYWdlX2RheXMiOjk3LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTEsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%253D%253D%26ccb%3D17-1%26vs%3D28b078bc0d875202%26_nc_vs%3DHBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9EQTQyQzZFMzQzRkFDQTZGQkMxMkNGMjFFNTI5RjFBM192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYR2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xNjA1NzkwMDIwNDI5MTc1Xzg1ODU4NTQ3NjcyNzM3MTI0MzAubXA0FQICyAESACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJv7KsZ7I-K8HFQIoAkMzLBdAJhT987ZFohgSZGFzaF9iYXNlbGluZV8xX3YxEQB1_gdl5p0BAA%26_nc_gid%3DcFN543H9jSbkeJ81micTbQ%26_nc_zt%3D28%26_nc_ss%3D7a32e%26oh%3D00_Af0Casx3Skd6WOpktwcbylAI5lC-00Xbp6MzXAuyLxPN6Q%26oe%3D69E45DD4%26dl%3D1&filename=Islamic%20Golden%20Age%20menurut%20Mehdi%20HasanMehdi%20Hasan%E2%80%94jurnalis%20dan%20komentator%20politik%20Muslim%20Inggris.mp4&ua=-&referer=https%3A%2F%2Fwww.instagram.com%2F";

  return (
    <>
      {/* Right Video - Asymmetrical Style */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.45, x: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="fixed right-0 top-0 bottom-0 w-[55%] h-screen pointer-events-none z-0 overflow-hidden hidden xl:block"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale brightness-200 contrast-150 mix-blend-screen"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Cinematic masks for a 'rapi' blend - lightened for visibility */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/60 to-background" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,transparent_20%,#020409_90%)]" />
      </motion.div>
    </>
  );
}
