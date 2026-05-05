"use client";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className={`${inter.className} text-[11px] tracking-[0.15em] text-[#4B5563] uppercase`}>
          © 2026 ShauryBisht— ALL RIGHTS RESERVED.
        </div>
        <div className={`${inter.className} flex items-center gap-3 text-[10px] tracking-[0.2em] text-[#4B5563] uppercase`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>SERVER STATUS: <span className="text-white/70">OPERATIONAL</span></span>
        </div>
        

      </div>
    </footer>
  );
}