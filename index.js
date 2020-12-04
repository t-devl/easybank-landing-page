const navToggle = document.querySelector(".nav__toggle");
const navToggleIcon = document.querySelector(".nav__toggle-icon");
const navList = document.querySelector(".nav__list");

navToggle.addEventListener("click", () => {
  if (navList.classList.contains("nav__list--open")) {
    navList.classList.remove("nav__list--open");
    navToggleIcon.src = "images/icon-hamburger.svg";
  } else {
    navList.classList.add("nav__list--open");
    navToggleIcon.src = "images/icon-close.svg";
  }
});
