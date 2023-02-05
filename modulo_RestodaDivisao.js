
var dividendo = prompt("Digite um número: ");
var divisor = prompt("Digite outro número: ");

var resto = modulo(dividendo, divisor);
console.log("O resto da divisão é: " + resto);

function modulo(dividendo, divisor) {
    return dividendo - Math.floor(dividendo / divisor) * divisor;
}
