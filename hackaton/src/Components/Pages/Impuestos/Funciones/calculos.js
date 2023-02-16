export function calcularISR(cantidad) {
    console.log(cantidad)
    const bonificacionIncentivoAnual = 3000
    const gastosPersonales = 4000 * 12
    const iggs = 0.0483
    const isr5 = 0.05
    const isr7 = 0.07
    const isrMayor = 15000
    let salarioAnual = 0
    let rentaNetaAnual = 0
    let rentaImponibleAnual = 0
    let deducionesLeyAnual = 0
    let pagoIsrAnual = 0
    let excedente=0

    if (cantidad > 4000) {
        salarioAnual = cantidad * 12
        rentaNetaAnual = salarioAnual + bonificacionIncentivoAnual
        deducionesLeyAnual = gastosPersonales + (salarioAnual * iggs)
        rentaImponibleAnual = rentaNetaAnual - deducionesLeyAnual
        if(rentaImponibleAnual<300000){
            pagoIsrAnual=rentaImponibleAnual*isr5
            return [{SalarioAnual:salarioAnual,
                    NetaAnual:rentaNetaAnual,
                    DeduccionesLey:deducionesLeyAnual,
                    ImponibleANual:rentaImponibleAnual,
                    Porcentaje:isr5,
                    PagoIsr:pagoIsrAnual.toFixed(2)}]
        }else{
            excedente=rentaImponibleAnual-300000
            pagoIsrAnual=isrMayor+(excedente*isr7)
            return [{SalarioAnual:salarioAnual,
                NetaAnual:rentaNetaAnual,
                DeduccionesLey:deducionesLeyAnual,
                ImponibleANual:rentaImponibleAnual,
                Porcentaje:isr7,
                Excedente:excedente*isr7,
                PagoIsr:pagoIsrAnual}]
        }
        
    }else{
        return [{Error:"Solo se calcula y paga ISR salarios mayores a 4000"}]
    }

}