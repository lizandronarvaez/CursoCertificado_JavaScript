const prompt = require('prompt-sync')()

let salarios = []
let cantidadTrabajadores = 0;

for (i = 0; i < 5; i++) {

    cantidadTrabajadores += 1
    let salario = prompt('Introduce un salario del trabajador ' + cantidadTrabajadores + ': ')
    salarios[i] = salario
}

for (let salario of salarios) {

    if (salario < 1000) continue
    if (!salario) continue

    let salarioSinDescuento = salario * 0.10
    salario = salario - salarioSinDescuento
    console.log(salario)
}