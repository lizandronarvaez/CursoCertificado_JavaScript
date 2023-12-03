const prompt = require('prompt-sync')()
// let empleado={
//     salario:4000000,
//     comision:100000,
//     toLocaleString:function(){ return `(${this.salario.toLocaleString()}, ${this.comision.toLocaleString()})`}
// }

// console.table(empleado.toLocaleString())

let fecha = new Date();

// console.table(fecha.valueOf())
// console.table(fecha.toLocaleString())

const EJEMPLOCOCHE = "color"

function propiedadVehiculo() { return "potencia" }

let vehiculo = {}
vehiculo[EJEMPLOCOCHE] = 'rojo'
vehiculo[propiedadVehiculo()] = 400 + 'cv'

// Forma mas simplificada de objetos
let vehiculo1 = {
    [EJEMPLOCOCHE]: 'azul',
    [propiedadVehiculo()]: 400 + ' cv',
}

let camion = { uso: 'industrial', capacidad: 'grande', peso: 3000, combustible: 'diesel' }

let vehiculoIndustrial = { ...vehiculo1, ...camion }
// console.table(vehiculoIndustrial)

// 

let nomina = {

    sueldobruto: 1520,
    sueldoNeto: 1450,
    get retencion() { return (this.sueldobruto) - (this.sueldoNeto) }, //Cuando colocas getter o setter no hace falta incluir () al llamar ala funcion en LOG!!
    set retencion(nuevoSueldoBruto) {
        this.sueldobruto = nuevoSueldoBruto
    }

    //getter solo permite leer, y setter permite escribir o establecer algo nuevo!!!
}
nomina.retencion = 1950

// console.table(`Tu sueldo bruto es ${nomina.sueldobruto}€,te retienen de la nomina ${nomina.retencion}€,por lo que tu sueldo NETO es ${nomina.sueldoNeto}€`)

let persona = {
    nombre: 'lizandro',
    primer_apellido: 'narvaez',
    segundo_apellido: 'moran',
    get dimeNombre() {
        return `${this.nombre} ${this.primer_apellido} ${this.segundo_apellido}`
    },
    set dimeNombre(NombreNuevo){
        [this.nombre,this.primer_apellido,this.segundo_apellido]=NombreNuevo.split(' ')
        }
}

persona.dimeNombre=prompt('Introduce tu nombre: ')
console.table(`Hola! ${persona.dimeNombre}, que tengas buen dia`)