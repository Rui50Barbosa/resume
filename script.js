const navMenu = document.querySelector(".nav-menu");

barranavegacao.addEventListener("click",()=>{
    barranavegacao.classList.toggle("active");
 navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener
    ("click", ()=>{
        barranavegacao.classList.remove("active");
        navMenu.classList.remove("active");
    }))