// sw.js
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  self.skipWaiting(); // Forces this SW to activate immediately
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim()); // Takes control of the page immediately
});

self.addEventListener('fetch', (e) => {
  // Basic pass-through (Network Only strategy)
  // This ensures users always get the latest version of your code
  e.respondWith(fetch(e.request));
});