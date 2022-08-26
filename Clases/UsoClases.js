class Usuario {
    constructor(nombre, residencia, ocupacion) {
        this.nombre = nombre;
        this.residencia = residencia;
        this.ocupacion = ocupacion;
    }

    saludar() {
        return `Hola soy ${this.nombre}, vivo en ${this.residencia} y estudio ${this.ocupacion}`;
    }

    login() {
        return 'Estoy entrando a la pagina...Cargando..'
    }

    logOut() {
        return 'Estoy saliendo de la pagina...Cargando...'
    }

}

class Estudiante extends Usuario {

    constructor(curso, nombre, residencia, ocupacion) {
        super(nombre, residencia, ocupacion)
        this.curso = curso
    }

    estudia(materia) {
        return `Hola soy ${this.nombre},vivo en ${this.residencia} y estoy estudiando ${materia}`
    }

}
// Class Usuario
let Usuario1 = new Usuario('Lizandro', 'España', 'Desarrollo Backend');
let Usuario2 = new Usuario('Luis', 'Estados Unidos', 'Desarrollo Frontend');
let Usuario3 = new Usuario('Carlos', 'Italia', 'Full-Stack');

// Class Estudiate
let Estudiante1 = new Estudiante('Desarrollo Full-Stack', 'Roman', 'Ecuador', 'Ingeniero')

console.log(Estudiante1.ocupacion);