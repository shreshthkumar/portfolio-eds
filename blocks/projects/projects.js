export default function decorate(block) {
  const grid = document.createElement('div');
  grid.className = 'projects-grid';

  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 5) {
      const card = document.createElement('div');
      card.className = cols[5] && cols[5].textContent.toLowerCase() === 'large'
        ? 'project-card large'
        : 'project-card';

      const badge = document.createElement('div');
      badge.className = 'project-badge';
      badge.textContent = cols[0].textContent;

      const content = document.createElement('div');
      content.className = 'project-content';

      const industry = document.createElement('div');
      industry.className = 'project-industry';
      industry.textContent = cols[1].textContent;

      const title = document.createElement('h3');
      title.textContent = cols[2].textContent;

      const description = document.createElement('p');
      description.innerHTML = cols[3].innerHTML;

      const tags = document.createElement('div');
      tags.className = 'project-tags';
      const tagList = cols[4].textContent.split(',');
      tagList.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag.trim();
        tags.append(tagSpan);
      });

      content.append(industry, title, description, tags);
      card.append(badge, content);
      grid.append(card);
    }
  });

  block.textContent = '';
  block.append(grid);
}
