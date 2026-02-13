// SVG Diagrams for each congenital heart disease
// Each function returns an SVG string

window.diagrams = {
  cia: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient>
    <linearGradient id="gdRed" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <!-- Heart outline -->
  <path d="M250 50 C150 50 80 120 80 200 C80 300 250 370 250 370 C250 370 420 300 420 200 C420 120 350 50 250 50Z" fill="none" stroke="#334155" stroke-width="2"/>
  <!-- Septum -->
  <line x1="250" y1="60" x2="250" y2="360" stroke="#475569" stroke-width="3"/>
  <!-- Chambers -->
  <ellipse cx="165" cy="150" rx="70" ry="55" fill="url(#gdRed)" opacity="0.25" stroke="#ef4444" stroke-width="1.5"/>
  <ellipse cx="335" cy="150" rx="70" ry="55" fill="url(#gdBlue)" opacity="0.25" stroke="#3b82f6" stroke-width="1.5"/>
  <ellipse cx="165" cy="270" rx="70" ry="65" fill="url(#gdRed)" opacity="0.2" stroke="#ef4444" stroke-width="1.5"/>
  <ellipse cx="335" cy="270" rx="70" ry="65" fill="url(#gdBlue)" opacity="0.2" stroke="#3b82f6" stroke-width="1.5"/>
  <!-- ASD Defect -->
  <ellipse cx="250" cy="150" rx="22" ry="18" fill="#fbbf24" opacity="0.4" stroke="#fbbf24" stroke-width="2" filter="url(#glow)"/>
  <!-- Arrow showing shunt -->
  <path d="M220 150 C235 140 265 140 285 150" stroke="#fbbf24" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#fbbf24"/></marker></defs>
  <!-- Labels -->
  <text x="165" y="155" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">AI</text>
  <text x="335" y="155" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">AD</text>
  <text x="165" y="275" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">VI</text>
  <text x="335" y="275" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">VD</text>
  <text x="250" y="120" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="Inter,sans-serif" font-weight="700">DEFECTO</text>
  <!-- Legend -->
  <text x="250" y="25" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="Outfit,sans-serif" font-weight="600">Comunicación Interauricular (CIA)</text>
  <text x="250" y="395" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Shunt izquierda → derecha a nivel auricular</text>
</svg>`,

  civ: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdBlue2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient>
    <linearGradient id="gdRed2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <filter id="glow2"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <path d="M250 50 C150 50 80 120 80 200 C80 300 250 370 250 370 C250 370 420 300 420 200 C420 120 350 50 250 50Z" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="250" y1="60" x2="250" y2="360" stroke="#475569" stroke-width="3"/>
  <ellipse cx="165" cy="150" rx="70" ry="55" fill="url(#gdRed2)" opacity="0.25" stroke="#ef4444" stroke-width="1.5"/>
  <ellipse cx="335" cy="150" rx="70" ry="55" fill="url(#gdBlue2)" opacity="0.25" stroke="#3b82f6" stroke-width="1.5"/>
  <ellipse cx="165" cy="270" rx="70" ry="65" fill="url(#gdRed2)" opacity="0.2" stroke="#ef4444" stroke-width="1.5"/>
  <ellipse cx="335" cy="270" rx="70" ry="65" fill="url(#gdBlue2)" opacity="0.2" stroke="#3b82f6" stroke-width="1.5"/>
  <!-- VSD Defect -->
  <ellipse cx="250" cy="265" rx="20" ry="22" fill="#a855f7" opacity="0.4" stroke="#a855f7" stroke-width="2" filter="url(#glow2)"/>
  <!-- Arrow -->
  <path d="M220 265 C235 255 265 255 285 265" stroke="#a855f7" stroke-width="3" fill="none" marker-end="url(#arrow2)"/>
  <defs><marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#a855f7"/></marker></defs>
  <text x="165" y="155" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">AI</text>
  <text x="335" y="155" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">AD</text>
  <text x="165" y="275" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">VI</text>
  <text x="335" y="275" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">VD</text>
  <text x="250" y="235" text-anchor="middle" fill="#a855f7" font-size="11" font-family="Inter,sans-serif" font-weight="700">DEFECTO</text>
  <text x="250" y="25" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="Outfit,sans-serif" font-weight="600">Comunicación Interventricular (CIV)</text>
  <text x="250" y="395" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Shunt izquierda → derecha a nivel ventricular</text>
</svg>`,

  fallot: `<svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdB3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient>
    <linearGradient id="gdR3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <filter id="glow3"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <path d="M250 60 C150 60 80 130 80 210 C80 310 250 380 250 380 C250 380 420 310 420 210 C420 130 350 60 250 60Z" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="250" y1="70" x2="250" y2="370" stroke="#475569" stroke-width="3"/>
  <ellipse cx="165" cy="160" rx="70" ry="50" fill="url(#gdR3)" opacity="0.25" stroke="#ef4444" stroke-width="1.5"/>
  <ellipse cx="335" cy="160" rx="70" ry="50" fill="url(#gdB3)" opacity="0.25" stroke="#3b82f6" stroke-width="1.5"/>
  <ellipse cx="165" cy="280" rx="70" ry="60" fill="url(#gdR3)" opacity="0.2" stroke="#ef4444" stroke-width="1.5"/>
  <!-- Hypertrophied RV -->
  <ellipse cx="335" cy="280" rx="70" ry="60" fill="url(#gdB3)" opacity="0.2" stroke="#3b82f6" stroke-width="3" stroke-dasharray="5,3"/>
  <!-- VSD -->
  <ellipse cx="250" cy="270" rx="18" ry="20" fill="#ec4899" opacity="0.4" stroke="#ec4899" stroke-width="2" filter="url(#glow3)"/>
  <!-- Overriding Aorta -->
  <path d="M230 100 L250 70 L270 100" stroke="#ef4444" stroke-width="3" fill="none"/>
  <circle cx="250" cy="110" r="18" fill="none" stroke="#ef4444" stroke-width="2"/>
  <text x="250" y="115" text-anchor="middle" fill="#ef4444" font-size="9" font-family="Inter,sans-serif" font-weight="700">Ao</text>
  <!-- Pulmonary Stenosis -->
  <path d="M370 120 L395 90" stroke="#f97316" stroke-width="2.5"/>
  <path d="M360 125 L405 85" stroke="#f97316" stroke-width="1" opacity="0.5"/>
  <text x="420" y="85" fill="#f97316" font-size="9" font-family="Inter,sans-serif" font-weight="600">EP</text>
  <!-- Arrow D-I shunt -->
  <path d="M280 270 C265 260 235 260 220 270" stroke="#ec4899" stroke-width="3" fill="none" marker-end="url(#arrow3)"/>
  <defs><marker id="arrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#ec4899"/></marker></defs>
  <text x="165" y="165" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">AI</text>
  <text x="335" y="165" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">AD</text>
  <text x="165" y="285" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">VI</text>
  <text x="335" y="285" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">VD</text>
  <!-- Labels for 4 components -->
  <text x="250" y="245" text-anchor="middle" fill="#ec4899" font-size="9" font-family="Inter,sans-serif" font-weight="700">1. CIV</text>
  <text x="250" y="60" text-anchor="middle" fill="#ef4444" font-size="9" font-family="Inter,sans-serif" font-weight="700">2. Cabalgamiento Ao</text>
  <text x="440" y="100" text-anchor="start" fill="#f97316" font-size="9" font-family="Inter,sans-serif" font-weight="700">3. Estenosis</text>
  <text x="440" y="112" text-anchor="start" fill="#f97316" font-size="9" font-family="Inter,sans-serif">Pulmonar</text>
  <text x="335" y="350" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="Inter,sans-serif" font-weight="700">4. Hipertrofia VD</text>
  <text x="250" y="25" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="Outfit,sans-serif" font-weight="600">Tetralogía de Fallot</text>
  <text x="250" y="412" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Shunt derecha → izquierda · Cardiopatía cianótica</text>
</svg>`,

  tga: `<svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdB4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient>
    <linearGradient id="gdR4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <path d="M250 80 C150 80 80 140 80 220 C80 320 250 380 250 380 C250 380 420 320 420 220 C420 140 350 80 250 80Z" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="250" y1="90" x2="250" y2="370" stroke="#475569" stroke-width="3"/>
  <ellipse cx="165" cy="170" rx="70" ry="50" fill="url(#gdR4)" opacity="0.25" stroke="#ef4444" stroke-width="1.5"/>
  <ellipse cx="335" cy="170" rx="70" ry="50" fill="url(#gdB4)" opacity="0.25" stroke="#3b82f6" stroke-width="1.5"/>
  <ellipse cx="165" cy="290" rx="70" ry="60" fill="url(#gdR4)" opacity="0.2" stroke="#ef4444" stroke-width="1.5"/>
  <ellipse cx="335" cy="290" rx="70" ry="60" fill="url(#gdB4)" opacity="0.2" stroke="#3b82f6" stroke-width="1.5"/>
  <!-- Transposed Great Arteries -->
  <!-- Aorta from RV (wrong!) -->
  <path d="M335 230 L335 55" stroke="#ef4444" stroke-width="4" fill="none"/>
  <circle cx="335" cy="50" r="16" fill="#ef444433" stroke="#ef4444" stroke-width="2"/>
  <text x="335" y="55" text-anchor="middle" fill="#ef4444" font-size="10" font-family="Inter,sans-serif" font-weight="700">Ao</text>
  <!-- Pulmonary from LV (wrong!) -->
  <path d="M165 230 L165 55" stroke="#3b82f6" stroke-width="4" fill="none"/>
  <circle cx="165" cy="50" r="16" fill="#3b82f633" stroke="#3b82f6" stroke-width="2"/>
  <text x="165" y="55" text-anchor="middle" fill="#3b82f6" font-size="10" font-family="Inter,sans-serif" font-weight="700">AP</text>
  <!-- X marks showing wrong connection -->
  <text x="335" y="80" text-anchor="middle" fill="#fbbf24" font-size="16" font-family="Inter,sans-serif" font-weight="900">✗</text>
  <text x="165" y="80" text-anchor="middle" fill="#fbbf24" font-size="16" font-family="Inter,sans-serif" font-weight="900">✗</text>
  <!-- Two parallel circuits arrows -->
  <path d="M100 290 C60 290 60 170 100 170" stroke="#ef4444" stroke-width="2" fill="none" stroke-dasharray="4,3" marker-end="url(#ar4r)"/>
  <path d="M400 170 C440 170 440 290 400 290" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="4,3" marker-end="url(#ar4b)"/>
  <defs>
    <marker id="ar4r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#ef4444"/></marker>
    <marker id="ar4b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#3b82f6"/></marker>
  </defs>
  <text x="165" y="175" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">AI</text>
  <text x="335" y="175" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">AD</text>
  <text x="165" y="295" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">VI</text>
  <text x="335" y="295" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">VD</text>
  <text x="45" y="230" text-anchor="middle" fill="#ef4444" font-size="9" font-family="Inter,sans-serif">Circ.</text>
  <text x="45" y="242" text-anchor="middle" fill="#ef4444" font-size="9" font-family="Inter,sans-serif">Sistémica</text>
  <text x="455" y="230" text-anchor="middle" fill="#3b82f6" font-size="9" font-family="Inter,sans-serif">Circ.</text>
  <text x="455" y="242" text-anchor="middle" fill="#3b82f6" font-size="9" font-family="Inter,sans-serif">Pulmonar</text>
  <text x="250" y="25" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="Outfit,sans-serif" font-weight="600">Transposición de Grandes Arterias (TGA)</text>
  <text x="250" y="412" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Circulaciones en paralelo · Incompatible sin mezcla</text>
</svg>`,

  coartacion: `<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdAo" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <filter id="glow5"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <!-- Heart simplified -->
  <ellipse cx="130" cy="200" rx="60" ry="70" fill="#ef444420" stroke="#ef4444" stroke-width="1.5"/>
  <text x="130" y="195" text-anchor="middle" fill="#f1f5f9" font-size="12" font-family="Inter,sans-serif" font-weight="600">Corazón</text>
  <text x="130" y="212" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="Inter,sans-serif">VI</text>
  <!-- Aortic arch -->
  <path d="M160 150 C160 80 250 40 320 40 C380 40 420 60 420 100" stroke="url(#gdAo)" stroke-width="18" fill="none" stroke-linecap="round" opacity="0.5"/>
  <!-- Coarctation point -->
  <path d="M390 95 L390 160" stroke="url(#gdAo)" stroke-width="18" fill="none" stroke-linecap="round" opacity="0.5"/>
  <!-- Narrowing -->
  <path d="M390 155 L390 180" stroke="#ef4444" stroke-width="6" fill="none" stroke-linecap="round" filter="url(#glow5)"/>
  <!-- Post coarctation -->
  <path d="M390 180 L390 310" stroke="url(#gdAo)" stroke-width="18" fill="none" stroke-linecap="round" opacity="0.5"/>
  <!-- Narrowing markers -->
  <line x1="375" y1="158" x2="385" y2="168" stroke="#fbbf24" stroke-width="2"/>
  <line x1="395" y1="168" x2="405" y2="158" stroke="#fbbf24" stroke-width="2"/>
  <line x1="375" y1="178" x2="385" y2="168" stroke="#fbbf24" stroke-width="2"/>
  <line x1="395" y1="168" x2="405" y2="178" stroke="#fbbf24" stroke-width="2"/>
  <!-- Labels -->
  <text x="250" y="30" text-anchor="middle" fill="#ef4444" font-size="11" font-family="Inter,sans-serif" font-weight="600">Arco aórtico</text>
  <text x="430" y="105" text-anchor="start" fill="#94a3b8" font-size="9" font-family="Inter,sans-serif">Aorta</text>
  <text x="430" y="117" text-anchor="start" fill="#94a3b8" font-size="9" font-family="Inter,sans-serif">descendente</text>
  <!-- Coarctation label -->
  <line x1="410" y1="168" x2="445" y2="168" stroke="#fbbf24" stroke-width="1"/>
  <text x="450" y="165" fill="#fbbf24" font-size="10" font-family="Inter,sans-serif" font-weight="700">COARTACIÓN</text>
  <text x="450" y="178" fill="#fbbf24" font-size="9" font-family="Inter,sans-serif">(estrechamiento)</text>
  <!-- Subclavia -->
  <path d="M340 50 L340 25 L300 25" stroke="#06b6d4" stroke-width="3" fill="none"/>
  <text x="280" y="22" text-anchor="end" fill="#06b6d4" font-size="9" font-family="Inter,sans-serif">A. Subclavia izq.</text>
  <!-- Pressure difference -->
  <text x="130" y="280" text-anchor="middle" fill="#ef4444" font-size="10" font-family="Inter,sans-serif" font-weight="600">TA ↑↑ MMSS</text>
  <text x="390" y="335" text-anchor="middle" fill="#3b82f6" font-size="10" font-family="Inter,sans-serif" font-weight="600">TA ↓↓ MMII</text>
  <text x="250" y="345" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Gradiente de presión entre miembros superiores e inferiores</text>
</svg>`,

  dap: `<svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdAo6" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="gdPul6" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient>
    <filter id="glow6"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <!-- Heart -->
  <ellipse cx="130" cy="220" rx="60" ry="70" fill="#10b98120" stroke="#10b981" stroke-width="1.5"/>
  <text x="130" y="220" text-anchor="middle" fill="#f1f5f9" font-size="13" font-family="Inter,sans-serif" font-weight="600">🫀</text>
  <!-- Aorta (arch) -->
  <path d="M160 170 C160 80 250 40 330 40 C390 40 420 70 420 120 L420 310" stroke="url(#gdAo6)" stroke-width="16" fill="none" stroke-linecap="round" opacity="0.5"/>
  <text x="320" y="30" text-anchor="middle" fill="#ef4444" font-size="11" font-family="Inter,sans-serif" font-weight="600">Aorta</text>
  <!-- Pulmonary artery -->
  <path d="M150 160 C150 120 200 80 260 80 L260 80" stroke="url(#gdPul6)" stroke-width="14" fill="none" stroke-linecap="round" opacity="0.5"/>
  <text x="260" y="72" text-anchor="middle" fill="#3b82f6" font-size="11" font-family="Inter,sans-serif" font-weight="600">A. Pulmonar</text>
  <!-- Ductus -->
  <path d="M310 55 C300 75 280 82 270 82" stroke="#10b981" stroke-width="6" fill="none" stroke-linecap="round" filter="url(#glow6)"/>
  <!-- Ductus label -->
  <text x="310" y="100" text-anchor="middle" fill="#10b981" font-size="11" font-family="Inter,sans-serif" font-weight="700">DUCTUS</text>
  <text x="310" y="114" text-anchor="middle" fill="#10b981" font-size="9" font-family="Inter,sans-serif">Persistente</text>
  <!-- Arrow showing flow -->
  <path d="M305 58 C295 70 285 78 278 80" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#ar6)"/>
  <defs><marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#fbbf24"/></marker></defs>
  <!-- Flow labels -->
  <text x="350" y="50" text-anchor="start" fill="#fbbf24" font-size="9" font-family="Inter,sans-serif" font-weight="600">Flujo Ao → AP</text>
  <text x="350" y="63" text-anchor="start" fill="#fbbf24" font-size="8" font-family="Inter,sans-serif">(shunt I-D)</text>
  <!-- Info -->
  <rect x="50" y="310" rx="8" ry="8" width="400" height="45" fill="#10b98110" stroke="#10b98133" stroke-width="1"/>
  <text x="250" y="330" text-anchor="middle" fill="#94a3b8" font-size="9.5" font-family="Inter,sans-serif">El ductus conecta la aorta con la arteria pulmonar.</text>
  <text x="250" y="345" text-anchor="middle" fill="#94a3b8" font-size="9.5" font-family="Inter,sans-serif">Debe cerrarse espontáneamente tras el nacimiento.</text>
  <text x="250" y="15" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="Outfit,sans-serif" font-weight="600">Ductus Arterioso Persistente (DAP)</text>
</svg>`
  ,
  canal_av: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdOrange" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <!-- Heart Chambers -->
  <rect x="100" y="150" width="140" height="120" rx="20" fill="#e0f2fe" opacity="0.5"/> <!-- RA -->
  <rect x="260" y="150" width="140" height="120" rx="20" fill="#fee2e2" opacity="0.5"/> <!-- LA -->
  <rect x="100" y="280" width="140" height="150" rx="30" fill="#e0f2fe" opacity="0.5"/> <!-- RV -->
  <rect x="260" y="280" width="140" height="150" rx="30" fill="#fee2e2" opacity="0.5"/> <!-- LV -->
  <!-- Central Defect (Endocardial Cushions) -->
  <circle cx="250" cy="275" r="40" fill="url(#gdOrange)" opacity="0.2"/>
  <path d="M250,235 L250,315" stroke="url(#gdOrange)" stroke-width="4" stroke-dasharray="8,4"/>
  <text x="170" y="210" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#3b82f6" opacity="0.6">AD</text>
  <text x="330" y="210" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#ef4444" opacity="0.6">AI</text>
  <text x="170" y="355" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#3b82f6" opacity="0.6">VD</text>
  <text x="330" y="355" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#ef4444" opacity="0.6">VI</text>
  <!-- Annotations -->
  <circle cx="250" cy="275" r="5" fill="#f59e0b">
    <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite"/>
  </circle>
  <text x="250" y="130" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#f59e0b" font-weight="bold">Defecto Central (Cojines)</text>
  <line x1="250" y1="140" x2="250" y2="235" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Comunicación auricular y ventricular común</text>
</svg>`,

  estenosis_pulmonar: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdCyan" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#22d3ee"/></linearGradient>
  </defs>
  <!-- RV Hypertrophy -->
  <path d="M150,250 Q100,350 250,380 Q400,350 350,250" fill="none" stroke="#0ea5e9" stroke-width="12" opacity="0.8"/>
  <path d="M160,260 Q120,340 250,370" fill="none" stroke="#0ea5e9" stroke-width="4"/> <!-- Muscle thickening -->
  <!-- Pulmonary Artery Narrowing -->
  <path d="M200,200 L200,120 M300,200 L300,120" stroke="#333" stroke-width="2" opacity="0.3"/>
  <path d="M220,180 Q250,160 280,180" stroke="#ef4444" stroke-width="6" fill="none" stroke-linecap="round">
    <animate attributeName="stroke-width" values="6;2;6" dur="0.8s" repeatCount="indefinite"/>
  </path>
  <text x="250" y="320" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#0ea5e9" font-weight="bold">HVD</text>
  <text x="250" y="100" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#ef4444" font-weight="bold">Estenosis Valvular</text>
  <line x1="250" y1="110" x2="250" y2="170" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Hipertrofia del VD por obstrucción</text>
</svg>`,

  atresia_tricuspide: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdPurple" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <!-- RA -->
  <rect x="80" y="120" width="120" height="100" rx="10" fill="#e0f2fe" opacity="0.6"/>
  <!-- LA -->
  <rect x="300" y="120" width="120" height="100" rx="10" fill="#fee2e2" opacity="0.6"/>
  <!-- LV (Dominant) -->
  <path d="M280,240 L440,240 L400,380 L320,380 Z" fill="#fee2e2" stroke="#ef4444" stroke-width="3" opacity="0.6"/>
  <!-- Hypoplastic RV -->
  <path d="M100,240 L180,240 L160,300 L120,300 Z" fill="#e0f2fe" stroke="#3b82f6" stroke-width="1" opacity="0.4"/>
  <!-- Atretic Valve (Barrier) -->
  <line x1="100" y1="230" x2="200" y2="230" stroke="#7c3aed" stroke-width="8" stroke-linecap="round"/>
  <!-- ASD -->
  <path d="M200,160 L300,160" stroke="#7c3aed" stroke-width="4" stroke-dasharray="5,5"/>
  <text x="140" y="225" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7c3aed" font-weight="bold">Válvula Ausente</text>
  <text x="140" y="170" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#3b82f6">AD</text>
  <text x="360" y="170" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#ef4444">AI</text>
  <text x="360" y="300" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#ef4444" font-weight="bold">VI (Único)</text>
  <text x="140" y="280" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#3b82f6">VD (Hipo)</text>
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Conexión atrioventricular derecha ausente</text>
</svg>`
  ,
  tapvc: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdBlueT" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#67e8f9"/></linearGradient>
  </defs>
  <!-- Heart Chambers -->
  <rect x="100" y="150" width="140" height="120" rx="20" fill="#e0f2fe" opacity="0.5"/> <!-- RA -->
  <rect x="260" y="150" width="140" height="120" rx="20" fill="#fee2e2" opacity="0.5"/> <!-- LA -->
  <rect x="100" y="280" width="140" height="150" rx="30" fill="#e0f2fe" opacity="0.5"/> <!-- RV -->
  <rect x="260" y="280" width="140" height="150" rx="30" fill="#fee2e2" opacity="0.5"/> <!-- LV -->
  
  <!-- Pulmonary Veins Collector -->
  <path d="M380,100 L420,100 L420,200" stroke="#06b6d4" stroke-width="8" fill="none" opacity="0.6"/>
  <path d="M380,120 L420,120" stroke="#06b6d4" stroke-width="8" fill="none" opacity="0.6"/>
  
  <!-- Anomalous Connection (to SVC/RA) -->
  <path d="M420,100 L200,80 L170,150" stroke="#06b6d4" stroke-width="8" fill="none" marker-end="url(#arrow)">
     <animate attributeName="stroke-dasharray" from="0,20" to="20,0" dur="1s" repeatCount="indefinite"/>
  </path>

  <text x="350" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#06b6d4" font-weight="bold">Colector Venoso</text>
  <text x="170" y="210" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#3b82f6" opacity="0.6">AD</text>
  <text x="330" y="210" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#ef4444" opacity="0.6">AI</text>
  
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Las venas pulmonares no conectan a la AI</text>
</svg>`,

  truncus: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdMega" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d946ef"/><stop offset="100%" stop-color="#f0abfc"/></linearGradient>
  </defs>
  <!-- Single Truncal Valve -->
  <path d="M200,150 L300,150 L320,50 L180,50 Z" fill="url(#gdMega)" opacity="0.3"/>
  
  <!-- Arteries arising from Truncus -->
  <path d="M250,100 L250,50" stroke="#ef4444" stroke-width="15" opacity="0.8"/> <!-- Aorta -->
  <path d="M250,110 L200,90" stroke="#3b82f6" stroke-width="10" opacity="0.8"/> <!-- PA Left -->
  <path d="M250,110 L300,90" stroke="#3b82f6" stroke-width="10" opacity="0.8"/> <!-- PA Right -->
  
  <!-- VSD below Truncus -->
  <path d="M200,200 L300,200 L250,280 Z" fill="#d946ef" opacity="0.2"/>
  <ellipse cx="250" cy="200" rx="30" ry="10" fill="none" stroke="#d946ef" stroke-width="3"/>

  <text x="250" y="140" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#d946ef" font-weight="bold">TRONCO ÚNICO</text>
  <text x="180" y="80" text-anchor="end" font-family="sans-serif" font-size="12" fill="#3b82f6">A. Pulmonar</text>
  <text x="320" y="80" text-anchor="start" font-family="sans-serif" font-size="12" fill="#3b82f6">A. Pulmonar</text>
  <text x="250" y="40" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#ef4444">Aorta</text>
  
  <text x="250" y="350" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Salida única para ambos ventrículos + CIV</text>
</svg>`,

  ebstein: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdEbstein" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#14b8a6"/><stop offset="100%" stop-color="#5eead4"/></linearGradient>
  </defs>
  <!-- Huge RA -->
  <path d="M50,100 Q150,50 250,150 Q200,300 100,250 Z" fill="#e0f2fe" stroke="#14b8a6" stroke-width="2" opacity="0.6"/>
  <text x="120" y="150" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#14b8a6" font-weight="bold">AD (Gigante)</text>
  
  <!-- Displaced Valve -->
  <line x1="150" y1="280" x2="250" y2="280" stroke="#14b8a6" stroke-width="4" stroke-dasharray="5,2"/>
  <text x="200" y="300" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#14b8a6">Válvula Desplazada</text>
  
  <!-- Small RV -->
  <path d="M150,280 L250,280 L200,380 Z" fill="#ccfbf1" stroke="#14b8a6" stroke-width="2"/>
  <text x="200" y="340" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0f766e">VD Funcional</text>
  
  <!-- Atrialized RV -->
  <text x="200" y="240" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94a3b8" font-style="italic">VD "Atrializado"</text>
  
  <text x="350" y="200" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#ef4444" opacity="0.6">VI (Normal)</text>
  <rect x="300" y="150" width="100" height="150" rx="20" fill="#fee2e2" opacity="0.3" stroke="#ef4444"/>

  <text x="250" y="390" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Desplazamiento apical de la válvula tricúspide</text>
</svg>`
  ,
  hlhs: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdGrey" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#cbd5e1"/></linearGradient>
  </defs>
  <!-- Huge RV -->
  <path d="M100,150 Q50,250 150,380 Q250,350 220,150" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
  <text x="150" y="280" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#3b82f6" opacity="0.4">VD</text>
  
  <!-- Tiny LV -->
  <path d="M220,200 L250,200 L240,250 Z" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
  <text x="260" y="230" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#ef4444">VI (Hipo)</text>
  
  <!-- Tiny Aorta -->
  <path d="M230,100 L230,40" stroke="#ef4444" stroke-width="4" fill="none"/>
  <text x="235" y="60" text-anchor="start" font-family="sans-serif" font-size="10" fill="#ef4444">Ao (Hipo)</text>
  
  <!-- Huge Pulmonary Artery + Ductus -->
  <path d="M150,150 L150,50" stroke="#3b82f6" stroke-width="25" opacity="0.6"/>
  <path d="M165,80 L228,70" stroke="#10b981" stroke-width="10" fill="none" class="animate-pulse"/> <!-- Ductus -->
  <text x="195" y="95" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#10b981" font-weight="bold">DUCTUS</text>
  
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">VI y Aorta no funcionales. VD mantiene la circulación.</text>
</svg>`,

  dorv: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdOrange2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ea580c"/><stop offset="100%" stop-color="#fb923c"/></linearGradient>
  </defs>
  <!-- RV -->
  <path d="M100,200 Q100,350 250,350 Q250,200 250,200" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
  <text x="175" y="300" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#3b82f6" opacity="0.4">VD</text>
  
  <!-- LV connected via VSD -->
  <path d="M250,200 Q250,350 400,350 Q400,200 400,200" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="325" y="300" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#ef4444" opacity="0.4">VI</text>
  
  <!-- Both arteries from RV -->
  <path d="M150,200 L150,100" stroke="#3b82f6" stroke-width="15" opacity="0.8"/> <!-- PA -->
  <path d="M200,200 L200,100" stroke="#ef4444" stroke-width="15" opacity="0.8"/> <!-- Ao -->
  
  <text x="150" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#3b82f6">AP</text>
  <text x="200" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#ef4444">Ao</text>
  
  <!-- VSD -->
  <circle cx="250" cy="250" r="15" fill="#fff" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="250" y="255" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#ea580c" font-weight="bold">CIV</text>
  
  <!-- Arrow from LV to Ao (complex path) -->
  <path d="M300,280 Q250,280 210,210" stroke="#ea580c" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Ambos grandes vasos nacen del VD (>50%)</text>
</svg>`,

  iaa: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdRedCritical" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#b91c1c"/><stop offset="100%" stop-color="#ef4444"/></linearGradient>
  </defs>
  <!-- Heart simplified -->
  <circle cx="250" cy="250" r="60" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  
  <!-- Ascending Aorta -->
  <path d="M250,190 L250,100" stroke="#ef4444" stroke-width="18" fill="none"/>
  
  <!-- Branches -->
  <line x1="250" y1="100" x2="280" y2="60" stroke="#ef4444" stroke-width="8"/> <!-- Carotid -->
  
  <!-- INTERRUPTION GAP -->
  <text x="310" y="110" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#b91c1c" font-weight="bold">⚡ GAP</text>
  
  <!-- Descending Aorta (from Ductus) -->
  <path d="M350,150 L350,300" stroke="#b91c1c" stroke-width="18" fill="none" opacity="0.8"/>
  <path d="M250,180 Q300,170 350,150" stroke="#10b981" stroke-width="10" fill="none"/> <!-- Pulmonary/Ductus feeding Desc Ao -->
  
  <text x="300" y="190" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#10b981" font-weight="bold">DUCTUS</text>
  <text x="380" y="250" text-anchor="start" font-family="sans-serif" font-size="10" fill="#b91c1c">Ao Descendente</text>
  
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Discontinuidad completa del arco. Dependencia ductal total.</text>
</svg>`
  ,
  estenosis_aortica: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs>
    <linearGradient id="gdRedBright" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#b91c1c"/></linearGradient>
  </defs>
  <!-- LV Thick -->
  <path d="M150,200 Q100,350 300,350 Q300,200 300,200" fill="#fee2e2" stroke="#ef4444" stroke-width="4"/> <!-- Thick wall -->
  <text x="225" y="300" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#ef4444" opacity="0.4">VI (Híper)</text>
  
  <!-- Aorta -->
  <path d="M200,200 L200,100" stroke="#ef4444" stroke-width="15"/>
  <text x="200" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#ef4444">Ao</text>
  
  <!-- Valve Stenosis -->
  <path d="M190,200 L210,200 L200,180 Z" fill="#b91c1c" stroke="#991b1b"/>
  <circle cx="200" cy="190" r="4" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
  <text x="240" y="190" text-anchor="start" font-family="sans-serif" font-size="10" fill="#b91c1c" font-weight="bold">ESTENOSIS</text>
  
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Obstrucción a salida VI. Hipertrofia concéntrica.</text>
</svg>`,

  cor_triatriatum: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- LA -->
  <circle cx="250" cy="150" r="50" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <text x="250" y="150" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#6366f1" opacity="0.4">AI</text>
  
  <!-- Membrane -->
  <line x1="210" y1="150" x2="290" y2="150" stroke="#4f46e5" stroke-width="3" stroke-dasharray="4,2"/>
  <text x="310" y="155" text-anchor="start" font-family="sans-serif" font-size="10" fill="#4f46e5" font-weight="bold">MEMBRANA</text>
  
  <!-- PVs entering above membrane -->
  <path d="M200,100 L220,120" stroke="#6366f1" stroke-width="5" stroke-linecap="round"/>
  <path d="M300,100 L280,120" stroke="#6366f1" stroke-width="5" stroke-linecap="round"/>
  
  <!-- LV -->
  <path d="M200,200 Q250,300 300,200" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Membrana en AI obstruye retorno venoso.</text>
</svg>`,

  anillos_vasculares: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- Trachea and Esophagus -->
  <rect x="230" y="50" width="20" height="200" fill="#f1f5f9" stroke="#94a3b8" rx="5"/> <!-- Trachea -->
  <rect x="250" y="50" width="20" height="200" fill="#fce7f3" stroke="#f472b6" rx="5"/> <!-- Esophagus -->
  
  <!-- Vascular Ring (Double Arch) -->
  <path d="M200,150 Q250,100 300,150" stroke="#ef4444" stroke-width="8" fill="none"/> <!-- Anterior Arch -->
  <path d="M200,150 Q250,200 300,150" stroke="#ef4444" stroke-width="8" fill="none" stroke-dasharray="5,2"/> <!-- Posterior Arch (behind) -->
  
  <text x="180" y="150" text-anchor="end" font-family="sans-serif" font-size="12" fill="#ef4444">Arco Ao</text>
  <text x="310" y="150" text-anchor="start" font-family="sans-serif" font-size="10" fill="#b91c1c" font-weight="bold">COMPRESIÓN</text>
  
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10" font-family="Inter,sans-serif">Anillo vascular comprimiendo tráquea y esófago.</text>
</svg>`
  ,
  l_tga: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- Double Discordance -->
  <path d="M150,200 L150,350 L250,380 L250,200 Z" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/> <!-- Morph LV on Right side (anatomical right) -->
  <text x="200" y="300" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#ef4444" opacity="0.4">VI (Morf)</text>
  
  <path d="M250,200 L250,380 L400,350 L400,200 Z" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/> <!-- Morph RV on Left side (anatomical left) -->
  <text x="325" y="300" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#3b82f6" opacity="0.4">VD (Morf)</text>
  
  <!-- Arteries Switched too -->
  <path d="M200,200 L150,80" stroke="#3b82f6" stroke-width="12" opacity="0.8"/> <!-- PA from Morph LV -->
  <path d="M325,200 L375,80" stroke="#ef4444" stroke-width="12" opacity="0.8"/> <!-- Ao from Morph RV -->
  
  <text x="150" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#3b82f6">AP</text>
  <text x="375" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#ef4444">Ao</text>
  
  <text x="250" y="30" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="bold">DOBLE DISCORDANCIA</text>
</svg>`,

  apsi: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- Thick RV -->
  <path d="M100,200 Q100,350 200,350 L200,200 Z" fill="#e0f2fe" stroke="#3b82f6" stroke-width="4"/>
  <text x="150" y="280" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#3b82f6" opacity="0.6">VD Hipo</text>
  
  <!-- Imperforate PV -->
  <line x1="120" y1="200" x2="180" y2="200" stroke="#ef4444" stroke-width="6"/>
  <text x="150" y="190" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#ef4444" font-weight="bold">ATRESIA</text>
  
  <!-- Sinusoids -->
  <path d="M150,250 Q180,220 220,240" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
  <text x="250" y="240" text-anchor="start" font-family="sans-serif" font-size="10" fill="#ef4444">Sinusoides</text>
</svg>`,

  alcapa: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- PA -->
  <circle cx="150" cy="150" r="40" fill="#e0f2fe" stroke="#3b82f6" stroke-width="4"/>
  <text x="150" y="150" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#3b82f6">AP</text>
  
  <!-- Aorta -->
  <circle cx="350" cy="150" r="40" fill="#fee2e2" stroke="#ef4444" stroke-width="4"/>
  <text x="350" y="150" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#ef4444">Ao</text>
  
  <!-- LCA from PA -->
  <path d="M190,150 Q250,180 250,250" stroke="#ef4444" stroke-width="6" fill="none"/>
  <text x="220" y="220" text-anchor="end" font-family="sans-serif" font-size="12" fill="#ef4444">Coronaria Izq (LCA)</text>
  <text x="200" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#ef4444" font-weight="bold">¡ORIGEN ANÓMALO!</text>
  
  <!-- RCA from Ao -->
  <path d="M310,150 Q280,200 280,250" stroke="#ef4444" stroke-width="4" fill="none" opacity="0.5"/>
</svg>`,

  ventana: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- Ao and PA parallel -->
  <path d="M150,300 L150,50" stroke="#3b82f6" stroke-width="30" opacity="0.6"/>
  <path d="M250,300 L250,50" stroke="#ef4444" stroke-width="30" opacity="0.6"/>
  
  <!-- Window -->
  <rect x="165" y="150" width="70" height="40" fill="#fbbf24" opacity="0.8"/>
  <text x="200" y="175" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#000" font-weight="bold">VENTANA</text>
  
  <text x="150" y="320" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#3b82f6">AP</text>
  <text x="250" y="320" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#ef4444">Ao</text>
</svg>`,

  shone: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- Multiple Obstructions -->
  <text x="250" y="50" text-anchor="middle" fill="#be123c" font-size="14" font-weight="bold">OBSTRUCCIONES SERIADAS</text>
  
  <!-- 4 levels -->
  <rect x="200" y="80" width="100" height="20" fill="#fecdd3" stroke="#be123c" rx="5"/>
  <text x="250" y="95" text-anchor="middle" font-size="10" fill="#be123c">1. Coartación</text>
  
  <rect x="200" y="120" width="100" height="20" fill="#fecdd3" stroke="#be123c" rx="5"/>
  <text x="250" y="135" text-anchor="middle" font-size="10" fill="#be123c">2. Estenosis Subaórtica</text>
  
  <rect x="200" y="160" width="100" height="20" fill="#fecdd3" stroke="#be123c" rx="5"/>
  <text x="250" y="175" text-anchor="middle" font-size="10" fill="#be123c">3. Anillo Supra-mitral</text>
  
  <rect x="200" y="200" width="100" height="20" fill="#fecdd3" stroke="#be123c" rx="5"/>
  <text x="250" y="215" text-anchor="middle" font-size="10" fill="#be123c">4. Mitral Paracaídas</text>
  
  <path d="M250,230 L250,280" stroke="#be123c" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="250" y="300" text-anchor="middle" font-size="12" fill="#be123c">Fallo VI</text>
</svg>`,

  cimitarra: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- Right Lung Hypoplastic -->
  <path d="M300,100 Q400,100 400,300 Q300,300 300,100" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2" opacity="0.5"/>
  <text x="350" y="200" text-anchor="middle" fill="#3b82f6" opacity="0.5">Pulmón Dcho</text>
  
  <!-- Scimitar Vein -->
  <path d="M350,120 Q420,200 320,350" stroke="#ef4444" stroke-width="8" fill="none" class="animate-pulse"/>
  <text x="380" y="250" text-anchor="start" fill="#ef4444" font-weight="bold">Vena "Cimitarra"</text>
  
  <!-- IVC -->
  <rect x="280" y="340" width="40" height="60" fill="#e0f2fe" stroke="#3b82f6"/>
  <text x="300" y="370" text-anchor="middle" font-size="10" fill="#3b82f6">VCI</text>
</svg>`,

  ventriculo_unico: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- Single Large Ventricle -->
  <path d="M100,200 Q250,400 400,200 L400,150 L100,150 Z" fill="#f3e8ff" stroke="#7c3aed" stroke-width="4"/>
  <text x="250" y="250" text-anchor="middle" font-size="24" fill="#7c3aed" opacity="0.6">Ventrículo Único</text>
  
  <!-- Two Inlets -->
  <circle cx="180" cy="150" r="30" fill="#fff" stroke="#7c3aed" stroke-width="2"/>
  <text x="180" y="150" text-anchor="middle" font-size="12" fill="#7c3aed">Válvula D</text>
  
  <circle cx="320" cy="150" r="30" fill="#fff" stroke="#7c3aed" stroke-width="2"/>
  <text x="320" y="150" text-anchor="middle" font-size="12" fill="#7c3aed">Válvula I</text>
</svg>`,

  isomerismos: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- Liver Midline -->
  <rect x="150" y="300" width="200" height="60" fill="#fecca9" stroke="#ea580c" rx="10"/>
  <text x="250" y="335" text-anchor="middle" fill="#ea580c" font-weight="bold">Hígado Central</text>
  
  <!-- Bronchi Symmetry -->
  <path d="M250,100 L200,150 M250,100 L300,150" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
  <text x="250" y="80" text-anchor="middle" fill="#64748b" font-weight="bold">Bronquios Simétricos</text>
  
  <!-- Ambiguous Atria -->
  <ellipse cx="250" cy="200" rx="80" ry="40" fill="#e0e7ff" stroke="#6366f1"/>
  <text x="250" y="205" text-anchor="middle" fill="#6366f1">Atrio Común / Ambiguo</text>
</svg>`,

  fistulas_coronarias: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- Heart -->
  <path d="M150,150 L350,150 L300,350 L200,350 Z" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  
  <!-- Coronary Artery -->
  <path d="M300,180 Q350,200 350,250" stroke="#ef4444" stroke-width="4" fill="none"/>
  
  <!-- Fistula (tortuous) -->
  <path d="M350,250 Q400,300 300,320" stroke="#ef4444" stroke-width="4" fill="none" stroke-dasharray="3,2"/>
  <circle cx="300" cy="320" r="5" fill="#ef4444"/>
  
  <text x="380" y="280" text-anchor="middle" fill="#ef4444" font-weight="bold">FÍSTULA</text>
  <text x="250" y="380" text-anchor="middle" fill="#64748b" font-size="10">Conexión anormal a cámara cardíaca</text>
</svg>`,

  estenosis_mitral: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- LA -->
  <circle cx="250" cy="100" r="60" fill="#fee2e2" stroke="#ef4444"/>
  <text x="250" y="100" text-anchor="middle" font-size="14" fill="#ef4444">AI (Dilatada)</text>
  
  <!-- Mitral Valve -->
  <path d="M220,160 L280,160 L250,220 Z" fill="#fecdd3" stroke="#be123c" stroke-width="2"/>
  <text x="250" y="190" text-anchor="middle" font-size="10" fill="#be123c">Válvula</text>
  
  <!-- Parachute Muscle -->
  <line x1="250" y1="220" x2="250" y2="280" stroke="#be123c" stroke-width="4"/>
  <text x="290" y="250" text-anchor="start" font-size="10" fill="#be123c">Músculo Papilar Único</text>
  
  <!-- LV -->
  <path d="M150,200 Q150,350 350,350 Q350,200 350,200" fill="none" stroke="#ef4444" stroke-width="2"/>
</svg>`,

  agenesia_pulmonar: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <!-- RV -->
  <path d="M150,300 L250,300 L200,200 Z" fill="#e0f2fe" stroke="#3b82f6"/>
  
  <!-- Absent Valve -->
  <line x1="180" y1="200" x2="220" y2="200" stroke="#3b82f6" stroke-width="2" stroke-dasharray="2,2"/>
  
  <!-- Huge PA Branches -->
  <circle cx="150" cy="150" r="50" fill="#cffafe" stroke="#0891b2" stroke-width="2"/>
  <text x="150" y="150" text-anchor="middle" font-size="10" fill="#0891b2">Rama Dcha Gigante</text>
  
  <circle cx="250" cy="150" r="50" fill="#cffafe" stroke="#0891b2" stroke-width="2"/>
  <text x="250" y="150" text-anchor="middle" font-size="10" fill="#0891b2">Rama Izq Gigante</text>
  
  <!-- Trachea Compressed -->
  <rect x="190" y="100" width="20" height="100" fill="#f1f5f9" stroke="#94a3b8" opacity="0.5"/>
  <text x="200" y="90" text-anchor="middle" font-size="10" fill="#94a3b8">Tráquea</text>
  
  <text x="350" y="200" text-anchor="start" font-size="12" fill="#ef4444" font-weight="bold">COMPRESIÓN BRONQUIAL</text>
</svg>`
};
