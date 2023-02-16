export function calcularIUSI(cantidad) {
    const tasa = 0.002
    const tasa1 = 0.006
    const tasa2 = 0.009
    let valorIsui = 0

    if (cantidad === "Vacio") {
        return [{ Error: "Si", Msg: "Debe ingresar el valor del bien o servicio." }]
    } else {
        if (cantidad <= 2000) {
            return [{ Error: "Ntt", Msg: "Esta libre del pago de IUSI" }]
        } else if (cantidad <= 20000) {
            valorIsui = cantidad * tasa
            return [{
                TasaIusi: tasa,
                Condición: cantidad + "<=20000",
                Valoracion: cantidad,
                Total: valorIsui.toFixed(2)
            }]
        } else if (cantidad <= 70000) {
            valorIsui = cantidad * tasa1
            return [{
                TasaIusi: tasa1,
                Condición: cantidad + "<=70000",
                Valoracion: cantidad,
                Total: valorIsui.toFixed(2)
            }]
        } else {
            valorIsui = cantidad * tasa2
            return [{
                TasaIusi: tasa2,
                Condición: cantidad + ">70000.01",
                Valoracion: cantidad,
                Total: valorIsui.toFixed(2)
            }]
        }
    }
}