import "../css/index.css";

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenuButton.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".top-nav")) {
      mobileMenuButton.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  });
}

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".nav-button");
  const menu = dropdown.querySelector(".dropdown-menu");

  button.addEventListener("click", (e) => {
    e.stopPropagation();

    dropdowns.forEach((other) => {
      if (other !== dropdown) {
        other.classList.remove("active");
        other.querySelector(".dropdown-menu").classList.remove("active");
      }
    });

    dropdown.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

document.addEventListener("click", () => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
    dropdown.querySelector(".dropdown-menu").classList.remove("active");
  });
});

const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

mobileDropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".nav-button");
  const menu = dropdown.querySelector(".mobile-dropdown-menu");

  button.addEventListener("click", (e) => {
    e.stopPropagation();

    dropdown.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedHeaders = document.querySelectorAll(".animated-header");
  const containerHeight = document.querySelector(".usp-animation").offsetHeight;
  let currentIndex = 0;

  animatedHeaders.forEach((header) => {
    header.style.transform = `translateY(${containerHeight}px)`;
    header.style.transition = "transform 1.5s ease-in-out";
  });

  function animateText() {
    const currentHeader = animatedHeaders[currentIndex];

    currentHeader.style.transform = "translateY(0)";

    setTimeout(() => {
      currentHeader.style.transform = `translateY(-${containerHeight}px)`;

      setTimeout(() => {
        currentHeader.style.transition = "none";
        currentHeader.style.transform = `translateY(${containerHeight}px)`;

        setTimeout(() => {
          currentHeader.style.transition = "transform 0.8s ease-in-out";
        }, 50);
      }, 800);

      currentIndex = (currentIndex + 1) % animatedHeaders.length;

      animateText();
    }, 3000);
  }

  animateText();
});
