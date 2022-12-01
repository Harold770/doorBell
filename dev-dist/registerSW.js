if ("serviceWorker" in navigator)
  navigator.serviceWorker.register("/doorBell/dev-sw.js?dev-sw", {
    scope: "/doorBell/",
    type: "classic",
  });
