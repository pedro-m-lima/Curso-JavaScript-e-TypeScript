
/*1001
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Agora você pode acessar cada linha da entrada usando lines[0], lines[1], etc.
// Por exemplo:
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

// Faça o processamento necessário com os valores lidos (A e B) e exiba a saída.

let X = A + B;
console.log(`X = ${X}`);
*/

/*1002
//let raio = parseFloat(lines[0]);

let raio = 2.00;
console.log(`A= ${((raio ** 2)*3.14159).toFixed(4)}`);

*/

//let A = parseInt(lines[0]);
//let B = parseInt(lines[1]);
/*
let A = 30;
let B = 0;

console.log(`SOMA = ${A+B}`);
*/

/** 
//let v1 = parseInt(lines[0]);
//let v2 = parseInt(lines[1]);

let v1 = parseInt();
let v2 = parseInt(10);

console.log(`PROD = ${v1*v2}`);

// */

/** 
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

A = parseFloat(10.0);
B = parseFloat(10.0);
//A=3.5
//B=7.5
//M=11.0

console.log(`MEDIA = ${(((A*3.5)+(B*7.5))/11).toFixed(5)}`);

//*/
/*
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

A = parseFloat(10.0);
B = parseFloat(10.0);
C = parseFloat(5.0);

console.log(`MEDIA = ${(((A*2)+(B*3)+(C*5))/10).toFixed(1)}`);
//*/

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

A = parseInt(0);
B = parseInt(0);
C = parseInt(7);
D = parseInt(8);

console.log(`DIFERENCA = ${(A*B)-(C*D)}`);