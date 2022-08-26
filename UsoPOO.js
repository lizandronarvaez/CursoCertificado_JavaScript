// HAY 3 FORMAS DE CREAR OBJETOS EN JAVASCRIPT

// Esta es la primera forma mas simplificada

let datosCompra={
    fechaCompra:'12/10/2021',
    formaDePago:'tarjeta',
    pagoFinanciado:{
        financiadoSi:'El pago esta financiado',
        financiadoNo:'El pago no esta financiado'
    },
    toString:function(){
        return `Este telefono se compro el ${this.fechaCompra} y el telefono fue pagado con ${this.formaDePago}, por lo tanto el ${this.pagoFinanciado.financiadoNo}`
    }
}
let TelefonoMovil={
    altura:'150 cm',
    ancho:'25 cm',
    peso:'150 gr',
    tamañoPantalla:'150 px',
    datos:datosCompra,
}

let TelefonoNuevo={
    colorTelefono:'Rojo'
}
TelefonoMovil.altura='300 cm'
TelefonoMovil.capacidadGb='256 Gb'

// delete TelefonoMovil.fechaCompra 
// delete TelefonoMovil.capacidadGb

let movil=JSON.stringify(Object.assign(TelefonoNuevo,datosCompra)) //Copiar objetos de uno  a otro

let telefono=JSON.parse(movil)
// console.table(movil)
// console.table(telefono)
console.table(datosCompra.toString())


// Esta es la segunda forma
let my_Array=new Object();

// Esta es la tercera forma
let coche=Object.create({
    marca:'nissan',
    modelo:'qashqai',
    potenciaCV:163
})

// console.table(typeof TelefonoMovil)