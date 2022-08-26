/* Aqui estamos trabajando con objetos y accediendo a sus propiedades con object.entries, y con bucle for
let coche = {
    marca: 'nissan',
    modelo: 'qashqai',
    color: 'negro',
    anio: 2015,
    motor: 1.600,
    potencia: '163cv'
};

let keysCoche = "";

for (let [key, value] of Object.entries(coche)) {
    keysCoche = key + " : " + value
    keysCoche += " "
    console.log(key, value, keysCoche.toUpperCase().includes(2015))
}
*/

// Aqui vamos a ver el uso del bucle For in
let coche = {
    marca: 'nissan',
    modelo: 'qashqai',
    color: 'negro',
    anio: 2015,
    motor: 1.600,
    potencia: '163cv'
}
for(let property in coche){
    console.log(`${property}: ${coche[property]}`)
}