const input = require('fs').readFileSync('stdin', 'utf8');

const [tempoGasto, velocidadeMedia] = input.split('\n')

const totalPercorrido = tempoGasto * velocidadeMedia;

const qtdCombustivel = totalPercorrido / 12;

console.log(qtdCombustivel .toFixed(3))