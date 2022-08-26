let marcasCoches=['Ford','Nissan','Volvo','Opel','Mercedes']

let nuevaMarca=marcasCoches.push('Renault') //.push() Agrega el elemento al final del array
let metodoUnshift=marcasCoches.unshift('Seat','Bmw') //.unshift() Agrega los elementos al principio del array


// console.log(marcasCoches.pop()) //.pop() Elimina el ultimo elemento y devuelve el valor que ha sido eliminado
// console.log(marcasCoches.shift()) //.shift() Elimina el primer elemento de un array
delete marcasCoches[5]
console.table(marcasCoches)