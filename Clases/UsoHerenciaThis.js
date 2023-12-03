class UsoArray extends Array {

    get Primero() {

        return this[0];
    }

    get Ultimo(){
        return this[this.length-1]
    }

}

let ArrayUno = new UsoArray()
ArrayUno.push('Carlos', 'Sandra', 'Lidia', 'Carmen')
console.log(ArrayUno.Primero)
console.log(ArrayUno.Ultimo)

