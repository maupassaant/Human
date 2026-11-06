'use strict';

/* ================= Constantes ================= */

const KEY = 'human.v1';
const ARCH_KEY = 'human.archives';
const LEN = 90;
const N = 5;
const TOTAL = LEN * N;
const HABITS = ['Lecture 15 min', 'Déjeuner healthy', 'Dîner healthy', 'Sport 15 min', '2 L d’eau'];
const GOAL_GLOBAL = 0.8;
const GOAL_HABIT = 0.7;

// Silhouette (viewBox 0 0 200 500) — contour de 12 à 491 en y.
const PATH = 'M100 12C103.5 12 107.7 12.9 110.5 14.5C113.3 16.1 115.4 18.4 117 21.5C118.6 24.6 119.6 29.1 120 33C120.4 36.9 120 41.3 119.5 45C119 48.8 118.2 52.3 117 55.5C115.8 58.7 114 61.6 112.5 64C111 66.4 108.8 67.5 108 70C107.3 72.5 107.5 76.3 108 79C108.5 81.7 108.7 84.1 111 86C113.3 87.9 118.2 89.2 122 90.5C125.8 91.8 130.8 92.6 134 94C137.3 95.4 139.6 96.7 141.5 99C143.4 101.3 144.5 104.2 145.5 108C146.5 111.8 147 115.8 147.5 122C148 128.2 148.1 136.7 148.5 145C148.9 153.3 149.5 163.2 150 172C150.5 180.8 151 189.2 151.5 198C152 206.8 152.4 216.3 153 225C153.6 233.7 154.3 243.5 155 250C155.7 256.5 156.4 259 157 264C157.6 269 158.5 275.2 158.5 280C158.5 284.8 157.9 290.2 157 293C156.1 295.8 154.3 297.8 153 297C151.8 296.2 150.3 292.2 149.5 288C148.7 283.8 148.7 278 148 272C147.3 266 146.5 259.7 145.5 252C144.5 244.3 143.1 234.7 142 226C140.9 217.3 139.9 208.7 139 200C138.1 191.3 137.2 182.3 136.5 174C135.8 165.7 135.3 156.3 135 150C134.7 143.7 134.8 139.5 134.5 136C134.3 132.5 133.9 128.3 133.5 129C133.1 129.7 132.5 134 132 140C131.5 146 131.3 157 130.5 165C129.7 173 127.8 181.3 127 188C126.2 194.7 125.5 199 125.5 205C125.5 211 126.1 217.5 127 224C127.9 230.5 130 237.7 131 244C132 250.3 132.8 255.3 133 262C133.2 268.7 132.6 276 132 284C131.4 292 130.4 301 129.5 310C128.6 319 127.6 328.8 126.5 338C125.4 347.2 123.8 358 123 365C122.3 372 122 374.2 122 380C122 385.8 123 392.5 123 400C123 407.5 122.8 416.3 122 425C121.2 433.7 119.1 444.8 118 452C116.9 459.2 115.8 463.3 115.5 468C115.3 472.7 115.9 476.7 116.5 480C117.1 483.3 119.4 486.2 119 488C118.6 489.8 116 490.7 114 491C112 491.3 108.5 491.8 107 490C105.5 488.2 105.4 484 105 480C104.6 476 104.5 471.8 104.5 466C104.5 460.2 104.7 453 105 445C105.3 437 106.5 426.8 106.5 418C106.5 409.2 105.3 399.7 105 392C104.7 384.3 104.3 380.7 104.5 372C104.7 363.3 105.8 351.2 106 340C106.2 328.8 105.9 314.8 105.5 305C105.1 295.2 104.4 287.2 103.5 281C102.6 274.8 101.2 268 100 268C98.8 268 97.4 274.8 96.5 281C95.6 287.2 94.9 295.2 94.5 305C94.1 314.8 93.8 328.8 94 340C94.2 351.2 95.3 363.3 95.5 372C95.7 380.7 95.3 384.3 95 392C94.7 399.7 93.5 409.2 93.5 418C93.5 426.8 94.7 437 95 445C95.3 453 95.5 460.2 95.5 466C95.5 471.8 95.4 476 95 480C94.6 484 94.5 488.2 93 490C91.5 491.8 88 491.3 86 491C84 490.7 81.4 489.8 81 488C80.6 486.2 82.9 483.3 83.5 480C84.1 476.7 84.8 472.7 84.5 468C84.3 463.3 83.1 459.2 82 452C80.9 444.8 78.8 433.7 78 425C77.2 416.3 77 407.5 77 400C77 392.5 78 385.8 78 380C78 374.2 77.8 372 77 365C76.3 358 74.6 347.2 73.5 338C72.4 328.8 71.4 319 70.5 310C69.6 301 68.6 292 68 284C67.4 276 66.8 268.7 67 262C67.2 255.3 68 250.3 69 244C70 237.7 72.1 230.5 73 224C73.9 217.5 74.5 211 74.5 205C74.5 199 73.8 194.7 73 188C72.2 181.3 70.3 173 69.5 165C68.7 157 68.5 146 68 140C67.5 134 66.9 129.7 66.5 129C66.1 128.3 65.8 132.5 65.5 136C65.3 139.5 65.3 143.7 65 150C64.7 156.3 64.2 165.7 63.5 174C62.8 182.3 61.9 191.3 61 200C60.1 208.7 59.1 217.3 58 226C56.9 234.7 55.5 244.3 54.5 252C53.5 259.7 52.7 266 52 272C51.3 278 51.3 283.8 50.5 288C49.7 292.2 48.3 296.2 47 297C45.8 297.8 43.9 295.8 43 293C42.1 290.2 41.5 284.8 41.5 280C41.5 275.2 42.4 269 43 264C43.6 259 44.3 256.5 45 250C45.7 243.5 46.4 233.7 47 225C47.6 216.3 48 206.8 48.5 198C49 189.2 49.5 180.8 50 172C50.5 163.2 51.1 153.3 51.5 145C51.9 136.7 52 128.2 52.5 122C53 115.8 53.5 111.8 54.5 108C55.5 104.2 56.6 101.3 58.5 99C60.4 96.7 62.8 95.4 66 94C69.3 92.6 74.2 91.8 78 90.5C81.8 89.2 86.7 87.9 89 86C91.3 84.1 91.5 81.7 92 79C92.5 76.3 92.8 72.5 92 70C91.3 67.5 89 66.4 87.5 64C86 61.6 84.2 58.7 83 55.5C81.8 52.3 81 48.8 80.5 45C80 41.3 79.6 36.9 80 33C80.4 29.1 81.4 24.6 83 21.5C84.6 18.4 86.7 16.1 89.5 14.5C92.3 12.9 96.5 12 100 12Z';
const FIG_TOP = 12;
const FIG_H = 491 - 12;

