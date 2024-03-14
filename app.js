const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js", {
        scope: "/",
      });
      if (registration.installing) {
        alert("Service worker installing");
      } else if (registration.waiting) {
        alert("Service worker installed");
      } else if (registration.active) {
        alert("Service worker active");
      }
    } catch (error) {
      alert(`Registration failed with ${error}`);
    }
  }
};

// …

registerServiceWorker();
