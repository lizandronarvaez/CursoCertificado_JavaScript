const prompt = require('prompt-sync')()

let NumInput = prompt('Introduce un numero: ')
let FactorialNum;


for (FactorialNum = NumInput; NumInput > 1; NumInput--) {

    FactorialNum = FactorialNum * (NumInput - 1)
    console.log(FactorialNum, NumInput)
}
