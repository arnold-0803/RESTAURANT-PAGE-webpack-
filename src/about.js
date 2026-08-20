
const loadAbout = () => {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");

  heading.textContent = "About";

  content.appendChild(heading);
}

export default loadAbout;