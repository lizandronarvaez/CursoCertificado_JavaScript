const prompt = require('prompt-sync')()

let mail = prompt('Introduce un correo electronico: ');
let arroba = false;

for (let i of mail) {

    if (i == "@") {
        arroba = true
        console.log('encontrado!')
        break
    }
}
if (arroba) {
    console.log('El correo es valido!')
} else {
    console.log('El correo no es valido!')
}
