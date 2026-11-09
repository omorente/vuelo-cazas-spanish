const V='vuelo-9c8e59ec6d',F=["./", "index.html", "three.min.js", "GLTFLoader.js", "models/c101.json", "models/c101_pa.jpg", "models/ef.json", "models/f18.json", "models/pc21.json", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')&&/fonts\.(googleapis|gstatic)\.com/.test(r.url)){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));}return res;}).catch(()=>caches.match('index.html'))));});
