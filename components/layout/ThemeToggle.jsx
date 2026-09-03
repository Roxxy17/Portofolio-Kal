"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

// Pengalih tema sederhana tanpa dependensi tambahan. Nilai awal sudah
// dipasang oleh skrip inline di layout, jadi tidak ada kedipan saat muat.
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch (err) {
      // Mode privat memblokir localStorage. Tema tetap berganti untuk sesi ini.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="dock-item"
      aria-label={
        mounted && theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {mounted && theme === "dark" ? (
        <FiMoon aria-hidden="true" className="h-[18px] w-[18px]" />
      ) : (
        <FiSun aria-hidden="true" className="h-[18px] w-[18px]" />
      )}
    </button>
  );
};

export default ThemeToggle;
