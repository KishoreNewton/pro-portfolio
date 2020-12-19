importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(({ request }) => request.destination === 'image', new workbox.strategies.NetworkFirst());

let CACHE_NAME = 'my-site-cache-v1';
let urlsToCache = ['/', '/main.bundle.js', '/icons', '/avatar.jpeg', '/favicon.png', '/index.html', '/favicon.ico'];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      return fetch(event.request).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        let responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});


self.addEventListener('activate', function (event) {
  let cacheAllowlist = ['my-site-cache-v1'];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
