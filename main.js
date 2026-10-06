const currentPlayer = sessionStorage.getItem('gh_player');
if (!currentPlayer){
  window.location.href = 'index.html';
}

document.getElementById('welcomeBack').textContent = currentPlayer ? `${currentPlayer} eshe geso...` : '';

fetch('data/departments.json')
  .then(r => r.json())
  .then(data => {
    const grid = document.getElementById('deptGrid');
    grid.innerHTML = data.departments.map(d => `
      <div class="dept-card" onclick="location.href='department.html?dept=${d.slug}'">
        <h3>${d.label}</h3>
      </div>
    `).join('');
  });
