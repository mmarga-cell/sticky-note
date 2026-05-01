/* ─────────────────────────────────────────────
   ALIVE EACH CO. PERSON IN MY DAY
   gallery.js
───────────────────────────────────────────── */

// ── PORTRAIT SETS ──────────────────────────────────────────────────────────
// Each entry: sketches[] with { f: filename, n: note } + optional inspo photo.
// Place all image files in the same folder as index.html.
// To add a set for a new person, add an entry matching their name exactly.

const sets = {
  'Adams': {
    sketches: [
      { f: 'sticky/adams2.jpg',  n: 'HAT & THUMBS UP — FIRST ATTEMPT' },
      { f: 'sticky/Adams.jpg',   n: 'BODY SKETCH — SECOND PASS' },
      { f: 'sticky/adams3.jpg',  n: 'SIDE PROFILE — THIRD PASS' },
    ],
    inspo: 'approved images/B&W/Adams.jpg',
  },
  'Anna': {
    sketches: [
      { f: 'sticky/anna.jpg',  n: 'FRECKLES FRONT' },
      { f: 'sticky/anna2.jpg', n: 'SIDE PROFILE' },
    ],
    inspo: 'approved images/B&W/Anna.jpg',
  },
  'Ben': {
    sketches: [
      { f: 'sticky/ben.jpg',  n: 'BIG EYES — FIRST PASS' },
      { f: 'sticky/ben2.jpg', n: 'SIDE PROFILE — SECOND PASS' },
      { f: 'sticky/ben3.jpg', n: 'HAT — THIRD PASS' },
    ],
    inspo: 'approved images/B&W/Ben.jpg',
  },
  'Christina': {
    sketches: [
      { f: 'sticky/christina 2.jpg', n: 'FIRST PASS' },
      { f: 'sticky/christina3.jpg',  n: 'SMILING — SECOND PASS' },
      { f: 'sticky/christina.jpg',   n: 'THIRD PASS' },
    ],
    inspo: 'approved images/B&W/Christina.jpg',
  },
  'Daisy': {
    sketches: [
      { f: 'sticky/daisy.jpg',  n: 'FIRST PASS' },
      { f: 'sticky/daisy2.jpg', n: 'SIDE — SECOND PASS' },
      { f: 'sticky/daisy3.jpg', n: 'FRONT — THIRD PASS' },
      { f: 'sticky/daisy4.jpg', n: 'ANOTHER PASS' },
    ],
    inspo: 'approved images/B&W/Daisy.jpg',
  },
  'Erica': {
    sketches: [
      { f: 'sticky/erica.jpg',  n: 'FIRST PASS' },
      { f: 'sticky/erica2.jpg', n: 'SECOND PASS' },
    ],
    inspo: 'approved images/B&W/Erica.jpg',
  },
  'Icarus': {
    sketches: [
      { f: 'sticky/Icarus.jpg',  n: 'FIRST PASS' },
      { f: 'sticky/icarus2.jpg', n: 'SECOND PASS' },
      { f: 'sticky/Icarus3.jpg', n: 'THIRD PASS' },
      { f: 'sticky/icarus4.jpg', n: 'FOURTH PASS' },
    ],
    inspo: 'approved images/B&W/icarus.jpg',
  },
  'Katy': {
    sketches: [
      { f: 'sticky/katy.jpg',  n: 'FIRST PASS' },
      { f: 'sticky/katy2.jpg', n: 'SECOND PASS' },
    ],
    inspo: 'approved images/B&W/katy.jpg',
  },
  'Kelly': {
    sketches: [
      { f: 'sticky/kelly.jpg',  n: 'HIMA — CAP FRONT' },
      { f: 'sticky/kelly2.jpg', n: 'CAP SIDE GREEN' },
      { f: 'sticky/kelly3.jpg', n: 'CURLY FRONT PINK' },
      { f: 'sticky/kelly4.jpg', n: 'HEADPHONES PINK' },
    ],
    inspo: 'approved images/B&W/Kelly.jpg',
  },
  'Michael': {
    sketches: [
      { f: 'sticky/micheal.jpg',  n: 'BEARD FRONT GREEN' },
      { f: 'sticky/micheal2.jpg', n: 'GLASSES PINK' },
      { f: 'sticky/micheal3.jpg', n: 'BACK OF HEAD' },
    ],
    inspo: 'approved images/B&W/micheal.jpg',
  },
  'Nadia': {
    sketches: [
      { f: 'sticky/nadia.jpg',  n: 'GLASSES ORANGE' },
      { f: 'sticky/nadia2.jpg', n: 'BRAID SIDE GREEN' },
      { f: 'sticky/nadia3.jpg', n: 'BUN SIDE PINK' },
    ],
    inspo: 'approved images/B&W/Nadia.jpg',
  },
  'Patrick': {
    sketches: [
      { f: 'sticky/patrick.jpg',  n: 'GLASSES FRONT ORANGE' },
      { f: 'sticky/patrick2.jpg', n: 'CAP SIDE ORANGE' },
      { f: 'sticky/patrick3.jpg', n: 'SIDE PROFILE GREEN' },
    ],
    inspo: 'approved images/B&W/Patrick.jpg',
  },
  'Yue': {
    sketches: [
      { f: 'sticky/yue.jpg',  n: 'BIG GLASSES ORANGE' },
      { f: 'sticky/yue2.jpg', n: 'GLASSES PINK' },
      { f: 'sticky/yue3.jpg', n: 'GLASSES GREEN' },
    ],
    inspo: 'approved images/B&W/yue.jpg',
  },
};

