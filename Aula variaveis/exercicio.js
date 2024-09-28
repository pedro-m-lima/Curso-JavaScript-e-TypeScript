/*
Luiz Otavio Miranda tem 30 anos. pesa 84 kg
tem 1.8 de altura e seu imc é de 25.955925925925924
*/

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda'
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso/(altura*altura);
let anoNascimento = 2024-idade;

console.log(nome, sobrenome ,'tem',idade,' anos, pesa',84,' kg');
console.log('tem',altura,' de altura e seu imc é de',imc);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu imc é de ${imc}`);
