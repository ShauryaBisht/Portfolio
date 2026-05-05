import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
})

export function Navbar() {
    return (
        <header className="flex h-[80.8px] w-full items-center justify-between px-12 bg-[#0A0A0A]/80 border-b border-white/5 backdrop-blur-md sticky top-0 z-50">


            <div className="flex items-center gap-1 font-space">
                <span className={`text-[#00F5FF] ${spaceGrotesk.className} text-[24px] font-bold leading-8`}>
          //
                </span>
                <p className={`text-[24px] text-white font-bold leading-8 ${spaceGrotesk.className} m-0`}>
                    BUILD_LOG
                </p>
            </div>


            <nav className={`${spaceGrotesk.className} flex items-center gap-8 font-space `}>
                <ul className="flex list-none gap-8 p-0 m-0 text-[14px] font-medium tracking-widest text-gray-300 uppercase">
                    <li className="hover:text-[#00F5FF] text-[#E5E7EB] cursor-pointer transition-colors">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="hover:text-[#FF5CFF] cursor-pointer text-[#E5E7EB] transition-colors">
                        <a href="#stack">Skills</a>
                    </li>
                    <li className="hover:text-[#E5FF00] text-[#E5E7EB] cursor-pointer transition-colors">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>


                <a 
  href="/Shaurya_Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block" // Ensures the link wrapper matches the button's layout
>
  <button className="
    px-8 py-3 
    border-[0.8px] border-[#00F5FF] 
    text-[#00F5FF] 
    font-space font-bold uppercase tracking-widest 
    bg-transparent 
    transition-all duration-300 
    rounded-none
    hover:text-black
    hover:bg-[#00F5FF] 
    hover:shadow-[0_0_15px_rgba(0,245,255,0.1)]
  ">
    Resume
  </button>
</a>
            </nav>
        </header>
    )
}