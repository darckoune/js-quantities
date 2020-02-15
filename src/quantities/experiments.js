import Qty  from "/home/la-mule/workspace/js-quantities/src/quantities";

const num1 = Qty("10000 kgₑCO₂/an")
const den1 = Qty("25 kgₑCO₂/m²*an");

console.log(num1.div(den1).format());


const energyCost = Qty("100 € / MWh");
const consumption = Qty("208 MWh/an");

console.log(energyCost.format());
console.log(consumption.format());

const yearlyCost = energyCost.mul(consumption);
console.log(yearlyCost.format());

console.log(consumption.numerator);

console.log(Qty("100 kWh").baseScalar);
console.log(Qty("MWh").baseScalar);

const converted = Qty("100 kWh").to("MWh");

console.log(converted.toPrec(0.001).format());

console.log(converted.scalar);

const main = Qty("100 kWh");
console.log(main.baseScalar);

const target = Qty("MWh");
console.log(target.baseScalar);


// TEST CONVERSION

const complexQty = Qty("100 MWh/m²*an");

console.log(complexQty.format());

console.log(complexQty.convertUnit("MWh", "Wh").toPrec(0.1).format());
