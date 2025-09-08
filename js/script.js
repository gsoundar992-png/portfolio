// Sticky Nav on Scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("main-nav");
  if (window.scrollY > 50) {
    nav.classList.add("py-2");
    nav.classList.remove("py-4");
  } else {
    nav.classList.add("py-4");
    nav.classList.remove("py-2");
  }
});
// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");
  // Toggle menu on button click
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
  // Close menu when clicking a link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
});
// Intersection Observer for Animations
const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
      entry.target.classList.remove("opacity-0", "translate-y-5");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll("[data-animation]").forEach((element) => {
  element.classList.add(
    "opacity-0",
    "translate-y-5",
    "transition-all",
    "duration-700"
  );
  observer.observe(element);
});
