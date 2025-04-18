let num1 = 1;       //number
let num2 = 2.5;     //number

/*
    //Com o método toString tornamos a variavel temporariamente como string
    console.log(num1.toString() + num2);
    //para converter para sempre necessário atribuir a string para a variavel:
    num1 = num1.toString();
    console.log(num1 + num2);
*/

let num3 = 10.517849;

//a função toFixed determina a quantidade de caractere das casas decimais
console.log(num3.toFixed(2));

//Para validar se um valor recebido de algum local é inteiro ou não, é utilizado a função Number.isInteger
console.log(Number.isInteger(num3));

//como validar se o calculo ficou como não definido NaN
let temp = num1*'Ola';
console.log(Number.isNaN(temp))

//possui uma certa imprecisão quando realizamos alguns calculos, por exemplo:

let num4 = 0.7;
let num5 = 0.1;

//Quando somamos esses dois numeros apresenta o seguinte resultado
console.log(num4+num5); //0.7999999

//Para que o calculo possa dar certo, temos utilizar a função nu,ber ou parseFloat 
num6 = num4+num5;
num6 = Number(num6.toFixed(2)); //dessa forma a conta fica exata
console.log(num6);

//ou podemos resolver com calculo

num6 = ((num4 * 100)+(num5 * 100)) /100;

console.log(num6);

//PAra pegar a raiz gradade um numero podemos utilizar o operador de potenciação como 0.5
let num7 = 25;
console.log(num7 ** 0.5)

////em java script pode dividir um numero por zero, em outras liguagens exibiria um erro. o ranorex retorna como verdadeiro e da o valor infinity
console.log(100 / 0);