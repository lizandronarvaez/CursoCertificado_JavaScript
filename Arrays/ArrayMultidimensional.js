let ModeloVehiculos = [['Seat Ibiza', 'Seat Leon'], ['Ford Focus', 'Ford mondeo'], ['Volvo S60', 'Volvo S70']]

// console.log('La marca favorita de coche es ' + ModeloVehiculos[1][0].toUpperCase())
ModeloVehiculos.push(['Volswagen Passat', 'Volswagen Tiguan'])
// console.log(ModeloVehiculos)

// Mostrar la tabla multiplicar de un numero

let tablaMultiplicar = new Array(11)

for (let i = 1; i < tablaMultiplicar.length; i++) {
    tablaMultiplicar[i] = new Array(11)
}

for (let j = 1; j < tablaMultiplicar.length; j++) {
    for (let x = 1; x < tablaMultiplicar[j].length; x++) {
        tablaMultiplicar[x][j] = x * j
    }
}
console.table(tablaMultiplicar)