// Modal component for PubMed search results (global functions)

function createModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'search-modal';
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <span class="modal-title">🔬 Resultados de PubMed</span>
        <button class="modal-close" id="modal-close-btn">✕</button>
      </div>
      <div class="modal-body" id="modal-body"></div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function openModal() { document.getElementById('search-modal')?.classList.add('visible'); }
function closeModal() { document.getElementById('search-modal')?.classList.remove('visible'); }
function setModalContent(html) { const b = document.getElementById('modal-body'); if (b) b.innerHTML = html; }

function renderSearchLoading() {
  return `<div class="search-loading"><div class="spinner"></div><p>Buscando artículos en PubMed...</p></div>`;
}

function renderSearchEmpty(query) {
  return `<div class="search-empty"><div class="empty-icon">📭</div><p>No se encontraron resultados para "<strong>${query}</strong>".</p><p style="margin-top:8px;font-size:0.82rem">Prueba con términos en inglés para mejores resultados.</p></div>`;
}

function renderSearchResults(results, query) {
  if (!results || results.length === 0) return renderSearchEmpty(query);
  return `
    <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:16px">${results.length} artículos encontrados para "<strong>${query}</strong>"</p>
    ${results.map(r => `
      <div class="pubmed-result">
        <div class="pubmed-result-title"><a href="${r.url}" target="_blank" rel="noopener">${r.title}</a></div>
        <div class="pubmed-result-authors">${r.authors || 'Autores no disponibles'}</div>
        ${r.journal ? `<div class="pubmed-result-journal">${r.journal} · ${r.pubDate}</div>` : ''}
      </div>
    `).join('')}
  `;
}

function renderSearchError() {
  return `<div class="search-empty"><div class="empty-icon">⚠️</div><p>Error al conectar con PubMed.</p><p style="margin-top:8px;font-size:0.82rem">Verifica tu conexión a internet e inténtalo de nuevo.</p></div>`;
}
