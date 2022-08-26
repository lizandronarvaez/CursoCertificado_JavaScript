// METODOS ARRAYS (2)
// En estos metodos se utilizan parametros
    // findIndex => Busca el indice del array
    // find => Busca un elemento
    // every => Devuelve true o false (todos)
    // some =>  Devuelve true o false (Algunos)

    // charAt => busca la posicion del caracter a buscar
    // charAt(0) =>Primera letra de una palabra
    // charAt(item.length - 1) => ultima letra de una palabra


let edades = [28, 24, 8, 1, 67, 60, 45]

let nombre = ['carlos', 'juan', 'lizandro', 'luis']

// console.lo(g(nombre.find(item => item.charAt(item.length-1) == 'o'))

// console.log(edades.every(item => item < 100))

if(nombre.some(item=> item.charAt(0) == 'e')){
    console.log(`Hay una palabra que empieze por: L`)
}else{
    console.log('No hay ningun elemento que empieze por "L"')
}