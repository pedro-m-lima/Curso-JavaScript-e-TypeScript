
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
/*//
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

A = parseInt(0);
B = parseInt(0);
C = parseInt(7);
D = parseInt(8);

console.log(`DIFERENCA = ${(A*B)-(C*D)}`);
//*/

/*//  1008

let numFuncionario = parseInt(lines[0]);
let numHora = parseInt(lines[1]);
let valHora = parseFloat(lines[2]);

numFuncionario = parseInt(6);
numHora = parseInt(145);
valHora = parseFloat(15.55);

console.log(`NUMBER = ${numFuncionario}\nSALARY = U$ ${(numHora*valHora).toFixed(2)}`);

//*/

/*//  1009

let nome = (lines[0]);
let salario = parseFloat(lines[1]);
let totalVendas = parseFloat(lines[2]);

nome = 'JOAO';
salario = parseFloat(500.00);
totalVendas = parseFloat(1230.30);

console.log(`TOTAL = R$ ${(salario+(totalVendas*0.15)).toFixed(2)}`);

//*/

/*//  1010

let p1 = lines[0].split(' ');
let p2 = lines[1].split(' ');

p1 = "12 1 5.30".split(' ');
p2 = "16 2 5.10".split(' ');

console.log(`VALOR A PAGAR: R$ ${((parseFloat(p1[1]) *parseFloat(p1[2]))+(parseFloat(p2[1])*parseFloat(p2[2]))).toFixed(2)}`);

//*/

/*//  1011

let raio = parseFloat(lines[0]);

raio = 1523;

console.log(`VOLUME = ${((4/3.0)*3.14159*(raio ** 3)).toFixed(3)}`);

//*/

/*//  1012

let v1 = lines[0].split(' ');

v1 = "3.0 4.0 5.2".split(' ');

console.log(`TRIANGULO: ${(parseFloat(v1[0])*parseFloat(v1[2])/2).toFixed(3)}\nCIRCULO: ${(3.14159*parseFloat(v1[2])**2).toFixed(3)}\nTRAPEZIO: ${(((parseFloat(v1[0])+parseFloat(v1[1]))/2)*parseFloat(v1[2])).toFixed(3)}\nQUADRADO: ${(parseFloat(v1[1])**2).toFixed(3)}\nRETANGULO: ${(parseFloat(v1[0])*parseFloat(v1[1])).toFixed(3)}`);

//*/

/*//  1013

let num = lines[0].split(' ');

//num = "217 14 6".split(' ');
m1 = (((parseInt(num[0])) + (parseInt(num[1]))) + Math.abs(((parseInt(num[0])) - (parseInt(num[1])))))/2;

console.log(`${((m1 + (parseInt(num[2]))) + Math.abs((m1- (parseInt(num[2])))))/2} eh o maior`);

//*/

/*/  1014
let x = parseFloat(lines[0]);
let y = parseFloat(lines[1]);

x = parseFloat(2254);
y = parseFloat(124.4);

console.log(`MEDIA = ${(x/y).toFixed(3)}`);

//*/

//  1015
let p1 = lines[0].split(' ');
let p2 = lines[1].split(' ');

p1 = "1.0 7.0".split(' ');
p2 = "5.0 9.0".split(' ');

console.log(`${Math.sqrt(((parseFloat(p1[1])-parseFloat(p1[0]))**2)+(parseFloat(p2[1])-parseFloat(p2[0]))**2).toFixed(4)}`);

//*/