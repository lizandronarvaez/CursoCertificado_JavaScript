// const prompt=require('prompt-sync')()

// let Paises=[]
// let pais=0;

// do{
//     pais+=1
//     Paises[pais]=prompt('Introduce un pais: ')

// }while(Paises[pais] != null)

// for(let i of Paises){

//     if(i=="Espania" || i=="ESPANIA"|| i=="espania"){

//         console.log('España esta en la lista!')
//         break
//     }
// }

const ciudades = [['medellin', 'cali', 'bogota'], ['ciudad real', 'cuenca', 'albacete'], ['roma', 'venecia', 'sofia']]

bucleIndex: for (let i of ciudades) {

    for (let j of i) {

        if (j == 'bogota') {

            console.log(j+' encontrada')
            break bucleIndex
        }

        console.log(j)
    }
}
