const prompt=require('prompt-sync')();
let num;

do{
    num=prompt('Introduce un numero positivo: ')
}while(num < 0)

console.log(`Bienvenido haz introducido el numero: ${num}`)