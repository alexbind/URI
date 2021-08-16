const input = require('fs').readFileSync('stdin', 'utf8');

let qtdSegundos = parseInt(input);

let qtdHoras = parseInt(qtdSegundos  / 3600);
qtdSegundos = qtdSegundos % 3600;

let qtdMinutos = parseInt(qtdSegundos  / 60);
qtdSegundos = qtdSegundos % 60;

console.log(`${qtdHoras}:${qtdMinutos}:${qtdSegundos}`)