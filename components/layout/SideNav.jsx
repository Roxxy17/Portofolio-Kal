"use client";

import Link from "next/link";
import { navLinks } from "@/lib/content";
import { useActiveSection } from "@/lib/useActiveSection";

const ids = navLinks.map((link) => link.href.slice(1));

// Navigasi rail kiri. Garis pendek di kiri label memanjang saat section
// itu sedang dibaca, jadi posisi baca terlihat tanpa perlu label tambahan.
const SideNav = () => {
  const active = useActiveSection(ids);

  return (
    <nav aria-label="Section navigation" className="hidden xl:block">
      <ul className="flex flex-col gap-1">
        {navLinks.map((link) => {
          const isActive = link.href.slice(1) === active;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-3 py-1.5"
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-10 bg-foreground"
                      : "w-5 bg-border group-hover:w-8 group-hover:bg-muted-foreground"
                  }`}
                />
                <span
                  className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNav;
