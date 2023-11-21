let count = 0;
const cacheName = 'cache-v1';
const filesToCache = ['/', '/serviceworker.html'];
// 當service worker在「安裝階段」時會觸發此事件
self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...');
  // event.waitUntil() //直到傳入的 promise 事件成功resovle才會進到下一階段
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// 當service worker在「激活階段」時會觸發此事件
self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ...');
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      console.log(cacheNames);
      var promiseArr = cacheNames.map(function (item) {
        console.log(item);
        if (item !== cacheName) {
          // Delete that cached file
          return caches.delete(item);
        }
      });
      return Promise.all(promiseArr);
    })
  );
  // end e.waitUntil
});

self.addEventListener('fetch', function (e) {
  console.log('fetch', e.request.url);

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      } else {
        return fetch(e.request).then((response) => {
          const httpResponseToCache = response.clone();
          caches.open(cacheName).then((cache) => {
            cache.put(e.request, httpResponseToCache);
          });
          return response;
        });
      }
    })
  );

  // if (e.request.url.endsWith('https://localhost:44454/api/User')) {
  //   count++;
  //   e.respondWith(
  //     new Response(JSON.stringify({ count }), {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //   );
  //   return;
  // }
  // e.respondWith(fetch(e.request));
});
