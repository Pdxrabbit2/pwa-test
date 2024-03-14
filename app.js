if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/worker.js")
        .then(res => alert("service worker registered"))
        .catch(err => alert("service worker not registered. Error: "+ err))
    })
  }