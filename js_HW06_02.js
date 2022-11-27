const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ulEl = document.createElement('ul');
// ulEl.classList.add('ingradients')
// const itemEl = document.createElement("li");
// for (const ingredient of ingredients) {
//     const itemEl = document.createElement("li");
//     itemEl.classList.add('item');
//     itemEl.textContent = ingredient;
//     ulEl.appendChild(itemEl);
// }
// console.log(ulEl);

const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientsList = elements => {
    return elements.map(element => {
        const itemEl = document.createElement("li");
        itemEl.classList.add('item');
        itemEl.textContent = element;
        return itemEl;
    });
}
const elements = makeIngredientsList(ingredients);
ingredientsListEl.append(...elements);

console.log(ingredientsListEl);

