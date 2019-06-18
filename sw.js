// Static name for cache
const staticCacheName = 'restaurants';

// Files required for offline
let cacheFiles = [
    '/',
    '/index.html',
    '/data/restaurants.json',
    '/js/main.js',
    '/js/dbhelper.js',
    '/js/restaurant_info.js',
    '/css/styles.css',
    '/img/fork-marker.svg'
];

// Adds all the images and restaurant pages to cache array
for (let i = 1; i <= 10; i++) {
    cacheFiles.push('/img/' + i + '.jpg');
    cacheFiles.push('/restaurant.html?id=' + i + '');
}

// Adds files to cache
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            return cache.addAll(cacheFiles);
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