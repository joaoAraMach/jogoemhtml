// script.js

const cartas = [
    { nome: "Romero Paulera", calvice: 400, potencia: 850, vida: 500, inteligencia: 300 },
    { nome: "Anaconda 5 o filme", calvice: 999, potencia: 760, vida: 200, inteligencia: 800 },
    { nome: "Shaolin Matador de Porco", calvice: 600, potencia: 500, vida: 999, inteligencia: 100 },
    { nome: "Datena Cadeirinha", calvice: 100, potencia: 950, vida: 600, inteligencia: 250 },
    { nome: "Hugo que trancou o curso", calvice: 400, potencia: 800, vida: 500, inteligencia: 0 },
    { nome: "Neima '0 POC-POC'", calvice: 1000, potencia: 700, vida: 69, inteligencia: 900 },
    { nome: "Chat Gepeto", calvice: 0, potencia: 800, vida: 1000, inteligencia: 500 },
    { nome: "Tocano Calebe", calvice: 500, potencia: 850, vida: 300, inteligencia: 250 },
    { nome: "Denver McNuggets", calvice: 600, potencia: 777, vida: 200, inteligencia: 850 },
    { nome: "Japodi Al-Mussah", calvice: 100, potencia: 700, vida: 1000, inteligencia: 900 }
];

document.getElementById("escolher-carta").addEventListener("click", function() {
    const cartasDisponiveis = document.getElementById("cartas-disponiveis");
    const resultado = document.getElementById("resultado");
    
    // Limpar resultados anteriores
    cartasDisponiveis.innerHTML = "";
    resultado.innerHTML = "";

    // Mostrar cartas disponíveis
    cartas.forEach((carta, index) => {
        cartasDisponiveis.innerHTML += `<div class="carta" data-index="${index}">${carta.nome}</div>`;
    });

    // Adicionar evento de clique para cada carta
    document.querySelectorAll(".carta").forEach(carta => {
        carta.addEventListener("click", function() {
            const index = this.getAttribute("data-index");
            const cartaEscolhida = cartas[index];
            resultado.innerHTML = `Você escolheu: ${cartaEscolhida.nome} | Calvice: ${cartaEscolhida.calvice}, Potência: ${cartaEscolhida.potencia}, Vida: ${cartaEscolhida.vida}, Inteligência: ${cartaEscolhida.inteligencia}`;
        });
    });
});
