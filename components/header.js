// Header & sidebar components (global functions)

// --- Theme Logic ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
  // Use text + icon for sidebar footer
}

// Initialize theme immediately
initTheme();

function renderHeader(headerEl) {
  headerEl.innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem">
      <button class="hamburger" id="hamburger-btn" aria-label="Menu">☰</button>
      <span class="header-title">Cardiopatías Congénitas</span>
    </div>
    <div style="display:flex;align-items:center;gap:1rem">
      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" id="search-input"
               placeholder="Buscar evidencia (PubMed)..."
               autocomplete="off" />
      </div>
    </div>
  `;
}

function renderSidebar(sidebarEl, activeId) {
  const colors = {
    cia: '#3b82f6', civ: '#8b5cf6', fallot: '#ec4899',
    tga: '#ef4444', coartacion: '#06b6d4', dap: '#10b981',
    canal_av: '#f59e0b', estenosis_pulmonar: '#0ea5e9', atresia_tricuspide: '#7c3aed',
    tapvc: '#06b6d4', truncus: '#d946ef', ebstein: '#14b8a6',
    hlhs: '#be185d', dorv: '#ea580c', iaa: '#b91c1c',
    estenosis_aortica: '#dc2626', cor_triatriatum: '#6366f1', anillos_vasculares: '#f43f5e'
  };

  sidebarEl.innerHTML = `
    <div class="sidebar-logo" onclick="window.location.hash='/'" role="button" tabindex="0">
      <div class="logo-content">
        <div class="logo-icon-box">🫀</div>
        <div class="logo-text">
          <h1>Cardiopatías Congénitas</h1>
          <p>Manual Digital</p>
        </div>
      </div>
    </div>
    
    <nav class="sidebar-nav">
      <div class="sidebar-section-title">General</div>
      <a class="nav-item ${!activeId ? 'active' : ''}" href="#/" title="Inicio">
        <span class="nav-icon">🏥</span> <span class="nav-text">Inicio</span>
      </a>
      
      ${(() => {
      const categories = {};
      const orderedCategories = [
        'Cortocircuitos (Shunts)',
        'Lesiones Obstructivas',
        'Cianóticas y Complejas'
      ];

      // Grouping
      cardiopatias.forEach(c => {
        const cat = c.categoria || 'Otras';
        if (!categories[cat]) categories[cat] = [];
        categories[cat].push(c);
      });

      // HTML Generation
      let html = '';

      // Render ordered categories
      orderedCategories.forEach(cat => {
        if (categories[cat] && categories[cat].length > 0) {
          html += `<div class="sidebar-section-title">${cat}</div>`;
          categories[cat].forEach(c => {
            html += `
                <a class="nav-item ${activeId === c.id ? 'active' : ''}" href="#/${c.id}" title="${c.nombreCorto}">
                  <span class="nav-dot" style="background:${c.color}"></span>
                  <span class="nav-text">${c.nombreCorto}</span>
                </a>`;
          });
        }
      });

      // Render others
      Object.keys(categories).forEach(cat => {
        if (!orderedCategories.includes(cat)) {
          html += `<div class="sidebar-section-title">${cat}</div>`;
          categories[cat].forEach(c => {
            html += `
                <a class="nav-item ${activeId === c.id ? 'active' : ''}" href="#/${c.id}" title="${c.nombreCorto}">
                  <span class="nav-dot" style="background:${c.color}"></span>
                  <span class="nav-text">${c.nombreCorto}</span>
                </a>`;
          });
        }
      });

      return html;
    })()}
    </nav>
    
    <div class="sidebar-footer">
      <button id="theme-toggle" class="sidebar-theme-btn" onclick="toggleTheme()">
        🌙 Modo Oscuro
      </button>
      <div style="margin-top:1rem;font-size:0.75rem;color:var(--text-muted);opacity:0.7">
        Evidencia científica actualizada.<br>
        Uso clínico profesional.
      </div>
    </div>
  `;

  // Re-run icon update because button was just rendered
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateThemeIcon(currentTheme);
}

// Make functions global
window.renderHeader = renderHeader;
window.renderSidebar = renderSidebar;
window.toggleTheme = toggleTheme;
