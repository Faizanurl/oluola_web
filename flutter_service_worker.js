'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ecfa990f4d69eb17649441ac2e8877ff",
".git/config": "bb720a49d7d49758f39df2605310ffc4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "aa16bf9b88a17222d77a9adeb8a2a420",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "28e6a648678295b6602f86bcdd215f13",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41a09236b7036482f7a858e71f5c2055",
".git/logs/refs/heads/master": "41a09236b7036482f7a858e71f5c2055",
".git/logs/refs/remotes/origin/HEAD": "a1fd09bf029ef506359de1c1d6e0c60b",
".git/logs/refs/remotes/origin/master": "7503018b919e87dbb3bde96eb52c3e55",
".git/objects/05/44b99cdafc07c65ce809cc1a52875e5eb7a23c": "5b8f15403b8ff116691791d63e453201",
".git/objects/07/66022d85056c2acc2e1a4c06419a1ea3ffefb4": "1c1ddb311a3d5ad6ba7ac9d004a4dafd",
".git/objects/0b/a82305f82b2242b40f3317e18e8a0165397ee8": "185084a57c8865390a9b22fa5bfbea5d",
".git/objects/14/fdfc016dbf7efaed0ddf86c680b20413d3049c": "1acd714c999ba3e766836adfdf161254",
".git/objects/17/0a02ba95b8ceb9bbfba629ab143fe5de4fd2c6": "951b45a758b76ed572a0eccd15f1da65",
".git/objects/19/b7ffa5a669b80cff07f6cb2183afcb5519b747": "f7f2d998ca0a3d4f0d8cb12c8656dd72",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/2f/a492cef347094add02f3484f8350854aaecbc0": "12109c3d7e396465792cbe1f37988529",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3a/1e1b78e9a6fbb7269a9e8db9809671eefbf8f1": "7e242d2566fbdba49fdcc27ecc8ba8df",
".git/objects/3e/f335934d7139ee0ea5a3d391605ea05388f993": "31cb5cbf53e4a284e4b015398c914a4a",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/53/fc9f50cefadf3086d0035f5a18d1a9a11bb0bc": "e218448a0789d8e256ba59a01924b94a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5b/460f73adcb7190d53171811e251a574b02fbc5": "24ecb8a61756a999c948cf452380691f",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/40a08c60ca304202fe82552222408f96aa8cac": "5baaa37454365cb903e44291f58fc912",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/83/e296d5c9ec055b16a9f957c95fd2625228cfbc": "9565c40491f6d511bf4c5d91c63bd73b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/83c743919f18ac97a4be80b02b209d68a7a9c9": "2e4376028cccae6fadf4f80a53477090",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9d/79f2d8bfe607c8fffb6fe49952c06558181b0a": "a32e95eb3d03de42cec3582b943f5489",
".git/objects/a2/eb63fe30b8440455bd0492b0f87956d49acd78": "9274243e3ab09ecbd1ff75e44d116783",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/c5f89126f80adcd39c6f68fa50083b645e6ca6": "a34d6022399eb8a5c638cf17f2c11ae4",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/fb76bf479009ba009177c4b6eaaccee7209fd6": "23fe6ae62b22dc3d3323c3cd7fc24c33",
".git/objects/a9/8f750e3805519654e50a6764ad8c3bba8bc44a": "0d8e1568235a1ac3898d0e01af773d7c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/1ddacc266fc0488660da3b405ddc3f27e7c46d": "ed118102e4572571e6e4372d156b2bbe",
".git/objects/c8/b7c9fe9c396a5074680c85c108939e0f924329": "98385cf1acc955fe63dc32f7ccb337d5",
".git/objects/cf/3ad0d9ecb4bea5bf0d3f3f751cdb618f77e02b": "7a9fd993b336479afded9c28e32e3b7e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/05cb2b2193b4be6397d6f48f98eebdbc47c693": "ac57ed3ede6394eccb934c5ab48a8326",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/29f38b565a1609bcebccc4036478273580ddb5": "ba7f8f6bf41e7c7fb55ccd42540d3e80",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a94c7dd4b5064eccc1eed76e89dba926e1c3f8": "abbbc777c3ad139e57b3722d8de6c1c0",
".git/objects/eb/b6a3cf88d313f82aa5a0a936e799f76b69f4ce": "1605dfaf703dd20e7b5e6809d07337bf",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/52f33b054684cec4f580d2c65a4e25e40919aa": "8dbdeb5b1055e8e543700e4c115a68eb",
".git/objects/fe/643d40f78b80bef2babc365b40e72d97495c85": "a037f5e8aeb40f70a338c91419065e3d",
".git/ORIG_HEAD": "5d78c1566757b9599a094d37cc8dd836",
".git/refs/heads/master": "f8bb7e808d098a0555359da650f692d4",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "f8bb7e808d098a0555359da650f692d4",
".github/workflows/static.yml": "460c55729583fa21ec248ef3b182e75a",
"assets/AssetManifest.bin": "c4c91784be7bf2f10c3537f838e1e008",
"assets/AssetManifest.bin.json": "f7644f4a46b55f9a8c63cbb67910d24e",
"assets/AssetManifest.json": "09ea3904331969eb96f46c6b548b9fe4",
"assets/assets/jump.jpg": "09eb079a2e889be425bf82ada412c158",
"assets/assets/more.jpg": "66dba8ea86f3184f88876f4c25c0b29e",
"assets/assets/olaolu.jpg": "6e5a51d06a9e4fc2a0cfbac4c2b33c1c",
"assets/assets/olaolu1.jpg": "8eebf822554ee9aebbd6d95176600768",
"assets/assets/photo.jpg": "d226966ac495e259638e7f562b57da76",
"assets/FontManifest.json": "b59226b750e29beb866e1e7e45f7a351",
"assets/fonts/ff.ttf": "85d7f13eca6e725d74f84ef0ce5f5789",
"assets/fonts/knewave.ttf": "f77e1ba76d6ce86a4639dce4a09b2db5",
"assets/fonts/MaterialIcons-Regular.otf": "90f5721d4b09d2f34bcc342be9455eed",
"assets/NOTICES": "9f2cd12201492a289e61b70bce886cda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "5e4513094b051e4c4e10745b31d4649e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "63a68643a3f230babd87c9926c7ac37d",
"/": "63a68643a3f230babd87c9926c7ac37d",
"main.dart.js": "1afd5c73a0e95126552757fe5c505759",
"manifest.json": "d2f911136b917d1bd7f55eee887b80d0",
"version.json": "c11ffb5432994e9371e1b9a30fc2c451"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
