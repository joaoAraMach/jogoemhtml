// Definição das classes de Carta e Jogador
class Carta {
    constructor(nome, calvice, potencia, vida, inteligencia) {
        this.nome = nome;
        this.calvice = calvice;
        this.potencia = potencia;
        this.vida = vida;
        this.inteligencia = inteligencia;
    }
    
    toString() {
        return `${this.nome} | Calvice: ${this.calvice}, Potência: ${this.potencia}, Vida: ${this.vida}, Inteligência: ${this.inteligencia}`;
    }
}

class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.cartas = [];
    }
    
    adicionarCarta(carta) {
        this.cartas.push(carta);
    }
    
    temCartas() {
        return this.cartas.length > 0;
    }
    
    jogarCartaNaPosicao(posicao) {
        return this.cartas.splice(posicao, 1)[0]; // Remove a carta da posição
    }
}

// Criação das cartas
const opcoesDeCartas = [
    new Carta("----Romero Paulera----", 400, 850, 500, 300),
    new Carta("----Anaconda 5 o filme----", 999, 760, 200, 800),
    new Carta("----Shaolin Matador de Porco----", 600, 500, 999, 100),
    new Carta("----Datena Cadeirinha----", 100, 950, 600, 250),
    new Carta("----Hugo que trancou o curso----", 400, 800, 500, 0),
    new Carta("----Neima '0 POC-POC'----", 1000, 700, 69, 900),
    new Carta("----Chat Gepeto----", 0, 800, 1000, 500),
    new Carta("----Tocano Calebe----", 500, 850, 300, 250),
    new Carta("----Denver McNuggets----", 600, 777, 200, 850),
    new Carta("----Japodi Al-Mussah----", 100, 700, 1000, 900),
];

// Jogadores
const jogador1 = new Jogador("Jogador 1");
const jogador2 = new Jogador("Jogador 2");

// Função para escolher cartas
function escolherCartas(jogador) {
    const cartasEscolhidas = [];
    while (cartasEscolhidas.length < 6 && cartasEscolhidas.length < opcoesDeCartas.length) {
        const escolha = Math.floor(Math.random() * opcoesDeCartas.length);
        if (!cartasEscolhidas.includes(opcoesDeCartas[escolha])) {
            cartasEscolhidas.push(opcoesDeCartas[escolha]);
            jogador.adicionarCarta(opcoesDeCartas[escolha]);
        }
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    escolherCartas(jogador1);
    escolherCartas(jogador2);

    const atributos = ["Calvice", "Potência", "Vida", "Inteligência"];
    const cartasContainer = document.getElementById("cartas-disponiveis");
    const resultadoDiv = document.getElementById("resultado");

    let turno = 0; // Controla o turno
    while (jogador1.temCartas() && jogador2.temCartas()) {
        const cartaJogador1 = jogador1.jogarCartaNaPosicao(0);
        const cartaJogador2 = jogador2.jogarCartaNaPosicao(0);

        const atributoEscolhido = Math.floor(Math.random() * atributos.length); // Escolha aleatória de atributo

        const valor1 = cartaJogador1[atributos[atributoEscolhido].toLowerCase()];
        const valor2 = cartaJogador2[atributos[atributoEscolhido].toLowerCase()];

        resultadoDiv.innerHTML += `<p>Rodada ${++turno}: ${jogador1.nome} jogou ${cartaJogador1.toString()} | ${jogador2.nome} jogou ${cartaJogador2.toString()}</p>`;
        resultadoDiv.innerHTML += `<p>Atributo escolhido: ${atributos[atributoEscolhido]} - ${jogador1.nome}: ${valor1}, ${jogador2.nome}: ${valor2}</p>`;

        if (valor1 > valor2) {
            resultadoDiv.innerHTML += `<p>${jogador1.nome} venceu a rodada!</p>`;
            jogador1.adicionarCarta(cartaJogador1);
            jogador1.adicionarCarta(cartaJogador2);
        } else if (valor2 > valor1) {
            resultadoDiv.innerHTML += `<p>${jogador2.nome} venceu a rodada!</p>`;
            jogador2.adicionarCarta(cartaJogador1);
            jogador2.adicionarCarta(cartaJogador2);
        } else {
            resultadoDiv.innerHTML += `<p>Empate! Ninguém ganhou a carta.</p>`;
            jogador1.adicionarCarta(cartaJogador1);
            jogador2.adicionarCarta(cartaJogador2);
        }
    }

    if (jogador1.temCartas()) {
        resultadoDiv.innerHTML += `<h2>${jogador1.nome} venceu o jogo!</h2>`;
    } else {
        resultadoDiv.innerHTML += `<h2>${jogador2.nome} venceu o jogo!</h2>`;
    }
}

// Evento de clique para iniciar o jogo
document.getElementById("escolher-carta").addEventListener("click", iniciarJogo);
