const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const galleryEl = document.querySelector(".gallery");

// const makeCard = images
//     .map((image) => `<li class="gallery_item"><img class="gallery_item__img"
// src="${image.url}" alt="${image.alt}"></li>`).join("");
// console.log(makeCard);
// galleryEl.insertAdjacentHTML("afterbegin", makeCard);
// console.log(galleryEl);


// ===== варіант з функцією ======

function makeCards(arr, gallery) {
   const makeCard = arr
    .map(({url, alt}) => `<li class="gallery_item"><img class="gallery_item__img"
src="${url}" alt="${alt}" width=400px heigth = 600px></li>`).join("");
gallery.insertAdjacentHTML("afterbegin", makeCard)    
    
}
makeCards(images, galleryEl);
console.log(galleryEl);




