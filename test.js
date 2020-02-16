var Qty = require('./build/quantities').default;

console.log(Qty);

const q = Qty('10 kWh');
console.log(q.format());