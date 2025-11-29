// NAVIGATION MENU TOGGLE
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

// PROJECT SLIDER
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const dotsContainer = document.querySelector(".dots-container");

let index = 0;

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

rightArrow.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
});

leftArrow.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});
