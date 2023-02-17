export function calcularPlanilla(cantidad, isr, igg, irtra) {
    let total1 = 0
    total1 = parseFloat(isr) + parseFloat(igg) + parseFloat(irtra)
    let total2 = 0
    total2 = parseFloat(cantidad) - total1
    let total3 = 0
    total3 = total2 + 250
    return [{
        Deducciones: total1,
        Resta: total2,
        Total: total3
    }]
}
