# GAMER HUB

Tomader Valorant clips er jonno private website. Niche shob instructions dewa ache.

## Site kivabe kaj kore

1. **index.html** — landing page. 6 jon er naam/pic scroll hoy. Click korle password page e jay.
2. **login.html** — password chay. Password = `naam + gay` (lowercase). Jemon Atonu er jonno `atonugay`. Shothik hole 5.5 sec random ekta roast line dekhabe, tarpor main page e niye jabe.
3. **main.html** — "দেখ শালা কত বাজে খেলোস" header, 6 ta department (Ace, Clutch, Whiff, Lore, NoScope, Uncensored).
4. **department.html** — protyek department er clips dekhabe (JSON theke load hoy).

⚠️ **Note:** Eta shudhu "fun gate" — real security na, karo kach theke password lukanor jonno na (site public URL hole je keu password guess korte pare). Real privacy chaile GitHub repo ta **private** rekho, ba pura site ta password-protect kora hosting (Netlify/Vercel diye) use koro.

---

## Ki ki tomake nijer hate boshate hobe

### 1. Skye flash sound
`assets/audio/skye-flash.mp3` — ei naam e ekta mp3 file rakho. Green pakhi te click korle eta bajbe.

### 2. Prottek jon er voice line
`assets/audio/voices/` folder banaye tar bhitor eibhabe rakho (shob lowercase):
```
assets/audio/voices/atonu.mp3
assets/audio/voices/zayeem.mp3
assets/audio/voices/naveen.mp3
assets/audio/voices/areeb.mp3
assets/audio/voices/joy.mp3
assets/audio/voices/saniat.mp3
```
Landing page e naam/pic click korle ar login er por welcome screen e — dutoi jaygay eta bajbe. 3-4 second er moddhe rakhle best.

### 3. Agent flash icons
Ekhon `landing.js`-e Gekko/Phoenix/KAY-O/Yoru er jonno emoji (🦎🔥🤖🌀) boshano ache — shudhu placeholder. Real icon lagle:
- `assets/icons/` e image file rakho (png/svg, transparent background best)
- `js/landing.js` file e `AGENT_ICONS` array ache, oikhane `icon: '🦎'` er jaygay `icon: '<img src="assets/icons/gekko.png">'` erokom likhe dile img hisebe show korbe (`el.textContent` ke `el.innerHTML` te change korte hobe oi line e)

### 4. Green pakhi (Skye bird)
`index.html`-e `#skye-bird` div-e ekhon emoji (🐦) ache. Real icon dile:
```html
<div id="skye-bird" title="click me"><img src="assets/icons/skye-bird.png" width="40"></div>
```

---

## Clips kivabe jog korbe (protyek department e)

1. Tomar video file (.mp4, 100MB er niche) copy kore rakho:
   `clips/ace/` , `clips/clutch/` , `clips/whiff/` , `clips/lore/` , `clips/noscope/` , `clips/uncensored/` — je department e felba oikhane.

2. Shei department er `clips.json` file open kore entry add koro. Jemon `clips/ace/clips.json`:
```json
{
  "clips": [
    { "file": "ace1.mp4", "title": "Atonu insane ace on Bind" },
    { "file": "ace2.mp4", "title": "Joy clutch ace" }
  ]
}
```
`file` = exact filename ja oi folder e rakhso. `title` = jekono text (optional, na dile filename e show korbe).

3. GitHub e push korle automatic show hobe — kono code change lagbe na.

---

## GitHub Pages e publish korar steps

1. Ei pura `gamerhub` folder ekta GitHub repo te push koro (private repo rakhle better, jehetu clips personal).
2. Repo Settings > Pages > Source e `main` branch (root) select koro > Save.
3. Kisu minute por link active hobe: `https://<username>.github.io/<repo-name>/`
4. Note: repo **private** thakle GitHub Pages free tier e site public thakbe (URL guess na korle keu dhukte parbe na), kintu GitHub Pro/Org thakle "private Pages" option-o ache.

---

## Folder structure

```
gamerhub/
├── index.html          <- landing page
├── login.html           <- password gate
├── main.html             <- department hub
├── department.html   <- ekta template, shob department eta use kore
├── css/style.css
├── js/
│   ├── landing.js
│   ├── login.js
│   ├── main.js
│   └── department.js
├── data/
│   ├── players.json      <- 6 jon er naam + pic path
│   ├── lines.json         <- roast lines pool
│   └── departments.json
├── clips/
│   ├── ace/clips.json
│   ├── clutch/clips.json
│   ├── whiff/clips.json
│   ├── lore/clips.json
│   ├── noscope/clips.json
│   └── uncensored/clips.json
└── assets/
    ├── photos/   <- tomader 6 jon er pic (already added)
    ├── audio/    <- flash sound + voice lines (tumi add korba)
    └── icons/    <- agent icons + bird icon (tumi add korba)
```

---

## Notun member add korte chaile

`data/players.json`-e ekta entry add koro:
```json
{ "name": "NewGuy", "photo": "assets/photos/newguy.jpg" }
```
Pic ta `assets/photos/` e rakho. Password automatic `newguygay` hoye jabe — kono code change lagbe na.
