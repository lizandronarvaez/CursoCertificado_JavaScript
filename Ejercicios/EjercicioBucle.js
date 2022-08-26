const prompt = require('prompt-sync')()

const Numeros = prompt("Introduce 5 numeros aletarios, separados con ',': ")

const ArrNumeros = Numeros.split(',')
console.log(`Los numeros introducidos son ${ArrNumeros}`)

for (let item of ArrNumeros) {

    let MultiplicacionNumeros = item * 5

    console.log(`${item} * 5 = ${MultiplicacionNumeros}`)
}