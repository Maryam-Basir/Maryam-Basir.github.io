"use strict";
(() => {
  const story = document.querySelector(".story");
  const stage = document.querySelector(".story-stage");
  const copies = [...document.querySelectorAll("[data-copy]")];
  const frames = [...document.querySelectorAll(".product-frame")];
  const steps = [...document.querySelectorAll("[data-step]")];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const label = document.getElementById("product-label");
  const labels = ["کمپلکس پپتاید · مراقبت روزانه", "درپوش محافظ · بسته‌بندی پمپی", "یک فشار ساده · کرم سفید", "صبح و شب · روی پوست تمیز"];
  const tourButton = document.getElementById("tour");
  let current = -1;
  let tourTimer;
  let tourPlaying = false;
  let queued = false;
  let creamTimer;
  const travel = () => Math.max(1, story.offsetHeight - stage.offsetHeight);
  function select(index) {
    if (index === current) return;
    current = index;
    copies.forEach((copy, i) => {
      const active = i === index;
      copy.classList.toggle("active", active);
      copy.inert = !active;
      copy.setAttribute("aria-hidden", String(!active));
      frames[i].classList.toggle("active", active);
      frames[i].setAttribute("aria-hidden", String(!active));
      if (active) steps[i].setAttribute("aria-current", "step");
      else steps[i].removeAttribute("aria-current");
    });
    label.textContent = labels[index];
    if (index !== 2) {
      clearTimeout(creamTimer);
      document.getElementById("cream-sample").classList.remove("visible");
      document.getElementById("cream-note").textContent = "نمایش تعاملی بافت کرم";
    }
  }
  function update() {
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header"));
    const progress = Math.max(0, Math.min(1, (scrollY - story.offsetTop + header) / travel()));
    select(Math.min(3, Math.floor(progress * 4)));
    stage.style.setProperty("--chapter-progress", progress.toFixed(4));
    document.getElementById("story-progress").style.transform = `scaleX(${progress})`;
    queued = false;
  }
  function requestUpdate() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  function goTo(index) {
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header"));
    const target = story.offsetTop - header + travel() * (index === 0 ? 0 : index / 4 + .04);
    scrollTo({ top: target, behavior: reduced.matches ? "instant" : "smooth" });
  }
  function stopTour() {
    clearTimeout(tourTimer);
    tourPlaying = false;
    tourButton.setAttribute("aria-pressed", "false");
    document.getElementById("tour-label").textContent = "نمایش خودکار";
    tourButton.firstElementChild.textContent = "▷";
  }
  function scheduleTour() {
    tourTimer = setTimeout(() => {
      if (current >= 3) { stopTour(); return; }
      goTo(current + 1);
      scheduleTour();
    }, 4200);
  }
  tourButton.addEventListener("click", () => {
    if (tourPlaying) { stopTour(); return; }
    tourPlaying = true;
    tourButton.setAttribute("aria-pressed", "true");
    document.getElementById("tour-label").textContent = "توقف نمایش";
    tourButton.firstElementChild.textContent = "Ⅱ";
    if (current >= 3 || scrollY > story.offsetTop + travel()) goTo(0);
    scheduleTour();
  });
  steps.forEach(button => button.addEventListener("click", () => { stopTour(); goTo(Number(button.dataset.step)); }));
  document.querySelector("[data-next]").addEventListener("click", () => { stopTour(); goTo(2); });
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener("click", event => {
    stopTour();
    if (link.hash === "#intro" || link.hash === "#story") { event.preventDefault(); goTo(0); }
  }));
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("wheel", stopTour, { passive: true });
  window.addEventListener("touchstart", stopTour, { passive: true });
  window.addEventListener("keydown", event => { if (["Escape", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(event.key)) stopTour(); });
  document.addEventListener("visibilitychange", () => { if (document.hidden) stopTour(); });
  document.getElementById("dispense").addEventListener("click", () => {
    stopTour();
    clearTimeout(creamTimer);
    const sample = document.getElementById("cream-sample");
    sample.classList.remove("visible");
    creamTimer = setTimeout(() => {
      sample.classList.add("visible");
      document.getElementById("cream-note").textContent = "کرم سفید؛ آمادهٔ یک مرحله مراقبت روزانه.";
    }, reduced.matches ? 0 : 100);
  });
  const tabs = [...document.querySelectorAll("[data-routine]")];
  function setRoutine(button) {
    tabs.forEach(tab => {
      const active = tab === button;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    document.getElementById("routine-panel").setAttribute("aria-labelledby", button.id);
    document.getElementById("routine-intro").textContent = button.dataset.routine === "morning" ? "روزت را با چند لحظه توجه به پوستت شروع کن." : "در پایان روز، لحظه‌ای آرام برای مراقبت از پوستت کنار بگذار.";
    document.querySelector(".ritual-section").dataset.time = button.dataset.routine;
  }
  tabs.forEach((button, i) => {
    button.addEventListener("click", () => setRoutine(button));
    button.addEventListener("keydown", event => {
      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        const next = event.key === "Home" ? tabs[0] : event.key === "End" ? tabs[1] : tabs[1 - i];
        setRoutine(next);
        next.focus();
      }
    });
  });
  update();
})();
