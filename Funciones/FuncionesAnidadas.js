const prompt = require('prompt-sync')()

// function HipotenusaCalculo(catetoA, catetoB) {

//     let SumaDeCuadrados = (catetoA * catetoA) + (catetoB * catetoB)

//     return Math.round(Math.sqrt(SumaDeCuadrados))
// }

// let catetoA=prompt('Introduce la longitud del primer cateto: ')
// let catetoB=prompt('Introduce la longitud del segundo cateto: ')

// console.log(HipotenusaCalculo(catetoA,catetoB))

function HipotenusaCalculo(catetoA, catetoB) {
    const CatetoCalculo = (cateto) => {
        return cateto * cateto
    }

    return Math.sqrt(CatetoCalculo(catetoA) + CatetoCalculo(catetoB)).toFixed(2)
}

let catetoA = prompt('Introduce un cateto: ')
let catetoB = prompt('Introduce otro cateto: ')

console.log(HipotenusaCalculo(catetoA, catetoB))