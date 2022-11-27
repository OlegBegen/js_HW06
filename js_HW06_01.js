const categoriesEl = document.querySelectorAll('li.item');
console.log("Number of categories: " + categoriesEl.length);
for (const categorie of categoriesEl) {
    const categorueName = categorie.firstElementChild.textContent;
    const categorieItemEl = categorie.querySelector('ul')
        .querySelectorAll("li");
    console.log("Category: " + categorueName);
    console.log("Elements: " + categorieItemEl.length);
}
