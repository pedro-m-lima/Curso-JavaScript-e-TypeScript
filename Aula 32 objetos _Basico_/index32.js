/*//Criando um objeto
const pessoa1 = {
    nome: 'Luiz',        //O que esta dentro de {} são os atributos do objeto
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome) // acessando valores que estao dentro da pessoa1
console.log(pessoa1.sobrenome)
//*/

/*//Criando uma função que cria uma pessoa, utilizando essa função consigo criar varias pessoas apeas passando os parametros solicitados pela função
function criaPessoa (nome, sobrenome, idade){       // quando eu coloco variaveis dentro dos () da funçãoa chamo eles de parâmetros que receberão valores (argumentos)
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

//const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);   // Quando eu chamo a função e passo os valores, esses valores são chamados de argumentos.
const pessoa2 = criaPessoa('Ruan', 'Miranda', 20); 
const pessoa3 = criaPessoa('Pedro', 'Lima', 28); 
console.log(pessoa1)
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome) //Acessando valores dos objetos


///Para simplificar a function acima podemos minimizar a forma de passar as variaves dos retornos.
function criaPessoa_ (nome, sobrenome, idade){       // quando eu coloco variaveis dentro dos () da funçãoa chamo eles de parâmetros que receberão valores (argumentos)
    return{nome, sobrenome, idade}
}

const pessoa4 = criaPessoa_('Roberto', 'guimaraes', 30);
console.log(pessoa4)
//*/

/*// Criando métodos, os métodos são ações que o objeto pode realizar
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){ //Implementandao o método fala para este objeto
        console.log(`A minha idade atual é ${this.idade}.`); //Neste tipo de situação onde temos um método dentro do objeto, utilizamos o this para referencia a este ibjeto e buscar os atributos dele this.atributo.
    },

    incrementaIdade(){
        this.idade++;   //adicionar 1 na idade
    }
};
//Utilizando os métodos do objeto
pessoa1.fala();             //Chama metodo fala     (25)
pessoa1.incrementaIdade();  //Incrementa o atributo (26)
pessoa1.fala();             //(26)     
pessoa1.incrementaIdade();  //(27)
pessoa1.fala()              //(27)
//*/

