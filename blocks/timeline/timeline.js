export default function decorate(block) {
  const timelineWrapper = document.createElement('div');
  timelineWrapper.className = 'timeline-wrapper';

  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 4) {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.setAttribute('data-year', cols[0].textContent.trim());

      const marker = document.createElement('div');
      marker.className = cols[3].textContent.toLowerCase() === 'milestone'
        ? 'timeline-marker milestone'
        : 'timeline-marker';

      const content = document.createElement('div');
      content.className = 'timeline-content';

      // Header
      const header = document.createElement('div');
      header.className = 'timeline-header';
      const title = document.createElement('h3');
      title.textContent = cols[1].textContent;
      const company = document.createElement('span');
      company.className = 'company';
      company.textContent = cols[2].textContent;
      const duration = document.createElement('span');
      duration.className = 'duration';
      duration.textContent = cols[0].textContent;
      header.append(title, company, duration);

      // Description
      const description = document.createElement('p');
      description.innerHTML = cols[4] ? cols[4].innerHTML : '';

      // Tags
      const tagsDiv = document.createElement('div');
      tagsDiv.className = 'timeline-tags';
      if (cols[5]) {
        const tags = cols[5].textContent.split(',');
        tags.forEach(tag => {
          const tagSpan = document.createElement('span');
          tagSpan.className = 'tag';
          tagSpan.textContent = tag.trim();
          tagsDiv.append(tagSpan);
        });
      }

      // Clients (if any)
      if (cols[6]) {
        const clientLogos = document.createElement('div');
        clientLogos.className = 'client-logos';
        const clients = cols[6].textContent.split(',');
        clients.forEach(client => {
          const clientSpan = document.createElement('span');
          clientSpan.className = 'client-name';
          clientSpan.textContent = client.trim();
          clientLogos.append(clientSpan);
        });
        content.append(header, description, clientLogos, tagsDiv);
      } else {
        content.append(header, description, tagsDiv);
      }

      item.append(marker, content);
      timelineWrapper.append(item);
    }
  });

  block.textContent = '';
  block.append(timelineWrapper);
}
