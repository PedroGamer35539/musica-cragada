const inputPesquisa = document.querySelector('.search-input');
const botaoPesquisa = document.querySelector('.search-button');

// Função que pega o texto e mostra na tela
function realizarPesquisa() {
    const texto = inputPesquisa.value;
    if (texto.trim() !== "") {
        alert("Você pesquisou por: " + texto);
    }
}

// Clicar no botão
botaoPesquisa.addEventListener('click', realizarPesquisa);

// Apertar a tecla "Enter" no teclado
inputPesquisa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        realizarPesquisa();
    }
});