// ── PORTRAIT DATA ──────────────────────────────────────────────────────────
// sketch  — the sticky-note illustration shown on top
// photo   — the B&W reference photo revealed by erasing
// name    — must match a key in `sets` to enable the lightbox
// tag     — two-line annotation label
// color   — 'green' | 'pink' | 'orange'

const portraits = [
  { sketch: 'sticky/adams2.jpg',      photo: 'approved images/B&W/Adams.jpg',     name: 'Adams',    tag: 'ALWAYS WEARING A HAT\nTHUMBS UP KING',         color: 'green'  },
  { sketch: 'sticky/alara.jpg',        photo: 'approved images/B&W/alara.jpg',     name: 'Alara',    tag: 'GLASSES & PROFILE\nREADING IN SILENCE',         color: 'green'  },
  { sketch: 'sticky/alison.jpg',     photo: 'approved images/B&W/alison.jpg',    name: 'Alison',   tag: 'FRECKLES & HEADPHONES\n#APPROVED DRAWING',      color: 'green'  },
  { sketch: 'sticky/ben.jpg',         photo: 'approved images/B&W/Ben.jpg',       name: 'Ben',      tag: 'BIG BEARD ENERGY\nANOTHER BLIND VICTIM',        color: 'pink'   },
  { sketch: 'sticky/carina.jpg',      photo: 'approved images/B&W/Carina.jpg',    name: 'Carina',   tag: 'ANOTHER BLIND VICTIM\n#APPROVED DRAWING',       color: 'pink'   },
  { sketch: 'sticky/christina 2.jpg', photo: 'approved images/B&W/Christina.jpg', name: 'Christina',tag: 'WAVEY HAIR GODDESS\nWASN\'T ABLE TO DRAW',     color: 'green'  },
  { sketch: 'sticky/colin.jpg',       photo: 'approved images/B&W/collin.jpg',    name: 'Colin',    tag: 'BEARDS ARE HARD TO DRAW\nBLIND VICTIM',         color: 'pink'   },
  { sketch: 'sticky/daisy.jpg',       photo: 'approved images/B&W/Daisy.jpg',     name: 'Daisy',    tag: 'CURLY HAIR GODDESS\nANOTHER BLIND VICTIM',      color: 'orange' },
  { sketch: 'sticky/erica.jpg',       photo: 'approved images/B&W/Erica.jpg',     name: 'Erica',    tag: 'LOST OF FUN SWEATERS\nVERY CUTE',               color: 'pink'   },
  { sketch: 'sticky/Icarus.jpg',      photo: 'approved images/B&W/icarus.jpg',    name: 'Icarus',   tag: 'ANDROGENSOUS\nA TAD HARD TO DRAW',              color: 'green'  },
  { sketch: 'sticky/jessie.jpg',      photo: 'approved images/B&W/Jessie.jpg',    name: 'Jessie',   tag: 'PONY TAILS\nI DIDN\'T DO HER JUSTICE',         color: 'green'  },
  { sketch: 'sticky/katy.jpg',        photo: 'approved images/B&W/katy.jpg',      name: 'Katy',     tag: 'DEFINITE IMPROVEMENT\n#APPROVED DRAWING',       color: 'pink'   },
  { sketch: 'sticky/kelly4.jpg',      photo: 'approved images/B&W/Kelly.jpg',     name: 'Kelly',    tag: '#KISSYFACE\n#APPROVED DRAWING',                 color: 'orange' },
  { sketch: 'sticky/kristen.jpg',     photo: 'approved images/B&W/Kristen.jpg',   name: 'Kristen',  tag: 'NO PICS, HIDDEN FACE\nNO PICS, HIDDEN FACE',   color: 'pink'   },
  { sketch: 'sticky/lara.jpg',        photo: 'approved images/B&W/lara.jpg',      name: 'Lara',     tag: 'WAVEY HAIR GODDESS\nWASN\'T ABLE TO DRAW',     color: 'green'  },
  { sketch: 'sticky/lisa.jpg',        photo: 'approved images/B&W/Lisa.jpg',      name: 'Lisa',     tag: 'HEADPHONES ON\n#APPROVED DRAWING',              color: 'pink'   },
  { sketch: 'sticky/micheal2.jpg',    photo: 'approved images/B&W/micheal.jpg',   name: 'Michael',  tag: 'STARWARS FANBOY\nSTARWARS FANBOY',              color: 'pink'   },
  { sketch: 'sticky/nadia.jpg',       photo: 'approved images/B&W/Nadia.jpg',     name: 'Nadia',    tag: 'GLASSES & BRAIDS\nWASN\'T ABLE TO DRAW',       color: 'pink'   },
  { sketch: 'sticky/patrick3.jpg',    photo: 'approved images/B&W/Patrick.jpg',     name: 'Patrick',  tag: 'GLASSES & READING\nSIDE PROFILE',              color: 'green'  },
  { sketch: 'sticky/yue.jpg',         photo: 'approved images/B&W/yue.jpg',       name: 'Yue',      tag: 'BIG GLASSES\n#APPROVED DRAWING',               color: 'orange' },
].sort((a, b) => a.name.localeCompare(b.name));


