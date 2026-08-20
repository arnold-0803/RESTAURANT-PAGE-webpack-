
const loadMenu = () => {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");

  heading.textContent = "Menu";

  content.appendChild(heading);
}

export default loadMenu;