// Offline cache for the mobile version. A new game version gets a new cache name.
const CACHE="speed-demon-mobile-0.4.2-e6ec64e3";
const ASSETS=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "../lib/three.min.js", "../fonts/cinzel-latin-500-normal.woff2", "../fonts/cinzel-latin-700-normal.woff2", "../fonts/cinzel-latin-900-normal.woff2", "../fonts/fonts.css", "../fonts/ibm-plex-mono-latin-400-normal.woff2", "../fonts/ibm-plex-mono-latin-600-normal.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k.startsWith('speed-demon-mobile-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// network first (so updates arrive), cached copy when offline
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r;}).catch(()=>caches.match(e.request).then(m=>m||caches.match('index.html'))));});
