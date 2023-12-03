
function* rango(desde, hasta) {
    for (i = desde; i <= hasta; i++) {

        yield i;
    }
}
let numero = rango(2, 10)

console.table(numero.next().value)
console.table(numero.next().value)
console.table(numero.next().value)
console.table(numero.next().value)
console.table(numero.next().value)