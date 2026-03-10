export default function decorate(block) {
  const content = block.querySelector('div');

  // Create hero structure
  const heroWrapper = document.createElement('div');
  heroWrapper.className = 'hero-wrapper';

  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';

  // Extract content from block
  const rows = [...content.querySelectorAll(':scope > div')];

  // Badge
  if (rows[0]) {
    const badge = document.createElement('div');
    badge.className = 'hero-badge';
    badge.textContent = rows[0].textContent;
    heroContent.append(badge);
  }

  // Title
  if (rows[1]) {
    const title = document.createElement('h1');
    title.className = 'hero-title';
    title.innerHTML = rows[1].innerHTML;
    heroContent.append(title);
  }

  // Subtitle
  if (rows[2]) {
    const subtitle = document.createElement('p');
    subtitle.className = 'hero-subtitle';
    subtitle.textContent = rows[2].textContent;
    heroContent.append(subtitle);
  }

  // Stats
  if (rows[3]) {
    const stats = document.createElement('div');
    stats.className = 'hero-stats';
    const statItems = rows[3].textContent.split('|');
    statItems.forEach(stat => {
      const [number, label] = stat.trim().split('-');
      const statItem = document.createElement('div');
      statItem.className = 'stat-item';
      statItem.innerHTML = `
        <div class="stat-number">${number}</div>
        <div class="stat-label">${label}</div>
      `;
      stats.append(statItem);
    });
    heroContent.append(stats);
  }

  // Buttons
  if (rows[4]) {
    const buttons = document.createElement('div');
    buttons.className = 'hero-buttons';
    const links = rows[4].querySelectorAll('a');
    links.forEach((link, index) => {
      link.className = index === 0 ? 'btn btn-primary' : 'btn btn-secondary';
    });
    buttons.append(...links);
    heroContent.append(buttons);
  }

  heroWrapper.append(heroContent);
  block.textContent = '';
  block.append(heroWrapper);
}
