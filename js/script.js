// Ad Post Graphics Website JavaScript

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (!header) return;
  header.style.boxShadow = window.scrollY > 40
    ? "0 8px 25px rgba(0,0,0,.15)"
    : "0 5px 15px rgba(0,0,0,.08)";
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".card, .grid-2, .stats, .cta, .timeline div, .contact-card, .contact-form").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

const topButton = document.createElement("button");
topButton.id = "topButton";
topButton.innerHTML = "↑";
topButton.style.display = "none";
document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 500 ? "block" : "none";
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
