//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Obter os elementos do HTML
const inputNome = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const buttonAdicionar = document.querySelector('.button-add');
const buttonSortear = document.querySelector('.button-draw');

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const nome = inputNome.value.trim(); // Obter o nome e remover espaços extras

    // Verificar se o nome não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adicionar o nome à lista de amigos
    amigos.push(nome);
    atualizarLista();
    inputNome.value = ""; // Limpar o campo de entrada
    inputNome.focus(); // Focar novamente no campo de entrada
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    // Limpar a lista antes de atualizá-la
    listaAmigos.innerHTML = "";
    
    // Adicionar cada nome à lista no HTML
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para sortear.");
        return;
    }

    // Gerar um número aleatório entre 0 e o tamanho da lista de amigos
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibir o resultado do sorteio
    resultado.textContent = `O amigo secreto é: ${amigoSorteado}!`;
}

// Associar as funções aos botões
buttonAdicionar.addEventListener('click', adicionarAmigo);
buttonSortear.addEventListener('click', sortearAmigo);