// ── SPACING RHYTHM ────────────────────────────────────────────────────────
// No spacing between cards by default.
// When the first letter of a name changes, alternate between 1 and 2 empty cells.
// This creates a gentle visual break at each letter boundary.
let _letterGapToggle = false;
function getSpacing(p, prevL) {
  if (!prevL || p.name[0].toUpperCase() === prevL) return 0;
  _letterGapToggle = !_letterGapToggle;
  return _letterGapToggle ? 1 : 2;
}

// ── CONSTANTS ─────────────────────────────────────────────────────────────
const COLS    = 4;
const ERASE_R = 40; // eraser radius in canvas px

// ── DOM REFS ──────────────────────────────────────────────────────────────
const gallery = document.getElementById('gallery');
const ring    = document.getElementById('ring');
const lb      = document.getElementById('lb');

// ── BUILD GALLERY ─────────────────────────────────────────────────────────
let cursor     = 0; // tracks current column position
let prevLetter = '';

portraits.forEach((p, i) => {
  const letter  = p.name[0].toUpperCase();
  const spacing = getSpacing(p, prevLetter);

  // Insert spacing empty cells before card (only on letter change)
  for (let s = 0; s < spacing; s++) {
    gallery.appendChild(emptyCell());
    cursor = (cursor + 1) % COLS;
  }

  prevLetter = letter;

  // Insert the card
  const hasSet = !!sets[p.name];
  const cell = document.createElement('div');
  cell.className = 'card-cell' + (hasSet ? ' has-set' : '');
  buildCard(cell, p, hasSet);
  gallery.appendChild(cell);
  cursor = (cursor + 1) % COLS;
});

