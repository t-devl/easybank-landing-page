const navToggle = document.querySelector(".nav__toggle");
const navToggleIcon = document.querySelector(".nav__toggle-icon");
const navList = document.querySelector(".nav__list");
const body = document.querySelector("body");

navToggle.addEventListener("click", () => {
  if (navList.classList.contains("nav__list--open")) {
    navList.classList.remove("nav__list--open");
    navToggleIcon.src = "images/icon-hamburger.svg";
    body.classList.remove("scroll-disabled");
  } else {
    navList.classList.add("nav__list--open");
    navToggleIcon.src = "images/icon-close.svg";
    body.classList.add("scroll-disabled");
  }
});
