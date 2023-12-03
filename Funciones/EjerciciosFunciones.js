const prompt = require('prompt-sync')()

let ComisionVentas = (ventas, antiguedad, zona) => {
    let comision = 0;

    if (ventas > 500) comision = (ventas * 15) / 100

    if (antiguedad > 5) comision += 100

    if (zona === 'madrid') comision += 50

    if (zona === 'barcelona') comision += 100

    return comision
}

let NumeroVentas = prompt('Introduce las ventas realizadas este mes del trabajador: ')
let AntiguedadEmpresa = prompt('Antiguedad trabajador: ')
let ZonaVentas = prompt('Introduce la ciudad donde reside el trabajador: ')
console.log('La comision por ventas de este mes es de ' + ComisionVentas(NumeroVentas, AntiguedadEmpresa, ZonaVentas) + ' €')