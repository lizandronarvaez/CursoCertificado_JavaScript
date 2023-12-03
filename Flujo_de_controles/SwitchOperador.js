const PROMPT=require('prompt-sync')();

let notaExamen=PROMPT("Introduce la nota final para evaluar tu examen: ");

switch(true){
    case notaExamen < 4:
        console.log("Haz suspendido, estudia mas");
        break
    case notaExamen < 7:
        console.log("Haz obtenido un suficiente");
        break
    case notaExamen < 10:
        console.log("Haz obtenido un sobresaliente,felicidades!");
        break
    default:
        console.log("Introduce una nota de tu examen");
}