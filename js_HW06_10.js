function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const inputEl = document.querySelector("#controls input");
// const buttonCreateEl = document.querySelector("[data-create]");
// const buttonDestoyEl = document.querySelector("[data-destroy]");
// const boxesEl = document.querySelector("#boxes");
 const elements = { 
   inputEl: document.querySelector("input"), 
   buttonCreateEl: document.querySelector("[data-create]"), 
   buttonDestoyEl: document.querySelector("[data-destroy]"), 
   boxesEl: document.querySelector("#boxes"), 
 }; 
 const { inputEl, buttonCreateEl, buttonDestoyEl, boxesEl } = elements; 

// const amount = inputEl.value;
// function createBoxes(amount) {
    
//     const boxArr = [];
//     let boxSize = 30;
//     for (let i = 0; i < amount; i += 1){
//         const inBoxEl = document.createElement("div");
//         inBoxEl.style.width = boxSize;
//         inBoxEl.style.height = boxSize;
//         inBoxEl.style.background = getRandomHexColor();
//         boxSize += 10;
//         boxArr.push(inBoxEl);
//     }
//     boxesEl.append(...boxArr);
// };


const destroyBoxes = () => boxesEl.innerHTML = "";

// const amount = inputEl.value;

const createBoxes = (amount) => {
    amount = inputEl.value;
    console.log(amount);
    const boxArr = [];
    let boxSize = 30;
     for (let i = 0; i < amount; i += 1){
        const inBoxEl = document.createElement("div");
        inBoxEl.style.width = boxSize;
        inBoxEl.style.height = boxSize;
        inBoxEl.style.backgroundColor = getRandomHexColor();
        boxSize += 10;
        boxArr.push(inBoxEl);
    }
    boxesEl.append(...boxArr);

};

buttonDestoyEl.addEventListener("click", destroyBoxes);
buttonCreateEl.addEventListener("click", createBoxes);



//  const elements = { 
//    inputEl: document.querySelector("input"), 
//    createBtnEl: document.querySelector("[data-create]"), 
//    destroyBtnEl: document.querySelector("[data-destroy]"), 
//    boxesWrapperEl: document.querySelector("#boxes"), 
//  }; 
//  const { inputEl, createBtnEl, destroyBtnEl, boxesWrapperEl } = elements; 
  
//  const destroyBoxes = () => boxesWrapperEl.innerHTML = ""; 
  
//  const createBoxes = (amount) => { 
//    amount = inputEl.value; 
//    const boxArr = []; 
  
//    for (let i = 0; i < amount; i += 1) { 
//      const boxEl = document.createElement("div"); 
//      boxEl.style.width = ${i * 10 + 30}px; 
//      boxEl.style.height = boxEl.style.width; 
//      boxEl.style.backgroundColor = getRandomHexColor(); 
//      boxArr.push(boxEl); 
//    }; 
  
//    boxesWrapperEl.append(...boxArr); 
//  }; 
  
//  createBtnEl.addEventListener("click", createBoxes); 
//  destroyBtnEl.addEventListener("click", destroyBoxes);