/* ================= Dates (locales, sans fuseau) ================= */

const pad = n => String(n).padStart(2, '0');
const keyOf = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const toUTC = k => { const [y, m, d] = k.split('-').map(Number); return Date.UTC(y, m - 1, d); };
const diffDays = (a, b) => Math.round((toUTC(b) - toUTC(a)) / 864e5);
const addDays = (k, n) => {
  const t = new Date(toUTC(k) + n * 864e5);
  return `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`;
};
const todayKey = () => keyOf(new Date());
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const fmtDate = (k, year) => new Date(toUTC(k)).toLocaleDateString('fr-FR', {
  day: 'numeric', month: 'short', timeZone: 'UTC', ...(year ? { year: 'numeric' } : {})
});

/* ================= Formats ================= */

const NBSP = ' ';
const fmtPct = (x, dec = 0) =>
  (x * 100).toLocaleString('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + NBSP + '%';
const plural = (n, w) => `${n} ${w}${n > 1 ? 's' : ''}`;

/* ================= Stockage ================= */

// Un jour = N booléens. Les jours enregistrés avec moins de cases (ex. avant l'ajout de l'eau) sont complétés.
const normDay = v => Array.isArray(v) && v.length >= 1 && v.length <= N
  ? Array.from({ length: N }, (_, i) => Boolean(v[i]))
  : null;

function sanitize(s) {
  if (!s || typeof s !== 'object' || !DATE_RE.test(s.startDate) || !s.days || typeof s.days !== 'object') return null;
  const days = {};
  for (const [k, v] of Object.entries(s.days)) {
    const d = DATE_RE.test(k) ? normDay(v) : null;
    if (d) days[k] = d;
  }
  return { startDate: s.startDate, days };
}

function load() {
  try {
    const s = sanitize(JSON.parse(localStorage.getItem(KEY)));
    if (s) return s;
  } catch (e) { /* données absentes ou illisibles */ }
  const s = { startDate: todayKey(), days: {} };
  save(s);
  return s;
}
function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* quota */ } }
function loadArchives() {
  try { const a = JSON.parse(localStorage.getItem(ARCH_KEY)); return Array.isArray(a) ? a : []; }
  catch (e) { return []; }
}
function saveArchives(a) { try { localStorage.setItem(ARCH_KEY, JSON.stringify(a)); } catch (e) { /* quota */ } }

