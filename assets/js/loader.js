"use strict";
(() => {
  const loader = document.getElementById("site-loader");
  if (!loader) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const started = performance.now();
  const regions = [...document.querySelectorAll("main, .sidebar")];
  const priorInert = regions.map(region => region.inert);
  let finished = false;
  let finishing = false;
  loader.hidden = false;
  document.documentElement.classList.add("is-loading");
  regions.forEach(region => { region.inert = true; });
  function dismiss() {
    if (finished) return;
    finished = true;
    clearTimeout(deadline);
    loader.hidden = true;
    document.documentElement.classList.remove("is-loading");
    regions.forEach((region, i) => { region.inert = priorInert[i]; });
  }
  function finish() {
    if (finishing || finished) return;
    finishing = true;
    const remaining = reducedMotion ? 0 : Math.max(0, 650 - (performance.now() - started));
    setTimeout(() => {
      if (finished) return;
      loader.classList.add("is-leaving");
      setTimeout(dismiss, reducedMotion ? 0 : 220);
    }, remaining);
  }
  // Never block the site if a font or resource takes too long to arrive.
  const deadline = setTimeout(dismiss, 2200);
  requestAnimationFrame(() => {
    Promise.resolve(document.fonts ? document.fonts.ready : undefined).then(finish, finish);
  });
  window.addEventListener("pageshow", event => { if (event.persisted) dismiss(); });
})();
