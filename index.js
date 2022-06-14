// Sumador de Impuestos

let cantImpuestos = parseInt(prompt('Cuantas facturas tenes que pagar?'))
let importeTotal = 0

for (let i = 1; i <= cantImpuestos; i++){
    let importe = parseFloat(prompt(`Ingrese el importe de la factura n° ${i}`))
    importeTotal = parseFloat(importeTotal + importe)
}

let metodoPago = parseInt(prompt('Selecciona tu método de pago: \n 1. Efectivo (15% de dto.) \n 2. Tarj. Débito (10% de dto.) \n 3. Tarj. Crédito (5% de dto.)'))


switch(metodoPago){
    case 1:
        alert(`Seleccionaste pagar en efectivo con un 15% de descuento, tenes que pagar un total de $${importeTotal*0.85}`)
        break
    case 2:
        alert(`Seleccionaste pagar con tarjeta de débuto con un 10% de descuento, tenes que pagar un total de $${importeTotal*0.90}`)
        break
    case 3:
        alert(`Seleccionaste pagar con tarjeta de crédito con un 5% de descuento, tenes que pagar un total de $${importeTotal*0.95}`)
        break
    default:
        alert('Por favor selecciona un método de pago correcto.')
        break
}
