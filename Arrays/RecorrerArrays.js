// FORMAS DE RECORRER ARRAYS

//BUCLE FOR OF

let CiudadesEspaña = ['Madrid', 'Ciudad Real', 'Barcelona', 'Valencia', 'Malaga', 'Torrejon de Ardoz', 'Pinto', 'Getafe']

let capitales = ''

for (let [item, pais] of CiudadesEspaña.entries()) {       // El bucle for in solo se utiliza en objetos!!

    // console.log(item + ' ' + pais)

}
// console.log(capitales)

// BUCLE FOR EACH

CiudadesEspaña.forEach(pais =>{ 
    capitales+=pais.toUpperCase()+' '
})
console.log(capitales)