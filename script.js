// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Gentle reveal-on-scroll for sections (respects reduced-motion via CSS)
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(16px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    sections.forEach((s) => {
      // First section (hero) reveals immediately
    });
  });
});

const style = document.createElement("style");
style.textContent = `main section.in-view { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// Reveal hero immediately on load rather than waiting for scroll
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }
});
