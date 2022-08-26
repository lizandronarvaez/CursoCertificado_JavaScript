const prompt = require('prompt-sync')()

let examen1 = prompt("Ingresa la nota del primer examen: ")
let examen2 = prompt("Ingresa la nota del segundo examen: ")
let examen3 = prompt("Ingresa la nota del tercer examen: ")

let nota1 = Number(examen1)
let nota2 = Number(examen2)
let nota3 = Number(examen3)
let Nota_Media = ((nota1 + nota2 + nota3) / 3).toFixed(1)

if (Nota_Media >= 7) {

    console.log(`Felicidades! Haz aprobado el curso con un ${Nota_Media}`)

} else if (Nota_Media >= 5) {

    console.log(`Haz aprobado con ${Nota_Media}, pero estudia un poco mas haz sacado una nota baja!`)

} else {

    console.log(`Lo siento haz suspensido,tu nota media es ${Nota_Media} ,te recomiendo reforzar mas el estudio`)
}