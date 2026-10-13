"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="splash-screen"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      aria-label="Loading Amit Kumar Portfolio"
    >
      <motion.div
        className="splash-brand-wrap"
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="splash-brand">AK.Portfolio</span>
        <span className="splash-subtitle">
          · React.js · Full-Stack · Flutter
        </span>
      </motion.div>

      <div className="splash-progress" aria-hidden="true">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
