// Service worker minimal : rend l'appli installable, sans cache (les données viennent toujours du serveur)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
