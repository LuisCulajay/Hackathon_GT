export function calcularIVA(cantidad) {
    console.log("quiero ver que tiene " + cantidad.toString())
    if (cantidad === "Vacio") {
        return [{ Error: "Si", Msg: "Debe ingresar el valor del bien o servicio." }]
    } else {
        const porcentajeIva = 0.12
        const valorIVA = cantidad * porcentajeIva
        let pagoIVA = cantidad + valorIVA
        return [{
            PorcentajeIva: porcentajeIva,
            SinImpuesto: cantidad,
            Impuesto: valorIVA,
            Total: pagoIVA.toFixed(2)
        }]
    }

}