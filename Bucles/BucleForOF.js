const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']

for (const mes of meses) {

    let min = mes.toLowerCase().includes('a' || 'o')
    // const date=new Date()
    // const day=date.getDate()
    // console.log(day +" "+ mes + " 2022")
    // console.log(mes+" tiene incluido la vocal 'a' y 'o' ? "+ min)
}

// const array = [[3, 1, 2], [6, 4, 5], [9, 7, 8], [12, 10, 11]]

// for (let arr of array) {

//     for (let item of arr) {
//         console.log(arr, item)
//     }
// }
// console.log(array[0][1] +" + "+ array[1][2])

const email="lizandrojesus13@hotmail.com";

for(item of email){

    if(email.includes("@")){
        console.log("El correo es valido!")
        break
    }else{
        console.log("El correo no es valido, debe incluir su formato '@'!")
        break
    }
}
