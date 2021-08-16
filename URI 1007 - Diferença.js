const input = require('fs').readFileSync('stdin', 'utf8');

const lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const C = parseInt(lines.shift());
const D = parseInt(lines.shift());

const DIFERENCA = A*B-C*D;

console.log("DIFERENCA = " + DIFERENCA); 