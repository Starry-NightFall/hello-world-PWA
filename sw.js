self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (e) => {
  // Acts as a pass-through for network requests
  e.respondWith(fetch(e.request));
});
