const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const infoItem1 = lines.shift().split(' ')
const infoItem2 = lines.shift().split(' ')

const idItem1 = infoItem1.shift()
const qtdItem1 = infoItem1.shift()
const valorUnitarioItem1 = infoItem1.shift()
const valorTotalItem1 = qtdItem1 * valorUnitarioItem1

const idItem2 = infoItem2.shift()
const qtdItem2 = infoItem2.shift()
const valorUnitarioItem2 = infoItem2.shift()
const valorTotalItem2 = qtdItem2 * valorUnitarioItem2

const valorTotalCompra = valorTotalItem1 + valorTotalItem2

console.log('VALOR A PAGAR: R$ ' + valorTotalCompra.toFixed(2))