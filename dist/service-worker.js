"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["app.e8b3f714452596dc8cd461b99c765400.css","b198a4ee6a1b23646f85f2e498d22a5b"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/fontawesome-webfont.fee66e7.woff","fee66e712a8a08eef5805a46892932ad"],["img/WordPress_logo.a496f02.png","a496f029c7bff0db7f0497a72f57dc98"],["img/aboutBitmoji.975c12c.png","975c12c90fc9d934a0854baa792220d2"],["img/bitmoji-click.2bb9039.png","2bb903932f0820ff6b218a3b08f77ad9"],["img/bitmoji.7b1fc25.png","7b1fc25c0b63cc4040b1404bf961af16"],["img/express_logo.fe1929d.png","fe1929d42f30ad1ea36de8791d904b08"],["img/goodDayBM.2d703f8.png","2d703f8332c324458b7da8288d58c1d3"],["img/java-logo.94a68b7.png","94a68b77bbe0da750935971203b5aa62"],["img/node_logo.b68bb1a.png","b68bb1acf4df8e38c53b6b5529b36116"],["img/quasar_logo.da2b422.png","da2b422e2895b9b9c1782a71b6be9d63"],["img/skillsBM.0953b63.png","0953b635263c05f44075d2104bfee919"],["img/spring_logo.593e916.png","593e9161f70c1ceb67e55fe8b35d480f"],["index.html","54d28cbe583e8d5e178a5862f9325f9d"],["js/app.js","b559d788e8ce5dd0af2c380afc6637d8"],["js/manifest.js","ba4520a8b1f262ac8c1c42bd22658860"],["js/vendor.js","4b39f25dc744d88e033ccd4c02262369"],["statics/icons/apple-icon-152x152.png","644b3aaeaf2f300c2729bbb43f23a06a"],["statics/icons/favicon-16x16.png","b1c1c1a67469615d2b37c6b632af9c17"],["statics/icons/favicon-32x32.png","bda5ef136b4f6f237ab3c120f931d405"],["statics/icons/icon-192x192.png","b9b599a88ea13707aaee7dcb38b74ebe"],["statics/icons/icon-512x512.png","49f942a711648e0ed63dd2e60ea38699"],["statics/icons/ms-icon-144x144.png","9be342af16aaef9b24cfcba136e0c4fe"],["statics/manifest.json","6d9b3484fcdafd2bb4952dbbaf57fac2"],["statics/quasar-logo.png","3020c8ac2c2872dec7741e5948520093"]],cacheName="sw-precache-v3-my-quasar-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,n,a,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),c=createCacheKey(t,hashParamName,a,!1);return[t.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});