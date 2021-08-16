const input = require('fs').readFileSync('stdin', 'utf8');

const [distanciaPercurida, combustivelGasto] = input.split('\n')

const consumoMedio = distanciaPercurida / combustivelGasto;

console.log(consumoMedio.toFixed(3) + ' km/l');