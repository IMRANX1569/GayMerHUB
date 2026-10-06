const params = new URLSearchParams(window.location.search);
const playerName = params.get('player') || '';

let playersData = null;
let linesData = null;

Promise.all([
  fetch('data/players.json').then(r => r.json()),
  fetch('data/lines.json').then(r => r.json())
]).then(([players, lines]) => {
  playersData = players;
  linesData = lines;

  const player = players.players.find(p => p.name.toLowerCase() === playerName.toLowerCase());
  if (!player){
    window.location.href = 'index.html';
    return;
  }
  document.getElementById('playerPhoto').src = player.photo;
  document.getElementById('playerPhoto').alt = player.name;
  document.getElementById('playerName').textContent = player.name;
});

document.getElementById('loginBtn').addEventListener('click', tryLogin);
document.getElementById('passInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') tryLogin();
});

function tryLogin(){
  const entered = document.getElementById('passInput').value.trim().toLowerCase();
  const expected = playerName.toLowerCase() + 'gay';

  if (entered !== expected){
    document.getElementById('errorMsg').textContent = 'ভুল পাসওয়ার্ড, আবার চেষ্টা কর।';
    return;
  }

  // mark this player as logged in for this browser tab / session
  sessionStorage.setItem('gh_player', playerName);
  showWelcome();
}

function showWelcome(){
  document.getElementById('loginWrap').style.display = 'none';
  const screen = document.getElementById('welcomeScreen');
  screen.style.display = 'flex';

  const pool = linesData.lines;
  const raw = pool[Math.floor(Math.random() * pool.length)];
  document.getElementById('roastLine').textContent = raw.replace('{name}', playerName);

  // play that player's welcome voice line if added at assets/audio/voices/<name>.mp3
  const voice = document.getElementById('voiceSound');
  voice.src = `assets/audio/voices/${playerName.toLowerCase()}.mp3`;
  voice.play().catch(() => {});

  setTimeout(() => {
    window.location.href = 'main.html';
  }, 5500);
}
