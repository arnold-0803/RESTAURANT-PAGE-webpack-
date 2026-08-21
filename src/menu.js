
const loadMenu = () => {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const dishOne = document.createElement("h2");
  dishOne.textContent = "Grilled Chicken";

  const dishOneDescription = document.createElement("p");
  dishOneDescription.textContent = "Tender grilled chicken served with fresh vegetables."

  const dishTwo = document.createElement("h2");
  dishTwo.textContent = "Beef Burger";

  const dishTwoDescription = document.createElement("p");
  dishTwoDescription.textContent = "A juicy beef burger served with crispy fries."

  content.appendChild(heading);
  content.appendChild(dishOne);
  content.appendChild(dishOneDescription);
  content.appendChild(dishTwo);
  content.appendChild(dishTwoDescription);
}

export default loadMenu;