// Essay block
const essayGrid = document.createElement('div');
essayGrid.className = 'essay-grid';
essayGrid.innerHTML = `
  <div class="essay-text">
    <b>After seven days of drawing my friends at the studio,</b> I came to several
    meaningful conclusions about both my process and my mindset as an artist.<br><br>
    The most important realization was that it is completely okay to take multiple
    attempts to truly capture a person. Allowing myself to redraw, adjust, and rethink
    each portrait helped me understand that observation takes time, and that accuracy
    is built through patience rather than pressure.<br><br>
    I also learned to slow down and trust each line — letting each mark be simple,
    deliberate, and considered.
  </div>
  <div class="essay-results">
    :--RESULTS<br>
    &nbsp;&nbsp;:--FROM OUR FIRST<br>
    &nbsp;&nbsp;&nbsp;&nbsp;:DIVE<br>
    :--NO SREFS<br>
    &nbsp;&nbsp;:--NO PROFILES<br>
    &nbsp;&nbsp;:--NO IMAGES<br>
    &nbsp;&nbsp;:--JUST PROMPTS
  </div>`;
gallery.appendChild(essayGrid);


// ── LIGHTBOX ──────────────────────────────────────────────────────────────
function openLightbox(name) {
  const set = sets[name];
  if (!set) return;

  document.getElementById('lb-title').textContent = name.toUpperCase();
  document.getElementById('lb-sub').textContent =
    set.sketches.length + ' SKETCHES' + (set.inspo ? ' · REFERENCE PHOTO' : '');

  const grid = document.getElementById('lb-grid');
  grid.innerHTML = '';
  set.sketches.forEach((s, si) => {
    const item = document.createElement('div');
    item.className = 'lb-item';
    item.innerHTML = `
      <span class="lb-item-label">SKETCH 0${si + 1}</span>
      <img src="${s.f}" alt="${s.n}">
      <div class="lb-item-note">${s.n}</div>`;
    grid.appendChild(item);
  });

  const inspoSec = document.getElementById('lb-inspo-section');
  if (set.inspo) {
    document.getElementById('lb-inspo-img').src = set.inspo;
    inspoSec.style.display = 'block';
  } else {
    inspoSec.style.display = 'none';
  }

  lb.classList.add('open');
  lb.scrollTop = 0;
}

document.getElementById('lb-close').addEventListener('click', () => lb.classList.remove('open'));
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });


// ── CURSOR ────────────────────────────────────────────────────────────────
document.addEventListener('mousemove', e => {
  ring.style.left = e.clientX + 'px';
  ring.style.top  = e.clientY + 'px';
});


// ── HELPERS ───────────────────────────────────────────────────────────────
function emptyCell() {
  const el = document.createElement('div');
  el.className = 'empty-cell';
  return el;
}

// ── DRAW COVER ────────────────────────────────────────────────────────────
// Draws an image into a square canvas cropped to center, like object-fit:cover
function drawCover(ctx, img, w, h) {
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const sw    = img.naturalWidth  * scale;
  const sh    = img.naturalHeight * scale;
  const sx    = (w - sw) / 2;
  const sy    = (h - sh) / 2;
  ctx.drawImage(img, sx, sy, sw, sh);
}

