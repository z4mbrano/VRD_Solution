// Função para rolar suavemente até a seção desejada
function rolarParaSecao() {
    var secao = document.getElementById("secao-alvo");
    secao.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Para observar apenas uma vez
            }
        });
    });

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

function toggleDiv() {
    var login = document.getElementById("login");
    if (login.style.display === "none" || login.style.display === "") {
        login.style.display = "block";
    } else {
        login.style.display = "none";
    }
}