// Renderer Logic - Global Functions

function renderHome() {
  const container = document.getElementById('page-content');
  if (!container) return;
  container.innerHTML = '';

  // 1. Group by Category
  const categories = {};
  const orderedCategories = [
    'Cortocircuitos (Shunts)',
    'Lesiones Obstructivas',
    'Cianóticas y Complejas'
  ];

  cardiopatias.forEach(c => {
    const cat = c.categoria || 'Otras';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(c);
  });

  // 2. Render each category section
  orderedCategories.forEach(catName => {
    if (categories[catName] && categories[catName].length > 0) {
      const section = document.createElement('div');
      section.className = 'category-section';

      const title = document.createElement('div');
      title.className = 'category-title';
      title.innerHTML = `<span style="color:var(--primary)">${getCategoryIcon(catName)}</span> ${catName}`;
      section.appendChild(title);

      const grid = document.createElement('div');
      grid.className = 'cards-grid';

      categories[catName].forEach(cardiopatia => {
        const card = createCard(cardiopatia);
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    }
  });

  // Render any 'Otras' if exists and not in order
  Object.keys(categories).forEach(cat => {
    if (!orderedCategories.includes(cat)) {
      const section = document.createElement('div');
      section.className = 'category-section';
      const title = document.createElement('div');
      title.className = 'category-title';
      title.textContent = cat;
      section.appendChild(title);
      const grid = document.createElement('div');
      grid.className = 'cards-grid';
      categories[cat].forEach(c => grid.appendChild(createCard(c)));
      section.appendChild(grid);
      container.appendChild(section);
    }
  });
}

function renderDetail(id) {
  const container = document.getElementById('page-content');
  if (!container) return;

  const c = getCardiopatiaById(id);
  if (!c) {
    container.innerHTML = `<div class="error-msg">Cardiopatía no encontrada</div>`;
    return;
  }

  // Diagram SVG (from diagrams.js global object)
  const svg = diagrams[c.id] || '<div class="no-diagram">Sin esquema disponible</div>';

  container.innerHTML = `
    <div class="detail-view">
      <div class="detail-header">
        <div class="detail-title">
          <span class="tag" style="background:${c.color}20;color:${c.color}">${c.categoria}</span>
          <h2 class="path-title" style="color:${c.color}">${c.nombre}</h2>
        </div>
        <button class="close-btn" onclick="window.location.hash='/'">✕</button>
      </div>

      <div class="detail-grid">
        <div class="diagram-column">
          <div class="diagram-container">
            ${svg}
          </div>
          <div class="detail-description-box">
             <strong>${c.nombreCorto}</strong>: ${c.descripcion}
          </div>
        </div>

        <div class="info-column">
          <div class="info-tabs">
            <button class="tab-btn active" onclick="switchTab(this, 'diagnostico')">Diagnóstico</button>
            <button class="tab-btn" onclick="switchTab(this, 'consecuencias')">Consecuencias</button>
            <button class="tab-btn" onclick="switchTab(this, 'tratamiento')">Tratamiento</button>
            <button class="tab-btn" onclick="switchTab(this, 'cirugia')">Cirugía</button>
            <button class="tab-btn" onclick="switchTab(this, 'eco')">Ecocardiografía</button>
          </div>

          <div id="tab-diagnostico" class="tab-content">
            <h3>${c.diagnostico.icon} ${c.diagnostico.titulo}</h3>
            ${c.diagnostico.contenido}
          </div>
          
          <div id="tab-consecuencias" class="tab-content" style="display:none">
            <h3>${c.consecuencias.icon} ${c.consecuencias.titulo}</h3>
            ${c.consecuencias.contenido}
          </div>

          <div id="tab-tratamiento" class="tab-content" style="display:none">
            <h3>${c.tratamientoAgudo.icon} ${c.tratamientoAgudo.titulo}</h3>
            ${c.tratamientoAgudo.contenido}
          </div>

          <div id="tab-cirugia" class="tab-content" style="display:none">
            <h3>${c.cirugia.icon} ${c.cirugia.titulo}</h3>
            ${c.cirugia.contenido}
          </div>

          <div id="tab-eco" class="tab-content" style="display:none">
            <h3>📹 Ecocardiografía</h3>
            ${renderVideoSection(c)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchTab(btn, tabId) {
  // Update buttons
  const buttons = btn.parentElement.querySelectorAll('.tab-btn');
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Update content
  const container = btn.parentElement.parentElement;
  container.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
  container.querySelector('#tab-' + tabId).style.display = 'block';
}

function getCategoryIcon(cat) {
  if (cat.includes('Shunts')) return '🔀';
  if (cat.includes('Obstructivas')) return '⛔';
  if (cat.includes('Cianóticas')) return '🧬';
  return '📋';
}

function createCard(cardiopatia) {
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => { window.location.hash = '/' + cardiopatia.id; };
  card.style.borderTop = `4px solid ${cardiopatia.color}`;

  const iconDiv = document.createElement('div');
  iconDiv.className = 'card-icon';
  iconDiv.textContent = cardiopatia.icon;
  iconDiv.style.backgroundColor = `${cardiopatia.color}10`; // Soft background

  const title = document.createElement('h3');
  title.textContent = cardiopatia.nombreCorto;

  const desc = document.createElement('p');
  desc.textContent = cardiopatia.descripcion;
  // Truncate description
  if (desc.textContent.length > 80) desc.textContent = desc.textContent.substring(0, 80) + '...';

  const tagsDiv = document.createElement('div');
  tagsDiv.className = 'card-tags';
  cardiopatia.tags.slice(0, 2).forEach(tag => {
    const t = document.createElement('span');
    t.className = 'tag';
    t.textContent = tag;
    tagsDiv.appendChild(t);
  });

  card.appendChild(iconDiv);
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(tagsDiv);

  return card;
}

function renderVideoSection(c) {
  // If specific video defined (ID or full URL), embed it
  if (c.video) {
    // Extract ID if it's a full URL
    let videoID = c.video;
    if (c.video.includes('v=')) {
      videoID = c.video.split('v=')[1].split('&')[0];
    } else if (c.video.includes('youtu.be/')) {
      videoID = c.video.split('youtu.be/')[1].split('?')[0];
    }

    return `
       <div class="video-container">
         <iframe src="https://www.youtube.com/embed/${videoID}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
       </div>
       <div style="margin-top:0.5rem;font-size:0.9rem;color:var(--text-secondary);text-align:center">
         Fuente: YouTube (Seleccionado manualmente) - <a href="https://www.youtube.com/watch?v=${videoID}" target="_blank" style="color:var(--primary)">Ver original</a>
       </div>
    `;
  }

  // Fallback: Search Button
  const query = encodeURIComponent(`Ecocardiografía ${c.nombre}`);
  const url = `https://www.youtube.com/results?search_query=${query}`;

  return `
    <div class="video-placeholder">
      <div style="font-size:3rem;opacity:0.5">🔍</div>
      <p>No hay un vídeo específico asignado a esta patología.</p>
      <a href="${url}" target="_blank" class="video-btn">
        Buscar en YouTube ↗
      </a>
      <p style="font-size:0.8rem">Esto abrirá una búsqueda con los mejores resultados clínicos para: <strong>${c.nombre}</strong></p>
    </div>
  `;
}

// Global Exports
window.renderHome = renderHome;
window.renderDetail = renderDetail;
// We don't need distinct showCardiopatiaDetail anymore as renderDetail handles it
