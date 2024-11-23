//Funções são ações
/*Função basica

function saudacao(){
    console.log(`Bom dia!`);
}
//para chamar uma função deve chama o nome dela + ()
saudacao('Luiz');

//*/

/*//Para atribuir dados variaveis dentro da função podemos colocar um parametro dentro do argumento () da função.

  Exemplo
  
  function saudacao(nome){
   console.log(`Bom dia! ${nome}`);
  }
 
 //*/

/*Retornando um valor  com a função

function saudacao(nome){        //adiciona um parametro como argumento
    return `Bom dia ${nome}!`;  //adiciona um retorno
}   

const variavel = saudacao('Maria')  // atribui a função saudacao a uma variavel
console.log(variavel)               //Exibe variavel
//*/

/*/Realizando um calculo com função
function soma(x, y ){       //recebe 2 valores
    const resultado = x+y;  //faz o calculo
    return resultado;
} 
let v1 = 10;                //atribuindo valores em variaveis para realizar a soma
let v2 = 10;
console.log(soma(v1,v2));     //exibe resultado com base no que foi passado 

// tudo que esta dentro da função é exclusiva dela, por exemplo: posso criar uma variavel e const com o mesmo nome do lado de fora

const resultado = soma(2,5);
console.log(resultado);
//*/

/*/Atribuindo um valor padrão pra caso nao passe nada no parametro
function soma(x=1, y=1 ){       //recebe 2 valores
    const resultado = x+y;  //faz o calculo
    return resultado;
} 
console.log(soma()); 
//*/

/*//Criando uma função dentro de uma variavel, chamado de função anonima

const raiz = function (n){           //Cria a variavel e atribui uma função que recebe um numero (Obrigatoriamente esse tipo de função deve conter ; pois é pra indicar que finaliza a variavel)
    return n ** 0.5;                //atribui retorno com o valor da raiz N que foi o parametro recebido com o calculo.
};

console.log(raiz(9));   
console.log(raiz(16));                //Exbe resultado da variavel com função.
//*/


/*//Maneira mais moderna de realizar função, chamada de => Arrow function, com ela podemos elimentar todos os parentes e chaves deixando mais clean o codigo
const raizArrow = n => n ** 0.5; //Aqui foi removido os Parenteses, return, e chaves e continua funcionando
console.log(raizArrow(9));
//*/