"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Garis tipis di puncak halaman yang menunjukkan posisi baca.
// Memakai useScroll, bukan listener scroll manual.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-foreground"
    />
  );
};

export default ScrollProgress;
