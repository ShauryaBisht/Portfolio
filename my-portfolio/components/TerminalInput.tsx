"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

interface TerminalInputProps {
  label: string;
  placeholder: string;
  textarea?: boolean;
  type?: string;
}

const CYAN_ACCENT = "#00F5FF";

export function TerminalInput({ label, placeholder, textarea = false, type = "text" }: TerminalInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  
  const commonClasses = `${inter.className} w-full text-[14px] leading-relaxed text-white placeholder:text-[#4B5563] outline-hidden focus:outline-hidden transition-all duration-300`;
  return (
    <div className="relative flex-1 group" style={{ minWidth: textarea ? '100%' : '200px' }}>
      
     
      <label className={`${inter.className} absolute top-1 left-1.5 text-[10px] font-bold tracking-[0.25em] uppercase transition-colors z-20`}
             style={{ color: isFocused ? CYAN_ACCENT : '#4B5563' }}>
        {label}
      </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          className={`${commonClasses} h-37.5 p-5 pt-7 resize-none border border-[#1F2937] hover:border-white/10 bg-[#111111] focus:bg-[#141414] rounded-lg`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`${commonClasses} h-[64px] px-5 pt-7 border border-[#1F2937] hover:border-white/10 bg-[#111111] focus:bg-[#141414] rounded-lg`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}
      <div className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-500 z-10"
           style={{ 
             boxShadow: `0 0 16px ${CYAN_ACCENT}15`, 
             opacity: isFocused ? 1 : 0.2, 
             filter: isFocused ? 'blur(1px)' : 'none' 
           }} />
    </div>
  );
}