const staticDevCoffee = "uwu"
const assets = [
  "/pwa-test/",
  "/pwa-test/index.html",
  "/pwa-test/app.js",
  "https://www.freecodecamp.org/news/content/images/size/w60/2020/01/circle-cropped.png"
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticDevCoffee).then(cache => {
        cache.addAll(assets)
      })
    )
  })

  self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })