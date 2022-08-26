const prompt = require('prompt-sync')()

let num1 = prompt('Introduce un primer numero: ');
let num2 = prompt('Introduce un segundo numero: ');

let contador = 0;

for (let num_test = num1; num_test < num2; num_test++) {

    let primo = true;

    for (let i = 2; i < num_test; i++) {

        if (num_test % i == 0) {

            primo = false;
            break
        }
    }

    if (primo) {

        console.log(num_test)
        contador++

        if (contador == 3) break
    }
}
