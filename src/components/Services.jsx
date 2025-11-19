import React from 'react'

const services = [
  { n: '01', title: 'Brand Consulting', desc: "What does your brand want to be when it grows up?" },
  { n: '02', title: 'Marketing Strategy', desc: "An idea means nothing if it doesn't know where it's going." },
  { n: '03', title: 'Graphic Design', desc: "Design is not noise. It's silence drawn with intention." },
  { n: '04', title: 'Brand Voice', desc: "Finding a brand's voice isn't about inventing it — it's about listening." },
  { n: '05', title: 'Prompt Engineering', desc: 'A good prompt is like poetry for machines.' },
  { n: '06', title: 'Research & Development', desc: 'Research is imagination with a method.' },
]

function Services() {
  return (
    <section id="services" className="bg-white text-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="font-['Playfair Display'] text-3xl md:text-4xl">The Core</h2>
          <div className="flex-1 mx-6 h-px bg-black/20" />
          <p className="font-mono text-sm text-black/70">Six disciplines, one intent.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.n}
              className="group border border-black/20 rounded-lg p-6 transition-colors duration-200 hover:bg-black hover:text-white"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-sm">{s.n}</span>
                <div className="h-px flex-1 mx-4 bg-black/20 group-hover:bg-white/30" />
                <span className="font-mono text-sm">Service</span>
              </div>
              <h3 className="font-mono text-xl tracking-tight mb-3">{s.title}</h3>
              <p className="font-mono text-sm text-black/70 group-hover:text-white/80 hidden group-hover:block">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
