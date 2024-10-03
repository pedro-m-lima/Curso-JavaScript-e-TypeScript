let num1 = 9.54578;

//Para arredondarmos um valor para baixo podemos utilizar um metodo chamado floor, do objeto math.
let num2 = Math.floor(num1);
console.log(num2);

//Para arredordar o valor para cima utilizar .ceil
let num3 = Math.ceil(num1);
console.log(num3);

//para arredondar para o mais proximo é utilizado o metodo  .round
let num4 = Math.round(num1);
console.log(num4);

//pegando o maior (.max) ou menor (.min) numero numero dentro de uma sequencia
console.log(Math.max(1,2,3,4,5,-10,1500,9,8,6));
console.log(Math.min(1,2,3,4,5,-10,1500,9,8,6));

//Para gerar um numero aleatorio utiliza-se o metodo (.random())
console.log(Math.random());

//Para pegar um numero aleatorio dentro de uma determinada sequencia por exemplo um numero entre 5 a 10
const aleatorio = Math.round(Math.random() * (10-5)+5);
console.log(aleatorio);

//valor de pi
console.log(Math.PI);