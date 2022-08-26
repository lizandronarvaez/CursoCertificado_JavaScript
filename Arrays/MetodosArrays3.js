// METODOS DE ARRAYS

// .pop(elimina un elemento del final de un array)
// .push(Agrega un elemento al final de un array)

// unshift(Agrega el elemento al principio del array)
// shift(elimina el elemento del princpio del array)

let numeros=[10,20,30,40,50,60,70]

console.log('El elemento eliminado es el '+ numeros.pop())
console.table(numeros)
numeros.push(80)
console.table(numeros)

numeros.unshift(1,2,3,4,5)
console.table(numeros)

numeros.shift()
console.table(numeros)