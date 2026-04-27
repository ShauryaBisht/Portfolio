import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-black">
        <div 
          className="fixed inset-0 z-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,0,255,0.15),transparent_50%)]" />
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_100%_50%,rgba(0,200,255,0.1),transparent_50%)]" />
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
        <div className="relative z-10">
          <Hero />
          <Projects />
          <div className="h-screen" /> 
        </div>
      </div>
    </>
  );
}