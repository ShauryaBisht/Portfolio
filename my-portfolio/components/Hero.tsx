import { Inter, Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
})
const inter = Inter({ subsets: ["latin"] })

export function Hero() {
    return (
        <section className={`relative w-full max-w-7xl flex flex-col items-start justify-start pl-32 pt-30 pb-20 ${spaceGrotesk.variable}`}>
            <div className="flex w-fit h-8.5 items-center bg-[#1A1A1A] px-[15.8px] py-[5.8px] gap-1.5 rounded-full border border-white/5">
                <span className="h-2 w-2 rounded-full bg-[#00F5FF] shrink-0 shadow-[0_0_8px_#00F5FF]"></span>
                <span className={`${inter.className} text-[#9CA3AF] text-[14px] leading-none whitespace-nowrap font-medium`}>
                    Available for new projects
                </span>
            </div>
            <div className="mt-12 flex flex-col font-space gap-6">
                <h1 className={`text-[96px] font-bold leading-[0.85] text-[#E5E7EB] ${spaceGrotesk.className} tracking-[-0.04em]`}>
                    ENGINEERING
                </h1>
                <h1 className={`text-[96px] font-bold leading-[0.85] ${spaceGrotesk.className} tracking-[-0.04em] bg-linear-to-r from-[#00F5FF] to-[#00A3FF] bg-clip-text text-transparent`}>
                    DIGITAL
                </h1>
                <h1 className={`text-[96px] font-bold leading-[0.85] ${spaceGrotesk.className} tracking-[-0.04em] bg-linear-to-r from-[#FF5CFF] to-[#FF005C] bg-clip-text text-transparent`}>
                    SOLUTIONS
                </h1>
                <p className={`${inter.className} mt-8 text-[18px] text-[#9CA3AF] leading-[29.3px] tracking-tight max-w-140`}>
                  Full-stack developer focused on building high-performance web applications with modern architecture and exceptional user experiences.  
                </p>
                <div className="mt-10 flex items-center gap-4">
                    <button className={`${spaceGrotesk.className} flex items-center gap-3 px-8 py-4 bg-[#00F5FF] text-black font-bold uppercase tracking-wider text-[16px] transition-all hover:bg-[#00D7E0] group`}>
                         View My Work 
                         <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    <button className={`${spaceGrotesk.className} px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-[16px] hover:bg-white/5 transition-all`}>
                        Let's Talk
                    </button>
                </div>
            </div>
        </section>
    )
}