let state = load();
let view = 0;          // 0 = aujourd'hui, 1 = hier
let currentKey = todayKey();

/* ================= Modèle ================= */

const dayIndex = () => Math.max(1, diffDays(state.startDate, todayKey()) + 1);
const dayKey = i => addDays(state.startDate, i - 1);
const getDay = k => normDay(state.days[k]) || Array(N).fill(false);

function isEditable(k) {
  const i = diffDays(state.startDate, k) + 1;
  const t = dayIndex();
  return i >= 1 && i <= LEN && (i === t || i === t - 1);
}

function compute(s = state, today = dayIndex()) {
  const get = k => normDay(s.days[k]) || Array(N).fill(false);
  const rows = [];
  let checked = 0, evaluated = 0;
  const hc = Array(N).fill(0), he = Array(N).fill(0);

  for (let i = 1; i <= LEN; i++) {
    const k = addDays(s.startDate, i - 1);
    const v = get(k);
    const closed = i < today, future = i > today;
    const c = v.filter(Boolean).length;
    rows.push({ i, k, v, c, closed, future, isToday: i === today });
    if (future) continue;
    // Une case d'aujourd'hui non cochée n'est pas encore un échec.
    v.forEach((b, h) => {
      if (b) { checked++; hc[h]++; }
      if (closed || b) { evaluated++; he[h]++; }
    });
  }

  // Séries de jours parfaits
  let best = 0, run = 0;
  for (const r of rows) {
    if (r.future) break;
    if (r.c === N) { run++; if (run > best) best = run; }
    else if (r.closed) run = 0;
  }
  let cur = 0;
  let j = Math.min(today, LEN);
  if (!rows[j - 1].closed && rows[j - 1].c < N) j--;
  for (; j >= 1 && rows[j - 1].c === N; j--) cur++;

  // Tendance : 7 derniers jours clos vs 7 précédents
  const lastClosed = Math.min(today - 1, LEN);
  const avg = (a, b) => {
    let sum = 0, n = 0;
    for (let i = Math.max(1, a); i <= b; i++) { sum += rows[i - 1].c; n++; }
    return n ? sum / (n * N) : null;
  };
  const last7 = lastClosed >= 1 ? avg(lastClosed - 6, lastClosed) : null;
  const prev7 = lastClosed - 7 >= 1 ? avg(lastClosed - 13, lastClosed - 7) : null;

  const rate = evaluated ? checked / evaluated : null;
  const habitRates = hc.map((c, h) => (he[h] ? c / he[h] : null));
  const projection = rate === null ? null : (checked + rate * (TOTAL - evaluated)) / TOTAL;

  return { rows, today, checked, evaluated, hc, he, rate, habitRates, best, cur, last7, prev7, projection, fill: checked / TOTAL };
}

function verdictOf(st) {
  const global = st.checked / TOTAL;
  const habits = st.hc.map(c => c / LEN);
  const needGlobal = Math.ceil(GOAL_GLOBAL * TOTAL);  // 288 cases
  const needHabit = Math.ceil(GOAL_HABIT * LEN);      // 63 jours
  const ok = st.checked >= needGlobal && st.hc.every(c => c >= needHabit);
  return { ok, global, habits, needGlobal, needHabit };
}

/* ================= Silhouette ================= */

let clipN = 0;
function silhouette() {
  const id = 'clip' + (++clipN);
  return `<svg viewBox="0 0 200 500" aria-hidden="true">
    <defs><clipPath id="${id}"><path d="${PATH}"/></clipPath></defs>
    <g clip-path="url(#${id})"><rect class="fill" x="0" y="${FIG_TOP - 1}" width="200" height="${FIG_H + 2}" style="transform:translateY(${FIG_H + 2}px)"/></g>
    <path class="outline" d="${PATH}"/>
  </svg>`;
}
function setFill(fig, p) {
  const rect = fig.querySelector('.fill');
  rect.style.transform = `translateY(${((1 - Math.min(1, Math.max(0, p))) * (FIG_H + 2)).toFixed(2)}px)`;
}

