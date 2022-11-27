function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const body = document.body;

buttonEl.addEventListener("click", changeColor);

function changeColor() {
 let result = getRandomHexColor();
 body.style.backgroundColor = result;
 colorEl.textContent = result;
};

