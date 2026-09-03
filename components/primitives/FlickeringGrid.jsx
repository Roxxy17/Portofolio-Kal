"use client";

import { useEffect, useRef } from "react";

// Kisi titik di kanvas yang berkedip pelan. Digambar di canvas, bukan DOM,
// supaya ribuan sel tidak membebani layout. Berhenti sendiri saat keluar
// layar dan saat pengguna minta gerak dikurangi.
const FlickeringGrid = ({
  squareSize = 3,
  gridGap = 8,
  flickerChance = 0.28,
  maxOpacity = 0.22,
  className = "",
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let squares = null;
    let frame = 0;
    let last = 0;
    let visible = true;

    // Warna diambil dari token tema supaya ikut berganti terang dan gelap
    const readColor = () => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--grid-rgb")
        .trim();
      return value || "0, 0, 0";
    };
    let rgb = readColor();

    const setup = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.floor(width / (squareSize + gridGap));
      rows = Math.floor(height / (squareSize + gridGap));
      squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
    };

    // Opasitas dibulatkan ke beberapa tingkat, lalu sel digambar per tingkat.
    // Mengganti fillStyle ribuan kali per frame adalah bagian termahal di
    // canvas, cara ini menekannya jadi sekali per tingkat saja.
    const LEVELS = 6;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const step = squareSize + gridGap;

      for (let level = 1; level <= LEVELS; level++) {
        ctx.fillStyle = `rgba(${rgb}, ${(level / LEVELS) * maxOpacity})`;
        ctx.beginPath();
        let drew = false;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const value = squares[i * rows + j];
            const bucket = Math.ceil((value / maxOpacity) * LEVELS);
            if (bucket !== level) continue;
            ctx.rect(i * step, j * step, squareSize, squareSize);
            drew = true;
          }
        }

        if (drew) ctx.fill();
      }
    };

    const tick = (time) => {
      if (!visible) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const delta = (time - last) / 1000;
      if (delta > 0.06) {
        last = time;
        for (let i = 0; i < squares.length; i++) {
          if (Math.random() < flickerChance * delta * 8) {
            squares[i] = Math.random() * maxOpacity;
          }
        }
        draw();
      }
      frame = requestAnimationFrame(tick);
    };

    setup();
    draw();

    if (!reduce) {
      frame = requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      setup();
      draw();
    });
    resizeObserver.observe(container);

    // Ikut berganti warna ketika tema diubah lewat dock
    const themeObserver = new MutationObserver(() => {
      rgb = readColor();
      draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      themeObserver.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, maxOpacity]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};

export default FlickeringGrid;
