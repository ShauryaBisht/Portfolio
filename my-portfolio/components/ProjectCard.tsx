import { LuExternalLink, LuArrowRight } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { Space_Grotesk,Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
})
const inter = Inter({ subsets: ["latin"] })

export function ProjectCard({ category, categoryColor, title, description, tech, linkText }) {
  const isGithub = linkText.toLowerCase().includes("github");
  const isCaseStudy = linkText.toLowerCase().includes("case study");

  return (
    <div className="flex flex-col w-95 group cursor-pointer shrink-0 transition-all duration-500 ease-out">
      <div className="relative aspect-video w-full rounded-xl border border-white/10 bg-[#0D0D0D] overflow-hidden flex items-center justify-center 
                      transition-all duration-500 group-hover:border-white/20">
        
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <div className="absolute top-5 left-5 px-3 py-1 rounded-sm border text-[10px] font-black uppercase tracking-[0.25em] z-20 transition-transform duration-300 group-hover:scale-105"
             style={{ borderColor: `${categoryColor}40`, color: categoryColor, backgroundColor: `${categoryColor}10` }}>
          {category}
        </div>

        <div className="relative z-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100 opacity-20"
             style={{ color: categoryColor }}>
           <div className="w-16 h-16 border-2 border-current rounded-xl rotate-12" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.75 bg-white/5" />
        <div 
          className="absolute bottom-0 left-0 h-0.75 w-0 transition-all duration-700 ease-in-out group-hover:w-full"
          style={{ backgroundColor: categoryColor, boxShadow: `0 0 12px ${categoryColor}80` }}
        />
      </div>

      
      <div className="mt-8 flex flex-col items-start">
        <h3 className={`${spaceGrotesk.className} text-2xl font-bold leading-tight tracking-tight transition-colors duration-500`}
            style={{ color: '#E5E7EB' }}>
          <span className="transition-colors duration-500 group-hover:text-(--hover-color)" 
                style={{ '--hover-color': categoryColor } as React.CSSProperties}>
            {title}
          </span>
        </h3>
        <p className={`${inter.className} mt-3 text-sm text-[#9CA3AF] leading-relaxed line-clamp-2`}>
          {description}
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          {tech.map((item) => (
            <span key={item} className="text-[10px] font-bold tracking-[0.25em] text-[#4B5563] uppercase">
              {item}
            </span>
          ))}
        </div>
        <button className={`${spaceGrotesk.className} mt-8 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-white/70 group-hover:text-white transition-all`}>
          <span className="group-hover:mr-1 transition-all">{linkText}</span>
          {isGithub ? (
            <SiGithub 
              size={16} 
              className="transition-all duration-500 group-hover:scale-110"
              style={{ fill: 'currentColor' }} // Inherits text color (white/70 -> white)
            />
          ) : isCaseStudy ? (
            <LuExternalLink size={16} className="transition-all group-hover:opacity-100" />
          ) : (
            <LuArrowRight 
              size={16} 
              className="transition-all group-hover:opacity-100 group-hover:translate-x-1" 
              style={{ opacity: 0.7 }}
            />
          )}
        </button>
      </div>
    </div>
  );
}