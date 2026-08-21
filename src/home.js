import bannerImage from "../assets/background.webp";

const loadHome = () => {
  const content = document.querySelector("#content");

  const image = document.createElement("img");
  const contentHeading = document.createElement("h1");
  const contentParagraph = document.createElement("p");

  contentHeading.textContent = "Imaginary Restaurant";
  contentParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic tempore odit quae, nisi dolor libero nemo fugiat error beatae voluptatem debitis in illo vel sunt, molestias quidem rem natus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex at, ipsa error laboriosam accusantium ab debitis dolores, nemo eveniet non voluptatibus, expedita aliquid molestias aliquam assumenda? Vitae culpa id unde.";

  image.src = bannerImage;

  content.appendChild(contentHeading);
  content.appendChild(contentParagraph);
  content.appendChild(image);

}

export default loadHome;