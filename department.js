const currentPlayer = sessionStorage.getItem('gh_player');
if (!currentPlayer){
  window.location.href = 'index.html';
}

const params = new URLSearchParams(window.location.search);
const slug = params.get('dept');

Promise.all([
  fetch('data/departments.json').then(r => r.json()),
  fetch(`clips/${slug}/clips.json`).then(r => r.ok ? r.json() : { clips: [] })
]).then(([deptData, clipData]) => {
  const dept = deptData.departments.find(d => d.slug === slug);
  document.getElementById('deptTitle').textContent = dept ? dept.label : 'Unknown';

  const grid = document.getElementById('clipGrid');
  const clips = clipData.clips || [];

  if (clips.length === 0){
    document.getElementById('emptyNote').style.display = 'block';
    return;
  }

  grid.innerHTML = clips.map(c => `
    <div class="clip-card">
      <video src="clips/${slug}/${c.file}" controls preload="metadata"></video>
      <div class="clip-title">${c.title || c.file}</div>
    </div>
  `).join('');
}).catch(() => {
  document.getElementById('deptTitle').textContent = slug;
  document.getElementById('emptyNote').style.display = 'block';
});
