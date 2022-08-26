// CLASES ABSTRACTAS
// JavaScript reconoce poR DEFECTO el constructor de una clase si no se especifica
// Para utilizar una clase se debe instanciar el parametro new y asi llamar al constructor

class Persona {
    constructor() {
        if (this.constructor === Persona) throw new Error('No puedes llamar a esta clase')
    }
    habla() {
        throw new Error('Este metodo se sobrescribre en las subclases sino devolveria undefined')
    }
}

class Empleado extends Persona {
    habla() {
        return 'Soy. un Empleado'

    }
}

class Gerente extends Persona {
    habla() {
        return 'Hola, soy un Gerente'
    }
}

class Aprendiz extends Persona {
    habla() {
        return 'Hola, soy un trabajador en aprendizado!'
    }
}

let Empleado1 = new Empleado()
let Gerente1 = new Gerente()
let Novato = new Aprendiz()
let person1 = new Persona()

console.log(Empleado1.habla())
console.log(Gerente1.habla())
console.log(Novato.habla())
console.log(person1.habla())