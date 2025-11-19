import React from 'react'
import { ChevronDown } from 'lucide-react'

function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center text-center bg-white text-black pt-28 pb-36">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="font-['Playfair Display'] text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6 opacity-0 animate-[fadeIn_1.4s_ease_0.2s_forwards]">
          Words into Worlds
        </h1>
        <p className="font-mono text-base md:text-lg text-black/80 mb-12 opacity-0 animate-[fadeIn_1.4s_ease_0.6s_forwards]">
          Brands, Strategy, Design and Technology.
        </p>
        <div className="flex items-center justify-center opacity-0 animate-[fadeIn_1.4s_ease_1s_forwards]">
          <a href="#about" className="group inline-flex items-center gap-2 font-mono text-sm border border-black px-4 py-2 rounded-full hover:border-[#0047FF] transition-colors">
            <span className="group-hover:text-[#0047FF] transition-colors">Scroll Down</span>
            <ChevronDown className="h-4 w-4 transition-colors group-hover:text-[#0047FF]" />
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent" />

      <style>{`
        @keyframes fadeIn {from {opacity: 0; transform: translateY(6px);} to {opacity:1; transform: translateY(0);} }
      `}</style>
    </section>
  )
}

export default Hero
