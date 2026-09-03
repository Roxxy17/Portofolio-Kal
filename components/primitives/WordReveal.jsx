"use client";

import { motion, useReducedMotion } from "framer-motion";

// Judul muncul kata demi kata. Dipakai sekali saja di hero, sebagai satu
// momen pembuka. Kalau dipakai di mana mana, efeknya justru jadi murah.
const WordReveal = ({ text, className = "", delay = 0 }) => {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <h1 className={className}>{text}</h1>;
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="shown"
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-1">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              shown: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};

export default WordReveal;
