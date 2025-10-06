import { SpeedInsights } from "@vercel/speed-insights/next"
// Seleciona os elementos do DOM
const formulario = document.getElementById('formulario-transacao');
const listaTransacoes = document.getElementById('lista-transacoes');

// Array para armazenar as transações (temporário)
let transacoes = [];

// Adiciona um evento para lidar com o envio do formulário
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    // Captura os valores do formulário
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;

    // Cria um objeto para a nova transação
    const novaTransacao = {
        descricao: descricao,
        valor: valor,
        tipo: tipo
    };

    // Adiciona a nova transação ao array
    transacoes.push(novaTransacao);

    // Limpa o formulário para a próxima entrada
    formulario.reset();

    // Atualiza a lista na tela
    renderizarTransacoes();
});

// Função para exibir as transações na tela
function renderizarTransacoes() {
    listaTransacoes.innerHTML = ''; // Limpa a lista antes de atualizar

    transacoes.forEach(transacao => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${transacao.descricao}: R$ ${transacao.valor.toFixed(2)} (${transacao.tipo})`;
        listaTransacoes.appendChild(itemLista);
    });

}
