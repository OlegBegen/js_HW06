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
 const { inputEl, buttonCreateEl, buttonDestoyEl, boxesEl } = elements; 
  
 const destroyBoxes = () => boxesEl.innerHTML = "";
  
 const createBoxes = (amount) => {
   amount = inputEl.value;
   const boxArr = [];

   for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = ${i * 10 + 30} px;   
    boxEl.style.height = boxEl.style.width;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxArr.push(boxEl);
   };
  
   boxesEl.append(...boxArr);
 };
  
buttonDestoyEl.addEventListener("click", destroyBoxes);
buttonCreateEl.addEventListener("click", createBoxes);