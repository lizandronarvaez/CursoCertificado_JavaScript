class MapTipos extends Map {

    constructor(tipoValor, claveValor, valores) {

        for (let [clave, valor] of valores) {

            if (typeof clave !== tipoValor || typeof valor !== claveValor) {

                throw new TypeError(`No se corresponde los valores ${clave},${valor}`);
            }
        }

        super(valores);
    }
}


export default MapTipos