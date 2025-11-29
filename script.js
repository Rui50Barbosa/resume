//NAVIGATION MENU TOGGLE

const navMenu = document.querySelector(".nav-menu");
const barranavegacao = document.querySelector(".barranavegacao");

barranavegacao.addEventListener("click", () => {
    barranavegacao.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        barranavegacao.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

//PROJECT SLIDER

const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let index = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

rightArrow.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

leftArrow.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});