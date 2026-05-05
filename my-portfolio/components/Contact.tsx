"use client";
import React from "react";
import { Space_Grotesk, Inter } from "next/font/google";
import { Mail } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

import { TerminalInput } from "./TerminalInput";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });
const SOCIAL_LINKS = [
    {
        Icon: SiGithub,
        url: "https://github.com/ShauryaBisht"
    },
    {
        Icon: SlSocialLinkedin,
        url: "https://www.linkedin.com/in/shaurya-bisht-/"
    },
    {
        Icon: SiX,
        url: "https://x.com/Shaurya__XD"
    },
];

const CYAN_ACCENT = "#00F5FF";

export function Contact() {
    return (

        <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto py-5  gap-20">


            <div className="flex flex-col items-start justify-start flex-1 max-w-137.5">

                <h2 className={`${spaceGrotesk.className} text-[64px] font-black uppercase leading-[0.95] tracking-tight`}>
                    <span className="text-white opacity-90">LET'S BUILD</span>
                    <br />
                    <span className="bg-linear-to-r from-[#00F5FF] to-[#00A3FF] bg-clip-text text-transparent">THE FUTURE.</span>
                </h2>


                <p className={`${inter.className} mt-8 text-[18px] text-[#9CA3AF] leading-relaxed max-w-120`}>
                    Have an interesting idea or project? Let's discuss how we can bring it to life with modern technology and elegant design.
                </p>


                <div className={`${inter.className} flex items-center gap-4 mt-12 text-[18px] text-[#E5E7EB] font-medium group`}>
                    <Mail size={22} className="shrink-0 transition-all duration-300 group-hover:scale-110" style={{ color: CYAN_ACCENT }} />
                    <a href="mailto:shauryabisht707@gmail.com" className="hover:text-white transition-all duration-300">
                        shauryabisht707@gmail.com
                    </a>
                </div>


                <div className="flex gap-6 mt-16">
                    {SOCIAL_LINKS.map(({ Icon, url }, index) => (
                        <a
                            key={index}
                            href={url} 
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center p-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all group"
                        >
                            <Icon size={20} className="fill-[#9CA3AF] group-hover:fill-white transition-all" />
                        </a>
                    ))}
                </div>
            </div>


            <div
                className="relative flex-1 w-full max-w-162.5 aspect-[1.3/1] h-125 rounded-3xl p-10 bg-[#0D0D0D] border border-white/10 overflow-hidden"
                style={{ boxShadow: `0 0 60px ${CYAN_ACCENT}15`, transition: 'box-shadow 0.3s ease' }}
            >

                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />


                <form className="relative z-10 flex flex-col gap-8 h-full">

                    <div className="flex flex-col sm:flex-row gap-8">
                        <TerminalInput label="NAME" placeholder="Enter your name" />
                        <TerminalInput label="EMAIL" placeholder="your@email.com" type="email" />
                    </div>
                    <TerminalInput label="PROJECT GOAL" placeholder="Web Application" />
                    <TerminalInput label="MESSAGE" placeholder="Tell me about your project..." textarea={true} />
                    <div className="mt-auto self-end">
                        <button
                            type="submit"
                            className={`${spaceGrotesk.className} group relative px-12 py-4 bg-white hover:bg-white/95 rounded-lg text-black text-[14px] font-bold uppercase tracking-[0.25em] transition-all`}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}