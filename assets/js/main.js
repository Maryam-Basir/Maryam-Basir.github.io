"use strict";
const t = value => window.PortfolioI18n.translate(value);
let emailComposed = false;
const themeButton = document.getElementById("theme-switcher");
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#111923" : "#f8f9fc";
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  themeButton.setAttribute("aria-label", t(`Switch to ${theme === "dark" ? "light" : "dark"} theme`));
}
try {
  setTheme(localStorage.getItem("maryam-theme") === "light" ? "light" : "dark");
} catch {
  setTheme("dark");
}
themeButton.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(theme);
  try { localStorage.setItem("maryam-theme", theme); } catch {}
});
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = navLinks.map(link => document.querySelector(link.getAttribute("href")));
function updateNavigation() {
  const marker = window.scrollY + Math.min(window.innerHeight * 0.3, 220);
  let current = sections[0];
  for (const section of [...sections].sort((a, b) => a.offsetTop - b.offsetTop)) {
    if (section.offsetTop <= marker) current = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections.at(-1);
  navLinks.forEach(link => {
    const active = link.hash === `#${current.id}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
let scrollQueued = false;
window.addEventListener("scroll", () => {
  if (!scrollQueued) {
    scrollQueued = true;
    requestAnimationFrame(() => { updateNavigation(); scrollQueued = false; });
  }
}, { passive: true });
window.addEventListener("resize", updateNavigation);
updateNavigation();
const projectsToggle = document.getElementById("toggle-projects");
projectsToggle.addEventListener("click", () => {
  const expanded = projectsToggle.getAttribute("aria-expanded") !== "true";
  document.querySelectorAll(".project-card").forEach((card, i) => { if (i >= 6) card.hidden = !expanded; });
  projectsToggle.setAttribute("aria-expanded", String(expanded));
  projectsToggle.firstChild.textContent = t(expanded ? "Show Featured Projects" : "View All Projects") + " ";
});
const projects = JSON.parse(document.getElementById("project-data").textContent);
const dialog = document.getElementById("project-dialog");
let lastPreviewButton;
document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const project = projects[Number(button.dataset.project)];
    document.getElementById("dialog-title").textContent = t(project.name);
    const image = document.getElementById("dialog-image");
    image.hidden = !project.image;
    if (project.image) image.src = project.image;
    else image.removeAttribute("src");
    document.getElementById("project-description").textContent = t(project.description || "");
    image.alt = t(`${project.name} full website preview`);
    const visit = document.getElementById("project-visit");
    visit.hidden = !project.url;
    if (project.url) visit.href = project.url;
    else visit.removeAttribute("href");
    document.getElementById("project-offline").hidden = Boolean(project.url);
    lastPreviewButton = button;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("dialog-open");
  });
});
document.getElementById("close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  lastPreviewButton?.focus({ preventScroll: true });
});
document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = String(data.get("subject")).trim();
  const body = `${t("Name")}: ${String(data.get("name")).trim()}\n${t("Email")}: ${String(data.get("email")).trim()}\n\n${String(data.get("message")).trim()}`;
  window.location.href = `mailto:maryambasir71@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  emailComposed = true;
  document.getElementById("form-status").textContent = t("Continue in your email app to send. If it did not open, email maryambasir71@gmail.com directly.");
});

function refreshLanguage() {
  setTheme(document.documentElement.dataset.theme);
  projectsToggle.firstChild.textContent = t(projectsToggle.getAttribute("aria-expanded") === "true" ? "Show Featured Projects" : "View All Projects") + " ";
  if (lastPreviewButton) {
    const project = projects[Number(lastPreviewButton.dataset.project)];
    document.getElementById("dialog-title").textContent = t(project.name);
    document.getElementById("project-description").textContent = t(project.description || "");
    document.getElementById("dialog-image").alt = t(`${project.name} full website preview`);
  }
  if (emailComposed) document.getElementById("form-status").textContent = t("Continue in your email app to send. If it did not open, email maryambasir71@gmail.com directly.");
  requestAnimationFrame(updateNavigation);
}
window.addEventListener("languagechange", refreshLanguage);
refreshLanguage();

const studioVideo = document.getElementById("studio-video");
if (studioVideo) {
  const showVideoError = () => { document.getElementById("video-status").hidden = false; };
  studioVideo.addEventListener("error", showVideoError);
  studioVideo.querySelector("source").addEventListener("error", showVideoError);
  document.addEventListener("visibilitychange", () => { if (document.hidden) studioVideo.pause(); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) studioVideo.pause();
    }, { threshold: 0 }).observe(studioVideo);
  }
}