/* ================= Compteur animé ================= */

const counters = new WeakMap();
function animateNumber(el, to, format) {
  const from = counters.has(el) ? counters.get(el).value : 0;
  const prev = counters.get(el);
  if (prev && prev.raf) cancelAnimationFrame(prev.raf);
  const rec = { value: from, raf: 0 };
  counters.set(el, rec);
  const t0 = performance.now(), dur = 800;
  const step = now => {
    const t = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - t, 3);
    rec.value = from + (to - from) * e;
    el.textContent = format(rec.value);
    if (t < 1) rec.raf = requestAnimationFrame(step);
    else { rec.value = to; el.textContent = format(to); }
  };
  rec.raf = requestAnimationFrame(step);
}

/* ================= Retour haptique ================= */

const hapticLabel = (() => {
  const wrap = document.createElement('div');
  wrap.className = 'hx';
  wrap.setAttribute('aria-hidden', 'true');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'hx';
  input.setAttribute('switch', '');   // iOS 18+ : un switch déclenche le Taptic Engine
  input.tabIndex = -1;
  const label = document.createElement('label');
  label.htmlFor = 'hx';
  wrap.append(input, label);
  document.body.append(wrap);
  return label;
})();
function haptic() {
  if (typeof navigator.vibrate === 'function') { try { navigator.vibrate(10); return; } catch (e) { /* ignore */ } }
  try { hapticLabel.click(); } catch (e) { /* ignore */ }
}

/* ================= DOM ================= */

const $ = id => document.getElementById(id);
const el = {
  pager: $('pager'), tabs: $('tabs'),
  home: $('home'), figure: $('figure'), pct: $('pct'), day: $('day'), when: $('when'), habits: $('habits'),
  end: $('end'), endFigure: $('endFigure'), verdict: $('verdict'), verdictNote: $('verdictNote'),
  fGlobal: $('fGlobal'), fBest: $('fBest'), fStrong: $('fStrong'), fWeak: $('fWeak'),
  late: $('late'), lateHabits: $('lateHabits'), restart: $('restart'),
  sDay: $('sDay'), sCur: $('sCur'), sBest: $('sBest'), tNow: $('tNow'), tArrow: $('tArrow'), tNote: $('tNote'),
  bars: $('bars'), heat: $('heat'), proj: $('proj'),
  settings: $('settings'), cycleInfo: $('cycleInfo'), ioMsg: $('ioMsg'), archives: $('archives'),
  importFile: $('importFile'), importConfirm: $('importConfirm'),
  quote: $('quote'), endQuote: $('endQuote')
};

el.figure.innerHTML = silhouette();
el.endFigure.innerHTML = silhouette();
// Force le calcul du style initial (vide) pour que le premier remplissage soit animé.
void el.figure.getBoundingClientRect();

function habitList(ul, key) {
  const v = getDay(key);
  if (!ul.children.length) {
    ul.innerHTML = HABITS.map((label, h) =>
      `<li><button type="button" class="habit" data-h="${h}" aria-pressed="false"><span>${label}</span><span class="dot"></span></button></li>`
    ).join('');
  }
  ul.dataset.key = key;
  ul.querySelectorAll('.habit').forEach((b, h) => b.setAttribute('aria-pressed', String(v[h])));
}

function toggle(key, h, btn) {
  if (!isEditable(key)) { render(); return; }
  const v = getDay(key);
  v[h] = !v[h];
  if (v.some(Boolean)) state.days[key] = v; else delete state.days[key];
  save(state);
  haptic();
  if (btn) { btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop'); }
  render();
}

function onHabitTap(e) {
  const btn = e.target.closest('.habit');
  if (!btn) return;
  toggle(e.currentTarget.dataset.key, Number(btn.dataset.h), btn);
}
el.habits.addEventListener('click', onHabitTap);
el.lateHabits.addEventListener('click', onHabitTap);

el.when.addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  view = Number(b.dataset.when);
  render();
});

/* ================= Rendu ================= */

// Typographie française : espaces fines insécables avant ; : ! ? » et après «.
const frType = t => t.replace(/ ([;:!?»])/g, '\u202F$1').replace(/« /g, '«\u202F');

