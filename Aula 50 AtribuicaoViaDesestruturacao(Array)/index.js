//atribuição via desestruturação de array

const numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000]; //declaração do array estreutrurado

const primeiroNumero = numeros[0]; //pegando apenas o primeiro numero padrão

console.log(primeiroNumero);

const [prinumero, segnumero] = numeros //desestruturando array, onde crio um array e atribuo as posições dentro de uma variavel 
console.log(prinumero, segnumero);

const [pNum, sNum, tNum, ...restante] = numeros //Aqui eu consigo pegar as 3 primeira posições e depois pego o restante utilizando o rest ... e atribuindo a variavel restante
console.log(pNum,sNum,tNum, restante) //ou seja restante é um array que contem todo o rest da variavel numeros

const [primeiro, ,terceiro, ,quinto, ,setimo] = numeros //Quando utilizando espaço eu pulo um espaço dentro do array
console.log(primeiro, terceiro, quinto, setimo)

//criando um array dentro de um array

const numeros2 = [ [1,2,3], [4,5,6] ]//Aqui possuimos 1 array com duas posições 0 e 1, onde cada posição possui um array com 3 numeros
console.log(numeros2[0], numeros2[1]);
