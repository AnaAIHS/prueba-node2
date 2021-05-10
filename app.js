let fs = require('fs');
//let moment = require('moment');

let datos = fs.readFileSync(__dirname + '/texto.txt', 'utf-8');

console.log(datos);

let heroes = require('./Aiuda');

console.log(heroes);
//console.log(moment().format('MMM Do YYYY'));