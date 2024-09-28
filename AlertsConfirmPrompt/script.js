/**alert('mensagem!');

let confirma = confirm('deseja sair?');
console.log(confirma);

/**
 * exercicio
 * Solicite 2 numeros ao usuário faça a soma e exiba seu resultado
 */

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

console.log(num1, num2);

num1 = Number(num1);
num2 = Number(num2);
alert(`A soma dos número é: ${num1+num2}`);
//alert(`A soma dos número é: ${parseFloat(num1)+parseFloat(num2)}`);