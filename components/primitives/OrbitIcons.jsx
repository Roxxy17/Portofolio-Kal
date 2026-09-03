"use client";

import { FaReact, FaNodeJs, FaPython, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const inner = [
  { Icon: FaReact, angle: 0 },
  { Icon: SiNextdotjs, angle: 120 },
  { Icon: SiTailwindcss, angle: 240 },
];

const outer = [
  { Icon: FaNodeJs, angle: 60 },
  { Icon: FaPython, angle: 180 },
  { Icon: FaLaravel, angle: 300 },
];

// Dua cincin ikon yang mengorbit potret dengan arah berlawanan.
// Tiap ikon diputar balik sebesar putaran cincinnya supaya tetap tegak
// dan tidak ikut jungkir balik.
const Ring = ({ items, radius, duration, reverse = false }) => (
  <div
    className="orbit pointer-events-none absolute inset-0"
    style={{
      animationDuration: duration,
      animationDirection: reverse ? "reverse" : "normal",
    }}
  >
    {items.map(({ Icon, angle }, index) => (
      // Tiga lapis dengan tugas terpisah, supaya transform tidak saling
      // menimpa: penempatan pada cincin, pemusatan, lalu rotasi balik.
      <span
        key={index}
        className="absolute left-1/2 top-1/2"
        style={{ transform: `rotate(${angle}deg) translateY(-${radius}px)` }}
      >
        <span className="block -translate-x-1/2 -translate-y-1/2">
          <span
            className="orbit-counter block"
            style={{
              animationDuration: duration,
              animationDirection: reverse ? "normal" : "reverse",
            }}
          >
            <span className="grid size-8 place-items-center rounded-full border bg-background text-muted-foreground shadow-sm">
              <Icon className="size-4" />
            </span>
          </span>
        </span>
      </span>
    ))}
  </div>
);

const OrbitIcons = () => (
  <>
    {/* Jari jari dijaga di bawah 128px supaya kedua cincin tetap berada
        di dalam kotak 256px dan tidak menabrak teks di sekitarnya. */}
    <Ring items={inner} radius={84} duration="26s" />
    <Ring items={outer} radius={112} duration="38s" reverse />
  </>
);

export default OrbitIcons;
