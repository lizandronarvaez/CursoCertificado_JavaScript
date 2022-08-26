const prompt = require('prompt-sync')()

let numero = prompt("Introduce un numero: ")

while (numero < 0) {
    numero = prompt('Introduce un numero positivo por favor:')
}

let Raiz_Cuadrada = Math.sqrt(numero)

console.log(Raiz_Cuadrada)