function setQuote(box, q) {
  if (!q || box.dataset.q === q.t) return;
  box.dataset.q = q.t;
  box.classList.toggle('long', q.t.length > 170 && q.t.length <= 260);
  box.classList.toggle('xlong', q.t.length > 260);
  box.querySelector('p').textContent = frType(q.t);
  const f = box.querySelector('footer');
  f.textContent = q.a;
  if (q.s) { const i = document.createElement('i'); i.textContent = ' · ' + q.s; f.append(i); }
  box.classList.remove('open');
  box.style.animation = 'none'; void box.offsetWidth; box.style.animation = '';
  markTruncated(box);
}

// Citation longue : tronquée à quelques lignes, un toucher l'ouvre en entier.
function markTruncated(box) {
  const p = box.querySelector('p');
  box.classList.toggle('more', !box.classList.contains('open') && p.scrollHeight > p.clientHeight + 2);
}
el.quote.addEventListener('click', () => {
  if (!el.quote.classList.contains('more') && !el.quote.classList.contains('open')) return;
  el.quote.classList.toggle('open');
  markTruncated(el.quote);
});
window.addEventListener('resize', () => markTruncated(el.quote));
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => markTruncated(el.quote));

function render() {
  const st = compute();
  const t = st.today;
  const over = t > LEN;

  el.home.hidden = over;
  el.end.hidden = !over;

  if (!over) renderHome(st);
  else renderEnd(st);
  renderStats(st);
}

function renderHome(st) {
  const t = st.today;
  if (t < 2) view = 0;
  el.when.hidden = t < 2;
  el.when.querySelectorAll('button').forEach(b => b.classList.toggle('on', Number(b.dataset.when) === view));
  habitList(el.habits, dayKey(t - view));

  setQuote(el.quote, QUOTES[(Math.min(t, LEN) - 1) % QUOTES.length]);

  setFill(el.figure, st.fill);
  animateNumber(el.pct, st.fill * 100, v => v.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + NBSP + '%');
  el.day.textContent = `Jour ${t} / ${LEN}`;
}

function renderEnd(st) {
  const vd = verdictOf(st);
  setFill(el.endFigure, st.fill);
  setQuote(el.endQuote, FINAL_QUOTE);

  el.verdict.textContent = vd.ok ? 'Réussi' : 'Non réussi';
  el.verdict.className = 'verdict' + (vd.ok ? ' ok' : '');

  const notes = [];
  if (vd.ok) {
    notes.push(`${fmtPct(vd.global, 1)} des cases, aucune habitude sous 70${NBSP}%.`);
  } else {
    if (st.checked < vd.needGlobal) {
      const gap = vd.needGlobal - st.checked;
      notes.push(`Global : ${fmtPct(vd.global, 1)}. Il manquait ${plural(gap, 'case')} pour atteindre 80${NBSP}%.`);
    }
    st.hc.forEach((c, h) => {
      if (c < vd.needHabit) {
        const gap = vd.needHabit - c;
        notes.push(`${HABITS[h]} : ${fmtPct(c / LEN)}. Il manquait ${plural(gap, 'jour')} pour atteindre 70${NBSP}%.`);
      }
    });
  }
  el.verdictNote.innerHTML = notes.map(n => `<p>${n}</p>`).join('');

  el.fGlobal.textContent = fmtPct(vd.global, 1);
  el.fBest.textContent = plural(st.best, 'jour');
  let hi = 0, lo = 0;
  st.hc.forEach((c, h) => { if (c > st.hc[hi]) hi = h; if (c < st.hc[lo]) lo = h; });
  el.fStrong.textContent = `${HABITS[hi]} · ${fmtPct(st.hc[hi] / LEN)}`;
  el.fWeak.textContent = `${HABITS[lo]} · ${fmtPct(st.hc[lo] / LEN)}`;

  // Jour 91 : le jour 90 reste corrigeable (oubli du soir).
  const lastKey = dayKey(LEN);
  el.late.hidden = !isEditable(lastKey);
  if (!el.late.hidden) habitList(el.lateHabits, lastKey);
}

