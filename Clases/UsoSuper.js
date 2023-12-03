class animal {
    constructor(tipoAnimal, patas) {
        this.tipoAnimal = tipoAnimal
        this.patas = patas

    }

    comer(alimento) {
        return `come ${alimento}`
    }

    caracteristicas() {
        return `tiene ${this.patas} patas, es un animal ${this.tipoAnimal}`
    }
}

class perro extends animal {

    constructor(tipoAnimal, patas, raza) {
        super(tipoAnimal, patas);
        this.raza = raza
    }

    comer() {
        return super.comer('pienso')
    }

    caracteristicas() {
        return `${super.caracteristicas()} y su raza es ${this.raza}`
    }
}

thor = new perro('domestico', 4, 'peligrosa')

console.log('Thor ' + thor.comer())
console.log('Thor ' + thor.caracteristicas())