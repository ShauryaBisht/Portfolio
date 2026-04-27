import { Inter, Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
})
const inter = Inter({ subsets: ["latin"] })

export function Hero() {
    return (

        <section className={`relative w-full max-w-7xl mx-auto flex flex-row items-start justify-between pt-30 pb-20 ${spaceGrotesk.variable}`}>

            <div className="flex flex-col items-start w-fit z-10">

                <div className="flex w-fit h-8.5 items-center bg-[#1A1A1A] px-[15.8px] py-[5.8px] gap-1.5 rounded-full border border-white/5">
                    <span className="h-2 w-2 rounded-full bg-[#00F5FF] shrink-0 shadow-[0_0_8px_#00F5FF]"></span>
                    <span className={`${inter.className} text-[#9CA3AF] text-[14px] leading-none whitespace-nowrap font-medium`}>
                        Available for new projects
                    </span>
                </div>


                <div className="mt-12 flex flex-col font-space gap-6.5">
                    <h1 className={`text-[96px] font-bold leading-[0.85] text-[#E5E7EB] ${spaceGrotesk.className} tracking-[-0.04em]`}>
                        ENGINEERING
                    </h1>
                    <h1 className={`text-[96px] font-bold leading-[0.85] ${spaceGrotesk.className} tracking-[-0.04em] bg-linear-to-r from-[#00F5FF] to-[#00A3FF] bg-clip-text text-transparent`}>
                        DIGITAL
                    </h1>
                    <h1 className={`text-[96px] font-bold leading-[0.85] ${spaceGrotesk.className} tracking-[-0.04em] bg-linear-to-r from-[#FF5CFF] to-[#FF005C] bg-clip-text text-transparent`}>
                        SOLUTIONS
                    </h1>

                    <p className={`${inter.className} mt-8 text-[18px] text-[#9CA3AF] leading-[29.3px] tracking-tight max-w-[540px]`}>
                        Full-stack developer focused on building high-performance web applications with modern architecture and exceptional user experiences.
                    </p>


                    <div className="mt-10 flex items-center gap-4">
                        <button className={`${spaceGrotesk.className} flex items-center gap-3 px-8 py-4 bg-[#00F5FF] text-black font-bold uppercase tracking-wider text-[16px] transition-all hover:bg-[#00D7E0] group cursor-pointer`}>
                            View My Work
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                        <button className={`${spaceGrotesk.className} px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-[16px] hover:bg-white/5 transition-all cursor-pointer`}>
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex animate-float transform-gpu flex-col items-start justify-start w-xl h-fit mt-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D]/80 backdrop-blur-sm z-10">
                <div className="flex h-10 w-full items-center gap-4 border-b border-white/5 bg-[#1A1A1A] px-6 rounded-t-xl">
                    <div className="flex gap-2.5">
                        <div className="h-3.5 w-3.5 rounded-full bg-[#FF5F56]" />
                        <div className="h-3.5 w-3.5 rounded-full bg-[#FFBD2E]" />
                        <div className="h-3.5 w-3.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className={`${inter.className} ml-2 text-[12px] font-semibold tracking-[0.15em] text-gray-500 uppercase`}>
                        Main.tsx
                    </span>
                </div>

                <div className="p-8 font-mono text-[15px] leading-relaxed">
                  
                    <div className="flex gap-2">
                        <span className="text-[#FF5CFF]">const</span>
                        <span className="text-white">developer = {"{"}</span>
                    </div>

                    
                    <div className="pl-8 mt-1 space-y-1">
                        <div className="flex gap-2">
                            <span className="text-[#00F5FF]">name:</span>
                            <span className="text-[#E5FF00]">'Shaurya Bisht'</span>,
                        </div>
                        <div className="flex gap-2">
                            <span className="text-[#00F5FF]">role:</span>
                            <span className="text-[#E5FF00]">'Web Developer'</span>,
                        </div>
                        <div className="flex gap-2">
                            <span className="text-[#00F5FF]">status:</span>
                            <span className="text-[#E5FF00]">'Always Building'</span>,
                        </div>
                        <div className="flex gap-2">
                            <span className="text-[#00F5FF]">focus:</span>
                            <span className="text-white">[</span>
                            <span className="text-[#E5FF00]">'React'</span>,
                            <span className="text-[#E5FF00]">'Node.js'</span>,
                            <span className="text-[#E5FF00]">'Architecture'</span>
                            <span className="text-white">]</span>
                        </div>
                    </div>

                    
                    <div className="text-white">{"};"}</div>

                   
                    <div className="mt-6 flex gap-1">
                        <span className="text-[#00F5FF]">console</span>
                        <span className="text-white">.</span>
                        <span className="text-[#00F5FF]">log</span>
                        <span className="text-white">(</span>
                        <span className="text-[#E5FF00]">`Searching for new challenges...`</span>
                        <span className="text-white">);</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

