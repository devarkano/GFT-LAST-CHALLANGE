const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterEntrada(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(parseInt(resposta));
        });
    });
}

async function main() {
    let num1 = await obterEntrada("Digite o nível do monstro: "); 
    let num2 = await obterEntrada("Digite a dificuldade da batalha (1 a 100): "); 

    const xpGanho = num1 * num2 * 100;

    console.log("Voce ganhou " + xpGanho + " XP!");

    rl.close();
}

main();
