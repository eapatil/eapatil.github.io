
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
  caches.open('static')
  .then(function(cache) {
	console.log('[service Worker] Precaching App sheel');
	cache.addAll([
	'/',
	'/index.html',
	'/assets/css/style.css?v=889583eed8d616ca038abf8b717f5b574b87f904',
	'https://code.jquery.com/jquery-2.2.4.min.js',
	'/promise.js',
	'/fetch.js',
	'/app.js',
	'/EP_b_196.png',
	'EP_MarkWhite.png',
	'https://avatars2.githubusercontent.com/u/20547953?s=460&amp;u=9b920c74e7b413f8b64be506e35c114fa8655686&amp;v=4'
	'https://www.pngkey.com/png/detail/80-802453_2018-supply-chain-solutions-linkedin-view-my-linkedin.png'
	'https://trailblazer.me/resource/1608686754000/assets/assets/images/profile/trailblazer-me.svg'
	]);	  
  })
  
  )
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
	caches.match(event.request)
	.then(function(response){
		if (response){
			return response;
		} else {
			return fetch(event.request)
			.then(function (res) {
				return caches.open('dynamic')
				.then(funstion(cache){
					cache.put(event.request.url, res.clone());
					return res;
				})
			});
		}
	})
  
  );
});
