function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 const elements = {
   inputEl: document.querySelector("input"),
   buttonCreateEl: document.querySelector("[data-create]"),
   buttonDestoyEl: document.querySelector("[data-destroy]"),
   boxesEl: document.querySelector("#boxes"),
 };
 const {inputEl, buttonCreateEl, buttonDestoyEl, boxesEl} = elements;
  
const destroyBoxes = () => boxesEl.innerHTML = "";
 
 const createBoxes = () => {
   const boxArr = [];
   const amount = inputEl.value;
   let boxSize = 30;
   for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
     boxEl.style.width = boxSize + "px";
    boxEl.style.height = boxSize + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
     boxArr.push(boxEl);
     boxSize += 10;
   };
  
   boxesEl.append(...boxArr);
 };
  
buttonDestoyEl.addEventListener("click", destroyBoxes);
buttonCreateEl.addEventListener("click", createBoxes);
