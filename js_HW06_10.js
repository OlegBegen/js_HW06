function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestoyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");


const amount = inputEl.value;
function createBoxes(amount) {
    
    const boxArr = [];
    let boxSize = 30;
    for (let i = 0; i < amount; i += 1){
        const inBoxEl = document.createElement("div");
        inBoxEl.style.width = boxSize;
        inBoxEl.style.height = boxSize;
        inBoxEl.style.background = getRandomHexColor();
        boxSize += 10;
        boxArr.push(inBoxEl);
    }
    boxesEl.append(...boxArr);
};

function destroyBoxes() {
    boxesEl.innerHTML = "";
};

buttonDestoyEl.addEventListener("click", destroyBoxes);
buttonCreateEl.addEventListener("click", createBoxes);
