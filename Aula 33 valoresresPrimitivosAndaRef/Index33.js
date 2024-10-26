/**
 * Valores primitivos (imutáveis) - string, number, boolean, undefined, 
 * null(bigint, symbol)
 * 
 * Valores por Referencia (Mutável) - Array, object, function
 */

let nome = 'luiz';  //Atribuindo valore para variavel nome
nome = 'Otávio'     //Aqui estamos trocando o dado e não mudando o tipo dele, por isso é um valor imutável
console.log

//outro exemplo de primitivos

let a = 'A';
let b = a; // aqui b esta recevendo o valor a

console.log(a, b);//Ao mostrar o resultado ambas possuem o mesmo

a = 'B'; //Porem se eu altero o valor de a, b ira manter o primeiro valor.
console.log(a,b);

//Aplicando o mesmo conceito com valores por referencia

let c = [0, 1, 2, 3];   //Aqui estou passando um array que é um tipo mutavel, ele armazena dados na memória
let d = c;              //Aqui declaro que d recebe o valor de c, ou seja ele tbm recebera o valor do array

console.log(c,d)        //Quando imprimo o resultado de c, d me retorna o mesmo array

c.push(4);              //Adiciono um novo valor no fim do array c
console.log(c,d)        //Quando exibo o valor de c e d ambos são o mesmo, pois p d recebe o valor referencia que foi alocado na memória

d.pop();                //Quando eu faço o mesmo para a variavel d, removendo o item inicial
console.log(c,d)        //continua mantendo o valor para ambos.

//caso queria fazer com que c seja independende de d porem d ele continue 
// continue montrando o valor de c 
//existe uma forma onde se passa dentro de um array reticendias e em seguida a variavel que sera exibida porem não esta alocada na mesma parte da memoria.
//dessa forma [...variavel]
let e = [0, 1, 2];      //Atribuo um novo array e
let f = [...e];         //aqui declaro que f vai conter o valor e porem e é independente
let g = f;              // g compartilha da mesma alocação de f

console.log(e,f);        //imprimindo resultado de e f, que dem ser o mesmo nesse intante

e.push(3);              //Adicionando umnovo valor em e
console.log(e,f);       //quando impromo novamente e f, agora apenas o array de e possui mais um numero no final, pois f é independente e exibe o valor que foi atribuido a ele na primeira vez apenas.

console.log(g);         //neste momento g deve conter apenas o valor de f sem consideerar o push de e

f.pop();                //quando faço uma alteração em f, essa não impacta o valor de e, visto que são spreads diferenes na memoria, impactando apenas no valor de g
console.log(e,f,g);       //Ao exibir e f g, e mantem o valor dele com 1 numero a mais, f g exibe seus valores com apenas 2 numeros

//também é possivel fazer isso para objetos, por exemplo

//dado que possuo um objeto com os atributos nome e sobrenome
const h = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
console.log(h)
//quando eu atribuo o valor de h para outra variavel, comparilhando da mesma refencia na memoria
const  i = h;

//então se eu alterar o valor de i.nome automaticamente estarei trocando o valor referente ao objeto h, fazendo que o mesmo perca seu valor anterior
i.nome = 'João';
console.log(i); //exibo o valor de i João que substituiu referencia h
console.log(h);  //h foi trocado de luiz para joão

//MAS se eu quiser manter o atributo intacto sem mexer na alocação dele, devo utilizar spread
const j = {...h} //aqui o valor esta como joão

//entao mesm que eu altere agora o valor de j, sera uma alteração apenas na variavel j mantendo o valor de h
j.nome = 'Romario'
console.log(j)
console.log(h)