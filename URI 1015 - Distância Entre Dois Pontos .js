const input = require('fs').readFileSync('stdin', 'utf8');

const valores = input.split('\n');

const [x1, y1] = valores[0].split(' ');
const [x2, y2] = valores[1].split(' ');

const distancia = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

console.log(distancia.toFixed(4));