function buildCard(cell, p, hasSet) {
  // Label
  const label = document.createElement('span');
  label.className = 'card-label';
  label.textContent = p.name.toUpperCase();
  cell.appendChild(label);

  // Card shell
  const card = document.createElement('div');
  card.className = 'card';

  const wrap = document.createElement('div');
  wrap.className = 'card-canvas-wrap';

  // Bottom layer: B&W reference photo
  const pCv = document.createElement('canvas');
  pCv.className = 'canvas-photo';
  pCv.width = 600; pCv.height = 600;

  // Top layer: sketch (erased away)
  const sCv = document.createElement('canvas');
  sCv.className = 'canvas-sketch';
  sCv.width = 600; sCv.height = 600;

  wrap.appendChild(pCv);
  wrap.appendChild(sCv);

  // Hint text
  const hint = document.createElement('div');
  hint.className = 'hint';
  hint.textContent = 'ERASE TO REVEAL';
  wrap.appendChild(hint);

  // Annotation tag
  const tag = document.createElement('div');
  tag.className = 'tag' + (p.color === 'pink' ? ' pink' : p.color === 'orange' ? ' orange' : '');
  tag.innerHTML = p.tag.replace('\n', '<br>');
  wrap.appendChild(tag);

  card.appendChild(wrap);
  cell.appendChild(card);

  // Load images
  const pCtx = pCv.getContext('2d');
  const sCtx = sCv.getContext('2d');

  const pImg = new Image();
  pImg.src = p.photo;
  pImg.onload = () => drawCover(pCtx, pImg, 600, 600);

  const sImg = new Image();
  sImg.src = p.sketch;
  sImg.onload = () => sCtx.drawImage(sImg, 0, 0, 600, 600);

  // ── Erase interaction ──────────────────────────────────────────────────
  let erasing = false;
  let moved   = false;

  function erase(cx, cy) {
    const rect = sCv.getBoundingClientRect();
    const sx = 600 / rect.width;
    const x = (cx - rect.left) * sx;
    const y = (cy - rect.top)  * sx;
    const r = ERASE_R * sx;

    sCtx.save();
    sCtx.globalCompositeOperation = 'destination-out';
    const g = sCtx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0,   'rgba(0,0,0,1)');
    g.addColorStop(0.5, 'rgba(0,0,0,0.9)');
    g.addColorStop(1,   'rgba(0,0,0,0)');
    sCtx.fillStyle = g;
    sCtx.beginPath();
    sCtx.arc(x, y, r, 0, Math.PI * 2);
    sCtx.fill();
    sCtx.restore();

    hint.style.opacity = '0';
    moved = true;
  }

  // Mouse
  sCv.addEventListener('mousedown', e => { erasing = true; moved = false; erase(e.clientX, e.clientY); });
  sCv.addEventListener('mousemove', e => { if (erasing) erase(e.clientX, e.clientY); });
  sCv.addEventListener('mouseup', () => {
    if (!moved && hasSet) openLightbox(p.name);
    erasing = false; moved = false;
  });
  // Touch
  sCv.addEventListener('touchstart',  ()  => { moved = false; }, { passive: true });
  sCv.addEventListener('touchmove',   e   => { e.preventDefault(); erase(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
  sCv.addEventListener('touchend',    ()  => { if (!moved && hasSet) openLightbox(p.name); erasing = false; moved = false; });

  // Double-click to restore sketch
  sCv.addEventListener('dblclick', () => {
    sCtx.clearRect(0, 0, 600, 600);
    sCtx.drawImage(sImg, 0, 0, 600, 600);
    hint.style.opacity = '1';
  });

  // Cursor visibility
  sCv.addEventListener('mouseenter', () => { ring.style.opacity = '1'; document.body.style.cursor = 'none'; });
  sCv.addEventListener('mouseleave', () => { ring.style.opacity = '0'; document.body.style.cursor = 'default'; erasing = false; });
}


// ─────────────────────────────────────────────
// VIDEO INTRO + SCROLL REVEAL
// ─────────────────────────────────────────────

(function () {
  const intro  = document.getElementById('intro');
  const main   = document.getElementById('main');
  let entered  = false;

  // Dismiss intro on first scroll or touch
  function enterSite() {
    if (entered) return;
    entered = true;

    intro.classList.add('hidden');
    main.classList.add('revealed');

    // Kick off card reveal after main fades in
    setTimeout(observeCards, 400);
  }

  window.addEventListener('wheel',      enterSite, { passive: true, once: true });
  window.addEventListener('touchmove',  enterSite, { passive: true, once: true });
  window.addEventListener('keydown',    enterSite, { once: true });

  // IntersectionObserver — stagger cards as they scroll into view
  function observeCards() {
    const cards = document.querySelectorAll('.card-cell');

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Small stagger based on horizontal position
          const col   = Array.from(entry.target.parentNode.children).indexOf(entry.target) % 4;
          const delay = col * 60;
          entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => io.observe(card));
  }
})();