class Vehiculo {
    constructor(Marca, Modelo, Precio, Kms) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Precio = Precio;
        this.Kms = Kms
    }
    // Metodos get y set Marca
    get cambiarMarca() {
        return this.Marca
    }

    set(value) {
        this.Marca = value
    }

    // Get y set Modelo
    get cambiarModelo() {
        return this.Modelo
    }

    set(value) {
        this.Modelo = value
    }

    // Get y set Precio
    get nuevoPrecio() {
        return this.Precio
    }

    set(value) {
        this.nuevoPrecio
    }

    // Get y Set KMS
    get establecerkms() {
        return this.Kms
    }

    set(value) {
        this.Kms = value
    }
    // Metodo Obtener marca y modelo

    marcaModelo() {
        return `${this.Marca} ${this.Modelo}`
    }
}

class Furgoneta extends Vehiculo {
    constructor(Marca, Modelo, Precio, Kms, Carga) {
        super(Marca, Modelo, Precio, Kms)
        this.Carga = Carga
    }

    get CargaMax(){
        return this.Carga
    }
    set(value){
        this.Carga=value
    }

    VentaFurgoneta(){
        return `Esta furgoneta es una ${super.marcaModelo()} y su carga maxima es de ${this.Carga} KG`
    }
}


let Vehiculo1 = new Vehiculo('Ford', 'Focus', 25000, 9000)

let miFurgoneta=new Furgoneta('Fiat','Doblo',30000,0,8000)
miFurgoneta.set(10000)
console.log(Vehiculo1.marcaModelo())
console.log(miFurgoneta.VentaFurgoneta())
