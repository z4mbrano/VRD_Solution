// Função para rolar suavemente até a seção desejada
function rolarParaSecao() {
    var secao = document.getElementById("secao-alvo");
    secao.scrollIntoView({ behavior: 'smooth' });
}
