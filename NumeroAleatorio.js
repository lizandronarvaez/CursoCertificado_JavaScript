const prompt = require('prompt-sync')()

let NumAdivinar = prompt("Vamos a buscar un numero aleatorio,introduce uno: ");
let NumRandon = Math.round(Math.random() * 100);
let count = 0;

while (NumAdivinar !== NumRandon) {

    if (NumAdivinar < NumRandon) {

        NumAdivinar = prompt('El numero aleatorio es mas alto, introduce otro: ')

    } else if (NumAdivinar > NumRandon) {
        NumAdivinar = prompt('El numero aleatorio es mas bajo, introduce otro: ')
    };

    if (NumAdivinar == NumRandon) {

        console.log(`Felicidades el numero encontrado es el ${NumRandon} y el numero de intentos ha sido ${count} veces`)
        break
    }

    count++;

}




