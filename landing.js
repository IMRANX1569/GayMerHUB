// ---- Roster ----
fetch('data/players.json')
  .then(r => r.json())
  .then(data => {
    const track = document.getElementById('rosterTrack');
    // render list twice back-to-back so the CSS scroll loop is seamless
    const renderOnce = () => data.players.map(p => `
      <div class="player-card" data-name="${p.name}">
        <img src="${p.photo}" alt="${p.name}">
        <span class="pname">${p.name}</span>
      </div>
    `).join('');
    track.innerHTML = renderOnce() + renderOnce();

    track.querySelectorAll('.player-card').forEach(card => {
      card.addEventListener('click', () => onPlayerClick(card.dataset.name));
    });
  });

function onPlayerClick(name){
  // play that player's voice line if you've added one at assets/audio/voices/<name-lowercase>.mp3
  const voice = document.getElementById('voiceSound');
  voice.src = `assets/audio/voices/${name.toLowerCase()}.mp3`;
  voice.play().catch(() => {}); // ignore if file not added yet

  setTimeout(() => {
    window.location.href = `login.html?player=${encodeURIComponent(name)}`;
  }, 400);
}

// ---- Skye bird flash ----
document.getElementById('skye-bird').addEventListener('click', (e) => {
  e.stopPropagation();
  const overlay = document.getElementById('flashOverlay');
  const sound = document.getElementById('flashSound');
  sound.currentTime = 0;
  sound.play().catch(() => {});
  overlay.classList.remove('active');
  void overlay.offsetWidth; // restart animation
  overlay.classList.add('active');
  setTimeout(() => overlay.classList.remove('active'), 3000);
});

// ---- Random floating agent flash icons ----
// Replace these emoji with real Gekko / Phoenix / KAY-O / Yoru flash icons in assets/icons/
const AGENT_ICONS = [
  { name: 'Gekko',  icon: '🦎' },
  { name: 'Phoenix', icon: '🔥' },
  { name: 'KAY/O',  icon: '🤖' },
  { name: 'Yoru',   icon: '🌀' }
];

AGENT_ICONS.forEach((agent, i) => {
  const el = document.createElement('div');
  el.className = 'flash-icon';
  el.textContent = agent.icon;
  el.title = agent.name;
  el.style.animation = `flyAround ${16 + i * 4}s linear infinite`;
  el.style.animationDelay = `${i * 2}s`;
  document.body.appendChild(el);
});
