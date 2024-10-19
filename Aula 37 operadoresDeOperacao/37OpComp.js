/**
 * Operadores de comparação
 * 
 * > Maior que
 * >= Maior que ou igual a
 * < menor que
 * <= menor que ou igual a
 * == igualdade (valor) *****
 * === igualdade estrita (valor e tipo)
 * != difernte (valor) *****
 * !== diferente estrito (valor e tipo)
 */

let nComp =5
console.log(10 > nComp); //verifica se um numero é maior que o outro

console.log(10>= 9) //maior = true
console.log(10>=10) //igual = true
console.log(10>=11) //menor = false

console.log(10<11) //10 é menor que 11? = true
console.log(10<=11) //10 é menor ou igual a 11? = true
console.log(10<=10) //10 é menor ou igual a 10? = true
console.log(10<= 9) //10 é menor ou igual a 9?  = false

//GEralmente o == não é recomendavel utilizar, pois pode acontecer do mecanicmos do js converter o tipo de variasvel e dar resultado true sendo que é false
//exemplo: se possuir uma variavel num num1 = 10 e uma strng num2 = '10' (num1==num2)
//o mecanismo vai automaticamente trasnformar a string em number para comparar o valor
//dando um resultado true, sendo que 10 number náo pe igual a 10 string, 
//a mesma situação acontece para !=
console.log(10==10); //10 é igual a 10? true
console.log(10==9);  //10 é igual a 9?  false
console.log(10!=10); //10 é diferente de 10? false
console.log(10!= 9); //10 é diferente de 9? true

let n1 = '10';
let n2 = '9';
let n3 = 10;
let n4 = 9;
console.log(10===n1); //10 é estritamente igual a string 10?  false
console.log(10===n2);  //10 é estritamente igual a string 9? false
console.log(10===n3); //10 é estritamente igual a number 10? true
console.log(10===n4);  //10 é estritamente igual a number 9? false
console.log(10!==n1); //10 é estritamente igual a string 10? a true
console.log(10!==n2); //10 é estritamente igual a string  9? true
console.log(10!==n3); //10 é estritamente igual a number 10? false
console.log(10!==n4); //10 é estritamente igual a number  9? true
