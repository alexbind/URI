const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const idFuncionary = lines.shift();
const qtdWorkedhours = lines.shift();
const hoursValue = lines.shift();

const salary = qtdWorkedhours * hoursValue;

console.log('NUMBER = ' + idFuncionary);
console.log('SALARY = U$ ' + salary.toFixed(2));