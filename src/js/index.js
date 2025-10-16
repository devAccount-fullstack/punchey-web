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
