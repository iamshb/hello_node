var Calc = require('./util');

var calc = new Calc();
calc.emit('stop');

console.log('emit stop event to ' + Calc.title);