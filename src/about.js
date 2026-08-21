
const loadAbout = () => {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Imaginary Restaurant is a place where good food, creativity, and a welcoming atmosphere come together.";

  const location = document.createElement("p");
  location.textContent = "Find us in the heart of the city.";

  content.appendChild(heading);
  content.appendChild(paragraph);
  content.appendChild(location);
}

export default loadAbout;