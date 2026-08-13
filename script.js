/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  document.body.classList.toggle("no-scroll");
});

/* Close menu after clicking navigation */

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");

    document.body.classList.remove("no-scroll");
  });
});

/* =========================================
   SCROLL ANIMATION
========================================= */

const animatedSections = document.querySelectorAll(".section, .contact");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },

  {
    threshold: 0.15,
  },
);

animatedSections.forEach((section) => {
  observer.observe(section);
});

/* =========================================
   NAVBAR BACKGROUND
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* =========================================
   PROJECT HOVER EFFECT
========================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

/* =========================================
   HERO PARALLAX
========================================= */

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("mousemove", (event) => {
  if (!heroVisual) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 10;

  const y = (event.clientY / window.innerHeight - 0.5) * 10;

  heroVisual.style.transform = `translate(${x}px, ${y}px)`;
});
