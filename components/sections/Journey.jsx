"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import BlurFade from "@/components/primitives/BlurFade";
import { journey } from "@/lib/content";

// Garis vertikal yang terisi mengikuti gulir. Gerakan ini punya alasan:
// ia menggambarkan perjalanan waktu yang sedang dibaca.
const Journey = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey">
      <div className="flex flex-col gap-6">
        <BlurFade>
          <h2 className="section-heading">{journey.heading}</h2>
        </BlurFade>
        <BlurFade delay={0.04}>
          <p className="text-muted-foreground">{journey.intro}</p>
        </BlurFade>

        <div ref={ref} className="relative pl-8">
          {/* Rel abu sebagai dasar, lalu garis gelap yang tumbuh saat digulir */}
          <span
            aria-hidden="true"
            className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-px bg-border"
          />
          {!reduce ? (
            <motion.span
              aria-hidden="true"
              style={{ scaleY }}
              className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-foreground"
            />
          ) : null}

          <ol className="flex flex-col gap-8">
            {journey.items.map((item, index) => (
              <BlurFade key={item.year} delay={index * 0.05} as="li">
                <div className="group relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-8 top-1.5 grid size-[19px] place-items-center rounded-full border bg-background transition-transform duration-300 group-hover:scale-125"
                  >
                    <span className="size-1.5 rounded-full bg-foreground" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                      {item.year}
                    </span>
                    <h3 className="font-semibold leading-none">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Journey;
