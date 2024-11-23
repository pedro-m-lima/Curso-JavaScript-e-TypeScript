/**
 * Aritiméticos
 * A ordem abaixo é a ordem de prioridade para 
 * execução dos calculos:
 *  () Prioriza sentença
 * ** Potenciação
 *  * Multiplicação; / Divisão; % Resto da divisão
 *  + Adição/Concatenação; - Subtração
 * 
 * Incrementos : Para incremetandor sempre usar a variavel let, pois ele será um 
 * valor que pode ser alterado:
 *  ++ Adiciona mais 1 no valor
 *  -- Dminui 1 no valor
 * 
 * Operadores de atribuição (variavel = variavel (qualquer operador) variavel ou valor)
 * *=
 * +=
 * 
 */

//Exemplos Aritiméticos
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);
console.log(num2 ** num1)
console.log(num3%(num1+num2));

//Exemplo Incrementador
console.log("Exemplo incrementador");
let contador = 10;
console.log(contador ++);
console.log(++ contador);
console.log(contador --);
console.log(-- contador);
contador ++;
console.log(contador);
contador --;

//Exemplo operadores de atribuição
let cont = 2;
cont *=10;
console.log(cont)

//Nan - essa sigla significa not a number, isso acontece quando não foi possivel realizar a solução para a requisição solicitada.
//exemplo que daria problema
//const numero1 = 10;
//const texto1 = 'texto';
//console.log(numero1+texto1);

//convertendo numeros - parseInt, parseFloat.

const n1 = 10;
const n2 = '5';
console.log('Comportamento do javaScript tentando somar number+string',n1+n2);
// utilizando o parseint para converter de string para number
console.log('tipo da variavel n2 antes de converter',typeof n2);
const n3 = parseInt(n2);
console.log('variavel apos converter para number', typeof n2);
//para converter direto na variavel ficaria: const n2 = parseint('5')
console.log('Valor convertido com parseint',n1+n3);

// caso tente converter um numero com casa decimal
// utilizando parseInt, o controlador vai automaticamene remover as casas decimais
//exemplo:

let texto3 = parseInt('5.2');
console.log('tentador converter numero com casa decimal utilizando parse int',texto3);

texto3 = parseFloat('5.2');
console.log(texto3)
