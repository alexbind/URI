const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const raio = parseFloat(input)
const PI = 3.14159

const volumeEsfera = (4/3) * PI * Math.pow(raio, 3)

console.log('VOLUME = ' + volumeEsfera.toFixed(3))