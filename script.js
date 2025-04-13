// Mostra e oculta div com a solução do exercício
function mostraSolucao(id_botao, id_div) {
    const botao = document.getElementById(id_botao);
    const div = document.getElementById(id_div);
    botao.addEventListener('click', () => {
        div.style.display = div.style.display === 'none' ? 'block' : 'none';
    });
}

// Chamadas da função para cada exercício
mostraSolucao('mostra_div1', 'solucao_exercicio1');
mostraSolucao('mostra_div2', 'solucao_exercicio2');
mostraSolucao('mostra_div3', 'solucao_exercicio3');

// Animação para divs
window.addEventListener("scroll", function () {
    const secoes = document.querySelectorAll('section'); // seleciona todas as seções
    // Itera por cada seção encontrada
    secoes.forEach((secao) => {
        const divs_esquerda = secao.querySelectorAll('.animacao_esquerda');
        const divs_direita = secao.querySelectorAll('.animacao_direita');
        // Verifica a posição da seção no viewport usando getBoundingClientRect e aplica a classe visivel para iniciar a animação
        if (secao.getBoundingClientRect().top < window.innerHeight && secao.getBoundingClientRect().bottom > 0) {
            divs_esquerda.forEach((div) => {
                div.classList.add('visivel');
            });
            divs_direita.forEach((div) => {
                div.classList.add('visivel');
            });
        }
    });
});