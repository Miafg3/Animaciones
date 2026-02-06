const ratingContainer = document.querySelector(".rating");
const limit = 5;

let currentValue = 0;

const html = Array.from({ length: limit }, (_, i) => {
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

ratingContainer.innerHTML = html.join("");

const items = document.querySelectorAll(".item");

function paintStars(value) {
    items.forEach((item, i) => {
        item.classList.toggle("item-full", i < value);
    });
}

items.forEach((item) => {
    item.addEventListener("click", () => {
        currentValue = parseInt(item.dataset.pos) + 1;
        paintStars(currentValue);

        console.log("Rating seleccionado:", currentValue);
    });
});