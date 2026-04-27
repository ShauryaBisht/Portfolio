"use client";
import { Space_Grotesk,Inter } from "next/font/google";
import { useRef } from "react";
import { ProjectCarousel } from "./ProjectCarousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
})
const inter = Inter({ subsets: ["latin"] })
export function Projects() {
 
  const carouselRef = useRef<{ scroll: (dir: "left" | "right") => void }>(null);

  return (
    <section className="flex flex-col items-start justify-start w-full max-w-7xl gap-20 mx-auto mt-32 ">
      <div className="flex w-full items-end justify-between">
        <div className="flex flex-col gap-4">
          <h2 className={`${spaceGrotesk.className} text-[64px] font-bold leading-none uppercase`}>
            <span className="text-[#E5E7EB]">Featured</span>{' '}
            <span className="bg-linear-to-r from-[#00F5FF] to-[#00A3FF] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`${inter.className} text-[18px] text-[#9CA3AF] max-w-125`}>
            A curated collection of digital products, experiments, and technical deep-dives.
          </p>
        </div>
        <div className="flex gap-4 mb-2">
          <button onClick={() => carouselRef.current?.scroll("left")} className="p-4 border border-white/10 hover:bg-white/5 cursor-pointer">
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button onClick={() => carouselRef.current?.scroll("right")} className="p-4 border border-white/10 hover:bg-white/5 cursor-pointer">
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
      <ProjectCarousel ref={carouselRef} />
    </section>
  );
}