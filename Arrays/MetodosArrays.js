// M E T O D O------ M A P 

let refrescos = ['Cocacola', 'Fanta', 'Sprite', 'Gaseosa', 'Agua']

function refrescos_con_gas(gas) {
    return gas + ' con gas'
}

// console.table(refrescos.map(refrescos_con_gas))
// console.log(refrescos)

// M E T O D O --------F I L T E R

const edades = [17, 14, 15, 18, 35, 42, 65, 60, 91, 67]

// function EdadLaboral(edad){
//     if(edad >= 18 && edad <= 67) return edad
// }

const EdadTrabajo = edades.filter(EdadLaboral => EdadLaboral >= 18 && EdadLaboral <= 67)

console.table(EdadTrabajo)