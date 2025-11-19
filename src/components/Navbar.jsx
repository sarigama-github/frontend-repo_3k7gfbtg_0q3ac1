import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b border-black/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="tracking-tight select-none">
          <span className="text-xl md:text-2xl font-bold font-[\'Playfair Display\']">MARABUNTA</span>
          <span className="text-xl md:text-2xl font-bold font-[\'Playfair Display\']">.ai</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {['About','Services','Insights','Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono tracking-tight hover:text-[#0047FF] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
