alert('Bem vindo ao jogo do numero secreto!');

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroDigitado;
let tentativas = 1;

while (numeroDigitado != numeroSecreto) {
    numeroDigitado = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroSecreto == numeroDigitado) {
        break;
    } else {
        if (numeroDigitado > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroDigitado}!`)
        } else {
            alert(`O número secreto é maior que ${numeroDigitado}!`)
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);