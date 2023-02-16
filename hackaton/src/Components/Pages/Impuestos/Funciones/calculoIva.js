export function calcularIVA(cantidad) {
    if (cantidad === undefined || cantidad === "") {
        const porcentajeIva = 0.12
        const valorIVA = cantidad * porcentajeIva
        let pagoIVA = cantidad + valorIVA
        return [{PorcentajeIva:porcentajeIva,
            SinImpuesto:cantidad,
            Impuesto:valorIVA,
            Total:pagoIVA.toFixed(2)}]
    }else{
        return [{Error:"Si",Msg:"Debe ingresar el valor del bien o servicio."}]
    }

}