function renderStats(st) {
  const over = st.today > LEN;
  el.sDay.textContent = over ? 'Cycle terminé' : `Jour ${st.today} / ${LEN}`;

  el.sCur.textContent = st.cur;
  el.sBest.textContent = st.best;

  // Tendance
  if (st.last7 === null) {
    el.tNow.textContent = '—';
    el.tArrow.textContent = '';
    el.tNote.textContent = 'disponible dès demain';
  } else {
    el.tNow.textContent = fmtPct(st.last7);
    if (st.prev7 === null) {
      el.tArrow.textContent = '';
      el.tArrow.className = 'arrow';
      el.tNote.textContent = '7 derniers jours';
    } else {
      const d = st.last7 - st.prev7;
      el.tArrow.textContent = d > 0.005 ? '↑' : d < -0.005 ? '↓' : '→';
      el.tArrow.className = 'arrow' + (d > 0.005 ? ' up' : '');
      el.tNote.textContent = `7 derniers jours · ${fmtPct(st.prev7)} les 7 précédents`;
    }
  }

  // Barres
  const row = (label, r, goal, cls = '') => `
    <div class="bar-row ${cls}">
      <div class="bar-top"><span class="bar-label">${label}</span><span class="bar-val">${r === null ? '—' : fmtPct(r)}</span></div>
      <div class="bar-track"><div class="bar-fill" data-w="${r === null ? 0 : (r * 100).toFixed(2)}"></div><div class="bar-tick" style="left:${goal * 100}%"></div></div>
    </div>`;
  const prevW = [...el.bars.querySelectorAll('.bar-fill')].map(b => b.style.width);
  el.bars.innerHTML =
    row('Global', st.rate, GOAL_GLOBAL, 'global') +
    '<div class="bar-sep"></div>' +
    HABITS.map((h, i) => row(h, st.habitRates[i], GOAL_HABIT)).join('');
  const fills = [...el.bars.querySelectorAll('.bar-fill')];
  fills.forEach((b, i) => { b.style.width = prevW[i] || '0%'; });
  requestAnimationFrame(() => requestAnimationFrame(() => fills.forEach(b => { b.style.width = b.dataset.w + '%'; })));

  // Heatmap 13 × 7
  let html = '';
  for (const r of st.rows) {
    const cls = ['cell'];
    if (r.future) cls.push('future');
    else if (r.c) cls.push('l' + r.c);
    if (r.isToday) cls.push('today');
    html += `<div class="${cls.join(' ')}" title="Jour ${r.i} · ${fmtDate(r.k)} · ${r.c}/${N}"></div>`;
  }
  html += '<div class="cell void"></div>';
  el.heat.innerHTML = html;

  // Projection
  if (over) {
    el.proj.innerHTML = `Tu as fini à <span class="num">${fmtPct(st.checked / TOTAL)}</span>.`;
  } else if (st.projection === null) {
    el.proj.textContent = 'Coche ta première case pour voir où tu vas.';
  } else {
    el.proj.innerHTML = `À ce rythme, tu finis à <span class="num">${fmtPct(st.projection)}</span>.`;
  }
}

/* ================= Pager ================= */

