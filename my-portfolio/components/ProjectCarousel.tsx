"use client";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    title: "Quantix Analytics",
    category: "SaaS",
    categoryColor: "#00F5FF",
    description: "High-performance dashboard for real-time crypto analytics and automated trading strategies.",
    tech: ['Next.js', 'Rust', 'Postgres'],
    linkText: "View Case Study"
  },
  {
    title: "Quantix Analytics",
    category: "SaaS",
    categoryColor: "#00F5FF",
    description: "High-performance dashboard for real-time crypto analytics and automated trading strategies.",
    tech: ['Next.js', 'Rust', 'Postgres'],
    linkText: "View Case Study"
  },
  {
    title: "Quantix Analytics",
    category: "SaaS",
    categoryColor: "#00F5FF",
    description: "High-performance dashboard for real-time crypto analytics and automated trading strategies.",
    tech: ['Next.js', 'Rust', 'Postgres'],
    linkText: "View Case Study"
  },
  {
    title: "Quantix Analytics",
    category: "SaaS",
    categoryColor: "#00F5FF",
    description: "High-performance dashboard for real-time crypto analytics and automated trading strategies.",
    tech: ['Next.js', 'Rust', 'Postgres'],
    linkText: "View Case Study"
  },
  {
    title: "Lumina Core",
    category: "Open Source",
    categoryColor: "#FF5CFF",
    description: "A minimalist UI library for rapid application prototyping with utility-first components.",
    tech: ['React', 'TypeScript', 'Storybook'],
    linkText: "Github Repository"
  },
  {
    title: "Nova Protocol",
    category: "Web3",
    categoryColor: "#E5FF00",
    description: "Decentralized identity management system with biometric authentication.",
    tech: ['Solidity', 'Ethers.js', 'Golang'],
    linkText: "Project Details"
  }
];



export const ProjectCarousel = forwardRef((props, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  
  useImperativeHandle(ref, () => ({
    scroll(direction: "left" | "right") {
      if (scrollRef.current) {
        const offset = direction === "left" ? -412 : 412;
        scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
      }
    }
  }));
return (
  <div 
    ref={scrollRef} 
    className="flex w-full gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-10"
  >
    {projectData.map((project, index) => (
      <div key={index} className="snap-start shrink-0">
        <ProjectCard {...project} />
      </div>
    ))}
    <div className="min-w-25 shrink-0" />
  </div>
);
});

ProjectCarousel.displayName = "ProjectCarousel";