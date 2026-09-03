"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaLaravel,
  FaVuejs,
  FaDatabase,
  FaPhp,
  FaJsSquare,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFlutter, SiKotlin } from "react-icons/si";

// Ikon yang hanyut di margin kiri dan kanan. Tiap ikon bergerak dengan
// kecepatan berbeda saat digulir, jadi ruang kosong di tepi punya kedalaman
// tanpa mengganggu kolom baca. Hanya muncul di layar sangat lebar.
const items = [
  { Icon: FaReact, side: "left", top: "12%", offset: -120, size: "size-10" },
  { Icon: SiNextdotjs, side: "right", top: "18%", offset: 180, size: "size-7" },
  { Icon: SiTailwindcss, side: "left", top: "32%", offset: 220, size: "size-11" },
  { Icon: FaNodeJs, side: "right", top: "38%", offset: -160, size: "size-8" },
  { Icon: FaVuejs, side: "left", top: "52%", offset: -200, size: "size-7" },
  { Icon: FaLaravel, side: "right", top: "58%", offset: 140, size: "size-11" },
  { Icon: FaPython, side: "left", top: "70%", offset: 190, size: "size-8" },
  { Icon: SiFlutter, side: "right", top: "76%", offset: -130, size: "size-7" },
  { Icon: FaDatabase, side: "left", top: "88%", offset: -170, size: "size-7" },
  { Icon: SiKotlin, side: "right", top: "92%", offset: 150, size: "size-8" },
  { Icon: FaPhp, side: "left", top: "24%", offset: 130, size: "size-6" },
  { Icon: FaJsSquare, side: "right", top: "66%", offset: -190, size: "size-6" },
];

const Drifter = ({ Icon, side, top, offset, size, progress }) => {
  const y = useTransform(progress, [0, 1], [0, offset]);
  const rotate = useTransform(progress, [0, 1], [0, offset > 0 ? 40 : -40]);

  return (
    <motion.span
      style={{ y, rotate, top }}
      className={`absolute ${
        side === "left" ? "left-[3%] 2xl:left-[7%]" : "right-[3%] 2xl:right-[7%]"
      }`}
    >
      <Icon className={`${size} text-foreground/[0.12]`} />
    </motion.span>
  );
};

const DriftingIcons = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (reduce) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden xl:block"
    >
      {items.map((item, index) => (
        <Drifter key={index} {...item} progress={scrollYProgress} />
      ))}
    </div>
  );
};

export default DriftingIcons;
