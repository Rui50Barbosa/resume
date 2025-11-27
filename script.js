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