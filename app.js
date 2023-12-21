alert('Bem vindo ao jogo do numero secreto!');

let numeroSecreto = 5;
let numeroDigitado;

while (numeroDigitado != numeroSecreto) {
    numeroDigitado = prompt('Escolha um número entre 1 e 10');

    if (numeroSecreto == numeroDigitado) {
        alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`)
    }
    else {
        if (numeroDigitado > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroDigitado}!`)
        }
         else {
            alert(`O número secreto é maior que ${numeroDigitado}!`)
         }
    }
}