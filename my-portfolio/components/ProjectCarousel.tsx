"use client";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    title: "SearchAThon",
    category: "Full Stack / Real-time",
    categoryColor: "#00F5FF", // Cyan Accent
    description: "A real-time hackathon management platform featuring instant join-request notifications via WebSockets and a terminal-inspired interface.",
    tech: ['Next.js', 'Node.js', 'Socket.io', 'MongoDB'],
    linkText: "View Project",
    linkUrl:"https://github.com/ShauryaBisht/SearchAThon"
  },
  {
    title: "AnimeVerse",
    category: "Media / API",
    categoryColor: "#FF5CFF", // Pink/Purple Accent
    description: "A comprehensive anime discovery platform using advanced filtering and search algorithms to explore massive databases of Japanese animation.",
    tech: ['React', 'Tailwind CSS', 'Jikan API', 'Framer Motion'],
    linkText: "View Project",
    linkUrl:"https://github.com/ShauryaBisht/Animeverse"
  }]
  



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