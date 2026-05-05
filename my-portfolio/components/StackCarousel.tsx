"use client";
import React from "react";
import Image from "next/image";

const STACK_ITEMS = [
  { name: "Tailwind", color: "#00F5FF", icon: "/icons/tailwind.svg" },
  { name: "Typescript", color: "#FF5CFF", icon: "/icons/typescript.svg" },
  { name: "Git", color: "#F05032", icon: "/icons/git.svg" },
  { name: "Redis", color: "#D82C20", icon: "/icons/redis.svg" },
  { name: "Node.js", color: "#F24E1E", icon: "/icons/nodejs.svg" },
  { name: "React", color: "#61DAFB", icon: "/icons/React-icon.svg" },
   {name: "MongoDB", color: "#F24E1E", icon: "/icons/mongodb.svg" },
];

export function StackCarousel() {
  const doubledItems = [...STACK_ITEMS, ...STACK_ITEMS];

  return (
   
    <section className="w-full max-w-7xl mx-auto overflow-hidden group pt-20 pb-0">
      <div className="flex flex-col items-start gap-4 mb-25 px-6 lg:px-0">
        <h2 className="text-[48px] md:text-[64px] font-bold leading-none tracking-tight uppercase">
          <span className="text-[#E5E7EB]">Technical</span>{" "}
          <span className="bg-linear-to-r from-[#FF5CFF] to-[#00A3FF] bg-clip-text text-transparent">
            Stack
          </span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex gap-10 animate-infinite-scroll transform-gpu group-hover:[animation-play-state:paused]">
          {doubledItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-48 h-40 p-6 shrink-0 rounded-xl border border-white/5 bg-[#0D0D0D]/50 hover:border-white/10 hover:bg-[#111111] transition-all duration-300 group/item will-change-transform"
            >
             
              <div className="relative w-12 h-12 transition-all duration-500 rotate-12 group-hover/item:rotate-0 grayscale group-hover/item:grayscale-0 opacity-70 group-hover/item:opacity-100">
                <Image
                  src={item.icon}
                  alt={`${item.name} logo`}
                  fill
                  priority={index < STACK_ITEMS.length} 
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="mt-5 text-[10px] font-bold tracking-[0.25em] text-[#4B5563] uppercase transition-colors group-hover/item:text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}