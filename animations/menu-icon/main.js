const box = document.querySelector(".center");
box.addEventListener("click", () => {
    Array.from(box.children).forEach((Element) => {
        Element.classList.remove("no-animation");
    });
    box.classList.toggle("active");
}); 