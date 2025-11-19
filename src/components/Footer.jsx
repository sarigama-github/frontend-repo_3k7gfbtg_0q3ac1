import React from 'react'

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-10">
          <h3 className="font-['Playfair Display'] text-3xl md:text-4xl leading-tight">
            Let's Develop a Winning Strategy Together.
          </h3>
        </div>
        <div className="flex items-center justify-center mb-16">
          <a href="#" className="font-mono text-sm bg-white text-black px-6 py-3 border border-white rounded-full hover:text-[#0047FF] transition-colors">
            Book Consultation
          </a>
        </div>
        <div className="h-px w-full bg-white/20 mb-6" />
        <div className="text-center">
          <p className="font-mono text-xs text-white/70">© {new Date().getFullYear()} Marabunta.ai — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
