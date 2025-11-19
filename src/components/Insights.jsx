import React from 'react'

// Minimal editorial list of insights with animated underline on hover
function Insights() {
  const posts = [
    { id: 1, title: 'The Discipline of Language in AI Systems', tag: 'Essay' },
    { id: 2, title: 'A Grid is a Promise: Swiss Systems for Product Teams', tag: 'Note' },
    { id: 3, title: 'Prompt Craft: From Metaphor to Mechanism', tag: 'Essay' },
  ]
  return (
    <section id="insights" className="bg-white text-black py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 flex items-center">
          <h2 className="font-['Playfair Display'] text-3xl md:text-4xl">Insights</h2>
          <div className="flex-1 ml-6 h-px bg-black/15" />
        </div>
        <ul className="divide-y divide-black/10">
          {posts.map((p, idx) => (
            <li key={p.id} className="py-5">
              <a href="#" className="group flex items-baseline justify-between w-full">
                <span className="font-mono text-sm text-black/60">{String(idx + 1).padStart(2, '0')}</span>
                <span className="flex-1 mx-4 h-px bg-black/10 group-hover:bg-black/30 transition-colors" />
                <span className="font-mono text-base tracking-tight relative">
                  {p.title}
                  <span className="block absolute left-0 -bottom-1 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300" />
                </span>
                <span className="font-mono text-xs text-black/50 ml-4">{p.tag}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Insights
