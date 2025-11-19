import React from 'react'

function GlobalStyles() {
  return (
    <style>{`
      :root {
        --accent: #0047FF;
      }
      a:hover { color: var(--accent); }
      .cta-primary { background: var(--accent); color: #fff; }
      .cta-primary:hover { filter: brightness(0.95); }
    `}</style>
  )
}

export default GlobalStyles
