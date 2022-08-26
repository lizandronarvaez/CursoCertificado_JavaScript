// METODOS ARRAYS Manipular arrays
// El metodo slice() no modifica el array
// El metodo Splice(posicion del array, extraer  0 eelementos,'agrega elementos') si modifica el array
// El metodo fill() rellena un array con elementos

let MarcasRopa=['Nike','Adidas','Reebook','Fila']

let NumerosTresCifras=[123,456,789,125]

let MarcasMovil=new Array(5)

// console.table(NumerosTresCifras.slice(2))

// console.table(MarcasRopa.splice(4,0,'Zara','LecoQSportif'))

MarcasMovil.fill('Xiaomi')
MarcasMovil.fill('Huawei',3)
console.table(MarcasMovil)