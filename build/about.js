"use strict";

const buttonOpenMenu = document.querySelector(".button-open-menu");
const dropMenu = document.querySelector(".dropmenu");
const buttonCloseMenu = document.querySelector(".button-close-menu");
const overlay = document.querySelector(".overlay");
const touchCloseMenu = document.querySelector(".touch-close-menu");

buttonOpenMenu.addEventListener("click", function () {
  dropMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

buttonCloseMenu.addEventListener("click", function () {
  dropMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});

touchCloseMenu.addEventListener("click", function () {
  dropMenu.classList.add("hidden");
});
