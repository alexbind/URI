const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const nome = lines.shift();
const salarioFixo = parseFloat(lines.shift());
const totalVendas = parseFloat(lines.shift());

const comissao = totalVendas * 0.15;

const salarioFinal = salarioFixo + comissao

console.log('TOTAL = R$ ' + salarioFinal.toFixed(2));