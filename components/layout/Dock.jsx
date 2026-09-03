"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FiHome } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { socials } from "@/lib/content";

// Pembesaran ala dock macOS: makin dekat kursor, makin besar ikonnya.
// Semuanya dihitung lewat motion value, jadi tidak ada render ulang React
// saat mouse bergerak.
const DockItem = ({ mouseX, children, ...props }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds || value === Infinity) return 200;
    return value - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(distance, [-120, 0, 120], [40, 58, 40]);
  const size = useSpring(sizeSync, { stiffness: 260, damping: 20, mass: 0.2 });

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { width: size, height: size }}
      className="grid place-items-center"
    >
      <div {...props}>{children}</div>
    </motion.div>
  );
};

const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  const active = socials.filter((item) => item.href);

  return (
    <motion.nav
      aria-label="Quick links"
      onMouseMove={(event) => mouseX.set(event.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="dock"
    >
      <DockItem mouseX={mouseX}>
        <Link href="#hero" aria-label="Back to top" className="dock-item">
          <FiHome aria-hidden="true" className="h-[18px] w-[18px]" />
        </Link>
      </DockItem>

      {active.length ? <span className="dock-divider" aria-hidden="true" /> : null}

      {active.map(({ icon: Icon, label, href }) => (
        <DockItem key={label} mouseX={mouseX}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="dock-item"
          >
            <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
          </Link>
        </DockItem>
      ))}

      <span className="dock-divider" aria-hidden="true" />

      <DockItem mouseX={mouseX}>
        <ThemeToggle />
      </DockItem>
    </motion.nav>
  );
};

export default Dock;
