const prompt = require('prompt-sync')()

function factorial(numero) {
    try {
        if (numero < 0) throw Error('No se puede introducir un numero negativo!')

    } catch (e) {
        console.log(e)
    }

    let factorial;
    for (factorial = 1; numero > 1; numero--) {

        factorial = factorial * numero
    }

    return factorial
}

let numero = prompt('Introduce un numero: ')

console.table(factorial(numero))