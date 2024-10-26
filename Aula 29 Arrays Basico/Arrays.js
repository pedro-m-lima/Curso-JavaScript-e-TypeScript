//              0       1         2
const alunos = ['Luiz', 'Maria', 'Joao'];

console.log(alunos);//exibe array por completo
console.log(alunos[0]);//exibe posição especifica do array.

//Alterando um valor de uma determinada posição do array
alunos[0] = 'Eduardo'
console.log(alunos)
//*/

//Adicionando um aray no elemento
alunos[3] = 'Luiza'
console.log(alunos)

//Para saber o tamanho do array utilizar o length
console.log(alunos.length);
//Para adicionar um elemento no fim do array podemos outilizar tbm o length
alunos[alunos.length] = 'Fábio'; //Dessa forma ele pega o ultimo elemento e adicionar o novo no fim

//Uma outra forma de fazer é utilizar o push
alunos.push('Roberto'); //A função push coloca o argumento passado após o ultimo indice do array
console.log(alunos);

//Para colocar um elemento no inicio, possui uma função para realizar esta ação. chamada .unshift
alunos.unshift('Luiza');
console.log(alunos);

//PAra remover um elemento no fim utilizar a função pop

alunos.pop();
console.log(alunos);

//Também pode atribuir o resultado .pop dentro de uma variavel e exibir como removido e o normal sem remover

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

//Para remover do inicio utilizar a função shift
alunos.shift();
console.log(alunos);

//armazenando o resultado da remoção do inicio em uma variavel
const removeini = alunos.shift();
console.log(removeini);
console.log(alunos);

//Apagando um indice dentro do array

delete alunos[1];
console.log(alunos);
alunos[1] = 'Joao';

//Em java script é possivel apontar para um valor que nao existe dentro do array, por exemplo so tem 3 index posso acessar o 50 que nao existe
console.log(alunos[50])

//PAra fatiar um array utiliza a função slice

console.log(alunos.slice(0, 2))//tbm é possivel fatir com numero negativo slice(0,-1) o sistema vai remover o ultimo e ir até o ponto zero

//O array por padrão é um objeto
console.log(typeof alunos);
//Por isso ele a variavel é uma instancia de um array e dessa forma é possivel utilizar varios tipos de dados dentro do array, funções, number, string e etc
console.log(alunos instanceof Array);