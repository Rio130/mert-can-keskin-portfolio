const body = document.body;
const themeButton = document.querySelector("#temaBtn");
const menuButton = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const themeIcon = themeButton?.querySelector(".theme-icon");

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (savedTheme === "light" || (!savedTheme && prefersLight)) {
  body.classList.add("light");
}

function updateThemeButton() {
  const isLight = body.classList.contains("light");
  if (themeIcon) themeIcon.textContent = isLight ? "☾" : "☼";
  themeButton?.setAttribute("aria-label", isLight ? "Koyu temaya geç" : "Açık temaya geç");
}

updateThemeButton();

themeButton?.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("portfolio-theme", body.classList.contains("light") ? "light" : "dark");
  updateThemeButton();
});

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Menüyü aç");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}
