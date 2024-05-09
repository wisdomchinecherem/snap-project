const dropIocn = document.querySelector(".drop-icon");
const secondDropIcon = document.querySelector(".second--drop-icon");
const dropdownHeader = document.querySelector(".drop-header");
const secondDropHeader = document.querySelector(".second-drop-header");
const dropDown = document.querySelector(".drop-down");
const secondDropDown = document.querySelector(".second-drop-down");

dropIocn.addEventListener("click", () => {
  dropIocn.classList.toggle("rotate");
  dropDown.classList.toggle("drop-show");
});

dropdownHeader.addEventListener("click", () => {
  dropIocn.classList.toggle("rotate");
  dropDown.classList.toggle("drop-show");
});

secondDropHeader.addEventListener("click", () => {
  secondDropIcon.classList.toggle("rotate");
  secondDropDown.classList.toggle("show-second-drop");
});

secondDropIcon.addEventListener("click", function () {
  secondDropIcon.classList.toggle("rotate");
  secondDropDown.classList.toggle("show-second-drop");
});

// ########################

const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector(".right-nav");
const iconMenu = document.querySelector(".icon-menu");
const body = document.body;

closeMenu.addEventListener("click", () => {
  nav.classList.remove("show-nav");
  body.classList.remove("body-background");
});

iconMenu.addEventListener("click", () => {
  nav.classList.add("show-nav");
  body.classList.add("body-background");
});
