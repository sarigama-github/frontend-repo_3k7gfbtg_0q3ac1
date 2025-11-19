import React from 'react'

// Minimal, flat, geometry-only illustration layer with continuous loops
// Strict black/white palette, ultra-light strokes, subtle motion
function Visuals() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none" aria-hidden>
      {/* Thin modular grid to add structure */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="black" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Horizontal ticker of forms (circles/squares/triangles) looping left → right */}
      <div className="absolute left-0 right-0 top-[20svh] opacity-30">
        <div className="relative w-[200%] h-16 animate-[ticker_26s_linear_infinite]">
          <ShapesRow />
        </div>
      </div>

      {/* Second ticker in reverse for parallax */}
      <div className="absolute left-0 right-0 top-[55svh] opacity-20">
        <div className="relative w-[200%] h-14 animate-[tickerReverse_34s_linear_infinite]">
          <ShapesRow compact />
        </div>
      </div>

      {/* Slow rotating ring behind hero */}
      <div className="absolute top-[12svh] left-1/2 -translate-x-1/2 opacity-20">
        <svg width="520" height="520" viewBox="0 0 520 520" className="animate-[slowSpin_90s_linear_infinite]">
          <circle cx="260" cy="260" r="238" fill="none" stroke="black" strokeWidth="1" />
          <circle cx="260" cy="260" r="178" fill="none" stroke="black" strokeWidth="0.8" />
          <circle cx="260" cy="260" r="118" fill="none" stroke="black" strokeWidth="0.6" />
        </svg>
      </div>

      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes tickerReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @keyframes slowSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}

function ShapesRow({ compact = false }) {
  // Build a long SVG strip we can move horizontally
  const height = compact ? 56 : 64
  const gap = compact ? 48 : 64
  const count = 16
  const items = new Array(count).fill(0)
  return (
    <svg width="200%" height={height} viewBox={`0 0 ${count * gap * 2} ${height}`}>
      {items.map((_, i) => {
        const x = i * gap * 2 + 8
        const y = height / 2
        const mod = i % 4
        const stroke = 'black'
        const sw = 1
        const op = 0.8
        if (mod === 0) {
          // circle
          return <circle key={i} cx={x} cy={y} r={compact ? 10 : 12} fill="none" stroke={stroke} strokeWidth={sw} opacity={op} />
        } else if (mod === 1) {
          // square
          const s = compact ? 18 : 22
          return <rect key={i} x={x - s / 2} y={y - s / 2} width={s} height={s} fill="none" stroke={stroke} strokeWidth={sw} opacity={op} />
        } else if (mod === 2) {
          // triangle
          const s = compact ? 24 : 28
          const h = (Math.sqrt(3) / 2) * s
          const points = `${x},${y - h / 2} ${x - s / 2},${y + h / 2} ${x + s / 2},${y + h / 2}`
          return <polygon key={i} points={points} fill="none" stroke={stroke} strokeWidth={sw} opacity={op} />
        }
        // pill
        const w = compact ? 36 : 44
        const r = compact ? 8 : 10
        return <rect key={i} x={x - w / 2} y={y - r} width={w} height={r * 2} rx={r} ry={r} fill="none" stroke={stroke} strokeWidth={sw} opacity={op} />
      })}
    </svg>
  )
}

export default Visuals
