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
    <div ref={scrollRef} className="flex gap-8 overflow-x-auto ...">
  {projectData.map((project, index) => (
    <ProjectCard key={index} {...project} />
  ))}
</div>
  );
});

ProjectCarousel.displayName = "ProjectCarousel";