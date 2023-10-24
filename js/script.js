// Dati
const imgs = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

// Logica
const itemsElem = document.querySelector(".items");

let imgString = "";

for (let i = 0; i < imgs.length; i++) {
    const curImg = imgs[i];
    imgString += `<div class="slide-img item"><img src="${curImg}" alt=""></div>`;
}                   

console.log(imgString);

itemsElem.innerHTML += imgString;

const itemElems = document.querySelectorAll(".slide-img");
console.log(itemElems);

let curSlideIndex = 0;
itemElems[curSlideIndex].classList.add("active");

document.querySelector(".next").addEventListener("click", function(event) {
    event.preventDefault();
    if (curSlideIndex < itemElems.length - 1) {
        itemElems[curSlideIndex].classList.remove("active");
        curSlideIndex++;
        itemElems[curSlideIndex].classList.add("active");
    }
})

document.querySelector(".prev").addEventListener("click", function(event) {
    event.preventDefault();
    if (curSlideIndex > 0) {
        itemElems[curSlideIndex].classList.remove("active");
        curSlideIndex--;
        itemElems[curSlideIndex].classList.add("active");
    }
})
