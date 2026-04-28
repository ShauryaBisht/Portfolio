"use client";
import React from "react";

const STACK_ITEMS = [
  { name: "Tailwind", color: "#00F5FF" },
  { name: "GraphQL", color: "#FF5CFF" },
  { name: "Git", color: "#F05032" },
  { name: "Redis", color: "#D82C20" },
  { name: "Figma", color: "#F24E1E" },
  { name: "React", color: "#61DAFB" },
];

export function StackCarousel() {
  const doubledItems = [...STACK_ITEMS, ...STACK_ITEMS];

  return (
    <section className="w-full max-w-7xl mx-auto overflow-hidden group  py-20">
      <div className="flex flex-col items-start gap-4 mb-20 md:mt-30">
        <h2 className="text-[64px] font-bold leading-none tracking-tight uppercase">
          <span className="text-[#E5E7EB]">Technical</span>{" "}
          <span className="bg-linear-to-r from-[#FF5CFF] to-[#00A3FF] bg-clip-text text-transparent">
            Stack
          </span>
        </h2>
        <p className="text-[18px] text-[#9CA3AF] max-w-125">
          Constantly evolving and learning new technologies to build better software.
        </p>
      </div>

      <div className="flex gap-10 animate-infinite-scroll group-hover:[--play-state:paused]">
        {doubledItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-50 h-40 p-6 shrink-0 rounded-xl border border-white/5 bg-[#0D0D0D]/50 hover:border-white/10 hover:bg-[#111111] transition-all duration-300 group/item"
          >
            <div
              className="w-12 h-12 border-2 border-current rounded-lg rotate-12 transition-all duration-500 group-hover/item:rotate-0 opacity-70 group-hover/item:opacity-100"
              style={{ color: item.color }}
            />
            <span className="mt-5 text-[10px] font-bold tracking-[0.25em] text-[#4B5563] uppercase transition-colors group-hover/item:text-white">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}