let arraysExample = [10, 50, 'futbol', 'mundial', { profesion: 'programador', salario: 25000 }]
let arraysExample2 = [500, 'barcelona', , true, 12.5]
let arraysTotal = [...arraysExample, ...arraysExample2]
let nombre = [...'lizandro narvaez']
let contador = 0

for (let i of arraysExample) {

    // console.table('En la posicion '+contador+' del array esta '+ i)
}

for (let i of nombre) {
    contador++
    // console.log('Posicion de la letra '+i.split(' ')+' es nº '+ contador)
}
// console.table(nombre)
// console.log(arraysExample.concat(arraysExample2))

// console.log(...nombre) //Operador spread son los tres puntos ...

// 4 Formas de crear arrays

let ejemplo1 = new Array()// Es lo mismo que let ejemplo1=[]

let ejemplo2 = new Array(10)//El numero entre parentesis declara los elementos que va a contener el array

let ejemplo3 = Array.of(10)

let playa = 'vicario'
let ejemplo4 = Array.from(playa)


console.log(ejemplo4)

