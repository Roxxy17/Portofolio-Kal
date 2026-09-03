"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Muncul dengan geser halus plus blur yang menghilang.
// Pola ini diadaptasi dari komponen BlurFade pada template portfolio
// Dillion Verma (MIT), acuan desain situs ini.
const BlurFade = ({
  children,
  className = "",
  delay = 0,
  duration = 0.4,
  yOffset = 6,
  blur = "6px",
  inView = true,
  as = "div",
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inViewResult = useInView(ref, { once: true, margin: "-50px" });
  const show = !inView || inViewResult;

  const Tag = motion[as] || motion.div;

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      ref={ref}
      data-reveal
      className={className}
      initial={{ y: -yOffset, opacity: 0, filter: `blur(${blur})` }}
      animate={
        show
          ? { y: 0, opacity: 1, filter: "blur(0px)" }
          : { y: -yOffset, opacity: 0, filter: `blur(${blur})` }
      }
      transition={{ delay: 0.04 + delay, duration, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
};

export default BlurFade;
