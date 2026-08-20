import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");


homeButton.addEventListener("click", () => {
  content.textContent = "";

  loadHome();
});

menuButton.addEventListener("click", () => {
  content.textContent = "";

  loadMenu();
});

aboutButton.addEventListener("click", () => {
  content.textContent = "";

  loadAbout();
});

loadHome();
