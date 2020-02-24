// CODELAB: Update cache names any time any of the cached files change.
const FILES_TO_CACHE = [
  '/_layouts/offline.html',
];

// CODELAB: Precache static resources here.
event.waitUntil(
  caches.open(CACHE_NAME).then((cache) => {
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.addAll(FILES_TO_CACHE);
  })
);