function setPage(i, smooth = true) {
  el.pager.scrollTo({ left: i * el.pager.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
}
el.tabs.addEventListener('click', e => {
  const b = e.target.closest('button');
  if (b) setPage(Number(b.dataset.page));
});
let scrollRaf = 0;
el.pager.addEventListener('scroll', () => {
  cancelAnimationFrame(scrollRaf);
  scrollRaf = requestAnimationFrame(() => {
    const p = Math.round(el.pager.scrollLeft / Math.max(1, el.pager.clientWidth));
    el.tabs.querySelectorAll('button').forEach(b => b.classList.toggle('on', Number(b.dataset.page) === p));
  });
}, { passive: true });

/* ================= Confirmation en deux temps ================= */

function arm(btn, armedLabel, action) {
  const base = btn.textContent;
  let timer = 0;
  btn.addEventListener('click', () => {
    if (btn.classList.contains('armed')) {
      clearTimeout(timer);
      btn.classList.remove('armed');
      btn.textContent = base;
      action();
      return;
    }
    btn.classList.add('armed');
    btn.textContent = armedLabel;
    haptic();
    timer = setTimeout(() => { btn.classList.remove('armed'); btn.textContent = base; }, 4000);
  });
}

/* ================= Recommencer ================= */

arm(el.restart, 'Confirmer : archiver ce cycle', () => {
  const st = compute(state, LEN + 1);
  const vd = verdictOf(st);
  const archives = loadArchives();
  archives.push({
    startDate: state.startDate,
    endDate: dayKey(LEN),
    days: state.days,
    rate: Math.round(vd.global * 1000) / 1000,
    best: st.best,
    success: vd.ok,
    archivedAt: todayKey()
  });
  saveArchives(archives);
  state = { startDate: todayKey(), days: {} };
  save(state);
  view = 0;
  render();
  el.pager.scrollTo({ left: 0 });
  document.getElementById('page-home').scrollTo({ top: 0 });
});

/* ================= Réglages ================= */

function renderSettings() {
  const t = dayIndex();
  el.cycleInfo.textContent = `Cycle commencé le ${fmtDate(state.startDate, true)} · ${t > LEN ? 'terminé' : 'jour ' + t + ' / ' + LEN}`;
  const a = loadArchives();
  el.archives.className = a.length ? 'archives' : '';
  el.archives.innerHTML = a.length
    ? '<p class="eyebrow">Cycles archivés</p>' + a.slice().reverse().map(c =>
        `<div class="archive"><span>${fmtDate(c.startDate)} → ${fmtDate(c.endDate, true)}</span><span>${fmtPct(c.rate || 0)} · ${c.success ? 'réussi' : 'non réussi'}</span></div>`
      ).join('')
    : '';
}

$('openSettings').addEventListener('click', () => {
  renderSettings();
  el.ioMsg.textContent = '';
  el.importConfirm.hidden = true;
  el.settings.hidden = false;
});
$('closeSettings').addEventListener('click', () => { el.settings.hidden = true; });

$('exportBtn').addEventListener('click', async () => {
  const data = {
    app: 'human',
    version: 1,
    exportedAt: new Date().toISOString(),
    current: state,
    archives: loadArchives()
  };
  const name = `human-${todayKey()}.json`;
  const json = JSON.stringify(data, null, 2);
  let file = null;
  try { file = new File([json], name, { type: 'application/json' }); } catch (e) { /* vieux navigateur */ }

  if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: name });
      el.ioMsg.textContent = 'Sauvegarde exportée.';
      return;
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }
  }
  const url = URL.createObjectURL(file || new Blob([json], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  el.ioMsg.textContent = 'Sauvegarde exportée.';
});

let pendingImport = null;
$('importBtn').addEventListener('click', () => { el.importFile.value = ''; el.importFile.click(); });
el.importFile.addEventListener('change', async () => {
  const f = el.importFile.files && el.importFile.files[0];
  if (!f) return;
  pendingImport = null;
  el.importConfirm.hidden = true;
  try {
    const raw = JSON.parse(await f.text());
    const current = sanitize(raw && raw.current ? raw.current : raw);
    if (!current) throw new Error('format');
    const archives = Array.isArray(raw.archives)
      ? raw.archives.map(a => { const s = sanitize(a); return s ? { ...a, ...s } : null; }).filter(Boolean)
      : null;
    pendingImport = { current, archives };
    const n = Object.keys(current.days).length;
    el.ioMsg.textContent = `Fichier lu : cycle du ${fmtDate(current.startDate, true)}, ${plural(n, 'jour')} renseigné${n > 1 ? 's' : ''}. Les données actuelles seront remplacées.`;
    el.importConfirm.hidden = false;
  } catch (e) {
    el.ioMsg.textContent = 'Fichier non reconnu.';
  }
});
arm(el.importConfirm, 'Toucher encore pour confirmer', () => {
  if (!pendingImport) return;
  state = pendingImport.current;
  save(state);
  if (pendingImport.archives) saveArchives(pendingImport.archives);
  pendingImport = null;
  el.importConfirm.hidden = true;
  el.ioMsg.textContent = 'Données importées.';
  view = 0;
  renderSettings();
  render();
});

/* ================= Changement de jour ================= */

function checkDay() {
  const k = todayKey();
  if (k !== currentKey) { currentKey = k; view = 0; render(); }
}
document.addEventListener('visibilitychange', () => { if (!document.hidden) checkDay(); });
window.addEventListener('focus', checkDay);
window.addEventListener('pageshow', checkDay);
setInterval(checkDay, 60 * 1000);

// Autre onglet / import : resynchronise.
window.addEventListener('storage', e => {
  if (e.key === KEY) { state = load(); render(); }
});

/* ================= Démarrage ================= */

render();

if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
