// Metodos para recorrer arrays

let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let resultado = 0;


numeros.forEach(function (valor, index, array) {
    array[index] = valor + 1
})

console.log(numeros)