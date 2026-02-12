// Card component (reusable)
export function createCard({ id, icon, title, subtitle, description, tags, color, onClick }) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = id;
    card.innerHTML = `
    <div class="card-header">
      <div class="card-icon" style="background:${color}22;color:${color}">${icon}</div>
      <div>
        <div class="card-title">${title}</div>
        ${subtitle ? `<div class="card-subtitle">${subtitle}</div>` : ''}
      </div>
    </div>
    ${description ? `<div class="card-description">${description}</div>` : ''}
    ${tags ? `<div class="card-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
  `;
    if (onClick) card.addEventListener('click', onClick);
    return card;
}
