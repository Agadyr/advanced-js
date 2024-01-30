const cname = 'v1';

self.addEventListener('install', async event => {
    const cache = await caches.open(cname);
    await cache.addAll([
        'index.html',
        'index.js',
        'style.css'
    ]);
});

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         fetch(event.request).catch(() => {
//             return caches.match(event.request);
//         })
//     );
// });
