import MapTipos from './MapTipos.js'

let datos = [['Marca-Modelo', 'Nissan Qashqai'], ['Compañia', ' MutuaMadrileña'], ['FechaDeCompra', 2018]]

let miCoche = new MapTipos('string', 'string', datos)

console.log(miCoche.get('FechaDeCompra'))

// const datos = new Map()

// const persona1 =
//     datos.set('DNI', 2)
//     datos.set('Nombre', 'Lizandro')
//     datos.set('Edad', 28)

// console.log(persona1.get('Nombre'))