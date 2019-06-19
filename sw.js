// Static name for cache
const staticCacheName = 'restaurant-1';

// Files required for offline
let cacheFiles = [
    '/',
    '/js/dbhelper.js',
    '/data/restaurants.json',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/css/styles.css',
    '/img/fork-marker.svg',
    '/index.html',
];

// Adds all the images and restaurant pages to cache array
for (let i = 1; i <= 10; i++) {
    cacheFiles.push('/img/' + i + '.jpg');
    cacheFiles.push('/restaurant.html?id=' + i + '');
}

// Adds files to cache
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cacheName) => {
                    return cacheName.startsWith('restaurant-') &&
                        cacheName != staticCacheName;
                }).map((cacheName) => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});


// Returns fetch requests with matching cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
			return response || fetch(event.request);
        })
    );
});