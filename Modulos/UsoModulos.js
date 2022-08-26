function calcularIva(cantidad) {
    let iva = cantidad * 0.21
    return iva
}

function calcularIrpf(cantidad) {
    let irpf = cantidad * 0.15
    return irpf
}

function calcularTotal(cantidad) {
    let retencionTotal = cantidad - (calcularIrpf(cantidad) - calcularIva(cantidad))
    return retencionTotal
}


export { calcularIva, calcularIrpf, calcularTotal } 