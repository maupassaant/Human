/* human — service worker : fonctionnement 100 % hors-ligne.
   App : stale-while-revalidate (mise à jour silencieuse au lancement suivant).
   Polices Google : cache-first. */
const VERSION = 'human-v3';
const FONTS = 'human-fonts-v1';
const SHELL = [
  './',
  './index.html',
  './style.css',
  './quotes.js',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== FONTS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(FONTS).then(async cache => {
        const hit = await cache.match(req);
        if (hit) return hit;
        try {
          const res = await fetch(req);
          if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
          return res;
        } catch (err) {
          return new Response('', { status: 504 });
        }
      })
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  const isNav = req.mode === 'navigate';
  e.respondWith(
    caches.open(VERSION).then(async cache => {
      const hit = await cache.match(isNav ? './index.html' : req, { ignoreSearch: true });
      const net = fetch(req)
        .then(res => {
          if (res.ok) cache.put(isNav ? './index.html' : req, res.clone());
          return res;
        })
        .catch(() => null);
      if (hit) { e.waitUntil(net); return hit; }
      const res = await net;
      return res || new Response('Hors-ligne', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    })
  );
});
