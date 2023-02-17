export function calcularIrtra(cantidad) {
    const porcentaje = 0.01
    const cantidadAnual=cantidad*12
    let resultadoMensual = 0
    let resultadoAnual = 0
    if (cantidad === "Vacio") {
        return [{ Error: "Si", Msg: "Debe ingresar el valor del bien o servicio." }]
    } else {
        resultadoMensual=cantidad*porcentaje
        resultadoAnual=cantidadAnual*porcentaje
        return [{
            Porcentaje: porcentaje,
            CantidadMensual: cantidad,
            Mensual: resultadoMensual.toFixed(2),
            CantidadAnual: cantidadAnual,
            Anual: resultadoAnual.toFixed(2)
        }]
    }
}